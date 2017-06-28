/**
 * @version    1.1.8
 * @build      5-28-2017
 * @package    NowaDays - Multipurpose One/Multi Page Creative Theme
 * @author     Pavel Marhaunichy <help@likeaprothemes.com>
 * @license    https://themeforest.net/licenses
 *
 * @website    https://likeaprothemes.com
 */

!function($) {
    "use strict";
    function e(e, i) {
        var e = e || 800
          , n = $(".p-preloader__top, .p-preloader__bottom");
        return n.length ? void n.smoothAnimate({
            height: ["50%", 0]
        }, {
            duration: e,
            complete: i
        }) : void i()
    }
    function i() {
        var t = window
          , e = "inner";
        return "innerWidth"in window || (t = K,
        e = "client"),
        R = t[e + "Width"],
        Q = t[e + "Height"],
        {
            width: R,
            height: Q
        }
    }
    function countScrollNum() {
        scrollNum = document.documentElement.scrollTop || document.body.scrollTop
    }
    function o() {
        H = $(document).height()
    }
    function s(t) {
        return t > 0 && t < 1 ? 0 : Math.ceil(t)
    }
    function a() {
        return Y.hasClass("p-onepage") ? L = !0 : Y.hasClass("p-multipage") ? U = !0 : void 0
    }
    function r() {
        Y.hasClass("p-asidemenupage") && ($ = !0)
    }
    function l() {
        return R < 768
    }
    function c() {
        if ($.platform.ios) {
            Y.addClass("ios-device");
            var e = document.querySelector(".portfolio-item");
            e && ($(e).parents(".section")[0].onclick = function() {}
            )
        }
    }
    function u() {
        Y.hasClass("sticky-header") && (W = !0)
    }
    function d() {
        X.hasClass("header-sticky-relative") && (V = !0)
    }
    function h() {
        var e = document.getElementById("footer-twitter-feed-vertical__list");
        if (null !== e) {
            var i = {
                id: e.getAttribute("data-twitter-id"),
                domId: "footer-twitter-feed-vertical__list",
                maxTweets: +e.getAttribute("data-twitter-max-tweets") || 3,
                enableLinks: !0,
                showPermalinks: !1,
                showUser: !1,
                showTime: !1,
                dateFunction: "",
                showInteraction: !1,
                customCallback: function(t) {
                    for (var i = "", n = 0; n < t.length; n++)
                        i += '<li class="footer-twitter-feed-vertical__item ico-119">' + t[n] + "</li>";
                    e.innerHTML = i
                }
            };
            twitterFetcher.fetch(i),
            function n() {
                setTimeout(function() {
                    $(".footer-twitter-feed-vertical__item").length ? $(window).trigger("resize") : n()
                }, 100)
            }()
        }
    }
    function m(e, i) {
        function n() {
            var t = new Image;
            return t.onload = function() {
                o()
            }
            ,
            t.onerror = function() {
                console && console.log("something wrong with image: " + t.src),
                o()
            }
            ,
            t
        }
        function o() {
            i && i()
        }
        return $(e).length ? void ("img" === e.tagName.toLowerCase() ? n().src = e.src : "none" !== getComputedStyle(e).backgroundImage && "" !== getComputedStyle(e).backgroundImage ? n().src = getComputedStyle(e).backgroundImage.replace(/url\(|\)$|"/gi, "") : o()) : (o(),
        !1)
    }
    function p() {
        function e() {
            o.slideLikeAPro()
        }
        function i() {
            function e() {
                o.removeClass("hidden").animate({
                    width: "100%"
                }, 1200)
            }
            function i() {
                a.stop(!0).animate({
                    width: 0
                }, 600, function() {
                    $(this).addClass("hidden"),
                    e()
                })
            }
            var n, o, a = $(".main-5-slider-text__subtitle"), r = !1;
            s.on("initialized.owl.carousel changed.owl.carousel", function(i) {
                var s = i.item.index
                  , a = $(".main-5-slider-text").eq(s);
                n = a.find(".main-5-slider-text__title"),
                o = a.find(".main-5-slider-text__subtitle"),
                s < 0 && (s = 0),
                0 === s && n.removeClass("hidden").delay(800).animate({
                    width: "100%"
                }, 1800, function() {
                    e()
                }),
                s + 1 !== i.item.count || r || (setTimeout(function() {
                    $(".section-arrow").css("display", "block")
                }, 1500),
                r = !0)
            });
            var l = {
                loop: !1,
                autoplay: !0,
                video: !1,
                items: 1,
                smartSpeed: 700,
                autoplayTimeout: 4e3,
                nav: !1,
                dots: !0,
                dotsClass: "main-5-slider-dots",
                dotClass: "main-5-slider-dots__dot",
                controlsClass: "main-5-slider-controls",
                navText: "",
                navClass: ["slider-arrow-prev ico-111", "slider-arrow-next ico-112"],
                onChange: i,
                URLhashListener: !1
            }
              , c = s.data("owl")
              , u = $.extend(l, c);
            s.owlCarousel(u);
            var d = s.find(".slider-arrow-prev")
              , h = s.find(".slider-arrow-next");
            s.mouseenter(function() {
                d.add(h).addClass("animated")
            }).mouseleave(function() {
                d.add(h).removeClass("animated")
            })
        }
        function n(t) {
            t.addEventListener("click", function(e) {
                matchesSelector(e.target, ".portfolio-filter__item") && (t.querySelector(".portfolio-filter__item_active").classList.remove("portfolio-filter__item_active"),
                e.target.classList.add("portfolio-filter__item_active"))
            })
        }
        var o = $(".slide-like-a-pro");
        o.length && e();
        var s = $(".main-5-slider");
        s.length && i(),
        Z.isotope({
            itemSelector: '[class*="col-"]'
        }),
        Z.find(".portfolio-item__img").on("load", function() {
            Z.isotope("layout")
        });
        var a = document.querySelector(".portfolio-filter")
          , r = Z.find("[data-category]")
          , l = {};
        r.each(function() {
            for (var e = this.getAttribute("data-category").toLowerCase().trim().split(/\s*,\s*/), i = 0; i < e.length; i++)
                $(this).parent('[class*="col-"]').addClass("portfolio-filter-" + e[i].replace(" ", "-")),
                l[e[i]] || (l[e[i]] = e[i])
        });
        var c = "";
        for (var u in l)
            l.hasOwnProperty(u) && (c += '<span class="portfolio-filter__item" data-filter=".portfolio-filter-' + u.replace(" ", "-") + '">' + u + "</span>");
        $(a).append(c),
        a && (a.addEventListener("click", function(e) {
            if (matchesSelector(e.target, ".portfolio-filter__item")) {
                $(window).trigger("resize");
                var i = e.target.getAttribute("data-filter");
                Z.isotope({
                    filter: i
                }, !1)
            }
        }),
        n(a));
        var d = $(".portfolio-carousel");
        if (d.length) {
            var h = d.attr("data-portfolio-carousel-items");
            d.owlCarousel({
                loop: !1,
                nav: !1,
                dots: !1,
                margin: 0,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: h >= 3 ? 3 : h
                    },
                    992: {
                        items: h >= 4 ? 4 : h
                    },
                    1200: {
                        items: h
                    }
                },
                onInitialized: function() {
                    this.$stage[0].style.width = Math.ceil(this.$stage[0].offsetWidth) + 1 + "px"
                },
                onResized: function() {
                    $(window).resize(),
                    this.$stage[0].style.width = Math.ceil(this.$stage[0].offsetWidth) + 1 + "px"
                }
            })
        }
        var m = {
            numbersEl: document.getElementsByClassName("counters-item__count"),
            linearBar: document.getElementsByClassName("skills-graph-linear__bar"),
            linearCount: document.getElementsByClassName("skills-graph-linear__count"),
            circleEl: document.getElementsByClassName("skills-graph-circle"),
            circleBar: document.getElementsByClassName("skills-graph-circle__bar"),
            circleCount: document.getElementsByClassName("skills-graph-circle__count"),
            init: function() {
                var e = this;
                e.numbersEl.length && $(e.numbersEl).one("animationOnScrollStarted", function() {
                    e.numbers(this, $(e.numbersEl).index(this))
                }),
                e.linearBar.length && $(e.linearBar).one("animationOnScrollStarted", function() {
                    e.linear(this, $(e.linearBar).index(this))
                }),
                e.circleBar.length && $(e.circleEl).one("animationOnScrollStarted", function() {
                    e.circle(this, $(e.circleEl).index(this))
                })
            },
            numbers: function(e, i) {
                function n(t) {
                    if (!l.length)
                        return t;
                    for (; /(\d+)(\d{3})/.test(t.toString()); )
                        t = t.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + l);
                    return t
                }
                var o = this.numbersEl[i]
                  , s = parseInt(o.getAttribute("data-counters-number"), 10)
                  , a = o.getAttribute("data-counters-units") || ""
                  , r = o.getAttribute("data-counters-units-after") || "true"
                  , l = o.getAttribute("data-counters-delimiter") || ""
                  , c = parseInt(o.getAttribute("data-counters-duration"), 10) || 3600;
                $(e).smoothAnimate({
                    value: [0, s]
                }, {
                    easing: "easeOutQuart",
                    duration: c,
                    step: function(t, e, i) {
                        var s = "true" === r ? n(Math.ceil(i)) + a : a + n(Math.ceil(i));
                        o.textContent = s
                    }
                })
            },
            linear: function(e, i) {
                var n = this.linearCount[i]
                  , o = parseInt(n.getAttribute("data-skills-graph-perc"), 10);
                $(e).smoothAnimate({
                    width: [0, o + "%"]
                }, {
                    easing: "easeInOutQuad",
                    duration: 100 * o / 6,
                    step: function(t, e, i) {
                        n.textContent = Math.ceil(i)
                    },
                    complete: function() {}
                    .bind(this)
                })
            },
            circle: function(e, i) {
                var n = this.circleBar[i]
                  , o = n.getAttribute("r")
                  , s = 2 * Math.PI * o
                  , a = this.circleCount[i]
                  , r = parseInt(a.getAttribute("data-skills-graph-perc"), 10);
                n.style.strokeDasharray = n.style.strokeDashoffset = s,
                $(e).smoothAnimate({
                    value: [0, r]
                }, {
                    easing: "easeOutBack",
                    duration: 3600,
                    step: function(t, e, i) {
                        n.style.strokeDashoffset = s - i * s / 100,
                        a.textContent = Math.ceil(i)
                    },
                    complete: function() {}
                    .bind(this)
                })
            }
        };
        m.init();
        var p = $(".testimonials");
        if (p.length) {
            var f = p.data("timeout");
            p.one("initialized.owl.carousel", function() {
                $(window).resize()
            }),
            p.owlCarousel({
                loop: !0,
                autoplay: !0,
                autoplayTimeout: f,
                items: 1,
                smartSpeed: 450,
                nav: !1,
                dots: !0,
                dotsClass: "testimonials-dots",
                dotClass: "testimonials-dots__dot",
                autoplayHoverPause: !0
            })
        }
        var g = $(".client-logos-carousel");
        if (g.length) {
            var f = g.data("timeout");
            g.owlCarousel({
                loop: !0,
                autoplay: !0,
                autoplayTimeout: f,
                smartSpeed: 450,
                nav: !1,
                dots: !1,
                autoplayHoverPause: !0,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    }
                }
            })
        }
        var v = document.getElementsByClassName("tooltip-alt")
          , y = document.getElementsByClassName("tooltip");
        $(v).hover(function() {
            var t = this
              , e = t.getBoundingClientRect()
              , i = e.left + e.width / 2
              , n = e.top - e.height / 2
              , o = t.getAttribute("alt");
            if (o) {
                var s = document.createElement("div");
                s.className = "tooltip";
                var a = document.body.appendChild(s);
                a.style.display = "block",
                a.style.top = n - parseInt(getComputedStyle(a).height, 10) / 2 + "px",
                a.style.left = i - parseInt(getComputedStyle(a).width, 10) / 2 + "px",
                a.innerHTML = o,
                setTimeout(function() {
                    try {
                        document.body.removeChild(a)
                    } catch (t) {
                        return
                    }
                }, 2e3)
            }
        }, function() {
            void 0 !== y[0] && document.body.removeChild(y[0])
        })
    }
    function f() {
        var e = $(".blog-slider");
        if (e.length) {
            e.owlCarousel({
                loop: !0,
                autoplay: !0,
                autoplayTimeout: 2e3,
                items: 1,
                smartSpeed: 450,
                dots: !1,
                nav: !0,
                navText: "",
                navClass: ["slider-arrow-prev ico-111", "slider-arrow-next ico-112"],
                autoplayHoverPause: !0
            });
            var i = $(".slider-arrow-prev")
              , n = $(".slider-arrow-next");
            e.mouseenter(function() {
                i.add(n).addClass("animated")
            }).mouseleave(function() {
                i.add(n).removeClass("animated")
            })
        }
        !function() {
            for (var e = document.querySelectorAll("iframe, object, embed"), i = $('<div class="responsive-embed"></div>'), n = 0; n < e.length; n++)
                e[n].setAttribute("data-aspect-ratio", e[n].height / e[n].width),
                e[n].removeAttribute("height"),
                e[n].removeAttribute("width"),
                $(e[n]).wrap(i);
            $(window).smartresize(function() {
                for (var i = 0; i < e.length; i++) {
                    var n = $(e[i]).parents(".responsive-embed").width();
                    e[i].setAttribute("width", n),
                    e[i].setAttribute("height", n * e[i].getAttribute("data-aspect-ratio"))
                }
            }).resize()
        }(),
        $.getJSON("https://graph.facebook.com/?id=" + location.href + "&callback=?", function(e) {
            $(".post-share__count_fb").attr("data-count-shares", e.shares),
            0 !== e.shares && $(".post-share__count_fb").text(e.shares)
        }),
        $.getJSON("https://cdn.api.twitter.com/1/urls/count.json?url=" + location.href + "&callback=?", function(e) {
            $(".post-share__count_tw").attr("data-count-shares", e.count),
            0 !== e.count && $(".post-share__count_tw").text(e.count)
        }),
        $.getJSON("https://www.linkedin.com/countserv/count/share?url=" + location.href + "&callback=?", function(e) {
            $(".post-share__count_li").attr("data-count-shares", e.count),
            0 !== e.count && $(".post-share__count_li").text(e.count)
        }),
        window.services = {
            gplus: {
                cb: function(e) {
                    $(".post-share__count_gp").attr("data-count-shares", e),
                    0 !== e && $(".post-share__count_gp").text(e)
                }
            }
        },
        $.getJSON("https://share.yandex.ru/gpp.xml?url=" + location.href + "&callback=?");
        var o = {
            go: function(e, i) {
                var n, s = o, a = $.extend({
                    type: "fb",
                    url: location.href,
                    title: document.title,
                    image: $(".post__img").attr("src"),
                    text: $(".post-content").text()
                }, $(e).data(), i);
                return null === s.popup(n = s[a.type](a)) && ($(e).is("a") ? ($(e).prop("href", n),
                !0) : (location.href = n,
                !1))
            },
            fb: function(e) {
                var i = $(".post-share__count_fb").attr("data-count-shares")
                  , n = Number(i) + 1;
                n == n && $(".post-share__count_fb").text(n);
                var o = $.extend({
                    url: location.href,
                    title: document.title,
                    image: "",
                    text: ""
                }, e);
                return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(o.url) + "&t=" + encodeURIComponent(o.title)
            },
            tw: function(e) {
                var i = $(".post-share__count_tw").attr("data-count-shares")
                  , n = Number(i) + 1;
                n == n && $(".post-share__count_tw").text(n);
                var o = $.extend({
                    url: location.href,
                    title: document.title,
                    image: ""
                }, e);
                return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(o.title) + "&url=" + encodeURIComponent(o.url)
            },
            li: function(e) {
                var i = $(".post-share__count_li").attr("data-count-shares")
                  , n = Number(i) + 1;
                n == n && $(".post-share__count_li").text(n);
                var o = $.extend({
                    url: location.href,
                    title: document.title,
                    image: "",
                    text: ""
                }, e);
                return "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(o.url) + "&title=" + encodeURIComponent(o.title) + "&summary=" + encodeURIComponent(o.title) + "&source=" + encodeURIComponent(o.image)
            },
            gp: function(e) {
                var i = $(".post-share__count_gp").attr("data-count-shares")
                  , n = Number(i) + 1;
                n == n && $(".post-share__count_gp").text(n);
                var o = $.extend({
                    url: location.href
                }, e);
                return "https://plus.google.com/share?url=" + encodeURIComponent(o.url)
            },
            popup: function(t) {
                return window.open(t, "", "toolbar=0,status=0,scrollbars=1,width=626,height=436")
            }
        };
        $(document).on("click", ".post-share__item_fb", function() {
            o.go(this, {
                type: "fb"
            })
        }),
        $(document).on("click", ".post-share__item_tw", function() {
            o.go(this, {
                type: "tw"
            })
        }),
        $(document).on("click", ".post-share__item_gp", function() {
            o.go(this, {
                type: "gp"
            })
        }),
        $(document).on("click", ".post-share__item_li", function() {
            o.go(this, {
                type: "li"
            })
        })
    }
    function windowScroll() {
        requestAnimationFrame(scrollfun)
    }
    function scrollfun() {
        if (st.complete && (countScrollNum(),
        ot.makeParallax(),
        L && it.testForMenuChange(),
        it.headerObserve(),
        et)) {
            var t = et.offsetHeight;
            "absolute" === getComputedStyle(et).position && (scrollNum <= t ? X.css("padding-top", t + "px") : X.css("padding-top", ""))
        }
    }
    function y() {
        console && console.log("resize"),
        i(),
        countScrollNum(),
        C(),
        o(),
        ot.updateOffsets(),
        ot.makeParallax(),
        nt && (nt.updateOffsets(),
        nt.makeAnimate()),
        (L || U) && it.updateOffsets(),
        E(),
        A(),
        D()
    }
    function w(t, e) {
        if (t + e > scrollNum && t < scrollNum + Q) {
            var i;
            return i = scrollNum >= t ? 100 - Math.ceil(100 * (scrollNum - t) / e) : t < scrollNum + Q && t + e > scrollNum + Q ? 100 - Math.ceil(100 * (t + e - (scrollNum + Q)) / e) : 100
        }
        return !1
    }
    function b(t) {
        var e = new Image;
        return "none" !== getComputedStyle(t).backgroundImage && (e.src = getComputedStyle(t).backgroundImage.replace(/url\(|\)$|"/gi, "")),
        {
            width: t.naturalWidth || e.width,
            height: t.naturalHeight || e.height
        }
    }
    function _() {
        l() || $ ? (at.addClass("ico-111"),
        rt.removeClass("ico-112")) : (at.removeClass("ico-111"),
        rt.addClass("ico-112"))
    }
    function C() {
        x(),
        _(),
        k(),
        $ ? l() ? (Y.removeClass("menu-mobile-opened"),
        dt.css("margin-bottom", "auto"),
        ut.css({
            position: "relative",
            width: "auto"
        })) : (Y.addClass("menu-mobile-opened"),
        dt.css("margin-bottom", ut.height() + "px"),
        ut.css({
            position: "fixed",
            width: "calc(100% - " + lt.width() + "px)"
        })) : dt.css("margin-bottom", ut.height() + "px"),
        l() || $ || !Y.hasClass("menu-mobile-opened") || ($(".menu-mobile-social").remove(),
        $(".submenu").css("display", ""),
        $(".menu__link, .submenu__link").removeClass("menu__link_pressed"),
        Y.removeClass("menu-mobile-opened"))
    }
    function x() {
        l() || $ ? Y.addClass("menu-mobile").removeClass("menu-desktop") : Y.addClass("menu-desktop").removeClass("menu-mobile")
    }
    function k() {
        if (l() && !$ && W && X.addClass("header-sticky header-dark"),
        et) {
            var t = et.offsetHeight;
            "fixed" === getComputedStyle(et).position ? X.css("padding-top", t + "px") : scrollNum <= t ? X.css("padding-top", t + "px") : X.css("padding-top", "")
        }
    }
    function A() {
        if (!(!G.length > 0)) {
            J = J && J.length ? J : [];
            for (var e = 0; e < G.length; e++)
                $(G[e].parentNode).hasClass("equal-cols-container") || ($(G[e].parentNode).addClass("equal-cols-container"),
                J.push(G[e].parentNode));
            for (var i = 0; i < J.length; i++) {
                for (var n = J[i].querySelectorAll(".equal-cols"), o = 0, s = 0; s < n.length; s++) {
                    var a = n[s];
                    a.style.height = "";
                    var r = parseInt(getComputedStyle(a).height, 10);
                    r > o && (o = r)
                }
                for (var s = 0; s < n.length; s++)
                    n[s].style.height = o + "px"
            }
        }
    }
    function I(t, e, i, n) {
        var t = void 0 === t || t
          , e = e || 400
          , i = i || 0;
        t ? ft.fadeIn(e, function() {
            gt.fadeIn(i, function() {
                n && n()
            })
        }) : gt.fadeIn(i, function() {
            n && n()
        })
    }
    function S(t, e) {
        var t = t || 0;
        "block" === gt.css("display") && gt.fadeOut(t, function() {
            e && e()
        })
    }
    function T(e, i, n) {
        function o() {
            switch (pt.append(e),
            i) {
            case "image":
                $(e).load(function() {
                    S(200, function() {
                        var t = mt.width()
                          , e = mt.height();
                        mt.fadeIn(yt),
                        P(t, e)
                    })
                }).error(function() {
                    S(200, function() {
                        T("Something went wrong.\nPlease try again", "", !1)
                    })
                });
                break;
            case "video":
                var n = $(".modal__video")[0]
                  , o = $(n).attr("src");
                $.platform.ios || /.*youtube\.com.*/i.test(o) || /.*vimeo\.com.*/i.test(o) ? S(200, function() {
                    var t = 16
                      , e = 9;
                    mt.fadeIn(yt),
                    P(t, e)
                }) : n.oncanplay = function() {
                    S(200, function() {
                        var t = n.videoWidth
                          , e = n.videoHeight;
                        mt.fadeIn(yt),
                        P(t, e)
                    })
                }
                ;
                break;
            case "custom":
                var s = mt.find(".project-modal-custom-code");
                s.css("display", "block");
                var a = mt.width()
                  , r = mt.height();
                mt.fadeIn(yt),
                P(a, r);
            default:
                pt.wrapInner('<span class="modal__text"></span>');
                var a = mt.width()
                  , r = mt.height();
                S(200, function() {
                    mt.fadeIn(yt),
                    P(a, r)
                })
            }
        }
        return countScrollNum = void 0 === n || n,
        M(),
        n ? void I(!0, 400, 0, o) : void o()
    }
    function M() {
        mt.css({
            display: "none",
            width: "auto",
            height: "auto",
            "line-height": "normal"
        }),
        pt.empty()
    }
    function O() {
        mt.add(ft).smoothAnimate({
            opacity: 0,
            value: [1, 2]
        }, {
            duration: yt,
            step: function(t, e, i) {
                e.style.transform = "scale(" + i + ")"
            },
            complete: function(t) {
                ft.css({
                    display: "none",
                    transform: "scale(1)",
                    opacity: .85
                }),
                mt.css({
                    display: "none",
                    transform: "scale(1)",
                    opacity: 1,
                    width: "auto",
                    height: "auto",
                    "line-height": "normal"
                }),
                pt.empty(),
                vt.css("display", "none")
            }
        }),
        S(),
        bt.add(wt).removeClass("animated").off("click.sliderModal")
    }
    function P(t, e) {
        var i = K.clientWidth
          , n = Q
          , o = i / n
          , s = t / e
          , a = .9;
        if (o >= s) {
            var r = Math.round(n * a)
              , l = Math.round(r * s)
              , c = Math.round((n - r) / 2)
              , u = Math.round((i - l) / 2);
            mt.css({
                width: l + "px",
                height: r + "px",
                top: c + "px",
                left: u + "px",
                "line-height": r + "px"
            })
        } else {
            var l = Math.round(i * a)
              , r = Math.round(l / s)
              , c = Math.round((n - r) / 2)
              , u = Math.round((i - l) / 2);
            mt.css({
                width: l + "px",
                height: r + "px",
                top: c + "px",
                left: u + "px",
                "line-height": r + "px"
            })
        }
        var d = mt.find("iframe");
        d.length && d.css({
            width: l + "px",
            height: r + "px"
        })
    }
    function E() {
        if ("block" === mt.css("display")) {
            var t = mt.width()
              , e = mt.height();
            P(t, e)
        }
    }
    function j(e) {
        function i(e, i) {
            vt.css("display", "block");
            var i = i || e.target
              , o = $(i).attr("href")
              , s = parseInt($(i).attr("data-sliderModal-item"), 10);
            if ($(i).hasClass("preview-photo"))
                e.preventDefault(),
                T('<img class="modal__img" src="' + o + '">', "image");
            else if ($(i).hasClass("preview-video"))
                if (e.preventDefault(),
                /.*youtube\.com.*/i.test(o) || /.*vimeo\.com.*/i.test(o)) {
                    var a = "true" === i.getAttribute("data-video-autoplay") ? "?autoplay=1" : "";
                    T('<iframe class="modal__video" src="' + o + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "video")
                } else {
                    var a = "true" === i.getAttribute("data-video-autoplay") ? " autoplay" : "";
                    T('<video class="modal__video" controls preload="metadata"' + a + '><source src="' + o + '">Sorry, but your browser not support this format video</video>', "video")
                }
            else if ($(i).hasClass("preview-custom")) {
                var r = $(i).siblings(".project-modal")
                  , l = r.find(".project-modal-custom-code");
                if (l.length) {
                    e.preventDefault();
                    var c = $('<div class="modal__custom-code"></div>');
                    l.clone().appendTo(c),
                    T(c, "custom")
                }
            }
            n(s)
        }
        function n(n) {
            B($(e[n])),
            0 === n ? (s = e[n + 1],
            bt.one("click.sliderModal", function(t) {
                t.stopPropagation(),
                wt.off("click.sliderModal"),
                i(t, s)
            }),
            bt.addClass("animated"),
            wt.removeClass("animated")) : n == a - 1 ? (o = e[n - 1],
            wt.one("click.sliderModal", function(t) {
                t.stopPropagation(),
                bt.off("click.sliderModal"),
                i(t, o)
            }),
            wt.addClass("animated"),
            bt.removeClass("animated")) : (o = e[n - 1],
            wt.one("click.sliderModal", function(t) {
                t.stopPropagation(),
                bt.off("click.sliderModal"),
                i(t, o)
            }),
            s = e[n + 1],
            bt.one("click.sliderModal", function(t) {
                t.stopPropagation(),
                wt.off("click.sliderModal"),
                i(t, s)
            }),
            wt.add(bt).addClass("animated"))
        }
        $('<div style="position:fixed" class="slider-arrow-prev ico-111"></div><div style="position:fixed" class="slider-arrow-next ico-112"></div>').insertAfter(ft),
        wt = $(".slider-arrow-prev"),
        bt = $(".slider-arrow-next");
        var o, s, a = e.length;
        !function() {
            for (var i = 0; i < a; i++)
                $(e[i]).attr("data-sliderModal-item", i)
        }(),
        function() {
            e.on("click", function(t) {
                i(t)
            })
        }()
    }
    function B(t) {
        var e = !1
          , i = !1;
        vt.off("click").one("click", function() {
            t.next().clone().appendTo(pt)
        }).on("click", function() {
            if (!i)
                return i = !0,
                e ? void pt.find(".project-modal__inner").smoothAnimate({
                    opacity: [1, 0]
                }, {
                    duration: 600,
                    complete: function() {
                        pt.find(".project-modal").smoothAnimate({
                            height: ["100%", 0]
                        }, {
                            duration: 600,
                            easing: "ease",
                            complete: function() {
                                e = !1,
                                i = !1
                            }
                        })
                    }
                }) : void pt.find(".project-modal").css("display", "block").smoothAnimate({
                    height: [0, "100%"]
                }, {
                    duration: 600,
                    easing: "ease",
                    complete: function(t) {
                        t.find(".project-modal__inner").smoothAnimate({
                            opacity: [0, 1]
                        }, {
                            duration: 600,
                            complete: function() {
                                e = !0,
                                i = !1
                            }
                        })
                    }
                })
        })
    }
    function q() {
        var e = document.querySelectorAll(".p-preloader__top, .p-preloader__bottom")
          , i = document.querySelector(".p-preloader")
          , n = [];
        Array.prototype.forEach.call(document.querySelectorAll(".header-logo__link, .menu__link, .submenu__link, .footer-menu__link"), function(t, e) {
            var i = t.getAttribute("href");
            0 !== i.indexOf("#", 0) && "" !== i && n.push(t)
        }),
        $(n).on("click", function(n) {
            if (n.preventDefault(),
            !l() && !$ || !$(this).hasClass("menu__link") || !$(this).not(":only-child").length) {
                var o = this.getAttribute("href");
                return $(e).css("height", "50%"),
                i ? void $(i).smoothAnimate({
                    opacity: [0, 1]
                }, {
                    duration: 300,
                    complete: function() {
                        document.location.href = o
                    }
                }).css("display", "block") : void (document.location.href = o)
            }
        })
    }
    function F() {
        function e(t) {
            i = document.createElement("link"),
            i.rel = "stylesheet",
            i.href = "assets/css/theme-colors/theme-" + t.replace("#", "") + ".css"
        }
        var i, n = $(".customizer__button"), o = document.getElementsByTagName("head")[0];
        n.on("click", function() {
            Ct.toggleClass("customizer-open")
        }),
        Ct.on("click", ".customizer-colors__item", function() {
            i && o.removeChild(i);
            var n = $(this).attr("data-custom-color");
            e(n),
            o.appendChild(i)
        }),
        Ct.on("click", ".customizer-menu__item", function() {
            Y.hasClass("menu-mobile-left") && "right" === this.textContent.toLocaleLowerCase() ? (Y.removeClass("menu-mobile-left"),
            Y.addClass("menu-mobile-right")) : Y.hasClass("menu-mobile-right") && "left" === this.textContent.toLocaleLowerCase() && (Y.addClass("menu-mobile-left"),
            Y.removeClass("menu-mobile-right"))
        }),
        document.querySelector(".customizer-default").addEventListener("click", function() {
            document.location.reload()
        }),
        sessionStorage && !sessionStorage.getItem("customizerAlert") && setTimeout(function() {
            var t = Ct.find(".customizer-alert");
            t.css("display", "block").smoothAnimate({
                opacity: [0, 1]
            }),
            Ct.find(".customizer-alert__btn").one("click", function() {
                sessionStorage.setItem("customizerAlert", "1"),
                t.smoothAnimate({
                    opacity: [1, 0]
                }, {
                    complete: function(t) {
                        t[0].style.display = "none"
                    }
                })
            })
        }, 15e3)
    }
    function N(t, e) {
        function i() {
            s || (s = !0,
            e && e())
        }
        var n = document.createElement("script");
        n.src = t;
        var o = document.getElementsByTagName("script")[0];
        o.parentNode.insertBefore(n, o);
        var s = !1;
        n.onload = i,
        n.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || setTimeout(i, 0)
        }
    }
    function D() {
        var e = document.querySelectorAll(".video-bg__container");
        if (e.length)
            for (var i = 0; i < e.length; i++) {
                var n = e[i]
                  , o = $(n).parents(".section")[0];
                n.style.position = "absolute";
                var s = o.getBoundingClientRect()
                  , a = s.height
                  , r = s.width
                  , l = 1.7777777777777777;
                if (R < Q) {
                    var c = r / l
                      , u = a * l;
                    a > c ? (n.style.width = u + "px",
                    n.style.height = a + "px",
                    n.style.top = "0px",
                    n.style.left = (r - u) / 2 + "px") : (n.style.width = r + "px",
                    n.style.height = c + "px",
                    n.style.top = (a - c) / 2 + "px",
                    n.style.left = "0px")
                } else {
                    var c = r / l
                      , u = a * l;
                    r > u ? (n.style.width = r + "px",
                    n.style.height = c + "px",
                    n.style.top = (a - c) / 2 + "px",
                    n.style.left = "0px") : (n.style.width = u + "px",
                    n.style.height = a + "px",
                    n.style.top = "0px",
                    n.style.left = (r - u) / 2 + "px")
                }
            }
    }
    var scrollNum, R, Q, H, L, U, $, W, V, J, Y = $("body"), X = $(".header"), K = document.documentElement || document.body, G = document.querySelectorAll(".equal-cols"), Z = $(".portfolio-masonry"), tt = $(".s-blog-masonry"), et = document.getElementById("wpadminbar");
    !function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
            window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
            var n = (new Date).getTime()
              , o = Math.max(0, 16 - (n - t))
              , s = window.setTimeout(function() {
                e(n + o)
            }, o);
            return t = n + o,
            s
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        }
        )
    }(),
    function() {
        if ("performance"in window == 0 && (window.performance = {}),
        Date.now = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        "now"in window.performance == 0) {
            var t = Date.now();
            performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart),
            window.performance.now = function() {
                return Date.now() - t
            }
        }
    }(),
    $.browser = {
        webkit: /WebKit/i.test(navigator.userAgent),
        mobile: /Android|iPhone|iPad|iPod|IEMobile|BlackBerry|Opera Mini/i.test(navigator.userAgent),
        ie: /Trident/i.test(navigator.userAgent),
        safari: /Safari/i.test(navigator.userAgent),
        loc: location.host
    },
    $.platform = {
        mac: navigator.platform.toLowerCase().indexOf("mac") !== -1,
        android: /(android)/i.test(navigator.userAgent),
        ios: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    },
    $.supp = {
        cssTransform3d: null,
        cssTransform2d: null,
        cssFilter: null,
        transitionEnd: null,
        transition: null,
        animationEnd: null,
        animation: null,
        init: function() {
            this.el = document.getElementsByTagName("body")[0],
            this.cssFilterCheck(),
            this.css3dTransformCheck(),
            this.transitionCheck(),
            this.animationCheck()
        },
        cssFilterCheck: function() {
            var t = {
                webkitFilter: "-webkit-filter",
                filter: "filter"
            };
            for (var e in t) {
                this.el.style[e] = "grayscale(0)";
                var i = getComputedStyle(this.el)[e];
                void 0 !== i && null !== i && "none" !== i && i.length && (this.cssFilter = e),
                this.el.style.removeProperty(t[e])
            }
        },
        css3dTransformCheck: function() {
            var t = {
                webkitTransform: "-webkit-transform",
                msTransform: "-ms-transform",
                transform: "transform"
            };
            for (var e in t) {
                this.el.style[e] = "translate3d(1px, 1px, 1px)";
                var i = getComputedStyle(this.el).getPropertyValue(t[e]);
                if (void 0 !== i && null !== i && "none" !== i && i.length)
                    this.cssTransform3d = e;
                else {
                    this.el.style[e] = "translate(1px, 1px)";
                    var i = getComputedStyle(this.el).getPropertyValue(t[e]);
                    void 0 !== i && null !== i && "none" !== i && i.length && (this.cssTransform2d = e)
                }
                this.el.style.removeProperty(t[e])
            }
        },
        transitionCheck: function() {
            var t = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            };
            for (var e in t)
                void 0 !== this.el.style[e] && (this.transitionEnd = t[e],
                this.transition = e)
        },
        animationCheck: function() {
            var t = {
                WebkitAnimation: "webkitAnimationEnd",
                animation: "animationend"
            };
            for (var e in t)
                void 0 !== this.el.style[e] && (this.animationEnd = t[e],
                this.animation = e)
        }
    },
    $.supp.init(),
    i(),
    countScrollNum(),
    o(),
    a(),
    r(),
    c(),
    u(),
    d(),
    $.fn.slideLikeAPro = function(e) {
        var i = {
            itemClass: "pro-item",
            itemsContainerClass: "pro-items",
            autoplay: !0,
            autoplayTimeout: 3e3,
            firstRunDelay: 0,
            timeline: !0,
            loop: !0,
            nav: !0,
            navClass: ["pro-controls-prev ico-111", "pro-controls-next ico-112"],
            navContainerClass: "pro-controls"
        }
          , n = this.data("slide-like-a-pro")
          , o = this
          , s = o.children()
          , a = s.length
          , r = $.extend({}, i, e, n)
          , l = {
            start: null,
            prevItem: null,
            nextItem: 1,
            currentItem: 0,
            currentTimeline: null,
            progress: 0,
            offsetTop: null,
            height: null,
            init: function() {
                this.onResize(),
                this.prepare(),
                this.goToSlide(0),
                this.loop(),
                this.setHandlers()
            },
            prepare: function() {
                if (s.wrapAll('<div class="' + r.itemsContainerClass + '"></div>'),
                s.addClass(r.itemClass),
                r.timeline && s.append('<div class="' + r.itemClass + '__timeline"></div>'),
                r.nav) {
                    var e = $('<div class="' + r.navClass[0] + '"></div><div class="' + r.navClass[1] + '"></div>')
                      , i = $('<div class="' + r.navContainerClass + '"></div>');
                    i.append(e),
                    o.append(i)
                }
                $(s[0]).addClass(r.itemClass + "_show")
            },
            goToSlide: function(e) {
                if (this.start = performance.now(),
                null !== this.prevItem) {
                    var i = getComputedStyle(s[this.prevItem])[$.supp.transition + "Duration"]
                      , n = getComputedStyle(s[this.prevItem])[$.supp.transition + "Delay"];
                    i = i.toLowerCase().indexOf("ms") > -1 ? parseInt(i, 10) : 1e3 * parseFloat(i),
                    n = n.toLowerCase().indexOf("ms") > -1 ? parseInt(n, 10) : 1e3 * parseFloat(n),
                    this.slideTransDur = i + n,
                    this.activeClassAdded = !1,
                    $(s[this.prevItem]).removeClass(r.itemClass + "_active")
                } else
                    setTimeout(function() {
                        $(s[0]).addClass(r.itemClass + "_active").removeClass(r.itemClass + "_show")
                    }, r.firstRunDelay);
                this.currentItem = e,
                r.timeline && (this.currentTimeline = s[this.currentItem].querySelector("." + r.itemClass + "__timeline"))
            },
            prevSlide: function() {
                this.nextItem = this.currentItem,
                this.prevItem = this.currentItem,
                this.goToSlide(--this.currentItem >= 0 ? this.currentItem-- : a - 1)
            },
            nextSlide: function() {
                this.prevItem = this.currentItem,
                this.nextItem = ++this.currentItem < a ? this.currentItem++ : 0,
                this.goToSlide(this.nextItem)
            },
            loop: function(e) {
                var i = this
                  , n = w(this.offsetTop, this.height);
                if (n) {
                    if (!r.loop && this.currentItem + 1 === a)
                        return;
                    var o = e - this.start;
                    o > r.autoplayTimeout && (o = r.autoplayTimeout),
                    o >= this.slideTransDur && !this.activeClassAdded && ($(s[i.currentItem]).addClass(r.itemClass + "_active"),
                    this.activeClassAdded = !0),
                    this.progress = 100 * o / r.autoplayTimeout,
                    r.autoplay && (r.timeline && this.timeline(),
                    o >= r.autoplayTimeout && this.nextSlide())
                }
                requestAnimationFrame(function(t) {
                    i.loop(t)
                })
            },
            timeline: function() {
                this.currentTimeline.style.width = this.progress + "%"
            },
            setHandlers: function() {
                var e = this;
                if (r.nav) {
                    var i = $("." + r.navClass[0].replace(" ", "."))
                      , n = $("." + r.navClass[1].replace(" ", "."));
                    o.mouseenter(function() {
                        i.add(n).addClass("animated")
                    }).mouseleave(function() {
                        i.add(n).removeClass("animated")
                    }),
                    n.on("click", function() {
                        e.nextSlide()
                    }),
                    i.on("click", function() {
                        e.prevSlide()
                    })
                }
                $(window).smartresize(this.onResize)
            },
            onResize: function() {
                var t = o.parents(".section");
                o[0].style.height = "";
                var e = t.height();
                o[0].style.height = e + "px";
                var i = o[0].getBoundingClientRect();
                this.offsetTop = i.top + scrollNum,
                this.height = i.bottom - i.top
            }
        };
        return l.init(),
        this
    }
    ,
    window.addEventListener("scroll", windowScroll, !1),
    function(t, e) {
        var i = function(t, e, i) {
            var n;
            return function() {
                function o() {
                    i || t.apply(s, a),
                    n = null
                }
                var s = this
                  , a = arguments;
                n ? clearTimeout(n) : i && t.apply(s, a),
                n = setTimeout(o, e || 100)
            }
        };
        t.fn[e] = function(t) {
            return t ? this.bind("resize", i(t)) : this.trigger(e)
        }
    }($, "smartresize"),
    $(window).smartresize(function() {
        y(),
        (Z.length || tt.length) && Z.add(tt).one("layoutComplete", function() {
            y()
        })
    });
    var it = {
        anchors: document.querySelectorAll(".section, footer"),
        anchorButtons: document.getElementsByClassName("scroll-to"),
        section: [],
        currentSection: null,
        menuItems: document.getElementsByClassName("menu__link"),
        position: scrollNum,
        anchor: document.querySelectorAll(".s-portfolio"),
        headerModified: !1,
        init: function() {
            this.makeScrolling(),
            !$ && document.querySelector(".header") ? (this.header = document.querySelector(".header"),
            this.headerHeight = W ? document.querySelector(".header").offsetHeight : 0,
            this.updateOffsets(),
            this.headerObserve()) : this.updateOffsets(),
            L && this.makeMenuObserve(),
            $.browser.mobile || $.platform.mac || !Y.hasClass("smooth-scroll") || this.custom()
        },
        scrollTo: function(e) {
            if ("number" == typeof e)
                this.position = e;
            else if ($(e).length)
                for (var i = 0; i < this.section.length; i++)
                    if (e === this.section[i].hash) {
                        this.position = 0 === i ? this.section[i].top : this.section[i].top + 2;
                        break
                    }
            this.position !== scrollNum && Y.smoothAnimate({
                scrollTop: this.position
            }, {
                duration: 800,
                easing: "easeOutSine",
                queue: !1,
                step: function(t, e, i) {
                    this.position = i
                }
                .bind(this),
                complete: function() {
                    this.dontChangeMenu = !1
                }
                .bind(this)
            })
        },
        custom_: function() {
            var e = 3
              , i = 0
              , n = 0
              , o = 16;
            $(window).on("mousewheel DOMMouseScroll", function(t) {
                t.preventDefault(),
                n = Date.now();
                var s = n - o
                  , a = t.originalEvent
                  , r = a.wheelDelta < 0 || a.detail > 0 ? 1 : -1;
                i += 50 * r * e,
                this.position += i,
                s > 16 && this.scrollTo(this.position),
                o = n
            }
            .bind(this))
        },
        custom: function() {
            function e() {
                s < -n || s > n ? (this.position += s,
                window.scrollTo(0, Math.round(this.position)),
                s *= i) : s = 0,
                requestAnimationFrame(function() {
                    e.call(it)
                })
            }
            console && console.log("custom scroll");
            var i = .95
              , n = .1
              , o = 4
              , s = 0;
            e.call(this),
            $(window).on("mousewheel DOMMouseScroll", function(t) {
                t.preventDefault();
                var e = t.originalEvent
                  , i = e.wheelDelta < 0 || e.detail > 0 ? 1 : -1;
                this.position = scrollNum,
                s += o * i
            }
            .bind(this))
        },
        test: function() {
            Y.smoothAnimate({
                scrollTop: H
            }, {
                duration: 16e3,
                easing: "easeOutSine",
                step: function(t, e, i) {
                    this.position = Math.ceil(i)
                }
                .bind(this),
                complete: function() {
                    this.dontChangeMenu = !1
                }
                .bind(this)
            })
        },
        prepareAnchors: function() {
            for (var e = '<div class="section-arrow ico-110"></div>', i = 0; i < this.anchor.length; i++) {
                var n = this.anchor[i];
                this.anchorButtons.push(e),
                $(e).prependTo(n)
            }
        },
        makeScrolling: function() {
            var e = this;
            $(this.anchorButtons).on("click", function(t) {
                t.preventDefault();
                var i = this.getAttribute("href");
                i && i.match(/#.*/) ? e.scrollTo(i.match(/#.*/)[0]) : e.currentSection < e.anchor.length ? e.scrollTo(e.section[e.currentSection + 1].hash) : e.scrollTo(e.section[0].hash)
            })
        },
        testForMenuChange: function() {
            if (!this.dontChangeMenu)
                for (var t = 0; t < this.section.length; t++)
                    scrollNum + Q - this.headerHeight >= this.section[this.section.length - 1].top + this.section[this.section.length - 1].height ? this.setMenuActiveItem(this.section.length - 1) : scrollNum >= this.section[t].top && scrollNum < this.section[t].top + this.section[t].height && this.setMenuActiveItem(t)
        },
        makeMenuObserve: function() {
            var e = this;
            $(e.menuItems).on("click", function(i) {
                var n = this.getAttribute("href");
                $(n).length && i.preventDefault();
                for (var o = 0; o < e.section.length; o++)
                    if (n === e.section[o].hash) {
                        e.scrollTo(n),
                        e.setMenuActiveItem(o, !0);
                        var s = e.section[o].hash;
                        window.location.hash = "!" + s.substr(1);
                        break
                    }
                l() && (Y.removeClass("menu-mobile-opened"),
                setTimeout(function() {
                    $(".menu-mobile-social").remove()
                }, 400))
            })
        },
        headerSticky: {
            on: function() {
                $(this.header).addClass("header-sticky header-dark"),
                this.headerModified = !0,
                V && !l() && (this.header.nextElementSibling.style.marginTop = this.headerHeight + "px")
            },
            off: function() {
                l() || (this.header.style.top = "-" + this.headerHeight + "px",
                V ? ($(this.header).removeClass("header-sticky"),
                this.header.removeAttribute("style"),
                this.header.nextElementSibling.style.marginTop = "") : setTimeout(function() {
                    $(this.header).removeClass("header-sticky header-dark"),
                    this.header.removeAttribute("style")
                }
                .bind(this), 400)),
                this.headerModified = !1
            }
        },
        headerObserve: function() {
            W && scrollNum >= this.offsetToChangeHeader && !this.headerModified ? this.headerSticky.on.call(this) : scrollNum < this.offsetToChangeHeader && this.headerModified && this.headerSticky.off.call(this);
        },
        setMenuActiveItem: function(e, i) {
            if (this.currentSection !== e && !this.dontChangeMenu) {
                i && (this.dontChangeMenu = !0),
                this.currentSection = e;
                for (var n = 0; n < this.menuItems.length; n++) {
                    var o = this.menuItems[n];
                    this.section[e].hash === o.getAttribute("href") ? $(o).addClass("menu__link_active") : $(o).removeClass("menu__link_active")
                }
            }
        },
        updateOffsets: function() {
            this.section = [];
            for (var t = 0; t < this.anchors.length; t++) {
                var e = this.anchors[t].getBoundingClientRect();
                this.section[t] = {
                    hash: "#" + this.anchors[t].id,
                    top: 0 === t ? Math.floor(e.top) + scrollNum : Math.floor(e.top) + scrollNum - this.headerHeight,
                    height: Math.floor(e.bottom - e.top)
                }
            }
            this.offsetToChangeHeader = 0 === this.section[0].top ? this.section[0].height - (V ? 0 : this.headerHeight) : 0
        },
        scrollToHash: function() {
            if (window.location.hash) {
                var e = window.location.hash.replace(/!/, "");
                this.scrollTo(e),
                $(window).load(function() {
                    this.scrollTo(e)
                }
                .bind(this))
            }
        }
    }
      , nt = {
        animateItems: document.getElementsByClassName("fx"),
        offsets: [],
        animated: [],
        animations: {},
        properties: {},
        complete: 0,
        init: function() {
            for (var t = 0; t < this.animateItems.length; t++) {
                var e = this.animateItems[t];
                this.animated[t] = !1,
                this.animations[t] = {
                    "animation-name": e.getAttribute("data-animation-name"),
                    "animation-duration": e.getAttribute("data-animation-duration"),
                    "animation-delay": e.getAttribute("data-animation-delay"),
                    "animation-fill-mode": e.getAttribute("data-animation-fill-mode"),
                    "animation-iteration-count": e.getAttribute("data-animation-iteration-count"),
                    "animation-visible-percent": e.getAttribute("data-animation-visible-percent") || 10
                }
            }
            this.updateOffsets(),
            this.setHandlers()
        },
        makeAnimate: function() {
            for (var e = 0; e < this.animateItems.length; e++)
                if (this.animations[e] && !this.animated[e]) {
                    var i = this.animateItems[e]
                      , n = w(this.offsets[e].top, this.offsets[e].height);
                    if (n >= this.animations[e]["animation-visible-percent"]) {
                        var o = this.animations[e]["animation-name"]
                          , s = this.animations[e]["animation-duration"]
                          , a = this.animations[e]["animation-delay"]
                          , r = this.animations[e]["animation-fill-mode"]
                          , l = this.animations[e]["animation-iteration-count"];
                        o ? this.properties["animation-name"] = o : delete this.properties["animation-name"],
                        s ? this.properties["animation-duration"] = s : delete this.properties["animation-duration"],
                        a ? this.properties["animation-delay"] = a : delete this.properties["animation-delay"],
                        r ? this.properties["animation-fill-mode"] = r : delete this.properties["animation-fill-mode"],
                        l ? this.properties["animation-iteration-count"] = l : delete this.properties["animation-iteration-count"],
                        $(i).addClass("animated").css(this.properties).trigger("animationOnScrollStarted"),
                        this.animated[e] = !0,
                        this.complete++
                    }
                } else if (this.complete === this.animateItems.length) {
                    this.destroy();
                    break
                }
        },
        setHandlers: function() {
            $(window).on("scroll.animateOnScroll", function() {
                requestAnimationFrame(function() {
                    nt && st.complete && nt.makeAnimate()
                })
            }),
            $(this.animateItems).on($.supp.animationEnd + " " + $.supp.transitionEnd, function() {
                $(this).trigger("animationOnScrollEnded")
            })
        },
        updateOffsets: function() {
            this.offsets = [];
            for (var t = 0; t < this.animateItems.length; t++) {
                var e = this.animateItems[t].getBoundingClientRect();
                this.offsets[t] = {
                    top: Math.floor(e.top) + scrollNum,
                    height: Math.floor(e.bottom - e.top)
                }
            }
        },
        destroy: function() {
            $(window).off(".animateOnScroll"),
            $(this.animateItems).off($.supp.animationEnd);
            for (var e in this)
                delete this[e];
            nt = null
        }
    }
      , ot = {
        parallaxItems: document.getElementsByClassName("parallax"),
        options: [],
        offsetsElement: [],
        offsetsParent: [],
        init: function() {
            this.settings()
        },
        settings: function() {
            for (var e, i, n, o, s, a = 0; a < this.parallaxItems.length; a++) {
                var r = this.parallaxItems[a]
                  , l = r.parentNode;
                $(l).addClass("parallax-wrapper"),
                e = r.getAttribute("data-parallax-speed") || .5,
                e = e >= 0 && e <= 1 ? e : .5,
                i = r.getAttribute("data-parallax-fading") || "true",
                n = r.getAttribute("data-parallax-min-fading") || 70,
                o = r.getAttribute("data-parallax-scale") || !1,
                s = r.getAttribute("data-parallax-max-scale") || 1.5,
                this.options[a] = {
                    speed: e,
                    fading: i,
                    minFading: n,
                    scale: o,
                    maxScale: s
                }
            }
        },
        makeParallax: function() {
            for (var e = 0; e < this.parallaxItems.length; e++) {
                var i = this.parallaxItems[e]
                  , n = w(this.offsetsParent[e].top, this.offsetsParent[e].height);
                if (n) {
                    if ("true" === this.options[e].fading) {
                        var o = s(this.offsetsParent[e].height <= Q ? this.options[e].minFading * n / 100 : this.options[e].minFading);
                        if ($.supp.cssFilter)
                            i.style[$.supp.cssFilter] = "brightness(" + o + "%)";
                        else {
                            var a = document.getElementById("cssFilterFallback" + e);
                            null === a && (a = document.createElement("div"),
                            a.id = "cssFilterFallback" + e,
                            a.style.position = "absolute",
                            a.style.width = "100%",
                            a.style.height = "100%",
                            a.style.top = "0",
                            a.style.left = "0",
                            a.style.backgroundColor = "#000",
                            i.insertBefore(a, i.firstChild)),
                            a.style.opacity = 1 - o / 100
                        }
                    }
                    if (this.offsetsParent[e].height >= this.offsetsElement[e].height) {
                        this.stopParallax(i);
                        continue
                    }
                    var r = "true" === this.options[e].scale ? 1 + (this.options[e].maxScale - 1) * (100 - n) / 100 : 1
                      , l = this.offsetsElement[e].height - this.offsetsParent[e].height > Q ? Q : this.offsetsElement[e].height - this.offsetsParent[e].height
                      , c = this.offsetsParent[e].top > 0 ? this.offsetsParent[e].height : 0
                      , u = s(100 * (this.offsetsParent[e].top - scrollNum) / (Q + c) * l / 100 * this.options[e].speed);
                    $.supp.cssTransform3d ? i.style[$.supp.cssTransform3d] = "translate3d(0," + -u + "px,0) scale3d(" + r + ", " + r + ", 1)" : i.style[$.supp.cssTransform2d] = "translate(0," + -u + "px) scale(" + r + ")"
                }
            }
        },
        updateOffsets: function() {
            this.offsetsElement = [],
            this.offsetsParent = [];
            for (var t = 0; t < this.parallaxItems.length; t++) {
                var e = this.parallaxItems[t]
                  , i = e.getBoundingClientRect()
                  , n = e.parentNode
                  , o = n.getBoundingClientRect();
                this.offsetsElement[t] = {
                    top: Math.floor(i.top) + scrollNum,
                    height: b(e).height || Math.floor(i.bottom - i.top)
                },
                this.offsetsParent[t] = {
                    top: Math.floor(o.top) + scrollNum,
                    height: Math.floor(o.bottom - o.top)
                },
                this.offsetsElement[t].height > this.offsetsParent[t].height && 0 !== this.offsetsParent[t].top && (e.style.height = this.offsetsElement[t].height + "px")
            }
        },
        stopParallax: function(e) {
            e.style.removeProperty("height"),
            e.style.removeProperty($.supp.cssTransform3d ? $.supp.cssTransform3d : $.supp.cssTransform2d)
        }
    };
    ot.init();
    var st = {
        imgs: document.querySelectorAll(".main-slider__item, .main-static__bg, .parallax"),
        videos: document.querySelectorAll(".video-bg__video"),
        currentItem: 0,
        totalItems: function() {
            return this.imgs.length
        },
        preloaderPage: document.querySelector(".p-preloader"),
        progressBar: document.querySelector(".p-preloader__progressbar"),
        progressBarPercentage: document.querySelector(".p-preloader__percentage"),
        progress: 0,
        done: !1,
        complete: !1,
        init: function() {
            this._loadResources()
        },
        _pagePreload: function() {
            return this.totalItems() ? this.progress = 100 * this.currentItem / this.totalItems() : this.progress = 100,
            this.progress > 100 && (this.progress = 100),
            this.preloaderPage ? void $(this.progressBar).stop().animate({
                width: this.progress + "%"
            }, {
                duration: 400,
                step: function(t) {
                    this.progressBarPercentage.textContent = Math.round(t)
                }
                .bind(this),
                complete: function() {
                    this.complete || ($(this.progressBar).fadeOut(200, function() {
                        this._done()
                    }
                    .bind(this)),
                    $(this.progressBarPercentage).fadeOut(200))
                }
                .bind(this)
            }) : void (this.complete || this._done())
        },
        _loadResources: function() {
            if (!this.totalItems())
                return void this._pagePreload();
            for (var t = 0; t < this.imgs.length; t++)
                m(this.imgs[t], function() {
                    this.currentItem++,
                    this._pagePreload()
                }
                .bind(this))
        },
        _done: function() {
            console && console.log("done"),
            countScrollNum(),
            this.done || (this.done = !0,
            L || U ? p() : f(),
            ot.updateOffsets(),
            ot.makeParallax(),
            it.init(),
            nt.init(),
            h(),
            e(800, function() {
                this.complete = !0,
                this.preloaderPage && (this.preloaderPage.style.display = "none"),
                nt && nt.makeAnimate(),
                L && (it.testForMenuChange(),
                it.scrollToHash())
            }
            .bind(this)))
        }
    };
    st.init();
    var at = $(".menu__link, .submenu__link").not(":only-child")
      , rt = $(".menu__item .submenu__link").not(":only-child")
      , lt = $(".menu")
      , ct = $(".footer-social")
      , ut = $(".footer")
      , dt = $(".wrapper-content");
    $(".menu-toggle").on("click", function() {
        Y.hasClass("menu-mobile-opened") ? (Y.removeClass("menu-mobile-opened"),
        $ || setTimeout(function() {
            $(".menu-mobile-social").remove()
        }, 400)) : ($ || lt.append('<li class="menu__item menu-mobile-social">' + ct.html() + "</li>"),
        Y.addClass("menu-mobile-opened"))
    }),
    $ ? (lt.append('<li class="menu__item menu-mobile-social">' + ct.html() + "</li>"),
    l() ? (Y.removeClass("menu-mobile-opened"),
    dt.css("margin-bottom", "auto"),
    ut.css({
        position: "relative",
        width: "auto"
    })) : (Y.addClass("menu-mobile-opened"),
    dt.css("margin-bottom", ut.height() + "px"),
    ut.css({
        position: "fixed",
        width: "calc(100% - " + lt.width() + "px)"
    }))) : dt.css("margin-bottom", ut.height() + "px"),
    _(),
    at.on("click", function(e) {
        (l() || $) && $(this).toggleClass("menu__link_pressed")
    }),
    $(".submenu").parent(".menu__item, .submenu__item").on("click", function() {
        (l() || $) && $(this).children(".submenu").slideToggle()
    }),
    $(".submenu__item").on("click", function(t) {
        t.stopPropagation()
    }),
    x(),
    k(),
    function() {
        var e = document.getElementsByClassName("accordion__title")
          , i = document.getElementsByClassName("accordion__content");
        $(e).on("click", function() {
            var n = $(this).next().hasClass("opened");
            $(e).removeClass("opened"),
            $(i).removeClass("opened").slideUp(),
            n || ($(this).addClass("opened"),
            $(this).next().slideDown().addClass("opened"))
        })
    }();
    var ht = {
        initAjaxSubmit: function(t) {
            var t = jQuery.extend({
                selector: "form[data-fw-form-id]",
                ajaxUrl: lptAjax.ajaxurl,
                loading: function(t, e) {
                    t.$form.css("position", "relative"),
                    t.$form.find("> .fw-form-loading").remove(),
                    e && t.$form.append('<div class="fw-form-loading" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.1);"></div>')
                },
                afterSubmitDelay: function(t) {},
                onErrors: function(t, i) {
                    console.log("onErrors"),
                    e ? ht.backend.showFlashMessages(ht.backend.renderFlashMessages({
                        error: i.errors
                    })) : jQuery.each(i.errors, function(t, e) {
                        T(e, "", !0)
                    })
                },
                hideErrors: function(t) {
                    t.$form.find(".form-error").remove()
                },
                onAjaxError: function(t, e) {
                    console.error(e.jqXHR, e.textStatus, e.errorThrown),
                    T("<span>Ajax error (more details in console)</span>", "", !0)
                },
                onSuccess: function(t, i) {
                    if (e)
                        ht.backend.showFlashMessages(ht.backend.renderFlashMessages(i.flash_messages));
                    else {
                        var n = "";
                        jQuery.each(i.flash_messages, function(t, e) {
                            switch (t) {
                            case "success":
                                n = "theme-color";
                                break;
                            default:
                                n = ""
                            }
                            jQuery.each(e, function(t, e) {
                                T('<span class="' + n + '">' + e + "</span>", "", !0)
                            })
                        }),
                        setTimeout(function() {
                            O()
                        }, 3e3),
                        t.$form.on("submit", function(t) {
                            t.preventDefault(),
                            t.stopPropagation()
                        })
                    }
                }
            }, t || {})
              , e = "undefined" != typeof adminpage && jQuery(document.body).hasClass("wp-admin")
              , i = !1;
            jQuery(document.body).on("submit", t.selector, function(e) {
                if (e.preventDefault(),
                i)
                    return void console.warn("Working... Try again later.");
                var n = jQuery(this);
                if (!n.is("form[data-fw-form-id]"))
                    return void console.error("This is not a FW_Form", "Selector:".opts.selector, "Form:", n);
                var o = n.find(":submit:focus");
                o.length || (o = n.find("[clicked]:submit")),
                n.find("[clicked]:submit").removeAttr("clicked");
                var s = {
                    $form: n,
                    $submitButton: o
                };
                t.hideErrors(s);
                var a = parseInt(t.loading(s, !n.hasClass("fw-silent-submit")));
                a = isNaN(a) || a < 0 ? 0 : a,
                n.removeClass("fw-silent-submit"),
                i = !0,
                setTimeout(function() {
                    a && t.afterSubmitDelay(s),
                    jQuery.ajax({
                        type: "POST",
                        url: t.ajaxUrl,
                        data: n.serialize() + (o.length ? "&" + o.attr("name") + "=" + o.attr("value") : ""),
                        dataType: "json"
                    }).done(function(e) {
                        i = !1,
                        t.loading(s, !1),
                        e.success ? t.onSuccess(s, e.data) : t.onErrors(s, e.data)
                    }).fail(function(e, n, o) {
                        i = !1,
                        t.loading(s, !1),
                        t.onAjaxError(s, {
                            jqXHR: e,
                            textStatus: n,
                            errorThrown: o
                        })
                    })
                }, a)
            })
        },
        backend: {
            showFlashMessages: function(t) {
                for (var e = jQuery(".wrap h2:first"); e.next().is(".fw-flash-messages, .fw-flash-message, .updated, .update-nag, .error"); )
                    e.next().remove();
                e.after('<div class="fw-flash-messages">' + t + "</div>"),
                jQuery(document.body).animate({
                    scrollTop: 0
                }, 300)
            },
            renderFlashMessages: function(t) {
                var e = []
                  , i = []
                  , n = "";
                return jQuery.each(t, function(t, o) {
                    switch (i = [],
                    t) {
                    case "error":
                        n = "error";
                        break;
                    case "warning":
                        n = "update-nag";
                        break;
                    default:
                        n = "updated"
                    }
                    jQuery.each(o, function(t, e) {
                        i.push('<div class="' + n + ' fw-flash-message"><p>' + e + "</p></div>")
                    }),
                    i.length && e.push('<div class="fw-flash-type-' + t + '">' + i.join('</div><div class="fw-flash-type-' + t + '">') + "</div>")
                }),
                e.join("")
            }
        },
        frontend: {
            renderFlashMessages: function(t) {
                var e = []
                  , i = [];
                return jQuery.each(t, function(t, n) {
                    i = [],
                    jQuery.each(n, function(t, e) {
                        i.push('<li class="fw-flash-message">' + e + "</li>")
                    }),
                    i.length && e.push('<ul class="fw-flash-type-' + t + '">' + i.join('</ul><ul class="fw-flash-type-' + t + '">') + "</ul>")
                }),
                e.join("")
            }
        }
    };
    ht.initAjaxSubmit({
        selector: 'form[data-fw-form-id][data-fw-ext-forms-type="contact-forms"]',
        ajaxUrl: lptAjax.ajaxurl
    }),
    $(".footer-form").submit(function(e) {
        var i = $(this);
        I(!0, 400, 0, function() {
            $.ajax({
                type: "POST",
                data: i.serialize() + "&" + $.param({
                    action: "nowadays_contact_form"
                }),
                url: lptAjax.ajaxurl,
                success: function(t) {
                    t ? (i[0].reset(),
                    T('<span class="theme-color">Your message was successfully sent</span>', "", !1),
                    setTimeout(function() {
                        O()
                    }, 3e3)) : T("Something went wrong :(<br>Please try again.", "", !1)
                },
                error: function() {
                    T("Something went wrong :(<br>Please try again.", "", !1)
                }
            })
        }),
        e.preventDefault()
    }),
    A();
    var mt = $(".modal")
      , pt = $(".modal__content")
      , ft = $(".overlay")
      , gt = $(".preloader")
      , vt = $(".modal__info")
      , yt = 400;
    ft.add($(".modal__close")).on("click", O);
    var wt, bt, _t = $(".preview-photo, .preview-video, .preview-custom");
    (L || U) && j(_t),
    function(e, window, n, o) {
        function s(t) {
            return t.toString().match(/^(\+\=|\-\=|\*\=|\/\=)?([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/i)
        }
        function a(t) {
            return t = r(t),
            /(^(zIndex|fontWeight|opacity)$)/.test(t) ? "" : "px"
        }
        function r(t) {
            return t.replace(/-(\w)/g, function(t, e) {
                return e.toUpperCase()
            })
        }
        function l(e, i, n) {
            if (Array.isArray(e) && (i = e,
            e = n ? n : u + "_" + i.join("_").replace(/\./g, "d").replace(/\-/g, "m")),
            "function" != typeof $.easing[e]) {
                var o = function(t, e, i, n, o) {
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
                $.easing[e] = function(t, e, n, s, a) {
                    return s * o(t, i[0], i[1], i[2], i[3]) + n
                }
            }
            return e
        }
        function c(t) {
            return function() {
                var e = arguments[0].length ? arguments[0] : [arguments[0]]
                  , i = e[e.length - 1].getAttribute("data-smooth-animate");
                return "running" !== i ? (i = new t(e,arguments[1],arguments[2]),
                i.options.queue && e[e.length - 1].setAttribute("data-smooth-animate", "running"),
                i) : void qunelist.add(e[e.length - 1], arguments[1], arguments[2])
            }
        }
        var u = "smoothAnimate"
          , d = {
            duration: 400,
            easing: "easeInOut",
            step: function(t, e, i) {},
            complete: function(t) {},
            queue: !0
        };
        [["ease", [.25, .1, .25, 1]], ["easeIn", [.42, 0, 1, 1]], ["easeOut", [0, 0, .58, 1]], ["easeInOut", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]], ["easeInBack", [.6, -.28, .735, .045]], ["easeOutBack", [.175, .885, .32, 1.275]], ["easeInOutBack", [.68, -.49, .265, 1.55]]].forEach(function(e) {
            $.easing[e[0]] || l(e[1], null, e[0])
        });
        var SmoothAnimate_ghy = function(e, i, n) {
            this.props = i,
            this.elements = e,
            this.options = $.extend({}, d, n),
            this._init()
        };
        SmoothAnimate_ghy.prototype = {
            _init: function() {
                this.start = Date.now(),
                this._prepare(),
                this._loop()
            },
            _prepare: function() {
                this.options.easing = "string" == typeof this.options.easing ? this.options.easing : l(this.options.easing),
                this.length = this.elements.length,
                this.properties = Object.create(null);
                var t;
                for (t = 0; t < this.length; t++) {
                    var e, i = Object.create(null);
                    for (e in this.props)
                        if (this.props.hasOwnProperty(e)) {
                            var n, o, r, c, u, d;
                            if (Array.isArray(this.props[e]))
                                r = s(this.props[e][0]),
                                c = s(this.props[e][1]),
                                n = +r[2],
                                o = +c[2],
                                u = r[3] || c[3] || a(e);
                            else
                                switch (r = s(this.props[e]),
                                o = +r[2],
                                d = r[1],
                                u = r[3] || a(e),
                                n = "scrollTop" === e || "scrollLeft" === e ? scrollNum : parseFloat(getComputedStyle(this.elements[t])[e]) || 0,
                                d) {
                                case "+=":
                                    o = n + o;
                                    break;
                                case "-=":
                                    o = n - o;
                                    break;
                                case "*=":
                                    o = n * o;
                                    break;
                                case "/=":
                                    o = n / o
                                }
                            i[e] = {
                                from: n,
                                to: o,
                                units: u
                            }
                        }
                    this.properties[t] = i
                }
            },
            _loop: function() {
                var e, n, o, s = this, a = Date.now() - this.start, r = a / this.options.duration;
                for (r > 1 && (r = 1,
                a = this.options.duration),
                n = 0; n < this.length; n++) {
                    for (o in this.props)
                        if (this.props.hasOwnProperty(o)) {
                            if (e = "linear" === this.options.easing ? this.properties[n][o].from + r * (this.properties[n][o].to - this.properties[n][o].from) : $.easing[this.options.easing](r, a, this.properties[n][o].from, this.properties[n][o].to - this.properties[n][o].from, this.options.duration),
                            "scrollTop" === o) {
                                window.scrollTo(0, e);
                                continue
                            }
                            if ("scrollLeft" === o) {
                                window.scrollTo(e, 0);
                                continue
                            }
                            if ("value" === o)
                                continue;
                            if (this.properties[n][o].to === this.properties[n][o].from)
                                continue;
                            this.elements[n].style[o] = e + this.properties[n][o].units
                        }
                    this.options.step(r, this.elements[n], e)
                }
                a < this.options.duration ? requestAnimationFrame(function() {
                    s._loop()
                }) : (this.elements[this.length - 1].removeAttribute("data-smooth-animate"),
                this.options.complete(this.elements),
                qunelist.run(this.elements))
            }
        },
        SmoothAnimate_ghy = c(SmoothAnimate_ghy);
        var qunelist = {
            calls: [],
            add: function(t, e, i) {
                this.calls.push([t, e, i])
            },
            run: function(elementArray) {
                var e, i = elementArray[elementArray.length - 1], n = this.calls.length;
                for (e = 0; e < n; e++) {
                    var o = this.calls[e][0];
                    if (i === o)
                        return SmoothAnimate_ghy(elementArray, this.calls[e][1], this.calls[e][2]),
                        void this.calls.splice(e, 1)
                }
            }
        };
        SmoothAnimate_ghy.queue = qunelist,
        window.jQuery && ($.fn["smoothAnimate"] = function(props, options) {
            return SmoothAnimate_ghy(this, props, options),
            this
        }
        ),
        window.SmoothAnimate = SmoothAnimate_ghy
    }(window.jQuery || window, window, document),
    q();
    var Ct = $(".customizer");
    Ct.length && F(),
    function() {
        var e = document.querySelectorAll('a[href*="themeforest.net/"]');
        $(e).on("click", function() {
            /\?ref\=Like\-A\-Pro/i.test(this.href) || (this.href = this.href + "?ref=Like-A-Pro")
        })
    }(),
    function() {
        function e() {
            function e(e) {
                var i = e.target.a.id;
                for (var n in l)
                    if (l.hasOwnProperty(n) && l[n].playerId === i) {
                        var o = JSON.parse(l[n].opts)
                          , s = l[n].videoContainer
                          , a = s.find(".video-bg__sound");
                        o.playerVars.mute ? (l[n].instance.mute(),
                        a.length && a.addClass("muted")) : a.length && a.addClass("unmuted"),
                        o.playerVars.autoplay ? s.addClass("playing") : s.addClass("paused"),
                        s.on("click", function(e) {
                            if ($(e.target).hasClass("video-bg__sound"))
                                return l[n].instance.isMuted() ? l[n].instance.unMute() : l[n].instance.mute(),
                                void a.toggleClass("muted unmuted");
                            var i = l[n].instance.getPlayerState();
                            1 === i ? l[n].pause() : l[n].play(),
                            $(this).toggleClass("playing paused")
                        });
                        break
                    }
            }
            for (var i in l)
                if (l.hasOwnProperty(i) && "youtube" === l[i].type) {
                    var n = JSON.parse(l[i].opts);
                    n.events = {
                        onReady: e
                    },
                    l[i].instance = new YT.Player(l[i].playerId,n),
                    l[i].pause = function() {
                        this.instance.pauseVideo()
                    }
                    ,
                    l[i].play = function() {
                        this.instance.playVideo()
                    }
                }
        }
        function i() {
            for (var t in l)
                !function() {
                    if (l.hasOwnProperty(t) && "vimeo" === l[t].type) {
                        var e = JSON.parse(l[t].opts)
                          , i = new Vimeo.Player(l[t].playerId,e);
                        l[t].instance = i,
                        i.ready().then(function(t) {
                            n(i)
                        })["catch"](function(t) {
                            console.error(t)
                        })
                    }
                }()
        }
        function n(e) {
            var i = e.element.parentNode.id;
            for (var n in l)
                if (l.hasOwnProperty(n) && l[n].playerId === i) {
                    var o = JSON.parse(l[n].opts)
                      , s = l[n].videoContainer
                      , a = s.find(".video-bg__sound");
                    o.mute ? (l[n].instance.setVolume(0),
                    a.length && a.addClass("muted")) : a.length && a.addClass("unmuted"),
                    o.autoplay ? s.addClass("playing") : s.addClass("paused"),
                    s.on("click", function(e) {
                        if ($(e.target).hasClass("video-bg__sound"))
                            return void l[n].instance.getVolume().then(function(t) {
                                t ? l[n].instance.setVolume(0) : l[n].instance.setVolume(1),
                                a.toggleClass("muted unmuted")
                            })["catch"](function(t) {
                                console.log(t)
                            });
                        var i = this;
                        l[n].instance.getPaused().then(function(e) {
                            e ? l[n].instance.play() : l[n].instance.pause(),
                            $(i).toggleClass("playing paused")
                        })
                    });
                    break
                }
        }
        function o() {
            for (var e in l)
                if (l.hasOwnProperty(e) && "local" === l[e].type) {
                    var i = l[e].videoContainer
                      , n = document.getElementById(l[e].playerId)
                      , o = JSON.parse(l[e].opts);
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            if ("autoplay" === s) {
                                n[s] = o[s],
                                o[s] && setTimeout(function() {
                                    n.play()
                                }, 150);
                                continue
                            }
                            "loop" === s || "controls" === s ? n[s] = o[s] : n.setAttribute(s, o[s])
                        }
                    var a = i.find(".video-bg__sound");
                    o.muted ? (n.muted = !0,
                    a.length && a.addClass("muted")) : a.length && a.addClass("unmuted"),
                    o.autoplay ? i.addClass("playing") : i.addClass("paused"),
                    i.on("click", function(e) {
                        return $(e.target).hasClass("video-bg__sound") ? (n.muted ? n.muted = !1 : n.muted = !0,
                        void a.toggleClass("muted unmuted")) : (n.paused ? n.play() : n.pause(),
                        void $(this).toggleClass("playing paused"))
                    });
                    break
                }
        }
        var s, a, r = document.querySelectorAll(".video-bg");
        if (r.length) {
            var l = {};
            window.players = l;
            for (var c = 0; c < r.length; c++) {
                var u, d = r[c].querySelector(".video-bg__video"), h = "video-bg-" + c;
                if (u = $(d).hasClass("video-bg__video_youtube") ? "youtube" : $(d).hasClass("video-bg__video_vimeo") ? "vimeo" : "local",
                d.setAttribute("id", h),
                l[c] = {
                    playerId: h,
                    videoContainer: $(d).parents(".video-bg"),
                    opts: d.getAttribute("data-video")
                },
                l[c].type = u,
                "yes" === d.getAttribute("data-video-mute-btn")) {
                    var m = $('<div class="video-bg__sound"></div>');
                    $(r[c]).append(m)
                }
                switch (u) {
                case "youtube":
                    s || N("https://www.youtube.com/iframe_api"),
                    s = !0;
                    break;
                case "vimeo":
                    a || N("https://player.vimeo.com/api/player.js", i),
                    a = !0;
                    break;
                default:
                    o()
                }
            }
            window.onYouTubeIframeAPIReady = e,
            window.onVimeoIframeAPIReady = i
        }
    }(),
    D(),
    window._scroll = scrollNum,
    window.loader = st,
    window.jQuery.supp = $.supp,
    window.parallax = ot,
    window.scrolling = it,
    window.animateOnScroll = nt
}(jQuery);
