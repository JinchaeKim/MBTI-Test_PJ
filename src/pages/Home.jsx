import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center mt-[90px] mb-5 text-[40px] font-bold">
        What is my&nbsp;<span className="text-violet-700">MBTI?</span>
      </div>
      <div className="flex justify-center text-[17px]">
        <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10 my-12">
        <div className="p-7 bg-violet-50 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <p className="text-[20px] font-normal">성격 유형 검사</p>
          <p className="p-5">
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className="p-7 h-30 bg-violet-50 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <p className="text-[20px] font-normal">성격 유형 이해</p>
          <p className="p-5">
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className="p-7 h-30 bg-violet-50 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <p className="text-[20px] font-normal">팀 평가</p>
          <p className="p-5">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>
      <Link to={"/test"}>
        <button
          type="button"
          className="flex justify-center px-8 py-2 mx-auto mt-10 bg-violet-400 text-white rounded-full hover:bg-opacity-0 hover:text-violet-500 focus:outline-2 focus:outline-offset-2 focus:outline-violet-400 font-semibold hover:bg-primary-dark transition duration-300"
        >
          내 성격 유형 알아보기
        </button>
      </Link>
    </>
  );
};

export default Home;
