(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [797],
  {
    83193: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stake",
        function () {
          return c(70726);
        },
      ]);
    },
    70726: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return P;
          },
        });
      var d = c(85893),
        e = c(47568),
        f = c(34051),
        g = c.n(f),
        h = c(67294),
        i = c(83080),
        j = c(26042),
        k = c(21043),
        l = c(57345),
        m = c(13499),
        n = c(10253),
        o = c(35553),
        p = c(9669),
        q = c.n(p),
        r = c(50607),
        s = c(64487),
        t = c(10579),
        u = c(16766);
      function v(a, b, c) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = (0, e.Z)(
          g().mark(function a(b, c, d) {
            var e,
              f,
              h,
              i,
              j,
              k,
              l,
              m,
              o,
              p,
              r,
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
              K,
              L,
              N,
              O,
              P,
              Q,
              R,
              S,
              T;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (e = b.MONStaking),
                        (a.prev = 1),
                        (a.next = 5),
                        Promise.all([
                          e.totalMONStaked(),
                          e.getPendingAssetGain(c.ETH, d),
                          e.getPendingAssetGain(c.renBTC, d),
                          e.getPendingDCHFGain(d),
                          e.stakes(d),
                          b.MONToken.functions.balanceOf(d),
                          (0, t.lO)(b, c.ETH),
                          (0, t.lO)(b, c.renBTC),
                          q().get(
                            "https://dev-api.defifranc.com/current-data/staking-apr"
                          ),
                          q().get(
                            "https://dev-api.defifranc.com/historical-data/staking-pool"
                          ),
                          q().get(
                            "https://dev-api.defifranc.com/current-data/price/mon"
                          ),
                        ])
                      );
                    case 5:
                      return (
                        (i = a.sent),
                        (k = (j = (0, n.Z)(i, 11))[0]),
                        (l = j[1]),
                        (m = j[2]),
                        (o = j[3]),
                        (p = j[4]),
                        (r = (0, n.Z)(j[5], 1)),
                        (v = r[0]),
                        (w = (0, n.Z)(j[6], 1)),
                        (x = w[0]),
                        (y = (0, n.Z)(j[7], 1)),
                        (z = y[0]),
                        (A = j[8]),
                        (B = A.data),
                        (C = j[9]),
                        (D = C.data),
                        (E = j[10]),
                        (F = E.data),
                        (G = +l.mul(x) / 1e36),
                        (H = +m.mul(z) / 1e36),
                        (J = G + H + (I = +o / 1e18)),
                        (K = (null == B ? void 0 : B.value) || 0),
                        (N =
                          null ==
                          (L = D.filter(function (a) {
                            return "apr" == a.field;
                          }))
                            ? void 0
                            : L[L.length - 1]),
                        (O =
                          null ===
                            (f = F.find(function (a) {
                              return "CHF" === a.fiat;
                            })) || void 0 === f
                            ? void 0
                            : f.value),
                        (P =
                          null ===
                            (h = F.find(function (a) {
                              return "USD" === a.fiat;
                            })) || void 0 === h
                            ? void 0
                            : h.value),
                        (Q = (0, u.Md)((0, u.AY)(+k * O))),
                        (R = (0, u.Md)((0, u.AY)(+k * P))),
                        (S = (0, u.Md)((0, u.AY)(+p * P))),
                        (T = (0, u.Md)((0, u.AY)(+p * O))),
                        a.abrupt("return", {
                          totalStaked: { chf: Q, usd: R, mon: k },
                          userStaked: { mon: p, usd: S, chf: T },
                          userMonBal: v,
                          rewards: {
                            ethRewards: l,
                            wBtcRewards: m,
                            dchfRewards: o,
                            totalRewards: J,
                          },
                          apr: K,
                          dailyApr: null == N ? void 0 : N.value,
                        })
                      );
                    case 23:
                      return (
                        (a.prev = 23),
                        (a.t0 = a.catch(1)),
                        console.error("Fetch Initial Data error ->", a.t0),
                        s.Tb(a.t0),
                        a.abrupt("return", M)
                      );
                    case 28:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[1, 23]]
            );
          })
        )).apply(this, arguments);
      }
      function x(a, b, c, d, e) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = (0, e.Z)(
          g().mark(function a(b, c, d, e, f) {
            var h, i;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (h = o.fi(d)),
                        (a.prev = 1),
                        f("loading-approve"),
                        (a.next = 5),
                        (0, r.qh)(b.MONToken, e, c.MONStaking, h)
                      );
                    case 5:
                      return (
                        f("loading-transaction"),
                        (a.next = 8),
                        b.MONStaking.functions.stake(h)
                      );
                    case 8:
                      return (i = a.sent), (a.next = 11), i.wait();
                    case 11:
                      return f("success"), a.abrupt("return", !0);
                    case 15:
                      return (
                        (a.prev = 15),
                        (a.t0 = a.catch(1)),
                        f("error"),
                        s.Tb(a.t0),
                        a.abrupt("return", !1)
                      );
                    case 20:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[1, 15]]
            );
          })
        )).apply(this, arguments);
      }
      function z(a, b, c) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, e.Z)(
          g().mark(function a(b, c, d) {
            var e, f;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (e = o.fi(c)),
                        (a.prev = 1),
                        d("loading-transaction"),
                        (a.next = 5),
                        b.MONStaking.functions.unstake(e)
                      );
                    case 5:
                      return (f = a.sent), (a.next = 8), f.wait();
                    case 8:
                      return d("success"), a.abrupt("return", !0);
                    case 12:
                      return (
                        (a.prev = 12),
                        (a.t0 = a.catch(1)),
                        s.Tb(a.t0),
                        d("error"),
                        a.abrupt("return", !1)
                      );
                    case 17:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[1, 12]]
            );
          })
        )).apply(this, arguments);
      }
      var B = c(84531),
        C = c(43335),
        D = c(20701),
        E = c(77058),
        F = {
          isApproveLoading: !1,
          isActionLoading: !1,
          isSuccess: !1,
          isError: !1,
        },
        G = function (a) {
          var b = a.isStake,
            c = a.userMonBalance,
            f = a.userStaked,
            i = a.setForceRefresh,
            n = function (a) {
              A(F), v(a);
            },
            o = (0, l.C)(m.D0),
            p = (0, k.G)(),
            q = p.contracts,
            r = p.addresses,
            s = (0, h.useState)("-"),
            t = s[0],
            v = s[1],
            w = (0, h.useState)(F),
            y = w[0],
            A = w[1];
          function G(a) {
            return H.apply(this, arguments);
          }
          function H() {
            return (H = (0, e.Z)(
              g().mark(function a(b) {
                var c;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, j.Z)({}, F)),
                          "loading-approve" === b && (c.isApproveLoading = !0),
                          "loading-transaction" === b &&
                            (c.isActionLoading = !0),
                          "success" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          A(c);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function I() {
            return (I = (0, e.Z)(
              g().mark(function a() {
                var c;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (o) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        if (!b) {
                          a.next = 8;
                          break;
                        }
                        return (a.next = 5), x(q, r, t, o, G);
                      case 5:
                        (a.t0 = a.sent), (a.next = 11);
                        break;
                      case 8:
                        return (a.next = 10), z(q, t, G);
                      case 10:
                        a.t0 = a.sent;
                      case 11:
                        (c = a.t0) && (i(!0), v(""));
                      case 13:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          var J,
            K,
            L,
            M,
            N,
            O,
            P,
            Q,
            R,
            S,
            T = y.isActionLoading || y.isApproveLoading,
            U =
              ((O = y),
              (P = b),
              (Q = O.isApproveLoading),
              (R = O.isActionLoading),
              (S = O.isSuccess),
              Q
                ? "Approving Staking..."
                : R
                ? P
                  ? "Staking Monetas..."
                  : "Un-Staking Monetas...."
                : S
                ? "Success"
                : P
                ? "Stake"
                : "Un-Stake"),
            V = (0, u.uf)(b ? c : f, 18, 18),
            W = (0, u.uf)(b ? c : f, 18, 2),
            X =
              ((J = b),
              (K = t),
              (L = c),
              (M = f),
              (N = (0, u.Md)((0, u.AY)(1e18 * +K))),
              J
                ? N.gt(L)
                  ? "You don't have enough MON!"
                  : ""
                : N.gt(M)
                ? "You did not stake that many MON!"
                : void 0),
            Y = (0, E.$)().t;
          return (0, d.jsxs)("div", {
            className: "card-stake-form",
            children: [
              (0, d.jsxs)("div", {
                className: "dchf-form",
                children: [
                  (0, d.jsx)("label", { children: b ? "Stake" : "Un-Stake" }),
                  (0, d.jsxs)("div", {
                    className: "dchf-form-wrap",
                    children: [
                      (0, d.jsx)(B.Z, {
                        type: "number",
                        value: t,
                        placeholder: 0,
                        onChange: function (a) {
                          return n(a.target.value);
                        },
                      }),
                      (0, d.jsxs)("div", {
                        className: "dchf-form-info",
                        children: [
                          (0, d.jsx)(C.d, {
                            value: W,
                            symbol: "MON",
                            text: b ? Y("available") : "Staked",
                            onClick: function () {
                              return n(V);
                            },
                          }),
                          (0, d.jsx)("div", {
                            className: "dchf-form-info-icon",
                            children: (0, d.jsx)("img", {
                              src: "img/general/dchf-icon.svg",
                              alt: "icon",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  X &&
                    (0, d.jsx)("div", {
                      style: { color: "#bf1304", margin: "8px 0" },
                      children: (0, d.jsx)("b", { children: X }),
                    }),
                ],
              }),
              (0, d.jsx)("button", {
                className: "button button-primary",
                onClick: function () {
                  return I.apply(this, arguments);
                },
                disabled: !(+t > 0),
                children: (0, d.jsxs)("div", {
                  className: "confirmButtonMainWrapper",
                  children: [
                    (0, d.jsx)("div", {
                      className: "selfCenter widthThirtyThree",
                      children: U,
                    }),
                    T &&
                      (0, d.jsx)("div", {
                        className: "spinnerWrapper",
                        children: (0, d.jsx)(D.ZP, {}),
                      }),
                  ],
                }),
              }),
              y.isError &&
                (0, d.jsx)("div", {
                  className: "selfCenter",
                  style: { color: "#bf1304", margin: "8px 0" },
                  children: (0, d.jsxs)("b", {
                    children: [" ", Y("somethingWentWrong")],
                  }),
                }),
            ],
          });
        },
        H = c(80069),
        I = c(1844),
        J = { isLoading: !1, isSuccess: !1, isError: !1 },
        K = function (a) {
          var b = a.userStaked,
            c = a.rewards,
            f = a.setForceRefresh,
            i = (0, E.$)().t,
            n = (0, l.C)(m.D0),
            o = (0, k.G)().contracts,
            p = (0, h.useState)(J),
            q = p[0],
            r = p[1];
          function s(a) {
            return t.apply(this, arguments);
          }
          function t() {
            return (t = (0, e.Z)(
              g().mark(function a(b) {
                var c;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, j.Z)({}, J)),
                          "loading-transaction" === b && (c.isLoading = !0),
                          "success" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          r(c);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function v() {
            return (v = (0, e.Z)(
              g().mark(function a() {
                var b;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (n) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), z(o, "0", s);
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
          var w = q.isLoading,
            x = q.isSuccess,
            y = (0, u.He)(b.mon),
            A = (0, u.He)(b.usd),
            B = (0, u.He)(b.chf),
            C = (0, H.x)(null == c ? void 0 : c.totalRewards),
            F = (null == c ? void 0 : c.totalRewards) > 0;
          return (0, d.jsx)("div", {
            className: "card-stake-total",
            children: (0, d.jsx)("div", {
              className: "card-stake-total-wrap",
              children: (0, d.jsxs)("div", {
                className: "card-stake-total-info",
                children: [
                  (0, d.jsx)("div", {
                    className: "card-stake-total-img",
                    children: (0, d.jsx)("img", {
                      src: "img/general/dchf-coin.svg",
                      alt: "dchf-coin",
                      className: "big-coin",
                    }),
                  }),
                  (0, d.jsxs)("div", {
                    className: "card-stake-total-content",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, d.jsx)("h2", { children: i("moneta") }),
                          (0, d.jsx)("h1", { children: i("yourStakedAmount") }),
                          (0, d.jsxs)("div", {
                            style: { display: "flex", gap: "6px" },
                            children: [
                              (0, d.jsxs)("p", { children: [y, " MON"] }),
                              y &&
                                (0, d.jsx)(I.u, {
                                  text: "Staked amount in "
                                    .concat(A, " USD and in  ")
                                    .concat(B, " CHF"),
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className: "card-stake-total-box",
                        children: [
                          (0, d.jsxs)("div", {
                            className: "box-content",
                            children: [
                              (0, d.jsxs)("h1", {
                                style: {
                                  display: "flex",
                                  gap: "4px",
                                  whiteSpace: "nowrap",
                                },
                                children: [
                                  i("totalRewardsGenerated"),
                                  " ",
                                  (0, d.jsx)("div", {
                                    children: (0, d.jsx)(I.WH, {
                                      Content: (0, d.jsxs)("div", {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "8px",
                                        },
                                        children: [
                                          (0, d.jsx)("span", {
                                            children:
                                              "Rewards breakdown by asset:",
                                          }),
                                          (0, d.jsxs)("span", {
                                            children: [
                                              (0, d.jsx)("b", {
                                                children: (0, u.He)(
                                                  null == c
                                                    ? void 0
                                                    : c.ethRewards,
                                                  18,
                                                  6
                                                ),
                                              }),
                                              " ETH",
                                            ],
                                          }),
                                          (0, d.jsxs)("span", {
                                            children: [
                                              (0, d.jsx)("b", {
                                                children: (0, u.He)(
                                                  null == c
                                                    ? void 0
                                                    : c.wBtcRewards,
                                                  18,
                                                  6
                                                ),
                                              }),
                                              " wBTC",
                                            ],
                                          }),
                                          (0, d.jsxs)("span", {
                                            children: [
                                              (0, d.jsx)("b", {
                                                children: (0, u.He)(
                                                  null == c
                                                    ? void 0
                                                    : c.dchfRewards,
                                                  18,
                                                  6
                                                ),
                                              }),
                                              " DCHF",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("p", { children: [C, " CHF"] }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: "claim-button",
                            children: (0, d.jsx)("button", {
                              onClick: function () {
                                return v.apply(this, arguments);
                              },
                              disabled: !F,
                              style: w
                                ? { backgroundColor: "#bf1304", color: "white" }
                                : F
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
                                    style: w ? { marginRight: "1.5rem" } : {},
                                    children: i(
                                      w ? "claiming" : x ? "success" : "claim"
                                    ),
                                  }),
                                  w &&
                                    (0, d.jsx)("div", {
                                      className: "smallSpinnerWrapper",
                                      children: (0, d.jsx)(D.XG, {}),
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
        L = c(85770),
        M = {
          totalStaked: {
            usd: (0, u.Md)("0"),
            chf: (0, u.Md)("0"),
            mon: (0, u.Md)("0"),
          },
          userStaked: {
            usd: (0, u.Md)("0"),
            chf: (0, u.Md)("0"),
            mon: (0, u.Md)("0"),
          },
          userMonBal: (0, u.Md)("0"),
          rewards: {
            ethRewards: (0, u.Md)("0"),
            wBtcRewards: (0, u.Md)("0"),
            dchfRewards: (0, u.Md)("0"),
            totalRewards: 0,
          },
          apr: 0,
          dailyApr: 0,
        },
        N = function (a) {
          var b = a.totalStaked,
            c = a.apr,
            e = a.dailyApr,
            f = (0, E.$)().t,
            g = (0, u.He)(b.chf, 18, 0),
            h = (0, u.He)(b.usd, 18, 0),
            i = (0, u.He)(b.mon, 18, 0);
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section",
            children: [
              (0, d.jsx)(L.M$, { title: f("rewards") }),
              (0, d.jsx)(L.X8, {
                title: "7D APR",
                value: "".concat(c, "%"),
                toolTip:
                  "The displayed APR is the average of the past 7 days. The actual APR varies depending on how DCHFs are borrowed and redeemed.",
              }),
              (0, d.jsx)(L.X8, {
                title: "24H APR",
                value: "".concat(e, "%"),
                toolTip:
                  "The displayed APR is the average of the past 24 hours. The actual APR varies depending on how DCHFs are borrowed and redeemed.",
              }),
              (0, d.jsx)(L.X8, {
                title: f("stakeMonToEarn"),
                value: "DCHF + ETH + wBTC",
                toolTip:
                  "You earn DCHF from the Borrow Fee and ETH/wBTC from the Redemption Fee",
              }),
              (0, d.jsx)(L.M$, { title: "Total Value Locked" }),
              (0, d.jsx)(L.X8, {
                title: "in MON",
                value: "".concat(i, " MON"),
                toolTip: "The total staked amount is ".concat(i, " MON "),
              }),
              (0, d.jsx)(L.X8, {
                title: "in CHF",
                value: "".concat(g, " CHF"),
                toolTip: "The total staked amount of MON valued in CHF ",
              }),
              (0, d.jsx)(L.X8, {
                title: "in USD",
                value: "".concat(h, " USD"),
                toolTip: "The total staked amount of MON valued in USD ",
              }),
            ],
          });
        },
        O = function () {
          var a = (0, l.C)(m.D0),
            b = (0, h.useState)(M),
            c = b[0],
            f = b[1],
            j = (0, h.useState)(!1),
            n = j[0],
            o = j[1],
            p = (0, h.useState)("deposit"),
            q = p[0],
            r = p[1],
            s = (0, k.G)(),
            t = s.contracts,
            u = s.addresses,
            w = function (a) {
              if (a === q) return r("deposit");
              r(a);
            };
          function x() {
            return y.apply(this, arguments);
          }
          function y() {
            return (y = (0, e.Z)(
              g().mark(function b() {
                var c;
                return g().wrap(function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        if (a) {
                          b.next = 2;
                          break;
                        }
                        return b.abrupt("return", null);
                      case 2:
                        return (b.next = 4), v(t, u, a);
                      case 4:
                        (c = b.sent) && f(c);
                      case 6:
                      case "end":
                        return b.stop();
                    }
                }, b);
              })
            )).apply(this, arguments);
          }
          (0, h.useEffect)(
            function () {
              a && x();
            },
            [a]
          ),
            (0, h.useEffect)(
              function () {
                n && (x(), o(!1));
              },
              [n]
            );
          var z = (0, H.x)(c.apr),
            A = (0, H.x)(c.dailyApr),
            B = (0, E.$)().t;
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("div", {
                className: "row",
                children: (0, d.jsx)("div", {
                  className: "col-md-12 col-lg-12",
                  children: (0, d.jsx)("div", {
                    className: "dchf-content",
                    children: (0, d.jsxs)("p", {
                      children: [
                        B("theMONETAToken"),
                        " ",
                        (0, d.jsx)("br", {}),
                        (0, d.jsxs)("span", {
                          children: [
                            "Learn more,",
                            " ",
                            (0, d.jsx)("a", {
                              href: "https://docs.defifranc.com/tokenomics/moneta-staking",
                              target: "_blank",
                              rel: "noreferrer",
                              style: { marginLeft: "4px" },
                              children: "Read our Documentation",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, d.jsx)("div", {
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
                          children: (0, d.jsxs)("div", {
                            className: "col-lg-12 col-xl-12 col-xxl-12",
                            children: [
                              (0, d.jsx)(K, {
                                userStaked: c.userStaked,
                                setForceRefresh: o,
                                rewards: c.rewards,
                              }),
                              (0, d.jsx)(i.Z, {
                                type: q,
                                withdrawDisable: 0 == +c.userStaked,
                                handleClick: w,
                              }),
                              (0, d.jsx)(G, {
                                isStake: "deposit" === q,
                                userMonBalance: c.userMonBal,
                                userStaked: c.userStaked.mon,
                                setForceRefresh: o,
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: "card-borrow-right",
                        children: (0, d.jsx)(N, {
                          totalStaked: c.totalStaked,
                          apr: z,
                          dailyApr: A,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        P = function () {
          return (0, d.jsx)(O, {});
        };
    },
  },
  function (a) {
    a.O(0, [193, 335, 774, 888, 179], function () {
      var b;
      return a((a.s = 83193));
    }),
      (_N_E = a.O());
  },
]);
