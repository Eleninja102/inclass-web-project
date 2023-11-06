let guests = [];


export function addGuest(e) {
    e.preventDefault();

    let guest = {
        fname: document.getElementById("fn").value,
        lname: document.querySelector("#ln").value,
    }

    if (guest.fname.trim() && guest.lname.trim()) {
        guests.push(guest);

        localStorage.setItem('guests', JSON.stringify(guests));

       displayGuest(guest);
    } else {
        alert("Either first name or last name is blank")
    }

    this.reset();
}


export function loadGuests() {
    if (localStorage.getItem('guests')) {
        guests = JSON.parse(localStorage.getItem('guests'));

        for (let guest of guests) {
            displayGuest(guest);
        }
    }

}

function displayGuest(guest){
    let guest_html = `
    <td>${guest.fname}</td>
    <td>${guest.lname}</td>
    `
    let tr = document.createElement('tr');
    tr.innerHTML = guest_html;

    document.querySelector("#guests tbody").appendChild(tr);
}