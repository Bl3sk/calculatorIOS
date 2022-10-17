class Calculator{
  constructor(displayRes){
    this.displayRes = displayRes
    this.currentOperand = 0
    this.previousOperand = 0
    this.clear()
  }
  clear(){
    this.currentOperand = 0
    this.previousOperand = 0
    this.operation = null
  }
  del(){
    this.currentOperand = 0
    this.previousOperand = 0
    displayRes.innerHTML = this.previousOperand
    btnDelete.innerHTML = "AC"
  }
  addDigit(digit){
    if(this.currentOperand == 0){
      this.currentOperand = digit
      btnDelete.innerHTML = "C"
    } 
    else if(this.currentOperand != 0){
      this.currentOperand = this.currentOperand + digit
    } 
    console.log(this.currentOperand)
  }
  getOperator(operator, buttonClass){
    let buttonOperator = document.querySelector(`.${buttonClass}`)
    buttonOperator.style.backgroundColor = "white";
    this.operator = operator
    this.previousOperand = this.currentOperand
    this.currentOperand = 0
  }
  updateDis(){
    console.log("updateDis")
    displayRes.innerHTML = this.currentOperand
  }
}


const btns = document.querySelector(".grid-container")
const displayRes = document.querySelector("#result")
const btnDelete = document.querySelector(".btn-delete")

const calc = new Calculator(displayRes)

btns.addEventListener('click', (e)=>{
  switch (e.target.className) {
  case "btn-digit":
    calc.addDigit(e.target.textContent)
    calc.updateDis()
    break;
  case "btn-operator":
    console.log(e.target)
    this.style.backgroundColor = "red";
    calc.getOperator(e.target.textContent, e.target.className)
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case "btn-delete":
    calc.del()
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
});




