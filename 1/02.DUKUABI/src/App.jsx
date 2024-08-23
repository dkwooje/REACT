
function Header(){ //컴포넌트 만들기
  return(
   <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      당신이 작성하는 거의 모든 앱을 위해 필요한 리액트의 컨셉!
    </p>
  </header>
  );
} 

function App() {
  return (
    <div>
      <Header /> 
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  ); //컴포넌트 사용 <Header /> 
}

export default App;
