folders = []


class folder{
  constructor(name){
    this.name = name;
    const elem = document.createElement("div");
    elem.className = "folder";
    elem.id = name;
    elem.innerHTML=name;
    elem.addEventListener("click", () => {this.open("open")});
    document.getElementById("window").appendChild(elem);
    this.fileList = [];
    folders.push(this);
  }

  append(file){
    this.fileList.push(file);
  }

  open(string){
    console.log(string);
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
    const elem = win.createElement("div");
    elem.className("file");
    elem.id = `${this.name}.${this.extension}`
    elem.innerText = `${this.name}.${this.extension}`
    elem.draggable = true;
  }
}

//list of folders. click on a folder replaces innerhtml with files in folder.
//permanent button to return to main directory
//ondragdrop, get id of dropped file. create a new file with name and append to folder.
//on folder click, replace innerhtml with the file innertext

new folder("main");
new folder("bruh");
new folder("main");
new folder("bruh");
new folder("noob");
new folder("main");
new folder("grace");
new folder("bruh");
new folder("main");
new folder("love");
new folder("bruh");