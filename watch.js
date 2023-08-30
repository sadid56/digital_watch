let sum = 0;
const startWatch = ()=>{
     setWatchId =  setInterval(()=>{
       const result = ++sum;
       document.getElementById('watch-timer').innerText = result;
    },1000)
    const startWatchBtbn = document.getElementById('strat-btn');
    startWatchBtbn.setAttribute('disabled',true)
    startWatchBtbn.style.backgroundColor = 'gray';
    startWatchBtbn.style.cursor = 'not-allowed'
}
const stopWatch = ()=>{
    clearInterval(setWatchId)
    const startWatchBtbn = document.getElementById('strat-btn');
    startWatchBtbn.removeAttribute('disabled',true)
    startWatchBtbn.style.backgroundColor = 'blue';
    startWatchBtbn.style.cursor = 'pointer'
}
const clearWatch = ()=>{
    sum = 0;
    document.getElementById('watch-timer').innerText ='0';
    clearInterval(setWatchId)
    const startWatchBtbn = document.getElementById('strat-btn');
    startWatchBtbn.removeAttribute('disabled',true)
    startWatchBtbn.style.backgroundColor = 'blue';
    startWatchBtbn.style.cursor = 'pointer'
}