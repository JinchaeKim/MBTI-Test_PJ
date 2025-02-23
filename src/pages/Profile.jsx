import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getUserProfile, updateProfile } from "../api/auth";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    nickname: "",
    avatar: null,
    success: true,
  });
  const [newNickName, setNewNickName] = useState("");
  const { isAuthenticated, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      const fetchUserInfo = async () => {
        try {
          const data = await getUserProfile(token);
          console.log("data", data);
          setUserInfo({
            id: data.id,
            nickname: data.nickname,
          });
        } catch (error) {
          console.log("Faild to fetch user info", error);
        }
      };
      fetchUserInfo();
    }
  }, []);
  console.log("userInfo", userInfo);

  const handleNickNameChange = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nickname", newNickName);
      const data = await updateProfile(token, formData);
      if (data.success) {
        setUserInfo((prev) => ({
          ...prev,
          nickname: data.nickname,
        }));
        alert("닉네임이 변경되었습니다.");
        setUserInfo({ ...userInfo, nickname: newNickName });
        setNewNickName("");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to update nickname", error);
      alert(error.response.data.message);
    }
  };
  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={handleNickNameChange}
      className="flex mt-10 justify-center items-center"
    >
      <div className="p-5 mz-7 h-[350px] w-[500px] bg-gray-50 rounded-lg shadow-xl">
        <p className="p-5 font-medium text-[30px]">프로필 수정</p>
        <div className="p-5 mx-auto w-[450px] bg-gray-200 rounded-lg">
          <p className="px-3">현재 닉네임 : {userInfo.nickname}</p>
          <input
            type="text"
            value={newNickName}
            onChange={(e) => setNewNickName(e.target.value)}
            className="p-3 m-4 w-[360px] rounded-md"
          />
          <button
            type="submit"
            className="p-3 m-4 w-[360px] text-white bg-violet-400 rounded-md hover:bg-violet-300"
          >
            프로필 업데이트
          </button>
        </div>
      </div>
    </form>
  );
};
export default Profile;
