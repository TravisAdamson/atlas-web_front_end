function createElement(data) {
	let body = document.body;
	let paragraph = document.createElement("P");
	let content = document.createTextNode(data);
	paragraph.appendChild(content);
	body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let newRequest = new XMLHttpRequest();
    newRequest.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    newRequest.onload = function() {
        if (this.status === 200) {
            const data = JSON.parse(this.response);
            const article = data.query.pages[21721040].extract;
            callback(article);
        }
    }
    newRequest.send();
};

queryWikipedia(createElement);
