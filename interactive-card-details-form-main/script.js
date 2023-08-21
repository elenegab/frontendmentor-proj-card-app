const form1=document.getElementById("form1")
const form2=document.getElementById("form2")
const errortext1=document.getElementById("errortext1")
const year = document.getElementById("year")
const errortext2 = document.getElementById("errortext2")
const cvc = document.getElementById("cvc")
const errortext3 = document.getElementById("errortext3")
const button = document.getElementById("button")
const form = document.getElementById("form")
const complete = document.getElementById("complete")
const nomeri = document.getElementById("nomeri")
const month = document.getElementById("month")
const jane =  document.getElementById("jane")








button.onclick = function(){
    if(form2.value !="" && form2.value.replace(/[^\d]+/g,'')){
        console.log("true")
    }else{
        console.log("error")
    }
}


button.onclick = function(){
    if(cvc.value !=""){
        console.log("true")
    }else{
        console.log("false")
        errortext3.style.display = "block"
        cvc.style.borderColor = "red"
        // cvc.style.left = "-20%"
        cvc.style.width = "50%"
        
    }

    if(year.value !=""){
        console.log("true")
    }else{
        console.log("false")
        errortext2.style.display = "block"
        year.style.borderColor = "red"
    }

    if(cvc.value !="" && year.value !=""){
        form.style.display = "none"
        complete.style.display = "block"
    }
    
    nomeri.innerHTML = form2.value
    jane.innerHTML = form1.value
}

complete.onclick = function(){
    form.style.display = "block"
    complete.style.display = "none"
    
}

form2.addEventListener("input",function(){
    console.log(form2.value)
    form2.value = getMaskedValue(form2.value)
    
}) 

const getMaskedValue = (value) => Array.from(value.replaceAll(/\D/g, '').matchAll(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/g))[0].slice(1, 5).join(' ').trim()




