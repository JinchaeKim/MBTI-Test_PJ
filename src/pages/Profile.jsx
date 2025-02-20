const Profile = () => {
  return (
    <form className="flex mt-10 justify-center items-center">
      <div className="p-5 mz-7 h-[350px] w-[500px] bg-gray-50 rounded-lg shadow-xl">
        <p className="p-5 font-medium text-[30px]">프로필 수정</p>
        <div className="p-5 mx-auto w-[450px] bg-gray-200 rounded-lg">
          <p className="px-3">닉네임</p>
          <input className="p-3 m-4 w-[360px] rounded-md" />
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
