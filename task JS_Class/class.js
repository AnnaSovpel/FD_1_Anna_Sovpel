
class user {
    constructor (option){
      this.name = option.name;
      this.age = option.age;
      this.gender = option.gender;
    }
    sayHi (){
      console.log('Hi! My name is ' + this.name);
    }
  }
  
  class elderUser extends user {
     constructor(option){
       super (option)
       this.child = option.child
     }
    
    sayHi (){
      super.sayHi()
      console.log('I don\'t\ want tell you my name');
    }
    hasChild(){
      console.log('I have a daughter');
    }
  }
  
  let FirstU = new elderUser ({
    name: 'Nick',
    age: 25,
    gender: 'male',
    child: true,
  });
  
  
  class juniorUser extends user {}
  
  let SecondU = new juniorUser ({
    name: 'Sofia',
    age: 7,
    gender: 'female',
    child: false,
  });
    
  console.log(FirstU);
//   console.log(FirstU.sayHi());
//   console.log(FirstU.hasChild());
  
  console.log(SecondU);
//   console.log(SecondU.sayHi());
//   console.log(SecondU.child);
//   console.log(SecondU.hasChild());