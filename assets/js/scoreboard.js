var boxTableEl = document.querySelector('#box-office-table tbody');
var budgetTableEl = document.querySelector('#budget-table tbody');
var ratingsTableEl = document.querySelector('#ratings-table tbody');
var scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || [];

function onLoad() {
    for (var i = 0; i < scoreboard.length; i++) {
        displayOnBoard(scoreboard[i])
    }
}

function displayOnBoard(score) {
    var trEl = document.createElement('tr');
    var nameEl = document.createElement('td');
    var scoreEl = document.createElement('td');
    var filtersEl = document.createElement('td');

    nameEl.textContent = score.userName;
    scoreEl.textContent = score.finalScore;
    filtersEl.textContent = score.genreUsed;

    trEl.appendChild(nameEl)
    trEl.appendChild(scoreEl)
    trEl.appendChild(filtersEl)

    if (score.gameTypeUsed == 'Box office') {
        boxTableEl.appendChild(trEl);
    } else if (score.gameTypeUsed == 'Budget') {
        budgetTableEl.appendChild(trEl);
    } else if (score.gameTypeUsed == 'Ratings') {
        ratingsTableEl.appendChild(trEl);
    } else {
        console.log('failed ln 17');
    }
}

function goHome(event) {
    var url = window.location.href
    var index = url.indexOf('/scoreboard.html');

    url = url.slice(0, index) + '/index.html'
    window.location.replace(url);
}

function toggleFilters(event) {

}

document.getElementById('back-btn').addEventListener('click', goHome);
document.getElementById('toggle-btn').addEventListener('click', toggleFilters);

onLoad();