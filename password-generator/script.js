const upperCaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseAlphabet = upperCaseAlphabet.map(letter => letter.toLowerCase());
const number = [0,1,2,3,4,5,6,7,8,9];
const special = ['!','@','#','$','%','&','*'];
const btn = document.querySelector('.btn');
const reload = document.querySelector('.reload');

const generatePassword = function(){
    const length = document.querySelector('.number-length').textContent;
    let password = document.querySelector('.password');
    const ABC = document.querySelector('.ABC');
    const abc = document.querySelector('.abc');
    const num = document.querySelector('.num');
    const spe = document.querySelector('.spe');
    
    let all = [];
    if(ABC.checked)all = [...all,...upperCaseAlphabet];
    if(abc.checked)all = [...all,...lowerCaseAlphabet];
    if(num.checked)all = [...all,...number];
    if(spe.checked)all = [...all,...special];
    if(all.length == 0){
        alert('chose something');
        return;
    };

    password.textContent = '';
    let str = '';
    for(let i = 0; i < length; i++){
        const randomNumber = Math.trunc(Math.random() * all.length);
        // console.log(randomNumber);
        // console.log(String(all[randomNumber]));
        str += String(all[randomNumber]); 
    } 
    password.textContent += str;
}

btn.addEventListener('click', generatePassword);
reload.addEventListener('click', generatePassword);