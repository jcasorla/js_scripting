require('shelljs/global');

let images =ls('images/*.jpg'); //fs.readdirSync
echo(images);

rm('-rf','images/thumbs'); //fs.rmdirSync()
mkdir('images/thumbs'); //fs.mkdirSync()


images.forEach(img=>{
	echo(img);
	cp(img, 'images/thumbs');	
});
var version = exec('node --version', {silent:true}).stdout;

echo (version);
//cp('*.jpg', 'images/thumbs'); 
