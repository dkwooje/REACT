export default function Log({turns}){
    return(
        <ol id="log">
                {turns.map(turn=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player}가 {turn.square.row}, {turn.square.col}에 두었습니다.</li>)}
        </ol>
    )
}