import "bootstrap"

import { addGuest, loadGuests } from "./guest"

window.onload = loadGuests;

document.querySelector("#guest-form").onsubmit = addGuest;

document.querySelector(".delete-guests").onclick = function(){localStorage.clear()}