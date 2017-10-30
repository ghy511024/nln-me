/**
 * https://leetcode.com/problems/find-k-closest-elements/description/
 * 寻找最近接的数
 */


/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

    // 标准二分 begin
    var find;
    var s = 0, e = arr.length - 1;
    // var map = new Int16Array(10000);
    // map.full(-1);
    while (s <= e) {
        var mind = (((s + e) / 2) | 0)// 取中,不清楚 Math 函数效率高，还是位运算效率高
        if (arr[mind] == x) {
            find = mind;
            break;
        } else if (arr[mind] < x) {
            s = mind + 1;
        } else if (arr[mind] > x) {
            e = mind - 1;
        }
        if (s > e) {
            if (e < 0) {
                find = 0;
            } else if (s > arr.length) {
                find = arr.length - 1;
            } else {
                find = (x - arr[e]) > (arr[s] - x) ? s : e;
            }

        }
    }

    var nxt = arr[find];// 最接近的一个数

    var m, n;
    var result = [];
    if (arr[find] == x) {// 在数组中
        k = k - 1;
        m = find + 1;
        n = find - 1;
        result.push(arr[find])
    } else {
        m = find;
        n = find - 1;
    }

    console.log(nxt, find, k, m, n, ".....")

    for (var i = 0; i < k; i++) {
        console.log(result)
        if (n < 0) {
            result.push(arr[m])
            m++;

        } else if (m > arr.length - 1) {
            var tmp = [];
            tmp.push(arr[n]);
            result = tmp.concat(result);
            n--;
        } else {
            if ((arr[m] - x) >= (x - arr[n])) {
                var tmp = [];
                tmp.push(arr[n]);
                result = tmp.concat(result);
                n--
            } else {
                result.push(arr[m])
                m++;
            }
        }
    }
    console.log(result)
    return result;
    // }
    // console.log(find, "find", result);
};
var arry = [0, 1, 2, 2, 2, 3, 6, 8, 8, 9];
findClosestElements(arry, 5, 9)