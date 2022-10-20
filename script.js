class Calculator{
  constructor(){
    this.currentOperand = 0
    this.previousOperand = 0
    this.operation = null
    this.overwriteCurrent = false
    this.defaultStyleOp = false
  }
  clear(){
    //console.log("clear")
    this.currentOperand = 0
    this.previousOperand = 0
    this.operation = null
  }
  del(){
    if(btnDelete.innerHTML === "C"){
      this.currentOperand = 0
      btnDelete.innerHTML = "AC"
    }else if(btnDelete.innerHTML === "AC"){
      this.clear()
    }
  }
  addDigit(digit){
    this.defaultStyleOp = true
    if(this.currentOperand == 0 || this.overwriteCurrent){
      this.currentOperand = digit
      btnDelete.innerHTML = "C"
      this.overwriteCurrent = false
    } 
    else if(this.currentOperand != 0){
      this.overwriteCurrent = false
      this.currentOperand = this.currentOperand + digit
    } 
    //console.log(this.currentOperand)
  }
  sendOperator(operator){
    if(operator === "="){
      this.defaultStyleOp = true
      switch (this.operation) {
        case "÷":
          this.currentOperand = Number(this.previousOperand) / Number(this.currentOperand)
          break;
        case "×":
          this.currentOperand = Number(this.previousOperand) * Number(this.currentOperand)
          break;
        case "-":
          this.currentOperand = Number(this.previousOperand) - Number(this.currentOperand)
          break;
        case "+":
          this.currentOperand = Number(this.previousOperand) + Number(this.currentOperand)
          break;
      }
      return
    }
    this.defaultStyleOp = false
    this.overwriteCurrent = true
    this.operation = operator
    this.previousOperand = this.currentOperand
  }
  updateOperator(){
    let buttons = document.querySelectorAll(`.btn-operator`)
    buttons.forEach(button => {
      //console.log(this.operation)
      if(button.textContent == this.operation && !this.defaultStyleOp){
        button.style.backgroundColor = "white";
        button.style.color = "orange";
      }else if(button.textContent != this.operation || this.defaultStyleOp){
        button.style.backgroundColor = "orange";
        button.style.color = "white";
      }
    });
  }
  updateCalc(){
    this.updateOperator()
    displayRes.innerHTML = this.currentOperand
  }
}

const hourElem = document.querySelector(".hour")
const minuteElem = document.querySelector(".minute")
setInterval(()=>{
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  if(String(minute).length < 2){
    hourElem.innerHTML = hour
    minuteElem.innerHTML = "0" + minute
  }else if(String(minute).length > 1){
    hourElem.innerHTML = hour
    minuteElem.innerHTML = minute
  }
}, 1000)

const btnsDigit = document.querySelectorAll(".btn-digit")
const btnsOperator = document.querySelectorAll(".btn-operator")
const btnDelete = document.querySelector(".btn-delete")
const displayRes = document.querySelector("#result")

const calc = new Calculator()

btnsDigit.forEach(button => {
  button.addEventListener('click', (e)=>{
    calc.addDigit(e.target.textContent)
    calc.updateCalc()
  });
})
btnsOperator.forEach(operator => {
  operator.addEventListener('click', (e)=>{
    calc.sendOperator(e.target.textContent)
    calc.updateCalc()
  });
})
btnDelete.addEventListener('click', (e)=>{
  calc.del()
  calc.updateCalc()
});