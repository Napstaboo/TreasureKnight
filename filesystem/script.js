folders = []
selected = []

class folder{
  constructor(name){
    let i = folders.findIndex((folder, index, array) => {
    return folder.name == name;
    });
    if (i == -1){
      this.name = name;
      this.fileList = [];
      folders.push(this);
      this.create();
    }
    else{
      new folder(`${name}(1)`)
    }
  }

  create(){
    const elem = document.createElement("div");
    elem.className = "folder";
    elem.id = this.name;
    elem.innerHTML = `<div class="label">${this.name}</div>`;
    elem.addEventListener("click", () => {this.open(this.name)});
    document.getElementById("window-content").appendChild(elem);
  }

  append(file){
    this.fileList.push(file);
    update(this.name, this);
    //console.log(folders[0].fileList);
  }

  open(name){
    console.log(name);
    var win = document.getElementById("window-content");
    win.innerHTML = "";
    this.fileList.forEach((file, index) => {
      file.create(win);
    })

    var newButton = document.getElementById("new item");
    newButton.removeEventListener('click', newFolder);
    newButton.param = this;
    newButton.addEventListener('click', newFile);

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
    return folder.name == name;
  });
  
  console.log(i);
  if(i == -1){
    folders.push(content);
  } else {folders.splice(i, 1, content)};

};

function newFolder(event){
  fol = new folder("newFolder");
}

function newFile(event){
  fil = new file("new file", 'txt');
  event.currentTarget.param.append(fil);
  event.currentTarget.param.open();
}

function showWindow(){
  var win = document.getElementById("window");
  win.style.display = "block";
  var content = document.getElementById("window-content")
  content.innerHTML = "";
  folders.forEach((folder, index) => {
    folder.create();
  })
  var newButton = document.getElementById("new item");
  newButton.removeEventListener('click', newFile);
  newButton.addEventListener('click', newFolder);
};




//list of folders. click on a folder replaces innerhtml with files in folder.
//permanent button to return to main directory
//ondragdrop, get id of dropped file. create a new file with name and append to folder.
//on folder click, replace innerhtml with the file innertext

var main = new folder("main");
var file1 = new file("file1", "txt");
console.log(folders)
main.append(file1);
console.log(folders);



//browser
//filesystem
  //system32, downloads, GAME/ISO/CHARACTERS
//emulator
  //files, keyboard driver
//game