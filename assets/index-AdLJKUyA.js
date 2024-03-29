(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ns(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const z = {},
  tt = [],
  fe = () => {},
  Vo = () => !1,
  sn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ss = (e) => e.startsWith("onUpdate:"),
  ee = Object.assign,
  rs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  zo = Object.prototype.hasOwnProperty,
  U = (e, t) => zo.call(e, t),
  F = Array.isArray,
  nt = (e) => rn(e) === "[object Map]",
  Er = (e) => rn(e) === "[object Set]",
  I = (e) => typeof e == "function",
  Y = (e) => typeof e == "string",
  ut = (e) => typeof e == "symbol",
  W = (e) => e !== null && typeof e == "object",
  vr = (e) => (W(e) || I(e)) && I(e.then) && I(e.catch),
  Sr = Object.prototype.toString,
  rn = (e) => Sr.call(e),
  qo = (e) => rn(e).slice(8, -1),
  Or = (e) => rn(e) === "[object Object]",
  os = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  _t = ns(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  on = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Wo = /-(\w)/g,
  ot = on((e) => e.replace(Wo, (t, n) => (n ? n.toUpperCase() : ""))),
  Jo = /\B([A-Z])/g,
  ft = on((e) => e.replace(Jo, "-$1").toLowerCase()),
  Rr = on((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Rn = on((e) => (e ? `on${Rr(e)}` : "")),
  De = (e, t) => !Object.is(e, t),
  An = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Xt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Go = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Is;
const Ar = () =>
  Is ||
  (Is =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function ln(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = Y(s) ? Zo(s) : ln(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (Y(e) || W(e)) return e;
}
const Xo = /;(?![^(]*\))/g,
  Yo = /:([^]+)/,
  Qo = /\/\*[^]*?\*\//g;
function Zo(e) {
  const t = {};
  return (
    e
      .replace(Qo, "")
      .split(Xo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Yo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function is(e) {
  let t = "";
  if (Y(e)) t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = is(e[n]);
      s && (t += s + " ");
    }
  else if (W(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const ei =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ti = ns(ei);
function Cr(e) {
  return !!e || e === "";
}
const Ls = (e) =>
    Y(e)
      ? e
      : e == null
        ? ""
        : F(e) || (W(e) && (e.toString === Sr || !I(e.toString)))
          ? JSON.stringify(e, Tr, 2)
          : String(e),
  Tr = (e, t) =>
    t && t.__v_isRef
      ? Tr(e, t.value)
      : nt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[Cn(s, o) + " =>"] = r), n),
              {}
            ),
          }
        : Er(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Cn(n)) }
          : ut(t)
            ? Cn(t)
            : W(t) && !F(t) && !Or(t)
              ? String(t)
              : t,
  Cn = (e, t = "") => {
    var n;
    return ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let pe;
class ni {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = pe),
      !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = pe;
      try {
        return (pe = this), t();
      } finally {
        pe = n;
      }
    }
  }
  on() {
    pe = this;
  }
  off() {
    pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function si(e, t = pe) {
  t && t.active && t.effects.push(e);
}
function ri() {
  return pe;
}
let We;
class ls {
  constructor(t, n, s, r) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      si(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), Xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (oi(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ye();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = $e,
      n = We;
    try {
      return ($e = !0), (We = this), this._runnings++, js(this), this.fn();
    } finally {
      Ms(this), this._runnings--, (We = n), ($e = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (js(this),
      Ms(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function oi(e) {
  return e.value;
}
function js(e) {
  e._trackId++, (e._depsLength = 0);
}
function Ms(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Pr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Pr(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let $e = !0,
  Un = 0;
const Nr = [];
function Xe() {
  Nr.push($e), ($e = !1);
}
function Ye() {
  const e = Nr.pop();
  $e = e === void 0 ? !0 : e;
}
function cs() {
  Un++;
}
function us() {
  for (Un--; !Un && Dn.length; ) Dn.shift()();
}
function Fr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Pr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Dn = [];
function Ir(e, t, n) {
  cs();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (r ?? (r = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && Dn.push(s.scheduler)));
  }
  us();
}
const Lr = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  Hn = new WeakMap(),
  Je = Symbol(""),
  kn = Symbol("");
function ie(e, t, n) {
  if ($e && We) {
    let s = Hn.get(e);
    s || Hn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Lr(() => s.delete(n)))), Fr(We, r);
  }
}
function Pe(e, t, n, s, r, o) {
  const i = Hn.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && F(e)) {
    const u = Number(s);
    i.forEach((a, d) => {
      (d === "length" || (!ut(d) && d >= u)) && l.push(a);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        F(e)
          ? os(n) && l.push(i.get("length"))
          : (l.push(i.get(Je)), nt(e) && l.push(i.get(kn)));
        break;
      case "delete":
        F(e) || (l.push(i.get(Je)), nt(e) && l.push(i.get(kn)));
        break;
      case "set":
        nt(e) && l.push(i.get(Je));
        break;
    }
  cs();
  for (const u of l) u && Ir(u, 4);
  us();
}
const ii = ns("__proto__,__v_isRef,__isVue"),
  jr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ut)
  ),
  Bs = li();
function li() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = H(this);
        for (let o = 0, i = this.length; o < i; o++) ie(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(H)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Xe(), cs();
        const s = H(this)[t].apply(this, n);
        return us(), Ye(), s;
      };
    }),
    e
  );
}
function ci(e) {
  const t = H(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class Mr {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return s === (r ? (o ? wi : Dr) : o ? Ur : $r).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = F(t);
    if (!r) {
      if (i && U(Bs, n)) return Reflect.get(Bs, n, s);
      if (n === "hasOwnProperty") return ci;
    }
    const l = Reflect.get(t, n, s);
    return (ut(n) ? jr.has(n) : ii(n)) || (r || ie(t, "get", n), o)
      ? l
      : le(l)
        ? i && os(n)
          ? l
          : l.value
        : W(l)
          ? r
            ? Hr(l)
            : ds(l)
          : l;
  }
}
class Br extends Mr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const u = it(o);
      if (
        (!Yt(s) && !it(s) && ((o = H(o)), (s = H(s))), !F(t) && le(o) && !le(s))
      )
        return u ? !1 : ((o.value = s), !0);
    }
    const i = F(t) && os(n) ? Number(n) < t.length : U(t, n),
      l = Reflect.set(t, n, s, r);
    return (
      t === H(r) && (i ? De(s, o) && Pe(t, "set", n, s) : Pe(t, "add", n, s)), l
    );
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Pe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ut(n) || !jr.has(n)) && ie(t, "has", n), s;
  }
  ownKeys(t) {
    return ie(t, "iterate", F(t) ? "length" : Je), Reflect.ownKeys(t);
  }
}
class ui extends Mr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const fi = new Br(),
  ai = new ui(),
  di = new Br(!0),
  fs = (e) => e,
  cn = (e) => Reflect.getPrototypeOf(e);
function jt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = H(e),
    o = H(t);
  n || (De(t, o) && ie(r, "get", t), ie(r, "get", o));
  const { has: i } = cn(r),
    l = s ? fs : n ? ps : wt;
  if (i.call(r, t)) return l(e.get(t));
  if (i.call(r, o)) return l(e.get(o));
  e !== r && e.get(t);
}
function Mt(e, t = !1) {
  const n = this.__v_raw,
    s = H(n),
    r = H(e);
  return (
    t || (De(e, r) && ie(s, "has", e), ie(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Bt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ie(H(e), "iterate", Je), Reflect.get(e, "size", e)
  );
}
function $s(e) {
  e = H(e);
  const t = H(this);
  return cn(t).has.call(t, e) || (t.add(e), Pe(t, "add", e, e)), this;
}
function Us(e, t) {
  t = H(t);
  const n = H(this),
    { has: s, get: r } = cn(n);
  let o = s.call(n, e);
  o || ((e = H(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? De(t, i) && Pe(n, "set", e, t) : Pe(n, "add", e, t), this
  );
}
function Ds(e) {
  const t = H(this),
    { has: n, get: s } = cn(t);
  let r = n.call(t, e);
  r || ((e = H(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && Pe(t, "delete", e, void 0), o;
}
function Hs() {
  const e = H(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Pe(e, "clear", void 0, void 0), n;
}
function $t(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = H(i),
      u = t ? fs : e ? ps : wt;
    return (
      !e && ie(l, "iterate", Je), i.forEach((a, d) => s.call(r, u(a), u(d), o))
    );
  };
}
function Ut(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = H(r),
      i = nt(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      u = e === "keys" && i,
      a = r[e](...s),
      d = n ? fs : t ? ps : wt;
    return (
      !t && ie(o, "iterate", u ? kn : Je),
      {
        next() {
          const { value: h, done: v } = a.next();
          return v
            ? { value: h, done: v }
            : { value: l ? [d(h[0]), d(h[1])] : d(h), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ie(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hi() {
  const e = {
      get(o) {
        return jt(this, o);
      },
      get size() {
        return Bt(this);
      },
      has: Mt,
      add: $s,
      set: Us,
      delete: Ds,
      clear: Hs,
      forEach: $t(!1, !1),
    },
    t = {
      get(o) {
        return jt(this, o, !1, !0);
      },
      get size() {
        return Bt(this);
      },
      has: Mt,
      add: $s,
      set: Us,
      delete: Ds,
      clear: Hs,
      forEach: $t(!1, !0),
    },
    n = {
      get(o) {
        return jt(this, o, !0);
      },
      get size() {
        return Bt(this, !0);
      },
      has(o) {
        return Mt.call(this, o, !0);
      },
      add: Ie("add"),
      set: Ie("set"),
      delete: Ie("delete"),
      clear: Ie("clear"),
      forEach: $t(!0, !1),
    },
    s = {
      get(o) {
        return jt(this, o, !0, !0);
      },
      get size() {
        return Bt(this, !0);
      },
      has(o) {
        return Mt.call(this, o, !0);
      },
      add: Ie("add"),
      set: Ie("set"),
      delete: Ie("delete"),
      clear: Ie("clear"),
      forEach: $t(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Ut(o, !1, !1)),
        (n[o] = Ut(o, !0, !1)),
        (t[o] = Ut(o, !1, !0)),
        (s[o] = Ut(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [pi, mi, gi, _i] = hi();
function as(e, t) {
  const n = t ? (e ? _i : gi) : e ? mi : pi;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(U(n, r) && r in s ? n : s, r, o);
}
const bi = { get: as(!1, !1) },
  yi = { get: as(!1, !0) },
  xi = { get: as(!0, !1) },
  $r = new WeakMap(),
  Ur = new WeakMap(),
  Dr = new WeakMap(),
  wi = new WeakMap();
function Ei(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function vi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ei(qo(e));
}
function ds(e) {
  return it(e) ? e : hs(e, !1, fi, bi, $r);
}
function Si(e) {
  return hs(e, !1, di, yi, Ur);
}
function Hr(e) {
  return hs(e, !0, ai, xi, Dr);
}
function hs(e, t, n, s, r) {
  if (!W(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = vi(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function st(e) {
  return it(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function it(e) {
  return !!(e && e.__v_isReadonly);
}
function Yt(e) {
  return !!(e && e.__v_isShallow);
}
function kr(e) {
  return st(e) || it(e);
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
function Kr(e) {
  return Object.isExtensible(e) && Xt(e, "__v_skip", !0), e;
}
const wt = (e) => (W(e) ? ds(e) : e),
  ps = (e) => (W(e) ? Hr(e) : e);
class Vr {
  constructor(t, n, s, r) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ls(
        () => t(this._value),
        () => Ht(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = H(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        De(t._value, (t._value = t.effect.run())) &&
        Ht(t, 4),
      zr(t),
      t.effect._dirtyLevel >= 2 && Ht(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function Oi(e, t, n = !1) {
  let s, r;
  const o = I(e);
  return (
    o ? ((s = e), (r = fe)) : ((s = e.get), (r = e.set)),
    new Vr(s, r, o || !r, n)
  );
}
function zr(e) {
  var t;
  $e &&
    We &&
    ((e = H(e)),
    Fr(
      We,
      (t = e.dep) != null
        ? t
        : (e.dep = Lr(() => (e.dep = void 0), e instanceof Vr ? e : void 0))
    ));
}
function Ht(e, t = 4, n) {
  e = H(e);
  const s = e.dep;
  s && Ir(s, t);
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function Et(e) {
  return Ri(e, !1);
}
function Ri(e, t) {
  return le(e) ? e : new Ai(e, t);
}
class Ai {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : H(t)),
      (this._value = n ? t : wt(t));
  }
  get value() {
    return zr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Yt(t) || it(t);
    (t = n ? t : H(t)),
      De(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : wt(t)), Ht(this, 4));
  }
}
function Ci(e) {
  return le(e) ? e.value : e;
}
const Ti = {
  get: (e, t, n) => Ci(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return le(r) && !le(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function qr(e) {
  return st(e) ? e : new Proxy(e, Ti);
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ue(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    un(r, t, n);
  }
}
function _e(e, t, n, s) {
  if (I(e)) {
    const o = Ue(e, t, n, s);
    return (
      o &&
        vr(o) &&
        o.catch((i) => {
          un(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(_e(e[o], t, n, s));
  return r;
}
function un(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++) if (a[d](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ue(u, null, 10, [e, i, l]);
      return;
    }
  }
  Pi(e, n, r, s);
}
function Pi(e, t, n, s = !0) {
  console.error(e);
}
let vt = !1,
  Kn = !1;
const Z = [];
let Se = 0;
const rt = [];
let je = null,
  qe = 0;
const Wr = Promise.resolve();
let ms = null;
function Ni(e) {
  const t = ms || Wr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fi(e) {
  let t = Se + 1,
    n = Z.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Z[s],
      o = St(r);
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function gs(e) {
  (!Z.length || !Z.includes(e, vt && e.allowRecurse ? Se + 1 : Se)) &&
    (e.id == null ? Z.push(e) : Z.splice(Fi(e.id), 0, e), Jr());
}
function Jr() {
  !vt && !Kn && ((Kn = !0), (ms = Wr.then(Xr)));
}
function Ii(e) {
  const t = Z.indexOf(e);
  t > Se && Z.splice(t, 1);
}
function Li(e) {
  F(e)
    ? rt.push(...e)
    : (!je || !je.includes(e, e.allowRecurse ? qe + 1 : qe)) && rt.push(e),
    Jr();
}
function ks(e, t, n = vt ? Se + 1 : 0) {
  for (; n < Z.length; n++) {
    const s = Z[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      Z.splice(n, 1), n--, s();
    }
  }
}
function Gr(e) {
  if (rt.length) {
    const t = [...new Set(rt)].sort((n, s) => St(n) - St(s));
    if (((rt.length = 0), je)) {
      je.push(...t);
      return;
    }
    for (je = t, qe = 0; qe < je.length; qe++) je[qe]();
    (je = null), (qe = 0);
  }
}
const St = (e) => (e.id == null ? 1 / 0 : e.id),
  ji = (e, t) => {
    const n = St(e) - St(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Xr(e) {
  (Kn = !1), (vt = !0), Z.sort(ji);
  try {
    for (Se = 0; Se < Z.length; Se++) {
      const t = Z[Se];
      t && t.active !== !1 && Ue(t, null, 14);
    }
  } finally {
    (Se = 0),
      (Z.length = 0),
      Gr(),
      (vt = !1),
      (ms = null),
      (Z.length || rt.length) && Xr();
  }
}
function Mi(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || z;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: h, trim: v } = s[d] || z;
    v && (r = n.map((A) => (Y(A) ? A.trim() : A))), h && (r = n.map(Go));
  }
  let l,
    u = s[(l = Rn(t))] || s[(l = Rn(ot(t)))];
  !u && o && (u = s[(l = Rn(ft(t)))]), u && _e(u, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), _e(a, e, 6, r);
  }
}
function Yr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!I(e)) {
    const u = (a) => {
      const d = Yr(a, t, !0);
      d && ((l = !0), ee(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !o && !l
    ? (W(e) && s.set(e, null), null)
    : (F(o) ? o.forEach((u) => (i[u] = null)) : ee(i, o),
      W(e) && s.set(e, i),
      i);
}
function fn(e, t) {
  return !e || !sn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, ft(t)) || U(e, t));
}
let Oe = null,
  Qr = null;
function Qt(e) {
  const t = Oe;
  return (Oe = e), (Qr = (e && e.type.__scopeId) || null), t;
}
function Bi(e, t = Oe, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Qs(-1);
    const o = Qt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Qt(o), s._d && Qs(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Tn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: u,
    emit: a,
    render: d,
    renderCache: h,
    data: v,
    setupState: A,
    ctx: O,
    inheritAttrs: E,
  } = e;
  let L, M;
  const X = Qt(e);
  try {
    if (n.shapeFlag & 4) {
      const G = r || s,
        ue = G;
      (L = ve(d.call(ue, G, h, o, A, v, O))), (M = u);
    } else {
      const G = t;
      (L = ve(
        G.length > 1 ? G(o, { attrs: u, slots: l, emit: a }) : G(o, null)
      )),
        (M = t.props ? u : $i(u));
    }
  } catch (G) {
    (xt.length = 0), un(G, e, 1), (L = se(Ge));
  }
  let B = L;
  if (M && E !== !1) {
    const G = Object.keys(M),
      { shapeFlag: ue } = B;
    G.length && ue & 7 && (i && G.some(ss) && (M = Ui(M, i)), (B = lt(B, M)));
  }
  return (
    n.dirs && ((B = lt(B)), (B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (B.transition = n.transition),
    (L = B),
    Qt(X),
    L
  );
}
const $i = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || sn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ui = (e, t) => {
    const n = {};
    for (const s in e) (!ss(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Di(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: u } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return s ? Ks(s, i, a) : !!i;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const v = d[h];
        if (i[v] !== s[v] && !fn(a, v)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
        ? !1
        : s
          ? i
            ? Ks(s, i, a)
            : !0
          : !!i;
  return !1;
}
function Ks(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !fn(n, o)) return !0;
  }
  return !1;
}
function Hi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const ki = Symbol.for("v-ndc"),
  Ki = (e) => e.__isSuspense;
function Vi(e, t) {
  t && t.pendingBranch
    ? F(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Li(e);
}
const zi = Symbol.for("v-scx"),
  qi = () => Kt(zi),
  Dt = {};
function Pn(e, t, n) {
  return Zr(e, t, n);
}
function Zr(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: l } = z
) {
  if (t && o) {
    const D = t;
    t = (...Ce) => {
      D(...Ce), ue();
    };
  }
  const u = re,
    a = (D) => (s === !0 ? D : et(D, s === !1 ? 1 : void 0));
  let d,
    h = !1,
    v = !1;
  if (
    (le(e)
      ? ((d = () => e.value), (h = Yt(e)))
      : st(e)
        ? ((d = () => a(e)), (h = !0))
        : F(e)
          ? ((v = !0),
            (h = e.some((D) => st(D) || Yt(D))),
            (d = () =>
              e.map((D) => {
                if (le(D)) return D.value;
                if (st(D)) return a(D);
                if (I(D)) return Ue(D, u, 2);
              })))
          : I(e)
            ? t
              ? (d = () => Ue(e, u, 2))
              : (d = () => (A && A(), _e(e, u, 3, [O])))
            : (d = fe),
    t && s)
  ) {
    const D = d;
    d = () => et(D());
  }
  let A,
    O = (D) => {
      A = B.onStop = () => {
        Ue(D, u, 4), (A = B.onStop = void 0);
      };
    },
    E;
  if (mn)
    if (
      ((O = fe),
      t ? n && _e(t, u, 3, [d(), v ? [] : void 0, O]) : d(),
      r === "sync")
    ) {
      const D = qi();
      E = D.__watcherHandles || (D.__watcherHandles = []);
    } else return fe;
  let L = v ? new Array(e.length).fill(Dt) : Dt;
  const M = () => {
    if (!(!B.active || !B.dirty))
      if (t) {
        const D = B.run();
        (s || h || (v ? D.some((Ce, ye) => De(Ce, L[ye])) : De(D, L))) &&
          (A && A(),
          _e(t, u, 3, [D, L === Dt ? void 0 : v && L[0] === Dt ? [] : L, O]),
          (L = D));
      } else B.run();
  };
  M.allowRecurse = !!t;
  let X;
  r === "sync"
    ? (X = M)
    : r === "post"
      ? (X = () => oe(M, u && u.suspense))
      : ((M.pre = !0), u && (M.id = u.uid), (X = () => gs(M)));
  const B = new ls(d, fe, X),
    G = ri(),
    ue = () => {
      B.stop(), G && rs(G.effects, B);
    };
  return (
    t
      ? n
        ? M()
        : (L = B.run())
      : r === "post"
        ? oe(B.run.bind(B), u && u.suspense)
        : B.run(),
    E && E.push(ue),
    ue
  );
}
function Wi(e, t, n) {
  const s = this.proxy,
    r = Y(e) ? (e.includes(".") ? eo(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  I(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Ct(this),
    l = Zr(r, o.bind(s), n);
  return i(), l;
}
function eo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function et(e, t, n = 0, s) {
  if (!W(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((s = s || new Set()), s.has(e))) return e;
  if ((s.add(e), le(e))) et(e.value, t, n, s);
  else if (F(e)) for (let r = 0; r < e.length; r++) et(e[r], t, n, s);
  else if (Er(e) || nt(e))
    e.forEach((r) => {
      et(r, t, n, s);
    });
  else if (Or(e)) for (const r in e) et(e[r], t, n, s);
  return e;
}
function Ve(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let u = l.dir[s];
    u && (Xe(), _e(u, n, 8, [e.el, l, e, t]), Ye());
  }
}
const kt = (e) => !!e.type.__asyncLoader,
  to = (e) => e.type.__isKeepAlive;
function Ji(e, t) {
  no(e, "a", t);
}
function Gi(e, t) {
  no(e, "da", t);
}
function no(e, t, n = re) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((an(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      to(r.parent.vnode) && Xi(s, t, n, r), (r = r.parent);
  }
}
function Xi(e, t, n, s) {
  const r = an(t, e, s, !0);
  so(() => {
    rs(s[t], r);
  }, n);
}
function an(e, t, n = re, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Xe();
          const l = Ct(n),
            u = _e(t, n, e, i);
          return l(), Ye(), u;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Fe =
    (e) =>
    (t, n = re) =>
      (!mn || e === "sp") && an(e, (...s) => t(...s), n),
  Yi = Fe("bm"),
  At = Fe("m"),
  Qi = Fe("bu"),
  Zi = Fe("u"),
  el = Fe("bum"),
  so = Fe("um"),
  tl = Fe("sp"),
  nl = Fe("rtg"),
  sl = Fe("rtc");
function rl(e, t = re) {
  an("ec", e, t);
}
function ol(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (F(e) || Y(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (W(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, u = i.length; l < u; l++) {
        const a = i[l];
        r[l] = t(e[a], a, l, o && o[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const Vn = (e) => (e ? (go(e) ? xs(e) || e.proxy : Vn(e.parent)) : null),
  bt = ee(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vn(e.parent),
    $root: (e) => Vn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => _s(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), gs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Ni.bind(e.proxy)),
    $watch: (e) => Wi.bind(e),
  }),
  Nn = (e, t) => e !== z && !e.__isScriptSetup && U(e, t),
  il = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: u,
      } = e;
      let a;
      if (t[0] !== "$") {
        const A = i[t];
        if (A !== void 0)
          switch (A) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Nn(s, t)) return (i[t] = 1), s[t];
          if (r !== z && U(r, t)) return (i[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && U(a, t)) return (i[t] = 3), o[t];
          if (n !== z && U(n, t)) return (i[t] = 4), n[t];
          zn && (i[t] = 0);
        }
      }
      const d = bt[t];
      let h, v;
      if (d) return t === "$attrs" && ie(e, "get", t), d(e);
      if ((h = l.__cssModules) && (h = h[t])) return h;
      if (n !== z && U(n, t)) return (i[t] = 4), n[t];
      if (((v = u.config.globalProperties), U(v, t))) return v[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return Nn(r, t)
        ? ((r[t] = n), !0)
        : s !== z && U(s, t)
          ? ((s[t] = n), !0)
          : U(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== z && U(e, i)) ||
        Nn(t, i) ||
        ((l = o[0]) && U(l, i)) ||
        U(s, i) ||
        U(bt, i) ||
        U(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : U(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Vs(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let zn = !0;
function ll(e) {
  const t = _s(e),
    n = e.proxy,
    s = e.ctx;
  (zn = !1), t.beforeCreate && zs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: u,
    inject: a,
    created: d,
    beforeMount: h,
    mounted: v,
    beforeUpdate: A,
    updated: O,
    activated: E,
    deactivated: L,
    beforeDestroy: M,
    beforeUnmount: X,
    destroyed: B,
    unmounted: G,
    render: ue,
    renderTracked: D,
    renderTriggered: Ce,
    errorCaptured: ye,
    serverPrefetch: wn,
    expose: He,
    inheritAttrs: dt,
    components: Nt,
    directives: Ft,
    filters: En,
  } = t;
  if ((a && cl(a, s, null), i))
    for (const q in i) {
      const K = i[q];
      I(K) && (s[q] = K.bind(n));
    }
  if (r) {
    const q = r.call(n, n);
    W(q) && (e.data = ds(q));
  }
  if (((zn = !0), o))
    for (const q in o) {
      const K = o[q],
        ke = I(K) ? K.bind(n, n) : I(K.get) ? K.get.bind(n, n) : fe,
        It = !I(K) && I(K.set) ? K.set.bind(n) : fe,
        Ke = Ul({ get: ke, set: It });
      Object.defineProperty(s, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Ke.value,
        set: (xe) => (Ke.value = xe),
      });
    }
  if (l) for (const q in l) ro(l[q], s, n, q);
  if (u) {
    const q = I(u) ? u.call(n) : u;
    Reflect.ownKeys(q).forEach((K) => {
      pl(K, q[K]);
    });
  }
  d && zs(d, e, "c");
  function te(q, K) {
    F(K) ? K.forEach((ke) => q(ke.bind(n))) : K && q(K.bind(n));
  }
  if (
    (te(Yi, h),
    te(At, v),
    te(Qi, A),
    te(Zi, O),
    te(Ji, E),
    te(Gi, L),
    te(rl, ye),
    te(sl, D),
    te(nl, Ce),
    te(el, X),
    te(so, G),
    te(tl, wn),
    F(He))
  )
    if (He.length) {
      const q = e.exposed || (e.exposed = {});
      He.forEach((K) => {
        Object.defineProperty(q, K, {
          get: () => n[K],
          set: (ke) => (n[K] = ke),
        });
      });
    } else e.exposed || (e.exposed = {});
  ue && e.render === fe && (e.render = ue),
    dt != null && (e.inheritAttrs = dt),
    Nt && (e.components = Nt),
    Ft && (e.directives = Ft);
}
function cl(e, t, n = fe) {
  F(e) && (e = qn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    W(r)
      ? "default" in r
        ? (o = Kt(r.from || s, r.default, !0))
        : (o = Kt(r.from || s))
      : (o = Kt(r)),
      le(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o);
  }
}
function zs(e, t, n) {
  _e(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ro(e, t, n, s) {
  const r = s.includes(".") ? eo(n, s) : () => n[s];
  if (Y(e)) {
    const o = t[e];
    I(o) && Pn(r, o);
  } else if (I(e)) Pn(r, e.bind(n));
  else if (W(e))
    if (F(e)) e.forEach((o) => ro(o, t, n, s));
    else {
      const o = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(o) && Pn(r, o, e);
    }
}
function _s(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let u;
  return (
    l
      ? (u = l)
      : !r.length && !n && !s
        ? (u = t)
        : ((u = {}),
          r.length && r.forEach((a) => Zt(u, a, i, !0)),
          Zt(u, t, i)),
    W(t) && o.set(t, u),
    u
  );
}
function Zt(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Zt(e, o, n, !0), r && r.forEach((i) => Zt(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = ul[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ul = {
  data: qs,
  props: Ws,
  emits: Ws,
  methods: gt,
  computed: gt,
  beforeCreate: ne,
  created: ne,
  beforeMount: ne,
  mounted: ne,
  beforeUpdate: ne,
  updated: ne,
  beforeDestroy: ne,
  beforeUnmount: ne,
  destroyed: ne,
  unmounted: ne,
  activated: ne,
  deactivated: ne,
  errorCaptured: ne,
  serverPrefetch: ne,
  components: gt,
  directives: gt,
  watch: al,
  provide: qs,
  inject: fl,
};
function qs(e, t) {
  return t
    ? e
      ? function () {
          return ee(
            I(e) ? e.call(this, this) : e,
            I(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function fl(e, t) {
  return gt(qn(e), qn(t));
}
function qn(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gt(e, t) {
  return e ? ee(Object.create(null), e, t) : t;
}
function Ws(e, t) {
  return e
    ? F(e) && F(t)
      ? [...new Set([...e, ...t])]
      : ee(Object.create(null), Vs(e), Vs(t ?? {}))
    : t;
}
function al(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ee(Object.create(null), e);
  for (const s in t) n[s] = ne(e[s], t[s]);
  return n;
}
function oo() {
  return {
    app: null,
    config: {
      isNativeTag: Vo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let dl = 0;
function hl(e, t) {
  return function (s, r = null) {
    I(s) || (s = ee({}, s)), r != null && !W(r) && (r = null);
    const o = oo(),
      i = new WeakSet();
    let l = !1;
    const u = (o.app = {
      _uid: dl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Dl,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...d) {
        return (
          i.has(a) ||
            (a && I(a.install)
              ? (i.add(a), a.install(u, ...d))
              : I(a) && (i.add(a), a(u, ...d))),
          u
        );
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, d) {
        return d ? ((o.components[a] = d), u) : o.components[a];
      },
      directive(a, d) {
        return d ? ((o.directives[a] = d), u) : o.directives[a];
      },
      mount(a, d, h) {
        if (!l) {
          const v = se(s, r);
          return (
            (v.appContext = o),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            d && t ? t(v, a) : e(v, a, h),
            (l = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            xs(v.component) || v.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, d) {
        return (o.provides[a] = d), u;
      },
      runWithContext(a) {
        const d = yt;
        yt = u;
        try {
          return a();
        } finally {
          yt = d;
        }
      },
    });
    return u;
  };
}
let yt = null;
function pl(e, t) {
  if (re) {
    let n = re.provides;
    const s = re.parent && re.parent.provides;
    s === n && (n = re.provides = Object.create(s)), (n[e] = t);
  }
}
function Kt(e, t, n = !1) {
  const s = re || Oe;
  if (s || yt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : yt._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && I(t) ? t.call(s && s.proxy) : t;
  }
}
function ml(e, t, n, s = !1) {
  const r = {},
    o = {};
  Xt(o, hn, 1), (e.propsDefaults = Object.create(null)), io(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : Si(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function gl(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = H(r),
    [u] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let v = d[h];
        if (fn(e.emitsOptions, v)) continue;
        const A = t[v];
        if (u)
          if (U(o, v)) A !== o[v] && ((o[v] = A), (a = !0));
          else {
            const O = ot(v);
            r[O] = Wn(u, l, O, A, e, !1);
          }
        else A !== o[v] && ((o[v] = A), (a = !0));
      }
    }
  } else {
    io(e, t, r, o) && (a = !0);
    let d;
    for (const h in l)
      (!t || (!U(t, h) && ((d = ft(h)) === h || !U(t, d)))) &&
        (u
          ? n &&
            (n[h] !== void 0 || n[d] !== void 0) &&
            (r[h] = Wn(u, l, h, void 0, e, !0))
          : delete r[h]);
    if (o !== l) for (const h in o) (!t || !U(t, h)) && (delete o[h], (a = !0));
  }
  a && Pe(e, "set", "$attrs");
}
function io(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let u in t) {
      if (_t(u)) continue;
      const a = t[u];
      let d;
      r && U(r, (d = ot(u)))
        ? !o || !o.includes(d)
          ? (n[d] = a)
          : ((l || (l = {}))[d] = a)
        : fn(e.emitsOptions, u) ||
          ((!(u in s) || a !== s[u]) && ((s[u] = a), (i = !0)));
    }
  if (o) {
    const u = H(n),
      a = l || z;
    for (let d = 0; d < o.length; d++) {
      const h = o[d];
      n[h] = Wn(r, u, h, a[h], e, !U(a, h));
    }
  }
  return i;
}
function Wn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = U(i, "default");
    if (l && s === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && I(u)) {
        const { propsDefaults: a } = r;
        if (n in a) s = a[n];
        else {
          const d = Ct(r);
          (s = a[n] = u.call(null, t)), d();
        }
      } else s = u;
    }
    i[0] &&
      (o && !l ? (s = !1) : i[1] && (s === "" || s === ft(n)) && (s = !0));
  }
  return s;
}
function lo(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    l = [];
  let u = !1;
  if (!I(e)) {
    const d = (h) => {
      u = !0;
      const [v, A] = lo(h, t, !0);
      ee(i, v), A && l.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!o && !u) return W(e) && s.set(e, tt), tt;
  if (F(o))
    for (let d = 0; d < o.length; d++) {
      const h = ot(o[d]);
      Js(h) && (i[h] = z);
    }
  else if (o)
    for (const d in o) {
      const h = ot(d);
      if (Js(h)) {
        const v = o[d],
          A = (i[h] = F(v) || I(v) ? { type: v } : ee({}, v));
        if (A) {
          const O = Ys(Boolean, A.type),
            E = Ys(String, A.type);
          (A[0] = O > -1),
            (A[1] = E < 0 || O < E),
            (O > -1 || U(A, "default")) && l.push(h);
        }
      }
    }
  const a = [i, l];
  return W(e) && s.set(e, a), a;
}
function Js(e) {
  return e[0] !== "$" && !_t(e);
}
function Gs(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Xs(e, t) {
  return Gs(e) === Gs(t);
}
function Ys(e, t) {
  return F(t) ? t.findIndex((n) => Xs(n, e)) : I(t) && Xs(t, e) ? 0 : -1;
}
const co = (e) => e[0] === "_" || e === "$stable",
  bs = (e) => (F(e) ? e.map(ve) : [ve(e)]),
  _l = (e, t, n) => {
    if (t._n) return t;
    const s = Bi((...r) => bs(t(...r)), n);
    return (s._c = !1), s;
  },
  uo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (co(r)) continue;
      const o = e[r];
      if (I(o)) t[r] = _l(r, o, s);
      else if (o != null) {
        const i = bs(o);
        t[r] = () => i;
      }
    }
  },
  fo = (e, t) => {
    const n = bs(t);
    e.slots.default = () => n;
  },
  bl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = H(t)), Xt(t, "_", n)) : uo(t, (e.slots = {}));
    } else (e.slots = {}), t && fo(e, t);
    Xt(e.slots, hn, 1);
  },
  yl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = z;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (ee(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), uo(t, r)),
        (i = t);
    } else t && (fo(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !co(l) && i[l] == null && delete r[l];
  };
function Jn(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((v, A) => Jn(v, t && (F(t) ? t[A] : t), n, s, r));
    return;
  }
  if (kt(s) && !r) return;
  const o = s.shapeFlag & 4 ? xs(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: u } = e,
    a = t && t.r,
    d = l.refs === z ? (l.refs = {}) : l.refs,
    h = l.setupState;
  if (
    (a != null &&
      a !== u &&
      (Y(a)
        ? ((d[a] = null), U(h, a) && (h[a] = null))
        : le(a) && (a.value = null)),
    I(u))
  )
    Ue(u, l, 12, [i, d]);
  else {
    const v = Y(u),
      A = le(u);
    if (v || A) {
      const O = () => {
        if (e.f) {
          const E = v ? (U(h, u) ? h[u] : d[u]) : u.value;
          r
            ? F(E) && rs(E, o)
            : F(E)
              ? E.includes(o) || E.push(o)
              : v
                ? ((d[u] = [o]), U(h, u) && (h[u] = d[u]))
                : ((u.value = [o]), e.k && (d[e.k] = u.value));
        } else
          v
            ? ((d[u] = i), U(h, u) && (h[u] = i))
            : A && ((u.value = i), e.k && (d[e.k] = i));
      };
      i ? ((O.id = -1), oe(O, n)) : O();
    }
  }
}
const oe = Vi;
function xl(e) {
  return wl(e);
}
function wl(e, t) {
  const n = Ar();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: u,
      setText: a,
      setElementText: d,
      parentNode: h,
      nextSibling: v,
      setScopeId: A = fe,
      insertStaticContent: O,
    } = e,
    E = (
      c,
      f,
      p,
      g = null,
      _ = null,
      x = null,
      S = void 0,
      y = null,
      w = !!f.dynamicChildren
    ) => {
      if (c === f) return;
      c && !pt(c, f) && ((g = Lt(c)), xe(c, _, x, !0), (c = null)),
        f.patchFlag === -2 && ((w = !1), (f.dynamicChildren = null));
      const { type: b, ref: R, shapeFlag: T } = f;
      switch (b) {
        case dn:
          L(c, f, p, g);
          break;
        case Ge:
          M(c, f, p, g);
          break;
        case Vt:
          c == null && X(f, p, g, S);
          break;
        case me:
          Nt(c, f, p, g, _, x, S, y, w);
          break;
        default:
          T & 1
            ? ue(c, f, p, g, _, x, S, y, w)
            : T & 6
              ? Ft(c, f, p, g, _, x, S, y, w)
              : (T & 64 || T & 128) && b.process(c, f, p, g, _, x, S, y, w, Qe);
      }
      R != null && _ && Jn(R, c && c.ref, x, f || c, !f);
    },
    L = (c, f, p, g) => {
      if (c == null) s((f.el = l(f.children)), p, g);
      else {
        const _ = (f.el = c.el);
        f.children !== c.children && a(_, f.children);
      }
    },
    M = (c, f, p, g) => {
      c == null ? s((f.el = u(f.children || "")), p, g) : (f.el = c.el);
    },
    X = (c, f, p, g) => {
      [c.el, c.anchor] = O(c.children, f, p, g, c.el, c.anchor);
    },
    B = ({ el: c, anchor: f }, p, g) => {
      let _;
      for (; c && c !== f; ) (_ = v(c)), s(c, p, g), (c = _);
      s(f, p, g);
    },
    G = ({ el: c, anchor: f }) => {
      let p;
      for (; c && c !== f; ) (p = v(c)), r(c), (c = p);
      r(f);
    },
    ue = (c, f, p, g, _, x, S, y, w) => {
      f.type === "svg" ? (S = "svg") : f.type === "math" && (S = "mathml"),
        c == null ? D(f, p, g, _, x, S, y, w) : wn(c, f, _, x, S, y, w);
    },
    D = (c, f, p, g, _, x, S, y) => {
      let w, b;
      const { props: R, shapeFlag: T, transition: C, dirs: N } = c;
      if (
        ((w = c.el = i(c.type, x, R && R.is, R)),
        T & 8
          ? d(w, c.children)
          : T & 16 && ye(c.children, w, null, g, _, Fn(c, x), S, y),
        N && Ve(c, null, g, "created"),
        Ce(w, c, c.scopeId, S, g),
        R)
      ) {
        for (const k in R)
          k !== "value" &&
            !_t(k) &&
            o(w, k, null, R[k], x, c.children, g, _, Te);
        "value" in R && o(w, "value", null, R.value, x),
          (b = R.onVnodeBeforeMount) && Ee(b, g, c);
      }
      N && Ve(c, null, g, "beforeMount");
      const j = El(_, C);
      j && C.beforeEnter(w),
        s(w, f, p),
        ((b = R && R.onVnodeMounted) || j || N) &&
          oe(() => {
            b && Ee(b, g, c), j && C.enter(w), N && Ve(c, null, g, "mounted");
          }, _);
    },
    Ce = (c, f, p, g, _) => {
      if ((p && A(c, p), g)) for (let x = 0; x < g.length; x++) A(c, g[x]);
      if (_) {
        let x = _.subTree;
        if (f === x) {
          const S = _.vnode;
          Ce(c, S, S.scopeId, S.slotScopeIds, _.parent);
        }
      }
    },
    ye = (c, f, p, g, _, x, S, y, w = 0) => {
      for (let b = w; b < c.length; b++) {
        const R = (c[b] = y ? Me(c[b]) : ve(c[b]));
        E(null, R, f, p, g, _, x, S, y);
      }
    },
    wn = (c, f, p, g, _, x, S) => {
      const y = (f.el = c.el);
      let { patchFlag: w, dynamicChildren: b, dirs: R } = f;
      w |= c.patchFlag & 16;
      const T = c.props || z,
        C = f.props || z;
      let N;
      if (
        (p && ze(p, !1),
        (N = C.onVnodeBeforeUpdate) && Ee(N, p, f, c),
        R && Ve(f, c, p, "beforeUpdate"),
        p && ze(p, !0),
        b
          ? He(c.dynamicChildren, b, y, p, g, Fn(f, _), x)
          : S || K(c, f, y, null, p, g, Fn(f, _), x, !1),
        w > 0)
      ) {
        if (w & 16) dt(y, f, T, C, p, g, _);
        else if (
          (w & 2 && T.class !== C.class && o(y, "class", null, C.class, _),
          w & 4 && o(y, "style", T.style, C.style, _),
          w & 8)
        ) {
          const j = f.dynamicProps;
          for (let k = 0; k < j.length; k++) {
            const V = j[k],
              Q = T[V],
              he = C[V];
            (he !== Q || V === "value") &&
              o(y, V, Q, he, _, c.children, p, g, Te);
          }
        }
        w & 1 && c.children !== f.children && d(y, f.children);
      } else !S && b == null && dt(y, f, T, C, p, g, _);
      ((N = C.onVnodeUpdated) || R) &&
        oe(() => {
          N && Ee(N, p, f, c), R && Ve(f, c, p, "updated");
        }, g);
    },
    He = (c, f, p, g, _, x, S) => {
      for (let y = 0; y < f.length; y++) {
        const w = c[y],
          b = f[y],
          R =
            w.el && (w.type === me || !pt(w, b) || w.shapeFlag & 70)
              ? h(w.el)
              : p;
        E(w, b, R, null, g, _, x, S, !0);
      }
    },
    dt = (c, f, p, g, _, x, S) => {
      if (p !== g) {
        if (p !== z)
          for (const y in p)
            !_t(y) && !(y in g) && o(c, y, p[y], null, S, f.children, _, x, Te);
        for (const y in g) {
          if (_t(y)) continue;
          const w = g[y],
            b = p[y];
          w !== b && y !== "value" && o(c, y, b, w, S, f.children, _, x, Te);
        }
        "value" in g && o(c, "value", p.value, g.value, S);
      }
    },
    Nt = (c, f, p, g, _, x, S, y, w) => {
      const b = (f.el = c ? c.el : l("")),
        R = (f.anchor = c ? c.anchor : l(""));
      let { patchFlag: T, dynamicChildren: C, slotScopeIds: N } = f;
      N && (y = y ? y.concat(N) : N),
        c == null
          ? (s(b, p, g), s(R, p, g), ye(f.children || [], p, R, _, x, S, y, w))
          : T > 0 && T & 64 && C && c.dynamicChildren
            ? (He(c.dynamicChildren, C, p, _, x, S, y),
              (f.key != null || (_ && f === _.subTree)) && ao(c, f, !0))
            : K(c, f, p, R, _, x, S, y, w);
    },
    Ft = (c, f, p, g, _, x, S, y, w) => {
      (f.slotScopeIds = y),
        c == null
          ? f.shapeFlag & 512
            ? _.ctx.activate(f, p, g, S, w)
            : En(f, p, g, _, x, S, w)
          : As(c, f, w);
    },
    En = (c, f, p, g, _, x, S) => {
      const y = (c.component = Il(c, g, _));
      if ((to(c) && (y.ctx.renderer = Qe), Ll(y), y.asyncDep)) {
        if ((_ && _.registerDep(y, te), !c.el)) {
          const w = (y.subTree = se(Ge));
          M(null, w, f, p);
        }
      } else te(y, c, f, p, _, x, S);
    },
    As = (c, f, p) => {
      const g = (f.component = c.component);
      if (Di(c, f, p))
        if (g.asyncDep && !g.asyncResolved) {
          q(g, f, p);
          return;
        } else (g.next = f), Ii(g.update), (g.effect.dirty = !0), g.update();
      else (f.el = c.el), (g.vnode = f);
    },
    te = (c, f, p, g, _, x, S) => {
      const y = () => {
          if (c.isMounted) {
            let { next: R, bu: T, u: C, parent: N, vnode: j } = c;
            {
              const Ze = ho(c);
              if (Ze) {
                R && ((R.el = j.el), q(c, R, S)),
                  Ze.asyncDep.then(() => {
                    c.isUnmounted || y();
                  });
                return;
              }
            }
            let k = R,
              V;
            ze(c, !1),
              R ? ((R.el = j.el), q(c, R, S)) : (R = j),
              T && An(T),
              (V = R.props && R.props.onVnodeBeforeUpdate) && Ee(V, N, R, j),
              ze(c, !0);
            const Q = Tn(c),
              he = c.subTree;
            (c.subTree = Q),
              E(he, Q, h(he.el), Lt(he), c, _, x),
              (R.el = Q.el),
              k === null && Hi(c, Q.el),
              C && oe(C, _),
              (V = R.props && R.props.onVnodeUpdated) &&
                oe(() => Ee(V, N, R, j), _);
          } else {
            let R;
            const { el: T, props: C } = f,
              { bm: N, m: j, parent: k } = c,
              V = kt(f);
            if (
              (ze(c, !1),
              N && An(N),
              !V && (R = C && C.onVnodeBeforeMount) && Ee(R, k, f),
              ze(c, !0),
              T && On)
            ) {
              const Q = () => {
                (c.subTree = Tn(c)), On(T, c.subTree, c, _, null);
              };
              V
                ? f.type.__asyncLoader().then(() => !c.isUnmounted && Q())
                : Q();
            } else {
              const Q = (c.subTree = Tn(c));
              E(null, Q, p, g, c, _, x), (f.el = Q.el);
            }
            if ((j && oe(j, _), !V && (R = C && C.onVnodeMounted))) {
              const Q = f;
              oe(() => Ee(R, k, Q), _);
            }
            (f.shapeFlag & 256 ||
              (k && kt(k.vnode) && k.vnode.shapeFlag & 256)) &&
              c.a &&
              oe(c.a, _),
              (c.isMounted = !0),
              (f = p = g = null);
          }
        },
        w = (c.effect = new ls(y, fe, () => gs(b), c.scope)),
        b = (c.update = () => {
          w.dirty && w.run();
        });
      (b.id = c.uid), ze(c, !0), b();
    },
    q = (c, f, p) => {
      f.component = c;
      const g = c.vnode.props;
      (c.vnode = f),
        (c.next = null),
        gl(c, f.props, g, p),
        yl(c, f.children, p),
        Xe(),
        ks(c),
        Ye();
    },
    K = (c, f, p, g, _, x, S, y, w = !1) => {
      const b = c && c.children,
        R = c ? c.shapeFlag : 0,
        T = f.children,
        { patchFlag: C, shapeFlag: N } = f;
      if (C > 0) {
        if (C & 128) {
          It(b, T, p, g, _, x, S, y, w);
          return;
        } else if (C & 256) {
          ke(b, T, p, g, _, x, S, y, w);
          return;
        }
      }
      N & 8
        ? (R & 16 && Te(b, _, x), T !== b && d(p, T))
        : R & 16
          ? N & 16
            ? It(b, T, p, g, _, x, S, y, w)
            : Te(b, _, x, !0)
          : (R & 8 && d(p, ""), N & 16 && ye(T, p, g, _, x, S, y, w));
    },
    ke = (c, f, p, g, _, x, S, y, w) => {
      (c = c || tt), (f = f || tt);
      const b = c.length,
        R = f.length,
        T = Math.min(b, R);
      let C;
      for (C = 0; C < T; C++) {
        const N = (f[C] = w ? Me(f[C]) : ve(f[C]));
        E(c[C], N, p, null, _, x, S, y, w);
      }
      b > R ? Te(c, _, x, !0, !1, T) : ye(f, p, g, _, x, S, y, w, T);
    },
    It = (c, f, p, g, _, x, S, y, w) => {
      let b = 0;
      const R = f.length;
      let T = c.length - 1,
        C = R - 1;
      for (; b <= T && b <= C; ) {
        const N = c[b],
          j = (f[b] = w ? Me(f[b]) : ve(f[b]));
        if (pt(N, j)) E(N, j, p, null, _, x, S, y, w);
        else break;
        b++;
      }
      for (; b <= T && b <= C; ) {
        const N = c[T],
          j = (f[C] = w ? Me(f[C]) : ve(f[C]));
        if (pt(N, j)) E(N, j, p, null, _, x, S, y, w);
        else break;
        T--, C--;
      }
      if (b > T) {
        if (b <= C) {
          const N = C + 1,
            j = N < R ? f[N].el : g;
          for (; b <= C; )
            E(null, (f[b] = w ? Me(f[b]) : ve(f[b])), p, j, _, x, S, y, w), b++;
        }
      } else if (b > C) for (; b <= T; ) xe(c[b], _, x, !0), b++;
      else {
        const N = b,
          j = b,
          k = new Map();
        for (b = j; b <= C; b++) {
          const ce = (f[b] = w ? Me(f[b]) : ve(f[b]));
          ce.key != null && k.set(ce.key, b);
        }
        let V,
          Q = 0;
        const he = C - j + 1;
        let Ze = !1,
          Ps = 0;
        const ht = new Array(he);
        for (b = 0; b < he; b++) ht[b] = 0;
        for (b = N; b <= T; b++) {
          const ce = c[b];
          if (Q >= he) {
            xe(ce, _, x, !0);
            continue;
          }
          let we;
          if (ce.key != null) we = k.get(ce.key);
          else
            for (V = j; V <= C; V++)
              if (ht[V - j] === 0 && pt(ce, f[V])) {
                we = V;
                break;
              }
          we === void 0
            ? xe(ce, _, x, !0)
            : ((ht[we - j] = b + 1),
              we >= Ps ? (Ps = we) : (Ze = !0),
              E(ce, f[we], p, null, _, x, S, y, w),
              Q++);
        }
        const Ns = Ze ? vl(ht) : tt;
        for (V = Ns.length - 1, b = he - 1; b >= 0; b--) {
          const ce = j + b,
            we = f[ce],
            Fs = ce + 1 < R ? f[ce + 1].el : g;
          ht[b] === 0
            ? E(null, we, p, Fs, _, x, S, y, w)
            : Ze && (V < 0 || b !== Ns[V] ? Ke(we, p, Fs, 2) : V--);
        }
      }
    },
    Ke = (c, f, p, g, _ = null) => {
      const { el: x, type: S, transition: y, children: w, shapeFlag: b } = c;
      if (b & 6) {
        Ke(c.component.subTree, f, p, g);
        return;
      }
      if (b & 128) {
        c.suspense.move(f, p, g);
        return;
      }
      if (b & 64) {
        S.move(c, f, p, Qe);
        return;
      }
      if (S === me) {
        s(x, f, p);
        for (let T = 0; T < w.length; T++) Ke(w[T], f, p, g);
        s(c.anchor, f, p);
        return;
      }
      if (S === Vt) {
        B(c, f, p);
        return;
      }
      if (g !== 2 && b & 1 && y)
        if (g === 0) y.beforeEnter(x), s(x, f, p), oe(() => y.enter(x), _);
        else {
          const { leave: T, delayLeave: C, afterLeave: N } = y,
            j = () => s(x, f, p),
            k = () => {
              T(x, () => {
                j(), N && N();
              });
            };
          C ? C(x, j, k) : k();
        }
      else s(x, f, p);
    },
    xe = (c, f, p, g = !1, _ = !1) => {
      const {
        type: x,
        props: S,
        ref: y,
        children: w,
        dynamicChildren: b,
        shapeFlag: R,
        patchFlag: T,
        dirs: C,
      } = c;
      if ((y != null && Jn(y, null, p, c, !0), R & 256)) {
        f.ctx.deactivate(c);
        return;
      }
      const N = R & 1 && C,
        j = !kt(c);
      let k;
      if ((j && (k = S && S.onVnodeBeforeUnmount) && Ee(k, f, c), R & 6))
        Ko(c.component, p, g);
      else {
        if (R & 128) {
          c.suspense.unmount(p, g);
          return;
        }
        N && Ve(c, null, f, "beforeUnmount"),
          R & 64
            ? c.type.remove(c, f, p, _, Qe, g)
            : b && (x !== me || (T > 0 && T & 64))
              ? Te(b, f, p, !1, !0)
              : ((x === me && T & 384) || (!_ && R & 16)) && Te(w, f, p),
          g && Cs(c);
      }
      ((j && (k = S && S.onVnodeUnmounted)) || N) &&
        oe(() => {
          k && Ee(k, f, c), N && Ve(c, null, f, "unmounted");
        }, p);
    },
    Cs = (c) => {
      const { type: f, el: p, anchor: g, transition: _ } = c;
      if (f === me) {
        ko(p, g);
        return;
      }
      if (f === Vt) {
        G(c);
        return;
      }
      const x = () => {
        r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (c.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: S, delayLeave: y } = _,
          w = () => S(p, x);
        y ? y(c.el, x, w) : w();
      } else x();
    },
    ko = (c, f) => {
      let p;
      for (; c !== f; ) (p = v(c)), r(c), (c = p);
      r(f);
    },
    Ko = (c, f, p) => {
      const { bum: g, scope: _, update: x, subTree: S, um: y } = c;
      g && An(g),
        _.stop(),
        x && ((x.active = !1), xe(S, c, f, p)),
        y && oe(y, f),
        oe(() => {
          c.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    Te = (c, f, p, g = !1, _ = !1, x = 0) => {
      for (let S = x; S < c.length; S++) xe(c[S], f, p, g, _);
    },
    Lt = (c) =>
      c.shapeFlag & 6
        ? Lt(c.component.subTree)
        : c.shapeFlag & 128
          ? c.suspense.next()
          : v(c.anchor || c.el);
  let vn = !1;
  const Ts = (c, f, p) => {
      c == null
        ? f._vnode && xe(f._vnode, null, null, !0)
        : E(f._vnode || null, c, f, null, null, null, p),
        vn || ((vn = !0), ks(), Gr(), (vn = !1)),
        (f._vnode = c);
    },
    Qe = {
      p: E,
      um: xe,
      m: Ke,
      r: Cs,
      mt: En,
      mc: ye,
      pc: K,
      pbc: He,
      n: Lt,
      o: e,
    };
  let Sn, On;
  return (
    t && ([Sn, On] = t(Qe)), { render: Ts, hydrate: Sn, createApp: hl(Ts, Sn) }
  );
}
function Fn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function ze({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function El(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ao(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = Me(r[o])), (l.el = i.el)),
        n || ao(i, l)),
        l.type === dn && (l.el = i.el);
    }
}
function vl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, l;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < a ? (o = l + 1) : (i = l);
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function ho(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ho(t);
}
const Sl = (e) => e.__isTeleport,
  me = Symbol.for("v-fgt"),
  dn = Symbol.for("v-txt"),
  Ge = Symbol.for("v-cmt"),
  Vt = Symbol.for("v-stc"),
  xt = [];
let ge = null;
function ae(e = !1) {
  xt.push((ge = e ? null : []));
}
function Ol() {
  xt.pop(), (ge = xt[xt.length - 1] || null);
}
let Ot = 1;
function Qs(e) {
  Ot += e;
}
function po(e) {
  return (
    (e.dynamicChildren = Ot > 0 ? ge || tt : null),
    Ol(),
    Ot > 0 && ge && ge.push(e),
    e
  );
}
function be(e, t, n, s, r, o) {
  return po(P(e, t, n, s, r, o, !0));
}
function Rl(e, t, n, s, r) {
  return po(se(e, t, n, s, r, !0));
}
function Al(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hn = "__vInternal",
  mo = ({ key: e }) => e ?? null,
  zt = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Y(e) || le(e) || I(e)
        ? { i: Oe, r: e, k: t, f: !!n }
        : e
      : null
  );
function P(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === me ? 0 : 1,
  i = !1,
  l = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mo(t),
    ref: t && zt(t),
    scopeId: Qr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Oe,
  };
  return (
    l
      ? (ys(u, n), o & 128 && e.normalize(u))
      : n && (u.shapeFlag |= Y(n) ? 8 : 16),
    Ot > 0 &&
      !i &&
      ge &&
      (u.patchFlag > 0 || o & 6) &&
      u.patchFlag !== 32 &&
      ge.push(u),
    u
  );
}
const se = Cl;
function Cl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === ki) && (e = Ge), Al(e))) {
    const l = lt(e, t, !0);
    return (
      n && ys(l, n),
      Ot > 0 &&
        !o &&
        ge &&
        (l.shapeFlag & 6 ? (ge[ge.indexOf(e)] = l) : ge.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if (($l(e) && (e = e.__vccOpts), t)) {
    t = Tl(t);
    let { class: l, style: u } = t;
    l && !Y(l) && (t.class = is(l)),
      W(u) && (kr(u) && !F(u) && (u = ee({}, u)), (t.style = ln(u)));
  }
  const i = Y(e) ? 1 : Ki(e) ? 128 : Sl(e) ? 64 : W(e) ? 4 : I(e) ? 2 : 0;
  return P(e, t, n, s, r, i, o, !0);
}
function Tl(e) {
  return e ? (kr(e) || hn in e ? ee({}, e) : e) : null;
}
function lt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    l = t ? Pl(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && mo(l),
    ref:
      t && t.ref ? (n && r ? (F(r) ? r.concat(zt(t)) : [r, zt(t)]) : zt(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== me ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function en(e = " ", t = 0) {
  return se(dn, null, e, t);
}
function pn(e, t) {
  const n = se(Vt, null, e);
  return (n.staticCount = t), n;
}
function Gn(e = "", t = !1) {
  return t ? (ae(), Rl(Ge, null, e)) : se(Ge, null, e);
}
function ve(e) {
  return e == null || typeof e == "boolean"
    ? se(Ge)
    : F(e)
      ? se(me, null, e.slice())
      : typeof e == "object"
        ? Me(e)
        : se(dn, null, String(e));
}
function Me(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : lt(e);
}
function ys(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (F(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ys(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(hn in t)
        ? (t._ctx = Oe)
        : r === 3 &&
          Oe &&
          (Oe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    I(t)
      ? ((t = { default: t, _ctx: Oe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [en(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Pl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = is([t.class, s.class]));
      else if (r === "style") t.style = ln([t.style, s.style]);
      else if (sn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(F(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ee(e, t, n, s = null) {
  _e(e, t, 7, [n, s]);
}
const Nl = oo();
let Fl = 0;
function Il(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Nl,
    o = {
      uid: Fl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ni(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: lo(s, r),
      emitsOptions: Yr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: z,
      inheritAttrs: s.inheritAttrs,
      ctx: z,
      data: z,
      props: z,
      attrs: z,
      slots: z,
      refs: z,
      setupState: z,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Mi.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let re = null,
  tn,
  Xn;
{
  const e = Ar(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
        }
      );
    };
  (tn = t("__VUE_INSTANCE_SETTERS__", (n) => (re = n))),
    (Xn = t("__VUE_SSR_SETTERS__", (n) => (mn = n)));
}
const Ct = (e) => {
    const t = re;
    return (
      tn(e),
      e.scope.on(),
      () => {
        e.scope.off(), tn(t);
      }
    );
  },
  Zs = () => {
    re && re.scope.off(), tn(null);
  };
function go(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function Ll(e, t = !1) {
  t && Xn(t);
  const { props: n, children: s } = e.vnode,
    r = go(e);
  ml(e, n, r, t), bl(e, s);
  const o = r ? jl(e, t) : void 0;
  return t && Xn(!1), o;
}
function jl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Kr(new Proxy(e.ctx, il)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Bl(e) : null),
      o = Ct(e);
    Xe();
    const i = Ue(s, e, 0, [e.props, r]);
    if ((Ye(), o(), vr(i))) {
      if ((i.then(Zs, Zs), t))
        return i
          .then((l) => {
            er(e, l, t);
          })
          .catch((l) => {
            un(l, e, 0);
          });
      e.asyncDep = i;
    } else er(e, i, t);
  } else _o(e, t);
}
function er(e, t, n) {
  I(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : W(t) && (e.setupState = qr(t)),
    _o(e, n);
}
let tr;
function _o(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && tr && !s.render) {
      const r = s.template || _s(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: u } = s,
          a = ee(ee({ isCustomElement: o, delimiters: l }, i), u);
        s.render = tr(r, a);
      }
    }
    e.render = s.render || fe;
  }
  {
    const r = Ct(e);
    Xe();
    try {
      ll(e);
    } finally {
      Ye(), r();
    }
  }
}
function Ml(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return ie(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function Bl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Ml(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function xs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(qr(Kr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in bt) return bt[n](e);
        },
        has(t, n) {
          return n in t || n in bt;
        },
      }))
    );
}
function $l(e) {
  return I(e) && "__vccOpts" in e;
}
const Ul = (e, t) => Oi(e, t, mn),
  Dl = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Hl = "http://www.w3.org/2000/svg",
  kl = "http://www.w3.org/1998/Math/MathML",
  Be = typeof document < "u" ? document : null,
  nr = Be && Be.createElement("template"),
  Kl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? Be.createElementNS(Hl, e)
          : t === "mathml"
            ? Be.createElementNS(kl, e)
            : Be.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => Be.createTextNode(e),
    createComment: (e) => Be.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Be.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        nr.innerHTML =
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e;
        const l = nr.content;
        if (s === "svg" || s === "mathml") {
          const u = l.firstChild;
          for (; u.firstChild; ) l.appendChild(u.firstChild);
          l.removeChild(u);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Vl = Symbol("_vtc");
function zl(e, t, n) {
  const s = e[Vl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const sr = Symbol("_vod"),
  ql = Symbol("_vsh"),
  Wl = Symbol(""),
  Jl = /(^|;)\s*display\s*:/;
function Gl(e, t, n) {
  const s = e.style,
    r = Y(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (Y(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && qt(s, l, "");
        }
      else for (const i in t) n[i] == null && qt(s, i, "");
    for (const i in n) i === "display" && (o = !0), qt(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Wl];
      i && (n += ";" + i), (s.cssText = n), (o = Jl.test(n));
    }
  } else t && e.removeAttribute("style");
  sr in e && ((e[sr] = o ? s.display : ""), e[ql] && (s.display = "none"));
}
const rr = /\s*!important$/;
function qt(e, t, n) {
  if (F(n)) n.forEach((s) => qt(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Xl(e, t);
    rr.test(n)
      ? e.setProperty(ft(s), n.replace(rr, ""), "important")
      : (e[s] = n);
  }
}
const or = ["Webkit", "Moz", "ms"],
  In = {};
function Xl(e, t) {
  const n = In[t];
  if (n) return n;
  let s = ot(t);
  if (s !== "filter" && s in e) return (In[t] = s);
  s = Rr(s);
  for (let r = 0; r < or.length; r++) {
    const o = or[r] + s;
    if (o in e) return (In[t] = o);
  }
  return t;
}
const ir = "http://www.w3.org/1999/xlink";
function Yl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ir, t.slice(6, t.length))
      : e.setAttributeNS(ir, t, n);
  else {
    const o = ti(t);
    n == null || (o && !Cr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Ql(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    const a = l === "OPTION" ? e.getAttribute("value") || "" : e.value,
      d = n ?? "";
    (a !== d || !("_value" in e)) && (e.value = d),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Cr(n))
      : n == null && a === "string"
        ? ((n = ""), (u = !0))
        : a === "number" && ((n = 0), (u = !0));
  }
  try {
    e[t] = n;
  } catch {}
  u && e.removeAttribute(t);
}
function Zl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ec(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const lr = Symbol("_vei");
function tc(e, t, n, s, r = null) {
  const o = e[lr] || (e[lr] = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [l, u] = nc(t);
    if (s) {
      const a = (o[t] = oc(s, r));
      Zl(e, l, a, u);
    } else i && (ec(e, l, i, u), (o[t] = void 0));
  }
}
const cr = /(?:Once|Passive|Capture)$/;
function nc(e) {
  let t;
  if (cr.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(cr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : ft(e.slice(2)), t];
}
let Ln = 0;
const sc = Promise.resolve(),
  rc = () => Ln || (sc.then(() => (Ln = 0)), (Ln = Date.now()));
function oc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    _e(ic(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = rc()), n;
}
function ic(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const ur = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  lc = (e, t, n, s, r, o, i, l, u) => {
    const a = r === "svg";
    t === "class"
      ? zl(e, s, a)
      : t === "style"
        ? Gl(e, n, s)
        : sn(t)
          ? ss(t) || tc(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : cc(e, t, s, a)
              )
            ? Ql(e, t, s, o, i, l, u)
            : (t === "true-value"
                ? (e._trueValue = s)
                : t === "false-value" && (e._falseValue = s),
              Yl(e, t, s, a));
  };
function cc(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && ur(t) && I(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ur(t) && Y(n) ? !1 : t in e;
}
const uc = ee({ patchProp: lc }, Kl);
let fr;
function fc() {
  return fr || (fr = xl(uc));
}
const ac = (...e) => {
  const t = fc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = hc(s);
      if (!r) return;
      const o = t._component;
      !I(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, dc(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function dc(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hc(e) {
  return Y(e) ? document.querySelector(e) : e;
}
const pc = "../hamburger.svg",
  mc = "../close.svg",
  bo = "../social/tg.svg",
  yo = "../social/vk.svg",
  xo = "../social/gmail.svg",
  gc = {
    class:
      "w-8/12 max-[530px]:w-16 max-[530px]:top-2 max-[530px]:left-10 py-2 px-4 rounded-full transition-all duration-500 flex items-center justify-between m-auto font-KellySlab fixed text-white z-10 top-[5%] left-1/2 -translate-x-1/2",
    id: "header",
  },
  _c = P(
    "div",
    {
      class:
        "flex items-center gap-4 [&>span:hover]:border-b [&>span:hover]:border-white [&>span]:cursor-pointer max-[530px]:hidden",
    },
    [
      P("span", null, [P("a", { href: "#aboutme" }, "Обо мне")]),
      P("span", null, [P("a", { href: "#works" }, "Работы")]),
    ],
    -1
  ),
  bc = P("b", null, "coronel", -1),
  yc = P(
    "div",
    {
      class:
        "rounded-full flex items-center justify-center h-10 px-4 py-2 hover:text-black cursor-pointer relative [&:hover>div]:h-full [&:hover>div]:w-full border border-white max-[530px]:hidden",
    },
    [
      P("span", { class: "z-20 px-4" }, [
        P("a", { href: "#contacts" }, "Связь со мной"),
      ]),
      P("div", {
        class:
          "w-0 h-0 rounded-full bg-white absolute z-10 transition-all duration-300",
      }),
    ],
    -1
  ),
  xc = P("img", { src: pc, alt: "", class: "w-12 h-12" }, null, -1),
  wc = [xc],
  Ec = {
    key: 0,
    class:
      "absolute w-screen h-screen bg-[#00000033] backdrop-blur-xl z-40 animate-[openMenu_1s_ease] top-0 left-0 float-left",
    id: "menu",
  },
  vc = pn(
    '<div class="py-2 px-4 rounded-full transition-all duration-500 relative"><img src="' +
      mc +
      '" alt="" class="w-10 h-10 top-4 left-4 absolute"></div><div class="flex items-center justify-center relative w-full h-full flex-col text-white font-Ubuntu gap-6 text-xl animate-[openMenu_1s_ease]"><span><a href="#aboutme">Обо мне</a></span> <span><a href="#works">Работы</a></span><span class="[&amp;&gt;a&gt;img]:w-12 flex justify-end gap-4"><a href="https://t.me/yourantosha"><img src="' +
      bo +
      '" alt=""></a><a href="https://vk.com/6old6"><img src="' +
      yo +
      '" alt=""></a><a href="mailto:tacontactta@gmail.com"><img src="' +
      xo +
      '" alt=""></a></span></div>',
    2
  ),
  Sc = [vc],
  Oc = {
    __name: "HeaderComponent",
    setup(e) {
      const t = Et(0),
        n = Et(!1);
      At(() => {
        addEventListener("scroll", () => {
          (t.value = window.scrollY),
            t.value > 1
              ? ((document.getElementById("header").style.backgroundColor =
                  "#00000066"),
                (document.getElementById("header").style.backdropFilter =
                  "blur(16px)"))
              : t.value < 1 &&
                ((document.getElementById("header").style.backgroundColor =
                  "transparent"),
                (document.getElementById("header").style.backdropFilter =
                  "none"));
        });
      });
      const s = () => {
        n.value = !n.value;
      };
      return (r, o) => (
        ae(),
        be(
          me,
          null,
          [
            P("header", gc, [
              _c,
              P(
                "span",
                {
                  class:
                    "cursor-pointer hover:animate-[logo_0.5s_ease-in-out_infinite] font-KodeRegular max-[740px]:hidden",
                  onClick: o[0] || (o[0] = () => r.window.scrollTo(0, 0)),
                },
                [bc, en(" studios ")]
              ),
              yc,
              P(
                "div",
                {
                  class:
                    "max-[530px]:block min-[530px]:hidden w-screen cursor-pointer",
                  onClick: s,
                },
                wc
              ),
            ]),
            n.value
              ? (ae(),
                be("div", Ec, [
                  P(
                    "div",
                    {
                      class:
                        "max-[530px]:block min-[530px]:hidden w-screen cursor-pointer z-50 h-full",
                      onClick: s,
                    },
                    Sc
                  ),
                ]))
              : Gn("", !0),
          ],
          64
        )
      );
    },
  },
  Rc = { class: "overflow-hidden w-full h-screen relative h-full" },
  Ac = pn(
    '<div class="text-6xl text-center font-KellySlab text-white uppercase w-1/2 max-[640px]:w-3/4 max-[425px]:text-4xl"> web developer from the future </div><div class="flex gap-20 [&amp;&gt;button]:rounded-full [&amp;&gt;button]:cursor-pointer [&amp;&gt;button]:font-KellySlab max-[500px]:gap-8 max-[425px]:flex-col"><button class="bg-white px-8 relative w-40 h-10 [&amp;:hover&gt;div]:h-full [&amp;:hover&gt;div]:w-full border border-white [&amp;:hover&gt;span]:text-white flex items-center justify-center"><span class="z-20 text-[#6919ff] absolute w-full h-full flex items-center justify-center transition-all duration-300"><a href="#aboutme">Узнать про меня</a></span><div class="w-0 h-0 rounded-full bg-[#6919ff] absolute z-10 transition-all duration-300"></div></button><button class="relative px-8 w-40 h-10 [&amp;:hover&gt;div]:h-full [&amp;:hover&gt;div]:w-full border border-white [&amp;:hover&gt;span]:text-[#6919ff] flex items-center justify-center"><span class="z-20 text-white absolute w-full h-full flex items-center justify-center transition-all duration-300"><a href="#works">Посмотреть работы</a></span><div class="w-0 h-0 rounded-full bg-white absolute z-10 transition-all duration-300"></div></button></div>',
    2
  ),
  Cc = [Ac],
  Tc = {
    __name: "MainWindowComponent",
    setup(e) {
      const t = Et([]),
        n = (s) => {
          (t.value[0] = s.clientX),
            (t.value[1] = s.clientY),
            (document.getElementById("main").style.backgroundPositionX =
              `${t.value[0] / 100}px`),
            (document.getElementById("main").style.backgroundPositionY =
              `${t.value[1] / 50}px`);
        };
      return (s, r) => (
        ae(),
        be("div", Rc, [
          P(
            "div",
            {
              class:
                "bg-[url('../main.svg')] w-full h-full bg-no-repeat bg-cover bg-center bg-fixed scale-110 font-KellySlab relative flex items-center justify-center flex-col gap-24 max-[425px]:gap-8",
              id: "main",
              onMousemove: n,
            },
            Cc,
            32
          ),
        ])
      );
    },
  },
  Pc = {
    class:
      "w-screen h-screen bg-white [&>div]:h-full flex font-KellySlab border-b border-[#00000066]",
    id: "aboutme",
  },
  Nc = P(
    "div",
    {
      class:
        "h-full bg-[#060918] w-3/5 bg-[url('../me.jpg')] bg-right bg-cover bg-no-repeat max-[1200px]:hidden",
    },
    null,
    -1
  ),
  Fc = {
    class:
      "relative bg-[#060918] w-3/5 flex items-center justify-start px-12 max-[1200px]:w-full",
  },
  Ic = { class: "text-white flex flex-col gap-12" },
  Lc = {
    class: "flex max-[1200px]:justify-center gap-20 text-sm max-[400px]:gap-4",
  },
  jc = P("span", null, "обо мне", -1),
  Mc = P(
    "div",
    {
      class:
        "w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] block absolute top-0 left-0",
      id: "btn0",
    },
    null,
    -1
  ),
  Bc = [jc, Mc],
  $c = P("span", null, "мои умения", -1),
  Uc = P(
    "div",
    {
      class:
        "w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] hidden absolute top-0 left-0",
      id: "btn1",
    },
    null,
    -1
  ),
  Dc = [$c, Uc],
  Hc = { key: 0, class: "max-[1200px]:text-center" },
  kc = P(
    "span",
    { class: "text-xl font-Ubuntu" },
    [
      P("b", null, "Привет!"),
      en(" Меня зовут "),
      P("span", { class: "text-[#6919ff]" }, "Антон"),
      en(
        ", Я Frontend-разработчик, увлеченный созданием интерактивных, доступных и адаптивных веб-сайтов. Ознакомьтесь с разделом мои проекты, где представлены некоторые из созданных мной веб-сайтов. В настоящее время я открыт для вакансий, где я могу внести свой вклад в ваш бизнес. Не стесняйтесь обращаться ко мне, если вы сочтете мои навыки полезными "
      ),
    ],
    -1
  ),
  Kc = [kc],
  Vc = {
    key: 1,
    class:
      "flex flex-col gap-2 font-Ubuntu [&>div>span]:px-4 [&>div>span]:py-2 [&>div>span]:bg-[#081c30] [&>div>span]:rounded-full [&>div>span:hover]:brightness-75",
  },
  zc = pn(
    '<b>Активно использую:</b><div class="flex flex-wrap gap-4"><span>css</span><span>scss</span><span>javascript</span><span>reactss</span><span>git</span><span>figma</span><span>gimp</span><span>photoshop</span><span>vscode</span><span>БЭМ</span><span>vite</span><span>adaptive</span><span>cross-browser</span><span>vue</span><span>tailwindcss</span></div><b>Знаком с:</b><div class="flex flex-wrap gap-4"><span>typescript</span><span>mysql</span><span>nextjs</span></div>',
    4
  ),
  qc = [zc],
  Wc = P(
    "div",
    { class: "absolute bottom-0 w-full text-white", id: "trigger" },
    null,
    -1
  ),
  Jc = {
    __name: "AboutMeComponent",
    setup(e) {
      const t = Et(0);
      At(() => {
        new IntersectionObserver(
          (r) => {
            r.forEach((o) => {
              o.isIntersecting
                ? (document.getElementById("header").style.border =
                    "1px black solid")
                : (document.getElementById("header").style.border = "none");
            });
          },
          { threshold: 1 }
        ).observe(document.getElementById("trigger")),
          setTimeout(() => {}, 1e4);
      });
      const n = (s) => {
        s == 0
          ? ((t.value = 0),
            (document.getElementById("btn0").style.display = "block"),
            (document.getElementById("btn1").style.display = "none"))
          : s == 1 &&
            ((t.value = 1),
            (document.getElementById("btn0").style.display = "none"),
            (document.getElementById("btn1").style.display = "block"));
      };
      return (s, r) => (
        ae(),
        be("div", Pc, [
          Nc,
          P("div", Fc, [
            P("div", Ic, [
              P("div", Lc, [
                P(
                  "div",
                  {
                    class:
                      "px-4 cursor-pointer relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden",
                    onClick: r[0] || (r[0] = (o) => n(0)),
                  },
                  Bc
                ),
                P(
                  "div",
                  {
                    class:
                      "px-4 cursor-pointer relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden",
                    onClick: r[1] || (r[1] = (o) => n(1)),
                  },
                  Dc
                ),
              ]),
              t.value == 0 ? (ae(), be("div", Hc, Kc)) : Gn("", !0),
              t.value == 1 ? (ae(), be("div", Vc, qc)) : Gn("", !0),
            ]),
            Wc,
          ]),
        ])
      );
    },
  };
function wo(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Gc } = Object.prototype,
  { getPrototypeOf: ws } = Object,
  gn = ((e) => (t) => {
    const n = Gc.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ae = (e) => ((e = e.toLowerCase()), (t) => gn(t) === e),
  _n = (e) => (t) => typeof t === e,
  { isArray: at } = Array,
  Rt = _n("undefined");
function Xc(e) {
  return (
    e !== null &&
    !Rt(e) &&
    e.constructor !== null &&
    !Rt(e.constructor) &&
    de(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Eo = Ae("ArrayBuffer");
function Yc(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Eo(e.buffer)),
    t
  );
}
const Qc = _n("string"),
  de = _n("function"),
  vo = _n("number"),
  bn = (e) => e !== null && typeof e == "object",
  Zc = (e) => e === !0 || e === !1,
  Wt = (e) => {
    if (gn(e) !== "object") return !1;
    const t = ws(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  eu = Ae("Date"),
  tu = Ae("File"),
  nu = Ae("Blob"),
  su = Ae("FileList"),
  ru = (e) => bn(e) && de(e.pipe),
  ou = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (de(e.append) &&
          ((t = gn(e)) === "formdata" ||
            (t === "object" &&
              de(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  iu = Ae("URLSearchParams"),
  lu = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Tt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let s, r;
  if ((typeof e != "object" && (e = [e]), at(e)))
    for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (s = 0; s < i; s++) (l = o[s]), t.call(null, e[l], l, e);
  }
}
function So(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length,
    r;
  for (; s-- > 0; ) if (((r = n[s]), t === r.toLowerCase())) return r;
  return null;
}
const Oo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Ro = (e) => !Rt(e) && e !== Oo;
function Yn() {
  const { caseless: e } = (Ro(this) && this) || {},
    t = {},
    n = (s, r) => {
      const o = (e && So(t, r)) || r;
      Wt(t[o]) && Wt(s)
        ? (t[o] = Yn(t[o], s))
        : Wt(s)
          ? (t[o] = Yn({}, s))
          : at(s)
            ? (t[o] = s.slice())
            : (t[o] = s);
    };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && Tt(arguments[s], n);
  return t;
}
const cu = (e, t, n, { allOwnKeys: s } = {}) => (
    Tt(
      t,
      (r, o) => {
        n && de(r) ? (e[o] = wo(r, n)) : (e[o] = r);
      },
      { allOwnKeys: s }
    ),
    e
  ),
  uu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  fu = (e, t, n, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  au = (e, t, n, s) => {
    let r, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
        (i = r[o]), (!s || s(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && ws(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  du = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const s = e.indexOf(t, n);
    return s !== -1 && s === n;
  },
  hu = (e) => {
    if (!e) return null;
    if (at(e)) return e;
    let t = e.length;
    if (!vo(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  pu = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ws(Uint8Array)),
  mu = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = s.next()) && !r.done; ) {
      const o = r.value;
      t.call(e, o[0], o[1]);
    }
  },
  gu = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null; ) s.push(n);
    return s;
  },
  _u = Ae("HTMLFormElement"),
  bu = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r;
    }),
  ar = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  yu = Ae("RegExp"),
  Ao = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {};
    Tt(n, (r, o) => {
      let i;
      (i = t(r, o, e)) !== !1 && (s[o] = i || r);
    }),
      Object.defineProperties(e, s);
  },
  xu = (e) => {
    Ao(e, (t, n) => {
      if (de(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const s = e[n];
      if (de(s)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  wu = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((o) => {
          n[o] = !0;
        });
      };
    return at(e) ? s(e) : s(String(e).split(t)), n;
  },
  Eu = () => {},
  vu = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  jn = "abcdefghijklmnopqrstuvwxyz",
  dr = "0123456789",
  Co = { DIGIT: dr, ALPHA: jn, ALPHA_DIGIT: jn + jn.toUpperCase() + dr },
  Su = (e = 16, t = Co.ALPHA_DIGIT) => {
    let n = "";
    const { length: s } = t;
    for (; e--; ) n += t[(Math.random() * s) | 0];
    return n;
  };
function Ou(e) {
  return !!(
    e &&
    de(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Ru = (e) => {
    const t = new Array(10),
      n = (s, r) => {
        if (bn(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            t[r] = s;
            const o = at(s) ? [] : {};
            return (
              Tt(s, (i, l) => {
                const u = n(i, r + 1);
                !Rt(u) && (o[l] = u);
              }),
              (t[r] = void 0),
              o
            );
          }
        }
        return s;
      };
    return n(e, 0);
  },
  Au = Ae("AsyncFunction"),
  Cu = (e) => e && (bn(e) || de(e)) && de(e.then) && de(e.catch),
  m = {
    isArray: at,
    isArrayBuffer: Eo,
    isBuffer: Xc,
    isFormData: ou,
    isArrayBufferView: Yc,
    isString: Qc,
    isNumber: vo,
    isBoolean: Zc,
    isObject: bn,
    isPlainObject: Wt,
    isUndefined: Rt,
    isDate: eu,
    isFile: tu,
    isBlob: nu,
    isRegExp: yu,
    isFunction: de,
    isStream: ru,
    isURLSearchParams: iu,
    isTypedArray: pu,
    isFileList: su,
    forEach: Tt,
    merge: Yn,
    extend: cu,
    trim: lu,
    stripBOM: uu,
    inherits: fu,
    toFlatObject: au,
    kindOf: gn,
    kindOfTest: Ae,
    endsWith: du,
    toArray: hu,
    forEachEntry: mu,
    matchAll: gu,
    isHTMLForm: _u,
    hasOwnProperty: ar,
    hasOwnProp: ar,
    reduceDescriptors: Ao,
    freezeMethods: xu,
    toObjectSet: wu,
    toCamelCase: bu,
    noop: Eu,
    toFiniteNumber: vu,
    findKey: So,
    global: Oo,
    isContextDefined: Ro,
    ALPHABET: Co,
    generateString: Su,
    isSpecCompliantForm: Ou,
    toJSONObject: Ru,
    isAsyncFn: Au,
    isThenable: Cu,
  };
function $(e, t, n, s, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && (this.response = r);
}
m.inherits($, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: m.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const To = $.prototype,
  Po = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Po[e] = { value: e };
});
Object.defineProperties($, Po);
Object.defineProperty(To, "isAxiosError", { value: !0 });
$.from = (e, t, n, s, r, o) => {
  const i = Object.create(To);
  return (
    m.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    $.call(i, e.message, t, n, s, r),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Tu = null;
function Qn(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function No(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function hr(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, o) {
          return (r = No(r)), !n && o ? "[" + r + "]" : r;
        })
        .join(n ? "." : "")
    : t;
}
function Pu(e) {
  return m.isArray(e) && !e.some(Qn);
}
const Nu = m.toFlatObject(m, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function yn(e, t, n) {
  if (!m.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = m.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (E, L) {
        return !m.isUndefined(L[E]);
      }
    ));
  const s = n.metaTokens,
    r = n.visitor || d,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && m.isSpecCompliantForm(t);
  if (!m.isFunction(r)) throw new TypeError("visitor must be a function");
  function a(O) {
    if (O === null) return "";
    if (m.isDate(O)) return O.toISOString();
    if (!u && m.isBlob(O))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(O) || m.isTypedArray(O)
      ? u && typeof Blob == "function"
        ? new Blob([O])
        : Buffer.from(O)
      : O;
  }
  function d(O, E, L) {
    let M = O;
    if (O && !L && typeof O == "object") {
      if (m.endsWith(E, "{}"))
        (E = s ? E : E.slice(0, -2)), (O = JSON.stringify(O));
      else if (
        (m.isArray(O) && Pu(O)) ||
        ((m.isFileList(O) || m.endsWith(E, "[]")) && (M = m.toArray(O)))
      )
        return (
          (E = No(E)),
          M.forEach(function (B, G) {
            !(m.isUndefined(B) || B === null) &&
              t.append(
                i === !0 ? hr([E], G, o) : i === null ? E : E + "[]",
                a(B)
              );
          }),
          !1
        );
    }
    return Qn(O) ? !0 : (t.append(hr(L, E, o), a(O)), !1);
  }
  const h = [],
    v = Object.assign(Nu, {
      defaultVisitor: d,
      convertValue: a,
      isVisitable: Qn,
    });
  function A(O, E) {
    if (!m.isUndefined(O)) {
      if (h.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      h.push(O),
        m.forEach(O, function (M, X) {
          (!(m.isUndefined(M) || M === null) &&
            r.call(t, M, m.isString(X) ? X.trim() : X, E, v)) === !0 &&
            A(M, E ? E.concat(X) : [X]);
        }),
        h.pop();
    }
  }
  if (!m.isObject(e)) throw new TypeError("data must be an object");
  return A(e), t;
}
function pr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function Es(e, t) {
  (this._pairs = []), e && yn(e, this, t);
}
const Fo = Es.prototype;
Fo.append = function (t, n) {
  this._pairs.push([t, n]);
};
Fo.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, pr);
      }
    : pr;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + "=" + n(r[1]);
    }, "")
    .join("&");
};
function Fu(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Io(e, t, n) {
  if (!t) return e;
  const s = (n && n.encode) || Fu,
    r = n && n.serialize;
  let o;
  if (
    (r
      ? (o = r(t, n))
      : (o = m.isURLSearchParams(t) ? t.toString() : new Es(t, n).toString(s)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class mr {
  constructor() {
    this.handlers = [];
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    m.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const Lo = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Iu = typeof URLSearchParams < "u" ? URLSearchParams : Es,
  Lu = typeof FormData < "u" ? FormData : null,
  ju = typeof Blob < "u" ? Blob : null,
  Mu = {
    isBrowser: !0,
    classes: { URLSearchParams: Iu, FormData: Lu, Blob: ju },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  jo = typeof window < "u" && typeof document < "u",
  Bu = ((e) => jo && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  $u =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Uu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: jo,
        hasStandardBrowserEnv: Bu,
        hasStandardBrowserWebWorkerEnv: $u,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Re = { ...Uu, ...Mu };
function Du(e, t) {
  return yn(
    e,
    new Re.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, r, o) {
          return Re.isNode && m.isBuffer(n)
            ? (this.append(s, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Hu(e) {
  return m
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function ku(e) {
  const t = {},
    n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++) (o = n[s]), (t[o] = e[o]);
  return t;
}
function Mo(e) {
  function t(n, s, r, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && m.isArray(r) ? r.length : i),
      u
        ? (m.hasOwnProp(r, i) ? (r[i] = [r[i], s]) : (r[i] = s), !l)
        : ((!r[i] || !m.isObject(r[i])) && (r[i] = []),
          t(n, s, r[i], o) && m.isArray(r[i]) && (r[i] = ku(r[i])),
          !l)
    );
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const n = {};
    return (
      m.forEachEntry(e, (s, r) => {
        t(Hu(s), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function Ku(e, t, n) {
  if (m.isString(e))
    try {
      return (t || JSON.parse)(e), m.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (n || JSON.stringify)(e);
}
const vs = {
  transitional: Lo,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || "",
        r = s.indexOf("application/json") > -1,
        o = m.isObject(t);
      if ((o && m.isHTMLForm(t) && (t = new FormData(t)), m.isFormData(t)))
        return r ? JSON.stringify(Mo(t)) : t;
      if (
        m.isArrayBuffer(t) ||
        m.isBuffer(t) ||
        m.isStream(t) ||
        m.isFile(t) ||
        m.isBlob(t)
      )
        return t;
      if (m.isArrayBufferView(t)) return t.buffer;
      if (m.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return Du(t, this.formSerializer).toString();
        if ((l = m.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return yn(
            l ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || r ? (n.setContentType("application/json", !1), Ku(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || vs.transitional,
        s = n && n.forcedJSONParsing,
        r = this.responseType === "json";
      if (t && m.isString(t) && ((s && !this.responseType) || r)) {
        const i = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? $.from(l, $.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Re.classes.FormData, Blob: Re.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  vs.headers[e] = {};
});
const Ss = vs,
  Vu = m.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  zu = (e) => {
    const t = {};
    let n, s, r;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (r = i.indexOf(":")),
              (n = i.substring(0, r).trim().toLowerCase()),
              (s = i.substring(r + 1).trim()),
              !(!n || (t[n] && Vu[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ", " + s : s));
          }),
      t
    );
  },
  gr = Symbol("internals");
function mt(e) {
  return e && String(e).trim().toLowerCase();
}
function Jt(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(Jt) : String(e);
}
function qu(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = n.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const Wu = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Mn(e, t, n, s, r) {
  if (m.isFunction(s)) return s.call(this, t, n);
  if ((r && (t = n), !!m.isString(t))) {
    if (m.isString(s)) return t.indexOf(s) !== -1;
    if (m.isRegExp(s)) return s.test(t);
  }
}
function Ju(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Gu(e, t) {
  const n = m.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (r, o, i) {
        return this[s].call(this, t, r, o, i);
      },
      configurable: !0,
    });
  });
}
class xn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(l, u, a) {
      const d = mt(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const h = m.findKey(r, d);
      (!h || r[h] === void 0 || a === !0 || (a === void 0 && r[h] !== !1)) &&
        (r[h || u] = Jt(l));
    }
    const i = (l, u) => m.forEach(l, (a, d) => o(a, d, u));
    return (
      m.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : m.isString(t) && (t = t.trim()) && !Wu(t)
          ? i(zu(t), n)
          : t != null && o(n, t, s),
      this
    );
  }
  get(t, n) {
    if (((t = mt(t)), t)) {
      const s = m.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n) return r;
        if (n === !0) return qu(r);
        if (m.isFunction(n)) return n.call(this, r, s);
        if (m.isRegExp(n)) return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = mt(t)), t)) {
      const s = m.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || Mn(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(i) {
      if (((i = mt(i)), i)) {
        const l = m.findKey(s, i);
        l && (!n || Mn(s, s[l], l, n)) && (delete s[l], (r = !0));
      }
    }
    return m.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length,
      r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || Mn(this, this[o], o, t, !0)) && (delete this[o], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const n = this,
      s = {};
    return (
      m.forEach(this, (r, o) => {
        const i = m.findKey(s, o);
        if (i) {
          (n[i] = Jt(r)), delete n[o];
          return;
        }
        const l = t ? Ju(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Jt(r)), (s[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      m.forEach(this, (s, r) => {
        s != null && s !== !1 && (n[r] = t && m.isArray(s) ? s.join(", ") : s);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[gr] = this[gr] = { accessors: {} }).accessors,
      r = this.prototype;
    function o(i) {
      const l = mt(i);
      s[l] || (Gu(r, i), (s[l] = !0));
    }
    return m.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
xn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
m.reduceDescriptors(xn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    },
  };
});
m.freezeMethods(xn);
const Ne = xn;
function Bn(e, t) {
  const n = this || Ss,
    s = t || n,
    r = Ne.from(s.headers);
  let o = s.data;
  return (
    m.forEach(e, function (l) {
      o = l.call(n, o, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    o
  );
}
function Bo(e) {
  return !!(e && e.__CANCEL__);
}
function Pt(e, t, n) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
m.inherits(Pt, $, { __CANCEL__: !0 });
function Xu(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new $(
          "Request failed with status code " + n.status,
          [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Yu = Re.hasStandardBrowserEnv
  ? {
      write(e, t, n, s, r, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        m.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          m.isString(s) && i.push("path=" + s),
          m.isString(r) && i.push("domain=" + r),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Qu(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zu(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $o(e, t) {
  return e && !Qu(t) ? Zu(e, t) : t;
}
const ef = Re.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let s;
      function r(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (s = r(window.location.href)),
        function (i) {
          const l = m.isString(i) ? r(i) : i;
          return l.protocol === s.protocol && l.host === s.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function tf(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function nf(e, t) {
  e = e || 10;
  const n = new Array(e),
    s = new Array(e);
  let r = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        d = s[o];
      i || (i = a), (n[r] = u), (s[r] = a);
      let h = o,
        v = 0;
      for (; h !== r; ) (v += n[h++]), (h = h % e);
      if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), a - i < t)) return;
      const A = d && a - d;
      return A ? Math.round((v * 1e3) / A) : void 0;
    }
  );
}
function _r(e, t) {
  let n = 0;
  const s = nf(50, 250);
  return (r) => {
    const o = r.loaded,
      i = r.lengthComputable ? r.total : void 0,
      l = o - n,
      u = s(l),
      a = o <= i;
    n = o;
    const d = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && i && a ? (i - o) / u : void 0,
      event: r,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const sf = typeof XMLHttpRequest < "u",
  rf =
    sf &&
    function (e) {
      return new Promise(function (n, s) {
        let r = e.data;
        const o = Ne.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: l } = e,
          u;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u);
        }
        let d;
        if (m.isFormData(r)) {
          if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((d = o.getContentType()) !== !1) {
            const [E, ...L] = d
              ? d
                  .split(";")
                  .map((M) => M.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([E || "multipart/form-data", ...L].join("; "));
          }
        }
        let h = new XMLHttpRequest();
        if (e.auth) {
          const E = e.auth.username || "",
            L = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(E + ":" + L));
        }
        const v = $o(e.baseURL, e.url);
        h.open(e.method.toUpperCase(), Io(v, e.params, e.paramsSerializer), !0),
          (h.timeout = e.timeout);
        function A() {
          if (!h) return;
          const E = Ne.from(
              "getAllResponseHeaders" in h && h.getAllResponseHeaders()
            ),
            M = {
              data:
                !i || i === "text" || i === "json"
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: E,
              config: e,
              request: h,
            };
          Xu(
            function (B) {
              n(B), a();
            },
            function (B) {
              s(B), a();
            },
            M
          ),
            (h = null);
        }
        if (
          ("onloadend" in h
            ? (h.onloadend = A)
            : (h.onreadystatechange = function () {
                !h ||
                  h.readyState !== 4 ||
                  (h.status === 0 &&
                    !(h.responseURL && h.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(A);
              }),
          (h.onabort = function () {
            h &&
              (s(new $("Request aborted", $.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            s(new $("Network Error", $.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let L = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const M = e.transitional || Lo;
            e.timeoutErrorMessage && (L = e.timeoutErrorMessage),
              s(
                new $(
                  L,
                  M.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
                  e,
                  h
                )
              ),
              (h = null);
          }),
          Re.hasStandardBrowserEnv &&
            (l && m.isFunction(l) && (l = l(e)), l || (l !== !1 && ef(v))))
        ) {
          const E =
            e.xsrfHeaderName && e.xsrfCookieName && Yu.read(e.xsrfCookieName);
          E && o.set(e.xsrfHeaderName, E);
        }
        r === void 0 && o.setContentType(null),
          "setRequestHeader" in h &&
            m.forEach(o.toJSON(), function (L, M) {
              h.setRequestHeader(M, L);
            }),
          m.isUndefined(e.withCredentials) ||
            (h.withCredentials = !!e.withCredentials),
          i && i !== "json" && (h.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            h.addEventListener("progress", _r(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            h.upload &&
            h.upload.addEventListener("progress", _r(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (E) => {
              h &&
                (s(!E || E.type ? new Pt(null, e, h) : E),
                h.abort(),
                (h = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const O = tf(v);
        if (O && Re.protocols.indexOf(O) === -1) {
          s(new $("Unsupported protocol " + O + ":", $.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(r || null);
      });
    },
  Zn = { http: Tu, xhr: rf };
m.forEach(Zn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const br = (e) => `- ${e}`,
  of = (e) => m.isFunction(e) || e === null || e === !1,
  Uo = {
    getAdapter: (e) => {
      e = m.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, s;
      const r = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((s = n),
          !of(n) && ((s = Zn[(i = String(n)).toLowerCase()]), s === void 0))
        )
          throw new $(`Unknown adapter '${i}'`);
        if (s) break;
        r[i || "#" + o] = s;
      }
      if (!s) {
        const o = Object.entries(r).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(br).join(`
`)
            : " " + br(o[0])
          : "as no adapter specified";
        throw new $(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: Zn,
  };
function $n(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Pt(null, e);
}
function yr(e) {
  return (
    $n(e),
    (e.headers = Ne.from(e.headers)),
    (e.data = Bn.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Uo.getAdapter(e.adapter || Ss.adapter)(e).then(
      function (s) {
        return (
          $n(e),
          (s.data = Bn.call(e, e.transformResponse, s)),
          (s.headers = Ne.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Bo(s) ||
            ($n(e),
            s &&
              s.response &&
              ((s.response.data = Bn.call(e, e.transformResponse, s.response)),
              (s.response.headers = Ne.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const xr = (e) => (e instanceof Ne ? e.toJSON() : e);
function ct(e, t) {
  t = t || {};
  const n = {};
  function s(a, d, h) {
    return m.isPlainObject(a) && m.isPlainObject(d)
      ? m.merge.call({ caseless: h }, a, d)
      : m.isPlainObject(d)
        ? m.merge({}, d)
        : m.isArray(d)
          ? d.slice()
          : d;
  }
  function r(a, d, h) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(a)) return s(void 0, a, h);
    } else return s(a, d, h);
  }
  function o(a, d) {
    if (!m.isUndefined(d)) return s(void 0, d);
  }
  function i(a, d) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(a)) return s(void 0, a);
    } else return s(void 0, d);
  }
  function l(a, d, h) {
    if (h in t) return s(a, d);
    if (h in e) return s(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (a, d) => r(xr(a), xr(d), !0),
  };
  return (
    m.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const h = u[d] || r,
        v = h(e[d], t[d], d);
      (m.isUndefined(v) && h !== l) || (n[d] = v);
    }),
    n
  );
}
const Do = "1.6.7",
  Os = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Os[e] = function (s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const wr = {};
Os.transitional = function (t, n, s) {
  function r(o, i) {
    return (
      "[Axios v" +
      Do +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (s ? ". " + s : "")
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new $(
        r(i, " has been removed" + (n ? " in " + n : "")),
        $.ERR_DEPRECATED
      );
    return (
      n &&
        !wr[i] &&
        ((wr[i] = !0),
        console.warn(
          r(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, l) : !0
    );
  };
};
function lf(e, t, n) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r],
      i = t[o];
    if (i) {
      const l = e[o],
        u = l === void 0 || i(l, o, e);
      if (u !== !0)
        throw new $("option " + o + " must be " + u, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new $("Unknown option " + o, $.ERR_BAD_OPTION);
  }
}
const es = { assertOptions: lf, validators: Os },
  Le = es.validators;
class nn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new mr(), response: new mr() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r;
        Error.captureStackTrace
          ? Error.captureStackTrace((r = {}))
          : (r = new Error());
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        s.stack
          ? o &&
            !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (s.stack +=
              `
` + o)
          : (s.stack = o);
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ct(this.defaults, n));
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 &&
      es.assertOptions(
        s,
        {
          silentJSONParsing: Le.transitional(Le.boolean),
          forcedJSONParsing: Le.transitional(Le.boolean),
          clarifyTimeoutError: Le.transitional(Le.boolean),
        },
        !1
      ),
      r != null &&
        (m.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : es.assertOptions(
              r,
              { encode: Le.function, serialize: Le.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && m.merge(o.common, o[n.method]);
    o &&
      m.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (O) => {
          delete o[O];
        }
      ),
      (n.headers = Ne.concat(i, o));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == "function" && E.runWhen(n) === !1) ||
        ((u = u && E.synchronous), l.unshift(E.fulfilled, E.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (E) {
      a.push(E.fulfilled, E.rejected);
    });
    let d,
      h = 0,
      v;
    if (!u) {
      const O = [yr.bind(this), void 0];
      for (
        O.unshift.apply(O, l),
          O.push.apply(O, a),
          v = O.length,
          d = Promise.resolve(n);
        h < v;

      )
        d = d.then(O[h++], O[h++]);
      return d;
    }
    v = l.length;
    let A = n;
    for (h = 0; h < v; ) {
      const O = l[h++],
        E = l[h++];
      try {
        A = O(A);
      } catch (L) {
        E.call(this, L);
        break;
      }
    }
    try {
      d = yr.call(this, A);
    } catch (O) {
      return Promise.reject(O);
    }
    for (h = 0, v = a.length; h < v; ) d = d.then(a[h++], a[h++]);
    return d;
  }
  getUri(t) {
    t = ct(this.defaults, t);
    const n = $o(t.baseURL, t.url);
    return Io(n, t.params, t.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function (t) {
  nn.prototype[t] = function (n, s) {
    return this.request(
      ct(s || {}, { method: t, url: n, data: (s || {}).data })
    );
  };
});
m.forEach(["post", "put", "patch"], function (t) {
  function n(s) {
    return function (o, i, l) {
      return this.request(
        ct(l || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (nn.prototype[t] = n()), (nn.prototype[t + "Form"] = n(!0));
});
const Gt = nn;
class Rs {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; ) s._listeners[o](r);
      s._listeners = null;
    }),
      (this.promise.then = (r) => {
        let o;
        const i = new Promise((l) => {
          s.subscribe(l), (o = l);
        }).then(r);
        return (
          (i.cancel = function () {
            s.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        s.reason || ((s.reason = new Pt(o, i, l)), n(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Rs(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
}
const cf = Rs;
function uf(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function ff(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const ts = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ts).forEach(([e, t]) => {
  ts[t] = e;
});
const af = ts;
function Ho(e) {
  const t = new Gt(e),
    n = wo(Gt.prototype.request, t);
  return (
    m.extend(n, Gt.prototype, t, { allOwnKeys: !0 }),
    m.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return Ho(ct(e, r));
    }),
    n
  );
}
const J = Ho(Ss);
J.Axios = Gt;
J.CanceledError = Pt;
J.CancelToken = cf;
J.isCancel = Bo;
J.VERSION = Do;
J.toFormData = yn;
J.AxiosError = $;
J.Cancel = J.CanceledError;
J.all = function (t) {
  return Promise.all(t);
};
J.spread = uf;
J.isAxiosError = ff;
J.mergeConfig = ct;
J.AxiosHeaders = Ne;
J.formToJSON = (e) => Mo(m.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = Uo.getAdapter;
J.HttpStatusCode = af;
J.default = J;
const df = {
    class:
      "w-screen h-auto py-12 bg-[#060918] flex flex-col justify-center items-center gap-12",
    id: "works",
  },
  hf = P(
    "div",
    {
      class:
        "px-4 relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden",
    },
    [
      P("span", null, "работы"),
      P("div", {
        class:
          "w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] block absolute top-0 left-0",
      }),
    ],
    -1
  ),
  pf = { class: "w-full h-auto flex justify-center gap-8 px-8 flex-wrap" },
  mf = ["onClick"],
  gf = {
    class:
      "z-20 opacity-0 transition-all duration-700 gap-8 backdrop-blur-lg w-full h-full flex flex-col text-center px-4 justify-center items-center text-white rounded-3xl",
  },
  _f = { class: "text-3xl font-bold" },
  bf = { class: "text-xl" },
  yf = {
    __name: "WorksComponent",
    setup(e) {
      const t = Et({});
      At(() => {
        J.get("https://86e772c40d27ca73.mokky.dev/works").then(
          (s) => (t.value = s)
        );
      });
      const n = (s) => {
        window.location.href = s;
      };
      return (s, r) => (
        ae(),
        be("div", df, [
          hf,
          P("div", pf, [
            (ae(!0),
            be(
              me,
              null,
              ol(
                t.value.data,
                (o) => (
                  ae(),
                  be(
                    "div",
                    {
                      key: o.id,
                      class:
                        "w-[400px] h-[600px] rounded-xl bg-cover bg-no-repeat bg-center [&:hover>div]:opacity-100 [&:hover>span>img]:scale-110 flex justify-center items-center cursor-pointer",
                      onClick: (i) => n(o.href),
                      style: ln({ "background-image": o.img }),
                    },
                    [
                      P("div", gf, [
                        P("span", _f, Ls(o.name), 1),
                        P("span", bf, Ls(o.type), 1),
                      ]),
                    ],
                    12,
                    mf
                  )
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  },
  xf = {
    class:
      "w-screen h-auto bg-[#060918] flex flex-col justify-center items-center gap-12",
    id: "contacts",
  },
  wf = P(
    "div",
    {
      class:
        "px-4 relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden",
    },
    [
      P("span", null, "Связь со мной"),
      P("div", {
        class:
          "w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] block absolute top-0 left-0",
      }),
    ],
    -1
  ),
  Ef = pn(
    '<div class="flex flex-col w-2/5 text-right gap-2 max-[750px]:w-full max-[750px]:text-center"><span class="text-4xl font-bold">У вас остались вопросы? </span><span class="text-[#96a1c0]">Вы можете оставить свой телеграм и я свяжусь с вами в ближайшее время,</span><span>или свяжитесь со мной сами:</span><span class="[&amp;&gt;a&gt;img]:w-10 flex justify-end gap-4 max-[750px]:justify-center"><a href="https://t.me/yourantosha"><img src="' +
      bo +
      '" alt=""></a><a href="https://vk.com/6old6"><img src="' +
      yo +
      '" alt=""></a><a href="mailto:tacontactta@gmail.com"><img src="' +
      xo +
      '" alt=""></a></span></div>',
    1
  ),
  vf = P(
    "input",
    { type: "text", placeholder: "Как к вам обращаться", id: "name" },
    null,
    -1
  ),
  Sf = P(
    "input",
    { type: "text", placeholder: "@telegram", id: "tg" },
    null,
    -1
  ),
  Of = {
    __name: "ContactsComponent",
    setup(e) {
      At(() => {});
      const t = () => {
        const n = document.getElementById("tg"),
          s = document.getElementById("name");
        n.value == 0
          ? (n.style.border = "1px red solid")
          : (J.post("https://86e772c40d27ca73.mokky.dev/social", {
              name: s.value,
              tg: n.value,
            }),
            (n.style.border = "none"),
            (n.style.borderBottom = "1px white solid"));
      };
      return (n, s) => (
        ae(),
        be("div", xf, [
          wf,
          P(
            "div",
            {
              class:
                "w-full h-[550px] z-10 flex justify-center gap-8 px-8 text-white",
            },
            [
              P(
                "div",
                { class: "flex gap-20 max-[750px]:flex-col max-[750px]:gap-4" },
                [
                  Ef,
                  P(
                    "div",
                    {
                      class:
                        "flex max-[750px]:w-full gap-8 flex-col w-2/5 [&>input]:px-8 [&>input]:py-2 [&>input]:bg-transparent [&>input]:text-white [&>input]:border-b [&>input]:border-white [&>input]:outline-none",
                    },
                    [
                      vf,
                      Sf,
                      P(
                        "button",
                        {
                          onClick: t,
                          class:
                            "px-8 py-2 rounded hover:bg-red-400 transition duration-500",
                        },
                        " Написать мне "
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ])
      );
    },
  },
  Rf = { class: "relative flex flex-col" },
  Af = {
    __name: "App",
    setup(e) {
      return (t, n) => (
        ae(), be("div", Rf, [se(Oc), se(Tc), se(Jc), se(yf), se(Of)])
      );
    },
  };
ac(Af).mount("#app");
