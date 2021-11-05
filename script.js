document.getElementById("add-card-button").addEventListener("click", function () {

    var cardcontainer = document.getElementById("card-container");
    cardcontainer.innerHTML += '<img class="card-img-top" src="https://source.unsplash.com/random/' + Math.floor(Math.random() * (800 - 600 + 1) + 600)+'x'+Math.floor(Math.random() * (800 - 600 + 1) + 600)+'" alt="Card image cap" >'
});