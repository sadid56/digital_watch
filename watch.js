let sum = 0;
const startWatch = ()=>{
     setWatchId =  setInterval(()=>{
       const result = ++sum;
       document.getElementById('watch-timer').innerText = result;
    },1000)
}
const stopWatch = ()=>{
    clearInterval(setWatchId)
}
const clearWatch = ()=>{
    sum = 0;
    document.getElementById('watch-timer').innerText ='0';
    clearInterval(setWatchId)
}