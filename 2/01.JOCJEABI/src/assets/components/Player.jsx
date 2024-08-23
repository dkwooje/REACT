import { useState } from "react";

export default function Player({initialName, symbol}){
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
    setIsEditing((editing)=> !editing);  //!isEditing은 느리다
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editableplayerName =  <span className="player-name">{playerName}</span>
    if(isEditing){
        editableplayerName = <input type= "text" required value={playerName} onChange={handleChange}/>;
    }
    return (
      <li>
        <span className="player">
          {editableplayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{ isEditing ? '저장' : '편집'}</button>
      </li>
    );
}