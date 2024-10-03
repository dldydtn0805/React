## 리액트 프로젝트 세팅 방법

- Node.js LTS 버전 설치
- 원하는 폴더의 터미널 켜고 `npx create-react-app PROJECTNAME`로 CRA 프로젝트 생성
- 또는 `npm create vite@latest`로 VITE 프로젝트 생성

## JSX

- JS에서 쓰는 HTML

    - className
        - JSX에서 쓰는 CSS
        - JS의 class와 의미가 겹치기 때문에 className이라 작성한다
    - {}
        - 데이터바인딩
        - 중괄호를 사용해서 변수를 표현
        - JSX에서는 `document.querySelector().innerHTML`로 직접 넣어야한다
        - innerTEXT 말고도 id, src, className 모든 곳에 변수를 넣을 수 있다
    - STYLE
        - 바닐라JS에서는 `style="color : red"`로 표기
        - JSX에서는 `style={{color : 'red'}}`처럼 {{스타일명 : '값'}}로 표기
        - 바닐라JS에서는 `font-size`라면 JSX에서는 `fontSize`이다

    - return 안에는 병렬로 태그 2개 이상 기입하면 안된다


## useState

- 리액트의 단순 상태 관리 훅
- `import {useState} from 'react'`로 불러온다
- `const [상태변수, 상태명변경함수] = useState('상태명')`로 사용한다
    - Destructuring
        - `let num = [1, 2]`라고 가정할때, `nun1 = num[0]`, `num2 = num[1]`으로 꺼낼 수 있지만, `let [num1, num2] = [1, 2]`로 편하게 꺼낼 수 있다.
- 변수와 상태의 차이점
    - 변수는 변경되면 HTML에 자동으로 반영이 안됨
    - 상태는 HTML이 자동으로 재렌더링됨
        - 즉, 불필요한 렌더링이 이루어 질 수도 있다는 점을 이해할 필요가 있다 [useMemo의 필요성 논의]


## onClick

- 이벤트 핸들러 중 하나
- `<tag onClick={()=>function()}>`으로 tag를 클릭시 콜백 함수가 작동하게 할 수 있다
- 예시 코드
    - articles 객체 요소들의 각각의 like 버튼을 클릭하면 useState로 갱신한다
    - findIndex 메서드로 클릭한 요소를 찾아 like를 증가시킨다
    ```js
    const [articles, setArticles] = useState([
        {title : '남자 코트 추천', like : 0, date: '2월 17일'}, 
        {title : '강남 우동 맛집', like : 0, date: '2월 16일'}, 
        {title : '신림 가성비 카페', like : 0, date: '2월 15일'}, 
    ]);
    function plusLike(X) {
        const nextArticles = [...articles];
        const likedIdx = nextArticles.findIndex(({title})=>
        title === X
        );
        nextArticles[likedIdx].like++;
        setArticles(nextArticles);
    }
    return (
        {articles?.map((article)=>{
        const {title, like, date} = article;
        return (
          <div className="list">
            <h4>{title} <button onClick={()=>plusLike(title)}>👍</button> {like} </h4>
            <p>{date} 작성</p>
          </div>
        )})}
    )
    ```

