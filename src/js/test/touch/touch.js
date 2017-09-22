/**
 * Created by ghy on 2017/9/19.
 */
(function () {
    var vendors = ['webkit', 'moz'];

    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
        || window[vp + 'CancelRequestAnimationFrame']);
    }

    function observe (target, props, callback) {
        for (var i = 0, len = props.length; i < len; i++) {
            var prop = props[i];
            watch (target, prop, callback);
        }
    }

    function watch (target, prop, callback) {
        Object.defineProperty (target, prop, {
            get: function () {
                return this["_" + prop];
            },
            set: function (value) {
                this["_" + prop] = value;
                callback ();
            }
        });
    }

    var observeProps = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"]

    var touch = {
        init: function (el) {

            this.el = el;
            this.swipe ();
            this.layout ();
        },
        layout: function (obj) {
            this.el.forEach (function (el) {
                observe (el, observeProps, function () {
                    console.log (".....")
                })
            })
        },
        swipe: function () {
            var _this = this;
            this.el.on ("touchstart", function (e) {
                this.isTouchStart = true;
                cancelAnimationFrame (this.tickID);
                this.startTime = new Date ().getTime ();
                this.y1 = e.targetTouches[0].screenY;
                this.start = this.vertical ? this.preY : this.preX;
                this._firstTouchMove = true;
                this._preventMove = false;

                console.log ("开始touch");

                this.startY = e.targetTouches[0].screenY;
                this.wrapH = $ (this).offsetHeight;

                if (!this.maxScrollY) {
                    this.scrollerHeight = this.offsetHeight;
                    this.maxScrollY = this.wrapH - this.scrollerHeight + 1;
                }
                this.startTop = this.y || 0;
                console.log ("this.y", this.y, "max y:", this.maxScrollY)
            })
            this.el.on ("touchmove", function (e) {
                if (!this.isTouchStart) {
                    return;
                }
                e.preventDefault ();
                e.stopPropagation ();
                var currentY = e.targetTouches[0].screenY;

                if (this._firstTouchMove) {
                    this._preventMove = true;
                    this._firstTouchMove = false;
                }

                this.y2 = e.targetTouches[0].screenY
                this.moved = true;
                this.y = e.targetTouches[0].screenY - this.startY + this.startTop;

                this.translateY +=  e.targetTouches[0].screenY - this.startY;

            })
            this.el.on ("touchend", function (e) {
                console.log ("touch end");
                var dist = e.changedTouches[0].screenY - this.startY;
                this.endTime = event.timeStamp;
                var duration = this.endTime - this.startTime;
                if (this.moved) {
                    e.preventDefault ();
                    e.stopPropagation ();

                    var newY = Math.round (e.changedTouches[0].screenY);
                    this.isInTransition = true;

                    if (this.y > 0 || this.y < this.maxScrollY) {
                        _this.scrollTo (this, this.y, this.maxScrollY, 600);
                        return;
                    }

                    if (duration < 300) {
                        var move = _this.calculateMoment (this.y, this.startTop, duration, this.maxScrollY, this.wrapH);
                        this.y = move.destination;

                        var time = move.duration;
                        $ (this).css ({
                            '-webkit-transform': 'translate3d(0, ' + this.y + 'px, 0)',
                            'transition-timing-function': 'cubic-bezier(0.1, 0.3, 0.5, 1)',
                            '-webkit-transition-duration': time + 'ms'
                        });
                    }
                    return;
                }
            })
        },
        scrollTo: function (obj, y, maxY, time, sety) {
            if (y > 0 || maxY > 0) {
                y = 0;
            } else if (y < maxY) {
                y = maxY;
            } else if (sety != 0) {
                this.y = 0;
                y = sety;
            }
            obj.isInTransition = true;
            $ (obj).css ({
                '-webkit-transform': 'translate3d(0, ' + y + 'px, 0)',
                'transition-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                '-webkit-transition-duration': time + 'ms'
            });
        }
    }
    touch.init ($ (".lou-select-wrap .list-wrap .sc_body"));
}) ()