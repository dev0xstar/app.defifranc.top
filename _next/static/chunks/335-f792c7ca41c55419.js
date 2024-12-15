(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    87029: function (a, b, c) {
      "use strict";
      var d = c(85893),
        e = c(67294),
        f = c(40725),
        g = c.n(f),
        h = c(62964),
        i = function (a) {
          var b = a.isModalOpen,
            c = a.closeClick,
            f = a.message,
            i = (0, h.Z)(),
            j = i.width,
            k = i.height,
            l = (0, e.useState)({ width: 0, height: 0 }),
            m = l[0],
            n = l[1];
          return (
            (0, e.useEffect)(
              function () {
                j < 1 / 0 && k < 1 / 0 && n({ width: j, height: k });
              },
              [j]
            ),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)("div", {
                  className: b
                    ? "modal fade dchf-wallet-modal show"
                    : "modal fade dchf-wallet-modal",
                  id: "wallet-connect",
                  "data-bs-backdrop": "static",
                  "aria-hidden": "true",
                  style: b
                    ? { display: "block", background: "rgba(0,0,0,0.2)" }
                    : { display: "none" },
                  children: (0, d.jsx)("div", {
                    className:
                      "dchf-modal-dialog modal-dialog modal-dialog-centered",
                    role: "document",
                    children: (0, d.jsxs)("div", {
                      className: "dchf-modal-content modal-content",
                      children: [
                        (0, d.jsx)("div", {
                          className: "dchf-modal-top",
                          children: (0, d.jsxs)("div", {
                            className: "dchf-congrats-modal-title",
                            children: [
                              (0, d.jsx)("img", {
                                src: "/img/icons/confetti-party.svg",
                              }),
                              (0, d.jsx)("h2", { children: "Congratulations" }),
                            ],
                          }),
                        }),
                        (0, d.jsx)("div", {
                          className:
                            "dchf-modal-body dchf-wallet-wrap congratulate-modal-body",
                          children: (0, d.jsx)("div", {
                            className: "congratulation-modal-body",
                            children: (0, d.jsx)("span", {
                              children:
                                void 0 === f
                                  ? "Congratulation, you successfully opened a trove"
                                  : f,
                            }),
                          }),
                        }),
                        (0, d.jsx)("button", {
                          className: "congratulate-modal-button",
                          onClick: c,
                          children: "Done",
                        }),
                      ],
                    }),
                  }),
                }),
                b && (0, d.jsx)(g(), { height: m.height, width: m.width }),
              ],
            })
          );
        };
      b.Z = i;
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
    43335: function (a, b, c) {
      "use strict";
      c.d(b, {
        d: function () {
          return W;
        },
        Z: function () {
          return X;
        },
      });
      var d = c(47568),
        e = c(14924),
        f = c(26042),
        g = c(69396),
        h = c(10253),
        i = c(34051),
        j = c.n(i),
        k = c(85893),
        l = c(11163),
        m = c(67294),
        n = c(20701),
        o = c(84531),
        p = c(21043),
        q = c(57345),
        r = c(13499),
        s = c(50607),
        t = c(80069),
        u = c(16766);
      function v(a, b, c) {
        return c
          ? "Confirm"
          : b && a.isError
          ? "Something went wrong"
          : b
          ? ""
          : a.isApproveLoading
          ? "Approving Tx..."
          : a.isActionLoading
          ? "Executing Tx..."
          : a.isSuccess
          ? "Success"
          : "Confirm";
      }
      var w = {
        minDebt: "You must borrow at least 2,000 DCHF",
        maxDeposit: "The amount you're trying to deposit exceeds your balance",
        collRatio: "Collateral ratio must be at least 110%",
        maxWithdraw:
          "Your deposited collateral is lower than the amount you want to withdraw.",
        maxRepay: "You do not have enough assets to repay the debt.",
        minRepay:
          "Your position needs at least 2000 DCHF of debt. If you want to exit your position, Try closing the position instead of repaying.",
        enoughRepay:
          "Your loan amount is less that what you are trying to repay.",
        minTCR: "System Collateral Ratio can not be lower than 150%",
        borrowRM:
          "Your collateral ratio must be at least 150% to borrow during recovery mode. Please improve your collateral ratio.",
        withdrawRM:
          "You're not allowed to withdraw collateral during recovery mode.",
        openTroveSubCCR:
          "You're not allowed to open a Trove with less than 150% Collateral Ratio during recovery mode. Please increase your Trove's Collateral Ratio.",
        openTroveTriggerRM:
          "You're not allowed to open a Trove that would cause the Total Collateral Ratio to fall below 150%. Please increase your Trove's Collateral Ratio.",
        closeTroveRM:
          "You're not allowed to close your Trove during recovery mode.",
        closeLastTrove:
          "You're not allowed to close your Trove when there are no other Troves in the system.",
        closeTroveTriggerRM:
          "You're not allowed to close a Trove that would cause the Total Collateral Ratio to fall below 150%. Please wait until the Total Collateral Ratio increases.",
      };
      function x(a) {
        return w[a] || "";
      }
      var y = c(87029),
        z = c(21046),
        A = function (a) {
          var b = a.isModalOpen,
            c = a.closeClick,
            d = a.repayValue,
            e = a.withdrawValue,
            f = a.missingAmount,
            g = a.handleAction,
            h = a.currency,
            i = a.txState,
            j = a.isRecoveryMode,
            l = a.state,
            m = i.isSuccess,
            o = v(i, !0),
            p = +l.totalDebt > 0 ? l.totalDebt : (0, u.Md)("1"),
            q = l.totalColl
              .sub(e)
              .mul(l.priceAsset)
              .div(p.sub(d))
              .mul((0, u.Md)("100"))
              .div(z.Ce),
            r = 150 > +q,
            s = l.isLastTrove;
          return (0, k.jsx)(k.Fragment, {
            children: (0, k.jsx)("div", {
              className: b
                ? "modal fade dchf-wallet-modal show"
                : "modal fade dchf-wallet-modal",
              id: "wallet-connect",
              "data-bs-backdrop": "static",
              "aria-hidden": "true",
              style: b
                ? { display: "block", background: "rgba(0,0,0,0.4)" }
                : { display: "none" },
              children: (0, k.jsx)("div", {
                className:
                  "dchf-modal-dialog modal-dialog modal-dialog-centered",
                role: "document",
                children: (0, k.jsxs)("div", {
                  className: "dchf-modal-content modal-content",
                  children: [
                    (0, k.jsxs)("div", {
                      className: "dchf-modal-top",
                      children: [
                        (0, k.jsx)("div", {
                          className: "dchf-modal-top-left",
                          children: (0, k.jsx)("h2", {
                            children: "Close Borrow",
                          }),
                        }),
                        (0, k.jsx)("div", {
                          onClick: c,
                          className: "dchf-modal-close",
                          "data-bs-dismiss": "modal",
                          children: (0, k.jsx)("svg", {
                            className: "icon-close",
                            children: (0, k.jsx)("use", {
                              xlinkHref: "/icons/icons.svg#icon-close",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, k.jsx)("div", {
                      className: "dchf-modal-body dchf-wallet-wrap",
                      style: { borderBottom: "1px solid #e7e7e7" },
                      children: (0, k.jsx)("div", {
                        className: "close-trove-details-modal",
                        children: (0, k.jsx)("div", {
                          className: "card-borrow-info",
                          style: { width: "100%" },
                          children: m
                            ? (0, k.jsx)("div", {
                                className: "congratulation-modal-body",
                                children: (0, k.jsx)("span", {
                                  children: "Trove Closed Successfully",
                                }),
                              })
                            : (0, k.jsxs)(k.Fragment, {
                                children: [
                                  (0, k.jsxs)("div", {
                                    className: "item",
                                    children: [
                                      (0, k.jsx)("h1", { children: "Repay" }),
                                      (0, k.jsxs)("p", {
                                        children: [(0, u.uf)(d), " DCHF"],
                                      }),
                                    ],
                                  }),
                                  (0, k.jsxs)("div", {
                                    className: "item",
                                    children: [
                                      (0, k.jsx)("h1", {
                                        children: "Withdraw",
                                      }),
                                      (0, k.jsxs)("p", {
                                        children: [
                                          (0, u.uf)(e),
                                          " ",
                                          h.toUpperCase(),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        }),
                      }),
                    }),
                    (0, k.jsxs)("div", {
                      className: "dchf-form-save close-trove-modal",
                      children: [
                        f > 0 &&
                          !(j || s || r) &&
                          (0, k.jsxs)("span", {
                            className: "close-trove-modal-warning-text",
                            children: [
                              "You need ",
                              (0, k.jsxs)("b", {
                                children: [(0, t.x)(f), " DCHF"],
                              }),
                              " more to close your trove",
                            ],
                          }),
                        j &&
                          (0, k.jsx)("span", {
                            className: "close-trove-modal-warning-text",
                            children: w.closeTroveRM,
                          }),
                        s &&
                          (0, k.jsx)("span", {
                            className: "close-trove-modal-warning-text",
                            children: w.closeLastTrove,
                          }),
                        r &&
                          (0, k.jsx)("span", {
                            className: "close-trove-modal-warning-text",
                            children: w.closeTroveTriggerRM,
                          }),
                        (0, k.jsx)("button", {
                          className: "button button-primary",
                          onClick: m ? c : g,
                          disabled: f > 0,
                          children: (0, k.jsxs)("div", {
                            className: "confirmButtonMainWrapper",
                            children: [
                              (0, k.jsx)("div", {
                                className: "selfCenter widthThirtyThree",
                                children: v(i),
                              }),
                              (i.isActionLoading || i.isApproveLoading) &&
                                (0, k.jsx)("div", {
                                  className: "spinnerWrapper",
                                  children: (0, k.jsx)(n.ZP, {}),
                                }),
                            ],
                          }),
                        }),
                        o &&
                          (0, k.jsx)("div", {
                            className: "selfCenter",
                            style: { color: "#bf1304", margin: "8px 0" },
                            children: (0, k.jsx)("b", { children: o }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        B = c(85770),
        C = c(40904),
        D = c(83080),
        E = c(1844),
        F = c(77058),
        G = c(67644),
        H = function (a) {
          var b = a.warnings,
            c = a.debt;
          return (0, k.jsx)("div", {
            className: "warningWrapper",
            children:
              +c > 0 &&
              (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children: (null == b ? void 0 : b.minDebt) && x("minDebt"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.collRatio) && x("collRatio"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.borrowRM) && x("borrowRM"),
                  }),
                ],
              }),
          });
        },
        I = function (a) {
          var b = a.warnings,
            c = a.deposit;
          return (0, k.jsx)("div", {
            className: "warningWrapper",
            children:
              +c > 0 &&
              (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.maxDeposit) && x("maxDeposit"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.openTroveTriggerRM) &&
                      x("openTroveTriggerRM"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.openTroveSubCCR) &&
                      x("openTroveSubCCR"),
                  }),
                ],
              }),
          });
        },
        J = function (a) {
          var b = a.warnings,
            c = a.withdraw;
          return (0, k.jsx)("div", {
            className: "warningWrapper",
            children:
              +c > 0 &&
              (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.collRatio) && x("collRatio"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.maxWithdraw) && x("maxWithdraw"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children: (null == b ? void 0 : b.minTCR) && x("minTCR"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.withdrawRM) && x("withdrawRM"),
                  }),
                ],
              }),
          });
        },
        K = function (a) {
          var b = a.warnings,
            c = a.repay;
          return (0, k.jsx)("div", {
            className: "warningWrapper",
            children:
              +c > 0 &&
              (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsxs)("span", {
                    className: "warnings-paragraph",
                    children: [
                      " ",
                      (null == b ? void 0 : b.maxRepay) && x("maxRepay"),
                    ],
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.minRepay) && x("minRepay"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children:
                      (null == b ? void 0 : b.enoughRepay) && x("enoughRepay"),
                  }),
                  (0, k.jsx)("span", {
                    className: "warnings-paragraph",
                    children: (null == b ? void 0 : b.minTCR) && x("minTCR"),
                  }),
                ],
              }),
          });
        },
        L = c(55762),
        M = c(19401),
        N = c(64487);
      function O(a, b, c) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = (0, d.Z)(
          j().mark(function a(b, c, d) {
            var e, f, g, i, k, l;
            return j().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (a.next = 3),
                        Promise.all([
                          b.collSurplusPool.getCollateral(d, c),
                          b.priceFeed.getDirectPrice(d),
                        ])
                      );
                    case 3:
                      return (
                        (e = a.sent),
                        (g = (f = (0, h.Z)(e, 2))[0]),
                        (i = f[1]),
                        (k = g.mul(i).div(z.Ce)),
                        (l = { claimableAsset: g, claimableAsset_DCHF: k }),
                        a.abrupt("return", l)
                      );
                    case 10:
                      return (
                        (a.prev = 10),
                        (a.t0 = a.catch(0)),
                        console.error("Fetch Initial Data error ->", a.t0),
                        N.Tb(a.t0),
                        a.abrupt("return", T)
                      );
                    case 15:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function Q(a, b, c) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = (0, d.Z)(
          j().mark(function a(b, c, d) {
            var e, f, g;
            return j().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        d("loading-claim"),
                        (a.next = 4),
                        b.borrowerOperations.estimateGas.claimCollateral(c)
                      );
                    case 4:
                      return (
                        (f = (e = a.sent)
                          .mul((0, u.Md)("12"))
                          .div((0, u.Md)("10"))),
                        (a.next = 8),
                        b.borrowerOperations.claimCollateral(c, { gasLimit: f })
                      );
                    case 8:
                      return (g = a.sent), (a.next = 11), g.wait();
                    case 11:
                      d("success-claim"), (a.next = 19);
                      break;
                    case 14:
                      (a.prev = 14),
                        (a.t0 = a.catch(0)),
                        console.error(
                          "".concat(a.t0.name, ": ").concat(a.t0.message)
                        ),
                        N.Tb(a.t0),
                        d("error");
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
      var S = { isActionLoading: !1, isSuccess: !1, isError: !1 },
        T = {
          claimableAsset: (0, u.Md)("0"),
          claimableAsset_DCHF: (0, u.Md)("0"),
        },
        U = function (a) {
          var b = a.isActionLoading,
            c = a.isSuccess;
          return b ? "Claiming..." : c ? "Success!" : "Claim";
        },
        V = function (a) {
          var b = a.coin,
            c = (0, q.C)(r.D0),
            e = (0, m.useState)(S),
            g = e[0],
            i = e[1],
            l = (0, m.useState)(T),
            o = l[0],
            s = l[1],
            t = (0, p.G)(),
            v = t.contracts,
            w = t.addresses,
            x = { eth: w.ETH, btc: w.renBTC }[b],
            y = (0, F.$)().t;
          function z() {
            return A.apply(this, arguments);
          }
          function A() {
            return (A = (0, d.Z)(
              j().mark(function a() {
                var b, d;
                return j().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (c) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (
                          (a.t0 = h.Z), (a.next = 5), Promise.all([O(v, c, x)])
                        );
                      case 5:
                        (a.t1 = a.sent),
                          (d = (b = (0, a.t0)(a.t1, 1))[0]) && s(d);
                      case 9:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function B(a) {
            return C.apply(this, arguments);
          }
          function C() {
            return (C = (0, d.Z)(
              j().mark(function a(b) {
                var c;
                return j().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, f.Z)({}, S)),
                          "loading-claim" === b && (c.isActionLoading = !0),
                          "success-claim" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          i(c);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function D() {
            return (D = (0, d.Z)(
              j().mark(function a() {
                return j().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (c) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        if (!g.isActionLoading) {
                          a.next = 4;
                          break;
                        }
                        return a.abrupt("return");
                      case 4:
                        return (a.next = 6), Q(v, x, B);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          (0, m.useEffect)(
            function () {
              c && z();
            },
            [c]
          ),
            (0, m.useEffect)(
              function () {
                g.isSuccess && z();
              },
              [g.isSuccess]
            );
          var E = g.isError,
            G = g.isActionLoading;
          return +o.claimableAsset
            ? (0, k.jsxs)("div", {
                style: { marginBottom: "40px" },
                children: [
                  (0, k.jsxs)("div", {
                    className:
                      "d-flex align-items-center justify-content-between redeem-banner",
                    children: [
                      (0, k.jsxs)("div", {
                        className:
                          "d-flex align-items-center justify-content-center",
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "d-flex align-items-center justify-content-center banner-icon",
                            children: (0, k.jsx)("svg", {
                              className: "icon-info",
                              width: "18px",
                              height: "18px",
                              children: (0, k.jsx)("use", {
                                xlinkHref: "/icons/icons.svg#icon-info",
                                fill: "#f7931a",
                                style: { opacity: "1" },
                              }),
                            }),
                          }),
                          (0, k.jsx)("span", {
                            className: "redeem-banner-title",
                            children: "Your Positions was closed by Redemption",
                          }),
                        ],
                      }),
                      (0, k.jsxs)("div", {
                        className:
                          "d-flex align-items-center justify-content-around redeem-banner-content",
                        children: [
                          (0, k.jsxs)("div", {
                            className:
                              "d-flex align-items-center justify-content-around",
                            children: [
                              (0, k.jsxs)("span", {
                                className: "redeem-banner-value-main",
                                children: [
                                  (0, u.He)(o.claimableAsset, 18, 4),
                                  " ",
                                  y(b),
                                ],
                              }),
                              (0, k.jsxs)("span", {
                                className: "redeem-banner-value-secondary",
                                children: [
                                  "≈",
                                  (0, u.He)(o.claimableAsset_DCHF),
                                  " DCHF",
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsx)("button", {
                            onClick: function () {
                              return D.apply(this, arguments);
                            },
                            className: "redeem-assets-banner-button ".concat(
                              G ? "active" : ""
                            ),
                            children: (0, k.jsxs)("div", {
                              className: "confirmButtonMainWrapper",
                              children: [
                                (0, k.jsx)("span", {
                                  className: "selfCenter widthThirtyThree",
                                  children: U(g),
                                }),
                                g.isActionLoading &&
                                  (0, k.jsx)("div", {
                                    className: "smallSpinnerWrapperBanner",
                                    children: (0, k.jsx)(n.XG, {}),
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  E &&
                    (0, k.jsx)("div", {
                      className: "selfCenter",
                      style: { color: "#bf1304", margin: "8px 0" },
                      children: (0, k.jsx)("b", {
                        children: "Something Went Wrong",
                      }),
                    }),
                ],
              })
            : null;
        },
        W = function (a) {
          var b = a.value,
            c = a.symbol,
            d = a.text,
            e = a.onClick;
          return (0, k.jsxs)("div", {
            className: "dchf-form-info-content",
            onClick: e,
            children: [
              (0, k.jsxs)("p", { children: [d, ":"] }),
              (0, k.jsxs)("span", { children: [b, " ", c] }),
            ],
          });
        },
        X = function (a) {
          var b,
            c,
            i,
            w,
            x,
            z,
            N,
            O,
            P,
            Q,
            R,
            S,
            T,
            U,
            X,
            Y,
            Z,
            $,
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
            aj = a.params,
            ak = function (a) {
              ao.push(
                { pathname: "/borrow/manage/".concat(ar, "/").concat(a) },
                void 0,
                { shallow: !0 }
              ),
                aw(a),
                al();
            },
            al = function () {
              aI(C.td);
            },
            am = function () {
              aF(C.U3),
                aC(function (a) {
                  return !a;
                });
            },
            an = function (a, b) {
              aE.isActionLoading ||
                aE.isApproveLoading ||
                (aI(function (c) {
                  return (0, g.Z)((0, f.Z)({}, c), (0, e.Z)({}, a, b || "-"));
                }),
                aF(C.U3));
            },
            ao = (0, l.useRouter)(),
            ap = (0, q.C)(r.D0),
            aq = (0, h.Z)(aj.asset, 2),
            ar = aq[0],
            as = aq[1],
            at = (0, L.Bk)().library,
            au = (0, m.useState)(as),
            av = au[0],
            aw = au[1],
            ax = (0, m.useState)(!1),
            ay = ax[0],
            az = ax[1],
            aA = (0, m.useState)(!1),
            aB = aA[0],
            aC = aA[1],
            aD = (0, m.useState)(C.U3),
            aE = aD[0],
            aF = aD[1],
            aG = (0, m.useState)(C.td),
            aH = aG[0],
            aI = aG[1],
            aJ = (0, m.useState)(C.Eg),
            aK = aJ[0],
            aL = aJ[1],
            aM = (0, m.useState)(C.WT),
            aN = aM[0],
            aO = aM[1],
            aP = (0, m.useState)(C.n8),
            aQ = aP[0],
            aR = aP[1],
            aS = (0, p.G)(),
            aT = aS.contracts,
            aU = aS.addresses,
            aV = { eth: aU.ETH, btc: aU.renBTC },
            aW = aV[ar],
            aX = null == ar ? void 0 : ar.toUpperCase(),
            aY = aW === aU.renBTC ? 8 : 18,
            aZ = null == aK ? void 0 : aK.gasComp,
            a$ =
              null == aK
                ? void 0
                : null === (_ = aK.trove) || void 0 === _
                ? void 0
                : _.debt,
            a_ =
              null == aK
                ? void 0
                : null === (aa = aK.trove) || void 0 === aa
                ? void 0
                : aa.coll,
            a0 = null == aK ? void 0 : aK.priceAsset,
            a1 = null == aQ ? void 0 : aQ.borrowFee,
            a2 = (0, u.Md)((0, u.AY)(1e18 * +aH.debt)),
            a3 = (0, u.Md)((0, u.AY)(1e18 * +aH.repay)),
            a4 = (0, u.Md)((0, u.AY)(1e18 * +aH.deposit)),
            a5 = (0, u.Md)((0, u.AY)(1e18 * +aH.withdraw)),
            a6 = a$.sub(a3),
            a7 = a_.sub(a5),
            a8 = a2.add(a6),
            a9 = a4.add(a7),
            ba =
              a_.eq((0, u.Md)("0")) ||
              (null == aK ? void 0 : aK.trove.status) === 0,
            bb = a9.mul(a0),
            bc = a8.add(aZ),
            bd = (ba ? bc : a8).add(a1),
            be = a$.sub(aZ).sub(null == aN ? void 0 : aN.balDCHF),
            bf = (0, u.Md)((0, u.AY)(+a0 * +aH.deposit)),
            bg = +aK.totalDebt > 0 ? aK.totalDebt : (0, u.Md)("1"),
            bh = aK.totalColl
              .add(a4)
              .sub(a5)
              .mul(aK.priceAsset)
              .div(bg.add(a2).sub(a3)),
            bi = bd.gt((0, u.Md)("0"))
              ? +(0, u.uf)(bb.mul((0, u.Md)("100")).div(bd))
              : 0,
            bj = 100 * +aK.collRatio < 150,
            bk = !(null == aK
              ? void 0
              : null === (ab = aK.trove) || void 0 === ab
              ? void 0
              : ab.debt.gt((0, u.Md)("0"))),
            bl = (0, F.$)().t;
          function bm() {
            return bn.apply(this, arguments);
          }
          function bn() {
            return (bn = (0, d.Z)(
              j().mark(function a() {
                var b, c, d, e, f;
                return j().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (ap) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (
                          (a.t0 = h.Z),
                          (a.next = 5),
                          Promise.all([
                            (0, s.ZN)(aT, aU, ap, aW),
                            (0, s.P8)(aT, aU, ap, [aW, aU.DCHFToken], at),
                          ])
                        );
                      case 5:
                        (a.t1 = a.sent),
                          (c = (b = (0, a.t0)(a.t1, 2))[0]),
                          (e = (d = (0, h.Z)(b[1], 2))[0]),
                          (f = d[1]),
                          c && aL(c),
                          e && f && aO({ balAsset: e, balDCHF: f });
                      case 13:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function bo(a) {
            return bp.apply(this, arguments);
          }
          function bp() {
            return (bp = (0, d.Z)(
              j().mark(function a(b) {
                var c;
                return j().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (c = (0, f.Z)({}, C.U3)),
                          "loading-approve" === b && (c.isApproveLoading = !0),
                          "loading-deposit" === b && (c.isActionLoading = !0),
                          "success-deposit" === b && (c.isSuccess = !0),
                          "error" === b && (c.isError = !0),
                          aF(c);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function bq() {
            return br.apply(this, arguments);
          }
          function br() {
            return (br = (0, d.Z)(
              j().mark(function a() {
                var b, c, d, e;
                return j().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (ap) {
                          a.next = 3;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 3:
                        if (!(aE.isActionLoading || aE.isApproveLoading)) {
                          a.next = 5;
                          break;
                        }
                        return a.abrupt("return");
                      case 5:
                        return (
                          (d = !(null == aK
                            ? void 0
                            : null === (b = aK.trove) || void 0 === b
                            ? void 0
                            : b.debt.gt((0, u.Md)("0")))),
                          (a.next = 8),
                          (0, s.tE)(
                            aT,
                            aU,
                            aU.borrowerOperations,
                            {
                              asset: aW,
                              type: av,
                              debtValue: aH.debt,
                              withdrawValue: aH.withdraw,
                              repayValue: aH.repay,
                              depositValue: aH.deposit,
                              newCollRatio: bi,
                              oldDebt:
                                null == aK
                                  ? void 0
                                  : null === (c = aK.trove) || void 0 === c
                                  ? void 0
                                  : c.debt,
                              account: ap,
                              gasComp: null == aK ? void 0 : aK.gasComp,
                              totalColl: a9,
                              borrowFee: a1,
                            },
                            bo
                          )
                        );
                      case 8:
                        (e = a.sent), d && e && az(!0), al();
                      case 11:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function bs() {
            return bt.apply(this, arguments);
          }
          function bt() {
            return (bt = (0, d.Z)(
              j().mark(function a() {
                var b;
                return j().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (ap) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (
                          (a.next = 4),
                          (0, s.zS)(aT, aW, (0, u.AY)(1e18 * +aH.debt))
                        );
                      case 4:
                        (b = a.sent) && aR(b);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          function bu() {
            return (bu = (0, d.Z)(
              j().mark(function a() {
                return j().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (ap) {
                          a.next = 2;
                          break;
                        }
                        return a.abrupt("return", null);
                      case 2:
                        return (a.next = 4), (0, s.lV)(aT, aW, bo);
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )).apply(this, arguments);
          }
          (0, m.useEffect)(
            function () {
              ap && (bm(), bs());
            },
            [ap]
          ),
            (0, m.useEffect)(
              function () {
                aE.isSuccess && bm();
              },
              [aE.isSuccess]
            ),
            (0, m.useEffect)(
              function () {
                bs();
              },
              [aH.debt]
            );
          var bv =
            ((b = aK),
            (c = aH),
            (i = aN),
            (w = aQ),
            (x = bi),
            (z = aY),
            (N = bh),
            (O = bj),
            (P = bk),
            (Q = {
              minDebt: !1,
              maxDeposit: !1,
              collRatio: !1,
              maxWithdraw: !1,
              maxRepay: !1,
              minRepay: !1,
              enoughRepay: !1,
              minTCR: !1,
              borrowRM: !1,
              withdrawRM: !1,
              openTroveSubCCR: !1,
              openTroveTriggerRM: !1,
              closeTroveRM: !1,
              closeLastTrove: !1,
              closeTroveTriggerRM: !1,
            }),
            (R = +(0, u.uf)(null == b ? void 0 : b.minDebt)),
            (S = +(0, u.uf)(null == i ? void 0 : i.balDCHF)),
            (T = (0, u.xN)(c.debt || "0")),
            (U = +(0, u.uf)(null == b ? void 0 : b.trove.debt)),
            (X = (+N / 1e18) * 100),
            (Y = +(0, u.He)(null == w ? void 0 : w.minColl)),
            (Z = R + +(0, u.He)(null == b ? void 0 : b.gasComp)),
            ($ = U - (0, u.xN)(c.repay)),
            R > T && T > 0 && !U && (Q.minDebt = !0),
            +(0, u.He)(null == i ? void 0 : i.balAsset, z) <
              (0, u.xN)(c.deposit) && (Q.maxDeposit = !0),
            100 * Y > x && (T > 0 || U > 0) && (Q.collRatio = !0),
            S < (0, u.xN)(c.repay) && (Q.maxRepay = !0),
            U - +c.repay < 0 && (Q.enoughRepay = !0),
            +(0, u.He)(null == b ? void 0 : b.trove.coll) <
              (0, u.xN)(c.withdraw) && (Q.maxWithdraw = !0),
            (Z > $ || $ < 0) && U > 0 && (Q.minRepay = !0),
            X < 1.5 && (Q.minTCR = !0),
            (0, u.xN)(c.withdraw) && O && (Q.withdrawRM = !0),
            (0, u.xN)(c.debt) > 0 && O && x < 150 && (Q.borrowRM = !0),
            (0, u.xN)(c.debt) > 0 &&
              P &&
              X < 150 &&
              (Q.openTroveTriggerRM = !0),
            (0, u.xN)(c.debt) > 0 &&
              O &&
              P &&
              x < 150 &&
              (Q.openTroveSubCCR = !0),
            Q);
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)("div", {
                className: "row justify-content-center",
                children: (0, k.jsxs)("div", {
                  className: "col-lg-10 col-xl-11 col-xxl-10",
                  children: [
                    (0, k.jsx)(V, { coin: ar }),
                    (0, k.jsxs)("div", {
                      className: "card card-borrow",
                      children: [
                        (0, k.jsxs)("div", {
                          className: "card-borrow-left",
                          children: [
                            (0, k.jsxs)("div", {
                              className: "card-borrow-progress",
                              children: [
                                (0, k.jsx)("div", {
                                  style: {
                                    position: "absolute",
                                    margin: "8px",
                                  },
                                  children: (0, k.jsx)(M.Z, {}),
                                }),
                                (0, k.jsxs)("div", {
                                  className: "card-borrow-progress-wrap",
                                  children: [
                                    (0, k.jsxs)("div", {
                                      className: "content left",
                                      children: [
                                        (0, k.jsxs)("h1", {
                                          children: [
                                            bl("yourCollateral"),
                                            "(",
                                            aX,
                                            ")",
                                          ],
                                        }),
                                        (0, k.jsx)("p", {
                                          children:
                                            (0, u.He)(
                                              null == aK
                                                ? void 0
                                                : null === (ac = aK.trove) ||
                                                  void 0 === ac
                                                ? void 0
                                                : ac.coll
                                            ) || "-",
                                        }),
                                        (0, k.jsxs)("span", {
                                          children: [
                                            (0, u.He)(
                                              null == aK
                                                ? void 0
                                                : null === (ad = aK.trove) ||
                                                  void 0 === ad
                                                ? void 0
                                                : ad.collDCHF
                                            ),
                                            " CHF",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className: "content-progress",
                                      children: [
                                        (0, k.jsx)(G.Z, {
                                          ratio:
                                            null == aK
                                              ? void 0
                                              : null === (ae = aK.trove) ||
                                                void 0 === ae
                                              ? void 0
                                              : ae.ratio,
                                          sqSize: 120,
                                          strokeWidth: 10,
                                        }),
                                        (0, k.jsxs)("div", {
                                          className: "progress-value",
                                          children: [
                                            (0, k.jsxs)("div", {
                                              className: "progress-value-ratio",
                                              children: [
                                                (0, k.jsx)("span", {
                                                  children: bl("ratio"),
                                                }),
                                                (0, k.jsx)("div", {
                                                  className: "info",
                                                  children: (0, k.jsx)(E.u, {
                                                    text: "The Collateral Ratio of your Position. The minimum Collateral Ratio is 110% while your Position can be subject to Liquidation if it is under 150%. Read more about the Recovery Mode here.",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, k.jsxs)("p", {
                                              children: [
                                                (0, t.x)(
                                                  null == aK
                                                    ? void 0
                                                    : null ===
                                                        (af = aK.trove) ||
                                                      void 0 === af
                                                    ? void 0
                                                    : af.ratio
                                                ) || "-",
                                                "%",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)("div", {
                                      className: "content right",
                                      children: [
                                        (0, k.jsxs)("h1", {
                                          children: [
                                            bl("yourDebt"),
                                            " (DCHF)",
                                            (0, k.jsx)("div", {
                                              className: "info",
                                              "data-bs-toggle": "tooltip",
                                              title: "",
                                              children: (0, k.jsx)("svg", {
                                                className: "icon-info",
                                                children: (0, k.jsx)("use", {
                                                  xlinkHref:
                                                    "/icons/icons.svg#icon-info",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, k.jsxs)("p", {
                                          children: [
                                            (0, u.He)(
                                              null == aK
                                                ? void 0
                                                : null === (ag = aK.trove) ||
                                                  void 0 === ag
                                                ? void 0
                                                : ag.debt
                                            ) || "-",
                                            " DCHF",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, k.jsx)(D.Z, {
                              type: av,
                              withdrawDisable: !!ba,
                              handleClick: ak,
                            }),
                            (0, k.jsx)("div", {
                              className: "card-borrow-tab-content",
                              children: (0, k.jsxs)("div", {
                                className: "tab-content",
                                children: [
                                  (0, k.jsxs)("div", {
                                    id: "deposit",
                                    className:
                                      "deposit" == av
                                        ? "tab-pane active"
                                        : "tab-pane fade",
                                    children: [
                                      (0, k.jsxs)("div", {
                                        className: "dchf-form",
                                        children: [
                                          (0, k.jsx)("label", {
                                            children: bl("depositCollateral"),
                                          }),
                                          (0, k.jsxs)("div", {
                                            className: "dchf-form-wrap",
                                            children: [
                                              (0, k.jsx)(o.Z, {
                                                type: "text",
                                                onChange: function (a) {
                                                  an(
                                                    "deposit",
                                                    a.target.value
                                                      .replace(",", ".")
                                                      .replace(/[^\d.,]/g, "")
                                                  );
                                                },
                                                value:
                                                  "-" === aH.deposit
                                                    ? ""
                                                    : aH.deposit,
                                                placeholder: "0.0",
                                              }),
                                              (0, k.jsxs)("div", {
                                                className: "dchf-form-info",
                                                children: [
                                                  (0, k.jsx)(W, {
                                                    value: (0, u.He)(
                                                      null == aN
                                                        ? void 0
                                                        : aN.balAsset,
                                                      aY
                                                    ),
                                                    symbol: aX,
                                                    text: "Wallet",
                                                    onClick: function () {
                                                      return an(
                                                        "deposit",
                                                        (0, u.uf)(
                                                          null == aN
                                                            ? void 0
                                                            : aN.balAsset,
                                                          aY
                                                        )
                                                      );
                                                    },
                                                  }),
                                                  (0, k.jsx)("div", {
                                                    className:
                                                      "dchf-form-info-icon",
                                                    children: (0, k.jsx)(
                                                      "img",
                                                      {
                                                        src: "/img/general/".concat(
                                                          ar,
                                                          "-icon.svg"
                                                        ),
                                                        alt: "icon",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, k.jsxs)("span", {
                                            className: "calculate",
                                            children: [
                                              "≈",
                                              (0, u.He)(bf),
                                              " DCHF",
                                            ],
                                          }),
                                          (0, k.jsx)(I, {
                                            warnings: bv,
                                            deposit: aH.deposit,
                                          }),
                                        ],
                                      }),
                                      (0, k.jsxs)("div", {
                                        className: "dchf-form",
                                        children: [
                                          (0, k.jsxs)("label", {
                                            children: [bl("borrow"), " DCHF"],
                                          }),
                                          (0, k.jsxs)("div", {
                                            className: "dchf-form-wrap",
                                            children: [
                                              (0, k.jsx)(o.Z, {
                                                type: "text",
                                                value:
                                                  "-" === aH.debt
                                                    ? ""
                                                    : aH.debt,
                                                onChange: function (a) {
                                                  an(
                                                    "debt",
                                                    a.target.value.replace(
                                                      ",",
                                                      "."
                                                    )
                                                  );
                                                },
                                                placeholder: "Min debt ".concat(
                                                  (0, u.He)(
                                                    null == aK
                                                      ? void 0
                                                      : aK.minDebt
                                                  ),
                                                  " DCHF"
                                                ),
                                              }),
                                              (0, k.jsx)("div", {
                                                className: "dchf-form-info",
                                                children: (0, k.jsx)("div", {
                                                  className:
                                                    "dchf-form-info-icon",
                                                  children: (0, k.jsx)("img", {
                                                    src: "/img/general/dchf-icon.svg",
                                                    alt: "icon",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, k.jsx)(H, {
                                            warnings: bv,
                                            debt: aH.debt,
                                          }),
                                        ],
                                      }),
                                      (0, k.jsxs)("div", {
                                        className: "dchf-form-save",
                                        children: [
                                          (0, k.jsx)("button", {
                                            className: "button button-primary",
                                            onClick: bq,
                                            children: (0, k.jsxs)("div", {
                                              className:
                                                "confirmButtonMainWrapper",
                                              children: [
                                                (0, k.jsx)("div", {
                                                  className: "selfCenter",
                                                  children: v(aE),
                                                }),
                                                (aE.isActionLoading ||
                                                  aE.isApproveLoading) &&
                                                  !aB &&
                                                  (0, k.jsx)("div", {
                                                    className: "spinnerWrapper",
                                                    children: (0, k.jsx)(
                                                      n.ZP,
                                                      {}
                                                    ),
                                                  }),
                                              ],
                                            }),
                                          }),
                                          (0, k.jsx)("div", {
                                            className: "selfCenter",
                                            style: {
                                              color: "#bf1304",
                                              margin: "8px 0",
                                            },
                                            children: (0, k.jsx)("b", {
                                              children: v(aE, !0),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, k.jsxs)("div", {
                                    id: "withdraw",
                                    className:
                                      "withdraw" == av
                                        ? "tab-pane active"
                                        : "tab-pane fade",
                                    children: [
                                      (0, k.jsxs)("div", {
                                        className: "dchf-form",
                                        children: [
                                          (0, k.jsx)("label", {
                                            children: "Withdraw",
                                          }),
                                          (0, k.jsxs)("div", {
                                            className: "dchf-form-wrap",
                                            children: [
                                              (0, k.jsx)(o.Z, {
                                                type: "number",
                                                value: aH.withdraw,
                                                onChange: function (a) {
                                                  return an(
                                                    "withdraw",
                                                    a.target.value
                                                  );
                                                },
                                                placeholder: "0",
                                              }),
                                              (0, k.jsxs)("div", {
                                                className: "dchf-form-info",
                                                children: [
                                                  (0, k.jsx)(W, {
                                                    value:
                                                      (0, u.He)(
                                                        null == aK
                                                          ? void 0
                                                          : null ===
                                                              (ah = aK.trove) ||
                                                            void 0 === ah
                                                          ? void 0
                                                          : ah.coll
                                                      ) || "-",
                                                    symbol: aX,
                                                    text: "Available",
                                                    onClick: function () {
                                                      var a;
                                                      return an(
                                                        "withdraw",
                                                        (0, u.uf)(
                                                          null == aK
                                                            ? void 0
                                                            : null ===
                                                                (a =
                                                                  aK.trove) ||
                                                              void 0 === a
                                                            ? void 0
                                                            : a.coll
                                                        )
                                                      );
                                                    },
                                                  }),
                                                  (0, k.jsx)("div", {
                                                    className:
                                                      "dchf-form-info-icon",
                                                    children: (0, k.jsx)(
                                                      "img",
                                                      {
                                                        src: "/img/general/".concat(
                                                          ar,
                                                          "-icon.svg"
                                                        ),
                                                        alt: "icon",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, k.jsxs)("span", {
                                            className: "calculate",
                                            children: [
                                              "≈",
                                              (0, u.He)(
                                                null == aK
                                                  ? void 0
                                                  : null === (ai = aK.trove) ||
                                                    void 0 === ai
                                                  ? void 0
                                                  : ai.collDCHF
                                              ),
                                              " DCHF",
                                            ],
                                          }),
                                          (0, k.jsx)(J, {
                                            warnings: bv,
                                            withdraw: aH.withdraw,
                                          }),
                                        ],
                                      }),
                                      (0, k.jsxs)("div", {
                                        className: "dchf-form",
                                        children: [
                                          (0, k.jsx)("label", {
                                            children: bl("repayDebt"),
                                          }),
                                          (0, k.jsxs)("div", {
                                            className: "dchf-form-wrap",
                                            children: [
                                              (0, k.jsx)(o.Z, {
                                                type: "number",
                                                value: aH.repay,
                                                onChange: function (a) {
                                                  return an(
                                                    "repay",
                                                    a.target.value
                                                  );
                                                },
                                                placeholder: "0",
                                              }),
                                              (0, k.jsxs)("div", {
                                                className: "dchf-form-info",
                                                children: [
                                                  (0, k.jsx)(W, {
                                                    value: (0, u.He)(
                                                      null == aN
                                                        ? void 0
                                                        : aN.balDCHF
                                                    ),
                                                    symbol: "DCHF",
                                                    text: "Wallet",
                                                    onClick: function () {
                                                      return an(
                                                        "repay",
                                                        (0, u.uf)(
                                                          null == aN
                                                            ? void 0
                                                            : aN.balDCHF
                                                        )
                                                      );
                                                    },
                                                  }),
                                                  (0, k.jsx)("div", {
                                                    className:
                                                      "dchf-form-info-icon",
                                                    children: (0, k.jsx)(
                                                      "img",
                                                      {
                                                        src: "/img/general/dchf-icon.svg",
                                                        alt: "icon",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, k.jsxs)("div", {
                                            className: "close-trove-section",
                                            children: [
                                              (0, k.jsx)(K, {
                                                warnings: bv,
                                                repay: aH.repay,
                                              }),
                                              (0, k.jsx)("div", {
                                                className: "closeTroveWrapper",
                                                children: (0, k.jsx)("button", {
                                                  className:
                                                    "button button-primary closeTroveButton",
                                                  onClick: am,
                                                  children: bl("closeTrove"),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, k.jsxs)("div", {
                                        className: "dchf-form-save",
                                        children: [
                                          (0, k.jsx)("button", {
                                            className: "button button-primary",
                                            onClick: bq,
                                            children: (0, k.jsxs)("div", {
                                              className:
                                                "confirmButtonMainWrapper",
                                              children: [
                                                (0, k.jsx)("div", {
                                                  className:
                                                    "selfCenter widthThirtyThree",
                                                  children: v(aE, !1, aB),
                                                }),
                                                (aE.isActionLoading ||
                                                  aE.isApproveLoading) &&
                                                  !aB &&
                                                  (0, k.jsx)("div", {
                                                    className: "spinnerWrapper",
                                                    children: (0, k.jsx)(
                                                      n.ZP,
                                                      {}
                                                    ),
                                                  }),
                                              ],
                                            }),
                                          }),
                                          (0, k.jsx)("div", {
                                            className: "selfCenter",
                                            style: {
                                              color: "#bf1304",
                                              margin: "8px 0",
                                            },
                                            children: (0, k.jsx)("b", {
                                              children: v(aE, !0),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, k.jsx)(B.ZP, {
                          state: aK,
                          coin: ar,
                          type: av,
                          inputs: aH,
                          newCollRatio: bi,
                          dynamicData: aQ,
                          totalDebt: bd,
                          liquidationPrice: (function () {
                            var a = null == aQ ? void 0 : aQ.minColl;
                            if (!a) return "-";
                            var b = +a9 > 0 ? a8.mul(a).div(a9) : 0;
                            return b ? (0, t.x)((0, u.uf)(b)) : "-";
                          })(),
                          totalColl: a9,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, k.jsx)(y.Z, {
                isModalOpen: ay,
                closeClick: function () {
                  return az(function (a) {
                    return !a;
                  });
                },
              }),
              (0, k.jsx)(A, {
                isModalOpen: aB,
                closeClick: am,
                handleAction: function () {
                  return bu.apply(this, arguments);
                },
                repayValue: a$.sub(aZ),
                withdrawValue: a_,
                currency: ar,
                missingAmount: +(0, u.uf)(be),
                txState: aE,
                isRecoveryMode: bj,
                state: aK,
              }),
            ],
          });
        };
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
]);
