/**
 * Created by ghy on 2017/11/6.
 * https://leetcode.com/problems/maximum-subarray/description/
 * 连续字数组之和
 * easy
 *
 */

// 86.5%
var maxSubArray = function (nums) {
    var sum, tmp;
    for (var i = 0; i < nums.length; i++) {
        if (tmp > 0) {
            tmp += nums[i]

        } else {
            tmp = nums[i];
        }
        if (sum == null) {
            sum = tmp;
        }
        sum = Math.max (sum, tmp);
    }
    return sum;
};

// 98.63
//https://leetcode.com/submissions/detail/126987394/
var maxSubArray2 = function (nums) {
    var sum = tmp = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (tmp > 0) {
            tmp += nums[i]

        } else {
            tmp = nums[i];
        }
        console.log (tmp, sum)
        sum = Math.max (sum, tmp);
    }
    return sum;
};

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// var array = [-1]
var ret = maxSubArray2 (array);
console.log (ret);