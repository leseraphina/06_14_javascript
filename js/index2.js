const str=`
010-1234-5678
Edit the Expression & Text to see matches.
Roll over matches or the expression for details.
the aabbccddeeffgg.
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`
// g i m

const rE = /the/g;
console.log(str.match(rE));
const rE1 = /the/gi;
console.log(str.match(rE1));

const rE2 = /\.$/gm
console.log(rE2.test(str));
console.log(str.match(rE2))
