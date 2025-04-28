import { useState } from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(editing => !editing);
        if(isEditing){
          onChangeName(symbol, playerName);
        }
    };

    function handleChange(event) {
        setPlayerName(event.target.value)
    };
    
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {isEditing ? (
                <input type="text" value={playerName} required onChange={handleChange}/>
              ) : (
                <span className='player-name'>{playerName}</span>
              )}
              <span className="player-symbol">{symbol}</span>
              <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
          </li>
    );
};