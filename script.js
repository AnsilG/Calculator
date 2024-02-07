//show number inside input box
function displayNumber(num){
    result.value += num 

}

//clear input box when click 'AC'
function clearText(){
    result.value = ''
}

function equalClick(){
 result.value=eval(result.value)
}
//remove text one by one
function removeLastItem(){
result.value = result.value.slice(0,-1)
}