import {useState} from 'react';
import {CORE_CONCEPTS}from './data.js'; 
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
  const [selectedTopic, setSelectedTopic] = useState('탭을 클릭하세요'); //훅의 조건 : 1.컴포넌트 내에서 직접 사용, 2.컴포넌트의 가장 상단에 위치해야 한다.
      // 훅안에 들어갈 것 : [state값이 저장될 변수(스냅샷 변수), 변수를 업데이트하고 해당 state훅이 존재하는 컴포넌트를 업데이트할 수 있는 함수 이름(setter함수)]
 

      function handleClick(selectedButton){
       //console.log(`${selectedButton}버튼이 클릭되었습니다.`);
       setSelectedTopic(selectedButton)
         console.log(selectedButton)
      }

      console.log('App 컴포넌트가 실행되었습니다.');

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
             <TabButton onSelect={()=>{handleClick('JSX')}}>JSX</TabButton>
             <TabButton onSelect={()=>{handleClick('Props')}}>Props</TabButton>
             <TabButton onSelect={()=>{handleClick('State')}}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  ); 
}      //<TabButton onSelect={(one)}>컴포넌트</TabButton>
       //<TabButton onSelect={two}>JSX</TabButton>
       //<TabButton onSelect={three}>Props</TabButton>
       //<TabButton onSelect={four}>State</TabButton>

export default App;
