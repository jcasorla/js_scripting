const { exec } = require("child_process");

exec("pgrep -f mysqld.pid", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
	let str = stdout;
	let arr = str.split(' ');
	for(let i=0; i<arr.length; i++){
		let pid = arr[i];
		console.log(pid);
		exec("sudo kill -9 " + pid, (error, stdout,stderr)=>{
			if (error) {
        			console.log(`error: ${error.message}`);
        			return;
    			}
    			if (stderr) {
        			console.log(`stderr: ${stderr}`);
        			return;
    			}
			console.log('process killed');
			console.log(stdout);

		})
	}	
});
