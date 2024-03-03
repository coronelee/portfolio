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
  ue = () => {},
  Ko = () => !1,
  rn = (e) =>
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
  $ = (e, t) => zo.call(e, t),
  F = Array.isArray,
  nt = (e) => on(e) === "[object Map]",
  Er = (e) => on(e) === "[object Set]",
  N = (e) => typeof e == "function",
  Z = (e) => typeof e == "string",
  ft = (e) => typeof e == "symbol",
  W = (e) => e !== null && typeof e == "object",
  vr = (e) => (W(e) || N(e)) && N(e.then) && N(e.catch),
  Sr = Object.prototype.toString,
  on = (e) => Sr.call(e),
  qo = (e) => on(e).slice(8, -1),
  Or = (e) => on(e) === "[object Object]",
  os = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  _t = ns(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  ln = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Wo = /-(\w)/g,
  ot = ln((e) => e.replace(Wo, (t, n) => (n ? n.toUpperCase() : ""))),
  Go = /\B([A-Z])/g,
  at = ln((e) => e.replace(Go, "-$1").toLowerCase()),
  Cr = ln((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Rn = ln((e) => (e ? `on${Cr(e)}` : "")),
  He = (e, t) => !Object.is(e, t),
  An = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Xt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Jo = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Ns;
const Rr = () =>
  Ns ||
  (Ns =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function cn(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = Z(s) ? Qo(s) : cn(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (Z(e) || W(e)) return e;
}
const Xo = /;(?![^(]*\))/g,
  Zo = /:([^]+)/,
  Yo = /\/\*[^]*?\*\//g;
function Qo(e) {
  const t = {};
  return (
    e
      .replace(Yo, "")
      .split(Xo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Zo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function is(e) {
  let t = "";
  if (Z(e)) t = e;
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
function Ar(e) {
  return !!e || e === "";
}
const Ls = (e) =>
    Z(e)
      ? e
      : e == null
        ? ""
        : F(e) || (W(e) && (e.toString === Sr || !N(e.toString)))
          ? JSON.stringify(e, Tr, 2)
          : String(e),
  Tr = (e, t) =>
    t && t.__v_isRef
      ? Tr(e, t.value)
      : nt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[Tn(s, o) + " =>"] = r), n),
              {}
            ),
          }
        : Er(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Tn(n)) }
          : ft(t)
            ? Tn(t)
            : W(t) && !F(t) && !Or(t)
              ? String(t)
              : t,
  Tn = (e, t = "") => {
    var n;
    return ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let me;
class ni {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = me),
      !t && me && (this.index = (me.scopes || (me.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = me;
      try {
        return (me = this), t();
      } finally {
        me = n;
      }
    }
  }
  on() {
    me = this;
  }
  off() {
    me = this.parent;
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
function si(e, t = me) {
  t && t.active && t.effects.push(e);
}
function ri() {
  return me;
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
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ze();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Ue,
      n = We;
    try {
      return (Ue = !0), (We = this), this._runnings++, Ms(this), this.fn();
    } finally {
      Bs(this), this._runnings--, (We = n), (Ue = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (Ms(this),
      Bs(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function oi(e) {
  return e.value;
}
function Ms(e) {
  e._trackId++, (e._depsLength = 0);
}
function Bs(e) {
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
let Ue = !0,
  Hn = 0;
const Ir = [];
function Xe() {
  Ir.push(Ue), (Ue = !1);
}
function Ze() {
  const e = Ir.pop();
  Ue = e === void 0 ? !0 : e;
}
function cs() {
  Hn++;
}
function fs() {
  for (Hn--; !Hn && kn.length; ) kn.shift()();
}
function Fr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Pr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const kn = [];
function Nr(e, t, n) {
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
          ((s._shouldSchedule = !1), s.scheduler && kn.push(s.scheduler)));
  }
  fs();
}
const Lr = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  Dn = new WeakMap(),
  Ge = Symbol(""),
  Vn = Symbol("");
function ie(e, t, n) {
  if (Ue && We) {
    let s = Dn.get(e);
    s || Dn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Lr(() => s.delete(n)))), Fr(We, r);
  }
}
function Pe(e, t, n, s, r, o) {
  const i = Dn.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && F(e)) {
    const f = Number(s);
    i.forEach((u, d) => {
      (d === "length" || (!ft(d) && d >= f)) && l.push(u);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        F(e)
          ? os(n) && l.push(i.get("length"))
          : (l.push(i.get(Ge)), nt(e) && l.push(i.get(Vn)));
        break;
      case "delete":
        F(e) || (l.push(i.get(Ge)), nt(e) && l.push(i.get(Vn)));
        break;
      case "set":
        nt(e) && l.push(i.get(Ge));
        break;
    }
  cs();
  for (const f of l) f && Nr(f, 4);
  fs();
}
const ii = ns("__proto__,__v_isRef,__isVue"),
  Mr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ft)
  ),
  js = li();
function li() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = k(this);
        for (let o = 0, i = this.length; o < i; o++) ie(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(k)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Xe(), cs();
        const s = k(this)[t].apply(this, n);
        return fs(), Ze(), s;
      };
    }),
    e
  );
}
function ci(e) {
  const t = k(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class Br {
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
      return s === (r ? (o ? wi : Hr) : o ? $r : Ur).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = F(t);
    if (!r) {
      if (i && $(js, n)) return Reflect.get(js, n, s);
      if (n === "hasOwnProperty") return ci;
    }
    const l = Reflect.get(t, n, s);
    return (ft(n) ? Mr.has(n) : ii(n)) || (r || ie(t, "get", n), o)
      ? l
      : le(l)
        ? i && os(n)
          ? l
          : l.value
        : W(l)
          ? r
            ? kr(l)
            : ds(l)
          : l;
  }
}
class jr extends Br {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const f = it(o);
      if (
        (!Zt(s) && !it(s) && ((o = k(o)), (s = k(s))), !F(t) && le(o) && !le(s))
      )
        return f ? !1 : ((o.value = s), !0);
    }
    const i = F(t) && os(n) ? Number(n) < t.length : $(t, n),
      l = Reflect.set(t, n, s, r);
    return (
      t === k(r) && (i ? He(s, o) && Pe(t, "set", n, s) : Pe(t, "add", n, s)), l
    );
  }
  deleteProperty(t, n) {
    const s = $(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Pe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ft(n) || !Mr.has(n)) && ie(t, "has", n), s;
  }
  ownKeys(t) {
    return ie(t, "iterate", F(t) ? "length" : Ge), Reflect.ownKeys(t);
  }
}
class fi extends Br {
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
const ai = new jr(),
  ui = new fi(),
  di = new jr(!0),
  as = (e) => e,
  fn = (e) => Reflect.getPrototypeOf(e);
function Mt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = k(e),
    o = k(t);
  n || (He(t, o) && ie(r, "get", t), ie(r, "get", o));
  const { has: i } = fn(r),
    l = s ? as : n ? hs : wt;
  if (i.call(r, t)) return l(e.get(t));
  if (i.call(r, o)) return l(e.get(o));
  e !== r && e.get(t);
}
function Bt(e, t = !1) {
  const n = this.__v_raw,
    s = k(n),
    r = k(e);
  return (
    t || (He(e, r) && ie(s, "has", e), ie(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function jt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ie(k(e), "iterate", Ge), Reflect.get(e, "size", e)
  );
}
function Us(e) {
  e = k(e);
  const t = k(this);
  return fn(t).has.call(t, e) || (t.add(e), Pe(t, "add", e, e)), this;
}
function $s(e, t) {
  t = k(t);
  const n = k(this),
    { has: s, get: r } = fn(n);
  let o = s.call(n, e);
  o || ((e = k(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? He(t, i) && Pe(n, "set", e, t) : Pe(n, "add", e, t), this
  );
}
function Hs(e) {
  const t = k(this),
    { has: n, get: s } = fn(t);
  let r = n.call(t, e);
  r || ((e = k(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && Pe(t, "delete", e, void 0), o;
}
function ks() {
  const e = k(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Pe(e, "clear", void 0, void 0), n;
}
function Ut(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = k(i),
      f = t ? as : e ? hs : wt;
    return (
      !e && ie(l, "iterate", Ge), i.forEach((u, d) => s.call(r, f(u), f(d), o))
    );
  };
}
function $t(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = k(r),
      i = nt(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      f = e === "keys" && i,
      u = r[e](...s),
      d = n ? as : t ? hs : wt;
    return (
      !t && ie(o, "iterate", f ? Vn : Ge),
      {
        next() {
          const { value: p, done: v } = u.next();
          return v
            ? { value: p, done: v }
            : { value: l ? [d(p[0]), d(p[1])] : d(p), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ne(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function pi() {
  const e = {
      get(o) {
        return Mt(this, o);
      },
      get size() {
        return jt(this);
      },
      has: Bt,
      add: Us,
      set: $s,
      delete: Hs,
      clear: ks,
      forEach: Ut(!1, !1),
    },
    t = {
      get(o) {
        return Mt(this, o, !1, !0);
      },
      get size() {
        return jt(this);
      },
      has: Bt,
      add: Us,
      set: $s,
      delete: Hs,
      clear: ks,
      forEach: Ut(!1, !0),
    },
    n = {
      get(o) {
        return Mt(this, o, !0);
      },
      get size() {
        return jt(this, !0);
      },
      has(o) {
        return Bt.call(this, o, !0);
      },
      add: Ne("add"),
      set: Ne("set"),
      delete: Ne("delete"),
      clear: Ne("clear"),
      forEach: Ut(!0, !1),
    },
    s = {
      get(o) {
        return Mt(this, o, !0, !0);
      },
      get size() {
        return jt(this, !0);
      },
      has(o) {
        return Bt.call(this, o, !0);
      },
      add: Ne("add"),
      set: Ne("set"),
      delete: Ne("delete"),
      clear: Ne("clear"),
      forEach: Ut(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = $t(o, !1, !1)),
        (n[o] = $t(o, !0, !1)),
        (t[o] = $t(o, !1, !0)),
        (s[o] = $t(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [hi, mi, gi, _i] = pi();
function us(e, t) {
  const n = t ? (e ? _i : gi) : e ? mi : hi;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get($(n, r) && r in s ? n : s, r, o);
}
const bi = { get: us(!1, !1) },
  yi = { get: us(!1, !0) },
  xi = { get: us(!0, !1) },
  Ur = new WeakMap(),
  $r = new WeakMap(),
  Hr = new WeakMap(),
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
  return it(e) ? e : ps(e, !1, ai, bi, Ur);
}
function Si(e) {
  return ps(e, !1, di, yi, $r);
}
function kr(e) {
  return ps(e, !0, ui, xi, Hr);
}
function ps(e, t, n, s, r) {
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
function Zt(e) {
  return !!(e && e.__v_isShallow);
}
function Dr(e) {
  return st(e) || it(e);
}
function k(e) {
  const t = e && e.__v_raw;
  return t ? k(t) : e;
}
function Vr(e) {
  return Object.isExtensible(e) && Xt(e, "__v_skip", !0), e;
}
const wt = (e) => (W(e) ? ds(e) : e),
  hs = (e) => (W(e) ? kr(e) : e);
class Kr {
  constructor(t, n, s, r) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ls(
        () => t(this._value),
        () => kt(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = k(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        He(t._value, (t._value = t.effect.run())) &&
        kt(t, 4),
      zr(t),
      t.effect._dirtyLevel >= 2 && kt(t, 2),
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
  const o = N(e);
  return (
    o ? ((s = e), (r = ue)) : ((s = e.get), (r = e.set)),
    new Kr(s, r, o || !r, n)
  );
}
function zr(e) {
  var t;
  Ue &&
    We &&
    ((e = k(e)),
    Fr(
      We,
      (t = e.dep) != null
        ? t
        : (e.dep = Lr(() => (e.dep = void 0), e instanceof Kr ? e : void 0))
    ));
}
function kt(e, t = 4, n) {
  e = k(e);
  const s = e.dep;
  s && Nr(s, t);
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function Et(e) {
  return Ci(e, !1);
}
function Ci(e, t) {
  return le(e) ? e : new Ri(e, t);
}
class Ri {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : k(t)),
      (this._value = n ? t : wt(t));
  }
  get value() {
    return zr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Zt(t) || it(t);
    (t = n ? t : k(t)),
      He(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : wt(t)), kt(this, 4));
  }
}
function Ai(e) {
  return le(e) ? e.value : e;
}
const Ti = {
  get: (e, t, n) => Ai(Reflect.get(e, t, n)),
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
 **/ function $e(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    an(r, t, n);
  }
}
function be(e, t, n, s) {
  if (N(e)) {
    const o = $e(e, t, n, s);
    return (
      o &&
        vr(o) &&
        o.catch((i) => {
          an(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(be(e[o], t, n, s));
  return r;
}
function an(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      $e(f, null, 10, [e, i, l]);
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
const Q = [];
let Se = 0;
const rt = [];
let Me = null,
  qe = 0;
const Wr = Promise.resolve();
let ms = null;
function Ii(e) {
  const t = ms || Wr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fi(e) {
  let t = Se + 1,
    n = Q.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Q[s],
      o = St(r);
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function gs(e) {
  (!Q.length || !Q.includes(e, vt && e.allowRecurse ? Se + 1 : Se)) &&
    (e.id == null ? Q.push(e) : Q.splice(Fi(e.id), 0, e), Gr());
}
function Gr() {
  !vt && !Kn && ((Kn = !0), (ms = Wr.then(Xr)));
}
function Ni(e) {
  const t = Q.indexOf(e);
  t > Se && Q.splice(t, 1);
}
function Li(e) {
  F(e)
    ? rt.push(...e)
    : (!Me || !Me.includes(e, e.allowRecurse ? qe + 1 : qe)) && rt.push(e),
    Gr();
}
function Ds(e, t, n = vt ? Se + 1 : 0) {
  for (; n < Q.length; n++) {
    const s = Q[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      Q.splice(n, 1), n--, s();
    }
  }
}
function Jr(e) {
  if (rt.length) {
    const t = [...new Set(rt)].sort((n, s) => St(n) - St(s));
    if (((rt.length = 0), Me)) {
      Me.push(...t);
      return;
    }
    for (Me = t, qe = 0; qe < Me.length; qe++) Me[qe]();
    (Me = null), (qe = 0);
  }
}
const St = (e) => (e.id == null ? 1 / 0 : e.id),
  Mi = (e, t) => {
    const n = St(e) - St(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Xr(e) {
  (Kn = !1), (vt = !0), Q.sort(Mi);
  try {
    for (Se = 0; Se < Q.length; Se++) {
      const t = Q[Se];
      t && t.active !== !1 && $e(t, null, 14);
    }
  } finally {
    (Se = 0),
      (Q.length = 0),
      Jr(),
      (vt = !1),
      (ms = null),
      (Q.length || rt.length) && Xr();
  }
}
function Bi(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || z;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: v } = s[d] || z;
    v && (r = n.map((R) => (Z(R) ? R.trim() : R))), p && (r = n.map(Jo));
  }
  let l,
    f = s[(l = Rn(t))] || s[(l = Rn(ot(t)))];
  !f && o && (f = s[(l = Rn(at(t)))]), f && be(f, e, 6, r);
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), be(u, e, 6, r);
  }
}
function Zr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!N(e)) {
    const f = (u) => {
      const d = Zr(u, t, !0);
      d && ((l = !0), ee(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  return !o && !l
    ? (W(e) && s.set(e, null), null)
    : (F(o) ? o.forEach((f) => (i[f] = null)) : ee(i, o),
      W(e) && s.set(e, i),
      i);
}
function un(e, t) {
  return !e || !rn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      $(e, t[0].toLowerCase() + t.slice(1)) || $(e, at(t)) || $(e, t));
}
let Oe = null,
  Yr = null;
function Yt(e) {
  const t = Oe;
  return (Oe = e), (Yr = (e && e.type.__scopeId) || null), t;
}
function ji(e, t = Oe, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Ys(-1);
    const o = Yt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Yt(o), s._d && Ys(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Pn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: f,
    emit: u,
    render: d,
    renderCache: p,
    data: v,
    setupState: R,
    ctx: O,
    inheritAttrs: E,
  } = e;
  let L, B;
  const X = Yt(e);
  try {
    if (n.shapeFlag & 4) {
      const J = r || s,
        ae = J;
      (L = ve(d.call(ae, J, p, o, R, v, O))), (B = f);
    } else {
      const J = t;
      (L = ve(
        J.length > 1 ? J(o, { attrs: f, slots: l, emit: u }) : J(o, null)
      )),
        (B = t.props ? f : Ui(f));
    }
  } catch (J) {
    (xt.length = 0), an(J, e, 1), (L = se(Je));
  }
  let j = L;
  if (B && E !== !1) {
    const J = Object.keys(B),
      { shapeFlag: ae } = j;
    J.length && ae & 7 && (i && J.some(ss) && (B = $i(B, i)), (j = lt(j, B)));
  }
  return (
    n.dirs && ((j = lt(j)), (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (j.transition = n.transition),
    (L = j),
    Yt(X),
    L
  );
}
const Ui = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || rn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  $i = (e, t) => {
    const n = {};
    for (const s in e) (!ss(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Hi(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: f } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && f >= 0) {
    if (f & 1024) return !0;
    if (f & 16) return s ? Vs(s, i, u) : !!i;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const v = d[p];
        if (i[v] !== s[v] && !un(u, v)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
        ? !1
        : s
          ? i
            ? Vs(s, i, u)
            : !0
          : !!i;
  return !1;
}
function Vs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !un(n, o)) return !0;
  }
  return !1;
}
function ki({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Di = Symbol.for("v-ndc"),
  Vi = (e) => e.__isSuspense;
function Ki(e, t) {
  t && t.pendingBranch
    ? F(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Li(e);
}
const zi = Symbol.for("v-scx"),
  qi = () => Vt(zi),
  Ht = {};
function In(e, t, n) {
  return Qr(e, t, n);
}
function Qr(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: l } = z
) {
  if (t && o) {
    const H = t;
    t = (...Ae) => {
      H(...Ae), ae();
    };
  }
  const f = re,
    u = (H) => (s === !0 ? H : et(H, s === !1 ? 1 : void 0));
  let d,
    p = !1,
    v = !1;
  if (
    (le(e)
      ? ((d = () => e.value), (p = Zt(e)))
      : st(e)
        ? ((d = () => u(e)), (p = !0))
        : F(e)
          ? ((v = !0),
            (p = e.some((H) => st(H) || Zt(H))),
            (d = () =>
              e.map((H) => {
                if (le(H)) return H.value;
                if (st(H)) return u(H);
                if (N(H)) return $e(H, f, 2);
              })))
          : N(e)
            ? t
              ? (d = () => $e(e, f, 2))
              : (d = () => (R && R(), be(e, f, 3, [O])))
            : (d = ue),
    t && s)
  ) {
    const H = d;
    d = () => et(H());
  }
  let R,
    O = (H) => {
      R = j.onStop = () => {
        $e(H, f, 4), (R = j.onStop = void 0);
      };
    },
    E;
  if (gn)
    if (
      ((O = ue),
      t ? n && be(t, f, 3, [d(), v ? [] : void 0, O]) : d(),
      r === "sync")
    ) {
      const H = qi();
      E = H.__watcherHandles || (H.__watcherHandles = []);
    } else return ue;
  let L = v ? new Array(e.length).fill(Ht) : Ht;
  const B = () => {
    if (!(!j.active || !j.dirty))
      if (t) {
        const H = j.run();
        (s || p || (v ? H.some((Ae, ye) => He(Ae, L[ye])) : He(H, L))) &&
          (R && R(),
          be(t, f, 3, [H, L === Ht ? void 0 : v && L[0] === Ht ? [] : L, O]),
          (L = H));
      } else j.run();
  };
  B.allowRecurse = !!t;
  let X;
  r === "sync"
    ? (X = B)
    : r === "post"
      ? (X = () => oe(B, f && f.suspense))
      : ((B.pre = !0), f && (B.id = f.uid), (X = () => gs(B)));
  const j = new ls(d, ue, X),
    J = ri(),
    ae = () => {
      j.stop(), J && rs(J.effects, j);
    };
  return (
    t
      ? n
        ? B()
        : (L = j.run())
      : r === "post"
        ? oe(j.run.bind(j), f && f.suspense)
        : j.run(),
    E && E.push(ae),
    ae
  );
}
function Wi(e, t, n) {
  const s = this.proxy,
    r = Z(e) ? (e.includes(".") ? eo(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  N(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = At(this),
    l = Qr(r, o.bind(s), n);
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
function Ke(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let f = l.dir[s];
    f && (Xe(), be(f, n, 8, [e.el, l, e, t]), Ze());
  }
}
const Dt = (e) => !!e.type.__asyncLoader,
  to = (e) => e.type.__isKeepAlive;
function Gi(e, t) {
  no(e, "a", t);
}
function Ji(e, t) {
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
  if ((dn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      to(r.parent.vnode) && Xi(s, t, n, r), (r = r.parent);
  }
}
function Xi(e, t, n, s) {
  const r = dn(t, e, s, !0);
  so(() => {
    rs(s[t], r);
  }, n);
}
function dn(e, t, n = re, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Xe();
          const l = At(n),
            f = be(t, n, e, i);
          return l(), Ze(), f;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Fe =
    (e) =>
    (t, n = re) =>
      (!gn || e === "sp") && dn(e, (...s) => t(...s), n),
  Zi = Fe("bm"),
  Rt = Fe("m"),
  Yi = Fe("bu"),
  Qi = Fe("u"),
  el = Fe("bum"),
  so = Fe("um"),
  tl = Fe("sp"),
  nl = Fe("rtg"),
  sl = Fe("rtc");
function rl(e, t = re) {
  dn("ec", e, t);
}
function ol(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (F(e) || Z(e)) {
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
      for (let l = 0, f = i.length; l < f; l++) {
        const u = i[l];
        r[l] = t(e[u], u, l, o && o[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const zn = (e) => (e ? (go(e) ? xs(e) || e.proxy : zn(e.parent)) : null),
  bt = ee(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zn(e.parent),
    $root: (e) => zn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => _s(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), gs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Ii.bind(e.proxy)),
    $watch: (e) => Wi.bind(e),
  }),
  Fn = (e, t) => e !== z && !e.__isScriptSetup && $(e, t),
  il = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: f,
      } = e;
      let u;
      if (t[0] !== "$") {
        const R = i[t];
        if (R !== void 0)
          switch (R) {
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
          if (Fn(s, t)) return (i[t] = 1), s[t];
          if (r !== z && $(r, t)) return (i[t] = 2), r[t];
          if ((u = e.propsOptions[0]) && $(u, t)) return (i[t] = 3), o[t];
          if (n !== z && $(n, t)) return (i[t] = 4), n[t];
          qn && (i[t] = 0);
        }
      }
      const d = bt[t];
      let p, v;
      if (d) return t === "$attrs" && ie(e, "get", t), d(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== z && $(n, t)) return (i[t] = 4), n[t];
      if (((v = f.config.globalProperties), $(v, t))) return v[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return Fn(r, t)
        ? ((r[t] = n), !0)
        : s !== z && $(s, t)
          ? ((s[t] = n), !0)
          : $(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
        (e !== z && $(e, i)) ||
        Fn(t, i) ||
        ((l = o[0]) && $(l, i)) ||
        $(s, i) ||
        $(bt, i) ||
        $(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : $(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Ks(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let qn = !0;
function ll(e) {
  const t = _s(e),
    n = e.proxy,
    s = e.ctx;
  (qn = !1), t.beforeCreate && zs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: f,
    inject: u,
    created: d,
    beforeMount: p,
    mounted: v,
    beforeUpdate: R,
    updated: O,
    activated: E,
    deactivated: L,
    beforeDestroy: B,
    beforeUnmount: X,
    destroyed: j,
    unmounted: J,
    render: ae,
    renderTracked: H,
    renderTriggered: Ae,
    errorCaptured: ye,
    serverPrefetch: En,
    expose: ke,
    inheritAttrs: dt,
    components: It,
    directives: Ft,
    filters: vn,
  } = t;
  if ((u && cl(u, s, null), i))
    for (const q in i) {
      const V = i[q];
      N(V) && (s[q] = V.bind(n));
    }
  if (r) {
    const q = r.call(n, n);
    W(q) && (e.data = ds(q));
  }
  if (((qn = !0), o))
    for (const q in o) {
      const V = o[q],
        De = N(V) ? V.bind(n, n) : N(V.get) ? V.get.bind(n, n) : ue,
        Nt = !N(V) && N(V.set) ? V.set.bind(n) : ue,
        Ve = $l({ get: De, set: Nt });
      Object.defineProperty(s, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (xe) => (Ve.value = xe),
      });
    }
  if (l) for (const q in l) ro(l[q], s, n, q);
  if (f) {
    const q = N(f) ? f.call(n) : f;
    Reflect.ownKeys(q).forEach((V) => {
      hl(V, q[V]);
    });
  }
  d && zs(d, e, "c");
  function te(q, V) {
    F(V) ? V.forEach((De) => q(De.bind(n))) : V && q(V.bind(n));
  }
  if (
    (te(Zi, p),
    te(Rt, v),
    te(Yi, R),
    te(Qi, O),
    te(Gi, E),
    te(Ji, L),
    te(rl, ye),
    te(sl, H),
    te(nl, Ae),
    te(el, X),
    te(so, J),
    te(tl, En),
    F(ke))
  )
    if (ke.length) {
      const q = e.exposed || (e.exposed = {});
      ke.forEach((V) => {
        Object.defineProperty(q, V, {
          get: () => n[V],
          set: (De) => (n[V] = De),
        });
      });
    } else e.exposed || (e.exposed = {});
  ae && e.render === ue && (e.render = ae),
    dt != null && (e.inheritAttrs = dt),
    It && (e.components = It),
    Ft && (e.directives = Ft);
}
function cl(e, t, n = ue) {
  F(e) && (e = Wn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    W(r)
      ? "default" in r
        ? (o = Vt(r.from || s, r.default, !0))
        : (o = Vt(r.from || s))
      : (o = Vt(r)),
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
  be(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ro(e, t, n, s) {
  const r = s.includes(".") ? eo(n, s) : () => n[s];
  if (Z(e)) {
    const o = t[e];
    N(o) && In(r, o);
  } else if (N(e)) In(r, e.bind(n));
  else if (W(e))
    if (F(e)) e.forEach((o) => ro(o, t, n, s));
    else {
      const o = N(e.handler) ? e.handler.bind(n) : t[e.handler];
      N(o) && In(r, o, e);
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
  let f;
  return (
    l
      ? (f = l)
      : !r.length && !n && !s
        ? (f = t)
        : ((f = {}),
          r.length && r.forEach((u) => Qt(f, u, i, !0)),
          Qt(f, t, i)),
    W(t) && o.set(t, f),
    f
  );
}
function Qt(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Qt(e, o, n, !0), r && r.forEach((i) => Qt(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = fl[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const fl = {
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
  watch: ul,
  provide: qs,
  inject: al,
};
function qs(e, t) {
  return t
    ? e
      ? function () {
          return ee(
            N(e) ? e.call(this, this) : e,
            N(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function al(e, t) {
  return gt(Wn(e), Wn(t));
}
function Wn(e) {
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
      : ee(Object.create(null), Ks(e), Ks(t ?? {}))
    : t;
}
function ul(e, t) {
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
      isNativeTag: Ko,
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
function pl(e, t) {
  return function (s, r = null) {
    N(s) || (s = ee({}, s)), r != null && !W(r) && (r = null);
    const o = oo(),
      i = new WeakSet();
    let l = !1;
    const f = (o.app = {
      _uid: dl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Hl,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...d) {
        return (
          i.has(u) ||
            (u && N(u.install)
              ? (i.add(u), u.install(f, ...d))
              : N(u) && (i.add(u), u(f, ...d))),
          f
        );
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), f;
      },
      component(u, d) {
        return d ? ((o.components[u] = d), f) : o.components[u];
      },
      directive(u, d) {
        return d ? ((o.directives[u] = d), f) : o.directives[u];
      },
      mount(u, d, p) {
        if (!l) {
          const v = se(s, r);
          return (
            (v.appContext = o),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            d && t ? t(v, u) : e(v, u, p),
            (l = !0),
            (f._container = u),
            (u.__vue_app__ = f),
            xs(v.component) || v.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, d) {
        return (o.provides[u] = d), f;
      },
      runWithContext(u) {
        const d = yt;
        yt = f;
        try {
          return u();
        } finally {
          yt = d;
        }
      },
    });
    return f;
  };
}
let yt = null;
function hl(e, t) {
  if (re) {
    let n = re.provides;
    const s = re.parent && re.parent.provides;
    s === n && (n = re.provides = Object.create(s)), (n[e] = t);
  }
}
function Vt(e, t, n = !1) {
  const s = re || Oe;
  if (s || yt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : yt._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && N(t) ? t.call(s && s.proxy) : t;
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
    l = k(r),
    [f] = e.propsOptions;
  let u = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let v = d[p];
        if (un(e.emitsOptions, v)) continue;
        const R = t[v];
        if (f)
          if ($(o, v)) R !== o[v] && ((o[v] = R), (u = !0));
          else {
            const O = ot(v);
            r[O] = Gn(f, l, O, R, e, !1);
          }
        else R !== o[v] && ((o[v] = R), (u = !0));
      }
    }
  } else {
    io(e, t, r, o) && (u = !0);
    let d;
    for (const p in l)
      (!t || (!$(t, p) && ((d = at(p)) === p || !$(t, d)))) &&
        (f
          ? n &&
            (n[p] !== void 0 || n[d] !== void 0) &&
            (r[p] = Gn(f, l, p, void 0, e, !0))
          : delete r[p]);
    if (o !== l) for (const p in o) (!t || !$(t, p)) && (delete o[p], (u = !0));
  }
  u && Pe(e, "set", "$attrs");
}
function io(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let f in t) {
      if (_t(f)) continue;
      const u = t[f];
      let d;
      r && $(r, (d = ot(f)))
        ? !o || !o.includes(d)
          ? (n[d] = u)
          : ((l || (l = {}))[d] = u)
        : un(e.emitsOptions, f) ||
          ((!(f in s) || u !== s[f]) && ((s[f] = u), (i = !0)));
    }
  if (o) {
    const f = k(n),
      u = l || z;
    for (let d = 0; d < o.length; d++) {
      const p = o[d];
      n[p] = Gn(r, f, p, u[p], e, !$(u, p));
    }
  }
  return i;
}
function Gn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = $(i, "default");
    if (l && s === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && N(f)) {
        const { propsDefaults: u } = r;
        if (n in u) s = u[n];
        else {
          const d = At(r);
          (s = u[n] = f.call(null, t)), d();
        }
      } else s = f;
    }
    i[0] &&
      (o && !l ? (s = !1) : i[1] && (s === "" || s === at(n)) && (s = !0));
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
  let f = !1;
  if (!N(e)) {
    const d = (p) => {
      f = !0;
      const [v, R] = lo(p, t, !0);
      ee(i, v), R && l.push(...R);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!o && !f) return W(e) && s.set(e, tt), tt;
  if (F(o))
    for (let d = 0; d < o.length; d++) {
      const p = ot(o[d]);
      Gs(p) && (i[p] = z);
    }
  else if (o)
    for (const d in o) {
      const p = ot(d);
      if (Gs(p)) {
        const v = o[d],
          R = (i[p] = F(v) || N(v) ? { type: v } : ee({}, v));
        if (R) {
          const O = Zs(Boolean, R.type),
            E = Zs(String, R.type);
          (R[0] = O > -1),
            (R[1] = E < 0 || O < E),
            (O > -1 || $(R, "default")) && l.push(p);
        }
      }
    }
  const u = [i, l];
  return W(e) && s.set(e, u), u;
}
function Gs(e) {
  return e[0] !== "$" && !_t(e);
}
function Js(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Xs(e, t) {
  return Js(e) === Js(t);
}
function Zs(e, t) {
  return F(t) ? t.findIndex((n) => Xs(n, e)) : N(t) && Xs(t, e) ? 0 : -1;
}
const co = (e) => e[0] === "_" || e === "$stable",
  bs = (e) => (F(e) ? e.map(ve) : [ve(e)]),
  _l = (e, t, n) => {
    if (t._n) return t;
    const s = ji((...r) => bs(t(...r)), n);
    return (s._c = !1), s;
  },
  fo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (co(r)) continue;
      const o = e[r];
      if (N(o)) t[r] = _l(r, o, s);
      else if (o != null) {
        const i = bs(o);
        t[r] = () => i;
      }
    }
  },
  ao = (e, t) => {
    const n = bs(t);
    e.slots.default = () => n;
  },
  bl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = k(t)), Xt(t, "_", n)) : fo(t, (e.slots = {}));
    } else (e.slots = {}), t && ao(e, t);
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
        : ((o = !t.$stable), fo(t, r)),
        (i = t);
    } else t && (ao(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !co(l) && i[l] == null && delete r[l];
  };
function Jn(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((v, R) => Jn(v, t && (F(t) ? t[R] : t), n, s, r));
    return;
  }
  if (Dt(s) && !r) return;
  const o = s.shapeFlag & 4 ? xs(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: f } = e,
    u = t && t.r,
    d = l.refs === z ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (u != null &&
      u !== f &&
      (Z(u)
        ? ((d[u] = null), $(p, u) && (p[u] = null))
        : le(u) && (u.value = null)),
    N(f))
  )
    $e(f, l, 12, [i, d]);
  else {
    const v = Z(f),
      R = le(f);
    if (v || R) {
      const O = () => {
        if (e.f) {
          const E = v ? ($(p, f) ? p[f] : d[f]) : f.value;
          r
            ? F(E) && rs(E, o)
            : F(E)
              ? E.includes(o) || E.push(o)
              : v
                ? ((d[f] = [o]), $(p, f) && (p[f] = d[f]))
                : ((f.value = [o]), e.k && (d[e.k] = f.value));
        } else
          v
            ? ((d[f] = i), $(p, f) && (p[f] = i))
            : R && ((f.value = i), e.k && (d[e.k] = i));
      };
      i ? ((O.id = -1), oe(O, n)) : O();
    }
  }
}
const oe = Ki;
function xl(e) {
  return wl(e);
}
function wl(e, t) {
  const n = Rr();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: f,
      setText: u,
      setElementText: d,
      parentNode: p,
      nextSibling: v,
      setScopeId: R = ue,
      insertStaticContent: O,
    } = e,
    E = (
      c,
      a,
      h,
      g = null,
      _ = null,
      x = null,
      S = void 0,
      y = null,
      w = !!a.dynamicChildren
    ) => {
      if (c === a) return;
      c && !ht(c, a) && ((g = Lt(c)), xe(c, _, x, !0), (c = null)),
        a.patchFlag === -2 && ((w = !1), (a.dynamicChildren = null));
      const { type: b, ref: C, shapeFlag: T } = a;
      switch (b) {
        case pn:
          L(c, a, h, g);
          break;
        case Je:
          B(c, a, h, g);
          break;
        case Kt:
          c == null && X(a, h, g, S);
          break;
        case ge:
          It(c, a, h, g, _, x, S, y, w);
          break;
        default:
          T & 1
            ? ae(c, a, h, g, _, x, S, y, w)
            : T & 6
              ? Ft(c, a, h, g, _, x, S, y, w)
              : (T & 64 || T & 128) && b.process(c, a, h, g, _, x, S, y, w, Ye);
      }
      C != null && _ && Jn(C, c && c.ref, x, a || c, !a);
    },
    L = (c, a, h, g) => {
      if (c == null) s((a.el = l(a.children)), h, g);
      else {
        const _ = (a.el = c.el);
        a.children !== c.children && u(_, a.children);
      }
    },
    B = (c, a, h, g) => {
      c == null ? s((a.el = f(a.children || "")), h, g) : (a.el = c.el);
    },
    X = (c, a, h, g) => {
      [c.el, c.anchor] = O(c.children, a, h, g, c.el, c.anchor);
    },
    j = ({ el: c, anchor: a }, h, g) => {
      let _;
      for (; c && c !== a; ) (_ = v(c)), s(c, h, g), (c = _);
      s(a, h, g);
    },
    J = ({ el: c, anchor: a }) => {
      let h;
      for (; c && c !== a; ) (h = v(c)), r(c), (c = h);
      r(a);
    },
    ae = (c, a, h, g, _, x, S, y, w) => {
      a.type === "svg" ? (S = "svg") : a.type === "math" && (S = "mathml"),
        c == null ? H(a, h, g, _, x, S, y, w) : En(c, a, _, x, S, y, w);
    },
    H = (c, a, h, g, _, x, S, y) => {
      let w, b;
      const { props: C, shapeFlag: T, transition: A, dirs: I } = c;
      if (
        ((w = c.el = i(c.type, x, C && C.is, C)),
        T & 8
          ? d(w, c.children)
          : T & 16 && ye(c.children, w, null, g, _, Nn(c, x), S, y),
        I && Ke(c, null, g, "created"),
        Ae(w, c, c.scopeId, S, g),
        C)
      ) {
        for (const D in C)
          D !== "value" &&
            !_t(D) &&
            o(w, D, null, C[D], x, c.children, g, _, Te);
        "value" in C && o(w, "value", null, C.value, x),
          (b = C.onVnodeBeforeMount) && Ee(b, g, c);
      }
      I && Ke(c, null, g, "beforeMount");
      const M = El(_, A);
      M && A.beforeEnter(w),
        s(w, a, h),
        ((b = C && C.onVnodeMounted) || M || I) &&
          oe(() => {
            b && Ee(b, g, c), M && A.enter(w), I && Ke(c, null, g, "mounted");
          }, _);
    },
    Ae = (c, a, h, g, _) => {
      if ((h && R(c, h), g)) for (let x = 0; x < g.length; x++) R(c, g[x]);
      if (_) {
        let x = _.subTree;
        if (a === x) {
          const S = _.vnode;
          Ae(c, S, S.scopeId, S.slotScopeIds, _.parent);
        }
      }
    },
    ye = (c, a, h, g, _, x, S, y, w = 0) => {
      for (let b = w; b < c.length; b++) {
        const C = (c[b] = y ? Be(c[b]) : ve(c[b]));
        E(null, C, a, h, g, _, x, S, y);
      }
    },
    En = (c, a, h, g, _, x, S) => {
      const y = (a.el = c.el);
      let { patchFlag: w, dynamicChildren: b, dirs: C } = a;
      w |= c.patchFlag & 16;
      const T = c.props || z,
        A = a.props || z;
      let I;
      if (
        (h && ze(h, !1),
        (I = A.onVnodeBeforeUpdate) && Ee(I, h, a, c),
        C && Ke(a, c, h, "beforeUpdate"),
        h && ze(h, !0),
        b
          ? ke(c.dynamicChildren, b, y, h, g, Nn(a, _), x)
          : S || V(c, a, y, null, h, g, Nn(a, _), x, !1),
        w > 0)
      ) {
        if (w & 16) dt(y, a, T, A, h, g, _);
        else if (
          (w & 2 && T.class !== A.class && o(y, "class", null, A.class, _),
          w & 4 && o(y, "style", T.style, A.style, _),
          w & 8)
        ) {
          const M = a.dynamicProps;
          for (let D = 0; D < M.length; D++) {
            const K = M[D],
              Y = T[K],
              he = A[K];
            (he !== Y || K === "value") &&
              o(y, K, Y, he, _, c.children, h, g, Te);
          }
        }
        w & 1 && c.children !== a.children && d(y, a.children);
      } else !S && b == null && dt(y, a, T, A, h, g, _);
      ((I = A.onVnodeUpdated) || C) &&
        oe(() => {
          I && Ee(I, h, a, c), C && Ke(a, c, h, "updated");
        }, g);
    },
    ke = (c, a, h, g, _, x, S) => {
      for (let y = 0; y < a.length; y++) {
        const w = c[y],
          b = a[y],
          C =
            w.el && (w.type === ge || !ht(w, b) || w.shapeFlag & 70)
              ? p(w.el)
              : h;
        E(w, b, C, null, g, _, x, S, !0);
      }
    },
    dt = (c, a, h, g, _, x, S) => {
      if (h !== g) {
        if (h !== z)
          for (const y in h)
            !_t(y) && !(y in g) && o(c, y, h[y], null, S, a.children, _, x, Te);
        for (const y in g) {
          if (_t(y)) continue;
          const w = g[y],
            b = h[y];
          w !== b && y !== "value" && o(c, y, b, w, S, a.children, _, x, Te);
        }
        "value" in g && o(c, "value", h.value, g.value, S);
      }
    },
    It = (c, a, h, g, _, x, S, y, w) => {
      const b = (a.el = c ? c.el : l("")),
        C = (a.anchor = c ? c.anchor : l(""));
      let { patchFlag: T, dynamicChildren: A, slotScopeIds: I } = a;
      I && (y = y ? y.concat(I) : I),
        c == null
          ? (s(b, h, g), s(C, h, g), ye(a.children || [], h, C, _, x, S, y, w))
          : T > 0 && T & 64 && A && c.dynamicChildren
            ? (ke(c.dynamicChildren, A, h, _, x, S, y),
              (a.key != null || (_ && a === _.subTree)) && uo(c, a, !0))
            : V(c, a, h, C, _, x, S, y, w);
    },
    Ft = (c, a, h, g, _, x, S, y, w) => {
      (a.slotScopeIds = y),
        c == null
          ? a.shapeFlag & 512
            ? _.ctx.activate(a, h, g, S, w)
            : vn(a, h, g, _, x, S, w)
          : Rs(c, a, w);
    },
    vn = (c, a, h, g, _, x, S) => {
      const y = (c.component = Nl(c, g, _));
      if ((to(c) && (y.ctx.renderer = Ye), Ll(y), y.asyncDep)) {
        if ((_ && _.registerDep(y, te), !c.el)) {
          const w = (y.subTree = se(Je));
          B(null, w, a, h);
        }
      } else te(y, c, a, h, _, x, S);
    },
    Rs = (c, a, h) => {
      const g = (a.component = c.component);
      if (Hi(c, a, h))
        if (g.asyncDep && !g.asyncResolved) {
          q(g, a, h);
          return;
        } else (g.next = a), Ni(g.update), (g.effect.dirty = !0), g.update();
      else (a.el = c.el), (g.vnode = a);
    },
    te = (c, a, h, g, _, x, S) => {
      const y = () => {
          if (c.isMounted) {
            let { next: C, bu: T, u: A, parent: I, vnode: M } = c;
            {
              const Qe = po(c);
              if (Qe) {
                C && ((C.el = M.el), q(c, C, S)),
                  Qe.asyncDep.then(() => {
                    c.isUnmounted || y();
                  });
                return;
              }
            }
            let D = C,
              K;
            ze(c, !1),
              C ? ((C.el = M.el), q(c, C, S)) : (C = M),
              T && An(T),
              (K = C.props && C.props.onVnodeBeforeUpdate) && Ee(K, I, C, M),
              ze(c, !0);
            const Y = Pn(c),
              he = c.subTree;
            (c.subTree = Y),
              E(he, Y, p(he.el), Lt(he), c, _, x),
              (C.el = Y.el),
              D === null && ki(c, Y.el),
              A && oe(A, _),
              (K = C.props && C.props.onVnodeUpdated) &&
                oe(() => Ee(K, I, C, M), _);
          } else {
            let C;
            const { el: T, props: A } = a,
              { bm: I, m: M, parent: D } = c,
              K = Dt(a);
            if (
              (ze(c, !1),
              I && An(I),
              !K && (C = A && A.onVnodeBeforeMount) && Ee(C, D, a),
              ze(c, !0),
              T && Cn)
            ) {
              const Y = () => {
                (c.subTree = Pn(c)), Cn(T, c.subTree, c, _, null);
              };
              K
                ? a.type.__asyncLoader().then(() => !c.isUnmounted && Y())
                : Y();
            } else {
              const Y = (c.subTree = Pn(c));
              E(null, Y, h, g, c, _, x), (a.el = Y.el);
            }
            if ((M && oe(M, _), !K && (C = A && A.onVnodeMounted))) {
              const Y = a;
              oe(() => Ee(C, D, Y), _);
            }
            (a.shapeFlag & 256 ||
              (D && Dt(D.vnode) && D.vnode.shapeFlag & 256)) &&
              c.a &&
              oe(c.a, _),
              (c.isMounted = !0),
              (a = h = g = null);
          }
        },
        w = (c.effect = new ls(y, ue, () => gs(b), c.scope)),
        b = (c.update = () => {
          w.dirty && w.run();
        });
      (b.id = c.uid), ze(c, !0), b();
    },
    q = (c, a, h) => {
      a.component = c;
      const g = c.vnode.props;
      (c.vnode = a),
        (c.next = null),
        gl(c, a.props, g, h),
        yl(c, a.children, h),
        Xe(),
        Ds(c),
        Ze();
    },
    V = (c, a, h, g, _, x, S, y, w = !1) => {
      const b = c && c.children,
        C = c ? c.shapeFlag : 0,
        T = a.children,
        { patchFlag: A, shapeFlag: I } = a;
      if (A > 0) {
        if (A & 128) {
          Nt(b, T, h, g, _, x, S, y, w);
          return;
        } else if (A & 256) {
          De(b, T, h, g, _, x, S, y, w);
          return;
        }
      }
      I & 8
        ? (C & 16 && Te(b, _, x), T !== b && d(h, T))
        : C & 16
          ? I & 16
            ? Nt(b, T, h, g, _, x, S, y, w)
            : Te(b, _, x, !0)
          : (C & 8 && d(h, ""), I & 16 && ye(T, h, g, _, x, S, y, w));
    },
    De = (c, a, h, g, _, x, S, y, w) => {
      (c = c || tt), (a = a || tt);
      const b = c.length,
        C = a.length,
        T = Math.min(b, C);
      let A;
      for (A = 0; A < T; A++) {
        const I = (a[A] = w ? Be(a[A]) : ve(a[A]));
        E(c[A], I, h, null, _, x, S, y, w);
      }
      b > C ? Te(c, _, x, !0, !1, T) : ye(a, h, g, _, x, S, y, w, T);
    },
    Nt = (c, a, h, g, _, x, S, y, w) => {
      let b = 0;
      const C = a.length;
      let T = c.length - 1,
        A = C - 1;
      for (; b <= T && b <= A; ) {
        const I = c[b],
          M = (a[b] = w ? Be(a[b]) : ve(a[b]));
        if (ht(I, M)) E(I, M, h, null, _, x, S, y, w);
        else break;
        b++;
      }
      for (; b <= T && b <= A; ) {
        const I = c[T],
          M = (a[A] = w ? Be(a[A]) : ve(a[A]));
        if (ht(I, M)) E(I, M, h, null, _, x, S, y, w);
        else break;
        T--, A--;
      }
      if (b > T) {
        if (b <= A) {
          const I = A + 1,
            M = I < C ? a[I].el : g;
          for (; b <= A; )
            E(null, (a[b] = w ? Be(a[b]) : ve(a[b])), h, M, _, x, S, y, w), b++;
        }
      } else if (b > A) for (; b <= T; ) xe(c[b], _, x, !0), b++;
      else {
        const I = b,
          M = b,
          D = new Map();
        for (b = M; b <= A; b++) {
          const ce = (a[b] = w ? Be(a[b]) : ve(a[b]));
          ce.key != null && D.set(ce.key, b);
        }
        let K,
          Y = 0;
        const he = A - M + 1;
        let Qe = !1,
          Ps = 0;
        const pt = new Array(he);
        for (b = 0; b < he; b++) pt[b] = 0;
        for (b = I; b <= T; b++) {
          const ce = c[b];
          if (Y >= he) {
            xe(ce, _, x, !0);
            continue;
          }
          let we;
          if (ce.key != null) we = D.get(ce.key);
          else
            for (K = M; K <= A; K++)
              if (pt[K - M] === 0 && ht(ce, a[K])) {
                we = K;
                break;
              }
          we === void 0
            ? xe(ce, _, x, !0)
            : ((pt[we - M] = b + 1),
              we >= Ps ? (Ps = we) : (Qe = !0),
              E(ce, a[we], h, null, _, x, S, y, w),
              Y++);
        }
        const Is = Qe ? vl(pt) : tt;
        for (K = Is.length - 1, b = he - 1; b >= 0; b--) {
          const ce = M + b,
            we = a[ce],
            Fs = ce + 1 < C ? a[ce + 1].el : g;
          pt[b] === 0
            ? E(null, we, h, Fs, _, x, S, y, w)
            : Qe && (K < 0 || b !== Is[K] ? Ve(we, h, Fs, 2) : K--);
        }
      }
    },
    Ve = (c, a, h, g, _ = null) => {
      const { el: x, type: S, transition: y, children: w, shapeFlag: b } = c;
      if (b & 6) {
        Ve(c.component.subTree, a, h, g);
        return;
      }
      if (b & 128) {
        c.suspense.move(a, h, g);
        return;
      }
      if (b & 64) {
        S.move(c, a, h, Ye);
        return;
      }
      if (S === ge) {
        s(x, a, h);
        for (let T = 0; T < w.length; T++) Ve(w[T], a, h, g);
        s(c.anchor, a, h);
        return;
      }
      if (S === Kt) {
        j(c, a, h);
        return;
      }
      if (g !== 2 && b & 1 && y)
        if (g === 0) y.beforeEnter(x), s(x, a, h), oe(() => y.enter(x), _);
        else {
          const { leave: T, delayLeave: A, afterLeave: I } = y,
            M = () => s(x, a, h),
            D = () => {
              T(x, () => {
                M(), I && I();
              });
            };
          A ? A(x, M, D) : D();
        }
      else s(x, a, h);
    },
    xe = (c, a, h, g = !1, _ = !1) => {
      const {
        type: x,
        props: S,
        ref: y,
        children: w,
        dynamicChildren: b,
        shapeFlag: C,
        patchFlag: T,
        dirs: A,
      } = c;
      if ((y != null && Jn(y, null, h, c, !0), C & 256)) {
        a.ctx.deactivate(c);
        return;
      }
      const I = C & 1 && A,
        M = !Dt(c);
      let D;
      if ((M && (D = S && S.onVnodeBeforeUnmount) && Ee(D, a, c), C & 6))
        Vo(c.component, h, g);
      else {
        if (C & 128) {
          c.suspense.unmount(h, g);
          return;
        }
        I && Ke(c, null, a, "beforeUnmount"),
          C & 64
            ? c.type.remove(c, a, h, _, Ye, g)
            : b && (x !== ge || (T > 0 && T & 64))
              ? Te(b, a, h, !1, !0)
              : ((x === ge && T & 384) || (!_ && C & 16)) && Te(w, a, h),
          g && As(c);
      }
      ((M && (D = S && S.onVnodeUnmounted)) || I) &&
        oe(() => {
          D && Ee(D, a, c), I && Ke(c, null, a, "unmounted");
        }, h);
    },
    As = (c) => {
      const { type: a, el: h, anchor: g, transition: _ } = c;
      if (a === ge) {
        Do(h, g);
        return;
      }
      if (a === Kt) {
        J(c);
        return;
      }
      const x = () => {
        r(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (c.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: S, delayLeave: y } = _,
          w = () => S(h, x);
        y ? y(c.el, x, w) : w();
      } else x();
    },
    Do = (c, a) => {
      let h;
      for (; c !== a; ) (h = v(c)), r(c), (c = h);
      r(a);
    },
    Vo = (c, a, h) => {
      const { bum: g, scope: _, update: x, subTree: S, um: y } = c;
      g && An(g),
        _.stop(),
        x && ((x.active = !1), xe(S, c, a, h)),
        y && oe(y, a),
        oe(() => {
          c.isUnmounted = !0;
        }, a),
        a &&
          a.pendingBranch &&
          !a.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === a.pendingId &&
          (a.deps--, a.deps === 0 && a.resolve());
    },
    Te = (c, a, h, g = !1, _ = !1, x = 0) => {
      for (let S = x; S < c.length; S++) xe(c[S], a, h, g, _);
    },
    Lt = (c) =>
      c.shapeFlag & 6
        ? Lt(c.component.subTree)
        : c.shapeFlag & 128
          ? c.suspense.next()
          : v(c.anchor || c.el);
  let Sn = !1;
  const Ts = (c, a, h) => {
      c == null
        ? a._vnode && xe(a._vnode, null, null, !0)
        : E(a._vnode || null, c, a, null, null, null, h),
        Sn || ((Sn = !0), Ds(), Jr(), (Sn = !1)),
        (a._vnode = c);
    },
    Ye = {
      p: E,
      um: xe,
      m: Ve,
      r: As,
      mt: vn,
      mc: ye,
      pc: V,
      pbc: ke,
      n: Lt,
      o: e,
    };
  let On, Cn;
  return (
    t && ([On, Cn] = t(Ye)), { render: Ts, hydrate: On, createApp: pl(Ts, On) }
  );
}
function Nn({ type: e, props: t }, n) {
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
function uo(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = Be(r[o])), (l.el = i.el)),
        n || uo(i, l)),
        l.type === pn && (l.el = i.el);
    }
}
function vl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < u ? (o = l + 1) : (i = l);
      u < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function po(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : po(t);
}
const Sl = (e) => e.__isTeleport,
  ge = Symbol.for("v-fgt"),
  pn = Symbol.for("v-txt"),
  Je = Symbol.for("v-cmt"),
  Kt = Symbol.for("v-stc"),
  xt = [];
let _e = null;
function fe(e = !1) {
  xt.push((_e = e ? null : []));
}
function Ol() {
  xt.pop(), (_e = xt[xt.length - 1] || null);
}
let Ot = 1;
function Ys(e) {
  Ot += e;
}
function ho(e) {
  return (
    (e.dynamicChildren = Ot > 0 ? _e || tt : null),
    Ol(),
    Ot > 0 && _e && _e.push(e),
    e
  );
}
function de(e, t, n, s, r, o) {
  return ho(P(e, t, n, s, r, o, !0));
}
function Cl(e, t, n, s, r) {
  return ho(se(e, t, n, s, r, !0));
}
function Rl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hn = "__vInternal",
  mo = ({ key: e }) => e ?? null,
  zt = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Z(e) || le(e) || N(e)
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
  o = e === ge ? 0 : 1,
  i = !1,
  l = !1
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mo(t),
    ref: t && zt(t),
    scopeId: Yr,
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
      ? (ys(f, n), o & 128 && e.normalize(f))
      : n && (f.shapeFlag |= Z(n) ? 8 : 16),
    Ot > 0 &&
      !i &&
      _e &&
      (f.patchFlag > 0 || o & 6) &&
      f.patchFlag !== 32 &&
      _e.push(f),
    f
  );
}
const se = Al;
function Al(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Di) && (e = Je), Rl(e))) {
    const l = lt(e, t, !0);
    return (
      n && ys(l, n),
      Ot > 0 &&
        !o &&
        _e &&
        (l.shapeFlag & 6 ? (_e[_e.indexOf(e)] = l) : _e.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Ul(e) && (e = e.__vccOpts), t)) {
    t = Tl(t);
    let { class: l, style: f } = t;
    l && !Z(l) && (t.class = is(l)),
      W(f) && (Dr(f) && !F(f) && (f = ee({}, f)), (t.style = cn(f)));
  }
  const i = Z(e) ? 1 : Vi(e) ? 128 : Sl(e) ? 64 : W(e) ? 4 : N(e) ? 2 : 0;
  return P(e, t, n, s, r, i, o, !0);
}
function Tl(e) {
  return e ? (Dr(e) || hn in e ? ee({}, e) : e) : null;
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
    patchFlag: t && e.type !== ge ? (o === -1 ? 16 : o | 16) : o,
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
  return se(pn, null, e, t);
}
function mn(e, t) {
  const n = se(Kt, null, e);
  return (n.staticCount = t), n;
}
function tn(e = "", t = !1) {
  return t ? (fe(), Cl(Je, null, e)) : se(Je, null, e);
}
function ve(e) {
  return e == null || typeof e == "boolean"
    ? se(Je)
    : F(e)
      ? se(ge, null, e.slice())
      : typeof e == "object"
        ? Be(e)
        : se(pn, null, String(e));
}
function Be(e) {
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
    N(t)
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
      else if (r === "style") t.style = cn([t.style, s.style]);
      else if (rn(r)) {
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
  be(e, t, 7, [n, s]);
}
const Il = oo();
let Fl = 0;
function Nl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Il,
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
      emitsOptions: Zr(s, r),
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
    (o.emit = Bi.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let re = null,
  nn,
  Xn;
{
  const e = Rr(),
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
  (nn = t("__VUE_INSTANCE_SETTERS__", (n) => (re = n))),
    (Xn = t("__VUE_SSR_SETTERS__", (n) => (gn = n)));
}
const At = (e) => {
    const t = re;
    return (
      nn(e),
      e.scope.on(),
      () => {
        e.scope.off(), nn(t);
      }
    );
  },
  Qs = () => {
    re && re.scope.off(), nn(null);
  };
function go(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function Ll(e, t = !1) {
  t && Xn(t);
  const { props: n, children: s } = e.vnode,
    r = go(e);
  ml(e, n, r, t), bl(e, s);
  const o = r ? Ml(e, t) : void 0;
  return t && Xn(!1), o;
}
function Ml(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Vr(new Proxy(e.ctx, il)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? jl(e) : null),
      o = At(e);
    Xe();
    const i = $e(s, e, 0, [e.props, r]);
    if ((Ze(), o(), vr(i))) {
      if ((i.then(Qs, Qs), t))
        return i
          .then((l) => {
            er(e, l, t);
          })
          .catch((l) => {
            an(l, e, 0);
          });
      e.asyncDep = i;
    } else er(e, i, t);
  } else _o(e, t);
}
function er(e, t, n) {
  N(t)
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
          { delimiters: l, compilerOptions: f } = s,
          u = ee(ee({ isCustomElement: o, delimiters: l }, i), f);
        s.render = tr(r, u);
      }
    }
    e.render = s.render || ue;
  }
  {
    const r = At(e);
    Xe();
    try {
      ll(e);
    } finally {
      Ze(), r();
    }
  }
}
function Bl(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return ie(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function jl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Bl(e);
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
      (e.exposeProxy = new Proxy(qr(Vr(e.exposed)), {
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
function Ul(e) {
  return N(e) && "__vccOpts" in e;
}
const $l = (e, t) => Oi(e, t, gn),
  Hl = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const kl = "http://www.w3.org/2000/svg",
  Dl = "http://www.w3.org/1998/Math/MathML",
  je = typeof document < "u" ? document : null,
  nr = je && je.createElement("template"),
  Vl = {
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
          ? je.createElementNS(kl, e)
          : t === "mathml"
            ? je.createElementNS(Dl, e)
            : je.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => je.createTextNode(e),
    createComment: (e) => je.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => je.querySelector(e),
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
          const f = l.firstChild;
          for (; f.firstChild; ) l.appendChild(f.firstChild);
          l.removeChild(f);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Kl = Symbol("_vtc");
function zl(e, t, n) {
  const s = e[Kl];
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
  Gl = /(^|;)\s*display\s*:/;
function Jl(e, t, n) {
  const s = e.style,
    r = Z(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (Z(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && qt(s, l, "");
        }
      else for (const i in t) n[i] == null && qt(s, i, "");
    for (const i in n) i === "display" && (o = !0), qt(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Wl];
      i && (n += ";" + i), (s.cssText = n), (o = Gl.test(n));
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
      ? e.setProperty(at(s), n.replace(rr, ""), "important")
      : (e[s] = n);
  }
}
const or = ["Webkit", "Moz", "ms"],
  Ln = {};
function Xl(e, t) {
  const n = Ln[t];
  if (n) return n;
  let s = ot(t);
  if (s !== "filter" && s in e) return (Ln[t] = s);
  s = Cr(s);
  for (let r = 0; r < or.length; r++) {
    const o = or[r] + s;
    if (o in e) return (Ln[t] = o);
  }
  return t;
}
const ir = "http://www.w3.org/1999/xlink";
function Zl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ir, t.slice(6, t.length))
      : e.setAttributeNS(ir, t, n);
  else {
    const o = ti(t);
    n == null || (o && !Ar(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Yl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    const u = l === "OPTION" ? e.getAttribute("value") || "" : e.value,
      d = n ?? "";
    (u !== d || !("_value" in e)) && (e.value = d),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean"
      ? (n = Ar(n))
      : n == null && u === "string"
        ? ((n = ""), (f = !0))
        : u === "number" && ((n = 0), (f = !0));
  }
  try {
    e[t] = n;
  } catch {}
  f && e.removeAttribute(t);
}
function Ql(e, t, n, s) {
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
    const [l, f] = nc(t);
    if (s) {
      const u = (o[t] = oc(s, r));
      Ql(e, l, u, f);
    } else i && (ec(e, l, i, f), (o[t] = void 0));
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
  return [e[2] === ":" ? e.slice(3) : at(e.slice(2)), t];
}
let Mn = 0;
const sc = Promise.resolve(),
  rc = () => Mn || (sc.then(() => (Mn = 0)), (Mn = Date.now()));
function oc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    be(ic(s, n.value), t, 5, [s]);
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
const fr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  lc = (e, t, n, s, r, o, i, l, f) => {
    const u = r === "svg";
    t === "class"
      ? zl(e, s, u)
      : t === "style"
        ? Jl(e, n, s)
        : rn(t)
          ? ss(t) || tc(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : cc(e, t, s, u)
              )
            ? Yl(e, t, s, o, i, l, f)
            : (t === "true-value"
                ? (e._trueValue = s)
                : t === "false-value" && (e._falseValue = s),
              Zl(e, t, s, u));
  };
function cc(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && fr(t) && N(n))
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
  return fr(t) && Z(n) ? !1 : t in e;
}
const fc = ee({ patchProp: lc }, Vl);
let ar;
function ac() {
  return ar || (ar = xl(fc));
}
const uc = (...e) => {
  const t = ac().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = pc(s);
      if (!r) return;
      const o = t._component;
      !N(o) && !o.render && !o.template && (o.template = r.innerHTML),
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
function pc(e) {
  return Z(e) ? document.querySelector(e) : e;
}
const hc =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%207L7%207M20%207L11%207'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M20%2017H17M4%2017L13%2017'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M4%2012H7L20%2012'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",
  mc =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5%209.50002L9.5%2014.5M9.49998%209.5L14.5%2014.5'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M7%203.33782C8.47087%202.48697%2010.1786%202%2012%202C17.5228%202%2022%206.47715%2022%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%2010.1786%202.48697%208.47087%203.33782%207'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",
  bo =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='14'%20fill='url(%23paint0_linear_87_7225)'/%3e%3cpath%20d='M22.9866%2010.2088C23.1112%209.40332%2022.3454%208.76755%2021.6292%209.082L7.36482%2015.3448C6.85123%2015.5703%206.8888%2016.3483%207.42147%2016.5179L10.3631%2017.4547C10.9246%2017.6335%2011.5325%2017.541%2012.0228%2017.2023L18.655%2012.6203C18.855%2012.4821%2019.073%2012.7665%2018.9021%2012.9426L14.1281%2017.8646C13.665%2018.3421%2013.7569%2019.1512%2014.314%2019.5005L19.659%2022.8523C20.2585%2023.2282%2021.0297%2022.8506%2021.1418%2022.1261L22.9866%2010.2088Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_7225'%20x1='16'%20y1='2'%20x2='16'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337BBFE'/%3e%3cstop%20offset='1'%20stop-color='%23007DBB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  yo =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%201024%201024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='512'%20cy='512'%20r='512'%20style='fill:%232787f5'/%3e%3cpath%20d='M585.83%20271.5H438.17c-134.76%200-166.67%2031.91-166.67%20166.67v147.66c0%20134.76%2031.91%20166.67%20166.67%20166.67h147.66c134.76%200%20166.67-31.91%20166.67-166.67V438.17c0-134.76-32.25-166.67-166.67-166.67zm74%20343.18h-35c-13.24%200-17.31-10.52-41.07-34.62-20.71-20-29.87-22.74-35-22.74-7.13%200-9.17%202-9.17%2011.88v31.57c0%208.49-2.72%2013.58-25.12%2013.58-37%200-78.07-22.4-106.93-64.16-43.45-61.1-55.33-106.93-55.33-116.43%200-5.09%202-9.84%2011.88-9.84h35c8.83%200%2012.22%204.07%2015.61%2013.58%2017.31%2049.9%2046.17%2093.69%2058%2093.69%204.41%200%206.45-2%206.45-13.24v-51.6c-1.36-23.76-13.92-25.8-13.92-34.28%200-4.07%203.39-8.15%208.83-8.15h55c7.47%200%2010.18%204.07%2010.18%2012.9v69.58c0%207.47%203.39%2010.18%205.43%2010.18%204.41%200%208.15-2.72%2016.29-10.86%2025.12-28.17%2043.11-71.62%2043.11-71.62%202.38-5.09%206.45-9.84%2015.28-9.84h35c10.52%200%2012.9%205.43%2010.52%2012.9-4.41%2020.37-47.18%2080.79-47.18%2080.79-3.73%206.11-5.09%208.83%200%2015.61%203.73%205.09%2016%2015.61%2024.1%2025.12%2014.94%2017%2026.48%2031.23%2029.53%2041.07%203.45%209.84-1.65%2014.93-11.49%2014.93z'%20style='fill:%23fff'/%3e%3c/svg%3e",
  xo =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2011.9556C2%208.47078%202%206.7284%202.67818%205.39739C3.27473%204.22661%204.22661%203.27473%205.39739%202.67818C6.7284%202%208.47078%202%2011.9556%202H20.0444C23.5292%202%2025.2716%202%2026.6026%202.67818C27.7734%203.27473%2028.7253%204.22661%2029.3218%205.39739C30%206.7284%2030%208.47078%2030%2011.9556V20.0444C30%2023.5292%2030%2025.2716%2029.3218%2026.6026C28.7253%2027.7734%2027.7734%2028.7253%2026.6026%2029.3218C25.2716%2030%2023.5292%2030%2020.0444%2030H11.9556C8.47078%2030%206.7284%2030%205.39739%2029.3218C4.22661%2028.7253%203.27473%2027.7734%202.67818%2026.6026C2%2025.2716%202%2023.5292%202%2020.0444V11.9556Z'%20fill='white'/%3e%3cpath%20d='M22.0515%208.52295L16.0644%2013.1954L9.94043%208.52295V8.52421L9.94783%208.53053V15.0732L15.9954%2019.8466L22.0515%2015.2575V8.52295Z'%20fill='%23EA4335'/%3e%3cpath%20d='M23.6231%207.38639L22.0508%208.52292V15.2575L26.9983%2011.459V9.17074C26.9983%209.17074%2026.3978%205.90258%2023.6231%207.38639Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M22.0508%2015.2575V23.9924H25.8428C25.8428%2023.9924%2026.9219%2023.8813%2026.9995%2022.6513V11.459L22.0508%2015.2575Z'%20fill='%2334A853'/%3e%3cpath%20d='M9.94811%2024.0001V15.0732L9.94043%2015.0669L9.94811%2024.0001Z'%20fill='%23C5221F'/%3e%3cpath%20d='M9.94014%208.52404L8.37646%207.39382C5.60179%205.91001%205%209.17692%205%209.17692V11.4651L9.94014%2015.0667V8.52404Z'%20fill='%23C5221F'/%3e%3cpath%20d='M9.94043%208.52441V15.0671L9.94811%2015.0734V8.53073L9.94043%208.52441Z'%20fill='%23C5221F'/%3e%3cpath%20d='M5%2011.4668V22.6591C5.07646%2023.8904%206.15673%2024.0003%206.15673%2024.0003H9.94877L9.94014%2015.0671L5%2011.4668Z'%20fill='%234285F4'/%3e%3c/svg%3e",
  gc = {
    key: 0,
    class:
      "w-8/12 max-[530px]:w-16 max-[530px]:top-2 max-[530px]:left-10 py-2 px-4 rounded-full transition-all duration-500 flex items-center justify-between m-auto font-KellySlab fixed text-white z-50 top-[5%] left-1/2 -translate-x-1/2",
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
  xc = P("img", { src: hc, alt: "", class: "w-12 h-12" }, null, -1),
  wc = [xc],
  Ec = {
    key: 1,
    class:
      "fixed w-screen h-screen bg-[#00000033] backdrop-blur-xl z-40 animate-[openMenu_1s_ease] top-0 left-0 float-left overflow-x-hidden",
    id: "menu",
  },
  vc = mn(
    '<div class="py-2 px-4 rounded-full transition-all duration-500 relative"><img src="' +
      mc +
      '" alt="" class="w-10 h-10 top-4 left-4 absolute"></div><div class="flex items-center justify-center w-full h-full flex-col text-white font-Ubuntu gap-6 text-xl animate-[openMenu_1s_ease]"><span><a href="#aboutme">Обо мне</a></span> <span><a href="#works">Работы</a></span><span class="[&amp;&gt;a&gt;img]:w-12 flex justify-end gap-4"><a href="https://t.me/yourantosha"><img src="' +
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
      Rt(() => {
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
        fe(),
        de(
          ge,
          null,
          [
            n.value
              ? tn("", !0)
              : (fe(),
                de("header", gc, [
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
                ])),
            n.value
              ? (fe(),
                de("div", Ec, [
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
              : tn("", !0),
          ],
          64
        )
      );
    },
  },
  Cc = { class: "overflow-hidden w-full h-screen relative h-full" },
  Rc = mn(
    '<div class="text-6xl text-center font-KellySlab text-white uppercase w-1/2 max-[640px]:w-3/4 max-[425px]:text-4xl"> web developer from the future </div><div class="flex gap-20 [&amp;&gt;button]:rounded-full [&amp;&gt;button]:cursor-pointer [&amp;&gt;button]:font-KellySlab max-[500px]:gap-8 max-[425px]:flex-col"><button class="bg-white px-8 relative w-40 h-10 [&amp;:hover&gt;div]:h-full [&amp;:hover&gt;div]:w-full border border-white [&amp;:hover&gt;span]:text-white flex items-center justify-center"><span class="z-20 text-[#6919ff] absolute w-full h-full flex items-center justify-center transition-all duration-300"><a href="#aboutme">Узнать про меня</a></span><div class="w-0 h-0 rounded-full bg-[#6919ff] absolute z-10 transition-all duration-300"></div></button><button class="relative px-8 w-40 h-10 [&amp;:hover&gt;div]:h-full [&amp;:hover&gt;div]:w-full border border-white [&amp;:hover&gt;span]:text-[#6919ff] flex items-center justify-center"><span class="z-20 text-white absolute w-full h-full flex items-center justify-center transition-all duration-300"><a href="#works">Посмотреть работы</a></span><div class="w-0 h-0 rounded-full bg-white absolute z-10 transition-all duration-300"></div></button></div>',
    2
  ),
  Ac = [Rc],
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
        fe(),
        de("div", Cc, [
          P(
            "div",
            {
              class:
                "bg-[url('../glob/main.svg')] w-full h-full bg-no-repeat bg-cover bg-top bg-fixed scale-110 font-KellySlab relative flex items-center justify-center flex-col gap-24 max-[425px]:gap-8",
              id: "main",
              onMousemove: n,
            },
            Ac,
            32
          ),
        ])
      );
    },
  },
  Pc = {
    class:
      "w-screen h-screen [&>div]:h-full flex font-KellySlab border-b bg-[#060918] border-[#00000066] transition-all duration-1000",
    id: "aboutme",
  },
  Ic = P(
    "div",
    {
      class:
        "h-full bg-[#060918] w-3/5 bg-[url('../glob/me.jpg')] bg-right bg-cover bg-no-repeat max-[1200px]:hidden opacity-0 transition-all duration-500",
      id: "imageMe",
    },
    null,
    -1
  ),
  Fc = {
    class:
      "relative bg-[#060918] w-3/5 flex items-center justify-start px-12 max-[1200px]:w-full opacity-0 transition-all duration-500",
    id: "aboutMeContent",
  },
  Nc = { class: "text-white flex flex-col gap-12" },
  Lc = {
    class: "flex max-[1200px]:justify-center gap-20 text-sm max-[400px]:gap-4",
  },
  Mc = P("span", null, "обо мне", -1),
  Bc = P(
    "div",
    {
      class:
        "w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] block absolute top-0 left-0",
      id: "btn0",
    },
    null,
    -1
  ),
  jc = [Mc, Bc],
  Uc = P("span", null, "мой стек", -1),
  $c = P(
    "div",
    {
      class:
        "w-[4px] h-full bg-[#ffffff] blur-md rotate-45 animate-[pulsation_3s_ease_infinite] hidden absolute top-0 left-0",
      id: "btn1",
    },
    null,
    -1
  ),
  Hc = [Uc, $c],
  kc = { key: 0, class: "max-[1200px]:text-center" },
  Dc = P(
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
  Vc = [Dc],
  Kc = {
    key: 1,
    class:
      "flex flex-col gap-2 font-Ubuntu [&>div>span]:px-4 [&>div>span]:py-2 [&>div>span]:bg-[#081c30] [&>div>span]:rounded-full [&>div>span:hover]:brightness-75",
  },
  zc = mn(
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
  Gc = {
    __name: "AboutMeComponent",
    setup(e) {
      const t = Et(0);
      Rt(() => {
        new IntersectionObserver(
          (o) => {
            o.forEach((i) => {
              i.isIntersecting
                ? (document.getElementById("header").style.border =
                    "1px black solid")
                : (document.getElementById("header").style.border = "none");
            });
          },
          { threshold: 1 }
        ).observe(document.getElementById("trigger")),
          new IntersectionObserver(
            (o) => {
              o.forEach((i) => {
                i.isIntersecting &&
                  ((document.getElementById("imageMe").style.opacity = "1"),
                  (document.getElementById("aboutMeContent").style.opacity =
                    "1"));
              });
            },
            { threshold: 0.5 }
          ).observe(document.getElementById("aboutMeContent"));
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
        fe(),
        de("div", Pc, [
          Ic,
          P("div", Fc, [
            P("div", Nc, [
              P("div", Lc, [
                P(
                  "div",
                  {
                    class:
                      "px-4 cursor-pointer relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden",
                    onClick: r[0] || (r[0] = (o) => n(0)),
                  },
                  jc
                ),
                P(
                  "div",
                  {
                    class:
                      "px-4 cursor-pointer relative py-2 bg-[#100a30] rounded-full border uppercase border-[#6919ff] text-[#6919ff] overflow-hidden",
                    onClick: r[1] || (r[1] = (o) => n(1)),
                  },
                  Hc
                ),
              ]),
              t.value == 0 ? (fe(), de("div", kc, Vc)) : tn("", !0),
              t.value == 1 ? (fe(), de("div", Kc, qc)) : tn("", !0),
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
const { toString: Jc } = Object.prototype,
  { getPrototypeOf: ws } = Object,
  _n = ((e) => (t) => {
    const n = Jc.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Re = (e) => ((e = e.toLowerCase()), (t) => _n(t) === e),
  bn = (e) => (t) => typeof t === e,
  { isArray: ut } = Array,
  Ct = bn("undefined");
function Xc(e) {
  return (
    e !== null &&
    !Ct(e) &&
    e.constructor !== null &&
    !Ct(e.constructor) &&
    pe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Eo = Re("ArrayBuffer");
function Zc(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Eo(e.buffer)),
    t
  );
}
const Yc = bn("string"),
  pe = bn("function"),
  vo = bn("number"),
  yn = (e) => e !== null && typeof e == "object",
  Qc = (e) => e === !0 || e === !1,
  Wt = (e) => {
    if (_n(e) !== "object") return !1;
    const t = ws(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ef = Re("Date"),
  tf = Re("File"),
  nf = Re("Blob"),
  sf = Re("FileList"),
  rf = (e) => yn(e) && pe(e.pipe),
  of = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (pe(e.append) &&
          ((t = _n(e)) === "formdata" ||
            (t === "object" &&
              pe(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lf = Re("URLSearchParams"),
  cf = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Tt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let s, r;
  if ((typeof e != "object" && (e = [e]), ut(e)))
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
  Co = (e) => !Ct(e) && e !== Oo;
function Zn() {
  const { caseless: e } = (Co(this) && this) || {},
    t = {},
    n = (s, r) => {
      const o = (e && So(t, r)) || r;
      Wt(t[o]) && Wt(s)
        ? (t[o] = Zn(t[o], s))
        : Wt(s)
          ? (t[o] = Zn({}, s))
          : ut(s)
            ? (t[o] = s.slice())
            : (t[o] = s);
    };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && Tt(arguments[s], n);
  return t;
}
const ff = (e, t, n, { allOwnKeys: s } = {}) => (
    Tt(
      t,
      (r, o) => {
        n && pe(r) ? (e[o] = wo(r, n)) : (e[o] = r);
      },
      { allOwnKeys: s }
    ),
    e
  ),
  af = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  uf = (e, t, n, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  df = (e, t, n, s) => {
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
  pf = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const s = e.indexOf(t, n);
    return s !== -1 && s === n;
  },
  hf = (e) => {
    if (!e) return null;
    if (ut(e)) return e;
    let t = e.length;
    if (!vo(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  mf = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ws(Uint8Array)),
  gf = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = s.next()) && !r.done; ) {
      const o = r.value;
      t.call(e, o[0], o[1]);
    }
  },
  _f = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null; ) s.push(n);
    return s;
  },
  bf = Re("HTMLFormElement"),
  yf = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r;
    }),
  ur = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  xf = Re("RegExp"),
  Ro = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {};
    Tt(n, (r, o) => {
      let i;
      (i = t(r, o, e)) !== !1 && (s[o] = i || r);
    }),
      Object.defineProperties(e, s);
  },
  wf = (e) => {
    Ro(e, (t, n) => {
      if (pe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const s = e[n];
      if (pe(s)) {
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
  Ef = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((o) => {
          n[o] = !0;
        });
      };
    return ut(e) ? s(e) : s(String(e).split(t)), n;
  },
  vf = () => {},
  Sf = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Bn = "abcdefghijklmnopqrstuvwxyz",
  dr = "0123456789",
  Ao = { DIGIT: dr, ALPHA: Bn, ALPHA_DIGIT: Bn + Bn.toUpperCase() + dr },
  Of = (e = 16, t = Ao.ALPHA_DIGIT) => {
    let n = "";
    const { length: s } = t;
    for (; e--; ) n += t[(Math.random() * s) | 0];
    return n;
  };
function Cf(e) {
  return !!(
    e &&
    pe(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Rf = (e) => {
    const t = new Array(10),
      n = (s, r) => {
        if (yn(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            t[r] = s;
            const o = ut(s) ? [] : {};
            return (
              Tt(s, (i, l) => {
                const f = n(i, r + 1);
                !Ct(f) && (o[l] = f);
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
  Af = Re("AsyncFunction"),
  Tf = (e) => e && (yn(e) || pe(e)) && pe(e.then) && pe(e.catch),
  m = {
    isArray: ut,
    isArrayBuffer: Eo,
    isBuffer: Xc,
    isFormData: of,
    isArrayBufferView: Zc,
    isString: Yc,
    isNumber: vo,
    isBoolean: Qc,
    isObject: yn,
    isPlainObject: Wt,
    isUndefined: Ct,
    isDate: ef,
    isFile: tf,
    isBlob: nf,
    isRegExp: xf,
    isFunction: pe,
    isStream: rf,
    isURLSearchParams: lf,
    isTypedArray: mf,
    isFileList: sf,
    forEach: Tt,
    merge: Zn,
    extend: ff,
    trim: cf,
    stripBOM: af,
    inherits: uf,
    toFlatObject: df,
    kindOf: _n,
    kindOfTest: Re,
    endsWith: pf,
    toArray: hf,
    forEachEntry: gf,
    matchAll: _f,
    isHTMLForm: bf,
    hasOwnProperty: ur,
    hasOwnProp: ur,
    reduceDescriptors: Ro,
    freezeMethods: wf,
    toObjectSet: Ef,
    toCamelCase: yf,
    noop: vf,
    toFiniteNumber: Sf,
    findKey: So,
    global: Oo,
    isContextDefined: Co,
    ALPHABET: Ao,
    generateString: Of,
    isSpecCompliantForm: Cf,
    toJSONObject: Rf,
    isAsyncFn: Af,
    isThenable: Tf,
  };
function U(e, t, n, s, r) {
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
m.inherits(U, Error, {
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
const To = U.prototype,
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
Object.defineProperties(U, Po);
Object.defineProperty(To, "isAxiosError", { value: !0 });
U.from = (e, t, n, s, r, o) => {
  const i = Object.create(To);
  return (
    m.toFlatObject(
      e,
      i,
      function (f) {
        return f !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    U.call(i, e.message, t, n, s, r),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Pf = null;
function Yn(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function Io(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pr(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, o) {
          return (r = Io(r)), !n && o ? "[" + r + "]" : r;
        })
        .join(n ? "." : "")
    : t;
}
function If(e) {
  return m.isArray(e) && !e.some(Yn);
}
const Ff = m.toFlatObject(m, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function xn(e, t, n) {
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
    f = (n.Blob || (typeof Blob < "u" && Blob)) && m.isSpecCompliantForm(t);
  if (!m.isFunction(r)) throw new TypeError("visitor must be a function");
  function u(O) {
    if (O === null) return "";
    if (m.isDate(O)) return O.toISOString();
    if (!f && m.isBlob(O))
      throw new U("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(O) || m.isTypedArray(O)
      ? f && typeof Blob == "function"
        ? new Blob([O])
        : Buffer.from(O)
      : O;
  }
  function d(O, E, L) {
    let B = O;
    if (O && !L && typeof O == "object") {
      if (m.endsWith(E, "{}"))
        (E = s ? E : E.slice(0, -2)), (O = JSON.stringify(O));
      else if (
        (m.isArray(O) && If(O)) ||
        ((m.isFileList(O) || m.endsWith(E, "[]")) && (B = m.toArray(O)))
      )
        return (
          (E = Io(E)),
          B.forEach(function (j, J) {
            !(m.isUndefined(j) || j === null) &&
              t.append(
                i === !0 ? pr([E], J, o) : i === null ? E : E + "[]",
                u(j)
              );
          }),
          !1
        );
    }
    return Yn(O) ? !0 : (t.append(pr(L, E, o), u(O)), !1);
  }
  const p = [],
    v = Object.assign(Ff, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Yn,
    });
  function R(O, E) {
    if (!m.isUndefined(O)) {
      if (p.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      p.push(O),
        m.forEach(O, function (B, X) {
          (!(m.isUndefined(B) || B === null) &&
            r.call(t, B, m.isString(X) ? X.trim() : X, E, v)) === !0 &&
            R(B, E ? E.concat(X) : [X]);
        }),
        p.pop();
    }
  }
  if (!m.isObject(e)) throw new TypeError("data must be an object");
  return R(e), t;
}
function hr(e) {
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
  (this._pairs = []), e && xn(e, this, t);
}
const Fo = Es.prototype;
Fo.append = function (t, n) {
  this._pairs.push([t, n]);
};
Fo.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, hr);
      }
    : hr;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + "=" + n(r[1]);
    }, "")
    .join("&");
};
function Nf(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function No(e, t, n) {
  if (!t) return e;
  const s = (n && n.encode) || Nf,
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
  Lf = typeof URLSearchParams < "u" ? URLSearchParams : Es,
  Mf = typeof FormData < "u" ? FormData : null,
  Bf = typeof Blob < "u" ? Blob : null,
  jf = {
    isBrowser: !0,
    classes: { URLSearchParams: Lf, FormData: Mf, Blob: Bf },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Mo = typeof window < "u" && typeof document < "u",
  Uf = ((e) => Mo && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  $f =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Hf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Mo,
        hasStandardBrowserEnv: Uf,
        hasStandardBrowserWebWorkerEnv: $f,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ce = { ...Hf, ...jf };
function kf(e, t) {
  return xn(
    e,
    new Ce.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, r, o) {
          return Ce.isNode && m.isBuffer(n)
            ? (this.append(s, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Df(e) {
  return m
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Vf(e) {
  const t = {},
    n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++) (o = n[s]), (t[o] = e[o]);
  return t;
}
function Bo(e) {
  function t(n, s, r, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      f = o >= n.length;
    return (
      (i = !i && m.isArray(r) ? r.length : i),
      f
        ? (m.hasOwnProp(r, i) ? (r[i] = [r[i], s]) : (r[i] = s), !l)
        : ((!r[i] || !m.isObject(r[i])) && (r[i] = []),
          t(n, s, r[i], o) && m.isArray(r[i]) && (r[i] = Vf(r[i])),
          !l)
    );
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const n = {};
    return (
      m.forEachEntry(e, (s, r) => {
        t(Df(s), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function Kf(e, t, n) {
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
        return r ? JSON.stringify(Bo(t)) : t;
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
          return kf(t, this.formSerializer).toString();
        if ((l = m.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return xn(
            l ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return o || r ? (n.setContentType("application/json", !1), Kf(t)) : t;
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
              ? U.from(l, U.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: Ce.classes.FormData, Blob: Ce.classes.Blob },
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
  zf = m.toObjectSet([
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
  qf = (e) => {
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
              !(!n || (t[n] && zf[n])) &&
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
function Gt(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(Gt) : String(e);
}
function Wf(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = n.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const Gf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function jn(e, t, n, s, r) {
  if (m.isFunction(s)) return s.call(this, t, n);
  if ((r && (t = n), !!m.isString(t))) {
    if (m.isString(s)) return t.indexOf(s) !== -1;
    if (m.isRegExp(s)) return s.test(t);
  }
}
function Jf(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Xf(e, t) {
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
class wn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(l, f, u) {
      const d = mt(f);
      if (!d) throw new Error("header name must be a non-empty string");
      const p = m.findKey(r, d);
      (!p || r[p] === void 0 || u === !0 || (u === void 0 && r[p] !== !1)) &&
        (r[p || f] = Gt(l));
    }
    const i = (l, f) => m.forEach(l, (u, d) => o(u, d, f));
    return (
      m.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : m.isString(t) && (t = t.trim()) && !Gf(t)
          ? i(qf(t), n)
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
        if (n === !0) return Wf(r);
        if (m.isFunction(n)) return n.call(this, r, s);
        if (m.isRegExp(n)) return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = mt(t)), t)) {
      const s = m.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || jn(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(i) {
      if (((i = mt(i)), i)) {
        const l = m.findKey(s, i);
        l && (!n || jn(s, s[l], l, n)) && (delete s[l], (r = !0));
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
      (!t || jn(this, this[o], o, t, !0)) && (delete this[o], (r = !0));
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
          (n[i] = Gt(r)), delete n[o];
          return;
        }
        const l = t ? Jf(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Gt(r)), (s[l] = !0);
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
      s[l] || (Xf(r, i), (s[l] = !0));
    }
    return m.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
wn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
m.reduceDescriptors(wn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    },
  };
});
m.freezeMethods(wn);
const Ie = wn;
function Un(e, t) {
  const n = this || Ss,
    s = t || n,
    r = Ie.from(s.headers);
  let o = s.data;
  return (
    m.forEach(e, function (l) {
      o = l.call(n, o, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    o
  );
}
function jo(e) {
  return !!(e && e.__CANCEL__);
}
function Pt(e, t, n) {
  U.call(this, e ?? "canceled", U.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
m.inherits(Pt, U, { __CANCEL__: !0 });
function Zf(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new U(
          "Request failed with status code " + n.status,
          [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Yf = Ce.hasStandardBrowserEnv
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
function Qf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ea(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Uo(e, t) {
  return e && !Qf(t) ? ea(e, t) : t;
}
const ta = Ce.hasStandardBrowserEnv
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
function na(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function sa(e, t) {
  e = e || 10;
  const n = new Array(e),
    s = new Array(e);
  let r = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const u = Date.now(),
        d = s[o];
      i || (i = u), (n[r] = f), (s[r] = u);
      let p = o,
        v = 0;
      for (; p !== r; ) (v += n[p++]), (p = p % e);
      if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), u - i < t)) return;
      const R = d && u - d;
      return R ? Math.round((v * 1e3) / R) : void 0;
    }
  );
}
function _r(e, t) {
  let n = 0;
  const s = sa(50, 250);
  return (r) => {
    const o = r.loaded,
      i = r.lengthComputable ? r.total : void 0,
      l = o - n,
      f = s(l),
      u = o <= i;
    n = o;
    const d = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && i && u ? (i - o) / f : void 0,
      event: r,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const ra = typeof XMLHttpRequest < "u",
  oa =
    ra &&
    function (e) {
      return new Promise(function (n, s) {
        let r = e.data;
        const o = Ie.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: l } = e,
          f;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(f),
            e.signal && e.signal.removeEventListener("abort", f);
        }
        let d;
        if (m.isFormData(r)) {
          if (Ce.hasStandardBrowserEnv || Ce.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((d = o.getContentType()) !== !1) {
            const [E, ...L] = d
              ? d
                  .split(";")
                  .map((B) => B.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([E || "multipart/form-data", ...L].join("; "));
          }
        }
        let p = new XMLHttpRequest();
        if (e.auth) {
          const E = e.auth.username || "",
            L = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(E + ":" + L));
        }
        const v = Uo(e.baseURL, e.url);
        p.open(e.method.toUpperCase(), No(v, e.params, e.paramsSerializer), !0),
          (p.timeout = e.timeout);
        function R() {
          if (!p) return;
          const E = Ie.from(
              "getAllResponseHeaders" in p && p.getAllResponseHeaders()
            ),
            B = {
              data:
                !i || i === "text" || i === "json"
                  ? p.responseText
                  : p.response,
              status: p.status,
              statusText: p.statusText,
              headers: E,
              config: e,
              request: p,
            };
          Zf(
            function (j) {
              n(j), u();
            },
            function (j) {
              s(j), u();
            },
            B
          ),
            (p = null);
        }
        if (
          ("onloadend" in p
            ? (p.onloadend = R)
            : (p.onreadystatechange = function () {
                !p ||
                  p.readyState !== 4 ||
                  (p.status === 0 &&
                    !(p.responseURL && p.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(R);
              }),
          (p.onabort = function () {
            p &&
              (s(new U("Request aborted", U.ECONNABORTED, e, p)), (p = null));
          }),
          (p.onerror = function () {
            s(new U("Network Error", U.ERR_NETWORK, e, p)), (p = null);
          }),
          (p.ontimeout = function () {
            let L = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const B = e.transitional || Lo;
            e.timeoutErrorMessage && (L = e.timeoutErrorMessage),
              s(
                new U(
                  L,
                  B.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
                  e,
                  p
                )
              ),
              (p = null);
          }),
          Ce.hasStandardBrowserEnv &&
            (l && m.isFunction(l) && (l = l(e)), l || (l !== !1 && ta(v))))
        ) {
          const E =
            e.xsrfHeaderName && e.xsrfCookieName && Yf.read(e.xsrfCookieName);
          E && o.set(e.xsrfHeaderName, E);
        }
        r === void 0 && o.setContentType(null),
          "setRequestHeader" in p &&
            m.forEach(o.toJSON(), function (L, B) {
              p.setRequestHeader(B, L);
            }),
          m.isUndefined(e.withCredentials) ||
            (p.withCredentials = !!e.withCredentials),
          i && i !== "json" && (p.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            p.addEventListener("progress", _r(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            p.upload &&
            p.upload.addEventListener("progress", _r(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((f = (E) => {
              p &&
                (s(!E || E.type ? new Pt(null, e, p) : E),
                p.abort(),
                (p = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(f),
            e.signal &&
              (e.signal.aborted ? f() : e.signal.addEventListener("abort", f)));
        const O = na(v);
        if (O && Ce.protocols.indexOf(O) === -1) {
          s(new U("Unsupported protocol " + O + ":", U.ERR_BAD_REQUEST, e));
          return;
        }
        p.send(r || null);
      });
    },
  Qn = { http: Pf, xhr: oa };
m.forEach(Qn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const br = (e) => `- ${e}`,
  ia = (e) => m.isFunction(e) || e === null || e === !1,
  $o = {
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
          !ia(n) && ((s = Qn[(i = String(n)).toLowerCase()]), s === void 0))
        )
          throw new U(`Unknown adapter '${i}'`);
        if (s) break;
        r[i || "#" + o] = s;
      }
      if (!s) {
        const o = Object.entries(r).map(
          ([l, f]) =>
            `adapter ${l} ` +
            (f === !1
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
        throw new U(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: Qn,
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
    (e.headers = Ie.from(e.headers)),
    (e.data = Un.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    $o
      .getAdapter(e.adapter || Ss.adapter)(e)
      .then(
        function (s) {
          return (
            $n(e),
            (s.data = Un.call(e, e.transformResponse, s)),
            (s.headers = Ie.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            jo(s) ||
              ($n(e),
              s &&
                s.response &&
                ((s.response.data = Un.call(
                  e,
                  e.transformResponse,
                  s.response
                )),
                (s.response.headers = Ie.from(s.response.headers)))),
            Promise.reject(s)
          );
        }
      )
  );
}
const xr = (e) => (e instanceof Ie ? e.toJSON() : e);
function ct(e, t) {
  t = t || {};
  const n = {};
  function s(u, d, p) {
    return m.isPlainObject(u) && m.isPlainObject(d)
      ? m.merge.call({ caseless: p }, u, d)
      : m.isPlainObject(d)
        ? m.merge({}, d)
        : m.isArray(d)
          ? d.slice()
          : d;
  }
  function r(u, d, p) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(u)) return s(void 0, u, p);
    } else return s(u, d, p);
  }
  function o(u, d) {
    if (!m.isUndefined(d)) return s(void 0, d);
  }
  function i(u, d) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(u)) return s(void 0, u);
    } else return s(void 0, d);
  }
  function l(u, d, p) {
    if (p in t) return s(u, d);
    if (p in e) return s(void 0, u);
  }
  const f = {
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
    headers: (u, d) => r(xr(u), xr(d), !0),
  };
  return (
    m.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const p = f[d] || r,
        v = p(e[d], t[d], d);
      (m.isUndefined(v) && p !== l) || (n[d] = v);
    }),
    n
  );
}
const Ho = "1.6.7",
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
      Ho +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (s ? ". " + s : "")
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new U(
        r(i, " has been removed" + (n ? " in " + n : "")),
        U.ERR_DEPRECATED
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
function la(e, t, n) {
  if (typeof e != "object")
    throw new U("options must be an object", U.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r],
      i = t[o];
    if (i) {
      const l = e[o],
        f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new U("option " + o + " must be " + f, U.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new U("Unknown option " + o, U.ERR_BAD_OPTION);
  }
}
const es = { assertOptions: la, validators: Os },
  Le = es.validators;
class sn {
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
      (n.headers = Ie.concat(i, o));
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == "function" && E.runWhen(n) === !1) ||
        ((f = f && E.synchronous), l.unshift(E.fulfilled, E.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (E) {
      u.push(E.fulfilled, E.rejected);
    });
    let d,
      p = 0,
      v;
    if (!f) {
      const O = [yr.bind(this), void 0];
      for (
        O.unshift.apply(O, l),
          O.push.apply(O, u),
          v = O.length,
          d = Promise.resolve(n);
        p < v;

      )
        d = d.then(O[p++], O[p++]);
      return d;
    }
    v = l.length;
    let R = n;
    for (p = 0; p < v; ) {
      const O = l[p++],
        E = l[p++];
      try {
        R = O(R);
      } catch (L) {
        E.call(this, L);
        break;
      }
    }
    try {
      d = yr.call(this, R);
    } catch (O) {
      return Promise.reject(O);
    }
    for (p = 0, v = u.length; p < v; ) d = d.then(u[p++], u[p++]);
    return d;
  }
  getUri(t) {
    t = ct(this.defaults, t);
    const n = Uo(t.baseURL, t.url);
    return No(n, t.params, t.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function (t) {
  sn.prototype[t] = function (n, s) {
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
  (sn.prototype[t] = n()), (sn.prototype[t + "Form"] = n(!0));
});
const Jt = sn;
class Cs {
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
      token: new Cs(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
}
const ca = Cs;
function fa(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function aa(e) {
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
const ua = ts;
function ko(e) {
  const t = new Jt(e),
    n = wo(Jt.prototype.request, t);
  return (
    m.extend(n, Jt.prototype, t, { allOwnKeys: !0 }),
    m.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return ko(ct(e, r));
    }),
    n
  );
}
const G = ko(Ss);
G.Axios = Jt;
G.CanceledError = Pt;
G.CancelToken = ca;
G.isCancel = jo;
G.VERSION = Ho;
G.toFormData = xn;
G.AxiosError = U;
G.Cancel = G.CanceledError;
G.all = function (t) {
  return Promise.all(t);
};
G.spread = fa;
G.isAxiosError = aa;
G.mergeConfig = ct;
G.AxiosHeaders = Ie;
G.formToJSON = (e) => Bo(m.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = $o.getAdapter;
G.HttpStatusCode = ua;
G.default = G;
const da = {
    class:
      "w-screen h-auto py-12 bg-[#060918] flex flex-col justify-center items-center gap-12 opacity-0 transition-all duration-1000",
    id: "works",
  },
  pa = P(
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
  ha = { class: "w-full h-auto flex justify-center gap-8 px-8 flex-wrap" },
  ma = ["onClick"],
  ga = {
    class:
      "z-20 opacity-0 transition-all duration-700 gap-8 backdrop-blur-lg w-full h-full flex flex-col text-center px-4 justify-center items-center text-white rounded-3xl",
  },
  _a = { class: "text-3xl font-bold" },
  ba = { class: "text-xl" },
  ya = {
    __name: "WorksComponent",
    setup(e) {
      const t = Et({});
      Rt(() => {
        G.get("https://86e772c40d27ca73.mokky.dev/works").then(
          (r) => (t.value = r)
        ),
          new IntersectionObserver(
            (r) => {
              r.forEach((o) => {
                o.isIntersecting &&
                  (document.getElementById("works").style.opacity = "1");
              });
            },
            { threshold: 0.5 }
          ).observe(document.getElementById("works"));
      });
      const n = (s) => {
        window.location.href = s;
      };
      return (s, r) => (
        fe(),
        de("div", da, [
          pa,
          P("div", ha, [
            (fe(!0),
            de(
              ge,
              null,
              ol(
                t.value.data,
                (o) => (
                  fe(),
                  de(
                    "div",
                    {
                      key: o.id,
                      class:
                        "w-[400px] h-[600px] rounded-xl bg-cover bg-no-repeat bg-center [&:hover>div]:opacity-100 [&:hover>span>img]:scale-110 flex justify-center items-center cursor-pointer",
                      onClick: (i) => n(o.href),
                      style: cn({ "background-image": o.img }),
                    },
                    [
                      P("div", ga, [
                        P("span", _a, Ls(o.name), 1),
                        P("span", ba, Ls(o.type), 1),
                      ]),
                    ],
                    12,
                    ma
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
  xa = {
    class:
      "w-screen h-auto bg-[#060918] flex flex-col justify-center items-center gap-12 opacity-0 transition-all duration-1000",
    id: "contacts",
  },
  wa = P(
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
  Ea = mn(
    '<div class="flex flex-col w-2/5 text-right gap-2 max-[750px]:w-full max-[750px]:text-center"><span class="text-4xl font-bold">У вас остались вопросы? </span><span class="text-[#96a1c0]">Вы можете оставить свой телеграм и я свяжусь с вами в ближайшее время,</span><span>или свяжитесь со мной сами:</span><span class="[&amp;&gt;a&gt;img]:w-10 flex justify-end gap-4 max-[750px]:justify-center"><a href="https://t.me/yourantosha"><img src="' +
      bo +
      '" alt=""></a><a href="https://vk.com/6old6"><img src="' +
      yo +
      '" alt=""></a><a href="mailto:tacontactta@gmail.com"><img src="' +
      xo +
      '" alt=""></a></span></div>',
    1
  ),
  va = P(
    "input",
    { type: "text", placeholder: "Как к вам обращаться", id: "name" },
    null,
    -1
  ),
  Sa = P(
    "input",
    { type: "text", placeholder: "@telegram", id: "tg" },
    null,
    -1
  ),
  Oa = {
    __name: "ContactsComponent",
    setup(e) {
      Rt(() => {
        new IntersectionObserver(
          (s) => {
            s.forEach((r) => {
              r.isIntersecting &&
                (document.getElementById("contacts").style.opacity = "1");
            });
          },
          { threshold: 0.5 }
        ).observe(document.getElementById("contacts"));
      });
      const t = () => {
        const n = document.getElementById("tg"),
          s = document.getElementById("name");
        n.value == 0
          ? (n.style.border = "1px red solid")
          : (G.post("https://86e772c40d27ca73.mokky.dev/social", {
              name: s.value,
              tg: n.value,
            }),
            (n.style.border = "none"),
            (n.style.borderBottom = "1px white solid"));
      };
      return (n, s) => (
        fe(),
        de("div", xa, [
          wa,
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
                  Ea,
                  P(
                    "div",
                    {
                      class:
                        "flex max-[750px]:w-full gap-8 flex-col w-2/5 [&>input]:px-8 [&>input]:py-2 [&>input]:bg-transparent [&>input]:text-white [&>input]:border-b [&>input]:border-white [&>input]:outline-none",
                    },
                    [
                      va,
                      Sa,
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
  Ca = { class: "relative flex flex-col" },
  Ra = {
    __name: "App",
    setup(e) {
      return (t, n) => (
        fe(), de("div", Ca, [se(Oc), se(Tc), se(Gc), se(ya), se(Oa)])
      );
    },
  };
uc(Ra).mount("#app");