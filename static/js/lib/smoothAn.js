/* 
 * @desc 浏览器滚动条优化插件,使用方法，在body 上加上 chass="smooth-scroll" 即可。
 * @version v0.0.1
 * @date 2017-07-03
 * @author ghy 
 * 
 */
(function () {
    var range = .95;
    var pernum = .1;
    var mouseRate = 4;// 滑动比例
    var tmpscnum = 0;
    var sc = {
        position: 0,
        scnum: 0,
        init: function () {
            if ($("body").hasClass("smooth-scroll")) {
                this.initEvent();
                this.scroll();
            }
        },
        initEvent: function () {
            window.addEventListener("scroll", this.countScroll.bind(this), false)
            $(window).on("mousewheel DOMMouseScroll", function (t) {
                t.preventDefault();
                var e = t.originalEvent;
                var range = e.wheelDelta < 0 || e.detail > 0 ? 1 : -1;
                this.position = this.scnum;
                tmpscnum += mouseRate * range
            }.bind(this))
        },
        countScroll: function () {
            requestAnimationFrame(function () {
                this.scnum = document.documentElement.scrollTop || document.body.scrollTop;
            }.bind(this))
        },
        scroll: function () {
            if (tmpscnum > pernum || tmpscnum < -pernum) {
                this.position += tmpscnum;
                window.scrollTo(0, Math.round(this.position));
                tmpscnum *= range
            } else {
                tmpscnum = 0
            }
            requestAnimationFrame(function () {
                this.scroll();
            }.bind(this));
        }
    }
    $(function () {
        sc.init();
    })
})();