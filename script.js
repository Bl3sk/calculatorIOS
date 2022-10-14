
let btns = document.querySelector(".grid-container")

btns.addEventListener('click', (e)=>{
  switch (e.target.className) {
  case "btn-digit":
    pressDigit(e.target.textContent)
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case "btn-delete":
    del()
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
});

function pressDigit(digit){
	displayRes = document.querySelector("#result")
	if(displayRes.textContent == 0){
		displayRes.innerHTML = digit
	}else {
		displayRes.innerHTML = displayRes.textContent + digit
	}
}

function del(){
	displayRes = document.querySelector("#result")
	displayRes.innerHTML = 0
}


