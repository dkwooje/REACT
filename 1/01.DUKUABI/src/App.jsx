const reactDescriptions = ['근본적인', '치명적인', '핵심']

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}
function Header(){ //컴포넌트 만들기

  const description = reactDescriptions[genRandomInt(2)];

  return(
   <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      당신이 작성하는 거의 모든 앱을 위해 필요한 리액트의 {reactDescriptions}  컨셉!
      <p></p>
      당신이 작성하는 거의 모든 앱을 위해 필요한 리액트의 {10*10}  컨셉!
      <p></p>
      당신이 작성하는 거의 모든 앱을 위해 필요한 리액트의 {reactDescriptions[genRandomInt(2)]} 컨셉!
      <p></p>
      당신이 작성하는 거의 모든 앱을 위해 필요한 리액트의 {description} 컨셉!
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
