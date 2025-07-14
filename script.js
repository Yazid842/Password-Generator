const input=document.getElementById("Password")
const len=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const numbers="0123456789"
const symbol="@#$%^&*()_+~|}{[]></-="
const allChar=upperCase+lowerCase+numbers+symbol;
function Genrate(){
    let Password="";
    Password+=upperCase[Math.floor(Math.random()* upperCase.length)];
    Password+=lowerCase[Math.floor(Math.random()* lowerCase.length)];
    Password+=numbers[Math.floor(Math.random()* numbers.length)];
    Password+=symbol[Math.floor(Math.random()* symbol.length)];
    while(len>Password.length){
        Password+=allChar[Math.floor(Math.random()* allChar.length)];
    }
    input.value=Password
}
function CopyPassword(){
    input.select();
    document.execCommand("copy");
}