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
        console.log(address);
    }

    else{
        webpage.src = "404.html"; 
    }
};


function Emulaton(){
    computer = window.top;
    console.log(computer.document.title);
    const dataToSend = ["Emulaton", "exe"];
    computer.postMessage(dataToSend, "*");
}

document.getElementById("bookmark1").addEventListener('click', ()=>{
    webpage = document.getElementById("webpage");
    webpage.src = "gamewhalethreads/main.html";
    document.getElementById("address").value = "gamewhalethreads/main.html";
})
