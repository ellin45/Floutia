# Floutia

<center><img src="./floutia/public/floutia_logo.png" width="500" />

음악을 테마별로 검색해볼수 있는 서비스

&nbsp;

## 🖥️ 프로젝트 소개

&nbsp;
새싹인들을 위한 지식 공유 커뮤니티입니다.

[플루티아 서비스 바로가기](https://floutia.vercel.app/)

&nbsp;

## 🕰️ 개발 기간

23.12.11 - 24.01.05

</center>
&nbsp;

## 시작 가이드

### Requirements

### build

```bash
$ npm run build
```

&nbsp;

### ⚙️ 개발 환경

**[FE]**

- [언어] :
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=t)
- [프레임워크 및 라이브러리]:
  ![Next](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
- [배포] : ![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
- [Open API] :
  ![Youtube](https://img.shields.io/badge/YouTube_Music-FF0000?style=for-the-badge&logo=youtube-music&logoColor=white)

## 📌 화면 구성

|                                                                    |                                                                           |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 메인페이지                                                         | 검색페이지                                                                |
| <img src="./floutia/public/main.gif" width="300px" height="300px"> | <img src="./floutia/public/search_page.gif" width="300px" height="300px"> |

## Light House

- 테스트 결과

<img src="./floutia/public/lighthouse.png" width="300px" height="300px">

## 와이어 프레임

&nbsp;
<img src="./floutia/public/pigma1.png" width="600px" height="600px">

## 주요 기능

&nbsp;

메인 페이지

- 추천 영상들 보여주기

&nbsp;
검색 페이지

- 검색 시 조건에 맞는 영상 보여주기

&nbsp;
마이페이지

- 업데이트 예정

&nbsp;

## 디렉토리 구조

```bash
📦app
 ┣ 📂components
 ┃ ┣ 📜PlayList.tsx
 ┃ ┣ 📜Sidebar.tsx
 ┃ ┣ 📜Template.tsx
 ┃ ┣ 📜header.tsx
 ┃ ┗ 📜mainCircle.jsx
 ┣ 📂myPage
 ┃ ┣ 📜layout.jsx
 ┃ ┗ 📜page.tsx
 ┣ 📂search
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜Search.jsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂styles
 ┃ ┣ 📜page.module.css
 ┃ ┗ 📜variables.module.scss
 ┣ 📜.DS_Store
 ┣ 📜_app.tsx
 ┣ 📜favicon.ico
 ┣ 📜globals.css
 ┣ 📜layout.tsx
 ┗ 📜page.tsx
```
