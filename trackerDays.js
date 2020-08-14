let days = document.querySelectorAll(".days");

for(let i = 0; i < days.length; i++){
    days[i].addEventListener("click", function(){
        days[i].classList.add("checked");
    });
}


