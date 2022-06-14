const str=`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`
// test
let re = /see/gi
let re1 = /daum/gi
let re2 = /gmail/gi

// console.log(re.test(str))
// console.log(re1.test(str))
// console.log(re2.test(str))

// replace
let re3 = /naver/gi
// console.log(re3.test(str))
// console.log(str.replace(re3,'gmail'));
// console.log(str)

let str2 = `aaa@daum.net`;
console.log(str2)
const sam01 = /daum/gi;
console.log(str2.replace(sam01,'gmail'))
const sam02 = str2.replace(sam01,'gmail')
console.log(sam02)
str2 = str2.replace(sam01,'gmail')
console.log(str2)

const re4 = /the/gi;
const num = str.match(re4)
console.log(num)
console.log(num[2])
num[2] = 'sample';
console.log(num)
console.log(str)

