console.log(document.body.firstElementChild.firstElementChild.childNodes);

let hrs=document.getElementById('hrs');
let min=document.getElementById('Min');
let sec=document.getElementById('Sec');

   setInterval(()=>{
       let currentTime = new Date();
    hrs.innerHTML  = currentTime.getHours();
    Min.innerHTML  = currentTime.getMinutes();
    Sec.innerHTML  = currentTime.getSeconds(); 

    hrs = hrs % 12;
    
   })

    
   
