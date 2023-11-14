//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

export function getGitHubUsers(url) {
	fetch(url).then(function (res) {
		if (res.ok) {
			return res.json()
		} else {
			throw Error("API call failed!!!");

		}
	}).then(function (users) {


		for (let user of users) {
			let userHtml = `
            <div class="card">
            <img src="${user.avatar_url}" alt="User avatar from GitHub" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">
                ${user.login} ${user.id}
              </h5>
              <p class="card-text">URL: <a href="${user.html_url}" target="github_home">${user.html_url}</a></p>
            </div>
          </div>
            `

			let col = document.createElement('div')
			col.classList.add('col');
			col.innerHTML = userHtml
			let grid = document.querySelector('.github')
			grid.appendChild(col)
		}

	}).catch(function (err) {
		console.log(err);
		document.querySelector('.github').innerHTML = `<p>Failed to download the requested data</p>`
	})
}
let userID = Math.ceil(Math.random() * 100000 + 1)

getGitHubUsers("https://api.github.com/users?per_page=10&since=0" + userID)
