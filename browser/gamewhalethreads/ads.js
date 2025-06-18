path = "../ads/anbu_zine1-"

var ads = document.getElementsByClassName("ads")


for (let j = 0; j < ads.length; j++){
    let numAds = ads[j].getAttribute("data-num");
    let vert = ads[j].getAttribute("data-vert");


    for (let i = 0; i < numAds; i++) {
    let num = Math.floor(Math.random() * 8 + 1);
    let ad = document.createElement("img");
    ad.src = path + `${num}.png`;
    if(vert == 1){
        ad.style="width:100%; margin-bottom:10%;"
    }else{ad.style="height:100%; margin-right:5%;"};
    link = document.createElement("a");
    link.href = "../ads/anbu_zine.pdf";
    link.appendChild(ad);
    ads[j].appendChild(link);
}
}

