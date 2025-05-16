folders = []


class folder{
  constructor(name){
    this.name = name;
    this.fileList = [];
    folders.push(this);
    this.create();
  }

  create(){
    const elem = document.createElement("div");
    elem.className = "folder";
    elem.id = this.name;
    elem.innerHTML = this.name;
    elem.addEventListener("click", () => {this.open(this.name)});
    document.getElementById("window").appendChild(elem);
  }

  append(file){
    this.fileList.push(file);
    update(this.name, this);
    //console.log(folders[0].fileList);
  }

  open(name){
    console.log(name);
    var win = document.getElementById("window");
    win.innerHTML = "";
    this.fileList.forEach((file, index) => {
      file.create(win);
    })
  }

  //function to replace window innerhtml with files
  //for file in filelist, file.create(window)
  //window is an iframe
  //document.getElementById("window").innerHTML = "test";
}

class file {
  constructor(name, extension){
    this.name = name;
    this.extension = extension;
  }

  create(win){
    const elem = document.createElement("div");
    elem.className = "file";
    elem.id = `${this.name}.${this.extension}`
    elem.innerText = `${this.name}.${this.extension}`
    elem.draggable = true;
    win.appendChild(elem);
  }
}

function update(name, content){
let i = folders.findIndex((folder, index, array) => {
  folder.name = name;
});

if(i == -1){
  folders.push(content);
} else {folders.splice(i, 1, content)};

}

function menu(){
  var win = document.getElementById("window");
  win.innerHTML = "";
  folders.forEach((folder, index) => {
    folder.create();
  })
}


//list of folders. click on a folder replaces innerhtml with files in folder.
//permanent button to return to main directory
//ondragdrop, get id of dropped file. create a new file with name and append to folder.
//on folder click, replace innerhtml with the file innertext

var main = new folder("main");
var file1 = new file("file1", "txt");
//console.log(folders[0].fileList)
main.append(file1);