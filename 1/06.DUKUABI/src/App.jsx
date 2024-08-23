/*
const CONTENTS =[
  {
    title:"리액트 배우기1",
    description:"상세배우기1"
  },
  {
    title:"리액트 배우기2",
    description:"상세배우기2"
  },
  {
    title:"리액트 배우기3",
    description:"상세배우기3"
  }
]
*/

export function CourseGoal({title,description}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

/*
function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal {...CONTENTS[0]} />
        <CourseGoal {...CONTENTS[1]} />
        <CourseGoal {...CONTENTS[2]} />
      </ul>
    </div>
  );
}
*/

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal title="리액트 배우기1" description="상세배우기1"/>
        <CourseGoal title="리액트 배우기2" description="상세배우기2"/>
        <CourseGoal title="리액트 배우기3" description="상세배우기3"/>
      </ul>
    </div>
  );
}

export default App;