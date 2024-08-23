import {useState} from 'react';
import {CORE_CONCEPTS}from './data.js'; 
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState(); //undifind (null x)
 
      function handleClick(selectedButton){
       //console.log(`${selectedButton}버튼이 클릭되었습니다.`);
       setSelectedTopic(selectedButton)
         console.log(selectedButton)
      }

     // console.log('App 컴포넌트가 실행되었습니다.');
     let tabContent = <p>탭을 선택해주세요.</p> ;

     if(selectedTopic){
      tabContent = (        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>  
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
        <code> {EXAMPLES[selectedTopic].code} </code>
        </pre>
       </div>)
     }

  return (
    <div>
    <Header /> 
    <main>
      <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem} />)}
      </ul>
      </section>
      <section id = "examples">
        <h2>예시들</h2>
        <menu>
           <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>{handleClick('components')}}>컴포넌트</TabButton>
           <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>{handleClick('jsx')}}>JSX</TabButton>
           <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>{handleClick('props')}}>Props</TabButton>
           <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>{handleClick('state')}}>State</TabButton>
        </menu>
          {tabContent}
      </section>
    </main>
  </div>
  ); 
}      

export default App;
