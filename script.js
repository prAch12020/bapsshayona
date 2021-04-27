let cater = document.querySelector(".catering");
function mouseover(){ cater.style.animationPlayState = "paused"; }
function mouseleave(){ cater.style.animationPlayState = "running";}


let menuwrapper = document.querySelector(".menu-wrapper");

function runAnime(phone){
	if(phone.matches){ if(scrollY > 1140  && scrollY < 1960){ menuwrapper.style.animationPlayState = "running"; } }
}

window.addEventListener('scroll', ()=>{
	let phone = window.matchMedia("(max-width: 600px)");
	runAnime(phone);
	phone.addListener(runAnime);

    let scrollY = window.scrollY;
    
    if(scrollY > 1250 && scrollY < 1950){
    	menuwrapper.style.animationPlayState = "running";
    }
    else{ menuwrapper.style.animationPlayState = "paused"; }
});

let menu = document.querySelector(".gallery");
fetch("http://localhost:3000/menu").then(response => response.json()).then(data => {
    for(let i = 0; i <= 18; i++){
    	let maindiv = document.createElement("div");
    	maindiv.classList.add("maindiv");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        div1.classList.add("image-div");
        img.classList.add("image");
        img.src = data[i].fields.url;
        let div2 = document.createElement("div");
        div2.classList.add("details-div");
        let name = document.createElement("span");
        name.innerHTML = data[i].fields.name;
        let desc = document.createElement("span");
        desc.innerHTML = data[i].fields.desc;
        let price = document.createElement("span");
        price.innerHTML = data[i].fields.price;
        let br1 = document.createElement("br");
        let br2 = document.createElement("br");
        let br3 = document.createElement("br");
        let br4 = document.createElement("br");
        div1.append(img);
        div2.append(name, br1,br2, desc, br3,br4, price);
        maindiv.append(div1, div2);
        menu.append(maindiv);
    }
});