let guests = [];


export function addGuest(e){
    e.preventDefault();
    let guest = {
        fname: document.getElementById("fn").value,
        lname: document.querySelector("#ln").value,
        }    
    
    if(guest.fname.trim() && guest.lname.trim()){
        guests.push(guest);
        let guest_html = `
            <td>${guest.fname}</td>
            <td>${guest.lname}</td>
        `
        let tr = document.createElement('tr');

        tr.innerHTML = guest_html

        document.querySelector("#guests tbody").appendChild(tr);
    }

    this.reset();
}