import './App.css';
import { useState } from 'react';

export default function App() {
  
  const [articles, setArticles] = useState([
    {id: 0, title : '남자 코트 추천', like : 0, date: '2월 17일'}, 
    {id: 1, title : '강남 우동 맛집', like : 0, date: '2월 16일'}, 
    {id: 2, title : '신림 가성비 카페', like : 0, date: '2월 15일'}, 
  ]);

  const [logo, setLogo] = useState('REACT BLOG');
  
  const [gender, setGender] = useState(true);

  function swapGender() {
    setGender(!gender);
    const nextArticles = [...articles].map((article)=>{
      const {id, title, like, date} = article
      const nextTitle = title.replace("남자", "여자")
      return {id, nextTitle, like, date}
    });
    setArticles(nextArticles);
  }

  function plusLike(X) {
    const nextArticles = [...articles];
    const likedIdx = nextArticles.findIndex(({title})=>
      title === X
    );
    nextArticles[likedIdx].like++
    setArticles(nextArticles)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
        <button onClick={()=>{swapGender()}}>{gender ? `👨` : `👩`}</button>
      </div>
      {articles.map((article)=>{
        const {id, title, like, date} = article;
        return (
          <div className="list" key={id}>
            <h4>{title} <span className="like" onClick={()=>plusLike(title)}>👍</span> {like} </h4>
            <p>{date} 작성</p>
          </div>
        )})}
    </div>
  );
}
