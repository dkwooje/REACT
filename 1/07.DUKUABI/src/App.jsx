
import {CORE_CONCEPTS}from './data.js'; 
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';



function App() {
  return (
    <div>
      <header> 
        <h1>Hello World!</h1>
      </header>
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

export default App;
