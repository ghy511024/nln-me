/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var scrollNum = 0;
function expsplit(prokey) {
    return prokey.toString().match(/^(\+\=|\-\=|\*\=|\/\=)?([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/i)
}
function replacePro(prokey) {
    return prokey = replace_(prokey),
            /(^(zIndex|fontWeight|opacity)$)/.test(prokey) ? "" : "px"
}
function replace_(prokey) {
    return prokey.replace(/-(\w)/g, function (t, e) {
        return e.toUpperCase()
    })
}
function funs(array, i, n) {
    if (Array.isArray(array) && (i = array,
            array = n ? n : "smoothAnimate" + "_" + i.join("_").replace(/\./g, "d").replace(/\-/g, "m")),
            "function" != typeof $.easing[array]) {
        var counteasing = function (t, e, i, n, o) {
            function s(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function a(t, e) {
                return 3 * e - 6 * t
            }
            function r(t) {
                return 3 * t
            }
            function l(t, e, i) {
                return ((s(e, i) * t + a(e, i)) * t + r(e)) * t
            }
            function c(t, e, i) {
                return 3 * s(e, i) * t * t + 2 * a(e, i) * t + r(e)
            }
            function u(t) {
                var i, o = t;
                for (i = 0; i < 14; ++i) {
                    var s = c(o, e, n);
                    if (0 === s)
                        return o;
                    var a = l(o, e, n) - t;
                    o -= a / s
                }
                return o
            }
            return l(u(t), i, o)
        };
        $.easing[array] = function (t, e, n, s, a) {
            return s * counteasing(t, i[0], i[1], i[2], i[3]) + n
        }
    }
    return array
}
//countScrollNum();
function countScrollNum() {
    scrollNum = document.documentElement.scrollTop || document.body.scrollTop;
//    console.log(scrollNum);
}

function wrprunfun(SmoothAnimate) {
    return function () {

        var el = arguments[0].length ? arguments[0] : [arguments[0]];
//        console.log(el[el.length - 1])
        var runstate = el[el.length - 1].getAttribute("data-smooth-animate");
        var smooan;
        if ("running" !== runstate) {
            smooan = new SmoothAnimate(el, arguments[1], arguments[2]);
            if (smooan.options.queue) {
                el[el.length - 1].setAttribute("data-smooth-animate", "running")
            }
        } else {
            smooan = qunelist.add(el[el.length - 1], arguments[1], arguments[2]);
        }
        return smooan;
//        return "running" !== runstate ? (smooan = new SmoothAnimate(el, arguments[1], arguments[2]),
//                smooan.options.queue && el[el.length - 1].setAttribute("data-smooth-animate", "running"),
//                smooan) : void qunelist.add(el[el.length - 1], arguments[1], arguments[2])
    }
}
var defaultconf = {
    duration: 400,
    easing: "easeInOut",
    step: function (t, e, i) {
    },
    complete: function (t) {
    },
    queue: !0
}
var easyarray = [["ease", [.25, .1, .25, 1]],
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
    $.easing[item[0]] || funs(item[1], null, item[0])
});
var SmoothAnimate_ghy = function (elements, props, options) {
    this.props = props,
            this.elements = elements,
            this.options = $.extend({}, defaultconf, options),
            this._init()
};

SmoothAnimate_ghy.prototype = {
    _init: function () {
        this.start = Date.now(),
                this._prepare(),
                this._loop()
    },
    _prepare: function () {
        this.options.easing = "string" == typeof this.options.easing ? this.options.easing : funs(this.options.easing),
                this.length = this.elements.length,
                this.properties = Object.create(null);
        var len;
        for (len = 0; len < this.length; len++) {
            var pro, i = Object.create(null);
            for (pro in this.props)
                if (this.props.hasOwnProperty(pro)) {
                    var fromvalue, endvalue, exparray, exparray2, efix, exp;
                    if (Array.isArray(this.props[pro]))
                        exparray = expsplit(this.props[pro][0]),
                                exparray2 = expsplit(this.props[pro][1]),
                                fromvalue = +exparray[2],
                                endvalue = +exparray2[2],
                                efix = exparray[3] || exparray2[3] || replacePro(pro);
                    else {
                        switch (exparray = expsplit(this.props[pro]),
                                endvalue = +exparray[2],
                                exp = exparray[1],
                                efix = exparray[3] || replacePro(pro),
                                fromvalue = "scrollTop" === pro || "scrollLeft" === pro ? scrollNum : parseFloat(getComputedStyle(this.elements[len])[pro]) || 0,
                                exp) {
                            case "+=":
                                endvalue = fromvalue + endvalue;
                                break;
                            case "-=":
                                endvalue = fromvalue - endvalue;
                                break;
                            case "*=":
                                endvalue = fromvalue * endvalue;
                                break;
                            case "/=":
                                endvalue = fromvalue / endvalue
                        }
                    }
                    i[pro] = {
                        from: fromvalue,
                        to: endvalue,
                        units: efix
                    }
                }
            this.properties[len] = i
        }
    },
    _loop: function () {
        var curscnum;// 滚动条实际滚动量
        var len;
        var prokey; // 运动属性
        var _this = this;
        var hasruntime = Date.now() - this.start;// 已经运行时间
        var rate = hasruntime / this.options.duration; //比率 为1时，停止
//        console.log(rate)
        for (rate > 1 && (rate = 1, // 百分比
                hasruntime = this.options.duration),
                len = 0; len < this.length; len++) {
            for (prokey in this.props)
                if (this.props.hasOwnProperty(prokey)) {
                    if ("scrollTop" === prokey) {
                        if ("linear" === this.options.easing) {
                            curscnum = this.properties[len][prokey].from + rate * (this.properties[len][prokey].to - this.properties[len][prokey].from)
                        }
                        else {
                            curscnum = $.easing[this.options.easing](rate, hasruntime, this.properties[len][prokey].from, this.properties[len][prokey].to - this.properties[len][prokey].from, this.options.duration)
                        }
                        window.scrollTo(0, curscnum);
                        continue
                    }
                    if ("scrollLeft" === prokey) {
                        window.scrollTo(curscnum, 0);
                        continue
                    }
                    if ("value" === prokey)
                        continue;
                    if (this.properties[len][prokey].to === this.properties[len][prokey].from)
                        continue;
                    this.elements[len].style[prokey] = curscnum + this.properties[len][prokey].units
                }
            this.options.step(rate, this.elements[len], curscnum)
        }
        hasruntime < this.options.duration ? requestAnimationFrame(function () {
            _this._loop()
        }) : (this.elements[this.length - 1].removeAttribute("data-smooth-animate"),
                this.options.complete(this.elements),
                qunelist.run(this.elements))
    }
}

SmoothAnimate_ghy = wrprunfun(SmoothAnimate_ghy);
var qunelist = {
    calls: [],
    add: function (t, e, i) {
        this.calls.push([t, e, i])
    },
    run: function (elementArray) {
        var e, i = elementArray[elementArray.length - 1], n = this.calls.length;
        for (e = 0; e < n; e++) {
            var o = this.calls[e][0];
            if (i === o)
                return SmoothAnimate_ghy(elementArray, this.calls[e][1], this.calls[e][2]),
                        void this.calls.splice(e, 1)
        }
    }
};

SmoothAnimate_ghy.queue = qunelist;

window.jQuery && ($.fn["smoothAnimate"] = function (props, options) {
    return SmoothAnimate_ghy(this, props, options),
            this
}
)
window.SmoothAnimate = SmoothAnimate_ghy
var e = 3
        , i = 0
        , n = 0
        , o = 16;
//$(window).on("mousewheel2 DOMMouseScroll", function (t) {
//    t.preventDefault()
//    var nowtime = Date.now();
//    var s = nowtime - o;
//    var a = t.originalEvent;
//    var r = a.wheelDelta < 0 || a.detail > 0 ? 1 : -1;
//    i += 50 * r * e;
//    IT.position += i;
//    console.log(IT.position, i, r, e);
//    if (s > 16) {
//        IT.scrollTo(IT.position);
//        o = nowtime
//    }
//});
// 自定义滚动
(function () {

    function e() {
        console.log(alls, xnn, this.position,"-----------")
        if (alls > xnn || alls < -xnn) {
            this.position += alls;
            window.scrollTo(0, Math.round(this.position));
            alls *= i
        } else {
            alls = 0
        }
        requestAnimationFrame(function () {
            e.call(IT)
        });
    }
    e.call(IT);
    var i = .95;
    var xnn = .1;
    var rate = 4;
    var alls = 0;
    $(window).on("mousewheel DOMMouseScroll", function (t) {
        t.preventDefault();
        var e = t.originalEvent;
        var scnum = e.wheelDelta < 0 || e.detail > 0 ? 1 : -1;
        this.position = scrollNum;
        alls += rate * scnum
       console.log(scnum, alls, this.position, scrollNum,"mmmmmmmmmmmmmmmmmm")
    }.bind(IT))
})()


var IT = {
    position: 0,
    scrollTo3: function (e) {
        if ("number" == typeof e)
            this.position = e;
//        else if ($(e).length)
//            for (var i = 0; i < this.section.length; i++)
//                if (e === this.section[i].hash) {
//                    this.position = 0 === i ? this.section[i].top : this.section[i].top + 2;
//                    break
//                }
        if (this.position !== scrollNum) {
            $("body").smoothAnimate({
                scrollTop: this.position
            }, {
                duration: 800,
                easing: "easeOutSine",
                queue: false,
                step: function (t, e, i) {
                    console.log("........", i)
                    this.position = i
                }
                .bind(this),
                complete: function () {
                }
                .bind(this)
            })
        }

    }
}
window.addEventListener("scroll", windowScroll, !1)
function windowScroll() {
    requestAnimationFrame(scrollfun)
}
function scrollfun() {
    countScrollNum();
}


//$("body").smoothAnimate({
//    scrollTop: 1000
//}, {
//    duration: 3000,
//    easing: "easeOutSine",
//    queue: !1,
//    step: function (t, e, i) {
//        this.position = i
//    }
//    .bind(this),
//    complete: function () {
//        this.dontChangeMenu = !1
//    }
//    .bind(this)
//})

