
//let isPlayer2Selected = false;

function playerSelections() {
    let img = document.createElement('img');
    img.classList.add('compSelect');
    img.classList.add('playerButtonSize');
    img.src = '/assets/Rock.png';
    img.alt = 'Rock Button';

    let button = document.createElement('button');
    button.className = 'btn btn';
    button.value = 'Rock';
    button.id = 'player1Rock';

    let colDiv = document.createElement('div');
    colDiv.className = 'col';

    button.appendChild(img);
    colDiv.appendChild(button);
    //------------------------------------------------------
    let img2 = document.createElement('img');
    img2.classList.add('compSelect');
    img2.classList.add('playerButtonSize');
    img2.src = '/assets/Paper.png';
    img2.alt = 'Paper Button';

    let button2 = document.createElement('button');
    button2.className = 'btn btn';
    button2.value = 'Paper';
    button2.id = 'player1Paper';

    let colDiv2 = document.createElement('div');
    colDiv2.className = 'col';

    button2.appendChild(img2);
    colDiv2.appendChild(button2);
    //------------------------------------------------------

    let img3 = document.createElement('img');
    img3.classList.add('compSelect');
    img3.classList.add('playerButtonSize');
    img3.src = '/assets/spock.png';
    img3.alt = 'Spock Button';

    let button3 = document.createElement('button');
    button3.className = 'btn btn';
    button3.value = 'Spock';
    button3.id = 'player1Spock';

    let colDiv3 = document.createElement('div');
    colDiv3.className = 'col';

    button3.appendChild(img3);
    colDiv3.appendChild(button3);
    //------------------------------------------------------

    let img4 = document.createElement('img');
    img4.classList.add('compSelect');
    img4.classList.add('playerButtonSize');
    img4.src = '/assets/Scissors (2).png';
    img4.alt = 'Scissors Button';

    let button4 = document.createElement('button');
    button4.className = 'btn btn';
    button4.value = 'Scissors';
    button4.id = 'player1Scissors';

    let colDiv4 = document.createElement('div');
    colDiv4.className = 'col';

    button4.appendChild(img4);
    colDiv4.appendChild(button4);
    //------------------------------------------------------

    let img5 = document.createElement('img');
    img5.classList.add('compSelect');
    img5.classList.add('playerButtonSize');
    img5.src = '/assets/Lizard (2).png';
    img5.alt = 'Lizard Button';

    let button5 = document.createElement('button');
    button5.className = 'btn btn';
    button5.value = 'Lizard';
    button5.id = 'player1Lizard';

    let colDiv5 = document.createElement('div');
    colDiv5.className = 'col';

    button5.appendChild(img5);
    colDiv5.appendChild(button5);
    //--------------------------------------------------------------
    let divRow = document.createElement('div');
    divRow.className = 'row';

    //-------------------------------------------------
    let colDivs = [colDiv, colDiv2, colDiv3, colDiv4, colDiv5];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * colDivs.length);
        divRow.appendChild(colDivs[randomIndex]);
        colDivs.splice(randomIndex, 1);
    }

    player1Select.appendChild(divRow);

}

function playerSlection2() {
    
    let img = document.createElement('img');
    img.classList.add('compSelect');
    img.classList.add('playerButtonSize');
    img.src = '/assets/Rock.png';
    img.alt = 'Rock Button';
    
    let button = document.createElement('button');
    button.className = 'btn btn';
    button.value = 'Rock';
    button.id = 'player2Rock';
    
    let colDiv = document.createElement('div');
    colDiv.className = 'col';
    
    button.appendChild(img);
    colDiv.appendChild(button);
    //------------------------------------------------------
    let img2 = document.createElement('img');
    img2.classList.add('compSelect');
    img2.classList.add('playerButtonSize');
    img2.src = '/assets/Paper.png';
    img2.alt = 'Paper Button';
    
    let button2 = document.createElement('button');
    button2.className = 'btn btn';
    button2.value = 'Paper';
    button2.id = 'player2Paper';
    
    let colDiv2 = document.createElement('div');
    colDiv2.className = 'col';
    
    button2.appendChild(img2);
    colDiv2.appendChild(button2);
    //------------------------------------------------------
    
    let img3 = document.createElement('img');
    img3.classList.add('compSelect');
    img3.classList.add('playerButtonSize');
    img3.src = '/assets/spock.png';
    img3.alt = 'Spock Button';
    
    let button3 = document.createElement('button');
    button3.className = 'btn btn';
    button3.value = 'Spock';
    button3.id = 'player2Spock';
    
    let colDiv3 = document.createElement('div');
    colDiv3.className = 'col';
    
    button3.appendChild(img3);
    colDiv3.appendChild(button3);
    //------------------------------------------------------
    
    let img4 = document.createElement('img');
    img4.classList.add('compSelect');
    img4.classList.add('playerButtonSize');
    img4.src = '/assets/Scissors (2).png';
    img4.alt = 'Scissors Button';
    
    let button4 = document.createElement('button');
    button4.className = 'btn btn';
    button4.value = 'Scissors';
    button4.id = 'player2Scissors';
    
    let colDiv4 = document.createElement('div');
    colDiv4.className = 'col';
    
    button4.appendChild(img4);
    colDiv4.appendChild(button4);
    //------------------------------------------------------
    
    let img5 = document.createElement('img');
    img5.classList.add('compSelect');
    img5.classList.add('playerButtonSize');
    img5.src = '/assets/Lizard (2).png';
    img5.alt = 'Lizard Button';
    
    let button5 = document.createElement('button');
    button5.className = 'btn btn';
    button5.value = 'Lizard';
    button5.id = 'player2Lizard';
    
    let colDiv5 = document.createElement('div');
    colDiv5.className = 'col';
    
    button5.appendChild(img5);
    colDiv5.appendChild(button5);
    //--------------------------------------------------------------
    let divRow = document.createElement('div');
    divRow.className = 'row';
    
    //-------------------------------------------------
    let colDivs = [colDiv, colDiv2, colDiv3, colDiv4, colDiv5];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * colDivs.length);
        divRow.appendChild(colDivs[randomIndex]);
        colDivs.splice(randomIndex, 1);
    }
    
    player2Select.appendChild(divRow);
    // if (!isPlayer2Selected) {
    //     // code to create elements
    //     isPlayer2Selected = true;
    // }  

}

export { playerSelections, playerSlection2 }