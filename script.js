const apiWrapper = document.getElementById("api-wrapper")

async function getData() {
    let response = await fetch("https://api.publicapis.org/entries")
    let data = await response.json()

    console.log(data.entries)
    return data.entries
}

function getApiHtml(myAPI) {
    return `<div class="each-api">
        <div class="api-name"><a href="${myAPI.Link}" target="_blank">${myAPI.API}</a></div>
        <div>${myAPI.Description}</div>
        <div>${myAPI.Auth}</div>
        <div>${myAPI.HTTPS}</div>
    </div>    
        `
}

getData().then(myAPIs => {
    apiWrapper.innerHTML = `<div class="centered">
        <div class="each-api headers">
        <h3>API Name</h3>
        <h3>Description</h3>
        <h3>Authorisation required?</h3>
        <h3>Supports HTTPS (true/false)</h3>
      </div>
    ${myAPIs.map(getApiHtml).join('')}</div>`
}).catch(error => console.log(`Error: ${error}`))