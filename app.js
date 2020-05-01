document.getElementById('btn').addEventListener("click", getQuote);

function getQuote() {
    let api = new XMLHttpRequest();

    api.open("GET", "https://api.quotable.io/random", true);

    api.onload = function () {
        if (this.status == 200) {
            //convertir datos a un formato legible
            let quote = JSON.parse(this.responseText);

            let quoteView = document.getElementById('quote');

            quoteView.innerHTML = `
                <p>"${quote.content}"</p>
                <p><b>${quote.author}</b></p>
            `;

            quoteView.style.backgroundColor = "#3B3B98";
            quoteView.style.color = "#ffffff";
        }
    }

    api.send();
}

document.getElementById('btn2').addEventListener('click', getSimpsQuote);

function getSimpsQuote() {
    let api = new XMLHttpRequest();

    api.open("GET", "https://thesimpsonsquoteapi.glitch.me/quotes", true);

    api.onload = function () {
        if (this.status == 200) {
            //convertir datos a un formato legible
            let quote = JSON.parse(this.responseText);

            let quoteView = document.getElementById('quote');

            for(let i in quote) {
                quoteView.innerHTML = `
                <p>"${quote[i].quote}"</p>
                <p><b>${quote[i].character}</b></p>
                <img src="${quote[i].image}" alt="simpson character">
            `
            };

            quoteView.style.backgroundColor = "#FFD521";
            quoteView.style.color = "#000000";
        }
    }

    api.send();
}