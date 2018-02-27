/*
* https://leetcode.com/problems/longest-palindromic-substring/description/
*
* **/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var max_p = 0;//
    var max_len = 0;
    var c_p = 0;// 记录中心位置
    for (var i = 0; i < s.length; i++) {
        var c_len = max_len;

        if (s[i - c_len - 1 == s[i + c_len + 1]]) {// 新数字校验外侧第一个是否相等
            //校验内侧是否回文
            for(var j=0;j<)
        }
        if (c_p == i) {// 寻找回文数。
            while (i - c_len > 0 && s[i - c_len - 1 == s[i + c_len + 1]]) {
                ++c_len;
            }
            max_len = Math.max(max_len, c_len);
        } else {

        }
        var c_max = max_len;
        if (s[i] == s[i - max_len - 1]) {
            max_len
        }
    }


};