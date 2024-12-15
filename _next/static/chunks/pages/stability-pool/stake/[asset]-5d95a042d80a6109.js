(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [173],
  {
    719: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stability-pool/stake/[asset]",
        function () {
          return c(39731);
        },
      ]);
    },
    39731: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSG: function () {
            return T;
          },
          default: function () {
            return U;
          },
        });
      var d = c(85893),
        e = c(47568),
        f = c(34051),
        g = c.n(f),
        h = c(67294),
        i = c(21043),
        j = c(57345),
        k = c(13499),
        l = c(10253),
        m = c(21046),
        n = c(2593),
        o = c(16766),
        p = c(50607),
        q = c(64487),
        r = c(9669),
        s = c.n(r);
      function t(a, b, c) {
        var d = b.ETH,
          e = b.StabilityPoolETH,
          f = b.StabilityPoolBTC,
          g = a.StabilityPoolETH,
          h = a.StabilityPoolBTC;
        return { pool: c == d ? g : h, poolAddress: c == d ? e : f };
      }
      function u(a, b, c, d) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, e.Z)(
          g().mark(function a(b, c, d, e) {
            var f,
              h,
              i,
              j,
              k,
              p,
              r,
              u,
              v,
              w,
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
              K;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (h = (f = t(b, c, e)).pool),
                        (i = f.poolAddress),
                        (a.next = 4),
                        Promise.all([
                          h.deposits(d),
                          h.getDepositorMONGain(d),
                          h.getDepositorAssetGain(d),
                          h.getTotalDCHFDeposits(),
                          b.DCHFToken.balanceOf(d),
                          b.priceFeed.functions.getDirectPrice(e),
                          s().get(
                            "https://dev-api.defifranc.com/current-data/price/mon"
                          ),
                          s().get(
                            "https://dev-api.defifranc.com/historical-data/stability-pool/".concat(
                              i
                            )
                          ),
                          s().get(
                            "https://dev-api.defifranc.com/current-data/stability-apr/".concat(
                              i
                            )
                          ),
                        ])
                      );
                    case 4:
                      return (
                        (j = a.sent),
                        (p = (k = (0, l.Z)(j, 9))[0]),
                        (r = k[1]),
                        (u = k[2]),
                        (v = k[3]),
                        (w = k[4]),
                        (x = (0, l.Z)(k[5], 1)),
                        (y = x[0]),
                        (z = k[6]),
                        (A = z.data),
                        (B = k[7]),
                        (C = B.data),
                        (D = k[8]),
                        (E = D.data),
                        (F = C.filter(function (a) {
                          return "apr" === a.field;
                        }).at(-1).value),
                        (G = E.value),
                        (H = m.Ce),
                        (I = A.find(function (a) {
                          return "CHF" === a.fiat;
                        }).value),
                        (J = y
                          .mul(u)
                          .add(r.mul((0, o.Md)((0, o.AY)(1e18 * I))))
                          .div(H)),
                        a.abrupt("return", {
                          deposits: p,
                          totalDeposits: v,
                          tvl: v,
                          apr: { apr24H: F, apr7D: G },
                          monGains: r,
                          assetGains: u,
                          userDchfBalance: w,
                          totalRewardsValue: J,
                        })
                      );
                    case 14:
                      return (
                        (a.prev = 14),
                        (a.t0 = a.catch(0)),
                        console.error("Fetch Initial Data error ->", a.t0),
                        (K = n.O$.from("0")),
                        q.Tb(a.t0),
                        a.abrupt("return", {
                          deposits: K,
                          totalDeposits: K,
                          tvl: K,
                          apr: { apr24H: 0, apr7D: 0 },
                          monGains: K,
                          assetGains: K,
                          userDchfBalance: K,
                          totalRewardsValue: K,
                        })
                      );
                    case 20:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 14]]
            );
          })
        )).apply(this, arguments);
      }
      function w(a, b, c, d, e, f) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = (0, e.Z)(
          g().mark(function a(b, c, d, e, f, h) {
            var i, j, k, l, m, r;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (j = (i = t(b, c, d)).pool),
                        (k = i.poolAddress),
                        h("loading-approve"),
                        (a.next = 5),
                        (0, p.qh)(b.DCHFToken, f, k, (0, o.AY)(+e))
                      );
                    case 5:
                      return (
                        h("loading-deposit"),
                        (a.next = 8),
                        j.estimateGas.provideToSP((0, o.AY)(+e))
                      );
                    case 8:
                      return (
                        (m = (l = a.sent)
                          .mul(n.O$.from("12"))
                          .div(n.O$.from("10"))),
                        (a.next = 12),
                        j.provideToSP((0, o.AY)(+e), { gasLimit: m })
                      );
                    case 12:
                      return (r = a.sent), (a.next = 15), r.wait();
                    case 15:
                      return h("success-deposit"), a.abrupt("return", !0);
                    case 19:
                      return (
                        (a.prev = 19),
                        (a.t0 = a.catch(0)),
                        console.error("Add to stability Pool error ->", a.t0),
                        h("error"),
                        q.Tb(a.t0),
                        a.abrupt("return", !1)
                      );
                    case 25:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 19]]
            );
          })
        )).apply(this, arguments);
      }
      function y(a, b, c, d, e, f) {
        return z.apply(this, arguments);
      }
      function z() {
        return (z = (0, e.Z)(
          g().mark(function a(b, c, d, e, f, h) {
            var i, j, k, l;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (i = t(b, c, d).pool),
                        h("loading-deposit"),
                        (a.next = 5),
                        i.estimateGas.withdrawFromSP((0, o.AY)(+e))
                      );
                    case 5:
                      return (
                        (k = (j = a.sent)
                          .mul(n.O$.from("12"))
                          .div(n.O$.from("10"))),
                        (a.next = 9),
                        i.withdrawFromSP((0, o.AY)(+e), { gasLimit: k })
                      );
                    case 9:
                      return (l = a.sent), (a.next = 12), l.wait();
                    case 12:
                      return h("success-deposit"), a.abrupt("return", !0);
                    case 16:
                      return (
                        (a.prev = 16),
                        (a.t0 = a.catch(0)),
                        console.error("Add to stability Pool error ->", a.t0),
                        q.Tb(a.t0),
                        h("error"),
                        a.abrupt("return", !1)
                      );
                    case 22:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 16]]
            );
          })
        )).apply(this, arguments);
      }
      var A = c(80069),
        B = c(77058),
        C = c(85770),
        D = c(26042),
        E = c(84531),
        F = c(20701),
        G = {
          isApproveLoading: !1,
          isActionLoading: !1,
          isSuccess: !1,
          isError: !1,
        };
      function H(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          e = arguments.length > 4 ? arguments[4] : void 0,
          f = arguments.length > 5 ? arguments[5] : void 0,
          g = arguments.length > 6 ? arguments[6] : void 0,
          h = arguments.length > 7 ? arguments[7] : void 0;
        return (a.isError, h)
          ? ""
          : a.isApproveLoading
          ? "Approving Tx..."
          : a.isActionLoading
          ? "Executing Tx..."
          : a.isSuccess
          ? "Successful"
          : d
          ? "Claim "
              .concat(e, " MON + ")
              .concat(f, " ")
              .concat(null == g ? void 0 : g.toUpperCase())
          : ""
              .concat(b ? "Deposit " : "Withdraw ", " ")
              .concat(c ? "and Claim Rewards" : "");
      }
      var I = function (a) {
          var b = a.userOperation,
            c = a.asset,
            f = a.balance,
            l = a.monGains,
            m = a.assetGains,
            n = (a.coin, a.deposits),
            p = a.setForceRefresh,
            q = function (a) {
              A(a.currentTarget.value), I(G);
            },
            r = function () {
              var a = (0, o.xN)(K ? f : n).toString();
              A(a);
            },
            s = function () {
              K && M(), L && O();
            },
            t = (0, i.G)(),
            u = t.contracts,
            v = t.addresses,
            x = (0, h.useState)(""),
            z = x[0],
            A = x[1],
            B = (0, h.useState)(G),
            C = B[0],
            I = B[1],
            J = (0, j.C)(k.D0),
            K = "deposit" === b,
            L = "withdraw" === b;
          function M() {
            return N.apply(this, arguments);
          }
          function N() {
            return (N = (0, e.Z)(
              g().mark(function a() {
                var b;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (J) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (
                          (a.next = 4), w(u, v, c, (0, o.AY)(1e18 * +z), J, Q)
                        );
                      case 4:
                        (b = a.sent), A(""), b && p(!0);
                      case 7:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function O() {
            return P.apply(this, arguments);
          }
          function P() {
            return (P = (0, e.Z)(
              g().mark(function a() {
                var b;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (J) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (
                          (a.next = 4), y(u, v, c, (0, o.AY)(1e18 * +z), J, Q)
                        );
                      case 4:
                        (b = a.sent), A(""), b && p(!0);
                      case 7:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function Q(a) {
            return R.apply(this, arguments);
          }
          function R() {
            return (R = (0, e.Z)(
              g().mark(function a(b) {
                var c;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, D.Z)({}, G)),
                          "loading-approve" === b && (c.isApproveLoading = !0),
                          "loading-deposit" === b && (c.isActionLoading = !0),
                          "success-deposit" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          I(c);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          (0, h.useEffect)(
            function () {
              A(""), I(G);
            },
            [b]
          );
          var S,
            T,
            U,
            V,
            W,
            X = !!((0, o.xN)(l) || (0, o.xN)(m)),
            Y =
              ((S = z),
              (T = f),
              (U = n),
              (V = b),
              (W = (0, o.xN)(l) + (0, o.xN)(m)),
              "deposit" === V && (0, o.xN)(S) > (0, o.xN)(T)
                ? "You do not have that much money!"
                : "withdraw" === V && (0, o.xN)(S) > (0, o.xN)(U)
                ? "You do not have that much staked!"
                : "empty" !== V || W
                ? ""
                : "Nothing to Claim");
          return (0, d.jsxs)("div", {
            className: "card-stake-form",
            children: [
              (0, d.jsxs)("div", {
                className: "dchf-form",
                children: [
                  (0, d.jsxs)("label", {
                    children: [K ? "Stake" : "UnStake", " "],
                  }),
                  (0, d.jsxs)("div", {
                    className: "dchf-form-wrap",
                    children: [
                      (0, d.jsx)(E.Z, {
                        type: "number",
                        value: z,
                        placeholder: 0,
                        onChange: q,
                      }),
                      (0, d.jsxs)("div", {
                        className: "dchf-form-info",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "dchf-form-info-content",
                            onClick: r,
                            children: [
                              (0, d.jsx)("p", {
                                children: K ? "Wallet" : "Available",
                              }),
                              (0, d.jsxs)("span", {
                                children: [K ? f : n, " DCHF"],
                              }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: "dchf-form-info-icon",
                            children: (0, d.jsx)("img", {
                              src: "/img/general/dchf-icon.svg",
                              alt: "icon",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)("div", {
                    className: "warningWrapper",
                    children: (0, d.jsx)("span", {
                      className: "warnings-paragraph",
                      children: (0, d.jsx)("b", { children: Y }),
                    }),
                  }),
                ],
              }),
              (0, d.jsx)("button", {
                className: "button button-primary",
                onClick: s,
                disabled: !!Y,
                children: (0, d.jsxs)("div", {
                  className: "confirmButtonMainWrapper",
                  children: [
                    (0, d.jsx)("div", {
                      className: "selfCenter widthThirtyThree",
                      children: H(C, K, X),
                    }),
                    (C.isActionLoading || C.isApproveLoading) &&
                      (0, d.jsx)("div", {
                        className: "spinnerWrapper",
                        children: (0, d.jsx)(F.ZP, {}),
                      }),
                  ],
                }),
              }),
              (0, d.jsx)("div", {
                className: "selfCenter",
                style: { color: "#bf1304", margin: "8px 0" },
                children: (0, d.jsx)("b", {
                  children: H(C, K, X, !1, void 0, void 0, void 0, !0),
                }),
              }),
            ],
          });
        },
        J = c(83080),
        K = c(1844),
        L = { isLoading: !1, isSuccess: !1, isError: !1 },
        M = function (a) {
          var b = a.coin,
            c = a.asset,
            f = a.setForceRefresh,
            l = a.deposits,
            m = a.assetGains,
            n = a.monGains,
            p = a.totalRewardsValue,
            q = (0, B.$)().t,
            r = (0, j.C)(k.D0),
            s = (0, i.G)(),
            t = s.contracts,
            u = s.addresses,
            v = (0, h.useState)(L),
            w = v[0],
            x = v[1];
          function z(a) {
            return A.apply(this, arguments);
          }
          function A() {
            return (A = (0, e.Z)(
              g().mark(function a(b) {
                var c;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, D.Z)({}, L)),
                          "loading-deposit" === b && (c.isLoading = !0),
                          "success-deposit" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          x(c);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function C() {
            return (C = (0, e.Z)(
              g().mark(function a() {
                var b;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (r) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), y(t, u, c, "0", r, z);
                      case 4:
                        (b = a.sent) && f(!0);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          var E = w.isLoading,
            G = w.isSuccess,
            H = (0, o.xN)(p) > 0;
          return (0, d.jsx)("div", {
            className: "card-stake-total",
            children: (0, d.jsx)("div", {
              className: "card-stake-total-wrap",
              children: (0, d.jsxs)("div", {
                className: "card-stake-total-info",
                children: [
                  (0, d.jsxs)("div", {
                    className: "card-stake-total-img",
                    children: [
                      (0, d.jsx)("img", {
                        src: "/img/general/dchf-coin.svg",
                        alt: "dchf-coin",
                        className: "big-coin",
                      }),
                      (0, d.jsx)("img", {
                        src: "/img/general/".concat(b, "-coin-tilt.png"),
                        alt: "".concat(b, "-coin"),
                        className: "small-coin",
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: "card-stake-total-content",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, d.jsx)("h2", { children: "DCHF" }),
                          (0, d.jsx)("h1", { children: q("yourDCHFStaked") }),
                          (0, d.jsxs)("p", { children: [l, " DCHF"] }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className: "card-stake-total-box",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "box-content",
                            children: [
                              (0, d.jsxs)("h1", {
                                style: { display: "flex", gap: "4px" },
                                children: [
                                  q("totalRewardsGenerated"),
                                  " ",
                                  (0, d.jsx)("div", {
                                    children: (0, d.jsx)(K.u, {
                                      text: ""
                                        .concat(m, " ")
                                        .concat(q(b), " + ")
                                        .concat(n, " MON"),
                                    }),
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("p", { children: [p, " CHF"] }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: "claim-button",
                            children: (0, d.jsx)("button", {
                              onClick: function () {
                                return C.apply(this, arguments);
                              },
                              disabled: !H,
                              style: E
                                ? { backgroundColor: "#bf1304", color: "white" }
                                : H
                                ? {}
                                : {
                                    cursor: "not-allowed",
                                    backgroundColor: "white",
                                    color: "gray",
                                    borderColor: "gray",
                                  },
                              children: (0, d.jsxs)("div", {
                                className: "confirmButtonMainWrapper",
                                children: [
                                  (0, d.jsx)("div", {
                                    className: "selfCenter",
                                    style: E ? { marginRight: "1.5rem" } : {},
                                    children: q(
                                      E ? "claiming" : G ? "success" : "claim"
                                    ),
                                  }),
                                  w.isLoading &&
                                    (0, d.jsx)("div", {
                                      className: "smallSpinnerWrapper",
                                      children: (0, d.jsx)(F.XG, {}),
                                    }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        N = function (a) {
          var b = a.coin,
            c = a.totalDeposits,
            e = a.deposits,
            f = a.userOperation,
            g = a.asset,
            h = a.userDchfBalance,
            i = a.assetGains,
            j = a.monGains,
            k = a.setForceRefresh,
            l = a.handleToggle,
            m = a.totalRewardsValue;
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(M, {
                asset: g,
                coin: b,
                totalDeposits: c,
                deposits: e,
                userOperation: f,
                assetGains: i,
                monGains: j,
                totalRewardsValue: m,
                setForceRefresh: k,
              }),
              (0, d.jsx)(J.Z, { type: f, withdrawDisable: !1, handleClick: l }),
              (0, d.jsx)(I, {
                userOperation: f,
                asset: g,
                balance: h,
                coin: b,
                deposits: e,
                setForceRefresh: k,
              }),
            ],
          });
        },
        O = {
          deposits: "-",
          totalDeposits: "-",
          tvl: "-",
          apr: { apr24H: "-", apr7D: "-" },
          monGains: "-",
          assetGains: "-",
          userDchfBalance: "-",
          totalRewardsValue: "-",
        },
        P = function (a) {
          var b = a.totalStaked,
            c = a.coin,
            e = (0, B.$)().t,
            f = e("stakeDchfToEarn");
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section",
            children: [
              (0, d.jsx)(C.M$, { title: e("rewards") }),
              (0, d.jsx)(C.X8, {
                title: f,
                value: "MON + ".concat(e(c)),
                toolTip:
                  "You get MON as a base-APR and ETH when open Positions are liquidated. When Liquidations happen, your deposited DCHF go down and you earn ETH at a 10% surplus (at the time of liquidation) instead. The updated DCHF balance is only shown when claiming the generated rewards.",
              }),
              (0, d.jsx)(C.X8, { title: "TVL", value: "".concat(b, " CHF") }),
            ],
          });
        },
        Q = function (a) {
          var b = a.apr7D,
            c = a.apr24H,
            e = (0, B.$)().t;
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section",
            children: [
              (0, d.jsx)(C.M$, { title: e("info") }),
              (0, d.jsx)(C.X8, {
                title: "7 day APR",
                value: (0, A.x)(b) + "%",
                toolTip:
                  "The displayed Rewards is the average of the past 7 days. The actual APR varies depending on the Distribution of MON and Liquidations happening on the Protocol.",
              }),
              (0, d.jsx)(C.X8, {
                title: "24h APR",
                value: (0, A.x)(c) + "%",
                toolTip:
                  "The displayed Rewards is the average of the past 24 hours. The actual APR varies depending on the Distribution of MON and Liquidations happening on the Protocol.",
              }),
            ],
          });
        };
      function R(a) {
        var b = a.apr.apr24H === 1 / 0 ? 0 : a.apr.apr24H,
          c = a.apr.apr7D === 1 / 0 ? 0 : a.apr.apr7D;
        return {
          deposits: (0, A.x)((0, o.uf)(a.deposits)),
          totalDeposits: (0, A.x)((0, o.uf)(a.totalDeposits)),
          tvl: (0, A.x)((0, o.uf)(a.tvl)),
          apr: { apr24H: (0, A.x)(b), apr7D: (0, A.x)(c) },
          monGains: (0, A.x)((0, o.uf)(a.monGains)),
          assetGains: (0, A.x)((0, o.uf)(a.assetGains)),
          userDchfBalance: (0, A.x)((0, o.uf)(a.userDchfBalance)),
          totalRewardsValue: (0, A.x)((0, o.uf)(a.totalRewardsValue)),
        };
      }
      var S = function (a) {
          var b = a.params,
            c = (0, j.C)(k.D0),
            f = (0, h.useState)("deposit"),
            l = f[0],
            m = f[1],
            n = (0, h.useState)(O),
            o = n[0],
            p = n[1],
            q = (0, h.useState)(!1),
            r = q[0],
            s = q[1],
            t = (0, i.G)(),
            v = t.contracts,
            w = t.addresses,
            x = b.asset,
            y = { eth: w.ETH, wbtc: w.renBTC },
            z = y[x];
          function A() {
            return B.apply(this, arguments);
          }
          function B() {
            return (B = (0, e.Z)(
              g().mark(function a() {
                var b;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (c) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), u(v, w, c, z);
                      case 4:
                        (b = a.sent) && p(R(b));
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          (0, h.useEffect)(
            function () {
              c && A();
            },
            [c]
          ),
            (0, h.useEffect)(
              function () {
                c && r && (A(), s(!1));
              },
              [r]
            );
          var C = function (a) {
              m(a);
            },
            D = o.totalDeposits,
            E = o.deposits,
            F = o.apr,
            G = o.monGains,
            H = o.assetGains,
            I = o.userDchfBalance,
            J = o.totalRewardsValue;
          return (0, d.jsx)("div", {
            className: "row justify-content-center",
            children: (0, d.jsx)("div", {
              className: "col-lg-10 col-xl-11 col-xxl-10",
              children: (0, d.jsxs)("div", {
                className: "card card-borrow",
                children: [
                  (0, d.jsx)("div", {
                    className: "card-borrow-left",
                    children: (0, d.jsx)("div", {
                      className: "row",
                      children: (0, d.jsx)("div", {
                        className: "col-lg-12 col-xl-12 col-xxl-12",
                        children: (0, d.jsx)(N, {
                          userOperation: l,
                          asset: z,
                          balance: I,
                          assetGains: H,
                          monGains: G,
                          coin: x,
                          deposits: E,
                          setForceRefresh: s,
                          totalDeposits: D,
                          userDchfBalance: I,
                          handleToggle: C,
                          totalRewardsValue: J,
                        }),
                      }),
                    }),
                  }),
                  (0, d.jsxs)("div", {
                    className: "card-borrow-right",
                    children: [
                      (0, d.jsx)(Q, { apr7D: F.apr7D, apr24H: F.apr24H }),
                      (0, d.jsx)(P, { totalStaked: D, coin: x }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        T = !0,
        U = function (a) {
          var b = a.params;
          return (0, d.jsx)(S, { params: b });
        };
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
    83080: function (a, b, c) {
      "use strict";
      var d = c(85893),
        e = c(77058),
        f = function (a) {
          var b = a.type,
            c = a.withdrawDisable,
            f = a.handleClick,
            g = (0, e.$)().t;
          return (0, d.jsx)("div", {
            className: "card-borrow-tab",
            children: (0, d.jsx)("div", {
              className: "dchf-pills",
              children: (0, d.jsxs)("div", {
                className: "nav-pills",
                role: "tablist",
                children: [
                  (0, d.jsx)("button", {
                    className: "deposit" == b ? "nav-link active" : "nav-link",
                    "data-bs-toggle": "pill",
                    onClick: function () {
                      return f("deposit");
                    },
                    children: g("deposit"),
                  }),
                  (0, d.jsx)("button", {
                    style: c ? { cursor: "not-allowed" } : {},
                    disabled: c,
                    className: "withdraw" == b ? "nav-link active" : "nav-link",
                    "data-bs-toggle": "pill",
                    onClick: function () {
                      return f("withdraw");
                    },
                    children: g("withdraw"),
                  }),
                ],
              }),
            }),
          });
        };
      b.Z = f;
    },
    85770: function (a, b, c) {
      "use strict";
      c.d(b, {
        M$: function () {
          return l;
        },
        X8: function () {
          return k;
        },
        k1: function () {
          return j;
        },
      });
      var d = c(85893),
        e = c(80069),
        f = c(16766),
        g = c(1844),
        h = c(77058),
        i = c(67644),
        j = function (a) {
          var b = a.title,
            c = a.value,
            e = a.redirectLink;
          return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)("div", {
              className: "item",
              children: [
                (0, d.jsx)("div", {
                  className: "title-wrapper",
                  children: (0, d.jsx)("h1", { children: b }),
                }),
                (0, d.jsx)("a", {
                  href: e,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, d.jsxs)("div", {
                    className: "item-value",
                    style: { cursor: "pointer" },
                    children: [
                      (0, d.jsx)("span", { children: c }),
                      (0, d.jsx)("img", {
                        src: "/img/icons/open-arrow.svg",
                        alt: "open link arrow",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        k = function (a) {
          var b = a.title,
            c = a.value,
            e = a.valueColor,
            f = a.toolTip;
          return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)("div", {
              className: "item",
              children: [
                b &&
                  (0, d.jsxs)("div", {
                    className: "title-wrapper",
                    children: [
                      (0, d.jsx)("h1", { children: b }),
                      (0, d.jsx)("div", {
                        className: "info",
                        children: f && (0, d.jsx)(g.u, { text: f }),
                      }),
                    ],
                  }),
                (0, d.jsxs)("div", {
                  className: "item-value",
                  children: [
                    (0, d.jsxs)("span", {
                      style: e ? { color: e } : {},
                      children: [c, " "],
                    }),
                    e &&
                      (0, d.jsx)("div", {
                        style: {
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: e,
                        },
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        l = function (a) {
          var b = a.title;
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section-header",
            children: [
              (0, d.jsx)("h1", { children: b }),
              (0, d.jsx)("div", { className: "section-header-line" }),
            ],
          });
        },
        m = function (a) {
          var b = a.coinName,
            c = a.borrowFee,
            g = a.gasComp,
            i = a.totalDebt,
            j = a.receive,
            m = a.totalColl,
            n = a.isWithdraw,
            o = a.repay,
            p = a.withdraw,
            q = b.toUpperCase(),
            r = n
              ? "".concat((0, e.x)(p), " ").concat(q)
              : "".concat((0, e.x)(j), " DCHF"),
            s = (0, h.$)().t;
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section",
            children: [
              (0, d.jsx)(l, { title: s("position") }),
              (0, d.jsx)(k, {
                title: "Your Collateral",
                value: "".concat((0, f.He)(m), " ").concat(q),
                toolTip: s("sumOfDepositedCollateral"),
              }),
              (0, d.jsx)(k, {
                title: "You Receive",
                value: r,
                toolTip: s("howManyDCHBorrow"),
              }),
              (0, d.jsx)(k, {
                title: "Liquidation Reserve Fee",
                value: "".concat((0, f.He)(g), " DCHF"),
                toolTip: s("whenYouOpenPosition"),
              }),
              n
                ? (0, d.jsx)(k, {
                    title: "Repay",
                    value: "".concat((0, e.x)(o), " DCHF"),
                    toolTip: "",
                  })
                : (0, d.jsx)(k, {
                    title: "Borrowing Fee (".concat(
                      (0, e.x)((+c / 1e18 / +j) * 100),
                      "%)"
                    ),
                    value: "".concat((0, f.He)(c), " DCHF"),
                    toolTip: s("everyTimeDrawDCHF"),
                  }),
              (0, d.jsx)(k, {
                title: "Total Debt",
                value: "".concat((0, f.He)(i), " DCHF"),
                toolTip: s("totalDebtYouHaveToPayBack"),
              }),
            ],
          });
        },
        n = function (a) {
          var b = a.liquidationPrice,
            c = a.priceAsset,
            e = a.coinName,
            g = (0, h.$)().t;
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section",
            children: [
              (0, d.jsx)(l, { title: g("price") }),
              (0, d.jsx)(k, {
                title: "".concat(e.toUpperCase(), " Price"),
                value: "".concat((0, f.He)(c), " CHF"),
                toolTip:
                  g("currentPriceOf") +
                  " " +
                  "".concat(e) +
                  " " +
                  g("inSwissCHF"),
              }),
              (0, d.jsx)(k, {
                title: "Your Liquidation Price",
                value: "".concat(b, " CHF"),
                toolTip: g("whenETHFalls"),
              }),
            ],
          });
        },
        o = function (a) {
          var b = a.totalColl,
            c = a.userColl,
            f = a.coinName,
            g = c > 0 ? "".concat((0, e.x)(c), "%") : "-",
            j = (0, i.L)(+b),
            m = (0, i.L)(c),
            n = (0, h.$)().t;
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section",
            children: [
              (0, d.jsx)(l, { title: n("collateralSection") }),
              (0, d.jsx)(k, {
                title: "Total Collateral Ratio " + f,
                value: "".concat(b, "%"),
                valueColor: j,
                toolTip: n("theSumOfCollateralOfAllPositions"),
              }),
              (0, d.jsx)(k, {
                title: "Your Collateral Ratio " + f,
                value: g,
                valueColor: m,
                toolTip: n("collateralRatioOfPositions"),
              }),
            ],
          });
        },
        p = function (a) {
          var b = a.state,
            c = a.coin,
            e = a.type,
            f = a.inputs,
            g = a.newCollRatio,
            h = a.dynamicData,
            i = a.totalDebt,
            j = a.liquidationPrice,
            k = a.totalColl,
            l = null == c ? void 0 : c.toUpperCase(),
            p = b || {},
            q = p.collRatio,
            r = p.priceAsset,
            s = p.gasComp,
            t = (h || {}).borrowFee;
          return (0, d.jsxs)("div", {
            className: "card-borrow-right",
            children: [
              (0, d.jsx)(n, {
                coinName: l,
                priceAsset: r,
                liquidationPrice: j,
              }),
              (0, d.jsx)(o, { coinName: l, totalColl: q, userColl: g }),
              (0, d.jsx)(m, {
                coinName: l,
                borrowFee: t,
                gasComp: s,
                totalDebt: i,
                receive: f.debt,
                totalColl: k,
                repay: f.repay,
                withdraw: f.withdraw,
                isWithdraw: "withdraw" === e,
              }),
            ],
          });
        };
      b.ZP = p;
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
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 719));
    }),
      (_N_E = a.O());
  },
]);
