const{app,BrowserWindow,globalShortcut}=require('electron');const path=require('path');
app.commandLine.appendSwitch('autoplay-policy','no-user-gesture-required');
function make(){const w=new BrowserWindow({width:1280,height:720,backgroundColor:'#000',autoHideMenuBar:true,icon:path.join(__dirname,'icon.png'),title:'Blockland',webPreferences:{contextIsolation:true}});
w.setMenu(null);w.loadFile('index.html');w.webContents.on('before-input-event',(e,i)=>{if(i.type=='keyDown'&&i.key=='F11'){w.setFullScreen(!w.isFullScreen());e.preventDefault()}})}
app.whenReady().then(make);app.on('window-all-closed',()=>app.quit());
