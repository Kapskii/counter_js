const val = document.querySelector('.input')
let counter = '' //result
const result = document.querySelector('.result')
const count1 = document.querySelector('.count1')

count1.addEventListener('click', function () {
    let value = +val.value; //input  value
    if (value !== 0) {
        if (counter === ''){
            counter = value;
        }
        result.innerHTML = counter++
    } else {
        result.innerHTML = 0
    }
})

val.addEventListener('change', function () {
  counter = ''
})
