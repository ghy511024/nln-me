/**
 * https://leetcode.com/submissions/detail/125705383/
 * @param {string} s
 * @return {number}
 * map 实现，效率稍微低一些
 */
var lengthOfLongestSubstring = function (s) {

    var map = {};
    var cur_len = 0// 记录临时最大长度
    var max_len = 0// 记录当前最大长度

    for (var i = 0; i < s.length; i++) {
        var index = map[s[i]] == null ? -1 : map[s[i]];
        if (index < 0 || i - map[s[i]] > cur_len) {
            ++cur_len;
        } else {
            if (cur_len > max_len) {
                max_len = cur_len;
            }
            cur_len = i - index;
        }
        map[s[i]] = i;
    }
    if (cur_len > max_len) {
        max_len = cur_len;
    }
    return max_len;
};
// 卧槽居然是第一。
// https://leetcode.com/submissions/detail/125706741/
var lengthOfLongestSubstring2 = function (s) {
    var cur_len = 0// 记录临时最大长度
    var max_len = 0// 记录当前最大长度
    var array = new Int16Array(128).fill(-1);
    for (var i = 0; i < s.length; i++) {
        var index = array[s.charCodeAt(i)];
        if (index < 0 || (i - index) > cur_len) {
            ++cur_len;
        } else {
            if (cur_len > max_len) {
                max_len = cur_len;
            }
            max_len = Math.max(cur_len, max_len);
            cur_len = i - index;
        }
        array[s.charCodeAt(i)] = i;
    }
    if (cur_len > max_len) {
        max_len = cur_len;
    }
    return max_len;
};
var t1 = +new Date();
for (var i = 0; i < 100000; i++) {
    lengthOfLongestSubstring2("dfgdfgertbwrefgsdfgsdfgsdfgydfgds");
}
console.log(+new Date() - t1);
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("abcabcbb"));