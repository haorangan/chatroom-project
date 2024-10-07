let msgbox = document.querySelector('#msgbox');
let username = document.querySelector('#username');
let user;
let room = document.querySelector("#room");

msgbox.addEventListener("submit", event => {
    event.preventDefault();
    let message = document.getElementById("msg").value;
    let data = {
        username: user,
        message: message
    }
    fetch("http://localhost:8080/api/chatroom/save", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    document.getElementById("msg").value = "";
})


username.addEventListener("submit", (event) => {
    event.preventDefault();
    msgbox.classList.remove("hidden");
    username.classList.add("hidden");
    // load messages
    // also load all messages stored in sql
    user = document.getElementById("ign").value;
    setInterval(loadData, 1000);
})

function loadData() {
    fetch("http://localhost:8080/api/chatroom/texts")
    .then(response => response.json())
    .then(data => {
        room.innerHTML = "";
        data.reverse();
        counter = 0;
        for(let object of data) {
            counter++;
            if(counter == 10) break;
            let p = document.createElement("p");
            p.innerHTML = "<b>" + object.username + "</b>" + ": " + object.message;
            p.style="text-align:left";
            room.appendChild(p);
        }
    });
}