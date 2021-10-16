let valueOption = document.getElementById('hour').placeholder.toLowerCase();
console.log(valueOption);

const DATA_CONFIG = {
    1: ['hour',12],
    2: ['minute',60],
    3: ['period',['AM', 'PM']],
    4: ['cycle', 6],
    5: ['period-mobile',['AM', 'PM']],
    6: ['cycle-mobile', 6],
    7: ['hour-mobile',12],
    8: ['minute-mobile',60]
}




function checkInput(id) {
    let input = +document.getElementById(DATA_CONFIG[id][0]).value;
    
    if(id == 1) {
        if(input < 0 || input >12){
            confirm('Hour field must on range 0 - 12 \nSet 12 o\'clock');
            input = 12;
        }
    }
    if(id == 2) {
        if(input < 0 || input >60){
            confirm('Hour field must on range 00 - 60 \nSet 00');
            input = 00;
        } else if(input == 60) {
            document.getElementById('hour').value ++; 
            input = 0;
        }

    }
    document.getElementById(DATA_CONFIG[id][0]).value = input;
}

function alternateInput() {
    let hour = +document.getElementById('hour').value;
    let period = document.getElementById('period').value;
    let periodMobile = document.getElementById('period-mobile').value;
    let min = document.getElementById('minute').value;

    if(period === 'PM' || periodMobile === 'PM'){
        if(hour == 12) {
            document.getElementById('hour').value = 0;
            document.getElementById('period').value = 'AM';
            document.getElementById('period-mobile').value = 'AM';
        } else if(hour == 0) {
            document.getElementById('hour').value = 1;
        }
    }

    if(hour > 12) {
        confirm('Out of Range !!! \nResubmit Please');
        document.getElementById('hour').value = null;
        document.getElementById('minute').value = null;
        document.getElementById('period').value = null;
        document.getElementById('period-mobile').value = null;

    }
}



function timeCalc(){
    let hour = +document.getElementById('hour').value;
    let min = +document.getElementById('minute').value;
    let period = document.getElementById('period').value;
    let cycle = +document.getElementById('cycle').value;

    let periodMobile = document.getElementById('period-mobile').value;
    let cycleMobile = +document.getElementById('cycle-mobile').value;

    clearDisplay();
    
    let alarm = alarmTime(hour, min, period, cycle, periodMobile, cycleMobile);


    console.log(alarm);

    console.log(alarm[2]);

    document.getElementById('outHour').innerHTML = alarm[0];
    document.getElementById('outMinute').innerHTML = alarm[1];
    document.getElementById('outPeriod').innerHTML = alarm[2];

}




function alarmTime(hour,min,period,cycle) {
    let alarmHour;
    let alarmMin;
    let alarmPeriod = period; 
    let alarmCycle = cycle*1.5; 

    //Desktop 
    alarmMin = (alarmCycle - Math.floor(alarmCycle))*60 + min;
    let time =  (Math.floor(alarmCycle) + hour) - 12;

    if(time <= 0) {
        alarmHour = 12 + time;
    } else if(time > 0 && period === 'PM') {
        alarmHour = time;
        alarmPeriod = 'AM';
    } else if(time > 0 && period === 'AM') {
        alarmHour = time;
        alarmPeriod = 'PM';
    }

    console.log('hour   - '+ hour);
    console.log('minus  - '+ min);
    console.log('period - '+ period);
    console.log('cycle  - '+ alarmCycle + ' - ' +Math.floor(alarmCycle));
    console.log('Alarm Time  - '+ time);
    console.log('Alarm Hour  - '+ alarmHour);
    console.log('Alarm Minu  - '+ alarmMin);
    console.log('Alarm Period  - '+ alarmPeriod);


    return [alarmHour, alarmMin, alarmPeriod];
}



function clearDisplay() {
    document.getElementById('outHour').innerHTML = null;
    document.getElementById('outMinute').innerHTML = null;
    document.getElementById('outPeriod').innerHTML = null;
}


function selectOption(id, value) {
    let dataId = DATA_CONFIG[id][0];
    document.getElementById(dataId).value = value;
    console.log('****')
    timeCalc();
    alternateInput();
}






// MOBILE FUNCTION

function renderSelection() {
    let msg = '';
    for(i of DATA_CONFIG[5][1]){
        msg += `<option value="${i}">${i}</option>`;
    }
    document.getElementById(DATA_CONFIG[5][0]).innerHTML = msg;

    msg = '';

    for(let i=6; i <= 8; i++){
        for(let j=0 ; j<= DATA_CONFIG[i][1]; j++){
            msg += `<option value="${j}">${j}</option>`;
        }
        document.getElementById(DATA_CONFIG[i][0]).innerHTML = msg;
        msg = '';
    }
}

renderSelection();


function checkInputMobile(id) {
    let input = +document.getElementById(DATA_CONFIG[id][0]).value;
    
    
    if(id == 8) {
        if(input == 60){
            document.getElementById('hour-mobile').value ++; 
            input = 0;
        }
    }
    document.getElementById(DATA_CONFIG[id][0]).value = input;
}

function alternateInputMobile() {
    let hour = +document.getElementById('hour-mobile').value;
    let period = document.getElementById('period-mobile').value;
    let min = document.getElementById('minute-mobile').value;

    if(period === 'PM'){
        if(hour == 12) {
            document.getElementById('hour-mobile').value = 0;
            document.getElementById('period-mobile').value = 'AM';
        } else if(hour == 0) {
            document.getElementById('hour-mobile').value = 1;
        }
    }

    if(hour > 12) {
        confirm('Out of Range !!! \nResubmit Please');
        document.getElementById('hour-mobile').value = null;
        document.getElementById('minute-mobile').value = null;
        document.getElementById('period-mobile').value = null;
    }
}

function timeCalcForMobile(){
    let hour = +document.getElementById('hour-mobile').value;
    let min = +document.getElementById('minute-mobile').value;
    let periodMobile = document.getElementById('period-mobile').value;
    let cycleMobile = +document.getElementById('cycle-mobile').value;

    clearDisplay();
    
    let alarm = alarmTimeForMobile(hour, min, periodMobile, cycleMobile);


    console.log(alarm);

    console.log(alarm[2]);

    document.getElementById('outHour-mobile').innerHTML = alarm[0];
    document.getElementById('outMinute-mobile').innerHTML = alarm[1];
    document.getElementById('outPeriod-mobile').innerHTML = alarm[2];

}


function alarmTimeForMobile(hour,min,period,cycle) {
    let alarmHour;
    let alarmMin;
    let alarmPeriod = period; 
    let alarmCycle = cycle*1.5; 

    //Desktop 
    alarmMin = (alarmCycle - Math.floor(alarmCycle))*60 + min;
    let time =  (Math.floor(alarmCycle) + hour) - 12;

    if(time <= 0) {
        alarmHour = 12 + time;
    } else if(time > 0 && period === 'PM') {
        alarmHour = time;
        alarmPeriod = 'AM';
    } else if(time > 0 && period === 'AM') {
        alarmHour = time;
        alarmPeriod = 'PM';
    }

    console.log('hour   - '+ hour);
    console.log('minus  - '+ min);
    console.log('period - '+ period);
    console.log('cycle  - '+ alarmCycle + ' - ' +Math.floor(alarmCycle));
    console.log('Alarm Time  - '+ time);
    console.log('Alarm Hour  - '+ alarmHour);
    console.log('Alarm Minu  - '+ alarmMin);
    console.log('Alarm Period  - '+ alarmPeriod);


    return [alarmHour, alarmMin, alarmPeriod];
}

function mobileSelect(id) {
    timeCalcForMobile();
    alternateInputMobile();
}