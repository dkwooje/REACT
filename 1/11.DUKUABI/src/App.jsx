
import {CORE_CONCEPTS}from './data.js'; 
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
      function handleClick(selectedButton){
       console.log(`${selectedButton}이 클릭되었습니다.`);}
       console.log(selectedButton + '이 클릭 되었습니다.');
      
        function one(){
          handleClick('components');
        }
        function two(){
          handleClick('jsx');
        }
        function three(){
          handleClick('props');
        }
        function four(){
          handleClick('state');
        }

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
             <TabButton onSelect={()=>{handleClick('컴포넌트')}}>컴포넌트</TabButton>
             <TabButton onSelect={()=>{handleClick('제이액스')}}>JSX</TabButton>
             <TabButton onSelect={()=>{handleClick('프롬프')}}>Props</TabButton>
             <TabButton onSelect={()=>{handleClick('스테이트')}}>State</TabButton>
          </menu>
          여기는 출력부입니다.
        </section>
      </main>
    </div>
  ); 
}      //<TabButton onSelect={(one)}>컴포넌트</TabButton>
       //<TabButton onSelect={two}>JSX</TabButton>
       //<TabButton onSelect={three}>Props</TabButton>
       //<TabButton onSelect={four}>State</TabButton>

export default App;
