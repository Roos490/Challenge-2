

 /**klok*/
	 	const deg = 6;
	 	const hr = document.querySelector("#hr");
	 	const mn = document.querySelector("#mn");
	 	const sc = document.querySelector("#sc");
	 	setInterval(() => {
	 		let day = new Date();
	 		let hh = day.getHours() * 30;
	 		let mm = day.getMinutes() * deg;
			let ss = day.getSeconds() * deg;
	 		hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
	 		mn.style.transform = `rotateZ(${mm}deg)`;
			sc.style.transform = `rotateZ(${ss}deg)`;		

   	})


  function changebg(){
    var now = new Date();
    var hours = now.getHours();
    const bg = document.querySelector('.container')

    if( hours > 5 && hours < 11){
    bg.style.setProperty('background', '#FFF5AC, #45C8E6');
    }

    if( hours > 11 && hours < 17){
     bg.style.setProperty('background-color', '#71DAF2,#74BF97');
    }


    if( hours > 17 && hours < 19){
     bg.style.setProperty('background', '#FFC371,#FA909A');
    }


    if( hours > 19 && hours < 22){
       bg.style.setProperty('background', '#4396D1,#4396D1');
     }

    if( hours > 22 && hours < 5){
       bg.style.setProperty('background', '#4B6CB7, #182848');
      }
  };



/**Timer1*/

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('jan 1, 2021 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
     if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Gelukkig nieuwjaar!";
  }

    }, 1000)









