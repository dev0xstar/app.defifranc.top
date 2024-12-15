(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [148],
  {
    22432: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stability-pool",
        function () {
          return c(61550);
        },
      ]);
    },
    61550: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return v;
          },
        });
      var d = c(47568),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(2962),
        i = c(67294),
        j = c(41664),
        k = c.n(j),
        l = c(77058),
        m = function (a) {
          var b = a.name,
            c = a.dchfAmount,
            d = a.apr,
            e = a.tvl,
            f = a.isActive,
            h = a.isBtc,
            i = a.borrowCoin,
            j = (0, l.$)().t;
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
                        src: h
                          ? "img/cryptos/bitcoin.svg"
                          : "img/cryptos/ethereum.svg",
                        alt: "ethereum-logo",
                      }),
                    }),
                    (0, g.jsx)("div", {
                      className: "table-profile-content",
                      children: (0, g.jsxs)("h1", { children: [b, " ", i] }),
                    }),
                  ],
                }),
              }),
              (0, g.jsx)("td", {
                className: "table-deposit",
                children: (0, g.jsxs)("div", {
                  className: "table-deposit-wrap",
                  children: [
                    (0, g.jsx)("h2", { children: j("deposited") }),
                    (0, g.jsxs)("p", { children: [c, " DCHF"] }),
                  ],
                }),
              }),
              (0, g.jsx)("td", {
                className: "table-debt",
                children: (0, g.jsxs)("div", {
                  className: "table-debt-wrap",
                  children: [
                    (0, g.jsx)("h2", { children: "APR" }),
                    (0, g.jsxs)("p", { children: [d, " %"] }),
                  ],
                }),
              }),
              (0, g.jsx)("td", {
                className: "table-tvl",
                children: (0, g.jsxs)("div", {
                  className: "table-tvl-wrap",
                  children: [
                    (0, g.jsx)("h2", { children: "TVL" }),
                    // (0, g.jsxs)("p", { children: ["CHF ", e] }),
                    (0, g.jsxs)("p", { children: ["CHF ", 0] }),
                  ],
                }),
              }),
              f
                ? (0, g.jsx)("td", {
                    className: "table-action",
                    children: (0, g.jsx)("div", {
                      className: "table-action-wrap",
                      children: (0, g.jsx)(k(), {
                        href: "/stability-pool/stake/".concat(i.toLowerCase()),
                        children: (0, g.jsxs)("button", {
                          className: "button button-manage",
                          children: [
                            (0, g.jsx)("svg", {
                              className: "icon-settings",
                              children: (0, g.jsx)("use", {
                                xlinkHref: "/icons/icons.svg#icon-settings",
                              }),
                            }),
                            j("manage"),
                          ],
                        }),
                      }),
                    }),
                  })
                : (0, g.jsx)("td", {
                    className: "table-action",
                    children: (0, g.jsx)("div", {
                      className: "table-action-wrap",
                      children: (0, g.jsx)(k(), {
                        href: "/stability-pool/stake/".concat(i.toLowerCase()),
                        children: (0, g.jsxs)("button", {
                          className: "button button-primary",
                          children: [j("stakeDCHFGet"), " ", a.borrowCoin],
                        }),
                      }),
                    }),
                  }),
            ],
          });
        },
        n = m,
        o = c(21043),
        p = c(57345),
        q = c(13499),
        r = c(50607),
        s = c(16766),
        t = {
          depositsETH: "0",
          totalDepositsETH: "0",
          depositsBTC: "0",
          totalDepositsBTC: "0",
          aprETH: "0",
          aprBTC: "0",
        },
        u = function () {
          var a = (0, p.C)(q.D0),
            b = (0, o.G)(),
            c = b.contracts,
            e = b.addresses,
            j = (0, i.useState)(t),
            k = j[0],
            m = j[1];
          function u() {
            return (u = (0, d.Z)(
              f().mark(function b() {
                var d;
                return f().wrap(function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (b.next = 2), (0, r.hg)(c, e, a || "");
                      case 2:
                        (d = b.sent) && m(d);
                      case 4:
                      case "end":
                        return b.stop();
                    }
                }, b);
              })
            )).apply(this, arguments);
          }
          (0, i.useEffect)(
            function () {
              a &&
                (function () {
                  u.apply(this, arguments);
                })();
            },
            [a]
          );
          var v = (0, l.$)().t;
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(h.PB, {
                title: "DCHF Stability Pool",
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
                      url: "/img/general/dchf-web-thumbnail.png",
                      width: 2048,
                      height: 1170,
                    },
                  ],
                },
              }),
              (0, g.jsx)("div", {
                className: "row",
                children: (0, g.jsx)("div", {
                  className: "col-md-12",
                  children: (0, g.jsx)("div", {
                    className: "main-page-title",
                    children: (0, g.jsx)("h1", {
                      children: v("stabilityPool"),
                    }),
                  }),
                }),
              }),
              (0, g.jsx)("div", {
                className: "row",
                children: (0, g.jsx)("div", {
                  className: "col-md-12 col-lg-12",
                  children: (0, g.jsx)("div", {
                    className: "dchf-content",
                    children: (0, g.jsxs)("p", {
                      children: [
                        v("stakeYourDCHF"),
                        " ",
                        (0, g.jsxs)("span", {
                          children: [
                            "Learn more,",
                            " ",
                            (0, g.jsx)("a", {
                              href: "https://docs.defifranc.com/in-depth/stability-pool-and-liquidations",
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
                            borrowCoin: "ETH",
                            dchfAmount: null == k ? void 0 : k.depositsETH,
                            apr: null == k ? void 0 : k.aprETH,
                            tvl: null == k ? void 0 : k.totalDepositsETH,
                            isActive:
                              (0, s.xN)(null == k ? void 0 : k.depositsETH) > 0,
                          }),
                          (0, g.jsx)(n, {
                            name: "Wrapped Bitcoin",
                            borrowCoin: "wBTC",
                            dchfAmount: null == k ? void 0 : k.depositsBTC,
                            apr: null == k ? void 0 : k.aprBTC,
                            tvl: null == k ? void 0 : k.totalDepositsBTC,
                            isActive:
                              (0, s.xN)(null == k ? void 0 : k.depositsBTC) > 0,
                            isBtc: !0,
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        v = u;
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 22432));
    }),
      (_N_E = a.O());
  },
]);
