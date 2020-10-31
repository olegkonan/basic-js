const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor(method = true) {
    this.method = method;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw "Error"
    } else {
      message = message.toUpperCase();
      this.message = message;
      //the length of the key such as on the message
      const modifiedKey = this.modifyKey(key);
      //encrypting
      let result = [];
      for (let i = 0; i < modifiedKey.length; i++) {
        let vinegerAlphabet = [];
        let col;
        if (this.alphabet.indexOf(message[i]) !== -1) {
          col = this.alphabet.indexOf(message[i]);
          let row = this.alphabet.indexOf(modifiedKey[i]);
          this.alphabet.map(elem => {
            vinegerAlphabet.push(elem);
          });
          for (let k = 0; k < row; k++) {
            let letter = vinegerAlphabet[0];
            vinegerAlphabet.shift();
            vinegerAlphabet.push(letter);
          }
          result.push(vinegerAlphabet[col]);
        } else {
          result.push(message[i]);
        }
      }
      if (this.method === true) {
        return result.join('');
      } else {
        return result.reverse().join('');
      }
    }
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw "Error"
    } else {
      this.message = message;
      const modifiedKey = this.modifyKey(key);
      let result = [];
      for (let i = 0; i < modifiedKey.length; i++) {
        let vinegerAlphabet = [];
        let row;
        if (this.alphabet.indexOf(modifiedKey[i]) !== -1) {
          row = this.alphabet.indexOf(modifiedKey[i]);
          this.alphabet.map(elem => {
            vinegerAlphabet.push(elem);
          });
          for (let k = 0; k < row; k++) {
            let letter = vinegerAlphabet[0];
            vinegerAlphabet.shift();
            vinegerAlphabet.push(letter);
          }
          let col = vinegerAlphabet.indexOf(message[i]);
          result.push(this.alphabet[col]);
        } else {
          result.push(message[i]);
        }
      }
      if (this.method === true) {
        return result.join('');
      } else {
        return result.reverse().join('');
      }
    }
  }
  modifyKey(key) {
    let modifiedKeyArr = [];
      for (let i = 0; i < this.message.length; i++) {
        for (let k = 0; k < key.length; k++) {
          if (modifiedKeyArr.length <= this.message.length) {
            modifiedKeyArr.push(key[k]);
          }
        }
        if (!this.message[i].match(/[A-Z]/)) {
          modifiedKeyArr.splice(i, 0, `${this.message[i]}`);
        }
      }
    let modifiedKey = modifiedKeyArr.join('');
    return modifiedKey.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
