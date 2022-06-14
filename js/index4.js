const str=`
010-1234-5678
012-1234-5678
Edit the Expression & Text to see matches.
Roll over matches or the expression for details.
the aabbccddeeffgg.
The aabbccddeeffgg
aaaaaaa
aaaaa
aa
aaa@naver.com
abc@gmail.com
http://www.naver.com
https://www.naver.com
tro
tr 
tros
가나다라마바사
`
console.log(str.match(/a{2}/g))
console.log(str.match(/a{3}/g))
console.log(str.match(/a{2,}/g))
console.log(str.match(/a{2,4}/g))
console.log(str.match(/[tro]/g))
console.log(str.match(/tro/g))
console.log(str.match(/tro?/g))
console.log(str.match(/tro$/gm))
console.log(str.match(/[1-5]/gm))
console.log(str.match(/[가-라]/gm))
console.log(str.match(/가나/gm))
