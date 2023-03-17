 import BSN from 'bootstrap.native';

const logMessage = () => {
    console.log('Лог при вызове 3 секунды');
}
console.log("До вызова");

setTimeout(() => {
    console.log('time1');

}, 2000);
setTimeout((x) => {
    console.log('time2');
    console.log(x);

}, 2000, 3);

console.log("После вызова");

// Очистка таймаута
const logger = time=> {
    console.log(`Лог через ${time}ms`);
}

const timerID = setTimeout(logger, 2000, 2000);

const shouldCanselTimer = Math.random() >0.3;
console.log(shouldCanselTimer);
if (shouldCanselTimer) {
    clearTimeout(timerID);
}
// Интервал

const  logger1 =time => console.log(`Лог в интервале`);
console.log('До вызова интервал');
const intervalId = setInterval(logger1, 2000, 2000);
console.log('После вызова интервал');
const shouldCancelInterval= Math.random() >0.3;
if (shouldCancelInterval) {
    clearInterval(intervalId);
};

// Оповещение (notification)/////////////////////////////////////////////
const NOTIFICATION_DELAY= 3000;

let timeoutId = null;

const refs= {
    notification: document.querySelector('.js-alert'),
}
refs.notification.addEventListener('click', onNotificationClick);
showNotification();

function onNotificationClick() {
    hideNotification();
    clearTimeout(timeoutId);
}

function showNotification() {
    refs.notification.classList.add('is-visible');
    timeoutId = setTimeout(() => {
        console.log('нужно закрыть');
        hideNotification();
    }, NOTIFICATION_DELAY);
}

function hideNotification() {
    refs.notification.classList.remove('is-visible');
}
///////////////////Надоедалка///////////////////////////

const modal = new BSN.Modal('#subscription-modal');
const refs1 = {
    modal: document.querySelector('#subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
}
const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 1;
let promptCounter1 = 0;
let hasSubscribed1 = false;

openModal();

refs1.modal.addEventListener('hide.bs.modal', openModal);
refs1.subscribeBtn.addEventListener('click', onSubscribeBtnClick)

function openModal ()
{
    if(promptCounter1 === MAX_PROMPT_ATTEMPTS || hasSubscribed1) {
        return;
    };

    setTimeout(() => {
        console.log('Открываем надоедалку');
        modal.show();   
        promptCounter1 +=1; 
    }, PROMPT_DELAY)

}

function onSubscribeBtnClick() {
    modal.hide();
    hasSubscribed1 =true;
}