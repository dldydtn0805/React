## Bootstrap

- 구글에 리액트 부트스트랩 검색 -> get started
  - 터미널에 `npm install react-bootstrap bootstrap` 설치

- 초기 설정 : link 태그를 index.html에 넣거나 import css를 App.js에 넣거나 하면 된다

- import component 후 component 태그 사용하면 된다.

## Component

- 마음에 드는 Component를 가져온 후, 대문자로 적힌 태그들을 중괄호 안에 적어준다

```js
import {Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
```

## CSS 이미지 삽입

- `url('경로')`
  - './' 는 JS 파일이 위치한 현재 경로이다.

```css
background-image: url('./img/bg.png');
```

## JSX에서 이미지 삽입

- import로 이미지를 불러온다
- style로 이미지를 적용한다
```js
import MyBackgroundImage from './img/bg.png';

<div className="main-bg" style={{backgroundImage : `url(${MyBackgroundImage})`}}></div>
```

#### 즉 JSX에서는 경로를 직접 작성할 수 없고 IMPORT 해온 것을 표현식으로 감싸서 경로를 우회해서 작성해야한다. 그냥 CSS 파일 상에서 경로를 작성하는게 정신 건강에 좋다.

## PUBLIC 폴더에 있는 이미지 삽입

- 리액트 사이트 발행시 HTML, JS, CSS를 압축하는데 [번들링], PUBLIC 폴더 안에 있는 파일들은 압축되지 않는다
  - JSX에서 PUBLIC 폴더 이미지 사용하려면, `src = '/이미지경로'`
- *주의사항* : 서브 경로에 발행시 문제될 수 있으므로 `src = {process.env.PUBLIC_URL + '/이미지경로'}` 로 작성하는 것을 추천
  - process.env.PUBLIC_URL : 내 사이트의 현재 경로

## IMPORT / EXPORT

- 다른 파일에 있는 자료를 가져오는 방법 [함수도 내보낼 수 있다 : 컴포넌트도 내보낼 수 있다]
- EXPORT 하려면
  - `export deafult 변수`
  - 여러개 내보내려면
    - `export { X, Y }`
- IMPORT 하려면
  - `import 변수 from '경로'`
  - 여러개 받아오려면
    - `import { X, Y } from '경로'`

## OBJECT

- `const X = {name : 'kim', age : 20}`
- `X.name / X.age` 로 값에 접근한다

## 페이지 라우팅

1. 컴포넌트를 만들어서 상세페이지 내용을 채운다
2. 누군가 `/detail` 접속하면 그 컴포넌트 보여준다

## react-router-dom

- 초기 셋팅

  1. `npm install react-router-dom@6` 터미널 설치
  2. index.js에서 `BrowserRouter` 컴포넌트로 `App` 컴포넌트를 감싼다
  3. 필요한 JS 파일에서 `import { Routes, Route, Link } from 'react-router-dom';` 해준다


## 라우터로 페이지 나누는 방법

- Routes 컴포넌트로 Route 컴포넌트를 감싼다

### Route

- `path` 파라미터 : 경로
- `element` 파라미터 : 컴포넌트
- `현재 주소`가 `path 경로`이라면 `element 컴포넌트`를 보여주세요 정도로 이해하면 된다

```js
<Routes>
  <Route path="/" element={<MainPage></MainPage>}></Route>
  <Route path="/detail" element={<div>DETAIL</div>}></Route>
  <Route path="/about" element={<div>ABOUT</div>}></Route>
</Routes>
```

### Link

- 페이지 이동하는 태그
- `to` 파라미터 : 목표 경로
- link 태그를 클릭시 `목표 경로`로 이동한다
```js
<Link to="/">HOME</Link>      
<Link to="/detail">DETAIL</Link>  
```

## 폴더 구조

- 비슷한 파일끼리 폴더로 묶는다
  - 예컨대 MainPage, DetailPage 등은 pages에 넣는다

## useNavigate

- 페이지 이동하는 함수
- react-router-dom에서 import 해주고 -> 변수로 빼서 사용한다 
  ```js
  const navigate = useNavigate();
  <Nav.Link onClick={()=>navigate('/')}>HOME</Nav.Link>
  ```
- useNavigate()는 콜백함수에 직접 사용할 수 없다.
- `navigate(1)` 은 앞으로가기 / `navgiate(-1)` 은 뒤로가기 [-2 적으면 2페이지 뒤로감]

## 404 페이지

- 만들어놓지 않은 페이지로 이동했을 경우, 아무것도 보이지 않는다
- `없는 페이지에요` 라는 의미의 페이지

```js
<Route path="*" element={<div>ERROR 404</div>}></Route>
```
- 내가 따로 path 설정하지 않은 모든 페이지는 없는 페이지 이기 때문이다


## Nested Routes

- 여러 유사한 페이지가 필요할 때 사용한다
- 상위 페이지를 공유하는 하위 페이지들의 경로를 지정할 때 다음과 같이 할 수 있다

```js
<Route path="/about" element={<AboutPage></AboutPage>}></Route>
<Route path="/about/member" element={<Member></Member>}></Route>
<Route path="/about/location" element={<Location></Location>}></Route>
```
- 하지만 Nested Routes를 활용해서 구현하면 더 가독성 있게 표현할 수 있다

```js
<Route path="/about" element={<AboutPage></AboutPage>}>
  <Route path="member" element={<Member></Member>}></Route>
  <Route path="location" element={<Location></Location>}></Route>
</Route>
```
- 위와 같은 문법이다
- 장점
  1. 간단한 표현식
  2. 상위 컴포넌트와 하위 컴포넌트를 동시에 보여줌
    - 단, 하위 컴포넌트를 보여주기 위해서는, 어디에 보여줄 지를 작성해야한다 [사실, 상위 컴포넌트 내부에 하위 컴포넌트를 보여주는 것이기 때문이다]
    - OutLet의 등장

## OutLet

- 상위 컴포넌트에서 NestedRoutes를 설정해 주었다. 거의 끝났다.
- AboutPage 컴포넌트에서 어디에 구멍을 낼지 작성해주면 된다.

```js
import { Outlet } from 'react-router-dom';

function AboutPage () {
  return (
    <div>
      ABOUT
      <Outlet></Outlet>
    </div>
  )
}

function Member () {
  return (
    <div>
      MEMBER
    </div>
  )
}

function Location () {
  return (
    <div>
      MEMBER
    </div>
  )
}

export {AboutPage, Member, Location}
```

