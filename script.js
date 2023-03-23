const buttons= document.querySelectorAll('button')
const displayScreen = document.querySelector('.screen')

let calculation = []

let output

function calculate(button){
    const value = button.textContent
    if(value==="CLEAR"){
        calculation=[]
        displayScreen.textContent="."
                 
    } else if(value==="="){
        displayScreen.textContent =eval(output)
    }else{
        calculation.push(value)
        output = calculation.join('')
        displayScreen.textContent=output 
    }

    

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
