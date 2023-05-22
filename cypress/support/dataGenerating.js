
export function getRandomTextData(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export function getRandomDigit(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

  export function getRandomEmail(){
    return "randomemail"+getRandomInt(9999999)+"@mail.com";
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export function getRandomNumber(length){
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}