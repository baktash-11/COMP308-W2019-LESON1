
//self-executing anonymous fucntion 
//IIFE -- Immediately Invoked Function Expression
(function(){
    let myFunctionalVariable=0;
    
    function Start(){
        let myLocalVariable
        console.log(`App Started...!${myFunctionalVariable}`);
    }
    

    window.addEventListener("load", Start)
   
})();

/*
window.addEventListener("load", function(){
        let myLocalVariable=0;
        console.log(`App Started ... ${myFunctionalVariable}`);
        //an example of call back function 

    });
 window.addEventListener("load", ()=>{
        let myLocalVariable=0;
        console.log(`App Started ... ${myFunctionalVariable}`);
        //an example of call back function 

    });
*/