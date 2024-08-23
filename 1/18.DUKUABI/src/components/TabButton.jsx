export default function TabButton({children, onSelect, isSelected}){

//  console.log('App 컴포넌트의 TabButton컴포넌트가 실행되었습니다.');
    return(
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li> 
    );
}