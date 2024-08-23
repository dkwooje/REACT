import reactImg from './assets/react-core-concepts.png';
//import componentsImg from './assets/components.png';
import {CORE_CONCEPTS}from './data.js'; //export 끌어오려면 {}를 이용해야한다.

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
/*
function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
*/
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
  ); //컴포넌트 사용 <Header /> 
}
//<CoreConcept title="컴포넌트" description="UI제작을 위한 핵심 블럭" img={componentsImg}/>
//<CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
//<CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
//<CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
//<CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>

export default App;
