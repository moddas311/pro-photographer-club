const addToLocal = time => {

    let breakTime = {}


    const storedTime = localStorage.getItem('break-time');

    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }
    else {
        breakTime[time] = time;
    }

    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

export { addToLocal };