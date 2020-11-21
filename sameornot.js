function sameornot(word){
    lower_word = word.toLowerCase();
    let result = '';
    for(i = lower_word.length-1; i >= 0; i--){
        result = result + lower_word[i]; 
    }
    if(result == lower_word){ return true;
    }
    else return false;;
}
const given_word = 'AbBa';
console.log(sameornot(given_word));
