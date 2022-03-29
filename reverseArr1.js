function reverseString(str){
    let result = "";

    for (let i = str.length - 1; i >= 0; i-= 1) {
        result += str[i];
    }
    return result;
}

console.log(reverseString(['1', '2', '3', '4', '5', '6', '7']));