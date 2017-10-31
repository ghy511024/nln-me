/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = {}, ret = [], n;
    for (var i = 0; i < nums.length; i++) {
        n = target - nums[i];
        map[nums[i]] = map[nums[i]] || [];
        map[n] = map[n] || [];
        if (map[n].length > 0) {
            ret.push(map[n][0])
            ret.push(i)
            break;
        }
        map[nums[i]].push(i);
    }
    return ret;
};
console.log(twoSum([2, 3, 3], 6));
