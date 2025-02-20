const Home = () => {
  return (
    <>
      <div className="flex justify-center mt-12 mb-5 text-[40px] font-bold">
        무료 성격 테스트
      </div>
      <div className="flex justify-center text-[17px]">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </div>
      <div className="flex m-5">
        <div className="p-5 m-7 h-30 w-1/3 bg-violet-50 rounded-lg shadow-lg">
          <p className="text-[20px] font-normal">성격 유형 검사</p>
          <p className="p-5">
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className="p-5 m-7 h-30 w-1/3 bg-violet-50 rounded-lg shadow-lg">
          <p className="text-[20px] font-normal">성격 유형 이해</p>
          <p className="p-5">
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className="p-5 m-7 h-30 w-1/3 bg-violet-50 rounded-lg shadow-lg">
          <p className="text-[20px] font-normal">팀 평가</p>
          <p className="p-5">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>
      <button className="flex justify-center px-7 py-2 mx-auto bg-violet-400 text-white rounded-full hover:bg-opacity-0 hover:text-violet-500 focus:outline-2 focus:outline-offset-2 focus:outline-violet-400 active:bg-violet-400">
        내 성격 유형 알아보기
      </button>
    </>
  );
};

export default Home;
