"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // _build/default/dist/browser/document_or_shadow_root_mixin.js
  var require_document_or_shadow_root_mixin = __commonJS({
    "_build/default/dist/browser/document_or_shadow_root_mixin.js"(exports, module) {
      "use strict";
      function Make(T) {
        return {};
      }
      module.exports = {
        Make
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml.js
  var require_caml = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml.js"(exports, module) {
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
        const other_hi = param$1[0];
        const hi = param[0];
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
      module.exports = {
        caml_int_compare,
        caml_bool_compare,
        caml_float_compare,
        caml_string_compare,
        caml_bool_min,
        caml_int_min,
        caml_float_min,
        caml_string_min,
        caml_int32_min,
        caml_bool_max,
        caml_int_max,
        caml_float_max,
        caml_string_max,
        caml_int32_max,
        i64_eq,
        i64_neq,
        i64_lt,
        i64_gt,
        i64_le,
        i64_ge,
        i64_min,
        i64_max
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_exceptions.js
  var require_caml_exceptions = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_exceptions.js"(exports, module) {
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
          return typeof e.MEL_EXN_ID === "string";
        }
      }
      function caml_exn_slot_name(x) {
        return x.MEL_EXN_ID;
      }
      var caml_exn_slot_id = function(x) {
        if (x.MEL_EXN_ID != null) {
          var parts = x.MEL_EXN_ID.split("/");
          if (parts.length > 1) {
            return Number(parts[parts.length - 1]);
          } else {
            return -1;
          }
        } else {
          return -1;
        }
      };
      module.exports = {
        id,
        create,
        caml_is_extension,
        caml_exn_slot_name,
        caml_exn_slot_id
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_option.js
  var require_caml_option = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_option.js"(exports, module) {
      "use strict";
      function isNested(x) {
        return x.MEL_PRIVATE_NESTED_SOME_NONE !== void 0;
      }
      function some(x) {
        if (x === void 0) {
          return {
            MEL_PRIVATE_NESTED_SOME_NONE: 0
          };
        } else if (x !== null && x.MEL_PRIVATE_NESTED_SOME_NONE !== void 0) {
          return {
            MEL_PRIVATE_NESTED_SOME_NONE: x.MEL_PRIVATE_NESTED_SOME_NONE + 1 | 0
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
        if (!(x !== null && x.MEL_PRIVATE_NESTED_SOME_NONE !== void 0)) {
          return x;
        }
        const depth = x.MEL_PRIVATE_NESTED_SOME_NONE;
        if (depth === 0) {
          return;
        } else {
          return {
            MEL_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
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
      module.exports = {
        nullable_to_opt,
        undefined_to_opt,
        null_to_opt,
        valFromOption,
        some,
        isNested,
        option_get,
        option_unwrap
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_js_exceptions.js
  var require_caml_js_exceptions = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_js_exceptions.js"(exports, module) {
      "use strict";
      var Caml_exceptions = require_caml_exceptions();
      var Caml_option = require_caml_option();
      var $$Error = /* @__PURE__ */ Caml_exceptions.create("Caml_js_exceptions.Error");
      function internalToOCamlException(e) {
        if (!(e == null) && Caml_exceptions.caml_is_extension(e.cause)) {
          return e.cause;
        } else {
          return {
            MEL_EXN_ID: $$Error,
            _1: e
          };
        }
      }
      function caml_as_js_exn(exn) {
        if (exn.MEL_EXN_ID === $$Error) {
          return Caml_option.some(exn._1);
        }
      }
      var MelangeError = function MelangeError2(message, cause) {
        var _this = Error.call(this, message, { cause });
        if (_this.cause == null) {
          Object.defineProperty(_this, "cause", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: cause
          });
        }
        Object.defineProperty(_this, "name", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: "MelangeError"
        });
        return _this;
      };
      MelangeError.prototype = Error.prototype;
      module.exports = {
        $$Error,
        internalToOCamlException,
        caml_as_js_exn,
        MelangeError
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_int64.js
  var require_caml_int64 = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_int64.js"(exports, module) {
      "use strict";
      var Caml = require_caml();
      var Caml_js_exceptions = require_caml_js_exceptions();
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
        let x_lo = param[1];
        let x_hi = param[0];
        const lo = x_lo + 1 | 0;
        return [
          x_hi + (lo === 0 ? 1 : 0) | 0,
          lo >>> 0
        ];
      }
      function neg(param) {
        const other_lo = (param[1] ^ -1) + 1 | 0;
        return [
          (param[0] ^ -1) + (other_lo === 0 ? 1 : 0) | 0,
          other_lo >>> 0
        ];
      }
      function add_aux(param, y_lo, y_hi) {
        const x_lo = param[1];
        const lo = x_lo + y_lo | 0;
        const overflow = neg_signed(x_lo) && (neg_signed(y_lo) || non_neg_signed(lo)) || neg_signed(y_lo) && non_neg_signed(lo) ? 1 : 0;
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
          return Caml.i64_eq(x, y);
        } else {
          return false;
        }
      }
      function equal_undefined(x, y) {
        if (y !== void 0) {
          return Caml.i64_eq(x, y);
        } else {
          return false;
        }
      }
      function equal_nullable(x, y) {
        if (y == null) {
          return false;
        } else {
          return Caml.i64_eq(x, y);
        }
      }
      function sub_aux(x, lo, hi) {
        const y_lo = (lo ^ -1) + 1 >>> 0;
        const y_hi = (hi ^ -1) + (y_lo === 0 ? 1 : 0) | 0;
        return add_aux(x, y_lo, y_hi);
      }
      function sub(self2, param) {
        return sub_aux(self2, param[1], param[0]);
      }
      function lsl_(x, numBits) {
        if (numBits === 0) {
          return x;
        }
        const lo = x[1];
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
        const hi = x[0];
        const offset = numBits - 32 | 0;
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
        const hi = x[0];
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
          const other = _other;
          const $$this = _this;
          let lo;
          const this_hi = $$this[0];
          let exit = 0;
          let exit$1 = 0;
          let exit$2 = 0;
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
            const other_hi = other[0];
            const lo$1 = $$this[1];
            let exit$3 = 0;
            if (other_hi !== -2147483648 || other[1] !== 0) {
              exit$3 = 3;
            } else {
              lo = lo$1;
            }
            if (exit$3 === 3) {
              const other_lo = other[1];
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
              const a48 = this_hi >>> 16;
              const a32 = this_hi & 65535;
              const a16 = lo$1 >>> 16;
              const a00 = lo$1 & 65535;
              const b48 = other_hi >>> 16;
              const b32 = other_hi & 65535;
              const b16 = other_lo >>> 16;
              const b00 = other_lo & 65535;
              let c48 = 0;
              let c32 = 0;
              let c16 = 0;
              const c00 = a00 * b00;
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
        const hi = x / 4294967296 | 0;
        const lo = x % 4294967296 | 0;
        return [
          hi,
          lo >>> 0
        ];
      }
      function isSafeInteger(param) {
        const hi = param[0];
        const top11Bits = hi >> 21;
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
          if (Caml.i64_eq(self2, min_int)) {
            return "-9223372036854775808";
          } else {
            return "-" + to_string(neg(self2));
          }
        }
        const approx_div1 = of_float(Math.floor(to_float(self2) / 10));
        const lo = approx_div1[1];
        const hi = approx_div1[0];
        const match = sub_aux(sub_aux(self2, lo << 3, lo >>> 29 | hi << 3), lo << 1, lo >>> 31 | hi << 1);
        const rem_lo = match[1];
        const rem_hi = match[0];
        if (rem_lo === 0 && rem_hi === 0) {
          return to_string(approx_div1) + "0";
        }
        if (rem_hi < 0) {
          const rem_lo$1 = (rem_lo ^ -1) + 1 >>> 0;
          const delta = Math.ceil(rem_lo$1 / 10);
          const remainder = 10 * delta - rem_lo$1;
          return to_string(sub_aux(approx_div1, delta | 0, 0)) + String(remainder | 0);
        }
        const delta$1 = Math.floor(rem_lo / 10);
        const remainder$1 = rem_lo - 10 * delta$1;
        return to_string(add_aux(approx_div1, delta$1 | 0, 0)) + String(remainder$1 | 0);
      }
      function div(_self, _other) {
        while (true) {
          const other = _other;
          const self2 = _self;
          let exit = 0;
          if (other[0] !== 0 || other[1] !== 0) {
            exit = 1;
          } else {
            throw new Caml_js_exceptions.MelangeError("Division_by_zero", {
              MEL_EXN_ID: "Division_by_zero"
            });
          }
          if (exit === 1) {
            const self_hi = self2[0];
            let exit$1 = 0;
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
              if (Caml.i64_eq(other, one) || Caml.i64_eq(other, neg_one)) {
                return self2;
              }
              if (Caml.i64_eq(other, min_int)) {
                return one;
              }
              const half_this = asr_(self2, 1);
              const approx = lsl_(div(half_this, other), 1);
              let exit$2 = 0;
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
                const rem = sub(self2, mul(other, approx));
                return add(approx, div(rem, other));
              }
            }
            if (exit$1 === 2) {
              const other_hi = other[0];
              let exit$3 = 0;
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
                let res = zero;
                let rem$1 = self2;
                while (Caml.i64_ge(rem$1, other)) {
                  const b = Math.floor(to_float(rem$1) / to_float(other));
                  let approx$1 = 1 > b ? 1 : b;
                  const log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
                  const delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
                  let approxRes = of_float(approx$1);
                  let approxRem = mul(approxRes, other);
                  while (approxRem[0] < 0 || Caml.i64_gt(approxRem, rem$1)) {
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
        const quotient = div(self2, other);
        return [
          quotient,
          sub(self2, mul(quotient, other))
        ];
      }
      function compare(self2, other) {
        const y = other[0];
        const x = self2[0];
        const v = x < y ? -1 : x === y ? 0 : 1;
        if (v !== 0) {
          return v;
        }
        const y$1 = other[1];
        const x$1 = self2[1];
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
        const x_lo = x[1];
        const x_hi = x[0];
        const aux = function(v) {
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
        const lo = aux(x_lo);
        const pad = 8 - lo.length | 0;
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
        const match = function(x2) {
          return new Int32Array(new Float64Array([x2]).buffer);
        }(x);
        return [
          match[1],
          match[0] >>> 0
        ];
      }
      module.exports = {
        mk,
        succ,
        min_int,
        max_int,
        one,
        zero,
        neg_one,
        of_int32,
        to_int32,
        add,
        neg,
        sub,
        lsl_,
        lsr_,
        asr_,
        is_zero,
        mul,
        xor,
        or_,
        and_,
        equal_null,
        equal_undefined,
        equal_nullable,
        to_float,
        of_float,
        div,
        mod_,
        compare,
        float_of_bits,
        bits_of_float,
        div_mod,
        to_hex,
        discard_sign,
        to_string
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_bytes.js
  var require_caml_bytes = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_bytes.js"(exports, module) {
      "use strict";
      var Caml_int64 = require_caml_int64();
      var Caml_js_exceptions = require_caml_js_exceptions();
      function set(s, i, ch) {
        if (i < 0 || i >= s.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        s[i] = ch;
      }
      function get(s, i) {
        if (i < 0 || i >= s.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        return s[i];
      }
      function caml_fill_bytes(s, i, l, c) {
        if (l <= 0) {
          return;
        }
        for (let k = i, k_finish = l + i | 0; k < k_finish; ++k) {
          s[k] = c;
        }
      }
      function caml_create_bytes(len) {
        if (len < 0) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "String.create"
          });
        }
        const result = new Array(len);
        for (let i = 0; i < len; ++i) {
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
            const range_a = (s1.length - i2 | 0) - 1 | 0;
            const range_b = len - 1 | 0;
            const range = range_a > range_b ? range_b : range_a;
            for (let j = range; j >= 0; --j) {
              s1[i2 + j | 0] = s1[i1 + j | 0];
            }
            return;
          }
          if (i1 <= i2) {
            return;
          }
          const range_a$1 = (s1.length - i1 | 0) - 1 | 0;
          const range_b$1 = len - 1 | 0;
          const range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
          for (let k = 0; k <= range$1; ++k) {
            s1[i2 + k | 0] = s1[i1 + k | 0];
          }
          return;
        }
        const off1 = s1.length - i1 | 0;
        if (len <= off1) {
          for (let i = 0; i < len; ++i) {
            s2[i2 + i | 0] = s1[i1 + i | 0];
          }
          return;
        }
        for (let i$1 = 0; i$1 < off1; ++i$1) {
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for (let i$2 = off1; i$2 < len; ++i$2) {
          s2[i2 + i$2 | 0] = /* '\000' */
          0;
        }
      }
      function bytes_to_string(a) {
        let i = 0;
        let len = a.length;
        let s = "";
        let s_len = len;
        if (i === 0 && len <= 4096 && len === a.length) {
          return String.fromCharCode.apply(null, a);
        }
        let offset = 0;
        while (s_len > 0) {
          const next = s_len < 1024 ? s_len : 1024;
          const tmp_bytes = new Array(next);
          for (let k = 0; k < next; ++k) {
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
        const off1 = s1.length - i1 | 0;
        if (len <= off1) {
          for (let i = 0; i < len; ++i) {
            s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
          }
          return;
        }
        for (let i$1 = 0; i$1 < off1; ++i$1) {
          s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
        }
        for (let i$2 = off1; i$2 < len; ++i$2) {
          s2[i2 + i$2 | 0] = /* '\000' */
          0;
        }
      }
      function bytes_of_string(s) {
        const len = s.length;
        const res = new Array(len);
        for (let i = 0; i < len; ++i) {
          res[i] = s.charCodeAt(i);
        }
        return res;
      }
      function caml_bytes_compare_aux(s1, s2, _off, len, def) {
        while (true) {
          const off = _off;
          if (off >= len) {
            return def;
          }
          const a = s1[off];
          const b = s2[off];
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
        const len1 = s1.length;
        const len2 = s2.length;
        if (len1 === len2) {
          return caml_bytes_compare_aux(s1, s2, 0, len1, 0);
        } else if (len1 < len2) {
          return caml_bytes_compare_aux(s1, s2, 0, len1, -1);
        } else {
          return caml_bytes_compare_aux(s1, s2, 0, len2, 1);
        }
      }
      function caml_bytes_equal(s1, s2) {
        const len1 = s1.length;
        const len2 = s2.length;
        if (len1 === len2) {
          let _off = 0;
          while (true) {
            const off = _off;
            if (off === len1) {
              return true;
            }
            const a = s1[off];
            const b = s2[off];
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
        return Caml_int64.or_(Caml_int64.or_(Caml_int64.or_(Caml_int64.or_(Caml_int64.or_(Caml_int64.or_(Caml_int64.or_(Caml_int64.lsl_(Caml_int64.and_(x, [
          0,
          255
        ]), 56), Caml_int64.lsl_(Caml_int64.and_(x, [
          0,
          65280
        ]), 40)), Caml_int64.lsl_(Caml_int64.and_(x, [
          0,
          16711680
        ]), 24)), Caml_int64.lsl_(Caml_int64.and_(x, [
          0,
          4278190080
        ]), 8)), Caml_int64.lsr_(Caml_int64.and_(x, [
          255,
          0
        ]), 8)), Caml_int64.lsr_(Caml_int64.and_(x, [
          65280,
          0
        ]), 24)), Caml_int64.lsr_(Caml_int64.and_(x, [
          16711680,
          0
        ]), 40)), Caml_int64.lsr_(Caml_int64.and_(x, [
          -16777216,
          0
        ]), 56));
      }
      function get16u(str, idx) {
        const b1 = str[idx];
        const b2 = str[idx + 1 | 0];
        return b2 << 8 | b1;
      }
      function get16(str, idx) {
        if (idx < 0 || (idx + 1 | 0) >= str.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        return get16u(str, idx);
      }
      function get32(str, idx) {
        if (idx < 0 || (idx + 3 | 0) >= str.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        const b1 = str[idx];
        const b2 = str[idx + 1 | 0];
        const b3 = str[idx + 2 | 0];
        const b4 = str[idx + 3 | 0];
        return b4 << 24 | b3 << 16 | b2 << 8 | b1;
      }
      function get64(str, idx) {
        if (idx < 0 || (idx + 7 | 0) >= str.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        const b1 = str[idx];
        const b2 = str[idx + 1 | 0];
        const b3 = str[idx + 2 | 0];
        const b4 = str[idx + 3 | 0];
        const b5 = str[idx + 4 | 0];
        const b6 = str[idx + 5 | 0];
        const b7 = str[idx + 6 | 0];
        const b8 = str[idx + 7 | 0];
        return Caml_int64.or_(Caml_int64.lsl_(Caml_int64.or_(Caml_int64.lsl_(Caml_int64.or_(Caml_int64.lsl_(Caml_int64.or_(Caml_int64.lsl_(Caml_int64.or_(Caml_int64.lsl_(Caml_int64.or_(Caml_int64.lsl_(Caml_int64.or_(Caml_int64.lsl_(Caml_int64.of_int32(b8), 56), Caml_int64.of_int32(b7)), 48), Caml_int64.of_int32(b6)), 40), Caml_int64.of_int32(b5)), 32), Caml_int64.of_int32(b4)), 24), Caml_int64.of_int32(b3)), 16), Caml_int64.of_int32(b2)), 8), Caml_int64.of_int32(b1));
      }
      function set16u(b, idx, newval) {
        const b2 = 255 & newval >>> 8;
        const b1 = 255 & newval;
        b[idx] = b1;
        b[idx + 1 | 0] = b2;
      }
      function set16(b, idx, newval) {
        if (idx < 0 || (idx + 1 | 0) >= b.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        set16u(b, idx, newval);
      }
      function set32u(str, idx, newval) {
        const b4 = 255 & newval >>> 24;
        const b3 = 255 & newval >>> 16;
        const b2 = 255 & newval >>> 8;
        const b1 = 255 & newval;
        str[idx] = b1;
        str[idx + 1 | 0] = b2;
        str[idx + 2 | 0] = b3;
        str[idx + 3 | 0] = b4;
      }
      function set32(str, idx, newval) {
        if (idx < 0 || (idx + 3 | 0) >= str.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        set32u(str, idx, newval);
      }
      function set64u(str, idx, newval) {
        const x = Caml_int64.lsr_(newval, 56);
        const b8 = 255 & (x[1] | 0);
        const x$1 = Caml_int64.lsr_(newval, 48);
        const b7 = 255 & (x$1[1] | 0);
        const x$2 = Caml_int64.lsr_(newval, 40);
        const b6 = 255 & (x$2[1] | 0);
        const x$3 = Caml_int64.lsr_(newval, 32);
        const b5 = 255 & (x$3[1] | 0);
        const x$4 = Caml_int64.lsr_(newval, 24);
        const b4 = 255 & (x$4[1] | 0);
        const x$5 = Caml_int64.lsr_(newval, 16);
        const b3 = 255 & (x$5[1] | 0);
        const x$6 = Caml_int64.lsr_(newval, 8);
        const b2 = 255 & (x$6[1] | 0);
        const b1 = 255 & (newval[1] | 0);
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
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        set64u(str, idx, newval);
      }
      module.exports = {
        caml_create_bytes,
        caml_fill_bytes,
        get,
        set,
        bytes_to_string,
        caml_blit_bytes,
        caml_blit_string,
        bytes_of_string,
        caml_bytes_compare,
        caml_bytes_greaterthan,
        caml_bytes_greaterequal,
        caml_bytes_lessthan,
        caml_bytes_lessequal,
        caml_bytes_equal,
        bswap16,
        bswap32,
        bswap64,
        get16u,
        get16,
        get32,
        get64,
        set16u,
        set16,
        set32u,
        set32,
        set64u,
        set64
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_external_polyfill.js
  var require_caml_external_polyfill = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_external_polyfill.js"(exports, module) {
      "use strict";
      var getGlobalThis = function() {
        if (typeof globalThis !== "undefined") return globalThis;
        if (typeof self !== "undefined") return self;
        if (typeof window !== "undefined") return window;
        if (typeof global !== "undefined") return global;
        if (typeof this !== "undefined") return this;
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
      module.exports = {
        getGlobalThis,
        resolve,
        register
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_format.js
  var require_caml_format = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_format.js"(exports, module) {
      "use strict";
      var Caml = require_caml();
      var Caml_int64 = require_caml_int64();
      var Caml_js_exceptions = require_caml_js_exceptions();
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
        let sign = 1;
        let base = (
          /* Dec */
          2
        );
        let i = 0;
        const match = s.charCodeAt(i);
        switch (match) {
          case 43:
            i = i + 1 | 0;
            break;
          case 45:
            sign = -1;
            i = i + 1 | 0;
            break;
        }
        if (s[i] === "0") {
          const match$1 = s.charCodeAt(i + 1 | 0);
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
        const match = parse_sign_and_base(s);
        const i = match[0];
        const base = int_of_string_base(match[2]);
        const threshold = 4294967295;
        const len = s.length;
        const c = i < len ? s.charCodeAt(i) : (
          /* '\000' */
          0
        );
        const d = parse_digit(c);
        if (d < 0 || d >= base) {
          throw new Caml_js_exceptions.MelangeError("Failure", {
            MEL_EXN_ID: "Failure",
            _1: "int_of_string"
          });
        }
        const aux = function(_acc, _k) {
          while (true) {
            const k = _k;
            const acc = _acc;
            if (k === len) {
              return acc;
            }
            const a = s.charCodeAt(k);
            if (a === /* '_' */
            95) {
              _k = k + 1 | 0;
              continue;
            }
            const v = parse_digit(a);
            if (v < 0 || v >= base) {
              throw new Caml_js_exceptions.MelangeError("Failure", {
                MEL_EXN_ID: "Failure",
                _1: "int_of_string"
              });
            }
            const acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw new Caml_js_exceptions.MelangeError("Failure", {
                MEL_EXN_ID: "Failure",
                _1: "int_of_string"
              });
            }
            _k = k + 1 | 0;
            _acc = acc$1;
            continue;
          }
          ;
        };
        const res = match[1] * aux(d, i + 1 | 0);
        const or_res = res | 0;
        if (base === 10 && res !== or_res) {
          throw new Caml_js_exceptions.MelangeError("Failure", {
            MEL_EXN_ID: "Failure",
            _1: "int_of_string"
          });
        }
        return or_res;
      }
      function caml_int64_of_string(s) {
        const match = parse_sign_and_base(s);
        const hbase = match[2];
        const i = match[0];
        const base = Caml_int64.of_int32(int_of_string_base(hbase));
        const sign = Caml_int64.of_int32(match[1]);
        let threshold;
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
        const len = s.length;
        const c = i < len ? s.charCodeAt(i) : (
          /* '\000' */
          0
        );
        const d = Caml_int64.of_int32(parse_digit(c));
        if (Caml.i64_lt(d, Caml_int64.zero) || Caml.i64_ge(d, base)) {
          throw new Caml_js_exceptions.MelangeError("Failure", {
            MEL_EXN_ID: "Failure",
            _1: "int64_of_string"
          });
        }
        const aux = function(_acc, _k) {
          while (true) {
            const k = _k;
            const acc = _acc;
            if (k === len) {
              return acc;
            }
            const a = s.charCodeAt(k);
            if (a === /* '_' */
            95) {
              _k = k + 1 | 0;
              continue;
            }
            const v = Caml_int64.of_int32(parse_digit(a));
            if (Caml.i64_lt(v, Caml_int64.zero) || Caml.i64_ge(v, base) || Caml.i64_gt(acc, threshold)) {
              throw new Caml_js_exceptions.MelangeError("Failure", {
                MEL_EXN_ID: "Failure",
                _1: "int64_of_string"
              });
            }
            const acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue;
          }
          ;
        };
        const res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
        const or_res = Caml_int64.or_(res, Caml_int64.zero);
        if (Caml.i64_eq(base, [
          0,
          10
        ]) && Caml.i64_neq(res, or_res)) {
          throw new Caml_js_exceptions.MelangeError("Failure", {
            MEL_EXN_ID: "Failure",
            _1: "int64_of_string"
          });
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
        const len = fmt.length;
        if (len > 31) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "format_int: format too long"
          });
        }
        let f = {
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
        let _i = 0;
        while (true) {
          const i = _i;
          if (i >= len) {
            return f;
          }
          const c = fmt.charCodeAt(i);
          let exit = 0;
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
                let j = i + 1 | 0;
                while (function() {
                  const w = fmt.charCodeAt(j) - /* '0' */
                  48 | 0;
                  return w >= 0 && w <= 9;
                }()) {
                  f.prec = (Math.imul(f.prec, 10) + fmt.charCodeAt(j) | 0) - /* '0' */
                  48 | 0;
                  j = j + 1 | 0;
                }
                ;
                _i = j;
                continue;
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
              let j$1 = i;
              while (function() {
                const w = fmt.charCodeAt(j$1) - /* '0' */
                48 | 0;
                return w >= 0 && w <= 9;
              }()) {
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
        const justify = config.justify;
        const signstyle = config.signstyle;
        const filter = config.filter;
        const alternate = config.alternate;
        const base = config.base;
        const signedconv = config.signedconv;
        const width = config.width;
        const uppercase = config.uppercase;
        const sign = config.sign;
        let len = rawbuffer.length;
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
        let buffer = "";
        if (justify === "+" && filter === " ") {
          for (let _for = len; _for < width; ++_for) {
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
          for (let _for$1 = len; _for$1 < width; ++_for$1) {
            buffer = buffer + filter;
          }
        }
        buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
        if (justify === "-") {
          for (let _for$2 = len; _for$2 < width; ++_for$2) {
            buffer = buffer + " ";
          }
        }
        return buffer;
      }
      function caml_format_int(fmt, i) {
        if (fmt === "%d") {
          return String(i);
        }
        const f = parse_format(fmt);
        const i$1 = i < 0 ? f.signedconv ? (f.sign = -1, -i >>> 0) : i >>> 0 : i;
        let s = i$1.toString(int_of_base(f.base));
        if (f.prec >= 0) {
          f.filter = " ";
          const n = f.prec - s.length | 0;
          if (n > 0) {
            s = "0".repeat(n) + s;
          }
        }
        return finish_formatting(f, s);
      }
      function dec_of_pos_int64(x) {
        if (!Caml.i64_lt(x, Caml_int64.zero)) {
          return Caml_int64.to_string(x);
        }
        const wbase = [
          0,
          10
        ];
        const y = Caml_int64.discard_sign(x);
        const match = Caml_int64.div_mod(y, wbase);
        const match$1 = Caml_int64.div_mod(Caml_int64.add([
          0,
          8
        ], match[1]), wbase);
        const quotient = Caml_int64.add(Caml_int64.add([
          214748364,
          3435973836
        ], match[0]), match$1[0]);
        return Caml_int64.to_string(quotient) + "0123456789"[Caml_int64.to_int32(match$1[1])];
      }
      function oct_of_int64(x) {
        let s = "";
        const wbase = [
          0,
          8
        ];
        const cvtbl = "01234567";
        if (Caml.i64_lt(x, Caml_int64.zero)) {
          const y = Caml_int64.discard_sign(x);
          const match = Caml_int64.div_mod(y, wbase);
          let quotient = Caml_int64.add([
            268435456,
            0
          ], match[0]);
          let modulus = match[1];
          s = cvtbl[Caml_int64.to_int32(modulus)] + s;
          while (Caml.i64_neq(quotient, Caml_int64.zero)) {
            const match$1 = Caml_int64.div_mod(quotient, wbase);
            quotient = match$1[0];
            modulus = match$1[1];
            s = cvtbl[Caml_int64.to_int32(modulus)] + s;
          }
          ;
        } else {
          const match$2 = Caml_int64.div_mod(x, wbase);
          let quotient$1 = match$2[0];
          let modulus$1 = match$2[1];
          s = cvtbl[Caml_int64.to_int32(modulus$1)] + s;
          while (Caml.i64_neq(quotient$1, Caml_int64.zero)) {
            const match$3 = Caml_int64.div_mod(quotient$1, wbase);
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
          return Caml_int64.to_string(x);
        }
        const f = parse_format(fmt);
        const x$1 = f.signedconv && Caml.i64_lt(x, Caml_int64.zero) ? (f.sign = -1, Caml_int64.neg(x)) : x;
        const match = f.base;
        let s;
        switch (match) {
          case /* Oct */
          0:
            s = oct_of_int64(x$1);
            break;
          case /* Hex */
          1:
            s = Caml_int64.to_hex(x$1);
            break;
          case /* Dec */
          2:
            s = dec_of_pos_int64(x$1);
            break;
        }
        let fill_s;
        if (f.prec >= 0) {
          f.filter = " ";
          const n = f.prec - s.length | 0;
          fill_s = n > 0 ? "0".repeat(n) + s : s;
        } else {
          fill_s = s;
        }
        return finish_formatting(f, fill_s);
      }
      function caml_format_float(fmt, x) {
        const f = parse_format(fmt);
        const prec = f.prec < 0 ? 6 : f.prec;
        const x$1 = x < 0 ? (f.sign = -1, -x) : x;
        let s = "";
        if (isNaN(x$1)) {
          s = "nan";
          f.filter = " ";
        } else if (isFinite(x$1)) {
          const match = f.conv;
          switch (match) {
            case "e":
              s = x$1.toExponential(prec);
              const i = s.length;
              if (s[i - 3 | 0] === "e") {
                s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
              }
              break;
            case "f":
              s = x$1.toFixed(prec);
              break;
            case "g":
              const prec$1 = prec !== 0 ? prec : 1;
              s = x$1.toExponential(prec$1 - 1 | 0);
              const j = s.indexOf("e");
              const exp = Number(s.slice(j + 1 | 0)) | 0;
              if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
                let i$1 = j - 1 | 0;
                while (s[i$1] === "0") {
                  i$1 = i$1 - 1 | 0;
                }
                ;
                if (s[i$1] === ".") {
                  i$1 = i$1 - 1 | 0;
                }
                s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
                const i$2 = s.length;
                if (s[i$2 - 3 | 0] === "e") {
                  s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
                }
              } else {
                let p = prec$1;
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
                  let k = s.length - 1 | 0;
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
          }
        } else {
          s = "inf";
          f.filter = " ";
        }
        return finish_formatting(f, s);
      }
      var caml_hexstring_of_float = function(x, prec, style) {
        if (!isFinite(x)) {
          if (isNaN(x)) return "nan";
          return x > 0 ? "infinity" : "-infinity";
        }
        var sign = x == 0 && 1 / x == -Infinity ? 1 : x >= 0 ? 0 : 1;
        if (sign) x = -x;
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
        if (sign) sign_str = "-";
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
        throw new Error(exn.MEL_EXN_ID, { cause: exn });
      };
      function caml_float_of_string(s) {
        return float_of_string(s, {
          MEL_EXN_ID: "Failure",
          _1: "float_of_string"
        });
      }
      var caml_nativeint_format = caml_format_int;
      var caml_int32_format = caml_format_int;
      var caml_int32_of_string = caml_int_of_string;
      var caml_nativeint_of_string = caml_int_of_string;
      module.exports = {
        caml_format_float,
        caml_hexstring_of_float,
        caml_format_int,
        caml_nativeint_format,
        caml_int32_format,
        caml_float_of_string,
        caml_int64_format,
        caml_int_of_string,
        caml_int32_of_string,
        caml_int64_of_string,
        caml_nativeint_of_string
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_io.js
  var require_caml_io = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_io.js"(exports, module) {
      "use strict";
      var stdout = {
        buffer: "",
        output: function(param, s) {
          const v = s.length - 1 | 0;
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
          const v = s.length - 1 | 0;
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
        const str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
        if (typeof process !== "undefined" && process.stdout && process.stdout.write && oc === stdout) {
          return process.stdout.write(str$1);
        }
        const id = str$1.lastIndexOf("\n");
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
      module.exports = {
        stdin,
        stdout,
        stderr,
        caml_ml_flush,
        caml_ml_output,
        caml_ml_output_char,
        caml_ml_out_channels_list
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_string.js
  var require_caml_string = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_string.js"(exports, module) {
      "use strict";
      var Caml_js_exceptions = require_caml_js_exceptions();
      function get(s, i) {
        if (i >= s.length || i < 0) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        return s.charCodeAt(i);
      }
      function make(n, ch) {
        return String.fromCharCode(ch).repeat(n);
      }
      module.exports = {
        get,
        make
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_sys.js
  var require_caml_sys = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_sys.js"(exports, module) {
      "use strict";
      var Caml_js_exceptions = require_caml_js_exceptions();
      function caml_sys_getenv(s) {
        if (typeof process === "undefined" || process.env === void 0) {
          throw new Caml_js_exceptions.MelangeError("Not_found", {
            MEL_EXN_ID: "Not_found"
          });
        }
        const x = process.env[s];
        if (x !== void 0) {
          return x;
        }
        throw new Caml_js_exceptions.MelangeError("Not_found", {
          MEL_EXN_ID: "Not_found"
        });
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
        const argv = process.argv;
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
        const argv = process.argv;
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
        throw new Caml_js_exceptions.MelangeError("Failure", {
          MEL_EXN_ID: "Failure",
          _1: "caml_sys_is_directory not implemented"
        });
      }
      function caml_sys_file_exists(_s) {
        throw new Caml_js_exceptions.MelangeError("Failure", {
          MEL_EXN_ID: "Failure",
          _1: "caml_sys_file_exists not implemented"
        });
      }
      module.exports = {
        caml_sys_getenv,
        caml_sys_time,
        os_type,
        caml_sys_system_command,
        caml_sys_getcwd,
        caml_sys_executable_name,
        caml_sys_argv,
        caml_sys_exit,
        caml_sys_is_directory,
        caml_sys_file_exists
      };
    }
  });

  // _build/default/dist/node_modules/melange/camlinternalFormatBasics.js
  var require_camlinternalFormatBasics = __commonJS({
    "_build/default/dist/node_modules/melange/camlinternalFormatBasics.js"(exports, module) {
      "use strict";
      function erase_rel(rest) {
        if (
          /* tag */
          typeof rest === "number" || typeof rest === "string"
        ) {
          return (
            /* End_of_fmtty */
            0
          );
        }
        switch (rest.TAG) {
          case /* Char_ty */
          0:
            return {
              TAG: (
                /* Char_ty */
                0
              ),
              _0: erase_rel(rest._0)
            };
          case /* String_ty */
          1:
            return {
              TAG: (
                /* String_ty */
                1
              ),
              _0: erase_rel(rest._0)
            };
          case /* Int_ty */
          2:
            return {
              TAG: (
                /* Int_ty */
                2
              ),
              _0: erase_rel(rest._0)
            };
          case /* Int32_ty */
          3:
            return {
              TAG: (
                /* Int32_ty */
                3
              ),
              _0: erase_rel(rest._0)
            };
          case /* Nativeint_ty */
          4:
            return {
              TAG: (
                /* Nativeint_ty */
                4
              ),
              _0: erase_rel(rest._0)
            };
          case /* Int64_ty */
          5:
            return {
              TAG: (
                /* Int64_ty */
                5
              ),
              _0: erase_rel(rest._0)
            };
          case /* Float_ty */
          6:
            return {
              TAG: (
                /* Float_ty */
                6
              ),
              _0: erase_rel(rest._0)
            };
          case /* Bool_ty */
          7:
            return {
              TAG: (
                /* Bool_ty */
                7
              ),
              _0: erase_rel(rest._0)
            };
          case /* Format_arg_ty */
          8:
            return {
              TAG: (
                /* Format_arg_ty */
                8
              ),
              _0: rest._0,
              _1: erase_rel(rest._1)
            };
          case /* Format_subst_ty */
          9:
            const ty1 = rest._0;
            return {
              TAG: (
                /* Format_subst_ty */
                9
              ),
              _0: ty1,
              _1: ty1,
              _2: erase_rel(rest._2)
            };
          case /* Alpha_ty */
          10:
            return {
              TAG: (
                /* Alpha_ty */
                10
              ),
              _0: erase_rel(rest._0)
            };
          case /* Theta_ty */
          11:
            return {
              TAG: (
                /* Theta_ty */
                11
              ),
              _0: erase_rel(rest._0)
            };
          case /* Any_ty */
          12:
            return {
              TAG: (
                /* Any_ty */
                12
              ),
              _0: erase_rel(rest._0)
            };
          case /* Reader_ty */
          13:
            return {
              TAG: (
                /* Reader_ty */
                13
              ),
              _0: erase_rel(rest._0)
            };
          case /* Ignored_reader_ty */
          14:
            return {
              TAG: (
                /* Ignored_reader_ty */
                14
              ),
              _0: erase_rel(rest._0)
            };
        }
      }
      function concat_fmtty(fmtty1, fmtty2) {
        if (
          /* tag */
          typeof fmtty1 === "number" || typeof fmtty1 === "string"
        ) {
          return fmtty2;
        }
        switch (fmtty1.TAG) {
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
        if (
          /* tag */
          typeof fmt1 === "number" || typeof fmt1 === "string"
        ) {
          return fmt2;
        }
        switch (fmt1.TAG) {
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
      module.exports = {
        concat_fmtty,
        erase_rel,
        concat_fmt
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_array.js
  var require_caml_array = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_array.js"(exports, module) {
      "use strict";
      var Caml_js_exceptions = require_caml_js_exceptions();
      function sub(x, offset, len2) {
        const result = new Array(len2);
        let j = 0;
        let i = offset;
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
          const l = _l;
          const acc = _acc;
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
          const l = _l;
          const i = _i;
          if (!l) {
            return;
          }
          const x = l.hd;
          const l$1 = x.length;
          let k = i;
          let j = 0;
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
        const v = len(0, l);
        const result = new Array(v);
        fill(result, 0, l);
        return result;
      }
      function set(xs, index, newval) {
        if (index < 0 || index >= xs.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        xs[index] = newval;
      }
      function get(xs, index) {
        if (index < 0 || index >= xs.length) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "index out of bounds"
          });
        }
        return xs[index];
      }
      function make(len2, init) {
        const b = new Array(len2);
        for (let i = 0; i < len2; ++i) {
          b[i] = init;
        }
        return b;
      }
      function make_float(len2) {
        const b = new Array(len2);
        for (let i = 0; i < len2; ++i) {
          b[i] = 0;
        }
        return b;
      }
      function blit(a1, i1, a2, i2, len2) {
        if (i2 <= i1) {
          for (let j = 0; j < len2; ++j) {
            a2[j + i2 | 0] = a1[j + i1 | 0];
          }
          return;
        }
        for (let j$1 = len2 - 1 | 0; j$1 >= 0; --j$1) {
          a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
        }
      }
      function dup(prim) {
        return prim.slice(0);
      }
      module.exports = {
        dup,
        sub,
        concat,
        make,
        make_float,
        blit,
        get,
        set
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/curry.js
  var require_curry = __commonJS({
    "_build/default/dist/node_modules/melange.js/curry.js"(exports, module) {
      "use strict";
      var Caml_array = require_caml_array();
      function app(_f, _args) {
        while (true) {
          const args = _args;
          const f = _f;
          const init_arity = f.length;
          const arity = init_arity === 0 ? 1 : init_arity;
          const len = args.length;
          const d = arity - len | 0;
          if (d === 0) {
            return f.apply(null, args);
          }
          if (d >= 0) {
            return function(x) {
              return app(f, args.concat([x]));
            };
          }
          _args = Caml_array.sub(args, arity, -d | 0);
          _f = f.apply(null, Caml_array.sub(args, 0, arity));
          continue;
        }
        ;
      }
      function _1(o, a0) {
        const arity = o.length;
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
        const arity = o.length;
        if (arity === 1) {
          return o;
        } else {
          return function(a0) {
            return _1(o, a0);
          };
        }
      }
      function _2(o, a0, a1) {
        const arity = o.length;
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
        const arity = o.length;
        if (arity === 2) {
          return o;
        } else {
          return function(a0, a1) {
            return _2(o, a0, a1);
          };
        }
      }
      function _3(o, a0, a1, a2) {
        const arity = o.length;
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
        const arity = o.length;
        if (arity === 3) {
          return o;
        } else {
          return function(a0, a1, a2) {
            return _3(o, a0, a1, a2);
          };
        }
      }
      function _4(o, a0, a1, a2, a3) {
        const arity = o.length;
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
        const arity = o.length;
        if (arity === 4) {
          return o;
        } else {
          return function(a0, a1, a2, a3) {
            return _4(o, a0, a1, a2, a3);
          };
        }
      }
      function _5(o, a0, a1, a2, a3, a4) {
        const arity = o.length;
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
        const arity = o.length;
        if (arity === 5) {
          return o;
        } else {
          return function(a0, a1, a2, a3, a4) {
            return _5(o, a0, a1, a2, a3, a4);
          };
        }
      }
      function _6(o, a0, a1, a2, a3, a4, a5) {
        const arity = o.length;
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
        const arity = o.length;
        if (arity === 6) {
          return o;
        } else {
          return function(a0, a1, a2, a3, a4, a5) {
            return _6(o, a0, a1, a2, a3, a4, a5);
          };
        }
      }
      function _7(o, a0, a1, a2, a3, a4, a5, a6) {
        const arity = o.length;
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
        const arity = o.length;
        if (arity === 7) {
          return o;
        } else {
          return function(a0, a1, a2, a3, a4, a5, a6) {
            return _7(o, a0, a1, a2, a3, a4, a5, a6);
          };
        }
      }
      function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
        const arity = o.length;
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
        const arity = o.length;
        if (arity === 8) {
          return o;
        } else {
          return function(a0, a1, a2, a3, a4, a5, a6, a7) {
            return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
          };
        }
      }
      module.exports = {
        app,
        _1,
        __1,
        _2,
        __2,
        _3,
        __3,
        _4,
        __4,
        _5,
        __5,
        _6,
        __6,
        _7,
        __7,
        _8,
        __8
      };
    }
  });

  // _build/default/dist/node_modules/melange/stdlib.js
  var require_stdlib = __commonJS({
    "_build/default/dist/node_modules/melange/stdlib.js"(exports, module) {
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
        throw new Caml_js_exceptions.MelangeError("Failure", {
          MEL_EXN_ID: "Failure",
          _1: s
        });
      }
      function invalid_arg(s) {
        throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: s
        });
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
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "char_of_int"
          });
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
            throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "bool_of_string"
            });
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
          const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
          if (exn.MEL_EXN_ID === Failure) {
            return;
          }
          throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
        }
      }
      function valid_float_lexem(s) {
        const l = s.length;
        let _i = 0;
        while (true) {
          const i = _i;
          if (i >= l) {
            return s + ".";
          }
          const match = Caml_string.get(s, i);
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
          const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
          if (exn.MEL_EXN_ID === Failure) {
            return;
          }
          throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
        }
      }
      function $at_dps(_dst, _offset, _l1, l2) {
        while (true) {
          const dst = _dst;
          const offset = _offset;
          const l1 = _l1;
          if (!l1) {
            dst[offset] = l2;
            return;
          }
          const match = l1.tl;
          const h1 = l1.hd;
          if (!match) {
            dst[offset] = {
              hd: h1,
              tl: l2
            };
            return;
          }
          const match$1 = match.tl;
          const h2 = match.hd;
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
          const block = {
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
        const match = l1.tl;
        const h1 = l1.hd;
        if (!match) {
          return {
            hd: h1,
            tl: l2
          };
        }
        const match$1 = match.tl;
        const h2 = match.hd;
        if (!match$1) {
          return {
            hd: h1,
            tl: {
              hd: h2,
              tl: l2
            }
          };
        }
        const block = {
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
        const c = Caml_external_polyfill.resolve("caml_ml_open_descriptor_out")(Caml_external_polyfill.resolve("caml_sys_open")(name, mode, perm));
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
        let _param = Caml_io.caml_ml_out_channels_list(void 0);
        while (true) {
          const param$1 = _param;
          if (!param$1) {
            return;
          }
          try {
            Caml_io.caml_ml_flush(param$1.hd);
          } catch (raw_exn) {
            const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
            if (exn.MEL_EXN_ID !== Sys_error) {
              throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
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
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "output"
          });
        }
        Caml_external_polyfill.resolve("caml_ml_output_bytes")(oc, s, ofs, len);
      }
      function output_substring(oc, s, ofs, len) {
        if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "output_substring"
          });
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
        const c = Caml_external_polyfill.resolve("caml_ml_open_descriptor_in")(Caml_external_polyfill.resolve("caml_sys_open")(name, mode, perm));
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
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "input"
          });
        }
        return Caml_external_polyfill.resolve("caml_ml_input")(ic, s, ofs, len);
      }
      function unsafe_really_input(ic, s, _ofs, _len) {
        while (true) {
          const len = _len;
          const ofs = _ofs;
          if (len <= 0) {
            return;
          }
          const r = Caml_external_polyfill.resolve("caml_ml_input")(ic, s, ofs, len);
          if (r === 0) {
            throw new Caml_js_exceptions.MelangeError(End_of_file, {
              MEL_EXN_ID: End_of_file
            });
          }
          _len = len - r | 0;
          _ofs = ofs + r | 0;
          continue;
        }
        ;
      }
      function really_input(ic, s, ofs, len) {
        if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "really_input"
          });
        }
        unsafe_really_input(ic, s, ofs, len);
      }
      function really_input_string(ic, len) {
        const s = Caml_bytes.caml_create_bytes(len);
        really_input(ic, s, 0, len);
        return Caml_bytes.bytes_to_string(s);
      }
      function input_line(chan) {
        const build_result = function(buf, _pos, _param) {
          while (true) {
            const param = _param;
            const pos = _pos;
            if (!param) {
              return buf;
            }
            const hd = param.hd;
            const len = hd.length;
            Caml_bytes.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
            _param = param.tl;
            _pos = pos - len | 0;
            continue;
          }
          ;
        };
        const scan = function(_accu, _len) {
          while (true) {
            const len = _len;
            const accu = _accu;
            const n = Caml_external_polyfill.resolve("caml_ml_input_scan_line")(chan);
            if (n === 0) {
              if (accu) {
                return build_result(Caml_bytes.caml_create_bytes(len), len, accu);
              }
              throw new Caml_js_exceptions.MelangeError(End_of_file, {
                MEL_EXN_ID: End_of_file
              });
            }
            if (n > 0) {
              const res = Caml_bytes.caml_create_bytes(n - 1 | 0);
              Caml_external_polyfill.resolve("caml_ml_input")(chan, res, 0, n - 1 | 0);
              Caml_external_polyfill.resolve("caml_ml_input_char")(chan);
              if (!accu) {
                return res;
              }
              const len$1 = (len + n | 0) - 1 | 0;
              return build_result(Caml_bytes.caml_create_bytes(len$1), len$1, {
                hd: res,
                tl: accu
              });
            }
            const beg = Caml_bytes.caml_create_bytes(-n | 0);
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
        return {
          TAG: (
            /* Format */
            0
          ),
          _0: CamlinternalFormatBasics.concat_fmt(param._0, param$1._0),
          _1: param._1 + ("%," + param$1._1)
        };
      }
      var exit_function = {
        contents: flush_all
      };
      function at_exit(f) {
        const f_yet_to_run = {
          contents: true
        };
        const old_exit = exit_function.contents;
        const new_exit = function(param) {
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
      module.exports = {
        invalid_arg,
        failwith,
        Exit,
        Match_failure,
        Assert_failure,
        Invalid_argument,
        Failure,
        Not_found,
        Out_of_memory,
        Stack_overflow,
        Sys_error,
        End_of_file,
        Division_by_zero,
        Sys_blocked_io,
        Undefined_recursive_module,
        abs,
        max_int,
        min_int,
        lnot,
        infinity,
        neg_infinity,
        max_float,
        min_float,
        epsilon_float,
        classify_float,
        char_of_int,
        string_of_bool,
        bool_of_string_opt,
        bool_of_string,
        int_of_string_opt,
        string_of_float,
        float_of_string_opt,
        $at,
        stdin,
        stdout,
        stderr,
        print_char,
        print_string,
        print_bytes,
        print_int,
        print_float,
        print_newline,
        prerr_char,
        prerr_string,
        prerr_bytes,
        prerr_int,
        prerr_float,
        prerr_newline,
        read_line,
        read_int_opt,
        read_int,
        read_float_opt,
        read_float,
        open_out,
        open_out_bin,
        open_out_gen,
        flush,
        flush_all,
        output_char,
        output_string,
        output_bytes,
        output,
        output_substring,
        output_byte,
        output_binary_int,
        output_value,
        seek_out,
        pos_out,
        out_channel_length,
        close_out,
        close_out_noerr,
        set_binary_mode_out,
        open_in,
        open_in_bin,
        open_in_gen,
        input_char,
        input_line,
        input,
        really_input,
        really_input_string,
        input_byte,
        input_binary_int,
        input_value,
        seek_in,
        pos_in,
        in_channel_length,
        close_in,
        close_in_noerr,
        set_binary_mode_in,
        LargeFile,
        string_of_format,
        $caret$caret,
        exit,
        at_exit,
        valid_float_lexem,
        unsafe_really_input,
        do_at_exit,
        do_domain_local_at_exit
      };
    }
  });

  // _build/default/dist/browser/node.js
  var require_node = __commonJS({
    "_build/default/dist/browser/node.js"(exports, module) {
      "use strict";
      var Stdlib = require_stdlib();
      function to_int(param) {
        switch (param) {
          case /* Element */
          0:
            return 1;
          case /* Attribute */
          1:
            return 2;
          case /* Text */
          2:
            return 3;
          case /* Cdata_section */
          3:
            return 4;
          case /* Entity_reference */
          4:
            return 5;
          case /* Entity */
          5:
            return 6;
          case /* Processing_instruction */
          6:
            return 7;
          case /* Comment */
          7:
            return 8;
          case /* Document */
          8:
            return 9;
          case /* Document_type */
          9:
            return 10;
          case /* Document_fragment */
          10:
            return 11;
          case /* Notation */
          11:
            return 12;
        }
      }
      function of_int(t) {
        if (t > 12 || t < 1) {
          return Stdlib.invalid_arg("Unknown nodeType: " + t.toString(void 0));
        } else {
          return t - 1 | 0;
        }
      }
      var Type = {
        to_int,
        of_int
      };
      var Document_position = {
        disconnected: 1,
        preceding: 2,
        following: 4,
        contains: 8,
        contained_by: 16,
        implementation_specific: 32
      };
      function Make(T) {
        const node_type2 = function(node) {
          return of_int(node.nodeType);
        };
        const get_root_node2 = function(composedOpt, node) {
          const composed = composedOpt !== void 0 ? composedOpt : false;
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
        const composed = composedOpt !== void 0 ? composedOpt : false;
        return node.getRootNode({
          composed
        });
      }
      module.exports = {
        Type,
        Document_position,
        Make,
        node_type,
        get_root_node
      };
    }
  });

  // _build/default/dist/browser/non_element_parent_node_mixin.js
  var require_non_element_parent_node_mixin = __commonJS({
    "_build/default/dist/browser/non_element_parent_node_mixin.js"(exports, module) {
      "use strict";
      function Make(T) {
        return {};
      }
      module.exports = {
        Make
      };
    }
  });

  // _build/default/dist/browser/parent_node_mixin.js
  var require_parent_node_mixin = __commonJS({
    "_build/default/dist/browser/parent_node_mixin.js"(exports, module) {
      "use strict";
      function Make(T) {
        return {};
      }
      module.exports = {
        Make
      };
    }
  });

  // _build/default/dist/browser/xpath_result.js
  var require_xpath_result = __commonJS({
    "_build/default/dist/browser/xpath_result.js"(exports, module) {
      "use strict";
      var Stdlib = require_stdlib();
      function to_int(param) {
        switch (param) {
          case /* Any */
          0:
            return 0;
          case /* Number */
          1:
            return 1;
          case /* String */
          2:
            return 2;
          case /* Boolean */
          3:
            return 3;
          case /* Unordered_node_iterator */
          4:
            return 4;
          case /* Ordered_node_iterator */
          5:
            return 5;
          case /* Unordered_node_snapshot */
          6:
            return 6;
          case /* Ordered_node_snapshot */
          7:
            return 7;
          case /* Any_ordered_node */
          8:
            return 8;
          case /* First_ordered_node */
          9:
            return 9;
        }
      }
      function of_int(e) {
        if (e > 9 || e < 0) {
          return Stdlib.invalid_arg("Unknown XPathResult type: " + e.toString(void 0));
        } else {
          return e;
        }
      }
      var Type = {
        to_int,
        of_int
      };
      module.exports = {
        Type
      };
    }
  });

  // _build/default/dist/node_modules/melange/camlinternalLazy.js
  var require_camlinternalLazy = __commonJS({
    "_build/default/dist/node_modules/melange/camlinternalLazy.js"(exports, module) {
      "use strict";
      var Caml_exceptions = require_caml_exceptions();
      var Caml_js_exceptions = require_caml_js_exceptions();
      var Undefined = /* @__PURE__ */ Caml_exceptions.create("CamlinternalLazy.Undefined");
      function is_val(l) {
        return l.LAZY_DONE;
      }
      function forward_with_closure(blk, closure) {
        const result = closure();
        blk.VAL = result;
        blk.LAZY_DONE = true;
        return result;
      }
      function raise_undefined() {
        throw new Caml_js_exceptions.MelangeError(Undefined, {
          MEL_EXN_ID: Undefined
        });
      }
      function force_lazy_block(blk) {
        const closure = blk.VAL;
        blk.VAL = raise_undefined;
        try {
          return forward_with_closure(blk, closure);
        } catch (e) {
          blk.VAL = function() {
            throw new Caml_js_exceptions.MelangeError(e.MEL_EXN_ID, e);
          };
          throw new Caml_js_exceptions.MelangeError(e.MEL_EXN_ID, e);
        }
      }
      function force_val_lazy_block(blk) {
        const closure = blk.VAL;
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
      module.exports = {
        Undefined,
        force_lazy_block,
        force_val_lazy_block,
        force,
        force_val,
        is_val
      };
    }
  });

  // _build/default/dist/node_modules/melange/camlinternalAtomic.js
  var require_camlinternalAtomic = __commonJS({
    "_build/default/dist/node_modules/melange/camlinternalAtomic.js"(exports, module) {
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
        const cur = r.v;
        r.v = v;
        return cur;
      }
      function compare_and_set(r, seen, v) {
        const cur = r.v;
        if (cur === seen) {
          r.v = v;
          return true;
        } else {
          return false;
        }
      }
      function fetch_and_add(r, n) {
        const cur = r.v;
        r.v = cur + n | 0;
        return cur;
      }
      function incr(r) {
        fetch_and_add(r, 1);
      }
      function decr(r) {
        fetch_and_add(r, -1);
      }
      module.exports = {
        make,
        get,
        set,
        exchange,
        compare_and_set,
        fetch_and_add,
        incr,
        decr
      };
    }
  });

  // _build/default/dist/node_modules/melange/atomic.js
  var require_atomic = __commonJS({
    "_build/default/dist/node_modules/melange/atomic.js"(exports, module) {
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
      module.exports = {
        make,
        get,
        set,
        exchange,
        compare_and_set,
        fetch_and_add,
        incr,
        decr
      };
    }
  });

  // _build/default/dist/node_modules/melange/seq.js
  var require_seq = __commonJS({
    "_build/default/dist/node_modules/melange/seq.js"(exports, module) {
      "use strict";
      var Caml_exceptions = require_caml_exceptions();
      var Caml_js_exceptions = require_caml_js_exceptions();
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
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: x,
          _1: empty
        };
      }
      function cons(x, next, param) {
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: x,
          _1: next
        };
      }
      function append(seq1, seq2, param) {
        const match = Curry._1(seq1, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return Curry._1(seq2, void 0);
        }
        const next = match._1;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: match._0,
          _1: function(param2) {
            return append(next, seq2, param2);
          }
        };
      }
      function map(f, seq, param) {
        const match = Curry._1(seq, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const next = match._1;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: Curry._1(f, match._0),
          _1: function(param2) {
            return map(f, next, param2);
          }
        };
      }
      function filter_map(f, _seq, _param) {
        while (true) {
          const seq = _seq;
          const match = Curry._1(seq, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return (
              /* Nil */
              0
            );
          }
          const next = match._1;
          const y = Curry._1(f, match._0);
          if (y !== void 0) {
            return {
              TAG: (
                /* Cons */
                0
              ),
              _0: Caml_option.valFromOption(y),
              _1: function(param) {
                return filter_map(f, next, param);
              }
            };
          }
          _param = void 0;
          _seq = next;
          continue;
        }
        ;
      }
      function filter(f, _seq, _param) {
        while (true) {
          const seq = _seq;
          const match = Curry._1(seq, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return (
              /* Nil */
              0
            );
          }
          const next = match._1;
          const x = match._0;
          if (Curry._1(f, x)) {
            return {
              TAG: (
                /* Cons */
                0
              ),
              _0: x,
              _1: function(param) {
                return filter(f, next, param);
              }
            };
          }
          _param = void 0;
          _seq = next;
          continue;
        }
        ;
      }
      function concat(seq, param) {
        const match = Curry._1(seq, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const next = match._1;
        return append(match._0, function(param2) {
          return concat(next, param2);
        }, void 0);
      }
      function flat_map(f, seq, param) {
        const match = Curry._1(seq, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const next = match._1;
        return append(Curry._1(f, match._0), function(param2) {
          return flat_map(f, next, param2);
        }, void 0);
      }
      function fold_left(f, _acc, _seq) {
        while (true) {
          const seq = _seq;
          const acc = _acc;
          const match = Curry._1(seq, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return acc;
          }
          const acc$1 = Curry._2(f, acc, match._0);
          _seq = match._1;
          _acc = acc$1;
          continue;
        }
        ;
      }
      function iter(f, _seq) {
        while (true) {
          const seq = _seq;
          const match = Curry._1(seq, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return;
          }
          Curry._1(f, match._0);
          _seq = match._1;
          continue;
        }
        ;
      }
      function unfold(f, u, param) {
        const match = Curry._1(f, u);
        if (match === void 0) {
          return (
            /* Nil */
            0
          );
        }
        const u$p = match[1];
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: match[0],
          _1: function(param2) {
            return unfold(f, u$p, param2);
          }
        };
      }
      function is_empty(xs) {
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return true;
        } else {
          return false;
        }
      }
      function uncons(xs) {
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return;
        } else {
          return [
            match._0,
            match._1
          ];
        }
      }
      function length(xs) {
        let _accu = 0;
        let _xs = xs;
        while (true) {
          const xs$1 = _xs;
          const accu = _accu;
          const match = Curry._1(xs$1, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return accu;
          }
          _xs = match._1;
          _accu = accu + 1 | 0;
          continue;
        }
        ;
      }
      function iteri(f, xs) {
        let _i = 0;
        let _xs = xs;
        while (true) {
          const xs$1 = _xs;
          const i = _i;
          const match = Curry._1(xs$1, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
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
        let _accu = accu;
        let _i = 0;
        let _xs = xs;
        while (true) {
          const xs$1 = _xs;
          const i = _i;
          const accu$1 = _accu;
          const match = Curry._1(xs$1, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return accu$1;
          }
          const accu$2 = Curry._3(f, accu$1, i, match._0);
          _xs = match._1;
          _i = i + 1 | 0;
          _accu = accu$2;
          continue;
        }
        ;
      }
      function for_all(p, _xs) {
        while (true) {
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
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
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
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
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return;
          }
          const x = match._0;
          if (Curry._1(p, x)) {
            return Caml_option.some(x);
          }
          _xs = match._1;
          continue;
        }
        ;
      }
      function find_index(p, xs) {
        let _i = 0;
        let _xs = xs;
        while (true) {
          const xs$1 = _xs;
          const i = _i;
          const match = Curry._1(xs$1, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
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
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return;
          }
          const result = Curry._1(f, match._0);
          if (result !== void 0) {
            return result;
          }
          _xs = match._1;
          continue;
        }
        ;
      }
      function find_mapi(f, xs) {
        let _i = 0;
        let _xs = xs;
        while (true) {
          const xs$1 = _xs;
          const i = _i;
          const match = Curry._1(xs$1, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return;
          }
          const result = Curry._2(f, i, match._0);
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
          const ys = _ys;
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return;
          }
          const match$1 = Curry._1(ys, void 0);
          if (
            /* tag */
            typeof match$1 === "number" || typeof match$1 === "string"
          ) {
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
          const ys = _ys;
          const xs = _xs;
          const accu = _accu;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return accu;
          }
          const match$1 = Curry._1(ys, void 0);
          if (
            /* tag */
            typeof match$1 === "number" || typeof match$1 === "string"
          ) {
            return accu;
          }
          const accu$1 = Curry._3(f, accu, match._0, match$1._0);
          _ys = match$1._1;
          _xs = match._1;
          _accu = accu$1;
          continue;
        }
        ;
      }
      function for_all2(f, _xs, _ys) {
        while (true) {
          const ys = _ys;
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return true;
          }
          const match$1 = Curry._1(ys, void 0);
          if (
            /* tag */
            typeof match$1 === "number" || typeof match$1 === "string"
          ) {
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
          const ys = _ys;
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return false;
          }
          const match$1 = Curry._1(ys, void 0);
          if (
            /* tag */
            typeof match$1 === "number" || typeof match$1 === "string"
          ) {
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
          const ys = _ys;
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          const match$1 = Curry._1(ys, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            if (
              /* tag */
              typeof match$1 === "number" || typeof match$1 === "string"
            ) {
              return true;
            } else {
              return false;
            }
          }
          if (
            /* tag */
            typeof match$1 === "number" || typeof match$1 === "string"
          ) {
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
          const ys = _ys;
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          const match$1 = Curry._1(ys, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            if (
              /* tag */
              typeof match$1 === "number" || typeof match$1 === "string"
            ) {
              return 0;
            } else {
              return -1;
            }
          }
          if (
            /* tag */
            typeof match$1 === "number" || typeof match$1 === "string"
          ) {
            return 1;
          }
          const c = Curry._2(cmp, match._0, match$1._0);
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
        const partial_arg = i + 1 | 0;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: Curry._1(f, i),
          _1: function(param2) {
            return init_aux(f, partial_arg, j, param2);
          }
        };
      }
      function init(n, f) {
        if (n < 0) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Seq.init"
          });
        }
        return function(param) {
          return init_aux(f, 0, n, param);
        };
      }
      function repeat(x, param) {
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: x,
          _1: function(param2) {
            return repeat(x, param2);
          }
        };
      }
      function forever(f, param) {
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: Curry._1(f, void 0),
          _1: function(param2) {
            return forever(f, param2);
          }
        };
      }
      function cycle_nonempty(xs, param) {
        return append(xs, function(param2) {
          return cycle_nonempty(xs, param2);
        }, void 0);
      }
      function cycle(xs, param) {
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xs$p = match._1;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: match._0,
          _1: function(param2) {
            return append(xs$p, function(param3) {
              return cycle_nonempty(xs, param3);
            }, param2);
          }
        };
      }
      function iterate1(f, x, param) {
        const y = Curry._1(f, x);
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: y,
          _1: function(param2) {
            return iterate1(f, y, param2);
          }
        };
      }
      function iterate(f, x) {
        return function(param) {
          return {
            TAG: (
              /* Cons */
              0
            ),
            _0: x,
            _1: function(param2) {
              return iterate1(f, x, param2);
            }
          };
        };
      }
      function mapi_aux(f, i, xs, param) {
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xs$1 = match._1;
        const partial_arg = i + 1 | 0;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: Curry._2(f, i, match._0),
          _1: function(param2) {
            return mapi_aux(f, partial_arg, xs$1, param2);
          }
        };
      }
      function mapi(f, xs) {
        return function(param) {
          return mapi_aux(f, 0, xs, param);
        };
      }
      function tail_scan(f, s, xs, param) {
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xs$1 = match._1;
        const s$1 = Curry._2(f, s, match._0);
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: s$1,
          _1: function(param2) {
            return tail_scan(f, s$1, xs$1, param2);
          }
        };
      }
      function scan(f, s, xs) {
        return function(param) {
          return {
            TAG: (
              /* Cons */
              0
            ),
            _0: s,
            _1: function(param2) {
              return tail_scan(f, s, xs, param2);
            }
          };
        };
      }
      function take_aux(n, xs) {
        if (n === 0) {
          return empty;
        } else {
          return function(param) {
            const match = Curry._1(xs, void 0);
            if (
              /* tag */
              typeof match === "number" || typeof match === "string"
            ) {
              return (
                /* Nil */
                0
              );
            } else {
              return {
                TAG: (
                  /* Cons */
                  0
                ),
                _0: match._0,
                _1: take_aux(n - 1 | 0, match._1)
              };
            }
          };
        }
      }
      function take(n, xs) {
        if (n < 0) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Seq.take"
          });
        }
        return take_aux(n, xs);
      }
      function drop(n, xs) {
        if (n < 0) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Seq.drop"
          });
        }
        if (n === 0) {
          return xs;
        } else {
          return function(param) {
            let _n = n;
            let _xs = xs;
            while (true) {
              const xs$1 = _xs;
              const n$1 = _n;
              const match = Curry._1(xs$1, void 0);
              if (
                /* tag */
                typeof match === "number" || typeof match === "string"
              ) {
                return (
                  /* Nil */
                  0
                );
              }
              const xs$2 = match._1;
              const n$2 = n$1 - 1 | 0;
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
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xs$1 = match._1;
        const x = match._0;
        if (Curry._1(p, x)) {
          return {
            TAG: (
              /* Cons */
              0
            ),
            _0: x,
            _1: function(param2) {
              return take_while(p, xs$1, param2);
            }
          };
        } else {
          return (
            /* Nil */
            0
          );
        }
      }
      function drop_while(p, _xs, _param) {
        while (true) {
          const xs = _xs;
          const node = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof node === "number" || typeof node === "string"
          ) {
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
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xs$1 = match._1;
        const x = match._0;
        const partial_arg = Curry._1(eq, x);
        const partial_arg$1 = function(param2) {
          return take_while(partial_arg, xs$1, param2);
        };
        const partial_arg$2 = Curry._1(eq, x);
        const partial_arg$3 = function(param2) {
          return drop_while(partial_arg$2, xs$1, param2);
        };
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: function(param2) {
            return {
              TAG: (
                /* Cons */
                0
              ),
              _0: x,
              _1: partial_arg$1
            };
          },
          _1: function(param2) {
            return group(eq, partial_arg$3, param2);
          }
        };
      }
      var Forced_twice = /* @__PURE__ */ Caml_exceptions.create("Stdlib.Seq.Forced_twice");
      function failure(param) {
        throw new Caml_js_exceptions.MelangeError(Forced_twice, {
          MEL_EXN_ID: Forced_twice
        });
      }
      function memoize(xs) {
        const partial_arg = {
          LAZY_DONE: false,
          VAL: function() {
            const match = Curry._1(xs, void 0);
            if (
              /* tag */
              typeof match === "number" || typeof match === "string"
            ) {
              return (
                /* Nil */
                0
              );
            } else {
              return {
                TAG: (
                  /* Cons */
                  0
                ),
                _0: match._0,
                _1: memoize(match._1)
              };
            }
          }
        };
        return function(param) {
          return CamlinternalLazy.force(partial_arg);
        };
      }
      function once(xs) {
        const f = function(param) {
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return (
              /* Nil */
              0
            );
          } else {
            return {
              TAG: (
                /* Cons */
                0
              ),
              _0: match._0,
              _1: once(match._1)
            };
          }
        };
        const action = Stdlib__Atomic.make(f);
        return function(param) {
          const f2 = Stdlib__Atomic.exchange(action, failure);
          return Curry._1(f2, void 0);
        };
      }
      function zip(xs, ys, param) {
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xs$1 = match._1;
        const match$1 = Curry._1(ys, void 0);
        if (
          /* tag */
          typeof match$1 === "number" || typeof match$1 === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const ys$1 = match$1._1;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: [
            match._0,
            match$1._0
          ],
          _1: function(param2) {
            return zip(xs$1, ys$1, param2);
          }
        };
      }
      function map2(f, xs, ys, param) {
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xs$1 = match._1;
        const match$1 = Curry._1(ys, void 0);
        if (
          /* tag */
          typeof match$1 === "number" || typeof match$1 === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const ys$1 = match$1._1;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: Curry._2(f, match._0, match$1._0),
          _1: function(param2) {
            return map2(f, xs$1, ys$1, param2);
          }
        };
      }
      function interleave(xs, ys, param) {
        const match = Curry._1(xs, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return Curry._1(ys, void 0);
        }
        const xs$1 = match._1;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: match._0,
          _1: function(param2) {
            return interleave(ys, xs$1, param2);
          }
        };
      }
      function sorted_merge1(cmp, x, xs, y, ys) {
        if (Curry._2(cmp, x, y) <= 0) {
          return {
            TAG: (
              /* Cons */
              0
            ),
            _0: x,
            _1: function(param) {
              const match = Curry._1(xs, void 0);
              if (
                /* tag */
                typeof match === "number" || typeof match === "string"
              ) {
                return {
                  TAG: (
                    /* Cons */
                    0
                  ),
                  _0: y,
                  _1: ys
                };
              } else {
                return sorted_merge1(cmp, match._0, match._1, y, ys);
              }
            }
          };
        } else {
          return {
            TAG: (
              /* Cons */
              0
            ),
            _0: y,
            _1: function(param) {
              const match = Curry._1(ys, void 0);
              if (
                /* tag */
                typeof match === "number" || typeof match === "string"
              ) {
                return {
                  TAG: (
                    /* Cons */
                    0
                  ),
                  _0: x,
                  _1: xs
                };
              } else {
                return sorted_merge1(cmp, x, xs, match._0, match._1);
              }
            }
          };
        }
      }
      function sorted_merge(cmp, xs, ys, param) {
        const match = Curry._1(xs, void 0);
        const match$1 = Curry._1(ys, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          if (
            /* tag */
            typeof match$1 === "number" || typeof match$1 === "string"
          ) {
            return (
              /* Nil */
              0
            );
          } else {
            return match$1;
          }
        } else if (
          /* tag */
          typeof match$1 === "number" || typeof match$1 === "string"
        ) {
          return match;
        } else {
          return sorted_merge1(cmp, match._0, match._1, match$1._0, match$1._1);
        }
      }
      function map_fst(xys, param) {
        const match = Curry._1(xys, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xys$1 = match._1;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: match._0[0],
          _1: function(param2) {
            return map_fst(xys$1, param2);
          }
        };
      }
      function map_snd(xys, param) {
        const match = Curry._1(xys, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return (
            /* Nil */
            0
          );
        }
        const xys$1 = match._1;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: match._0[1],
          _1: function(param2) {
            return map_snd(xys$1, param2);
          }
        };
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
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return (
              /* Nil */
              0
            );
          }
          const xs$1 = match._1;
          const y = Curry._1(f, match._0);
          if (y.TAG === /* Left */
          0) {
            return {
              TAG: (
                /* Cons */
                0
              ),
              _0: y._0,
              _1: function(param) {
                return filter_map_find_left_map(f, xs$1, param);
              }
            };
          }
          _param = void 0;
          _xs = xs$1;
          continue;
        }
        ;
      }
      function filter_map_find_right_map(f, _xs, _param) {
        while (true) {
          const xs = _xs;
          const match = Curry._1(xs, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return (
              /* Nil */
              0
            );
          }
          const xs$1 = match._1;
          const z = Curry._1(f, match._0);
          if (z.TAG !== /* Left */
          0) {
            return {
              TAG: (
                /* Cons */
                0
              ),
              _0: z._0,
              _1: function(param) {
                return filter_map_find_right_map(f, xs$1, param);
              }
            };
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
        const match = unzip(function(param2) {
          return filter_map(uncons, xss, param2);
        });
        const tails = match[1];
        const heads = match[0];
        if (!is_empty(heads)) {
          return {
            TAG: (
              /* Cons */
              0
            ),
            _0: heads,
            _1: function(param2) {
              return transpose(tails, param2);
            }
          };
        }
        if (!is_empty(tails)) {
          throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/stdlib/seq.ml",
              616,
              4
            ]
          });
        }
        return (
          /* Nil */
          0
        );
      }
      function diagonals(remainders, xss, param) {
        const match = Curry._1(xss, void 0);
        if (
          /* tag */
          typeof match === "number" || typeof match === "string"
        ) {
          return transpose(remainders, void 0);
        }
        const xss$1 = match._1;
        const match$1 = Curry._1(match._0, void 0);
        if (
          /* tag */
          typeof match$1 === "number" || typeof match$1 === "string"
        ) {
          const match$2 = unzip(function(param2) {
            return filter_map(uncons, remainders, param2);
          });
          const tails = match$2[1];
          return {
            TAG: (
              /* Cons */
              0
            ),
            _0: match$2[0],
            _1: function(param2) {
              return diagonals(tails, xss$1, param2);
            }
          };
        }
        const xs = match$1._1;
        const x = match$1._0;
        const match$3 = unzip(function(param2) {
          return filter_map(uncons, remainders, param2);
        });
        const tails$1 = match$3[1];
        const heads = match$3[0];
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: function(param2) {
            return {
              TAG: (
                /* Cons */
                0
              ),
              _0: x,
              _1: heads
            };
          },
          _1: function(param2) {
            return diagonals(function(param3) {
              return {
                TAG: (
                  /* Cons */
                  0
                ),
                _0: xs,
                _1: tails$1
              };
            }, xss$1, param2);
          }
        };
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
        const c = function(param) {
          const x = Curry._1(it, void 0);
          if (x !== void 0) {
            return {
              TAG: (
                /* Cons */
                0
              ),
              _0: Caml_option.valFromOption(x),
              _1: c
            };
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
        const s = {
          contents: xs
        };
        return function(param) {
          const match = Curry._1(s.contents, void 0);
          if (
            /* tag */
            typeof match === "number" || typeof match === "string"
          ) {
            return;
          }
          s.contents = match._1;
          return Caml_option.some(match._0);
        };
      }
      function ints(i, param) {
        const partial_arg = i + 1 | 0;
        return {
          TAG: (
            /* Cons */
            0
          ),
          _0: i,
          _1: function(param2) {
            return ints(partial_arg, param2);
          }
        };
      }
      var concat_map = flat_map;
      var split = unzip;
      module.exports = {
        is_empty,
        uncons,
        length,
        iter,
        fold_left,
        iteri,
        fold_lefti,
        for_all,
        exists,
        find,
        find_index,
        find_map,
        find_mapi,
        iter2,
        fold_left2,
        for_all2,
        exists2,
        equal,
        compare,
        empty,
        $$return,
        cons,
        init,
        unfold,
        repeat,
        forever,
        cycle,
        iterate,
        map,
        mapi,
        filter,
        filter_map,
        scan,
        take,
        drop,
        take_while,
        drop_while,
        group,
        memoize,
        Forced_twice,
        once,
        transpose,
        append,
        concat,
        flat_map,
        concat_map,
        zip,
        map2,
        interleave,
        sorted_merge,
        product,
        map_product,
        unzip,
        split,
        partition_map,
        partition,
        of_dispenser,
        to_dispenser,
        ints
      };
    }
  });

  // _build/default/dist/node_modules/melange/option.js
  var require_option = __commonJS({
    "_build/default/dist/node_modules/melange/option.js"(exports, module) {
      "use strict";
      var Caml_js_exceptions = require_caml_js_exceptions();
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
      function get(v) {
        if (v !== void 0) {
          return Caml_option.valFromOption(v);
        }
        throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "option is None"
        });
      }
      function bind(o, f) {
        if (o !== void 0) {
          return Curry._1(f, Caml_option.valFromOption(o));
        }
      }
      function join(o) {
        if (o !== void 0) {
          return Caml_option.valFromOption(o);
        }
      }
      function map(f, o) {
        if (o !== void 0) {
          return Caml_option.some(Curry._1(f, Caml_option.valFromOption(o)));
        }
      }
      function fold(none2, some2, v) {
        if (v !== void 0) {
          return Curry._1(some2, Caml_option.valFromOption(v));
        } else {
          return none2;
        }
      }
      function iter(f, v) {
        if (v !== void 0) {
          return Curry._1(f, Caml_option.valFromOption(v));
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
      function to_result(none2, v) {
        if (v !== void 0) {
          return {
            TAG: (
              /* Ok */
              0
            ),
            _0: Caml_option.valFromOption(v)
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
      function to_list(v) {
        if (v !== void 0) {
          return {
            hd: Caml_option.valFromOption(v),
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
      function to_seq(v) {
        if (v === void 0) {
          return Stdlib__Seq.empty;
        }
        const partial_arg = Caml_option.valFromOption(v);
        return function(param) {
          return Stdlib__Seq.$$return(partial_arg, param);
        };
      }
      var none;
      module.exports = {
        none,
        some,
        value,
        get,
        bind,
        join,
        map,
        fold,
        iter,
        is_none,
        is_some,
        equal,
        compare,
        to_result,
        to_list,
        to_seq
      };
    }
  });

  // _build/default/dist/browser/xpath_evaluator_base_mixin.js
  var require_xpath_evaluator_base_mixin = __commonJS({
    "_build/default/dist/browser/xpath_evaluator_base_mixin.js"(exports, module) {
      "use strict";
      var Browser__Xpath_result = require_xpath_result();
      var Caml_option = require_caml_option();
      var Stdlib__Option = require_option();
      function Make(T) {
        const evaluate = function(expression, context, resolver, type_, result, t) {
          return t.evaluate(expression, context, resolver !== void 0 ? Caml_option.valFromOption(resolver) : void 0, Caml_option.option_get(Stdlib__Option.map(Browser__Xpath_result.Type.to_int, type_)), result !== void 0 ? Caml_option.valFromOption(result) : void 0);
        };
        return {
          evaluate
        };
      }
      module.exports = {
        Make
      };
    }
  });

  // _build/default/dist/browser/document.js
  var require_document = __commonJS({
    "_build/default/dist/browser/document.js"(exports, module) {
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
      module.exports = {
        node_type,
        get_root_node,
        create_element,
        evaluate,
        Ready_state,
        ready_state
      };
    }
  });

  // _build/default/dist/browser/body_mixin.js
  var require_body_mixin = __commonJS({
    "_build/default/dist/browser/body_mixin.js"(exports, module) {
      "use strict";
      function Make(T) {
        return {};
      }
      module.exports = {
        Make
      };
    }
  });

  // _build/default/dist/browser/request.js
  var require_request = __commonJS({
    "_build/default/dist/browser/request.js"(exports, module) {
      "use strict";
      var Browser__Body_mixin = require_body_mixin();
      var Caml_option = require_caml_option();
      var Stdlib = require_stdlib();
      var Stdlib__Option = require_option();
      function to_string(method_2) {
        if (!/* tag */
        (typeof method_2 === "number" || typeof method_2 === "string")) {
          return method_2._0;
        }
        switch (method_2) {
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
      function of_string(method_2) {
        switch (method_2) {
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
            return {
              TAG: (
                /* Other */
                0
              ),
              _0: method_2
            };
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
      function create(url, method_2, body, headers, referrer, referrer_policy2, mode2, credentials2, cache2, redirect2, integrity, keepalive, signal, param) {
        let tmp = {};
        if (method_2 !== void 0) {
          tmp.method_ = Caml_option.valFromOption(method_2);
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
        const tmp$1 = Stdlib__Option.map(to_string$2, referrer_policy2);
        if (tmp$1 !== void 0) {
          tmp.referrerPolicy = Caml_option.valFromOption(tmp$1);
        }
        const tmp$2 = Stdlib__Option.map(to_string$3, mode2);
        if (tmp$2 !== void 0) {
          tmp.mode = Caml_option.valFromOption(tmp$2);
        }
        const tmp$3 = Stdlib__Option.map(to_string$4, credentials2);
        if (tmp$3 !== void 0) {
          tmp.credentials = Caml_option.valFromOption(tmp$3);
        }
        const tmp$4 = Stdlib__Option.map(to_string$5, cache2);
        if (tmp$4 !== void 0) {
          tmp.cache = Caml_option.valFromOption(tmp$4);
        }
        const tmp$5 = Stdlib__Option.map(to_string$6, redirect2);
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
      function method_(req) {
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
      module.exports = {
        Method,
        Destination,
        ReferrerPolicy,
        Mode,
        Credentials,
        Cache,
        Redirect,
        create,
        method_,
        destination,
        referrer_policy,
        mode,
        credentials,
        cache,
        redirect
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/caml_obj.js
  var require_caml_obj = __commonJS({
    "_build/default/dist/node_modules/melange.js/caml_obj.js"(exports, module) {
      "use strict";
      var Caml = require_caml();
      var Caml_js_exceptions = require_caml_js_exceptions();
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
        const a_type = typeof a;
        const b_type = typeof b;
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
              throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "compare: functional value"
              });
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
              if (b === null || b.MEL_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return 1;
              } else {
                return -1;
              }
            }
            if (b_type === "number") {
              if (a === null || a.MEL_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return -1;
              } else {
                return 1;
              }
            }
            if (a === null) {
              if (b.MEL_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return 1;
              } else {
                return -1;
              }
            }
            if (b === null) {
              if (a.MEL_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return -1;
              } else {
                return 1;
              }
            }
            if (a.MEL_PRIVATE_NESTED_SOME_NONE !== void 0) {
              if (b.MEL_PRIVATE_NESTED_SOME_NONE !== void 0) {
                return aux_obj_compare(a, b);
              } else {
                return -1;
              }
            }
            const tag_a = a.TAG;
            const tag_b = b.TAG;
            if (tag_a === 248) {
              return Caml.caml_int_compare(a[1], b[1]);
            }
            if (tag_a === 251) {
              throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "equal: abstract value"
              });
            }
            if (tag_a !== tag_b) {
              if (tag_a < tag_b) {
                return -1;
              } else {
                return 1;
              }
            }
            const len_a = a.length | 0;
            const len_b = b.length | 0;
            if (len_a === len_b) {
              if (Array.isArray(a)) {
                let _i = 0;
                while (true) {
                  const i = _i;
                  if (i === len_a) {
                    return 0;
                  }
                  const res = caml_compare(a[i], b[i]);
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
              let _i$1 = 0;
              while (true) {
                const i$1 = _i$1;
                if (i$1 === len_a) {
                  return -1;
                }
                const res$1 = caml_compare(a[i$1], b[i$1]);
                if (res$1 !== 0) {
                  return res$1;
                }
                _i$1 = i$1 + 1 | 0;
                continue;
              }
              ;
            } else {
              let _i$2 = 0;
              while (true) {
                const i$2 = _i$2;
                if (i$2 === len_b) {
                  return 1;
                }
                const res$2 = caml_compare(a[i$2], b[i$2]);
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
        const min_key_lhs = {
          contents: void 0
        };
        const min_key_rhs = {
          contents: void 0
        };
        const do_key = function(param, key) {
          const min_key = param[2];
          const b2 = param[1];
          if (!(!Object.prototype.hasOwnProperty.call(b2, key) || caml_compare(param[0][key], b2[key]) > 0)) {
            return;
          }
          const mk = min_key.contents;
          if (mk !== void 0 && key >= mk) {
            return;
          } else {
            min_key.contents = key;
            return;
          }
        };
        const partial_arg = [
          a,
          b,
          min_key_rhs
        ];
        const do_key_a = function(param) {
          return do_key(partial_arg, param);
        };
        const partial_arg$1 = [
          b,
          a,
          min_key_lhs
        ];
        const do_key_b = function(param) {
          return do_key(partial_arg$1, param);
        };
        for_in(a, do_key_a);
        for_in(b, do_key_b);
        const match = min_key_lhs.contents;
        const match$1 = min_key_rhs.contents;
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
        const a_type = typeof a;
        if (a_type === "string" || a_type === "number" || a_type === "bigint" || a_type === "boolean" || a_type === "undefined" || a === null) {
          return false;
        }
        const b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "equal: functional value"
          });
        }
        if (b_type === "number" || b_type === "bigint" || b_type === "undefined" || b === null) {
          return false;
        }
        const tag_a = a.TAG;
        const tag_b = b.TAG;
        if (tag_a === 248) {
          return a[1] === b[1];
        }
        if (tag_a === 251) {
          throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "equal: abstract value"
          });
        }
        if (tag_a !== tag_b) {
          return false;
        }
        const len_a = a.length | 0;
        const len_b = b.length | 0;
        if (len_a === len_b) {
          if (Array.isArray(a)) {
            let _i = 0;
            while (true) {
              const i = _i;
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
            const result = {
              contents: true
            };
            const do_key_a = function(key) {
              if (!Object.prototype.hasOwnProperty.call(b, key)) {
                result.contents = false;
                return;
              }
            };
            const do_key_b = function(key) {
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
      module.exports = {
        caml_obj_dup,
        update_dummy,
        caml_compare,
        caml_equal,
        caml_equal_null,
        caml_equal_undefined,
        caml_equal_nullable,
        caml_notequal,
        caml_greaterequal,
        caml_greaterthan,
        caml_lessthan,
        caml_lessequal,
        caml_min,
        caml_max
      };
    }
  });

  // _build/default/dist/irc/formatting.js
  var require_formatting = __commonJS({
    "_build/default/dist/irc/formatting.js"(exports, module) {
      "use strict";
      var Caml_array = require_caml_array();
      var Caml_format = require_caml_format();
      var Curry = require_curry();
      var Stdlib = require_stdlib();
      function of_int(num) {
        if (num >= 16) {
          if (num === 99) {
            return (
              /* Default */
              16
            );
          }
        } else if (num >= 0) {
          return num;
        }
        if (num >= 16 && num <= 98) {
          return {
            TAG: (
              /* Extended */
              0
            ),
            _0: num
          };
        } else {
          return Stdlib.invalid_arg("Unknown color code: " + num.toString(void 0));
        }
      }
      function of_string(other) {
        switch (other) {
          case "0":
          case "00":
            return (
              /* White */
              0
            );
          case "01":
          case "1":
            return (
              /* Black */
              1
            );
          case "10":
            return (
              /* Cyan */
              10
            );
          case "11":
            return (
              /* Light_cyan */
              11
            );
          case "12":
            return (
              /* Light_blue */
              12
            );
          case "13":
            return (
              /* Pink */
              13
            );
          case "14":
            return (
              /* Grey */
              14
            );
          case "15":
            return (
              /* Light_grey */
              15
            );
          case "02":
          case "2":
            return (
              /* Blue */
              2
            );
          case "03":
          case "3":
            return (
              /* Green */
              3
            );
          case "04":
          case "4":
            return (
              /* Red */
              4
            );
          case "05":
          case "5":
            return (
              /* Brown */
              5
            );
          case "06":
          case "6":
            return (
              /* Magenta */
              6
            );
          case "07":
          case "7":
            return (
              /* Orange */
              7
            );
          case "08":
          case "8":
            return (
              /* Yellow */
              8
            );
          case "09":
          case "9":
            return (
              /* Light_green */
              9
            );
          case "99":
            return (
              /* Default */
              16
            );
          default:
            return {
              TAG: (
                /* Extended */
                0
              ),
              _0: Caml_format.caml_int_of_string(other)
            };
        }
      }
      function to_string(c) {
        if (!/* tag */
        (typeof c === "number" || typeof c === "string")) {
          return c._0.toString(void 0);
        }
        switch (c) {
          case /* White */
          0:
            return "0";
          case /* Black */
          1:
            return "1";
          case /* Blue */
          2:
            return "2";
          case /* Green */
          3:
            return "3";
          case /* Red */
          4:
            return "4";
          case /* Brown */
          5:
            return "5";
          case /* Magenta */
          6:
            return "6";
          case /* Orange */
          7:
            return "7";
          case /* Yellow */
          8:
            return "8";
          case /* Light_green */
          9:
            return "9";
          case /* Cyan */
          10:
            return "10";
          case /* Light_cyan */
          11:
            return "11";
          case /* Light_blue */
          12:
            return "12";
          case /* Pink */
          13:
            return "13";
          case /* Grey */
          14:
            return "14";
          case /* Light_grey */
          15:
            return "15";
          case /* Default */
          16:
            return "99";
        }
      }
      var Color = {
        of_int,
        of_string,
        to_string
      };
      function string_of_hex_color(c) {
        return c.toString(16).padStart(6, "0");
      }
      function to_string$1(string_of_color, fg) {
        if (
          /* tag */
          typeof fg === "number" || typeof fg === "string"
        ) {
          return "";
        } else if (fg.TAG === /* Fg */
        0) {
          return Curry._1(string_of_color, fg._0);
        } else {
          return Curry._1(string_of_color, fg._0) + ("," + Curry._1(string_of_color, fg._1));
        }
      }
      function to_string$2(c) {
        if (
          /* tag */
          typeof c === "number" || typeof c === "string"
        ) {
          switch (c) {
            case /* Bold */
            0:
              return "";
            case /* Italics */
            1:
              return "";
            case /* Underline */
            2:
              return "";
            case /* Strikethrough */
            3:
              return "";
            case /* Monospace */
            4:
              return "";
            case /* Reverse_color */
            5:
              return "";
            case /* Reset */
            6:
              return "";
          }
        } else {
          switch (c.TAG) {
            case /* Color */
            0:
              return "" + to_string$1(to_string, c._0);
            case /* Hex_color */
            1:
              return "" + to_string$1(string_of_hex_color, c._0);
            case /* Text */
            2:
              return c._0;
          }
        }
      }
      var Token = {
        to_string: to_string$2
      };
      function parse_color_format_with(re, of_string2, message, i) {
        const rest = message.slice(i, void 0);
        const m = re.exec(rest);
        if (m === null) {
          return [
            /* Reset */
            0,
            i
          ];
        }
        const fg = Caml_array.get(m, 1);
        const bg = Caml_array.get(m, 3);
        if (fg == null) {
          return [
            /* Reset */
            0,
            i
          ];
        }
        if (bg == null) {
          const i$1 = i + fg.length | 0;
          const fg$1 = Curry._1(of_string2, fg);
          return [
            {
              TAG: (
                /* Fg */
                0
              ),
              _0: fg$1
            },
            i$1
          ];
        }
        const i$2 = ((i + fg.length | 0) + 1 | 0) + bg.length | 0;
        const fg$2 = Curry._1(of_string2, fg);
        const bg$1 = Curry._1(of_string2, bg);
        return [
          {
            TAG: (
              /* Fg_bg */
              1
            ),
            _0: fg$2,
            _1: bg$1
          },
          i$2
        ];
      }
      var partial_arg = /^([0-9]{1,2})(,([0-9]{1,2}))?/;
      function parse_color_format(param, param$1) {
        return parse_color_format_with(partial_arg, of_string, param, param$1);
      }
      function color_of_hex_string(str) {
        return Caml_format.caml_int_of_string("0x" + str);
      }
      var partial_arg$1 = /^([0-9A-Fa-f]{6})(,([0-9A-Fa-f]{6}))?/;
      function parse_hex_color_format(param, param$1) {
        return parse_color_format_with(partial_arg$1, color_of_hex_string, param, param$1);
      }
      function parse(message) {
        const out = [];
        let _in_string;
        let _i = 0;
        while (true) {
          const i = _i;
          const in_string = _in_string;
          if (i >= message.length) {
            if (in_string === void 0) {
              return out;
            }
            const str = message.slice(in_string, message.length);
            if (str !== "") {
              out.push({
                TAG: (
                  /* Text */
                  2
                ),
                _0: str
              });
            }
            return out;
          }
          const $$char = message.charAt(i);
          let match;
          switch ($$char) {
            case "":
              match = [
                /* Bold */
                0,
                i
              ];
              break;
            case "":
              const match$1 = Curry._2(parse_color_format, message, i + 1 | 0);
              match = [
                {
                  TAG: (
                    /* Color */
                    0
                  ),
                  _0: match$1[0]
                },
                match$1[1] - 1 | 0
              ];
              break;
            case "":
              const match$2 = Curry._2(parse_hex_color_format, message, i + 1 | 0);
              match = [
                {
                  TAG: (
                    /* Hex_color */
                    1
                  ),
                  _0: match$2[0]
                },
                match$2[1] - 1 | 0
              ];
              break;
            case "":
              match = [
                /* Reset */
                6,
                i
              ];
              break;
            case "":
              match = [
                /* Monospace */
                4,
                i
              ];
              break;
            case "":
              match = [
                /* Reverse_color */
                5,
                i
              ];
              break;
            case "":
              match = [
                /* Italics */
                1,
                i
              ];
              break;
            case "":
              match = [
                /* Strikethrough */
                3,
                i
              ];
              break;
            case "":
              match = [
                /* Underline */
                2,
                i
              ];
              break;
            default:
              match = [
                void 0,
                i
              ];
          }
          const i$1 = match[1];
          const code = match[0];
          if (code !== void 0) {
            if (in_string !== void 0) {
              const str$1 = message.slice(in_string, i);
              out.push({
                TAG: (
                  /* Text */
                  2
                ),
                _0: str$1
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
      function to_string$3(parts) {
        return parts.map(to_string$2).join("");
      }
      function strip(param) {
        return param.reduce(function(str, t) {
          if (
            /* tag */
            typeof t === "number" || typeof t === "string" || t.TAG !== /* Text */
            2
          ) {
            return str;
          } else {
            return str + t._0;
          }
        }, "");
      }
      var Color_command = {};
      module.exports = {
        Color,
        Color_command,
        Token,
        parse,
        to_string: to_string$3,
        strip
      };
    }
  });

  // _build/default/dist/irc/utils.js
  var require_utils = __commonJS({
    "_build/default/dist/irc/utils.js"(exports, module) {
      "use strict";
      var Caml_array = require_caml_array();
      var Caml_option = require_caml_option();
      var Stdlib__Option = require_option();
      function split_off(delimiter, str) {
        const i = str.indexOf(delimiter, void 0);
        if (i === -1) {
          return [
            str,
            void 0
          ];
        }
        const left = str.slice(0, i);
        const right = str.slice(i + 1 | 0, void 0);
        return [
          left,
          right
        ];
      }
      function split_off_regex(delimiter, str) {
        return Stdlib__Option.bind(Caml_option.null_to_opt(delimiter.exec(str)), function(res) {
          return Stdlib__Option.bind(Caml_option.nullable_to_opt(Caml_array.get(res, 0)), function(match_) {
            const i = res.index;
            const ri = i + match_.length | 0;
            const left = str.slice(0, i);
            const right = str.slice(ri, void 0);
            return [
              left,
              right
            ];
          });
        });
      }
      function keep_some(arr) {
        const out = [];
        arr.forEach(function(t) {
          if (t !== void 0) {
            out.push(Caml_option.valFromOption(t));
            return;
          }
        });
        return out;
      }
      var let$plus = Stdlib__Option.bind;
      module.exports = {
        let$plus,
        split_off,
        split_off_regex,
        keep_some
      };
    }
  });

  // _build/default/dist/irc/ctcp.js
  var require_ctcp = __commonJS({
    "_build/default/dist/irc/ctcp.js"(exports, module) {
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
                _0: Irc__Utils.keep_some(params.split(/\s+/, void 0))
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
      function string_of_query(params) {
        if (
          /* tag */
          typeof params === "number" || typeof params === "string"
        ) {
          switch (params) {
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
          switch (params.TAG) {
            case /* Action */
            0:
              return "ACTION " + params._0;
            case /* Client_info_reply */
            1:
              return "CLIENTINFO " + params._0.join(" ");
            case /* Finger_reply */
            2:
              return "FINGER " + params._0;
            case /* Ping */
            3:
              return "PING " + params._0;
            case /* Source_reply */
            4:
              return "SOURCE " + params._0;
            case /* Time_reply */
            5:
              return "TIME " + params._0;
            case /* Version_reply */
            6:
              return "VERSION " + params._0;
            case /* User_info_reply */
            7:
              return "USERINFO " + params._0;
            case /* Unknown */
            8:
              const params$1 = params._1;
              const command = params._0;
              if (params$1 !== void 0) {
                return command + (" " + params$1);
              } else {
                return command;
              }
          }
        }
      }
      var delim = "";
      function parse(message) {
        if (!message.startsWith(delim, void 0)) {
          return;
        }
        const message$1 = message.endsWith(delim, void 0) ? message.slice(1, message.length - 1 | 0) : message.slice(1, void 0);
        const match = Irc__Utils.split_off_regex(/\s+/, message$1);
        if (match === void 0) {
          return parse_query(message$1, void 0);
        }
        const command = match[0];
        if (match[1] === "") {
          return parse_query(command, void 0);
        } else {
          return parse_query(command, match[1]);
        }
      }
      function to_string(query) {
        return delim + (string_of_query(query) + delim);
      }
      module.exports = {
        parse,
        to_string
      };
    }
  });

  // _build/default/dist/irc/reply.js
  var require_reply = __commonJS({
    "_build/default/dist/irc/reply.js"(exports, module) {
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
                /* Isupport */
                4
              )
            };
          case 10:
            return {
              TAG: (
                /* Response */
                0
              ),
              _0: (
                /* Bounce */
                5
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
          case /* Isupport */
          4:
            return 5;
          case /* Bounce */
          5:
            return 10;
          case /* User_host */
          6:
            return 302;
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
      function to_int(r) {
        switch (r.TAG) {
          case /* Response */
          0:
            return int_of_response(r._0);
          case /* Error */
          1:
            return int_of_error(r._0);
          case /* Unknown */
          2:
            return r._0;
        }
      }
      module.exports = {
        of_int,
        int_of_response,
        int_of_error,
        to_int
      };
    }
  });

  // _build/default/dist/irc/command.js
  var require_command = __commonJS({
    "_build/default/dist/irc/command.js"(exports, module) {
      "use strict";
      var Caml_array = require_caml_array();
      var Caml_format = require_caml_format();
      var Caml_option = require_caml_option();
      var Caml_string = require_caml_string();
      var Irc__Ctcp = require_ctcp();
      var Irc__Reply = require_reply();
      var Stdlib = require_stdlib();
      function is_channel_name(name) {
        const match = Caml_string.get(name, 0);
        switch (match) {
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
        if (param.includes(" ", void 0)) {
          return true;
        } else {
          return param.startsWith(":", void 0);
        }
      }
      function parse(command, args) {
        const match = command.toUpperCase();
        switch (match) {
          case "ADMIN":
            const len = args.length;
            if (len !== 1) {
              if (!len) {
                return {
                  TAG: (
                    /* Admin */
                    27
                  ),
                  _0: void 0
                };
              }
            } else {
              const target = args[0];
              return {
                TAG: (
                  /* Admin */
                  27
                ),
                _0: target
              };
            }
            break;
          case "AWAY":
            const len$1 = args.length;
            if (len$1 !== 1) {
              if (!len$1) {
                return {
                  TAG: (
                    /* Away */
                    38
                  ),
                  _0: void 0
                };
              }
            } else {
              const text = args[0];
              return {
                TAG: (
                  /* Away */
                  38
                ),
                _0: text
              };
            }
            break;
          case "CONNECT":
            const len$2 = args.length;
            if (len$2 !== 2) {
              if (len$2 === 3) {
                const target_server = args[0];
                const port = args[1];
                const remote_server = args[2];
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
              const target_server$1 = args[0];
              const port$1 = args[1];
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
              const message = args[0];
              return {
                TAG: (
                  /* Error */
                  37
                ),
                _0: message
              };
            }
            break;
          case "INFO":
            const len$3 = args.length;
            if (len$3 !== 1) {
              if (!len$3) {
                return {
                  TAG: (
                    /* Info */
                    28
                  ),
                  _0: void 0
                };
              }
            } else {
              const target$1 = args[0];
              return {
                TAG: (
                  /* Info */
                  28
                ),
                _0: target$1
              };
            }
            break;
          case "INVITE":
            if (args.length === 2) {
              const nickname = args[0];
              const channel = args[1];
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
          case "JOIN":
            const len$4 = args.length;
            if (len$4 < 3) {
              switch (len$4) {
                case 0:
                  break;
                case 1:
                  const channels = args[0];
                  const channels$1 = channels.split(",", void 0);
                  return {
                    TAG: (
                      /* Join */
                      8
                    ),
                    channels: channels$1,
                    keys: []
                  };
                case 2:
                  const channels$2 = args[0];
                  const keys = args[1];
                  const channels$3 = channels$2.split(",", void 0);
                  const keys$1 = keys.split(",", void 0);
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
            const len$5 = args.length;
            if (len$5 !== 2) {
              if (len$5 === 3) {
                const channels$4 = args[0];
                const nicknames = args[1];
                const comment = args[2];
                const channels$5 = channels$4.split(",", void 0);
                const nicknames$1 = nicknames.split(",", void 0);
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
              const channels$6 = args[0];
              const nicknames$2 = args[1];
              const channels$7 = channels$6.split(",", void 0);
              const nicknames$3 = nicknames$2.split(",", void 0);
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
              const nickname$1 = args[0];
              const comment$1 = args[1];
              return {
                TAG: (
                  /* Kill */
                  34
                ),
                nickname: nickname$1,
                comment: comment$1
              };
            }
            break;
          case "LINKS":
            const len$6 = args.length;
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
                  const server_mask = args[0];
                  return {
                    TAG: (
                      /* Links */
                      24
                    ),
                    remote_server: void 0,
                    server_mask
                  };
                case 2:
                  const remote_server$1 = args[0];
                  const server_mask$1 = args[1];
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
            const len$7 = args.length;
            if (len$7 < 3) {
              switch (len$7) {
                case 0:
                  break;
                case 1:
                  const channels$8 = args[0];
                  const channels$9 = channels$8.split(",", void 0);
                  return {
                    TAG: (
                      /* List */
                      13
                    ),
                    channels: channels$9,
                    target: void 0
                  };
                case 2:
                  const channels$10 = args[0];
                  const target$2 = args[1];
                  const channels$11 = channels$10.split(",", void 0);
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
            const len$8 = args.length;
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
                  const mask = args[0];
                  return {
                    TAG: (
                      /* Lusers */
                      21
                    ),
                    mask,
                    target: void 0
                  };
                case 2:
                  const mask$1 = args[0];
                  const target$3 = args[1];
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
                modes: args.slice(1, void 0)
              };
            }
            if (args.length > 1) {
              return {
                TAG: (
                  /* User_mode */
                  4
                ),
                nickname: Caml_array.get(args, 0),
                modes: args.slice(1, void 0)
              };
            }
            break;
          case "MOTD":
            const len$9 = args.length;
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
              const target$4 = args[0];
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
            const len$10 = args.length;
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
                  const channels$12 = args[0];
                  const channels$13 = channels$12.split(",", void 0);
                  return {
                    TAG: (
                      /* Names */
                      12
                    ),
                    channels: channels$13,
                    target: void 0
                  };
                case 2:
                  const channels$14 = args[0];
                  const target$5 = args[1];
                  const channels$15 = channels$14.split(",", void 0);
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
              const nickname$2 = args[0];
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
              const target$6 = args[0];
              const message$1 = args[1];
              const message$2 = Irc__Ctcp.parse(message$1);
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
              const name = args[0];
              const password = args[1];
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
            const len$11 = args.length;
            if (len$11 < 3) {
              switch (len$11) {
                case 0:
                  break;
                case 1:
                  const channels$16 = args[0];
                  const channels$17 = channels$16.split(",", void 0);
                  return {
                    TAG: (
                      /* Part */
                      9
                    ),
                    channels: channels$17,
                    comment: void 0
                  };
                case 2:
                  const channels$18 = args[0];
                  const comment$2 = args[1];
                  const channels$19 = channels$18.split(",", void 0);
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
              const password$1 = args[0];
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
            if (args.length === 1) {
              const token = args[0];
              return {
                TAG: (
                  /* Ping */
                  35
                ),
                _0: token
              };
            }
            break;
          case "PONG":
            const len$12 = args.length;
            if (len$12 < 3) {
              switch (len$12) {
                case 0:
                  break;
                case 1:
                  const token$1 = args[0];
                  return {
                    TAG: (
                      /* Pong */
                      36
                    ),
                    token: token$1,
                    server: void 0
                  };
                case 2:
                  const server = args[0];
                  const token$2 = args[1];
                  return {
                    TAG: (
                      /* Pong */
                      36
                    ),
                    token: token$2,
                    server
                  };
              }
            }
            break;
          case "PRIVMSG":
            if (args.length === 2) {
              const target$7 = args[0];
              const message$3 = args[1];
              const message$4 = Irc__Ctcp.parse(message$3);
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
            const len$13 = args.length;
            if (len$13 !== 1) {
              if (!len$13) {
                return {
                  TAG: (
                    /* Quit */
                    6
                  ),
                  _0: void 0
                };
              }
            } else {
              const message$5 = args[0];
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
              const nickname$3 = args[0];
              const reserved1 = args[1];
              const distribution = args[2];
              const type_ = args[3];
              const reserved2 = args[4];
              const info = args[5];
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
            const len$14 = args.length;
            if (len$14 < 3) {
              switch (len$14) {
                case 0:
                  return {
                    TAG: (
                      /* Servlist */
                      29
                    ),
                    mask: void 0,
                    type_: void 0
                  };
                case 1:
                  const mask$2 = args[0];
                  return {
                    TAG: (
                      /* Servlist */
                      29
                    ),
                    mask: mask$2,
                    type_: void 0
                  };
                case 2:
                  const mask$3 = args[0];
                  const type_$1 = args[1];
                  return {
                    TAG: (
                      /* Servlist */
                      29
                    ),
                    mask: mask$3,
                    type_: type_$1
                  };
              }
            }
            break;
          case "SQUERY":
            if (args.length === 2) {
              const service_name = args[0];
              const text$1 = args[1];
              return {
                TAG: (
                  /* Squery */
                  30
                ),
                service_name,
                text: text$1
              };
            }
            break;
          case "SQUIT":
            if (args.length === 2) {
              const server$1 = args[0];
              const comment$3 = args[1];
              return {
                TAG: (
                  /* Squit */
                  7
                ),
                server: server$1,
                comment: comment$3
              };
            }
            break;
          case "STATS":
            const len$15 = args.length;
            if (len$15 < 3) {
              switch (len$15) {
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
                  const query = args[0];
                  return {
                    TAG: (
                      /* Stats */
                      23
                    ),
                    query,
                    target: void 0
                  };
                case 2:
                  const query$1 = args[0];
                  const target$8 = args[1];
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
          case "TIME":
            const len$16 = args.length;
            if (len$16 !== 1) {
              if (!len$16) {
                return {
                  TAG: (
                    /* Time */
                    25
                  ),
                  _0: void 0
                };
              }
            } else {
              const target$9 = args[0];
              return {
                TAG: (
                  /* Time */
                  25
                ),
                _0: target$9
              };
            }
            break;
          case "TOPIC":
            const len$17 = args.length;
            if (len$17 < 3) {
              switch (len$17) {
                case 0:
                  break;
                case 1:
                  const channel$1 = args[0];
                  return {
                    TAG: (
                      /* Topic */
                      11
                    ),
                    channel: channel$1,
                    topic: void 0
                  };
                case 2:
                  const channel$2 = args[0];
                  const topic = args[1];
                  return {
                    TAG: (
                      /* Topic */
                      11
                    ),
                    channel: channel$2,
                    topic
                  };
              }
            }
            break;
          case "USER":
            if (args.length === 4) {
              const username = args[0];
              const realname = args[3];
              return {
                TAG: (
                  /* User */
                  2
                ),
                username,
                realname
              };
            }
            break;
          case "USERHOST":
            return {
              TAG: (
                /* Userhost */
                41
              ),
              _0: args
            };
          case "USERS":
            const len$18 = args.length;
            if (len$18 !== 1) {
              if (!len$18) {
                return {
                  TAG: (
                    /* Users */
                    39
                  ),
                  _0: void 0
                };
              }
            } else {
              const target$10 = args[0];
              return {
                TAG: (
                  /* Users */
                  39
                ),
                _0: target$10
              };
            }
            break;
          case "VERSION":
            const len$19 = args.length;
            if (len$19 !== 1) {
              if (!len$19) {
                return {
                  TAG: (
                    /* Version */
                    22
                  ),
                  _0: void 0
                };
              }
            } else {
              const target$11 = args[0];
              return {
                TAG: (
                  /* Version */
                  22
                ),
                _0: target$11
              };
            }
            break;
          case "WALLOPS":
            const len$20 = args.length;
            if (len$20 !== 1) {
              if (!len$20) {
                return {
                  TAG: (
                    /* Wallops */
                    40
                  ),
                  _0: void 0
                };
              }
            } else {
              const text$2 = args[0];
              return {
                TAG: (
                  /* Wallops */
                  40
                ),
                _0: text$2
              };
            }
            break;
          case "WHO":
            const len$21 = args.length;
            if (len$21 < 3) {
              switch (len$21) {
                case 0:
                  return {
                    TAG: (
                      /* Who */
                      31
                    ),
                    mask: void 0,
                    only_operators: false
                  };
                case 1:
                  const mask$4 = args[0];
                  return {
                    TAG: (
                      /* Who */
                      31
                    ),
                    mask: mask$4,
                    only_operators: false
                  };
                case 2:
                  const mask$5 = args[0];
                  const match$1 = args[1];
                  if (match$1 === "o") {
                    return {
                      TAG: (
                        /* Who */
                        31
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
            const len$22 = args.length;
            if (len$22 < 3) {
              switch (len$22) {
                case 0:
                  break;
                case 1:
                  const masks = args[0];
                  const masks$1 = masks.split(",", void 0);
                  return {
                    TAG: (
                      /* Whois */
                      32
                    ),
                    target: void 0,
                    masks: masks$1
                  };
                case 2:
                  const target$12 = args[0];
                  const masks$2 = args[1];
                  const masks$3 = masks$2.split(",", void 0);
                  return {
                    TAG: (
                      /* Whois */
                      32
                    ),
                    target: target$12,
                    masks: masks$3
                  };
              }
            }
            break;
          case "WHOWAS":
            const len$23 = args.length;
            if (len$23 < 4) {
              switch (len$23) {
                case 0:
                  break;
                case 1:
                  const nicknames$4 = args[0];
                  const nicknames$5 = nicknames$4.split(",", void 0);
                  return {
                    TAG: (
                      /* Whowas */
                      33
                    ),
                    nicknames: nicknames$5,
                    count: void 0,
                    target: void 0
                  };
                case 2:
                  const nicknames$6 = args[0];
                  const count = args[1];
                  const nicknames$7 = nicknames$6.split(",", void 0);
                  return {
                    TAG: (
                      /* Whowas */
                      33
                    ),
                    nicknames: nicknames$7,
                    count: Caml_format.caml_int_of_string(count),
                    target: void 0
                  };
                case 3:
                  const nicknames$8 = args[0];
                  const count$1 = args[1];
                  const target$13 = args[2];
                  const nicknames$9 = nicknames$8.split(",", void 0);
                  return {
                    TAG: (
                      /* Whowas */
                      33
                    ),
                    nicknames: nicknames$9,
                    count: Caml_format.caml_int_of_string(count$1),
                    target: target$13
                  };
              }
            }
            break;
        }
        const reply = Stdlib.int_of_string_opt(command);
        if (reply === void 0) {
          return {
            TAG: (
              /* Unknown */
              43
            ),
            _0: command,
            _1: args
          };
        }
        if (args.length === 0) {
          return {
            TAG: (
              /* Unknown */
              43
            ),
            _0: command,
            _1: args
          };
        }
        const target$14 = Caml_array.get(args, 0);
        const args$1 = args.slice(1, void 0);
        const code = Irc__Reply.of_int(reply);
        return {
          TAG: (
            /* Reply */
            42
          ),
          code,
          target: target$14,
          args: args$1
        };
      }
      function str(command, args) {
        const len = args.length;
        if (len !== 1) {
          if (!len) {
            return command;
          }
          const last = Caml_array.get(args, args.length - 1 | 0);
          if (!param_should_be_escaped(last)) {
            return command + (" " + args.join(" "));
          }
          const prev = args.slice(0, args.length - 1 | 0);
          return command + (" " + (prev.join(" ") + (" :" + last)));
        }
        const last$1 = args[0];
        if (param_should_be_escaped(last$1)) {
          return command + (" :" + last$1);
        } else {
          return command + (" " + last$1);
        }
      }
      var partial_arg = ",";
      function channel_list(param) {
        return param.join(partial_arg !== void 0 ? Caml_option.valFromOption(partial_arg) : void 0);
      }
      function to_string(password) {
        if (
          /* tag */
          typeof password === "number" || typeof password === "string"
        ) {
          switch (password) {
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
          switch (password.TAG) {
            case /* Pass */
            0:
              return str("PASS", [password._0]);
            case /* Nick */
            1:
              return str("NICK", [password._0]);
            case /* User */
            2:
              return str("USER", [
                password.username,
                "0",
                "*",
                password.realname
              ]);
            case /* Oper */
            3:
              return str("OPER", [
                password.name,
                password.password
              ]);
            case /* User_mode */
            4:
              return str("MODE", [password.nickname].concat(password.modes));
            case /* Service */
            5:
              return str("SERVICE", [
                password.nickname,
                password.reserved1,
                password.distribution,
                password.type_,
                password.reserved2,
                password.info
              ]);
            case /* Quit */
            6:
              const message = password._0;
              if (message !== void 0) {
                return str("QUIT", [message]);
              } else {
                return "QUIT";
              }
            case /* Squit */
            7:
              return str("SQUIT", [
                password.server,
                password.comment
              ]);
            case /* Join */
            8:
              const channels = password.channels;
              if (password.keys.length) {
                return str("JOIN", [
                  channel_list(channels),
                  channel_list(password.keys)
                ]);
              } else {
                return str("JOIN", [channel_list(channels)]);
              }
            case /* Part */
            9:
              const comment = password.comment;
              const channels$1 = password.channels;
              if (comment !== void 0) {
                return str("PART", [
                  channel_list(channels$1),
                  comment
                ]);
              } else {
                return str("PART", [channel_list(channels$1)]);
              }
            case /* Channel_mode */
            10:
              return str("MODE", [password.channel].concat(password.modes));
            case /* Topic */
            11:
              const topic = password.topic;
              const channel = password.channel;
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
              const channels$2 = password.channels;
              if (!channels$2.length && password.target === void 0) {
                return "NAMES";
              }
              const target = password.target;
              if (target !== void 0) {
                return str("NAMES", [
                  channel_list(channels$2),
                  target
                ]);
              } else {
                return str("NAMES", [channel_list(channels$2)]);
              }
            case /* List */
            13:
              const target$1 = password.target;
              const channels$3 = password.channels;
              if (target$1 !== void 0) {
                return str("LIST", [
                  channel_list(channels$3),
                  target$1
                ]);
              } else {
                return str("LIST", [channel_list(channels$3)]);
              }
            case /* Invite */
            14:
              return str("INVITE", [
                password.nickname,
                password.channel
              ]);
            case /* Kick */
            15:
              const comment$1 = password.comment;
              const nicknames = password.nicknames;
              const channels$4 = password.channels;
              if (comment$1 !== void 0) {
                return str("KICK", [
                  channel_list(channels$4),
                  channel_list(nicknames),
                  comment$1
                ]);
              } else {
                return str("KICK", [
                  channel_list(channels$4),
                  channel_list(nicknames)
                ]);
              }
            case /* Private_message */
            16:
              return str("PRIVMSG", [
                password.target,
                password.message
              ]);
            case /* Ctcp_private_message */
            17:
              return str("PRIVMSG", [
                password.target,
                Irc__Ctcp.to_string(password.message)
              ]);
            case /* Notice */
            18:
              return str("NOTICE", [
                password.target,
                password.message
              ]);
            case /* Ctcp_notice */
            19:
              return str("NOTICE", [
                password.target,
                Irc__Ctcp.to_string(password.message)
              ]);
            case /* Motd */
            20:
              const message$1 = password._0;
              if (message$1 !== void 0) {
                return str("MOTD", [message$1]);
              } else {
                return "MOTD";
              }
            case /* Lusers */
            21:
              const mask = password.mask;
              if (mask === void 0) {
                return "LUSERS";
              }
              const target$2 = password.target;
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
              const target$3 = password._0;
              if (target$3 !== void 0) {
                return str("VERSION", [target$3]);
              } else {
                return "VERSION";
              }
            case /* Stats */
            23:
              const query = password.query;
              if (query === void 0) {
                return "STATS";
              }
              const target$4 = password.target;
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
              const remote_server = password.remote_server;
              if (remote_server === void 0) {
                return "LINKS";
              }
              const server_mask = password.server_mask;
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
              const target$5 = password._0;
              if (target$5 !== void 0) {
                return str("TIME", [target$5]);
              } else {
                return "TIME";
              }
            case /* Connect */
            26:
              const remote_server$1 = password.remote_server;
              const port = password.port;
              const target_server = password.target_server;
              if (remote_server$1 !== void 0) {
                return str("CONNECT", [
                  target_server,
                  port.toString(void 0),
                  remote_server$1
                ]);
              } else {
                return str("CONNECT", [
                  target_server,
                  port.toString(void 0)
                ]);
              }
            case /* Admin */
            27:
              const target$6 = password._0;
              if (target$6 !== void 0) {
                return str("ADMIN", [target$6]);
              } else {
                return "ADMIN";
              }
            case /* Info */
            28:
              const info = password._0;
              if (info !== void 0) {
                return str("INFO", [info]);
              } else {
                return "INFO";
              }
            case /* Servlist */
            29:
              const mask$1 = password.mask;
              if (mask$1 === void 0) {
                return "SERVLIST";
              }
              const type_ = password.type_;
              if (type_ !== void 0) {
                return str("SERVLIST", [
                  mask$1,
                  type_
                ]);
              } else {
                return str("SERVLIST", [mask$1]);
              }
            case /* Squery */
            30:
              return str("SQUERY", [
                password.service_name,
                password.text
              ]);
            case /* Who */
            31:
              const mask$2 = password.mask;
              if (mask$2 !== void 0) {
                if (password.only_operators) {
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
            32:
              const target$7 = password.target;
              if (target$7 !== void 0) {
                return str("WHOIS", [
                  target$7,
                  channel_list(password.masks)
                ]);
              } else {
                return str("WHOIS", [channel_list(password.masks)]);
              }
            case /* Whowas */
            33:
              const count = password.count;
              const nicknames$1 = password.nicknames;
              if (count === void 0) {
                return str("WHOWAS", [channel_list(nicknames$1)]);
              }
              const target$8 = password.target;
              if (target$8 !== void 0) {
                return str("WHOWAS", [
                  channel_list(nicknames$1),
                  count.toString(void 0),
                  target$8
                ]);
              } else {
                return str("WHOWAS", [
                  channel_list(nicknames$1),
                  count.toString(void 0)
                ]);
              }
            case /* Kill */
            34:
              return str("KILL", [
                password.nickname,
                password.comment
              ]);
            case /* Ping */
            35:
              return str("PING", [password._0]);
            case /* Pong */
            36:
              const server = password.server;
              const token = password.token;
              if (server !== void 0) {
                return str("PONG", [
                  server,
                  token
                ]);
              } else {
                return str("PONG", [token]);
              }
            case /* Error */
            37:
              return str("ERROR", [password._0]);
            case /* Away */
            38:
              const text = password._0;
              if (text !== void 0) {
                return str("AWAY", [text]);
              } else {
                return "AWAY";
              }
            case /* Users */
            39:
              const target$9 = password._0;
              if (target$9 !== void 0) {
                return str("USERS", [target$9]);
              } else {
                return "USERS";
              }
            case /* Wallops */
            40:
              const text$1 = password._0;
              if (text$1 !== void 0) {
                return str("WALLOPS", [text$1]);
              } else {
                return "WALLOPS";
              }
            case /* Userhost */
            41:
              return str("USERHOST", password._0);
            case /* Reply */
            42:
              return str(Irc__Reply.to_int(password.code).toString(void 0), [password.target].concat(password.args));
            case /* Unknown */
            43:
              return str(password._0, password._1);
          }
        }
      }
      module.exports = {
        is_channel_name,
        param_should_be_escaped,
        parse,
        str,
        channel_list,
        to_string
      };
    }
  });

  // _build/default/dist/irc/prefix.js
  var require_prefix = __commonJS({
    "_build/default/dist/irc/prefix.js"(exports, module) {
      "use strict";
      var Irc__Utils = require_utils();
      function to_string(name) {
        if (name.TAG === /* Server_name */
        0) {
          return name._0;
        }
        const username = name.username;
        const username$1 = username !== void 0 ? "!" + username : "";
        return name.nickname + (username$1 + ("@" + name.hostname));
      }
      function of_string(str) {
        const match = Irc__Utils.split_off("@", str);
        const hostname = match[1];
        const name = match[0];
        if (hostname === void 0) {
          return {
            TAG: (
              /* Server_name */
              0
            ),
            _0: name
          };
        }
        const match$1 = Irc__Utils.split_off("!", name);
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
      module.exports = {
        to_string,
        of_string
      };
    }
  });

  // _build/default/dist/node_modules/melange.js/js_dict.js
  var require_js_dict = __commonJS({
    "_build/default/dist/node_modules/melange.js/js_dict.js"(exports, module) {
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
        const keys = Object.keys(dict);
        const l = keys.length;
        const values2 = new Array(l);
        for (let i = 0; i < l; ++i) {
          const key = keys[i];
          values2[i] = [
            key,
            dict[key]
          ];
        }
        return values2;
      }
      function values(dict) {
        const keys = Object.keys(dict);
        const l = keys.length;
        const values$1 = new Array(l);
        for (let i = 0; i < l; ++i) {
          values$1[i] = dict[keys[i]];
        }
        return values$1;
      }
      function fromList(entries2) {
        const dict = {};
        let _param = entries2;
        while (true) {
          const param = _param;
          if (!param) {
            return dict;
          }
          const match = param.hd;
          dict[match[0]] = match[1];
          _param = param.tl;
          continue;
        }
        ;
      }
      function fromArray(entries2) {
        const dict = {};
        const l = entries2.length;
        for (let i = 0; i < l; ++i) {
          const match = entries2[i];
          dict[match[0]] = match[1];
        }
        return dict;
      }
      function map(f, source) {
        const target = {};
        const keys = Object.keys(source);
        const l = keys.length;
        for (let i = 0; i < l; ++i) {
          const key = keys[i];
          target[key] = f(source[key]);
        }
        return target;
      }
      module.exports = {
        get,
        unsafeDeleteKey,
        entries,
        values,
        fromList,
        fromArray,
        map
      };
    }
  });

  // _build/default/dist/irc/tags.js
  var require_tags = __commonJS({
    "_build/default/dist/irc/tags.js"(exports, module) {
      "use strict";
      var Irc__Utils = require_utils();
      var Js__Js_dict = require_js_dict();
      function to_string(tags) {
        return Js__Js_dict.entries(tags).map(function(param) {
          const value = param[1];
          const key = param[0];
          if (value !== void 0) {
            return key + ("=" + value);
          } else {
            return key;
          }
        }).join(";");
      }
      function of_string(str) {
        return Js__Js_dict.fromArray(str.split(";", void 0).map(function(param) {
          return Irc__Utils.split_off("=", param);
        }));
      }
      module.exports = {
        to_string,
        of_string
      };
    }
  });

  // _build/default/dist/irc/message.js
  var require_message = __commonJS({
    "_build/default/dist/irc/message.js"(exports, module) {
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
        const partial_arg = /\s+/;
        const split_on_whitespace = function(param) {
          return Irc__Utils.split_off_regex(partial_arg, param);
        };
        let match;
        if (line.startsWith("@", void 0)) {
          const match$1 = Curry._1(split_on_whitespace, line);
          if (match$1 !== void 0) {
            const tags = Irc__Tags.of_string(match$1[0].slice(1, void 0));
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
        const line$1 = match[1];
        let match$2;
        if (line$1.startsWith(":", void 0)) {
          const match$3 = Curry._1(split_on_whitespace, line$1);
          if (match$3 !== void 0) {
            const prefix = Irc__Prefix.of_string(match$3[0].slice(1, void 0));
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
        const line$2 = match$2[1];
        const match$4 = Curry._1(split_on_whitespace, line$2);
        const match$5 = match$4 !== void 0 ? [
          match$4[0],
          match$4[1]
        ] : [
          line$2,
          void 0
        ];
        const line$3 = match$5[1];
        let params;
        if (line$3 !== void 0) {
          if (line$3.startsWith(":", void 0)) {
            params = [line$3.slice(1, void 0)];
          } else {
            const match$6 = Irc__Utils.split_off(" :", line$3);
            const trailing = match$6[1];
            const params$1 = Irc__Utils.keep_some(match$6[0].split(/\s+/, void 0));
            if (trailing !== void 0) {
              const trailing$1 = trailing.slice(1, void 0);
              params$1.push(trailing$1);
              params = params$1;
            } else {
              params = params$1;
            }
          }
        } else {
          params = [];
        }
        const command = Irc__Command.parse(match$5[0], params);
        return {
          tags: match[0],
          prefix: match$2[0],
          command
        };
      }
      function to_string(param) {
        const prefix = param.prefix;
        const tags = param.tags;
        const tags$1 = tags !== void 0 ? "@" + (Irc__Tags.to_string(Caml_option.valFromOption(tags)) + " ") : "";
        const prefix$1 = prefix !== void 0 ? ":" + (Irc__Prefix.to_string(prefix) + " ") : "";
        return tags$1 + (prefix$1 + Irc__Command.to_string(param.command));
      }
      module.exports = {
        make,
        parse,
        to_string
      };
    }
  });

  // _build/default/dist/shuko.js
  var require_shuko = __commonJS({
    "_build/default/dist/shuko.js"(exports, module) {
      var Browser__Document = require_document();
      var Browser__Request = require_request();
      var Caml_obj = require_caml_obj();
      var Caml_option = require_caml_option();
      var Irc__Formatting = require_formatting();
      var Irc__Message = require_message();
      var Js__Js_dict = require_js_dict();
      var Stdlib__Option = require_option();
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
      console.log(123 .toExponential(void 0));
      function test$1(message, expected, msg) {
        assert_eq(message, expected, Irc__Formatting.parse(msg));
      }
      function test_both(message, expected, msg) {
        assert_eq(message, expected, Irc__Formatting.parse(msg));
        assert_eq(message, msg, Irc__Formatting.to_string(expected));
      }
      test_both("no formatting", [{
        TAG: (
          /* Text */
          2
        ),
        _0: "no formatting here my dudes"
      }], "no formatting here my dudes");
      test_both("some formatting", [
        {
          TAG: (
            /* Text */
            2
          ),
          _0: "pretty "
        },
        /* Bold */
        0,
        {
          TAG: (
            /* Text */
            2
          ),
          _0: "bold"
        },
        /* Bold */
        0,
        {
          TAG: (
            /* Text */
            2
          ),
          _0: " claim there"
        },
        /* Italics */
        1,
        {
          TAG: (
            /* Text */
            2
          ),
          _0: "!"
        }
      ], "pretty bold claim there!");
      test_both("only formatting", [
        /* Bold */
        0,
        /* Italics */
        1,
        /* Underline */
        2,
        /* Strikethrough */
        3,
        /* Monospace */
        4,
        /* Reverse_color */
        5,
        /* Reset */
        6,
        {
          TAG: (
            /* Text */
            2
          ),
          _0: "oof"
        }
      ], "oof");
      test_both("reset color", [
        {
          TAG: (
            /* Text */
            2
          ),
          _0: "testing"
        },
        {
          TAG: (
            /* Color */
            0
          ),
          _0: (
            /* Reset */
            0
          )
        },
        {
          TAG: (
            /* Text */
            2
          ),
          _0: ",12reset"
        },
        {
          TAG: (
            /* Hex_color */
            1
          ),
          _0: (
            /* Reset */
            0
          )
        },
        {
          TAG: (
            /* Text */
            2
          ),
          _0: ",12color"
        }
      ], "testing,12reset,12color");
      test$1("parsing color", [
        {
          TAG: (
            /* Color */
            0
          ),
          _0: {
            TAG: (
              /* Fg_bg */
              1
            ),
            _0: (
              /* White */
              0
            ),
            _1: (
              /* White */
              0
            )
          }
        },
        {
          TAG: (
            /* Color */
            0
          ),
          _0: {
            TAG: (
              /* Fg_bg */
              1
            ),
            _0: (
              /* White */
              0
            ),
            _1: (
              /* White */
              0
            )
          }
        },
        {
          TAG: (
            /* Color */
            0
          ),
          _0: {
            TAG: (
              /* Fg_bg */
              1
            ),
            _0: (
              /* Default */
              16
            ),
            _1: (
              /* Black */
              1
            )
          }
        },
        {
          TAG: (
            /* Color */
            0
          ),
          _0: {
            TAG: (
              /* Fg */
              0
            ),
            _0: (
              /* Pink */
              13
            )
          }
        },
        {
          TAG: (
            /* Text */
            2
          ),
          _0: ",ayy"
        }
      ], "0,000,0099,113,ayy");
      var $$document = window.document;
      var div = Browser__Document.create_element(void 0, "div", $$document);
      var root = Stdlib__Option.get(Caml_option.nullable_to_opt($$document.getElementById("shuko")));
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
      module.exports = {
        assert_eq,
        $$document
      };
    }
  });
  require_shuko();
})();
//# sourceMappingURL=shuko.js.map
