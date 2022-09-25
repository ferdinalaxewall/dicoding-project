import React from 'react'

function ImperativeCode() {
    const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
    const uppercaseNames = [];
    
    for (let i = 0; i < names.length; i++) {
        uppercaseNames[i] = names[i].toUpperCase();
    }
    
    console.log(uppercaseNames);
}

export default function DeclarativeCode() {
    const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
  
    return(
        <ol>
            {names.map((name) => <li>{name}</li>)}
        </ol>
    )
}




