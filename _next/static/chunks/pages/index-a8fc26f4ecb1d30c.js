(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(45930);
        },
      ]);
    },
    45930: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return O;
          },
        });
      var d = c(85893),
        e = c(47568),
        f = c(14924),
        g = c(26042),
        h = c(69396),
        i = c(34051),
        j = c.n(i),
        k = c(67294),
        l = c(9669),
        m = c.n(l);
      c(29217), c(86961);
      var n = c(55376),
        o = function (a) {
          var b = a.borderColor,
            c = a.backgroundColor,
            e = a.dataset,
            f = a.hasPercentage,
            g = a.min,
            h = a.max,
            i = a.stepSize,
            j = a.pegLine,
            k = a.decimals;
          if (!e) return null;
          var l = e.labels,
            m = {
              labels: l,
              datasets: [
                {
                  label: "",
                  data: e.values,
                  borderColor: b,
                  borderWidth: 1,
                  fill: !0,
                  backgroundColor: c,
                  pointRadius: 0,
                },
                j
                  ? {
                      label: "Peg",
                      data: l.map(function () {
                        return 1;
                      }),
                      borderColor: "#e8e8e8",
                      borderWidth: 2,
                      pointRadius: 0,
                    }
                  : {},
              ],
            },
            o = {
              responsive: !0,
              maintainAspectRatio: !1,
              plugins: { legend: { display: !1 }, title: { display: !1 } },
              scales: {
                x: {
                  type: "time",
                  grid: { drawOnChartArea: !1 },
                  ticks: { autoSkip: !0, maxTicksLimit: 7, maxRotation: 0 },
                },
                y: {
                  min: g,
                  max: h,
                  grid: { drawOnChartArea: !1 },
                  ticks: {
                    beginAtZero: !0,
                    stepSize: i || 50,
                    maxTicksLimit: 5,
                    callback: function (a) {
                      return a.toFixed(k ? 2 : 0) + (f ? "%" : "");
                    },
                  },
                },
              },
            };
          return (0, d.jsx)(n.kL, { type: "line", data: m, options: o });
        },
        p = o,
        q = c(21043),
        r = c(9473),
        s = c(10253),
        t = c(2593),
        u = c(16766),
        v = c(10579),
        w = c(64487);
      function x(a, b) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = (0, e.Z)(
          j().mark(function a(b, c) {
            var d,
              e,
              f,
              g,
              h,
              i,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              x,
              y,
              z,
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R;
            return j().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (a.next = 3),
                        Promise.all([
                          b.activePool.functions.getAssetBalance(c.ETH),
                          (0, v.lO)(b, c.renBTC),
                          (0, v.lO)(b, c.ETH),
                          (0, v.lc)(b, c.renBTC),
                          (0, v.lc)(b, c.ETH),
                          b.activePool.functions.getAssetBalance(c.renBTC),
                          b.StabilityPoolETH.functions.getTotalDCHFDeposits(),
                          b.StabilityPoolBTC.functions.getTotalDCHFDeposits(),
                          b.DCHFToken.functions.totalSupply(),
                        ])
                      );
                    case 3:
                      return (
                        (d = a.sent),
                        (e = (0, s.Z)(d, 9)),
                        (f = (0, s.Z)(e[0], 1)),
                        (g = f[0]),
                        (h = (0, s.Z)(e[1], 1)),
                        (i = h[0]),
                        (k = (0, s.Z)(e[2], 1)),
                        (l = k[0]),
                        (m = (0, s.Z)(e[3], 1)),
                        (n = m[0]),
                        (o = (0, s.Z)(e[4], 1)),
                        (p = o[0]),
                        (q = (0, s.Z)(e[5], 1)),
                        (r = q[0]),
                        (x = (0, s.Z)(e[6], 1)),
                        (y = x[0]),
                        (z = (0, s.Z)(e[7], 1)),
                        (A = z[0]),
                        (B = (0, s.Z)(e[8], 1)),
                        (C = B[0]),
                        (a.t0 = s.Z),
                        (a.next = 8),
                        b.troveManagerHelpers.functions.getTCR(
                          c.ETH,
                          l.toString()
                        )
                      );
                    case 8:
                      return (
                        (a.t1 = a.sent),
                        (E = (D = (0, a.t0)(a.t1, 1))[0]),
                        (a.t2 = s.Z),
                        (a.next = 14),
                        b.troveManagerHelpers.functions.getTCR(
                          c.renBTC,
                          i.toString()
                        )
                      );
                    case 14:
                      return (
                        (a.t3 = a.sent),
                        (G = (F = (0, a.t2)(a.t3, 1))[0]),
                        (H = i.mul(n || t.O$.from("0"))),
                        (I = l.mul(p || t.O$.from("0"))),
                        (J = H.add(I).div(t.O$.from((0, u.AY)(1e18)))),
                        (K = +p ? E : t.O$.from("0")),
                        (L = +n ? G : t.O$.from("0")),
                        (M = +I / +H.add(I)),
                        (N = +H / +H.add(I)),
                        (O = (+K * M) / 1e18),
                        (P = (+L * N) / 1e18),
                        (Q = (O + P) * 100),
                        (R = {
                          stakedETH: g,
                          priceBTC: i,
                          priceETH: l,
                          tvl: J,
                          stakedBTC: r,
                          pooledDCHF: y.add(A),
                          totalSupplyDCHF: C,
                          collRatio: (0, u.Md)((0, u.AY)(1e18 * Q)),
                        }),
                        a.abrupt("return", R)
                      );
                    case 31:
                      (a.prev = 31),
                        (a.t4 = a.catch(0)),
                        w.Tb(a.t4),
                        console.error("Fetch Initial Data error ->", a.t4);
                    case 35:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 31]]
            );
          })
        )).apply(this, arguments);
      }
      var z = c(78488),
        A = c(80069);
      function B(a) {
        var b = (0, A.Z)(+(0, u.uf)(a.tvl), 0),
          c = (0, A.x)((0, u.uf)(a.stakedETH)),
          d = (0, A.x)((0, u.uf)(a.stakedBTC)),
          e = (0, A.x)((0, u.uf)(a.totalSupplyDCHF), 0),
          f = (0, A.x)((0, u.uf)(a.pooledDCHF), 0),
          g = (0, A.x)((0, u.uf)(a.collRatio));
        return {
          tvl: b,
          stakedETH: c,
          stakedBTC: d,
          totalSupplyDCHF: e,
          pooledDCHF: f,
          collRatio: g,
        };
      }
      var C = [
          { title: "BTC", price: "19’042", image: "img/cryptos/bitcoin.svg" },
          { title: "ETH", price: "1’042", image: "img/cryptos/ethereum.svg" },
          { title: "USDT", price: "1.01", image: "img/cryptos/tether.svg" },
          { title: "SOL", price: "34.01", image: "img/cryptos/solana.svg" },
          { title: "DOT", price: "6.42", image: "img/cryptos/polkadot.svg" },
          { title: "TRX", price: "0.35", image: "img/cryptos/tron.svg" },
          {
            title: "BUSD",
            price: "1.05",
            image: "img/cryptos/binance-usd.svg",
          },
          {
            title: "GHNY",
            price: "1.05",
            image:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/21198.png",
          },
          {
            title: "MATIC",
            price: "1.05",
            image:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
          },
          {
            title: "DOGE",
            price: "1.05",
            image: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
          },
          {
            title: "XRP",
            price: "1.05",
            image: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
          },
          {
            title: "AVAX",
            price: "1.05",
            image:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
          },
          {
            title: "USDC",
            price: "1.05",
            image:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
          },
          {
            title: "LUSD",
            price: "1.05",
            image:
              "https://s2.coinmarketcap.com/static/img/coins/64x64/9566.png",
          },
        ],
        D = c(97005),
        E = function (a) {
          var b = a.tokenPrices;
          return (0, d.jsx)(D.Z, {
            style: { background: "transparent" },
            children: C.map(function (a, c) {
              var e;
              return (0,
              d.jsxs)("div", { style: { display: "flex !important", flexDirection: "row" }, className: "card-coinmarket item", children: [(0, d.jsx)("div", { className: "item-logo", children: (0, d.jsx)("img", { src: null == a ? void 0 : a.image, alt: "wbtc", style: { maxWidth: "20px" }, height: "20px" }) }), (0, d.jsxs)("div", { className: "item-content", children: [(0, d.jsx)("h1", { children: a.title }), (0, d.jsxs)("p", { children: [(0, A.x)(null !== (e = null == b ? void 0 : b[a.title]) && void 0 !== e ? e : 0), " ", (0, d.jsx)("span", { children: "CHF" })] })] })] }, c);
            }),
          });
        },
        F = c(77058),
        G = c(41664),
        H = c.n(G),
        I = c(67644),
        J = c(1844),
        K = {
          tvl: "-",
          stakedETH: "-",
          stakedBTC: "-",
          totalSupplyDCHF: "-",
          pooledDCHF: "-",
          collRatio: "-",
        };
      function L(a) {
        return a.reduce(function (a, b) {
          return (0, h.Z)((0, g.Z)({}, a), (0, f.Z)({}, b.symbol, b.value));
        }, {});
      }
      function M() {
        return (M = (0, e.Z)(
          j().mark(function a(b) {
            var c;
            return j().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (a.next = 2),
                      m().get("".concat(z.UF, "/current-data/price"))
                    );
                  case 2:
                    b(L((c = a.sent).data));
                  case 4:
                  case "end":
                    return a.stop();
                }
            }, a);
          })
        )).apply(this, arguments);
      }
      function N() {
        var a = (0, q.c)(),
          b = a.contracts,
          c = a.addresses,
          f = (0, k.useState)(),
          g = f[0],
          h = f[1],
          i = (0, r.I0)(),
          l = (0, r.v9)(function (a) {
            return a.body.isNightMode;
          }),
          m = (0, r.v9)(z.Yu),
          n = (0, k.useState)(K),
          o = n[0],
          s = n[1],
          t = (0, F.$)().t;
        function u() {
          return (u = (0, e.Z)(
            j().mark(function a() {
              var d;
              return j().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (a.next = 2), x(b, c);
                    case 2:
                      (d = a.sent) && s(B(d));
                    case 4:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )).apply(this, arguments);
        }
        (0, k.useEffect)(function () {
          !(function () {
            return u.apply(this, arguments);
          })(),
            i((0, z.Fu)()),
            (function (a) {
              M.apply(this, arguments);
            })(h);
        }, []);
        var v = m.eth.values[m.eth.values.length - 1],
          w = m.btc.values[m.btc.values.length - 1],
          y = m.eur.values[m.eur.values.length - 1],
          C = m.usd.values[m.usd.values.length - 1],
          D = m.dchf.values[m.dchf.values.length - 1],
          G = o.tvl,
          L = o.stakedETH,
          N = o.stakedBTC,
          O = o.totalSupplyDCHF,
          P = o.pooledDCHF,
          Q = o.collRatio;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("div", {
              className: "row",
              children: (0, d.jsx)("div", {
                className: "col-md-12 col-lg-12",
                children: (0, d.jsx)("div", {
                  id: "gallery",
                  className: "card card-coinmarket",
                  children: (0, d.jsx)(E, { tokenPrices: g }),
                }),
              }),
            }),
            (0, d.jsx)("div", {
              className: "row",
              children: (0, d.jsx)("div", {
                className: "col-md-12",
                children: (0, d.jsx)("div", {
                  className: "main-page-title",
                  children: (0, d.jsx)("h1", { children: t("dashboard") }),
                }),
              }),
            }),
            (0, d.jsx)("div", {
              className: "row",
              children: (0, d.jsx)("div", {
                className: "col-md-12 col-lg-12",
                children: (0, d.jsx)("div", {
                  className: "card card-info",
                  children: (0, d.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, d.jsx)("div", {
                        className: "col-6 col-md-6 col-lg-4",
                        children: (0, d.jsxs)("div", {
                          className: "card-info-item",
                          children: [
                            (0, d.jsx)("h1", { children: "TVL" }),
                            (0, d.jsx)("p", { children: 0 }),
                          ],
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: "col-6 col-md-6 col-lg-4",
                        children: (0, d.jsxs)("div", {
                          className: "card-info-item",
                          children: [
                            (0, d.jsx)("h1", { children: t("ethStaked") }),
                            (0, d.jsxs)("div", {
                              className: "card-info-item-wrap",
                              children: [
                                (0, d.jsx)("img", {
                                  className: "icon-line",
                                  src: "/img/icons/eth-shape.svg",
                                  alt: "eth-logo",
                                  style: { padding: "4px", width: "24px" },
                                }),
                                (0, d.jsx)("p", { children: 0 }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: "col-6 col-md-6 col-lg-4",
                        children: (0, d.jsxs)("div", {
                          className: "card-info-item",
                          children: [
                            (0, d.jsx)("h1", { children: t("wbtcStaked") }),
                            (0, d.jsxs)("div", {
                              className: "card-info-item-wrap",
                              children: [
                                (0, d.jsx)("svg", {
                                  className: "icon-bitcoin",
                                  style: { height: 20, width: 15 },
                                  children: (0, d.jsx)("use", {
                                    xlinkHref: "/icons/icons.svg#icon-bitcoin",
                                  }),
                                }),
                                (0, d.jsx)("p", { children: 0 }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: "col-6 col-md-6 col-lg-4",
                        children: (0, d.jsxs)("div", {
                          className: "card-info-item",
                          children: [
                            (0, d.jsx)("h1", {
                              children: t("dchfCirculation"),
                            }),
                            (0, d.jsxs)("div", {
                              className: "card-info-item-wrap",
                              children: [
                                (0, d.jsx)("img", {
                                  className: "icon-line",
                                  src: "/img/logos/logo-small.svg",
                                  alt: "dchf-logo",
                                  style: {
                                    filter: "grayscale(1)",
                                    padding: "4px",
                                    width: "28px",
                                  },
                                }),
                                (0, d.jsx)("p", { children: 0 }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: "col-6 col-md-6 col-lg-4",
                        children: (0, d.jsxs)("div", {
                          className: "card-info-item",
                          children: [
                            (0, d.jsx)("h1", {
                              children: t("dchfStabilityPool"),
                            }),
                            (0, d.jsxs)("div", {
                              className: "card-info-item-wrap",
                              children: [
                                (0, d.jsx)("img", {
                                  className: "icon-line",
                                  src: "/img/logos/logo-small.svg",
                                  alt: "dchf-logo",
                                  style: {
                                    filter: "grayscale(1)",
                                    padding: "4px",
                                    width: "28px",
                                  },
                                }),
                                (0, d.jsxs)("p", { children: [0, " "] }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: "col-6 col-md-6 col-lg-4",
                        children: (0, d.jsxs)("div", {
                          className: "card-info-item",
                          children: [
                            (0, d.jsx)("h1", {
                              children: t("totalCollateralRatio"),
                            }),
                            (0, d.jsxs)("div", {
                              className: "card-info-item-wrap",
                              children: [
                                (0, d.jsxs)("p", { children: [0, "%"] }),
                                (0, d.jsx)("span", {
                                  className: "status active",
                                  style: { backgroundColor: (0, I.L)(+Q) },
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, d.jsxs)("div", {
              className: "row",
              children: [
                (0, d.jsx)("div", {
                  className: "col-md-6 col-lg-6",
                  children: (0, d.jsxs)("div", {
                    className: "card card-chart",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "card-header",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "card-header-left",
                            children: [
                              (0, d.jsx)("h1", {
                                children: t("totalCollateralETH"),
                              }),
                              (0, d.jsx)(J.u, {
                                text: "The Total Collateral Ratio states how much more ETH are deposited that DCHFs borrowed. The Total Collateral Ratio aims to be at 150% at all times.",
                              }),
                            ],
                          }),
                        //   (0, d.jsxs)("p", { children: [(0, A.x)(v), " %"] }),
                          (0, d.jsxs)("p", { children: [ 0, " %"] }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "card-body",
                        children: (0, d.jsx)(p, {
                          stepSize: 5,
                          min: 100,
                          max: 700,
                          dataset: m.eth,
                          borderColor: l ? "#bf1304" : "#c32016",
                          backgroundColor: l
                            ? "rgba(191, 32, 54, 0.2)"
                            : "#f4dbde",
                          hasPercentage: !0,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, d.jsx)("div", {
                  className: "col-md-6 col-lg-6",
                  children: (0, d.jsxs)("div", {
                    className: "card card-chart",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "card-header",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "card-header-left",
                            children: [
                              (0, d.jsx)("h1", {
                                children: t("totalCollateralWBTC"),
                              }),
                              (0, d.jsx)(J.u, {
                                text: "The Total Collateral Ratio states how much more BTC are deposited that DCHFs borrowed. The Total Collateral Ratio aims to be at 150% at all times.",
                              }),
                            ],
                          }),
                        //   (0, d.jsxs)("p", { children: [(0, A.x)(w), " %"] }),
                          (0, d.jsxs)("p", { children: [ 0, " %"] }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "card-body",
                        children: (0, d.jsx)(p, {
                          stepSize: 5,
                          min: 100,
                          max: 1e3,
                          dataset: m.btc,
                          borderColor: "#4064ef",
                          backgroundColor: l
                            ? "rgba(24, 92, 238, 0.2)"
                            : "#d8e4fc",
                          hasPercentage: !0,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, d.jsx)("div", {
                  className: "col-md-12 col-lg-12",
                  children: (0, d.jsxs)("div", {
                    className: "card card-chart",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "card-header",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "card-header-left",
                            children: [
                              (0, d.jsx)("h1", { children: t("dchfToCHF") }),
                              (0, d.jsx)(J.u, {
                                text: "The current peg of the DCHF in comparison to one Swiss Franc (CHF). This price is calculated from Liquidity Pool on Curve and Uniswap.",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("p", {
                            children: ["1 DCHF = ", (0, A.x)(D), " CHF"],
                          }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "card-body",
                        children: (0, d.jsx)(p, {
                          stepSize: 0.01,
                          min: 0.7,
                          max: 1.3,
                          dataset: m.dchf,
                          borderColor: l ? "#bf1304" : "#c32016",
                          backgroundColor: "rgba(191, 19, 4, 0.2)",
                          pegLine: !0,
                          decimals: !0,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, d.jsx)("div", {
                  className: "col-md-6 col-lg-6",
                  children: (0, d.jsxs)("div", {
                    className: "card card-chart",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "card-header",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "card-header-left",
                            children: [
                              (0, d.jsx)("h1", { children: t("chfToUSD") }),
                              (0, d.jsx)(J.u, {
                                text: "How the Swiss Franc performed in comparison to the US Dollar.",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("p", {
                            children: ["1 CHF = ", (0, A.x)(C), " USD"],
                          }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "card-body",
                        children: (0, d.jsx)(p, {
                          stepSize: 0.1,
                          min: 0.9,
                          max: 1.2,
                          dataset: m.usd,
                          borderColor: "#50c878",
                          backgroundColor: "rgba(80, 200, 120, 0.2)",
                          decimals: !0,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, d.jsx)("div", {
                  className: "col-md-6 col-lg-6",
                  children: (0, d.jsxs)("div", {
                    className: "card card-chart",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "card-header",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "card-header-left",
                            children: [
                              (0, d.jsx)("h1", { children: t("chfToEUR") }),
                              (0, d.jsx)(J.u, {
                                text: "How the Swiss Franc performed in comparison to the Euro.",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("p", {
                            children: ["1 CHF = ", (0, A.x)(y), " €"],
                          }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "card-body",
                        children: (0, d.jsx)(p, {
                          stepSize: 0.1,
                          min: 0.8,
                          max: 1.1,
                          dataset: m.eur,
                          borderColor: "#4064ef",
                          backgroundColor: l
                            ? "rgba(24, 92, 238, 0.2)"
                            : "#d8e4fc",
                          decimals: !0,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, d.jsxs)("div", {
              style: { display: "flex", justifyContent: "center" },
              children: [
                (0, d.jsx)(H(), {
                  href: "/privacy-policy",
                  children: (0, d.jsx)("a", {
                    style: { color: "rgba(0, 0, 0, 0.5)" },
                    children: "Privacy Policy",
                  }),
                }),
                (0, d.jsx)("p", {
                  style: {
                    color: "rgba(0, 0, 0, 0.5)",
                    marginRight: "1%",
                    marginLeft: "1%",
                  },
                  children: "|",
                }),
                (0, d.jsx)("p", {
                  style: { color: "rgba(0, 0, 0, 0.5)" },
                  children: "Terms of Service",
                }),
              ],
            }),
          ],
        });
      }
      function O() {
        return (0, d.jsx)(N, {});
      }
    },
    67644: function (a, b, c) {
      "use strict";
      c.d(b, {
        L: function () {
          return h;
        },
      });
      var d = c(85893),
        e = c(1844),
        f = c(71346),
        g = c.n(f);
      function h(a) {
        return 0 == a
          ? "gray"
          : a < 120
          ? "#B91C1C"
          : a < 150
          ? "#FF3232"
          : a < 160
          ? "#FF9000"
          : a < 180
          ? "#FFBD32"
          : a < 200
          ? "#D2DC27"
          : a < 250
          ? "#86EFAC"
          : a < 275
          ? "#39BB68"
          : a < 300
          ? "#009435"
          : "#22c55e";
      }
      var i = function (a) {
        var b = a.ratio,
          c = a.sqSize,
          f = void 0 === c ? 40 : c,
          i = a.strokeWidth,
          j = void 0 === i ? 6 : i,
          k = (function (a) {
            if (a < 110) return 0;
            if (a > 1e6) return 340;
            var b = Math.log2(a - 110),
              c = 340 / (Math.log2(1e6) - Math.log2(110)),
              d = b * c;
            return d;
          })(b),
          l = h(b),
          m = (f - j) / 2,
          n = "0 0 ".concat(f, " ").concat(f),
          o = m * Math.PI * 2;
        return b < 120 && b
          ? (0, d.jsx)("div", {
              className: g().warningIcon,
              children: (0, d.jsx)(e.qD, {
                text: "Warning! you are about to get liquidated!",
                children: (0, d.jsx)("img", {
                  src: "/img/icons/warning.svg",
                  width: "25px",
                  height: "25px",
                  alt: "warning icon",
                }),
              }),
            })
          : (0, d.jsxs)("svg", {
              width: f,
              height: f,
              viewBox: n,
              children: [
                (0, d.jsx)("circle", {
                  className: g().circleBackground,
                  cx: f / 2,
                  cy: f / 2,
                  r: m,
                  strokeWidth: "".concat(j, "px"),
                }),
                (0, d.jsx)("circle", {
                  className: g().circleProgress,
                  cx: f / 2,
                  cy: f / 2,
                  r: m,
                  strokeWidth: "".concat(j, "px"),
                  transform: "rotate(-90 "
                    .concat(f / 2, " ")
                    .concat(f / 2, ")"),
                  style: {
                    strokeDasharray: o,
                    strokeDashoffset: o - (o * k) / 360,
                    stroke: l,
                  },
                }),
              ],
            });
      };
      b.Z = i;
    },
    1844: function (a, b, c) {
      "use strict";
      c.d(b, {
        WH: function () {
          return j;
        },
        qD: function () {
          return k;
        },
        u: function () {
          return i;
        },
      });
      var d = c(85893),
        e = c(67294),
        f = c(53732),
        g = c.n(f),
        h = c(9473),
        i = function (a) {
          var b = a.text,
            c = function () {
              j(function (a) {
                return !a;
              });
            },
            f = (0, e.useState)(!1),
            i = f[0],
            j = f[1],
            k = (0, h.v9)(function (a) {
              return a.body.isNightMode;
            });
          return (0, d.jsx)("div", {
            className: i ? (k ? g().nightTool : g().tool) : g().emptyTool,
            "data-tip": void 0 === b ? "This is a tooltip" : b,
            children: (0, d.jsx)("div", {
              className: k ? g().darkIcon : g().icon,
              onMouseOver: c,
              onMouseOut: c,
              children: (0, d.jsx)("svg", {
                className: "icon-info",
                width: "16px",
                height: "16px",
                children: (0, d.jsx)("use", {
                  xlinkHref: "/icons/icons.svg#icon-info",
                }),
              }),
            }),
          });
        },
        j = function (a) {
          var b = a.Content,
            c = function () {
              i(function (a) {
                return !a;
              });
            },
            f = (0, e.useState)(!1),
            h = f[0],
            i = f[1];
          return (0, d.jsxs)("div", {
            style: { position: "relative", zIndex: 2 },
            onMouseOver: c,
            onMouseOut: c,
            className: g().emptyTool,
            children: [
              (0, d.jsx)("div", {
                className: g().icon,
                children: (0, d.jsx)("svg", {
                  className: "icon-info",
                  width: "18px",
                  height: "18px",
                  children: (0, d.jsx)("use", {
                    xlinkHref: "/icons/icons.svg#icon-info",
                  }),
                }),
              }),
              h &&
                (0, d.jsx)("div", {
                  className: g().customTooltip,
                  children: b,
                }),
            ],
          });
        },
        k = function (a) {
          var b = a.children,
            c = a.text,
            e = (0, h.v9)(function (a) {
              return a.body.isNightMode;
            });
          return (0, d.jsx)("div", {
            className: e ? g().nightTool : g().tool,
            "data-tip": c,
            children: b,
          });
        };
    },
    71346: function (a) {
      a.exports = {
        progressInput: "styles_progressInput__NDkcr",
        circleBackground: "styles_circleBackground__rokys",
        circleProgress: "styles_circleProgress__gI7dn",
        warningIcon: "styles_warningIcon__1wsUt",
      };
    },
    53732: function (a) {
      a.exports = {
        customTooltip: "styles_customTooltip__UMBMG",
        darkIcon: "styles_darkIcon__nybX_",
        icon: "styles_icon__rg7Sf",
        tool: "styles_tool__R_eFK",
        emptyTool: "styles_emptyTool__gnI0T",
        toolTipNightMode: "styles_toolTipNightMode__AemFr",
        nightTool: "styles_nightTool__cldy4",
      };
    },
  },
  function (a) {
    a.O(0, [757, 885, 685, 774, 888, 179], function () {
      var b;
      return a((a.s = 48312));
    }),
      (_N_E = a.O());
  },
]);
