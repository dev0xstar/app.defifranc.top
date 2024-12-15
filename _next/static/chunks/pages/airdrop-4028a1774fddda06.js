(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [393],
  {
    1093: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/airdrop",
        function () {
          return c(2052);
        },
      ]);
    },
    2052: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return ac;
          },
        });
      var d = c(85893),
        e = c(2962),
        f = c(47568),
        g = c(34051),
        h = c.n(g),
        i = c(67294),
        j = c(16766),
        k = c(10253),
        l = c(64487),
        m = c(9669),
        n = c.n(m),
        o = c(84243),
        p = c(35553),
        q = "https://dev-api.defifranc.com/airdrop-data",
        r = o.$;
      function s(a, b, c) {
        return t.apply(this, arguments);
      }
      function t() {
        return (t = (0, f.Z)(
          h().mark(function a(b, c, d) {
            var e,
              f,
              g,
              i,
              m,
              o,
              p,
              r,
              s,
              t,
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
              K,
              L,
              M;
            return h().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (a.next = 3),
                        Promise.all([
                          n().get("".concat(q, "/amount/?address=").concat(d)),
                          b.AirdropMON.getClaimableMONVesting(d),
                          b.AirdropMON.entitiesVesting(d),
                          b.AirdropMON.isFreezerUser(d),
                          b.AirdropMON.getUserPendingGainInDCHF(d),
                          b.AirdropMON.stakes(d),
                          b.AirdropMON.getPendingDCHFGain(d),
                          b.AirdropMON.getPendingAssetGain(c.renBTC, d),
                          b.AirdropMON.getPendingAssetGain(c.ETH, d),
                          n().get(
                            "https://dev-api.defifranc.com/current-data/staking-apr"
                          ),
                          b.AirdropMON.getGlobalPendingRewardsInDCHF(),
                          b.MONStaking.getPendingAssetGain(c.ETH, c.AirdropMON),
                          b.MONStaking.getPendingAssetGain(
                            c.renBTC,
                            c.AirdropMON
                          ),
                          b.MONStaking.getPendingDCHFGain(c.AirdropMON),
                          b.AirdropMON.status(),
                        ])
                      );
                    case 3:
                      return (
                        (e = a.sent),
                        (i = (g = (f = (0, k.Z)(e, 15))[0]).data),
                        (m = f[1]),
                        (o = f[2]),
                        (p = f[3]),
                        (r = f[4]),
                        (s = f[5]),
                        (t = f[6]),
                        (u = f[7]),
                        (v = f[8]),
                        (w = f[9]),
                        (x = w.data),
                        (y = f[10]),
                        (z = f[11]),
                        (A = f[12]),
                        (B = f[13]),
                        (D =
                          +(C = f[14]._totalMONStaked) > 0
                            ? C
                            : (0, j.Md)("1")),
                        (E = B.mul(s).div(D)),
                        (F = A.mul(s).div(D)),
                        (G = z.mul(s).div(D)),
                        (H = y.mul(s).div(D)),
                        (I = o.claimed),
                        (J = o.totalMON),
                        (K = (null == x ? void 0 : x.value) || 0),
                        (L = +J > 0),
                        (M = { eth: v.add(G), btc: u.add(F), dchf: t.add(E) }),
                        a.abrupt("return", {
                          airdropAmount: i,
                          claimableMon: m,
                          claimed: I,
                          totalMON: J,
                          totalStakedFreezer: s,
                          isVestingUser: L,
                          isFreezerUser: p,
                          userFreezeRewards: r.add(H),
                          totalClaimedFreezeRewards: M,
                          freezerApr: K,
                        })
                      );
                    case 17:
                      return (
                        (a.prev = 17),
                        (a.t0 = a.catch(0)),
                        console.error("Fetch Initial Data error ->", a.t0),
                        l.Tb(a.t0),
                        a.abrupt("return", Z)
                      );
                    case 22:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 17]]
            );
          })
        )).apply(this, arguments);
      }
      function u(a) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, f.Z)(
          h().mark(function a(b) {
            var c, d, e, f;
            return h().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (a.next = 3),
                        n().get("".concat(q, "/proof/?address=").concat(b))
                      );
                    case 3:
                      return (d = (c = a.sent).data), a.abrupt("return", d);
                    case 8:
                      return (
                        (a.prev = 8),
                        (a.t0 = a.catch(0)),
                        (a.prev = 10),
                        (a.next = 13),
                        n().get(
                          ""
                            .concat(q, "/proof/?address=")
                            .concat(b.toLocaleLowerCase())
                        )
                      );
                    case 13:
                      return (f = (e = a.sent).data), a.abrupt("return", f);
                    case 18:
                      throw (
                        ((a.prev = 18),
                        (a.t1 = a.catch(10)),
                        Error("We could not validate the user address"))
                      );
                    case 21:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [
                [0, 8],
                [10, 18],
              ]
            );
          })
        )).apply(this, arguments);
      }
      function w(a, b, c) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = (0, f.Z)(
          h().mark(function a(b, c, d) {
            var e, f, g, i, j;
            return h().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        d("loading-transaction"),
                        (a.next = 4),
                        n().get("".concat(q, "/amount/?address=").concat(c))
                      );
                    case 4:
                      return (
                        (f = (e = a.sent).data),
                        (g = r.encode(["uint256"], [p.vz(f.toString(), 18)])),
                        (a.next = 9),
                        u(c)
                      );
                    case 9:
                      return (
                        (i = a.sent),
                        (a.next = 12),
                        b.AirdropMON.claimAirdrop(g, i)
                      );
                    case 12:
                      return (j = a.sent), (a.next = 15), j.wait();
                    case 15:
                      return d("success"), a.abrupt("return", !0);
                    case 19:
                      return (
                        (a.prev = 19),
                        (a.t0 = a.catch(0)),
                        console.error("Join Airdrop error ->", { err: a.t0 }),
                        d("error"),
                        l.Tb(a.t0),
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
      function y(a, b) {
        return z.apply(this, arguments);
      }
      function z() {
        return (z = (0, f.Z)(
          h().mark(function a(b, c) {
            var d, e, f;
            return h().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        c("freezing-funds"),
                        (a.next = 4),
                        b.AirdropMON.estimateGas.addUserToFreezer()
                      );
                    case 4:
                      return (
                        (e = (d = a.sent)
                          .mul((0, j.Md)("12"))
                          .div((0, j.Md)("10"))),
                        (a.next = 8),
                        b.AirdropMON.addUserToFreezer({ gasLimit: e })
                      );
                    case 8:
                      return (f = a.sent), (a.next = 11), f.wait();
                    case 11:
                      return c("success"), a.abrupt("return", !0);
                    case 15:
                      return (
                        (a.prev = 15),
                        (a.t0 = a.catch(0)),
                        c("error"),
                        l.Tb(a.t0),
                        a.abrupt("return", !1)
                      );
                    case 20:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 15]]
            );
          })
        )).apply(this, arguments);
      }
      function A(a, b) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = (0, f.Z)(
          h().mark(function a(b, c) {
            var d, e, f;
            return h().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        c("loading-transaction"),
                        (a.next = 4),
                        b.AirdropMON.estimateGas.claimMONVesting()
                      );
                    case 4:
                      return (
                        (e = (d = a.sent)
                          .mul((0, j.Md)("12"))
                          .div((0, j.Md)("10"))),
                        (a.next = 8),
                        b.AirdropMON.claimMONVesting({ gasLimit: e })
                      );
                    case 8:
                      return (f = a.sent), (a.next = 11), f.wait();
                    case 11:
                      return c("success"), a.abrupt("return", !0);
                    case 15:
                      return (
                        (a.prev = 15),
                        (a.t0 = a.catch(0)),
                        c("error"),
                        l.Tb(a.t0),
                        a.abrupt("return", !1)
                      );
                    case 20:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 15]]
            );
          })
        )).apply(this, arguments);
      }
      function C(a, b) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = (0, f.Z)(
          h().mark(function a(b, c) {
            var d, e, f;
            return h().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        c("loading-transaction"),
                        (a.next = 4),
                        b.AirdropMON.estimateGas.claimRewards()
                      );
                    case 4:
                      return (
                        (e = (d = a.sent)
                          .mul((0, j.Md)("12"))
                          .div((0, j.Md)("10"))),
                        (a.next = 8),
                        b.AirdropMON.claimRewards({ gasLimit: e })
                      );
                    case 8:
                      return (f = a.sent), (a.next = 11), f.wait();
                    case 11:
                      return c("success"), a.abrupt("return", !0);
                    case 15:
                      return (
                        (a.prev = 15),
                        (a.t0 = a.catch(0)),
                        c("error"),
                        l.Tb(a.t0),
                        a.abrupt("return", !1)
                      );
                    case 20:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 15]]
            );
          })
        )).apply(this, arguments);
      }
      var E = c(21043),
        F = c(57345),
        G = c(13499),
        H = c(80069),
        I = function (a) {
          var b = a.children;
          return (0, d.jsxs)("div", {
            className: "top airdrop",
            children: [
              (0, d.jsx)("div", {
                className: "back-token",
                children: (0, d.jsx)("img", {
                  width: 130,
                  src: "/img/launch/moneta-coin.png",
                  alt: "",
                  className: "img-fluid",
                }),
              }),
              (0, d.jsx)("div", {
                className:
                  "investments d-flex align-items-center justify-content-around",
                children: (0, d.jsx)("div", {
                  className:
                    "receive d-flex align-items-center justify-content-around flex-column",
                  children: b,
                }),
              }),
            ],
          });
        },
        J = function (a) {
          var b = a.userExpectedMon,
            c = a.claimableMon,
            e = a.isFreezing,
            f = a.isStaking,
            g = a.dchfRewards;
          return e
            ? (0, d.jsxs)(I, {
                children: [
                  (0, d.jsx)("span", {
                    className: "header-titles",
                    children: "Claimable now (in CHF)",
                  }),
                  (0, d.jsxs)("div", {
                    className: "header-values",
                    children: [
                      (0, j.He)(g),
                      " ",
                      (0, d.jsx)("span", { children: "CHF" }),
                    ],
                  }),
                ],
              })
            : f
            ? (0, d.jsxs)(I, {
                children: [
                  (0, d.jsx)("span", {
                    className: "header-titles",
                    children: "Claimable now",
                  }),
                  (0, d.jsxs)("div", {
                    className: "header-values",
                    children: [
                      (0, j.He)(c),
                      " ",
                      (0, d.jsx)("span", { children: "MON" }),
                    ],
                  }),
                ],
              })
            : (0, d.jsxs)(I, {
                children: [
                  (0, d.jsx)("span", {
                    className: "header-titles",
                    children: "Amount Eligible for Airdrop",
                  }),
                  (0, d.jsxs)("div", {
                    className: "header-values",
                    children: [
                      (0, H.x)(b),
                      " ",
                      (0, d.jsx)("span", { children: "MON" }),
                    ],
                  }),
                  (0, d.jsx)("span", {
                    className: "header-titles",
                    children: "Join the Airdrop first",
                  }),
                ],
              });
        },
        K = function () {
          return (0, d.jsx)("section", {
            className: "hero",
            children: (0, d.jsx)("div", {
              className: "dchf-container",
              children: (0, d.jsx)("div", {
                className: "hero-header",
                children: (0, d.jsx)("h1", {
                  className: "font-bold reveal",
                  children: "Moneta Airdrop",
                }),
              }),
            }),
          });
        },
        L = function (a) {
          var b = a.title,
            c = a.value;
          return (0, d.jsxs)("div", {
            className:
              "item d-flex justify-content-between w-100 airdrop-card-information-item",
            children: [
              (0, d.jsx)("div", {
                className: "title-wrapper",
                children: (0, d.jsx)("h1", { children: b }),
              }),
              (0, d.jsx)("div", {
                className: "item-value",
                children: (0, d.jsx)("b", { children: c }),
              }),
            ],
          });
        },
        M = function (a) {
          var b = a.children;
          return (0, d.jsx)("div", {
            className: "airdrop information-section",
            children: (0, d.jsx)("div", {
              className: "airdrop information-section-content",
              children: b,
            }),
          });
        },
        N = function (a) {
          var b = a.totalToClaim,
            c = a.claimed,
            e = a.freezeRewards,
            f = a.isFreezerUser,
            g = a.totalStakedFreezer,
            h = a.freezerApr,
            i = b.sub(c);
          return f
            ? (0, d.jsxs)(M, {
                children: [
                  (0, d.jsx)(L, {
                    title: "APR",
                    value: "".concat((0, H.x)(h), " %"),
                  }),
                  (0, d.jsx)(L, {
                    title: "Total Monetas Frozen",
                    value: "".concat((0, j.He)(g, 18, 2), " MON"),
                  }),
                  (0, d.jsx)(L, { title: "-----", value: "" }),
                  (0, d.jsx)(L, {
                    title: "Pending wBTC",
                    value: "".concat((0, j.He)(e.btc, 18, 5), " wBTC"),
                  }),
                  (0, d.jsx)(L, {
                    title: "Pending ETH",
                    value: "".concat((0, j.He)(e.eth, 18, 5), " ETH"),
                  }),
                  (0, d.jsx)(L, {
                    title: "Pending DCHF",
                    value: "".concat((0, j.He)(e.dchf, 18, 2), " DCHF"),
                  }),
                ],
              })
            : (0, d.jsxs)(M, {
                children: [
                  (0, d.jsx)(L, {
                    title: "Total to Claim",
                    value: "".concat((0, j.He)(b), " MON"),
                  }),
                  (0, d.jsx)(L, {
                    title: "Claimed so far",
                    value: ""
                      .concat((0, j.He)(c), " MON (")
                      .concat((0, H.x)(+c ? (+c / +b) * 100 : "-"), "%)"),
                  }),
                  (0, d.jsx)(L, {
                    title: "Remaining to claim",
                    value: "".concat((0, j.He)(i), " MON"),
                  }),
                ],
              });
        },
        O = c(26042),
        P = c(20701),
        Q = c(77058),
        R = { isActionLoading: !1, isSuccess: !1, isError: !1 },
        S = function (a) {
          var b = a.airdropAmount,
            c = a.setForceRefresh,
            e = (0, F.C)(G.D0),
            g = (0, E.G)().contracts,
            j = (0, i.useState)(R),
            k = j[0],
            l = j[1];
          function m(a) {
            return n.apply(this, arguments);
          }
          function n() {
            return (n = (0, f.Z)(
              h().mark(function a(b) {
                var c;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, O.Z)({}, R)),
                          "loading-transaction" === b &&
                            (c.isActionLoading = !0),
                          "success" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          l(c);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function o() {
            return (o = (0, f.Z)(
              h().mark(function a() {
                var b;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (e) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), w(g, e, m);
                      case 4:
                        (b = a.sent) && c(!0);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          var p = k.isActionLoading,
            q = (function (a, b) {
              if (!b) return "Connect your wallet";
              var c = a.isActionLoading,
                d = a.isSuccess;
              return c ? "Joining..." : d ? "Success" : "Join The airdrop";
            })(k, e),
            r = (0, Q.$)().t;
          return (0, d.jsxs)("div", {
            className: "airdrop card-stake-form",
            children: [
              (0, d.jsx)("button", {
                className: "button button-primary",
                onClick: function () {
                  return o.apply(this, arguments);
                },
                disabled: b <= 0,
                children: (0, d.jsxs)("div", {
                  className: "confirmButtonMainWrapper",
                  children: [
                    (0, d.jsx)("div", {
                      className: "selfCenter widthThirtyThree",
                      children: q,
                    }),
                    p &&
                      (0, d.jsx)("div", {
                        className: "spinnerWrapper",
                        children: (0, d.jsx)(P.ZP, {}),
                      }),
                  ],
                }),
              }),
              k.isError &&
                (0, d.jsx)("div", {
                  className: "selfCenter",
                  style: { color: "#bf1304", margin: "8px 0" },
                  children: (0, d.jsxs)("b", {
                    children: [" ", r("somethingWentWrong")],
                  }),
                }),
            ],
          });
        },
        T = { isActionLoading: !1, isSuccess: !1, isError: !1 },
        U = function (a) {
          var b = a.setForceRefresh,
            c = a.freezeAmount,
            e = (0, Q.$)().t,
            g = (0, E.G)().contracts,
            k = (0, i.useState)(T),
            l = k[0],
            m = k[1],
            n = (0, F.C)(G.D0);
          function o(a) {
            return p.apply(this, arguments);
          }
          function p() {
            return (p = (0, f.Z)(
              h().mark(function a(b) {
                var c;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, O.Z)({}, T)),
                          "freezing-funds" === b && (c.isActionLoading = !0),
                          "success" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          m(c);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function q() {
            return (q = (0, f.Z)(
              h().mark(function a() {
                var c;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (n) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), y(g, o);
                      case 4:
                        (c = a.sent) && b(!0);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          var r = l.isActionLoading,
            s = (function (a, b, c) {
              if (!b) return "Connect your wallet";
              var d = a.isActionLoading,
                e = a.isSuccess;
              return d
                ? "Freezing Funds..."
                : e
                ? "Success"
                : "Freeze ".concat(c, " (Locked for 2000 Days)");
            })(l, n, (0, j.He)(c));
          return (0, d.jsxs)("div", {
            className: "airdrop card-stake-form",
            children: [
              (0, d.jsx)("button", {
                className: "button button-primary-light",
                onClick: function () {
                  return q.apply(this, arguments);
                },
                children: (0, d.jsxs)("div", {
                  className: "confirmButtonMainWrapper",
                  children: [
                    (0, d.jsx)("div", {
                      className: "selfCenter widthThirtyThree",
                      children: (0, d.jsx)("b", { children: s }),
                    }),
                    r &&
                      (0, d.jsx)("div", {
                        className: "spinnerWrapper",
                        children: (0, d.jsx)(P.ZP, {}),
                      }),
                  ],
                }),
              }),
              l.isError &&
                (0, d.jsx)("div", {
                  className: "selfCenter",
                  style: { color: "#bf1304", margin: "8px 0" },
                  children: (0, d.jsxs)("b", {
                    children: [" ", e("somethingWentWrong")],
                  }),
                }),
            ],
          });
        },
        V = { isActionLoading: !1, isSuccess: !1, isError: !1 },
        W = function (a) {
          var b = a.setForceRefresh,
            c = a.availableToClaim,
            e = (0, F.C)(G.D0),
            g = (0, E.G)().contracts,
            j = (0, i.useState)(V),
            k = j[0],
            l = j[1];
          function m(a) {
            return n.apply(this, arguments);
          }
          function n() {
            return (n = (0, f.Z)(
              h().mark(function a(b) {
                var c;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, O.Z)({}, V)),
                          "loading-transaction" === b &&
                            (c.isActionLoading = !0),
                          "success" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          l(c);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function o() {
            return (o = (0, f.Z)(
              h().mark(function a() {
                var c;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (e) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), A(g, m);
                      case 4:
                        (c = a.sent) && b(!0);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          var p = k.isActionLoading,
            q = (function (a, b, c) {
              if (!b) return "Connect your wallet";
              var d = a.isActionLoading,
                e = a.isSuccess;
              return d
                ? "Claiming MON..."
                : e
                ? "Success"
                : c
                ? "Claim"
                : "Nothing to claim!";
            })(k, e, c),
            r = (0, Q.$)().t;
          return (0, d.jsxs)("div", {
            className: "airdrop card-stake-form",
            children: [
              (0, d.jsx)("button", {
                className: "button button-primary",
                onClick: function () {
                  return o.apply(this, arguments);
                },
                disabled: !c,
                children: (0, d.jsxs)("div", {
                  className: "confirmButtonMainWrapper",
                  children: [
                    (0, d.jsx)("div", {
                      className: "selfCenter widthThirtyThree",
                      children: (0, d.jsx)("b", { children: q }),
                    }),
                    p &&
                      (0, d.jsx)("div", {
                        className: "spinnerWrapper",
                        children: (0, d.jsx)(P.ZP, {}),
                      }),
                  ],
                }),
              }),
              k.isError &&
                (0, d.jsx)("div", {
                  className: "selfCenter",
                  style: { color: "#bf1304", margin: "8px 0" },
                  children: (0, d.jsxs)("b", {
                    children: [" ", r("somethingWentWrong")],
                  }),
                }),
            ],
          });
        },
        X = { isActionLoading: !1, isSuccess: !1, isError: !1 },
        Y = function (a) {
          var b = a.setForceRefresh,
            c = (0, F.C)(G.D0),
            e = (0, E.G)().contracts,
            g = (0, i.useState)(X),
            j = g[0],
            k = g[1];
          function l(a) {
            return m.apply(this, arguments);
          }
          function m() {
            return (m = (0, f.Z)(
              h().mark(function a(b) {
                var c;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, O.Z)({}, X)),
                          "loading-transaction" === b &&
                            (c.isActionLoading = !0),
                          "success" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          k(c);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function n() {
            return (n = (0, f.Z)(
              h().mark(function a() {
                var d;
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (c) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), C(e, l);
                      case 4:
                        (d = a.sent) && b(!0);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          var o = j.isActionLoading,
            p = (function (a, b) {
              if (!b) return "Connect your wallet";
              var c = a.isActionLoading,
                d = a.isSuccess;
              return c ? "Claiming MON..." : d ? "Success" : "Claim";
            })(j, c),
            q = (0, Q.$)().t;
          return (0, d.jsxs)("div", {
            className: "airdrop card-stake-form",
            children: [
              (0, d.jsx)("button", {
                className: "button button-primary",
                onClick: function () {
                  return n.apply(this, arguments);
                },
                children: (0, d.jsxs)("div", {
                  className: "confirmButtonMainWrapper",
                  children: [
                    (0, d.jsx)("div", {
                      className: "selfCenter widthThirtyThree",
                      children: (0, d.jsx)("b", { children: p }),
                    }),
                    o &&
                      (0, d.jsx)("div", {
                        className: "spinnerWrapper",
                        children: (0, d.jsx)(P.ZP, {}),
                      }),
                  ],
                }),
              }),
              j.isError &&
                (0, d.jsx)("div", {
                  className: "selfCenter",
                  style: { color: "#bf1304", margin: "8px 0" },
                  children: (0, d.jsxs)("b", {
                    children: [" ", q("somethingWentWrong")],
                  }),
                }),
            ],
          });
        },
        Z = {
          airdropAmount: 0,
          freezerApr: 0,
          claimableMon: (0, j.Md)("0"),
          claimed: (0, j.Md)("0"),
          totalMON: (0, j.Md)("0"),
          totalStakedFreezer: (0, j.Md)("0"),
          userFreezeRewards: (0, j.Md)("0"),
          isVestingUser: !1,
          isFreezerUser: !1,
          totalClaimedFreezeRewards: {
            eth: (0, j.Md)("0"),
            btc: (0, j.Md)("0"),
            dchf: (0, j.Md)("0"),
          },
        },
        $ = function (a) {
          var b = a.isStaking,
            c = a.isFreezing,
            e = a.handleRefresh,
            f = a.state,
            g = a.isEligible;
          if (b) {
            var h = +f.claimableMon > 0,
              i = f.totalMON.sub(f.claimed);
            return (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(W, { setForceRefresh: e, availableToClaim: h }),
                (0, d.jsx)(U, { setForceRefresh: e, freezeAmount: i }),
              ],
            });
          }
          return c
            ? (0, d.jsx)(Y, { setForceRefresh: e })
            : g
            ? (0, d.jsx)(S, {
                setForceRefresh: e,
                airdropAmount: f.airdropAmount,
              })
            : (0, d.jsx)(W, { setForceRefresh: e, availableToClaim: !1 });
        },
        _ = function () {
          return (0, d.jsx)("div", {
            className: "learn-more-section",
            children: (0, d.jsxs)("span", {
              children: [
                "Learn more,",
                " ",
                (0, d.jsx)("a", {
                  href: "https://docs.defifranc.com/tokenomics/moneta-airdrop",
                  target: "_blank",
                  rel: "noreferrer",
                  style: { marginLeft: "4px" },
                  children: "Read our Documentation",
                }),
              ],
            }),
          });
        },
        aa = function () {
          var a = function () {
              o(!0);
            },
            b = (0, F.C)(G.D0),
            c = (0, E.G)(),
            e = c.contracts,
            g = c.addresses,
            j = (0, i.useState)(Z),
            k = j[0],
            l = j[1],
            m = (0, i.useState)(!1),
            n = m[0],
            o = m[1];
          function p() {
            return q.apply(this, arguments);
          }
          function q() {
            return (q = (0, f.Z)(
              h().mark(function a() {
                var c;
                return h().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (b) {
                            a.next = 2;
                            break;
                          }
                          return a.abrupt("return", null);
                        case 2:
                          return (a.prev = 2), (a.next = 5), s(e, g, b);
                        case 5:
                          (c = a.sent) && l(c), (a.next = 12);
                          break;
                        case 9:
                          (a.prev = 9),
                            (a.t0 = a.catch(2)),
                            console.error(a.t0);
                        case 12:
                          return (a.prev = 12), o(!1), a.finish(12);
                        case 15:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[2, 9, 12, 15]]
                );
              })
            )).apply(this, arguments);
          }
          (0, i.useEffect)(
            function () {
              b && p();
            },
            [b]
          ),
            (0, i.useEffect)(
              function () {
                n && p();
              },
              [n]
            );
          var r = k.claimableMon.gt(0),
            t = !r && !k.isFreezerUser && k.airdropAmount > 0,
            u = r || k.claimed.gt(0);
          return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)("div", {
              className: "claim main",
              children: [
                (0, d.jsx)(K, {}),
                (0, d.jsx)("section", {
                  className: "dchf-works reveal",
                  children: (0, d.jsx)("div", {
                    className: "dchf-container",
                    children: (0, d.jsx)("div", {
                      className:
                        "dchf-wallet-stats d-flex flex-column flex-md-row",
                      children: (0, d.jsxs)("div", {
                        className: "left",
                        children: [
                          (0, d.jsx)(J, {
                            userExpectedMon: k.airdropAmount,
                            claimableMon: k.claimableMon,
                            isFreezing: k.isFreezerUser,
                            isStaking: u,
                            dchfRewards: k.userFreezeRewards,
                          }),
                          (0, d.jsx)(N, {
                            totalToClaim: k.totalMON,
                            claimed: k.claimed,
                            freezeRewards: k.totalClaimedFreezeRewards,
                            isFreezerUser: k.isFreezerUser,
                            totalStakedFreezer: k.totalStakedFreezer,
                            freezerApr: k.freezerApr,
                          }),
                          (0, d.jsx)($, {
                            isStaking: u,
                            isFreezing: k.isFreezerUser,
                            handleRefresh: a,
                            state: k,
                            isEligible: t,
                          }),
                          (0, d.jsx)(_, {}),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        ab = function () {
          return (0, d.jsx)(e.PB, {
            title: "Moneta Airdrop",
            description:
              "The DeFi Franc (DCHF) is a decentralized stablecoin, pegged to the Swiss Franc - The most secure, trusted and stable fiat currency in the world. The DeFi Franc is over-collateralized and is created through loans which are backed by ETH.",
            canonical: "https://www.defifranc.com/",
            openGraph: {
              title: "DeFi Franc (DCHF)",
              description:
                "The DeFi Franc (DCHF) is a decentralized stablecoin, pegged to the Swiss Franc - The most secure, trusted and stable fiat currency in the world. The DeFi Franc is over-collateralized and is created through loans which are backed by ETH.",
              url: "https://defifranc.com/",
              images: [
                {
                  url: "/img/general/moneta-thumbnail.png",
                  width: 2048,
                  height: 1170,
                },
              ],
            },
          });
        },
        ac = function () {
          return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(ab, {}), (0, d.jsx)(aa, {})],
          });
        };
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 1093));
    }),
      (_N_E = a.O());
  },
]);
