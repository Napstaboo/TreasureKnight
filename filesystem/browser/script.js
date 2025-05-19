addressList = ["vim.html"]



function search(){
    webpage = document.getElementById("webpage");
    address = document.getElementById("address").value;
    let i = addressList.findIndex((val, index)=>{
        return address == val;
    })

    if (i != -1){
        webpage.src = address
    }

    else{
        webpage.src = "404.html"
    }
}