//add boilerplate code here (readline)

//use reader function here (uses .length) *should produce array output
//can add special conditions as well
// to turn in go to frodo and use github repo link (commit and push regularly)

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validation tool. Please type in the password to be validated: ", function(input){

let failure = true;

for(i = 0; i < input.length; i++) {
    if(input.charAt(i) === " ") {
        failure = true;
        break;
    }
    if(input.charAt(i) === '!' || input.charAt(i) === '$') {
        failure = false;
    }
}

	if(input.length >= 10 && failure === false) {
        console.log(`
         /$$$$$$                                                             /$$
        /$$__  $$                                                           | $$
       | $$  \__/ /$$   /$$  /$$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$ /$$$$$$$| $$
       |  $$$$$$ | $$  | $$ /$$_____/ /$$_____/ /$$__  $$ /$$_____//$$_____/| $$
        \____  $$| $$  | $$| $$      | $$      | $$$$$$$$|  $$$$$$|  $$$$$$ |__/
        /$$  \ $$| $$  | $$| $$      | $$      | $$_____/ \____  $$\____  $$    
       |  $$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$ /$$$$$$$//$$$$$$$/ /$$
        \______/  \______/  \_______/ \_______/ \_______/|_______/|_______/ |__/
                                                                                
       `)
    } else{
        console.log(`
            (                                  
            )\ )           (                   
           (()/(    )  (   )\   (   (      (   
            /(_))( /(  )\ ((_) ))\  )(    ))\  
           (_))_|)(_))((_) _  /((_)(()\  /((_) 
           | |_ ((_)_  (_)| |(_))(  ((_)(_))   
           | __|/ _  | | || || || || '_|/ -_)  
           |_|  \__,_| |_||_| \_,_||_|  \___|  
                                               
        Ensure your password has 10 or more characters with no spaces and contains ! or $ and try again.`
        )
    }
	// This line closes the connection to the command line interface.
	reader.close()

});