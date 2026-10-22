// copies three.js next to the game so it works offline
const fs=require('fs');try{fs.copyFileSync('node_modules/three/build/three.min.js','three.min.js');
let h=fs.readFileSync('index.html','utf8');h=h.replace(/<script src="[^"]*three[^"]*"><\/script>/,'<script src="three.min.js"></script>');fs.writeFileSync('index.html',h);console.log('three.js bundled for offline play')}catch(e){console.log('could not bundle three.js:',e.message)}
