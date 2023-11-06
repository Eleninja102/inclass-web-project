import "bootstrap"

function playTicTacToe(){
    let turn = 0;
     document.querySelectorAll('#tictac td').forEach(
        function(td){
            td.onclick = function(e){
                if(turn % 2 == 0){
                    e.target.innerHTML = "<h1>X</h1>";
                }
                else{
                    e.target.innerHTML = "<h1>O</h1>";
                }
                turn++;
            }
        }
    )

}




function generateBoxesData(n){
    let i = 0;
    let a = [];

    do{
        let row = [];
        let j = 0;
        do{
            let r = Math.random()
           row.push( r < .33 ? 0 : ( r < .67 ? 1 : 2));
            j++;
        }while(j < n);

        a.push(row);
        i++;
    }while(i < n);


    return a;
}



let el = document.querySelector('#boxes tbody')

let data = generateBoxesData(20);
let html = "";
for(let row of data){
    html += "<tr>";

    for(let cell of row){
        html += `<td style = " width: 50px; height: 50px; background-color: ${cell == 0? 'green' : (cell == 1 ? 'red' : 'blue')};"></td>`
    }

    html += "</tr>";
}

el.innerHTML = html;






window.onload = playTicTacToe
