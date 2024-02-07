const getNewAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    if(!res.ok) {
        alert('API Error');
        return;
    }
    const advice = await res.json();
    document.getElementById('advice-id').innerHTML = `A D V I C E &nbsp; # ${advice.slip.id}`;
    document.getElementById('advice-content').innerText = '"' + advice.slip.advice + '"';
};

document.getElementById('dice-button').onclick = getNewAdvice;

// start web
getNewAdvice();
