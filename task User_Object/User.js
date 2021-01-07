
let User = {
  name: prompt('Enter your name'),
  age: prompt('Enter your age'),
  city: prompt('Enter your city'),
  child :null,
}

let question = prompt('Do you have a child?')
  if (question == 'Yes'){
    User.child = {
        name: prompt('Enter your child name'),
        age: prompt('Enter your child age'),
    }
} 

console.log(User)
