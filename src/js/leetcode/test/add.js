/**
 * Created by gonghongyu on 2017/10/27.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var i = 0, j = 1, find = false, ret = [];
    while (i < nums.length && j < nums.length) {
        console.log(i,j)
        if (nums[i] < target) {
            var t = nums[i] + nums[j];
            console.log(i, j, t)
            if (t == target) {
                find = true;
                break;
            } else if (t < target) {
                j++;
                continue;
            } else {
                i++;
                j = i + 1;
                continue;
            }
        } else {
            break;
            find = false;
        }
    }
    console.log(find)
    if (find) {
        ret.push(i);
        ret.push(j);
    }
    return ret;
};
console.log(twoSum([0,3,2,4,0],0))