(function(){
    function currentTime() {
        const date = new Date(); 
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
      
         hh = (hh < 10) ? "0" + hh : hh;
         mm = (mm < 10) ? "0" + mm : mm;
         ss = (ss < 10) ? "0" + ss : ss;
          
        const time = hh + ":" + mm + ":" + ss + " ";

        document.getElementById("clock").innerText = time;  

        const t = setInterval(function(){ currentTime() }, 1000);
      }
      
      currentTime();
})()