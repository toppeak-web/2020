const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

    function getTime(){
        const date = new Date(),         //시간 가져오기
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
        clockTitle.innerText = `${hours < 10 ?`0${hours}` : hours}:${minutes < 10 ?`0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` : seconds}`//mini if ?=if :=else
                                            // if(seconds < 10){
                                            //     clockTitle.innerText = `${hours}:${minutes}:0${seconds}`
                                            // }
                                            // else{
                                            //     clockTitle.innerText = `${hours}:${minutes}:${seconds}`
                                            // }
    }


    function init(){
        getTime();
        setInterval(getTime,1000);  //함수 인자값을 받고 시간받음
    }
    init();