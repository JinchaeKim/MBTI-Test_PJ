import { useContext, useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";
import { createTestResult } from "../api/testResults";
import { AuthContext } from "../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const { userInfo } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // createTestResult
  const mutation = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["fetchTestData"]);
    },
  });

  // TestForm에서 사용
  const handleTestSubmit = async (answers) => {
    const now = new Date();
    const formattedDate = now.toLocaleString("ko-KR");
    const mbtiResult = calculateMBTI(answers); //MBTI 유형
    setResult(mbtiResult);

    mutation.mutate({
      nickname: userInfo.nickname,
      result: mbtiResult,
      visibility: false,
      date: formattedDate,
      userId: userInfo.id,
    });
  };

  // 제출 후 결과페이지 이동
  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="rounded-lg">
        {!result ? (
          <>
            <div className="flex flex-col items-center mt-[70px] mb-[30px] text-[35px] text-violet-700 font-bold">
              MBTI TEST
            </div>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <div className="flex flex-col items-center p-[40px] mt-[60px] w-[750px] bg-stone-100">
            <h1 className="text-3xl font-bold text-primary-color my-6">
              테스트 결과:<span className="text-violet-700"> {result}</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="flex flex-col items-center px-[130px] py-[10px] m-5 bg-violet-400 text-white rounded-full hover:bg-opacity-0 hover:text-violet-500 focus:outline-2 focus:outline-offset-2 focus:outline-violet-400 font-semibold hover:bg-primary-dark transition duration-300"
            >
              결과 페이지로 이동하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
