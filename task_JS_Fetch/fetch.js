const xhr = new XMLHttpRequest();
xhr.open ('GET', 'https://jsonplaceholder.typicode.com/users')
xhr.onload = function (){
    let answer = xhr.response;
    console.log(answer);
}
xhr.onerror = function(){
    console.log(error)
}
xhr.send()


// fetch ('https://jsonplaceholder.typicode.com/users')
// .then (response => {
//     let a = response.json()
//     const p = new Promise(resolve => resolve(a))
//     p.then (user => {
//         for (i = 0; i<user.length; i++){
//             console.log(user[i].name)}
//     })
// })
// .catch (error => console.log(error))

async function showUserName() {

    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let user = await response.json();
    for (i = 0; i<user.length; i++){
        console.log(user[i].name)}
  }
  showUserName();