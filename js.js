function camelMaker(word){
    let letter = Array.from(word);
    for (let i = 0; i < letter.length; i++) {
        if (/[A-Z]/.test(letter[i])) {
           letter[i] = letter[i].toLowerCase();
           letter[i - 1 ] = ' ';
        }
    }
    return letter.join("");
}

console.log(camelMaker("thisIsaReallyLongWord"));