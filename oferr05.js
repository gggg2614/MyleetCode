/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * @param {string}
 * @return {string}
 */
var replaceSpace = function (s) {
  let newStr = "";
  for (let index = 0; index < s.length; index++) {
    if (s[index] === " ") {
      newStr += "%20";
    } else {
      newStr += s[index];
    }
  }
  return newStr;
  // 2. return s.replace(/ /g, "%20");
};

let a = "12   3 4";
console.log(replaceSpace(a), "la");
