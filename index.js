function openProgramCard() {
    let text = programCardButton.innerText;
    console.log(text);
    if (text === "+") {
        let ul = document.createElement('ul');
        ul.id = "list of pg";
        ul.innerHTML = `<li><a href="#">Colaboraty</a></li><li><a href="#">Visual Studio Code</a></li><li><a href="#">Eclipse</a></li>`
        programCardButton.parentNode.insertBefore(ul, programCardButton);
        programCardButton.innerText = "-";
    } else {
        let ul = document.getElementById('list of pg');
        ul.remove();
        programCardButton.innerText = "+";
    }
}

function openOpensourceCard() {
    let text = opensourceCardButton.innerText;
    console.log(text);
    if (text === "+") {
        let ul = document.createElement('ul');
        ul.id = "list of OS";
        ul.innerHTML = `<li><a href="#">Github</a></li><li><a href="#">Gitlab</a></li><li><a href="#">Bitbucket</a></li>`
        opensourceCardButton.parentNode.insertBefore(ul, opensourceCardButton);
        opensourceCardButton.innerText = "-";
    } else {
        let ul = document.getElementById('list of OS');
        ul.remove();
        opensourceCardButton.innerText = "+";
    }
}

function openUtilityCard() {
    let text = utilityCardButton.innerText;
    console.log(text);
    if (text === "+") {
        let ul = document.createElement('ul');
        ul.id = "list of UT";
        ul.innerHTML = `<li><a href="#">Notion</a></li><li><a href="#">Xmind</a></li><li><a href="#">Dropbox</a></li>`
        utilityCardButton.parentNode.insertBefore(ul, utilityCardButton);
        utilityCardButton.innerText = "-";
    } else {
        let ul = document.getElementById('list of UT');
        ul.remove();
        utilityCardButton.innerText = "+";
    }
}


let programCardButton = document.getElementById('open program card');
let opensourceCardButton = document.getElementById('open opensource card');
let utilityCardButton = document.getElementById('open utility card');

programCardButton.addEventListener("click", openProgramCard);
opensourceCardButton.addEventListener("click", openOpensourceCard);
utilityCardButton.addEventListener("click", openUtilityCard);