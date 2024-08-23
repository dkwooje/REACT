
import {CORE_CONCEPTS}from './data.js'; 
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
      function handleClick(){
       console.log('탭버튼이 클릭 되었습니다.');}
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
        <section id = "examples">
          <h2>예시들</h2>
          <menu>
             <TabButton onSelect={handleClick}>컴포넌트</TabButton>
             <TabButton onSelect={handleClick}>JSX</TabButton>
             <TabButton onSelect={handleClick}>Props</TabButton>
             <TabButton onSelect={handleClick}>State</TabButton>
          </menu>
          여기는 출력부입니다.
        </section>
      </main>
    </div>
  ); //컴포넌트 사용 <Header /> 
}

export default App;
