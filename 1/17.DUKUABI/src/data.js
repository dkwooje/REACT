import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
/*  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  }, */
  
];


export const EXAMPLES ={

  components :{
    title: "컴포넌트",
    description:
    "컴포넌트는 리액트 애플리케이션의 블럭들을 작성하기 위한 요소이다. 컴포넌트 하나는 HTML과 JS와 부가적인 CSS가 조합된 모듈이고 출력물을 렌더링 하기 위해 만들어져 있다.",
    code:  `
      function Welcome(){
      return <h1>Hello,World</h1>;
      }`,
  },
jsx:{
  title: "JSX",
  description:
  "JSX는 JavaScript를 위한 확장 문법이다. 템플릿 언어랑 비슷하지만 JavaScript 문법을 모두 사용할 수 있다.(동적인 컨텐츠를 작성하는게 목적)",
  code:`
  <div>
  <h1>{userName}님 환영합니다<h1>
  <p>리액트 학습 시간</p>
  </div>`,
},
props:{
  title: 'props',
  description:
  '컴포넌트는 props를 통해서 데이터를 전달 받는다. 마치 매개변수처럼',
  code:`
  function Welcome(props){
      return <h1>{props.name}님 안녕하세요</h1>;
      }`,
},
state:{
  title: "State",
  description:
  "State는 리액트 컴포넌트가 사용자의 행동이나 네트워크 응답과 같은 것들에 대해서 출력 내용을 변경하는데 이용된다.",
  code: `
 function Welcome(){
    const[isVisible, setIsVisible] = useState(false);

    function handleClick(){
    setIsVisible(true);
    }
      return (
      <div>
      <button onClick = {handleClick}>상세보기</button>
      {isVisible && <p>상세하다!</p>}
      </div>
      );
      }`,
},
};