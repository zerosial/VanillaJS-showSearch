# VanillaJS를 이용한 공연 API 검색기
https://school.programmers.co.kr/learn/courses/14723

3번째 미션

## 사이트 주소
https://zerosial.github.io/VanillaJS-showSearch/

## 필수 구현사항
- [x] 이디어츠 API를 통해 이디어츠 공연 검색기 만들기

## 보너스 구현사항
- [x] `fetch` 해오는 코드를 `async`, `await`를 사용하여 구현
- [x] `debounce` 기법을 이용해 불필요한 API 요청이 가는 것을 방지하기
- [x] `SearchHistory` 컴포넌트를 만들기
- [x] 해당 히스토리를 클릭하면 해당 검색어로 다시 검색하기
- [x] 히스토리를 클릭해 발생한 검색에 대해선 히스토리에 쌓이지 않게 하기
- [x] 최대 5개까지만 쌓일 수 있게 하며, 화면을 새로고침해도 유지되도록 만들기
- [x] 같은 이름의 검색어는 중첩해서 들어가지 않게 하기
- [x] `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만들기
- [x] 이름 목록을 포스터 아래에 렌더링하기
- [x] 뮤지션 이름을 클릭하면 해당 이름으로 공연 검색이 일어나도록 하기
- [x] 검색 내역이 쌓이지 않게 만들기

## How to 
- 구성 : App.js 에서 SearchInput.js SearchResult.js SearchHistory.js를 관리하도록 했습니다.
- Custom Event 수신기를 App.js에 달아 검색 혹은 클릭 등 callSearch 행동이 일어나면 app.js에서 setState를 통해 리랜더합니다.
- 검색 내용 , 검색 타이틀은 Custom Event의 Detail 항목을 통해 상태관리 합니다.
- 포스터 리스트 중 타이틀 클릭 시 검색이력이 쌓이지 않게 하기 위해 isChangeLocalValue (기본 true) 상태를 통해 제어합니다.
