(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [685],
  {
    86961: function (a, b, c) {
      "use strict";
      var d = c(5582),
        e = c.n(d),
        f = c(66775);
      /*!
       * chartjs-adapter-moment v1.0.0
       * https://www.chartjs.org
       * (c) 2021 chartjs-adapter-moment Contributors
       * Released under the MIT license
       */ let g = {
        datetime: "MMM D, YYYY, h:mm:ss a",
        millisecond: "h:mm:ss.SSS a",
        second: "h:mm:ss a",
        minute: "h:mm a",
        hour: "hA",
        day: "MMM D",
        week: "ll",
        month: "MMM YYYY",
        quarter: "[Q]Q - YYYY",
        year: "YYYY",
      };
      f.IQ._date.override(
        "function" == typeof e()
          ? {
              _id: "moment",
              formats: function () {
                return g;
              },
              parse: function (a, b) {
                return (
                  "string" == typeof a && "string" == typeof b
                    ? (a = e()(a, b))
                    : a instanceof e() || (a = e()(a)),
                  a.isValid() ? a.valueOf() : null
                );
              },
              format: function (a, b) {
                return e()(a).format(b);
              },
              add: function (a, b, c) {
                return e()(a).add(b, c).valueOf();
              },
              diff: function (a, b, c) {
                return e()(a).diff(e()(b), c);
              },
              startOf: function (a, b, c) {
                return ((a = e()(a)), "isoWeek" === b)
                  ? ((c = Math.trunc(Math.min(Math.max(0, c), 6))),
                    a.isoWeekday(c).startOf("day").valueOf())
                  : a.startOf(b).valueOf();
              },
              endOf: function (a, b) {
                return e()(a).endOf(b).valueOf();
              },
            }
          : {}
      );
    },
    55376: function (a, b, c) {
      "use strict";
      c.d(b, {
        kL: function () {
          return j;
        },
      });
      var d = c(67294),
        e = c(66775);
      let f = "label";
      function g(a, b) {
        "function" == typeof a ? a(b) : a && (a.current = b);
      }
      function h(a, b) {
        a.labels = b;
      }
      function i(a, b) {
        let c =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f,
          d = [];
        a.datasets = b.map((b) => {
          let e = a.datasets.find((a) => a[c] === b[c]);
          return !e || !b.data || d.includes(e)
            ? { ...b }
            : (d.push(e), Object.assign(e, b), e);
        });
      }
      let j = (0, d.forwardRef)(function (a, b) {
        let {
            height: c = 150,
            width: j = 300,
            redraw: k = !1,
            datasetIdKey: l,
            type: m,
            data: n,
            options: o,
            plugins: p = [],
            fallbackContent: q,
            updateMode: r,
            ...s
          } = a,
          t = (0, d.useRef)(null),
          u = (0, d.useRef)(),
          v = () => {
            t.current &&
              ((u.current = new e.kL(t.current, {
                type: m,
                data: (function (a) {
                  let b =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : f,
                    c = { labels: [], datasets: [] };
                  return h(c, a.labels), i(c, a.datasets, b), c;
                })(n, l),
                options: o && { ...o },
                plugins: p,
              })),
              g(b, u.current));
          },
          w = () => {
            g(b, null), u.current && (u.current.destroy(), (u.current = null));
          };
        return (
          (0, d.useEffect)(() => {
            if (!k && u.current && o) {
              var a, b;
              (a = u.current), (b = o), Object.assign(a.options, b);
            }
          }, [k, o]),
          (0, d.useEffect)(() => {
            !k && u.current && h(u.current.config.data, n.labels);
          }, [k, n.labels]),
          (0, d.useEffect)(() => {
            !k &&
              u.current &&
              n.datasets &&
              i(u.current.config.data, n.datasets, l);
          }, [k, n.datasets]),
          (0, d.useEffect)(() => {
            u.current && (k ? (w(), setTimeout(v)) : u.current.update(r));
          }, [k, o, n.labels, n.datasets, r]),
          (0, d.useEffect)(() => {
            u.current && (w(), setTimeout(v));
          }, [m]),
          (0, d.useEffect)(() => (v(), () => w()), []),
          d.createElement(
            "canvas",
            Object.assign({ ref: t, role: "img", height: c, width: j }, s),
            q
          )
        );
      });
    },
    97005: function (a, b, c) {
      var d,
        e = c(67294),
        f =
          (d = e) && "object" == typeof d && "default" in d
            ? d
            : { default: d },
        g = function () {
          return (g =
            Object.assign ||
            function (a) {
              for (var b, c = 1, d = arguments.length; c < d; c++)
                for (var e in (b = arguments[c]))
                  Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
              return a;
            }).apply(this, arguments);
        };
      !(function (a) {
        if (!a || "undefined" == typeof window) return;
        let b = document.createElement("style");
        return (
          b.setAttribute("type", "text/css"),
          (b.innerHTML = a),
          document.head.appendChild(b),
          a
        );
      })(
        '.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'
      );
      var h = function (a) {
        var b,
          c,
          d,
          h,
          i = a.style,
          j = a.className,
          k = a.play,
          l = void 0 === k || k,
          m = a.pauseOnHover,
          n = void 0 !== m && m,
          o = a.pauseOnClick,
          p = void 0 !== o && o,
          q = a.direction,
          r = void 0 === q ? "left" : q,
          s = a.speed,
          t = void 0 === s ? 20 : s,
          u = a.delay,
          v = void 0 === u ? 0 : u,
          w = a.loop,
          x = void 0 === w ? 0 : w,
          y = a.gradient,
          z = a.gradientColor,
          A = void 0 === z ? [255, 255, 255] : z,
          B = a.gradientWidth,
          C = void 0 === B ? 200 : B,
          D = a.onFinish,
          E = a.onCycleComplete,
          F = a.children,
          G = e.useState(0),
          H = G[0],
          I = G[1],
          J = e.useState(0),
          K = J[0],
          L = J[1],
          M = e.useState(!1),
          N = M[0],
          O = M[1],
          P = e.useRef(null),
          Q = e.useRef(null);
        e.useEffect(
          function () {
            if (N) {
              var a = function () {
                Q.current &&
                  P.current &&
                  (I(P.current.getBoundingClientRect().width),
                  L(Q.current.getBoundingClientRect().width));
              };
              return (
                a(),
                window.addEventListener("resize", a),
                function () {
                  window.removeEventListener("resize", a);
                }
              );
            }
          },
          [N]
        ),
          e.useEffect(function () {
            O(!0);
          }, []);
        var R = "rgba(" + A[0] + ", " + A[1] + ", " + A[2],
          S = K < H ? H / t : K / t;
        return f.default.createElement(
          e.Fragment,
          null,
          N
            ? f.default.createElement(
                "div",
                {
                  ref: P,
                  style: g(
                    g({}, void 0 === i ? {} : i),
                    (((b = {})["--pause-on-hover"] =
                      !l || n ? "paused" : "running"),
                    (b["--pause-on-click"] =
                      !l || (n && !p) || p ? "paused" : "running"),
                    b)
                  ),
                  className: (void 0 === j ? "" : j) + " marquee-container",
                },
                (void 0 === y || y) &&
                  f.default.createElement("div", {
                    style:
                      (((c = {})["--gradient-color"] =
                        R + ", 1), " + R + ", 0)"),
                      (c["--gradient-width"] =
                        "number" == typeof C ? C + "px" : C),
                      c),
                    className: "overlay",
                  }),
                f.default.createElement(
                  "div",
                  {
                    ref: Q,
                    style:
                      (((d = {})["--play"] = l ? "running" : "paused"),
                      (d["--direction"] = "left" === r ? "normal" : "reverse"),
                      (d["--duration"] = S + "s"),
                      (d["--delay"] = v + "s"),
                      (d["--iteration-count"] = x ? "" + x : "infinite"),
                      d),
                    className: "marquee",
                    onAnimationIteration: E,
                    onAnimationEnd: D,
                  },
                  F
                ),
                f.default.createElement(
                  "div",
                  {
                    style:
                      (((h = {})["--play"] = l ? "running" : "paused"),
                      (h["--direction"] = "left" === r ? "normal" : "reverse"),
                      (h["--duration"] = S + "s"),
                      (h["--delay"] = v + "s"),
                      (h["--iteration-count"] = x ? "" + x : "infinite"),
                      h),
                    className: "marquee",
                    "aria-hidden": "true",
                  },
                  F
                )
              )
            : null
        );
      };
      b.Z = h;
    },
    29217: function (a, b, c) {
      "use strict";
      var d = c(66775);
      d.kL.register(...d.zX);
    },
    2454: function (a, b, c) {
      "use strict";
      /*!
       * Chart.js v3.9.1
       * https://www.chartjs.org
       * (c) 2022 Chart.js Contributors
       * Released under the MIT License
       */ function d() {}
      c.d(b, {
        $: function () {
          return bh;
        },
        A: function () {
          return R;
        },
        B: function () {
          return k;
        },
        C: function () {
          return o;
        },
        D: function () {
          return bz;
        },
        E: function () {
          return ac;
        },
        F: function () {
          return X;
        },
        G: function () {
          return bb;
        },
        H: function () {
          return L;
        },
        I: function () {
          return ad;
        },
        J: function () {
          return bd;
        },
        K: function () {
          return bw;
        },
        L: function () {
          return bi;
        },
        M: function () {
          return bm;
        },
        N: function () {
          return bj;
        },
        O: function () {
          return bx;
        },
        P: function () {
          return G;
        },
        Q: function () {
          return p;
        },
        R: function () {
          return aq;
        },
        S: function () {
          return ar;
        },
        T: function () {
          return H;
        },
        U: function () {
          return a6;
        },
        V: function () {
          return u;
        },
        W: function () {
          return B;
        },
        X: function () {
          return b6;
        },
        Y: function () {
          return ah;
        },
        Z: function () {
          return ag;
        },
        _: function () {
          return am;
        },
        a: function () {
          return by;
        },
        a0: function () {
          return Z;
        },
        a1: function () {
          return b8;
        },
        a2: function () {
          return b0;
        },
        a3: function () {
          return cb;
        },
        a4: function () {
          return ao;
        },
        a5: function () {
          return ca;
        },
        a6: function () {
          return b_;
        },
        a7: function () {
          return a7;
        },
        a8: function () {
          return D;
        },
        a9: function () {
          return bC;
        },
        aA: function () {
          return ch;
        },
        aB: function () {
          return ci;
        },
        aC: function () {
          return as;
        },
        aD: function () {
          return cj;
        },
        aE: function () {
          return bg;
        },
        aF: function () {
          return d;
        },
        aG: function () {
          return $;
        },
        aH: function () {
          return V;
        },
        aI: function () {
          return Q;
        },
        aJ: function () {
          return U;
        },
        aK: function () {
          return T;
        },
        aL: function () {
          return Y;
        },
        aM: function () {
          return bc;
        },
        aN: function () {
          return ai;
        },
        aO: function () {
          return af;
        },
        aa: function () {
          return bB;
        },
        ab: function () {
          return bD;
        },
        ac: function () {
          return v;
        },
        ad: function () {
          return f;
        },
        ae: function () {
          return ap;
        },
        af: function () {
          return b9;
        },
        ag: function () {
          return be;
        },
        ah: function () {
          return E;
        },
        ai: function () {
          return q;
        },
        aj: function () {
          return F;
        },
        ak: function () {
          return ae;
        },
        al: function () {
          return bt;
        },
        am: function () {
          return b$;
        },
        an: function () {
          return co;
        },
        ao: function () {
          return cn;
        },
        ap: function () {
          return cd;
        },
        aq: function () {
          return ce;
        },
        ar: function () {
          return cc;
        },
        as: function () {
          return bk;
        },
        at: function () {
          return bl;
        },
        au: function () {
          return bf;
        },
        av: function () {
          return bp;
        },
        aw: function () {
          return bu;
        },
        ax: function () {
          return bv;
        },
        ay: function () {
          return cm;
        },
        az: function () {
          return aa;
        },
        b: function () {
          return h;
        },
        c: function () {
          return a4;
        },
        d: function () {
          return ba;
        },
        e: function () {
          return ay;
        },
        f: function () {
          return y;
        },
        g: function () {
          return j;
        },
        h: function () {
          return bA;
        },
        i: function () {
          return i;
        },
        j: function () {
          return C;
        },
        k: function () {
          return g;
        },
        l: function () {
          return ak;
        },
        m: function () {
          return m;
        },
        n: function () {
          return n;
        },
        o: function () {
          return cg;
        },
        p: function () {
          return ab;
        },
        q: function () {
          return at;
        },
        r: function () {
          return an;
        },
        s: function () {
          return P;
        },
        t: function () {
          return W;
        },
        u: function () {
          return al;
        },
        v: function () {
          return l;
        },
        w: function () {
          return au;
        },
        x: function () {
          return S;
        },
        y: function () {
          return bU;
        },
        z: function () {
          return O;
        },
      });
      let e,
        f =
          ((e = 0),
          function () {
            return e++;
          });
      function g(a) {
        return null == a;
      }
      function h(a) {
        if (Array.isArray && Array.isArray(a)) return !0;
        let b = Object.prototype.toString.call(a);
        return "[object" === b.slice(0, 7) && "Array]" === b.slice(-6);
      }
      function i(a) {
        return (
          null !== a && "[object Object]" === Object.prototype.toString.call(a)
        );
      }
      let j = (a) =>
        ("number" == typeof a || a instanceof Number) && isFinite(+a);
      function k(a, b) {
        return j(a) ? a : b;
      }
      function l(a, b) {
        return void 0 === a ? b : a;
      }
      let m = (a, b) =>
          "string" == typeof a && a.endsWith("%") ? parseFloat(a) / 100 : a / b,
        n = (a, b) =>
          "string" == typeof a && a.endsWith("%")
            ? (parseFloat(a) / 100) * b
            : +a;
      function o(a, b, c) {
        if (a && "function" == typeof a.call) return a.apply(c, b);
      }
      function p(a, b, c, d) {
        let e, f, g;
        if (h(a)) {
          if (((f = a.length), d))
            for (e = f - 1; e >= 0; e--) b.call(c, a[e], e);
          else for (e = 0; e < f; e++) b.call(c, a[e], e);
        } else if (i(a))
          for (e = 0, f = (g = Object.keys(a)).length; e < f; e++)
            b.call(c, a[g[e]], g[e]);
      }
      function q(a, b) {
        let c, d, e, f;
        if (!a || !b || a.length !== b.length) return !1;
        for (c = 0, d = a.length; c < d; ++c)
          if (
            ((e = a[c]),
            (f = b[c]),
            e.datasetIndex !== f.datasetIndex || e.index !== f.index)
          )
            return !1;
        return !0;
      }
      function r(a) {
        if (h(a)) return a.map(r);
        if (i(a)) {
          let b = Object.create(null),
            c = Object.keys(a),
            d = c.length,
            e = 0;
          for (; e < d; ++e) b[c[e]] = r(a[c[e]]);
          return b;
        }
        return a;
      }
      function s(a) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(a);
      }
      function t(a, b, c, d) {
        if (!s(a)) return;
        let e = b[a],
          f = c[a];
        i(e) && i(f) ? u(e, f, d) : (b[a] = r(f));
      }
      function u(a, b, c) {
        let d = h(b) ? b : [b],
          e = d.length;
        if (!i(a)) return a;
        c = c || {};
        let f = c.merger || t;
        for (let g = 0; g < e; ++g) {
          if (!i((b = d[g]))) continue;
          let j = Object.keys(b);
          for (let k = 0, l = j.length; k < l; ++k) f(j[k], a, b, c);
        }
        return a;
      }
      function v(a, b) {
        return u(a, b, { merger: w });
      }
      function w(a, b, c) {
        if (!s(a)) return;
        let d = b[a],
          e = c[a];
        i(d) && i(e)
          ? v(d, e)
          : Object.prototype.hasOwnProperty.call(b, a) || (b[a] = r(e));
      }
      let x = { "": (a) => a, x: (a) => a.x, y: (a) => a.y };
      function y(a, b) {
        let c = x[b] || (x[b] = z(b));
        return c(a);
      }
      function z(a) {
        let b = A(a);
        return (a) => {
          for (let c of b) {
            if ("" === c) break;
            a = a && a[c];
          }
          return a;
        };
      }
      function A(a) {
        let b = a.split("."),
          c = [],
          d = "";
        for (let e of b)
          (d += e).endsWith("\\")
            ? (d = d.slice(0, -1) + ".")
            : (c.push(d), (d = ""));
        return c;
      }
      function B(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
      }
      let C = (a) => void 0 !== a,
        D = (a) => "function" == typeof a,
        E = (a, b) => {
          if (a.size !== b.size) return !1;
          for (let c of a) if (!b.has(c)) return !1;
          return !0;
        };
      function F(a) {
        return (
          "mouseup" === a.type || "click" === a.type || "contextmenu" === a.type
        );
      }
      let G = Math.PI,
        H = 2 * G,
        I = H + G,
        J = Number.POSITIVE_INFINITY,
        K = G / 180,
        L = G / 2,
        M = G / 4,
        N = (2 * G) / 3,
        O = Math.log10,
        P = Math.sign;
      function Q(a) {
        let b = Math.round(a);
        a = T(a, b, a / 1e3) ? b : a;
        let c = Math.pow(10, Math.floor(O(a))),
          d = a / c;
        return (d <= 1 ? 1 : d <= 2 ? 2 : d <= 5 ? 5 : 10) * c;
      }
      function R(a) {
        let b = [],
          c = Math.sqrt(a),
          d;
        for (d = 1; d < c; d++) a % d == 0 && (b.push(d), b.push(a / d));
        return c === (0 | c) && b.push(c), b.sort((a, b) => a - b).pop(), b;
      }
      function S(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      }
      function T(a, b, c) {
        return Math.abs(a - b) < c;
      }
      function U(a, b) {
        let c = Math.round(a);
        return c - b <= a && c + b >= a;
      }
      function V(a, b, c) {
        let d, e, f;
        for (d = 0, e = a.length; d < e; d++)
          isNaN((f = a[d][c])) ||
            ((b.min = Math.min(b.min, f)), (b.max = Math.max(b.max, f)));
      }
      function W(a) {
        return a * (G / 180);
      }
      function X(a) {
        return a * (180 / G);
      }
      function Y(a) {
        if (!j(a)) return;
        let b = 1,
          c = 0;
        for (; Math.round(a * b) / b !== a; ) (b *= 10), c++;
        return c;
      }
      function Z(a, b) {
        let c = b.x - a.x,
          d = b.y - a.y,
          e = Math.atan2(d, c);
        return (
          e < -0.5 * G && (e += H),
          { angle: e, distance: Math.sqrt(c * c + d * d) }
        );
      }
      function $(a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
      }
      function _(a, b) {
        return ((a - b + I) % H) - G;
      }
      function aa(a) {
        return ((a % H) + H) % H;
      }
      function ab(a, b, c, d) {
        let e = aa(a),
          f = aa(b),
          g = aa(c),
          h = aa(f - e),
          i = aa(g - e),
          j = aa(e - f),
          k = aa(e - g);
        return e === f || e === g || (d && f === g) || (h > i && j < k);
      }
      function ac(a, b, c) {
        return Math.max(b, Math.min(c, a));
      }
      function ad(a) {
        return ac(a, -32768, 32767);
      }
      function ae(a, b, c, d = 1e-6) {
        return a >= Math.min(b, c) - d && a <= Math.max(b, c) + d;
      }
      function af(a, b, c) {
        c = c || ((c) => a[c] < b);
        let d = a.length - 1,
          e = 0,
          f;
        for (; d - e > 1; ) c((f = (e + d) >> 1)) ? (e = f) : (d = f);
        return { lo: e, hi: d };
      }
      let ag = (a, b, c, d) =>
          af(a, c, d ? (d) => a[d][b] <= c : (d) => a[d][b] < c),
        ah = (a, b, c) => af(a, c, (d) => a[d][b] >= c);
      function ai(a, b, c) {
        let d = 0,
          e = a.length;
        for (; d < e && a[d] < b; ) d++;
        for (; e > d && a[e - 1] > c; ) e--;
        return d > 0 || e < a.length ? a.slice(d, e) : a;
      }
      let aj = ["push", "pop", "shift", "splice", "unshift"];
      function ak(a, b) {
        if (a._chartjs) {
          a._chartjs.listeners.push(b);
          return;
        }
        Object.defineProperty(a, "_chartjs", {
          configurable: !0,
          enumerable: !1,
          value: { listeners: [b] },
        }),
          aj.forEach((b) => {
            let c = "_onData" + B(b),
              d = a[b];
            Object.defineProperty(a, b, {
              configurable: !0,
              enumerable: !1,
              value(...b) {
                let e = d.apply(this, b);
                return (
                  a._chartjs.listeners.forEach((a) => {
                    "function" == typeof a[c] && a[c](...b);
                  }),
                  e
                );
              },
            });
          });
      }
      function al(a, b) {
        let c = a._chartjs;
        if (!c) return;
        let d = c.listeners,
          e = d.indexOf(b);
        -1 !== e && d.splice(e, 1),
          !(d.length > 0) &&
            (aj.forEach((b) => {
              delete a[b];
            }),
            delete a._chartjs);
      }
      function am(a) {
        let b = new Set(),
          c,
          d;
        for (c = 0, d = a.length; c < d; ++c) b.add(a[c]);
        return b.size === d ? a : Array.from(b);
      }
      let an =
        "undefined" == typeof window
          ? function (a) {
              return a();
            }
          : window.requestAnimationFrame;
      function ao(a, b, c) {
        let d = c || ((a) => Array.prototype.slice.call(a)),
          e = !1,
          f = [];
        return function (...c) {
          (f = d(c)),
            e ||
              ((e = !0),
              an.call(window, () => {
                (e = !1), a.apply(b, f);
              }));
        };
      }
      function ap(a, b) {
        let c;
        return function (...d) {
          return (
            b ? (clearTimeout(c), (c = setTimeout(a, b, d))) : a.apply(this, d),
            b
          );
        };
      }
      let aq = (a) =>
          "start" === a ? "left" : "end" === a ? "right" : "center",
        ar = (a, b, c) => ("start" === a ? b : "end" === a ? c : (b + c) / 2),
        as = (a, b, c, d) =>
          a === (d ? "left" : "right") ? c : "center" === a ? (b + c) / 2 : b;
      function at(a, b, c) {
        let d = b.length,
          e = 0,
          f = d;
        if (a._sorted) {
          let { iScale: g, _parsed: h } = a,
            i = g.axis,
            {
              min: j,
              max: k,
              minDefined: l,
              maxDefined: m,
            } = g.getUserBounds();
          l &&
            (e = ac(
              Math.min(
                ag(h, g.axis, j).lo,
                c ? d : ag(b, i, g.getPixelForValue(j)).lo
              ),
              0,
              d - 1
            )),
            (f = m
              ? ac(
                  Math.max(
                    ag(h, g.axis, k, !0).hi + 1,
                    c ? 0 : ag(b, i, g.getPixelForValue(k), !0).hi + 1
                  ),
                  e,
                  d
                ) - e
              : d - e);
        }
        return { start: e, count: f };
      }
      function au(a) {
        let { xScale: b, yScale: c, _scaleRanges: d } = a,
          e = { xmin: b.min, xmax: b.max, ymin: c.min, ymax: c.max };
        if (!d) return (a._scaleRanges = e), !0;
        let f =
          d.xmin !== b.min ||
          d.xmax !== b.max ||
          d.ymin !== c.min ||
          d.ymax !== c.max;
        return Object.assign(d, e), f;
      }
      let av = (a) => 0 === a || 1 === a,
        aw = (a, b, c) =>
          -(Math.pow(2, 10 * (a -= 1)) * Math.sin(((a - b) * H) / c)),
        ax = (a, b, c) =>
          Math.pow(2, -10 * a) * Math.sin(((a - b) * H) / c) + 1,
        ay = {
          linear: (a) => a,
          easeInQuad: (a) => a * a,
          easeOutQuad: (a) => -a * (a - 2),
          easeInOutQuad: (a) =>
            (a /= 0.5) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1),
          easeInCubic: (a) => a * a * a,
          easeOutCubic: (a) => (a -= 1) * a * a + 1,
          easeInOutCubic: (a) =>
            (a /= 0.5) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2),
          easeInQuart: (a) => a * a * a * a,
          easeOutQuart: (a) => -((a -= 1) * a * a * a - 1),
          easeInOutQuart: (a) =>
            (a /= 0.5) < 1
              ? 0.5 * a * a * a * a
              : -0.5 * ((a -= 2) * a * a * a - 2),
          easeInQuint: (a) => a * a * a * a * a,
          easeOutQuint: (a) => (a -= 1) * a * a * a * a + 1,
          easeInOutQuint: (a) =>
            (a /= 0.5) < 1
              ? 0.5 * a * a * a * a * a
              : 0.5 * ((a -= 2) * a * a * a * a + 2),
          easeInSine: (a) => -Math.cos(a * L) + 1,
          easeOutSine: (a) => Math.sin(a * L),
          easeInOutSine: (a) => -0.5 * (Math.cos(G * a) - 1),
          easeInExpo: (a) => (0 === a ? 0 : Math.pow(2, 10 * (a - 1))),
          easeOutExpo: (a) => (1 === a ? 1 : -Math.pow(2, -10 * a) + 1),
          easeInOutExpo: (a) =>
            av(a)
              ? a
              : a < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * a - 1))
              : 0.5 * (-Math.pow(2, -10 * (2 * a - 1)) + 2),
          easeInCirc: (a) => (a >= 1 ? a : -(Math.sqrt(1 - a * a) - 1)),
          easeOutCirc: (a) => Math.sqrt(1 - (a -= 1) * a),
          easeInOutCirc: (a) =>
            (a /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - a * a) - 1)
              : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1),
          easeInElastic: (a) => (av(a) ? a : aw(a, 0.075, 0.3)),
          easeOutElastic: (a) => (av(a) ? a : ax(a, 0.075, 0.3)),
          easeInOutElastic(a) {
            return av(a)
              ? a
              : a < 0.5
              ? 0.5 * aw(2 * a, 0.1125, 0.45)
              : 0.5 + 0.5 * ax(2 * a - 1, 0.1125, 0.45);
          },
          easeInBack(a) {
            return a * a * (2.70158 * a - 1.70158);
          },
          easeOutBack(a) {
            return (a -= 1) * a * (2.70158 * a + 1.70158) + 1;
          },
          easeInOutBack(a) {
            let b = 1.70158;
            return (a /= 0.5) < 1
              ? 0.5 * (a * a * (((b *= 1.525) + 1) * a - b))
              : 0.5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
          },
          easeInBounce: (a) => 1 - ay.easeOutBounce(1 - a),
          easeOutBounce(a) {
            return a < 0.36363636363636365
              ? 7.5625 * a * a
              : a < 0.7272727272727273
              ? 7.5625 * (a -= 0.5454545454545454) * a + 0.75
              : a < 0.9090909090909091
              ? 7.5625 * (a -= 0.8181818181818182) * a + 0.9375
              : 7.5625 * (a -= 0.9545454545454546) * a + 0.984375;
          },
          easeInOutBounce: (a) =>
            a < 0.5
              ? 0.5 * ay.easeInBounce(2 * a)
              : 0.5 * ay.easeOutBounce(2 * a - 1) + 0.5,
        };
      /*!
       * @kurkle/color v0.2.1
       * https://github.com/kurkle/color#readme
       * (c) 2022 Jukka Kurkela
       * Released under the MIT License
       */ function az(a) {
        return (a + 0.5) | 0;
      }
      let aA = (a, b, c) => Math.max(Math.min(a, c), b);
      function aB(a) {
        return aA(az(2.55 * a), 0, 255);
      }
      function aC(a) {
        return aA(az(255 * a), 0, 255);
      }
      function aD(a) {
        return aA(az(a / 2.55) / 100, 0, 1);
      }
      function aE(a) {
        return aA(az(100 * a), 0, 100);
      }
      let aF = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        aG = [..."0123456789ABCDEF"],
        aH = (a) => aG[15 & a],
        aI = (a) => aG[(240 & a) >> 4] + aG[15 & a],
        aJ = (a) => (240 & a) >> 4 == (15 & a),
        aK = (a) => aJ(a.r) && aJ(a.g) && aJ(a.b) && aJ(a.a),
        aL = (a, b) => (a < 255 ? b(a) : ""),
        aM =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function aN(a, b, c) {
        let d = b * Math.min(c, 1 - c),
          e = (b, e = (b + a / 30) % 12) =>
            c - d * Math.max(Math.min(e - 3, 9 - e, 1), -1);
        return [e(0), e(8), e(4)];
      }
      function aO(a, b, c) {
        let d = (d, e = (d + a / 60) % 6) =>
          c - c * b * Math.max(Math.min(e, 4 - e, 1), 0);
        return [d(5), d(3), d(1)];
      }
      function aP(a, b, c) {
        let d = aN(a, 1, 0.5),
          e;
        for (
          b + c > 1 && ((e = 1 / (b + c)), (b *= e), (c *= e)), e = 0;
          e < 3;
          e++
        )
          (d[e] *= 1 - b - c), (d[e] += b);
        return d;
      }
      function aQ(a) {
        let b = a.r / 255,
          c = a.g / 255,
          d = a.b / 255,
          e = Math.max(b, c, d),
          f = Math.min(b, c, d),
          g = (e + f) / 2,
          h,
          i,
          j;
        if (e !== f) {
          var k, l, m, n, o;
          (j = e - f),
            (i = g > 0.5 ? j / (2 - e - f) : j / (e + f)),
            (h =
              60 *
                (h =
                  ((k = b),
                  (l = c),
                  (m = d),
                  (n = j),
                  k === (o = e)
                    ? (l - m) / n + (l < m ? 6 : 0)
                    : l === o
                    ? (m - k) / n + 2
                    : (k - l) / n + 4)) +
              0.5);
        }
        return [0 | h, i || 0, g];
      }
      function aR(a, b, c, d) {
        return (Array.isArray(b) ? a(b[0], b[1], b[2]) : a(b, c, d)).map(aC);
      }
      function aS(a, b, c) {
        return aR(aN, a, b, c);
      }
      function aT(a) {
        return ((a % 360) + 360) % 360;
      }
      let aU = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        aV = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        },
        aW,
        aX =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        aY = (a) =>
          a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055,
        aZ = (a) =>
          a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
      function a$(a, b, c) {
        if (a) {
          let d = aQ(a);
          (d[b] = Math.max(0, Math.min(d[b] + d[b] * c, 0 === b ? 360 : 1))),
            (d = aS(d)),
            (a.r = d[0]),
            (a.g = d[1]),
            (a.b = d[2]);
        }
      }
      function a_(a, b) {
        return a ? Object.assign(b || {}, a) : a;
      }
      function a0(a) {
        var b = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(a)
            ? a.length >= 3 &&
              ((b = { r: a[0], g: a[1], b: a[2], a: 255 }),
              a.length > 3 && (b.a = aC(a[3])))
            : ((b = a_(a, { r: 0, g: 0, b: 0, a: 1 })).a = aC(b.a)),
          b
        );
      }
      class a1 {
        constructor(a) {
          if (a instanceof a1) return a;
          let b = typeof a,
            c;
          if ("object" === b) c = a0(a);
          else if ("string" === b) {
            var d, e, f, g;
            c =
              ((f = (d = a).length),
              "#" === d[0] &&
                (4 === f || 5 === f
                  ? (e = {
                      r: 255 & (17 * aF[d[1]]),
                      g: 255 & (17 * aF[d[2]]),
                      b: 255 & (17 * aF[d[3]]),
                      a: 5 === f ? 17 * aF[d[4]] : 255,
                    })
                  : (7 === f || 9 === f) &&
                    (e = {
                      r: (aF[d[1]] << 4) | aF[d[2]],
                      g: (aF[d[3]] << 4) | aF[d[4]],
                      b: (aF[d[5]] << 4) | aF[d[6]],
                      a: 9 === f ? (aF[d[7]] << 4) | aF[d[8]] : 255,
                    })),
              e ||
                (function (a) {
                  aW ||
                    ((aW = (function () {
                      let a = {},
                        b = Object.keys(aV),
                        c = Object.keys(aU),
                        d,
                        e,
                        f,
                        g,
                        h;
                      for (d = 0; d < b.length; d++) {
                        for (e = 0, g = h = b[d]; e < c.length; e++)
                          (f = c[e]), (h = h.replace(f, aU[f]));
                        (f = parseInt(aV[g], 16)),
                          (a[h] = [(f >> 16) & 255, (f >> 8) & 255, 255 & f]);
                      }
                      return a;
                    })()).transparent = [0, 0, 0, 0]);
                  let b = aW[a.toLowerCase()];
                  return (
                    b && {
                      r: b[0],
                      g: b[1],
                      b: b[2],
                      a: 4 === b.length ? b[3] : 255,
                    }
                  );
                })(a) ||
                ("r" === (g = a).charAt(0)
                  ? (function (a) {
                      let b = aX.exec(a),
                        c = 255,
                        d,
                        e,
                        f;
                      if (b) {
                        if (b[7] !== d) {
                          let g = +b[7];
                          c = b[8] ? aB(g) : aA(255 * g, 0, 255);
                        }
                        return (
                          (d = +b[1]),
                          (e = +b[3]),
                          (f = +b[5]),
                          (d = 255 & (b[2] ? aB(d) : aA(d, 0, 255))),
                          (e = 255 & (b[4] ? aB(e) : aA(e, 0, 255))),
                          (f = 255 & (b[6] ? aB(f) : aA(f, 0, 255))),
                          { r: d, g: e, b: f, a: c }
                        );
                      }
                    })(g)
                  : (function (a) {
                      var b, c, d, e, f, g;
                      let h = aM.exec(a),
                        i = 255,
                        j;
                      if (!h) return;
                      h[5] !== j && (i = h[6] ? aB(+h[5]) : aC(+h[5]));
                      let k = aT(+h[2]),
                        l = +h[3] / 100,
                        m = +h[4] / 100;
                      return {
                        r: (j =
                          "hwb" === h[1]
                            ? ((b = k), (c = l), aR(aP, b, c, (d = m)))
                            : "hsv" === h[1]
                            ? ((e = k), (f = l), aR(aO, e, f, (g = m)))
                            : aS(k, l, m))[0],
                        g: j[1],
                        b: j[2],
                        a: i,
                      };
                    })(g)));
          }
          (this._rgb = c), (this._valid = !!c);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var a = a_(this._rgb);
          return a && (a.a = aD(a.a)), a;
        }
        set rgb(a) {
          this._rgb = a0(a);
        }
        rgbString() {
          var a;
          return this._valid
            ? (a = this._rgb) &&
                (a.a < 255
                  ? `rgba(${a.r}, ${a.g}, ${a.b}, ${aD(a.a)})`
                  : `rgb(${a.r}, ${a.g}, ${a.b})`)
            : void 0;
        }
        hexString() {
          var a, b;
          return this._valid
            ? ((b = aK((a = this._rgb)) ? aH : aI),
              a ? "#" + b(a.r) + b(a.g) + b(a.b) + aL(a.a, b) : void 0)
            : void 0;
        }
        hslString() {
          return this._valid
            ? (function (a) {
                if (!a) return;
                let b = aQ(a),
                  c = b[0],
                  d = aE(b[1]),
                  e = aE(b[2]);
                return a.a < 255
                  ? `hsla(${c}, ${d}%, ${e}%, ${aD(a.a)})`
                  : `hsl(${c}, ${d}%, ${e}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(a, b) {
          if (a) {
            let c = this.rgb,
              d = a.rgb,
              e,
              f = b === e ? 0.5 : b,
              g = 2 * f - 1,
              h = c.a - d.a,
              i = ((g * h == -1 ? g : (g + h) / (1 + g * h)) + 1) / 2;
            (e = 1 - i),
              (c.r = 255 & (i * c.r + e * d.r + 0.5)),
              (c.g = 255 & (i * c.g + e * d.g + 0.5)),
              (c.b = 255 & (i * c.b + e * d.b + 0.5)),
              (c.a = f * c.a + (1 - f) * d.a),
              (this.rgb = c);
          }
          return this;
        }
        interpolate(a, b) {
          return (
            a &&
              (this._rgb = (function (a, b, c) {
                let d = aZ(aD(a.r)),
                  e = aZ(aD(a.g)),
                  f = aZ(aD(a.b));
                return {
                  r: aC(aY(d + c * (aZ(aD(b.r)) - d))),
                  g: aC(aY(e + c * (aZ(aD(b.g)) - e))),
                  b: aC(aY(f + c * (aZ(aD(b.b)) - f))),
                  a: a.a + c * (b.a - a.a),
                };
              })(this._rgb, a._rgb, b)),
            this
          );
        }
        clone() {
          return new a1(this.rgb);
        }
        alpha(a) {
          return (this._rgb.a = aC(a)), this;
        }
        clearer(a) {
          let b = this._rgb;
          return (b.a *= 1 - a), this;
        }
        greyscale() {
          let a = this._rgb,
            b = az(0.3 * a.r + 0.59 * a.g + 0.11 * a.b);
          return (a.r = a.g = a.b = b), this;
        }
        opaquer(a) {
          let b = this._rgb;
          return (b.a *= 1 + a), this;
        }
        negate() {
          let a = this._rgb;
          return (a.r = 255 - a.r), (a.g = 255 - a.g), (a.b = 255 - a.b), this;
        }
        lighten(a) {
          return a$(this._rgb, 2, a), this;
        }
        darken(a) {
          return a$(this._rgb, 2, -a), this;
        }
        saturate(a) {
          return a$(this._rgb, 1, a), this;
        }
        desaturate(a) {
          return a$(this._rgb, 1, -a), this;
        }
        rotate(a) {
          var b, c, d;
          return (
            (b = this._rgb),
            (c = a),
            ((d = aQ(b))[0] = aT(d[0] + c)),
            (d = aS(d)),
            (b.r = d[0]),
            (b.g = d[1]),
            (b.b = d[2]),
            this
          );
        }
      }
      function a2(a) {
        return new a1(a);
      }
      function a3(a) {
        if (a && "object" == typeof a) {
          let b = a.toString();
          return (
            "[object CanvasPattern]" === b || "[object CanvasGradient]" === b
          );
        }
        return !1;
      }
      function a4(a) {
        return a3(a) ? a : a2(a);
      }
      function a5(a) {
        return a3(a) ? a : a2(a).saturate(0.5).darken(0.1).hexString();
      }
      let a6 = Object.create(null),
        a7 = Object.create(null);
      function a8(a, b) {
        if (!b) return a;
        let c = b.split(".");
        for (let d = 0, e = c.length; d < e; ++d) {
          let f = c[d];
          a = a[f] || (a[f] = Object.create(null));
        }
        return a;
      }
      function a9(a, b, c) {
        return "string" == typeof b ? u(a8(a, b), c) : u(a8(a, ""), b);
      }
      var ba = new (class {
        constructor(a) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (a) =>
              a.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (a, b) => a5(b.backgroundColor)),
            (this.hoverBorderColor = (a, b) => a5(b.borderColor)),
            (this.hoverColor = (a, b) => a5(b.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(a);
        }
        set(a, b) {
          return a9(this, a, b);
        }
        get(a) {
          return a8(this, a);
        }
        describe(a, b) {
          return a9(a7, a, b);
        }
        override(a, b) {
          return a9(a6, a, b);
        }
        route(a, b, c, d) {
          let e = a8(this, a),
            f = a8(this, c),
            g = "_" + b;
          Object.defineProperties(e, {
            [g]: { value: e[b], writable: !0 },
            [b]: {
              enumerable: !0,
              get() {
                let a = this[g],
                  b = f[d];
                return i(a) ? Object.assign({}, b, a) : l(a, b);
              },
              set(a) {
                this[g] = a;
              },
            },
          });
        }
      })({
        _scriptable: (a) => !a.startsWith("on"),
        _indexable: (a) => "events" !== a,
        hover: { _fallback: "interaction" },
        interaction: { _scriptable: !1, _indexable: !1 },
      });
      function bb(a, b, c, d, e) {
        let f = b[e];
        return (
          f || ((f = b[e] = a.measureText(e).width), c.push(e)),
          f > d && (d = f),
          d
        );
      }
      function bc(a, b, c, d) {
        let e = ((d = d || {}).data = d.data || {}),
          f = (d.garbageCollect = d.garbageCollect || []);
        d.font !== b &&
          ((e = d.data = {}), (f = d.garbageCollect = []), (d.font = b)),
          a.save(),
          (a.font = b);
        let g = 0,
          i = c.length,
          j,
          k,
          l,
          m,
          n;
        for (j = 0; j < i; j++)
          if (void 0 !== (m = c[j]) && null !== m && !0 !== h(m))
            g = bb(a, e, f, g, m);
          else if (h(m))
            for (k = 0, l = m.length; k < l; k++)
              void 0 === (n = m[k]) ||
                null === n ||
                h(n) ||
                (g = bb(a, e, f, g, n));
        a.restore();
        let o = f.length / 2;
        if (o > c.length) {
          for (j = 0; j < o; j++) delete e[f[j]];
          f.splice(0, o);
        }
        return g;
      }
      function bd(a, b, c) {
        let d = a.currentDevicePixelRatio,
          e = 0 !== c ? Math.max(c / 2, 0.5) : 0;
        return Math.round((b - e) * d) / d + e;
      }
      function be(a, b) {
        (b = b || a.getContext("2d")).save(),
          b.resetTransform(),
          b.clearRect(0, 0, a.width, a.height),
          b.restore();
      }
      function bf(a, b, c, d) {
        bg(a, b, c, d, null);
      }
      function bg(a, b, c, d, e) {
        let f,
          g,
          h,
          i,
          j,
          k,
          l = b.pointStyle,
          m = b.rotation,
          n = b.radius,
          o = (m || 0) * K;
        if (
          l &&
          "object" == typeof l &&
          ("[object HTMLImageElement]" === (f = l.toString()) ||
            "[object HTMLCanvasElement]" === f)
        ) {
          a.save(),
            a.translate(c, d),
            a.rotate(o),
            a.drawImage(l, -l.width / 2, -l.height / 2, l.width, l.height),
            a.restore();
          return;
        }
        if (!isNaN(n) && !(n <= 0)) {
          switch ((a.beginPath(), l)) {
            default:
              e ? a.ellipse(c, d, e / 2, n, 0, 0, H) : a.arc(c, d, n, 0, H),
                a.closePath();
              break;
            case "triangle":
              a.moveTo(c + Math.sin(o) * n, d - Math.cos(o) * n),
                (o += N),
                a.lineTo(c + Math.sin(o) * n, d - Math.cos(o) * n),
                (o += N),
                a.lineTo(c + Math.sin(o) * n, d - Math.cos(o) * n),
                a.closePath();
              break;
            case "rectRounded":
              (j = 0.516 * n),
                (i = n - j),
                (g = Math.cos(o + M) * i),
                (h = Math.sin(o + M) * i),
                a.arc(c - g, d - h, j, o - G, o - L),
                a.arc(c + h, d - g, j, o - L, o),
                a.arc(c + g, d + h, j, o, o + L),
                a.arc(c - h, d + g, j, o + L, o + G),
                a.closePath();
              break;
            case "rect":
              if (!m) {
                (i = Math.SQRT1_2 * n),
                  (k = e ? e / 2 : i),
                  a.rect(c - k, d - i, 2 * k, 2 * i);
                break;
              }
              o += M;
            case "rectRot":
              (g = Math.cos(o) * n),
                (h = Math.sin(o) * n),
                a.moveTo(c - g, d - h),
                a.lineTo(c + h, d - g),
                a.lineTo(c + g, d + h),
                a.lineTo(c - h, d + g),
                a.closePath();
              break;
            case "crossRot":
              o += M;
            case "cross":
              (g = Math.cos(o) * n),
                (h = Math.sin(o) * n),
                a.moveTo(c - g, d - h),
                a.lineTo(c + g, d + h),
                a.moveTo(c + h, d - g),
                a.lineTo(c - h, d + g);
              break;
            case "star":
              (g = Math.cos(o) * n),
                (h = Math.sin(o) * n),
                a.moveTo(c - g, d - h),
                a.lineTo(c + g, d + h),
                a.moveTo(c + h, d - g),
                a.lineTo(c - h, d + g),
                (o += M),
                (g = Math.cos(o) * n),
                (h = Math.sin(o) * n),
                a.moveTo(c - g, d - h),
                a.lineTo(c + g, d + h),
                a.moveTo(c + h, d - g),
                a.lineTo(c - h, d + g);
              break;
            case "line":
              (g = e ? e / 2 : Math.cos(o) * n),
                (h = Math.sin(o) * n),
                a.moveTo(c - g, d - h),
                a.lineTo(c + g, d + h);
              break;
            case "dash":
              a.moveTo(c, d),
                a.lineTo(c + Math.cos(o) * n, d + Math.sin(o) * n);
          }
          a.fill(), b.borderWidth > 0 && a.stroke();
        }
      }
      function bh(a, b, c) {
        return (
          (c = c || 0.5),
          !b ||
            (a &&
              a.x > b.left - c &&
              a.x < b.right + c &&
              a.y > b.top - c &&
              a.y < b.bottom + c)
        );
      }
      function bi(a, b) {
        a.save(),
          a.beginPath(),
          a.rect(b.left, b.top, b.right - b.left, b.bottom - b.top),
          a.clip();
      }
      function bj(a) {
        a.restore();
      }
      function bk(a, b, c, d, e) {
        if (!b) return a.lineTo(c.x, c.y);
        if ("middle" === e) {
          let f = (b.x + c.x) / 2;
          a.lineTo(f, b.y), a.lineTo(f, c.y);
        } else ("after" === e) != !!d ? a.lineTo(b.x, c.y) : a.lineTo(c.x, b.y);
        a.lineTo(c.x, c.y);
      }
      function bl(a, b, c, d) {
        if (!b) return a.lineTo(c.x, c.y);
        a.bezierCurveTo(
          d ? b.cp1x : b.cp2x,
          d ? b.cp1y : b.cp2y,
          d ? c.cp2x : c.cp1x,
          d ? c.cp2y : c.cp1y,
          c.x,
          c.y
        );
      }
      function bm(a, b, c, d, e, f = {}) {
        let i = h(b) ? b : [b],
          j = f.strokeWidth > 0 && "" !== f.strokeColor,
          k,
          l;
        for (a.save(), a.font = e.string, bn(a, f), k = 0; k < i.length; ++k)
          (l = i[k]),
            j &&
              (f.strokeColor && (a.strokeStyle = f.strokeColor),
              g(f.strokeWidth) || (a.lineWidth = f.strokeWidth),
              a.strokeText(l, c, d, f.maxWidth)),
            a.fillText(l, c, d, f.maxWidth),
            bo(a, c, d, l, f),
            (d += e.lineHeight);
        a.restore();
      }
      function bn(a, b) {
        b.translation && a.translate(b.translation[0], b.translation[1]),
          g(b.rotation) || a.rotate(b.rotation),
          b.color && (a.fillStyle = b.color),
          b.textAlign && (a.textAlign = b.textAlign),
          b.textBaseline && (a.textBaseline = b.textBaseline);
      }
      function bo(a, b, c, d, e) {
        if (e.strikethrough || e.underline) {
          let f = a.measureText(d),
            g = b - f.actualBoundingBoxLeft,
            h = b + f.actualBoundingBoxRight,
            i = c - f.actualBoundingBoxAscent,
            j = c + f.actualBoundingBoxDescent,
            k = e.strikethrough ? (i + j) / 2 : j;
          (a.strokeStyle = a.fillStyle),
            a.beginPath(),
            (a.lineWidth = e.decorationWidth || 2),
            a.moveTo(g, k),
            a.lineTo(h, k),
            a.stroke();
        }
      }
      function bp(a, b) {
        let { x: c, y: d, w: e, h: f, radius: g } = b;
        a.arc(c + g.topLeft, d + g.topLeft, g.topLeft, -L, G, !0),
          a.lineTo(c, d + f - g.bottomLeft),
          a.arc(c + g.bottomLeft, d + f - g.bottomLeft, g.bottomLeft, G, L, !0),
          a.lineTo(c + e - g.bottomRight, d + f),
          a.arc(
            c + e - g.bottomRight,
            d + f - g.bottomRight,
            g.bottomRight,
            L,
            0,
            !0
          ),
          a.lineTo(c + e, d + g.topRight),
          a.arc(c + e - g.topRight, d + g.topRight, g.topRight, 0, -L, !0),
          a.lineTo(c + g.topLeft, d);
      }
      let bq = RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        br = RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
        ),
        bs = (a) => +a || 0;
      function bt(a, b) {
        let c = {},
          d = i(b),
          e = d ? Object.keys(b) : b,
          f = i(a) ? (d ? (c) => l(a[c], a[b[c]]) : (b) => a[b]) : () => a;
        for (let g of e) c[g] = bs(f(g));
        return c;
      }
      function bu(a) {
        return bt(a, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function bv(a) {
        return bt(a, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function bw(a) {
        let b = bu(a);
        return (b.width = b.left + b.right), (b.height = b.top + b.bottom), b;
      }
      function bx(a, b) {
        var c;
        (a = a || {}), (b = b || ba.font);
        let d = l(a.size, b.size);
        "string" == typeof d && (d = parseInt(d, 10));
        let e = l(a.style, b.style);
        e &&
          !("" + e).match(br) &&
          (console.warn('Invalid font style specified: "' + e + '"'), (e = ""));
        let f = {
          family: l(a.family, b.family),
          lineHeight: (function (a, b) {
            let c = ("" + a).match(bq);
            if (!c || "normal" === c[1]) return 1.2 * b;
            switch (((a = +c[2]), c[3])) {
              case "px":
                return a;
              case "%":
                a /= 100;
            }
            return b * a;
          })(l(a.lineHeight, b.lineHeight), d),
          size: d,
          style: e,
          weight: l(a.weight, b.weight),
          string: "",
        };
        return (
          (f.string =
            !(c = f) || g(c.size) || g(c.family)
              ? null
              : (c.style ? c.style + " " : "") +
                (c.weight ? c.weight + " " : "") +
                c.size +
                "px " +
                c.family),
          f
        );
      }
      function by(a, b, c, d) {
        let e = !0,
          f,
          g,
          i;
        for (f = 0, g = a.length; f < g; ++f)
          if (
            void 0 !== (i = a[f]) &&
            (void 0 !== b && "function" == typeof i && ((i = i(b)), (e = !1)),
            void 0 !== c && h(i) && ((i = i[c % i.length]), (e = !1)),
            void 0 !== i)
          )
            return d && !e && (d.cacheable = !1), i;
      }
      function bz(a, b, c) {
        let { min: d, max: e } = a,
          f = n(b, (e - d) / 2),
          g = (a, b) => (c && 0 === a ? 0 : a + b);
        return { min: g(d, -Math.abs(f)), max: g(e, f) };
      }
      function bA(a, b) {
        return Object.assign(Object.create(a), b);
      }
      function bB(a, b = [""], c = a, d, e = () => a[0]) {
        C(d) || (d = bR("_fallback", a));
        let f = {
          [Symbol.toStringTag]: "Object",
          _cacheable: !0,
          _scopes: a,
          _rootScopes: c,
          _fallback: d,
          _getTarget: e,
          override: (e) => bB([e, ...a], b, c, d),
        };
        return new Proxy(f, {
          deleteProperty(b, c) {
            return delete b[c], delete b._keys, delete a[0][c], !0;
          },
          get(c, d) {
            return bG(c, d, () => bQ(d, b, a, c));
          },
          getOwnPropertyDescriptor(a, b) {
            return Reflect.getOwnPropertyDescriptor(a._scopes[0], b);
          },
          getPrototypeOf() {
            return Reflect.getPrototypeOf(a[0]);
          },
          has(a, b) {
            return bS(a).includes(b);
          },
          ownKeys(a) {
            return bS(a);
          },
          set(a, b, c) {
            let d = a._storage || (a._storage = e());
            return (a[b] = d[b] = c), delete a._keys, !0;
          },
        });
      }
      function bC(a, b, c, d) {
        let e = {
          _cacheable: !1,
          _proxy: a,
          _context: b,
          _subProxy: c,
          _stack: new Set(),
          _descriptors: bD(a, d),
          setContext: (b) => bC(a, b, c, d),
          override: (e) => bC(a.override(e), b, c, d),
        };
        return new Proxy(e, {
          deleteProperty(b, c) {
            return delete b[c], delete a[c], !0;
          },
          get(a, b, c) {
            return bG(a, b, () => bH(a, b, c));
          },
          getOwnPropertyDescriptor(b, c) {
            return b._descriptors.allKeys
              ? Reflect.has(a, c)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(a, c);
          },
          getPrototypeOf() {
            return Reflect.getPrototypeOf(a);
          },
          has(b, c) {
            return Reflect.has(a, c);
          },
          ownKeys() {
            return Reflect.ownKeys(a);
          },
          set(b, c, d) {
            return (a[c] = d), delete b[c], !0;
          },
        });
      }
      function bD(a, b = { scriptable: !0, indexable: !0 }) {
        let {
          _scriptable: c = b.scriptable,
          _indexable: d = b.indexable,
          _allKeys: e = b.allKeys,
        } = a;
        return {
          allKeys: e,
          scriptable: c,
          indexable: d,
          isScriptable: D(c) ? c : () => c,
          isIndexable: D(d) ? d : () => d,
        };
      }
      let bE = (a, b) => (a ? a + B(b) : b),
        bF = (a, b) =>
          i(b) &&
          "adapters" !== a &&
          (null === Object.getPrototypeOf(b) || b.constructor === Object);
      function bG(a, b, c) {
        if (Object.prototype.hasOwnProperty.call(a, b)) return a[b];
        let d = c();
        return (a[b] = d), d;
      }
      function bH(a, b, c) {
        let { _proxy: d, _context: e, _subProxy: f, _descriptors: g } = a,
          i = d[b];
        return (
          D(i) && g.isScriptable(b) && (i = bI(b, i, a, c)),
          h(i) && i.length && (i = bJ(b, i, a, g.isIndexable)),
          bF(b, i) && (i = bC(i, e, f && f[b], g)),
          i
        );
      }
      function bI(a, b, c, d) {
        let { _proxy: e, _context: f, _subProxy: g, _stack: h } = c;
        if (h.has(a))
          throw Error(
            "Recursion detected: " + Array.from(h).join("->") + "->" + a
          );
        return (
          h.add(a),
          (b = b(f, g || d)),
          h.delete(a),
          bF(a, b) && (b = bN(e._scopes, e, a, b)),
          b
        );
      }
      function bJ(a, b, c, d) {
        let { _proxy: e, _context: f, _subProxy: g, _descriptors: h } = c;
        if (C(f.index) && d(a)) b = b[f.index % b.length];
        else if (i(b[0])) {
          let j = b,
            k = e._scopes.filter((a) => a !== j);
          for (let l of ((b = []), j)) {
            let m = bN(k, e, a, l);
            b.push(bC(m, f, g && g[a], h));
          }
        }
        return b;
      }
      function bK(a, b, c) {
        return D(a) ? a(b, c) : a;
      }
      let bL = (a, b) =>
        !0 === a ? b : "string" == typeof a ? y(b, a) : void 0;
      function bM(a, b, c, d, e) {
        for (let f of b) {
          let g = bL(c, f);
          if (g) {
            a.add(g);
            let h = bK(g._fallback, c, e);
            if (C(h) && h !== c && h !== d) return h;
          } else if (!1 === g && C(d) && c !== d) return null;
        }
        return !1;
      }
      function bN(a, b, c, d) {
        let e = b._rootScopes,
          f = bK(b._fallback, c, d),
          g = [...a, ...e],
          h = new Set();
        h.add(d);
        let i = bO(h, g, c, f || c, d);
        return (
          !(
            null === i ||
            (C(f) && f !== c && null === (i = bO(h, g, f, i, d)))
          ) && bB(Array.from(h), [""], e, f, () => bP(b, c, d))
        );
      }
      function bO(a, b, c, d, e) {
        for (; c; ) c = bM(a, b, c, d, e);
        return c;
      }
      function bP(a, b, c) {
        let d = a._getTarget();
        b in d || (d[b] = {});
        let e = d[b];
        return h(e) && i(c) ? c : e;
      }
      function bQ(a, b, c, d) {
        let e;
        for (let f of b)
          if (((e = bR(bE(f, a), c)), C(e)))
            return bF(a, e) ? bN(c, d, a, e) : e;
      }
      function bR(a, b) {
        for (let c of b) {
          if (!c) continue;
          let d = c[a];
          if (C(d)) return d;
        }
      }
      function bS(a) {
        let b = a._keys;
        return b || (b = a._keys = bT(a._scopes)), b;
      }
      function bT(a) {
        let b = new Set();
        for (let c of a)
          for (let d of Object.keys(c).filter((a) => !a.startsWith("_")))
            b.add(d);
        return Array.from(b);
      }
      function bU(a, b, c, d) {
        let { iScale: e } = a,
          { key: f = "r" } = this._parsing,
          g = Array(d),
          h,
          i,
          j,
          k;
        for (h = 0, i = d; h < i; ++h)
          (k = b[(j = h + c)]), (g[h] = { r: e.parse(y(k, f), j) });
        return g;
      }
      let bV = Number.EPSILON || 1e-14,
        bW = (a, b) => b < a.length && !a[b].skip && a[b],
        bX = (a) => ("x" === a ? "y" : "x");
      function bY(a, b, c, d) {
        let e = a.skip ? b : a,
          f = b,
          g = c.skip ? b : c,
          h = $(f, e),
          i = $(g, f),
          j = h / (h + i),
          k = i / (h + i);
        (j = isNaN(j) ? 0 : j), (k = isNaN(k) ? 0 : k);
        let l = d * j,
          m = d * k;
        return {
          previous: { x: f.x - l * (g.x - e.x), y: f.y - l * (g.y - e.y) },
          next: { x: f.x + m * (g.x - e.x), y: f.y + m * (g.y - e.y) },
        };
      }
      function bZ(a, b, c) {
        return Math.max(Math.min(a, c), b);
      }
      function b$(a, b, c, d, e) {
        let f, g, h, i;
        if (
          (b.spanGaps && (a = a.filter((a) => !a.skip)),
          "monotone" === b.cubicInterpolationMode)
        )
          !(function (a, b = "x") {
            let c = bX(b),
              d = a.length,
              e = Array(d).fill(0),
              f = Array(d),
              g,
              h,
              i,
              j = bW(a, 0);
            for (g = 0; g < d; ++g)
              if (((h = i), (i = j), (j = bW(a, g + 1)), i)) {
                if (j) {
                  let k = j[b] - i[b];
                  e[g] = 0 !== k ? (j[c] - i[c]) / k : 0;
                }
                f[g] = h
                  ? j
                    ? P(e[g - 1]) !== P(e[g])
                      ? 0
                      : (e[g - 1] + e[g]) / 2
                    : e[g - 1]
                  : e[g];
              }
            !(function (a, b, c) {
              let d = a.length,
                e,
                f,
                g,
                h,
                i,
                j = bW(a, 0);
              for (let k = 0; k < d - 1; ++k) {
                if (((i = j), (j = bW(a, k + 1)), i && j)) {
                  if (T(b[k], 0, bV)) {
                    c[k] = c[k + 1] = 0;
                    continue;
                  }
                  (e = c[k] / b[k]),
                    (f = c[k + 1] / b[k]),
                    (h = Math.pow(e, 2) + Math.pow(f, 2)),
                    !(h <= 9) &&
                      ((g = 3 / Math.sqrt(h)),
                      (c[k] = e * g * b[k]),
                      (c[k + 1] = f * g * b[k]));
                }
              }
            })(a, e, f),
              (function (a, b, c = "x") {
                let d = bX(c),
                  e = a.length,
                  f,
                  g,
                  h,
                  i = bW(a, 0);
                for (let j = 0; j < e; ++j) {
                  if (((g = h), (h = i), (i = bW(a, j + 1)), !h)) continue;
                  let k = h[c],
                    l = h[d];
                  g &&
                    ((f = (k - g[c]) / 3),
                    (h[`cp1${c}`] = k - f),
                    (h[`cp1${d}`] = l - f * b[j])),
                    i &&
                      ((f = (i[c] - k) / 3),
                      (h[`cp2${c}`] = k + f),
                      (h[`cp2${d}`] = l + f * b[j]));
                }
              })(a, f, b);
          })(a, e);
        else {
          let j = d ? a[a.length - 1] : a[0];
          for (f = 0, g = a.length; f < g; ++f)
            (i = bY(
              j,
              (h = a[f]),
              a[Math.min(f + 1, g - (d ? 0 : 1)) % g],
              b.tension
            )),
              (h.cp1x = i.previous.x),
              (h.cp1y = i.previous.y),
              (h.cp2x = i.next.x),
              (h.cp2y = i.next.y),
              (j = h);
        }
        b.capBezierPoints &&
          (function (a, b) {
            let c,
              d,
              e,
              f,
              g,
              h = bh(a[0], b);
            for (c = 0, d = a.length; c < d; ++c)
              (g = f),
                (f = h),
                (h = c < d - 1 && bh(a[c + 1], b)),
                f &&
                  ((e = a[c]),
                  g &&
                    ((e.cp1x = bZ(e.cp1x, b.left, b.right)),
                    (e.cp1y = bZ(e.cp1y, b.top, b.bottom))),
                  h &&
                    ((e.cp2x = bZ(e.cp2x, b.left, b.right)),
                    (e.cp2y = bZ(e.cp2y, b.top, b.bottom))));
          })(a, c);
      }
      function b_() {
        return "undefined" != typeof window && "undefined" != typeof document;
      }
      function b0(a) {
        let b = a.parentNode;
        return b && "[object ShadowRoot]" === b.toString() && (b = b.host), b;
      }
      function b1(a, b, c) {
        let d;
        return (
          "string" == typeof a
            ? ((d = parseInt(a, 10)),
              -1 !== a.indexOf("%") && (d = (d / 100) * b.parentNode[c]))
            : (d = a),
          d
        );
      }
      let b2 = (a) => window.getComputedStyle(a, null),
        b3 = ["top", "right", "bottom", "left"];
      function b4(a, b, c) {
        let d = {};
        c = c ? "-" + c : "";
        for (let e = 0; e < 4; e++) {
          let f = b3[e];
          d[f] = parseFloat(a[b + "-" + f + c]) || 0;
        }
        return (d.width = d.left + d.right), (d.height = d.top + d.bottom), d;
      }
      let b5 = (a, b, c) => (a > 0 || b > 0) && (!c || !c.shadowRoot);
      function b6(a, b) {
        if ("native" in a) return a;
        let { canvas: c, currentDevicePixelRatio: d } = b,
          e = b2(c),
          f = "border-box" === e.boxSizing,
          g = b4(e, "padding"),
          h = b4(e, "border", "width"),
          {
            x: i,
            y: j,
            box: k,
          } = (function (a, b) {
            let c = a.touches,
              d = c && c.length ? c[0] : a,
              { offsetX: e, offsetY: f } = d,
              g = !1,
              h,
              i;
            if (b5(e, f, a.target)) (h = e), (i = f);
            else {
              let j = b.getBoundingClientRect();
              (h = d.clientX - j.left), (i = d.clientY - j.top), (g = !0);
            }
            return { x: h, y: i, box: g };
          })(a, c),
          l = g.left + (k && h.left),
          m = g.top + (k && h.top),
          { width: n, height: o } = b;
        return (
          f && ((n -= g.width + h.width), (o -= g.height + h.height)),
          {
            x: Math.round((((i - l) / n) * c.width) / d),
            y: Math.round((((j - m) / o) * c.height) / d),
          }
        );
      }
      let b7 = (a) => Math.round(10 * a) / 10;
      function b8(a, b, c, d) {
        let e = b2(a),
          f = b4(e, "margin"),
          g = b1(e.maxWidth, a, "clientWidth") || J,
          h = b1(e.maxHeight, a, "clientHeight") || J,
          i = (function (a, b, c) {
            let d, e;
            if (void 0 === b || void 0 === c) {
              let f = b0(a);
              if (f) {
                let g = f.getBoundingClientRect(),
                  h = b2(f),
                  i = b4(h, "border", "width"),
                  j = b4(h, "padding");
                (b = g.width - j.width - i.width),
                  (c = g.height - j.height - i.height),
                  (d = b1(h.maxWidth, f, "clientWidth")),
                  (e = b1(h.maxHeight, f, "clientHeight"));
              } else (b = a.clientWidth), (c = a.clientHeight);
            }
            return { width: b, height: c, maxWidth: d || J, maxHeight: e || J };
          })(a, b, c),
          { width: j, height: k } = i;
        if ("content-box" === e.boxSizing) {
          let l = b4(e, "border", "width"),
            m = b4(e, "padding");
          (j -= m.width + l.width), (k -= m.height + l.height);
        }
        return (
          (j = Math.max(0, j - f.width)),
          (k = Math.max(0, d ? Math.floor(j / d) : k - f.height)),
          (j = b7(Math.min(j, g, i.maxWidth))),
          (k = b7(Math.min(k, h, i.maxHeight))),
          j && !k && (k = b7(j / 2)),
          { width: j, height: k }
        );
      }
      function b9(a, b, c) {
        let d = b || 1,
          e = Math.floor(a.height * d),
          f = Math.floor(a.width * d);
        (a.height = e / d), (a.width = f / d);
        let g = a.canvas;
        return (
          g.style &&
            (c || (!g.style.height && !g.style.width)) &&
            ((g.style.height = `${a.height}px`),
            (g.style.width = `${a.width}px`)),
          (a.currentDevicePixelRatio !== d ||
            g.height !== e ||
            g.width !== f) &&
            ((a.currentDevicePixelRatio = d),
            (g.height = e),
            (g.width = f),
            a.ctx.setTransform(d, 0, 0, d, 0, 0),
            !0)
        );
      }
      let ca = (function () {
        let a = !1;
        try {
          let b = {
            get passive() {
              return (a = !0), !1;
            },
          };
          window.addEventListener("test", null, b),
            window.removeEventListener("test", null, b);
        } catch (c) {}
        return a;
      })();
      function cb(a, b) {
        var c, d;
        let e = ((c = a), (d = b), b2(c).getPropertyValue(d)),
          f = e && e.match(/^(\d+)(\.\d+)?px$/);
        return f ? +f[1] : void 0;
      }
      function cc(a, b, c, d) {
        return { x: a.x + c * (b.x - a.x), y: a.y + c * (b.y - a.y) };
      }
      function cd(a, b, c, d) {
        return {
          x: a.x + c * (b.x - a.x),
          y:
            "middle" === d
              ? c < 0.5
                ? a.y
                : b.y
              : "after" === d
              ? c < 1
                ? a.y
                : b.y
              : c > 0
              ? b.y
              : a.y,
        };
      }
      function ce(a, b, c, d) {
        let e = { x: a.cp2x, y: a.cp2y },
          f = { x: b.cp1x, y: b.cp1y },
          g = cc(a, e, c),
          h = cc(e, f, c),
          i = cc(f, b, c),
          j = cc(g, h, c),
          k = cc(h, i, c);
        return cc(j, k, c);
      }
      let cf = new Map();
      function cg(a, b, c) {
        return (function (a, b) {
          b = b || {};
          let c = a + JSON.stringify(b),
            d = cf.get(c);
          return d || ((d = new Intl.NumberFormat(a, b)), cf.set(c, d)), d;
        })(b, c).format(a);
      }
      function ch(a, b, c) {
        var d, e;
        return a
          ? ((d = b),
            (e = c),
            {
              x(a) {
                return d + d + e - a;
              },
              setWidth(a) {
                e = a;
              },
              textAlign(a) {
                return "center" === a ? a : "right" === a ? "left" : "right";
              },
              xPlus(a, b) {
                return a - b;
              },
              leftForLtr(a, b) {
                return a - b;
              },
            })
          : {
              x(a) {
                return a;
              },
              setWidth(a) {},
              textAlign(a) {
                return a;
              },
              xPlus(a, b) {
                return a + b;
              },
              leftForLtr(a, b) {
                return a;
              },
            };
      }
      function ci(a, b) {
        let c, d;
        ("ltr" === b || "rtl" === b) &&
          ((d = [
            (c = a.canvas.style).getPropertyValue("direction"),
            c.getPropertyPriority("direction"),
          ]),
          c.setProperty("direction", b, "important"),
          (a.prevTextDirection = d));
      }
      function cj(a, b) {
        void 0 !== b &&
          (delete a.prevTextDirection,
          a.canvas.style.setProperty("direction", b[0], b[1]));
      }
      function ck(a) {
        return "angle" === a
          ? { between: ab, compare: _, normalize: aa }
          : { between: ae, compare: (a, b) => a - b, normalize: (a) => a };
      }
      function cl({ start: a, end: b, count: c, loop: d, style: e }) {
        return {
          start: a % c,
          end: b % c,
          loop: d && (b - a + 1) % c == 0,
          style: e,
        };
      }
      function cm(a, b, c) {
        if (!c) return [a];
        let { property: d, start: e, end: f } = c,
          g = b.length,
          { compare: h, between: i, normalize: j } = ck(d),
          {
            start: k,
            end: l,
            loop: m,
            style: n,
          } = (function (a, b, c) {
            let { property: d, start: e, end: f } = c,
              { between: g, normalize: h } = ck(d),
              i = b.length,
              { start: j, end: k, loop: l } = a,
              m,
              n;
            if (l) {
              for (
                j += i, k += i, m = 0, n = i;
                m < n && g(h(b[j % i][d]), e, f);
                ++m
              )
                j--, k--;
              (j %= i), (k %= i);
            }
            return (
              k < j && (k += i), { start: j, end: k, loop: l, style: a.style }
            );
          })(a, b, c),
          o = [],
          p = !1,
          q = null,
          r,
          s,
          t,
          u = () => i(e, t, r) && 0 !== h(e, t),
          v = () => 0 === h(f, r) || i(f, t, r),
          w = () => p || u(),
          x = () => !p || v();
        for (let y = k, z = k; y <= l; ++y)
          !(s = b[y % g]).skip &&
            (r = j(s[d])) !== t &&
            ((p = i(r, e, f)),
            null === q && w() && (q = 0 === h(r, e) ? y : z),
            null !== q &&
              x() &&
              (o.push(cl({ start: q, end: y, loop: m, count: g, style: n })),
              (q = null)),
            (z = y),
            (t = r));
        return (
          null !== q &&
            o.push(cl({ start: q, end: l, loop: m, count: g, style: n })),
          o
        );
      }
      function cn(a, b) {
        let c = [],
          d = a.segments;
        for (let e = 0; e < d.length; e++) {
          let f = cm(d[e], a.points, b);
          f.length && c.push(...f);
        }
        return c;
      }
      function co(a, b) {
        let c = a.points,
          d = a.options.spanGaps,
          e = c.length;
        if (!e) return [];
        let f = !!a._loop,
          { start: g, end: h } = (function (a, b, c, d) {
            let e = 0,
              f = b - 1;
            if (c && !d) for (; e < b && !a[e].skip; ) e++;
            for (; e < b && a[e].skip; ) e++;
            for (e %= b, c && (f += e); f > e && a[f % b].skip; ) f--;
            return (f %= b), { start: e, end: f };
          })(c, e, f, d);
        if (!0 === d) return cp(a, [{ start: g, end: h, loop: f }], c, b);
        let i = !!a._fullLoop && 0 === g && h === e - 1;
        return cp(
          a,
          (function (a, b, c, d) {
            let e = a.length,
              f = [],
              g = b,
              h = a[b],
              i;
            for (i = b + 1; i <= c; ++i) {
              let j = a[i % e];
              j.skip || j.stop
                ? h.skip ||
                  ((d = !1),
                  f.push({ start: b % e, end: (i - 1) % e, loop: d }),
                  (b = g = j.stop ? i : null))
                : ((g = i), h.skip && (b = i)),
                (h = j);
            }
            return (
              null !== g && f.push({ start: b % e, end: g % e, loop: d }), f
            );
          })(c, g, h < g ? h + e : h, i),
          c,
          b
        );
      }
      function cp(a, b, c, d) {
        return d && d.setContext && c ? cq(a, b, c, d) : b;
      }
      function cq(a, b, c, d) {
        let e = a._chart.getContext(),
          f = cr(a.options),
          {
            _datasetIndex: g,
            options: { spanGaps: h },
          } = a,
          i = c.length,
          j = [],
          k = f,
          l = b[0].start,
          m = l;
        function n(a, b, d, e) {
          let f = h ? -1 : 1;
          if (a !== b) {
            for (a += i; c[a % i].skip; ) a -= f;
            for (; c[b % i].skip; ) b += f;
            a % i != b % i &&
              (j.push({ start: a % i, end: b % i, loop: d, style: e }),
              (k = e),
              (l = b % i));
          }
        }
        for (let o of b) {
          let p = c[(l = h ? l : o.start) % i],
            q;
          for (m = l + 1; m <= o.end; m++) {
            let r = c[m % i];
            (q = cr(
              d.setContext(
                bA(e, {
                  type: "segment",
                  p0: p,
                  p1: r,
                  p0DataIndex: (m - 1) % i,
                  p1DataIndex: m % i,
                  datasetIndex: g,
                })
              )
            )),
              cs(q, k) && n(l, m - 1, o.loop, k),
              (p = r),
              (k = q);
          }
          l < m - 1 && n(l, m - 1, o.loop, k);
        }
        return j;
      }
      function cr(a) {
        return {
          backgroundColor: a.backgroundColor,
          borderCapStyle: a.borderCapStyle,
          borderDash: a.borderDash,
          borderDashOffset: a.borderDashOffset,
          borderJoinStyle: a.borderJoinStyle,
          borderWidth: a.borderWidth,
          borderColor: a.borderColor,
        };
      }
      function cs(a, b) {
        return b && JSON.stringify(a) !== JSON.stringify(b);
      }
    },
  },
]);
