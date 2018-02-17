
function insultGenerator (inputNum) {
	var output;
    this.inputNum = inputNum;
    //Decider decides whether or not to give a quip (100 options)
    var quipDecider = Math.floor(Math.random() * 7);
    //var quipChoice is used to determine which of the quips to use out of a list of quips for a given number set
    var quipChoice = Math.floor(Math.random() * 4);
    
    //This is the array of quips that can be addressed and set to output.
	var quip = new Array(
		/*0*/ "0. This is also the amount of effort it would have taken you to solve this yourself. Lazy.",
		/*1*/ "1. Was this honestly too hard for you?",
		/*2*/ "2. I feel like you\'re using me as a crutch.",
		/*3*/ "This wasnt that hard. Come on.",
		/*4*/ "69. Nice.",
		/*5*/ "420. Dank.",
		/*6*/ ". Wow! Big boy numbers!",
		/*7*/ ". Negative numbers are probably pretty hard for you.",
		/*8*/ ". Honestly just round it next time. It doesn\'t matter.",
		/*9*/ ". You should start doing these yourself.",
		/*10*/ "420. THE DEVIL\'S LETTUCE!",
		/*11*/ ". Quit making me do big numbers.",
        /*12*/ ". I\'m done doing this crap for you.",
        /*13*/ "69. Classy."
	);
    //this if statemnt is used to determine if it's roasting time (currently set to 5/100 times)
	if (quipDecider > 1){
	    this.output = inputNum;
    }
    
    //options for input 0
	else if (inputNum === 0) {
        this.output = quip[0];
    } 

    //options for non-integers
    else if (inputNum.toString().indexOf('.') != -1) {
		this.output = inputNum.toString() + quip[8];
    }

     else if (inputNum == 1) {
		this.output = quip[1];
    }

     else if (inputNum == 2) {
		this.output = quip[2];
    } 

    //options for whole numbers below 10
    else if (inputNum > 2 && inputNum <= 10){
        if (quipChoice <= 4){
            this.output = inputNum.toString() + quip[9];
        }
        else if (quipChoice >4){
            this.output = inputNum.toString() + quip[3];
        }
    }

    //options for 69
    else if (inputNum == 69) {
        if (quipChoice < 2){
            this.output = quip[4];
        }
        else{
            this.output = quip[13];
        }
    } 

    //options for 420
    else if (inputNum == 420){
        if (quipChoice < 2){
            this.output = quip[5];
        }
        else {
            this.output = quip[10]
        }
    }

    //options for large numbers
    else if (inputNum > 1000) {
        if (quipChoice < 2){
            this.output = inputNum.toString() + quip[6];
        }
        else{
            this.output = inputNum.toString() + quip [11];
        }
    }

    //Options for negative inputs
    else if (inputNum < 0){
        if (quipChoice < 2){
            this.output = inputNum.toString() + quip[7];
        }
        else {
            this.output = inputNum.toString() + quip [12];
        }
    }

    else {
        this.output = inputNum;
	}
	return this.output;
};
