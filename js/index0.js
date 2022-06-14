const str=`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`
// 검색,대체, 추출

// 생성자방식
const reEx = new RegExp('the','gi');
console.log(str.match(reEx))

// 리터널 방식
const reSample = /the/g
console.log(str.match(reSample))
