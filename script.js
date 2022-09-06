let hipotenusa = document.getElementById("hipotenusa")
let catetoB = document.getElementById("catetoB")
let catetoC = document.getElementById("catetoC")

function calcular () {
    hipotenusa.value = Math.sqrt(catetoB.value**2 + catetoC.value**2)
}