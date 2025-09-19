// console.log('halo dunia')
// window.alert(`Apakah anda tahu saya?`)
// window.alert(`Jika iya, anda harus klik ok!`)



document.getElementById("myH1").textContent = `Hallo`;
document.getElementById("myP").textContent = `Paragraph`;



// Aritmatics operator
let student = 30;

student = student + 121;
student = student - 121;
student = student * 121;
student = student / 121;

student += 1;
student -= 1;

console.log(student)

let username;
username = window.prompt("What your username?")
console.log(username);

let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    console.log(username)
};