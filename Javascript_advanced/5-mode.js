const changeMode = (size, weight, transform, background, color) => {
    return () => {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}
const main = () => {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    document.querySelector("body").innerHTML = `
        <p>Welcome Holberton</p>
        <button id="btn1">Spooky</button>
        <button id="btn2">Dark mode</button>
        <button id="btn3">Scream mode</button>
        `;
        document.getElementById("btn1").addEventListener("click", spooky);
        document.getElementById("btn2").addEventListener("click", darkMode);
        document.getElementById("btn3").addEventListener("click", screamMode);
    };

main();