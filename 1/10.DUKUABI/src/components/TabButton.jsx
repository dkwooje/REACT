export default function TabButton({children, onSelect}){

 //   function handleClick(){
  //      console.log('탭버튼이 클릭 되었습니다.');}
    
    return(
        <li><button onClick={onSelect}>{children}</button></li> 
    );
}