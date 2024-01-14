import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState(글제목.map(function(){return (0)}));
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(2);
  let [입력값, 입력값변경] = useState('');
  console.log(modal)
  function 함수 () {
    console.log(1);
  }
  [1,2,3].map(function(a){
    return '1233211'
  })
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여성 코트 추천'
        글제목변경(copy);
      }}>글수정</button>
      
      {
          글제목.map(function(a, i){
            return (<div className="list" key={i}>
            <h4 onClick={()=> {setModal(!modal); setTitle(i)}}>
              {글제목[i]} 
              <span onClick={(e)=> {
              e.stopPropagation();
              let copy = [...따봉]
              copy[i]++
              따봉변경(copy)
            }}>👍</span> {따봉[i]}
              <button onClick={()=>{
                let copy = [...글제목]
                copy.splice(i, 1)
                글제목변경(copy);
                let copy2 = [...따봉]
                copy2.splice(i,1)
                따봉변경(copy2)
                }}>삭제</button>
            </h4>
            <p>2월 17일 발행</p>
          </div>)
          })
        } 
        <input onChange={(e)=>{
          입력값변경(e.target.value); 
          console.log(입력값)
          }}></input>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.unshift(입력값)
          글제목변경(copy)
          let copy2 = [...따봉];
          copy2.unshift(0)
          따봉변경(copy2)
          }}>제출</button>
    
        {
          modal == true ? <Modal title = {title} 글제목변경={글제목변경} color={'yellow'} 글제목={글제목}/> : null
        }
        <Modal2></Modal2>
    </div>
  );
}


function Modal(props){
  return(
    <div className="modal" style={{background: props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy = [...props.글제목]
          copy[0] = '여자코트추천'
          props.글제목변경(copy)
          
          }}>글 수정</button>
      </div>
  )
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'kim',
      age : 20,
    } 
  }
  render(){
    return(
      <div>안녕 {this.props}
      <button onClick={()=>{
        this.setState({age : 21})
      }}>버튼 </button>
      </div>
    )
  }
}

const Component1 = () => {
  return(
    <div>
      <h1>피카츄</h1>
    </div>
  )  
} 

export default App;