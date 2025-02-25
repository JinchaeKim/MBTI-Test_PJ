# MBTI Test README

### React 심화 개인 과제 \_ MBTI Test 만들기

- 배포 링크 : https://mbti-test-pj.vercel.app/

<br />
<br />

## 🖥️ 프로젝트 소개

- MBTI 성격 유형 테스트를 진행하고 다른 사람들의 결과를 볼 수 있는 페이지입니다.

<img src="/public/MBTI-Test-Home.png">

- **회원가입/로그인, 프로필 관리, 테스트 결과 저장** 기능을 활용하여 페이지를 구현하였습니다.
- **JWT인증과 REST API 통신**으로 회원정보를 관리합니다.
- **Axios**를 활용하여 비동기 데이터를 관리합니다.
- **json-server**를 사용해 로컬 환경에서 API를 구축합니다.

<br />
<br />

## 🕰️ 개발 기간

2025 / 02 / 20 ~ 2025 / 02 / 25

<br />
<br />

## ⚙️ 개발 환경

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<br />
<br />

## 📌 주요 기능

✔️ Home : 사용자가 웹사이트의 기본 정보를 얻고, 로그인 페이지로 이동할 수 있도록 안내합니다.

✔️ Login : 사용자가 자신의 계정으로 로그인할 수 있도록 합니다.

✔️ Signup : 새로운 사용자가 계정을 생성할 수 있도록 합니다.

✔️ Profile : 사용자가 자신의 프로필 정보를 확인하고 수정할 수 있도록 합니다.

✔️ Test : MBTI 테스트를 진행합니다. 모든 항목에 답해야 결과를 확인할 수 있습니다.

✔️ TestResult : 사용자의 테스트 결과를 보여줍니다.

✔️ TestResultList : 다른 사용자의 테스트 결과를 확인할 수 있습니다. <br />
사용자는 자신의 결과를 공개 / 비공개 / 삭제 처리할 수 있으며 다른 사용자의 화면에도 적용됩니다.

<br />
<br />

## 🚨 트러블슈팅

- Tailwind 공통 컴포넌트 스타일링 : https://coco910.tistory.com/91
- JWT 인증 API 연결 : https://coco910.tistory.com/92
- Visibility, isOwner : https://coco910.tistory.com/93

<br />
<br />

## 📁 MBTI Test 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ auth.js
 ┃ ┗ testResults.js
 ┣ 📂components
 ┃ ┣ AuthForm.jsx
 ┃ ┣ LogoutBtn.jsx
 ┃ ┣ Navigation.jsx
 ┃ ┗ TestForm.jsx
 ┣ 📂context
 ┃ ┗ AuthContext.jsx
 ┣ 📂data
 ┃ ┗ questions.js
 ┣ 📂pages
 ┃ ┣ Home.jsx
 ┃ ┣ Login.jsx
 ┃ ┣ Profile.jsx
 ┃ ┣ Signup.jsx
 ┃ ┣ TestPage.jsx
 ┃ ┗ TestResultList.jsx
 ┣ 📂shared
 ┃ ┗ Router.jsx
 ┣ 📂utils
 ┃ ┗ mbtiCalculator.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
