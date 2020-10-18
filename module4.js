
(function(){
/*In this assignment, you are going to loop over an array of names and print out either a hello or goodbye to that name to the browser console. If the name starts with a letter j or J, you are to print out Goodbye JSomeName. If the name starts with any other letter, you are to print out Hello SomeName.

However, in order to do that printing you will have to use 2 externally provided libraries whose code is not 100% ready to be used. Using the things we've learned in this module, your job will be to fix the code in those libraries.

You will get some starter code to work with where all the steps of what you need to do are clearly spelled out for you.*/

// Hello piramu
//Hello bala
// Hello Hanuja
//Goodbye John
//Goodbye joe
//Hello Danoshan


// step 1:
// wrap the entire contents of module4.js inside of an 
//IIFE as described in lecture 52, part2
// step 2 will be done in speak-hello.js file

var names=['John','joe','piramu','bala','Hanuja','Danoshan'];
for(var i=0;i<names.length;i++)
{
	var fletter=((names[i]).charAt(0)).toLowerCase();
	if(fletter=='j')
	{
		//call goodbye.speak method
		byespeaker.speak(names[i]);
	}
	else
	{
		//call hello.speak method
		hellospeaker.speak(names[i]);
	}
} 
})();
