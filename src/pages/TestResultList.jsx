import { useContext, useEffect, useState } from "react";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { AuthContext } from "../context/AuthContext";
import { getUserProfile } from "../api/auth";

const TestResultList = () => {
  const [cards, setCards] = useState([]);
  const [isVisibility, setIsVisibility] = useState(false);
  const { userInfo, setUserInfo, token } = useContext(AuthContext);

  // userInfo 가져오기 : isOwner에 필요
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserProfile(token);

        setUserInfo({
          id: data.id,
          nickname: data.nickname,
        });
      } catch (error) {
        console.log("Faild to fetch user info", error);
      }
    };
    fetchUserInfo();
  }, []);

  // DB: 결과값 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTestResults();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [isVisibility]);

  // 공개 비공개 전환
  const handleVisibility = async (card) => {
    await updateTestResultVisibility(card.id, !card.visibility);
    setIsVisibility(!isVisibility);
  };

  // 공개 비공개 리스트 filter -> 카드 그리는 map에 사용
  const viewCards = cards.filter((card) => {
    return card.visibility || card.userId === userInfo.id;
  });

  // 카드 삭제
  const deleteCard = (cardId) => {
    const alertResult = window.confirm("정말 삭제하시겠습니까?");
    if (alertResult === true) {
      deleteTestResult(cardId);
      setIsVisibility(!isVisibility);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:w-[70%] w-[90%]">
      {cards.length === 0 ? (
        <div className="text-center mt-[80px] mb-[30px]  text-[23px] text-[#475da1]">
          아직 공유된 검사 결과가 없습니다. <br />
          가장 먼저 mbti 검사 결과를 공유하세요 !
        </div>
      ) : (
        <div className="mt-[60px] mb-[30px] text-[27px] font-bold text-[#4b86cd]">
          다른 사람들의 MBTI도 궁금해 !
        </div>
      )}
      {viewCards.map((card) => {
        const isOwner = card.userId === userInfo.id; // 개별 카드 기준으로 작성자 확인
        return (
          <div
            key={card.id}
            className="w-[95%] m-[15px] bg-[#474E93] rounded-lg"
          >
            <div className="p-[20px] shadow-lg">
              <div className="flex flex-col justify-between md:flex-row p-2 border-b-[1px]">
                <div className="text-[20px] font-bold text-violet-200">
                  {card.nickname}
                </div>
                <p className="font-light text-violet-200">{card.date}</p>
              </div>
              <div className="py-2">
                <div className="p-2 text-[30px] text-[#fcff97] font-extrabold">
                  {card.result}
                </div>
                <div className="font-light text-violet-200">
                  {mbtiDescriptions[card.result]}
                </div>

                {/* 카드에 있는 visibility로 작성자에게만 버튼 표시 */}
                {isOwner && (
                  <div className="flex justify-end gap-3 mt-3 mr-5">
                    {card.visibility ? (
                      <button
                        onClick={() => handleVisibility(card)}
                        className="px-[20px] py-[8px] text-white bg-blue-500 rounded-full hover:bg-opacity-0 hover:text-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 font-semibold hover:bg-primary-dark transition duration-300"
                      >
                        나만보기
                      </button>
                    ) : (
                      <button
                        onClick={() => handleVisibility(card)}
                        className="px-[20px] py-[8px] text-white bg-blue-500 rounded-full hover:bg-opacity-0 hover:text-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 font-semibold hover:bg-primary-dark transition duration-300"
                      >
                        공개하기
                      </button>
                    )}
                    <button
                      onClick={() => deleteCard(card.id)}
                      className="px-[20px] py-[8px] text-white bg-red-500 rounded-full hover:bg-opacity-0 hover:text-red-500 focus:outline-2 focus:outline-offset-2 focus:outline-red-400 font-semibold hover:bg-primary-dark transition duration-300"
                    >
                      삭제
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestResultList;
