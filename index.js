function openProgramCard() {
    let text = programCardButton.innerText;
    console.log(text);
    if (text === "+") {
        let ul = document.createElement("ul");
        ul.id = "list of pg";
        ul.innerHTML = `<li><a href="VSC.html">Visual Studio Code</a></li><li><a href="colab.html">Colaboratory</a></li><li><a href="#">Eclipse</a></li>`;
        programCardButton.parentNode.insertBefore(ul, programCardButton);
        programCardButton.innerText = "-";
    } else {
        let ul = document.getElementById("list of pg");
        ul.remove();
        programCardButton.innerText = "+";
    }
}

function openOpensourceCard() {
    let text = opensourceCardButton.innerText;
    console.log(text);
    if (text === "+") {
        let ul = document.createElement("ul");
        ul.id = "list of OS";
        ul.innerHTML = `<li><a href="github.html">GitHub</a></li><li><a href="git.html">Git</a></li>`;
        opensourceCardButton.parentNode.insertBefore(ul, opensourceCardButton);
        opensourceCardButton.innerText = "-";
    } else {
        let ul = document.getElementById("list of OS");
        ul.remove();
        opensourceCardButton.innerText = "+";
    }
}

function openUtilityCard() {
    let text = utilityCardButton.innerText;
    console.log(text);
    if (text === "+") {
        let ul = document.createElement("ul");
        ul.id = "list of UT";
        ul.innerHTML = `<li><a href="#">Notion</a></li><li><a href="#">XMind</a></li><li><a href="#">Dropbox</a></li>`;
        utilityCardButton.parentNode.insertBefore(ul, utilityCardButton);
        utilityCardButton.innerText = "-";
    } else {
        let ul = document.getElementById("list of UT");
        ul.remove();
        utilityCardButton.innerText = "+";
    }
}

let programCardButton = document.getElementById("open program card");
let opensourceCardButton = document.getElementById("open opensource card");
let utilityCardButton = document.getElementById("open utility card");

programCardButton.addEventListener("click", openProgramCard);
opensourceCardButton.addEventListener("click", openOpensourceCard);
utilityCardButton.addEventListener("click", openUtilityCard);
yCardButton.addEventListener("click", openUtilityCard);