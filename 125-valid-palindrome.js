var isPalindrome = function (s) {
  const isNumber = (code) => code >= 48 && code <= 57;
  const isAlpha = (code) => code >= 97 && code <= 122;
  let left = 0, right = s.length - 1;
  while(right > left) {
    const leftCode = s[left].toLowerCase().charCodeAt(0);
    if (!isNumber(leftCode) && !isAlpha(leftCode)) {
      left++;
      continue;
    }
    
    const rightCode = s[right].toLowerCase().charCodeAt(0);
    if (!isNumber(rightCode) && !isAlpha(rightCode)) {
      right--;
      continue;
    }

    if (leftCode !== rightCode) {
      return false;
    }

    left++;
    right--;

  }
  
  return true;
};

var isPalindrome2 = function (s) {
  let sanitized = '';
  let reversed = '';
  for(let i =0 ; i < s.length; i++) {
    const code = s[i].toLowerCase().charCodeAt(0), isNumber = code >= 48 && code <= 57, isAlpha = code >= 97 && code <= 122;
    if (!isNumber && !isAlpha) {
      continue;
    }

    const char = String.fromCharCode(code);
    sanitized += char;
    reversed = char + reversed;
  }
  
  return sanitized === reversed;
};


const data = [
  { s: "A man, a plan, a canal: Panama", output: true },
  { s: "race a car", output: false },
  { s: " ", output: true },
];

for (let d of data) {
  console.log(JSON.stringify(d));
  const result = isPalindrome(d.s);
  console.log('result = ', result);
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}