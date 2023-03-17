class Countdown {
    start() {
        console.log('start');
    }
    stop() {
        console.log('stop');
    }
};


const markup= `
<section class="countdown">
    <article id="js-countdown" class="countdown__timer">
        <section class="countdown__value countdown__days">00</section>
        <section class="countdown__value">:</section>
        <section class="countdown__value countdown__hours">00</section>
        <section class="countdown__value">:</section>
        <section class="countdown__value countdown__minutes">00</section>
        <section class="countdown__value">:</section>
        <section class="countdown__value countdown__seconds">00</section>
    </article>
    <form class="countdown__actions" data-action="start">
        <input type="number" class="countdown_datepicker" min="2024" max="2099" name="year" value='2024'>
        <button type="submit" class="countdown__toggle">start</button>
    </form>
</section>
`;

// add to DOM
document.body.innerHTML = markup;
const countdown = new Countdown();


//add refs
const ref={
    actionForm: document.querySelector('form.countdown__actions'),
    days: document.querySelector('.countdown__days'),
    hours: document.querySelector('.countdown__hours'),
    minutes: document.querySelector('.countdown__minutes'),
    seconds: document.querySelector('.countdown__seconds'),
    
}

ref.actionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = e.currentTarget.querySelector('button[type="submit"]');
    const { year, dataset } = e.currentTarget;

    console.log(e.currentTarget.year.value);
    if (e.currentTarget.dataset.action === 'start') {
        submitBtn.textContent= 'stop';
        dataset.action = 'stop';
        year.disabled = true;
        countdown.start();
    } else {
        submitBtn.textContent= 'start';
        dataset.action = 'start';
        year.disabled = false;
        countdown.stop();
    }
    


});

