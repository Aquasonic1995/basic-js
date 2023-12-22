const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  swap(str) {
    return this.direct ? str : str.split('').reverse().join('');
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = this.generateKey(key, message.length).toUpperCase();
    let result = '';

    for (let i = 0; i < message.length; i++) {
      const charCodeMessage = messageUpper.charCodeAt(i);
      const charCodeKey = keyUpper.charCodeAt(i);
      if (charCodeMessage >= 65 && charCodeMessage <= 90) {
        const encryptedCharCode = ((charCodeMessage + charCodeKey) % 26) + 65;
        result += String.fromCharCode(encryptedCharCode);
      } else {
        result += messageUpper[i];
      }
    }

    return this.swap(result);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = this.generateKey(key, encryptedMessage.length).toUpperCase();
    let result = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
      const charCodeEncryptedMessage = encryptedMessageUpper.charCodeAt(i);
      const charCodeKey = keyUpper.charCodeAt(i);
      if (charCodeEncryptedMessage >= 65 && charCodeEncryptedMessage <= 90) {
        const decryptedCharCode = ((charCodeEncryptedMessage - charCodeKey + 26) % 26) + 65;
        result += String.fromCharCode(decryptedCharCode);
      } else {
        result += encryptedMessageUpper[i];
      }
    }

    return this.swap(result);
  }

  generateKey(key, length) {
    return key.repeat(Math.ceil(length / key.length)).slice(0, length);
  }
}
module.exports = {
  VigenereCipheringMachine
};
