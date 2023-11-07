// Add numbers every seconds
function printNumbers(from, to){
    
    const timerId = setInterval(()=>{
        if(from > to){
            clearInterval(timerId);
        }
        else{
            console.log(from++);
        }
    }, 1000)
}

printNumbers(3,10);