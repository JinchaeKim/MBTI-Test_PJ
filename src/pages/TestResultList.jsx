import { useContext, useEffect, useState } from "react";
import { getTestResults, updateTestResultVisibility } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { AuthContext } from "../context/AuthContext";

const TestResultList = () => {
  const [cards, setCards] = useState([]);
  const [isVisibility, setIsVisibility] = useState(false);
  const { userInfo } = useContext(AuthContext);

  // DB에서 공개 여부 변경하기
  useEffect(() => {
    const changeData = async () => {
      const info = await updateTestResultVisibility();
      setIsVisibility(info);
    };
    changeData();
  });

  // DB에서 값 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestResults();
      setCards(data);
    };

    // data의 visibility로 조건부 렌더링

    fetchData();
  }, []);
  console.log("cards", cards);

  // 작성자 글에만 버튼 표시하기
  // const isOwner = cards.some((card) => {
  //   return card.id === userInfo.id;
  // });
  // console.log("isOwner", isOwner);

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:w-[70%] w-[90%]">
      <div className="mt-[60px] mb-[30px] text-[27px] font-extrabold text-[#8ca147]">
        다른 사람들의 MBTI도 궁금해 !
      </div>
      {cards.map((card) => {
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

                {/* 작성자에게만 버튼 표시 */}
                {isOwner && (
                  <div className="flex justify-end gap-3 mt-3 mr-5">
                    {isVisibility ? (
                      <button className="px-[20px] py-[8px] text-white bg-blue-500 rounded-full hover:bg-opacity-0 hover:text-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 font-semibold hover:bg-primary-dark transition duration-300">
                        비공개로 전환
                      </button>
                    ) : (
                      <button className="px-[20px] py-[8px] text-white bg-blue-500 rounded-full hover:bg-opacity-0 hover:text-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 font-semibold hover:bg-primary-dark transition duration-300">
                        공개로 전환
                      </button>
                    )}
                    <button className="px-[20px] py-[8px] text-white bg-red-500 rounded-full hover:bg-opacity-0 hover:text-red-500 focus:outline-2 focus:outline-offset-2 focus:outline-red-400 font-semibold hover:bg-primary-dark transition duration-300">
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
