"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // _build/default/dist/browser/document_or_shadow_root_mixin.js
  var require_document_or_shadow_root_mixin = __commonJS({
    "_build/default/dist/browser/document_or_shadow_root_mixin.js"(exports) {
      "use strict";
      function Make(T) {
        return {};
      }
      exports.Make = Make;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml.js
  var require_caml = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml.js"(exports) {
      "use strict";
      function caml_int_compare(x, y) {
        if (x < y) {
          return -1;
        } else if (x === y) {
          return 0;
        } else {
          return 1;
        }
      }
      function caml_bool_compare(x, y) {
        if (x) {
          if (y) {
            return 0;
          } else {
            return 1;
          }
        } else if (y) {
          return -1;
        } else {
          return 0;
        }
      }
      function caml_float_compare(x, y) {
        if (x === y) {
          return 0;
        } else if (x < y) {
          return -1;
        } else if (x > y || x === x) {
          return 1;
        } else if (y === y) {
          return -1;
        } else {
          return 0;
        }
      }
      function caml_string_compare(s1, s2) {
        if (s1 === s2) {
          return 0;
        } else if (s1 < s2) {
          return -1;
        } else {
          return 1;
        }
      }
      function caml_bool_min(x, y) {
        if (x) {
          return y;
        } else {
          return x;
        }
      }
      function caml_int_min(x, y) {
        if (x < y) {
          return x;
        } else {
          return y;
        }
      }
      function caml_float_min(x, y) {
        if (x < y) {
          return x;
        } else {
          return y;
        }
      }
      function caml_string_min(x, y) {
        if (x < y) {
          return x;
        } else {
          return y;
        }
      }
      function caml_int32_min(x, y) {
        if (x < y) {
          return x;
        } else {
          return y;
        }
      }
      function caml_bool_max(x, y) {
        if (x) {
          return x;
        } else {
          return y;
        }
      }
      function caml_int_max(x, y) {
        if (x > y) {
          return x;
        } else {
          return y;
        }
      }
      function caml_float_max(x, y) {
        if (x > y) {
          return x;
        } else {
          return y;
        }
      }
      function caml_string_max(x, y) {
        if (x > y) {
          return x;
        } else {
          return y;
        }
      }
      function caml_int32_max(x, y) {
        if (x > y) {
          return x;
        } else {
          return y;
        }
      }
      function i64_eq(x, y) {
        if (x[1] === y[1]) {
          return x[0] === y[0];
        } else {
          return false;
        }
      }
      function i64_ge(param, param$1) {
        var other_hi = param$1[0];
        var hi = param[0];
        if (hi > other_hi) {
          return true;
        } else if (hi < other_hi) {
          return false;
        } else {
          return param[1] >= param$1[1];
        }
      }
      function i64_neq(x, y) {
        return !i64_eq(x, y);
      }
      function i64_lt(x, y) {
        return !i64_ge(x, y);
      }
      function i64_gt(x, y) {
        if (x[0] > y[0]) {
          return true;
        } else if (x[0] < y[0]) {
          return false;
        } else {
          return x[1] > y[1];
        }
      }
      function i64_le(x, y) {
        return !i64_gt(x, y);
      }
      function i64_min(x, y) {
        if (i64_ge(x, y)) {
          return y;
        } else {
          return x;
        }
      }
      function i64_max(x, y) {
        if (i64_gt(x, y)) {
          return x;
        } else {
          return y;
        }
      }
      exports.caml_int_compare = caml_int_compare;
      exports.caml_bool_compare = caml_bool_compare;
      exports.caml_float_compare = caml_float_compare;
      exports.caml_string_compare = caml_string_compare;
      exports.caml_bool_min = caml_bool_min;
      exports.caml_int_min = caml_int_min;
      exports.caml_float_min = caml_float_min;
      exports.caml_string_min = caml_string_min;
      exports.caml_int32_min = caml_int32_min;
      exports.caml_bool_max = caml_bool_max;
      exports.caml_int_max = caml_int_max;
      exports.caml_float_max = caml_float_max;
      exports.caml_string_max = caml_string_max;
      exports.caml_int32_max = caml_int32_max;
      exports.i64_eq = i64_eq;
      exports.i64_neq = i64_neq;
      exports.i64_lt = i64_lt;
      exports.i64_gt = i64_gt;
      exports.i64_le = i64_le;
      exports.i64_ge = i64_ge;
      exports.i64_min = i64_min;
      exports.i64_max = i64_max;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_int64.js
  var require_caml_int64 = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_int64.js"(exports) {
      "use strict";
      var Js__Caml = require_caml();
      function mk(lo, hi) {
        return [
          hi,
          lo >>> 0
        ];
      }
      var min_int = [
        -2147483648,
        0
      ];
      var max_int = [
        2147483647,
        4294967295
      ];
      var one = [
        0,
        1
      ];
      var zero = [
        0,
        0
      ];
      var neg_one = [
        -1,
        4294967295
      ];
      function neg_signed(x) {
        return (x & -2147483648) !== 0;
      }
      function non_neg_signed(x) {
        return (x & -2147483648) === 0;
      }
      function succ(param) {
        var x_lo = param[1];
        var x_hi = param[0];
        var lo = x_lo + 1 | 0;
        return [
          x_hi + (lo === 0 ? 1 : 0) | 0,
          lo >>> 0
        ];
      }
      function neg(param) {
        var other_lo = (param[1] ^ -1) + 1 | 0;
        return [
          (param[0] ^ -1) + (other_lo === 0 ? 1 : 0) | 0,
          other_lo >>> 0
        ];
      }
      function add_aux(param, y_lo, y_hi) {
        var x_lo = param[1];
        var lo = x_lo + y_lo | 0;
        var overflow = neg_signed(x_lo) && (neg_signed(y_lo) || non_neg_signed(lo)) || neg_signed(y_lo) && non_neg_signed(lo) ? 1 : 0;
        return [
          param[0] + y_hi + overflow | 0,
          lo >>> 0
        ];
      }
      function add(self2, param) {
        return add_aux(self2, param[1], param[0]);
      }
      function equal_null(x, y) {
        if (y !== null) {
          return Js__Caml.i64_eq(x, y);
        } else {
          return false;
        }
      }
      function equal_undefined(x, y) {
        if (y !== void 0) {
          return Js__Caml.i64_eq(x, y);
        } else {
          return false;
        }
      }
      function equal_nullable(x, y) {
        if (y == null) {
          return false;
        } else {
          return Js__Caml.i64_eq(x, y);
        }
      }
      function sub_aux(x, lo, hi) {
        var y_lo = (lo ^ -1) + 1 >>> 0;
        var y_hi = (hi ^ -1) + (y_lo === 0 ? 1 : 0) | 0;
        return add_aux(x, y_lo, y_hi);
      }
      function sub(self2, param) {
        return sub_aux(self2, param[1], param[0]);
      }
      function lsl_(x, numBits) {
        if (numBits === 0) {
          return x;
        }
        var lo = x[1];
        if (numBits >= 32) {
          return [
            lo << (numBits - 32 | 0),
            0
          ];
        } else {
          return [
            lo >>> (32 - numBits | 0) | x[0] << numBits,
            lo << numBits >>> 0
          ];
        }
      }
      function lsr_(x, numBits) {
        if (numBits === 0) {
          return x;
        }
        var hi = x[0];
        var offset = numBits - 32 | 0;
        if (offset === 0) {
          return [
            0,
            hi >>> 0
          ];
        } else if (offset > 0) {
          return [
            0,
            hi >>> offset
          ];
        } else {
          return [
            hi >>> numBits,
            (hi << (-offset | 0) | x[1] >>> numBits) >>> 0
          ];
        }
      }
      function asr_(x, numBits) {
        if (numBits === 0) {
          return x;
        }
        var hi = x[0];
        if (numBits < 32) {
          return [
            hi >> numBits,
            (hi << (32 - numBits | 0) | x[1] >>> numBits) >>> 0
          ];
        } else {
          return [
            hi >= 0 ? 0 : -1,
            hi >> (numBits - 32 | 0) >>> 0
          ];
        }
      }
      function is_zero(param) {
        if (param[0] !== 0) {
          return false;
        } else {
          return param[1] === 0;
        }
      }
      function mul(_this, _other) {
        while (true) {
          var other = _other;
          var $$this = _this;
          var lo;
          var this_hi = $$this[0];
          var exit = 0;
          var exit$1 = 0;
          var exit$2 = 0;
          if (this_hi !== 0) {
            exit$2 = 4;
          } else {
            if ($$this[1] === 0) {
              return zero;
            }
            exit$2 = 4;
          }
          if (exit$2 === 4) {
            if (other[0] !== 0) {
              exit$1 = 3;
            } else {
              if (other[1] === 0) {
                return zero;
              }
              exit$1 = 3;
            }
          }
          if (exit$1 === 3) {
            if (this_hi !== -2147483648 || $$this[1] !== 0) {
              exit = 2;
            } else {
              lo = other[1];
            }
          }
          if (exit === 2) {
            var other_hi = other[0];
            var lo$1 = $$this[1];
            var exit$3 = 0;
            if (other_hi !== -2147483648 || other[1] !== 0) {
              exit$3 = 3;
            } else {
              lo = lo$1;
            }
            if (exit$3 === 3) {
              var other_lo = other[1];
              if (this_hi < 0) {
                if (other_hi >= 0) {
                  return neg(mul(neg($$this), other));
                }
                _other = neg(other);
                _this = neg($$this);
                continue;
              }
              if (other_hi < 0) {
                return neg(mul($$this, neg(other)));
              }
              var a48 = this_hi >>> 16;
              var a32 = this_hi & 65535;
              var a16 = lo$1 >>> 16;
              var a00 = lo$1 & 65535;
              var b48 = other_hi >>> 16;
              var b32 = other_hi & 65535;
              var b16 = other_lo >>> 16;
              var b00 = other_lo & 65535;
              var c48 = 0;
              var c32 = 0;
              var c16 = 0;
              var c00 = a00 * b00;
              c16 = (c00 >>> 16) + a16 * b00;
              c32 = c16 >>> 16;
              c16 = (c16 & 65535) + a00 * b16;
              c32 = c32 + (c16 >>> 16) + a32 * b00;
              c48 = c32 >>> 16;
              c32 = (c32 & 65535) + a16 * b16;
              c48 = c48 + (c32 >>> 16);
              c32 = (c32 & 65535) + a00 * b32;
              c48 = c48 + (c32 >>> 16);
              c32 = c32 & 65535;
              c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
              return [
                c32 | c48 << 16,
                (c00 & 65535 | (c16 & 65535) << 16) >>> 0
              ];
            }
          }
          if ((lo & 1) === 0) {
            return zero;
          } else {
            return min_int;
          }
        }
        ;
      }
      function xor(param, param$1) {
        return [
          param[0] ^ param$1[0],
          (param[1] ^ param$1[1]) >>> 0
        ];
      }
      function or_(param, param$1) {
        return [
          param[0] | param$1[0],
          (param[1] | param$1[1]) >>> 0
        ];
      }
      function and_(param, param$1) {
        return [
          param[0] & param$1[0],
          (param[1] & param$1[1]) >>> 0
        ];
      }
      function to_float(param) {
        return param[0] * 4294967296 + param[1];
      }
      function of_float(x) {
        if (isNaN(x) || !isFinite(x)) {
          return zero;
        }
        if (x <= -9223372036854776e3) {
          return min_int;
        }
        if (x + 1 >= 9223372036854776e3) {
          return max_int;
        }
        if (x < 0) {
          return neg(of_float(-x));
        }
        var hi = x / 4294967296 | 0;
        var lo = x % 4294967296 | 0;
        return [
          hi,
          lo >>> 0
        ];
      }
      function isSafeInteger(param) {
        var hi = param[0];
        var top11Bits = hi >> 21;
        if (top11Bits === 0) {
          return true;
        } else if (top11Bits === -1) {
          return !(param[1] === 0 && hi === -2097152);
        } else {
          return false;
        }
      }
      function to_string(self2) {
        if (isSafeInteger(self2)) {
          return String(to_float(self2));
        }
        if (self2[0] < 0) {
          if (Js__Caml.i64_eq(self2, min_int)) {
            return "-9223372036854775808";
          } else {
            return "-" + to_string(neg(self2));
          }
        }
        var approx_div1 = of_float(Math.floor(to_float(self2) / 10));
        var lo = approx_div1[1];
        var hi = approx_div1[0];
        var match = sub_aux(sub_aux(self2, lo << 3, lo >>> 29 | hi << 3), lo << 1, lo >>> 31 | hi << 1);
        var rem_lo = match[1];
        var rem_hi = match[0];
        if (rem_lo === 0 && rem_hi === 0) {
          return to_string(approx_div1) + "0";
        }
        if (rem_hi < 0) {
          var rem_lo$1 = (rem_lo ^ -1) + 1 >>> 0;
          var delta = Math.ceil(rem_lo$1 / 10);
          var remainder = 10 * delta - rem_lo$1;
          return to_string(sub_aux(approx_div1, delta | 0, 0)) + String(remainder | 0);
        }
        var delta$1 = Math.floor(rem_lo / 10);
        var remainder$1 = rem_lo - 10 * delta$1;
        return to_string(add_aux(approx_div1, delta$1 | 0, 0)) + String(remainder$1 | 0);
      }
      function div(_self, _other) {
        while (true) {
          var other = _other;
          var self2 = _self;
          var exit = 0;
          if (other[0] !== 0 || other[1] !== 0) {
            exit = 1;
          } else {
            throw {
              RE_EXN_ID: "Division_by_zero",
              Error: new Error()
            };
          }
          if (exit === 1) {
            var self_hi = self2[0];
            var exit$1 = 0;
            if (self_hi !== -2147483648) {
              if (self_hi !== 0) {
                exit$1 = 2;
              } else {
                if (self2[1] === 0) {
                  return zero;
                }
                exit$1 = 2;
              }
            } else if (self2[1] !== 0) {
              exit$1 = 2;
            } else {
              if (Js__Caml.i64_eq(other, one) || Js__Caml.i64_eq(other, neg_one)) {
                return self2;
              }
              if (Js__Caml.i64_eq(other, min_int)) {
                return one;
              }
              var half_this = asr_(self2, 1);
              var approx = lsl_(div(half_this, other), 1);
              var exit$2 = 0;
              if (approx[0] !== 0) {
                exit$2 = 3;
              } else {
                if (approx[1] === 0) {
                  if (other[0] < 0) {
                    return one;
                  } else {
                    return neg(one);
                  }
                }
                exit$2 = 3;
              }
              if (exit$2 === 3) {
                var rem = sub(self2, mul(other, approx));
                return add(approx, div(rem, other));
              }
            }
            if (exit$1 === 2) {
              var other_hi = other[0];
              var exit$3 = 0;
              if (other_hi !== -2147483648) {
                exit$3 = 3;
              } else {
                if (other[1] === 0) {
                  return zero;
                }
                exit$3 = 3;
              }
              if (exit$3 === 3) {
                if (self_hi < 0) {
                  if (other_hi >= 0) {
                    return neg(div(neg(self2), other));
                  }
                  _other = neg(other);
                  _self = neg(self2);
                  continue;
                }
                if (other_hi < 0) {
                  return neg(div(self2, neg(other)));
                }
                var res = zero;
                var rem$1 = self2;
                while (Js__Caml.i64_ge(rem$1, other)) {
                  var b = Math.floor(to_float(rem$1) / to_float(other));
                  var approx$1 = 1 > b ? 1 : b;
                  var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
                  var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
                  var approxRes = of_float(approx$1);
                  var approxRem = mul(approxRes, other);
                  while (approxRem[0] < 0 || Js__Caml.i64_gt(approxRem, rem$1)) {
                    approx$1 = approx$1 - delta;
                    approxRes = of_float(approx$1);
                    approxRem = mul(approxRes, other);
                  }
                  ;
                  if (is_zero(approxRes)) {
                    approxRes = one;
                  }
                  res = add(res, approxRes);
                  rem$1 = sub(rem$1, approxRem);
                }
                ;
                return res;
              }
            }
          }
        }
        ;
      }
      function mod_(self2, other) {
        return sub(self2, mul(div(self2, other), other));
      }
      function div_mod(self2, other) {
        var quotient = div(self2, other);
        return [
          quotient,
          sub(self2, mul(quotient, other))
        ];
      }
      function compare(self2, other) {
        var y = other[0];
        var x = self2[0];
        var v = x < y ? -1 : x === y ? 0 : 1;
        if (v !== 0) {
          return v;
        }
        var y$1 = other[1];
        var x$1 = self2[1];
        if (x$1 < y$1) {
          return -1;
        } else if (x$1 === y$1) {
          return 0;
        } else {
          return 1;
        }
      }
      function of_int32(lo) {
        return [
          lo < 0 ? -1 : 0,
          lo >>> 0
        ];
      }
      function to_int32(x) {
        return x[1] | 0;
      }
      function to_hex(x) {
        var x_lo = x[1];
        var x_hi = x[0];
        var aux = function(v) {
          return (v >>> 0).toString(16);
        };
        if (x_hi === 0 && x_lo === 0) {
          return "0";
        }
        if (x_lo === 0) {
          return aux(x_hi) + "00000000";
        }
        if (x_hi === 0) {
          return aux(x_lo);
        }
        var lo = aux(x_lo);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x_hi) + lo;
        } else {
          return aux(x_hi) + ("0".repeat(pad) + lo);
        }
      }
      function discard_sign(x) {
        return [
          2147483647 & x[0],
          x[1]
        ];
      }
      function float_of_bits(x) {
        return function(lo, hi) {
          return new Float64Array(new Int32Array([lo, hi]).buffer)[0];
        }(x[1], x[0]);
      }
      function bits_of_float(x) {
        var match = function(x2) {
          return new Int32Array(new Float64Array([x2]).buffer);
        }(x);
        return [
          match[1],
          match[0] >>> 0
        ];
      }
      exports.mk = mk;
      exports.succ = succ;
      exports.min_int = min_int;
      exports.max_int = max_int;
      exports.one = one;
      exports.zero = zero;
      exports.neg_one = neg_one;
      exports.of_int32 = of_int32;
      exports.to_int32 = to_int32;
      exports.add = add;
      exports.neg = neg;
      exports.sub = sub;
      exports.lsl_ = lsl_;
      exports.lsr_ = lsr_;
      exports.asr_ = asr_;
      exports.is_zero = is_zero;
      exports.mul = mul;
      exports.xor = xor;
      exports.or_ = or_;
      exports.and_ = and_;
      exports.equal_null = equal_null;
      exports.equal_undefined = equal_undefined;
      exports.equal_nullable = equal_nullable;
      exports.to_float = to_float;
      exports.of_float = of_float;
      exports.div = div;
      exports.mod_ = mod_;
      exports.compare = compare;
      exports.float_of_bits = float_of_bits;
      exports.bits_of_float = bits_of_float;
      exports.div_mod = div_mod;
      exports.to_hex = to_hex;
      exports.discard_sign = discard_sign;
      exports.to_string = to_string;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_bytes.js
  var require_caml_bytes = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_bytes.js"(exports) {
      "use strict";
      var Js__Caml_int64 = require_caml_int64();
      function set(s, i, ch) {
        if (i < 0 || i >= s.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        s[i] = ch;
      }
      function get(s, i) {
        if (i < 0 || i >= s.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        return s[i];
      }
      function caml_fill_bytes(s, i, l, c) {
        if (l <= 0) {
          return;
        }
        for (var k = i, k_finish = l + i | 0; k < k_finish; ++k) {
          s[k] = c;
        }
      }
      function caml_create_bytes(len) {
        if (len < 0) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.create",
            Error: new Error()
          };
        }
        var result = new Array(len);
        for (var i = 0; i < len; ++i) {
          result[i] = /* '\000' */
          0;
        }
        return result;
      }
      function caml_blit_bytes(s1, i1, s2, i2, len) {
        if (len <= 0) {
          return;
        }
        if (s1 === s2) {
          if (i1 < i2) {
            var range_a = (s1.length - i2 | 0) - 1 | 0;
            var range_b = len - 1 | 0;
            var range = range_a > range_b ? range_b : range_a;
            for (var j = range; j >= 0; --j) {
              s1[i2 + j | 0] = s1[i1 + j | 0];
            }
            return;
          }
          if (i1 <= i2) {
            return;
          }
          var range_a$1 = (s1.length - i1 | 0) - 1 | 0;
          var range_b$1 = len - 1 | 0;
          var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
          for (var k = 0; k <= range$1; ++k) {
            s1[i2 + k | 0] = s1[i1 + k | 0];
          }
          return;
        }
        var off1 = s1.length - i1 | 0;
        if (len <= off1) {
          for (var i = 0; i < len; ++i) {
            s2[i2 + i | 0] = s1[i1 + i | 0];
          }
          return;
        }
        for (var i$1 = 0; i$1 < off1; ++i$1) {
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for (var i$2 = off1; i$2 < len; ++i$2) {
          s2[i2 + i$2 | 0] = /* '\000' */
          0;
        }
      }
      function bytes_to_string(a) {
        var i = 0;
        var len = a.length;
        var s = "";
        var s_len = len;
        if (i === 0 && len <= 4096 && len === a.length) {
          return String.fromCharCode.apply(null, a);
        }
        var offset = 0;
        while (s_len > 0) {
          var next = s_len < 1024 ? s_len : 1024;
          var tmp_bytes = new Array(next);
          for (var k = 0; k < next; ++k) {
            tmp_bytes[k] = a[k + offset | 0];
          }
          s = s + String.fromCharCode.apply(null, tmp_bytes);
          s_len = s_len - next | 0;
          offset = offset + next | 0;
        }
        ;
        return s;
      }
      function caml_blit_string(s1, i1, s2, i2, len) {
        if (len <= 0) {
          return;
        }
        var off1 = s1.length - i1 | 0;
        if (len <= off1) {
          for (var i = 0; i < len; ++i) {
            s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
          }
          return;
        }
        for (var i$1 = 0; i$1 < off1; ++i$1) {
          s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
        }
        for (var i$2 = off1; i$2 < len; ++i$2) {
          s2[i2 + i$2 | 0] = /* '\000' */
          0;
        }
      }
      function bytes_of_string(s) {
        var len = s.length;
        var res = new Array(len);
        for (var i = 0; i < len; ++i) {
          res[i] = s.charCodeAt(i);
        }
        return res;
      }
      function caml_bytes_compare_aux(s1, s2, _off, len, def) {
        while (true) {
          var off = _off;
          if (off >= len) {
            return def;
          }
          var a = s1[off];
          var b = s2[off];
          if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          _off = off + 1 | 0;
          continue;
        }
        ;
      }
      function caml_bytes_compare(s1, s2) {
        var len1 = s1.length;
        var len2 = s2.length;
        if (len1 === len2) {
          return caml_bytes_compare_aux(s1, s2, 0, len1, 0);
        } else if (len1 < len2) {
          return caml_bytes_compare_aux(s1, s2, 0, len1, -1);
        } else {
          return caml_bytes_compare_aux(s1, s2, 0, len2, 1);
        }
      }
      function caml_bytes_equal(s1, s2) {
        var len1 = s1.length;
        var len2 = s2.length;
        if (len1 === len2) {
          var _off = 0;
          while (true) {
            var off = _off;
            if (off === len1) {
              return true;
            }
            var a = s1[off];
            var b = s2[off];
            if (a !== b) {
              return false;
            }
            _off = off + 1 | 0;
            continue;
          }
          ;
        } else {
          return false;
        }
      }
      function caml_bytes_greaterthan(s1, s2) {
        return caml_bytes_compare(s1, s2) > 0;
      }
      function caml_bytes_greaterequal(s1, s2) {
        return caml_bytes_compare(s1, s2) >= 0;
      }
      function caml_bytes_lessthan(s1, s2) {
        return caml_bytes_compare(s1, s2) < 0;
      }
      function caml_bytes_lessequal(s1, s2) {
        return caml_bytes_compare(s1, s2) <= 0;
      }
      function bswap16(x) {
        return (x & 255) << 8 | (x & 65280) >>> 8;
      }
      function bswap32(x) {
        return (x & 255) << 24 | (x & 65280) << 8 | (x & 16711680) >>> 8 | (x & -16777216) >>> 24;
      }
      function bswap64(x) {
        return Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.and_(x, [
          0,
          255
        ]), 56), Js__Caml_int64.lsl_(Js__Caml_int64.and_(x, [
          0,
          65280
        ]), 40)), Js__Caml_int64.lsl_(Js__Caml_int64.and_(x, [
          0,
          16711680
        ]), 24)), Js__Caml_int64.lsl_(Js__Caml_int64.and_(x, [
          0,
          4278190080
        ]), 8)), Js__Caml_int64.lsr_(Js__Caml_int64.and_(x, [
          255,
          0
        ]), 8)), Js__Caml_int64.lsr_(Js__Caml_int64.and_(x, [
          65280,
          0
        ]), 24)), Js__Caml_int64.lsr_(Js__Caml_int64.and_(x, [
          16711680,
          0
        ]), 40)), Js__Caml_int64.lsr_(Js__Caml_int64.and_(x, [
          -16777216,
          0
        ]), 56));
      }
      function get16u(str, idx) {
        var b1 = str[idx];
        var b2 = str[idx + 1 | 0];
        return b2 << 8 | b1;
      }
      function get16(str, idx) {
        if (idx < 0 || (idx + 1 | 0) >= str.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        return get16u(str, idx);
      }
      function get32(str, idx) {
        if (idx < 0 || (idx + 3 | 0) >= str.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        var b1 = str[idx];
        var b2 = str[idx + 1 | 0];
        var b3 = str[idx + 2 | 0];
        var b4 = str[idx + 3 | 0];
        return b4 << 24 | b3 << 16 | b2 << 8 | b1;
      }
      function get64(str, idx) {
        if (idx < 0 || (idx + 7 | 0) >= str.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        var b1 = str[idx];
        var b2 = str[idx + 1 | 0];
        var b3 = str[idx + 2 | 0];
        var b4 = str[idx + 3 | 0];
        var b5 = str[idx + 4 | 0];
        var b6 = str[idx + 5 | 0];
        var b7 = str[idx + 6 | 0];
        var b8 = str[idx + 7 | 0];
        return Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.of_int32(b8), 56), Js__Caml_int64.of_int32(b7)), 48), Js__Caml_int64.of_int32(b6)), 40), Js__Caml_int64.of_int32(b5)), 32), Js__Caml_int64.of_int32(b4)), 24), Js__Caml_int64.of_int32(b3)), 16), Js__Caml_int64.of_int32(b2)), 8), Js__Caml_int64.of_int32(b1));
      }
      function set16u(b, idx, newval) {
        var b2 = 255 & newval >>> 8;
        var b1 = 255 & newval;
        b[idx] = b1;
        b[idx + 1 | 0] = b2;
      }
      function set16(b, idx, newval) {
        if (idx < 0 || (idx + 1 | 0) >= b.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        set16u(b, idx, newval);
      }
      function set32u(str, idx, newval) {
        var b4 = 255 & newval >>> 24;
        var b3 = 255 & newval >>> 16;
        var b2 = 255 & newval >>> 8;
        var b1 = 255 & newval;
        str[idx] = b1;
        str[idx + 1 | 0] = b2;
        str[idx + 2 | 0] = b3;
        str[idx + 3 | 0] = b4;
      }
      function set32(str, idx, newval) {
        if (idx < 0 || (idx + 3 | 0) >= str.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        set32u(str, idx, newval);
      }
      function set64u(str, idx, newval) {
        var x = Js__Caml_int64.lsr_(newval, 56);
        var b8 = 255 & (x[1] | 0);
        var x$1 = Js__Caml_int64.lsr_(newval, 48);
        var b7 = 255 & (x$1[1] | 0);
        var x$2 = Js__Caml_int64.lsr_(newval, 40);
        var b6 = 255 & (x$2[1] | 0);
        var x$3 = Js__Caml_int64.lsr_(newval, 32);
        var b5 = 255 & (x$3[1] | 0);
        var x$4 = Js__Caml_int64.lsr_(newval, 24);
        var b4 = 255 & (x$4[1] | 0);
        var x$5 = Js__Caml_int64.lsr_(newval, 16);
        var b3 = 255 & (x$5[1] | 0);
        var x$6 = Js__Caml_int64.lsr_(newval, 8);
        var b2 = 255 & (x$6[1] | 0);
        var b1 = 255 & (newval[1] | 0);
        str[idx] = b1;
        str[idx + 1 | 0] = b2;
        str[idx + 2 | 0] = b3;
        str[idx + 3 | 0] = b4;
        str[idx + 4 | 0] = b5;
        str[idx + 5 | 0] = b6;
        str[idx + 6 | 0] = b7;
        str[idx + 7 | 0] = b8;
      }
      function set64(str, idx, newval) {
        if (idx < 0 || (idx + 7 | 0) >= str.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        set64u(str, idx, newval);
      }
      exports.caml_create_bytes = caml_create_bytes;
      exports.caml_fill_bytes = caml_fill_bytes;
      exports.get = get;
      exports.set = set;
      exports.bytes_to_string = bytes_to_string;
      exports.caml_blit_bytes = caml_blit_bytes;
      exports.caml_blit_string = caml_blit_string;
      exports.bytes_of_string = bytes_of_string;
      exports.caml_bytes_compare = caml_bytes_compare;
      exports.caml_bytes_greaterthan = caml_bytes_greaterthan;
      exports.caml_bytes_greaterequal = caml_bytes_greaterequal;
      exports.caml_bytes_lessthan = caml_bytes_lessthan;
      exports.caml_bytes_lessequal = caml_bytes_lessequal;
      exports.caml_bytes_equal = caml_bytes_equal;
      exports.bswap16 = bswap16;
      exports.bswap32 = bswap32;
      exports.bswap64 = bswap64;
      exports.get16u = get16u;
      exports.get16 = get16;
      exports.get32 = get32;
      exports.get64 = get64;
      exports.set16u = set16u;
      exports.set16 = set16;
      exports.set32u = set32u;
      exports.set32 = set32;
      exports.set64u = set64u;
      exports.set64 = set64;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_exceptions.js
  var require_caml_exceptions = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_exceptions.js"(exports) {
      "use strict";
      var id = {
        contents: 0
      };
      function create(str) {
        id.contents = id.contents + 1 | 0;
        return str + ("/" + id.contents);
      }
      function caml_is_extension(e) {
        if (e == null) {
          return false;
        } else {
          return typeof e.RE_EXN_ID === "string";
        }
      }
      function caml_exn_slot_name(x) {
        return x.RE_EXN_ID;
      }
      var caml_exn_slot_id = function(x) {
        if (x.RE_EXN_ID != null) {
          var parts = x.RE_EXN_ID.split("/");
          if (parts.length > 1) {
            return Number(parts[parts.length - 1]);
          } else {
            return -1;
          }
        } else {
          return -1;
        }
      };
      exports.id = id;
      exports.create = create;
      exports.caml_is_extension = caml_is_extension;
      exports.caml_exn_slot_name = caml_exn_slot_name;
      exports.caml_exn_slot_id = caml_exn_slot_id;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_external_polyfill.js
  var require_caml_external_polyfill = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_external_polyfill.js"(exports) {
      "use strict";
      var getGlobalThis = function() {
        if (typeof globalThis !== "undefined")
          return globalThis;
        if (typeof self !== "undefined")
          return self;
        if (typeof window !== "undefined")
          return window;
        if (typeof global !== "undefined")
          return global;
        if (typeof this !== "undefined")
          return this;
        throw new Error("Unable to locate global `this`");
      };
      var resolve = function(s) {
        var myGlobal = getGlobalThis();
        if (myGlobal[s] === void 0) {
          throw new Error(s + " not polyfilled by Melange yet\n");
        }
        return myGlobal[s];
      };
      var register = function(s, fn) {
        var myGlobal = getGlobalThis();
        myGlobal[s] = fn;
        return 0;
      };
      exports.getGlobalThis = getGlobalThis;
      exports.resolve = resolve;
      exports.register = register;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_format.js
  var require_caml_format = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_format.js"(exports) {
      "use strict";
      var Caml = require_caml();
      var Caml_int64 = require_caml_int64();
      var Js__Caml_int64 = require_caml_int64();
      function parse_digit(c) {
        if (c >= 65) {
          if (c >= 97) {
            if (c >= 123) {
              return -1;
            } else {
              return c - 87 | 0;
            }
          } else if (c >= 91) {
            return -1;
          } else {
            return c - 55 | 0;
          }
        } else if (c > 57 || c < 48) {
          return -1;
        } else {
          return c - /* '0' */
          48 | 0;
        }
      }
      function int_of_string_base(param) {
        switch (param) {
          case /* Oct */
          0:
            return 8;
          case /* Hex */
          1:
            return 16;
          case /* Dec */
          2:
            return 10;
          case /* Bin */
          3:
            return 2;
        }
      }
      function parse_sign_and_base(s) {
        var sign = 1;
        var base = (
          /* Dec */
          2
        );
        var i = 0;
        var match = s.charCodeAt(i);
        switch (match) {
          case 43:
            i = i + 1 | 0;
            break;
          case 44:
            break;
          case 45:
            sign = -1;
            i = i + 1 | 0;
            break;
          default:
        }
        if (s[i] === "0") {
          var match$1 = s.charCodeAt(i + 1 | 0);
          if (match$1 >= 89) {
            if (match$1 >= 111) {
              if (match$1 < 121) {
                switch (match$1) {
                  case 111:
                    base = /* Oct */
                    0;
                    i = i + 2 | 0;
                    break;
                  case 117:
                    i = i + 2 | 0;
                    break;
                  case 112:
                  case 113:
                  case 114:
                  case 115:
                  case 116:
                  case 118:
                  case 119:
                    break;
                  case 120:
                    base = /* Hex */
                    1;
                    i = i + 2 | 0;
                    break;
                }
              }
            } else if (match$1 === 98) {
              base = /* Bin */
              3;
              i = i + 2 | 0;
            }
          } else if (match$1 !== 66) {
            if (match$1 >= 79) {
              switch (match$1) {
                case 79:
                  base = /* Oct */
                  0;
                  i = i + 2 | 0;
                  break;
                case 85:
                  i = i + 2 | 0;
                  break;
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 86:
                case 87:
                  break;
                case 88:
                  base = /* Hex */
                  1;
                  i = i + 2 | 0;
                  break;
              }
            }
          } else {
            base = /* Bin */
            3;
            i = i + 2 | 0;
          }
        }
        return [
          i,
          sign,
          base
        ];
      }
      function caml_int_of_string(s) {
        var match = parse_sign_and_base(s);
        var i = match[0];
        var base = int_of_string_base(match[2]);
        var threshold = 4294967295;
        var len = s.length;
        var c = i < len ? s.charCodeAt(i) : (
          /* '\000' */
          0
        );
        var d = parse_digit(c);
        if (d < 0 || d >= base) {
          throw {
            RE_EXN_ID: "Failure",
            _1: "int_of_string",
            Error: new Error()
          };
        }
        var aux = function(_acc, _k) {
          while (true) {
            var k = _k;
            var acc = _acc;
            if (k === len) {
              return acc;
            }
            var a = s.charCodeAt(k);
            if (a === /* '_' */
            95) {
              _k = k + 1 | 0;
              continue;
            }
            var v = parse_digit(a);
            if (v < 0 || v >= base) {
              throw {
                RE_EXN_ID: "Failure",
                _1: "int_of_string",
                Error: new Error()
              };
            }
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw {
                RE_EXN_ID: "Failure",
                _1: "int_of_string",
                Error: new Error()
              };
            }
            _k = k + 1 | 0;
            _acc = acc$1;
            continue;
          }
          ;
        };
        var res = match[1] * aux(d, i + 1 | 0);
        var or_res = res | 0;
        if (base === 10 && res !== or_res) {
          throw {
            RE_EXN_ID: "Failure",
            _1: "int_of_string",
            Error: new Error()
          };
        }
        return or_res;
      }
      function caml_int64_of_string(s) {
        var match = parse_sign_and_base(s);
        var hbase = match[2];
        var i = match[0];
        var base = Caml_int64.of_int32(int_of_string_base(hbase));
        var sign = Caml_int64.of_int32(match[1]);
        var threshold;
        switch (hbase) {
          case /* Oct */
          0:
            threshold = [
              536870911,
              4294967295
            ];
            break;
          case /* Hex */
          1:
            threshold = [
              268435455,
              4294967295
            ];
            break;
          case /* Dec */
          2:
            threshold = [
              429496729,
              2576980377
            ];
            break;
          case /* Bin */
          3:
            threshold = Caml_int64.max_int;
            break;
        }
        var len = s.length;
        var c = i < len ? s.charCodeAt(i) : (
          /* '\000' */
          0
        );
        var d = Caml_int64.of_int32(parse_digit(c));
        if (Caml.i64_lt(d, Caml_int64.zero) || Caml.i64_ge(d, base)) {
          throw {
            RE_EXN_ID: "Failure",
            _1: "int64_of_string",
            Error: new Error()
          };
        }
        var aux = function(_acc, _k) {
          while (true) {
            var k = _k;
            var acc = _acc;
            if (k === len) {
              return acc;
            }
            var a = s.charCodeAt(k);
            if (a === /* '_' */
            95) {
              _k = k + 1 | 0;
              continue;
            }
            var v = Caml_int64.of_int32(parse_digit(a));
            if (Caml.i64_lt(v, Caml_int64.zero) || Caml.i64_ge(v, base) || Caml.i64_gt(acc, threshold)) {
              throw {
                RE_EXN_ID: "Failure",
                _1: "int64_of_string",
                Error: new Error()
              };
            }
            var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue;
          }
          ;
        };
        var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
        var or_res = Caml_int64.or_(res, Caml_int64.zero);
        if (Caml.i64_eq(base, [
          0,
          10
        ]) && Caml.i64_neq(res, or_res)) {
          throw {
            RE_EXN_ID: "Failure",
            _1: "int64_of_string",
            Error: new Error()
          };
        }
        return or_res;
      }
      function int_of_base(param) {
        switch (param) {
          case /* Oct */
          0:
            return 8;
          case /* Hex */
          1:
            return 16;
          case /* Dec */
          2:
            return 10;
        }
      }
      function lowercase(c) {
        if (c >= /* 'A' */
        65 && c <= /* 'Z' */
        90 || c >= /* '\192' */
        192 && c <= /* '\214' */
        214 || c >= /* '\216' */
        216 && c <= /* '\222' */
        222) {
          return c + 32 | 0;
        } else {
          return c;
        }
      }
      function parse_format(fmt) {
        var len = fmt.length;
        if (len > 31) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "format_int: format too long",
            Error: new Error()
          };
        }
        var f = {
          justify: "+",
          signstyle: "-",
          filter: " ",
          alternate: false,
          base: (
            /* Dec */
            2
          ),
          signedconv: false,
          width: 0,
          uppercase: false,
          sign: 1,
          prec: -1,
          conv: "f"
        };
        var _i = 0;
        while (true) {
          var i = _i;
          if (i >= len) {
            return f;
          }
          var c = fmt.charCodeAt(i);
          var exit = 0;
          if (c >= 69) {
            if (c >= 88) {
              if (c >= 121) {
                exit = 1;
              } else {
                switch (c) {
                  case 88:
                    f.base = /* Hex */
                    1;
                    f.uppercase = true;
                    _i = i + 1 | 0;
                    continue;
                  case 101:
                  case 102:
                  case 103:
                    exit = 5;
                    break;
                  case 100:
                  case 105:
                    exit = 4;
                    break;
                  case 111:
                    f.base = /* Oct */
                    0;
                    _i = i + 1 | 0;
                    continue;
                  case 117:
                    f.base = /* Dec */
                    2;
                    _i = i + 1 | 0;
                    continue;
                  case 89:
                  case 90:
                  case 91:
                  case 92:
                  case 93:
                  case 94:
                  case 95:
                  case 96:
                  case 97:
                  case 98:
                  case 99:
                  case 104:
                  case 106:
                  case 107:
                  case 108:
                  case 109:
                  case 110:
                  case 112:
                  case 113:
                  case 114:
                  case 115:
                  case 116:
                  case 118:
                  case 119:
                    exit = 1;
                    break;
                  case 120:
                    f.base = /* Hex */
                    1;
                    _i = i + 1 | 0;
                    continue;
                }
              }
            } else if (c >= 72) {
              exit = 1;
            } else {
              f.signedconv = true;
              f.uppercase = true;
              f.conv = String.fromCharCode(lowercase(c));
              _i = i + 1 | 0;
              continue;
            }
          } else {
            switch (c) {
              case 35:
                f.alternate = true;
                _i = i + 1 | 0;
                continue;
              case 32:
              case 43:
                exit = 2;
                break;
              case 45:
                f.justify = "-";
                _i = i + 1 | 0;
                continue;
              case 46:
                f.prec = 0;
                var j = i + 1 | 0;
                while ((/* @__PURE__ */ function(j2) {
                  return function() {
                    var w = fmt.charCodeAt(j2) - /* '0' */
                    48 | 0;
                    return w >= 0 && w <= 9;
                  };
                }(j))()) {
                  f.prec = (Math.imul(f.prec, 10) + fmt.charCodeAt(j) | 0) - /* '0' */
                  48 | 0;
                  j = j + 1 | 0;
                }
                ;
                _i = j;
                continue;
              case 33:
              case 34:
              case 36:
              case 37:
              case 38:
              case 39:
              case 40:
              case 41:
              case 42:
              case 44:
              case 47:
                exit = 1;
                break;
              case 48:
                f.filter = "0";
                _i = i + 1 | 0;
                continue;
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                exit = 3;
                break;
              default:
                exit = 1;
            }
          }
          switch (exit) {
            case 1:
              _i = i + 1 | 0;
              continue;
            case 2:
              f.signstyle = String.fromCharCode(c);
              _i = i + 1 | 0;
              continue;
            case 3:
              f.width = 0;
              var j$1 = i;
              while ((/* @__PURE__ */ function(j$12) {
                return function() {
                  var w = fmt.charCodeAt(j$12) - /* '0' */
                  48 | 0;
                  return w >= 0 && w <= 9;
                };
              }(j$1))()) {
                f.width = (Math.imul(f.width, 10) + fmt.charCodeAt(j$1) | 0) - /* '0' */
                48 | 0;
                j$1 = j$1 + 1 | 0;
              }
              ;
              _i = j$1;
              continue;
            case 4:
              f.signedconv = true;
              f.base = /* Dec */
              2;
              _i = i + 1 | 0;
              continue;
            case 5:
              f.signedconv = true;
              f.conv = String.fromCharCode(c);
              _i = i + 1 | 0;
              continue;
          }
        }
        ;
      }
      function finish_formatting(config, rawbuffer) {
        var justify = config.justify;
        var signstyle = config.signstyle;
        var filter = config.filter;
        var alternate = config.alternate;
        var base = config.base;
        var signedconv = config.signedconv;
        var width = config.width;
        var uppercase = config.uppercase;
        var sign = config.sign;
        var len = rawbuffer.length;
        if (signedconv && (sign < 0 || signstyle !== "-")) {
          len = len + 1 | 0;
        }
        if (alternate) {
          if (base === /* Oct */
          0) {
            len = len + 1 | 0;
          } else if (base === /* Hex */
          1) {
            len = len + 2 | 0;
          }
        }
        var buffer = "";
        if (justify === "+" && filter === " ") {
          for (var _for = len; _for < width; ++_for) {
            buffer = buffer + filter;
          }
        }
        if (signedconv) {
          if (sign < 0) {
            buffer = buffer + "-";
          } else if (signstyle !== "-") {
            buffer = buffer + signstyle;
          }
        }
        if (alternate && base === /* Oct */
        0) {
          buffer = buffer + "0";
        }
        if (alternate && base === /* Hex */
        1) {
          buffer = buffer + "0x";
        }
        if (justify === "+" && filter === "0") {
          for (var _for$1 = len; _for$1 < width; ++_for$1) {
            buffer = buffer + filter;
          }
        }
        buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
        if (justify === "-") {
          for (var _for$2 = len; _for$2 < width; ++_for$2) {
            buffer = buffer + " ";
          }
        }
        return buffer;
      }
      function caml_format_int(fmt, i) {
        if (fmt === "%d") {
          return String(i);
        }
        var f = parse_format(fmt);
        var i$1 = i < 0 ? f.signedconv ? (f.sign = -1, -i >>> 0) : i >>> 0 : i;
        var s = i$1.toString(int_of_base(f.base));
        if (f.prec >= 0) {
          f.filter = " ";
          var n = f.prec - s.length | 0;
          if (n > 0) {
            s = "0".repeat(n) + s;
          }
        }
        return finish_formatting(f, s);
      }
      function dec_of_pos_int64(x) {
        if (!Caml.i64_lt(x, Caml_int64.zero)) {
          return Js__Caml_int64.to_string(x);
        }
        var wbase = [
          0,
          10
        ];
        var y = Js__Caml_int64.discard_sign(x);
        var match = Js__Caml_int64.div_mod(y, wbase);
        var match$1 = Js__Caml_int64.div_mod(Caml_int64.add([
          0,
          8
        ], match[1]), wbase);
        var quotient = Caml_int64.add(Caml_int64.add([
          214748364,
          3435973836
        ], match[0]), match$1[0]);
        return Js__Caml_int64.to_string(quotient) + "0123456789"[Caml_int64.to_int32(match$1[1])];
      }
      function oct_of_int64(x) {
        var s = "";
        var wbase = [
          0,
          8
        ];
        var cvtbl = "01234567";
        if (Caml.i64_lt(x, Caml_int64.zero)) {
          var y = Js__Caml_int64.discard_sign(x);
          var match = Js__Caml_int64.div_mod(y, wbase);
          var quotient = Caml_int64.add([
            268435456,
            0
          ], match[0]);
          var modulus = match[1];
          s = cvtbl[Caml_int64.to_int32(modulus)] + s;
          while (Caml.i64_neq(quotient, Caml_int64.zero)) {
            var match$1 = Js__Caml_int64.div_mod(quotient, wbase);
            quotient = match$1[0];
            modulus = match$1[1];
            s = cvtbl[Caml_int64.to_int32(modulus)] + s;
          }
          ;
        } else {
          var match$2 = Js__Caml_int64.div_mod(x, wbase);
          var quotient$1 = match$2[0];
          var modulus$1 = match$2[1];
          s = cvtbl[Caml_int64.to_int32(modulus$1)] + s;
          while (Caml.i64_neq(quotient$1, Caml_int64.zero)) {
            var match$3 = Js__Caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$3[0];
            modulus$1 = match$3[1];
            s = cvtbl[Caml_int64.to_int32(modulus$1)] + s;
          }
          ;
        }
        return s;
      }
      function caml_int64_format(fmt, x) {
        if (fmt === "%d") {
          return Js__Caml_int64.to_string(x);
        }
        var f = parse_format(fmt);
        var x$1 = f.signedconv && Caml.i64_lt(x, Caml_int64.zero) ? (f.sign = -1, Caml_int64.neg(x)) : x;
        var match = f.base;
        var s;
        switch (match) {
          case /* Oct */
          0:
            s = oct_of_int64(x$1);
            break;
          case /* Hex */
          1:
            s = Js__Caml_int64.to_hex(x$1);
            break;
          case /* Dec */
          2:
            s = dec_of_pos_int64(x$1);
            break;
        }
        var fill_s;
        if (f.prec >= 0) {
          f.filter = " ";
          var n = f.prec - s.length | 0;
          fill_s = n > 0 ? "0".repeat(n) + s : s;
        } else {
          fill_s = s;
        }
        return finish_formatting(f, fill_s);
      }
      function caml_format_float(fmt, x) {
        var f = parse_format(fmt);
        var prec = f.prec < 0 ? 6 : f.prec;
        var x$1 = x < 0 ? (f.sign = -1, -x) : x;
        var s = "";
        if (isNaN(x$1)) {
          s = "nan";
          f.filter = " ";
        } else if (isFinite(x$1)) {
          var match = f.conv;
          switch (match) {
            case "e":
              s = x$1.toExponential(prec);
              var i = s.length;
              if (s[i - 3 | 0] === "e") {
                s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
              }
              break;
            case "f":
              s = x$1.toFixed(prec);
              break;
            case "g":
              var prec$1 = prec !== 0 ? prec : 1;
              s = x$1.toExponential(prec$1 - 1 | 0);
              var j = s.indexOf("e");
              var exp = Number(s.slice(j + 1 | 0)) | 0;
              if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
                var i$1 = j - 1 | 0;
                while (s[i$1] === "0") {
                  i$1 = i$1 - 1 | 0;
                }
                ;
                if (s[i$1] === ".") {
                  i$1 = i$1 - 1 | 0;
                }
                s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
                var i$2 = s.length;
                if (s[i$2 - 3 | 0] === "e") {
                  s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
                }
              } else {
                var p = prec$1;
                if (exp < 0) {
                  p = p - (exp + 1 | 0) | 0;
                  s = x$1.toFixed(p);
                } else {
                  while (function() {
                    s = x$1.toFixed(p);
                    return s.length > (prec$1 + 1 | 0);
                  }()) {
                    p = p - 1 | 0;
                  }
                  ;
                }
                if (p !== 0) {
                  var k = s.length - 1 | 0;
                  while (s[k] === "0") {
                    k = k - 1 | 0;
                  }
                  ;
                  if (s[k] === ".") {
                    k = k - 1 | 0;
                  }
                  s = s.slice(0, k + 1 | 0);
                }
              }
              break;
            default:
          }
        } else {
          s = "inf";
          f.filter = " ";
        }
        return finish_formatting(f, s);
      }
      var caml_hexstring_of_float = function(x, prec, style) {
        if (!isFinite(x)) {
          if (isNaN(x))
            return "nan";
          return x > 0 ? "infinity" : "-infinity";
        }
        var sign = x == 0 && 1 / x == -Infinity ? 1 : x >= 0 ? 0 : 1;
        if (sign)
          x = -x;
        var exp = 0;
        if (x == 0) {
        } else if (x < 1) {
          while (x < 1 && exp > -1022) {
            x *= 2;
            exp--;
          }
        } else {
          while (x >= 2) {
            x /= 2;
            exp++;
          }
        }
        var exp_sign = exp < 0 ? "" : "+";
        var sign_str = "";
        if (sign)
          sign_str = "-";
        else {
          switch (style) {
            case 43:
              sign_str = "+";
              break;
            case 32:
              sign_str = " ";
              break;
            default:
              break;
          }
        }
        if (prec >= 0 && prec < 13) {
          var cst = Math.pow(2, prec * 4);
          x = Math.round(x * cst) / cst;
        }
        var x_str = x.toString(16);
        if (prec >= 0) {
          var idx = x_str.indexOf(".");
          if (idx < 0) {
            x_str += "." + "0".repeat(prec);
          } else {
            var size = idx + 1 + prec;
            if (x_str.length < size)
              x_str += "0".repeat(size - x_str.length);
            else
              x_str = x_str.substr(0, size);
          }
        }
        return sign_str + "0x" + x_str + "p" + exp_sign + exp.toString(10);
      };
      var float_of_string = function(s, exn) {
        var res = +s;
        if (s.length > 0 && res === res)
          return res;
        s = s.replace(/_/g, "");
        res = +s;
        if (s.length > 0 && res === res || /^[+-]?nan$/i.test(s)) {
          return res;
        }
        ;
        var m = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(s);
        if (m) {
          var m3 = m[3].replace(/0+$/, "");
          var mantissa = parseInt(m[1] + m[2] + m3, 16);
          var exponent = (m[4] | 0) - 4 * m3.length;
          res = mantissa * Math.pow(2, exponent);
          return res;
        }
        if (/^\+?inf(inity)?$/i.test(s))
          return Infinity;
        if (/^-inf(inity)?$/i.test(s))
          return -Infinity;
        throw exn;
      };
      function caml_float_of_string(s) {
        return float_of_string(s, {
          RE_EXN_ID: "Failure",
          _1: "float_of_string"
        });
      }
      var caml_nativeint_format = caml_format_int;
      var caml_int32_format = caml_format_int;
      var caml_int32_of_string = caml_int_of_string;
      var caml_nativeint_of_string = caml_int_of_string;
      exports.caml_format_float = caml_format_float;
      exports.caml_hexstring_of_float = caml_hexstring_of_float;
      exports.caml_format_int = caml_format_int;
      exports.caml_nativeint_format = caml_nativeint_format;
      exports.caml_int32_format = caml_int32_format;
      exports.caml_float_of_string = caml_float_of_string;
      exports.caml_int64_format = caml_int64_format;
      exports.caml_int_of_string = caml_int_of_string;
      exports.caml_int32_of_string = caml_int32_of_string;
      exports.caml_int64_of_string = caml_int64_of_string;
      exports.caml_nativeint_of_string = caml_nativeint_of_string;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_io.js
  var require_caml_io = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_io.js"(exports) {
      "use strict";
      var stdout = {
        buffer: "",
        output: function(param, s) {
          var v = s.length - 1 | 0;
          if (typeof process !== "undefined" && process.stdout && process.stdout.write) {
            return process.stdout.write(s);
          } else {
            if (s[v] === "\n") {
              console.log(s.slice(0, v));
            } else {
              console.log(s);
            }
            return;
          }
        }
      };
      var stderr = {
        buffer: "",
        output: function(param, s) {
          var v = s.length - 1 | 0;
          if (s[v] === "\n") {
            console.log(s.slice(0, v));
          } else {
            console.log(s);
          }
        }
      };
      function caml_ml_flush(oc) {
        if (oc.buffer !== "") {
          oc.output(oc, oc.buffer);
          oc.buffer = "";
          return;
        }
      }
      function caml_ml_output(oc, str, offset, len) {
        var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
        if (typeof process !== "undefined" && process.stdout && process.stdout.write && oc === stdout) {
          return process.stdout.write(str$1);
        }
        var id = str$1.lastIndexOf("\n");
        if (id < 0) {
          oc.buffer = oc.buffer + str$1;
        } else {
          oc.buffer = oc.buffer + str$1.slice(0, id + 1 | 0);
          caml_ml_flush(oc);
          oc.buffer = oc.buffer + str$1.slice(id + 1 | 0);
        }
      }
      function caml_ml_output_char(oc, $$char) {
        caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
      }
      function caml_ml_out_channels_list(param) {
        return {
          hd: stdout,
          tl: {
            hd: stderr,
            tl: (
              /* [] */
              0
            )
          }
        };
      }
      var stdin;
      exports.stdin = stdin;
      exports.stdout = stdout;
      exports.stderr = stderr;
      exports.caml_ml_flush = caml_ml_flush;
      exports.caml_ml_output = caml_ml_output;
      exports.caml_ml_output_char = caml_ml_output_char;
      exports.caml_ml_out_channels_list = caml_ml_out_channels_list;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_option.js
  var require_caml_option = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_option.js"(exports) {
      "use strict";
      function isNested(x) {
        return x.BS_PRIVATE_NESTED_SOME_NONE !== void 0;
      }
      function some(x) {
        if (x === void 0) {
          return {
            BS_PRIVATE_NESTED_SOME_NONE: 0
          };
        } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
          return {
            BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
          };
        } else {
          return x;
        }
      }
      function nullable_to_opt(x) {
        if (x == null) {
          return;
        } else {
          return some(x);
        }
      }
      function undefined_to_opt(x) {
        if (x === void 0) {
          return;
        } else {
          return some(x);
        }
      }
      function null_to_opt(x) {
        if (x === null) {
          return;
        } else {
          return some(x);
        }
      }
      function valFromOption(x) {
        if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) {
          return x;
        }
        var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
        if (depth === 0) {
          return;
        } else {
          return {
            BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
          };
        }
      }
      function option_get(x) {
        if (x === void 0) {
          return;
        } else {
          return valFromOption(x);
        }
      }
      function option_unwrap(x) {
        if (x !== void 0) {
          return x.VAL;
        } else {
          return x;
        }
      }
      exports.nullable_to_opt = nullable_to_opt;
      exports.undefined_to_opt = undefined_to_opt;
      exports.null_to_opt = null_to_opt;
      exports.valFromOption = valFromOption;
      exports.some = some;
      exports.isNested = isNested;
      exports.option_get = option_get;
      exports.option_unwrap = option_unwrap;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_js_exceptions.js
  var require_caml_js_exceptions = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_js_exceptions.js"(exports) {
      "use strict";
      var Caml_exceptions = require_caml_exceptions();
      var Caml_option = require_caml_option();
      var Js__Caml_exceptions = require_caml_exceptions();
      var $$Error = /* @__PURE__ */ Caml_exceptions.create("Js__Caml_js_exceptions.Error");
      function internalToOCamlException(e) {
        if (Js__Caml_exceptions.caml_is_extension(e)) {
          return e;
        } else {
          return {
            RE_EXN_ID: $$Error,
            _1: e
          };
        }
      }
      function caml_as_js_exn(exn) {
        if (exn.RE_EXN_ID === $$Error) {
          return Caml_option.some(exn._1);
        }
      }
      exports.$$Error = $$Error;
      exports.internalToOCamlException = internalToOCamlException;
      exports.caml_as_js_exn = caml_as_js_exn;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_string.js
  var require_caml_string = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_string.js"(exports) {
      "use strict";
      function get(s, i) {
        if (i >= s.length || i < 0) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        return s.charCodeAt(i);
      }
      function make(n, ch) {
        return String.fromCharCode(ch).repeat(n);
      }
      exports.get = get;
      exports.make = make;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_sys.js
  var require_caml_sys = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_sys.js"(exports) {
      "use strict";
      function caml_sys_getenv(s) {
        if (typeof process === "undefined" || process.env === void 0) {
          throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
          };
        }
        var x = process.env[s];
        if (x !== void 0) {
          return x;
        }
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      var os_type = function(_) {
        if (typeof process !== "undefined" && process.platform === "win32") {
          return "Win32";
        } else {
          return "Unix";
        }
      };
      function caml_sys_time(param) {
        if (typeof process === "undefined" || process.uptime === void 0) {
          return -1;
        } else {
          return process.uptime();
        }
      }
      function caml_sys_system_command(_cmd) {
        return 127;
      }
      var caml_sys_getcwd = function(param) {
        if (typeof process === "undefined" || process.cwd === void 0) {
          return "/";
        }
        return process.cwd();
      };
      function caml_sys_executable_name(param) {
        if (typeof process === "undefined") {
          return "";
        }
        var argv = process.argv;
        if (argv == null) {
          return "";
        } else {
          return argv[0];
        }
      }
      function caml_sys_argv(param) {
        if (typeof process === "undefined") {
          return [""];
        }
        var argv = process.argv;
        if (argv == null) {
          return [""];
        } else {
          return argv;
        }
      }
      function caml_sys_exit(exit_code) {
        if (typeof process !== "undefined") {
          return process.exit(exit_code);
        }
      }
      function caml_sys_is_directory(_s) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "caml_sys_is_directory not implemented",
          Error: new Error()
        };
      }
      function caml_sys_file_exists(_s) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "caml_sys_file_exists not implemented",
          Error: new Error()
        };
      }
      exports.caml_sys_getenv = caml_sys_getenv;
      exports.caml_sys_time = caml_sys_time;
      exports.os_type = os_type;
      exports.caml_sys_system_command = caml_sys_system_command;
      exports.caml_sys_getcwd = caml_sys_getcwd;
      exports.caml_sys_executable_name = caml_sys_executable_name;
      exports.caml_sys_argv = caml_sys_argv;
      exports.caml_sys_exit = caml_sys_exit;
      exports.caml_sys_is_directory = caml_sys_is_directory;
      exports.caml_sys_file_exists = caml_sys_file_exists;
    }
  });

  // _build/default/dist/node_modules/melange/camlinternalFormatBasics.js
  var require_camlinternalFormatBasics = __commonJS({
    "_build/default/dist/node_modules/melange/camlinternalFormatBasics.js"(exports) {
      "use strict";
      function erase_rel(param) {
        if (typeof param === "number") {
          return (
            /* End_of_fmtty */
            0
          );
        }
        switch (param.TAG | 0) {
          case /* Char_ty */
          0:
            return {
              TAG: (
                /* Char_ty */
                0
              ),
              _0: erase_rel(param._0)
            };
          case /* String_ty */
          1:
            return {
              TAG: (
                /* String_ty */
                1
              ),
              _0: erase_rel(param._0)
            };
          case /* Int_ty */
          2:
            return {
              TAG: (
                /* Int_ty */
                2
              ),
              _0: erase_rel(param._0)
            };
          case /* Int32_ty */
          3:
            return {
              TAG: (
                /* Int32_ty */
                3
              ),
              _0: erase_rel(param._0)
            };
          case /* Nativeint_ty */
          4:
            return {
              TAG: (
                /* Nativeint_ty */
                4
              ),
              _0: erase_rel(param._0)
            };
          case /* Int64_ty */
          5:
            return {
              TAG: (
                /* Int64_ty */
                5
              ),
              _0: erase_rel(param._0)
            };
          case /* Float_ty */
          6:
            return {
              TAG: (
                /* Float_ty */
                6
              ),
              _0: erase_rel(param._0)
            };
          case /* Bool_ty */
          7:
            return {
              TAG: (
                /* Bool_ty */
                7
              ),
              _0: erase_rel(param._0)
            };
          case /* Format_arg_ty */
          8:
            return {
              TAG: (
                /* Format_arg_ty */
                8
              ),
              _0: param._0,
              _1: erase_rel(param._1)
            };
          case /* Format_subst_ty */
          9:
            var ty1 = param._0;
            return {
              TAG: (
                /* Format_subst_ty */
                9
              ),
              _0: ty1,
              _1: ty1,
              _2: erase_rel(param._2)
            };
          case /* Alpha_ty */
          10:
            return {
              TAG: (
                /* Alpha_ty */
                10
              ),
              _0: erase_rel(param._0)
            };
          case /* Theta_ty */
          11:
            return {
              TAG: (
                /* Theta_ty */
                11
              ),
              _0: erase_rel(param._0)
            };
          case /* Any_ty */
          12:
            return {
              TAG: (
                /* Any_ty */
                12
              ),
              _0: erase_rel(param._0)
            };
          case /* Reader_ty */
          13:
            return {
              TAG: (
                /* Reader_ty */
                13
              ),
              _0: erase_rel(param._0)
            };
          case /* Ignored_reader_ty */
          14:
            return {
              TAG: (
                /* Ignored_reader_ty */
                14
              ),
              _0: erase_rel(param._0)
            };
        }
      }
      function concat_fmtty(fmtty1, fmtty2) {
        if (typeof fmtty1 === "number") {
          return fmtty2;
        }
        switch (fmtty1.TAG | 0) {
          case /* Char_ty */
          0:
            return {
              TAG: (
                /* Char_ty */
                0
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* String_ty */
          1:
            return {
              TAG: (
                /* String_ty */
                1
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Int_ty */
          2:
            return {
              TAG: (
                /* Int_ty */
                2
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Int32_ty */
          3:
            return {
              TAG: (
                /* Int32_ty */
                3
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Nativeint_ty */
          4:
            return {
              TAG: (
                /* Nativeint_ty */
                4
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Int64_ty */
          5:
            return {
              TAG: (
                /* Int64_ty */
                5
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Float_ty */
          6:
            return {
              TAG: (
                /* Float_ty */
                6
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Bool_ty */
          7:
            return {
              TAG: (
                /* Bool_ty */
                7
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Format_arg_ty */
          8:
            return {
              TAG: (
                /* Format_arg_ty */
                8
              ),
              _0: fmtty1._0,
              _1: concat_fmtty(fmtty1._1, fmtty2)
            };
          case /* Format_subst_ty */
          9:
            return {
              TAG: (
                /* Format_subst_ty */
                9
              ),
              _0: fmtty1._0,
              _1: fmtty1._1,
              _2: concat_fmtty(fmtty1._2, fmtty2)
            };
          case /* Alpha_ty */
          10:
            return {
              TAG: (
                /* Alpha_ty */
                10
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Theta_ty */
          11:
            return {
              TAG: (
                /* Theta_ty */
                11
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Any_ty */
          12:
            return {
              TAG: (
                /* Any_ty */
                12
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Reader_ty */
          13:
            return {
              TAG: (
                /* Reader_ty */
                13
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
          case /* Ignored_reader_ty */
          14:
            return {
              TAG: (
                /* Ignored_reader_ty */
                14
              ),
              _0: concat_fmtty(fmtty1._0, fmtty2)
            };
        }
      }
      function concat_fmt(fmt1, fmt2) {
        if (typeof fmt1 === "number") {
          return fmt2;
        }
        switch (fmt1.TAG | 0) {
          case /* Char */
          0:
            return {
              TAG: (
                /* Char */
                0
              ),
              _0: concat_fmt(fmt1._0, fmt2)
            };
          case /* Caml_char */
          1:
            return {
              TAG: (
                /* Caml_char */
                1
              ),
              _0: concat_fmt(fmt1._0, fmt2)
            };
          case /* String */
          2:
            return {
              TAG: (
                /* String */
                2
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Caml_string */
          3:
            return {
              TAG: (
                /* Caml_string */
                3
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Int */
          4:
            return {
              TAG: (
                /* Int */
                4
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: fmt1._2,
              _3: concat_fmt(fmt1._3, fmt2)
            };
          case /* Int32 */
          5:
            return {
              TAG: (
                /* Int32 */
                5
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: fmt1._2,
              _3: concat_fmt(fmt1._3, fmt2)
            };
          case /* Nativeint */
          6:
            return {
              TAG: (
                /* Nativeint */
                6
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: fmt1._2,
              _3: concat_fmt(fmt1._3, fmt2)
            };
          case /* Int64 */
          7:
            return {
              TAG: (
                /* Int64 */
                7
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: fmt1._2,
              _3: concat_fmt(fmt1._3, fmt2)
            };
          case /* Float */
          8:
            return {
              TAG: (
                /* Float */
                8
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: fmt1._2,
              _3: concat_fmt(fmt1._3, fmt2)
            };
          case /* Bool */
          9:
            return {
              TAG: (
                /* Bool */
                9
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Flush */
          10:
            return {
              TAG: (
                /* Flush */
                10
              ),
              _0: concat_fmt(fmt1._0, fmt2)
            };
          case /* String_literal */
          11:
            return {
              TAG: (
                /* String_literal */
                11
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Char_literal */
          12:
            return {
              TAG: (
                /* Char_literal */
                12
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Format_arg */
          13:
            return {
              TAG: (
                /* Format_arg */
                13
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: concat_fmt(fmt1._2, fmt2)
            };
          case /* Format_subst */
          14:
            return {
              TAG: (
                /* Format_subst */
                14
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: concat_fmt(fmt1._2, fmt2)
            };
          case /* Alpha */
          15:
            return {
              TAG: (
                /* Alpha */
                15
              ),
              _0: concat_fmt(fmt1._0, fmt2)
            };
          case /* Theta */
          16:
            return {
              TAG: (
                /* Theta */
                16
              ),
              _0: concat_fmt(fmt1._0, fmt2)
            };
          case /* Formatting_lit */
          17:
            return {
              TAG: (
                /* Formatting_lit */
                17
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Formatting_gen */
          18:
            return {
              TAG: (
                /* Formatting_gen */
                18
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Reader */
          19:
            return {
              TAG: (
                /* Reader */
                19
              ),
              _0: concat_fmt(fmt1._0, fmt2)
            };
          case /* Scan_char_set */
          20:
            return {
              TAG: (
                /* Scan_char_set */
                20
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: concat_fmt(fmt1._2, fmt2)
            };
          case /* Scan_get_counter */
          21:
            return {
              TAG: (
                /* Scan_get_counter */
                21
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Scan_next_char */
          22:
            return {
              TAG: (
                /* Scan_next_char */
                22
              ),
              _0: concat_fmt(fmt1._0, fmt2)
            };
          case /* Ignored_param */
          23:
            return {
              TAG: (
                /* Ignored_param */
                23
              ),
              _0: fmt1._0,
              _1: concat_fmt(fmt1._1, fmt2)
            };
          case /* Custom */
          24:
            return {
              TAG: (
                /* Custom */
                24
              ),
              _0: fmt1._0,
              _1: fmt1._1,
              _2: concat_fmt(fmt1._2, fmt2)
            };
        }
      }
      exports.concat_fmtty = concat_fmtty;
      exports.erase_rel = erase_rel;
      exports.concat_fmt = concat_fmt;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_array.js
  var require_caml_array = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_array.js"(exports) {
      "use strict";
      function sub(x, offset, len2) {
        var result = new Array(len2);
        var j = 0;
        var i = offset;
        while (j < len2) {
          result[j] = x[i];
          j = j + 1 | 0;
          i = i + 1 | 0;
        }
        ;
        return result;
      }
      function len(_acc, _l) {
        while (true) {
          var l = _l;
          var acc = _acc;
          if (!l) {
            return acc;
          }
          _l = l.tl;
          _acc = l.hd.length + acc | 0;
          continue;
        }
        ;
      }
      function fill(arr, _i, _l) {
        while (true) {
          var l = _l;
          var i = _i;
          if (!l) {
            return;
          }
          var x = l.hd;
          var l$1 = x.length;
          var k = i;
          var j = 0;
          while (j < l$1) {
            arr[k] = x[j];
            k = k + 1 | 0;
            j = j + 1 | 0;
          }
          ;
          _l = l.tl;
          _i = k;
          continue;
        }
        ;
      }
      function concat(l) {
        var v = len(0, l);
        var result = new Array(v);
        fill(result, 0, l);
        return result;
      }
      function set(xs, index, newval) {
        if (index < 0 || index >= xs.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        xs[index] = newval;
      }
      function get(xs, index) {
        if (index < 0 || index >= xs.length) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
        }
        return xs[index];
      }
      function make(len2, init) {
        var b = new Array(len2);
        for (var i = 0; i < len2; ++i) {
          b[i] = init;
        }
        return b;
      }
      function make_float(len2) {
        var b = new Array(len2);
        for (var i = 0; i < len2; ++i) {
          b[i] = 0;
        }
        return b;
      }
      function blit(a1, i1, a2, i2, len2) {
        if (i2 <= i1) {
          for (var j = 0; j < len2; ++j) {
            a2[j + i2 | 0] = a1[j + i1 | 0];
          }
          return;
        }
        for (var j$1 = len2 - 1 | 0; j$1 >= 0; --j$1) {
          a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
        }
      }
      function dup(prim) {
        return prim.slice(0);
      }
      exports.dup = dup;
      exports.sub = sub;
      exports.concat = concat;
      exports.make = make;
      exports.make_float = make_float;
      exports.blit = blit;
      exports.get = get;
      exports.set = set;
    }
  });

  // _build/default/dist/node_modules/melange.js/curry.js
  var require_curry = __commonJS({
    "_build/default/dist/node_modules/melange.js/curry.js"(exports) {
      "use strict";
      var Caml_array = require_caml_array();
      function app(_f, _args) {
        while (true) {
          var args = _args;
          var f = _f;
          var init_arity = f.length;
          var arity = init_arity === 0 ? 1 : init_arity;
          var len = args.length;
          var d = arity - len | 0;
          if (d === 0) {
            return f.apply(null, args);
          }
          if (d >= 0) {
            return /* @__PURE__ */ function(f2, args2) {
              return function(x) {
                return app(f2, args2.concat([x]));
              };
            }(f, args);
          }
          _args = Caml_array.sub(args, arity, -d | 0);
          _f = f.apply(null, Caml_array.sub(args, 0, arity));
          continue;
        }
        ;
      }
      function _1(o, a0) {
        var arity = o.length;
        if (arity === 1) {
          return o(a0);
        } else {
          switch (arity) {
            case 1:
              return o(a0);
            case 2:
              return function(param) {
                return o(a0, param);
              };
            case 3:
              return function(param, param$1) {
                return o(a0, param, param$1);
              };
            case 4:
              return function(param, param$1, param$2) {
                return o(a0, param, param$1, param$2);
              };
            case 5:
              return function(param, param$1, param$2, param$3) {
                return o(a0, param, param$1, param$2, param$3);
              };
            case 6:
              return function(param, param$1, param$2, param$3, param$4) {
                return o(a0, param, param$1, param$2, param$3, param$4);
              };
            case 7:
              return function(param, param$1, param$2, param$3, param$4, param$5) {
                return o(a0, param, param$1, param$2, param$3, param$4, param$5);
              };
            default:
              return app(o, [a0]);
          }
        }
      }
      function __1(o) {
        var arity = o.length;
        if (arity === 1) {
          return o;
        } else {
          return function(a0) {
            return _1(o, a0);
          };
        }
      }
      function _2(o, a0, a1) {
        var arity = o.length;
        if (arity === 2) {
          return o(a0, a1);
        } else {
          switch (arity) {
            case 1:
              return app(o(a0), [a1]);
            case 2:
              return o(a0, a1);
            case 3:
              return function(param) {
                return o(a0, a1, param);
              };
            case 4:
              return function(param, param$1) {
                return o(a0, a1, param, param$1);
              };
            case 5:
              return function(param, param$1, param$2) {
                return o(a0, a1, param, param$1, param$2);
              };
            case 6:
              return function(param, param$1, param$2, param$3) {
                return o(a0, a1, param, param$1, param$2, param$3);
              };
            case 7:
              return function(param, param$1, param$2, param$3, param$4) {
                return o(a0, a1, param, param$1, param$2, param$3, param$4);
              };
            default:
              return app(o, [
                a0,
                a1
              ]);
          }
        }
      }
      function __2(o) {
        var arity = o.length;
        if (arity === 2) {
          return o;
        } else {
          return function(a0, a1) {
            return _2(o, a0, a1);
          };
        }
      }
      function _3(o, a0, a1, a2) {
        var arity = o.length;
        if (arity === 3) {
          return o(a0, a1, a2);
        } else {
          switch (arity) {
            case 1:
              return app(o(a0), [
                a1,
                a2
              ]);
            case 2:
              return app(o(a0, a1), [a2]);
            case 3:
              return o(a0, a1, a2);
            case 4:
              return function(param) {
                return o(a0, a1, a2, param);
              };
            case 5:
              return function(param, param$1) {
                return o(a0, a1, a2, param, param$1);
              };
            case 6:
              return function(param, param$1, param$2) {
                return o(a0, a1, a2, param, param$1, param$2);
              };
            case 7:
              return function(param, param$1, param$2, param$3) {
                return o(a0, a1, a2, param, param$1, param$2, param$3);
              };
            default:
              return app(o, [
                a0,
                a1,
                a2
              ]);
          }
        }
      }
      function __3(o) {
        var arity = o.length;
        if (arity === 3) {
          return o;
        } else {
          return function(a0, a1, a2) {
            return _3(o, a0, a1, a2);
          };
        }
      }
      function _4(o, a0, a1, a2, a3) {
        var arity = o.length;
        if (arity === 4) {
          return o(a0, a1, a2, a3);
        } else {
          switch (arity) {
            case 1:
              return app(o(a0), [
                a1,
                a2,
                a3
              ]);
            case 2:
              return app(o(a0, a1), [
                a2,
                a3
              ]);
            case 3:
              return app(o(a0, a1, a2), [a3]);
            case 4:
              return o(a0, a1, a2, a3);
            case 5:
              return function(param) {
                return o(a0, a1, a2, a3, param);
              };
            case 6:
              return function(param, param$1) {
                return o(a0, a1, a2, a3, param, param$1);
              };
            case 7:
              return function(param, param$1, param$2) {
                return o(a0, a1, a2, a3, param, param$1, param$2);
              };
            default:
              return app(o, [
                a0,
                a1,
                a2,
                a3
              ]);
          }
        }
      }
      function __4(o) {
        var arity = o.length;
        if (arity === 4) {
          return o;
        } else {
          return function(a0, a1, a2, a3) {
            return _4(o, a0, a1, a2, a3);
          };
        }
      }
      function _5(o, a0, a1, a2, a3, a4) {
        var arity = o.length;
        if (arity === 5) {
          return o(a0, a1, a2, a3, a4);
        } else {
          switch (arity) {
            case 1:
              return app(o(a0), [
                a1,
                a2,
                a3,
                a4
              ]);
            case 2:
              return app(o(a0, a1), [
                a2,
                a3,
                a4
              ]);
            case 3:
              return app(o(a0, a1, a2), [
                a3,
                a4
              ]);
            case 4:
              return app(o(a0, a1, a2, a3), [a4]);
            case 5:
              return o(a0, a1, a2, a3, a4);
            case 6:
              return function(param) {
                return o(a0, a1, a2, a3, a4, param);
              };
            case 7:
              return function(param, param$1) {
                return o(a0, a1, a2, a3, a4, param, param$1);
              };
            default:
              return app(o, [
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
          }
        }
      }
      function __5(o) {
        var arity = o.length;
        if (arity === 5) {
          return o;
        } else {
          return function(a0, a1, a2, a3, a4) {
            return _5(o, a0, a1, a2, a3, a4);
          };
        }
      }
      function _6(o, a0, a1, a2, a3, a4, a5) {
        var arity = o.length;
        if (arity === 6) {
          return o(a0, a1, a2, a3, a4, a5);
        } else {
          switch (arity) {
            case 1:
              return app(o(a0), [
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
            case 2:
              return app(o(a0, a1), [
                a2,
                a3,
                a4,
                a5
              ]);
            case 3:
              return app(o(a0, a1, a2), [
                a3,
                a4,
                a5
              ]);
            case 4:
              return app(o(a0, a1, a2, a3), [
                a4,
                a5
              ]);
            case 5:
              return app(o(a0, a1, a2, a3, a4), [a5]);
            case 6:
              return o(a0, a1, a2, a3, a4, a5);
            case 7:
              return function(param) {
                return o(a0, a1, a2, a3, a4, a5, param);
              };
            default:
              return app(o, [
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
          }
        }
      }
      function __6(o) {
        var arity = o.length;
        if (arity === 6) {
          return o;
        } else {
          return function(a0, a1, a2, a3, a4, a5) {
            return _6(o, a0, a1, a2, a3, a4, a5);
          };
        }
      }
      function _7(o, a0, a1, a2, a3, a4, a5, a6) {
        var arity = o.length;
        if (arity === 7) {
          return o(a0, a1, a2, a3, a4, a5, a6);
        } else {
          switch (arity) {
            case 1:
              return app(o(a0), [
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
            case 2:
              return app(o(a0, a1), [
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
            case 3:
              return app(o(a0, a1, a2), [
                a3,
                a4,
                a5,
                a6
              ]);
            case 4:
              return app(o(a0, a1, a2, a3), [
                a4,
                a5,
                a6
              ]);
            case 5:
              return app(o(a0, a1, a2, a3, a4), [
                a5,
                a6
              ]);
            case 6:
              return app(o(a0, a1, a2, a3, a4, a5), [a6]);
            case 7:
              return o(a0, a1, a2, a3, a4, a5, a6);
            default:
              return app(o, [
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
          }
        }
      }
      function __7(o) {
        var arity = o.length;
        if (arity === 7) {
          return o;
        } else {
          return function(a0, a1, a2, a3, a4, a5, a6) {
            return _7(o, a0, a1, a2, a3, a4, a5, a6);
          };
        }
      }
      function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
        var arity = o.length;
        if (arity === 8) {
          return o(a0, a1, a2, a3, a4, a5, a6, a7);
        } else {
          switch (arity) {
            case 1:
              return app(o(a0), [
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
            case 2:
              return app(o(a0, a1), [
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
            case 3:
              return app(o(a0, a1, a2), [
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
            case 4:
              return app(o(a0, a1, a2, a3), [
                a4,
                a5,
                a6,
                a7
              ]);
            case 5:
              return app(o(a0, a1, a2, a3, a4), [
                a5,
                a6,
                a7
              ]);
            case 6:
              return app(o(a0, a1, a2, a3, a4, a5), [
                a6,
                a7
              ]);
            case 7:
              return app(o(a0, a1, a2, a3, a4, a5, a6), [a7]);
            default:
              return app(o, [
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
          }
        }
      }
      function __8(o) {
        var arity = o.length;
        if (arity === 8) {
          return o;
        } else {
          return function(a0, a1, a2, a3, a4, a5, a6, a7) {
            return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
          };
        }
      }
      exports.app = app;
      exports._1 = _1;
      exports.__1 = __1;
      exports._2 = _2;
      exports.__2 = __2;
      exports._3 = _3;
      exports.__3 = __3;
      exports._4 = _4;
      exports.__4 = __4;
      exports._5 = _5;
      exports.__5 = __5;
      exports._6 = _6;
      exports.__6 = __6;
      exports._7 = _7;
      exports.__7 = __7;
      exports._8 = _8;
      exports.__8 = __8;
    }
  });

  // _build/default/dist/node_modules/melange/stdlib.js
  var require_stdlib = __commonJS({
    "_build/default/dist/node_modules/melange/stdlib.js"(exports) {
      "use strict";
      var Caml_bytes = require_caml_bytes();
      var Caml_exceptions = require_caml_exceptions();
      var Caml_external_polyfill = require_caml_external_polyfill();
      var Caml_format = require_caml_format();
      var Caml_io = require_caml_io();
      var Caml_js_exceptions = require_caml_js_exceptions();
      var Caml_string = require_caml_string();
      var Caml_sys = require_caml_sys();
      var CamlinternalFormatBasics = require_camlinternalFormatBasics();
      var Curry = require_curry();
      function failwith(s) {
        throw {
          RE_EXN_ID: "Failure",
          _1: s,
          Error: new Error()
        };
      }
      function invalid_arg(s) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: s,
          Error: new Error()
        };
      }
      var Exit = /* @__PURE__ */ Caml_exceptions.create("Stdlib.Exit");
      var Failure = "Failure";
      var Sys_error = "Sys_error";
      var End_of_file = "End_of_file";
      function abs(x) {
        if (x >= 0) {
          return x;
        } else {
          return -x | 0;
        }
      }
      function lnot(x) {
        return x ^ -1;
      }
      var min_int = -2147483648;
      function classify_float(x) {
        if (isFinite(x)) {
          if (Math.abs(x) >= 22250738585072014e-324) {
            return (
              /* FP_normal */
              0
            );
          } else if (x !== 0) {
            return (
              /* FP_subnormal */
              1
            );
          } else {
            return (
              /* FP_zero */
              2
            );
          }
        } else if (isNaN(x)) {
          return (
            /* FP_nan */
            4
          );
        } else {
          return (
            /* FP_infinite */
            3
          );
        }
      }
      function char_of_int(n) {
        if (n < 0 || n > 255) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "char_of_int",
            Error: new Error()
          };
        }
        return n;
      }
      function string_of_bool(b) {
        if (b) {
          return "true";
        } else {
          return "false";
        }
      }
      function bool_of_string(param) {
        switch (param) {
          case "false":
            return false;
          case "true":
            return true;
          default:
            throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "bool_of_string",
              Error: new Error()
            };
        }
      }
      function bool_of_string_opt(param) {
        switch (param) {
          case "false":
            return false;
          case "true":
            return true;
          default:
            return;
        }
      }
      function int_of_string_opt(s) {
        try {
          return Caml_format.caml_int_of_string(s);
        } catch (raw_exn) {
          var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
          if (exn.RE_EXN_ID === Failure) {
            return;
          }
          throw exn;
        }
      }
      function valid_float_lexem(s) {
        var l = s.length;
        var _i = 0;
        while (true) {
          var i = _i;
          if (i >= l) {
            return s + ".";
          }
          var match = Caml_string.get(s, i);
          if (match >= 48) {
            if (match >= 58) {
              return s;
            }
            _i = i + 1 | 0;
            continue;
          }
          if (match !== 45) {
            return s;
          }
          _i = i + 1 | 0;
          continue;
        }
        ;
      }
      function string_of_float(f) {
        return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
      }
      function float_of_string_opt(s) {
        try {
          return Caml_format.caml_float_of_string(s);
        } catch (raw_exn) {
          var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
          if (exn.RE_EXN_ID === Failure) {
            return;
          }
          throw exn;
        }
      }
      function $at_dps(_dst, _offset, _l1, l2) {
        while (true) {
          var dst = _dst;
          var offset = _offset;
          var l1 = _l1;
          if (!l1) {
            dst[offset] = l2;
            return;
          }
          var match = l1.tl;
          var h1 = l1.hd;
          if (!match) {
            dst[offset] = {
              hd: h1,
              tl: l2
            };
            return;
          }
          var match$1 = match.tl;
          var h2 = match.hd;
          if (!match$1) {
            dst[offset] = {
              hd: h1,
              tl: {
                hd: h2,
                tl: l2
              }
            };
            return;
          }
          var block = {
            hd: match$1.hd,
            tl: 24029
          };
          dst[offset] = {
            hd: h1,
            tl: {
              hd: h2,
              tl: block
            }
          };
          _l1 = match$1.tl;
          _offset = "tl";
          _dst = block;
          continue;
        }
        ;
      }
      function $at(l1, l2) {
        if (!l1) {
          return l2;
        }
        var match = l1.tl;
        var h1 = l1.hd;
        if (!match) {
          return {
            hd: h1,
            tl: l2
          };
        }
        var match$1 = match.tl;
        var h2 = match.hd;
        if (!match$1) {
          return {
            hd: h1,
            tl: {
              hd: h2,
              tl: l2
            }
          };
        }
        var block = {
          hd: match$1.hd,
          tl: 24029
        };
        return {
          hd: h1,
          tl: {
            hd: h2,
            tl: ($at_dps(block, "tl", match$1.tl, l2), block)
          }
        };
      }
      var stdin = Caml_io.stdin;
      var stdout = Caml_io.stdout;
      var stderr = Caml_io.stderr;
      function open_out_gen(mode, perm, name) {
        var c = Caml_external_polyfill.resolve("caml_ml_open_descriptor_out")(Caml_external_polyfill.resolve("caml_sys_open")(name, mode, perm));
        Caml_external_polyfill.resolve("caml_ml_set_channel_name")(c, name);
        return c;
      }
      function open_out(name) {
        return open_out_gen({
          hd: (
            /* Open_wronly */
            1
          ),
          tl: {
            hd: (
              /* Open_creat */
              3
            ),
            tl: {
              hd: (
                /* Open_trunc */
                4
              ),
              tl: {
                hd: (
                  /* Open_text */
                  7
                ),
                tl: (
                  /* [] */
                  0
                )
              }
            }
          }
        }, 438, name);
      }
      function open_out_bin(name) {
        return open_out_gen({
          hd: (
            /* Open_wronly */
            1
          ),
          tl: {
            hd: (
              /* Open_creat */
              3
            ),
            tl: {
              hd: (
                /* Open_trunc */
                4
              ),
              tl: {
                hd: (
                  /* Open_binary */
                  6
                ),
                tl: (
                  /* [] */
                  0
                )
              }
            }
          }
        }, 438, name);
      }
      function flush_all(param) {
        var _param = Caml_io.caml_ml_out_channels_list(void 0);
        while (true) {
          var param$1 = _param;
          if (!param$1) {
            return;
          }
          try {
            Caml_io.caml_ml_flush(param$1.hd);
          } catch (raw_exn) {
            var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
            if (exn.RE_EXN_ID !== Sys_error) {
              throw exn;
            }
          }
          _param = param$1.tl;
          continue;
        }
        ;
      }
      function output_bytes(oc, s) {
        Caml_external_polyfill.resolve("caml_ml_output_bytes")(oc, s, 0, s.length);
      }
      function output_string(oc, s) {
        Caml_io.caml_ml_output(oc, s, 0, s.length);
      }
      function output(oc, s, ofs, len) {
        if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "output",
            Error: new Error()
          };
        }
        Caml_external_polyfill.resolve("caml_ml_output_bytes")(oc, s, ofs, len);
      }
      function output_substring(oc, s, ofs, len) {
        if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "output_substring",
            Error: new Error()
          };
        }
        Caml_io.caml_ml_output(oc, s, ofs, len);
      }
      function output_value(chan, v) {
        Caml_external_polyfill.resolve("caml_output_value")(
          chan,
          v,
          /* [] */
          0
        );
      }
      function close_out(oc) {
        Caml_io.caml_ml_flush(oc);
        Caml_external_polyfill.resolve("caml_ml_close_channel")(oc);
      }
      function close_out_noerr(oc) {
        try {
          Caml_io.caml_ml_flush(oc);
        } catch (exn) {
        }
        try {
          return Caml_external_polyfill.resolve("caml_ml_close_channel")(oc);
        } catch (exn$1) {
          return;
        }
      }
      function open_in_gen(mode, perm, name) {
        var c = Caml_external_polyfill.resolve("caml_ml_open_descriptor_in")(Caml_external_polyfill.resolve("caml_sys_open")(name, mode, perm));
        Caml_external_polyfill.resolve("caml_ml_set_channel_name")(c, name);
        return c;
      }
      function open_in(name) {
        return open_in_gen({
          hd: (
            /* Open_rdonly */
            0
          ),
          tl: {
            hd: (
              /* Open_text */
              7
            ),
            tl: (
              /* [] */
              0
            )
          }
        }, 0, name);
      }
      function open_in_bin(name) {
        return open_in_gen({
          hd: (
            /* Open_rdonly */
            0
          ),
          tl: {
            hd: (
              /* Open_binary */
              6
            ),
            tl: (
              /* [] */
              0
            )
          }
        }, 0, name);
      }
      function input(ic, s, ofs, len) {
        if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "input",
            Error: new Error()
          };
        }
        return Caml_external_polyfill.resolve("caml_ml_input")(ic, s, ofs, len);
      }
      function unsafe_really_input(ic, s, _ofs, _len) {
        while (true) {
          var len = _len;
          var ofs = _ofs;
          if (len <= 0) {
            return;
          }
          var r = Caml_external_polyfill.resolve("caml_ml_input")(ic, s, ofs, len);
          if (r === 0) {
            throw {
              RE_EXN_ID: End_of_file,
              Error: new Error()
            };
          }
          _len = len - r | 0;
          _ofs = ofs + r | 0;
          continue;
        }
        ;
      }
      function really_input(ic, s, ofs, len) {
        if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "really_input",
            Error: new Error()
          };
        }
        unsafe_really_input(ic, s, ofs, len);
      }
      function really_input_string(ic, len) {
        var s = Caml_bytes.caml_create_bytes(len);
        really_input(ic, s, 0, len);
        return Caml_bytes.bytes_to_string(s);
      }
      function input_line(chan) {
        var build_result = function(buf, _pos, _param) {
          while (true) {
            var param = _param;
            var pos = _pos;
            if (!param) {
              return buf;
            }
            var hd = param.hd;
            var len = hd.length;
            Caml_bytes.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
            _param = param.tl;
            _pos = pos - len | 0;
            continue;
          }
          ;
        };
        var scan = function(_accu, _len) {
          while (true) {
            var len = _len;
            var accu = _accu;
            var n = Caml_external_polyfill.resolve("caml_ml_input_scan_line")(chan);
            if (n === 0) {
              if (accu) {
                return build_result(Caml_bytes.caml_create_bytes(len), len, accu);
              }
              throw {
                RE_EXN_ID: End_of_file,
                Error: new Error()
              };
            }
            if (n > 0) {
              var res = Caml_bytes.caml_create_bytes(n - 1 | 0);
              Caml_external_polyfill.resolve("caml_ml_input")(chan, res, 0, n - 1 | 0);
              Caml_external_polyfill.resolve("caml_ml_input_char")(chan);
              if (!accu) {
                return res;
              }
              var len$1 = (len + n | 0) - 1 | 0;
              return build_result(Caml_bytes.caml_create_bytes(len$1), len$1, {
                hd: res,
                tl: accu
              });
            }
            var beg = Caml_bytes.caml_create_bytes(-n | 0);
            Caml_external_polyfill.resolve("caml_ml_input")(chan, beg, 0, -n | 0);
            _len = len - n | 0;
            _accu = {
              hd: beg,
              tl: accu
            };
            continue;
          }
          ;
        };
        return Caml_bytes.bytes_to_string(scan(
          /* [] */
          0,
          0
        ));
      }
      function close_in_noerr(ic) {
        try {
          return Caml_external_polyfill.resolve("caml_ml_close_channel")(ic);
        } catch (exn) {
          return;
        }
      }
      function print_char(c) {
        Caml_io.caml_ml_output_char(stdout, c);
      }
      function print_string(s) {
        output_string(stdout, s);
      }
      function print_bytes(s) {
        output_bytes(stdout, s);
      }
      function print_int(i) {
        output_string(stdout, String(i));
      }
      function print_float(f) {
        output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
      }
      function print_newline(param) {
        Caml_io.caml_ml_output_char(
          stdout,
          /* '\n' */
          10
        );
        Caml_io.caml_ml_flush(stdout);
      }
      function prerr_char(c) {
        Caml_io.caml_ml_output_char(stderr, c);
      }
      function prerr_string(s) {
        output_string(stderr, s);
      }
      function prerr_bytes(s) {
        output_bytes(stderr, s);
      }
      function prerr_int(i) {
        output_string(stderr, String(i));
      }
      function prerr_float(f) {
        output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
      }
      function prerr_newline(param) {
        Caml_io.caml_ml_output_char(
          stderr,
          /* '\n' */
          10
        );
        Caml_io.caml_ml_flush(stderr);
      }
      function read_line(param) {
        Caml_io.caml_ml_flush(stdout);
        return input_line(stdin);
      }
      function read_int(param) {
        return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
      }
      function read_int_opt(param) {
        return int_of_string_opt((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
      }
      function read_float(param) {
        return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
      }
      function read_float_opt(param) {
        return float_of_string_opt((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
      }
      function string_of_format(param) {
        return param._1;
      }
      function $caret$caret(param, param$1) {
        return (
          /* Format */
          {
            _0: CamlinternalFormatBasics.concat_fmt(param._0, param$1._0),
            _1: param._1 + ("%," + param$1._1)
          }
        );
      }
      var exit_function = {
        contents: flush_all
      };
      function at_exit(f) {
        var f_yet_to_run = {
          contents: true
        };
        var old_exit = exit_function.contents;
        var new_exit = function(param) {
          if (!f_yet_to_run.contents) {
            f_yet_to_run.contents = false;
            Curry._1(f, void 0);
          }
          Curry._1(old_exit, void 0);
        };
        exit_function.contents = new_exit;
      }
      var do_domain_local_at_exit = {
        contents: function(param) {
        }
      };
      function do_at_exit(param) {
        Curry._1(do_domain_local_at_exit.contents, void 0);
        Curry._1(exit_function.contents, void 0);
      }
      function exit(retcode) {
        do_at_exit(void 0);
        return Caml_sys.caml_sys_exit(retcode);
      }
      var Match_failure = "Match_failure";
      var Assert_failure = "Assert_failure";
      var Invalid_argument = "Invalid_argument";
      var Not_found = "Not_found";
      var Out_of_memory = "Out_of_memory";
      var Stack_overflow = "Stack_overflow";
      var Division_by_zero = "Division_by_zero";
      var Sys_blocked_io = "Sys_blocked_io";
      var Undefined_recursive_module = "Undefined_recursive_module";
      var max_int = 2147483647;
      var infinity = Infinity;
      var neg_infinity = -Infinity;
      var max_float = 17976931348623157e292;
      var min_float = 22250738585072014e-324;
      var epsilon_float = 2220446049250313e-31;
      var flush = Caml_io.caml_ml_flush;
      var output_char = Caml_io.caml_ml_output_char;
      var output_byte = Caml_io.caml_ml_output_char;
      function output_binary_int(prim0, prim1) {
        return Caml_external_polyfill.resolve("caml_ml_output_int")(prim0, prim1);
      }
      function seek_out(prim0, prim1) {
        return Caml_external_polyfill.resolve("caml_ml_seek_out")(prim0, prim1);
      }
      function pos_out(prim) {
        return Caml_external_polyfill.resolve("caml_ml_pos_out")(prim);
      }
      function out_channel_length(prim) {
        return Caml_external_polyfill.resolve("caml_ml_channel_size")(prim);
      }
      function set_binary_mode_out(prim0, prim1) {
        return Caml_external_polyfill.resolve("caml_ml_set_binary_mode")(prim0, prim1);
      }
      function input_char(prim) {
        return Caml_external_polyfill.resolve("caml_ml_input_char")(prim);
      }
      function input_byte(prim) {
        return Caml_external_polyfill.resolve("caml_ml_input_char")(prim);
      }
      function input_binary_int(prim) {
        return Caml_external_polyfill.resolve("caml_ml_input_int")(prim);
      }
      function input_value(prim) {
        return Caml_external_polyfill.resolve("caml_input_value")(prim);
      }
      function seek_in(prim0, prim1) {
        return Caml_external_polyfill.resolve("caml_ml_seek_in")(prim0, prim1);
      }
      function pos_in(prim) {
        return Caml_external_polyfill.resolve("caml_ml_pos_in")(prim);
      }
      function in_channel_length(prim) {
        return Caml_external_polyfill.resolve("caml_ml_channel_size")(prim);
      }
      function close_in(prim) {
        return Caml_external_polyfill.resolve("caml_ml_close_channel")(prim);
      }
      function set_binary_mode_in(prim0, prim1) {
        return Caml_external_polyfill.resolve("caml_ml_set_binary_mode")(prim0, prim1);
      }
      function LargeFile_seek_out(prim0, prim1) {
        return Caml_external_polyfill.resolve("caml_ml_seek_out_64")(prim0, prim1);
      }
      function LargeFile_pos_out(prim) {
        return Caml_external_polyfill.resolve("caml_ml_pos_out_64")(prim);
      }
      function LargeFile_out_channel_length(prim) {
        return Caml_external_polyfill.resolve("caml_ml_channel_size_64")(prim);
      }
      function LargeFile_seek_in(prim0, prim1) {
        return Caml_external_polyfill.resolve("caml_ml_seek_in_64")(prim0, prim1);
      }
      function LargeFile_pos_in(prim) {
        return Caml_external_polyfill.resolve("caml_ml_pos_in_64")(prim);
      }
      function LargeFile_in_channel_length(prim) {
        return Caml_external_polyfill.resolve("caml_ml_channel_size_64")(prim);
      }
      var LargeFile = {
        seek_out: LargeFile_seek_out,
        pos_out: LargeFile_pos_out,
        out_channel_length: LargeFile_out_channel_length,
        seek_in: LargeFile_seek_in,
        pos_in: LargeFile_pos_in,
        in_channel_length: LargeFile_in_channel_length
      };
      exports.invalid_arg = invalid_arg;
      exports.failwith = failwith;
      exports.Exit = Exit;
      exports.Match_failure = Match_failure;
      exports.Assert_failure = Assert_failure;
      exports.Invalid_argument = Invalid_argument;
      exports.Failure = Failure;
      exports.Not_found = Not_found;
      exports.Out_of_memory = Out_of_memory;
      exports.Stack_overflow = Stack_overflow;
      exports.Sys_error = Sys_error;
      exports.End_of_file = End_of_file;
      exports.Division_by_zero = Division_by_zero;
      exports.Sys_blocked_io = Sys_blocked_io;
      exports.Undefined_recursive_module = Undefined_recursive_module;
      exports.abs = abs;
      exports.max_int = max_int;
      exports.min_int = min_int;
      exports.lnot = lnot;
      exports.infinity = infinity;
      exports.neg_infinity = neg_infinity;
      exports.max_float = max_float;
      exports.min_float = min_float;
      exports.epsilon_float = epsilon_float;
      exports.classify_float = classify_float;
      exports.char_of_int = char_of_int;
      exports.string_of_bool = string_of_bool;
      exports.bool_of_string_opt = bool_of_string_opt;
      exports.bool_of_string = bool_of_string;
      exports.int_of_string_opt = int_of_string_opt;
      exports.string_of_float = string_of_float;
      exports.float_of_string_opt = float_of_string_opt;
      exports.$at = $at;
      exports.stdin = stdin;
      exports.stdout = stdout;
      exports.stderr = stderr;
      exports.print_char = print_char;
      exports.print_string = print_string;
      exports.print_bytes = print_bytes;
      exports.print_int = print_int;
      exports.print_float = print_float;
      exports.print_newline = print_newline;
      exports.prerr_char = prerr_char;
      exports.prerr_string = prerr_string;
      exports.prerr_bytes = prerr_bytes;
      exports.prerr_int = prerr_int;
      exports.prerr_float = prerr_float;
      exports.prerr_newline = prerr_newline;
      exports.read_line = read_line;
      exports.read_int_opt = read_int_opt;
      exports.read_int = read_int;
      exports.read_float_opt = read_float_opt;
      exports.read_float = read_float;
      exports.open_out = open_out;
      exports.open_out_bin = open_out_bin;
      exports.open_out_gen = open_out_gen;
      exports.flush = flush;
      exports.flush_all = flush_all;
      exports.output_char = output_char;
      exports.output_string = output_string;
      exports.output_bytes = output_bytes;
      exports.output = output;
      exports.output_substring = output_substring;
      exports.output_byte = output_byte;
      exports.output_binary_int = output_binary_int;
      exports.output_value = output_value;
      exports.seek_out = seek_out;
      exports.pos_out = pos_out;
      exports.out_channel_length = out_channel_length;
      exports.close_out = close_out;
      exports.close_out_noerr = close_out_noerr;
      exports.set_binary_mode_out = set_binary_mode_out;
      exports.open_in = open_in;
      exports.open_in_bin = open_in_bin;
      exports.open_in_gen = open_in_gen;
      exports.input_char = input_char;
      exports.input_line = input_line;
      exports.input = input;
      exports.really_input = really_input;
      exports.really_input_string = really_input_string;
      exports.input_byte = input_byte;
      exports.input_binary_int = input_binary_int;
      exports.input_value = input_value;
      exports.seek_in = seek_in;
      exports.pos_in = pos_in;
      exports.in_channel_length = in_channel_length;
      exports.close_in = close_in;
      exports.close_in_noerr = close_in_noerr;
      exports.set_binary_mode_in = set_binary_mode_in;
      exports.LargeFile = LargeFile;
      exports.string_of_format = string_of_format;
      exports.$caret$caret = $caret$caret;
      exports.exit = exit;
      exports.at_exit = at_exit;
      exports.valid_float_lexem = valid_float_lexem;
      exports.unsafe_really_input = unsafe_really_input;
      exports.do_at_exit = do_at_exit;
      exports.do_domain_local_at_exit = do_domain_local_at_exit;
    }
  });

  // _build/default/dist/browser/node.js
  var require_node = __commonJS({
    "_build/default/dist/browser/node.js"(exports) {
      "use strict";
      var Stdlib = require_stdlib();
      function to_int(param) {
        return param + 1 | 0;
      }
      function of_int(t) {
        if (t > 12 || t < 1) {
          return Stdlib.invalid_arg("Unknown nodeType: " + t.toString());
        } else {
          return t - 1 | 0;
        }
      }
      var Type = {
        to_int,
        of_int
      };
      function Make(T) {
        var node_type2 = function(node) {
          return of_int(node.nodeType);
        };
        var get_root_node2 = function(composedOpt, node) {
          var composed = composedOpt !== void 0 ? composedOpt : false;
          return node.getRootNode({
            composed
          });
        };
        return {
          node_type: node_type2,
          get_root_node: get_root_node2
        };
      }
      function node_type(node) {
        return of_int(node.nodeType);
      }
      function get_root_node(composedOpt, node) {
        var composed = composedOpt !== void 0 ? composedOpt : false;
        return node.getRootNode({
          composed
        });
      }
      exports.Type = Type;
      exports.Make = Make;
      exports.node_type = node_type;
      exports.get_root_node = get_root_node;
    }
  });

  // _build/default/dist/browser/non_element_parent_node_mixin.js
  var require_non_element_parent_node_mixin = __commonJS({
    "_build/default/dist/browser/non_element_parent_node_mixin.js"(exports) {
      "use strict";
      function Make(T) {
        return {};
      }
      exports.Make = Make;
    }
  });

  // _build/default/dist/browser/parent_node_mixin.js
  var require_parent_node_mixin = __commonJS({
    "_build/default/dist/browser/parent_node_mixin.js"(exports) {
      "use strict";
      function Make(T) {
        return {};
      }
      exports.Make = Make;
    }
  });

  // _build/default/dist/browser/xpath_result.js
  var require_xpath_result = __commonJS({
    "_build/default/dist/browser/xpath_result.js"(exports) {
      "use strict";
      var Stdlib = require_stdlib();
      function to_int(param) {
        return param;
      }
      function of_int(e) {
        if (e > 9 || e < 0) {
          return Stdlib.invalid_arg("Unknown XPathResult type: " + e.toString());
        } else {
          return e;
        }
      }
      var Type = {
        to_int,
        of_int
      };
      exports.Type = Type;
    }
  });

  // _build/default/dist/node_modules/melange/camlinternalLazy.js
  var require_camlinternalLazy = __commonJS({
    "_build/default/dist/node_modules/melange/camlinternalLazy.js"(exports) {
      "use strict";
      var Caml_exceptions = require_caml_exceptions();
      var Undefined = /* @__PURE__ */ Caml_exceptions.create("CamlinternalLazy.Undefined");
      function is_val(l) {
        return l.LAZY_DONE;
      }
      function forward_with_closure(blk, closure) {
        var result = closure();
        blk.VAL = result;
        blk.LAZY_DONE = true;
        return result;
      }
      function raise_undefined() {
        throw {
          RE_EXN_ID: Undefined,
          Error: new Error()
        };
      }
      function force_lazy_block(blk) {
        var closure = blk.VAL;
        blk.VAL = raise_undefined;
        try {
          return forward_with_closure(blk, closure);
        } catch (e) {
          blk.VAL = function() {
            throw e;
          };
          throw e;
        }
      }
      function force_val_lazy_block(blk) {
        var closure = blk.VAL;
        blk.VAL = raise_undefined;
        return forward_with_closure(blk, closure);
      }
      function force(lzv) {
        if (lzv.LAZY_DONE) {
          return lzv.VAL;
        } else {
          return force_lazy_block(lzv);
        }
      }
      function force_val(lzv) {
        if (lzv.LAZY_DONE) {
          return lzv.VAL;
        } else {
          return force_val_lazy_block(lzv);
        }
      }
      exports.Undefined = Undefined;
      exports.force_lazy_block = force_lazy_block;
      exports.force_val_lazy_block = force_val_lazy_block;
      exports.force = force;
      exports.force_val = force_val;
      exports.is_val = is_val;
    }
  });

  // _build/default/dist/node_modules/melange/camlinternalAtomic.js
  var require_camlinternalAtomic = __commonJS({
    "_build/default/dist/node_modules/melange/camlinternalAtomic.js"(exports) {
      "use strict";
      function make(v) {
        return {
          v
        };
      }
      function get(r) {
        return r.v;
      }
      function set(r, v) {
        r.v = v;
      }
      function exchange(r, v) {
        var cur = r.v;
        r.v = v;
        return cur;
      }
      function compare_and_set(r, seen, v) {
        var cur = r.v;
        if (cur === seen) {
          r.v = v;
          return true;
        } else {
          return false;
        }
      }
      function fetch_and_add(r, n) {
        var cur = r.v;
        r.v = cur + n | 0;
        return cur;
      }
      function incr(r) {
        fetch_and_add(r, 1);
      }
      function decr(r) {
        fetch_and_add(r, -1);
      }
      exports.make = make;
      exports.get = get;
      exports.set = set;
      exports.exchange = exchange;
      exports.compare_and_set = compare_and_set;
      exports.fetch_and_add = fetch_and_add;
      exports.incr = incr;
      exports.decr = decr;
    }
  });

  // _build/default/dist/node_modules/melange/atomic.js
  var require_atomic = __commonJS({
    "_build/default/dist/node_modules/melange/atomic.js"(exports) {
      "use strict";
      var CamlinternalAtomic = require_camlinternalAtomic();
      var make = CamlinternalAtomic.make;
      var get = CamlinternalAtomic.get;
      var set = CamlinternalAtomic.set;
      var exchange = CamlinternalAtomic.exchange;
      var compare_and_set = CamlinternalAtomic.compare_and_set;
      var fetch_and_add = CamlinternalAtomic.fetch_and_add;
      var incr = CamlinternalAtomic.incr;
      var decr = CamlinternalAtomic.decr;
      exports.make = make;
      exports.get = get;
      exports.set = set;
      exports.exchange = exchange;
      exports.compare_and_set = compare_and_set;
      exports.fetch_and_add = fetch_and_add;
      exports.incr = incr;
      exports.decr = decr;
    }
  });

  // _build/default/dist/node_modules/melange/seq.js
  var require_seq = __commonJS({
    "_build/default/dist/node_modules/melange/seq.js"(exports) {
      "use strict";
      var Caml_exceptions = require_caml_exceptions();
      var Caml_option = require_caml_option();
      var CamlinternalLazy = require_camlinternalLazy();
      var Curry = require_curry();
      var Stdlib__Atomic = require_atomic();
      function empty(param) {
        return (
          /* Nil */
          0
        );
      }
      function $$return(x, param) {
        return (
          /* Cons */
          {
            _0: x,
            _1: empty
          }
        );
      }
      function cons(x, next, param) {
        return (
          /* Cons */
          {
            _0: x,
            _1: next
          }
        );
      }
      function append(seq1, seq2, param) {
        var match = Curry._1(seq1, void 0);
        if (!match) {
          return Curry._1(seq2, void 0);
        }
        var next = match._1;
        return (
          /* Cons */
          {
            _0: match._0,
            _1: function(param2) {
              return append(next, seq2, param2);
            }
          }
        );
      }
      function map(f, seq, param) {
        var match = Curry._1(seq, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var next = match._1;
        return (
          /* Cons */
          {
            _0: Curry._1(f, match._0),
            _1: function(param2) {
              return map(f, next, param2);
            }
          }
        );
      }
      function filter_map(f, _seq, _param) {
        while (true) {
          var seq = _seq;
          var match = Curry._1(seq, void 0);
          if (!match) {
            return (
              /* Nil */
              0
            );
          }
          var next = match._1;
          var y = Curry._1(f, match._0);
          if (y !== void 0) {
            return (
              /* Cons */
              {
                _0: Caml_option.valFromOption(y),
                _1: /* @__PURE__ */ function(next2) {
                  return function(param) {
                    return filter_map(f, next2, param);
                  };
                }(next)
              }
            );
          }
          _param = void 0;
          _seq = next;
          continue;
        }
        ;
      }
      function filter(f, _seq, _param) {
        while (true) {
          var seq = _seq;
          var match = Curry._1(seq, void 0);
          if (!match) {
            return (
              /* Nil */
              0
            );
          }
          var next = match._1;
          var x = match._0;
          if (Curry._1(f, x)) {
            return (
              /* Cons */
              {
                _0: x,
                _1: /* @__PURE__ */ function(next2) {
                  return function(param) {
                    return filter(f, next2, param);
                  };
                }(next)
              }
            );
          }
          _param = void 0;
          _seq = next;
          continue;
        }
        ;
      }
      function concat(seq, param) {
        var match = Curry._1(seq, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var next = match._1;
        return append(match._0, function(param2) {
          return concat(next, param2);
        }, void 0);
      }
      function flat_map(f, seq, param) {
        var match = Curry._1(seq, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var next = match._1;
        return append(Curry._1(f, match._0), function(param2) {
          return flat_map(f, next, param2);
        }, void 0);
      }
      function fold_left(f, _acc, _seq) {
        while (true) {
          var seq = _seq;
          var acc = _acc;
          var match = Curry._1(seq, void 0);
          if (!match) {
            return acc;
          }
          var acc$1 = Curry._2(f, acc, match._0);
          _seq = match._1;
          _acc = acc$1;
          continue;
        }
        ;
      }
      function iter(f, _seq) {
        while (true) {
          var seq = _seq;
          var match = Curry._1(seq, void 0);
          if (!match) {
            return;
          }
          Curry._1(f, match._0);
          _seq = match._1;
          continue;
        }
        ;
      }
      function unfold(f, u, param) {
        var match = Curry._1(f, u);
        if (match === void 0) {
          return (
            /* Nil */
            0
          );
        }
        var u$p = match[1];
        return (
          /* Cons */
          {
            _0: match[0],
            _1: function(param2) {
              return unfold(f, u$p, param2);
            }
          }
        );
      }
      function is_empty(xs) {
        var match = Curry._1(xs, void 0);
        if (match) {
          return false;
        } else {
          return true;
        }
      }
      function uncons(xs) {
        var match = Curry._1(xs, void 0);
        if (match) {
          return [
            match._0,
            match._1
          ];
        }
      }
      function length(xs) {
        var _accu = 0;
        var _xs = xs;
        while (true) {
          var xs$1 = _xs;
          var accu = _accu;
          var match = Curry._1(xs$1, void 0);
          if (!match) {
            return accu;
          }
          _xs = match._1;
          _accu = accu + 1 | 0;
          continue;
        }
        ;
      }
      function iteri(f, xs) {
        var _i = 0;
        var _xs = xs;
        while (true) {
          var xs$1 = _xs;
          var i = _i;
          var match = Curry._1(xs$1, void 0);
          if (!match) {
            return;
          }
          Curry._2(f, i, match._0);
          _xs = match._1;
          _i = i + 1 | 0;
          continue;
        }
        ;
      }
      function fold_lefti(f, accu, xs) {
        var _accu = accu;
        var _i = 0;
        var _xs = xs;
        while (true) {
          var xs$1 = _xs;
          var i = _i;
          var accu$1 = _accu;
          var match = Curry._1(xs$1, void 0);
          if (!match) {
            return accu$1;
          }
          var accu$2 = Curry._3(f, accu$1, i, match._0);
          _xs = match._1;
          _i = i + 1 | 0;
          _accu = accu$2;
          continue;
        }
        ;
      }
      function for_all(p, _xs) {
        while (true) {
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return true;
          }
          if (!Curry._1(p, match._0)) {
            return false;
          }
          _xs = match._1;
          continue;
        }
        ;
      }
      function exists(p, _xs) {
        while (true) {
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return false;
          }
          if (Curry._1(p, match._0)) {
            return true;
          }
          _xs = match._1;
          continue;
        }
        ;
      }
      function find(p, _xs) {
        while (true) {
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return;
          }
          var x = match._0;
          if (Curry._1(p, x)) {
            return Caml_option.some(x);
          }
          _xs = match._1;
          continue;
        }
        ;
      }
      function find_index(p, xs) {
        var _i = 0;
        var _xs = xs;
        while (true) {
          var xs$1 = _xs;
          var i = _i;
          var match = Curry._1(xs$1, void 0);
          if (!match) {
            return;
          }
          if (Curry._1(p, match._0)) {
            return i;
          }
          _xs = match._1;
          _i = i + 1 | 0;
          continue;
        }
        ;
      }
      function find_map(f, _xs) {
        while (true) {
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return;
          }
          var result = Curry._1(f, match._0);
          if (result !== void 0) {
            return result;
          }
          _xs = match._1;
          continue;
        }
        ;
      }
      function find_mapi(f, xs) {
        var _i = 0;
        var _xs = xs;
        while (true) {
          var xs$1 = _xs;
          var i = _i;
          var match = Curry._1(xs$1, void 0);
          if (!match) {
            return;
          }
          var result = Curry._2(f, i, match._0);
          if (result !== void 0) {
            return result;
          }
          _xs = match._1;
          _i = i + 1 | 0;
          continue;
        }
        ;
      }
      function iter2(f, _xs, _ys) {
        while (true) {
          var ys = _ys;
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return;
          }
          var match$1 = Curry._1(ys, void 0);
          if (!match$1) {
            return;
          }
          Curry._2(f, match._0, match$1._0);
          _ys = match$1._1;
          _xs = match._1;
          continue;
        }
        ;
      }
      function fold_left2(f, _accu, _xs, _ys) {
        while (true) {
          var ys = _ys;
          var xs = _xs;
          var accu = _accu;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return accu;
          }
          var match$1 = Curry._1(ys, void 0);
          if (!match$1) {
            return accu;
          }
          var accu$1 = Curry._3(f, accu, match._0, match$1._0);
          _ys = match$1._1;
          _xs = match._1;
          _accu = accu$1;
          continue;
        }
        ;
      }
      function for_all2(f, _xs, _ys) {
        while (true) {
          var ys = _ys;
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return true;
          }
          var match$1 = Curry._1(ys, void 0);
          if (!match$1) {
            return true;
          }
          if (!Curry._2(f, match._0, match$1._0)) {
            return false;
          }
          _ys = match$1._1;
          _xs = match._1;
          continue;
        }
        ;
      }
      function exists2(f, _xs, _ys) {
        while (true) {
          var ys = _ys;
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return false;
          }
          var match$1 = Curry._1(ys, void 0);
          if (!match$1) {
            return false;
          }
          if (Curry._2(f, match._0, match$1._0)) {
            return true;
          }
          _ys = match$1._1;
          _xs = match._1;
          continue;
        }
        ;
      }
      function equal(eq, _xs, _ys) {
        while (true) {
          var ys = _ys;
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          var match$1 = Curry._1(ys, void 0);
          if (!match) {
            if (match$1) {
              return false;
            } else {
              return true;
            }
          }
          if (!match$1) {
            return false;
          }
          if (!Curry._2(eq, match._0, match$1._0)) {
            return false;
          }
          _ys = match$1._1;
          _xs = match._1;
          continue;
        }
        ;
      }
      function compare(cmp, _xs, _ys) {
        while (true) {
          var ys = _ys;
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          var match$1 = Curry._1(ys, void 0);
          if (!match) {
            if (match$1) {
              return -1;
            } else {
              return 0;
            }
          }
          if (!match$1) {
            return 1;
          }
          var c = Curry._2(cmp, match._0, match$1._0);
          if (c !== 0) {
            return c;
          }
          _ys = match$1._1;
          _xs = match._1;
          continue;
        }
        ;
      }
      function init_aux(f, i, j, param) {
        if (i >= j) {
          return (
            /* Nil */
            0
          );
        }
        var partial_arg = i + 1 | 0;
        return (
          /* Cons */
          {
            _0: Curry._1(f, i),
            _1: function(param2) {
              return init_aux(f, partial_arg, j, param2);
            }
          }
        );
      }
      function init(n, f) {
        if (n < 0) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Seq.init",
            Error: new Error()
          };
        }
        return function(param) {
          return init_aux(f, 0, n, param);
        };
      }
      function repeat(x, param) {
        return (
          /* Cons */
          {
            _0: x,
            _1: function(param2) {
              return repeat(x, param2);
            }
          }
        );
      }
      function forever(f, param) {
        return (
          /* Cons */
          {
            _0: Curry._1(f, void 0),
            _1: function(param2) {
              return forever(f, param2);
            }
          }
        );
      }
      function cycle_nonempty(xs, param) {
        return append(xs, function(param2) {
          return cycle_nonempty(xs, param2);
        }, void 0);
      }
      function cycle(xs, param) {
        var match = Curry._1(xs, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xs$p = match._1;
        return (
          /* Cons */
          {
            _0: match._0,
            _1: function(param2) {
              return append(xs$p, function(param3) {
                return cycle_nonempty(xs, param3);
              }, param2);
            }
          }
        );
      }
      function iterate1(f, x, param) {
        var y = Curry._1(f, x);
        return (
          /* Cons */
          {
            _0: y,
            _1: function(param2) {
              return iterate1(f, y, param2);
            }
          }
        );
      }
      function iterate(f, x) {
        return function(param) {
          return (
            /* Cons */
            {
              _0: x,
              _1: function(param2) {
                return iterate1(f, x, param2);
              }
            }
          );
        };
      }
      function mapi_aux(f, i, xs, param) {
        var match = Curry._1(xs, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xs$1 = match._1;
        var partial_arg = i + 1 | 0;
        return (
          /* Cons */
          {
            _0: Curry._2(f, i, match._0),
            _1: function(param2) {
              return mapi_aux(f, partial_arg, xs$1, param2);
            }
          }
        );
      }
      function mapi(f, xs) {
        return function(param) {
          return mapi_aux(f, 0, xs, param);
        };
      }
      function tail_scan(f, s, xs, param) {
        var match = Curry._1(xs, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xs$1 = match._1;
        var s$1 = Curry._2(f, s, match._0);
        return (
          /* Cons */
          {
            _0: s$1,
            _1: function(param2) {
              return tail_scan(f, s$1, xs$1, param2);
            }
          }
        );
      }
      function scan(f, s, xs) {
        return function(param) {
          return (
            /* Cons */
            {
              _0: s,
              _1: function(param2) {
                return tail_scan(f, s, xs, param2);
              }
            }
          );
        };
      }
      function take_aux(n, xs) {
        if (n === 0) {
          return empty;
        } else {
          return function(param) {
            var match = Curry._1(xs, void 0);
            if (match) {
              return (
                /* Cons */
                {
                  _0: match._0,
                  _1: take_aux(n - 1 | 0, match._1)
                }
              );
            } else {
              return (
                /* Nil */
                0
              );
            }
          };
        }
      }
      function take(n, xs) {
        if (n < 0) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Seq.take",
            Error: new Error()
          };
        }
        return take_aux(n, xs);
      }
      function drop(n, xs) {
        if (n < 0) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Seq.drop",
            Error: new Error()
          };
        }
        if (n === 0) {
          return xs;
        } else {
          return function(param) {
            var _n = n;
            var _xs = xs;
            while (true) {
              var xs$1 = _xs;
              var n$1 = _n;
              var match = Curry._1(xs$1, void 0);
              if (!match) {
                return (
                  /* Nil */
                  0
                );
              }
              var xs$2 = match._1;
              var n$2 = n$1 - 1 | 0;
              if (n$2 === 0) {
                return Curry._1(xs$2, void 0);
              }
              _xs = xs$2;
              _n = n$2;
              continue;
            }
            ;
          };
        }
      }
      function take_while(p, xs, param) {
        var match = Curry._1(xs, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xs$1 = match._1;
        var x = match._0;
        if (Curry._1(p, x)) {
          return (
            /* Cons */
            {
              _0: x,
              _1: function(param2) {
                return take_while(p, xs$1, param2);
              }
            }
          );
        } else {
          return (
            /* Nil */
            0
          );
        }
      }
      function drop_while(p, _xs, _param) {
        while (true) {
          var xs = _xs;
          var node = Curry._1(xs, void 0);
          if (!node) {
            return (
              /* Nil */
              0
            );
          }
          if (!Curry._1(p, node._0)) {
            return node;
          }
          _param = void 0;
          _xs = node._1;
          continue;
        }
        ;
      }
      function group(eq, xs, param) {
        var match = Curry._1(xs, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xs$1 = match._1;
        var x = match._0;
        var partial_arg = Curry._1(eq, x);
        var partial_arg$1 = function(param2) {
          return take_while(partial_arg, xs$1, param2);
        };
        var partial_arg$2 = Curry._1(eq, x);
        var partial_arg$3 = function(param2) {
          return drop_while(partial_arg$2, xs$1, param2);
        };
        return (
          /* Cons */
          {
            _0: function(param2) {
              return (
                /* Cons */
                {
                  _0: x,
                  _1: partial_arg$1
                }
              );
            },
            _1: function(param2) {
              return group(eq, partial_arg$3, param2);
            }
          }
        );
      }
      var Forced_twice = /* @__PURE__ */ Caml_exceptions.create("Stdlib.Seq.Forced_twice");
      function failure(param) {
        throw {
          RE_EXN_ID: Forced_twice,
          Error: new Error()
        };
      }
      function memoize(xs) {
        var partial_arg = {
          LAZY_DONE: false,
          VAL: function() {
            var match = Curry._1(xs, void 0);
            if (match) {
              return (
                /* Cons */
                {
                  _0: match._0,
                  _1: memoize(match._1)
                }
              );
            } else {
              return (
                /* Nil */
                0
              );
            }
          }
        };
        return function(param) {
          return CamlinternalLazy.force(partial_arg);
        };
      }
      function once(xs) {
        var f = function(param) {
          var match = Curry._1(xs, void 0);
          if (match) {
            return (
              /* Cons */
              {
                _0: match._0,
                _1: once(match._1)
              }
            );
          } else {
            return (
              /* Nil */
              0
            );
          }
        };
        var action = Stdlib__Atomic.make(f);
        return function(param) {
          var f2 = Stdlib__Atomic.exchange(action, failure);
          return Curry._1(f2, void 0);
        };
      }
      function zip(xs, ys, param) {
        var match = Curry._1(xs, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xs$1 = match._1;
        var match$1 = Curry._1(ys, void 0);
        if (!match$1) {
          return (
            /* Nil */
            0
          );
        }
        var ys$1 = match$1._1;
        return (
          /* Cons */
          {
            _0: [
              match._0,
              match$1._0
            ],
            _1: function(param2) {
              return zip(xs$1, ys$1, param2);
            }
          }
        );
      }
      function map2(f, xs, ys, param) {
        var match = Curry._1(xs, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xs$1 = match._1;
        var match$1 = Curry._1(ys, void 0);
        if (!match$1) {
          return (
            /* Nil */
            0
          );
        }
        var ys$1 = match$1._1;
        return (
          /* Cons */
          {
            _0: Curry._2(f, match._0, match$1._0),
            _1: function(param2) {
              return map2(f, xs$1, ys$1, param2);
            }
          }
        );
      }
      function interleave(xs, ys, param) {
        var match = Curry._1(xs, void 0);
        if (!match) {
          return Curry._1(ys, void 0);
        }
        var xs$1 = match._1;
        return (
          /* Cons */
          {
            _0: match._0,
            _1: function(param2) {
              return interleave(ys, xs$1, param2);
            }
          }
        );
      }
      function sorted_merge1(cmp, x, xs, y, ys) {
        if (Curry._2(cmp, x, y) <= 0) {
          return (
            /* Cons */
            {
              _0: x,
              _1: function(param) {
                var match = Curry._1(xs, void 0);
                if (match) {
                  return sorted_merge1(cmp, match._0, match._1, y, ys);
                } else {
                  return (
                    /* Cons */
                    {
                      _0: y,
                      _1: ys
                    }
                  );
                }
              }
            }
          );
        } else {
          return (
            /* Cons */
            {
              _0: y,
              _1: function(param) {
                var match = Curry._1(ys, void 0);
                if (match) {
                  return sorted_merge1(cmp, x, xs, match._0, match._1);
                } else {
                  return (
                    /* Cons */
                    {
                      _0: x,
                      _1: xs
                    }
                  );
                }
              }
            }
          );
        }
      }
      function sorted_merge(cmp, xs, ys, param) {
        var match = Curry._1(xs, void 0);
        var match$1 = Curry._1(ys, void 0);
        if (match) {
          if (match$1) {
            return sorted_merge1(cmp, match._0, match._1, match$1._0, match$1._1);
          } else {
            return match;
          }
        } else if (match$1) {
          return match$1;
        } else {
          return (
            /* Nil */
            0
          );
        }
      }
      function map_fst(xys, param) {
        var match = Curry._1(xys, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xys$1 = match._1;
        return (
          /* Cons */
          {
            _0: match._0[0],
            _1: function(param2) {
              return map_fst(xys$1, param2);
            }
          }
        );
      }
      function map_snd(xys, param) {
        var match = Curry._1(xys, void 0);
        if (!match) {
          return (
            /* Nil */
            0
          );
        }
        var xys$1 = match._1;
        return (
          /* Cons */
          {
            _0: match._0[1],
            _1: function(param2) {
              return map_snd(xys$1, param2);
            }
          }
        );
      }
      function unzip(xys) {
        return [
          function(param) {
            return map_fst(xys, param);
          },
          function(param) {
            return map_snd(xys, param);
          }
        ];
      }
      function filter_map_find_left_map(f, _xs, _param) {
        while (true) {
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return (
              /* Nil */
              0
            );
          }
          var xs$1 = match._1;
          var y = Curry._1(f, match._0);
          if (y.TAG === /* Left */
          0) {
            return (
              /* Cons */
              {
                _0: y._0,
                _1: /* @__PURE__ */ function(xs$12) {
                  return function(param) {
                    return filter_map_find_left_map(f, xs$12, param);
                  };
                }(xs$1)
              }
            );
          }
          _param = void 0;
          _xs = xs$1;
          continue;
        }
        ;
      }
      function filter_map_find_right_map(f, _xs, _param) {
        while (true) {
          var xs = _xs;
          var match = Curry._1(xs, void 0);
          if (!match) {
            return (
              /* Nil */
              0
            );
          }
          var xs$1 = match._1;
          var z = Curry._1(f, match._0);
          if (z.TAG !== /* Left */
          0) {
            return (
              /* Cons */
              {
                _0: z._0,
                _1: /* @__PURE__ */ function(xs$12) {
                  return function(param) {
                    return filter_map_find_right_map(f, xs$12, param);
                  };
                }(xs$1)
              }
            );
          }
          _param = void 0;
          _xs = xs$1;
          continue;
        }
        ;
      }
      function partition_map(f, xs) {
        return [
          function(param) {
            return filter_map_find_left_map(f, xs, param);
          },
          function(param) {
            return filter_map_find_right_map(f, xs, param);
          }
        ];
      }
      function partition(p, xs) {
        return [
          function(param) {
            return filter(p, xs, param);
          },
          function(param) {
            return filter(function(x) {
              return !Curry._1(p, x);
            }, xs, param);
          }
        ];
      }
      function transpose(xss, param) {
        var match = unzip(function(param2) {
          return filter_map(uncons, xss, param2);
        });
        var tails = match[1];
        var heads = match[0];
        if (!is_empty(heads)) {
          return (
            /* Cons */
            {
              _0: heads,
              _1: function(param2) {
                return transpose(tails, param2);
              }
            }
          );
        }
        if (!is_empty(tails)) {
          throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/stdlib/seq.ml",
              616,
              4
            ],
            Error: new Error()
          };
        }
        return (
          /* Nil */
          0
        );
      }
      function diagonals(remainders, xss, param) {
        var match = Curry._1(xss, void 0);
        if (!match) {
          return transpose(remainders, void 0);
        }
        var xss$1 = match._1;
        var match$1 = Curry._1(match._0, void 0);
        if (match$1) {
          var xs = match$1._1;
          var x = match$1._0;
          var match$2 = unzip(function(param2) {
            return filter_map(uncons, remainders, param2);
          });
          var tails = match$2[1];
          var heads = match$2[0];
          return (
            /* Cons */
            {
              _0: function(param2) {
                return (
                  /* Cons */
                  {
                    _0: x,
                    _1: heads
                  }
                );
              },
              _1: function(param2) {
                return diagonals(function(param3) {
                  return (
                    /* Cons */
                    {
                      _0: xs,
                      _1: tails
                    }
                  );
                }, xss$1, param2);
              }
            }
          );
        }
        var match$3 = unzip(function(param2) {
          return filter_map(uncons, remainders, param2);
        });
        var tails$1 = match$3[1];
        return (
          /* Cons */
          {
            _0: match$3[0],
            _1: function(param2) {
              return diagonals(tails$1, xss$1, param2);
            }
          }
        );
      }
      function map_product(f, xs, ys) {
        return function(param) {
          return concat(function(param2) {
            return diagonals(empty, function(param3) {
              return map(function(x) {
                return function(param4) {
                  return map(function(y) {
                    return Curry._2(f, x, y);
                  }, ys, param4);
                };
              }, xs, param3);
            }, param2);
          }, param);
        };
      }
      function product(xs, ys) {
        return map_product(function(x, y) {
          return [
            x,
            y
          ];
        }, xs, ys);
      }
      function of_dispenser(it) {
        var c = function(param) {
          var x = Curry._1(it, void 0);
          if (x !== void 0) {
            return (
              /* Cons */
              {
                _0: Caml_option.valFromOption(x),
                _1: c
              }
            );
          } else {
            return (
              /* Nil */
              0
            );
          }
        };
        return c;
      }
      function to_dispenser(xs) {
        var s = {
          contents: xs
        };
        return function(param) {
          var match = Curry._1(s.contents, void 0);
          if (match) {
            s.contents = match._1;
            return Caml_option.some(match._0);
          }
        };
      }
      function ints(i, param) {
        var partial_arg = i + 1 | 0;
        return (
          /* Cons */
          {
            _0: i,
            _1: function(param2) {
              return ints(partial_arg, param2);
            }
          }
        );
      }
      var concat_map = flat_map;
      var split = unzip;
      exports.is_empty = is_empty;
      exports.uncons = uncons;
      exports.length = length;
      exports.iter = iter;
      exports.fold_left = fold_left;
      exports.iteri = iteri;
      exports.fold_lefti = fold_lefti;
      exports.for_all = for_all;
      exports.exists = exists;
      exports.find = find;
      exports.find_index = find_index;
      exports.find_map = find_map;
      exports.find_mapi = find_mapi;
      exports.iter2 = iter2;
      exports.fold_left2 = fold_left2;
      exports.for_all2 = for_all2;
      exports.exists2 = exists2;
      exports.equal = equal;
      exports.compare = compare;
      exports.empty = empty;
      exports.$$return = $$return;
      exports.cons = cons;
      exports.init = init;
      exports.unfold = unfold;
      exports.repeat = repeat;
      exports.forever = forever;
      exports.cycle = cycle;
      exports.iterate = iterate;
      exports.map = map;
      exports.mapi = mapi;
      exports.filter = filter;
      exports.filter_map = filter_map;
      exports.scan = scan;
      exports.take = take;
      exports.drop = drop;
      exports.take_while = take_while;
      exports.drop_while = drop_while;
      exports.group = group;
      exports.memoize = memoize;
      exports.Forced_twice = Forced_twice;
      exports.once = once;
      exports.transpose = transpose;
      exports.append = append;
      exports.concat = concat;
      exports.flat_map = flat_map;
      exports.concat_map = concat_map;
      exports.zip = zip;
      exports.map2 = map2;
      exports.interleave = interleave;
      exports.sorted_merge = sorted_merge;
      exports.product = product;
      exports.map_product = map_product;
      exports.unzip = unzip;
      exports.split = split;
      exports.partition_map = partition_map;
      exports.partition = partition;
      exports.of_dispenser = of_dispenser;
      exports.to_dispenser = to_dispenser;
      exports.ints = ints;
    }
  });

  // _build/default/dist/node_modules/melange/option.js
  var require_option = __commonJS({
    "_build/default/dist/node_modules/melange/option.js"(exports) {
      "use strict";
      var Caml_option = require_caml_option();
      var Curry = require_curry();
      var Stdlib__Seq = require_seq();
      function some(v) {
        return Caml_option.some(v);
      }
      function value(o, $$default) {
        if (o !== void 0) {
          return Caml_option.valFromOption(o);
        } else {
          return $$default;
        }
      }
      function get(param) {
        if (param !== void 0) {
          return Caml_option.valFromOption(param);
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "option is None",
          Error: new Error()
        };
      }
      function bind(o, f) {
        if (o !== void 0) {
          return Curry._1(f, Caml_option.valFromOption(o));
        }
      }
      function join(param) {
        if (param !== void 0) {
          return Caml_option.valFromOption(param);
        }
      }
      function map(f, o) {
        if (o !== void 0) {
          return Caml_option.some(Curry._1(f, Caml_option.valFromOption(o)));
        }
      }
      function fold(none2, some2, param) {
        if (param !== void 0) {
          return Curry._1(some2, Caml_option.valFromOption(param));
        } else {
          return none2;
        }
      }
      function iter(f, param) {
        if (param !== void 0) {
          return Curry._1(f, Caml_option.valFromOption(param));
        }
      }
      function is_none(param) {
        return param === void 0;
      }
      function is_some(param) {
        return param !== void 0;
      }
      function equal(eq, o0, o1) {
        if (o0 !== void 0) {
          if (o1 !== void 0) {
            return Curry._2(eq, Caml_option.valFromOption(o0), Caml_option.valFromOption(o1));
          } else {
            return false;
          }
        } else {
          return o1 === void 0;
        }
      }
      function compare(cmp, o0, o1) {
        if (o0 !== void 0) {
          if (o1 !== void 0) {
            return Curry._2(cmp, Caml_option.valFromOption(o0), Caml_option.valFromOption(o1));
          } else {
            return 1;
          }
        } else if (o1 !== void 0) {
          return -1;
        } else {
          return 0;
        }
      }
      function to_result(none2, param) {
        if (param !== void 0) {
          return {
            TAG: (
              /* Ok */
              0
            ),
            _0: Caml_option.valFromOption(param)
          };
        } else {
          return {
            TAG: (
              /* Error */
              1
            ),
            _0: none2
          };
        }
      }
      function to_list(param) {
        if (param !== void 0) {
          return {
            hd: Caml_option.valFromOption(param),
            tl: (
              /* [] */
              0
            )
          };
        } else {
          return (
            /* [] */
            0
          );
        }
      }
      function to_seq(param) {
        if (param === void 0) {
          return Stdlib__Seq.empty;
        }
        var partial_arg = Caml_option.valFromOption(param);
        return function(param2) {
          return Stdlib__Seq.$$return(partial_arg, param2);
        };
      }
      var none;
      exports.none = none;
      exports.some = some;
      exports.value = value;
      exports.get = get;
      exports.bind = bind;
      exports.join = join;
      exports.map = map;
      exports.fold = fold;
      exports.iter = iter;
      exports.is_none = is_none;
      exports.is_some = is_some;
      exports.equal = equal;
      exports.compare = compare;
      exports.to_result = to_result;
      exports.to_list = to_list;
      exports.to_seq = to_seq;
    }
  });

  // _build/default/dist/browser/xpath_evaluator_base_mixin.js
  var require_xpath_evaluator_base_mixin = __commonJS({
    "_build/default/dist/browser/xpath_evaluator_base_mixin.js"(exports) {
      "use strict";
      var Browser__Xpath_result = require_xpath_result();
      var Caml_option = require_caml_option();
      var Stdlib__Option = require_option();
      function Make(T) {
        var evaluate = function(expression, context, resolver, type_, result, t) {
          return t.evaluate(expression, context, resolver !== void 0 ? Caml_option.valFromOption(resolver) : void 0, Caml_option.option_get(Stdlib__Option.map(Browser__Xpath_result.Type.to_int, type_)), result !== void 0 ? Caml_option.valFromOption(result) : void 0);
        };
        return {
          evaluate
        };
      }
      exports.Make = Make;
    }
  });

  // _build/default/dist/browser/document.js
  var require_document = __commonJS({
    "_build/default/dist/browser/document.js"(exports) {
      "use strict";
      var Browser__Document_or_shadow_root_mixin = require_document_or_shadow_root_mixin();
      var Browser__Node = require_node();
      var Browser__Non_element_parent_node_mixin = require_non_element_parent_node_mixin();
      var Browser__Parent_node_mixin = require_parent_node_mixin();
      var Browser__Xpath_evaluator_base_mixin = require_xpath_evaluator_base_mixin();
      var Caml_option = require_caml_option();
      var Stdlib = require_stdlib();
      var Stdlib__Option = require_option();
      var include = Browser__Node.Make({});
      function create_element(is, local_name, $$document) {
        return $$document.createElement(local_name, Caml_option.option_get(Stdlib__Option.map(function(is2) {
          return {
            is: is2
          };
        }, is)));
      }
      Browser__Non_element_parent_node_mixin.Make({});
      Browser__Document_or_shadow_root_mixin.Make({});
      Browser__Parent_node_mixin.Make({});
      var include$1 = Browser__Xpath_evaluator_base_mixin.Make({});
      function to_string(param) {
        switch (param) {
          case /* Loading */
          0:
            return "loading";
          case /* Interactive */
          1:
            return "interactive";
          case /* Complete */
          2:
            return "complete";
        }
      }
      function of_string(e) {
        switch (e) {
          case "complete":
            return (
              /* Complete */
              2
            );
          case "interactive":
            return (
              /* Interactive */
              1
            );
          case "loading":
            return (
              /* Loading */
              0
            );
          default:
            return Stdlib.invalid_arg("Unknown DocumentReadyState: " + e);
        }
      }
      var Ready_state = {
        to_string,
        of_string
      };
      function ready_state($$document) {
        return of_string($$document.readyState);
      }
      var node_type = include.node_type;
      var get_root_node = include.get_root_node;
      var evaluate = include$1.evaluate;
      exports.node_type = node_type;
      exports.get_root_node = get_root_node;
      exports.create_element = create_element;
      exports.evaluate = evaluate;
      exports.Ready_state = Ready_state;
      exports.ready_state = ready_state;
    }
  });

  // _build/default/dist/browser/body_mixin.js
  var require_body_mixin = __commonJS({
    "_build/default/dist/browser/body_mixin.js"(exports) {
      "use strict";
      function Make(T) {
        return {};
      }
      exports.Make = Make;
    }
  });

  // _build/default/dist/browser/request.js
  var require_request = __commonJS({
    "_build/default/dist/browser/request.js"(exports) {
      "use strict";
      var Browser__Body_mixin = require_body_mixin();
      var Caml_option = require_caml_option();
      var Stdlib = require_stdlib();
      var Stdlib__Option = require_option();
      function to_string(param) {
        if (typeof param !== "number") {
          return param._0;
        }
        switch (param) {
          case /* Get */
          0:
            return "GET";
          case /* Head */
          1:
            return "HEAD";
          case /* Post */
          2:
            return "POST";
          case /* Put */
          3:
            return "PUT";
          case /* Delete */
          4:
            return "DELETE";
          case /* Connect */
          5:
            return "CONNECT";
          case /* Options */
          6:
            return "OPTIONS";
          case /* Trace */
          7:
            return "TRACE";
          case /* Patch */
          8:
            return "PATCH";
        }
      }
      function of_string(method$p2) {
        switch (method$p2) {
          case "CONNECT":
            return (
              /* Connect */
              5
            );
          case "DELETE":
            return (
              /* Delete */
              4
            );
          case "GET":
            return (
              /* Get */
              0
            );
          case "HEAD":
            return (
              /* Head */
              1
            );
          case "OPTIONS":
            return (
              /* Options */
              6
            );
          case "PATCH":
            return (
              /* Patch */
              8
            );
          case "POST":
            return (
              /* Post */
              2
            );
          case "PUT":
            return (
              /* Put */
              3
            );
          case "TRACE":
            return (
              /* Trace */
              7
            );
          default:
            return (
              /* Other */
              {
                _0: method$p2
              }
            );
        }
      }
      var Method = {
        to_string,
        of_string
      };
      function to_string$1(param) {
        switch (param) {
          case /* Default */
          0:
            return "";
          case /* Audio */
          1:
            return "audio";
          case /* AudioWorklet */
          2:
            return "audioworklet";
          case /* Document */
          3:
            return "document";
          case /* Embed */
          4:
            return "embed";
          case /* Font */
          5:
            return "font";
          case /* Frame */
          6:
            return "frame";
          case /* IFrame */
          7:
            return "iframe";
          case /* Image */
          8:
            return "image";
          case /* Json */
          9:
            return "json";
          case /* Manifest */
          10:
            return "manifest";
          case /* Object */
          11:
            return "object";
          case /* PaintWorklet */
          12:
            return "paintworklet";
          case /* Report */
          13:
            return "report";
          case /* Script */
          14:
            return "script";
          case /* SharedWorker */
          15:
            return "sharedworker";
          case /* Style */
          16:
            return "style";
          case /* Track */
          17:
            return "track";
          case /* Video */
          18:
            return "video";
          case /* Worker */
          19:
            return "worker";
          case /* Xslt */
          20:
            return "xslt";
        }
      }
      function of_string$1(e) {
        switch (e) {
          case "":
            return (
              /* Default */
              0
            );
          case "audio":
            return (
              /* Audio */
              1
            );
          case "audioworklet":
            return (
              /* AudioWorklet */
              2
            );
          case "document":
            return (
              /* Document */
              3
            );
          case "embed":
            return (
              /* Embed */
              4
            );
          case "font":
            return (
              /* Font */
              5
            );
          case "frame":
            return (
              /* Frame */
              6
            );
          case "iframe":
            return (
              /* IFrame */
              7
            );
          case "image":
            return (
              /* Image */
              8
            );
          case "json":
            return (
              /* Json */
              9
            );
          case "manifest":
            return (
              /* Manifest */
              10
            );
          case "object":
            return (
              /* Object */
              11
            );
          case "paintworklet":
            return (
              /* PaintWorklet */
              12
            );
          case "report":
            return (
              /* Report */
              13
            );
          case "script":
            return (
              /* Script */
              14
            );
          case "sharedworker":
            return (
              /* SharedWorker */
              15
            );
          case "style":
            return (
              /* Style */
              16
            );
          case "track":
            return (
              /* Track */
              17
            );
          case "video":
            return (
              /* Video */
              18
            );
          case "worker":
            return (
              /* Worker */
              19
            );
          case "xslt":
            return (
              /* Xslt */
              20
            );
          default:
            return Stdlib.invalid_arg("Unknown RequestDestination: " + e);
        }
      }
      var Destination = {
        to_string: to_string$1,
        of_string: of_string$1
      };
      function to_string$2(param) {
        switch (param) {
          case /* Default */
          0:
            return "";
          case /* NoReferrer */
          1:
            return "no-referrer";
          case /* NoReferrerWhenDowngrade */
          2:
            return "no-referrer-when-downgrade";
          case /* SameOrigin */
          3:
            return "same-origin";
          case /* Origin */
          4:
            return "origin";
          case /* StrictOrigin */
          5:
            return "strict-origin";
          case /* OriginWhenCrossOrigin */
          6:
            return "origin-when-cross-origin";
          case /* StrictOriginWhenCrossOrigin */
          7:
            return "strict-origin-when-cross-origin";
          case /* UnsafeUrl */
          8:
            return "unsafe-url";
        }
      }
      function of_string$2(e) {
        switch (e) {
          case "":
            return (
              /* Default */
              0
            );
          case "no-referrer":
            return (
              /* NoReferrer */
              1
            );
          case "no-referrer-when-downgrade":
            return (
              /* NoReferrerWhenDowngrade */
              2
            );
          case "origin":
            return (
              /* Origin */
              4
            );
          case "origin-when-cross-origin":
            return (
              /* OriginWhenCrossOrigin */
              6
            );
          case "same-origin":
            return (
              /* SameOrigin */
              3
            );
          case "strict-origin":
            return (
              /* StrictOrigin */
              5
            );
          case "strict-origin-when-cross-origin":
            return (
              /* StrictOriginWhenCrossOrigin */
              7
            );
          case "unsafe-url":
            return (
              /* UnsafeUrl */
              8
            );
          default:
            return Stdlib.invalid_arg("Unknown ReferrerPolicy: " + e);
        }
      }
      var ReferrerPolicy = {
        to_string: to_string$2,
        of_string: of_string$2
      };
      function to_string$3(param) {
        switch (param) {
          case /* Navigate */
          0:
            return "navigate";
          case /* SameOrigin */
          1:
            return "same-origin";
          case /* NoCors */
          2:
            return "no-cors";
          case /* Cors */
          3:
            return "cors";
        }
      }
      function of_string$3(e) {
        switch (e) {
          case "cors":
            return (
              /* Cors */
              3
            );
          case "navigate":
            return (
              /* Navigate */
              0
            );
          case "no-cors":
            return (
              /* NoCors */
              2
            );
          case "same-origin":
            return (
              /* SameOrigin */
              1
            );
          default:
            return Stdlib.invalid_arg("Unknown RequestMode: " + e);
        }
      }
      var Mode = {
        to_string: to_string$3,
        of_string: of_string$3
      };
      function to_string$4(param) {
        switch (param) {
          case /* Omit */
          0:
            return "omit";
          case /* SameOrigin */
          1:
            return "same-origin";
          case /* Include */
          2:
            return "include";
        }
      }
      function of_string$4(e) {
        switch (e) {
          case "include":
            return (
              /* Include */
              2
            );
          case "omit":
            return (
              /* Omit */
              0
            );
          case "same-origin":
            return (
              /* SameOrigin */
              1
            );
          default:
            return Stdlib.invalid_arg("Unknown RequestCredentials: " + e);
        }
      }
      var Credentials = {
        to_string: to_string$4,
        of_string: of_string$4
      };
      function to_string$5(param) {
        switch (param) {
          case /* Default */
          0:
            return "default";
          case /* NoStore */
          1:
            return "no-store";
          case /* Reload */
          2:
            return "reload";
          case /* NoCache */
          3:
            return "no-cache";
          case /* ForceCache */
          4:
            return "force-cache";
          case /* OnlyIfCached */
          5:
            return "only-if-cached";
        }
      }
      function of_string$5(e) {
        switch (e) {
          case "default":
            return (
              /* Default */
              0
            );
          case "force-cache":
            return (
              /* ForceCache */
              4
            );
          case "no-cache":
            return (
              /* NoCache */
              3
            );
          case "no-store":
            return (
              /* NoStore */
              1
            );
          case "only-if-cached":
            return (
              /* OnlyIfCached */
              5
            );
          case "reload":
            return (
              /* Reload */
              2
            );
          default:
            return Stdlib.invalid_arg("Unknown RequestCache: " + e);
        }
      }
      var Cache = {
        to_string: to_string$5,
        of_string: of_string$5
      };
      function to_string$6(param) {
        switch (param) {
          case /* Follow */
          0:
            return "follow";
          case /* Error */
          1:
            return "error";
          case /* Manual */
          2:
            return "manual";
        }
      }
      function of_string$6(e) {
        switch (e) {
          case "error":
            return (
              /* Error */
              1
            );
          case "follow":
            return (
              /* Follow */
              0
            );
          case "manual":
            return (
              /* Manual */
              2
            );
          default:
            return Stdlib.invalid_arg("Unknown RequestRedirect: " + e);
        }
      }
      var Redirect = {
        to_string: to_string$6,
        of_string: of_string$6
      };
      function create(url, method$p2, body, headers, referrer, referrer_policy2, mode2, credentials2, cache2, redirect2, integrity, keepalive, signal, param) {
        var tmp = {};
        if (method$p2 !== void 0) {
          tmp.method = Caml_option.valFromOption(method$p2);
        }
        if (body !== void 0) {
          tmp.body = Caml_option.valFromOption(body);
        }
        if (headers !== void 0) {
          tmp.headers = Caml_option.valFromOption(headers);
        }
        if (referrer !== void 0) {
          tmp.referrer = Caml_option.valFromOption(referrer);
        }
        var tmp$1 = Stdlib__Option.map(to_string$2, referrer_policy2);
        if (tmp$1 !== void 0) {
          tmp.referrerPolicy = Caml_option.valFromOption(tmp$1);
        }
        var tmp$2 = Stdlib__Option.map(to_string$3, mode2);
        if (tmp$2 !== void 0) {
          tmp.mode = Caml_option.valFromOption(tmp$2);
        }
        var tmp$3 = Stdlib__Option.map(to_string$4, credentials2);
        if (tmp$3 !== void 0) {
          tmp.credentials = Caml_option.valFromOption(tmp$3);
        }
        var tmp$4 = Stdlib__Option.map(to_string$5, cache2);
        if (tmp$4 !== void 0) {
          tmp.cache = Caml_option.valFromOption(tmp$4);
        }
        var tmp$5 = Stdlib__Option.map(to_string$6, redirect2);
        if (tmp$5 !== void 0) {
          tmp.redirect = Caml_option.valFromOption(tmp$5);
        }
        if (integrity !== void 0) {
          tmp.integrity = Caml_option.valFromOption(integrity);
        }
        if (keepalive !== void 0) {
          tmp.keepalive = Caml_option.valFromOption(keepalive);
        }
        if (signal !== void 0) {
          tmp.signal = Caml_option.valFromOption(signal);
        }
        return new Request(url, tmp);
      }
      function method$p(req) {
        return of_string(req.method);
      }
      function destination(req) {
        return of_string$1(req.destination);
      }
      function referrer_policy(req) {
        return of_string$2(req.referrerPolicy);
      }
      function mode(req) {
        return of_string$3(req.mode);
      }
      function credentials(req) {
        return of_string$4(req.credentials);
      }
      function cache(req) {
        return of_string$5(req.cache);
      }
      function redirect(req) {
        return of_string$6(req.redirect);
      }
      Browser__Body_mixin.Make({});
      exports.Method = Method;
      exports.Destination = Destination;
      exports.ReferrerPolicy = ReferrerPolicy;
      exports.Mode = Mode;
      exports.Credentials = Credentials;
      exports.Cache = Cache;
      exports.Redirect = Redirect;
      exports.create = create;
      exports.method$p = method$p;
      exports.destination = destination;
      exports.referrer_policy = referrer_policy;
      exports.mode = mode;
      exports.credentials = credentials;
      exports.cache = cache;
      exports.redirect = redirect;
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_obj.js
  var require_caml_obj = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_obj.js"(exports) {
      "use strict";
      var Caml = require_caml();
      var for_in = function(o, foo) {
        for (var x in o) {
          foo(x);
        }
      };
      var caml_obj_dup = function(x) {
        if (Array.isArray(x)) {
          var len = x.length;
          var v = new Array(len);
          for (var i = 0; i < len; ++i) {
            v[i] = x[i];
          }
          if (x.TAG !== void 0) {
            v.TAG = x.TAG;
          }
          return v;
        }
        return Object.assign({}, x);
      };
      var update_dummy = function(x, y) {
        var k;
        if (Array.isArray(y)) {
          for (k = 0; k < y.length; ++k) {
            x[k] = y[k];
          }
          if (y.TAG !== void 0) {
            x.TAG = y.TAG;
          }
        } else {
          for (var k in y) {
            x[k] = y[k];
          }
        }
      };
      function caml_compare(a, b) {
        if (a === b) {
          return 0;
        }
        var a_type = typeof a;
        var b_type = typeof b;
        switch (a_type) {
          case "bigint":
            if (b_type === "bigint") {
              return Caml.caml_float_compare(a, b);
            }
            break;
          case "boolean":
            if (b_type === "boolean") {
              return Caml.caml_int_compare(a, b);
            }
            break;
          case "function":
            if (b_type === "function") {
              throw {
                RE_EXN_ID: "Invalid_argument",
                _1: "compare: functional value",
                Error: new Error()
              };
            }
            break;
          case "number":
            if (b_type === "number") {
              return Caml.caml_float_compare(a, b);
            }
            break;
          case "string":
            if (b_type === "string") {
              return Caml.caml_string_compare(a, b);
            } else {
              return 1;
            }
          case "undefined":
            return -1;
          default:
        }
        switch (b_type) {
          case "string":
            return -1;
          case "undefined":
            return 1;
          default:
            if (a_type === "boolean") {
              return 1;
            }
            if (b_type === "boolean") {
              return -1;
            }
            if (a_type === "function") {
              return 1;
            }
            if (b_type === "function") {
              return -1;
            }
            if (a_type === "number") {
              if (b === null || b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return 1;
              } else {
                return -1;
              }
            }
            if (b_type === "number") {
              if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return -1;
              } else {
                return 1;
              }
            }
            if (a === null) {
              if (b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return 1;
              } else {
                return -1;
              }
            }
            if (b === null) {
              if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return -1;
              } else {
                return 1;
              }
            }
            if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              if (b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return aux_obj_compare(a, b);
              } else {
                return -1;
              }
            }
            var tag_a = a.TAG | 0;
            var tag_b = b.TAG | 0;
            if (tag_a === 248) {
              return Caml.caml_int_compare(a[1], b[1]);
            }
            if (tag_a === 251) {
              throw {
                RE_EXN_ID: "Invalid_argument",
                _1: "equal: abstract value",
                Error: new Error()
              };
            }
            if (tag_a !== tag_b) {
              if (tag_a < tag_b) {
                return -1;
              } else {
                return 1;
              }
            }
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              if (Array.isArray(a)) {
                var _i = 0;
                while (true) {
                  var i = _i;
                  if (i === len_a) {
                    return 0;
                  }
                  var res = caml_compare(a[i], b[i]);
                  if (res !== 0) {
                    return res;
                  }
                  _i = i + 1 | 0;
                  continue;
                }
                ;
              } else if (a instanceof Date && b instanceof Date) {
                return a - b;
              } else {
                return aux_obj_compare(a, b);
              }
            } else if (len_a < len_b) {
              var _i$1 = 0;
              while (true) {
                var i$1 = _i$1;
                if (i$1 === len_a) {
                  return -1;
                }
                var res$1 = caml_compare(a[i$1], b[i$1]);
                if (res$1 !== 0) {
                  return res$1;
                }
                _i$1 = i$1 + 1 | 0;
                continue;
              }
              ;
            } else {
              var _i$2 = 0;
              while (true) {
                var i$2 = _i$2;
                if (i$2 === len_b) {
                  return 1;
                }
                var res$2 = caml_compare(a[i$2], b[i$2]);
                if (res$2 !== 0) {
                  return res$2;
                }
                _i$2 = i$2 + 1 | 0;
                continue;
              }
              ;
            }
        }
      }
      function aux_obj_compare(a, b) {
        var min_key_lhs = {
          contents: void 0
        };
        var min_key_rhs = {
          contents: void 0
        };
        var do_key = function(param, key) {
          var min_key = param[2];
          var b2 = param[1];
          if (!(!Object.prototype.hasOwnProperty.call(b2, key) || caml_compare(param[0][key], b2[key]) > 0)) {
            return;
          }
          var mk = min_key.contents;
          if (mk !== void 0 && key >= mk) {
            return;
          } else {
            min_key.contents = key;
            return;
          }
        };
        var partial_arg = [
          a,
          b,
          min_key_rhs
        ];
        var do_key_a = function(param) {
          return do_key(partial_arg, param);
        };
        var partial_arg$1 = [
          b,
          a,
          min_key_lhs
        ];
        var do_key_b = function(param) {
          return do_key(partial_arg$1, param);
        };
        for_in(a, do_key_a);
        for_in(b, do_key_b);
        var match = min_key_lhs.contents;
        var match$1 = min_key_rhs.contents;
        if (match !== void 0) {
          if (match$1 !== void 0) {
            return Caml.caml_string_compare(match, match$1);
          } else {
            return -1;
          }
        } else if (match$1 !== void 0) {
          return 1;
        } else {
          return 0;
        }
      }
      function caml_equal(a, b) {
        if (a === b) {
          return true;
        }
        var a_type = typeof a;
        if (a_type === "string" || a_type === "number" || a_type === "bigint" || a_type === "boolean" || a_type === "undefined" || a === null) {
          return false;
        }
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "equal: functional value",
            Error: new Error()
          };
        }
        if (b_type === "number" || b_type === "bigint" || b_type === "undefined" || b === null) {
          return false;
        }
        var tag_a = a.TAG | 0;
        var tag_b = b.TAG | 0;
        if (tag_a === 248) {
          return a[1] === b[1];
        }
        if (tag_a === 251) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "equal: abstract value",
            Error: new Error()
          };
        }
        if (tag_a !== tag_b) {
          return false;
        }
        var len_a = a.length | 0;
        var len_b = b.length | 0;
        if (len_a === len_b) {
          if (Array.isArray(a)) {
            var _i = 0;
            while (true) {
              var i = _i;
              if (i === len_a) {
                return true;
              }
              if (!caml_equal(a[i], b[i])) {
                return false;
              }
              _i = i + 1 | 0;
              continue;
            }
            ;
          } else if (a instanceof Date && b instanceof Date) {
            return !(a > b || a < b);
          } else {
            var result = {
              contents: true
            };
            var do_key_a = function(key) {
              if (!Object.prototype.hasOwnProperty.call(b, key)) {
                result.contents = false;
                return;
              }
            };
            var do_key_b = function(key) {
              if (!Object.prototype.hasOwnProperty.call(a, key) || !caml_equal(b[key], a[key])) {
                result.contents = false;
                return;
              }
            };
            for_in(a, do_key_a);
            if (result.contents) {
              for_in(b, do_key_b);
            }
            return result.contents;
          }
        } else {
          return false;
        }
      }
      function caml_equal_null(x, y) {
        if (y !== null) {
          return caml_equal(x, y);
        } else {
          return x === y;
        }
      }
      function caml_equal_undefined(x, y) {
        if (y !== void 0) {
          return caml_equal(x, y);
        } else {
          return x === y;
        }
      }
      function caml_equal_nullable(x, y) {
        if (y == null) {
          return x === y;
        } else {
          return caml_equal(x, y);
        }
      }
      function caml_notequal(a, b) {
        if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
          return a !== b;
        } else {
          return !caml_equal(a, b);
        }
      }
      function caml_greaterequal(a, b) {
        if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
          return a >= b;
        } else {
          return caml_compare(a, b) >= 0;
        }
      }
      function caml_greaterthan(a, b) {
        if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
          return a > b;
        } else {
          return caml_compare(a, b) > 0;
        }
      }
      function caml_lessequal(a, b) {
        if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
          return a <= b;
        } else {
          return caml_compare(a, b) <= 0;
        }
      }
      function caml_lessthan(a, b) {
        if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
          return a < b;
        } else {
          return caml_compare(a, b) < 0;
        }
      }
      function caml_min(x, y) {
        if (caml_compare(x, y) <= 0) {
          return x;
        } else {
          return y;
        }
      }
      function caml_max(x, y) {
        if (caml_compare(x, y) >= 0) {
          return x;
        } else {
          return y;
        }
      }
      exports.caml_obj_dup = caml_obj_dup;
      exports.update_dummy = update_dummy;
      exports.caml_compare = caml_compare;
      exports.caml_equal = caml_equal;
      exports.caml_equal_null = caml_equal_null;
      exports.caml_equal_undefined = caml_equal_undefined;
      exports.caml_equal_nullable = caml_equal_nullable;
      exports.caml_notequal = caml_notequal;
      exports.caml_greaterequal = caml_greaterequal;
      exports.caml_greaterthan = caml_greaterthan;
      exports.caml_lessthan = caml_lessthan;
      exports.caml_lessequal = caml_lessequal;
      exports.caml_min = caml_min;
      exports.caml_max = caml_max;
    }
  });

  // _build/default/dist/irc/formatting.js
  var require_formatting = __commonJS({
    "_build/default/dist/irc/formatting.js"(exports) {
      "use strict";
      var Caml_array = require_caml_array();
      var Caml_format = require_caml_format();
      var Curry = require_curry();
      function color_of_string(other) {
        switch (other) {
          case "0":
          case "00":
            return "White";
          case "01":
          case "1":
            return "Black";
          case "10":
            return "Cyan";
          case "11":
            return "Light_cyan";
          case "12":
            return "Light_blue";
          case "13":
            return "Pink";
          case "14":
            return "Grey";
          case "15":
            return "Light_grey";
          case "02":
          case "2":
            return "Blue";
          case "03":
          case "3":
            return "Green";
          case "04":
          case "4":
            return "Red";
          case "05":
          case "5":
            return "Brown";
          case "06":
          case "6":
            return "Magenta";
          case "07":
          case "7":
            return "Orange";
          case "08":
          case "8":
            return "Yellow";
          case "09":
          case "9":
            return "Light_green";
          case "99":
            return "Default";
          default:
            return {
              NAME: "Extended",
              VAL: Caml_format.caml_int_of_string(other)
            };
        }
      }
      function string_of_color(param) {
        if (typeof param === "string") {
          if (param === "Brown") {
            return "5";
          } else if (param === "Light_blue") {
            return "12";
          } else if (param === "Light_cyan") {
            return "11";
          } else if (param === "Magenta") {
            return "6";
          } else if (param === "Light_grey") {
            return "15";
          } else if (param === "White") {
            return "0";
          } else if (param === "Default") {
            return "99";
          } else if (param === "Orange") {
            return "7";
          } else if (param === "Red") {
            return "4";
          } else if (param === "Yellow") {
            return "8";
          } else if (param === "Light_green") {
            return "9";
          } else if (param === "Blue") {
            return "2";
          } else if (param === "Cyan") {
            return "10";
          } else if (param === "Green") {
            return "3";
          } else if (param === "Grey") {
            return "14";
          } else if (param === "Pink") {
            return "13";
          } else {
            return "1";
          }
        } else {
          return param.VAL.toString();
        }
      }
      function string_of_hex_color(c) {
        return c.toString(16).padStart(6, "0");
      }
      function string_of_color_format(string_of_color2, param) {
        if (typeof param === "string") {
          return "";
        }
        if (param.NAME !== "Fg_bg") {
          return Curry._1(string_of_color2, param.VAL);
        }
        var match = param.VAL;
        return Curry._1(string_of_color2, match[0]) + ("," + Curry._1(string_of_color2, match[1]));
      }
      function string_of_part(param) {
        if (typeof param === "string") {
          if (param === "Italics") {
            return "";
          } else if (param === "Reset") {
            return "";
          } else if (param === "Monospace") {
            return "";
          } else if (param === "Underline") {
            return "";
          } else if (param === "Bold") {
            return "";
          } else if (param === "Strikethrough") {
            return "";
          } else {
            return "";
          }
        }
        var variant = param.NAME;
        if (variant === "Color") {
          return "" + string_of_color_format(string_of_color, param.VAL);
        } else if (variant === "Hex_color") {
          return "" + string_of_color_format(string_of_hex_color, param.VAL);
        } else {
          return param.VAL;
        }
      }
      function parse_color_format(message, i) {
        var rest = message.slice(i);
        var m = /^([0-9]{1,2})(,([0-9]{1,2}))?/.exec(rest);
        if (m === null) {
          return [
            "Reset",
            i
          ];
        }
        var fg = Caml_array.get(m, 1);
        var bg = Caml_array.get(m, 3);
        if (fg == null) {
          return [
            "Reset",
            i
          ];
        }
        if (bg == null) {
          var i$1 = i + fg.length | 0;
          var fg$1 = color_of_string(fg);
          return [
            {
              NAME: "Fg",
              VAL: fg$1
            },
            i$1
          ];
        }
        var i$2 = ((i + fg.length | 0) + 1 | 0) + bg.length | 0;
        var fg$2 = color_of_string(fg);
        var bg$1 = color_of_string(bg);
        return [
          {
            NAME: "Fg_bg",
            VAL: [
              fg$2,
              bg$1
            ]
          },
          i$2
        ];
      }
      function parse_hex_color_format(message, i) {
        var rest = message.slice(i);
        var m = /^([0-9A-Fa-f]{6})(,([0-9A-Fa-f]{6}))?/.exec(rest);
        if (m === null) {
          return [
            "Reset",
            i
          ];
        }
        var fg = Caml_array.get(m, 1);
        var bg = Caml_array.get(m, 3);
        if (fg == null) {
          return [
            "Reset",
            i
          ];
        }
        if (bg == null) {
          var i$1 = i + 6 | 0;
          var fg$1 = Caml_format.caml_int_of_string("0x" + fg);
          return [
            {
              NAME: "Fg",
              VAL: fg$1
            },
            i$1
          ];
        }
        var i$2 = (i + 12 | 0) + 1 | 0;
        var fg$2 = Caml_format.caml_int_of_string("0x" + fg);
        var bg$1 = Caml_format.caml_int_of_string("0x" + bg);
        return [
          {
            NAME: "Fg_bg",
            VAL: [
              fg$2,
              bg$1
            ]
          },
          i$2
        ];
      }
      function parse(message) {
        var out = [];
        var _in_string;
        var _i = 0;
        while (true) {
          var i = _i;
          var in_string = _in_string;
          if (i >= message.length) {
            if (in_string === void 0) {
              return out;
            }
            var str = message.slice(in_string, message.length);
            if (str !== "") {
              out.push({
                NAME: "String",
                VAL: str
              });
            }
            return out;
          }
          var $$char = message.charAt(i);
          var match;
          switch ($$char) {
            case "":
              match = [
                "Bold",
                i
              ];
              break;
            case "":
              var match$1 = parse_color_format(message, i + 1 | 0);
              match = [
                {
                  NAME: "Color",
                  VAL: match$1[0]
                },
                match$1[1] - 1 | 0
              ];
              break;
            case "":
              var match$2 = parse_hex_color_format(message, i + 1 | 0);
              match = [
                {
                  NAME: "Hex_color",
                  VAL: match$2[0]
                },
                match$2[1] - 1 | 0
              ];
              break;
            case "":
              match = [
                "Reset",
                i
              ];
              break;
            case "":
              match = [
                "Monospace",
                i
              ];
              break;
            case "":
              match = [
                "Reverse_color",
                i
              ];
              break;
            case "":
              match = [
                "Italics",
                i
              ];
              break;
            case "":
              match = [
                "Strikethrough",
                i
              ];
              break;
            case "":
              match = [
                "Underline",
                i
              ];
              break;
            default:
              match = [
                void 0,
                i
              ];
          }
          var i$1 = match[1];
          var code = match[0];
          if (code !== void 0) {
            if (in_string !== void 0) {
              var str$1 = message.slice(in_string, i);
              out.push({
                NAME: "String",
                VAL: str$1
              });
              out.push(code);
              _i = i$1 + 1 | 0;
              _in_string = void 0;
              continue;
            }
            out.push(code);
            _i = i$1 + 1 | 0;
            _in_string = void 0;
            continue;
          }
          if (in_string !== void 0) {
            _i = i$1 + 1 | 0;
            continue;
          }
          _i = i$1 + 1 | 0;
          _in_string = i$1;
          continue;
        }
        ;
      }
      function to_string(parts) {
        return parts.map(string_of_part).join("");
      }
      exports.color_of_string = color_of_string;
      exports.string_of_color = string_of_color;
      exports.string_of_hex_color = string_of_hex_color;
      exports.string_of_color_format = string_of_color_format;
      exports.string_of_part = string_of_part;
      exports.parse_color_format = parse_color_format;
      exports.parse_hex_color_format = parse_hex_color_format;
      exports.parse = parse;
      exports.to_string = to_string;
    }
  });

  // _build/default/dist/node_modules/melange/result.js
  var require_result = __commonJS({
    "_build/default/dist/node_modules/melange/result.js"(exports) {
      "use strict";
      var Caml_option = require_caml_option();
      var Curry = require_curry();
      var Stdlib__Seq = require_seq();
      function ok(v) {
        return {
          TAG: (
            /* Ok */
            0
          ),
          _0: v
        };
      }
      function error(e) {
        return {
          TAG: (
            /* Error */
            1
          ),
          _0: e
        };
      }
      function value(r, $$default) {
        if (r.TAG === /* Ok */
        0) {
          return r._0;
        } else {
          return $$default;
        }
      }
      function get_ok(param) {
        if (param.TAG === /* Ok */
        0) {
          return param._0;
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "result is Error _",
          Error: new Error()
        };
      }
      function get_error(param) {
        if (param.TAG !== /* Ok */
        0) {
          return param._0;
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "result is Ok _",
          Error: new Error()
        };
      }
      function bind(r, f) {
        if (r.TAG === /* Ok */
        0) {
          return Curry._1(f, r._0);
        } else {
          return r;
        }
      }
      function join(e) {
        if (e.TAG === /* Ok */
        0) {
          return e._0;
        } else {
          return e;
        }
      }
      function map(f, e) {
        if (e.TAG === /* Ok */
        0) {
          return {
            TAG: (
              /* Ok */
              0
            ),
            _0: Curry._1(f, e._0)
          };
        } else {
          return e;
        }
      }
      function map_error(f, v) {
        if (v.TAG === /* Ok */
        0) {
          return v;
        } else {
          return {
            TAG: (
              /* Error */
              1
            ),
            _0: Curry._1(f, v._0)
          };
        }
      }
      function fold(ok2, error2, param) {
        if (param.TAG === /* Ok */
        0) {
          return Curry._1(ok2, param._0);
        } else {
          return Curry._1(error2, param._0);
        }
      }
      function iter(f, param) {
        if (param.TAG === /* Ok */
        0) {
          return Curry._1(f, param._0);
        }
      }
      function iter_error(f, param) {
        if (param.TAG === /* Ok */
        0) {
          return;
        } else {
          return Curry._1(f, param._0);
        }
      }
      function is_ok(param) {
        if (param.TAG === /* Ok */
        0) {
          return true;
        } else {
          return false;
        }
      }
      function is_error(param) {
        if (param.TAG === /* Ok */
        0) {
          return false;
        } else {
          return true;
        }
      }
      function equal(ok2, error2, r0, r1) {
        if (r0.TAG === /* Ok */
        0) {
          if (r1.TAG === /* Ok */
          0) {
            return Curry._2(ok2, r0._0, r1._0);
          } else {
            return false;
          }
        } else if (r1.TAG === /* Ok */
        0) {
          return false;
        } else {
          return Curry._2(error2, r0._0, r1._0);
        }
      }
      function compare(ok2, error2, r0, r1) {
        if (r0.TAG === /* Ok */
        0) {
          if (r1.TAG === /* Ok */
          0) {
            return Curry._2(ok2, r0._0, r1._0);
          } else {
            return -1;
          }
        } else if (r1.TAG === /* Ok */
        0) {
          return 1;
        } else {
          return Curry._2(error2, r0._0, r1._0);
        }
      }
      function to_option(param) {
        if (param.TAG === /* Ok */
        0) {
          return Caml_option.some(param._0);
        }
      }
      function to_list(param) {
        if (param.TAG === /* Ok */
        0) {
          return {
            hd: param._0,
            tl: (
              /* [] */
              0
            )
          };
        } else {
          return (
            /* [] */
            0
          );
        }
      }
      function to_seq(param) {
        if (param.TAG !== /* Ok */
        0) {
          return Stdlib__Seq.empty;
        }
        var partial_arg = param._0;
        return function(param2) {
          return Stdlib__Seq.$$return(partial_arg, param2);
        };
      }
      exports.ok = ok;
      exports.error = error;
      exports.value = value;
      exports.get_ok = get_ok;
      exports.get_error = get_error;
      exports.bind = bind;
      exports.join = join;
      exports.map = map;
      exports.map_error = map_error;
      exports.fold = fold;
      exports.iter = iter;
      exports.iter_error = iter_error;
      exports.is_ok = is_ok;
      exports.is_error = is_error;
      exports.equal = equal;
      exports.compare = compare;
      exports.to_option = to_option;
      exports.to_list = to_list;
      exports.to_seq = to_seq;
    }
  });

  // _build/default/dist/irc/utils.js
  var require_utils = __commonJS({
    "_build/default/dist/irc/utils.js"(exports) {
      "use strict";
      var Caml_array = require_caml_array();
      var Caml_option = require_caml_option();
      var Stdlib__Option = require_option();
      var Stdlib__Result = require_result();
      function split_off(delimiter, str) {
        var i = str.indexOf(delimiter);
        if (i === -1) {
          return [
            str,
            void 0
          ];
        }
        var left = str.slice(0, i);
        var right = str.slice(i + 1 | 0);
        return [
          left,
          right
        ];
      }
      function split_off_regex(delimiter, str) {
        return Stdlib__Option.bind(Caml_option.null_to_opt(delimiter.exec(str)), function(res) {
          return Stdlib__Option.bind(Caml_option.nullable_to_opt(Caml_array.get(res, 0)), function(match_) {
            var i = res.index;
            var ri = i + match_.length | 0;
            var left = str.slice(0, i);
            var right = str.slice(ri);
            return [
              left,
              right
            ];
          });
        });
      }
      function keep_some(arr) {
        var out = [];
        arr.forEach(function(param) {
          if (param !== void 0) {
            out.push(Caml_option.valFromOption(param));
            return;
          }
        });
        return out;
      }
      var let$plus = Stdlib__Option.bind;
      var let$star = Stdlib__Result.bind;
      exports.let$plus = let$plus;
      exports.let$star = let$star;
      exports.split_off = split_off;
      exports.split_off_regex = split_off_regex;
      exports.keep_some = keep_some;
    }
  });

  // _build/default/dist/irc/ctcp.js
  var require_ctcp = __commonJS({
    "_build/default/dist/irc/ctcp.js"(exports) {
      "use strict";
      var Irc__Utils = require_utils();
      function parse_query(command, params) {
        switch (command) {
          case "ACTION":
            if (params !== void 0) {
              return {
                TAG: (
                  /* Action */
                  0
                ),
                _0: params
              };
            } else {
              return {
                TAG: (
                  /* Unknown */
                  8
                ),
                _0: command,
                _1: params
              };
            }
          case "CLIENTINFO":
            if (params !== void 0) {
              return {
                TAG: (
                  /* Client_info_reply */
                  1
                ),
                _0: Irc__Utils.keep_some(params.split(/\s+/))
              };
            } else {
              return (
                /* Client_info_query */
                0
              );
            }
          case "FINGER":
            if (params !== void 0) {
              return {
                TAG: (
                  /* Finger_reply */
                  2
                ),
                _0: params
              };
            } else {
              return (
                /* Finger_query */
                1
              );
            }
          case "PING":
            if (params !== void 0) {
              return {
                TAG: (
                  /* Ping */
                  3
                ),
                _0: params
              };
            } else {
              return {
                TAG: (
                  /* Unknown */
                  8
                ),
                _0: command,
                _1: params
              };
            }
          case "SOURCE":
            if (params !== void 0) {
              return {
                TAG: (
                  /* Source_reply */
                  4
                ),
                _0: params
              };
            } else {
              return (
                /* Source_query */
                2
              );
            }
          case "TIME":
            if (params !== void 0) {
              return {
                TAG: (
                  /* Time_reply */
                  5
                ),
                _0: params
              };
            } else {
              return (
                /* Time_query */
                3
              );
            }
          case "USERINFO":
            if (params !== void 0) {
              return {
                TAG: (
                  /* User_info_reply */
                  7
                ),
                _0: params
              };
            } else {
              return (
                /* User_info_query */
                5
              );
            }
          case "VERSION":
            if (params !== void 0) {
              return {
                TAG: (
                  /* Version_reply */
                  6
                ),
                _0: params
              };
            } else {
              return (
                /* Version_query */
                4
              );
            }
          default:
            return {
              TAG: (
                /* Unknown */
                8
              ),
              _0: command,
              _1: params
            };
        }
      }
      function string_of_query(param) {
        if (typeof param === "number") {
          switch (param) {
            case /* Client_info_query */
            0:
              return "CLIENTINFO";
            case /* Finger_query */
            1:
              return "FINGER";
            case /* Source_query */
            2:
              return "SOURCE";
            case /* Time_query */
            3:
              return "TIME";
            case /* Version_query */
            4:
              return "VERSION";
            case /* User_info_query */
            5:
              return "USERINFO";
          }
        } else {
          switch (param.TAG | 0) {
            case /* Action */
            0:
              return "ACTION " + param._0;
            case /* Client_info_reply */
            1:
              return "CLIENTINFO " + param._0.join(" ");
            case /* Finger_reply */
            2:
              return "FINGER " + param._0;
            case /* Ping */
            3:
              return "PING " + param._0;
            case /* Source_reply */
            4:
              return "SOURCE " + param._0;
            case /* Time_reply */
            5:
              return "TIME " + param._0;
            case /* Version_reply */
            6:
              return "VERSION " + param._0;
            case /* User_info_reply */
            7:
              return "USERINFO " + param._0;
            case /* Unknown */
            8:
              var params = param._1;
              var command = param._0;
              if (params !== void 0) {
                return command + (" " + params);
              } else {
                return command;
              }
          }
        }
      }
      var delim = "";
      function is_ctcp(param) {
        return param.startsWith(delim);
      }
      function parse(message) {
        if (!message.startsWith(delim)) {
          return;
        }
        var message$1 = message.endsWith(delim) ? message.slice(1, message.length - 1 | 0) : message.slice(1);
        var match = Irc__Utils.split_off_regex(/\s+/, message$1);
        if (match === void 0) {
          return parse_query(message$1, void 0);
        }
        var command = match[0];
        if (match[1] === "") {
          return parse_query(command, void 0);
        } else {
          return parse_query(command, match[1]);
        }
      }
      function to_string(query) {
        return delim + (string_of_query(query) + delim);
      }
      exports.parse_query = parse_query;
      exports.string_of_query = string_of_query;
      exports.delim = delim;
      exports.is_ctcp = is_ctcp;
      exports.parse = parse;
      exports.to_string = to_string;
    }
  });

  // _build/default/dist/irc/reply.js
  var require_reply = __commonJS({
    "_build/default/dist/irc/reply.js"(exports) {
      "use strict";
      function of_int(num) {
        switch (num) {
          case 1:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Welcome */
                0
              )
            };
          case 2:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Your_host */
                1
              )
            };
          case 3:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Created */
                2
              )
            };
          case 4:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* My_info */
                3
              )
            };
          case 5:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Bounce */
                4
              )
            };
          case 200:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_link */
                52
              )
            };
          case 201:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_connecting */
                53
              )
            };
          case 202:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_handshake */
                54
              )
            };
          case 203:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_unknown */
                55
              )
            };
          case 204:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_operator */
                56
              )
            };
          case 205:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_user */
                57
              )
            };
          case 206:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_server */
                58
              )
            };
          case 207:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_service */
                59
              )
            };
          case 208:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_new_type */
                60
              )
            };
          case 209:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_class */
                61
              )
            };
          case 210:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_reconnect */
                62
              )
            };
          case 211:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Stats_link_info */
                65
              )
            };
          case 212:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Stats_commands */
                66
              )
            };
          case 219:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Stats_end */
                67
              )
            };
          case 221:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Umode_is */
                70
              )
            };
          case 234:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Server_list */
                71
              )
            };
          case 235:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Server_list_end */
                72
              )
            };
          case 242:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Stats_uptime */
                68
              )
            };
          case 243:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Stats_oline */
                69
              )
            };
          case 251:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Luser_client */
                73
              )
            };
          case 252:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Luser_operator */
                74
              )
            };
          case 253:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Luser_unknown */
                75
              )
            };
          case 254:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Luser_channels */
                76
              )
            };
          case 255:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Luser_me */
                77
              )
            };
          case 256:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Admin_me */
                78
              )
            };
          case 257:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Admin_loc1 */
                79
              )
            };
          case 258:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Admin_loc2 */
                80
              )
            };
          case 259:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Admin_email */
                81
              )
            };
          case 261:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_log */
                63
              )
            };
          case 262:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Trace_end */
                64
              )
            };
          case 263:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Try_again */
                82
              )
            };
          case 301:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Away */
                7
              )
            };
          case 302:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* User_host */
                5
              )
            };
          case 303:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Ison */
                6
              )
            };
          case 305:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Unaway */
                8
              )
            };
          case 306:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Now_away */
                9
              )
            };
          case 311:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Whois_user */
                10
              )
            };
          case 312:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Whois_server */
                11
              )
            };
          case 313:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Whois_operator */
                12
              )
            };
          case 314:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Whowas_user */
                16
              )
            };
          case 315:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Who_end */
                32
              )
            };
          case 317:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Whois_idle */
                13
              )
            };
          case 318:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Whois_end */
                14
              )
            };
          case 319:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Whois_channels */
                15
              )
            };
          case 322:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* List */
                18
              )
            };
          case 323:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* List_end */
                19
              )
            };
          case 324:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Channel_mode_is */
                21
              )
            };
          case 325:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Unique_op_is */
                20
              )
            };
          case 331:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* No_topic */
                22
              )
            };
          case 332:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Topic */
                23
              )
            };
          case 341:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Inviting */
                24
              )
            };
          case 342:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Summoning */
                25
              )
            };
          case 346:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Invite_list */
                26
              )
            };
          case 347:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Invite_list_end */
                27
              )
            };
          case 348:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Except_list */
                28
              )
            };
          case 349:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Except_list_end */
                29
              )
            };
          case 351:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Version */
                30
              )
            };
          case 352:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Who_reply */
                31
              )
            };
          case 353:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Names */
                33
              )
            };
          case 364:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Links */
                35
              )
            };
          case 365:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Links_end */
                36
              )
            };
          case 366:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Names_end */
                34
              )
            };
          case 367:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Ban_list */
                37
              )
            };
          case 368:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Ban_list_end */
                38
              )
            };
          case 369:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Whowas_end */
                17
              )
            };
          case 371:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Info */
                39
              )
            };
          case 372:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Motd */
                42
              )
            };
          case 374:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Info_end */
                40
              )
            };
          case 375:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Motd_start */
                41
              )
            };
          case 376:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Motd_end */
                43
              )
            };
          case 381:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* You're_operator */
                44
              )
            };
          case 382:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Rehashing */
                45
              )
            };
          case 383:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* You're_service */
                46
              )
            };
          case 391:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Time */
                47
              )
            };
          case 392:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Users_start */
                48
              )
            };
          case 393:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Users */
                49
              )
            };
          case 394:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Users_end */
                50
              )
            };
          case 395:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* No_users */
                51
              )
            };
          case 401:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_such_nick */
                0
              )
            };
          case 402:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_such_server */
                1
              )
            };
          case 403:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_such_channel */
                2
              )
            };
          case 404:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Cannot_send_to_channel */
                3
              )
            };
          case 405:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Too_many_channels */
                4
              )
            };
          case 406:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Was_no_such_nick */
                5
              )
            };
          case 407:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Too_many_targets */
                6
              )
            };
          case 408:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_such_service */
                7
              )
            };
          case 409:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_origin */
                8
              )
            };
          case 411:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_recipient */
                9
              )
            };
          case 412:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_text_to_send */
                10
              )
            };
          case 413:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_top_level */
                11
              )
            };
          case 414:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Wild_top_level */
                12
              )
            };
          case 415:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Bad_mask */
                13
              )
            };
          case 421:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Unknown_command */
                14
              )
            };
          case 422:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_motd */
                15
              )
            };
          case 423:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_admin_info */
                16
              )
            };
          case 424:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* File_error */
                17
              )
            };
          case 431:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_nickname_given */
                18
              )
            };
          case 432:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Erroneous_nickname */
                19
              )
            };
          case 433:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Nickname_in_use */
                20
              )
            };
          case 436:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Nick_collision */
                21
              )
            };
          case 437:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Unavailable_resource */
                22
              )
            };
          case 441:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* User_not_in_channel */
                23
              )
            };
          case 442:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Not_on_channel */
                24
              )
            };
          case 443:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* User_on_channel */
                25
              )
            };
          case 444:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_login */
                26
              )
            };
          case 445:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Summon_disabled */
                27
              )
            };
          case 446:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Users_disabled */
                28
              )
            };
          case 451:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Not_registered */
                29
              )
            };
          case 452:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Already_registered */
                31
              )
            };
          case 461:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Need_more_params */
                30
              )
            };
          case 463:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_permission_for_host */
                32
              )
            };
          case 464:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Password_mismatch */
                33
              )
            };
          case 465:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* You're_banned_creep */
                34
              )
            };
          case 466:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* You_will_be_banned */
                35
              )
            };
          case 467:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Channel_key_already_set */
                36
              )
            };
          case 471:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Channel_is_full */
                37
              )
            };
          case 472:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Unknown_channel_mode */
                38
              )
            };
          case 473:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Invite_only_channel */
                39
              )
            };
          case 474:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Banned_from_channel */
                40
              )
            };
          case 475:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Bad_channel_key */
                41
              )
            };
          case 476:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Bad_channel_mask */
                42
              )
            };
          case 477:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_channel_modes */
                43
              )
            };
          case 478:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Ban_list_full */
                44
              )
            };
          case 481:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_privileges */
                45
              )
            };
          case 482:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Channel_operator_privileges_needed */
                46
              )
            };
          case 483:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Can't_kill_server */
                47
              )
            };
          case 484:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Restricted */
                48
              )
            };
          case 485:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Unique_operator_privileges_needed */
                49
              )
            };
          case 491:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* No_operator_host */
                50
              )
            };
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
          case 25:
          case 26:
          case 27:
          case 28:
          case 29:
          case 30:
          case 31:
          case 32:
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
          case 123:
          case 124:
          case 125:
          case 126:
          case 127:
          case 128:
          case 129:
          case 130:
          case 131:
          case 132:
          case 133:
          case 134:
          case 135:
          case 136:
          case 137:
          case 138:
          case 139:
          case 140:
          case 141:
          case 142:
          case 143:
          case 144:
          case 145:
          case 146:
          case 147:
          case 148:
          case 149:
          case 150:
          case 151:
          case 152:
          case 153:
          case 154:
          case 155:
          case 156:
          case 157:
          case 158:
          case 159:
          case 160:
          case 161:
          case 162:
          case 163:
          case 164:
          case 165:
          case 166:
          case 167:
          case 168:
          case 169:
          case 170:
          case 171:
          case 172:
          case 173:
          case 174:
          case 175:
          case 176:
          case 177:
          case 178:
          case 179:
          case 180:
          case 181:
          case 182:
          case 183:
          case 184:
          case 185:
          case 186:
          case 187:
          case 188:
          case 189:
          case 190:
          case 191:
          case 192:
          case 193:
          case 194:
          case 195:
          case 196:
          case 197:
          case 198:
          case 199:
          case 213:
          case 214:
          case 215:
          case 216:
          case 217:
          case 218:
          case 220:
          case 222:
          case 223:
          case 224:
          case 225:
          case 226:
          case 227:
          case 228:
          case 229:
          case 230:
          case 231:
          case 232:
          case 233:
          case 236:
          case 237:
          case 238:
          case 239:
          case 240:
          case 241:
          case 244:
          case 245:
          case 246:
          case 247:
          case 248:
          case 249:
          case 250:
          case 260:
          case 264:
          case 265:
          case 266:
          case 267:
          case 268:
          case 269:
          case 270:
          case 271:
          case 272:
          case 273:
          case 274:
          case 275:
          case 276:
          case 277:
          case 278:
          case 279:
          case 280:
          case 281:
          case 282:
          case 283:
          case 284:
          case 285:
          case 286:
          case 287:
          case 288:
          case 289:
          case 290:
          case 291:
          case 292:
          case 293:
          case 294:
          case 295:
          case 296:
          case 297:
          case 298:
          case 299:
          case 300:
          case 304:
          case 307:
          case 308:
          case 309:
          case 310:
          case 316:
          case 320:
          case 321:
          case 326:
          case 327:
          case 328:
          case 329:
          case 330:
          case 333:
          case 334:
          case 335:
          case 336:
          case 337:
          case 338:
          case 339:
          case 340:
          case 343:
          case 344:
          case 345:
          case 350:
          case 354:
          case 355:
          case 356:
          case 357:
          case 358:
          case 359:
          case 360:
          case 361:
          case 362:
          case 363:
          case 370:
          case 373:
          case 377:
          case 378:
          case 379:
          case 380:
          case 384:
          case 385:
          case 386:
          case 387:
          case 388:
          case 389:
          case 390:
          case 396:
          case 397:
          case 398:
          case 399:
          case 400:
          case 410:
          case 416:
          case 417:
          case 418:
          case 419:
          case 420:
          case 425:
          case 426:
          case 427:
          case 428:
          case 429:
          case 430:
          case 434:
          case 435:
          case 438:
          case 439:
          case 440:
          case 447:
          case 448:
          case 449:
          case 450:
          case 453:
          case 454:
          case 455:
          case 456:
          case 457:
          case 458:
          case 459:
          case 460:
          case 462:
          case 468:
          case 469:
          case 470:
          case 479:
          case 480:
          case 486:
          case 487:
          case 488:
          case 489:
          case 490:
          case 492:
          case 493:
          case 494:
          case 495:
          case 496:
          case 497:
          case 498:
          case 499:
          case 500:
            return {
              TAG: (
                /* Unknown */
                2
              ),
              _0: num
            };
          case 501:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Unknown_mode_flag */
                51
              )
            };
          case 502:
            return {
              TAG: (
                /* Error */
                1
              ),
              _0: (
                /* Users_don't_match */
                52
              )
            };
          default:
            return {
              TAG: (
                /* Unknown */
                2
              ),
              _0: num
            };
        }
      }
      function int_of_response(param) {
        switch (param) {
          case /* Welcome */
          0:
            return 1;
          case /* Your_host */
          1:
            return 2;
          case /* Created */
          2:
            return 3;
          case /* My_info */
          3:
            return 4;
          case /* Bounce */
          4:
            return 5;
          case /* User_host */
          5:
            return 302;
          case /* Ison */
          6:
            return 303;
          case /* Away */
          7:
            return 301;
          case /* Unaway */
          8:
            return 305;
          case /* Now_away */
          9:
            return 306;
          case /* Whois_user */
          10:
            return 311;
          case /* Whois_server */
          11:
            return 312;
          case /* Whois_operator */
          12:
            return 313;
          case /* Whois_idle */
          13:
            return 317;
          case /* Whois_end */
          14:
            return 318;
          case /* Whois_channels */
          15:
            return 319;
          case /* Whowas_user */
          16:
            return 314;
          case /* Whowas_end */
          17:
            return 369;
          case /* List */
          18:
            return 322;
          case /* List_end */
          19:
            return 323;
          case /* Unique_op_is */
          20:
            return 325;
          case /* Channel_mode_is */
          21:
            return 324;
          case /* No_topic */
          22:
            return 331;
          case /* Topic */
          23:
            return 332;
          case /* Inviting */
          24:
            return 341;
          case /* Summoning */
          25:
            return 342;
          case /* Invite_list */
          26:
            return 346;
          case /* Invite_list_end */
          27:
            return 347;
          case /* Except_list */
          28:
            return 348;
          case /* Except_list_end */
          29:
            return 349;
          case /* Version */
          30:
            return 351;
          case /* Who_reply */
          31:
            return 352;
          case /* Who_end */
          32:
            return 315;
          case /* Names */
          33:
            return 353;
          case /* Names_end */
          34:
            return 366;
          case /* Links */
          35:
            return 364;
          case /* Links_end */
          36:
            return 365;
          case /* Ban_list */
          37:
            return 367;
          case /* Ban_list_end */
          38:
            return 368;
          case /* Info */
          39:
            return 371;
          case /* Info_end */
          40:
            return 374;
          case /* Motd_start */
          41:
            return 375;
          case /* Motd */
          42:
            return 372;
          case /* Motd_end */
          43:
            return 376;
          case /* You're_operator */
          44:
            return 381;
          case /* Rehashing */
          45:
            return 382;
          case /* You're_service */
          46:
            return 383;
          case /* Time */
          47:
            return 391;
          case /* Users_start */
          48:
            return 392;
          case /* Users */
          49:
            return 393;
          case /* Users_end */
          50:
            return 394;
          case /* No_users */
          51:
            return 395;
          case /* Trace_link */
          52:
            return 200;
          case /* Trace_connecting */
          53:
            return 201;
          case /* Trace_handshake */
          54:
            return 202;
          case /* Trace_unknown */
          55:
            return 203;
          case /* Trace_operator */
          56:
            return 204;
          case /* Trace_user */
          57:
            return 205;
          case /* Trace_server */
          58:
            return 206;
          case /* Trace_service */
          59:
            return 207;
          case /* Trace_new_type */
          60:
            return 208;
          case /* Trace_class */
          61:
            return 209;
          case /* Trace_reconnect */
          62:
            return 210;
          case /* Trace_log */
          63:
            return 261;
          case /* Trace_end */
          64:
            return 262;
          case /* Stats_link_info */
          65:
            return 211;
          case /* Stats_commands */
          66:
            return 212;
          case /* Stats_end */
          67:
            return 219;
          case /* Stats_uptime */
          68:
            return 242;
          case /* Stats_oline */
          69:
            return 243;
          case /* Umode_is */
          70:
            return 221;
          case /* Server_list */
          71:
            return 234;
          case /* Server_list_end */
          72:
            return 235;
          case /* Luser_client */
          73:
            return 251;
          case /* Luser_operator */
          74:
            return 252;
          case /* Luser_unknown */
          75:
            return 253;
          case /* Luser_channels */
          76:
            return 254;
          case /* Luser_me */
          77:
            return 255;
          case /* Admin_me */
          78:
            return 256;
          case /* Admin_loc1 */
          79:
            return 257;
          case /* Admin_loc2 */
          80:
            return 258;
          case /* Admin_email */
          81:
            return 259;
          case /* Try_again */
          82:
            return 263;
        }
      }
      function int_of_error(param) {
        switch (param) {
          case /* No_such_nick */
          0:
            return 401;
          case /* No_such_server */
          1:
            return 402;
          case /* No_such_channel */
          2:
            return 403;
          case /* Cannot_send_to_channel */
          3:
            return 404;
          case /* Too_many_channels */
          4:
            return 405;
          case /* Was_no_such_nick */
          5:
            return 406;
          case /* Too_many_targets */
          6:
            return 407;
          case /* No_such_service */
          7:
            return 408;
          case /* No_origin */
          8:
            return 409;
          case /* No_recipient */
          9:
            return 411;
          case /* No_text_to_send */
          10:
            return 412;
          case /* No_top_level */
          11:
            return 413;
          case /* Wild_top_level */
          12:
            return 414;
          case /* Bad_mask */
          13:
            return 415;
          case /* Unknown_command */
          14:
            return 421;
          case /* No_motd */
          15:
            return 422;
          case /* No_admin_info */
          16:
            return 423;
          case /* File_error */
          17:
            return 424;
          case /* No_nickname_given */
          18:
            return 431;
          case /* Erroneous_nickname */
          19:
            return 432;
          case /* Nickname_in_use */
          20:
            return 433;
          case /* Nick_collision */
          21:
            return 436;
          case /* Unavailable_resource */
          22:
            return 437;
          case /* User_not_in_channel */
          23:
            return 441;
          case /* Not_on_channel */
          24:
            return 442;
          case /* User_on_channel */
          25:
            return 443;
          case /* No_login */
          26:
            return 444;
          case /* Summon_disabled */
          27:
            return 445;
          case /* Users_disabled */
          28:
            return 446;
          case /* Not_registered */
          29:
            return 451;
          case /* Need_more_params */
          30:
            return 461;
          case /* Already_registered */
          31:
            return 452;
          case /* No_permission_for_host */
          32:
            return 463;
          case /* Password_mismatch */
          33:
            return 464;
          case /* You're_banned_creep */
          34:
            return 465;
          case /* You_will_be_banned */
          35:
            return 466;
          case /* Channel_key_already_set */
          36:
            return 467;
          case /* Channel_is_full */
          37:
            return 471;
          case /* Unknown_channel_mode */
          38:
            return 472;
          case /* Invite_only_channel */
          39:
            return 473;
          case /* Banned_from_channel */
          40:
            return 474;
          case /* Bad_channel_key */
          41:
            return 475;
          case /* Bad_channel_mask */
          42:
            return 476;
          case /* No_channel_modes */
          43:
            return 477;
          case /* Ban_list_full */
          44:
            return 478;
          case /* No_privileges */
          45:
            return 481;
          case /* Channel_operator_privileges_needed */
          46:
            return 482;
          case /* Can't_kill_server */
          47:
            return 483;
          case /* Restricted */
          48:
            return 484;
          case /* Unique_operator_privileges_needed */
          49:
            return 485;
          case /* No_operator_host */
          50:
            return 491;
          case /* Unknown_mode_flag */
          51:
            return 501;
          case /* Users_don't_match */
          52:
            return 502;
        }
      }
      function to_int(param) {
        switch (param.TAG | 0) {
          case /* Response */
          0:
            return int_of_response(param._0);
          case /* Error */
          1:
            return int_of_error(param._0);
          case /* Unknown */
          2:
            return param._0;
        }
      }
      exports.of_int = of_int;
      exports.int_of_response = int_of_response;
      exports.int_of_error = int_of_error;
      exports.to_int = to_int;
    }
  });

  // _build/default/dist/irc/command.js
  var require_command = __commonJS({
    "_build/default/dist/irc/command.js"(exports) {
      "use strict";
      var Caml_array = require_caml_array();
      var Caml_format = require_caml_format();
      var Caml_string = require_caml_string();
      var Irc__Ctcp = require_ctcp();
      var Irc__Reply = require_reply();
      var Stdlib = require_stdlib();
      function is_channel_name(name) {
        var match = Caml_string.get(name, 0);
        switch (match) {
          case 34:
          case 36:
          case 37:
          case 39:
          case 40:
          case 41:
          case 42:
            return false;
          case 33:
          case 35:
          case 38:
          case 43:
            return true;
          default:
            return false;
        }
      }
      function param_should_be_escaped(param) {
        if (param.includes(" ")) {
          return true;
        } else {
          return param.startsWith(":");
        }
      }
      function parse(command, args) {
        var match = command.toUpperCase();
        switch (match) {
          case "ADMIN":
            var len = args.length;
            if (len !== 1) {
              if (!len) {
                return {
                  TAG: (
                    /* Admin */
                    28
                  ),
                  _0: void 0
                };
              }
            } else {
              var target = args[0];
              return {
                TAG: (
                  /* Admin */
                  28
                ),
                _0: target
              };
            }
            break;
          case "AWAY":
            var len$1 = args.length;
            if (len$1 !== 1) {
              if (!len$1) {
                return {
                  TAG: (
                    /* Away */
                    39
                  ),
                  _0: void 0
                };
              }
            } else {
              var text = args[0];
              return {
                TAG: (
                  /* Away */
                  39
                ),
                _0: text
              };
            }
            break;
          case "CONNECT":
            var len$2 = args.length;
            if (len$2 !== 2) {
              if (len$2 === 3) {
                var target_server = args[0];
                var port = args[1];
                var remote_server = args[2];
                return {
                  TAG: (
                    /* Connect */
                    26
                  ),
                  target_server,
                  port: Caml_format.caml_int_of_string(port),
                  remote_server
                };
              }
            } else {
              var target_server$1 = args[0];
              var port$1 = args[1];
              return {
                TAG: (
                  /* Connect */
                  26
                ),
                target_server: target_server$1,
                port: Caml_format.caml_int_of_string(port$1),
                remote_server: void 0
              };
            }
            break;
          case "DIE":
            if (!args.length) {
              return (
                /* Die */
                1
              );
            }
            break;
          case "ERROR":
            if (args.length === 1) {
              var message = args[0];
              return {
                TAG: (
                  /* Error */
                  38
                ),
                _0: message
              };
            }
            break;
          case "INFO":
            var len$3 = args.length;
            if (len$3 !== 1) {
              if (!len$3) {
                return {
                  TAG: (
                    /* Info */
                    29
                  ),
                  _0: void 0
                };
              }
            } else {
              var target$1 = args[0];
              return {
                TAG: (
                  /* Info */
                  29
                ),
                _0: target$1
              };
            }
            break;
          case "INVITE":
            if (args.length === 2) {
              var nickname = args[0];
              var channel = args[1];
              return {
                TAG: (
                  /* Invite */
                  14
                ),
                nickname,
                channel
              };
            }
            break;
          case "ISON":
            return {
              TAG: (
                /* Ison */
                44
              ),
              _0: args
            };
          case "JOIN":
            var len$4 = args.length;
            if (len$4 < 3) {
              switch (len$4) {
                case 0:
                  break;
                case 1:
                  var channels = args[0];
                  var channels$1 = channels.split(",");
                  return {
                    TAG: (
                      /* Join */
                      8
                    ),
                    channels: channels$1,
                    keys: []
                  };
                case 2:
                  var channels$2 = args[0];
                  var keys = args[1];
                  var channels$3 = channels$2.split(",");
                  var keys$1 = keys.split(",");
                  return {
                    TAG: (
                      /* Join */
                      8
                    ),
                    channels: channels$3,
                    keys: keys$1
                  };
              }
            }
            break;
          case "KICK":
            var len$5 = args.length;
            if (len$5 !== 2) {
              if (len$5 === 3) {
                var channels$4 = args[0];
                var nicknames = args[1];
                var comment = args[2];
                var channels$5 = channels$4.split(",");
                var nicknames$1 = nicknames.split(",");
                return {
                  TAG: (
                    /* Kick */
                    15
                  ),
                  channels: channels$5,
                  nicknames: nicknames$1,
                  comment
                };
              }
            } else {
              var channels$6 = args[0];
              var nicknames$2 = args[1];
              var channels$7 = channels$6.split(",");
              var nicknames$3 = nicknames$2.split(",");
              return {
                TAG: (
                  /* Kick */
                  15
                ),
                channels: channels$7,
                nicknames: nicknames$3,
                comment: void 0
              };
            }
            break;
          case "KILL":
            if (args.length === 2) {
              var nickname$1 = args[0];
              var comment$1 = args[1];
              return {
                TAG: (
                  /* Kill */
                  35
                ),
                nickname: nickname$1,
                comment: comment$1
              };
            }
            break;
          case "LINKS":
            var len$6 = args.length;
            if (len$6 < 3) {
              switch (len$6) {
                case 0:
                  return {
                    TAG: (
                      /* Links */
                      24
                    ),
                    remote_server: void 0,
                    server_mask: void 0
                  };
                case 1:
                  var server_mask = args[0];
                  return {
                    TAG: (
                      /* Links */
                      24
                    ),
                    remote_server: void 0,
                    server_mask
                  };
                case 2:
                  var remote_server$1 = args[0];
                  var server_mask$1 = args[1];
                  return {
                    TAG: (
                      /* Links */
                      24
                    ),
                    remote_server: remote_server$1,
                    server_mask: server_mask$1
                  };
              }
            }
            break;
          case "LIST":
            var len$7 = args.length;
            if (len$7 < 3) {
              switch (len$7) {
                case 0:
                  break;
                case 1:
                  var channels$8 = args[0];
                  var channels$9 = channels$8.split(",");
                  return {
                    TAG: (
                      /* List */
                      13
                    ),
                    channels: channels$9,
                    target: void 0
                  };
                case 2:
                  var channels$10 = args[0];
                  var target$2 = args[1];
                  var channels$11 = channels$10.split(",");
                  return {
                    TAG: (
                      /* List */
                      13
                    ),
                    channels: channels$11,
                    target: target$2
                  };
              }
            }
            break;
          case "LUSERS":
            var len$8 = args.length;
            if (len$8 < 3) {
              switch (len$8) {
                case 0:
                  return {
                    TAG: (
                      /* Lusers */
                      21
                    ),
                    mask: void 0,
                    target: void 0
                  };
                case 1:
                  var mask = args[0];
                  return {
                    TAG: (
                      /* Lusers */
                      21
                    ),
                    mask,
                    target: void 0
                  };
                case 2:
                  var mask$1 = args[0];
                  var target$3 = args[1];
                  return {
                    TAG: (
                      /* Lusers */
                      21
                    ),
                    mask: mask$1,
                    target: target$3
                  };
              }
            }
            break;
          case "MODE":
            if (args.length > 1 && is_channel_name(Caml_array.get(args, 0))) {
              return {
                TAG: (
                  /* Channel_mode */
                  10
                ),
                channel: Caml_array.get(args, 0),
                modes: args.slice(1)
              };
            }
            if (args.length > 1) {
              return {
                TAG: (
                  /* User_mode */
                  4
                ),
                nickname: Caml_array.get(args, 0),
                modes: args.slice(1)
              };
            }
            break;
          case "MOTD":
            var len$9 = args.length;
            if (len$9 !== 1) {
              if (!len$9) {
                return {
                  TAG: (
                    /* Motd */
                    20
                  ),
                  _0: void 0
                };
              }
            } else {
              var target$4 = args[0];
              return {
                TAG: (
                  /* Motd */
                  20
                ),
                _0: target$4
              };
            }
            break;
          case "NAMES":
            var len$10 = args.length;
            if (len$10 < 3) {
              switch (len$10) {
                case 0:
                  return {
                    TAG: (
                      /* Names */
                      12
                    ),
                    channels: [],
                    target: void 0
                  };
                case 1:
                  var channels$12 = args[0];
                  var channels$13 = channels$12.split(",");
                  return {
                    TAG: (
                      /* Names */
                      12
                    ),
                    channels: channels$13,
                    target: void 0
                  };
                case 2:
                  var channels$14 = args[0];
                  var target$5 = args[1];
                  var channels$15 = channels$14.split(",");
                  return {
                    TAG: (
                      /* Names */
                      12
                    ),
                    channels: channels$15,
                    target: target$5
                  };
              }
            }
            break;
          case "NICK":
            if (args.length === 1) {
              var nickname$2 = args[0];
              return {
                TAG: (
                  /* Nick */
                  1
                ),
                _0: nickname$2
              };
            }
            break;
          case "NOTICE":
            if (args.length === 2) {
              var target$6 = args[0];
              var message$1 = args[1];
              var message$2 = Irc__Ctcp.parse(message$1);
              if (message$2 !== void 0) {
                return {
                  TAG: (
                    /* Ctcp_notice */
                    19
                  ),
                  target: target$6,
                  message: message$2
                };
              } else {
                return {
                  TAG: (
                    /* Notice */
                    18
                  ),
                  target: target$6,
                  message: message$1
                };
              }
            }
            break;
          case "OPER":
            if (args.length === 2) {
              var name = args[0];
              var password = args[1];
              return {
                TAG: (
                  /* Oper */
                  3
                ),
                name,
                password
              };
            }
            break;
          case "PART":
            var len$11 = args.length;
            if (len$11 < 3) {
              switch (len$11) {
                case 0:
                  break;
                case 1:
                  var channels$16 = args[0];
                  var channels$17 = channels$16.split(",");
                  return {
                    TAG: (
                      /* Part */
                      9
                    ),
                    channels: channels$17,
                    comment: void 0
                  };
                case 2:
                  var channels$18 = args[0];
                  var comment$2 = args[1];
                  var channels$19 = channels$18.split(",");
                  return {
                    TAG: (
                      /* Part */
                      9
                    ),
                    channels: channels$19,
                    comment: comment$2
                  };
              }
            }
            break;
          case "PASS":
            if (args.length === 1) {
              var password$1 = args[0];
              return {
                TAG: (
                  /* Pass */
                  0
                ),
                _0: password$1
              };
            }
            break;
          case "PING":
            var len$12 = args.length;
            if (len$12 < 3) {
              switch (len$12) {
                case 0:
                  break;
                case 1:
                  var server1 = args[0];
                  return {
                    TAG: (
                      /* Ping */
                      36
                    ),
                    server1,
                    server2: void 0
                  };
                case 2:
                  var server1$1 = args[0];
                  var server2 = args[1];
                  return {
                    TAG: (
                      /* Ping */
                      36
                    ),
                    server1: server1$1,
                    server2
                  };
              }
            }
            break;
          case "PONG":
            var len$13 = args.length;
            if (len$13 < 3) {
              switch (len$13) {
                case 0:
                  break;
                case 1:
                  var server1$2 = args[0];
                  return {
                    TAG: (
                      /* Pong */
                      37
                    ),
                    server1: server1$2,
                    server2: void 0
                  };
                case 2:
                  var server1$3 = args[0];
                  var server2$1 = args[1];
                  return {
                    TAG: (
                      /* Pong */
                      37
                    ),
                    server1: server1$3,
                    server2: server2$1
                  };
              }
            }
            break;
          case "PRIVMSG":
            if (args.length === 2) {
              var target$7 = args[0];
              var message$3 = args[1];
              var message$4 = Irc__Ctcp.parse(message$3);
              if (message$4 !== void 0) {
                return {
                  TAG: (
                    /* Ctcp_private_message */
                    17
                  ),
                  target: target$7,
                  message: message$4
                };
              } else {
                return {
                  TAG: (
                    /* Private_message */
                    16
                  ),
                  target: target$7,
                  message: message$3
                };
              }
            }
            break;
          case "QUIT":
            var len$14 = args.length;
            if (len$14 !== 1) {
              if (!len$14) {
                return {
                  TAG: (
                    /* Quit */
                    6
                  ),
                  _0: void 0
                };
              }
            } else {
              var message$5 = args[0];
              return {
                TAG: (
                  /* Quit */
                  6
                ),
                _0: message$5
              };
            }
            break;
          case "REHASH":
            if (!args.length) {
              return (
                /* Rehash */
                0
              );
            }
            break;
          case "RESTART":
            if (!args.length) {
              return (
                /* Restart */
                2
              );
            }
            break;
          case "SERVICE":
            if (args.length === 6) {
              var nickname$3 = args[0];
              var reserved1 = args[1];
              var distribution = args[2];
              var type_ = args[3];
              var reserved2 = args[4];
              var info = args[5];
              return {
                TAG: (
                  /* Service */
                  5
                ),
                nickname: nickname$3,
                reserved1,
                distribution,
                type_,
                reserved2,
                info
              };
            }
            break;
          case "SERVLIST":
            var len$15 = args.length;
            if (len$15 < 3) {
              switch (len$15) {
                case 0:
                  return {
                    TAG: (
                      /* Servlist */
                      30
                    ),
                    mask: void 0,
                    type_: void 0
                  };
                case 1:
                  var mask$2 = args[0];
                  return {
                    TAG: (
                      /* Servlist */
                      30
                    ),
                    mask: mask$2,
                    type_: void 0
                  };
                case 2:
                  var mask$3 = args[0];
                  var type_$1 = args[1];
                  return {
                    TAG: (
                      /* Servlist */
                      30
                    ),
                    mask: mask$3,
                    type_: type_$1
                  };
              }
            }
            break;
          case "SQUERY":
            if (args.length === 2) {
              var service_name = args[0];
              var text$1 = args[1];
              return {
                TAG: (
                  /* Squery */
                  31
                ),
                service_name,
                text: text$1
              };
            }
            break;
          case "SQUIT":
            if (args.length === 2) {
              var server = args[0];
              var comment$3 = args[1];
              return {
                TAG: (
                  /* Squit */
                  7
                ),
                server,
                comment: comment$3
              };
            }
            break;
          case "STATS":
            var len$16 = args.length;
            if (len$16 < 3) {
              switch (len$16) {
                case 0:
                  return {
                    TAG: (
                      /* Stats */
                      23
                    ),
                    query: void 0,
                    target: void 0
                  };
                case 1:
                  var query = args[0];
                  return {
                    TAG: (
                      /* Stats */
                      23
                    ),
                    query,
                    target: void 0
                  };
                case 2:
                  var query$1 = args[0];
                  var target$8 = args[1];
                  return {
                    TAG: (
                      /* Stats */
                      23
                    ),
                    query: query$1,
                    target: target$8
                  };
              }
            }
            break;
          case "SUMMON":
            var len$17 = args.length;
            if (len$17 < 4) {
              switch (len$17) {
                case 0:
                  break;
                case 1:
                  var user = args[0];
                  return {
                    TAG: (
                      /* Summon */
                      40
                    ),
                    user,
                    target: void 0,
                    channel: void 0
                  };
                case 2:
                  var user$1 = args[0];
                  var target$9 = args[1];
                  return {
                    TAG: (
                      /* Summon */
                      40
                    ),
                    user: user$1,
                    target: target$9,
                    channel: void 0
                  };
                case 3:
                  var user$2 = args[0];
                  var target$10 = args[1];
                  var channel$1 = args[2];
                  return {
                    TAG: (
                      /* Summon */
                      40
                    ),
                    user: user$2,
                    target: target$10,
                    channel: channel$1
                  };
              }
            }
            break;
          case "TIME":
            var len$18 = args.length;
            if (len$18 !== 1) {
              if (!len$18) {
                return {
                  TAG: (
                    /* Time */
                    25
                  ),
                  _0: void 0
                };
              }
            } else {
              var target$11 = args[0];
              return {
                TAG: (
                  /* Time */
                  25
                ),
                _0: target$11
              };
            }
            break;
          case "TOPIC":
            var len$19 = args.length;
            if (len$19 < 3) {
              switch (len$19) {
                case 0:
                  break;
                case 1:
                  var channel$2 = args[0];
                  return {
                    TAG: (
                      /* Topic */
                      11
                    ),
                    channel: channel$2,
                    topic: void 0
                  };
                case 2:
                  var channel$3 = args[0];
                  var topic = args[1];
                  return {
                    TAG: (
                      /* Topic */
                      11
                    ),
                    channel: channel$3,
                    topic
                  };
              }
            }
            break;
          case "TRACE":
            var len$20 = args.length;
            if (len$20 !== 1) {
              if (!len$20) {
                return {
                  TAG: (
                    /* Trace */
                    27
                  ),
                  _0: void 0
                };
              }
            } else {
              var target$12 = args[0];
              return {
                TAG: (
                  /* Trace */
                  27
                ),
                _0: target$12
              };
            }
            break;
          case "USER":
            if (args.length === 4) {
              var user$3 = args[0];
              var mode = args[1];
              var realname = args[3];
              return {
                TAG: (
                  /* User */
                  2
                ),
                user: user$3,
                mode,
                realname
              };
            }
            break;
          case "USERHOST":
            return {
              TAG: (
                /* Userhost */
                43
              ),
              _0: args
            };
          case "USERS":
            var len$21 = args.length;
            if (len$21 !== 1) {
              if (!len$21) {
                return {
                  TAG: (
                    /* Users */
                    41
                  ),
                  _0: void 0
                };
              }
            } else {
              var target$13 = args[0];
              return {
                TAG: (
                  /* Users */
                  41
                ),
                _0: target$13
              };
            }
            break;
          case "VERSION":
            var len$22 = args.length;
            if (len$22 !== 1) {
              if (!len$22) {
                return {
                  TAG: (
                    /* Version */
                    22
                  ),
                  _0: void 0
                };
              }
            } else {
              var target$14 = args[0];
              return {
                TAG: (
                  /* Version */
                  22
                ),
                _0: target$14
              };
            }
            break;
          case "WALLOPS":
            var len$23 = args.length;
            if (len$23 !== 1) {
              if (!len$23) {
                return {
                  TAG: (
                    /* Wallops */
                    42
                  ),
                  _0: void 0
                };
              }
            } else {
              var text$2 = args[0];
              return {
                TAG: (
                  /* Wallops */
                  42
                ),
                _0: text$2
              };
            }
            break;
          case "WHO":
            var len$24 = args.length;
            if (len$24 < 3) {
              switch (len$24) {
                case 0:
                  return {
                    TAG: (
                      /* Who */
                      32
                    ),
                    mask: void 0,
                    only_operators: false
                  };
                case 1:
                  var mask$4 = args[0];
                  return {
                    TAG: (
                      /* Who */
                      32
                    ),
                    mask: mask$4,
                    only_operators: false
                  };
                case 2:
                  var mask$5 = args[0];
                  var match$1 = args[1];
                  if (match$1 === "o") {
                    return {
                      TAG: (
                        /* Who */
                        32
                      ),
                      mask: mask$5,
                      only_operators: true
                    };
                  }
                  break;
              }
            }
            break;
          case "WHOIS":
            var len$25 = args.length;
            if (len$25 < 3) {
              switch (len$25) {
                case 0:
                  break;
                case 1:
                  var masks = args[0];
                  var masks$1 = masks.split(",");
                  return {
                    TAG: (
                      /* Whois */
                      33
                    ),
                    target: void 0,
                    masks: masks$1
                  };
                case 2:
                  var target$15 = args[0];
                  var masks$2 = args[1];
                  var masks$3 = masks$2.split(",");
                  return {
                    TAG: (
                      /* Whois */
                      33
                    ),
                    target: target$15,
                    masks: masks$3
                  };
              }
            }
            break;
          case "WHOWAS":
            var len$26 = args.length;
            if (len$26 < 4) {
              switch (len$26) {
                case 0:
                  break;
                case 1:
                  var nicknames$4 = args[0];
                  var nicknames$5 = nicknames$4.split(",");
                  return {
                    TAG: (
                      /* Whowas */
                      34
                    ),
                    nicknames: nicknames$5,
                    count: void 0,
                    target: void 0
                  };
                case 2:
                  var nicknames$6 = args[0];
                  var count = args[1];
                  var nicknames$7 = nicknames$6.split(",");
                  return {
                    TAG: (
                      /* Whowas */
                      34
                    ),
                    nicknames: nicknames$7,
                    count: Caml_format.caml_int_of_string(count),
                    target: void 0
                  };
                case 3:
                  var nicknames$8 = args[0];
                  var count$1 = args[1];
                  var target$16 = args[2];
                  var nicknames$9 = nicknames$8.split(",");
                  return {
                    TAG: (
                      /* Whowas */
                      34
                    ),
                    nicknames: nicknames$9,
                    count: Caml_format.caml_int_of_string(count$1),
                    target: target$16
                  };
              }
            }
            break;
          default:
        }
        var reply = Stdlib.int_of_string_opt(command);
        if (reply === void 0) {
          return {
            TAG: (
              /* Unknown */
              46
            ),
            _0: command,
            _1: args
          };
        }
        if (args.length === 0) {
          return {
            TAG: (
              /* Unknown */
              46
            ),
            _0: command,
            _1: args
          };
        }
        var target$17 = Caml_array.get(args, 0);
        var args$1 = args.slice(1);
        var code = Irc__Reply.of_int(reply);
        return {
          TAG: (
            /* Reply */
            45
          ),
          code,
          target: target$17,
          args: args$1
        };
      }
      function str(command, args) {
        var len = args.length;
        if (len !== 1) {
          if (!len) {
            return command;
          }
          var last = Caml_array.get(args, args.length - 1 | 0);
          if (!param_should_be_escaped(last)) {
            return command + (" " + args.join(" "));
          }
          var prev = args.slice(0, args.length - 1 | 0);
          return command + (" " + (prev.join(" ") + (" :" + last)));
        }
        var last$1 = args[0];
        if (param_should_be_escaped(last$1)) {
          return command + (" :" + last$1);
        } else {
          return command + (" " + last$1);
        }
      }
      function channel_list(param) {
        return param.join(",");
      }
      function to_string(param) {
        if (typeof param === "number") {
          switch (param) {
            case /* Rehash */
            0:
              return "REHASH";
            case /* Die */
            1:
              return "DIE";
            case /* Restart */
            2:
              return "RESTART";
          }
        } else {
          switch (param.TAG | 0) {
            case /* Pass */
            0:
              return str("PASS", [param._0]);
            case /* Nick */
            1:
              return str("NICK", [param._0]);
            case /* User */
            2:
              return str("USER", [
                param.user,
                param.mode,
                "*",
                param.realname
              ]);
            case /* Oper */
            3:
              return str("OPER", [
                param.name,
                param.password
              ]);
            case /* User_mode */
            4:
              return str("MODE", [param.nickname].concat(param.modes));
            case /* Service */
            5:
              return str("SERVICE", [
                param.nickname,
                param.reserved1,
                param.distribution,
                param.type_,
                param.reserved2,
                param.info
              ]);
            case /* Quit */
            6:
              var message = param._0;
              if (message !== void 0) {
                return str("QUIT", [message]);
              } else {
                return "QUIT";
              }
            case /* Squit */
            7:
              return str("SQUIT", [
                param.server,
                param.comment
              ]);
            case /* Join */
            8:
              var channels = param.channels;
              if (param.keys.length) {
                return str("JOIN", [
                  channels.join(","),
                  param.keys.join(",")
                ]);
              } else {
                return str("JOIN", [channels.join(",")]);
              }
            case /* Part */
            9:
              var comment = param.comment;
              var channels$1 = param.channels;
              if (comment !== void 0) {
                return str("PART", [
                  channels$1.join(","),
                  comment
                ]);
              } else {
                return str("PART", [channels$1.join(",")]);
              }
            case /* Channel_mode */
            10:
              return str("MODE", [param.channel].concat(param.modes));
            case /* Topic */
            11:
              var topic = param.topic;
              var channel = param.channel;
              if (topic !== void 0) {
                return str("TOPIC", [
                  channel,
                  topic
                ]);
              } else {
                return str("TOPIC", [channel]);
              }
            case /* Names */
            12:
              var channels$2 = param.channels;
              if (!channels$2.length && param.target === void 0) {
                return "NAMES";
              }
              var target = param.target;
              if (target !== void 0) {
                return str("NAMES", [
                  channels$2.join(","),
                  target
                ]);
              } else {
                return str("NAMES", [channels$2.join(",")]);
              }
            case /* List */
            13:
              var target$1 = param.target;
              var channels$3 = param.channels;
              if (target$1 !== void 0) {
                return str("LIST", [
                  channels$3.join(","),
                  target$1
                ]);
              } else {
                return str("LIST", [channels$3.join(",")]);
              }
            case /* Invite */
            14:
              return str("INVITE", [
                param.nickname,
                param.channel
              ]);
            case /* Kick */
            15:
              var comment$1 = param.comment;
              var nicknames = param.nicknames;
              var channels$4 = param.channels;
              if (comment$1 !== void 0) {
                return str("KICK", [
                  channels$4.join(","),
                  nicknames.join(","),
                  comment$1
                ]);
              } else {
                return str("KICK", [
                  channels$4.join(","),
                  nicknames.join(",")
                ]);
              }
            case /* Private_message */
            16:
              return str("PRIVMSG", [
                param.target,
                param.message
              ]);
            case /* Ctcp_private_message */
            17:
              return str("PRIVMSG", [
                param.target,
                Irc__Ctcp.to_string(param.message)
              ]);
            case /* Notice */
            18:
              return str("NOTICE", [
                param.target,
                param.message
              ]);
            case /* Ctcp_notice */
            19:
              return str("NOTICE", [
                param.target,
                Irc__Ctcp.to_string(param.message)
              ]);
            case /* Motd */
            20:
              var message$1 = param._0;
              if (message$1 !== void 0) {
                return str("MOTD", [message$1]);
              } else {
                return "MOTD";
              }
            case /* Lusers */
            21:
              var mask = param.mask;
              if (mask === void 0) {
                return "LUSERS";
              }
              var target$2 = param.target;
              if (target$2 !== void 0) {
                return str("LUSERS", [
                  mask,
                  target$2
                ]);
              } else {
                return str("LUSERS", [mask]);
              }
            case /* Version */
            22:
              var target$3 = param._0;
              if (target$3 !== void 0) {
                return str("VERSION", [target$3]);
              } else {
                return "VERSION";
              }
            case /* Stats */
            23:
              var query = param.query;
              if (query === void 0) {
                return "STATS";
              }
              var target$4 = param.target;
              if (target$4 !== void 0) {
                return str("STATS", [
                  query,
                  target$4
                ]);
              } else {
                return str("STATS", [query]);
              }
            case /* Links */
            24:
              var remote_server = param.remote_server;
              if (remote_server === void 0) {
                return "LINKS";
              }
              var server_mask = param.server_mask;
              if (server_mask !== void 0) {
                return str("LINKS", [
                  remote_server,
                  server_mask
                ]);
              } else {
                return str("LINKS", [remote_server]);
              }
            case /* Time */
            25:
              var target$5 = param._0;
              if (target$5 !== void 0) {
                return str("TIME", [target$5]);
              } else {
                return "TIME";
              }
            case /* Connect */
            26:
              var remote_server$1 = param.remote_server;
              var port = param.port;
              var target_server = param.target_server;
              if (remote_server$1 !== void 0) {
                return str("CONNECT", [
                  target_server,
                  port.toString(),
                  remote_server$1
                ]);
              } else {
                return str("CONNECT", [
                  target_server,
                  port.toString()
                ]);
              }
            case /* Trace */
            27:
              var target$6 = param._0;
              if (target$6 !== void 0) {
                return str("TRACE", [target$6]);
              } else {
                return "TRACE";
              }
            case /* Admin */
            28:
              var target$7 = param._0;
              if (target$7 !== void 0) {
                return str("ADMIN", [target$7]);
              } else {
                return "ADMIN";
              }
            case /* Info */
            29:
              var info = param._0;
              if (info !== void 0) {
                return str("INFO", [info]);
              } else {
                return "INFO";
              }
            case /* Servlist */
            30:
              var mask$1 = param.mask;
              if (mask$1 === void 0) {
                return "SERVLIST";
              }
              var type_ = param.type_;
              if (type_ !== void 0) {
                return str("SERVLIST", [
                  mask$1,
                  type_
                ]);
              } else {
                return str("SERVLIST", [mask$1]);
              }
            case /* Squery */
            31:
              return str("SQUERY", [
                param.service_name,
                param.text
              ]);
            case /* Who */
            32:
              var mask$2 = param.mask;
              if (mask$2 !== void 0) {
                if (param.only_operators) {
                  return str("WHO", [
                    mask$2,
                    "o"
                  ]);
                } else {
                  return str("WHO", [mask$2]);
                }
              } else {
                return "WHO";
              }
            case /* Whois */
            33:
              var target$8 = param.target;
              if (target$8 !== void 0) {
                return str("WHOIS", [
                  target$8,
                  param.masks.join(",")
                ]);
              } else {
                return str("WHOIS", [param.masks.join(",")]);
              }
            case /* Whowas */
            34:
              var count = param.count;
              var nicknames$1 = param.nicknames;
              if (count === void 0) {
                return str("WHOWAS", [nicknames$1.join(",")]);
              }
              var target$9 = param.target;
              if (target$9 !== void 0) {
                return str("WHOWAS", [
                  nicknames$1.join(","),
                  count.toString(),
                  target$9
                ]);
              } else {
                return str("WHOWAS", [
                  nicknames$1.join(","),
                  count.toString()
                ]);
              }
            case /* Kill */
            35:
              return str("KILL", [
                param.nickname,
                param.comment
              ]);
            case /* Ping */
            36:
              var server2 = param.server2;
              var server1 = param.server1;
              if (server2 !== void 0) {
                return str("PING", [
                  server1,
                  server2
                ]);
              } else {
                return str("PING", [server1]);
              }
            case /* Pong */
            37:
              var server2$1 = param.server2;
              var server1$1 = param.server1;
              if (server2$1 !== void 0) {
                return str("PONG", [
                  server1$1,
                  server2$1
                ]);
              } else {
                return str("PONG", [server1$1]);
              }
            case /* Error */
            38:
              return str("ERROR", [param._0]);
            case /* Away */
            39:
              var text = param._0;
              if (text !== void 0) {
                return str("AWAY", [text]);
              } else {
                return "AWAY";
              }
            case /* Summon */
            40:
              var target$10 = param.target;
              var user = param.user;
              if (target$10 === void 0) {
                return str("SUMMON", [user]);
              }
              var channel$1 = param.channel;
              if (channel$1 !== void 0) {
                return str("SUMMON", [
                  user,
                  target$10,
                  channel$1
                ]);
              } else {
                return str("SUMMON", [
                  user,
                  target$10
                ]);
              }
            case /* Users */
            41:
              var target$11 = param._0;
              if (target$11 !== void 0) {
                return str("USERS", [target$11]);
              } else {
                return "USERS";
              }
            case /* Wallops */
            42:
              var text$1 = param._0;
              if (text$1 !== void 0) {
                return str("WALLOPS", [text$1]);
              } else {
                return "WALLOPS";
              }
            case /* Userhost */
            43:
              return str("USERHOST", param._0);
            case /* Ison */
            44:
              return str("ISON", param._0);
            case /* Reply */
            45:
              return str(Irc__Reply.to_int(param.code).toString(), [param.target].concat(param.args));
            case /* Unknown */
            46:
              return str(param._0, param._1);
          }
        }
      }
      exports.is_channel_name = is_channel_name;
      exports.param_should_be_escaped = param_should_be_escaped;
      exports.parse = parse;
      exports.str = str;
      exports.channel_list = channel_list;
      exports.to_string = to_string;
    }
  });

  // _build/default/dist/irc/prefix.js
  var require_prefix = __commonJS({
    "_build/default/dist/irc/prefix.js"(exports) {
      "use strict";
      var Irc__Utils = require_utils();
      function to_string(param) {
        if (param.TAG === /* Server_name */
        0) {
          return param._0;
        }
        var username = param.username;
        var username$1 = username !== void 0 ? "!" + username : "";
        return param.nickname + (username$1 + ("@" + param.hostname));
      }
      function of_string(str) {
        var match = Irc__Utils.split_off("@", str);
        var hostname = match[1];
        var name = match[0];
        if (hostname === void 0) {
          return {
            TAG: (
              /* Server_name */
              0
            ),
            _0: name
          };
        }
        var match$1 = Irc__Utils.split_off("!", name);
        return {
          TAG: (
            /* Nickname */
            1
          ),
          nickname: match$1[0],
          username: match$1[1],
          hostname
        };
      }
      exports.to_string = to_string;
      exports.of_string = of_string;
    }
  });

  // _build/default/dist/node_modules/melange.js/js_dict.js
  var require_js_dict = __commonJS({
    "_build/default/dist/node_modules/melange.js/js_dict.js"(exports) {
      "use strict";
      var Caml_option = require_caml_option();
      function get(dict, k) {
        if (k in dict) {
          return Caml_option.some(dict[k]);
        }
      }
      var unsafeDeleteKey = function(dict, key) {
        delete dict[key];
      };
      function entries(dict) {
        var keys = Object.keys(dict);
        var l = keys.length;
        var values2 = new Array(l);
        for (var i = 0; i < l; ++i) {
          var key = keys[i];
          values2[i] = [
            key,
            dict[key]
          ];
        }
        return values2;
      }
      function values(dict) {
        var keys = Object.keys(dict);
        var l = keys.length;
        var values$1 = new Array(l);
        for (var i = 0; i < l; ++i) {
          values$1[i] = dict[keys[i]];
        }
        return values$1;
      }
      function fromList(entries2) {
        var dict = {};
        var _param = entries2;
        while (true) {
          var param = _param;
          if (!param) {
            return dict;
          }
          var match = param.hd;
          dict[match[0]] = match[1];
          _param = param.tl;
          continue;
        }
        ;
      }
      function fromArray(entries2) {
        var dict = {};
        var l = entries2.length;
        for (var i = 0; i < l; ++i) {
          var match = entries2[i];
          dict[match[0]] = match[1];
        }
        return dict;
      }
      function map(f, source) {
        var target = {};
        var keys = Object.keys(source);
        var l = keys.length;
        for (var i = 0; i < l; ++i) {
          var key = keys[i];
          target[key] = f(source[key]);
        }
        return target;
      }
      exports.get = get;
      exports.unsafeDeleteKey = unsafeDeleteKey;
      exports.entries = entries;
      exports.values = values;
      exports.fromList = fromList;
      exports.fromArray = fromArray;
      exports.map = map;
    }
  });

  // _build/default/dist/irc/tags.js
  var require_tags = __commonJS({
    "_build/default/dist/irc/tags.js"(exports) {
      "use strict";
      var Irc__Utils = require_utils();
      var Js__Js_dict = require_js_dict();
      function to_string(tags) {
        return Js__Js_dict.entries(tags).map(function(param) {
          var value = param[1];
          var key = param[0];
          if (value !== void 0) {
            return key + ("=" + value);
          } else {
            return key;
          }
        }).join(";");
      }
      function of_string(str) {
        return Js__Js_dict.fromArray(str.split(";").map(function(param) {
          return Irc__Utils.split_off("=", param);
        }));
      }
      exports.to_string = to_string;
      exports.of_string = of_string;
    }
  });

  // _build/default/dist/irc/message.js
  var require_message = __commonJS({
    "_build/default/dist/irc/message.js"(exports) {
      "use strict";
      var Caml_option = require_caml_option();
      var Curry = require_curry();
      var Irc__Command = require_command();
      var Irc__Prefix = require_prefix();
      var Irc__Tags = require_tags();
      var Irc__Utils = require_utils();
      function make(tags, prefix, command) {
        return {
          tags,
          prefix,
          command
        };
      }
      function parse(line) {
        var partial_arg = /\s+/;
        var split_on_whitespace = function(param) {
          return Irc__Utils.split_off_regex(partial_arg, param);
        };
        var match;
        if (line.startsWith("@")) {
          var match$1 = Curry._1(split_on_whitespace, line);
          if (match$1 !== void 0) {
            var tags = Irc__Tags.of_string(match$1[0].slice(1));
            match = [
              Caml_option.some(tags),
              match$1[1]
            ];
          } else {
            match = [
              void 0,
              line
            ];
          }
        } else {
          match = [
            void 0,
            line
          ];
        }
        var line$1 = match[1];
        var match$2;
        if (line$1.startsWith(":")) {
          var match$3 = Curry._1(split_on_whitespace, line$1);
          if (match$3 !== void 0) {
            var prefix = Irc__Prefix.of_string(match$3[0].slice(1));
            match$2 = [
              prefix,
              match$3[1]
            ];
          } else {
            match$2 = [
              void 0,
              line$1
            ];
          }
        } else {
          match$2 = [
            void 0,
            line$1
          ];
        }
        var line$2 = match$2[1];
        var match$4 = Curry._1(split_on_whitespace, line$2);
        var match$5 = match$4 !== void 0 ? [
          match$4[0],
          match$4[1]
        ] : [
          line$2,
          void 0
        ];
        var line$3 = match$5[1];
        var params;
        if (line$3 !== void 0) {
          if (line$3.startsWith(":")) {
            params = [line$3.slice(1)];
          } else {
            var match$6 = Irc__Utils.split_off(" :", line$3);
            var trailing = match$6[1];
            var params$1 = Irc__Utils.keep_some(match$6[0].split(/\s+/));
            if (trailing !== void 0) {
              var trailing$1 = trailing.slice(1);
              params$1.push(trailing$1);
              params = params$1;
            } else {
              params = params$1;
            }
          }
        } else {
          params = [];
        }
        var command = Irc__Command.parse(match$5[0], params);
        return {
          tags: match[0],
          prefix: match$2[0],
          command
        };
      }
      function to_string(param) {
        var prefix = param.prefix;
        var tags = param.tags;
        var tags$1 = tags !== void 0 ? "@" + (Irc__Tags.to_string(Caml_option.valFromOption(tags)) + " ") : "";
        var prefix$1 = prefix !== void 0 ? ":" + (Irc__Prefix.to_string(prefix) + " ") : "";
        return tags$1 + (prefix$1 + Irc__Command.to_string(param.command));
      }
      exports.make = make;
      exports.parse = parse;
      exports.to_string = to_string;
    }
  });

  // _build/default/dist/node_modules/melange.js/js_option.js
  var require_js_option = __commonJS({
    "_build/default/dist/node_modules/melange.js/js_option.js"(exports) {
      "use strict";
      var Caml_option = require_caml_option();
      function some(x) {
        return Caml_option.some(x);
      }
      function isSome(param) {
        return param !== void 0;
      }
      function isSomeValue(eq, v, x) {
        if (x !== void 0) {
          return eq(v, Caml_option.valFromOption(x));
        } else {
          return false;
        }
      }
      function isNone(param) {
        return param === void 0;
      }
      function getExn(x) {
        if (x !== void 0) {
          return Caml_option.valFromOption(x);
        }
        throw new Error("getExn");
      }
      function equal(eq, a, b) {
        if (a !== void 0) {
          if (b !== void 0) {
            return eq(Caml_option.valFromOption(a), Caml_option.valFromOption(b));
          } else {
            return false;
          }
        } else {
          return b === void 0;
        }
      }
      function andThen(f, x) {
        if (x !== void 0) {
          return f(Caml_option.valFromOption(x));
        }
      }
      function map(f, x) {
        if (x !== void 0) {
          return Caml_option.some(f(Caml_option.valFromOption(x)));
        }
      }
      function getWithDefault(a, x) {
        if (x !== void 0) {
          return Caml_option.valFromOption(x);
        } else {
          return a;
        }
      }
      function filter(f, x) {
        if (x === void 0) {
          return;
        }
        var x$1 = Caml_option.valFromOption(x);
        if (f(x$1)) {
          return Caml_option.some(x$1);
        }
      }
      function firstSome(a, b) {
        if (a !== void 0) {
          return a;
        } else if (b !== void 0) {
          return b;
        } else {
          return;
        }
      }
      var $$default = getWithDefault;
      exports.some = some;
      exports.isSome = isSome;
      exports.isSomeValue = isSomeValue;
      exports.isNone = isNone;
      exports.getExn = getExn;
      exports.equal = equal;
      exports.andThen = andThen;
      exports.map = map;
      exports.getWithDefault = getWithDefault;
      exports.default = $$default;
      exports.__esModule = true;
      exports.filter = filter;
      exports.firstSome = firstSome;
    }
  });

  // _build/default/dist/shuko.js
  var require_shuko = __commonJS({
    "_build/default/dist/shuko.js"(exports) {
      var Browser__Document = require_document();
      var Browser__Request = require_request();
      var Caml_obj = require_caml_obj();
      var Caml_option = require_caml_option();
      var Irc__Formatting = require_formatting();
      var Irc__Message = require_message();
      var Js__Js_dict = require_js_dict();
      var Js__Js_option = require_js_option();
      function assert_eq(message, expected, got) {
        if (Caml_obj.caml_notequal(expected, got)) {
          console.error("FAILED: ", message);
          console.error(expected);
          console.error(got);
        } else {
          console.log("PASSED:", message);
        }
      }
      function test(message, expected, msg) {
        assert_eq(message, expected, Irc__Message.parse(msg));
        assert_eq(message, msg, Irc__Message.to_string(expected));
      }
      test("simple message", Irc__Message.make(void 0, void 0, {
        TAG: (
          /* Private_message */
          16
        ),
        target: "test",
        message: "Trailing part!"
      }), "PRIVMSG test :Trailing part!");
      test("message without the trailing part", Irc__Message.make(void 0, void 0, {
        TAG: (
          /* Quit */
          6
        ),
        _0: "test"
      }), "QUIT test");
      test("message with only the trailing part", Irc__Message.make(void 0, void 0, {
        TAG: (
          /* Quit */
          6
        ),
        _0: "testing trailing part"
      }), "QUIT :testing trailing part");
      test("messages with a nickame", Irc__Message.make(void 0, {
        TAG: (
          /* Nickname */
          1
        ),
        nickname: "test",
        username: "user",
        hostname: "host"
      }, {
        TAG: (
          /* Private_message */
          16
        ),
        target: "test",
        message: "Still testing!"
      }), ":test!user@host PRIVMSG test :Still testing!");
      test("messages with tags", Irc__Message.make(Caml_option.some(Js__Js_dict.fromArray([
        [
          "aaa",
          "bbb"
        ],
        [
          "ccc",
          void 0
        ],
        [
          "example.com/ddd",
          "eee"
        ]
      ])), void 0, {
        TAG: (
          /* Private_message */
          16
        ),
        target: "test",
        message: "Testing with tags!"
      }), "@aaa=bbb;ccc;example.com/ddd=eee PRIVMSG test :Testing with tags!");
      function test$1(message, expected, msg) {
        assert_eq(message, expected, Irc__Formatting.parse(msg));
      }
      function test_both(message, expected, msg) {
        assert_eq(message, expected, Irc__Formatting.parse(msg));
        assert_eq(message, msg, Irc__Formatting.to_string(expected));
      }
      test_both("no formatting", [{
        NAME: "String",
        VAL: "no formatting here my dudes"
      }], "no formatting here my dudes");
      test_both("some formatting", [
        {
          NAME: "String",
          VAL: "pretty "
        },
        "Bold",
        {
          NAME: "String",
          VAL: "bold"
        },
        "Bold",
        {
          NAME: "String",
          VAL: " claim there"
        },
        "Italics",
        {
          NAME: "String",
          VAL: "!"
        }
      ], "pretty bold claim there!");
      test_both("only formatting", [
        "Bold",
        "Italics",
        "Underline",
        "Strikethrough",
        "Monospace",
        "Reverse_color",
        "Reset",
        {
          NAME: "String",
          VAL: "oof"
        }
      ], "oof");
      test_both("reset color", [
        {
          NAME: "String",
          VAL: "testing"
        },
        {
          NAME: "Color",
          VAL: "Reset"
        },
        {
          NAME: "String",
          VAL: ",12reset"
        },
        {
          NAME: "Hex_color",
          VAL: "Reset"
        },
        {
          NAME: "String",
          VAL: ",12color"
        }
      ], "testing,12reset,12color");
      test$1("parsing color", [
        {
          NAME: "Color",
          VAL: {
            NAME: "Fg_bg",
            VAL: [
              "White",
              "White"
            ]
          }
        },
        {
          NAME: "Color",
          VAL: {
            NAME: "Fg_bg",
            VAL: [
              "White",
              "White"
            ]
          }
        },
        {
          NAME: "Color",
          VAL: {
            NAME: "Fg_bg",
            VAL: [
              "Default",
              "Black"
            ]
          }
        },
        {
          NAME: "Color",
          VAL: {
            NAME: "Fg",
            VAL: "Pink"
          }
        },
        {
          NAME: "String",
          VAL: ",ayy"
        }
      ], "0,000,0099,113,ayy");
      var $$document = window.document;
      var div = Browser__Document.create_element(void 0, "div", $$document);
      var root = Js__Js_option.getExn(Caml_option.nullable_to_opt($$document.getElementById("shuko")));
      root.appendChild(div);
      console.log(Array.from(div.getClientRects()));
      var h = new Headers([[
        "tfw",
        "gf"
      ]]);
      h.set("ayy", "lmao");
      Array.from(h).forEach(function(param) {
        console.log(param[0]);
      });
      var r = Browser__Request.create("ayy", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
      r.clone();
      var url_search_params = new URLSearchParams();
      url_search_params.set("ayy", "lmao");
      Array.from(url_search_params).forEach(function(param) {
        console.log(param[0]);
      });
      var ws = new WebSocket("ws://localhost:1234", void 0);
      ws.addEventListener("_open", function(_msg) {
        ws.send("");
      });
      exports.assert_eq = assert_eq;
      exports.$$document = $$document;
    }
  });
  require_shuko();
})();
