import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS}from './data.js'; 

const reactDescriptions = ['근본적인', '치명적인', '핵심']

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}
function Header(){ //컴포넌트 만들기
  const description = reactDescriptions[genRandomInt(2)];

  return(
   <header>
    <img src= {reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      당신이 작성하는 거의 모든 앱을 위해 필요한 리액트의 {description} 컨셉!
    </p>
  </header>
  );
} 

function CoreConcept({image, title, description}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header /> 
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
        <CoreConcept {...CORE_CONCEPTS[0]} /> 
        <CoreConcept {...CORE_CONCEPTS[1]} /> 
        <CoreConcept {...CORE_CONCEPTS[2]} /> 
        <CoreConcept {...CORE_CONCEPTS[3]} /> 
        </ul>
        </section>
      </main>
    </div>
  ); 
}

export default App;
