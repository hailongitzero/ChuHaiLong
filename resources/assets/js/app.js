/**
 * Created by HAILONG_ICT on 1/27/2016.
 */
webpackJsonp([ 0 ], [ function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    var s = i(1), a = n(s), r = i(5), o = n(r), l = i(12);
    i(128);
    var h = new a["default"](o["default"](l.ROOT_VIEW_SELECTOR)[0]);
    h.start();
}, function(e, t, i) {
    "use strict";
    function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t["default"] = e, t;
    }
    function s(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), o = i(2), l = i(3), h = s(l), u = i(4), c = s(u), _ = i(5), d = s(_), f = i(6), v = s(f), p = i(8), m = s(p), g = i(9), E = s(g), y = i(10), w = s(y), k = i(13), b = n(k), T = i(25), A = i(31), S = s(A), C = i(101), L = s(C), R = i(102), O = s(R), P = i(103), I = s(P), x = i(24), M = i(109), D = s(M), F = i(12), H = function() {
        function e(t) {
            a(this, e), this._elem = t, this._pageContainerElem = d["default"](F.PAGE_WRAPPER_SELECTOR, this._elem)[0],
                this._scrollWatcher = new w["default"](this), this._resizeWatcher = new v["default"](D["default"]),
                this._animationFrameWatcher = new m["default"](), this._urlWatcher = new E["default"](this),
                this._currentPageController = null, this._stickyHeader = null, this._navState = null,
                this._htmlCache = {}, this._urlChangeQueue = [], this._isInTransitionLoop = !1,
                this.wavePromise = null;
        }
        return r(e, [ {
            key:"start",
            value:function() {
                var e = this;
                h["default"].attach(document.body), this._testForTouch(), this._currentPageController = this._setupPage(d["default"](F.PAGE_CONTAINER_SELECTOR, this._pageContainerElem)[0]);
                var t = d["default"](F.STICKY_HEADER_SELECTOR, this._elem)[0], i = x.pathFromSlug("home") === window.location.pathname;
                t && (this._stickyHeader = new S["default"](this, t), d["default"](F.HIDDEN_CHARACTER_CONTAINER_SELECTOR, t).map(function(t) {
                    return new O["default"](e, t);
                }), this._stickyHeader.transitionHiddenOnHomepage(0, i));
                var n = d["default"](F.NAV_STATE_SELECTOR, this._elem)[0];
                n && setTimeout(function() {
                    e._navState = new L["default"](e, n);
                }, 400), i && b.fadeInHomepage(this._currentPageController, this._stickyHeader),
                    o.bindAll(this, "_urlChange"), this._urlWatcher.on(g.URL_CHANGE_EVENT, this._urlChange),
                    this._currentPageController.trigger(P.READY_EVENT);
            }
        }, {
            key:"_urlChange",
            value:function(e, t) {
                this._urlChangeQueue.push({
                    fromURL:t,
                    toURL:e
                }), this._runTransitions();
            }
        }, {
            key:"_runTransitions",
            value:function() {
                var e, t, i;
                return regeneratorRuntime.async(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (!this._isInTransitionLoop) {
                                n.next = 2;
                                break;
                            }
                            return n.abrupt("return");

                        case 2:
                            this._navState.blurNavItems(), this._isInTransitionLoop = !0, this._pauseWatchers();

                        case 5:
                            if (!(this._urlChangeQueue.length > 0)) {
                                n.next = 13;
                                break;
                            }
                            return e = this._urlChangeQueue.shift(), t = e.fromURL, i = e.toURL, n.next = 11,
                                this._runTransition(i, t);

                        case 11:
                            n.next = 5;
                            break;

                        case 13:
                            this._unpauseWatchers(), this.checkForVisibleElements(), this._isInTransitionLoop = !1;

                        case 16:
                        case "end":
                            return n.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_runTransition",
            value:function(e, t) {
                var i, n, s, a, r, o, l, h, u, _;
                return regeneratorRuntime.async(function(d) {
                    for (;;) switch (d.prev = d.next) {
                        case 0:
                            return i = "mobile" === this.currentBreakpoint(), n = this._currentPageController,
                                s = this._currentPageController.rootElem, a = e.replace(window.HTTP_PREFIX, "/"),
                                r = "" + window.HTTP_PREFIX + "partials" + a, o = this._htmlCache[r], l = void 0,
                                l = o ? Promise.resolve(o) :T.getHTML(r), d.next = 10, b.animateOut({
                                url:t,
                                controller:n
                            }, {
                                url:e
                            }, this._stickyHeader, this._navState, i);

                        case 10:
                            return d.next = 12, l;

                        case 12:
                            return o = d.sent, this._htmlCache[r] = o, h = document.createElement("div"), h.innerHTML = o,
                                u = h.childNodes[0], b.prepare({
                                url:t,
                                rootNode:s
                            }, {
                                url:e,
                                rootNode:u
                            }, this._stickyHeader), n.tearDown(), s.parentNode.removeChild(s), this._pageContainerElem.appendChild(u),
                                _ = this._setupPage(u), window.scrollTo(0, 0), d.next = 25, c["default"](200);

                        case 25:
                            return d.next = 27, b.run({
                                url:t,
                                controller:n
                            }, {
                                url:e,
                                controller:_
                            }, this._stickyHeader, this._navState);

                        case 27:
                            return d.next = 29, c["default"](10);

                        case 29:
                            return this._currentPageController = _, _.trigger(P.READY_EVENT), d.abrupt("return", Promise.resolve());

                        case 32:
                        case "end":
                            return d.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_setupPage",
            value:function(e) {
                var t = d["default"](F.SCROLL_ELEMENT_SELECTOR, e)[0];
                return this._scrollWatcher.changeTargetElement(window), new I["default"](this, e, t);
            }
        }, {
            key:"_testForTouch",
            value:function() {
                var e = "ontouchstart" in window || window.navigator.MaxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
                e && document.body.classList.add(F.TOUCH_TEST_CLASSNAME);
            }
        }, {
            key:"tearDown",
            value:function() {
                this._resizeWatcher.tearDown(), this._resizeWatcher = null, this._scrollWatcher.tearDown(),
                    this._scrollWatcher = null, this._animationFrameWatcher.tearDown(), this._animationFrameWatcher = null,
                    this._urlWatcher.tearDown(), this._urlWatcher = null, this._currentPageController.tearDown(),
                    this._currentPageController = null, this._elem = null, this._currentPage = null;
            }
        }, {
            key:"_pauseWatchers",
            value:function() {
                this._resizeWatcher.pause(), this._scrollWatcher.pause(), this._animationFrameWatcher.pause();
            }
        }, {
            key:"_unpauseWatchers",
            value:function() {
                this._resizeWatcher.unpause(), this._scrollWatcher.unpause(), this._animationFrameWatcher.unpause();
            }
        }, {
            key:"currentViewport",
            value:function() {
                return this._resizeWatcher.viewport;
            }
        }, {
            key:"currentBreakpoint",
            value:function() {
                return this._resizeWatcher.breakpoint;
            }
        }, {
            key:"onFrame",
            value:function(e) {
                var t = void 0 === arguments[1] ? !1 :arguments[1];
                this._animationFrameWatcher.on(p.FRAME_EVENT, e, t);
            }
        }, {
            key:"offFrame",
            value:function(e) {
                this._animationFrameWatcher.off(p.FRAME_EVENT, e);
            }
        }, {
            key:"onResize",
            value:function(e) {
                var t = void 0 === arguments[1] ? !1 :arguments[1];
                this._resizeWatcher.on(f.RESIZE_EVENT, e, t);
            }
        }, {
            key:"offResize",
            value:function(e) {
                this._resizeWatcher.off(f.RESIZE_EVENT, e);
            }
        }, {
            key:"onBreakpoint",
            value:function(e) {
                var t = void 0 === arguments[1] ? !1 :arguments[1];
                this._resizeWatcher.on(f.BREAKPOINT_EVENT, e, t);
            }
        }, {
            key:"offBreakpoint",
            value:function(e) {
                this._resizeWatcher.off(f.BREAKPOINT_EVENT, e);
            }
        }, {
            key:"currentScroll",
            value:function() {
                return this._scrollWatcher.scrollY;
            }
        }, {
            key:"onScrollStart",
            value:function(e) {
                var t = void 0 === arguments[1] ? !1 :arguments[1];
                this._scrollWatcher.on(y.SCROLL_START_EVENT, e, t);
            }
        }, {
            key:"offScrollStart",
            value:function(e) {
                this._scrollWatcher.off(y.SCROLL_START_EVENT, e);
            }
        }, {
            key:"onScroll",
            value:function(e) {
                var t = void 0 === arguments[1] ? !1 :arguments[1], i = void 0 === arguments[2] ? !1 :arguments[2];
                t ? this._scrollWatcher.on(y.SCROLL_REALTIME_EVENT, e, i) :this._scrollWatcher.on(y.SCROLL_EVENT, e, i);
            }
        }, {
            key:"offScroll",
            value:function(e) {
                var t = void 0 === arguments[1] ? !1 :arguments[1];
                t ? this._scrollWatcher.off(y.SCROLL_REALTIME_EVENT, e) :this._scrollWatcher.off(y.SCROLL_EVENT, e);
            }
        }, {
            key:"onScrollEnd",
            value:function(e) {
                var t = void 0 === arguments[1] ? !1 :arguments[1];
                this._scrollWatcher.on(y.SCROLL_END_EVENT, e, t);
            }
        }, {
            key:"offScrollEnd",
            value:function(e) {
                this._scrollWatcher.off(y.SCROLL_END_EVENT, e);
            }
        }, {
            key:"checkForVisibleElements",
            value:function() {
                this._scrollWatcher.checkForVisibleElements();
            }
        }, {
            key:"isVisible",
            value:function(e) {
                var t = e.getBoundingClientRect();
                return t.bottom > 0 && t.right > 0 && t.left < (window.innerWidth || document.documentElement.clientWidth) && t.top < (window.innerHeight || document.documentElement.clientHeight);
            }
        }, {
            key:"trackElement",
            value:function(e, t, i) {
                this._scrollWatcher.trackElement(e, t, i);
            }
        }, {
            key:"untrackElement",
            value:function(e) {
                this._scrollWatcher.untrackElement(e);
            }
        }, {
            key:"startWaveAnimation",
            value:function(e) {
                this.wavePromise = e;
                var t = this;
                this.wavePromise.then(function() {
                    t.wavePromise = null;
                });
            }
        } ]), e;
    }();
    t["default"] = H, e.exports = t["default"];
}, , , function(e, t) {
    "use strict";
    function i(e) {
        return regeneratorRuntime.async(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.abrupt("return", new Promise(function(t) {
                        return setTimeout(t, e);
                    }));

                case 1:
                case "end":
                    return t.stop();
            }
        }, null, this);
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t["default"] = i, e.exports = t["default"];
}, function(e, t) {
    "use strict";
    function i(e) {
        var t = void 0 === arguments[1] ? document :arguments[1];
        return Array.prototype.slice.call(t.querySelectorAll(e), 0);
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t["default"] = i, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) {
            var i = [], n = !0, s = !1, a = void 0;
            try {
                for (var r, o = e[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value),
                !t || i.length !== t); n = !0) ;
            } catch (l) {
                s = !0, a = l;
            } finally {
                try {
                    !n && o["return"] && o["return"]();
                } finally {
                    if (s) throw a;
                }
            }
            return i;
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), o = i(2), l = i(7), h = n(l), u = "resize";
    t.RESIZE_EVENT = u;
    var c = "breakpoint";
    t.BREAKPOINT_EVENT = c;
    var _ = 300, d = function() {
        function e(t, i) {
            a(this, e), i = "number" == typeof i ? i :_, this._throttledOnResize = o.throttle(this._onResize.bind(this), i),
                this.viewport = this._getViewportSize(), this._breakpointDefinitions = t, this.breakpoint = this._getCurrentBreakpoint(this.viewport[0]),
                this._eventsAttached = !1, this._isPaused = !1, this._attachEvents();
        }
        return r(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this.tearDownEventable(), this.viewport = null, this._throttledOnResize = null;
            }
        }, {
            key:"pause",
            value:function() {
                this._isPaused = !0;
            }
        }, {
            key:"unpause",
            value:function() {
                this._isPaused = !1;
            }
        }, {
            key:"eventableState",
            value:function(e) {
                return e === u ? this.viewport :e === c ? this.breakpoint :void 0;
            }
        }, {
            key:"_onResize",
            value:function() {
                if (!this._isPaused) {
                    this.viewport = this._getViewportSize();
                    var e = s(this.viewport, 2), t = e[0], i = e[1];
                    this.trigger(u, t, i), this._checkBreakpoint(t);
                }
            }
        }, {
            key:"_checkBreakpoint",
            value:function(e) {
                var t = this.breakpoint, i = this._getCurrentBreakpoint(e);
                i !== t && (this.breakpoint = i, this.trigger(c, i, t));
            }
        }, {
            key:"_getCurrentBreakpoint",
            value:function(e) {
                for (var t in this._breakpointDefinitions) if (this._breakpointDefinitions.hasOwnProperty(t)) {
                    var i = this._breakpointDefinitions[t];
                    if (e >= i.min && e <= i.max) return t;
                }
            }
        }, {
            key:"_getViewportSize",
            value:function() {
                return [ window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ];
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._eventsAttached || (this._eventsAttached = !0, window.addEventListener(u, this._throttledOnResize));
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._eventsAttached && (this._eventsAttached = !1, window.removeEventListener(u, this._throttledOnResize));
            }
        } ]), e;
    }();
    o.extend(d.prototype, h["default"](u, c)), t["default"] = d;
}, function(e, t, i) {
    "use strict";
    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
            return i;
        }
        return Array.from(e);
    }
    function s() {
        for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
        return {
            __getLookup:function() {
                return this.__lookup || (this.__lookup = t.reduce(function(e, t) {
                    return e.set(t, new Set()), e;
                }, new Map())), this.__lookup;
            },
            tearDownEventable:function() {
                this.__lookup = null;
            },
            trigger:function(e) {
                for (var t = arguments.length, i = Array(t > 1 ? t - 1 :0), n = 1; t > n; n++) i[n - 1] = arguments[n];
                var s = this.__getLookup().get(e);
                s.forEach(function(e) {
                    e.apply(void 0, i);
                });
            },
            on:function(e, t) {
                var i = void 0 === arguments[2] ? !1 :arguments[2], s = this.__getLookup().get(e);
                if (s) {
                    if (!t) throw new Error("Cannot attach an event with a function");
                    if (s.add(t), i) {
                        var r = [];
                        "function" == typeof this.eventableState && (r = this.eventableState(e) || [], a.isArray(r) || (r = [ r ])),
                            this.trigger.apply(this, [ e ].concat(n(r)));
                    }
                }
            },
            off:function(e, t) {
                var i = this.__getLookup().get(e);
                i && i["delete"](t);
            }
        };
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t["default"] = s;
    var a = i(2);
    e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(7), l = n(o), h = "frame";
    t.FRAME_EVENT = h;
    var u = function() {
        function e() {
            s(this, e), this._eventsAttached = !1, this._isPaused = !1, r.bindAll(this, "_onFrame"),
                this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this.tearDownEventable();
            }
        }, {
            key:"pause",
            value:function() {
                this._isPaused = !0;
            }
        }, {
            key:"unpause",
            value:function() {
                this._isPaused = !1;
            }
        }, {
            key:"_onFrame",
            value:function(e) {
                this._eventsAttached && requestAnimationFrame(this._onFrame), this._isPaused || this.trigger(h, e);
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._eventsAttached || (this._eventsAttached = !0, requestAnimationFrame(this._onFrame));
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._eventsAttached && (this._eventsAttached = !1);
            }
        } ]), e;
    }();
    r.extend(u.prototype, l["default"](h)), t["default"] = u;
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a() {
        return window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port :"");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), o = i(2), l = i(7), h = n(l), u = "change";
    t.URL_CHANGE_EVENT = u;
    var c = "click", _ = "js-disable-ajax-link", d = function() {
        function e(t) {
            s(this, e), this._app = t, this._currentURL = window.location.href, this._eventsAttached = !1,
                o.bindAll(this, "_onPopState", "_onClick"), this._attachEvents();
        }
        return r(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this.tearDownEventable();
            }
        }, {
            key:"navigate",
            value:function(e) {
                var t = this._currentURL.replace(a(), "").split("#")[0];
                return t === e ? !1 :(this.trigger(u, e, this._currentURL), window.dataLayer.push({
                    event:"history_push_state"
                }), this._currentURL = e, !0);
            }
        }, {
            key:"_onPopState",
            value:function() {
                this.navigate(window.location.pathname);
            }
        }, {
            key:"_onClick",
            value:function(e) {
                var t = this;
                if (!e.metaKey && !e.ctrlKey) {
                    if (window.BLOCK_ALL_LINKS) return e.preventDefault(), void e.stopPropagation();
                    for (var i = e.target, n = function() {
                        if ("a" !== i.localName) return i = i.parentNode, "continue";
                        if (i.target && i.target.length > 0) return {
                            v:void 0
                        };
                        if (i.classList.contains(_)) return {
                            v:void 0
                        };
                        var n = i.href.replace(a(), ""), s = new RegExp("^" + window.HTTP_PREFIX);
                        if (!n.match(s)) return {
                            v:void 0
                        };
                        e.preventDefault(), e.stopPropagation();
                        var r = t._app.wavePromise || Promise.resolve();
                        return r.then(function() {
                            t.navigate(n) && window.history.pushState({
                                siteReferral:!0,
                                path:n
                            }, "", n);
                        }), {
                            v:void 0
                        };
                    }; i; ) {
                        var s = n();
                        switch (s) {
                            case "continue":
                                continue;

                            default:
                                if ("object" == typeof s) return s.v;
                        }
                    }
                }
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._eventsAttached || (this._eventsAttached = !0, window.addEventListener("popstate", this._onPopState),
                    document.addEventListener(c, this._onClick));
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._eventsAttached && (this._eventsAttached = !1, window.removeEventListener("popstate", this._onPopState),
                    document.removeEventListener(c, this._onClick));
            }
        } ]), e;
    }();
    o.extend(d.prototype, h["default"](u)), t["default"] = d;
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(7), l = n(o), h = i(11), u = n(h), c = i(12), _ = "scroll";
    t.SCROLL_EVENT = _;
    var d = "realtime";
    t.SCROLL_REALTIME_EVENT = d;
    var f = "end";
    t.SCROLL_END_EVENT = f;
    var v = "start";
    t.SCROLL_START_EVENT = v;
    var p = "keydown";
    t.KEYDOWN_EVENT = p;
    var m = "keyup";
    t.KEYUP_EVENT = m;
    var g = 200, E = 100, y = -1 !== navigator.userAgent.indexOf("MSIE 10"), w = 8, k = function() {
        function e(t, i, n) {
            s(this, e), this._app = t, i = "number" == typeof i ? i :g, n = "number" == typeof n ? n :E,
                this._throttledOnScroll = r.throttle(this._onScroll.bind(this), n), this._debouncedOnScrollEnd = r.debounce(this._onScrollEnd.bind(this), i),
                this._scrollParent = null, this._eventsAttached = !1, this.isScrolling = !1, this.scrollY = 0,
                this.initialScrollY = 0, this.nextScrollY = 0, this._scrollTime = 0, this._positionBuffer = [],
                this._frameBuffer = [], this._isPaused = !1, this._rafRunning = !1, this._trackedElements = new Map(),
                this._trackedElementsVisiblityOffset = new Map(), r.bindAll(this, "_didScroll", "_onFrame", "_checkKeyboardScroll");
        }
        return a(e, [ {
            key:"changeTargetElement",
            value:function(e) {
                this._detachEvents(), this._scrollParent = e === window ? window :e.parentNode,
                    this._attachEvents(), this.scrollY = 0, this.isScrolling = !1, this._didScroll();
            }
        }, {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this.tearDownEventable(), this._scrollParent = null;
            }
        }, {
            key:"pause",
            value:function() {
                this._isPaused = !0;
            }
        }, {
            key:"unpause",
            value:function() {
                this._isPaused = !1;
            }
        }, {
            key:"eventableState",
            value:function() {
                return this.scrollY;
            }
        }, {
            key:"_onScroll",
            value:function() {
                this._isPaused || this.isScrolling && this.trigger(_, this.scrollY);
            }
        }, {
            key:"_onScrollEnd",
            value:function() {
                this._isPaused || this.isScrolling && (this.checkForVisibleElements(), this.trigger(f, this.scrollY),
                    this.isScrolling = !1);
            }
        }, {
            key:"_getScrollPosition",
            value:function() {
                return this._scrollParent !== window ? this._scrollParent.scrollTop :y && window.pageYOffset !== document.documentElement.scrollTop ? document.documentElement.scrollTop :window.pageYOffset || document.documentElement.scrollTop;
            }
        }, {
            key:"_didScroll",
            value:function() {
                this.nextScrollY = this._getScrollPosition(), this._throttledOnScroll(), this._debouncedOnScrollEnd();
            }
        }, {
            key:"_onFrame",
            value:function(e) {
                if (this._rafRunning && (requestAnimationFrame(this._onFrame), !this._isPaused)) {
                    e = e || u["default"]();
                    var t = this._getScrollPosition();
                    t !== this.scrollY && (this.isScrolling || (this.scrollY = t, this._scrollTime = e,
                        this._positionBuffer.length = 0, this._frameBuffer.length = 0, this.trigger(v, t),
                        this.isScrolling = !0));
                    var i = t - this.scrollY, n = e - this._scrollTime;
                    this._positionBuffer.unshift(i / n), this._positionBuffer.length = w, this._frameBuffer.unshift(n),
                        this._frameBuffer.length = w;
                    for (var s = 0, a = 0; w > a; a++) s += this._positionBuffer[a] || 0;
                    s /= w;
                    for (var r = 0, a = 0; w > a; a++) r += this._frameBuffer[a] || 0;
                    r /= w, this._scrollTime = e, t !== this.scrollY && (this.scrollY = t, this.trigger(d, this.scrollY, s * r));
                }
            }
        }, {
            key:"_checkKeyboardScroll",
            value:function(e) {
                if (9 === e.keyCode) if (e.type === p) this.initialScrollY = this._getScrollPosition(); else if (this.initialScrollY !== this._getScrollPosition()) {
                    var t = "mobile" === this._app.currentBreakpoint() ? c.MINIMUM_HEADER_HEIGHT_MOBILE :c.MINIMUM_HEADER_HEIGHT;
                    this._scrollParent.scrollTo(0, this._getScrollPosition() - t), this._onScrollEnd();
                }
            }
        }, {
            key:"_isVisible",
            value:function(e) {
                var t = e.getBoundingClientRect(), i = this._trackedElementsVisiblityOffset.get(e) || 0;
                return t.bottom > 0 - i && t.right > 0 - i && t.left < (window.innerWidth || document.documentElement.clientWidth) + i && t.top < (window.innerHeight || document.documentElement.clientHeight) + i;
            }
        }, {
            key:"checkForVisibleElements",
            value:function() {
                var e = this;
                this._trackedElements.forEach(function(t, i) {
                    e._isVisible(i) && e._handleVisible(i);
                });
            }
        }, {
            key:"untrackElement",
            value:function(e) {
                this._trackedElements["delete"](e);
            }
        }, {
            key:"_handleVisible",
            value:function(e) {
                this._trackedElements.get(e)(e), this.untrackElement(e);
            }
        }, {
            key:"trackElement",
            value:function(e, t, i) {
                i || (i = 0), this._isVisible(e) && !this._isPaused ? t(e) :(this._trackedElements.set(e, t),
                    this._trackedElementsVisiblityOffset.set(e, i));
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._eventsAttached || (this._eventsAttached = !0, this._scrollParent.addEventListener(_, this._didScroll),
                    this._scrollParent.addEventListener(p, this._checkKeyboardScroll), this._scrollParent.addEventListener(m, this._checkKeyboardScroll),
                    this._rafRunning = !0, requestAnimationFrame(this._onFrame));
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._eventsAttached && (this._eventsAttached = !1, this._scrollParent.removeEventListener(_, this._didScroll),
                    this._scrollParent.removeEventListener(p, this._checkKeyboardScroll), this._scrollParent.removeEventListener(m, this._checkKeyboardScroll),
                    this._rafRunning = !1);
            }
        } ]), e;
    }();
    r.extend(k.prototype, l["default"](_, d, v, f)), t["default"] = k;
}, function(e, t) {
    "use strict";
    function i() {
        return +new Date();
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t["default"] = i, e.exports = t["default"];
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var i = ".js-page-container";
    t.PAGE_CONTAINER_SELECTOR = i;
    var n = ".js-page-wrapper";
    t.PAGE_WRAPPER_SELECTOR = n;
    var s = ".js-scroll-element";
    t.SCROLL_ELEMENT_SELECTOR = s;
    var a = ".js-root-view";
    t.ROOT_VIEW_SELECTOR = a;
    var r = ".js-responsive-image";
    t.RESPONSIVE_IMAGE_SELECTOR = r;
    var o = ".js-avoid-orphans";
    t.AVOID_ORPHANS_SELECTOR = o;
    var l = ".js-grid-item";
    t.GRID_ITEM_SELECTOR = l;
    var h = ".js-video-trigger";
    t.VIDEO_SELECTOR = h;
    var u = ".js-article-video";
    t.ARTICLE_VIDEO = u;
    var c = ".js-article-yt-video";
    t.ARTICLE_YOUTUBE_VIDEO_SELECTOR = c;
    var _ = ".js-site-header";
    t.STICKY_HEADER_SELECTOR = _;
    var d = ".js-hide-eol-dot";
    t.HIDDEN_CHARACTER_CONTAINER_SELECTOR = d;
    var f = ".js-carousel";
    t.CAROUSEL_SELECTOR = f;
    var v = ".js-tabs";
    t.TABS_SELECTOR = v;
    var p = ".js-scroll-to-target";
    t.ANIMATE_SCROLL_SELECTOR = p;
    var m = ".js-search-component";
    t.SEARCH_COMPONENT_SELECTOR = m;
    var g = ".js-share-fab";
    t.SHARE_FAB_SELECTOR = g;
    var E = ".js-hover-animation";
    t.HOVER_ANIMATION_SELECTOR = E;
    var y = ".js-nav-state";
    t.NAV_STATE_SELECTOR = y;
    var w = "touch";
    t.TOUCH_TEST_CLASSNAME = w;
    var k = ".js-quote-tile";
    t.QUOTE_SELECTOR = k;
    var b = ".header-container .js-hover-animation";
    t.HEADER_HOVER_ANIMATION_SELECTOR = b;
    var T = "-active";
    t.STATE_ACTIVE = T;
    var A = "-open";
    t.STATE_OPEN = A;
    var S = "-inactive";
    t.STATE_INACTIVE = S;
    var C = "-homepage";
    t.HOMEPAGE_LOAD_STATE = C;
    var L = 64;
    t.MINIMUM_HEADER_HEIGHT = L;
    var R = 100;
    t.MINIMUM_HEADER_HEIGHT_MOBILE = R;
    var O = 256;
    t.MAXIMUM_HEADER_HEIGHT = O;
    var P = 120;
    t.SLIDE_EFFECT_Y_OFFSET = P;
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        e.hideFakeShadow(), e.hideFakeHeader(), l.set(e.rootElem, {
            opacity:0,
            y:_.SLIDE_EFFECT_Y_OFFSET
        });
        var i = .8, n = c["default"](_.STICKY_HEADER_SELECTOR, this._elem)[0];
        return Promise.all([ t.animateNewTitle(i), l.to(e.rootElem, i, {
            y:0,
            ease:Expo.easeOut
        }), l.set(e.rootElem, {
            autoAlpha:1,
            ease:Expo.easeOut
        }) ]).then(function() {
            return n.classList.remove(_.HOMEPAGE_LOAD_STATE), e.showFakeShadow(), e.showFakeHeader(),
                Promise.resolve();
        });
    }
    function a(e, t, i) {
        l.set(e.rootNode, {
            top:0,
            left:0,
            position:"absolute"
        }), l.set(t.rootNode, {
            autoAlpha:0,
            y:_.SLIDE_EFFECT_Y_OFFSET
        }), i.refreshFadeItems(t.rootNode);
    }
    function r(e, t, i, n, s) {
        var a = h.isDetail(t.url), r = h.isDetail(e.url), o = "home" === h.slugFromPath(t.url);
        e.controller.hideFakeShadow();
        var u = .8, c = "light" === h.getContrast(t.url) ? "#ffffff" :"rgba(0, 0, 0, 0.7)", _ = null;
        return e.controller.hideFakeHeader(), a && (_ = h.getContrastHeaderColor(t.url),
        _ || (_ = "light" === h.getContrast(t.url) ? "rgba(0, 0, 0, 0.5)" :"rgba(255, 255, 255, 0.5)")),
            s ? l.set(e.controller.rootElem, {
                autoAlpha:0
            }) :l.to(e.controller.rootElem, u / 4, {
                autoAlpha:0
            }), Promise.all([ i.expandHeader(u, h.getColor(t.url), _, h.getTitle(t.url).split(" - ")[0], h.getContrast(t.url), r, a).then(function() {
            return a || e.controller.hideFakeHeader(), Promise.resolve();
        }), i.setContrast(u / 2, c), n.moveTracker(h.slugFromPath(t.url), h.shouldHideNavigation(t.url), c), i.transitionHiddenOnHomepage(u / 2, o) ]);
    }
    function o(e, t, i) {
        document.title = h.getTitle(t.url);
        var n = h.isDetail(t.url);
        t.controller.hideFakeShadow(), t.controller.hideFakeHeader();
        var s = .8;
        return Promise.all([ i.animateNewTitle(s), l.to(t.controller.rootElem, s, {
            y:0,
            ease:Expo.easeOut
        }), l.set(t.controller.rootElem, {
            autoAlpha:1
        }) ]).then(function() {
            return t.controller.showFakeShadow(), t.controller.showFakeHeader(), t.controller.rootElem.style.transform = "none",
                i.restoreHiddenHeader(n, h.getContrast(t.url));
        });
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t.fadeInHomepage = s, t.prepare = a, t.animateOut = r, t.run = o;
    var l = i(14), h = i(24), u = i(5), c = n(u), _ = i(12);
}, function(e, t, i) {
    "use strict";
    function n(e, t, i, n, s) {
        var a = new Promise(function(a) {
            s ? s.onComplete = a :n.onComplete = a, e(t, i, n, s);
        });
        return a.killTween = function() {
            TweenMax.killTweensOf(t);
        }, a;
    }
    function s(e, t) {
        return TweenMax.set(e, t), Promise.resolve();
    }
    i(15), i(23), e.exports = {
        to:n.bind(null, TweenMax.to),
        fromTo:n.bind(null, TweenMax.fromTo),
        set:s
    };
}, , , , , , , , , , function(e, t) {
    "use strict";
    function i(e) {
        for (var t in window.META_JSON.page) if (window.META_JSON.page.hasOwnProperty(t) && e === window.META_JSON.page[t].slug) return t;
    }
    function n(e) {
        var t = i(e);
        return t ? window.META_JSON.page[t] :void 0;
    }
    function s(e) {
        if (e = e.split("?")[0].split("#")[0], e === window.HTTP_PREFIX) return {
            type:"page",
            id:e
        };
        for (var t in window.META_JSON.page) if (window.META_JSON.page.hasOwnProperty(t) && t !== window.HTTP_PREFIX) {
            var i = window.META_JSON.page[t], n = t.replace(/\/$/, ""), s = new RegExp("^" + n + "/(.+)/$"), a = e.match(s);
            if (a) return e in window.META_JSON.page ? {
                type:"page",
                id:e
            } :{
                type:i.slug,
                id:a[1]
            };
        }
        return {
            type:"page",
            id:e
        };
    }
    function a(e) {
        var t = s(e);
        return "page" !== t.type ? t.type :window.META_JSON.page[t.id] ? window.META_JSON.page[t.id].slug :void 0;
    }
    function r(e) {
        var t = a(e), i = n(t);
        return i.hideNavigation;
    }
    function o(e) {
        var t = s(e), i = t.type, n = t.id;
        if (i && n) {
            var a = window.META_JSON[i][n];
            if (a && a.color) return a.color;
        }
        throw new Error("No color found");
    }
    function l(e) {
        var t = s(e);
        return "page" === t.type && window.META_JSON[t.type][t.id] && window.META_JSON[t.type][t.id].isDetail === !0 ? !0 :t.type && "page" !== t.type && null !== t.id;
    }
    function h(e) {
        var t = s(e), i = t.type, n = t.id;
        if (i && n) {
            var a = window.META_JSON[i][n];
            if (a && a.contrastHeaderColor) return a.contrastHeaderColor;
        }
    }
    function u(e) {
        var t = s(e), i = t.type, n = t.id, r = a(e);
        if ("video" === r) return "light";
        if (i && n) {
            var o = window.META_JSON[i][n];
            if (o && o.contrast) return o.contrast;
        }
        return "light";
    }
    function c(e) {
        var t = s(e), i = t.type, a = t.id;
        if ("page" === i) {
            var r = window.META_JSON[i][a];
            if (r && r.title && r.title !== window.DEFAULT_TITLE) return "" + r.title + " - " + window.DEFAULT_TITLE;
        }
        var o = n(i);
        if (i && a && o) {
            var r = window.META_JSON[i][a];
            if (r && r.title) return "" + r.title + " - " + o.title + " - " + window.DEFAULT_TITLE;
        }
        return window.DEFAULT_TITLE;
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t.pathFromSlug = i, t.pageFromSlug = n, t.definitionByPath = s, t.slugFromPath = a,
        t.shouldHideNavigation = r, t.getColor = o, t.isDetail = l, t.getContrastHeaderColor = h,
        t.getContrast = u, t.getTitle = c;
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        var i = new XMLHttpRequest(), n = void 0;
        if (t) {
            var s = e.split("?");
            n = l["default"].parse(s[1]);
            for (var a in t) t.hasOwnProperty(a) && (n[a] = t[a]);
            e = s[0] + "?" + l["default"].stringify(n), t = null;
        }
        return i.open("get", e, !0), i.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
            i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), new Promise(function(e, t) {
            var n = setTimeout(function() {
                i.abort(), t(i);
            }, 12e4);
            i.addEventListener("load", function(n) {
                var s = n.target.responseText;
                n.target.status >= 400 ? t(i) :e(s);
            }, !1), i.addEventListener("error", function() {
                return t(i);
            }, !1), i.addEventListener("abort", function() {
                return t(i);
            }, !1), i.addEventListener("loadend", function() {
                return clearTimeout(n);
            }, !1), i.send();
        });
    }
    function a(e, t) {
        return s(e, t).then(function(e) {
            return new Promise(function(t, i) {
                var n = null;
                if ("" !== e) try {
                    n = JSON.parse(e);
                } catch (s) {
                    return i(s);
                }
                t(n);
            });
        });
    }
    function r(e) {
        return s(e);
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t.getJSON = a, t.getHTML = r;
    var o = i(26), l = n(o);
}, , , , , , function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t :t;
    }
    function r() {
        return window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port :"");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), l = i(14), h = i(2), u = i(5), c = n(u), _ = i(99), d = n(_), f = i(32), v = n(f), p = i(24), m = i(12), g = i(100), E = n(g), y = Math.abs, w = Math.max, k = Math.floor, b = ".js-wave-layer", T = ".js-sticky-header-fade", A = ".js-hidden-on-homepage", S = ".js-animate-contrast-color", C = ".js-animate-contrast-fill", L = ".js-search-is-active", R = ".js-wave-trigger", O = ".js-header-background", P = ".js-fake-shadow", I = ".js-hide-page-title", x = ".js-change-page-title-contrast", M = ".js-nav-row", D = "color", F = "contrast", H = "overlay", N = function() {
        function e(t, i) {
            var n = this;
            s(this, e), this._app = t, this._elem = i, this._navScroller = c["default"](m.NAV_STATE_SELECTOR)[0],
                this._headerChild = c["default"](O)[0], this._headerChildTitleContainer = c["default"](x, this._elem)[0],
                this._headerChildTitle = c["default"](I, this._elem)[0], this._navRow = c["default"](M, this._elem)[0],
                this._fakeShadow = c["default"](P, this._navRow)[0], this._headerColor = v["default"](this._elem)[D],
                this._headerContrastColor = v["default"](this._elem)[H], this._headerContrastColor && (this._headerColor = this._mixColors(this._headerColor, this._headerContrastColor)),
                this._headerContrast = v["default"](this._elem)[F], this._fadeItems = null, this._shouldRevealLogoOnScroll = !1,
                this._hiddenOnHomepage = c["default"](A, this._elem)[0], this._searchIsActiveElem = c["default"](L, this._elem)[0],
                this._waveTriggers = c["default"](R, this._elem), this._waveLayer = c["default"](b, this._elem)[0],
                this._wave = null, this._height = 0, this._areEventsAttached = !1, this._isStuck = !1,
                this._isTransitioning = !1, this._isDepressed = !1, this._colorElems = c["default"](S, this._elem),
                this._fillElems = c["default"]("" + C + " svg ._fill-color", this._elem), this._startingScrollX = 0,
                this._awaitingPosition = null, h.bindAll(this, "_checkPosition", "_onResize", "_writeHeaderState", "_onMouseDown", "_onScrollEnd", "_onTouchStart", "_onNavScroll"),
                this._wave = new E["default"](this._app, this._waveLayer), this._wave.append(),
                this._onResize(), this._onScrollEnd(), this._setColor(), this._attachEvents(), setTimeout(function() {
                n.refreshFadeItems(document.body);
            }, 200);
        }
        return o(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._wave.detach(), this._wave = null, this._waveTriggers = null,
                    this._app = null, this._elem = null, this._fadeItems = null, this._searchIsActiveElem = null;
            }
        }, {
            key:"transitionHiddenOnHomepage",
            value:function(e, t) {
                var i = "mobile" === this._app.currentBreakpoint();
                return this._shouldRevealLogoOnScroll = t && !i, l.to(this._hiddenOnHomepage, e, {
                    autoAlpha:this._shouldRevealLogoOnScroll ? 0 :1
                });
            }
        }, {
            key:"setContrast",
            value:function(e, t) {
                return Promise.all([ l.to(this._colorElems, e, {
                    color:t,
                    ease:Linear.easeNone
                }), l.to(this._fillElems, e, {
                    fill:t,
                    ease:Linear.easeNone
                }) ]);
            }
        }, {
            key:"refreshFadeItems",
            value:function(e) {
                this._fadeItems = c["default"](T, e), this._checkPosition();
            }
        }, {
            key:"_attachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached || (this._waveTriggers.forEach(function(t) {
                    t.addEventListener("mousedown", e._onMouseDown), t.addEventListener("touchstart", e._onTouchStart);
                }), this._app.onScroll(this._checkPosition, !0), this._app.onScrollEnd(this._onScrollEnd),
                    this._app.onResize(this._onResize), this._navScroller.addEventListener("scroll", this._onNavScroll),
                    this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached && (this._waveTriggers.forEach(function(t) {
                    t.removeEventListener("mousedown", e._onMouseDown), t.removeEventListener("touchstart", e._onTouchStart);
                }), this._app.offScroll(this._checkPosition, !0), this._app.offScrollEnd(this._onScrollEnd),
                    this._app.offResize(this._onResize), this._navScroller.removeEventListener("scroll", this._onNavScroll),
                    this._areEventsAttached = !1);
            }
        }, {
            key:"_onMouseDown",
            value:function(e) {
                if (!this._isDepressed && !e.metaKey && !e.ctrlKey) {
                    var t = d["default"](e.target, R).href.replace(r(), "").split("#")[0], i = window.location.href.replace(r(), "").split("#")[0];
                    if (i !== t) {
                        var n = e.clientX, s = e.clientY;
                        this._isDepressed = !0;
                        var a = p.getColor(t), o = p.getContrastHeaderColor(t);
                        !o && p.isDetail(t) && (o = "light" === p.getContrast(t) ? "rgba(0, 0, 0, 0.5)" :"rgba(255, 255, 255, 0.5)"),
                        o && (a = this._mixColors(a, o)), this._wave.onDown(n, s, a, !0, .65);
                    }
                }
            }
        }, {
            key:"_onTouchStart",
            value:function(e) {
                var t = this;
                if (!this._isDepressed) {
                    var i = d["default"](e.target, R).href.replace(r(), "").split("#")[0], n = window.location.href.replace(r(), "").split("#")[0];
                    if (n !== i) {
                        var s = "mobile" === this._app.currentBreakpoint();
                        s && (this._startingScrollX = this._navScroller.scrollLeft), this._isDepressed = !0;
                        var a = e.changedTouches || e.targetTouches, o = a[0].pageX, l = a[0].pageY, h = p.getColor(i), u = p.getContrastHeaderColor(i);
                        !u && p.isDetail(i) && (u = "light" === p.getContrast(i) ? "rgba(0, 0, 0, 0.5)" :"rgba(255, 255, 255, 0.5)"),
                        u && (h = this._mixColors(h, u)), this._awaitingPosition = {
                            x:o,
                            y:l,
                            newColor:h
                        }, setTimeout(function() {
                            t._isDepressed && t._awaitingPosition && (t._wave.onDown(t._awaitingPosition.x, t._awaitingPosition.y, t._awaitingPosition.newColor, !0, .65),
                                t._awaitingPosition = null);
                        }, 150);
                    }
                }
            }
        }, {
            key:"_onNavScroll",
            value:function() {
                if (this._isDepressed) {
                    var e = y(this._navScroller.scrollLeft - this._startingScrollX);
                    10 >= e || (this._isDepressed = !1, this._wave.isMouseDown && this._wave.cancel());
                }
            }
        }, {
            key:"_onResize",
            value:function() {
                this._height = this._elem.getBoundingClientRect().height;
            }
        }, {
            key:"_setColor",
            value:function() {
                l.set(this._navRow, {
                    backgroundColor:this._headerColor
                }), this._headerChild && (this._headerChild.style.backgroundColor = this._headerColor);
            }
        }, {
            key:"_onScrollEnd",
            value:function() {
                if ("mobile" !== this._app.currentBreakpoint()) {
                    var e = -(this._height - m.MINIMUM_HEADER_HEIGHT), t = -this._app.currentScroll();
                    t = w(t, e);
                    var i = t + this._height;
                    this._elem.style.height = "" + i + "px";
                    var n = m.MAXIMUM_HEADER_HEIGHT - i;
                    l.set(this._waveLayer, {
                        y:-n
                    }), l.set(this._headerChild, {
                        y:-n
                    }), l.set(this._wave.elem, {
                        y:n
                    });
                }
            }
        }, {
            key:"_checkPosition",
            value:function(e) {
                var t = void 0 === arguments[1] ? 0 :arguments[1];
                if ("mobile" !== this._app.currentBreakpoint() && !this._isTransitioning) {
                    e = e || this._app.currentScroll();
                    for (var i = [], n = 0; n < k(y(t) / 6); n++) i[n] = e + t * (n + 1);
                    for (var s = this._isPastHeader(e), a = !1, n = 0; n < i.length; n++) if (s !== this._isPastHeader(i[n])) {
                        a = !0;
                        break;
                    }
                    var r = s && !a || !s && a;
                    !this._isStuck && r ? (this._isStuck = !0, this._fakeShadow.style.opacity = 1) :this._isStuck && !r && (this._isStuck = !1,
                        this._fakeShadow.style.opacity = 0), this._isStuck || this._writeHeaderState();
                }
            }
        }, {
            key:"_isPastHeader",
            value:function(e) {
                var t = this._height - m.MINIMUM_HEADER_HEIGHT;
                return e >= t + 6;
            }
        }, {
            key:"expandHeader",
            value:function(e, t, i, n, s, a, r) {
                var o = this, h = "mobile" === this._app.currentBreakpoint();
                this._isTransitioning = !0, this._headerColor = t, i && (this._headerColor = this._mixColors(this._headerColor, i)),
                    this._isStuck = !1, h || (this._fakeShadow.style.opacity = 0);
                var u = m.MAXIMUM_HEADER_HEIGHT - m.MINIMUM_HEADER_HEIGHT, c = a ? u :Math.min(this._app.currentScroll(), u), _ = r ? u :0, d = void 0;
                return this._awaitingPosition && (this._wave.onDown(this._awaitingPosition.x, this._awaitingPosition.y, this._awaitingPosition.newColor, !0, .65),
                    this._awaitingPosition = null), this._isDepressed ? (h || !function() {
                    var t = {
                        y:c
                    };
                    l.to(t, e - .3, {
                        y:_,
                        onUpdate:function() {
                            l.set(o._waveLayer, {
                                y:-t.y
                            }), l.set(o._headerChild, {
                                y:-t.y
                            }), l.set(o._wave.elem, {
                                y:t.y
                            });
                        }
                    });
                }(), d = this._wave.onUp()) :d = l.to(this._headerChild, e, {
                    backgroundColor:this._headerColor
                }), h ? l.set(this._headerChild, {
                    opacity:1,
                    y:0
                }) :l.fromTo(this._headerChild, e - .3, {
                    opacity:1,
                    y:-c
                }, {
                    y:-_,
                    ease:Expo.easeOut
                }), this._headerChildTitle && (l.set(this._headerChildTitle, {
                    opacity:0
                }), this._headerChildTitle.innerHTML = n), this._headerChildTitleContainer && (this._headerChildTitleContainer.classList.remove("-dark"),
                    this._headerChildTitleContainer.classList.remove("-light"), this._headerChildTitleContainer.classList.add("-" + s)),
                    d.then(function() {
                        o._wave.hide(), o._isDepressed && l.set(o._headerChild, {
                            backgroundColor:o._headerColor
                        }), o._isDepressed = !1;
                    }), d;
            }
        }, {
            key:"animateNewTitle",
            value:function(e) {
                return this._headerChildTitle ? (l.to(this._headerChildTitle, .2, {
                    opacity:1,
                    delay:.1
                }), l.fromTo(this._headerChildTitle, e, {
                    y:30
                }, {
                    y:0,
                    ease:Expo.easeOut
                })) :Promise.resolve();
            }
        }, {
            key:"restoreHiddenHeader",
            value:function(e, t) {
                var i = "mobile" === this._app.currentBreakpoint();
                if (l.set(this._navRow, {
                        backgroundColor:this._headerColor
                    }), l.set(this._headerChild, {
                        opacity:0
                    }), !i) {
                    var n = e ? 64 :m.MAXIMUM_HEADER_HEIGHT;
                    this._elem.style.height = "" + n + "px", this._onResize(), this._onScrollEnd();
                }
                return this._elem.classList.remove("-dark"), this._elem.classList.remove("-light"),
                    this._elem.classList.add("-" + t), this._isTransitioning = !1, Promise.resolve();
            }
        }, {
            key:"_writeHeaderState",
            value:function() {
                var e = this._app.currentScroll() > 1;
                l.to(this._fadeItems, .4, {
                    autoAlpha:e ? 0 :1
                });
                var t = p.pathFromSlug("home") === window.location.pathname;
                t && l.to(this._hiddenOnHomepage, .4, {
                    autoAlpha:e ? 1 :0
                });
            }
        }, {
            key:"_mixColors",
            value:function(e, t) {
                for (var i = this._parseColor(e), n = this._parseColor(t), s = 1 - n[3], r = [], o = 2 * s - 1, l = 0, h = ((o * l === -1 ? o :(o + l) / (1 + o * l)) + 1) / 2, u = 1 - h, c = 0; 3 > c; c++) r[c] = k(i[c] * h + n[c] * u);
                return "#" + r.map(a).join("");
            }
        }, {
            key:"_parseColor",
            value:function(e) {
                var t = e.match(/(rgb|rgba)\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/);
                if (t) return [ parseInt(t[2], 10), parseInt(t[3], 10), parseInt(t[4], 10), t[5] ? parseFloat(t[5]) :1 ];
                var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                if (i) return [ parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16), 1 ];
                throw new Error("Invalid color: " + e);
            }
        } ]), e;
    }();
    t["default"] = N, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        if (r) return e.dataset;
        var t = Array.prototype.slice.call(e.attributes, 0);
        return t.reduce(function(e, t) {
            var i = t.name.match(/^data-(.+)/);
            return i && (e[s.camelize(i[1])] = t.value), e;
        }, {});
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t["default"] = n;
    var s = i(33), a = document.createElement("div"), r = "string" == typeof a.dataset;
    e.exports = t["default"];
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    "use strict";
    function i(e, t) {
        for (;e; ) {
            if (n(e, t)) return e;
            e = e.parentNode;
        }
    }
    function n(e, t) {
        if (s) return e[s] && e[s](t);
        for (var i = (e.parentNode || e.document).querySelectorAll(t), n = -1; i[++n] && i[n] != e; ) ;
        return !!i[n];
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t["default"] = i;
    var s = Element.prototype.matchesSelector && "matchesSelector" || Element.prototype.mozMatchesSelector && "mozMatchesSelector" || Element.prototype.msMatchesSelector && "msMatchesSelector" || Element.prototype.oMatchesSelector && "oMatchesSelector" || Element.prototype.webkitMatchesSelector && "webkitMatchesSelector";
    e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        return E(y(e.x - t.x, 2) + y(e.y - t.y, 2));
    }
    function r(e, t, i, n, s) {
        var a = 0 >= t ? k :s, r = e / 1e3, o = t / 1e3, l = r + o, h = 1.2 * m(E(i * i + n * n), a) + 5, u = 1 * (h / a), c = l / u, _ = h * (1 - y(40, -c));
        return w(_);
    }
    function o(e, t, i) {
        var n = t / 1e3;
        return 0 >= t ? b :g(0, b - n * i);
    }
    function l(e, t, i, n, s) {
        var a = o(e, t, s);
        return .01 > a || i >= n;
    }
    function h(e, t, i, n, s) {
        var a = o(e, t, s);
        return a >= b && i >= n;
    }
    function u(e, t) {
        var i = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (i) return "rgba(" + i[1] + ", " + i[2] + ", " + i[3] + ", " + t + ")";
        var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return n ? "rgba(" + parseInt(n[1], 16) + ", " + parseInt(n[2], 16) + ", " + parseInt(n[3], 16) + ", " + t + ")" :"rgba(255, 255, 255, " + t + ")";
    }
    function c(e, t) {
        var i = a(e, T);
        A.x = t.w;
        var n = a(e, A);
        C.y = t.h;
        var s = a(e, C);
        S.x = t.w, S.y = t.h;
        var r = a(e, S);
        return g(i, n, s, r);
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var _ = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), d = i(2), f = i(14), v = i(11), p = n(v), m = Math.min, g = Math.max, E = Math.sqrt, y = Math.pow, E = Math.sqrt, w = Math.abs, k = 75, b = .3, T = {
        x:0,
        y:0
    }, A = {
        x:1,
        y:0
    }, S = {
        x:0,
        y:1
    }, C = {
        x:0,
        y:1
    }, L = {
        css:{
            x:0,
            y:0,
            opacity:0,
            scale:0
        }
    }, R = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._containerElem = i, this._containerRect = {
                w:1,
                h:1
            }, this.elem = null, this._position = {
                x:0,
                y:0
            }, this._maxRadius = 1, this._isOpaque = !1, this._isAttached = !1, this._promise = null,
                d.bindAll(this, "_animate", "_updateSize"), this._prepareElements();
        }
        return _(e, [ {
            key:"tearDown",
            value:function() {
                this.detach(), this.elem = null, this._containerRect = null, this._tweenStatus = null,
                    this._tweenTarget = null, this._position = null;
            }
        }, {
            key:"_prepareElements",
            value:function() {
                this._containerElem.style.overflow = "hidden", this.elem = document.createElement("div"),
                    this.elem.style.willChange = "opacity, backgroundColor", this.elem.style.pointerEvents = "none",
                    this.elem.style.position = "absolute", this.elem.style.top = "0px", this.elem.style.left = "0px",
                    this.elem.style.right = "0px", this.elem.style.bottom = "0px", this.elem.style.overflow = "hidden",
                    this.elem.style.opacity = 0, this._wave = document.createElement("div"), this._wave.style.willChange = "opacity, transform",
                    this._wave.style.position = "absolute", this._wave.style.overflow = "hidden", this._wave.style.borderRadius = "50% 50%",
                    this._wave.style.backgroundColor = "rgb(255,255,255)", f.set(this._wave, {
                    transformOrigin:"50% 50%"
                }), this.elem.appendChild(this._wave);
            }
        }, {
            key:"append",
            value:function() {
                this._isAttached || (this._isAttached = !0, this._containerElem.appendChild(this.elem),
                    this._app.onResize(this._updateSize), this._updateSize());
            }
        }, {
            key:"detach",
            value:function() {
                this._isAttached && (this._isAttached = !1, this._containerElem.removeChild(this.elem),
                    this._app.offResize(this._updateSize));
            }
        }, {
            key:"_updateSize",
            value:function() {
                var e = this._containerElem.getBoundingClientRect();
                this._containerRect.w = e.width, this._containerRect.h = e.height, this._maxRadius = 1.6 * c(T, this._containerRect),
                    this.width = this.height = this._maxRadius / 2, this._wave.style.width = "" + this.width + "px",
                    this._wave.style.height = "" + this.height + "px";
            }
        }, {
            key:"onDown",
            value:function(e, t) {
                var i = void 0 === arguments[2] ? "rgb(255, 255, 255)" :arguments[2], n = this, s = void 0 === arguments[3] ? !1 :arguments[3], a = void 0 === arguments[4] ? .65 :arguments[4];
                return this._promise = new Promise(function(e) {
                    n.resolver = e;
                }), this._isOpaque = s, this._speed = a, this._firstFrame = !0, this.color = i,
                    this.hasWave = !0, this.cancelled = !1, this.isMouseDown = !0, this.tDown = 0, this.tUp = 0,
                    this.mouseUpStart = 0, this.mouseDownStart = p["default"](), this.setPosition(e, t),
                this._loop || (this._loop = this._animate, requestAnimationFrame(this._loop)), this._promise;
            }
        }, {
            key:"setPosition",
            value:function(e, t) {
                this._position.x = e - this.width / 2, this._position.y = t - this.height / 2;
            }
        }, {
            key:"onUp",
            value:function() {
                return this.isMouseDown ? (this.isMouseDown = !1, this.mouseUpStart = p["default"](),
                    this.mouseDownStart = 0, this.tDown = m(this.tDown, 250), this.tDown < 70 && (this.tDown = 0),
                    this.tUp = 0) :this._loop && requestAnimationFrame(this._loop), this._promise;
            }
        }, {
            key:"_animate",
            value:function() {
                if (this._isAttached) {
                    this.mouseDownStart > 0 && (this.tDown = p["default"]() - this.mouseDownStart),
                    this.mouseUpStart > 0 && (this.tUp = p["default"]() - this.mouseUpStart);
                    var e = r(this.tDown, this.tUp, this._containerRect.w, this._containerRect.h, this._maxRadius), t = o(this.tDown, this.tUp, this._speed), i = this._position.x, n = this._position.y, s = h(this.tDown, this.tUp, e, this._maxRadius, this._speed), a = l(this.tDown, this.tUp, e, this._maxRadius, this._speed), c = this.mouseUpStart > 0 ? !a :!s;
                    if ((this.cancelled || !c) && (this.hasWave = !1), this._isOpaque && this.mouseUpStart > 0) {
                        var _ = 1 - t, d = u(this.color, _);
                        this.elem.style.backgroundColor = d;
                    }
                    this.drawRipple(i, n, e, t), c && !this.cancelled && requestAnimationFrame(this._loop),
                    !this.hasWave && this._loop && (this._loop = null, this.resolver());
                }
            }
        }, {
            key:"drawRipple",
            value:function(e, t, i, n) {
                L.css.x = e, L.css.y = t, L.css.opacity = n, L.css.scale = i / this._maxRadius * 2,
                    f.set(this._wave, L), this._firstFrame && (f.set(this.elem, {
                    opacity:1
                }), this._firstFrame = !1);
            }
        }, {
            key:"hide",
            value:function() {
                f.set(this.elem, {
                    opacity:0
                }), this.elem.style.backgroundColor = "transparent";
            }
        }, {
            key:"cancel",
            value:function() {
                this.cancelled = !0, f.to(this._wave, .2, {
                    scale:0,
                    opacity:0,
                    delay:.1
                });
            }
        } ]), e;
    }();
    t["default"] = R, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(5), l = n(o), h = i(32), u = n(h), c = i(14), _ = i(24), d = ".js-nav-state-item", f = ".js-nav-state-hide", v = "navStateSlug", p = "2px", m = .6, g = .0021, E = .45, y = .9, w = {
        startX:0,
        targetX:0,
        distance:0,
        rotation:0,
        scale:1,
        opacity:1,
        color:"black"
    }, k = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._elem = i, this._tracker = null, this._items = l["default"](d, this._elem).map(function(e) {
                return {
                    elem:e,
                    offsetWidth:0,
                    offsetLeft:0
                };
            }), this._itemsThatHideNavOnLoad = new Set(l["default"](f, this._elem)), this._activeItem = this._items[0],
                this._navIsHidden = !1, this._itemKeyLookup = this._cacheNavAsKeys(), this._areEventsAttached = !1,
                r.bindAll(this, "_onResize"), this._cacheItemDimensions(), this._findAndSetCurrentPath(),
                this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._elem = null, this._app = null, this._tracker = null,
                    this._items = null, this._itemKeyLookup = null, this._activeItem = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._app.onResize(this._onResize), this._areEventsAttached = !0);
            }
        }, {
            key:"blurNavItems",
            value:function() {
                this._items.forEach(function(e) {
                    e.elem.blur();
                });
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._app.offResize(this._onResize), this._areEventsAttached = !1);
            }
        }, {
            key:"_cacheNavAsKeys",
            value:function() {
                return this._items.reduce(function(e, t) {
                    var i = u["default"](t.elem)[v];
                    return e[i] = t.elem, e;
                }, {});
            }
        }, {
            key:"_definitionForSlug",
            value:function(e) {
                var t = this._itemKeyLookup[e];
                return this._items.filter(function(e) {
                    return e.elem === t;
                })[0];
            }
        }, {
            key:"_findAndSetCurrentPath",
            value:function() {
                var e = _.slugFromPath(window.location.pathname);
                this._activeItem = this._definitionForSlug(e), this._createTracker();
            }
        }, {
            key:"_createTracker",
            value:function() {
                return this._tracker = document.createElement("div"), c.set(this._tracker, {
                    css:{
                        width:this._activeItem ? this._activeItem.offsetWidth :0,
                        height:p,
                        backgroundColor:this._items[0].elem.style.color || window.getComputedStyle(this._items[0].elem).color,
                        transformOrigin:"left center",
                        position:"absolute",
                        bottom:0,
                        left:0,
                        x:this._activeItem ? this._activeItem.offsetLeft :0,
                        opacity:0
                    }
                }), this._elem.appendChild(this._tracker), this._activeItem && this._itemsThatHideNavOnLoad.has(this._activeItem.elem) ? void this.hideNav(0) :void c.to(this._tracker, m, {
                    opacity:1,
                    delay:m,
                    ease:Expo.easeOut
                });
            }
        }, {
            key:"_onResize",
            value:function() {
                this._cacheItemDimensions(), this._setTrackerPosition();
            }
        }, {
            key:"_cacheItemDimensions",
            value:function() {
                var e = this;
                this._items = this._items.map(function(t) {
                    return e._activeItem && e._activeItem.elem === t.elem && (e._activeItem = t), {
                        elem:t.elem,
                        offsetWidth:t.elem.offsetWidth,
                        offsetLeft:t.elem.offsetLeft
                    };
                });
            }
        }, {
            key:"_setTrackerPosition",
            value:function() {
                !this._navIsHidden && this._activeItem && c.set(this._tracker, {
                    rotation:0,
                    x:this._activeItem.offsetLeft,
                    width:this._activeItem.offsetWidth
                });
            }
        }, {
            key:"moveTracker",
            value:function(e, t, i) {
                var n = this, s = this._definitionForSlug(e);
                if (t) return void this.hideNav();
                this._navIsHidden && this.showNav(), s ? (w.scale = 1, w.opacity = 1) :(w.scale = 0,
                    w.opacity = 0, s = this._items[0]), w.color = i;
                var a = this._activeItem ? this._activeItem.offsetLeft :0, r = this._activeItem ? this._activeItem.offsetWidth :0, o = s.offsetLeft > a ? !0 :!1;
                w.rotation = o ? 0 :180, w.startX = o ? a :a + r, w.targetX = o ? s.offsetLeft - s.offsetWidth :s.offsetLeft,
                    w.distance = o ? w.targetX - w.startX + 2 * s.offsetWidth :w.startX - w.targetX,
                    c.set(this._tracker, {
                        rotation:w.rotation,
                        x:w.startX
                    });
                var l = Math.abs(s.offsetLeft - a), h = g * l;
                E > h ? h = E :h > y && (h = y), c.to(this._tracker, h, {
                    width:w.distance,
                    backgroundColor:w.color,
                    scale:w.scale,
                    opacity:w.opacity,
                    ease:Cubic.easeOut
                }), c.to(this._tracker, .5 * h, {
                    x:w.targetX + s.offsetWidth,
                    width:s.offsetWidth,
                    ease:Cubic.easeOut,
                    delay:.25 * h
                });
                var u = s.elem.getBoundingClientRect().left, _ = s.elem.getBoundingClientRect().right;
                (0 > u || _ > window.innerWidth) && !function() {
                    var e = {
                        x:n._elem.scrollLeft
                    };
                    c.to(e, m, {
                        x:w.targetX,
                        ease:Expo.easeOut,
                        onUpdate:function() {
                            n._elem.scrollLeft = e.x;
                        }
                    });
                }(), this._activeItem = s;
            }
        }, {
            key:"hideNav",
            value:function() {
                var e = void 0 === arguments[0] ? m :arguments[0];
                this._navIsHidden = !0, this._elem.setAttribute("aria-hidden", "true"), c.to(this._elem, e, {
                    autoAlpha:0
                }), c.to(this._tracker, e, {
                    scaleX:0
                });
            }
        }, {
            key:"showNav",
            value:function() {
                this._navIsHidden = !0, this._elem.setAttribute("aria-hidden", "false"), c.to(this._elem, m, {
                    autoAlpha:1
                }), c.set(this._tracker, {
                    x:this._activeItem.offsetLeft,
                    width:this._activeItem.offsetWidth
                }), c.to(this._tracker, m, {
                    scaleX:1
                });
            }
        } ]), e;
    }();
    t["default"] = k, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(5), l = n(o), h = ".js-dot", u = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._elem = i, this._dots = l["default"](h, this._elem),
                this._eventsAttached = !1, r.bindAll(this, "_onResize"), this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._app = null, this._elem = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._eventsAttached || (this._eventsAttached = !0, this._app.onResize(this._onResize),
                    setTimeout(this._onResize, 100));
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._eventsAttached && (this._eventsAttached = !1, this._app.offResize(this._onResize));
            }
        }, {
            key:"_onResize",
            value:function() {
                this._dots.forEach(function(e) {
                    var t = e.getBoundingClientRect(), i = t.width;
                    5 >= i ? e.classList.add("-last") :e.classList.remove("-last");
                });
            }
        } ]), e;
    }();
    t["default"] = u, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(14), o = i(2), l = i(5), h = n(l), u = i(105), c = n(u), _ = i(106), d = n(_), f = i(108), v = n(f), p = i(102), m = n(p), g = i(7), E = n(g), y = i(110), w = n(y), k = i(111), b = n(k), T = i(104), A = n(T), S = i(112), C = n(S), L = i(117), R = n(L), O = i(121), P = n(O), I = i(120), x = n(I), M = i(123), D = n(M), F = i(125), H = n(F), N = i(126), B = n(N), j = i(127), V = n(j), z = i(12), W = "ready";
    t.READY_EVENT = W;
    var U = ".js-in-page-fake-shadow", Y = ".js-in-page-fake-header", X = ".js-animate-out", K = -1 === navigator.userAgent.indexOf("MSIE"), q = function() {
        function e(t, i, n) {
            s(this, e), this._app = t, this.rootElem = i, this.animateElem = h["default"](X, this.rootElem)[0],
                this._elem = n, this._fakeHeader = h["default"](Y, this._elem), this._fakeShadow = h["default"](U, this._elem),
                this._eventsAttached = !1, this._scrollBlocker = null, K && (this._scrollBlocker = new c["default"](),
                this._scrollBlocker.attachTo(this._elem)), this._subComponents = this._initSubcomponents(),
                o.bindAll(this, "_onScrollStart", "_onScrollEnd"), this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this.tearDownEventable(), this._scrollBlocker && (this._scrollBlocker.tearDown(),
                    this._scrollBlocker = null), this._subComponents.forEach(function(e) {
                    return e.tearDown();
                }), this._subComponents = null, this.rootElem = null, this._elem = null, this._app = null;
            }
        }, {
            key:"_initSubcomponents",
            value:function() {
                var e = this, t = h["default"](z.RESPONSIVE_IMAGE_SELECTOR, this._elem).map(function(t) {
                    return new v["default"](e._app, t);
                }), i = h["default"](z.GRID_ITEM_SELECTOR, this._elem).map(function(t) {
                    return new R["default"](e._app, t);
                }), n = h["default"](z.VIDEO_SELECTOR, this._elem).map(function(t) {
                    return new D["default"](e._app, t);
                }), s = h["default"](z.ARTICLE_VIDEO, this._elem).map(function(t) {
                    return new H["default"](e._app, t);
                }), a = h["default"](z.ARTICLE_YOUTUBE_VIDEO_SELECTOR, this._elem).map(function(t) {
                    return new B["default"](e._app, t);
                }), r = h["default"](z.HIDDEN_CHARACTER_CONTAINER_SELECTOR, this._elem).map(function(t) {
                    return new m["default"](e._app, t);
                }), o = h["default"](z.CAROUSEL_SELECTOR, this._elem).map(function(t) {
                    return new w["default"](e._app, t);
                }), l = h["default"](z.TABS_SELECTOR, this._elem).map(function(t) {
                    return new b["default"](e._app, t);
                }), u = h["default"](z.ANIMATE_SCROLL_SELECTOR, this._elem).map(function(t) {
                    return new A["default"](e._app, t);
                }), c = h["default"](z.SEARCH_COMPONENT_SELECTOR, this._elem).map(function(t) {
                    return new C["default"](e._app, t, e);
                }), _ = h["default"](z.SHARE_FAB_SELECTOR, this._elem).map(function(t) {
                    return new V["default"](e._app, t);
                }), f = h["default"](z.QUOTE_SELECTOR, this._elem).map(function(t) {
                    return new P["default"](e._app, t);
                }), p = h["default"](z.HEADER_HOVER_ANIMATION_SELECTOR, this._elem).map(function(t) {
                    return new x["default"](e._app, t, e, !0);
                });
                return d["default"](z.AVOID_ORPHANS_SELECTOR), [].concat(t, i, n, s, a, r, o, l, u, c, _, f, p);
            }
        }, {
            key:"_onScrollStart",
            value:function() {
                this._scrollBlocker && this._scrollBlocker.block();
            }
        }, {
            key:"_onScrollEnd",
            value:function() {
                this._scrollBlocker && this._scrollBlocker.unblock();
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._eventsAttached || (this._eventsAttached = !0, this._app.onScrollStart(this._onScrollStart),
                    this._app.onScrollEnd(this._onScrollEnd));
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._eventsAttached && (this._eventsAttached = !1, this._app.offScrollStart(this._onScrollStart),
                    this._app.offScrollEnd(this._onScrollEnd));
            }
        }, {
            key:"hideFakeShadow",
            value:function() {
                r.set(this._fakeShadow, {
                    autoAlpha:0
                });
            }
        }, {
            key:"showFakeShadow",
            value:function() {
                r.set(this._fakeShadow, {
                    autoAlpha:1
                });
            }
        }, {
            key:"hideFakeHeader",
            value:function() {
                r.set(this._fakeHeader, {
                    autoAlpha:0
                });
            }
        }, {
            key:"showFakeHeader",
            value:function() {
                r.set(this._fakeHeader, {
                    autoAlpha:1
                });
            }
        } ]), e;
    }();
    o.extend(q.prototype, E["default"](W)), t["default"] = q;
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(5), l = n(o), h = i(99), u = n(h), c = i(32), _ = n(c), d = i(14), f = "scrollParent", v = "scrollTarget", p = .3, m = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._elem = i, this._parent = u["default"](this._elem, _["default"](this._elem)[f]) || window;
            var n = l["default"](_["default"](this._elem)[v])[0];
            this._target = n ? n.scrollTop :0, r.bindAll(this, "_scrollToTarget"), this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._elem = null, this._app = null, this._parent = null,
                    this._target = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._elem.addEventListener("click", this._scrollToTarget),
                    this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._elem.removeEventListener("click", this._scrollToTarget),
                    this._areEventsAttached = !1);
            }
        }, {
            key:"_scrollToTarget",
            value:function(e) {
                var t = this;
                e.preventDefault(), e.stopPropagation();
                var i = {
                    y:this._parent.scrollTop || this._parent.scrollY
                };
                d.to(i, p, {
                    y:this._target,
                    ease:Expo.easeOut,
                    onUpdate:function() {
                        t._parent.scrollTop ? t._parent.scrollTop = i.y :t._parent.scrollTo && t._parent.scrollTo(0, i.y);
                    }
                });
            }
        } ]), e;
    }();
    t["default"] = m, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var s = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), a = i(14), r = function() {
        function e() {
            n(this, e), this._elem = document.createElement("div"), this._isAttached = !1, this._isBlocking = !0,
                a.set(this._elem, {
                    x:0,
                    y:0
                }), this._elem.style.position = "absolute", this._elem.style.top = 0, this._elem.style.right = 0,
                this._elem.style.bottom = 0, this._elem.style.left = 0, this._elem.style.opacity = 0,
                this._elem.style.zIndex = 2147483647, this.unblock();
        }
        return s(e, [ {
            key:"tearDown",
            value:function() {
                this._detach(), this._elem = null;
            }
        }, {
            key:"block",
            value:function() {
                this._isBlocking || (this._elem.style.pointerEvents = "auto", this._isBlocking = !0);
            }
        }, {
            key:"unblock",
            value:function() {
                this._isBlocking && (this._elem.style.pointerEvents = "none", this._isBlocking = !1);
            }
        }, {
            key:"attachTo",
            value:function(e) {
                this._isAttached || (e.appendChild(this._elem), this._isAttached = !0);
            }
        }, {
            key:"_detach",
            value:function() {
                this._isAttached && (this._elem.parentNode.removeChild(this._elem), this._isAttached = !1);
            }
        } ]), e;
    }();
    t["default"] = r, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e) {
        var t = e.lastChild, i = void 0;
        t && 3 == t.nodeType && (i = t.nodeValue.trim(), o["default"].write(function() {
            t.nodeValue = i.replace(/\s+([^\s]+\s*)$/g, "\xa0$1");
        }));
    }
    function a(e) {
        h["default"](e).forEach(function(e) {
            o["default"].read(function() {
                s(e);
            });
        });
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t.avoidOrphan = s, t["default"] = a;
    var r = i(107), o = n(r), l = i(5), h = n(l);
}, , function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a() {
        return 0;
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), o = i(2), l = i(32), h = n(l), u = i(109), c = n(u), _ = [ 360, 620, 1240, 2480 ], d = function() {
        function e(t, i) {
            var n = void 0 === arguments[2] ? a :arguments[2];
            if (s(this, e), this._app = t, this._elem = i, this._delay = n, this._data = h["default"](this._elem),
                    this._hasScrolledInToView = !1, this._hasLoaded = !1, this._sourcePath = this._data.src,
                    this._shouldApplyAspectRatio = "true" === this._data.preserveaspectratio, this._ratioPadding = null,
                    this._loadedImages = {}, this._currentSize = null, this._shouldApplyAspectRatio && this._data.knowndimensions && this._data.knowndimensions.length > 0) {
                var r = this._data.knowndimensions.split("x").map(function(e) {
                    return parseInt(e, 10);
                });
                this._ratioPadding = r[1] / r[0] * 100, this._elem.style.paddingBottom = this._ratioPadding + "%";
            }
            o.bindAll(this, "_onResize", "_scrolledIntoView"), this._onResize(), this._attachEvents();
        }
        return r(e, [ {
            key:"_getPath",
            value:function(e) {
                var t = window.devicePixelRatio > 1.5, i = this._sourcePath;
                if (0 === e || "true" === this._data.fixedSize) return i;
                var n = this._data.mobileSrc;
                n && n.length > 0 && window.innerWidth <= c["default"].mobile.max && (i = n);
                var s = this._data.alternateSrc;
                s && (i = s);
                var a = i.split("."), r = a.pop();
                if ("svg" === r || "svgz" === r) return i;
                var o = void 0;
                o = this._rect.width <= _[0] ? _[0] :this._rect.width > _[0] && this._rect.width <= _[1] ? _[1] :this._rect.width > _[1] && this._rect.width <= _[2] ? _[2] :_[3];
                var l = a.join("."), h = l.split("/"), u = h.pop();
                h.push("renditions"), h.push(u);
                var d = h.join("/");
                return t && (o = "" + o + "@2x"), "" + d + "-" + o + "." + r;
            }
        }, {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._loadedImages = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._eventsAttached || (this._eventsAttached = !0, this._app.onResize(this._onResize),
                    this._app.trackElement(this._elem, this._scrolledIntoView, 300));
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._eventsAttached && (this._eventsAttached = !1, this._app.offResize(this._onResize),
                    this._app.untrackElement(this._elem));
            }
        }, {
            key:"_scrolledIntoView",
            value:function() {
                this._hasScrolledInToView = !0, this._update();
            }
        }, {
            key:"_onResize",
            value:function() {
                this._rect = this._elem.getBoundingClientRect(), this._update();
            }
        }, {
            key:"_update",
            value:function() {
                this._hasScrolledInToView && this._loadImageForSize(this._rect.width);
            }
        }, {
            key:"_loadImageForSize",
            value:function(e) {
                var t = this, i = this._getPath(e), n = this._loadedImages[i];
                "undefined" != typeof n ? this._setImage(n) :!function() {
                    var e = new Image(), n = t;
                    e.onload = function() {
                        n._eventsAttached && (n._loadedImages[i] = e, n._setImage(e), n._update());
                    }, e.src = i;
                }();
            }
        }, {
            key:"_setImage",
            value:function(e) {
                var t = this;
                this._hasLoaded || (this._hasLoaded = !0, setTimeout(function() {
                    return t._elem.classList.add("loaded");
                }, 10 + this._delay())), this._elem.style.backgroundImage = "url(" + e.src + ")",
                this._shouldApplyAspectRatio && !this._ratioPadding && (this._ratioPadding = e.height / e.width * 100,
                    this._elem.style.paddingBottom = this._ratioPadding + "%");
            }
        } ]), e;
    }();
    t["default"] = d, e.exports = t["default"];
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t["default"] = {
        mobile:{
            min:0,
            max:792
        },
        desktop:{
            min:793,
            max:1/0
        }
    }, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(5), l = n(o), h = i(32), u = n(h), c = i(14), _ = 30, d = ".js-carousel-items", f = ".js-carousel-slide", v = ".js-carousel-controls", p = ".js-carousel-next", m = ".js-carousel-prev", g = ".js-carousel-pager", E = ".js-carousel-pager-dots", y = "._generated-image-container", w = 600, k = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._elem = i, this._slidingElem = l["default"](d, this._elem)[0],
                this._controlsElem = l["default"](v, this._elem)[0], this._nextButton = l["default"](p, this._controlsElem)[0],
                this._prevButton = l["default"](m, this._controlsElem)[0], this._pagerElem = l["default"](g, this._elem)[0],
                this._pagerDots = l["default"](E, this._pagerElem), this._scrollOffset = 0, this._slides = l["default"](f, this._elem),
                this._slugToItem = this._cacheSlidesByKey(), this._linksToItem = this._cacheSlidesLinksByKey(),
                this._currentIdx = 0, this._lastActive = 0, this._isRunning = !1, this._hasResized = !1,
                this._hasChanged = !1, this._isDragging = !1, this._dragXStart = -1, this._dragOffset = 0,
                this._width = 0, this._lastTouchX = 0, this._dragMomentum = 0, this._firstRun = !0,
                r.bindAll(this, "_onResize", "_onFrame", "previous", "next", "_dragBegin", "_dragMove", "_dragEnd", "_touchBegin", "_touchMove", "_touchEnd", "_onPopState", "_dotClick");
            var n = "true" === u["default"](this._elem).autosize;
            if (n) {
                var a = l["default"](y, this._slides[0])[0];
                if (a) {
                    var o = a.getBoundingClientRect();
                    this._elem.style.paddingBottom = o.height / o.width * 100 + "%";
                }
            }
            if (this._slides.length > 0) {
                if (window.location.hash && window.location.hash.length > 0) {
                    var h = window.location.hash.slice(1, window.location.hash.length + 1), c = this._slugToItem[h];
                    c && (this._currentIdx = c.idx);
                }
                this._reposition(), this._updateVisible(), this._attachEvents();
            }
            this._elem.style.opacity = 1;
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._prevButton = null, this._nextButton = null, this._controlsElem = null,
                    this._slidingElem = null, this._slides = null, this._elem = null, this._app = null,
                    this._pagerElem = null, this._pagerDots = null;
            }
        }, {
            key:"previous",
            value:function() {
                this._currentIdx--, this._currentIdx < 0 && (this._currentIdx = 0), this._hasChanged = !0;
            }
        }, {
            key:"next",
            value:function() {
                this._currentIdx++, this._currentIdx >= this._slides.length && (this._currentIdx = this._slides.length - 1),
                    this._hasChanged = !0;
            }
        }, {
            key:"_cacheSlidesByKey",
            value:function() {
                return this._slides.reduce(function(e, t, i) {
                    var n = u["default"](t).slug;
                    return e[n] = {
                        slide:t,
                        idx:i,
                        links:l["default"]("a", t)
                    }, e;
                }, {});
            }
        }, {
            key:"_cacheSlidesLinksByKey",
            value:function() {
                return this._slides.reduce(function(e, t, i) {
                    var n = l["default"]("a", t);
                    return e[i] = n, e;
                }, {});
            }
        }, {
            key:"_attachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached || (this._isRunning = !0, this._app.onResize(this._onResize),
                    this._app.onFrame(this._onFrame), this._prevButton.addEventListener("click", this.previous),
                    this._nextButton.addEventListener("click", this.next), this._slidingElem.addEventListener("mousedown", this._dragBegin),
                    document.addEventListener("mousemove", this._dragMove), document.addEventListener("mouseup", this._dragEnd),
                    this._slidingElem.addEventListener("touchstart", this._touchBegin), document.addEventListener("touchmove", this._touchMove),
                    document.addEventListener("touchend", this._touchEnd), document.addEventListener("touchcancel", this._touchEnd),
                    window.addEventListener("popstate", this._onPopState), this._pagerDots.forEach(function(t) {
                    t.addEventListener("click", e._dotClick);
                }), this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached && (this._isRunning = !1, this._app.offResize(this._onResize),
                    this._app.offFrame(this._onFrame), this._prevButton.removeEventListener("click", this.previous),
                    this._nextButton.removeEventListener("click", this.next), this._slidingElem.removeEventListener("mousedown", this._dragBegin),
                    document.removeEventListener("mousemove", this._dragMove), document.removeEventListener("mouseup", this._dragEnd),
                    this._slidingElem.removeEventListener("touchstart", this._touchBegin), document.removeEventListener("touchmove", this._touchMove),
                    document.removeEventListener("touchend", this._touchEnd), document.removeEventListener("touchcancel", this._touchEnd),
                    window.removeEventListener("popstate", this._onPopState), this._pagerDots.forEach(function(t) {
                    t.removeEventListener("click", e._dotClick);
                }), this._areEventsAttached = !1);
            }
        }, {
            key:"_reposition",
            value:function() {
                var e = this._elem.getBoundingClientRect();
                this._width = e.width;
                for (var t = 0; t < this._slides.length; t++) this._slides[t].style.left = t * this._width + "px";
                this._scrollOffset = 0 - this._currentIdx * this._width, this._setTransition("none"),
                    this._setPosition(this._scrollOffset, 0), this._lastActive = this._currentIdx;
            }
        }, {
            key:"_moveSlides",
            value:function() {
                this._scrollOffset = 0 - this._currentIdx * this._width, this._setTransition(this._isDragging ? "transform " + w + "ms cubic-bezier(0, 0.0, 0.2, 1)" :"transform " + w + "ms cubic-bezier(0.4, 0.0, 0.2, 1)"),
                    this._setPosition(this._scrollOffset, 0), this._slides[this._currentIdx].classList.contains("dark") ? this._controlsElem.classList.add("dark") :this._controlsElem.classList.remove("dark"),
                    this._lastActive = this._currentIdx, this._updateVisible();
            }
        }, {
            key:"_updateVisible",
            value:function() {
                var e = this, t = this._slides[this._currentIdx], i = u["default"](t).contrastModifier;
                "-dark" === i && (this._elem.classList.add("-dark"), this._elem.classList.remove("-light")),
                "-light" === i && (this._elem.classList.add("-light"), this._elem.classList.remove("-dark")),
                    this._pagerDots.forEach(function(t) {
                        var i = parseInt(u["default"](t).index, 10);
                        e._currentIdx === i ? (e._pagerDots[i].classList.add("-is-current"), e._pagerDots[i].setAttribute("aria-selected", !0)) :(e._pagerDots[i].classList.remove("-is-current"),
                            e._pagerDots[i].setAttribute("aria-selected", !1));
                    }), 0 === this._currentIdx ? (this._prevButton.classList.add("disabled"), this._prevButton.setAttribute("aria-disabled", !0)) :(this._prevButton.classList.remove("disabled"),
                    this._prevButton.removeAttribute("aria-disabled")), this._currentIdx >= this._slides.length - 1 ? (this._nextButton.classList.add("disabled"),
                    this._nextButton.setAttribute("aria-disabled", !0)) :(this._nextButton.classList.remove("disabled"),
                    this._nextButton.removeAttribute("aria-disabled"));
                for (var n = 0; n < this._slides.length; n++) n === this._currentIdx ? (this._slides[n].setAttribute("aria-hidden", !1),
                    this._slides[n].removeAttribute("tabindex"), this._linksToItem[n].forEach(function(e) {
                    e.removeAttribute("tabindex");
                })) :(this._slides[n].setAttribute("aria-hidden", !0), this._slides[n].setAttribute("tabindex", "-1"),
                    this._linksToItem[n].forEach(function(e) {
                        e.setAttribute("tabindex", "-1");
                    }));
                var s = u["default"](t).slug;
                s && (this._firstRun ? this._firstRun = !1 :window.location.hash = s), setTimeout(function() {
                    return e._app.checkForVisibleElements();
                }, 400);
            }
        }, {
            key:"_setTransition",
            value:function(e) {
                this._slidingElem.style.webkitTransition = e.replace("transform", "-webkit-transform"),
                    this._slidingElem.style.transition = e;
            }
        }, {
            key:"_setPosition",
            value:function(e, t) {
                c.set(this._slidingElem, {
                    x:e,
                    y:t
                });
            }
        }, {
            key:"_onResize",
            value:function() {
                this._hasResized = !0;
            }
        }, {
            key:"_onFrame",
            value:function() {
                if (this._isRunning && (this._hasResized && (this._reposition(), this._hasResized = !1),
                    this._hasChanged && (this._moveSlides(), this._hasChanged = !1), this._isDragging)) {
                    this._setTransition("none");
                    var e = 0 - (this._scrollOffset + this._dragOffset);
                    0 > e ? e = 0 :e > (this._slides.length - 1) * this._width && (e = (this._slides.length - 1) * this._width),
                        this._setPosition(0 - e, 0);
                }
            }
        }, {
            key:"_touchBegin",
            value:function(e) {
                this._dragBegin(e.touches[0]);
            }
        }, {
            key:"_touchMove",
            value:function(e) {
                this._dragMove(e.touches[0]);
            }
        }, {
            key:"_touchEnd",
            value:function(e) {
                this._dragEnd(e.touches[0]);
            }
        }, {
            key:"_dragBegin",
            value:function() {
                this._isDragging = !0, this._dragXStart = -1, this._dragOffset = 0;
            }
        }, {
            key:"_dragMove",
            value:function(e) {
                this._isDragging && (-1 === this._dragXStart && (this._dragXStart = e.clientX, this._dragMomentum = 0),
                    this._dragMomentum = this._dragMomentum * (2 / 3) + (e.clientX - this._lastTouchX) / 3,
                    this._lastTouchX = e.clientX, this._dragOffset = e.clientX - this._dragXStart);
            }
        }, {
            key:"_dragEnd",
            value:function() {
                this._isDragging && (this._dragMomentum < 0 && 0 - this._dragOffset > _ && this._currentIdx < this._slides.length - 1 ? this._currentIdx++ :this._dragMomentum > 0 && this._dragOffset > _ && this._currentIdx > 0 && this._currentIdx--,
                    this._moveSlides(), this._isDragging = !1);
            }
        }, {
            key:"_onPopState",
            value:function() {
                if (window.location.hash && window.location.hash.length > 0) {
                    var e = window.location.hash.slice(1, window.location.hash.length + 1), t = this._slugToItem[e];
                    t && (this._currentIdx = t.idx, this._moveSlides());
                }
            }
        }, {
            key:"_dotClick",
            value:function(e) {
                this._clickedDot = parseInt(u["default"](e.srcElement).index, 10), this._clickedDot !== this._currentIdx && null !== this._clickedDot && (this._currentIdx = this._clickedDot,
                    this._hasChanged = !0);
            }
        } ]), e;
    }();
    t["default"] = k, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(5), l = n(o), h = i(32), u = n(h), c = i(14), _ = i(12), d = ".js-tab", f = ".js-tab-container", v = function() {
        function e(t, i) {
            var n = this;
            if (s(this, e), this._app = t, this._elem = i, this._tabs = l["default"](d, this._elem),
                    this._containers = l["default"](f, this._elem), this._slugToContainer = this._cachesContainerByKey(),
                    this._slugToTab = this._cachesTabByKey(), this._currentTabSlug = null, this._firstLoad = !0,
                    r.bindAll(this, "_attachEvents", "_detachEvents", "_tabClick", "_setTab"), this._tabs.forEach(function(e) {
                    e.classList.contains("active") && (n._currentTabSlug = u["default"](e).slug);
                }), this._containers.length && this._tabs.length) {
                this._attachEvents();
                var a = window.location.hash;
                if (a && 0 === a.indexOf("#") && (a = a.split("#")[1]), a && this._slugToContainer[a]) this._setTab(a); else {
                    var o = u["default"](this._tabs[0]).slug;
                    this._setTab(o);
                }
            }
            this._firstLoad = !1;
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._elem = null, this._app = null, this._tabs = null, this._containers = null,
                    this._slugToContainer = null, this._slugToTab = null, this._currentTabSlug = null,
                    this._firstLoad = null;
            }
        }, {
            key:"_cachesContainerByKey",
            value:function() {
                return this._containers.reduce(function(e, t) {
                    var i = u["default"](t).slug;
                    return e[i] = t, e;
                }, {});
            }
        }, {
            key:"_cachesTabByKey",
            value:function() {
                return this._tabs.reduce(function(e, t) {
                    var i = u["default"](t).slug;
                    return e[i] = t, e;
                }, {});
            }
        }, {
            key:"_attachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached || (this._tabs.forEach(function(t) {
                    t.addEventListener("click", e._tabClick);
                }), this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached && (this._tabs.forEach(function(t) {
                    t.removeEventListener("click", e._tabClick);
                }), this._areEventsAttached = !1);
            }
        }, {
            key:"_tabClick",
            value:function(e) {
                var t = u["default"](e.target).slug;
                this._setTab(t);
            }
        }, {
            key:"_setTab",
            value:function(e) {
                var t = this;
                if (e !== this._currentTabSlug) {
                    var i = this._currentTabSlug;
                    if (this._currentTabSlug = e, !i) return void c.set(this._slugToContainer[e], {
                        display:"block"
                    });
                    this._slugToTab[i].classList.remove("active"), this._slugToTab[e].classList.add("active"),
                        this._firstLoad ? (c.set(this._slugToContainer[e], {
                            display:"block"
                        }), c.set(this._slugToContainer[i], {
                            display:"none"
                        })) :!function() {
                            window.location.hash = e;
                            var n = t._slugToContainer[i].clientHeight;
                            c.set(t._slugToContainer[i], {
                                autoAlpha:1
                            }), Promise.all([ c.to(t._slugToContainer[i], .3, {
                                autoAlpha:0,
                                ease:Expo.easeOut
                            }) ]).then(function() {
                                c.set(t._elem, {
                                    height:t._elem.clientHeight
                                }), c.set(t._slugToContainer[i], {
                                    display:"none"
                                }), c.set(t._slugToContainer[e], {
                                    autoAlpha:0,
                                    y:_.SLIDE_EFFECT_Y_OFFSET,
                                    display:"block"
                                });
                                var s = t._slugToContainer[e].clientHeight;
                                c.set(t._slugToContainer[e], {
                                    height:n + "px"
                                }), c.set(t._elem, {
                                    height:"auto"
                                }), c.to(t._slugToContainer[e], .8, {
                                    y:0,
                                    autoAlpha:1,
                                    ease:Expo.easeOut
                                }), Promise.all([ c.to(t._slugToContainer[e], .8, {
                                    height:s + "px",
                                    ease:Expo.easeOut
                                }) ]).then(function() {
                                    c.set(t._slugToContainer[e], {
                                        height:"auto"
                                    }), Promise.resolve();
                                }), Promise.resolve();
                            });
                        }();
                }
            }
        } ]), e;
    }();
    t["default"] = v, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(26), l = n(o), h = i(113), u = n(h), c = i(115), _ = n(c), d = i(116), f = n(d), v = i(5), p = n(v), m = i(103), g = 3, E = ".js-search-input", y = ".js-search-reset", w = ".js-search-results", k = new u["default"](), b = function() {
        function e(t, i, n) {
            s(this, e), this._app = t, this._elem = i, this._page = n, this._areEventsAttached = !1,
                this._indexLoaded = !1, k.setMinimumSearchLength(g), this._input = new _["default"](this._app, p["default"](E, this._elem)[0], p["default"](y, this._elem)[0]),
                this._results = new f["default"](this._app, p["default"](w, this._elem)[0]), r.bindAll(this, "_setSearch", "_pageReady"),
                this._attachEvents(), this._loadIndex();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._input.tearDown(), this._input = null, this._results.tearDown(),
                    this._results = null, this._elem = null, this._page = null, this._app = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._input.on(c.SEARCH_CHANGE_EVENT, this._setSearch),
                    this._page.on(m.READY_EVENT, this._pageReady), this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._input.off(c.SEARCH_CHANGE_EVENT, this._setSearch),
                    this._page.off(m.READY_EVENT, this._pageReady), this._areEventsAttached = !1);
            }
        }, {
            key:"_loadIndex",
            value:function() {
                return regeneratorRuntime.async(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!this._indexLoaded) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                        case 2:
                            return this._indexLoaded = !0, e.next = 5, k.buildIndexes();

                        case 5:
                            this._initialQuery();

                        case 6:
                        case "end":
                            return e.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_initialQuery",
            value:function() {
                if (window.location.search && window.location.search.length > 0) {
                    var e = window.location.search.match(/\?(.*)/)[1];
                    if (e && e[1]) {
                        var t = l["default"].parse(e);
                        if (t.q && t.q.length > 0) return void this._setSearch(t.q, !0);
                    }
                }
                this._setSearch(k.query, !0);
            }
        }, {
            key:"_pageReady",
            value:function() {
                this._input.focus();
            }
        }, {
            key:"_setSearch",
            value:function(e, t) {
                k.runSearch(e), this._results.setOverMinimum(e.length >= g), this._results.setResults(k.results),
                t && this._input.setValue(e);
            }
        } ]), e;
    }();
    t["default"] = b, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(114), o = n(r), l = i(2), h = i(25), u = "api/search-index.min.json", c = function() {
        function e(t) {
            s(this, e), this.query = "", this.results = {}, this._hasIndex = !1, this._modelLookup = {},
                this._indexes = {}, this._minimumSearchLength = 0, t && this.setQuery(t);
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this.results = null, this._modelLookup = null, this._indexes = null;
            }
        }, {
            key:"setMinimumSearchLength",
            value:function(e) {
                this._minimumSearchLength = e;
            }
        }, {
            key:"buildIndexes",
            value:function() {
                var e;
                return regeneratorRuntime.async(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!this._hasIndex) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return");

                        case 2:
                            return this._hasIndex = !0, t.next = 5, h.getJSON("" + window.HTTP_PREFIX + u);

                        case 5:
                            e = t.sent, this._modelLookup = l.mapObject(e, this._buildModelLookup), this._indexes = l.mapObject(e, this._hydrateIndex),
                                this._refreshQuery();

                        case 9:
                        case "end":
                            return t.stop();
                    }
                }, null, this);
            }
        }, {
            key:"runSearch",
            value:function(e) {
                this.query = e, this._hasIndex && this._executeSearch();
            }
        }, {
            key:"_buildModelLookup",
            value:function(e) {
                var t = e.index.ref;
                return e.data.reduce(function(e, i) {
                    var n = i[t];
                    return e[n] = i, e;
                }, {});
            }
        }, {
            key:"_hydrateIndex",
            value:function(e) {
                return o["default"].Index.load(e.index);
            }
        }, {
            key:"_refreshQuery",
            value:function() {
                this.query.length <= 0 || this.runSearch(this.query);
            }
        }, {
            key:"_executeSearch",
            value:function() {
                this.results = l.mapObject(this._indexes, this._searchIndex, this);
            }
        }, {
            key:"_searchIndex",
            value:function(e, t) {
                var i = this;
                return this.query.length < this._minimumSearchLength ? [] :e.search(this.query).map(function(e) {
                    var n = i._getModel(t, e.ref);
                    return {
                        model:n,
                        ref:e.ref,
                        score:e.score
                    };
                });
            }
        }, {
            key:"_getModel",
            value:function(e, t) {
                return this._modelLookup[e][t];
            }
        } ]), e;
    }();
    t["default"] = c, e.exports = t["default"];
}, , function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(7), l = n(o), h = "change";
    t.SEARCH_CHANGE_EVENT = h;
    var u = function() {
        function e(t, i, n) {
            s(this, e), this._app = t, this._elem = i, this._reset = n, this._areEventsAttached = !1,
                this._lastValue = null, r.bindAll(this, "_onChange", "_onReset"), this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this.tearDownEventable(), this._elem = null, this._app = null;
            }
        }, {
            key:"setValue",
            value:function(e) {
                this._elem.value = e;
            }
        }, {
            key:"getValue",
            value:function() {
                return this._elem.value;
            }
        }, {
            key:"focus",
            value:function() {
                this._elem.focus();
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._elem.addEventListener("keyup", this._onChange),
                    this._reset.addEventListener("click", this._onReset), this._elem.addEventListener("change", this._onChange),
                    this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._elem.removeEventListener("keyup", this._onChange),
                    this._reset.removeEventListener("click", this._onReset), this._elem.removeEventListener("change", this._onChange),
                    this._areEventsAttached = !1);
            }
        }, {
            key:"_onChange",
            value:function(e) {
                e.stopPropagation(), this._emitValue(), 13 === e.keyCode && this._elem.blur();
            }
        }, {
            key:"_onReset",
            value:function(e) {
                e.stopPropagation(), this._elem.value = "", this._emitValue();
            }
        }, {
            key:"_emitValue",
            value:function() {
                this._lastValue !== this._elem.value && (this.trigger(h, this._elem.value), this._lastValue = this._elem.value);
            }
        } ]), e;
    }();
    r.extend(u.prototype, l["default"](h)), t["default"] = u;
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(24), l = i(5), h = n(l), u = ".js-search-results-count", c = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._elem = i, this._results = {}, this._resultCount = 0,
                this._resultCountContainer = h["default"](u)[0], this._sortedResults = [], this._isOverMinimum = !1,
                r.bindAll(this, "_renderRow"), this._render();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._elem = null, this._app = null;
            }
        }, {
            key:"setOverMinimum",
            value:function(e) {
                this._isOverMinimum = e;
            }
        }, {
            key:"setResults",
            value:function(e) {
                var t = this;
                this._results = e, this._sortedResults = r.flatten(r.keys(this._results).reduce(function(e, i) {
                    return e.push(t._results[i].map(function(e) {
                        return e.key = i, "article" === i && (e.score = 2 * e.score), "video" === i && (e.score = 1.5 * e.score),
                            e;
                    })), e;
                }, [])).sort(function(e, t) {
                    return t.score - e.score;
                }).slice(0, 20), this._render();
            }
        }, {
            key:"_render",
            value:function() {
                return this._isOverMinimum ? this._sortedResults.length <= 0 ? (this._elem.innerHTML = this._renderNoResults(),
                    void (this._resultCountContainer.innerHTML = "Found 0 results")) :(this._resultCountContainer.innerHTML = "Found " + this._sortedResults.length + " results",
                    void (this._elem.innerHTML = '\n      <div class="g-column g-centered -fixed">\n        <div class="list-wrapper">\n          <ol class="list-view">\n            ' + this._sortedResults.map(this._renderRow).join("") + "\n          </ol>\n        </div>\n      </div>\n    ")) :(this._elem.innerHTML = this._renderNoSearch(),
                    void (this._resultCountContainer.innerHTML = ""));
            }
        }, {
            key:"_renderNoResults",
            value:function() {
                return '<div class="list-wrapper">\n              <div class="g-column g-centered -fixed">\n                <div class="list-wrapper">\n                  <ol class="list-view">\n                    <li class="list-item">\n                      <div class="list-wrap -is-search">\n                        <div class="list-detail -no-border">\n                          <div class="_title-block">\n                            <h2 class="_title">No results</h2>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                  </ol>\n                </div>\n              </div>\n            </div>';
            }
        }, {
            key:"_renderNoSearch",
            value:function() {
                return '<div class="list-wrapper">\n              <div class="g-column g-centered -fixed">\n                <div class="list-wrapper">\n                  <ol class="list-view">\n                    <li class="list-item">\n                      <div class="list-wrap -is-search">\n                        <div class="list-detail -no-border">\n                          <div class="_title-block">\n                            <h2 class="_title">Enter your search above.</h2>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                  </ol>\n                </div>\n              </div>\n            </div>';
            }
        }, {
            key:"_renderRow",
            value:function(e) {
                var t = "", i = "", n = "", s = 'href="' + o.pathFromSlug(e.key) + e.model.slug + '/"';
                if (e.model.authors) {
                    var a = e.model.authors.map(function(e) {
                        return e.name;
                    }).join(", ");
                    t = 'By <span class="_author">' + a + "</span>";
                }
                return e.model.externalUrl && (s = 'href="' + e.model.externalUrl + '"'), e.model.newWindow && (s = 'href="' + e.model.externalUrl + '" target="_blank"',
                    i = '<svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path class="_fill-color" d="M14 14.04H2V2.005h4V0H2C.83 0 0 .833 0 2.006V14.04c0 1.17.83 2.005 2 2.005h12c1.168 0 2-.835 2-2.006v-4.02h-2v4.01zM9 2.005h3.51l-7.998 8.022L6 11.52l8-8.023V7.02h2V0H9v2.006z" fill-rule="evenodd" opacity=".54"/></svg>'),
                e.model.description && e.model.description.length > 0 && (n = '<p class="_summary">' + e.model.description + "</p>"),
                '\n      <li class="list-item">\n        <div class="list-wrap -is-search">\n          <div class="list-detail -no-border">\n            <div class="_title-block">\n              <a class="_search-link" ' + s + '>\n                <h2 class="_title">' + e.model.title + '</h2>\n                <span class="_arrow">\n                  ' + i + '\n                </span>\n              </a>\n            </div>\n            <p class="_byline">' + t + "</p>\n            " + n + "\n          </div>\n        </div>\n      </li>\n    ";
            }
        } ]), e;
    }();
    t["default"] = c, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(118), o = i(2), l = i(5), h = n(l), u = i(32), c = n(u), _ = i(100), d = n(_), f = i(120), v = n(f), p = i(12), m = Math.abs, g = ".js-wave-layer", E = "wave", y = function() {
        function e(t, i) {
            if (s(this, e), this._app = t, this._elem = i, this._eventDelegate = new r.Delegate(this._elem),
                    this._wave = null, this._areEventsAttached = !1, this._hoverAnimation = null, this._isDepressed = !1,
                    this._startingScrollY = 0, o.bindAll(this, "_onMouseDown", "_onMouseUp", "_onTouchStart", "_onTouchMove", "_onTouchEnd", "_onOut", "_onScroll"),
                    this._cardIsTouchTarget()) {
                var n = h["default"](g, this._elem)[0];
                n && (this._wave = new d["default"](this._app, n), this._wave.append());
            }
            if ("mobile" !== this._app.currentBreakpoint()) {
                var a = h["default"](p.HOVER_ANIMATION_SELECTOR, this._elem)[0];
                a && (this._hoverAnimation = new v["default"](this._app, a, this._eventDelegate));
            }
            this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._hoverAnimation && (this._hoverAnimation.tearDown(),
                    this._hoverAnimation = null), this._eventDelegate.destroy(), this._eventDelegate = null,
                this._wave && (this._wave.tearDown(), this._wave = null), this._elem = null, this._app = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._wave && (this._eventDelegate.on("mousedown", this._onMouseDown),
                    this._eventDelegate.on("mouseup", this._onMouseUp), this._eventDelegate.on("touchstart", this._onTouchStart),
                    this._eventDelegate.on("touchmove", this._onTouchMove), this._eventDelegate.on("touchend", this._onTouchEnd),
                    this._elem.addEventListener("mouseout", this._onOut), this._app.onScroll(this._onScroll, !0)),
                    this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._wave && (this._eventDelegate.off("mousedown", this._onMouseDown),
                    this._eventDelegate.off("mouseup", this._onMouseUp), this._eventDelegate.off("touchstart", this._onTouchStart),
                    this._eventDelegate.off("touchmove", this._onTouchMove), this._eventDelegate.off("touchend", this._onTouchEnd),
                    this._elem.removeEventListener("mouseout", this._onOut), this._app.offScroll(this._onScroll, !0)),
                    this._areEventsAttached = !1);
            }
        }, {
            key:"_cardIsTouchTarget",
            value:function() {
                var e = c["default"](this._elem)[E];
                return null != e;
            }
        }, {
            key:"_onMouseDown",
            value:function(e) {
                if (!this._isDepressed && !e.metaKey && !e.ctrlKey) {
                    var t = this._positionForEvent(e), i = t.x, n = t.y;
                    this._beginWave(i, n), this._isDepressed = !0;
                }
            }
        }, {
            key:"_onMouseUp",
            value:function() {
                this._isDepressed && (this._emitWave(), this._isDepressed = !1);
            }
        }, {
            key:"_onTouchStart",
            value:function(e) {
                var t = this;
                if (!this._isDepressed) {
                    this._startingScrollY = this._app.currentScroll(), this._isDepressed = !0;
                    var i = this._positionForEvent(e), n = i.x, s = i.y;
                    setTimeout(function() {
                        t._isDepressed && t._beginWave(n, s);
                    }, 150);
                }
            }
        }, {
            key:"_onTouchMove",
            value:function(e) {
                if (this._isDepressed) {
                    var t = this._positionForEvent(e), i = t.x, n = t.y;
                    this._wave && this._wave.setPosition(i, n);
                }
            }
        }, {
            key:"_onTouchEnd",
            value:function(e) {
                if (this._isDepressed) {
                    if (!this._wave.isMouseDown) {
                        var t = this._positionForEvent(e), i = t.x, n = t.y;
                        this._beginWave(i, n);
                    }
                    this._emitWave(), this._isDepressed = !1;
                }
            }
        }, {
            key:"_beginWave",
            value:function(e, t) {
                this._wave.onDown(e, t);
            }
        }, {
            key:"_emitWave",
            value:function() {
                this._app.startWaveAnimation(this._wave.onUp());
            }
        }, {
            key:"_onScroll",
            value:function(e) {
                if (this._isDepressed) {
                    var t = m(e - this._startingScrollY);
                    10 >= t || (this._isDepressed = !1, this._wave.isMouseDown && this._wave.cancel());
                }
            }
        }, {
            key:"_onOut",
            value:function() {
                this._isDepressed = !1, this._wave.isMouseDown && this._wave.cancel();
            }
        }, {
            key:"_positionForEvent",
            value:function(e) {
                var t = void 0, i = void 0, n = e.changedTouches || e.targetTouches;
                if (n && n[0]) {
                    t = n[0].pageX, i = n[0].pageY;
                    var s = e.currentTarget.getBoundingClientRect(), a = s.top + document.body.scrollTop, r = s.left + document.body.scrollLeft;
                    t -= r, i -= a;
                } else {
                    t = e.offsetX || e.layerX, i = e.offsetY || e.layerY;
                    var s = e.target.getBoundingClientRect(), o = this._elem.getBoundingClientRect();
                    t += s.left - o.left, i += s.top - o.top;
                }
                return {
                    x:t,
                    y:i
                };
            }
        } ]), e;
    }();
    t["default"] = y, e.exports = t["default"];
}, , , function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(14), l = i(32), h = n(l), u = function() {
        function e(t, i, n, a) {
            s(this, e), this._app = t, this._elem = i, this._videoURL = h["default"](this._elem).src,
                this._areEventsAttached = !1, this._hasLoaded = !1, this._isPlaying = !1, this._eventDelegate = n,
                this._disabledVideo = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i),
                this._video = document.createElement("video"), this._video.style.width = "100%",
                this._video.style.height = "100%", this._video.preload = "none", this._video.loop = !1,
                this._autoplay = a || !1, this._video.controls = !1, this._disabledVideo || (o.set(this._video, {
                autoAlpha:0
            }), this._elem.appendChild(this._video), r.bindAll(this, "_scrolledIntoFrame", "_mouseEnter", "_mouseLeave", "_handleVideoEnd"),
                this._attachEvents());
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._video = null, this._elem = null, this._app = null;
            }
        }, {
            key:"play",
            value:function() {
                this._hasLoaded && (this._isPlaying || (this._video.play(), this._isPlaying = !0));
            }
        }, {
            key:"pause",
            value:function() {
                this._hasLoaded && this._isPlaying && (this._isPlaying = !1);
            }
        }, {
            key:"_mouseEnter",
            value:function() {
                this._hasLoaded && (this._loop = !0, this.play());
            }
        }, {
            key:"_mouseLeave",
            value:function() {
                this._hasLoaded && (this._loop = !1, this.pause());
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._app.trackElement(this._elem, this._scrolledIntoFrame),
                    this._eventDelegate.on("mouseenter", this._mouseEnter), this._eventDelegate.on("mouseleave", this._mouseLeave),
                    this._video.addEventListener("ended", this._handleVideoEnd), this._areEventsAttached = !0);
            }
        }, {
            key:"_handleVideoEnd",
            value:function() {
                (this._autoplay || this._loop) && (this._app.isVisible(this._video) ? this._video.play() :(this._video.pause(),
                    this._app.trackElement(this._elem, this._scrolledIntoFrame)));
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._app.untrackElement(this._elem), this._eventDelegate.off("mouseover", this._mouseEnter),
                    this._eventDelegate.off("mouseout", this._mouseLeave), this._video.removeEventListener("ended", this._handleVideoEnd),
                    this._areEventsAttached = !1);
            }
        }, {
            key:"_scrolledIntoFrame",
            value:function() {
                var e = this, t = function i() {
                    4 === e._video.readyState ? (e._autoplay || e._video.pause(), o.to(e._video, .4, {
                        autoAlpha:1
                    }), e._hasLoaded = !0) :setTimeout(i, 200);
                };
                4 !== this._video.readyState && (this._video.src = this._videoURL, this._video.load()),
                    this._video.play(), t();
            }
        } ]), e;
    }();
    t["default"] = u, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(122), l = n(o), h = function() {
        function e(t, i) {
            var n = this;
            s(this, e), this._app = t, this._elem = i, this._typeout = new l["default"](this._app, this._elem),
                this._scrolledIntoFrame = r.debounce(this._scrolledIntoFrame.bind(this), 750), setTimeout(function() {
                n._attachEvents();
            }, 1e3);
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._typeout.tearDown(), this._typeout = null, this._elem = null,
                    this._app = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._app.trackElement(this._elem, this._scrolledIntoFrame),
                    this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._app.untrackElement(this._elem), this._areEventsAttached = !1);
            }
        }, {
            key:"_scrolledIntoFrame",
            value:function() {
                this._areEventsAttached && this._typeout.runSequence();
            }
        } ]), e;
    }();
    t["default"] = h, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(5), l = n(o), h = i(4), u = n(h), c = i(14), _ = ".js-char", d = ".js-dotted", f = function() {
        function e(t, i) {
            var n = void 0 === arguments[2] ? 32 :arguments[2];
            s(this, e), this._app = t, this._elem = i, this._characterTime = n, this._dottedContainers = l["default"](d, this._elem),
                this._characters = l["default"](_, this._elem), this._offsets = null, this._isRevealed = !1,
                this._fakeDots = null, r.bindAll(this, "_onResize"), c.set(this._characters, {
                opacity:0
            }), this._createFakeDots(), this._calculateOffsets(), this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._characters = null, this._offsets = null, this._fakeDots.forEach(function(e) {
                    e.parentNode.removeChild(e);
                }), this._fakeDots = null, this._dottedContainers = null, this._elem = null, this._app = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._app.onResize(this._onResize), this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._app.offResize(this._onResize), this._areEventsAttached = !1);
            }
        }, {
            key:"_createFakeDots",
            value:function() {
                this._fakeDots = this._dottedContainers.map(function(e) {
                    var t = document.createElement("span");
                    return t.classList.add("fakedot"), c.set(t, {
                        opacity:0
                    }), e.appendChild(t), t;
                });
            }
        }, {
            key:"_onResize",
            value:function() {
                this._isRevealed || this._calculateOffsets();
            }
        }, {
            key:"_calculateOffset",
            value:function(e) {
                var t = e.getBoundingClientRect(), i = {
                    top:t.top,
                    left:t.left,
                    width:t.width,
                    height:t.height
                };
                if (e.offsetParent) {
                    var n = e.offsetParent.getBoundingClientRect();
                    i.top = i.top - n.top, i.left = i.left - n.left;
                }
                return i;
            }
        }, {
            key:"_calculateOffsets",
            value:function() {
                var e = this;
                this._offsets = this._characters.map(function(t) {
                    return e._calculateOffset(t);
                });
            }
        }, {
            key:"runSequence",
            value:function() {
                var e, t, i, n, s;
                return regeneratorRuntime.async(function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            e = 0, t = 0, c.set(this._fakeDots[t], {
                                opacity:1
                            });

                        case 3:
                            if (!(this._characters && e < this._characters.length)) {
                                a.next = 16;
                                break;
                            }
                            return i = this._characters[e], n = this._dottedContainers.indexOf(i.parentNode),
                            t !== n && (c.set(this._fakeDots[t], {
                                opacity:0
                            }), c.set(this._fakeDots[n], {
                                opacity:1
                            }), t = n), i.classList.contains("-last") || i.classList.contains("_return") || i.classList.contains("_hash") ? c.set(this._fakeDots[t], {
                                opacity:0
                            }) :c.set(this._fakeDots[t], {
                                opacity:1
                            }), s = this._calculateOffset(i), c.set(this._fakeDots[t], {
                                x:s.left + s.width,
                                y:s.top
                            }), c.set(i, {
                                opacity:1
                            }), a.next = 13, u["default"](this._characterTime);

                        case 13:
                            e++, a.next = 3;
                            break;

                        case 16:
                            return this._fakeDots && c.set(this._fakeDots[t], {
                                opacity:0
                            }), this._isRevealed = !0, a.abrupt("return", !0);

                        case 19:
                        case "end":
                            return a.stop();
                    }
                }, null, this);
            }
        } ]), e;
    }();
    t["default"] = f, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(14), l = i(5), h = n(l), u = i(32), c = n(u), _ = i(124), d = n(_), f = ".js-video-trigger", v = ".js-video-poster", p = ".js-video-target", m = .3, g = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._elem = i, this._triggerElements = h["default"](f, this._elem),
            this._elem.classList.contains(f.replace(/^\./, "")) && this._triggerElements.push(this._elem),
                this._areEventsAttached = !1, this._isVideoLoaded = !1, this._youTubeApi = null,
                r.bindAll(this, "_onClick"), this._attachEvents(), window.history.state && window.history.state.siteReferral && this._playVideo();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                if (this._detachEvents(), this._triggerElements = null, this._loadingTimeout && (clearTimeout(this._loadingTimeout),
                        this._loadingTimeout = null), this._player) {
                    try {
                        this._player.stopVideo(), this._player.destroy();
                    } catch (e) {}
                    this._player = null;
                }
                this._isVideoLoaded = !1, this._elem = null, this._app = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached || (this._triggerElements.forEach(function(t) {
                    t.addEventListener("click", e._onClick);
                }), this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached && (this._youTubeApi = null, this._triggerElements.forEach(function(t) {
                    t.removeEventListener("click", e._onClick);
                }), this._areEventsAttached = !1);
            }
        }, {
            key:"_onClick",
            value:function(e) {
                return regeneratorRuntime.async(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e.stopPropagation(), this._playVideo();

                        case 2:
                        case "end":
                            return t.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_prepareYouTubePlayer",
            value:function() {
                return regeneratorRuntime.async(function(e) {
                    for (var t = this; ;) switch (e.prev = e.next) {
                        case 0:
                            if (!this._isVideoLoaded) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return", Promise.resolve());

                        case 2:
                            return e.abrupt("return", new Promise(function(e) {
                                if (t._videoId = c["default"](t._elem).videoId, !t._videoId || t._videoId.length <= 0) throw new Error("Missing data-video-id");
                                if (t._videoContainer = h["default"](p, t._elem)[0], !t._videoContainer) throw new Error("Missing video container: " + p);
                                var i = function() {
                                    t._isVideoLoaded = !0, setTimeout(e, 200);
                                }, n = function(i) {
                                    i.data === YT.PlayerState.ENDED && (t._fadeInScrim(), e());
                                };
                                t._player = new window.YT.Player(t._videoContainer, {
                                    videoId:t._videoId,
                                    playerVars:{
                                        showinfo:0,
                                        rel:0,
                                        autoplay:1
                                    },
                                    events:{
                                        onReady:i,
                                        onStateChange:n
                                    }
                                });
                            }));

                        case 3:
                        case "end":
                            return e.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_fadeInScrim",
            value:function() {
                return regeneratorRuntime.async(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", o.to(v, m, {
                                autoAlpha:1
                            }));

                        case 1:
                        case "end":
                            return e.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_fadeOutScrim",
            value:function() {
                return regeneratorRuntime.async(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", o.to(v, m, {
                                autoAlpha:0
                            }));

                        case 1:
                        case "end":
                            return e.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_playVideo",
            value:function() {
                if (this._youTubeApi) return this._player.playVideo(), void this._fadeOutScrim();
                var e = this;
                this._youTubeApi = d["default"]().then(function() {
                    return e._prepareYouTubePlayer().then(function() {
                        e._fadeOutScrim();
                    });
                });
            }
        } ]), e;
    }();
    t["default"] = g, e.exports = t["default"];
}, function(e, t) {
    "use strict";
    function i() {
        return window.YT ? (n = "loaded", Promise.resolve()) :"loaded" === n ? Promise.resolve() :(n = "loading",
            setTimeout(function() {
                "loaded" !== n && (n = "unloaded");
            }, 6e4), new Promise(function(e) {
            window.onYouTubeIframeAPIReady = function() {
                n = "loaded", e();
            };
            var t = document.createElement("script");
            t.src = "https://www.youtube.com/iframe_api";
            var i = document.querySelector("script");
            i.parentNode.insertBefore(t, i);
        }));
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    }), t["default"] = i;
    var n = "unloaded";
    e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(32), l = n(o), h = i(5), u = n(h), c = ".js-article-video", _ = "-is-playing", d = new Map(), f = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._elem = i, this._triggerElements = u["default"](c, this._elem),
                this._scrollAutoplay = "true" === l["default"](this._elem.children[0]).scrollAutoplay ? !0 :!1,
            this._elem.classList.contains(c.replace(/^\./, "")) && this._triggerElements.push(this._elem),
                this._areEventsAttached = !1, r.bindAll(this, "_onClick", "_displayOverlay", "_scrolledIntoView", "_setStartFrame"),
                this._attachEvents(), this._scrollAutoplay && this._elem.classList.add(_);
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._triggerElements = null, this._elem = null, this._app = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached || (navigator.userAgent.match(/Android/i) && this._triggerElements.forEach(function(e) {
                    e.classList.add("-is-android"), e.children[0].setAttribute("controls", "");
                }), (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) && this._triggerElements.forEach(function(e) {
                    e.classList.add("-is-ios");
                }), this._triggerElements.forEach(function(t) {
                    t.addEventListener("click", e._onClick), t.children[0].addEventListener("ended", e._displayOverlay),
                    e._scrollAutoplay && t.children[0].addEventListener("loadeddata", e._setStartFrame),
                        e._app.trackElement(t.children[0], e._scrolledIntoView, -300);
                }), this._areEventsAttached = !0);
            }
        }, {
            key:"_setStartFrame",
            value:function() {
                this._scrollAutoplay && (this._elem.children[0].currentTime = .02);
            }
        }, {
            key:"_scrolledIntoView",
            value:function() {
                this._scrollAutoplay && this._playVideo(this._elem);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached && (navigator.userAgent.match(/Android/i) && this._triggerElements.forEach(function(e) {
                    e.classList.remove("-is-android"), e.children[0].removeAttribute("controls");
                }), (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) && this._triggerElements.forEach(function(e) {
                    e.classList.remove("-is-ios");
                }), this._triggerElements.forEach(function(t) {
                    t.removeEventListener("click", e._onClick), t.children[0].removeEventListener("ended", e._displayOverlay),
                        t.children[0].removeEventListener("loadeddata", e._setStartFrame);
                }), this._areEventsAttached = !1);
            }
        }, {
            key:"_displayOverlay",
            value:function(e) {
                return regeneratorRuntime.async(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e.stopPropagation(), this._pauseVideo(this._elem);

                        case 2:
                        case "end":
                            return t.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_onClick",
            value:function(e) {
                return regeneratorRuntime.async(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e.stopPropagation(), this._elem.children[0].paused ? this._playVideo(this._elem) :this._pauseVideo(this._elem);

                        case 2:
                        case "end":
                            return t.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_playVideo",
            value:function(e) {
                var t = this;
                e.children[0].play(), d.set(e, e), e.classList.add(_), d.forEach(function(e) {
                    t._app.isVisible(e) || t._pauseVideo(e);
                });
            }
        }, {
            key:"_pauseVideo",
            value:function(e) {
                e.children[0].pause(), d.set(e, e), e.classList.remove(_);
            }
        } ]), e;
    }();
    t["default"] = f, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(2), o = i(5), l = n(o), h = i(32), u = n(h), c = i(124), _ = n(c), d = ".js-article-yt-video", f = ".js-article-yt-video-target", v = "hd720", p = function() {
        function e(t, i) {
            s(this, e), this._app = t, this._elem = i, this._youTubeApi = null, this._player = null,
                this._isVideoLoaded = !1, this._triggerElements = l["default"](d, this._elem), this._elem.classList.contains(d.replace(/^\./, "")) && this._triggerElements.push(this._elem),
                this._areEventsAttached = !1, r.bindAll(this, "_onClick"), this._attachEvents();
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                if (this._detachEvents(), this._triggerElements = null, this._isVideoLoaded = !1,
                        this._youTubeApi = null, this._player) {
                    try {
                        this._player.stopVideo(), this._player.destroy();
                    } catch (e) {}
                    this._player = null;
                }
                this._elem = null, this._app = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached || (navigator.userAgent.match(/Android/i) && this._triggerElements.forEach(function(e) {
                    e.classList.add("-is-android");
                }), (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) && this._triggerElements.forEach(function(e) {
                    e.classList.add("-is-ios");
                }), this._triggerElements.forEach(function(t) {
                    t.addEventListener("click", e._onClick);
                }), this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                var e = this;
                this._areEventsAttached && (navigator.userAgent.match(/Android/i) && this._triggerElements.forEach(function(e) {
                    e.classList.remove("-is-android");
                }), (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) && this._triggerElements.forEach(function(e) {
                    e.classList.remove("-is-ios");
                }), this._triggerElements.forEach(function(t) {
                    t.removeEventListener("click", e._onClick);
                }), this._areEventsAttached = !1);
            }
        }, {
            key:"_onClick",
            value:function(e) {
                var t;
                return regeneratorRuntime.async(function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (e.stopPropagation(), !this._youTubeApi) {
                                i.next = 3;
                                break;
                            }
                            return i.abrupt("return");

                        case 3:
                            t = this, this._youTubeApi = _["default"]().then(function() {
                                return t._prepareYouTubePlayer().then(function() {
                                    t._playVideo();
                                });
                            });

                        case 5:
                        case "end":
                            return i.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_prepareYouTubePlayer",
            value:function() {
                return regeneratorRuntime.async(function(e) {
                    for (var t = this; ;) switch (e.prev = e.next) {
                        case 0:
                            if (!this._isVideoLoaded) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return", Promise.resolve());

                        case 2:
                            return e.abrupt("return", new Promise(function(e) {
                                if (t._videoId = u["default"](t._elem).videoId, !t._videoId || t._videoId.length <= 0) throw new Error("Missing data-video-id");
                                if (t._videoContainer = l["default"](f, t._elem)[0], !t._videoContainer) throw new Error("Missing video container: " + f);
                                var i = function(i) {
                                    t._isVideoLoaded = !0, i.target.setPlaybackQuality(v), setTimeout(e, 200);
                                }, n = function(t) {
                                    t.data === YT.PlayerState.BUFFERING && t.target.setPlaybackQuality(v), t.data === YT.PlayerState.ENDED && e();
                                };
                                t._player = new window.YT.Player(t._videoContainer, {
                                    videoId:t._videoId,
                                    playerVars:{
                                        showinfo:0,
                                        rel:0,
                                        controls:1,
                                        autohide:1,
                                        autoplay:1,
                                        suggestedQuality:v
                                    },
                                    events:{
                                        onReady:i,
                                        onStateChange:n
                                    }
                                });
                            }));

                        case 3:
                        case "end":
                            return e.stop();
                    }
                }, null, this);
            }
        }, {
            key:"_playVideo",
            value:function() {
                this._player.playVideo();
                var e = this._elem.querySelector(f);
                e.classList.add("playing");
            }
        } ]), e;
    }();
    t["default"] = p, e.exports = t["default"];
}, function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e :{
            "default":e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value:!0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
        };
    }(), r = i(107), o = n(r), l = i(2), h = i(5), u = n(h), c = i(99), _ = n(c), d = i(12), f = i(14), v = ".js-wave-layer", p = ".js-share-fab-content", m = ".js-share-fab-toggle", g = ".js-share-fab-text", E = ".js-share-fab-parent", y = .4, w = .1, k = function() {
        function e(t, i) {
            var n = this;
            s(this, e), this._app = t, this._elem = i, this._dimensions = {
                w:1,
                h:1
            }, this._waveLayer = u["default"](v, this._elem)[0], this._wave = null, this._elemSize = this._elem.offsetWidth,
                this._toggle = u["default"](m, this._elem)[0], this._content = u["default"](p, this._elem)[0],
                this._links = u["default"]("a", this._elem), this._parentContainer = _["default"](this._elem, E),
                this._buttonText = u["default"](g, this._elem)[0], this._coords = this._setCoords(),
                this._areEventsAttached = !1, this._FABIsActive = !1, this._isHidden = !1, this._isLocked = !1,
                this._FABIsAnimating = !1, l.bindAll(this, "_onResize", "_onClick", "_resetAnimationState", "_setFABPosition", "_setCoords"),
                this._toggle.setAttribute("aria-expanded", "false"), this._disableLinks(), this._attachEvents(),
                this._onResize(), setTimeout(function() {
                return n._onResize();
            }, 2e3);
        }
        return a(e, [ {
            key:"tearDown",
            value:function() {
                this._detachEvents(), this._wave && (this._wave.detach(), this._wave = null), this._elem = null,
                    this._toggle = null, this._content = null;
            }
        }, {
            key:"_attachEvents",
            value:function() {
                this._areEventsAttached || (this._toggle.addEventListener("click", this._onClick),
                    this._app.onResize(this._onResize), this._app.onScroll(this._setFABPosition), this._areEventsAttached = !0);
            }
        }, {
            key:"_detachEvents",
            value:function() {
                this._areEventsAttached && (this._toggle.removeEventListener("click", this._onClick),
                    this._app.offResize(this._onResize), this._app.offScroll(this._setFABPosition),
                    this._areEventsAttached = !1);
            }
        }, {
            key:"_onClick",
            value:function(e) {
                if (!e.metaKey && !e.ctrlKey) {
                    if (e.preventDefault(), e.stopPropagation(), this._wave && !this._FABIsActive) {
                        var t = this._positionForEvent(e), i = t.x, n = t.y, s = this._wave.containerRect.w - this._dimensions.w;
                        this._wave.activate(i + s, n, "rgba(0, 0, 0, 0.4)", !1, y);
                    }
                    this._setFABState();
                }
            }
        }, {
            key:"_positionForEvent",
            value:function(e) {
                for (var t = e.offsetX || e.layerX, i = e.offsetY || e.layerY, n = e.target; n !== this._elem; ) {
                    if (!n) throw new Error("Recursive parent check ended at null (window?)");
                    t += n.offsetLeft, i += n.offsetTop, n = n.offsetParent;
                }
                return {
                    x:t,
                    y:i
                };
            }
        }, {
            key:"_onResize",
            value:function() {
                if (this._areEventsAttached) {
                    if (this._wave) {
                        var e = this._content.getBoundingClientRect(), t = e.width, i = e.height;
                        this._waveLayer.style.width = "" + t + "px", this._waveLayer.style.height = "" + i + "px";
                    }
                    if (this._FABIsActive) this._closeFAB(); else {
                        var n = this._elem.getBoundingClientRect(), t = n.width, i = n.height;
                        this._dimensions.w = t, this._dimensions.h = i;
                    }
                    this._elem.style.width = "", this._elem.style.height = "", this._elemSize = this._elem.offsetWidth,
                        this._coords = this._setCoords(), this._setFABPosition();
                }
            }
        }, {
            key:"_setFABState",
            value:function() {
                this._FABIsActive ? this._closeFAB() :this._openFAB();
            }
        }, {
            key:"_setCoords",
            value:function() {
                var e = this._parentContainer.getBoundingClientRect().top + this._app.currentScroll();
                return {
                    top:e,
                    right:.5 * (window.innerWidth - this._parentContainer.offsetWidth),
                    bottom:e + this._parentContainer.offsetHeight
                };
            }
        }, {
            key:"_setFABPosition",
            value:function() {
                return this._coords.top === this._coords.bottom ? void ((this._isHidden || this._isLocked) && this._fixToTop()) :(this._app.currentScroll() > this._coords.top - 3 * this._elemSize && (this._isLocked || this._fixToBottom(),
                    this._app.currentScroll() > this._coords.bottom - 3 * this._elemSize ? this._isHidden || this._shrinkFAB() :this._isLocked && this._growFAB()),
                    void (this._app.currentScroll() < this._coords.top - 3 * this._elemSize && (this._isHidden || this._isLocked) && this._fixToTop()));
            }
        }, {
            key:"_shrinkFAB",
            value:function() {
                var e = this;
                this._FABIsActive && this._closeFAB(), f.to(this._elem, y, {
                    scale:0,
                    ease:Expo.easeOut,
                    onComplete:function() {
                        e._isHidden = !0;
                    }
                });
            }
        }, {
            key:"_growFAB",
            value:function() {
                var e = this;
                this._FABIsActive && this._closeFAB(), f.to(this._elem, y, {
                    scale:1,
                    ease:Expo.easeOut,
                    onComplete:function() {
                        e._isHidden = !1;
                    }
                });
            }
        }, {
            key:"_fixToBottom",
            value:function() {
                var e = this;
                this._shrinkFAB(), f.set(this._elem, {
                    css:{
                        position:"",
                        x:0,
                        bottom:-(.5 * this._elemSize),
                        top:"auto"
                    },
                    delay:2 * y,
                    onComplete:function() {
                        e._growFAB(), e._isLocked = !0;
                    }
                });
            }
        }, {
            key:"_fixToTop",
            value:function() {
                var e = this;
                this._shrinkFAB(), f.set(this._elem, {
                    css:{
                        position:"",
                        x:0,
                        bottom:"",
                        top:""
                    },
                    delay:2 * y,
                    onComplete:function() {
                        e._growFAB(), e._isLocked = !1;
                    }
                });
            }
        }, {
            key:"_resetAnimationState",
            value:function() {
                var e = this;
                setTimeout(function() {
                    e._FABIsAnimating = !1;
                }, 200 * y);
            }
        }, {
            key:"_disableLinks",
            value:function() {
                this._links.forEach(function(e) {
                    e.setAttribute("tabindex", "-1");
                });
            }
        }, {
            key:"_enableLinks",
            value:function() {
                this._links.forEach(function(e) {
                    e.removeAttribute("tabindex");
                });
            }
        }, {
            key:"_openFAB",
            value:function() {
                var e = this;
                this._FABIsAnimating || (this._FABIsAnimating = !0, this._FABIsActive = !0, o["default"].write(function() {
                    e._elem.classList.add(d.STATE_ACTIVE, e._FABIsActive), e._toggle.setAttribute("aria-expanded", "true"),
                        e._content.setAttribute("aria-hidden", "false"), e._enableLinks(), f.to(e._elem, y, {
                        width:e._content.offsetWidth,
                        height:e._content.offsetHeight,
                        ease:Expo.easeOut
                    }), f.to(e._content, y, {
                        autoAlpha:1,
                        ease:Expo.easeOut,
                        delay:2 * w
                    }).then(e._resetAnimationState);
                }));
            }
        }, {
            key:"_closeFAB",
            value:function() {
                var e = this;
                this._FABIsAnimating || (this._FABIsAnimating = !0, this._FABIsActive = !1, o["default"].write(function() {
                    e._elem.classList.remove(d.STATE_ACTIVE, e._FABIsActive), e._toggle.setAttribute("aria-expanded", "false"),
                        e._content.setAttribute("aria-hidden", "true"), e._disableLinks(), f.to(e._elem, y, {
                        width:e._elemSize,
                        height:e._elemSize,
                        ease:Expo.easeOut,
                        onComplete:e._resetAnimationState()
                    }), f.to(e._content, y * w, {
                        opacity:0,
                        ease:Expo.easeOut
                    });
                }));
            }
        } ]), e;
    }();
    t["default"] = k, e.exports = t["default"];
} ]);
//# sourceMappingURL=ap.min.js.map