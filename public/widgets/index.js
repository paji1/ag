const Ht = (n, e) => n === e,
  Ze = Symbol("solid-proxy"),
  Ae = { equals: Ht };
let wt = Nt;
const q = 1,
  Pe = 2,
  kt = { owned: null, cleanups: null, context: null, owner: null },
  Qe = {};
var T = null;
let et = null,
  Xt = null,
  k = null,
  N = null,
  D = null,
  We = 0;
function Jt(n, e) {
  const t = k,
    s = T,
    r = n.length === 0,
    i = e === void 0 ? s : e,
    a = r
      ? kt
      : {
          owned: null,
          cleanups: null,
          context: i ? i.context : null,
          owner: i,
        },
    o = r ? n : () => n(() => P(() => He(a)));
  (T = a), (k = null);
  try {
    return ee(o, !0);
  } finally {
    (k = t), (T = s);
  }
}
function ce(n, e) {
  e = e ? Object.assign({}, Ae, e) : Ae;
  const t = {
      value: n,
      observers: null,
      observerSlots: null,
      comparator: e.equals || void 0,
    },
    s = (r) => (typeof r == "function" && (r = r(t.value)), Et(t, r));
  return [Ct.bind(t), s];
}
function ht(n, e, t) {
  const s = Ge(n, e, !0, q);
  he(s);
}
function H(n, e, t) {
  const s = Ge(n, e, !1, q);
  he(s);
}
function Tt(n, e, t) {
  wt = rn;
  const s = Ge(n, e, !1, q);
  (!t || !t.render) && (s.user = !0), D ? D.push(s) : he(s);
}
function B(n, e, t) {
  t = t ? Object.assign({}, Ae, t) : Ae;
  const s = Ge(n, e, !0, 0);
  return (
    (s.observers = null),
    (s.observerSlots = null),
    (s.comparator = t.equals || void 0),
    he(s),
    Ct.bind(s)
  );
}
function Yt(n) {
  return n && typeof n == "object" && "then" in n;
}
function Kt(n, e, t) {
  let s, r, i;
  (arguments.length === 2 && typeof e == "object") || arguments.length === 1
    ? ((s = !0), (r = n), (i = e || {}))
    : ((s = n), (r = e), (i = t || {}));
  let a = null,
    o = Qe,
    c = !1,
    l = "initialValue" in i,
    d = typeof s == "function" && B(s);
  const p = new Set(),
    [b, A] = (i.storage || ce)(i.initialValue),
    [K, Ye] = ce(void 0),
    [qt, Wt] = ce(void 0, { equals: !1 }),
    [dt, ft] = ce(l ? "ready" : "unresolved");
  function re(S, C, E, ie) {
    return (
      a === S &&
        ((a = null),
        ie !== void 0 && (l = !0),
        (S === o || C === o) &&
          i.onHydrated &&
          queueMicrotask(() => i.onHydrated(ie, { value: C })),
        (o = Qe),
        Gt(C, E)),
      C
    );
  }
  function Gt(S, C) {
    ee(() => {
      C === void 0 && A(() => S),
        ft(C !== void 0 ? "errored" : l ? "ready" : "unresolved"),
        Ye(C);
      for (const E of p.keys()) E.decrement();
      p.clear();
    }, !1);
  }
  function Ke() {
    const S = tn,
      C = b(),
      E = K();
    if (E !== void 0 && !a) throw E;
    return (
      k &&
        !k.user &&
        S &&
        ht(() => {
          qt(), a && (S.resolved || p.has(S) || (S.increment(), p.add(S)));
        }),
      C
    );
  }
  function Fe(S = !0) {
    if (S !== !1 && c) return;
    c = !1;
    const C = d ? d() : s;
    if (C == null || C === !1) {
      re(a, P(b));
      return;
    }
    const E = o !== Qe ? o : P(() => r(C, { value: b(), refetching: S }));
    return Yt(E)
      ? ((a = E),
        "value" in E
          ? (E.status === "success"
              ? re(a, E.value, void 0, C)
              : re(a, void 0, void 0, C),
            E)
          : ((c = !0),
            queueMicrotask(() => (c = !1)),
            ee(() => {
              ft(l ? "refreshing" : "pending"), Wt();
            }, !1),
            E.then(
              (ie) => re(E, ie, void 0, C),
              (ie) => re(E, void 0, Zt(ie), C),
            )))
      : (re(a, E, void 0, C), E);
  }
  return (
    Object.defineProperties(Ke, {
      state: { get: () => dt() },
      error: { get: () => K() },
      loading: {
        get() {
          const S = dt();
          return S === "pending" || S === "refreshing";
        },
      },
      latest: {
        get() {
          if (!l) return Ke();
          const S = K();
          if (S && !a) throw S;
          return b();
        },
      },
    }),
    d ? ht(() => Fe(!1)) : Fe(!1),
    [Ke, { refetch: Fe, mutate: A }]
  );
}
function P(n) {
  if (k === null) return n();
  const e = k;
  k = null;
  try {
    return n();
  } finally {
    k = e;
  }
}
function St(n) {
  Tt(() => P(n));
}
function Ft(n, e) {
  const t = Symbol("context");
  return { id: t, Provider: an(t), defaultValue: n };
}
function Qt(n) {
  return T && T.context && T.context[n.id] !== void 0
    ? T.context[n.id]
    : n.defaultValue;
}
function en(n) {
  const e = B(n),
    t = B(() => rt(e()));
  return (
    (t.toArray = () => {
      const s = t();
      return Array.isArray(s) ? s : s != null ? [s] : [];
    }),
    t
  );
}
let tn;
function Ct() {
  if (this.sources && this.state)
    if (this.state === q) he(this);
    else {
      const n = N;
      (N = null), ee(() => Ie(this), !1), (N = n);
    }
  if (k) {
    const n = this.observers ? this.observers.length : 0;
    k.sources
      ? (k.sources.push(this), k.sourceSlots.push(n))
      : ((k.sources = [this]), (k.sourceSlots = [n])),
      this.observers
        ? (this.observers.push(k),
          this.observerSlots.push(k.sources.length - 1))
        : ((this.observers = [k]),
          (this.observerSlots = [k.sources.length - 1]));
  }
  return this.value;
}
function Et(n, e, t) {
  let s = n.value;
  return (
    (!n.comparator || !n.comparator(s, e)) &&
      ((n.value = e),
      n.observers &&
        n.observers.length &&
        ee(() => {
          for (let r = 0; r < n.observers.length; r += 1) {
            const i = n.observers[r],
              a = et && et.running;
            a && et.disposed.has(i),
              (a ? !i.tState : !i.state) &&
                (i.pure ? N.push(i) : D.push(i), i.observers && Ot(i)),
              a || (i.state = q);
          }
          if (N.length > 1e6) throw ((N = []), new Error());
        }, !1)),
    e
  );
}
function he(n) {
  if (!n.fn) return;
  He(n);
  const e = We;
  nn(n, n.value, e);
}
function nn(n, e, t) {
  let s;
  const r = T,
    i = k;
  k = T = n;
  try {
    s = n.fn(e);
  } catch (a) {
    return (
      n.pure &&
        ((n.state = q), n.owned && n.owned.forEach(He), (n.owned = null)),
      (n.updatedAt = t + 1),
      At(a)
    );
  } finally {
    (k = i), (T = r);
  }
  (!n.updatedAt || n.updatedAt <= t) &&
    (n.updatedAt != null && "observers" in n ? Et(n, s) : (n.value = s),
    (n.updatedAt = t));
}
function Ge(n, e, t, s = q, r) {
  const i = {
    fn: n,
    state: s,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: T,
    context: T ? T.context : null,
    pure: t,
  };
  return (
    T === null || (T !== kt && (T.owned ? T.owned.push(i) : (T.owned = [i]))), i
  );
}
function je(n) {
  if (n.state === 0) return;
  if (n.state === Pe) return Ie(n);
  if (n.suspense && P(n.suspense.inFallback)) return n.suspense.effects.push(n);
  const e = [n];
  for (; (n = n.owner) && (!n.updatedAt || n.updatedAt < We); )
    n.state && e.push(n);
  for (let t = e.length - 1; t >= 0; t--)
    if (((n = e[t]), n.state === q)) he(n);
    else if (n.state === Pe) {
      const s = N;
      (N = null), ee(() => Ie(n, e[0]), !1), (N = s);
    }
}
function ee(n, e) {
  if (N) return n();
  let t = !1;
  e || (N = []), D ? (t = !0) : (D = []), We++;
  try {
    const s = n();
    return sn(t), s;
  } catch (s) {
    t || (D = null), (N = null), At(s);
  }
}
function sn(n) {
  if ((N && (Nt(N), (N = null)), n)) return;
  const e = D;
  (D = null), e.length && ee(() => wt(e), !1);
}
function Nt(n) {
  for (let e = 0; e < n.length; e++) je(n[e]);
}
function rn(n) {
  let e,
    t = 0;
  for (e = 0; e < n.length; e++) {
    const s = n[e];
    s.user ? (n[t++] = s) : je(s);
  }
  for (e = 0; e < t; e++) je(n[e]);
}
function Ie(n, e) {
  n.state = 0;
  for (let t = 0; t < n.sources.length; t += 1) {
    const s = n.sources[t];
    if (s.sources) {
      const r = s.state;
      r === q
        ? s !== e && (!s.updatedAt || s.updatedAt < We) && je(s)
        : r === Pe && Ie(s, e);
    }
  }
}
function Ot(n) {
  for (let e = 0; e < n.observers.length; e += 1) {
    const t = n.observers[e];
    t.state ||
      ((t.state = Pe), t.pure ? N.push(t) : D.push(t), t.observers && Ot(t));
  }
}
function He(n) {
  let e;
  if (n.sources)
    for (; n.sources.length; ) {
      const t = n.sources.pop(),
        s = n.sourceSlots.pop(),
        r = t.observers;
      if (r && r.length) {
        const i = r.pop(),
          a = t.observerSlots.pop();
        s < r.length &&
          ((i.sourceSlots[a] = s), (r[s] = i), (t.observerSlots[s] = a));
      }
    }
  if (n.owned) {
    for (e = n.owned.length - 1; e >= 0; e--) He(n.owned[e]);
    n.owned = null;
  }
  if (n.cleanups) {
    for (e = n.cleanups.length - 1; e >= 0; e--) n.cleanups[e]();
    n.cleanups = null;
  }
  n.state = 0;
}
function Zt(n) {
  return n instanceof Error
    ? n
    : new Error(typeof n == "string" ? n : "Unknown error", { cause: n });
}
function At(n, e = T) {
  throw Zt(n);
}
function rt(n) {
  if (typeof n == "function" && !n.length) return rt(n());
  if (Array.isArray(n)) {
    const e = [];
    for (let t = 0; t < n.length; t++) {
      const s = rt(n[t]);
      Array.isArray(s) ? e.push.apply(e, s) : e.push(s);
    }
    return e;
  }
  return n;
}
function an(n, e) {
  return function (s) {
    let r;
    return (
      H(
        () =>
          (r = P(
            () => (
              (T.context = { ...T.context, [n]: s.value }), en(() => s.children)
            ),
          )),
        void 0,
      ),
      r
    );
  };
}
function G(n, e) {
  return P(() => n(e || {}));
}
function Ne() {
  return !0;
}
const it = {
  get(n, e, t) {
    return e === Ze ? t : n.get(e);
  },
  has(n, e) {
    return e === Ze ? !0 : n.has(e);
  },
  set: Ne,
  deleteProperty: Ne,
  getOwnPropertyDescriptor(n, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return n.get(e);
      },
      set: Ne,
      deleteProperty: Ne,
    };
  },
  ownKeys(n) {
    return n.keys();
  },
};
function tt(n) {
  return (n = typeof n == "function" ? n() : n) ? n : {};
}
function on() {
  for (let n = 0, e = this.length; n < e; ++n) {
    const t = this[n]();
    if (t !== void 0) return t;
  }
}
function nt(...n) {
  let e = !1;
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    (e = e || (!!o && Ze in o)),
      (n[a] = typeof o == "function" ? ((e = !0), B(o)) : o);
  }
  if (e)
    return new Proxy(
      {
        get(a) {
          for (let o = n.length - 1; o >= 0; o--) {
            const c = tt(n[o])[a];
            if (c !== void 0) return c;
          }
        },
        has(a) {
          for (let o = n.length - 1; o >= 0; o--) if (a in tt(n[o])) return !0;
          return !1;
        },
        keys() {
          const a = [];
          for (let o = 0; o < n.length; o++) a.push(...Object.keys(tt(n[o])));
          return [...new Set(a)];
        },
      },
      it,
    );
  const t = {},
    s = Object.create(null);
  for (let a = n.length - 1; a >= 0; a--) {
    const o = n[a];
    if (!o) continue;
    const c = Object.getOwnPropertyNames(o);
    for (let l = c.length - 1; l >= 0; l--) {
      const d = c[l];
      if (d === "__proto__" || d === "constructor") continue;
      const p = Object.getOwnPropertyDescriptor(o, d);
      if (!s[d])
        s[d] = p.get
          ? {
              enumerable: !0,
              configurable: !0,
              get: on.bind((t[d] = [p.get.bind(o)])),
            }
          : p.value !== void 0
            ? p
            : void 0;
      else {
        const b = t[d];
        b &&
          (p.get
            ? b.push(p.get.bind(o))
            : p.value !== void 0 && b.push(() => p.value));
      }
    }
  }
  const r = {},
    i = Object.keys(s);
  for (let a = i.length - 1; a >= 0; a--) {
    const o = i[a],
      c = s[o];
    c && c.get ? Object.defineProperty(r, o, c) : (r[o] = c ? c.value : void 0);
  }
  return r;
}
function Pt(n, ...e) {
  if (Ze in n) {
    const r = new Set(e.length > 1 ? e.flat() : e[0]),
      i = e.map(
        (a) =>
          new Proxy(
            {
              get(o) {
                return a.includes(o) ? n[o] : void 0;
              },
              has(o) {
                return a.includes(o) && o in n;
              },
              keys() {
                return a.filter((o) => o in n);
              },
            },
            it,
          ),
      );
    return (
      i.push(
        new Proxy(
          {
            get(a) {
              return r.has(a) ? void 0 : n[a];
            },
            has(a) {
              return r.has(a) ? !1 : a in n;
            },
            keys() {
              return Object.keys(n).filter((a) => !r.has(a));
            },
          },
          it,
        ),
      ),
      i
    );
  }
  const t = {},
    s = e.map(() => ({}));
  for (const r of Object.getOwnPropertyNames(n)) {
    const i = Object.getOwnPropertyDescriptor(n, r),
      a = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let o = !1,
      c = 0;
    for (const l of e)
      l.includes(r) &&
        ((o = !0), a ? (s[c][r] = i.value) : Object.defineProperty(s[c], r, i)),
        ++c;
    o || (a ? (t[r] = i.value) : Object.defineProperty(t, r, i));
  }
  return [...s, t];
}
const cn = (n) => `Stale read from <${n}>.`;
function ln(n) {
  const e = n.keyed,
    t = B(() => n.when, void 0, { equals: (s, r) => (e ? s === r : !s == !r) });
  return B(
    () => {
      const s = t();
      if (s) {
        const r = n.children;
        return typeof r == "function" && r.length > 0
          ? P(() =>
              r(
                e
                  ? s
                  : () => {
                      if (!P(t)) throw cn("Show");
                      return n.when;
                    },
              ),
            )
          : r;
      }
      return n.fallback;
    },
    void 0,
    void 0,
  );
}
const un = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
  ],
  dn = new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...un,
  ]),
  fn = new Set(["innerHTML", "textContent", "innerText", "children"]),
  hn = Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for",
  }),
  pn = Object.assign(Object.create(null), {
    class: "className",
    formnovalidate: { $: "formNoValidate", BUTTON: 1, INPUT: 1 },
    ismap: { $: "isMap", IMG: 1 },
    nomodule: { $: "noModule", SCRIPT: 1 },
    playsinline: { $: "playsInline", VIDEO: 1 },
    readonly: { $: "readOnly", INPUT: 1, TEXTAREA: 1 },
  });
function mn(n, e) {
  const t = pn[n];
  return typeof t == "object" ? (t[e] ? t.$ : void 0) : t;
}
const yn = new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart",
  ]),
  gn = new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ]),
  vn = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
  };
function _n(n, e, t) {
  let s = t.length,
    r = e.length,
    i = s,
    a = 0,
    o = 0,
    c = e[r - 1].nextSibling,
    l = null;
  for (; a < r || o < i; ) {
    if (e[a] === t[o]) {
      a++, o++;
      continue;
    }
    for (; e[r - 1] === t[i - 1]; ) r--, i--;
    if (r === a) {
      const d = i < s ? (o ? t[o - 1].nextSibling : t[i - o]) : c;
      for (; o < i; ) n.insertBefore(t[o++], d);
    } else if (i === o)
      for (; a < r; ) (!l || !l.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === t[i - 1] && t[o] === e[r - 1]) {
      const d = e[--r].nextSibling;
      n.insertBefore(t[o++], e[a++].nextSibling),
        n.insertBefore(t[--i], d),
        (e[r] = t[i]);
    } else {
      if (!l) {
        l = new Map();
        let p = o;
        for (; p < i; ) l.set(t[p], p++);
      }
      const d = l.get(e[a]);
      if (d != null)
        if (o < d && d < i) {
          let p = a,
            b = 1,
            A;
          for (
            ;
            ++p < r && p < i && !((A = l.get(e[p])) == null || A !== d + b);

          )
            b++;
          if (b > d - o) {
            const K = e[a];
            for (; o < d; ) n.insertBefore(t[o++], K);
          } else n.replaceChild(t[o++], e[a++]);
        } else a++;
      else e[a++].remove();
    }
  }
}
const pt = "_$DX_DELEGATE";
function xn(n, e, t, s = {}) {
  let r;
  return (
    Jt((i) => {
      (r = i),
        e === document ? n() : It(e, n(), e.firstChild ? null : void 0, t);
    }, s.owner),
    () => {
      r(), (e.textContent = "");
    }
  );
}
function bn(n, e, t) {
  let s;
  const r = () => {
      const a = document.createElement("template");
      return (
        (a.innerHTML = n),
        t ? a.content.firstChild.firstChild : a.content.firstChild
      );
    },
    i = e
      ? () => P(() => document.importNode(s || (s = r()), !0))
      : () => (s || (s = r())).cloneNode(!0);
  return (i.cloneNode = i), i;
}
function wn(n, e = window.document) {
  const t = e[pt] || (e[pt] = new Set());
  for (let s = 0, r = n.length; s < r; s++) {
    const i = n[s];
    t.has(i) || (t.add(i), e.addEventListener(i, An));
  }
}
function pe(n, e, t) {
  t == null ? n.removeAttribute(e) : n.setAttribute(e, t);
}
function kn(n, e, t, s) {
  s == null ? n.removeAttributeNS(e, t) : n.setAttributeNS(e, t, s);
}
function Tn(n, e) {
  e == null ? n.removeAttribute("class") : (n.className = e);
}
function Sn(n, e, t, s) {
  if (s)
    Array.isArray(t)
      ? ((n[`$$${e}`] = t[0]), (n[`$$${e}Data`] = t[1]))
      : (n[`$$${e}`] = t);
  else if (Array.isArray(t)) {
    const r = t[0];
    n.addEventListener(e, (t[0] = (i) => r.call(n, t[1], i)));
  } else n.addEventListener(e, t);
}
function Cn(n, e, t = {}) {
  const s = Object.keys(e || {}),
    r = Object.keys(t);
  let i, a;
  for (i = 0, a = r.length; i < a; i++) {
    const o = r[i];
    !o || o === "undefined" || e[o] || (mt(n, o, !1), delete t[o]);
  }
  for (i = 0, a = s.length; i < a; i++) {
    const o = s[i],
      c = !!e[o];
    !o || o === "undefined" || t[o] === c || !c || (mt(n, o, !0), (t[o] = c));
  }
  return t;
}
function En(n, e, t) {
  if (!e) return t ? pe(n, "style") : e;
  const s = n.style;
  if (typeof e == "string") return (s.cssText = e);
  typeof t == "string" && (s.cssText = t = void 0),
    t || (t = {}),
    e || (e = {});
  let r, i;
  for (i in t) e[i] == null && s.removeProperty(i), delete t[i];
  for (i in e) (r = e[i]), r !== t[i] && (s.setProperty(i, r), (t[i] = r));
  return t;
}
function jt(n, e = {}, t, s) {
  const r = {};
  return (
    s || H(() => (r.children = ue(n, e.children, r.children))),
    H(() => (typeof e.ref == "function" ? Nn(e.ref, n) : (e.ref = n))),
    H(() => On(n, e, t, !0, r, !0)),
    r
  );
}
function Nn(n, e, t) {
  return P(() => n(e, t));
}
function It(n, e, t, s) {
  if ((t !== void 0 && !s && (s = []), typeof e != "function"))
    return ue(n, e, s, t);
  H((r) => ue(n, e(), r, t), s);
}
function On(n, e, t, s, r = {}, i = !1) {
  e || (e = {});
  for (const a in r)
    if (!(a in e)) {
      if (a === "children") continue;
      r[a] = yt(n, a, null, r[a], t, i);
    }
  for (const a in e) {
    if (a === "children") {
      s || ue(n, e.children);
      continue;
    }
    const o = e[a];
    r[a] = yt(n, a, o, r[a], t, i);
  }
}
function Zn(n) {
  return n.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function mt(n, e, t) {
  const s = e.trim().split(/\s+/);
  for (let r = 0, i = s.length; r < i; r++) n.classList.toggle(s[r], t);
}
function yt(n, e, t, s, r, i) {
  let a, o, c, l, d;
  if (e === "style") return En(n, t, s);
  if (e === "classList") return Cn(n, t, s);
  if (t === s) return s;
  if (e === "ref") i || t(n);
  else if (e.slice(0, 3) === "on:") {
    const p = e.slice(3);
    s && n.removeEventListener(p, s), t && n.addEventListener(p, t);
  } else if (e.slice(0, 10) === "oncapture:") {
    const p = e.slice(10);
    s && n.removeEventListener(p, s, !0), t && n.addEventListener(p, t, !0);
  } else if (e.slice(0, 2) === "on") {
    const p = e.slice(2).toLowerCase(),
      b = yn.has(p);
    if (!b && s) {
      const A = Array.isArray(s) ? s[0] : s;
      n.removeEventListener(p, A);
    }
    (b || t) && (Sn(n, p, t, b), b && wn([p]));
  } else if (e.slice(0, 5) === "attr:") pe(n, e.slice(5), t);
  else if (
    (d = e.slice(0, 5) === "prop:") ||
    (c = fn.has(e)) ||
    (!r && ((l = mn(e, n.tagName)) || (o = dn.has(e)))) ||
    (a = n.nodeName.includes("-"))
  )
    d && ((e = e.slice(5)), (o = !0)),
      e === "class" || e === "className"
        ? Tn(n, t)
        : a && !o && !c
          ? (n[Zn(e)] = t)
          : (n[l || e] = t);
  else {
    const p = r && e.indexOf(":") > -1 && vn[e.split(":")[0]];
    p ? kn(n, p, e, t) : pe(n, hn[e] || e, t);
  }
  return t;
}
function An(n) {
  const e = `$$${n.type}`;
  let t = (n.composedPath && n.composedPath()[0]) || n.target;
  for (
    n.target !== t &&
      Object.defineProperty(n, "target", { configurable: !0, value: t }),
      Object.defineProperty(n, "currentTarget", {
        configurable: !0,
        get() {
          return t || document;
        },
      });
    t;

  ) {
    const s = t[e];
    if (s && !t.disabled) {
      const r = t[`${e}Data`];
      if ((r !== void 0 ? s.call(t, r, n) : s.call(t, n), n.cancelBubble))
        return;
    }
    t = t._$host || t.parentNode || t.host;
  }
}
function ue(n, e, t, s, r) {
  for (; typeof t == "function"; ) t = t();
  if (e === t) return t;
  const i = typeof e,
    a = s !== void 0;
  if (
    ((n = (a && t[0] && t[0].parentNode) || n),
    i === "string" || i === "number")
  )
    if ((i === "number" && (e = e.toString()), a)) {
      let o = t[0];
      o && o.nodeType === 3
        ? o.data !== e && (o.data = e)
        : (o = document.createTextNode(e)),
        (t = ae(n, t, s, o));
    } else
      t !== "" && typeof t == "string"
        ? (t = n.firstChild.data = e)
        : (t = n.textContent = e);
  else if (e == null || i === "boolean") t = ae(n, t, s);
  else {
    if (i === "function")
      return (
        H(() => {
          let o = e();
          for (; typeof o == "function"; ) o = o();
          t = ue(n, o, t, s);
        }),
        () => t
      );
    if (Array.isArray(e)) {
      const o = [],
        c = t && Array.isArray(t);
      if (at(o, e, t, r)) return H(() => (t = ue(n, o, t, s, !0))), () => t;
      if (o.length === 0) {
        if (((t = ae(n, t, s)), a)) return t;
      } else
        c
          ? t.length === 0
            ? gt(n, o, s)
            : _n(n, t, o)
          : (t && ae(n), gt(n, o));
      t = o;
    } else if (e.nodeType) {
      if (Array.isArray(t)) {
        if (a) return (t = ae(n, t, s, e));
        ae(n, t, null, e);
      } else
        t == null || t === "" || !n.firstChild
          ? n.appendChild(e)
          : n.replaceChild(e, n.firstChild);
      t = e;
    }
  }
  return t;
}
function at(n, e, t, s) {
  let r = !1;
  for (let i = 0, a = e.length; i < a; i++) {
    let o = e[i],
      c = t && t[n.length],
      l;
    if (!(o == null || o === !0 || o === !1))
      if ((l = typeof o) == "object" && o.nodeType) n.push(o);
      else if (Array.isArray(o)) r = at(n, o, c) || r;
      else if (l === "function")
        if (s) {
          for (; typeof o == "function"; ) o = o();
          r =
            at(n, Array.isArray(o) ? o : [o], Array.isArray(c) ? c : [c]) || r;
        } else n.push(o), (r = !0);
      else {
        const d = String(o);
        c && c.nodeType === 3 && c.data === d
          ? n.push(c)
          : n.push(document.createTextNode(d));
      }
  }
  return r;
}
function gt(n, e, t = null) {
  for (let s = 0, r = e.length; s < r; s++) n.insertBefore(e[s], t);
}
function ae(n, e, t, s) {
  if (t === void 0) return (n.textContent = "");
  const r = s || document.createTextNode("");
  if (e.length) {
    let i = !1;
    for (let a = e.length - 1; a >= 0; a--) {
      const o = e[a];
      if (r !== o) {
        const c = o.parentNode === n;
        !i && !a
          ? c
            ? n.replaceChild(r, o)
            : n.insertBefore(r, t)
          : c && o.remove();
      } else i = !0;
    }
  } else n.insertBefore(r, t);
  return [r];
}
const Pn = "http://www.w3.org/2000/svg";
function jn(n, e = !1) {
  return e ? document.createElementNS(Pn, n) : document.createElement(n);
}
function In(n) {
  const [e, t] = Pt(n, ["component"]),
    s = B(() => e.component);
  return B(() => {
    const r = s();
    switch (typeof r) {
      case "function":
        return P(() => r(t));
      case "string":
        const i = gn.has(r),
          a = jn(r, i);
        return jt(a, t, i), a;
    }
  });
}
var x;
(function (n) {
  n.assertEqual = (r) => r;
  function e(r) {}
  n.assertIs = e;
  function t(r) {
    throw new Error();
  }
  (n.assertNever = t),
    (n.arrayToEnum = (r) => {
      const i = {};
      for (const a of r) i[a] = a;
      return i;
    }),
    (n.getValidEnumValues = (r) => {
      const i = n.objectKeys(r).filter((o) => typeof r[r[o]] != "number"),
        a = {};
      for (const o of i) a[o] = r[o];
      return n.objectValues(a);
    }),
    (n.objectValues = (r) =>
      n.objectKeys(r).map(function (i) {
        return r[i];
      })),
    (n.objectKeys =
      typeof Object.keys == "function"
        ? (r) => Object.keys(r)
        : (r) => {
            const i = [];
            for (const a in r)
              Object.prototype.hasOwnProperty.call(r, a) && i.push(a);
            return i;
          }),
    (n.find = (r, i) => {
      for (const a of r) if (i(a)) return a;
    }),
    (n.isInteger =
      typeof Number.isInteger == "function"
        ? (r) => Number.isInteger(r)
        : (r) => typeof r == "number" && isFinite(r) && Math.floor(r) === r);
  function s(r, i = " | ") {
    return r.map((a) => (typeof a == "string" ? `'${a}'` : a)).join(i);
  }
  (n.joinValues = s),
    (n.jsonStringifyReplacer = (r, i) =>
      typeof i == "bigint" ? i.toString() : i);
})(x || (x = {}));
var ot;
(function (n) {
  n.mergeShapes = (e, t) => ({ ...e, ...t });
})(ot || (ot = {}));
const f = x.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  W = (n) => {
    switch (typeof n) {
      case "undefined":
        return f.undefined;
      case "string":
        return f.string;
      case "number":
        return isNaN(n) ? f.nan : f.number;
      case "boolean":
        return f.boolean;
      case "function":
        return f.function;
      case "bigint":
        return f.bigint;
      case "symbol":
        return f.symbol;
      case "object":
        return Array.isArray(n)
          ? f.array
          : n === null
            ? f.null
            : n.then &&
                typeof n.then == "function" &&
                n.catch &&
                typeof n.catch == "function"
              ? f.promise
              : typeof Map < "u" && n instanceof Map
                ? f.map
                : typeof Set < "u" && n instanceof Set
                  ? f.set
                  : typeof Date < "u" && n instanceof Date
                    ? f.date
                    : f.object;
      default:
        return f.unknown;
    }
  },
  u = x.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  Rn = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, "$1:");
class I extends Error {
  constructor(e) {
    super(),
      (this.issues = []),
      (this.addIssue = (s) => {
        this.issues = [...this.issues, s];
      }),
      (this.addIssues = (s = []) => {
        this.issues = [...this.issues, ...s];
      });
    const t = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, t)
      : (this.__proto__ = t),
      (this.name = "ZodError"),
      (this.issues = e);
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t =
        e ||
        function (i) {
          return i.message;
        },
      s = { _errors: [] },
      r = (i) => {
        for (const a of i.issues)
          if (a.code === "invalid_union") a.unionErrors.map(r);
          else if (a.code === "invalid_return_type") r(a.returnTypeError);
          else if (a.code === "invalid_arguments") r(a.argumentsError);
          else if (a.path.length === 0) s._errors.push(t(a));
          else {
            let o = s,
              c = 0;
            for (; c < a.path.length; ) {
              const l = a.path[c];
              c === a.path.length - 1
                ? ((o[l] = o[l] || { _errors: [] }), o[l]._errors.push(t(a)))
                : (o[l] = o[l] || { _errors: [] }),
                (o = o[l]),
                c++;
            }
          }
      };
    return r(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, x.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {},
      s = [];
    for (const r of this.issues)
      r.path.length > 0
        ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
        : s.push(e(r));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
I.create = (n) => new I(n);
const me = (n, e) => {
  let t;
  switch (n.code) {
    case u.invalid_type:
      n.received === f.undefined
        ? (t = "Required")
        : (t = `Expected ${n.expected}, received ${n.received}`);
      break;
    case u.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(n.expected, x.jsonStringifyReplacer)}`;
      break;
    case u.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${x.joinValues(n.keys, ", ")}`;
      break;
    case u.invalid_union:
      t = "Invalid input";
      break;
    case u.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${x.joinValues(n.options)}`;
      break;
    case u.invalid_enum_value:
      t = `Invalid enum value. Expected ${x.joinValues(n.options)}, received '${n.received}'`;
      break;
    case u.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case u.invalid_return_type:
      t = "Invalid function return type";
      break;
    case u.invalid_date:
      t = "Invalid date";
      break;
    case u.invalid_string:
      typeof n.validation == "object"
        ? "includes" in n.validation
          ? ((t = `Invalid input: must include "${n.validation.includes}"`),
            typeof n.validation.position == "number" &&
              (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`))
          : "startsWith" in n.validation
            ? (t = `Invalid input: must start with "${n.validation.startsWith}"`)
            : "endsWith" in n.validation
              ? (t = `Invalid input: must end with "${n.validation.endsWith}"`)
              : x.assertNever(n.validation)
        : n.validation !== "regex"
          ? (t = `Invalid ${n.validation}`)
          : (t = "Invalid");
      break;
    case u.too_small:
      n.type === "array"
        ? (t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)`)
        : n.type === "string"
          ? (t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)`)
          : n.type === "number"
            ? (t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}`)
            : n.type === "date"
              ? (t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}`)
              : (t = "Invalid input");
      break;
    case u.too_big:
      n.type === "array"
        ? (t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)`)
        : n.type === "string"
          ? (t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)`)
          : n.type === "number"
            ? (t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}`)
            : n.type === "bigint"
              ? (t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}`)
              : n.type === "date"
                ? (t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}`)
                : (t = "Invalid input");
      break;
    case u.custom:
      t = "Invalid input";
      break;
    case u.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case u.not_multiple_of:
      t = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case u.not_finite:
      t = "Number must be finite";
      break;
    default:
      (t = e.defaultError), x.assertNever(n);
  }
  return { message: t };
};
let Rt = me;
function Mn(n) {
  Rt = n;
}
function Re() {
  return Rt;
}
const Me = (n) => {
    const { data: e, path: t, errorMaps: s, issueData: r } = n,
      i = [...t, ...(r.path || [])],
      a = { ...r, path: i };
    let o = "";
    const c = s
      .filter((l) => !!l)
      .slice()
      .reverse();
    for (const l of c) o = l(a, { data: e, defaultError: o }).message;
    return { ...r, path: i, message: r.message || o };
  },
  $n = [];
function h(n, e) {
  const t = Me({
    issueData: e,
    data: n.data,
    path: n.path,
    errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Re(), me].filter(
      (s) => !!s,
    ),
  });
  n.common.issues.push(t);
}
class O {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const s = [];
    for (const r of t) {
      if (r.status === "aborted") return g;
      r.status === "dirty" && e.dirty(), s.push(r.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    const s = [];
    for (const r of t) s.push({ key: await r.key, value: await r.value });
    return O.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const r of t) {
      const { key: i, value: a } = r;
      if (i.status === "aborted" || a.status === "aborted") return g;
      i.status === "dirty" && e.dirty(),
        a.status === "dirty" && e.dirty(),
        i.value !== "__proto__" &&
          (typeof a.value < "u" || r.alwaysSet) &&
          (s[i.value] = a.value);
    }
    return { status: e.value, value: s };
  }
}
const g = Object.freeze({ status: "aborted" }),
  Mt = (n) => ({ status: "dirty", value: n }),
  Z = (n) => ({ status: "valid", value: n }),
  ct = (n) => n.status === "aborted",
  lt = (n) => n.status === "dirty",
  ye = (n) => n.status === "valid",
  $e = (n) => typeof Promise < "u" && n instanceof Promise;
var m;
(function (n) {
  (n.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (n.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message);
})(m || (m = {}));
class $ {
  constructor(e, t, s, r) {
    (this._cachedPath = []),
      (this.parent = e),
      (this.data = t),
      (this._path = s),
      (this._key = r);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const vt = (n, e) => {
  if (ye(e)) return { success: !0, data: e.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const t = new I(n.common.issues);
      return (this._error = t), this._error;
    },
  };
};
function v(n) {
  if (!n) return {};
  const {
    errorMap: e,
    invalid_type_error: t,
    required_error: s,
    description: r,
  } = n;
  if (e && (t || s))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return e
    ? { errorMap: e, description: r }
    : {
        errorMap: (a, o) =>
          a.code !== "invalid_type"
            ? { message: o.defaultError }
            : typeof o.data > "u"
              ? { message: s ?? o.defaultError }
              : { message: t ?? o.defaultError },
        description: r,
      };
}
class _ {
  constructor(e) {
    (this.spa = this.safeParseAsync),
      (this._def = e),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return W(e.data);
  }
  _getOrReturnCtx(e, t) {
    return (
      t || {
        common: e.parent.common,
        data: e.data,
        parsedType: W(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new O(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: W(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if ($e(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const s = this.safeParse(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(e, t) {
    var s;
    const r = {
        common: {
          issues: [],
          async:
            (s = t == null ? void 0 : t.async) !== null && s !== void 0
              ? s
              : !1,
          contextualErrorMap: t == null ? void 0 : t.errorMap,
        },
        path: (t == null ? void 0 : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: W(e),
      },
      i = this._parseSync({ data: e, path: r.path, parent: r });
    return vt(r, i);
  }
  async parseAsync(e, t) {
    const s = await this.safeParseAsync(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(e, t) {
    const s = {
        common: {
          issues: [],
          contextualErrorMap: t == null ? void 0 : t.errorMap,
          async: !0,
        },
        path: (t == null ? void 0 : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: W(e),
      },
      r = this._parse({ data: e, path: s.path, parent: s }),
      i = await ($e(r) ? r : Promise.resolve(r));
    return vt(s, i);
  }
  refine(e, t) {
    const s = (r) =>
      typeof t == "string" || typeof t > "u"
        ? { message: t }
        : typeof t == "function"
          ? t(r)
          : t;
    return this._refinement((r, i) => {
      const a = e(r),
        o = () => i.addIssue({ code: u.custom, ...s(r) });
      return typeof Promise < "u" && a instanceof Promise
        ? a.then((c) => (c ? !0 : (o(), !1)))
        : a
          ? !0
          : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, r) =>
      e(s) ? !0 : (r.addIssue(typeof t == "function" ? t(s, r) : t), !1),
    );
  }
  _refinement(e) {
    return new M({
      schema: this,
      typeName: y.ZodEffects,
      effect: { type: "refinement", refinement: e },
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return U.create(this, this._def);
  }
  nullable() {
    return se.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return R.create(this, this._def);
  }
  promise() {
    return fe.create(this, this._def);
  }
  or(e) {
    return xe.create([this, e], this._def);
  }
  and(e) {
    return be.create(this, e, this._def);
  }
  transform(e) {
    return new M({
      ...v(this._def),
      schema: this,
      typeName: y.ZodEffects,
      effect: { type: "transform", transform: e },
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Ce({
      ...v(this._def),
      innerType: this,
      defaultValue: t,
      typeName: y.ZodDefault,
    });
  }
  brand() {
    return new Lt({ typeName: y.ZodBranded, type: this, ...v(this._def) });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Ue({
      ...v(this._def),
      innerType: this,
      catchValue: t,
      typeName: y.ZodCatch,
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({ ...this._def, description: e });
  }
  pipe(e) {
    return Ee.create(this, e);
  }
  readonly() {
    return ze.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ln = /^c[^\s-]{8,}$/i,
  Vn = /^[a-z][a-z0-9]*$/,
  Dn = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Un =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Bn =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  zn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let st;
const qn =
    /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
  Wn =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Gn = (n) =>
    n.precision
      ? n.offset
        ? new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
          )
        : new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`,
          )
      : n.precision === 0
        ? n.offset
          ? new RegExp(
              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$",
            )
          : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
        : n.offset
          ? new RegExp(
              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$",
            )
          : new RegExp(
              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$",
            );
function Hn(n, e) {
  return !!(
    ((e === "v4" || !e) && qn.test(n)) ||
    ((e === "v6" || !e) && Wn.test(n))
  );
}
class j extends _ {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== f.string)
    ) {
      const i = this._getOrReturnCtx(e);
      return (
        h(i, {
          code: u.invalid_type,
          expected: f.string,
          received: i.parsedType,
        }),
        g
      );
    }
    const s = new O();
    let r;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value &&
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            code: u.too_small,
            minimum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          s.dirty());
      else if (i.kind === "max")
        e.data.length > i.value &&
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            code: u.too_big,
            maximum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          s.dirty());
      else if (i.kind === "length") {
        const a = e.data.length > i.value,
          o = e.data.length < i.value;
        (a || o) &&
          ((r = this._getOrReturnCtx(e, r)),
          a
            ? h(r, {
                code: u.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : o &&
              h(r, {
                code: u.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          s.dirty());
      } else if (i.kind === "email")
        Bn.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            validation: "email",
            code: u.invalid_string,
            message: i.message,
          }),
          s.dirty());
      else if (i.kind === "emoji")
        st || (st = new RegExp(zn, "u")),
          st.test(e.data) ||
            ((r = this._getOrReturnCtx(e, r)),
            h(r, {
              validation: "emoji",
              code: u.invalid_string,
              message: i.message,
            }),
            s.dirty());
      else if (i.kind === "uuid")
        Un.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            validation: "uuid",
            code: u.invalid_string,
            message: i.message,
          }),
          s.dirty());
      else if (i.kind === "cuid")
        Ln.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            validation: "cuid",
            code: u.invalid_string,
            message: i.message,
          }),
          s.dirty());
      else if (i.kind === "cuid2")
        Vn.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            validation: "cuid2",
            code: u.invalid_string,
            message: i.message,
          }),
          s.dirty());
      else if (i.kind === "ulid")
        Dn.test(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            validation: "ulid",
            code: u.invalid_string,
            message: i.message,
          }),
          s.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          (r = this._getOrReturnCtx(e, r)),
            h(r, {
              validation: "url",
              code: u.invalid_string,
              message: i.message,
            }),
            s.dirty();
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(e.data) ||
              ((r = this._getOrReturnCtx(e, r)),
              h(r, {
                validation: "regex",
                code: u.invalid_string,
                message: i.message,
              }),
              s.dirty()))
          : i.kind === "trim"
            ? (e.data = e.data.trim())
            : i.kind === "includes"
              ? e.data.includes(i.value, i.position) ||
                ((r = this._getOrReturnCtx(e, r)),
                h(r, {
                  code: u.invalid_string,
                  validation: { includes: i.value, position: i.position },
                  message: i.message,
                }),
                s.dirty())
              : i.kind === "toLowerCase"
                ? (e.data = e.data.toLowerCase())
                : i.kind === "toUpperCase"
                  ? (e.data = e.data.toUpperCase())
                  : i.kind === "startsWith"
                    ? e.data.startsWith(i.value) ||
                      ((r = this._getOrReturnCtx(e, r)),
                      h(r, {
                        code: u.invalid_string,
                        validation: { startsWith: i.value },
                        message: i.message,
                      }),
                      s.dirty())
                    : i.kind === "endsWith"
                      ? e.data.endsWith(i.value) ||
                        ((r = this._getOrReturnCtx(e, r)),
                        h(r, {
                          code: u.invalid_string,
                          validation: { endsWith: i.value },
                          message: i.message,
                        }),
                        s.dirty())
                      : i.kind === "datetime"
                        ? Gn(i).test(e.data) ||
                          ((r = this._getOrReturnCtx(e, r)),
                          h(r, {
                            code: u.invalid_string,
                            validation: "datetime",
                            message: i.message,
                          }),
                          s.dirty())
                        : i.kind === "ip"
                          ? Hn(e.data, i.version) ||
                            ((r = this._getOrReturnCtx(e, r)),
                            h(r, {
                              validation: "ip",
                              code: u.invalid_string,
                              message: i.message,
                            }),
                            s.dirty())
                          : x.assertNever(i);
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((r) => e.test(r), {
      validation: t,
      code: u.invalid_string,
      ...m.errToObj(s),
    });
  }
  _addCheck(e) {
    return new j({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...m.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...m.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...m.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...m.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...m.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...m.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...m.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...m.errToObj(e) });
  }
  datetime(e) {
    var t;
    return typeof e == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
                ? void 0
                : e.precision,
          offset:
            (t = e == null ? void 0 : e.offset) !== null && t !== void 0
              ? t
              : !1,
          ...m.errToObj(e == null ? void 0 : e.message),
        });
  }
  regex(e, t) {
    return this._addCheck({ kind: "regex", regex: e, ...m.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...m.errToObj(t == null ? void 0 : t.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: "startsWith", value: e, ...m.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: "endsWith", value: e, ...m.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e, ...m.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e, ...m.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: "length", value: e, ...m.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, m.errToObj(e));
  }
  trim() {
    return new j({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new j({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new j({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
j.create = (n) => {
  var e;
  return new j({
    checks: [],
    typeName: y.ZodString,
    coerce:
      (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
    ...v(n),
  });
};
function Xn(n, e) {
  const t = (n.toString().split(".")[1] || "").length,
    s = (e.toString().split(".")[1] || "").length,
    r = t > s ? t : s,
    i = parseInt(n.toFixed(r).replace(".", "")),
    a = parseInt(e.toFixed(r).replace(".", ""));
  return (i % a) / Math.pow(10, r);
}
class X extends _ {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== f.number)
    ) {
      const i = this._getOrReturnCtx(e);
      return (
        h(i, {
          code: u.invalid_type,
          expected: f.number,
          received: i.parsedType,
        }),
        g
      );
    }
    let s;
    const r = new O();
    for (const i of this._def.checks)
      i.kind === "int"
        ? x.isInteger(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          h(s, {
            code: u.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          r.dirty())
        : i.kind === "min"
          ? (i.inclusive ? e.data < i.value : e.data <= i.value) &&
            ((s = this._getOrReturnCtx(e, s)),
            h(s, {
              code: u.too_small,
              minimum: i.value,
              type: "number",
              inclusive: i.inclusive,
              exact: !1,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "max"
            ? (i.inclusive ? e.data > i.value : e.data >= i.value) &&
              ((s = this._getOrReturnCtx(e, s)),
              h(s, {
                code: u.too_big,
                maximum: i.value,
                type: "number",
                inclusive: i.inclusive,
                exact: !1,
                message: i.message,
              }),
              r.dirty())
            : i.kind === "multipleOf"
              ? Xn(e.data, i.value) !== 0 &&
                ((s = this._getOrReturnCtx(e, s)),
                h(s, {
                  code: u.not_multiple_of,
                  multipleOf: i.value,
                  message: i.message,
                }),
                r.dirty())
              : i.kind === "finite"
                ? Number.isFinite(e.data) ||
                  ((s = this._getOrReturnCtx(e, s)),
                  h(s, { code: u.not_finite, message: i.message }),
                  r.dirty())
                : x.assertNever(i);
    return { status: r.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, m.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, m.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, m.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, m.toString(t));
  }
  setLimit(e, t, s, r) {
    return new X({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: s, message: m.toString(r) },
      ],
    });
  }
  _addCheck(e) {
    return new X({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: m.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: m.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: m.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: m.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: m.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: m.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: m.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: m.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: m.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && x.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min"
        ? (t === null || s.value > t) && (t = s.value)
        : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
X.create = (n) =>
  new X({
    checks: [],
    typeName: y.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...v(n),
  });
class J extends _ {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = BigInt(e.data)),
      this._getType(e) !== f.bigint)
    ) {
      const i = this._getOrReturnCtx(e);
      return (
        h(i, {
          code: u.invalid_type,
          expected: f.bigint,
          received: i.parsedType,
        }),
        g
      );
    }
    let s;
    const r = new O();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? e.data < i.value : e.data <= i.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          h(s, {
            code: u.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          r.dirty())
        : i.kind === "max"
          ? (i.inclusive ? e.data > i.value : e.data >= i.value) &&
            ((s = this._getOrReturnCtx(e, s)),
            h(s, {
              code: u.too_big,
              type: "bigint",
              maximum: i.value,
              inclusive: i.inclusive,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "multipleOf"
            ? e.data % i.value !== BigInt(0) &&
              ((s = this._getOrReturnCtx(e, s)),
              h(s, {
                code: u.not_multiple_of,
                multipleOf: i.value,
                message: i.message,
              }),
              r.dirty())
            : x.assertNever(i);
    return { status: r.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, m.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, m.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, m.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, m.toString(t));
  }
  setLimit(e, t, s, r) {
    return new J({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: s, message: m.toString(r) },
      ],
    });
  }
  _addCheck(e) {
    return new J({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: m.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: m.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: m.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: m.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: m.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
J.create = (n) => {
  var e;
  return new J({
    checks: [],
    typeName: y.ZodBigInt,
    coerce:
      (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
    ...v(n),
  });
};
class ge extends _ {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean)
    ) {
      const s = this._getOrReturnCtx(e);
      return (
        h(s, {
          code: u.invalid_type,
          expected: f.boolean,
          received: s.parsedType,
        }),
        g
      );
    }
    return Z(e.data);
  }
}
ge.create = (n) =>
  new ge({
    typeName: y.ZodBoolean,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...v(n),
  });
class te extends _ {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== f.date)
    ) {
      const i = this._getOrReturnCtx(e);
      return (
        h(i, {
          code: u.invalid_type,
          expected: f.date,
          received: i.parsedType,
        }),
        g
      );
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return h(i, { code: u.invalid_date }), g;
    }
    const s = new O();
    let r;
    for (const i of this._def.checks)
      i.kind === "min"
        ? e.data.getTime() < i.value &&
          ((r = this._getOrReturnCtx(e, r)),
          h(r, {
            code: u.too_small,
            message: i.message,
            inclusive: !0,
            exact: !1,
            minimum: i.value,
            type: "date",
          }),
          s.dirty())
        : i.kind === "max"
          ? e.data.getTime() > i.value &&
            ((r = this._getOrReturnCtx(e, r)),
            h(r, {
              code: u.too_big,
              message: i.message,
              inclusive: !0,
              exact: !1,
              maximum: i.value,
              type: "date",
            }),
            s.dirty())
          : x.assertNever(i);
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new te({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: m.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: m.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
te.create = (n) =>
  new te({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: y.ZodDate,
    ...v(n),
  });
class Le extends _ {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const s = this._getOrReturnCtx(e);
      return (
        h(s, {
          code: u.invalid_type,
          expected: f.symbol,
          received: s.parsedType,
        }),
        g
      );
    }
    return Z(e.data);
  }
}
Le.create = (n) => new Le({ typeName: y.ZodSymbol, ...v(n) });
class ve extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return (
        h(s, {
          code: u.invalid_type,
          expected: f.undefined,
          received: s.parsedType,
        }),
        g
      );
    }
    return Z(e.data);
  }
}
ve.create = (n) => new ve({ typeName: y.ZodUndefined, ...v(n) });
class _e extends _ {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const s = this._getOrReturnCtx(e);
      return (
        h(s, {
          code: u.invalid_type,
          expected: f.null,
          received: s.parsedType,
        }),
        g
      );
    }
    return Z(e.data);
  }
}
_e.create = (n) => new _e({ typeName: y.ZodNull, ...v(n) });
class de extends _ {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return Z(e.data);
  }
}
de.create = (n) => new de({ typeName: y.ZodAny, ...v(n) });
class Q extends _ {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return Z(e.data);
  }
}
Q.create = (n) => new Q({ typeName: y.ZodUnknown, ...v(n) });
class z extends _ {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return (
      h(t, { code: u.invalid_type, expected: f.never, received: t.parsedType }),
      g
    );
  }
}
z.create = (n) => new z({ typeName: y.ZodNever, ...v(n) });
class Ve extends _ {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const s = this._getOrReturnCtx(e);
      return (
        h(s, {
          code: u.invalid_type,
          expected: f.void,
          received: s.parsedType,
        }),
        g
      );
    }
    return Z(e.data);
  }
}
Ve.create = (n) => new Ve({ typeName: y.ZodVoid, ...v(n) });
class R extends _ {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== f.array)
      return (
        h(t, {
          code: u.invalid_type,
          expected: f.array,
          received: t.parsedType,
        }),
        g
      );
    if (r.exactLength !== null) {
      const a = t.data.length > r.exactLength.value,
        o = t.data.length < r.exactLength.value;
      (a || o) &&
        (h(t, {
          code: a ? u.too_big : u.too_small,
          minimum: o ? r.exactLength.value : void 0,
          maximum: a ? r.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        s.dirty());
    }
    if (
      (r.minLength !== null &&
        t.data.length < r.minLength.value &&
        (h(t, {
          code: u.too_small,
          minimum: r.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        s.dirty()),
      r.maxLength !== null &&
        t.data.length > r.maxLength.value &&
        (h(t, {
          code: u.too_big,
          maximum: r.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        s.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((a, o) => r.type._parseAsync(new $(t, a, t.path, o))),
      ).then((a) => O.mergeArray(s, a));
    const i = [...t.data].map((a, o) =>
      r.type._parseSync(new $(t, a, t.path, o)),
    );
    return O.mergeArray(s, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new R({
      ...this._def,
      minLength: { value: e, message: m.toString(t) },
    });
  }
  max(e, t) {
    return new R({
      ...this._def,
      maxLength: { value: e, message: m.toString(t) },
    });
  }
  length(e, t) {
    return new R({
      ...this._def,
      exactLength: { value: e, message: m.toString(t) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
R.create = (n, e) =>
  new R({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: y.ZodArray,
    ...v(e),
  });
function oe(n) {
  if (n instanceof w) {
    const e = {};
    for (const t in n.shape) {
      const s = n.shape[t];
      e[t] = U.create(oe(s));
    }
    return new w({ ...n._def, shape: () => e });
  } else
    return n instanceof R
      ? new R({ ...n._def, type: oe(n.element) })
      : n instanceof U
        ? U.create(oe(n.unwrap()))
        : n instanceof se
          ? se.create(oe(n.unwrap()))
          : n instanceof L
            ? L.create(n.items.map((e) => oe(e)))
            : n;
}
class w extends _ {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      t = x.objectKeys(e);
    return (this._cached = { shape: e, keys: t });
  }
  _parse(e) {
    if (this._getType(e) !== f.object) {
      const l = this._getOrReturnCtx(e);
      return (
        h(l, {
          code: u.invalid_type,
          expected: f.object,
          received: l.parsedType,
        }),
        g
      );
    }
    const { status: s, ctx: r } = this._processInputParams(e),
      { shape: i, keys: a } = this._getCached(),
      o = [];
    if (!(this._def.catchall instanceof z && this._def.unknownKeys === "strip"))
      for (const l in r.data) a.includes(l) || o.push(l);
    const c = [];
    for (const l of a) {
      const d = i[l],
        p = r.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: d._parse(new $(r, p, r.path, l)),
        alwaysSet: l in r.data,
      });
    }
    if (this._def.catchall instanceof z) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of o)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: r.data[d] },
          });
      else if (l === "strict")
        o.length > 0 &&
          (h(r, { code: u.unrecognized_keys, keys: o }), s.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of o) {
        const p = r.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: l._parse(new $(r, p, r.path, d)),
          alwaysSet: d in r.data,
        });
      }
    }
    return r.common.async
      ? Promise.resolve()
          .then(async () => {
            const l = [];
            for (const d of c) {
              const p = await d.key;
              l.push({ key: p, value: await d.value, alwaysSet: d.alwaysSet });
            }
            return l;
          })
          .then((l) => O.mergeObjectSync(s, l))
      : O.mergeObjectSync(s, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      m.errToObj,
      new w({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (t, s) => {
                var r, i, a, o;
                const c =
                  (a =
                    (i = (r = this._def).errorMap) === null || i === void 0
                      ? void 0
                      : i.call(r, t, s).message) !== null && a !== void 0
                    ? a
                    : s.defaultError;
                return t.code === "unrecognized_keys"
                  ? {
                      message:
                        (o = m.errToObj(e).message) !== null && o !== void 0
                          ? o
                          : c,
                    }
                  : { message: c };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new w({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new w({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new w({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new w({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: y.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new w({ ...this._def, catchall: e });
  }
  pick(e) {
    const t = {};
    return (
      x.objectKeys(e).forEach((s) => {
        e[s] && this.shape[s] && (t[s] = this.shape[s]);
      }),
      new w({ ...this._def, shape: () => t })
    );
  }
  omit(e) {
    const t = {};
    return (
      x.objectKeys(this.shape).forEach((s) => {
        e[s] || (t[s] = this.shape[s]);
      }),
      new w({ ...this._def, shape: () => t })
    );
  }
  deepPartial() {
    return oe(this);
  }
  partial(e) {
    const t = {};
    return (
      x.objectKeys(this.shape).forEach((s) => {
        const r = this.shape[s];
        e && !e[s] ? (t[s] = r) : (t[s] = r.optional());
      }),
      new w({ ...this._def, shape: () => t })
    );
  }
  required(e) {
    const t = {};
    return (
      x.objectKeys(this.shape).forEach((s) => {
        if (e && !e[s]) t[s] = this.shape[s];
        else {
          let i = this.shape[s];
          for (; i instanceof U; ) i = i._def.innerType;
          t[s] = i;
        }
      }),
      new w({ ...this._def, shape: () => t })
    );
  }
  keyof() {
    return $t(x.objectKeys(this.shape));
  }
}
w.create = (n, e) =>
  new w({
    shape: () => n,
    unknownKeys: "strip",
    catchall: z.create(),
    typeName: y.ZodObject,
    ...v(e),
  });
w.strictCreate = (n, e) =>
  new w({
    shape: () => n,
    unknownKeys: "strict",
    catchall: z.create(),
    typeName: y.ZodObject,
    ...v(e),
  });
w.lazycreate = (n, e) =>
  new w({
    shape: n,
    unknownKeys: "strip",
    catchall: z.create(),
    typeName: y.ZodObject,
    ...v(e),
  });
class xe extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = this._def.options;
    function r(i) {
      for (const o of i) if (o.result.status === "valid") return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new I(o.ctx.common.issues));
      return h(t, { code: u.invalid_union, unionErrors: a }), g;
    }
    if (t.common.async)
      return Promise.all(
        s.map(async (i) => {
          const a = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return {
            result: await i._parseAsync({
              data: t.data,
              path: t.path,
              parent: a,
            }),
            ctx: a,
          };
        }),
      ).then(r);
    {
      let i;
      const a = [];
      for (const c of s) {
        const l = { ...t, common: { ...t.common, issues: [] }, parent: null },
          d = c._parseSync({ data: t.data, path: t.path, parent: l });
        if (d.status === "valid") return d;
        d.status === "dirty" && !i && (i = { result: d, ctx: l }),
          l.common.issues.length && a.push(l.common.issues);
      }
      if (i) return t.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((c) => new I(c));
      return h(t, { code: u.invalid_union, unionErrors: o }), g;
    }
  }
  get options() {
    return this._def.options;
  }
}
xe.create = (n, e) => new xe({ options: n, typeName: y.ZodUnion, ...v(e) });
const Oe = (n) =>
  n instanceof ke
    ? Oe(n.schema)
    : n instanceof M
      ? Oe(n.innerType())
      : n instanceof Te
        ? [n.value]
        : n instanceof Y
          ? n.options
          : n instanceof Se
            ? Object.keys(n.enum)
            : n instanceof Ce
              ? Oe(n._def.innerType)
              : n instanceof ve
                ? [void 0]
                : n instanceof _e
                  ? [null]
                  : null;
class Xe extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.object)
      return (
        h(t, {
          code: u.invalid_type,
          expected: f.object,
          received: t.parsedType,
        }),
        g
      );
    const s = this.discriminator,
      r = t.data[s],
      i = this.optionsMap.get(r);
    return i
      ? t.common.async
        ? i._parseAsync({ data: t.data, path: t.path, parent: t })
        : i._parseSync({ data: t.data, path: t.path, parent: t })
      : (h(t, {
          code: u.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [s],
        }),
        g);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, t, s) {
    const r = new Map();
    for (const i of t) {
      const a = Oe(i.shape[e]);
      if (!a)
        throw new Error(
          `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
        );
      for (const o of a) {
        if (r.has(o))
          throw new Error(
            `Discriminator property ${String(e)} has duplicate value ${String(o)}`,
          );
        r.set(o, i);
      }
    }
    return new Xe({
      typeName: y.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: r,
      ...v(s),
    });
  }
}
function ut(n, e) {
  const t = W(n),
    s = W(e);
  if (n === e) return { valid: !0, data: n };
  if (t === f.object && s === f.object) {
    const r = x.objectKeys(e),
      i = x.objectKeys(n).filter((o) => r.indexOf(o) !== -1),
      a = { ...n, ...e };
    for (const o of i) {
      const c = ut(n[o], e[o]);
      if (!c.valid) return { valid: !1 };
      a[o] = c.data;
    }
    return { valid: !0, data: a };
  } else if (t === f.array && s === f.array) {
    if (n.length !== e.length) return { valid: !1 };
    const r = [];
    for (let i = 0; i < n.length; i++) {
      const a = n[i],
        o = e[i],
        c = ut(a, o);
      if (!c.valid) return { valid: !1 };
      r.push(c.data);
    }
    return { valid: !0, data: r };
  } else
    return t === f.date && s === f.date && +n == +e
      ? { valid: !0, data: n }
      : { valid: !1 };
}
class be extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e),
      r = (i, a) => {
        if (ct(i) || ct(a)) return g;
        const o = ut(i.value, a.value);
        return o.valid
          ? ((lt(i) || lt(a)) && t.dirty(), { status: t.value, value: o.data })
          : (h(s, { code: u.invalid_intersection_types }), g);
      };
    return s.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseAsync({
            data: s.data,
            path: s.path,
            parent: s,
          }),
        ]).then(([i, a]) => r(i, a))
      : r(
          this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseSync({ data: s.data, path: s.path, parent: s }),
        );
  }
}
be.create = (n, e, t) =>
  new be({ left: n, right: e, typeName: y.ZodIntersection, ...v(t) });
class L extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.array)
      return (
        h(s, {
          code: u.invalid_type,
          expected: f.array,
          received: s.parsedType,
        }),
        g
      );
    if (s.data.length < this._def.items.length)
      return (
        h(s, {
          code: u.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        g
      );
    !this._def.rest &&
      s.data.length > this._def.items.length &&
      (h(s, {
        code: u.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      t.dirty());
    const i = [...s.data]
      .map((a, o) => {
        const c = this._def.items[o] || this._def.rest;
        return c ? c._parse(new $(s, a, s.path, o)) : null;
      })
      .filter((a) => !!a);
    return s.common.async
      ? Promise.all(i).then((a) => O.mergeArray(t, a))
      : O.mergeArray(t, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new L({ ...this._def, rest: e });
  }
}
L.create = (n, e) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new L({ items: n, typeName: y.ZodTuple, rest: null, ...v(e) });
};
class we extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.object)
      return (
        h(s, {
          code: u.invalid_type,
          expected: f.object,
          received: s.parsedType,
        }),
        g
      );
    const r = [],
      i = this._def.keyType,
      a = this._def.valueType;
    for (const o in s.data)
      r.push({
        key: i._parse(new $(s, o, s.path, o)),
        value: a._parse(new $(s, s.data[o], s.path, o)),
      });
    return s.common.async ? O.mergeObjectAsync(t, r) : O.mergeObjectSync(t, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof _
      ? new we({ keyType: e, valueType: t, typeName: y.ZodRecord, ...v(s) })
      : new we({
          keyType: j.create(),
          valueType: e,
          typeName: y.ZodRecord,
          ...v(t),
        });
  }
}
class De extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.map)
      return (
        h(s, { code: u.invalid_type, expected: f.map, received: s.parsedType }),
        g
      );
    const r = this._def.keyType,
      i = this._def.valueType,
      a = [...s.data.entries()].map(([o, c], l) => ({
        key: r._parse(new $(s, o, s.path, [l, "key"])),
        value: i._parse(new $(s, c, s.path, [l, "value"])),
      }));
    if (s.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key,
            d = await c.value;
          if (l.status === "aborted" || d.status === "aborted") return g;
          (l.status === "dirty" || d.status === "dirty") && t.dirty(),
            o.set(l.value, d.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = new Map();
      for (const c of a) {
        const l = c.key,
          d = c.value;
        if (l.status === "aborted" || d.status === "aborted") return g;
        (l.status === "dirty" || d.status === "dirty") && t.dirty(),
          o.set(l.value, d.value);
      }
      return { status: t.value, value: o };
    }
  }
}
De.create = (n, e, t) =>
  new De({ valueType: e, keyType: n, typeName: y.ZodMap, ...v(t) });
class ne extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== f.set)
      return (
        h(s, { code: u.invalid_type, expected: f.set, received: s.parsedType }),
        g
      );
    const r = this._def;
    r.minSize !== null &&
      s.data.size < r.minSize.value &&
      (h(s, {
        code: u.too_small,
        minimum: r.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      r.maxSize !== null &&
        s.data.size > r.maxSize.value &&
        (h(s, {
          code: u.too_big,
          maximum: r.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty());
    const i = this._def.valueType;
    function a(c) {
      const l = new Set();
      for (const d of c) {
        if (d.status === "aborted") return g;
        d.status === "dirty" && t.dirty(), l.add(d.value);
      }
      return { status: t.value, value: l };
    }
    const o = [...s.data.values()].map((c, l) =>
      i._parse(new $(s, c, s.path, l)),
    );
    return s.common.async ? Promise.all(o).then((c) => a(c)) : a(o);
  }
  min(e, t) {
    return new ne({
      ...this._def,
      minSize: { value: e, message: m.toString(t) },
    });
  }
  max(e, t) {
    return new ne({
      ...this._def,
      maxSize: { value: e, message: m.toString(t) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ne.create = (n, e) =>
  new ne({
    valueType: n,
    minSize: null,
    maxSize: null,
    typeName: y.ZodSet,
    ...v(e),
  });
class le extends _ {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.function)
      return (
        h(t, {
          code: u.invalid_type,
          expected: f.function,
          received: t.parsedType,
        }),
        g
      );
    function s(o, c) {
      return Me({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          Re(),
          me,
        ].filter((l) => !!l),
        issueData: { code: u.invalid_arguments, argumentsError: c },
      });
    }
    function r(o, c) {
      return Me({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          Re(),
          me,
        ].filter((l) => !!l),
        issueData: { code: u.invalid_return_type, returnTypeError: c },
      });
    }
    const i = { errorMap: t.common.contextualErrorMap },
      a = t.data;
    if (this._def.returns instanceof fe) {
      const o = this;
      return Z(async function (...c) {
        const l = new I([]),
          d = await o._def.args.parseAsync(c, i).catch((A) => {
            throw (l.addIssue(s(c, A)), l);
          }),
          p = await Reflect.apply(a, this, d);
        return await o._def.returns._def.type.parseAsync(p, i).catch((A) => {
          throw (l.addIssue(r(p, A)), l);
        });
      });
    } else {
      const o = this;
      return Z(function (...c) {
        const l = o._def.args.safeParse(c, i);
        if (!l.success) throw new I([s(c, l.error)]);
        const d = Reflect.apply(a, this, l.data),
          p = o._def.returns.safeParse(d, i);
        if (!p.success) throw new I([r(d, p.error)]);
        return p.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new le({ ...this._def, args: L.create(e).rest(Q.create()) });
  }
  returns(e) {
    return new le({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, s) {
    return new le({
      args: e || L.create([]).rest(Q.create()),
      returns: t || Q.create(),
      typeName: y.ZodFunction,
      ...v(s),
    });
  }
}
class ke extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
ke.create = (n, e) => new ke({ getter: n, typeName: y.ZodLazy, ...v(e) });
class Te extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return (
        h(t, {
          received: t.data,
          code: u.invalid_literal,
          expected: this._def.value,
        }),
        g
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Te.create = (n, e) => new Te({ value: n, typeName: y.ZodLiteral, ...v(e) });
function $t(n, e) {
  return new Y({ values: n, typeName: y.ZodEnum, ...v(e) });
}
class Y extends _ {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e),
        s = this._def.values;
      return (
        h(t, {
          expected: x.joinValues(s),
          received: t.parsedType,
          code: u.invalid_type,
        }),
        g
      );
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const t = this._getOrReturnCtx(e),
        s = this._def.values;
      return (
        h(t, { received: t.data, code: u.invalid_enum_value, options: s }), g
      );
    }
    return Z(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  extract(e) {
    return Y.create(e);
  }
  exclude(e) {
    return Y.create(this.options.filter((t) => !e.includes(t)));
  }
}
Y.create = $t;
class Se extends _ {
  _parse(e) {
    const t = x.getValidEnumValues(this._def.values),
      s = this._getOrReturnCtx(e);
    if (s.parsedType !== f.string && s.parsedType !== f.number) {
      const r = x.objectValues(t);
      return (
        h(s, {
          expected: x.joinValues(r),
          received: s.parsedType,
          code: u.invalid_type,
        }),
        g
      );
    }
    if (t.indexOf(e.data) === -1) {
      const r = x.objectValues(t);
      return (
        h(s, { received: s.data, code: u.invalid_enum_value, options: r }), g
      );
    }
    return Z(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Se.create = (n, e) => new Se({ values: n, typeName: y.ZodNativeEnum, ...v(e) });
class fe extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.promise && t.common.async === !1)
      return (
        h(t, {
          code: u.invalid_type,
          expected: f.promise,
          received: t.parsedType,
        }),
        g
      );
    const s = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
    return Z(
      s.then((r) =>
        this._def.type.parseAsync(r, {
          path: t.path,
          errorMap: t.common.contextualErrorMap,
        }),
      ),
    );
  }
}
fe.create = (n, e) => new fe({ type: n, typeName: y.ZodPromise, ...v(e) });
class M extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === y.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e),
      r = this._def.effect || null,
      i = {
        addIssue: (a) => {
          h(s, a), a.fatal ? t.abort() : t.dirty();
        },
        get path() {
          return s.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), r.type === "preprocess")) {
      const a = r.transform(s.data, i);
      return s.common.issues.length
        ? { status: "dirty", value: s.data }
        : s.common.async
          ? Promise.resolve(a).then((o) =>
              this._def.schema._parseAsync({
                data: o,
                path: s.path,
                parent: s,
              }),
            )
          : this._def.schema._parseSync({ data: a, path: s.path, parent: s });
    }
    if (r.type === "refinement") {
      const a = (o) => {
        const c = r.refinement(o, i);
        if (s.common.async) return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return o.status === "aborted"
          ? g
          : (o.status === "dirty" && t.dirty(),
            a(o.value),
            { status: t.value, value: o.value });
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((o) =>
            o.status === "aborted"
              ? g
              : (o.status === "dirty" && t.dirty(),
                a(o.value).then(() => ({ status: t.value, value: o.value }))),
          );
    }
    if (r.type === "transform")
      if (s.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        if (!ye(a)) return a;
        const o = r.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: t.value, value: o };
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((a) =>
            ye(a)
              ? Promise.resolve(r.transform(a.value, i)).then((o) => ({
                  status: t.value,
                  value: o,
                }))
              : a,
          );
    x.assertNever(r);
  }
}
M.create = (n, e, t) =>
  new M({ schema: n, typeName: y.ZodEffects, effect: e, ...v(t) });
M.createWithPreprocess = (n, e, t) =>
  new M({
    schema: e,
    effect: { type: "preprocess", transform: n },
    typeName: y.ZodEffects,
    ...v(t),
  });
class U extends _ {
  _parse(e) {
    return this._getType(e) === f.undefined
      ? Z(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
U.create = (n, e) => new U({ innerType: n, typeName: y.ZodOptional, ...v(e) });
class se extends _ {
  _parse(e) {
    return this._getType(e) === f.null
      ? Z(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
se.create = (n, e) =>
  new se({ innerType: n, typeName: y.ZodNullable, ...v(e) });
class Ce extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let s = t.data;
    return (
      t.parsedType === f.undefined && (s = this._def.defaultValue()),
      this._def.innerType._parse({ data: s, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ce.create = (n, e) =>
  new Ce({
    innerType: n,
    typeName: y.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...v(e),
  });
class Ue extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({
        data: s.data,
        path: s.path,
        parent: { ...s },
      });
    return $e(r)
      ? r.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new I(s.common.issues);
                  },
                  input: s.data,
                }),
        }))
      : {
          status: "valid",
          value:
            r.status === "valid"
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new I(s.common.issues);
                  },
                  input: s.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ue.create = (n, e) =>
  new Ue({
    innerType: n,
    typeName: y.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...v(e),
  });
class Be extends _ {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const s = this._getOrReturnCtx(e);
      return (
        h(s, { code: u.invalid_type, expected: f.nan, received: s.parsedType }),
        g
      );
    }
    return { status: "valid", value: e.data };
  }
}
Be.create = (n) => new Be({ typeName: y.ZodNaN, ...v(n) });
const Jn = Symbol("zod_brand");
class Lt extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = t.data;
    return this._def.type._parse({ data: s, path: t.path, parent: t });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ee extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return i.status === "aborted"
          ? g
          : i.status === "dirty"
            ? (t.dirty(), Mt(i.value))
            : this._def.out._parseAsync({
                data: i.value,
                path: s.path,
                parent: s,
              });
      })();
    {
      const r = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s,
      });
      return r.status === "aborted"
        ? g
        : r.status === "dirty"
          ? (t.dirty(), { status: "dirty", value: r.value })
          : this._def.out._parseSync({
              data: r.value,
              path: s.path,
              parent: s,
            });
    }
  }
  static create(e, t) {
    return new Ee({ in: e, out: t, typeName: y.ZodPipeline });
  }
}
class ze extends _ {
  _parse(e) {
    const t = this._def.innerType._parse(e);
    return ye(t) && (t.value = Object.freeze(t.value)), t;
  }
}
ze.create = (n, e) =>
  new ze({ innerType: n, typeName: y.ZodReadonly, ...v(e) });
const Vt = (n, e = {}, t) =>
    n
      ? de.create().superRefine((s, r) => {
          var i, a;
          if (!n(s)) {
            const o =
                typeof e == "function"
                  ? e(s)
                  : typeof e == "string"
                    ? { message: e }
                    : e,
              c =
                (a = (i = o.fatal) !== null && i !== void 0 ? i : t) !== null &&
                a !== void 0
                  ? a
                  : !0,
              l = typeof o == "string" ? { message: o } : o;
            r.addIssue({ code: "custom", ...l, fatal: c });
          }
        })
      : de.create(),
  Yn = { object: w.lazycreate };
var y;
(function (n) {
  (n.ZodString = "ZodString"),
    (n.ZodNumber = "ZodNumber"),
    (n.ZodNaN = "ZodNaN"),
    (n.ZodBigInt = "ZodBigInt"),
    (n.ZodBoolean = "ZodBoolean"),
    (n.ZodDate = "ZodDate"),
    (n.ZodSymbol = "ZodSymbol"),
    (n.ZodUndefined = "ZodUndefined"),
    (n.ZodNull = "ZodNull"),
    (n.ZodAny = "ZodAny"),
    (n.ZodUnknown = "ZodUnknown"),
    (n.ZodNever = "ZodNever"),
    (n.ZodVoid = "ZodVoid"),
    (n.ZodArray = "ZodArray"),
    (n.ZodObject = "ZodObject"),
    (n.ZodUnion = "ZodUnion"),
    (n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (n.ZodIntersection = "ZodIntersection"),
    (n.ZodTuple = "ZodTuple"),
    (n.ZodRecord = "ZodRecord"),
    (n.ZodMap = "ZodMap"),
    (n.ZodSet = "ZodSet"),
    (n.ZodFunction = "ZodFunction"),
    (n.ZodLazy = "ZodLazy"),
    (n.ZodLiteral = "ZodLiteral"),
    (n.ZodEnum = "ZodEnum"),
    (n.ZodEffects = "ZodEffects"),
    (n.ZodNativeEnum = "ZodNativeEnum"),
    (n.ZodOptional = "ZodOptional"),
    (n.ZodNullable = "ZodNullable"),
    (n.ZodDefault = "ZodDefault"),
    (n.ZodCatch = "ZodCatch"),
    (n.ZodPromise = "ZodPromise"),
    (n.ZodBranded = "ZodBranded"),
    (n.ZodPipeline = "ZodPipeline"),
    (n.ZodReadonly = "ZodReadonly");
})(y || (y = {}));
const Kn = (n, e = { message: `Input not instance of ${n.name}` }) =>
    Vt((t) => t instanceof n, e),
  Dt = j.create,
  Ut = X.create,
  Fn = Be.create,
  Qn = J.create,
  Bt = ge.create,
  es = te.create,
  ts = Le.create,
  ns = ve.create,
  ss = _e.create,
  rs = de.create,
  is = Q.create,
  as = z.create,
  os = Ve.create,
  cs = R.create,
  ls = w.create,
  us = w.strictCreate,
  ds = xe.create,
  fs = Xe.create,
  hs = be.create,
  ps = L.create,
  ms = we.create,
  ys = De.create,
  gs = ne.create,
  vs = le.create,
  _s = ke.create,
  xs = Te.create,
  bs = Y.create,
  ws = Se.create,
  ks = fe.create,
  _t = M.create,
  Ts = U.create,
  Ss = se.create,
  Cs = M.createWithPreprocess,
  Es = Ee.create,
  Ns = () => Dt().optional(),
  Os = () => Ut().optional(),
  Zs = () => Bt().optional(),
  As = {
    string: (n) => j.create({ ...n, coerce: !0 }),
    number: (n) => X.create({ ...n, coerce: !0 }),
    boolean: (n) => ge.create({ ...n, coerce: !0 }),
    bigint: (n) => J.create({ ...n, coerce: !0 }),
    date: (n) => te.create({ ...n, coerce: !0 }),
  },
  Ps = g;
var xt = Object.freeze({
  __proto__: null,
  defaultErrorMap: me,
  setErrorMap: Mn,
  getErrorMap: Re,
  makeIssue: Me,
  EMPTY_PATH: $n,
  addIssueToContext: h,
  ParseStatus: O,
  INVALID: g,
  DIRTY: Mt,
  OK: Z,
  isAborted: ct,
  isDirty: lt,
  isValid: ye,
  isAsync: $e,
  get util() {
    return x;
  },
  get objectUtil() {
    return ot;
  },
  ZodParsedType: f,
  getParsedType: W,
  ZodType: _,
  ZodString: j,
  ZodNumber: X,
  ZodBigInt: J,
  ZodBoolean: ge,
  ZodDate: te,
  ZodSymbol: Le,
  ZodUndefined: ve,
  ZodNull: _e,
  ZodAny: de,
  ZodUnknown: Q,
  ZodNever: z,
  ZodVoid: Ve,
  ZodArray: R,
  ZodObject: w,
  ZodUnion: xe,
  ZodDiscriminatedUnion: Xe,
  ZodIntersection: be,
  ZodTuple: L,
  ZodRecord: we,
  ZodMap: De,
  ZodSet: ne,
  ZodFunction: le,
  ZodLazy: ke,
  ZodLiteral: Te,
  ZodEnum: Y,
  ZodNativeEnum: Se,
  ZodPromise: fe,
  ZodEffects: M,
  ZodTransformer: M,
  ZodOptional: U,
  ZodNullable: se,
  ZodDefault: Ce,
  ZodCatch: Ue,
  ZodNaN: Be,
  BRAND: Jn,
  ZodBranded: Lt,
  ZodPipeline: Ee,
  ZodReadonly: ze,
  custom: Vt,
  Schema: _,
  ZodSchema: _,
  late: Yn,
  get ZodFirstPartyTypeKind() {
    return y;
  },
  coerce: As,
  any: rs,
  array: cs,
  bigint: Qn,
  boolean: Bt,
  date: es,
  discriminatedUnion: fs,
  effect: _t,
  enum: bs,
  function: vs,
  instanceof: Kn,
  intersection: hs,
  lazy: _s,
  literal: xs,
  map: ys,
  nan: Fn,
  nativeEnum: ws,
  never: as,
  null: ss,
  nullable: Ss,
  number: Ut,
  object: ls,
  oboolean: Zs,
  onumber: Os,
  optional: Ts,
  ostring: Ns,
  pipeline: Es,
  preprocess: Cs,
  promise: ks,
  record: ms,
  set: gs,
  strictObject: us,
  string: Dt,
  symbol: ts,
  transformer: _t,
  tuple: ps,
  undefined: ns,
  union: ds,
  unknown: is,
  void: os,
  NEVER: Ps,
  ZodIssueCode: u,
  quotelessJson: Rn,
  ZodError: I,
});
let js = { data: "" },
  Is = (n) =>
    typeof window == "object"
      ? (
          (n ? n.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (n || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" },
          )
        ).firstChild
      : n || js,
  Rs = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Ms = /\/\*[^]*?\*\/|  +/g,
  bt = /\n+/g,
  F = (n, e) => {
    let t = "",
      s = "",
      r = "";
    for (let i in n) {
      let a = n[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (t = i + " " + a + ";")
          : (s +=
              i[1] == "f"
                ? F(a, i)
                : i + "{" + F(a, i[1] == "k" ? "" : e) + "}")
        : typeof a == "object"
          ? (s += F(
              a,
              e
                ? e.replace(/([^,])+/g, (o) =>
                    i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (c) =>
                      /&/.test(c) ? c.replace(/&/g, o) : o ? o + " " + c : c,
                    ),
                  )
                : i,
            ))
          : a != null &&
            ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (r += F.p ? F.p(i, a) : i + ":" + a + ";"));
    }
    return t + (e && r ? e + "{" + r + "}" : r) + s;
  },
  V = {},
  zt = (n) => {
    if (typeof n == "object") {
      let e = "";
      for (let t in n) e += t + zt(n[t]);
      return e;
    }
    return n;
  },
  $s = (n, e, t, s, r) => {
    let i = zt(n),
      a =
        V[i] ||
        (V[i] = ((c) => {
          let l = 0,
            d = 11;
          for (; l < c.length; ) d = (101 * d + c.charCodeAt(l++)) >>> 0;
          return "go" + d;
        })(i));
    if (!V[a]) {
      let c =
        i !== n
          ? n
          : ((l) => {
              let d,
                p,
                b = [{}];
              for (; (d = Rs.exec(l.replace(Ms, ""))); )
                d[4]
                  ? b.shift()
                  : d[3]
                    ? ((p = d[3].replace(bt, " ").trim()),
                      b.unshift((b[0][p] = b[0][p] || {})))
                    : (b[0][d[1]] = d[2].replace(bt, " ").trim());
              return b[0];
            })(n);
      V[a] = F(r ? { ["@keyframes " + a]: c } : c, t ? "" : "." + a);
    }
    let o = t && V.g ? V.g : null;
    return (
      t && (V.g = V[a]),
      ((c, l, d, p) => {
        p
          ? (l.data = l.data.replace(p, c))
          : l.data.indexOf(c) === -1 && (l.data = d ? c + l.data : l.data + c);
      })(V[a], e, s, o),
      a
    );
  },
  Ls = (n, e, t) =>
    n.reduce((s, r, i) => {
      let a = e[i];
      if (a && a.call) {
        let o = a(t),
          c = (o && o.props && o.props.className) || (/^go/.test(o) && o);
        a = c
          ? "." + c
          : o && typeof o == "object"
            ? o.props
              ? ""
              : F(o, "")
            : o === !1
              ? ""
              : o;
      }
      return s + r + (a ?? "");
    }, "");
function qe(n) {
  let e = this || {},
    t = n.call ? n(e.p) : n;
  return $s(
    t.unshift
      ? t.raw
        ? Ls(t, [].slice.call(arguments, 1), e.p)
        : t.reduce((s, r) => Object.assign(s, r && r.call ? r(e.p) : r), {})
      : t,
    Is(e.target),
    e.g,
    e.o,
    e.k,
  );
}
qe.bind({ g: 1 });
qe.bind({ k: 1 });
const Vs = Ft();
function Ds(n) {
  let e = this || {};
  return (...t) => {
    const s = (r) => {
      const i = Qt(Vs),
        a = nt(r, { theme: i }),
        o = nt(a, {
          get class() {
            const A = a.class,
              K = "class" in a && /^go[0-9]+/.test(A);
            let Ye = qe.apply({ target: e.target, o: K, p: a, g: e.g }, t);
            return [A, Ye].filter(Boolean).join(" ");
          },
        }),
        [c, l] = Pt(o, ["as", "theme"]),
        d = l,
        p = c.as || n;
      let b;
      return (
        typeof p == "function"
          ? (b = p(d))
          : e.g == 1
            ? ((b = document.createElement(p)), jt(b, d))
            : (b = In(nt({ component: p }, d))),
        b
      );
    };
    return (
      (s.class = (r) =>
        P(() => qe.apply({ target: e.target, p: r, g: e.g }, t))),
      s
    );
  };
}
const Je = new Proxy(Ds, {
    get(n, e) {
      return n(e);
    },
  }),
  Us = Je("div")`
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 300px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 20px;
    z-index: 214748364;
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.3s ease-in-out;
	display: none;
    pointer-events: none;

    &.visible {
        pointer-events: all;
        transform: translateX(0);
        opacity: 1;
    }
`,
  Bs = Je("div")`
    font-size: 16px;
    color: #fff;
    margin-bottom: 12px;
    font-weight: 500;
	display: none;
`,
  zs = Je("div")`
    font-size: 14px;
    color: #fff;
    line-height: 1.5;
	display: none;
`,
  qs = Je("button")`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #fff;
    padding: 4px;
	display: none;

    &:hover {
        color: #666;
    }
`,
  Ws = (n) => {
    const [e, t] = ce(!1);
    St(() => {
      setTimeout(() => t(!0), 500);
    });
    const s = () => {
      var r;
      t(!1), (r = n.onClose) == null || r.call(n);
    };
    return G(Us, {
      get class() {
        return e() ? "visible" : "";
      },
      get children() {
        return [
          G(qs, { onClick: s, children: "Ã—" }),
          G(Bs, {
            get children() {
              return n.title;
            },
          }),
          G(zs, {
            get children() {
              return n.message;
            },
          }),
        ];
      },
    });
  };
var Gs = bn("<div><iframe>");
function Hs() {
  const n = window.__ch.id,
    e = window.__ch.url,
    [t] = Kt(async () => await (await fetch(`${e}/api/chatbot/${n}`)).json());
	//  const f = async () =>{ console.log(await (await fetch(`${e}/api/chatbot/${n}`)).json())}
	//  f()
  return G(ln, {
    get when() {
      return !!t();
    },
    get children() {
      return [
        G(Xs, {
          get bot() {
            return t();
          },
          appUrl: e,
        }),
        ";",
      ];
    },
  });
}
const Xs = ({ bot: n, appUrl: e }) => {
  const [t, s] = ce(!1),
    r = n.config.greetingMessage,
    i = () => {
      const a = document.getElementById(`ch-popup-${n.id}`);
      if (!a) {
        console.error("âŒ update: target not found");
        return;
      }
      const o = Math.min(window.innerWidth - 40, 490),
        c = Math.min(window.innerHeight - 40, 784);
      (a.style.width = t() ? `${o}px` : "56px"),
        (a.style.height = t() ? `${c}px` : "56px"),
        (a.style.borderRadius = t() ? "6px" : "50%");
    };
  return (
    Tt(i),
    St(() => {
      const a = (o) => {
        if (o.origin === e)
          try {
            const { open: c } = xt.object({ open: xt.boolean() }).parse(o.data);
            s(c);
          } catch {}
      };
      return (
        window.addEventListener("message", a),
        window.addEventListener("resize", i),
        () => {
          window.removeEventListener("message", a),
            window.removeEventListener("resize", i);
        }
      );
    }),
    (() => {
      var a = Gs(),
        o = a.firstChild;
      return (
        a.style.setProperty("border", "0px"),
        a.style.setProperty("background-color", "transparent"),
        a.style.setProperty("pointer-events", "none"),
        a.style.setProperty("z-index", "2147483647"),
        a.style.setProperty("position", "fixed"),
        a.style.setProperty("bottom", "20px"),
        a.style.setProperty("margin", "auto"),
        a.style.setProperty("width", "100px"),
        a.style.setProperty("height", "100px"),
        a.style.setProperty("overflow", "hidden"),
        a.style.setProperty("opacity", "1"),
        a.style.setProperty("max-width", "100%"),
        a.style.setProperty("right", "-100px"),
        a.style.setProperty("max-height", "100%"),
        It(
          a,
			(() => {
				var c = B(() => !!(r != null && r.enabled));
            return () =>
              c() &&
              G(Ws, {
                get title() {
                  return r.title;
                },
                get message() {
                  return r.message;
                },
              });
          })(),
          o,
        ),
        o.style.setProperty("pointer-events", "all"),
        o.style.setProperty("z-index", "2147483647"),
        o.style.setProperty("background", "transparent"),
        o.style.setProperty("border", "0px"),
        o.style.setProperty("float", "none"),
        o.style.setProperty("border-radius", "0.7rem"),
        o.style.setProperty("position", "absolute"),
        o.style.setProperty("inset", "0px"),
        o.style.setProperty("width", "100%"),
        o.style.setProperty("height", "100%"),
        o.style.setProperty("margin", "0px"),
        o.style.setProperty("padding", "0px"),
        o.style.setProperty("min-height", "0px"),
        H(
          (c) => {
            var l = `ch-popup-${n.id}`,
              d = `${e}/channels/${n.id}/site/widget`;
			  console.log(d);
            return (
              l !== c.e && pe(a, "id", (c.e = l)),
              d !== c.t && pe(o, "src", (c.t = d)),
              c
            );
          },
          { e: void 0, t: void 0 },
        ),
        a
      );
    })()
  );
};
xn(() => G(Hs, {}), document.body);
