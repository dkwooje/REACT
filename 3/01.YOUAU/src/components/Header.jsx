import logo from '../assets/logo.png';
import './Header.css';


export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
     <p>A community of artists and art-lovers.</p> 
    </header>
  );
}
//    인라인 스테이트 문법
//     <p style={{}}    바깥 중괄호: 자바스크립트, 안쪽 중괄호: 객체
//   textAlign: 'left'     css와 다른 문법을 쓴다.  (color: red; text-align: left;)
/*
      <p style={{
          color: 'red',
          textAlign: 'left'
      }}>A community of artists and art-lovers.</p> 
      */