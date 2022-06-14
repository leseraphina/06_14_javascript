const str=`
010-1234-5678
012-1234-5678
Edit the Expression & Text to see matches.
Roll over matches or the expression for details.
the aabbccddeeffgg.
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
http://www.naver.com
https://www.naver.com

`
// g로 끝나는 -> global
console.log(str.match(/g$/gm))
console.log(str.match(/h..p/gm))
console.log(str.match(/f..../g))
console.log(str.match(/for|to|abc/gm))
console.log(str.match(/https?/gm))
// \.$s?css
console.log(str.match(/^010?/gm))
console.log(str.match(/^01./gm))

// [type^="a"]
// [type$="a"]



