import './App.css';
import { useState } from 'react';
import React from 'react';

export default function App() {
  const example = '♚♚히어로즈 오브 더 스☆톰♚♚가입시$$전원 카드팩☜☜뒷면100%증정※ ♜월드오브 워크래프트♜펫 무료증정￥ 특정조건 §§디아블로3§§★공허의유산★초상화획득기회@@@ 즉시이동http://kr.battle.net/heroes/ko/';
  const [articles, setArticles] = useState([
    {id: 0, title : '여자 코트 추천', like : 0, date: '2월 17일', detail: example, modal: false, gender: false}, 
    {id: 1, title : '강남 여자 신발 이보다 쌀 수는 없어', like : 0, date: '2월 16일', detail: example, modal: false, gender: false}, 
    {id: 2, title : '신림 여자 셔츠 반드시 사야할 곳', like : 0, date: '2월 15일', detail: example, modal: false, gender: false}, 
  ]);

  const logo = 'REACT BLOG';

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  
  const [newTitle, setNewTitle] = useState('');

  // X is CASE [1 : Total / 2 : SECTION] and Y is ID
  function swapGender(X, Y) {
    switch (X) {
      // In CASE 1, We don't use ID.
      case 1:
        const nextArticles_1 = articles.map((article)=>{
          const {id, title, like, date, detail, modal, gender} = article
          const nextTitle = title.replace(gender ? "남자" : "여자", gender ? "여자" : "남자")
          return {id, title : nextTitle, like, date, detail, modal, gender : !gender}
        });
        setArticles(nextArticles_1);
        break
      // In Case 2, We use ID 
      case 2:
        const nextArticles_2 = articles.map((article)=>{
          const {id, title, like, date, detail, modal, gender} = article
          const nextTitle = (id === Y ? title.replace(gender ? "남자" : "여자", gender ? "여자" : "남자") : title)
          return {id, title : nextTitle, like, date, detail, modal, gender : !gender}
        });
        setArticles(nextArticles_2);
        break
    }
  }
  // X is ID
  function plusLike(X) {
    const nextArticles = [...articles];
    const likedIdx = nextArticles.findIndex(({id})=>
      id === X
    );
    nextArticles[likedIdx].like++
    setArticles(nextArticles)
  }

  function sortTitle() {
    articles.sort((X, Y) => 
      X.like < Y.like ? 1 : -1
    );
    const nextArticles = [...articles]
    setArticles(nextArticles)
  }

  // X is ID
  function swapModal(X) {
    const modalIdx = articles.findIndex(({id}) => X === id)
    const nextArticles = [...articles]
    nextArticles[modalIdx].modal = !nextArticles[modalIdx].modal
    setArticles(nextArticles)
  }

  // X is KeyboardEvent
  function submitArticle(X) {    
    switch (X.target.value && X.code) {
      case "Enter" :
        const newDate = `${new Date().getMonth()+1}월 ${new Date().getDate()}일`;
        const newId = Math.max(...(articles.map(({id})=> {return id})))+1;
        const newArticle = {id: newId, title : newTitle, like : 0, date: newDate, detail: example, modal: false, gender: false};
        const nextArticles = [...articles];
        nextArticles.push(newArticle);
        setArticles(nextArticles);
        setNewTitle('');
        X.target.value = '';
        break
      default :
        setNewTitle(X.target.value)
        break
    }
  }
  // X is ID
  function deleteArticle(X) {
    const nextArticles = articles.filter(({id}) => id !== X);
    setArticles(nextArticles);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
        <button className="gender-swap" onClick={()=>{swapGender(1, -1)}}>전체 수정</button>
        <span className="sort-title" onClick={()=>{sortTitle()}}>⏬</span>
      </div>
      {articles.map((article, key)=>{
        const {id, title, like, date, modal} = article;
        return (
          <div className="list" key={id}>
            <h4>
              <span className="title" onClick={()=>{swapModal(id)}}>{title}</span>
              <span className="like" onClick={()=>plusLike(id)}>👍</span> 
              <span>{like}</span>
            </h4>
            <p>{date} 작성</p>
            { modal ? <Modal deleteArticle={deleteArticle} swapGender={swapGender} color={colors[key%(colors.length)]} article={article}></Modal> : null }
          </div>
        )})}
        <input onKeyUp={(event)=>submitArticle(event)}></input>
    </div>
  );
}

function Modal ({deleteArticle, swapGender, color, article}) {
  const {id, title, date, detail} = article
  return (
    <div className="modal" style={{background : `${color}`}}>
      <h4>
        <span>{title}</span> 
        <button onClick={()=>{swapGender(2, id)}}>수정</button>
        <button onClick={()=>{deleteArticle(id)}}>삭제</button>
      </h4>
      <p>{date}</p>
      <p>{detail}</p>
    </div>
  )
}

class OldModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'kim',
      age : 20,
    };
  }
  render () {
    return (
      <div>
        Hello {this.state.name} You are {this.state.age} years old
        {this.props.age}
        <button onClick={()=>{this.setState({age : 21})}}>상태수정</button>
      </div>
    )
  }
}