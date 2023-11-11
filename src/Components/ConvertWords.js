// ConvertWords.js
export function numberToWords(num) {
    const units = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
    const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  
    function convertThreeDigit(num) {
      const hundreds = Math.floor(num / 100);
      const tens = Math.floor((num % 100) / 10);
      const ones = num % 10;
    
      let result = '';
    
      if (hundreds > 0) {
        result += words[hundreds] + ' Hundred';
      }
    
      if (tens >= 2) {
        result += (result !== '' ? ' ' : '') + words[tens]; // Fix: Remove *10 from here
        if (ones > 0) {
          result += '-' + words[ones];
        }
      } else if (tens === 1) {
        result += (result !== '' ? ' ' : '') + words[num % 100];
      } else if (ones > 0) {
        result += (result !== '' ? ' ' : '') + words[ones];
      }
    
      return result;
    }
  
    let result = '';
    let unitIndex = 0;
  
    while (num > 0) {
      const threeDigit = num % 1000;
      if (threeDigit > 0) {
        const partInWords = convertThreeDigit(threeDigit);
        result = partInWords + (unitIndex > 0 ? ' ' + units[unitIndex] : '') + (result === '' ? '' : ' ' + result);
      }
      unitIndex++;
      num = Math.floor(num / 1000);
    }
  
    return result === '' ? 'Zero' : result;
  }
  