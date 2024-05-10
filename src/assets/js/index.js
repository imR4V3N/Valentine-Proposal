var valentin = {
    "choix" : [
        {
            "text" : "Yessss!!",
            "image" : "./assets/img/0.jpg"
        },
        {
            "text" : "Are you sure?",
            "image" : "./assets/img/2.jpg"
        },
        {
            "text" : "Please",
            "image" : "./assets/img/3.jpg"
        },
        {
            "text" : "Don't do that",
            "image" : "./assets/img/4.jpg"
        },
        {
            "text" : "You're breaking my heart",
            "image" : "./assets/img/5.jpg"
        },
        {
            "text" : "I'm gonna cry",
            "image" : "./assets/img/6.jpg"
        }
    ]
}

var yes = document.getElementById("yes");
var no = document.getElementById("no");
var img = document.getElementById("img");
var txt = document.getElementById("txt");
var width = 7;
var height = 5;
var i = 1;

function clickNo(i){
    if (i == 6) {
        img.setAttribute('src',"./assets/img/7.jpg");
        txt.textContent = "Okey bye";
        yes.style.display = 'none';
        no.style.display = 'none';
    }
    img.setAttribute('src',valentin.choix[i].image);
    yes.style.width = (width + i) + "em";
    yes.style.height = (height + i) + "em";
    no.textContent = valentin.choix[i].text;
}

function clickYes(i){
    img.setAttribute('src',valentin.choix[0].image);
    txt.textContent = valentin.choix[0].text;
    yes.style.display = 'none';
    no.style.display = 'none';
}

no.addEventListener('click', () => {
    clickNo(i);
    i++;
});

yes.addEventListener('click', () => {
    clickYes(i);
    i++;
});