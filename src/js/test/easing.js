
// 贝塞尔曲线的四个值对应两个点，构造出曲线函数，x1,y1,x2,y2(x,y 不超过1)
// 参照 http://cubic-bezier.com/#0,.81,.89,.36

var easyarray = [
    ["ease", [.25, .1, .25, 1]],
    ["easeIn", [.42, 0, 1, 1]],
    ["easeOut", [0, 0, .58, 1]],
    ["easeInOut", [.42, 0, .58, 1]],
    ["easeInSine", [.47, 0, .745, .715]],
    ["easeOutSine", [.39, .575, .565, 1]],
    ["easeInOutSine", [.445, .05, .55, .95]],
    ["easeInQuad", [.55, .085, .68, .53]],
    ["easeOutQuad", [.25, .46, .45, .94]],
    ["easeInOutQuad", [.455, .03, .515, .955]],
    ["easeInCubic", [.55, .055, .675, .19]],
    ["easeOutCubic", [.215, .61, .355, 1]],
    ["easeInOutCubic", [.645, .045, .355, 1]],
    ["easeInQuart", [.895, .03, .685, .22]],
    ["easeOutQuart", [.165, .84, .44, 1]],
    ["easeInOutQuart", [.77, 0, .175, 1]],
    ["easeInQuint", [.755, .05, .855, .06]],
    ["easeOutQuint", [.23, 1, .32, 1]],
    ["easeInOutQuint", [.86, 0, .07, 1]],
    ["easeInExpo", [.95, .05, .795, .035]],
    ["easeOutExpo", [.19, 1, .22, 1]],
    ["easeInOutExpo", [1, 0, 0, 1]],
    ["easeInCirc", [.6, .04, .98, .335]],
    ["easeOutCirc", [.075, .82, .165, 1]],
    ["easeInOutCirc", [.785, .135, .15, .86]],
    ["easeInBack", [.6, -.28, .735, .045]],
    ["easeOutBack", [.175, .885, .32, 1.275]],
    ["easeInOutBack", [.68, -.49, .265, 1.55]]];
easyarray.forEach(function (item) {
    $.easing[item[0]] || createEasing(item[1], null, item[0])
});
function createEasing(array, i, n) {
    if (!Array.isArray(array)) {
        return;
    } else {
        i = array;
        array = n ? n : "smoothAnimate" + "_" + i.join("_").replace(/\./g, "d").replace(/\-/g, "m")
    }
    if ("function" != typeof $.easing[array]) {
        var counteasing = function (rate, x1, y1, x2, y2) {
            function s(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function a(t, e) {
                return 3 * e - 6 * t
            }
            function r(t) {
                return 3 * t
            }
            function fun3(t, e, i) {
                return ((s(e, i) * t + a(e, i)) * t + r(e)) * t
            }
            function c(t, e, i) {
                return 3 * s(e, i) * t * t + 2 * a(e, i) * t + r(e)
            }
            function u(t) {
                var i, o = t;
                for (i = 0; i < 14; ++i) {
                    var s = c(o, x1, x2);
                    if (0 === s)
                        return o;
                    var a = fun3(o, x1, x2) - t;
                    o -= a / s
                }
                return o
            }
            return fun3(u(rate), y1, y2)
        };
        $.easing[array] = function (rate, hasruntime, from, fromToLen, duration) {
            return fromToLen * counteasing(rate, i[0], i[1], i[2], i[3]) + from
        }
    }
    return array
}
