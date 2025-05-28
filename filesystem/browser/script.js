var addressList = [
    "vim.html", 
    "gamewhalethreads/main.html",
    "EAST.html",
    "WEST.html",
    "NORTH.html",
    "SOUTH.html"
]


function search(){
    webpage = document.getElementById("webpage");
    address = document.getElementById("address").value;
    let i = addressList.findIndex((val, index)=>{
        return address == val;
    })

    if (i != -1){
        webpage.src = address;
    }

    else{
        webpage.src = "404.html";
    }
};


var nav = document.getElementById("nav");
nav.addEventListener('click', closeBrowser);


function closeBrowser(){
    console.log("nbru");
}

