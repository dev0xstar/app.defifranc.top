(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [468],
  {
    38352: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/invest",
        function () {
          return c(58165);
        },
      ]);
    },
    58165: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return aj;
          },
        });
      var d = c(85893),
        e = c(47568),
        f = c(34051),
        g = c.n(f),
        h = c(67294),
        i = c(83080),
        j = c(21043),
        k = c(57345),
        l = c(13499),
        m = c(14924),
        n = c(26042),
        o = c(69396),
        p = c(10253),
        q = c(21046),
        r = c(35553),
        s = c(9669),
        t = c.n(s),
        u = c(50607),
        v = c(64487),
        w = c(16766);
      function x() {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = (0, e.Z)(
          g().mark(function a() {
            var b, c, d, e, f, h, i, j, k, l, m, q, r, s, u, w, x, y;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (h = "0xDcb11E81C8B8a1e06BF4b50d4F6f3bb31f7478C3"),
                        (a.next = 5),
                        Promise.all([
                          t().get(
                            "https://api.curve.fi/api/getFactoryAPYs?version=crypto"
                          ),
                          t().get(
                            "https://api.curve.fi/api/getPools/ethereum/factory-crypto"
                          ),
                          t()
                            .get(
                              " https://yields.llama.fi/poolsEnriched?pool=d1f577da-8631-4d10-a092-b262081d7029"
                            )
                            .then(function (a) {
                              return a.data.data[0];
                            }),
                        ])
                      );
                    case 5:
                      return (
                        (i = a.sent),
                        (l = (k = (j = (0, p.Z)(i, 3))[0]).data),
                        (m = j[1]),
                        (q = m.data),
                        (s = (r = j[2]).tvlUsd),
                        (u = r.apy),
                        (w =
                          null ===
                            (b = l.data.poolDetails.filter(function (a) {
                              return a.poolAddress === h;
                            })) || void 0 === b
                            ? void 0
                            : b[0]),
                        (y =
                          (null ==
                          (x =
                            null ===
                              (c = q.data.poolData.filter(function (a) {
                                return a.address === h;
                              })) || void 0 === c
                              ? void 0
                              : c[0])
                            ? void 0
                            : null === (d = x.gaugeRewards) || void 0 === d
                            ? void 0
                            : null === (e = d[0]) || void 0 === e
                            ? void 0
                            : e.apy) +
                          (null == x
                            ? void 0
                            : null === (f = x.gaugeCrvApy) || void 0 === f
                            ? void 0
                            : f[0])),
                        a.abrupt(
                          "return",
                          (0, o.Z)((0, n.Z)({}, ac), {
                            apr: w.apy + y,
                            tvl: x.usdTotal,
                            bunni: { tvl: s, apy: u },
                          })
                        )
                      );
                    case 14:
                      return (
                        (a.prev = 14),
                        (a.t0 = a.catch(0)),
                        console.error(
                          "Fetch No user Initial Data error ->",
                          a.t0
                        ),
                        v.Tb(a.t0),
                        a.abrupt("return", ac)
                      );
                    case 19:
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
      function z(a, b, c) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, e.Z)(
          g().mark(function a(b, c, d) {
            var e,
              f,
              h,
              i,
              j,
              k,
              l,
              r,
              s,
              u,
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
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
              $;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (a.next = 4),
                        Promise.all([
                          b.DCHFToken.balanceOf(d),
                          b.USDC.balanceOf(d),
                          b.DAI.balanceOf(d),
                          b.USDT.balanceOf(d),
                          b.LpToken.balanceOf(d),
                          b.CurvePool.lp_price(),
                          b.CurveGauge.balanceOf(d),
                          b.CurveGauge.claimable_reward(d, c.MONToken),
                          b.CurveGauge.callStatic.claimable_tokens(d),
                          t().get(
                            "https://dev-api.defifranc.com/current-data/price/mon"
                          ),
                          t().get(
                            "https://dev-api.defifranc.com/current-data/price/crv"
                          ),
                          t().get(
                            "https://api.curve.fi/api/getFactoryAPYs?version=crypto"
                          ),
                          t().get(
                            "https://api.curve.fi/api/getPools/ethereum/factory-crypto"
                          ),
                          t()
                            .get(
                              " https://yields.llama.fi/poolsEnriched?pool=d1f577da-8631-4d10-a092-b262081d7029"
                            )
                            .then(function (a) {
                              return a.data.data[0];
                            }),
                        ])
                      );
                    case 4:
                      return (
                        (k = a.sent),
                        (r = (l = (0, p.Z)(k, 14))[0]),
                        (s = l[1]),
                        (u = l[2]),
                        (x = l[3]),
                        (y = l[4]),
                        (z = l[5]),
                        (A = l[6]),
                        (B = l[7]),
                        (C = l[8]),
                        (D = l[9]),
                        (E = D.data),
                        (F = l[10]),
                        (G = F.data),
                        (H = l[11]),
                        (I = H.data),
                        (J = l[12]),
                        (K = J.data),
                        (M = (L = l[13]).tvlUsd),
                        (N = L.apy),
                        (O =
                          null ===
                            (e = I.data.poolDetails.filter(function (a) {
                              return a.poolAddress === c.CurvePool;
                            })) || void 0 === e
                            ? void 0
                            : e[0]),
                        (Q =
                          (null ==
                          (P =
                            null ===
                              (f = K.data.poolData.filter(function (a) {
                                return a.address === c.CurvePool;
                              })) || void 0 === f
                              ? void 0
                              : f[0])
                            ? void 0
                            : null === (h = P.gaugeRewards) || void 0 === h
                            ? void 0
                            : null === (i = h[0]) || void 0 === i
                            ? void 0
                            : i.apy) +
                          (null == P
                            ? void 0
                            : null === (j = P.gaugeCrvApy) || void 0 === j
                            ? void 0
                            : j[0])),
                        (R = P.usdTotal / (P.totalSupply / 1e18)),
                        (S = E.find(function (a) {
                          return "CHF" === a.fiat;
                        }).value),
                        (T = G.find(function (a) {
                          return "CHF" === a.fiat;
                        }).value),
                        (U = (+B * S) / 1e18),
                        (V = (+C * T) / 1e18),
                        (W = A.mul(z).div(q.Ce)),
                        (X = +A * R),
                        (Y = P.usdTotal),
                        (Z = P.underlyingCoins),
                        ($ = Z.reduce(function (a, b) {
                          var c =
                              (b.poolBalance * b.usdPrice) /
                              Math.pow(10, +b.decimals) /
                              Y,
                            d = (X * c) / 1e18;
                          return (0,
                          o.Z)((0, n.Z)({}, a), (0, m.Z)({}, b.symbol.toLowerCase(), { ratio: 100 * c, userAmount: d }));
                        }, {})),
                        a.abrupt("return", {
                          userDchfBal: r,
                          userStakedAmount: A,
                          userStaked: {
                            usd: (0, w.Md)((0, w.AY)(X)),
                            dchf: W,
                            breakdown: $,
                          },
                          userUSDCBal: s,
                          userDAIBal: u,
                          userUSDTBal: x,
                          userLpBalance: y,
                          apr: O.apy + Q,
                          tvl: P.usdTotal,
                          lpPrice: z,
                          rewards: { mon: B, crv: C, total: U + V },
                          bunni: { tvl: M, apy: N },
                        })
                      );
                    case 22:
                      return (
                        (a.prev = 22),
                        (a.t0 = a.catch(0)),
                        console.error("Fetch Initial Data error ->", a.t0),
                        v.Tb(a.t0),
                        a.abrupt("return", ac)
                      );
                    case 27:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 22]]
            );
          })
        )).apply(this, arguments);
      }
      function B(a, b, c, d, e) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = (0, e.Z)(
          g().mark(function a(b, c, d, e, f) {
            var h, i, j, k, l, m, n, o, q, r, s, t, u, x;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (h = [, , , ,].fill((0, w.Md)("0"))),
                        (i = f.decimals),
                        (j = f.index),
                        (k = (0, w.Md)((0, w.AY)(e * Math.pow(10, i)))),
                        (l = (0, w.Md)((0, w.AY)(1e18 * d))),
                        (h[0] = l),
                        (h[j] = k),
                        (a.next = 9),
                        Promise.all([
                          b.CurvePoolHelper.get_dy(
                            c.CurvePool,
                            0,
                            f.index,
                            (0, w.Md)((0, w.AY)(1e18))
                          ),
                          b.CurvePoolHelper.lp_price(c.CurvePool),
                          b.CurvePoolHelper.calc_token_amount(c.CurvePool, h),
                        ])
                      );
                    case 9:
                      return (
                        (m = a.sent),
                        (o = (n = (0, p.Z)(m, 3))[0]),
                        (q = n[1]),
                        (r = n[2]),
                        (t = +e + +d * (s = +o / Math.pow(10, f.decimals))),
                        (x = 100 - ((u = (+q * +r) / 1e36) / t) * 100),
                        a.abrupt("return", x)
                      );
                    case 18:
                      return (
                        (a.prev = 18),
                        (a.t0 = a.catch(0)),
                        console.error("calcPriceImpact error ->", a.t0),
                        v.Tb(a.t0),
                        a.abrupt("return", 0)
                      );
                    case 23:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 18]]
            );
          })
        )).apply(this, arguments);
      }
      function D(a, b, c, d, e) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = (0, e.Z)(
          g().mark(function a(b, c, d, e, f) {
            var h, i, j, k, l, m, n, o, q;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (a.t0 = p.Z),
                        (a.next = 4),
                        Promise.all([
                          b.CurveGauge.claimable_reward(d, c.MONToken),
                          b.CurveGauge.callStatic.claimable_tokens(d),
                        ])
                      );
                    case 4:
                      if (
                        ((a.t1 = a.sent),
                        (i = (h = (0, a.t0)(a.t1, 2))[0]),
                        (j = h[1]),
                        e("loading-transaction"),
                        !i.gt((0, w.Md)("0")))
                      ) {
                        a.next = 20;
                        break;
                      }
                      return (
                        f("MON"),
                        (a.next = 13),
                        b.CurveGauge.estimateGas.claim_rewards()
                      );
                    case 13:
                      return (
                        (l = (k = a.sent)
                          .mul((0, w.Md)("12"))
                          .div((0, w.Md)("10"))),
                        (a.next = 17),
                        b.CurveGauge.claim_rewards({ gasLimit: l })
                      );
                    case 17:
                      return (m = a.sent), (a.next = 20), m.wait();
                    case 20:
                      if (!j.gt((0, w.Md)("0"))) {
                        a.next = 31;
                        break;
                      }
                      return (
                        f("CRV"),
                        (a.next = 24),
                        b.CrvMint.estimateGas.mint(c.CurveGauge)
                      );
                    case 24:
                      return (
                        (o = (n = a.sent)
                          .mul((0, w.Md)("12"))
                          .div((0, w.Md)("10"))),
                        (a.next = 28),
                        b.CrvMint.mint(c.CurveGauge, { gasLimit: o })
                      );
                    case 28:
                      return (q = a.sent), (a.next = 31), q.wait();
                    case 31:
                      return e("success"), a.abrupt("return", !0);
                    case 35:
                      return (
                        (a.prev = 35),
                        (a.t2 = a.catch(0)),
                        e("error"),
                        v.Tb(a.t2),
                        a.abrupt("return", !1)
                      );
                    case 40:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 35]]
            );
          })
        )).apply(this, arguments);
      }
      function F(a, b, c, d, e, f, g) {
        return G.apply(this, arguments);
      }
      function G() {
        return (G = (0, e.Z)(
          g().mark(function a(b, c, d, e, f, h, i) {
            var j, k, l, m, n, o, p, q, s, t, x, y, z;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (j = r.fi(d || "0")),
                        (k = (0, w.Md)(
                          (0, w.AY)(+e * Math.pow(10, f.decimals))
                        )),
                        (a.prev = 2),
                        i("approve-liquidity"),
                        ((l = [, , , ,].fill((0, w.Md)("0")))[0] = j),
                        (l[f.index] = k),
                        (a.next = 9),
                        (0, u.qh)(b.DCHFToken, h, c.CurvePoolHelper, j)
                      );
                    case 9:
                      return (
                        (a.next = 11),
                        (0, u.qh)(b[f.name], h, c.CurvePoolHelper, k)
                      );
                    case 11:
                      return (
                        i("liquidity"),
                        (m = b.CurvePoolHelper),
                        (a.next = 15),
                        m.calc_token_amount(c.CurvePool, l)
                      );
                    case 15:
                      return (
                        (o = (n = a.sent).mul(98).div(100)),
                        (a.next = 19),
                        m.estimateGas.add_liquidity(c.CurvePool, l, o)
                      );
                    case 19:
                      return (
                        (q = (p = a.sent)
                          .mul((0, w.Md)("12"))
                          .div((0, w.Md)("10"))),
                        (a.next = 23),
                        m.add_liquidity(c.CurvePool, l, o, { gasLimit: q })
                      );
                    case 23:
                      return (s = a.sent), (a.next = 26), s.wait();
                    case 26:
                      return (
                        i("approve-staking"),
                        (a.next = 29),
                        b.LpToken.balanceOf(h)
                      );
                    case 29:
                      return (
                        (t = a.sent),
                        (a.next = 32),
                        (0, u.qh)(b.LpToken, h, c.CurveGauge, t)
                      );
                    case 32:
                      return (
                        i("staking"),
                        (a.next = 35),
                        b.CurveGauge.estimateGas.deposit(t)
                      );
                    case 35:
                      return (
                        (y = (x = a.sent)
                          .mul((0, w.Md)("12"))
                          .div((0, w.Md)("10"))),
                        (a.next = 39),
                        b.CurveGauge.deposit(t, { gasLimit: y })
                      );
                    case 39:
                      return (z = a.sent), (a.next = 42), z.wait();
                    case 42:
                      return i("success"), a.abrupt("return", !0);
                    case 46:
                      return (
                        (a.prev = 46),
                        (a.t0 = a.catch(2)),
                        console.error("depositFunds curve pool ->", a.t0),
                        i("error"),
                        v.Tb(a.t0),
                        a.abrupt("return", !1)
                      );
                    case 52:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[2, 46]]
            );
          })
        )).apply(this, arguments);
      }
      function H(a, b, c, d, e) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = (0, e.Z)(
          g().mark(function a(b, c, d, e, f) {
            var h, i, j, k, l, m, n, o, p, q;
            return g().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (h = r.fi(d)),
                        (a.prev = 1),
                        f("staking"),
                        (a.next = 5),
                        b.CurveGauge.estimateGas.withdraw(h)
                      );
                    case 5:
                      return (
                        (j = (i = a.sent)
                          .mul((0, w.Md)("12"))
                          .div((0, w.Md)("10"))),
                        (a.next = 9),
                        b.CurveGauge.withdraw(h, { gasLimit: j })
                      );
                    case 9:
                      return (k = a.sent), (a.next = 12), k.wait();
                    case 12:
                      return (a.next = 14), b.LpToken.balanceOf(e);
                    case 14:
                      return (
                        (l = a.sent),
                        f("liquidity"),
                        (a.next = 18),
                        b.CurvePool.calc_withdraw_one_coin(l, (0, w.Md)("0"))
                      );
                    case 18:
                      return (
                        (n = (m = a.sent).mul(98).div(100)),
                        (a.next = 22),
                        b.CurvePool.estimateGas.remove_liquidity_one_coin(
                          l,
                          "0",
                          n
                        )
                      );
                    case 22:
                      return (
                        (p = (o = a.sent)
                          .mul((0, w.Md)("12"))
                          .div((0, w.Md)("10"))),
                        (a.next = 26),
                        b.CurvePool.remove_liquidity_one_coin(l, "0", n, {
                          gasLimit: p,
                        })
                      );
                    case 26:
                      return (q = a.sent), (a.next = 29), q.wait();
                    case 29:
                      return f("success"), a.abrupt("return", !0);
                    case 33:
                      return (
                        (a.prev = 33),
                        (a.t0 = a.catch(1)),
                        console.error("withdrawFunds curve pool ->", a.t0),
                        v.Tb(a.t0),
                        f("error"),
                        a.abrupt("return", !1)
                      );
                    case 39:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[1, 33]]
            );
          })
        )).apply(this, arguments);
      }
      var J = c(80069),
        K = c(77058),
        L = c(20701),
        M = c(1844),
        N = { isLoading: !1, isSuccess: !1, isError: !1 },
        O = function (a) {
          var b = a.text,
            c = a.amount,
            e = a.ratio;
          return (0, d.jsxs)("span", {
            children: [
              b,
              ":",
              "   ",
              (0, d.jsxs)("b", {
                style: { fontWeight: 600 },
                children: [c, " (", e, "%)"],
              }),
            ],
          });
        },
        P = function (a) {
          var b = a.userStaked,
            c = a.coinsBreakdown,
            e = c.usdc,
            f = c.dai,
            g = c.dchf,
            h = c.usdt;
          return (0, d.jsxs)("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontWeight: 400,
            },
            children: [
              (0, d.jsxs)("span", {
                children: [
                  (0, d.jsxs)("b", {
                    style: { fontWeight: 600 },
                    children: [b, " DCHF-3CRV"],
                  }),
                  " in the Gauge",
                ],
              }),
              (0, d.jsx)("span", {
                style: { margin: "6px 0 4px" },
                children: "Position Breakdown:",
              }),
              (0, d.jsx)(O, {
                text: "USDC",
                amount: (0, J.x)(e.userAmount),
                ratio: (0, J.x)(e.ratio),
              }),
              (0, d.jsx)(O, {
                text: "DAI",
                amount: (0, J.x)(f.userAmount),
                ratio: (0, J.x)(f.ratio),
              }),
              (0, d.jsx)(O, {
                text: "USDT",
                amount: (0, J.x)(h.userAmount),
                ratio: (0, J.x)(h.ratio),
              }),
              (0, d.jsx)(O, {
                text: "DCHF",
                amount: (0, J.x)(g.userAmount),
                ratio: (0, J.x)(g.ratio),
              }),
            ],
          });
        },
        Q = function (a) {
          var b = a.userStaked,
            c = a.rewards,
            f = a.setForceRefresh,
            i = a.userStakedInDCHF,
            m = a.userStakedUSD,
            o = a.coinsBreakdown,
            p = function (a) {
              B(a);
            },
            q = (0, K.$)().t,
            r = (0, k.C)(l.D0),
            s = (0, j.G)(),
            t = s.contracts,
            u = s.addresses,
            v = (0, h.useState)(N),
            x = v[0],
            y = v[1],
            z = (0, h.useState)(""),
            A = z[0],
            B = z[1];
          function C(a) {
            return E.apply(this, arguments);
          }
          function E() {
            return (E = (0, e.Z)(
              g().mark(function a(b) {
                var c;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, n.Z)({}, N)),
                          "loading-transaction" === b && (c.isLoading = !0),
                          "success" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          y(c);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function F() {
            return (F = (0, e.Z)(
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
                        return (a.next = 4), D(t, u, r, C, p);
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
          var G = x.isLoading,
            H = x.isSuccess,
            I = (0, J.x)(c.total),
            O = +c.mon > 0,
            Q = ""
              .concat((0, w.He)(c.mon), " MON + ")
              .concat((0, w.He)(c.crv), " CRV");
          return (0, d.jsx)("div", {
            className: "card-stake-total",
            children: (0, d.jsx)("div", {
              className: "card-stake-total-wrap",
              children: (0, d.jsxs)("div", {
                className: "card-stake-total-info",
                children: [
                  (0, d.jsx)("span", {
                    className: "curve-pool-tag",
                    children: "Curve Pool",
                  }),
                  (0, d.jsxs)("div", {
                    className: "card-stake-total-img",
                    children: [
                      (0, d.jsx)("img", {
                        src: "img/general/dchf-coin.svg",
                        alt: "dchf-coin",
                        className: "big-coin",
                      }),
                      (0, d.jsx)("img", {
                        width: "80px",
                        height: "80px",
                        src: "/img/logos/curve-large.png",
                        alt: "",
                        className: "img-fluid",
                        style: { position: "absolute", left: 0, bottom: 0 },
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: "card-stake-total-content",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, d.jsxs)("h1", {
                            className: "d-flex",
                            style: {
                              height: "24px",
                              gap: "4px",
                              whiteSpace: "nowrap",
                            },
                            children: [
                              "Your Deposit",
                              " ",
                              (0, d.jsx)("div", {
                                children: (0, d.jsx)(M.WH, {
                                  Content: (0, d.jsx)(P, {
                                    userStaked: b,
                                    coinsBreakdown: o,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, d.jsxs)("p", { children: [i, " DCHF"] }),
                        ],
                      }),
                      (0, d.jsxs)("p", {
                        className: "user-stake-total-usd",
                        children: [" ≈ ", m, "$"],
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
                                  q("totalRewardsGenerated"),
                                  " ",
                                  (0, d.jsx)("div", {
                                    children: (0, d.jsx)(M.u, { text: Q }),
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("p", { children: [I, " CHF"] }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: "claim-button",
                            children: (0, d.jsx)("button", {
                              onClick: function () {
                                return F.apply(this, arguments);
                              },
                              disabled: !O,
                              style: G
                                ? { backgroundColor: "#bf1304", color: "white" }
                                : O
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
                                    style: G ? { marginRight: "1.5rem" } : {},
                                    children: G
                                      ? ""
                                          .concat(q("claim"), " ")
                                          .concat(A, "...")
                                      : q(H ? "success" : "claim"),
                                  }),
                                  G &&
                                    (0, d.jsx)("div", {
                                      className: "smallSpinnerWrapper",
                                      children: (0, d.jsx)(L.XG, {}),
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
        R = c(85770),
        S = c(84531),
        T = c(43335),
        U = c(87170),
        V = c.n(U);
      function W(a) {
        var b = a.handleChange,
          c = function (a) {
            b && b(a), g(!1);
          },
          e = (0, h.useState)(!1),
          f = e[0],
          g = e[1],
          i = (0, h.useRef)(null);
        return (
          !(function (a, b) {
            (0, h.useEffect)(
              function () {
                var c = function (c) {
                  a.current && !a.current.contains(c.target) && b();
                };
                return (
                  document.addEventListener("mousedown", c),
                  function () {
                    document.removeEventListener("mousedown", c);
                  }
                );
              },
              [a]
            );
          })(i, function () {
            return g(!1);
          }),
          (0, d.jsxs)("div", {
            className: V().dropdown,
            ref: i,
            children: [
              (0, d.jsx)("div", {
                onClick: function () {
                  return g(function (a) {
                    return !a;
                  });
                },
                children: (0, d.jsx)("img", {
                  src: "/img/icons/caret.svg",
                  width: "20px",
                  style: { transform: f ? "rotate(180deg)" : "none" },
                  alt: "",
                }),
              }),
              (0, d.jsxs)("div", {
                className: V()["dropdown-content"],
                style: { display: f ? "block" : "none" },
                children: [
                  (0, d.jsxs)("div", {
                    onClick: function () {
                      return c("usdc");
                    },
                    className: V().item,
                    children: [
                      (0, d.jsx)("img", {
                        src: "/img/cryptos/usdc.svg",
                        width: "24px",
                        alt: "",
                      }),
                      "USDC",
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: V().item,
                    onClick: function () {
                      return c("dai");
                    },
                    children: [
                      (0, d.jsx)("img", {
                        src: "/img/cryptos/dai.svg",
                        width: "24px",
                        alt: "",
                      }),
                      "DAI",
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: V().item,
                    onClick: function () {
                      return c("usdt");
                    },
                    children: [
                      (0, d.jsx)("img", {
                        src: "/img/cryptos/usdt.svg",
                        width: "24px",
                        alt: "",
                      }),
                      "USDT",
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var X = function (a) {
          var b = a.isStake,
            c = a.inputAmount,
            e = a.helperValue,
            f = a.handleInputChange,
            g = a.warning,
            h = a.title,
            i = a.coin,
            j = a.icon,
            k = a.handleChange,
            l = (0, K.$)().t;
          return (0, d.jsxs)("div", {
            className: "dchf-form",
            children: [
              (0, d.jsxs)("label", { children: [h, " ", i.toUpperCase()] }),
              (0, d.jsxs)("div", {
                className: "dchf-form-wrap",
                children: [
                  (0, d.jsx)(S.Z, {
                    type: "number",
                    value: c,
                    placeholder: 0,
                    onChange: function (a) {
                      return f(a.target.value);
                    },
                  }),
                  (0, d.jsxs)("div", {
                    className: "dchf-form-info",
                    children: [
                      (0, d.jsx)(T.d, {
                        value: e,
                        symbol: i.toUpperCase(),
                        text: l(b ? "available" : "wallet"),
                        onClick: function () {
                          return f(e);
                        },
                      }),
                      (0, d.jsx)("div", {
                        className: "dchf-form-info-icon",
                        children: (0, d.jsx)("img", {
                          src: j,
                          alt: "icon",
                          width: "28px",
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsx)(W, { handleChange: k }),
                ],
              }),
              g &&
                (0, d.jsx)("div", {
                  style: { color: "#bf1304", margin: "8px 0" },
                  children: (0, d.jsx)("b", { children: g }),
                }),
            ],
          });
        },
        Y = function (a) {
          var b = a.isStake,
            c = a.inputAmount,
            e = a.helperValue,
            f = a.handleInputChange,
            g = a.warning,
            h = a.title,
            i = a.coin,
            j = a.icon,
            k = (0, K.$)().t;
          return (0, d.jsxs)("div", {
            className: "dchf-form",
            children: [
              (0, d.jsx)("label", { children: h }),
              (0, d.jsxs)("div", {
                className: "dchf-form-wrap",
                children: [
                  (0, d.jsx)(S.Z, {
                    type: "number",
                    value: c,
                    placeholder: 0,
                    onChange: function (a) {
                      return f(a.target.value);
                    },
                  }),
                  (0, d.jsxs)("div", {
                    className: "dchf-form-info",
                    children: [
                      (0, d.jsx)(T.d, {
                        value: e,
                        symbol: i,
                        text: k(b ? "available" : "wallet"),
                        onClick: function () {
                          return f(e);
                        },
                      }),
                      (0, d.jsx)("div", {
                        className: "dchf-form-info-icon",
                        children: (0, d.jsx)("img", {
                          src: j,
                          alt: "icon",
                          width: "28px",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              g &&
                (0, d.jsx)("div", {
                  style: { color: "#bf1304", margin: "8px 0" },
                  children: (0, d.jsx)("b", { children: g }),
                }),
            ],
          });
        },
        Z = {
          dai: { decimals: 18, index: 1, name: "DAI" },
          usdc: { decimals: 6, index: 2, name: "USDC" },
          usdt: { decimals: 6, index: 3, name: "USDT" },
        },
        $ = {
          isApproveLiquidity: !1,
          isLiquidity: !1,
          isApproveStaking: !1,
          isStaking: !1,
          isSuccess: !1,
          isError: !1,
        },
        _ = function (a) {
          var b = a.isStake,
            c = a.userDchfBalance,
            f = a.extraBal,
            i = a.userStaked,
            m = a.setForceRefresh,
            o = a.setPriceImpact,
            p = a.priceImpact,
            q = a.handleDepositAmount,
            r = function (a) {
              R($), D(a);
            },
            s = function (a) {
              R($), I(a);
            },
            t = function (a) {
              O(a);
            },
            u = (0, k.C)(l.D0),
            v = (0, K.$)().t,
            x = (0, j.G)(),
            y = x.contracts,
            z = x.addresses,
            A = (0, h.useState)("-"),
            C = A[0],
            D = A[1],
            E = (0, h.useState)("-"),
            G = E[0],
            I = E[1],
            M = (0, h.useState)("usdc"),
            N = M[0],
            O = M[1],
            P = (0, h.useState)($),
            Q = P[0],
            R = P[1];
          function S(a) {
            return T.apply(this, arguments);
          }
          function T() {
            return (T = (0, e.Z)(
              g().mark(function a(b) {
                var c;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, n.Z)({}, $)),
                          "approve-liquidity" === b &&
                            (c.isApproveLiquidity = !0),
                          "liquidity" === b && (c.isLiquidity = !0),
                          "approve-staking" === b && (c.isApproveStaking = !0),
                          "staking" === b && (c.isStaking = !0),
                          "success" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          R(c);
                      case 8:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function U() {
            return (U = (0, e.Z)(
              g().mark(function a() {
                var c, d, e;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (u) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        if (
                          ((c = "-" === C ? "0" : C),
                          (d = "-" === G ? "0" : G),
                          (e = void 0),
                          !b)
                        ) {
                          a.next = 11;
                          break;
                        }
                        return (a.next = 8), F(y, z, c, d, Z[N], u, S);
                      case 8:
                        (e = a.sent), (a.next = 14);
                        break;
                      case 11:
                        return (a.next = 13), H(y, z, c, u, S);
                      case 13:
                        e = a.sent;
                      case 14:
                        e && (m(!0), D(""), I(""));
                      case 15:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function V() {
            return (V = (0, e.Z)(
              g().mark(function a(b, c) {
                var d;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (!(!b && !c)) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", o(0));
                      case 2:
                        return (a.next = 4), B(y, z, b, c, Z[N]);
                      case 4:
                        o((d = a.sent));
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
              if (u) {
                var a = "-" === C ? 0 : +C,
                  c = "-" === G ? 0 : +G;
                b &&
                  (function (a, b) {
                    V.apply(this, arguments);
                  })(a, c),
                  b && q(a + c);
              }
            },
            [C, G]
          );
          var W,
            _,
            aa,
            ab,
            ac,
            ad,
            ae,
            af,
            ag,
            ah,
            ai,
            aj,
            ak,
            al,
            am =
              Q.isLiquidity ||
              Q.isStaking ||
              Q.isApproveLiquidity ||
              Q.isApproveStaking,
            an =
              ((ac = Q),
              (ad = b),
              (ae = ac.isLiquidity),
              (af = ac.isStaking),
              (ag = ac.isSuccess),
              (ah = ac.isApproveLiquidity),
              (ai = ac.isApproveStaking),
              ah
                ? ad
                  ? "1/4  Approve Add Liquidity ..."
                  : "2/2  Withdrawing liquidity..."
                : ae
                ? ad
                  ? "2/4  Adding Liquidity ..."
                  : "2/2  Withdrawing liquidity..."
                : ai
                ? ad
                  ? "3/4  Approve Staking DCHF-3CRV..."
                  : "1/2  Un-Staking DCHF-3CRV...."
                : af
                ? ad
                  ? "4/4  Staking DCHF-3CRV..."
                  : "1/2  Un-Staking DCHF-3CRV...."
                : ag
                ? "Success"
                : ad
                ? "Deposit & Stake"
                : "Unstake & Withdraw"),
            ao = (0, w.uf)(b ? c : i),
            ap = Z[N],
            aq = (0, w.uf)(f[N], ap.decimals),
            ar =
              ((W = b),
              (_ = C),
              (aa = c),
              (ab = i),
              W
                ? 1e18 * +_ > +aa
                  ? "You don't have enough Funds!"
                  : ""
                : +_ > +ab / 1e18
                ? "You did not stake that many Funds!"
                : void 0),
            as =
              ((aj = G),
              (ak = f[N]),
              +aj * Math.pow(10, (al = ap.decimals)) > +ak
                ? "You don't have enough Funds!"
                : "");
          return (0, d.jsxs)("div", {
            className: "card-stake-form",
            children: [
              (0, d.jsx)(Y, {
                isStake: b,
                inputAmount: C,
                helperValue: ao,
                handleInputChange: r,
                warning: ar,
                title: b ? "Deposit DCHF" : "Withdraw",
                coin: b ? "DCHF" : "DCHF-3CRV",
                icon: "/img/general/".concat(b ? "dchf" : "curve", "-icon.svg"),
              }),
              b &&
                (0, d.jsx)(X, {
                  isStake: b,
                  inputAmount: G,
                  helperValue: aq,
                  handleInputChange: s,
                  warning: as,
                  title: "Deposit ",
                  coin: N,
                  icon: "/img/cryptos/".concat(N, ".svg"),
                  handleChange: t,
                }),
              (0, d.jsx)("div", {
                className: "selfCenter",
                style: { color: "#bf1304", margin: "0 0 8px 0" },
                children:
                  p > 5
                    ? (0, d.jsxs)("b", {
                        children: [" High Price Impact: ", (0, J.x)(p), "%"],
                      })
                    : null,
              }),
              (0, d.jsx)("div", {
                className: "deposit-button-explanation",
                style: { fontSize: "14px", marginBottom: "1rem" },
                children:
                  "Invest your funds in a 50/50 ratio between DCHF and the other asset.",
              }),
              (0, d.jsx)("button", {
                className: "button button-primary",
                onClick: function () {
                  return U.apply(this, arguments);
                },
                disabled: (!(+C > 0) && !(+G > 0)) || !!ar || !!as,
                children: (0, d.jsxs)("div", {
                  className: "confirmButtonMainWrapper",
                  children: [
                    (0, d.jsx)("div", {
                      className: "selfCenter widthThirtyThree",
                      children: an,
                    }),
                    am &&
                      (0, d.jsx)("div", {
                        className: "spinnerWrapper",
                        children: (0, d.jsx)(L.ZP, {}),
                      }),
                  ],
                }),
              }),
              (0, d.jsx)("div", {
                className: "deposit-button-explanation",
                children: b
                  ? "4 steps to Deposit & Stake Funds"
                  : "2 steps to Un-stake & Withdraw funds",
              }),
              Q.isError &&
                (0, d.jsx)("div", {
                  className: "selfCenter",
                  style: { color: "#bf1304", margin: "8px 0" },
                  children: (0, d.jsxs)("b", {
                    children: [" ", v("somethingWentWrong")],
                  }),
                }),
            ],
          });
        },
        aa = (0, w.Md)("0"),
        ab = { ratio: 0, userAmount: 0 },
        ac = {
          userDchfBal: aa,
          userUSDCBal: aa,
          userDAIBal: aa,
          userUSDTBal: aa,
          userStakedAmount: aa,
          userStaked: {
            dchf: aa,
            usd: aa,
            breakdown: { dai: ab, dchf: ab, usdc: ab, usdt: ab },
          },
          userLpBalance: aa,
          lpPrice: aa,
          apr: 0,
          tvl: 0,
          bunni: { tvl: 0, apy: 0 },
          rewards: { mon: aa, crv: aa, total: 0 },
        },
        ad = function (a) {
          var b = a.totalStaked,
            c = a.apr,
            e = a.priceImpact;
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section",
            children: [
              (0, d.jsx)(R.M$, { title: "Details" }),
              (0, d.jsx)(R.X8, {
                title: "Price Impact + Fees",
                value: "".concat((0, J.x)(e), "%"),
              }),
              (0, d.jsx)(R.X8, {
                title: "24h APR",
                value: "".concat(c, "%"),
                toolTip:
                  "The displayed Rewards is the average of the past 24 hours. The actual APR varies depending on the Trading Volume happening on Curve.",
              }),
              (0, d.jsx)(R.X8, {
                title: "Provide Liquidity to Earn",
                value: "MON + CRV",
              }),
              (0, d.jsx)(R.X8, { title: "TVL", value: "".concat(b, " $") }),
              (0, d.jsx)(R.k1, {
                title: "Pool",
                value: "Curve Finance",
                redirectLink: "https://curve.fi/factory-crypto/116/deposit",
              }),
            ],
          });
        },
        ae = function (a) {
          var b = a.dailyIncome,
            c = (0, J.x)(30 * b),
            e = (0, J.x)(365 * b);
          return (0, d.jsxs)("div", {
            className: "info-sidebar-section",
            children: [
              (0, d.jsx)(R.M$, { title: "Estimated Returns" }),
              (0, d.jsx)(R.X8, {
                title: "Daily Income",
                value: "".concat((0, J.x)(b), " CHF"),
              }),
              (0, d.jsx)(R.X8, {
                title: "Monthly Income",
                value: "".concat(c, " CHF"),
              }),
              (0, d.jsx)(R.X8, {
                title: "Yearly Income",
                value: "".concat(e, " CHF"),
              }),
            ],
          });
        },
        af = function (a) {
          var b = a.bunni;
          return (0, d.jsxs)("div", {
            className: "bunniBanner desktop",
            children: [
              (0, d.jsx)("div", { className: "background" }),
              (0, d.jsxs)("div", {
                className: "text-container",
                children: [
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsxs)("div", {
                        className: "assets",
                        children: [
                          (0, d.jsx)("img", {
                            src: "/img/cryptos/dchf.svg",
                            alt: "bunni-logo",
                            width: "32px",
                          }),
                          (0, d.jsx)("img", {
                            src: "/img/cryptos/usdc.svg",
                            alt: "bunni-logo",
                            width: "32px",
                          }),
                        ],
                      }),
                      (0, d.jsx)("img", {
                        src: "img/icons/bunni.svg",
                        style: { marginRight: "0.25rem" },
                        alt: "bunni-logo",
                        className: "bunni-logo",
                      }),
                      (0, d.jsxs)("span", {
                        className: "title",
                        children: [
                          "Provide liquidity on Bunni.pro and Earn ",
                          (0, d.jsx)("b", { children: "LIT" }),
                          ".",
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "pill",
                        children: (0, d.jsxs)("span", {
                          children: [
                            (0, d.jsx)("span", {
                              className: "label",
                              children: "APY",
                            }),
                            " ",
                            b.apy.toFixed(2),
                            "%",
                          ],
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: "pill",
                        children: (0, d.jsxs)("span", {
                          children: [
                            (0, d.jsx)("span", {
                              className: "label",
                              children: "TVL",
                            }),
                            " $ ",
                            (b.tvl / 1e6).toFixed(2),
                            "M",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ag = function (a) {
          var b = a.bunni;
          return (0, d.jsxs)("div", {
            className: "bunniBanner mobile",
            children: [
              (0, d.jsx)("div", { className: "background" }),
              (0, d.jsxs)("div", {
                className: "text-container",
                style: { flexDirection: "column" },
                children: [
                  (0, d.jsxs)("div", {
                    style: {
                      marginBottom: "16px",
                      width: "100%",
                      justifyContent: "space-between",
                    },
                    children: [
                      (0, d.jsx)("img", {
                        src: "img/icons/bunni.svg",
                        className: "bunni-logo",
                        style: { marginRight: "0.25rem" },
                        alt: "bunni-logo",
                      }),
                      (0, d.jsxs)("span", {
                        className: "title",
                        children: [
                          "Provide liquidity on Bunni.pro and Earn ",
                          (0, d.jsx)("b", { children: "LIT" }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    style: {
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    },
                    children: [
                      (0, d.jsxs)("div", {
                        className: "assets",
                        children: [
                          (0, d.jsx)("img", {
                            src: "/img/cryptos/dchf.svg",
                            alt: "bunni-logo",
                            width: "32px",
                          }),
                          (0, d.jsx)("img", {
                            src: "/img/cryptos/usdc.svg",
                            alt: "bunni-logo",
                            width: "32px",
                          }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "pill",
                        children: (0, d.jsxs)("span", {
                          children: [
                            (0, d.jsx)("span", {
                              className: "label",
                              children: "APY",
                            }),
                            " ",
                            b.apy.toFixed(2),
                            "%",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ah = function (a) {
          var b = a.bunni;
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(ag, { bunni: b }),
              (0, d.jsx)(af, { bunni: b }),
            ],
          });
        },
        ai = function () {
          var a = (0, K.$)().t,
            b = (0, k.C)(l.D0),
            c = (0, h.useState)(ac),
            f = c[0],
            m = c[1],
            n = (0, h.useState)(!1),
            o = n[0],
            p = n[1],
            q = (0, h.useState)(0),
            r = q[0],
            s = q[1],
            t = (0, h.useState)(0),
            u = t[0],
            v = t[1],
            y = (0, h.useState)("deposit"),
            A = y[0],
            B = y[1],
            C = (0, j.G)(),
            D = C.contracts,
            E = C.addresses,
            F = function (a) {
              if (a === A) return B("deposit");
              B(a);
            };
          function G() {
            return H.apply(this, arguments);
          }
          function H() {
            return (H = (0, e.Z)(
              g().mark(function a() {
                var c;
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (b) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), z(D, E, b);
                      case 4:
                        (c = a.sent) && m(c);
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
                        if (!b) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), x();
                      case 4:
                        (c = a.sent) && m(c);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function L() {
            return (L = (0, e.Z)(
              g().mark(function a(b) {
                return g().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        v(1e18 * b);
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          (0, h.useEffect)(
            function () {
              b
                ? G()
                : (function () {
                    return I.apply(this, arguments);
                  })();
            },
            [b]
          ),
            (0, h.useEffect)(
              function () {
                o && (G(), p(!1));
              },
              [o]
            );
          var M = (0, J.x)(f.tvl, 0),
            N = (0, w.He)(f.userStakedAmount),
            O = (0, J.x)(f.apr),
            P = (f.apr * (+f.userStaked.dchf + u)) / 100 / 365 / 1e18;
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
                        a("investHeroText"),
                        " ",
                        (0, d.jsxs)("span", {
                          children: [
                            "Learn more,",
                            " ",
                            (0, d.jsx)("a", {
                              href: "https://docs.defifranc.com/",
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
                children: (0, d.jsxs)("div", {
                  className: "col-lg-10 col-xl-11 col-xxl-10",
                  children: [
                    (0, d.jsx)(ah, { bunni: f.bunni }),
                    (0, d.jsxs)("div", {
                      className: "card card-borrow",
                      children: [
                        (0, d.jsx)("div", {
                          className: "card-borrow-left",
                          children: (0, d.jsx)("div", {
                            className: "row",
                            children: (0, d.jsxs)("div", {
                              className: "col-lg-12 col-xl-12 col-xxl-12",
                              children: [
                                (0, d.jsx)(Q, {
                                  userStakedInDCHF: (0, w.He)(
                                    f.userStaked.dchf
                                  ),
                                  userStakedUSD: (0, w.He)(f.userStaked.usd),
                                  userStaked: N,
                                  setForceRefresh: p,
                                  rewards: f.rewards,
                                  coinsBreakdown: f.userStaked.breakdown,
                                }),
                                (0, d.jsx)(i.Z, {
                                  type: A,
                                  withdrawDisable: 0 == +f.userStakedAmount,
                                  handleClick: F,
                                }),
                                (0, d.jsx)(_, {
                                  isStake: "deposit" === A,
                                  userDchfBalance: f.userDchfBal,
                                  userStaked: f.userStakedAmount,
                                  setForceRefresh: p,
                                  extraBal: {
                                    usdc: f.userUSDCBal,
                                    dai: f.userDAIBal,
                                    usdt: f.userUSDTBal,
                                  },
                                  setPriceImpact: s,
                                  priceImpact: r,
                                  handleDepositAmount: function (a) {
                                    return L.apply(this, arguments);
                                  },
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, d.jsxs)("div", {
                          className: "card-borrow-right",
                          children: [
                            (0, d.jsx)(ad, {
                              totalStaked: M,
                              apr: O,
                              priceImpact: r,
                            }),
                            (0, d.jsx)(ae, { dailyIncome: P }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        aj = function () {
          return (0, d.jsx)(ai, {});
        };
    },
    87170: function (a) {
      a.exports = {
        dropdown: "styles_dropdown__w69aG",
        "dropdown-btn": "styles_dropdown-btn__vXZb1",
        "dropdown-content": "styles_dropdown-content__PvUuU",
        item: "styles_item__lYli0",
      };
    },
  },
  function (a) {
    a.O(0, [193, 335, 774, 888, 179], function () {
      var b;
      return a((a.s = 38352));
    }),
      (_N_E = a.O());
  },
]);
