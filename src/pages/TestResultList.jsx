import { useContext } from "react";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { AuthContext } from "../context/AuthContext";
import { getUserProfile } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TestResultList = () => {
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // userInfo 가져오기 : isOwner에 필요
  const {
    data: userInfo = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["fetchUserInfo", token], //token이 바뀌면 querykey도 바뀌기 때문에 새로둔 데이터를 자동으로 불러옴
    queryFn: () => getUserProfile(token),
  });

  // DB: 결과값 가져오기
  const {
    data: cards = [],
    isPending: isCardsPending,
    isError: isCardsError,
  } = useQuery({
    queryKey: ["fetchTestData"],
    queryFn: getTestResults,
  });

  // 공개 비공개 전환 - mutation
  const updateVisibilityMutation = useMutation({
    mutationFn: ({ id, visibility }) =>
      updateTestResultVisibility(id, visibility),
    onSuccess: () => {
      queryClient.invalidateQueries(["fetchTestData"]);
    },
  });

  // 공개 비공개 전환 - handler
  const handleVisibility = (card) => {
    updateVisibilityMutation.mutate({
      id: card.id,
      visibility: !card.visibility,
    });
  };

  // 공개 비공개 리스트 filter -> 카드 그리는 map에 사용
  const viewCards = cards.filter((card) => {
    return card.visibility || card.userId === userInfo.id;
  });

  // 카드 삭제 - mutation
  const deleteCardMutation = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["fetchTestData"]);
    },
  });

  // 카드 삭제 - handler
  const deleteCard = (cardId) => {
    deleteCardMutation.mutate(cardId);
  };

  if (isPending || isCardsPending) {
    return <div>정보 가져오는 중...</div>;
  }

  if (isError || isCardsError) {
    return <div>에러가 발생했습니다.</div>;
  }

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
                    <button
                      onClick={() => handleVisibility(card)}
                      className="px-[20px] py-[8px] text-white bg-blue-500 rounded-full hover:bg-opacity-0 hover:text-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 font-semibold hover:bg-primary-dark transition duration-300"
                    >
                      {card.visibility ? "나만보기" : "공개하기"}
                    </button>
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
