folders = []

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
    elem.addEventListener("dblclick", () => {this.open()});
    let visible = document.getElementById("window");
    console.log("appended");
    if (visible){visible.querySelector('.content').appendChild(elem);}
  }

  append(file){
    this.fileList.push(file);
    update(this.name, this);
    //console.log(folders[0].fileList);
  }

  open(){
    console.log("opened " + this.name + " folder");
    var win = document.getElementById("window");
    var content = win.querySelector('.content');
    content.innerHTML = "";
    this.fileList.forEach((file, index) => {
      file.create(win);
    })

    var newButton = document.getElementById("new item");
    newButton.removeEventListener('click', newFolder);
    newButton.param = this;
    newButton.addEventListener('click', newFile);

  }
}

class file {
  constructor(name, extension){
    this.name = name;
    this.extension = extension;
  }

  create(win){
    console.log("created " + this.name)
    const elem = document.createElement("div");
    elem.className = "file";
    elem.id = `${this.name}.${this.extension}`
    elem.innerText = `${this.name}.${this.extension}`
    elem.draggable = true;
    elem.addEventListener('dragstart', dragStartHandler);
    elem.addEventListener('click', ()=>{
      exeHandler(this.name, this.extension);
    })

    if(win == undefined){
      document.getElementById("window").querySelector('.content').append(elem);
    } else{win.querySelector('.content').appendChild(elem);};
  }
}

function dragStartHandler(event){
  event.dataTransfer.setData("text", event.target.id);
};

function dragOverHandler(event) {
  event.preventDefault();
  
};

function dropHandler(event){
  console.log("dragged");
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
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
};

function newFile(event){
  fil = new file("new file", 'txt');
  event.currentTarget.param.append(fil);
  event.currentTarget.param.open();
}

function showFileExplorer(){
  let visible = document.getElementById("window");
  if (visible == null){
    fileExplorer = createWin("My Computer");
    fileExplorer.id = "window";
    fileExplorer.style.display = "block";
    var bar2 = document.createElement("div");
    bar2.className = "bar";
    bar2.style["background-color"] = "none";

    var newButton = document.createElement("div");
    newButton.className = "hover";
    newButton.innerHTML = "new";
    newButton.id = "new item";
    newButton.removeEventListener('click', newFile);
    newButton.addEventListener('click', newFolder);
    bar2.appendChild(newButton);
    fileExplorer.insertBefore(bar2, fileExplorer.querySelector('.content'));

    document.body.appendChild(fileExplorer);

  } else{
    fileExplorer = visible;
    var newButton = document.getElementById("new item");
    newButton.removeEventListener('click', newFile);
    newButton.addEventListener('click', newFolder);
  }

  var content = fileExplorer.querySelector('.content')
  content.innerHTML = "";
  folders.forEach((folder, index) => {
    folder.create();
  })
};

function Treasure(){
  let win = createWin("Treasure");
  win.style = "height: 90%; width: 90%; top:10px; left:9%;";
  let content = win.querySelector('.content');
  let game = document.createElement("iframe");
  game.src = "ship/index.html";
  game.style = "height:92%; width:98%;  position:absolute; margin:auto;"
  content.appendChild(game);
  document.body.appendChild(win);
}

function Emulaton(){
  let win = createWin("Emulaton");
  win.style = "height: 90%; width: 90%; top:5px; left:5%;";
  let content = win.querySelector('.content');
  let emulaton = document.createElement("iframe");
  emulaton.src = "emulaton.html";
  emulaton.style = "height:92%; width:98%;  position:absolute; margin:auto;"
  content.appendChild(emulaton);
  document.body.appendChild(win);
}

function browser(){
  let browse = createWin("web explorer")
  browse.style = "height: 90%; width: 90%; top:15px; left:7%;";
  let web = document.createElement("iframe");
  web.src = "browser/browser.html";
  web.style = "width:98%; height:92%; position:absolute; margin:auto;";
  browse.querySelector('.content').appendChild(web);
  document.body.appendChild(browse);
}

function receiveFile(event){
  console.log(event.data);
  download = new file(event.data[0], event.data[1]);

  fold = new folder(event.data[0]);
  fold.append(download);
  dialog(`${event.data[0]} downloaded`);
  console.log(folders);
}

function closeWin(event){
  console.log(`closed ${event.target}`);
  event.target.closest(".window").remove();
}

window.addEventListener("message", receiveFile, false);

//list of folders. click on a folder replaces innerhtml with files in folder.
//permanent button to return to main directory
//ondragdrop, get id of dropped file. create a new file with name and append to folder.
//on folder click, replace innerhtml with the file innertext

function createWin(name){
  var win = document.createElement("div");
  win.className = "window shadow";
  var bar = document.createElement("div");
  bar.className = "bar";
  bar.style["background-color"] = "blue";
  bar.innerHTML = `<span style="color: white;">${name}</span>`;
  var content  = document.createElement("div");
  content.className = "content";

  var nav = document.createElement("div");
  nav.className = "shadow";
  nav.style["margin-left"] = 'auto';
  var buttonImage = document.createElement('img');
  buttonImage.src = 'sprites/nav.png';
  nav.appendChild(buttonImage);
  bar.appendChild(nav);
  nav.addEventListener('click', closeWin);
  win.appendChild(bar);
  win.appendChild(content);
  return win;
}

function createIcon(name){
  console.log(name + " icon created");
  icon = document.createElement("div");
  icon.className = `${name} icon`;
  icon.addEventListener('click', ()=>{
    this[name]();
  });
  icon.innerHTML = `<br><div class='label'>${name}</div>`;
  document.body.appendChild(icon);
}

function dialog(text){
  box = document.createElement("dialog");
  box.open = "";
  box.style = "position:absolute; height:100px; color:white; font-size:larger; background-color: black;";
  box.innerHTML = `${text} <br> ok`;
  document.body.appendChild(box);
  box.showModal();
  box.id="box";
  box.addEventListener('click', ()=>{
    console.log("added");
    document.getElementById("box").remove();
  })
}

function explode(){
  console.log("exploding :)")
  explosion = document.createElement("dialog");
  explosion.style = "position:absolute; height:80%; width: 80%; color:white; font-size:50px; background-color: black;";
  timer = setInterval(explodeTime, 1000)
  let timeLeft = 5;
  function explodeTime() {
    explosion.innerHTML = `YOUR COMPUTER WILL EXPLODE IN ${timeLeft} SECONDS`;
    timeLeft -= 1;
    if(timeLeft < 0){
      clearInterval(timer);
    }
  }
  document.body.appendChild(explosion);
  explosion.showModal();
}

function exeHandler(name, ext){
  if(ext == "exe"){
      switch(name){
      case "Emulaton":
        createIcon("Emulaton");
        break;

      case "deleteSystem32":
        explode();
        break;
      
      default:
        break;
    }
  }
  
}



var main = new folder("System");
var file1 = new file("deleteSystem32", "exe");
console.log(folders)
main.append(file1);
console.log(folders);

//browser
//filesystem
  //system32, downloads, GAME/ISO/CHARACTERS
//emulator
  //files, keyboard driver
//game

