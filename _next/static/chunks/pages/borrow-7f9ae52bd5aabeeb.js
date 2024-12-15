(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [259],
  {
    60645: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/borrow",
        function () {
          return c(40731);
        },
      ]);
    },
    40731: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return u;
          },
        });
      var d = c(47568),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(67294),
        i = c(41664),
        j = c.n(i),
        k = c(80069),
        l = c(16766),
        m = c(77058),
        n = function (a) {
          var b,
            c = a.name,
            d = a.sign,
            e = a.dchfAmount,
            f = a.currencyAmount,
            h = a.debt,
            i = a.ratio,
            n = a.tvl,
            o = a.isActive,
            p = a.isBtc,
            q = a.status,
            r = (0, m.$)().t;
          return (0, g.jsxs)("tr", {
            children: [
              (0, g.jsx)("td", {
                className: "table-profile",
                children: (0, g.jsxs)("div", {
                  className: "table-profile-wrap",
                  children: [
                    (0, g.jsx)("div", {
                      className: "table-profile-icon",
                      children: (0, g.jsx)("img", {
                        src: p
                          ? "/img/cryptos/bitcoin.svg"
                          : "/img/cryptos/ethereum.svg",
                        alt: "ethereum-logo",
                      }),
                    }),
                    (0, g.jsx)("div", {
                      className: "table-profile-content",
                      children: (0, g.jsxs)("h1", {
                        style: { position: "relative" },
                        children: [
                          c,
                          " ",
                          d,
                          (0, g.jsx)("div", {
                            style: {
                              position: "absolute",
                              top: "-24px",
                              whiteSpace: "nowrap",
                            },
                            children:
                              1 === (b = q)
                                ? (0, g.jsx)("span", {
                                    className: "alert active",
                                    children: "Active",
                                  })
                                : 2 === b
                                ? (0, g.jsx)("span", {
                                    className: "alert info",
                                    children: "Closed by me",
                                  })
                                : 3 === b
                                ? (0, g.jsx)("span", {
                                    className: "alert danger",
                                    children: "Closed by Liquidation",
                                  })
                                : 4 === b
                                ? (0, g.jsx)("span", {
                                    className: "alert warning",
                                    children: "Closed by Redemption",
                                  })
                                : null,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, g.jsx)("td", {
                className: "table-deposit",
                children: (0, g.jsxs)("div", {
                  className: "table-deposit-wrap",
                  children: [
                    (0, g.jsx)("h2", { children: r("deposit") }),
                    o
                      ? (0, g.jsxs)(g.Fragment, {
                          children: [
                            (0, g.jsxs)("p", {
                              children: [(0, l.He)(f, 18, 4), " ", d],
                            }),
                            (0, g.jsxs)("span", {
                              children: ["≈", (0, l.He)(e, 18, 0), " DCHF"],
                            }),
                          ],
                        })
                      : (0, g.jsx)("p", { children: "-" }),
                  ],
                }),
              }),
              (0, g.jsx)("td", {
                className: "table-debt",
                children: (0, g.jsxs)("div", {
                  className: "table-debt-wrap",
                  children: [
                    (0, g.jsx)("h2", { children: r("debt") }),
                    o
                      ? (0, g.jsxs)("p", {
                          children: [(0, l.He)(h, 18, 0), " DCHF"],
                        })
                      : (0, g.jsx)("p", { children: "-" }),
                  ],
                }),
              }),
              (0, g.jsx)("td", {
                className: "table-ratio",
                children: (0, g.jsxs)("div", {
                  className: "table-ratio-content",
                  children: [
                    (0, g.jsx)("p", { children: r("ratio") }),
                    (0, g.jsxs)("span", { children: [(0, k.x)(i), "%"] }),
                  ],
                }),
              }),
              (0, g.jsx)("td", {
                className: "table-tvl",
                children: (0, g.jsxs)("div", {
                  className: "table-tvl-wrap",
                  children: [
                    (0, g.jsx)("h2", { children: "TVL" }),
                    (0, g.jsxs)("p", {
                      children: [
                        // n ? (0, l.He)(n, 18, 0) : "-",
                        0,
                        " ",
                        (0, g.jsx)("span", { children: "DCHF" }),
                      ],
                    }),
                  ],
                }),
              }),
              o
                ? (0, g.jsx)("td", {
                    className: "table-action",
                    children: (0, g.jsx)("div", {
                      className: "table-action-wrap",
                      children: (0, g.jsx)(j(), {
                        href: "/borrow/manage/".concat(
                          p ? "btc" : "eth",
                          "/deposit"
                        ),
                        children: (0, g.jsxs)("button", {
                          className: "button button-manage",
                          children: [
                            (0, g.jsx)("svg", {
                              className: "icon-settings",
                              children: (0, g.jsx)("use", {
                                xlinkHref: "/icons/icons.svg#icon-settings",
                              }),
                            }),
                            r("manage"),
                          ],
                        }),
                      }),
                    }),
                  })
                : (0, g.jsx)("td", {
                    className: "table-action",
                    children: (0, g.jsx)("div", {
                      className: "table-action-wrap",
                      children: (0, g.jsx)(j(), {
                        href: "/borrow/manage/".concat(
                          p ? "btc" : "eth",
                          "/deposit"
                        ),
                        children: (0, g.jsx)("button", {
                          className: "button button-primary",
                          children: r("borrow"),
                        }),
                      }),
                    }),
                  }),
            ],
          });
        },
        o = c(40904),
        p = c(21043),
        q = c(57345),
        r = c(13499),
        s = c(50607),
        t = { troveBTC: o.E5, troveETH: o.E5 },
        u = function () {
          var a = (0, q.C)(r.D0),
            b = (0, h.useState)(t),
            c = b[0],
            e = b[1],
            i = (0, p.G)(),
            j = i.contracts,
            k = i.addresses;
          function l() {
            return (l = (0, d.Z)(
              f().mark(function b() {
                var c;
                return f().wrap(function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (b.next = 2), (0, s.Xw)(j, k, a || "");
                      case 2:
                        (c = b.sent) && e(c);
                      case 4:
                      case "end":
                        return b.stop();
                    }
                }, b);
              })
            )).apply(this, arguments);
          }
          return (
            (0, h.useEffect)(
              function () {
                a &&
                  (function () {
                    l.apply(this, arguments);
                  })();
              },
              [a]
            ),
            (0, g.jsxs)("div", {
              children: [
                (0, g.jsx)("div", {
                  className: "row",
                  children: (0, g.jsx)("div", {
                    className: "col-md-12",
                    children: (0, g.jsx)("div", {
                      className: "main-page-title",
                      children: (0, g.jsx)("h1", { children: "Borrow" }),
                    }),
                  }),
                }),
                (0, g.jsx)("div", {
                  className: "row",
                  children: (0, g.jsx)("div", {
                    className: "card-table-wrap",
                    children: (0, g.jsx)("div", {
                      className: "card-table",
                      children: (0, g.jsx)("table", {
                        className: "table",
                        children: (0, g.jsxs)("tbody", {
                          children: [
                            (0, g.jsx)(n, {
                              name: "Ethereum",
                              sign: "ETH",
                              dchfAmount:
                                (null == c ? void 0 : c.troveETH.collDCHF) ||
                                "-",
                              currencyAmount:
                                (null == c ? void 0 : c.troveETH.coll) || "-",
                              debt:
                                (null == c ? void 0 : c.troveETH.debt) || "-",
                              ratio: null == c ? void 0 : c.troveETH.ratio,
                              tvl: null == c ? void 0 : c.troveETH.tvl,
                              isActive:
                                +(null == c ? void 0 : c.troveETH.collDCHF) > 0,
                              status: c.troveETH.status,
                            }),
                            (0, g.jsx)(n, {
                              name: "Bitcoin",
                              sign: "wBTC",
                              dchfAmount:
                                (null == c ? void 0 : c.troveBTC.collDCHF) ||
                                "-",
                              currencyAmount:
                                (null == c ? void 0 : c.troveBTC.coll) || "-",
                              debt:
                                (null == c ? void 0 : c.troveBTC.debt) || "-",
                              ratio: null == c ? void 0 : c.troveBTC.ratio,
                              tvl: null == c ? void 0 : c.troveBTC.tvl,
                              isBtc: !0,
                              isActive:
                                +(null == c ? void 0 : c.troveBTC.collDCHF) > 0,
                              status: c.troveBTC.status,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        };
    },
    40904: function (a, b, c) {
      "use strict";
      c.d(b, {
        E5: function () {
          return g;
        },
        Eg: function () {
          return h;
        },
        U3: function () {
          return e;
        },
        WT: function () {
          return i;
        },
        n8: function () {
          return j;
        },
        td: function () {
          return f;
        },
      });
      var d = c(16766),
        e = {
          isApproveLoading: !1,
          isActionLoading: !1,
          isSuccess: !1,
          isError: !1,
        },
        f = { debt: "-", withdraw: "-", deposit: "-", repay: "-" },
        g = {
          asset: "",
          debt: (0, d.Md)("0"),
          coll: (0, d.Md)("0"),
          collDCHF: (0, d.Md)("0"),
          stake: (0, d.Md)("0"),
          status: 0,
          index: (0, d.Md)("0"),
          ratio: 0,
          tvl: (0, d.Md)("0"),
        },
        h = {
          trove: g,
          priceAsset: (0, d.Md)("0"),
          pooledDCHF: (0, d.Md)("0"),
          totalSupplyDCHF: (0, d.Md)("0"),
          collRatio: "-",
          minDebt: (0, d.Md)("0"),
          gasComp: (0, d.Md)("0"),
          totalColl: (0, d.Md)("0"),
          totalDebt: (0, d.Md)("0"),
          isLastTrove: !1,
        },
        i = { balAsset: (0, d.Md)("0"), balDCHF: (0, d.Md)("0") },
        j = { borrowFee: (0, d.Md)("0"), minColl: (0, d.Md)("0") };
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 60645));
    }),
      (_N_E = a.O());
  },
]);
