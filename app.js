let pro = prompt('Enter your date of birth')

let date = new Date()
let dateMili = date.getTime()

let dob = new Date (pro)
let dobMili = dob.getTime()

let minus = dateMili - dobMili
let formula = minus / (1000 * 60 * 60 * 24 * 365)
let age = Math.floor(formula)

if (age >= 0) {
    alert('your age is : ' + age)
}

else {
    alert('Invalid age')
}