import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultList = () => {
  const [cards, setCards] = useState([]);
  // DB에서 값 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestResults();
      setCards(data);
    };
    fetchData();
  }, []);

  console.log("cards", cards);
  return (
    <div className="flex flex-col items-center justify-center mx-auto md:w-[70%] w-[90%]">
      <div className="mt-[60px] mb-[30px] text-[27px] font-extrabold text-[#8ca147]">
        다른 사람들의 MBTI도 궁금해 !
      </div>
      {cards.map((card) => (
        <div key={card.id} className="w-[95%] m-[15px] bg-[#474E93] rounded-lg">
          <div className="p-[20px]">
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
            </div>
            <div className="flex justify-end gap-3">
              <button className="px-[20px] py-[8px] text-white bg-blue-500 rounded-full">
                비공개로 전환
              </button>
              <button className="px-[20px] py-[8px] text-white bg-red-500 rounded-full">
                삭제
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestResultList;
