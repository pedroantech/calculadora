export default function calculate() {
    const resultInput = document.querySelector('#result')
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    if(result == 19/7){
        resultInput.value = "❤️❤️❤️"
    }
    if( result == undefined) {
        resultInput.value = ""
    }
    resultInput.classList.remove("error")
    
  }