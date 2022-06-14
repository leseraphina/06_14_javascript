const str=`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the ffor aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`
console.log(str.match(/\bf\w{1,}/g))
console.log(str.match(/\b\d{1,}/g))
console.log(str.match(/\baa\w{1,}/g))
//  난이도 있는 예제 ->  오늘 복습 ->  정규표현식

