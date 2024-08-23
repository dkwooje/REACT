export default function TabButton({children, onSelect}){

  console.log('App 컴포넌트의 TabButton컴포넌트가 실행되었습니다.');
    return(
        <li><button onClick={onSelect}>{children}</button></li> 
    );
}