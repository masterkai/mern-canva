function nc(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const l in r)
				if (l !== "default" && !(l in e)) {
					const o = Object.getOwnPropertyDescriptor(r, l);
					o &&
						Object.defineProperty(
							e,
							l,
							o.get ? o : { enumerable: !0, get: () => r[l] },
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
	new MutationObserver((l) => {
		for (const o of l)
			if (o.type === "childList")
				for (const i of o.addedNodes)
					i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(l) {
		const o = {};
		return (
			l.integrity && (o.integrity = l.integrity),
			l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: l.crossOrigin === "anonymous"
					? (o.credentials = "omit")
					: (o.credentials = "same-origin"),
			o
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const o = n(l);
		fetch(l.href, o);
	}
})();
function rc(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var lc = { exports: {} },
	yo = {},
	oc = { exports: {} },
	Q = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl = Symbol.for("react.element"),
	Yd = Symbol.for("react.portal"),
	Xd = Symbol.for("react.fragment"),
	Gd = Symbol.for("react.strict_mode"),
	Zd = Symbol.for("react.profiler"),
	Jd = Symbol.for("react.provider"),
	qd = Symbol.for("react.context"),
	bd = Symbol.for("react.forward_ref"),
	ep = Symbol.for("react.suspense"),
	tp = Symbol.for("react.memo"),
	np = Symbol.for("react.lazy"),
	Ca = Symbol.iterator;
function rp(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Ca && e[Ca]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var ic = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	uc = Object.assign,
	ac = {};
function lr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = ac),
		(this.updater = n || ic);
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sc() {}
sc.prototype = lr.prototype;
function fu(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = ac),
		(this.updater = n || ic);
}
var du = (fu.prototype = new sc());
du.constructor = fu;
uc(du, lr.prototype);
du.isPureReactComponent = !0;
var _a = Array.isArray,
	cc = Object.prototype.hasOwnProperty,
	pu = { current: null },
	fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			cc.call(t, r) && !fc.hasOwnProperty(r) && (l[r] = t[r]);
	var u = arguments.length - 2;
	if (u === 1) l.children = n;
	else if (1 < u) {
		for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
		l.children = a;
	}
	if (e && e.defaultProps)
		for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
	return {
		$$typeof: nl,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: pu.current,
	};
}
function lp(e, t) {
	return {
		$$typeof: nl,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function hu(e) {
	return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function op(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Pa = /\/+/g;
function Io(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? op("" + e.key)
		: t.toString(36);
}
function Dl(e, t, n, r, l) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (o) {
			case "string":
			case "number":
				i = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case nl:
					case Yd:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(l = l(i)),
			(e = r === "" ? "." + Io(i, 0) : r),
			_a(l)
				? ((n = ""),
					e != null && (n = e.replace(Pa, "$&/") + "/"),
					Dl(l, t, n, "", function (s) {
						return s;
					}))
				: l != null &&
					(hu(l) &&
						(l = lp(
							l,
							n +
								(!l.key || (i && i.key === l.key)
									? ""
									: ("" + l.key).replace(Pa, "$&/") + "/") +
								e,
						)),
					t.push(l)),
			1
		);
	if (((i = 0), (r = r === "" ? "." : r + ":"), _a(e)))
		for (var u = 0; u < e.length; u++) {
			o = e[u];
			var a = r + Io(o, u);
			i += Dl(o, t, n, a, l);
		}
	else if (((a = rp(e)), typeof a == "function"))
		for (e = a.call(e), u = 0; !(o = e.next()).done; )
			(o = o.value), (a = r + Io(o, u++)), (i += Dl(o, t, n, a, l));
	else if (o === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead.",
			))
		);
	return i;
}
function hl(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		Dl(e, r, "", "", function (o) {
			return t.call(n, o, l++);
		}),
		r
	);
}
function ip(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Oe = { current: null },
	zl = { transition: null },
	up = {
		ReactCurrentDispatcher: Oe,
		ReactCurrentBatchConfig: zl,
		ReactCurrentOwner: pu,
	};
function pc() {
	throw Error("act(...) is not supported in production builds of React.");
}
Q.Children = {
	map: hl,
	forEach: function (e, t, n) {
		hl(
			e,
			function () {
				t.apply(this, arguments);
			},
			n,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			hl(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			hl(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!hu(e))
			throw Error(
				"React.Children.only expected to receive a single React element child.",
			);
		return e;
	},
};
Q.Component = lr;
Q.Fragment = Xd;
Q.Profiler = Zd;
Q.PureComponent = fu;
Q.StrictMode = Gd;
Q.Suspense = ep;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
Q.act = pc;
Q.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				".",
		);
	var r = uc({}, e.props),
		l = e.key,
		o = e.ref,
		i = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (i = pu.current)),
			t.key !== void 0 && (l = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var u = e.type.defaultProps;
		for (a in t)
			cc.call(t, a) &&
				!fc.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		u = Array(a);
		for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
		r.children = u;
	}
	return { $$typeof: nl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Q.createContext = function (e) {
	return (
		(e = {
			$$typeof: qd,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Jd, _context: e }),
		(e.Consumer = e)
	);
};
Q.createElement = dc;
Q.createFactory = function (e) {
	var t = dc.bind(null, e);
	return (t.type = e), t;
};
Q.createRef = function () {
	return { current: null };
};
Q.forwardRef = function (e) {
	return { $$typeof: bd, render: e };
};
Q.isValidElement = hu;
Q.lazy = function (e) {
	return { $$typeof: np, _payload: { _status: -1, _result: e }, _init: ip };
};
Q.memo = function (e, t) {
	return { $$typeof: tp, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
	var t = zl.transition;
	zl.transition = {};
	try {
		e();
	} finally {
		zl.transition = t;
	}
};
Q.unstable_act = pc;
Q.useCallback = function (e, t) {
	return Oe.current.useCallback(e, t);
};
Q.useContext = function (e) {
	return Oe.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
	return Oe.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
	return Oe.current.useEffect(e, t);
};
Q.useId = function () {
	return Oe.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
	return Oe.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
	return Oe.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
	return Oe.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
	return Oe.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
	return Oe.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
	return Oe.current.useRef(e);
};
Q.useState = function (e) {
	return Oe.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
	return Oe.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
	return Oe.current.useTransition();
};
Q.version = "18.3.1";
oc.exports = Q;
var T = oc.exports;
const Kt = rc(T),
	ap = nc({ __proto__: null, default: Kt }, [T]); /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp = T,
	cp = Symbol.for("react.element"),
	fp = Symbol.for("react.fragment"),
	dp = Object.prototype.hasOwnProperty,
	pp = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	hp = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (r in t) dp.call(t, r) && !hp.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: cp,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: pp.current,
	};
}
yo.Fragment = fp;
yo.jsx = hc;
yo.jsxs = hc;
lc.exports = yo;
var U = lc.exports,
	di = {},
	mc = { exports: {} },
	Ge = {},
	vc = { exports: {} },
	yc = {}; /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
	function t(P, A) {
		var $ = P.length;
		P.push(A);
		e: for (; 0 < $; ) {
			var J = ($ - 1) >>> 1,
				q = P[J];
			if (0 < l(q, A)) (P[J] = A), (P[$] = q), ($ = J);
			else break e;
		}
	}
	function n(P) {
		return P.length === 0 ? null : P[0];
	}
	function r(P) {
		if (P.length === 0) return null;
		var A = P[0],
			$ = P.pop();
		if ($ !== A) {
			P[0] = $;
			e: for (var J = 0, q = P.length, at = q >>> 1; J < at; ) {
				var Ve = 2 * (J + 1) - 1,
					He = P[Ve],
					De = Ve + 1,
					Je = P[De];
				if (0 > l(He, $))
					De < q && 0 > l(Je, He)
						? ((P[J] = Je), (P[De] = $), (J = De))
						: ((P[J] = He), (P[Ve] = $), (J = Ve));
				else if (De < q && 0 > l(Je, $)) (P[J] = Je), (P[De] = $), (J = De);
				else break e;
			}
		}
		return A;
	}
	function l(P, A) {
		var $ = P.sortIndex - A.sortIndex;
		return $ !== 0 ? $ : P.id - A.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var i = Date,
			u = i.now();
		e.unstable_now = function () {
			return i.now() - u;
		};
	}
	var a = [],
		s = [],
		f = 1,
		d = null,
		p = 3,
		x = !1,
		S = !1,
		w = !1,
		N = typeof setTimeout == "function" ? setTimeout : null,
		h = typeof clearTimeout == "function" ? clearTimeout : null,
		c = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(P) {
		for (var A = n(s); A !== null; ) {
			if (A.callback === null) r(s);
			else if (A.startTime <= P)
				r(s), (A.sortIndex = A.expirationTime), t(a, A);
			else break;
			A = n(s);
		}
	}
	function k(P) {
		if (((w = !1), v(P), !S))
			if (n(a) !== null) (S = !0), jt(R);
			else {
				var A = n(s);
				A !== null && Mt(k, A.startTime - P);
			}
	}
	function R(P, A) {
		(S = !1), w && ((w = !1), h(L), (L = -1)), (x = !0);
		var $ = p;
		try {
			for (
				v(A), d = n(a);
				d !== null && (!(d.expirationTime > A) || (P && !K()));
			) {
				var J = d.callback;
				if (typeof J == "function") {
					(d.callback = null), (p = d.priorityLevel);
					var q = J(d.expirationTime <= A);
					(A = e.unstable_now()),
						typeof q == "function" ? (d.callback = q) : d === n(a) && r(a),
						v(A);
				} else r(a);
				d = n(a);
			}
			if (d !== null) var at = !0;
			else {
				var Ve = n(s);
				Ve !== null && Mt(k, Ve.startTime - A), (at = !1);
			}
			return at;
		} finally {
			(d = null), (p = $), (x = !1);
		}
	}
	var D = !1,
		m = null,
		L = -1,
		F = 5,
		M = -1;
	function K() {
		return !(e.unstable_now() - M < F);
	}
	function fe() {
		if (m !== null) {
			var P = e.unstable_now();
			M = P;
			var A = !0;
			try {
				A = m(!0, P);
			} finally {
				A ? oe() : ((D = !1), (m = null));
			}
		} else D = !1;
	}
	var oe;
	if (typeof c == "function")
		oe = function () {
			c(fe);
		};
	else if (typeof MessageChannel < "u") {
		var Se = new MessageChannel(),
			ut = Se.port2;
		(Se.port1.onmessage = fe),
			(oe = function () {
				ut.postMessage(null);
			});
	} else
		oe = function () {
			N(fe, 0);
		};
	function jt(P) {
		(m = P), D || ((D = !0), oe());
	}
	function Mt(P, A) {
		L = N(function () {
			P(e.unstable_now());
		}, A);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (P) {
			P.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			S || x || ((S = !0), jt(R));
		}),
		(e.unstable_forceFrameRate = function (P) {
			0 > P || 125 < P
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
					)
				: (F = 0 < P ? Math.floor(1e3 / P) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (P) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var A = 3;
					break;
				default:
					A = p;
			}
			var $ = p;
			p = A;
			try {
				return P();
			} finally {
				p = $;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (P, A) {
			switch (P) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					P = 3;
			}
			var $ = p;
			p = P;
			try {
				return A();
			} finally {
				p = $;
			}
		}),
		(e.unstable_scheduleCallback = function (P, A, $) {
			var J = e.unstable_now();
			switch (
				(typeof $ == "object" && $ !== null
					? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? J + $ : J))
					: ($ = J),
				P)
			) {
				case 1:
					var q = -1;
					break;
				case 2:
					q = 250;
					break;
				case 5:
					q = 1073741823;
					break;
				case 4:
					q = 1e4;
					break;
				default:
					q = 5e3;
			}
			return (
				(q = $ + q),
				(P = {
					id: f++,
					callback: A,
					priorityLevel: P,
					startTime: $,
					expirationTime: q,
					sortIndex: -1,
				}),
				$ > J
					? ((P.sortIndex = $),
						t(s, P),
						n(a) === null &&
							P === n(s) &&
							(w ? (h(L), (L = -1)) : (w = !0), Mt(k, $ - J)))
					: ((P.sortIndex = q), t(a, P), S || x || ((S = !0), jt(R))),
				P
			);
		}),
		(e.unstable_shouldYield = K),
		(e.unstable_wrapCallback = function (P) {
			var A = p;
			return function () {
				var $ = p;
				p = A;
				try {
					return P.apply(this, arguments);
				} finally {
					p = $;
				}
			};
		});
})(yc);
vc.exports = yc;
var mp = vc.exports; /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp = T,
	Xe = mp;
function C(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var gc = new Set(),
	Ur = {};
function Cn(e, t) {
	Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
	for (Ur[e] = t, e = 0; e < t.length; e++) gc.add(t[e]);
}
var Lt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	pi = Object.prototype.hasOwnProperty,
	yp =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Ra = {},
	La = {};
function gp(e) {
	return pi.call(La, e)
		? !0
		: pi.call(Ra, e)
			? !1
			: yp.test(e)
				? (La[e] = !0)
				: ((Ra[e] = !0), !1);
}
function wp(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
					? !n.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function Sp(e, t, n, r) {
	if (t === null || typeof t > "u" || wp(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Fe(e, t, n, r, l, o, i) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = i);
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		Pe[e] = new Fe(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	Pe[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	Pe[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	Pe[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		Pe[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	Pe[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	Pe[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	Pe[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	Pe[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mu = /[\-:]([a-z])/g;
function vu(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(mu, vu);
		Pe[t] = new Fe(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(mu, vu);
		Pe[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(mu, vu);
	Pe[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Fe(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
	Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yu(e, t, n, r) {
	var l = Pe.hasOwnProperty(t) ? Pe[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
			!(2 < t.length) ||
			(t[0] !== "o" && t[0] !== "O") ||
			(t[1] !== "n" && t[1] !== "N")) &&
		(Sp(t, n, l, r) && (n = null),
		r || l === null
			? gp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: l.mustUseProperty
				? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
				: ((t = l.attributeName),
					(r = l.attributeNamespace),
					n === null
						? e.removeAttribute(t)
						: ((l = l.type),
							(n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
							r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ml = Symbol.for("react.element"),
	Dn = Symbol.for("react.portal"),
	zn = Symbol.for("react.fragment"),
	gu = Symbol.for("react.strict_mode"),
	hi = Symbol.for("react.profiler"),
	wc = Symbol.for("react.provider"),
	Sc = Symbol.for("react.context"),
	wu = Symbol.for("react.forward_ref"),
	mi = Symbol.for("react.suspense"),
	vi = Symbol.for("react.suspense_list"),
	Su = Symbol.for("react.memo"),
	Bt = Symbol.for("react.lazy"),
	xc = Symbol.for("react.offscreen"),
	Na = Symbol.iterator;
function pr(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Na && e[Na]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var se = Object.assign,
	Uo;
function Cr(e) {
	if (Uo === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Uo = (t && t[1]) || "";
		}
	return (
		`
` +
		Uo +
		e
	);
}
var Ao = !1;
function Bo(e, t) {
	if (!e || Ao) return "";
	Ao = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (s) {
					var r = s;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (s) {
					r = s;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (s) {
				r = s;
			}
			e();
		}
	} catch (s) {
		if (s && r && typeof s.stack == "string") {
			for (
				var l = s.stack.split(`
`),
					o = r.stack.split(`
`),
					i = l.length - 1,
					u = o.length - 1;
				1 <= i && 0 <= u && l[i] !== o[u];
			)
				u--;
			for (; 1 <= i && 0 <= u; i--, u--)
				if (l[i] !== o[u]) {
					if (i !== 1 || u !== 1)
						do
							if ((i--, u--, 0 > u || l[i] !== o[u])) {
								var a =
									`
` + l[i].replace(" at new ", " at ");
								return (
									e.displayName &&
										a.includes("<anonymous>") &&
										(a = a.replace("<anonymous>", e.displayName)),
									a
								);
							}
						while (1 <= i && 0 <= u);
					break;
				}
		}
	} finally {
		(Ao = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function xp(e) {
	switch (e.tag) {
		case 5:
			return Cr(e.type);
		case 16:
			return Cr("Lazy");
		case 13:
			return Cr("Suspense");
		case 19:
			return Cr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Bo(e.type, !1)), e;
		case 11:
			return (e = Bo(e.type.render, !1)), e;
		case 1:
			return (e = Bo(e.type, !0)), e;
		default:
			return "";
	}
}
function yi(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case zn:
			return "Fragment";
		case Dn:
			return "Portal";
		case hi:
			return "Profiler";
		case gu:
			return "StrictMode";
		case mi:
			return "Suspense";
		case vi:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Sc:
				return (e.displayName || "Context") + ".Consumer";
			case wc:
				return (e._context.displayName || "Context") + ".Provider";
			case wu:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case Su:
				return (
					(t = e.displayName || null), t !== null ? t : yi(e.type) || "Memo"
				);
			case Bt:
				(t = e._payload), (e = e._init);
				try {
					return yi(e(t));
				} catch {}
		}
	return null;
}
function Ep(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return yi(t);
		case 8:
			return t === gu ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function tn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function Ec(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function kp(e) {
	var t = Ec(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var l = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (i) {
					(r = "" + i), o.call(this, i);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (i) {
					r = "" + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function vl(e) {
	e._valueTracker || (e._valueTracker = kp(e));
}
function kc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = Ec(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Hl(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function gi(e, t) {
	var n = t.checked;
	return se({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Ta(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = tn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function Cc(e, t) {
	(t = t.checked), t != null && yu(e, "checked", t, !1);
}
function wi(e, t) {
	Cc(e, t);
	var n = tn(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? Si(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Si(e, t.type, tn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Da(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function Si(e, t, n) {
	(t !== "number" || Hl(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
function Wn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + tn(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function xi(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
	return se({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function za(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(C(92));
			if (_r(n)) {
				if (1 < n.length) throw Error(C(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: tn(n) };
}
function _c(e, t) {
	var n = tn(t.value),
		r = tn(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function ja(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pc(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Ei(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Pc(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
			? "http://www.w3.org/1999/xhtml"
			: e;
}
var yl,
	Rc = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, l);
					});
				}
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				yl = yl || document.createElement("div"),
					yl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = yl.firstChild;
				e.firstChild;
			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Ar(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Lr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lr).forEach(function (e) {
	Cp.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e]);
	});
});
function Lc(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (Lr.hasOwnProperty(e) && Lr[e])
			? ("" + t).trim()
			: t + "px";
}
function Nc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				l = Lc(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var _p = se(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
);
function ki(e, t) {
	if (t) {
		if (_p[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(C(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(C(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(C(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(C(62));
	}
}
function Ci(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var _i = null;
function xu(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Pi = null,
	Qn = null,
	Kn = null;
function Ma(e) {
	if ((e = ol(e))) {
		if (typeof Pi != "function") throw Error(C(280));
		var t = e.stateNode;
		t && ((t = Eo(t)), Pi(e.stateNode, e.type, t));
	}
}
function Tc(e) {
	Qn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Qn = e);
}
function Dc() {
	if (Qn) {
		var e = Qn,
			t = Kn;
		if (((Kn = Qn = null), Ma(e), t)) for (e = 0; e < t.length; e++) Ma(t[e]);
	}
}
function zc(e, t) {
	return e(t);
}
function jc() {}
var $o = !1;
function Mc(e, t, n) {
	if ($o) return e(t, n);
	$o = !0;
	try {
		return zc(e, t, n);
	} finally {
		($o = !1), (Qn !== null || Kn !== null) && (jc(), Dc());
	}
}
function Br(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Eo(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(C(231, t, typeof n));
	return n;
}
var Ri = !1;
if (Lt)
	try {
		var hr = {};
		Object.defineProperty(hr, "passive", {
			get: function () {
				Ri = !0;
			},
		}),
			window.addEventListener("test", hr, hr),
			window.removeEventListener("test", hr, hr);
	} catch {
		Ri = !1;
	}
function Pp(e, t, n, r, l, o, i, u, a) {
	var s = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, s);
	} catch (f) {
		this.onError(f);
	}
}
var Nr = !1,
	Wl = null,
	Ql = !1,
	Li = null,
	Rp = {
		onError: function (e) {
			(Nr = !0), (Wl = e);
		},
	};
function Lp(e, t, n, r, l, o, i, u, a) {
	(Nr = !1), (Wl = null), Pp.apply(Rp, arguments);
}
function Np(e, t, n, r, l, o, i, u, a) {
	if ((Lp.apply(this, arguments), Nr)) {
		if (Nr) {
			var s = Wl;
			(Nr = !1), (Wl = null);
		} else throw Error(C(198));
		Ql || ((Ql = !0), (Li = s));
	}
}
function _n(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Oc(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Oa(e) {
	if (_n(e) !== e) throw Error(C(188));
}
function Tp(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = _n(e)), t === null)) throw Error(C(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var l = n.return;
		if (l === null) break;
		var o = l.alternate;
		if (o === null) {
			if (((r = l.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (l.child === o.child) {
			for (o = l.child; o; ) {
				if (o === n) return Oa(l), e;
				if (o === r) return Oa(l), t;
				o = o.sibling;
			}
			throw Error(C(188));
		}
		if (n.return !== r.return) (n = l), (r = o);
		else {
			for (var i = !1, u = l.child; u; ) {
				if (u === n) {
					(i = !0), (n = l), (r = o);
					break;
				}
				if (u === r) {
					(i = !0), (r = l), (n = o);
					break;
				}
				u = u.sibling;
			}
			if (!i) {
				for (u = o.child; u; ) {
					if (u === n) {
						(i = !0), (n = o), (r = l);
						break;
					}
					if (u === r) {
						(i = !0), (r = o), (n = l);
						break;
					}
					u = u.sibling;
				}
				if (!i) throw Error(C(189));
			}
		}
		if (n.alternate !== r) throw Error(C(190));
	}
	if (n.tag !== 3) throw Error(C(188));
	return n.stateNode.current === n ? e : t;
}
function Fc(e) {
	return (e = Tp(e)), e !== null ? Ic(e) : null;
}
function Ic(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Ic(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Uc = Xe.unstable_scheduleCallback,
	Fa = Xe.unstable_cancelCallback,
	Dp = Xe.unstable_shouldYield,
	zp = Xe.unstable_requestPaint,
	de = Xe.unstable_now,
	jp = Xe.unstable_getCurrentPriorityLevel,
	Eu = Xe.unstable_ImmediatePriority,
	Ac = Xe.unstable_UserBlockingPriority,
	Kl = Xe.unstable_NormalPriority,
	Mp = Xe.unstable_LowPriority,
	Bc = Xe.unstable_IdlePriority,
	go = null,
	xt = null;
function Op(e) {
	if (xt && typeof xt.onCommitFiberRoot == "function")
		try {
			xt.onCommitFiberRoot(go, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var ht = Math.clz32 ? Math.clz32 : Up,
	Fp = Math.log,
	Ip = Math.LN2;
function Up(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Fp(e) / Ip) | 0)) | 0;
}
var gl = 64,
	wl = 4194304;
function Pr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Yl(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		o = e.pingedLanes,
		i = n & 268435455;
	if (i !== 0) {
		var u = i & ~l;
		u !== 0 ? (r = Pr(u)) : ((o &= i), o !== 0 && (r = Pr(o)));
	} else (i = n & ~l), i !== 0 ? (r = Pr(i)) : o !== 0 && (r = Pr(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & l) &&
		((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function Ap(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function Bp(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;
	) {
		var i = 31 - ht(o),
			u = 1 << i,
			a = l[i];
		a === -1
			? (!(u & n) || u & r) && (l[i] = Ap(u, t))
			: a <= t && (e.expiredLanes |= u),
			(o &= ~u);
	}
}
function Ni(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function $c() {
	var e = gl;
	return (gl <<= 1), !(gl & 4194240) && (gl = 64), e;
}
function Vo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function rl(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - ht(t)),
		(e[t] = n);
}
function $p(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var l = 31 - ht(n),
			o = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
	}
}
function ku(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - ht(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var Z = 0;
function Vc(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hc,
	Cu,
	Wc,
	Qc,
	Kc,
	Ti = !1,
	Sl = [],
	Yt = null,
	Xt = null,
	Gt = null,
	$r = new Map(),
	Vr = new Map(),
	Vt = [],
	Vp =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" ",
		);
function Ia(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Yt = null;
			break;
		case "dragenter":
		case "dragleave":
			Xt = null;
			break;
		case "mouseover":
		case "mouseout":
			Gt = null;
			break;
		case "pointerover":
		case "pointerout":
			$r.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Vr.delete(t.pointerId);
	}
}
function mr(e, t, n, r, l, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [l],
			}),
			t !== null && ((t = ol(t)), t !== null && Cu(t)),
			e)
		: ((e.eventSystemFlags |= r),
			(t = e.targetContainers),
			l !== null && t.indexOf(l) === -1 && t.push(l),
			e);
}
function Hp(e, t, n, r, l) {
	switch (t) {
		case "focusin":
			return (Yt = mr(Yt, e, t, n, r, l)), !0;
		case "dragenter":
			return (Xt = mr(Xt, e, t, n, r, l)), !0;
		case "mouseover":
			return (Gt = mr(Gt, e, t, n, r, l)), !0;
		case "pointerover":
			var o = l.pointerId;
			return $r.set(o, mr($r.get(o) || null, e, t, n, r, l)), !0;
		case "gotpointercapture":
			return (
				(o = l.pointerId), Vr.set(o, mr(Vr.get(o) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function Yc(e) {
	var t = fn(e.target);
	if (t !== null) {
		var n = _n(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Oc(n)), t !== null)) {
					(e.blockedOn = t),
						Kc(e.priority, function () {
							Wc(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function jl(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(_i = r), n.target.dispatchEvent(r), (_i = null);
		} else return (t = ol(n)), t !== null && Cu(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Ua(e, t, n) {
	jl(e) && n.delete(t);
}
function Wp() {
	(Ti = !1),
		Yt !== null && jl(Yt) && (Yt = null),
		Xt !== null && jl(Xt) && (Xt = null),
		Gt !== null && jl(Gt) && (Gt = null),
		$r.forEach(Ua),
		Vr.forEach(Ua);
}
function vr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Ti ||
			((Ti = !0),
			Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Wp)));
}
function Hr(e) {
	function t(l) {
		return vr(l, e);
	}
	if (0 < Sl.length) {
		vr(Sl[0], e);
		for (var n = 1; n < Sl.length; n++) {
			var r = Sl[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Yt !== null && vr(Yt, e),
			Xt !== null && vr(Xt, e),
			Gt !== null && vr(Gt, e),
			$r.forEach(t),
			Vr.forEach(t),
			n = 0;
		n < Vt.length;
		n++
	)
		(r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
		Yc(n), n.blockedOn === null && Vt.shift();
}
var Yn = zt.ReactCurrentBatchConfig,
	Xl = !0;
function Qp(e, t, n, r) {
	var l = Z,
		o = Yn.transition;
	Yn.transition = null;
	try {
		(Z = 1), _u(e, t, n, r);
	} finally {
		(Z = l), (Yn.transition = o);
	}
}
function Kp(e, t, n, r) {
	var l = Z,
		o = Yn.transition;
	Yn.transition = null;
	try {
		(Z = 4), _u(e, t, n, r);
	} finally {
		(Z = l), (Yn.transition = o);
	}
}
function _u(e, t, n, r) {
	if (Xl) {
		var l = Di(e, t, n, r);
		if (l === null) qo(e, t, r, Gl, n), Ia(e, r);
		else if (Hp(l, e, t, n, r)) r.stopPropagation();
		else if ((Ia(e, r), t & 4 && -1 < Vp.indexOf(e))) {
			for (; l !== null; ) {
				var o = ol(l);
				if (
					(o !== null && Hc(o),
					(o = Di(e, t, n, r)),
					o === null && qo(e, t, r, Gl, n),
					o === l)
				)
					break;
				l = o;
			}
			l !== null && r.stopPropagation();
		} else qo(e, t, r, null, n);
	}
}
var Gl = null;
function Di(e, t, n, r) {
	if (((Gl = null), (e = xu(r)), (e = fn(e)), e !== null))
		if (((t = _n(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Oc(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Gl = e), null;
}
function Xc(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (jp()) {
				case Eu:
					return 1;
				case Ac:
					return 4;
				case Kl:
				case Mp:
					return 16;
				case Bc:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Wt = null,
	Pu = null,
	Ml = null;
function Gc() {
	if (Ml) return Ml;
	var e,
		t = Pu,
		n = t.length,
		r,
		l = "value" in Wt ? Wt.value : Wt.textContent,
		o = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var i = n - e;
	for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
	return (Ml = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ol(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function xl() {
	return !0;
}
function Aa() {
	return !1;
}
function Ze(e) {
	function t(n, r, l, o, i) {
		(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = i),
			(this.currentTarget = null);
		for (var u in e)
			e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null
					? o.defaultPrevented
					: o.returnValue === !1
			)
				? xl
				: Aa),
			(this.isPropagationStopped = Aa),
			this
		);
	}
	return (
		se(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = xl));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = xl));
			},
			persist: function () {},
			isPersistent: xl,
		}),
		t
	);
}
var or = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Ru = Ze(or),
	ll = se({}, or, { view: 0, detail: 0 }),
	Yp = Ze(ll),
	Ho,
	Wo,
	yr,
	wo = se({}, ll, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Lu,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== yr &&
						(yr && e.type === "mousemove"
							? ((Ho = e.screenX - yr.screenX), (Wo = e.screenY - yr.screenY))
							: (Wo = Ho = 0),
						(yr = e)),
					Ho);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Wo;
		},
	}),
	Ba = Ze(wo),
	Xp = se({}, wo, { dataTransfer: 0 }),
	Gp = Ze(Xp),
	Zp = se({}, ll, { relatedTarget: 0 }),
	Qo = Ze(Zp),
	Jp = se({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	qp = Ze(Jp),
	bp = se({}, or, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	eh = Ze(bp),
	th = se({}, or, { data: 0 }),
	$a = Ze(th),
	nh = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	rh = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	lh = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function oh(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = lh[e]) ? !!t[e] : !1;
}
function Lu() {
	return oh;
}
var ih = se({}, ll, {
		key: function (e) {
			if (e.key) {
				var t = nh[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Ol(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
					? rh[e.keyCode] || "Unidentified"
					: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Lu,
		charCode: function (e) {
			return e.type === "keypress" ? Ol(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Ol(e)
				: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
		},
	}),
	uh = Ze(ih),
	ah = se({}, wo, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Va = Ze(ah),
	sh = se({}, ll, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Lu,
	}),
	ch = Ze(sh),
	fh = se({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	dh = Ze(fh),
	ph = se({}, wo, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
					? -e.wheelDeltaY
					: "wheelDelta" in e
						? -e.wheelDelta
						: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	hh = Ze(ph),
	mh = [9, 13, 27, 32],
	Nu = Lt && "CompositionEvent" in window,
	Tr = null;
Lt && "documentMode" in document && (Tr = document.documentMode);
var vh = Lt && "TextEvent" in window && !Tr,
	Zc = Lt && (!Nu || (Tr && 8 < Tr && 11 >= Tr)),
	Ha = " ",
	Wa = !1;
function Jc(e, t) {
	switch (e) {
		case "keyup":
			return mh.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function qc(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function yh(e, t) {
	switch (e) {
		case "compositionend":
			return qc(t);
		case "keypress":
			return t.which !== 32 ? null : ((Wa = !0), Ha);
		case "textInput":
			return (e = t.data), e === Ha && Wa ? null : e;
		default:
			return null;
	}
}
function gh(e, t) {
	if (jn)
		return e === "compositionend" || (!Nu && Jc(e, t))
			? ((e = Gc()), (Ml = Pu = Wt = null), (jn = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Zc && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var wh = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Qa(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!wh[e.type] : t === "textarea";
}
function bc(e, t, n, r) {
	Tc(r),
		(t = Zl(t, "onChange")),
		0 < t.length &&
			((n = new Ru("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Dr = null,
	Wr = null;
function Sh(e) {
	ff(e, 0);
}
function So(e) {
	var t = Fn(e);
	if (kc(t)) return e;
}
function xh(e, t) {
	if (e === "change") return t;
}
var ef = !1;
if (Lt) {
	var Ko;
	if (Lt) {
		var Yo = "oninput" in document;
		if (!Yo) {
			var Ka = document.createElement("div");
			Ka.setAttribute("oninput", "return;"),
				(Yo = typeof Ka.oninput == "function");
		}
		Ko = Yo;
	} else Ko = !1;
	ef = Ko && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
	Dr && (Dr.detachEvent("onpropertychange", tf), (Wr = Dr = null));
}
function tf(e) {
	if (e.propertyName === "value" && So(Wr)) {
		var t = [];
		bc(t, Wr, e, xu(e)), Mc(Sh, t);
	}
}
function Eh(e, t, n) {
	e === "focusin"
		? (Ya(), (Dr = t), (Wr = n), Dr.attachEvent("onpropertychange", tf))
		: e === "focusout" && Ya();
}
function kh(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return So(Wr);
}
function Ch(e, t) {
	if (e === "click") return So(t);
}
function _h(e, t) {
	if (e === "input" || e === "change") return So(t);
}
function Ph(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : Ph;
function Qr(e, t) {
	if (vt(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!pi.call(t, l) || !vt(e[l], t[l])) return !1;
	}
	return !0;
}
function Xa(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Ga(e, t) {
	var n = Xa(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Xa(n);
	}
}
function nf(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
					? nf(e, t.parentNode)
					: "contains" in e
						? e.contains(t)
						: e.compareDocumentPosition
							? !!(e.compareDocumentPosition(t) & 16)
							: !1
		: !1;
}
function rf() {
	for (var e = window, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Hl(e.document);
	}
	return t;
}
function Tu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function Rh(e) {
	var t = rf(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		nf(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Tu(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var l = n.textContent.length,
					o = Math.min(r.start, l);
				(r = r.end === void 0 ? o : Math.min(r.end, l)),
					!e.extend && o > r && ((l = r), (r = o), (o = l)),
					(l = Ga(n, o));
				var i = Ga(n, r);
				l &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Lh = Lt && "documentMode" in document && 11 >= document.documentMode,
	Mn = null,
	zi = null,
	zr = null,
	ji = !1;
function Za(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	ji ||
		Mn == null ||
		Mn !== Hl(r) ||
		((r = Mn),
		"selectionStart" in r && Tu(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
				).getSelection()),
				(r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
				})),
		(zr && Qr(zr, r)) ||
			((zr = r),
			(r = Zl(zi, "onSelect")),
			0 < r.length &&
				((t = new Ru("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Mn))));
}
function El(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var On = {
		animationend: El("Animation", "AnimationEnd"),
		animationiteration: El("Animation", "AnimationIteration"),
		animationstart: El("Animation", "AnimationStart"),
		transitionend: El("Transition", "TransitionEnd"),
	},
	Xo = {},
	lf = {};
Lt &&
	((lf = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete On.animationend.animation,
		delete On.animationiteration.animation,
		delete On.animationstart.animation),
	"TransitionEvent" in window || delete On.transitionend.transition);
function xo(e) {
	if (Xo[e]) return Xo[e];
	if (!On[e]) return e;
	var t = On[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in lf) return (Xo[e] = t[n]);
	return e;
}
var of = xo("animationend"),
	uf = xo("animationiteration"),
	af = xo("animationstart"),
	sf = xo("transitionend"),
	cf = new Map(),
	Ja =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" ",
		);
function rn(e, t) {
	cf.set(e, t), Cn(t, [e]);
}
for (var Go = 0; Go < Ja.length; Go++) {
	var Zo = Ja[Go],
		Nh = Zo.toLowerCase(),
		Th = Zo[0].toUpperCase() + Zo.slice(1);
	rn(Nh, "on" + Th);
}
rn(of, "onAnimationEnd");
rn(uf, "onAnimationIteration");
rn(af, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(sf, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Cn(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" ",
	),
);
Cn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" ",
	),
);
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Cn(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Cn(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Rr =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" ",
		),
	Dh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function qa(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), Np(r, t, void 0, e), (e.currentTarget = null);
}
function ff(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var i = r.length - 1; 0 <= i; i--) {
					var u = r[i],
						a = u.instance,
						s = u.currentTarget;
					if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
					qa(l, u, s), (o = a);
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((u = r[i]),
						(a = u.instance),
						(s = u.currentTarget),
						(u = u.listener),
						a !== o && l.isPropagationStopped())
					)
						break e;
					qa(l, u, s), (o = a);
				}
		}
	}
	if (Ql) throw ((e = Li), (Ql = !1), (Li = null), e);
}
function ee(e, t) {
	var n = t[Ui];
	n === void 0 && (n = t[Ui] = new Set());
	var r = e + "__bubble";
	n.has(r) || (df(t, e, 2, !1), n.add(r));
}
function Jo(e, t, n) {
	var r = 0;
	t && (r |= 4), df(n, e, r, t);
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
	if (!e[kl]) {
		(e[kl] = !0),
			gc.forEach(function (n) {
				n !== "selectionchange" && (Dh.has(n) || Jo(n, !1, e), Jo(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[kl] || ((t[kl] = !0), Jo("selectionchange", !1, t));
	}
}
function df(e, t, n, r) {
	switch (Xc(t)) {
		case 1:
			var l = Qp;
			break;
		case 4:
			l = Kp;
			break;
		default:
			l = _u;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!Ri ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(l = !0),
		r
			? l !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: l })
				: e.addEventListener(t, n, !0)
			: l !== void 0
				? e.addEventListener(t, n, { passive: l })
				: e.addEventListener(t, n, !1);
}
function qo(e, t, n, r, l) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var i = r.tag;
			if (i === 3 || i === 4) {
				var u = r.stateNode.containerInfo;
				if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var a = i.tag;
						if (
							(a === 3 || a === 4) &&
							((a = i.stateNode.containerInfo),
							a === l || (a.nodeType === 8 && a.parentNode === l))
						)
							return;
						i = i.return;
					}
				for (; u !== null; ) {
					if (((i = fn(u)), i === null)) return;
					if (((a = i.tag), a === 5 || a === 6)) {
						r = o = i;
						continue e;
					}
					u = u.parentNode;
				}
			}
			r = r.return;
		}
	Mc(function () {
		var s = o,
			f = xu(n),
			d = [];
		e: {
			var p = cf.get(e);
			if (p !== void 0) {
				var x = Ru,
					S = e;
				switch (e) {
					case "keypress":
						if (Ol(n) === 0) break e;
					case "keydown":
					case "keyup":
						x = uh;
						break;
					case "focusin":
						(S = "focus"), (x = Qo);
						break;
					case "focusout":
						(S = "blur"), (x = Qo);
						break;
					case "beforeblur":
					case "afterblur":
						x = Qo;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						x = Ba;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						x = Gp;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						x = ch;
						break;
					case of:
					case uf:
					case af:
						x = qp;
						break;
					case sf:
						x = dh;
						break;
					case "scroll":
						x = Yp;
						break;
					case "wheel":
						x = hh;
						break;
					case "copy":
					case "cut":
					case "paste":
						x = eh;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						x = Va;
				}
				var w = (t & 4) !== 0,
					N = !w && e === "scroll",
					h = w ? (p !== null ? p + "Capture" : null) : p;
				w = [];
				for (var c = s, v; c !== null; ) {
					v = c;
					var k = v.stateNode;
					if (
						(v.tag === 5 &&
							k !== null &&
							((v = k),
							h !== null && ((k = Br(c, h)), k != null && w.push(Yr(c, k, v)))),
						N)
					)
						break;
					c = c.return;
				}
				0 < w.length &&
					((p = new x(p, S, null, n, f)), d.push({ event: p, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((p = e === "mouseover" || e === "pointerover"),
					(x = e === "mouseout" || e === "pointerout"),
					p &&
						n !== _i &&
						(S = n.relatedTarget || n.fromElement) &&
						(fn(S) || S[Nt]))
				)
					break e;
				if (
					(x || p) &&
					((p =
						f.window === f
							? f
							: (p = f.ownerDocument)
								? p.defaultView || p.parentWindow
								: window),
					x
						? ((S = n.relatedTarget || n.toElement),
							(x = s),
							(S = S ? fn(S) : null),
							S !== null &&
								((N = _n(S)), S !== N || (S.tag !== 5 && S.tag !== 6)) &&
								(S = null))
						: ((x = null), (S = s)),
					x !== S)
				) {
					if (
						((w = Ba),
						(k = "onMouseLeave"),
						(h = "onMouseEnter"),
						(c = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((w = Va),
							(k = "onPointerLeave"),
							(h = "onPointerEnter"),
							(c = "pointer")),
						(N = x == null ? p : Fn(x)),
						(v = S == null ? p : Fn(S)),
						(p = new w(k, c + "leave", x, n, f)),
						(p.target = N),
						(p.relatedTarget = v),
						(k = null),
						fn(f) === s &&
							((w = new w(h, c + "enter", S, n, f)),
							(w.target = v),
							(w.relatedTarget = N),
							(k = w)),
						(N = k),
						x && S)
					)
						t: {
							for (w = x, h = S, c = 0, v = w; v; v = Nn(v)) c++;
							for (v = 0, k = h; k; k = Nn(k)) v++;
							for (; 0 < c - v; ) (w = Nn(w)), c--;
							for (; 0 < v - c; ) (h = Nn(h)), v--;
							for (; c--; ) {
								if (w === h || (h !== null && w === h.alternate)) break t;
								(w = Nn(w)), (h = Nn(h));
							}
							w = null;
						}
					else w = null;
					x !== null && ba(d, p, x, w, !1),
						S !== null && N !== null && ba(d, N, S, w, !0);
				}
			}
			e: {
				if (
					((p = s ? Fn(s) : window),
					(x = p.nodeName && p.nodeName.toLowerCase()),
					x === "select" || (x === "input" && p.type === "file"))
				)
					var R = xh;
				else if (Qa(p))
					if (ef) R = _h;
					else {
						R = kh;
						var D = Eh;
					}
				else
					(x = p.nodeName) &&
						x.toLowerCase() === "input" &&
						(p.type === "checkbox" || p.type === "radio") &&
						(R = Ch);
				if (R && (R = R(e, s))) {
					bc(d, R, n, f);
					break e;
				}
				D && D(e, p, s),
					e === "focusout" &&
						(D = p._wrapperState) &&
						D.controlled &&
						p.type === "number" &&
						Si(p, "number", p.value);
			}
			switch (((D = s ? Fn(s) : window), e)) {
				case "focusin":
					(Qa(D) || D.contentEditable === "true") &&
						((Mn = D), (zi = s), (zr = null));
					break;
				case "focusout":
					zr = zi = Mn = null;
					break;
				case "mousedown":
					ji = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(ji = !1), Za(d, n, f);
					break;
				case "selectionchange":
					if (Lh) break;
				case "keydown":
				case "keyup":
					Za(d, n, f);
			}
			var m;
			if (Nu)
				e: {
					switch (e) {
						case "compositionstart":
							var L = "onCompositionStart";
							break e;
						case "compositionend":
							L = "onCompositionEnd";
							break e;
						case "compositionupdate":
							L = "onCompositionUpdate";
							break e;
					}
					L = void 0;
				}
			else
				jn
					? Jc(e, n) && (L = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
			L &&
				(Zc &&
					n.locale !== "ko" &&
					(jn || L !== "onCompositionStart"
						? L === "onCompositionEnd" && jn && (m = Gc())
						: ((Wt = f),
							(Pu = "value" in Wt ? Wt.value : Wt.textContent),
							(jn = !0))),
				(D = Zl(s, L)),
				0 < D.length &&
					((L = new $a(L, e, null, n, f)),
					d.push({ event: L, listeners: D }),
					m ? (L.data = m) : ((m = qc(n)), m !== null && (L.data = m)))),
				(m = vh ? yh(e, n) : gh(e, n)) &&
					((s = Zl(s, "onBeforeInput")),
					0 < s.length &&
						((f = new $a("onBeforeInput", "beforeinput", null, n, f)),
						d.push({ event: f, listeners: s }),
						(f.data = m)));
		}
		ff(d, t);
	});
}
function Yr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Zl(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var l = e,
			o = l.stateNode;
		l.tag === 5 &&
			o !== null &&
			((l = o),
			(o = Br(e, n)),
			o != null && r.unshift(Yr(e, o, l)),
			(o = Br(e, t)),
			o != null && r.push(Yr(e, o, l))),
			(e = e.return);
	}
	return r;
}
function Nn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function ba(e, t, n, r, l) {
	for (var o = t._reactName, i = []; n !== null && n !== r; ) {
		var u = n,
			a = u.alternate,
			s = u.stateNode;
		if (a !== null && a === r) break;
		u.tag === 5 &&
			s !== null &&
			((u = s),
			l
				? ((a = Br(n, o)), a != null && i.unshift(Yr(n, a, u)))
				: l || ((a = Br(n, o)), a != null && i.push(Yr(n, a, u)))),
			(n = n.return);
	}
	i.length !== 0 && e.push({ event: t, listeners: i });
}
var zh = /\r\n?/g,
	jh = /\u0000|\uFFFD/g;
function es(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			zh,
			`
`,
		)
		.replace(jh, "");
}
function Cl(e, t, n) {
	if (((t = es(t)), es(e) !== t && n)) throw Error(C(425));
}
function Jl() {}
var Mi = null,
	Oi = null;
function Fi(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Ii = typeof setTimeout == "function" ? setTimeout : void 0,
	Mh = typeof clearTimeout == "function" ? clearTimeout : void 0,
	ts = typeof Promise == "function" ? Promise : void 0,
	Oh =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof ts < "u"
				? function (e) {
						return ts.resolve(null).then(e).catch(Fh);
					}
				: Ii;
function Fh(e) {
	setTimeout(function () {
		throw e;
	});
}
function bo(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(l), Hr(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = l;
	} while (n);
	Hr(t);
}
function Zt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function ns(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var ir = Math.random().toString(36).slice(2),
	St = "__reactFiber$" + ir,
	Xr = "__reactProps$" + ir,
	Nt = "__reactContainer$" + ir,
	Ui = "__reactEvents$" + ir,
	Ih = "__reactListeners$" + ir,
	Uh = "__reactHandles$" + ir;
function fn(e) {
	var t = e[St];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Nt] || n[St])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = ns(e); e !== null; ) {
					if ((n = e[St])) return n;
					e = ns(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ol(e) {
	return (
		(e = e[St] || e[Nt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Fn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(C(33));
}
function Eo(e) {
	return e[Xr] || null;
}
var Ai = [],
	In = -1;
function ln(e) {
	return { current: e };
}
function te(e) {
	0 > In || ((e.current = Ai[In]), (Ai[In] = null), In--);
}
function b(e, t) {
	In++, (Ai[In] = e.current), (e.current = t);
}
var nn = {},
	Te = ln(nn),
	Ae = ln(!1),
	wn = nn;
function Jn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return nn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		o;
	for (o in n) l[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function Be(e) {
	return (e = e.childContextTypes), e != null;
}
function ql() {
	te(Ae), te(Te);
}
function rs(e, t, n) {
	if (Te.current !== nn) throw Error(C(168));
	b(Te, t), b(Ae, n);
}
function pf(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(C(108, Ep(e) || "Unknown", l));
	return se({}, n, r);
}
function bl(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
		(wn = Te.current),
		b(Te, e),
		b(Ae, Ae.current),
		!0
	);
}
function ls(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(C(169));
	n
		? ((e = pf(e, t, wn)),
			(r.__reactInternalMemoizedMergedChildContext = e),
			te(Ae),
			te(Te),
			b(Te, e))
		: te(Ae),
		b(Ae, n);
}
var Ct = null,
	ko = !1,
	ei = !1;
function hf(e) {
	Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Ah(e) {
	(ko = !0), hf(e);
}
function on() {
	if (!ei && Ct !== null) {
		ei = !0;
		var e = 0,
			t = Z;
		try {
			var n = Ct;
			for (Z = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Ct = null), (ko = !1);
		} catch (l) {
			throw (Ct !== null && (Ct = Ct.slice(e + 1)), Uc(Eu, on), l);
		} finally {
			(Z = t), (ei = !1);
		}
	}
	return null;
}
var Un = [],
	An = 0,
	eo = null,
	to = 0,
	et = [],
	tt = 0,
	Sn = null,
	_t = 1,
	Pt = "";
function sn(e, t) {
	(Un[An++] = to), (Un[An++] = eo), (eo = e), (to = t);
}
function mf(e, t, n) {
	(et[tt++] = _t), (et[tt++] = Pt), (et[tt++] = Sn), (Sn = e);
	var r = _t;
	e = Pt;
	var l = 32 - ht(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var o = 32 - ht(t) + l;
	if (30 < o) {
		var i = l - (l % 5);
		(o = (r & ((1 << i) - 1)).toString(32)),
			(r >>= i),
			(l -= i),
			(_t = (1 << (32 - ht(t) + l)) | (n << l) | r),
			(Pt = o + e);
	} else (_t = (1 << o) | (n << l) | r), (Pt = e);
}
function Du(e) {
	e.return !== null && (sn(e, 1), mf(e, 1, 0));
}
function zu(e) {
	for (; e === eo; )
		(eo = Un[--An]), (Un[An] = null), (to = Un[--An]), (Un[An] = null);
	for (; e === Sn; )
		(Sn = et[--tt]),
			(et[tt] = null),
			(Pt = et[--tt]),
			(et[tt] = null),
			(_t = et[--tt]),
			(et[tt] = null);
}
var Ye = null,
	Ke = null,
	le = !1,
	pt = null;
function vf(e, t) {
	var n = rt(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function os(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Ye = e), (Ke = Zt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Sn !== null ? { id: _t, overflow: Pt } : null),
						(e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
						}),
						(n = rt(18, null, null, 0)),
						(n.stateNode = t),
						(n.return = e),
						(e.child = n),
						(Ye = e),
						(Ke = null),
						!0)
					: !1
			);
		default:
			return !1;
	}
}
function Bi(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $i(e) {
	if (le) {
		var t = Ke;
		if (t) {
			var n = t;
			if (!os(e, t)) {
				if (Bi(e)) throw Error(C(418));
				t = Zt(n.nextSibling);
				var r = Ye;
				t && os(e, t)
					? vf(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
			}
		} else {
			if (Bi(e)) throw Error(C(418));
			(e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
		}
	}
}
function is(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Ye = e;
}
function _l(e) {
	if (e !== Ye) return !1;
	if (!le) return is(e), (le = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !Fi(e.type, e.memoizedProps))),
		t && (t = Ke))
	) {
		if (Bi(e)) throw (yf(), Error(C(418)));
		for (; t; ) vf(e, t), (t = Zt(t.nextSibling));
	}
	if ((is(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(C(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Ke = Zt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Ke = null;
		}
	} else Ke = Ye ? Zt(e.stateNode.nextSibling) : null;
	return !0;
}
function yf() {
	for (var e = Ke; e; ) e = Zt(e.nextSibling);
}
function qn() {
	(Ke = Ye = null), (le = !1);
}
function ju(e) {
	pt === null ? (pt = [e]) : pt.push(e);
}
var Bh = zt.ReactCurrentBatchConfig;
function gr(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(C(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(C(147, e));
			var l = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (i) {
						var u = l.refs;
						i === null ? delete u[o] : (u[o] = i);
					}),
					(t._stringRef = o),
					t);
		}
		if (typeof e != "string") throw Error(C(284));
		if (!n._owner) throw Error(C(290, e));
	}
	return e;
}
function Pl(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			C(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e,
			),
		))
	);
}
function us(e) {
	var t = e._init;
	return t(e._payload);
}
function gf(e) {
	function t(h, c) {
		if (e) {
			var v = h.deletions;
			v === null ? ((h.deletions = [c]), (h.flags |= 16)) : v.push(c);
		}
	}
	function n(h, c) {
		if (!e) return null;
		for (; c !== null; ) t(h, c), (c = c.sibling);
		return null;
	}
	function r(h, c) {
		for (h = new Map(); c !== null; )
			c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
		return h;
	}
	function l(h, c) {
		return (h = en(h, c)), (h.index = 0), (h.sibling = null), h;
	}
	function o(h, c, v) {
		return (
			(h.index = v),
			e
				? ((v = h.alternate),
					v !== null
						? ((v = v.index), v < c ? ((h.flags |= 2), c) : v)
						: ((h.flags |= 2), c))
				: ((h.flags |= 1048576), c)
		);
	}
	function i(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function u(h, c, v, k) {
		return c === null || c.tag !== 6
			? ((c = ui(v, h.mode, k)), (c.return = h), c)
			: ((c = l(c, v)), (c.return = h), c);
	}
	function a(h, c, v, k) {
		var R = v.type;
		return R === zn
			? f(h, c, v.props.children, k, v.key)
			: c !== null &&
					(c.elementType === R ||
						(typeof R == "object" &&
							R !== null &&
							R.$$typeof === Bt &&
							us(R) === c.type))
				? ((k = l(c, v.props)), (k.ref = gr(h, c, v)), (k.return = h), k)
				: ((k = Vl(v.type, v.key, v.props, null, h.mode, k)),
					(k.ref = gr(h, c, v)),
					(k.return = h),
					k);
	}
	function s(h, c, v, k) {
		return c === null ||
			c.tag !== 4 ||
			c.stateNode.containerInfo !== v.containerInfo ||
			c.stateNode.implementation !== v.implementation
			? ((c = ai(v, h.mode, k)), (c.return = h), c)
			: ((c = l(c, v.children || [])), (c.return = h), c);
	}
	function f(h, c, v, k, R) {
		return c === null || c.tag !== 7
			? ((c = yn(v, h.mode, k, R)), (c.return = h), c)
			: ((c = l(c, v)), (c.return = h), c);
	}
	function d(h, c, v) {
		if ((typeof c == "string" && c !== "") || typeof c == "number")
			return (c = ui("" + c, h.mode, v)), (c.return = h), c;
		if (typeof c == "object" && c !== null) {
			switch (c.$$typeof) {
				case ml:
					return (
						(v = Vl(c.type, c.key, c.props, null, h.mode, v)),
						(v.ref = gr(h, null, c)),
						(v.return = h),
						v
					);
				case Dn:
					return (c = ai(c, h.mode, v)), (c.return = h), c;
				case Bt:
					var k = c._init;
					return d(h, k(c._payload), v);
			}
			if (_r(c) || pr(c))
				return (c = yn(c, h.mode, v, null)), (c.return = h), c;
			Pl(h, c);
		}
		return null;
	}
	function p(h, c, v, k) {
		var R = c !== null ? c.key : null;
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return R !== null ? null : u(h, c, "" + v, k);
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case ml:
					return v.key === R ? a(h, c, v, k) : null;
				case Dn:
					return v.key === R ? s(h, c, v, k) : null;
				case Bt:
					return (R = v._init), p(h, c, R(v._payload), k);
			}
			if (_r(v) || pr(v)) return R !== null ? null : f(h, c, v, k, null);
			Pl(h, v);
		}
		return null;
	}
	function x(h, c, v, k, R) {
		if ((typeof k == "string" && k !== "") || typeof k == "number")
			return (h = h.get(v) || null), u(c, h, "" + k, R);
		if (typeof k == "object" && k !== null) {
			switch (k.$$typeof) {
				case ml:
					return (h = h.get(k.key === null ? v : k.key) || null), a(c, h, k, R);
				case Dn:
					return (h = h.get(k.key === null ? v : k.key) || null), s(c, h, k, R);
				case Bt:
					var D = k._init;
					return x(h, c, v, D(k._payload), R);
			}
			if (_r(k) || pr(k)) return (h = h.get(v) || null), f(c, h, k, R, null);
			Pl(c, k);
		}
		return null;
	}
	function S(h, c, v, k) {
		for (
			var R = null, D = null, m = c, L = (c = 0), F = null;
			m !== null && L < v.length;
			L++
		) {
			m.index > L ? ((F = m), (m = null)) : (F = m.sibling);
			var M = p(h, m, v[L], k);
			if (M === null) {
				m === null && (m = F);
				break;
			}
			e && m && M.alternate === null && t(h, m),
				(c = o(M, c, L)),
				D === null ? (R = M) : (D.sibling = M),
				(D = M),
				(m = F);
		}
		if (L === v.length) return n(h, m), le && sn(h, L), R;
		if (m === null) {
			for (; L < v.length; L++)
				(m = d(h, v[L], k)),
					m !== null &&
						((c = o(m, c, L)), D === null ? (R = m) : (D.sibling = m), (D = m));
			return le && sn(h, L), R;
		}
		for (m = r(h, m); L < v.length; L++)
			(F = x(m, h, L, v[L], k)),
				F !== null &&
					(e && F.alternate !== null && m.delete(F.key === null ? L : F.key),
					(c = o(F, c, L)),
					D === null ? (R = F) : (D.sibling = F),
					(D = F));
		return (
			e &&
				m.forEach(function (K) {
					return t(h, K);
				}),
			le && sn(h, L),
			R
		);
	}
	function w(h, c, v, k) {
		var R = pr(v);
		if (typeof R != "function") throw Error(C(150));
		if (((v = R.call(v)), v == null)) throw Error(C(151));
		for (
			var D = (R = null), m = c, L = (c = 0), F = null, M = v.next();
			m !== null && !M.done;
			L++, M = v.next()
		) {
			m.index > L ? ((F = m), (m = null)) : (F = m.sibling);
			var K = p(h, m, M.value, k);
			if (K === null) {
				m === null && (m = F);
				break;
			}
			e && m && K.alternate === null && t(h, m),
				(c = o(K, c, L)),
				D === null ? (R = K) : (D.sibling = K),
				(D = K),
				(m = F);
		}
		if (M.done) return n(h, m), le && sn(h, L), R;
		if (m === null) {
			for (; !M.done; L++, M = v.next())
				(M = d(h, M.value, k)),
					M !== null &&
						((c = o(M, c, L)), D === null ? (R = M) : (D.sibling = M), (D = M));
			return le && sn(h, L), R;
		}
		for (m = r(h, m); !M.done; L++, M = v.next())
			(M = x(m, h, L, M.value, k)),
				M !== null &&
					(e && M.alternate !== null && m.delete(M.key === null ? L : M.key),
					(c = o(M, c, L)),
					D === null ? (R = M) : (D.sibling = M),
					(D = M));
		return (
			e &&
				m.forEach(function (fe) {
					return t(h, fe);
				}),
			le && sn(h, L),
			R
		);
	}
	function N(h, c, v, k) {
		if (
			(typeof v == "object" &&
				v !== null &&
				v.type === zn &&
				v.key === null &&
				(v = v.props.children),
			typeof v == "object" && v !== null)
		) {
			switch (v.$$typeof) {
				case ml:
					e: {
						for (var R = v.key, D = c; D !== null; ) {
							if (D.key === R) {
								if (((R = v.type), R === zn)) {
									if (D.tag === 7) {
										n(h, D.sibling),
											(c = l(D, v.props.children)),
											(c.return = h),
											(h = c);
										break e;
									}
								} else if (
									D.elementType === R ||
									(typeof R == "object" &&
										R !== null &&
										R.$$typeof === Bt &&
										us(R) === D.type)
								) {
									n(h, D.sibling),
										(c = l(D, v.props)),
										(c.ref = gr(h, D, v)),
										(c.return = h),
										(h = c);
									break e;
								}
								n(h, D);
								break;
							} else t(h, D);
							D = D.sibling;
						}
						v.type === zn
							? ((c = yn(v.props.children, h.mode, k, v.key)),
								(c.return = h),
								(h = c))
							: ((k = Vl(v.type, v.key, v.props, null, h.mode, k)),
								(k.ref = gr(h, c, v)),
								(k.return = h),
								(h = k));
					}
					return i(h);
				case Dn:
					e: {
						for (D = v.key; c !== null; ) {
							if (c.key === D)
								if (
									c.tag === 4 &&
									c.stateNode.containerInfo === v.containerInfo &&
									c.stateNode.implementation === v.implementation
								) {
									n(h, c.sibling),
										(c = l(c, v.children || [])),
										(c.return = h),
										(h = c);
									break e;
								} else {
									n(h, c);
									break;
								}
							else t(h, c);
							c = c.sibling;
						}
						(c = ai(v, h.mode, k)), (c.return = h), (h = c);
					}
					return i(h);
				case Bt:
					return (D = v._init), N(h, c, D(v._payload), k);
			}
			if (_r(v)) return S(h, c, v, k);
			if (pr(v)) return w(h, c, v, k);
			Pl(h, v);
		}
		return (typeof v == "string" && v !== "") || typeof v == "number"
			? ((v = "" + v),
				c !== null && c.tag === 6
					? (n(h, c.sibling), (c = l(c, v)), (c.return = h), (h = c))
					: (n(h, c), (c = ui(v, h.mode, k)), (c.return = h), (h = c)),
				i(h))
			: n(h, c);
	}
	return N;
}
var bn = gf(!0),
	wf = gf(!1),
	no = ln(null),
	ro = null,
	Bn = null,
	Mu = null;
function Ou() {
	Mu = Bn = ro = null;
}
function Fu(e) {
	var t = no.current;
	te(no), (e._currentValue = t);
}
function Vi(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function Xn(e, t) {
	(ro = e),
		(Mu = Bn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ot(e) {
	var t = e._currentValue;
	if (Mu !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
			if (ro === null) throw Error(C(308));
			(Bn = e), (ro.dependencies = { lanes: 0, firstContext: e });
		} else Bn = Bn.next = e;
	return t;
}
var dn = null;
function Iu(e) {
	dn === null ? (dn = [e]) : dn.push(e);
}
function Sf(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), Iu(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		Tt(e, r)
	);
}
function Tt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function Uu(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function xf(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Rt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Jt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), G & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			Tt(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), Iu(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Tt(e, n)
	);
}
function Fl(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ku(e, n);
	}
}
function as(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
			} while (n !== null);
			o === null ? (l = o = t) : (o = o.next = t);
		} else l = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function lo(e, t, n, r) {
	var l = e.updateQueue;
	$t = !1;
	var o = l.firstBaseUpdate,
		i = l.lastBaseUpdate,
		u = l.shared.pending;
	if (u !== null) {
		l.shared.pending = null;
		var a = u,
			s = a.next;
		(a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
		var f = e.alternate;
		f !== null &&
			((f = f.updateQueue),
			(u = f.lastBaseUpdate),
			u !== i &&
				(u === null ? (f.firstBaseUpdate = s) : (u.next = s),
				(f.lastBaseUpdate = a)));
	}
	if (o !== null) {
		var d = l.baseState;
		(i = 0), (f = s = a = null), (u = o);
		do {
			var p = u.lane,
				x = u.eventTime;
			if ((r & p) === p) {
				f !== null &&
					(f = f.next =
						{
							eventTime: x,
							lane: 0,
							tag: u.tag,
							payload: u.payload,
							callback: u.callback,
							next: null,
						});
				e: {
					var S = e,
						w = u;
					switch (((p = t), (x = n), w.tag)) {
						case 1:
							if (((S = w.payload), typeof S == "function")) {
								d = S.call(x, d, p);
								break e;
							}
							d = S;
							break e;
						case 3:
							S.flags = (S.flags & -65537) | 128;
						case 0:
							if (
								((S = w.payload),
								(p = typeof S == "function" ? S.call(x, d, p) : S),
								p == null)
							)
								break e;
							d = se({}, d, p);
							break e;
						case 2:
							$t = !0;
					}
				}
				u.callback !== null &&
					u.lane !== 0 &&
					((e.flags |= 64),
					(p = l.effects),
					p === null ? (l.effects = [u]) : p.push(u));
			} else
				(x = {
					eventTime: x,
					lane: p,
					tag: u.tag,
					payload: u.payload,
					callback: u.callback,
					next: null,
				}),
					f === null ? ((s = f = x), (a = d)) : (f = f.next = x),
					(i |= p);
			if (((u = u.next), u === null)) {
				if (((u = l.shared.pending), u === null)) break;
				(p = u),
					(u = p.next),
					(p.next = null),
					(l.lastBaseUpdate = p),
					(l.shared.pending = null);
			}
		} while (!0);
		if (
			(f === null && (a = d),
			(l.baseState = a),
			(l.firstBaseUpdate = s),
			(l.lastBaseUpdate = f),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (i |= l.lane), (l = l.next);
			while (l !== t);
		} else o === null && (l.shared.lanes = 0);
		(En |= i), (e.lanes = i), (e.memoizedState = d);
	}
}
function ss(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != "function"))
					throw Error(C(191, l));
				l.call(r);
			}
		}
}
var il = {},
	Et = ln(il),
	Gr = ln(il),
	Zr = ln(il);
function pn(e) {
	if (e === il) throw Error(C(174));
	return e;
}
function Au(e, t) {
	switch ((b(Zr, t), b(Gr, e), b(Et, il), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Ei(t, e));
	}
	te(Et), b(Et, t);
}
function er() {
	te(Et), te(Gr), te(Zr);
}
function Ef(e) {
	pn(Zr.current);
	var t = pn(Et.current),
		n = Ei(t, e.type);
	t !== n && (b(Gr, e), b(Et, n));
}
function Bu(e) {
	Gr.current === e && (te(Et), te(Gr));
}
var ue = ln(0);
function oo(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var ti = [];
function $u() {
	for (var e = 0; e < ti.length; e++)
		ti[e]._workInProgressVersionPrimary = null;
	ti.length = 0;
}
var Il = zt.ReactCurrentDispatcher,
	ni = zt.ReactCurrentBatchConfig,
	xn = 0,
	ae = null,
	me = null,
	ge = null,
	io = !1,
	jr = !1,
	Jr = 0,
	$h = 0;
function Re() {
	throw Error(C(321));
}
function Vu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!vt(e[n], t[n])) return !1;
	return !0;
}
function Hu(e, t, n, r, l, o) {
	if (
		((xn = o),
		(ae = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Il.current = e === null || e.memoizedState === null ? Qh : Kh),
		(e = n(r, l)),
		jr)
	) {
		o = 0;
		do {
			if (((jr = !1), (Jr = 0), 25 <= o)) throw Error(C(301));
			(o += 1),
				(ge = me = null),
				(t.updateQueue = null),
				(Il.current = Yh),
				(e = n(r, l));
		} while (jr);
	}
	if (
		((Il.current = uo),
		(t = me !== null && me.next !== null),
		(xn = 0),
		(ge = me = ae = null),
		(io = !1),
		t)
	)
		throw Error(C(300));
	return e;
}
function Wu() {
	var e = Jr !== 0;
	return (Jr = 0), e;
}
function wt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return ge === null ? (ae.memoizedState = ge = e) : (ge = ge.next = e), ge;
}
function it() {
	if (me === null) {
		var e = ae.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = me.next;
	var t = ge === null ? ae.memoizedState : ge.next;
	if (t !== null) (ge = t), (me = e);
	else {
		if (e === null) throw Error(C(310));
		(me = e),
			(e = {
				memoizedState: me.memoizedState,
				baseState: me.baseState,
				baseQueue: me.baseQueue,
				queue: me.queue,
				next: null,
			}),
			ge === null ? (ae.memoizedState = ge = e) : (ge = ge.next = e);
	}
	return ge;
}
function qr(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function ri(e) {
	var t = it(),
		n = t.queue;
	if (n === null) throw Error(C(311));
	n.lastRenderedReducer = e;
	var r = me,
		l = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (l !== null) {
			var i = l.next;
			(l.next = o.next), (o.next = i);
		}
		(r.baseQueue = l = o), (n.pending = null);
	}
	if (l !== null) {
		(o = l.next), (r = r.baseState);
		var u = (i = null),
			a = null,
			s = o;
		do {
			var f = s.lane;
			if ((xn & f) === f)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: s.action,
							hasEagerState: s.hasEagerState,
							eagerState: s.eagerState,
							next: null,
						}),
					(r = s.hasEagerState ? s.eagerState : e(r, s.action));
			else {
				var d = {
					lane: f,
					action: s.action,
					hasEagerState: s.hasEagerState,
					eagerState: s.eagerState,
					next: null,
				};
				a === null ? ((u = a = d), (i = r)) : (a = a.next = d),
					(ae.lanes |= f),
					(En |= f);
			}
			s = s.next;
		} while (s !== null && s !== o);
		a === null ? (i = r) : (a.next = u),
			vt(r, t.memoizedState) || (Ue = !0),
			(t.memoizedState = r),
			(t.baseState = i),
			(t.baseQueue = a),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (o = l.lane), (ae.lanes |= o), (En |= o), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function li(e) {
	var t = it(),
		n = t.queue;
	if (n === null) throw Error(C(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		o = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var i = (l = l.next);
		do (o = e(o, i.action)), (i = i.next);
		while (i !== l);
		vt(o, t.memoizedState) || (Ue = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function kf() {}
function Cf(e, t) {
	var n = ae,
		r = it(),
		l = t(),
		o = !vt(r.memoizedState, l);
	if (
		(o && ((r.memoizedState = l), (Ue = !0)),
		(r = r.queue),
		Qu(Rf.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (ge !== null && ge.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			br(9, Pf.bind(null, n, r, l, t), void 0, null),
			we === null)
		)
			throw Error(C(349));
		xn & 30 || _f(n, t, l);
	}
	return l;
}
function _f(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ae.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(ae.updateQueue = t),
				(t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pf(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Lf(t) && Nf(e);
}
function Rf(e, t, n) {
	return n(function () {
		Lf(t) && Nf(e);
	});
}
function Lf(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !vt(e, n);
	} catch {
		return !0;
	}
}
function Nf(e) {
	var t = Tt(e, 1);
	t !== null && mt(t, e, 1, -1);
}
function cs(e) {
	var t = wt();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: qr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Wh.bind(null, ae, e)),
		[t.memoizedState, e]
	);
}
function br(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = ae.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(ae.updateQueue = t),
				(t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
				n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Tf() {
	return it().memoizedState;
}
function Ul(e, t, n, r) {
	var l = wt();
	(ae.flags |= e),
		(l.memoizedState = br(1 | t, n, void 0, r === void 0 ? null : r));
}
function Co(e, t, n, r) {
	var l = it();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (me !== null) {
		var i = me.memoizedState;
		if (((o = i.destroy), r !== null && Vu(r, i.deps))) {
			l.memoizedState = br(t, n, o, r);
			return;
		}
	}
	(ae.flags |= e), (l.memoizedState = br(1 | t, n, o, r));
}
function fs(e, t) {
	return Ul(8390656, 8, e, t);
}
function Qu(e, t) {
	return Co(2048, 8, e, t);
}
function Df(e, t) {
	return Co(4, 2, e, t);
}
function zf(e, t) {
	return Co(4, 4, e, t);
}
function jf(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Mf(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Co(4, 4, jf.bind(null, t, e), n)
	);
}
function Ku() {}
function Of(e, t) {
	var n = it();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Vu(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Ff(e, t) {
	var n = it();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Vu(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function If(e, t, n) {
	return xn & 21
		? (vt(n, t) || ((n = $c()), (ae.lanes |= n), (En |= n), (e.baseState = !0)),
			t)
		: (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function Vh(e, t) {
	var n = Z;
	(Z = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = ni.transition;
	ni.transition = {};
	try {
		e(!1), t();
	} finally {
		(Z = n), (ni.transition = r);
	}
}
function Uf() {
	return it().memoizedState;
}
function Hh(e, t, n) {
	var r = bt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Af(e))
	)
		Bf(t, n);
	else if (((n = Sf(e, t, n, r)), n !== null)) {
		var l = Me();
		mt(n, e, r, l), $f(n, t, r);
	}
}
function Wh(e, t, n) {
	var r = bt(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Af(e)) Bf(t, l);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var i = t.lastRenderedState,
					u = o(i, n);
				if (((l.hasEagerState = !0), (l.eagerState = u), vt(u, i))) {
					var a = t.interleaved;
					a === null
						? ((l.next = l), Iu(t))
						: ((l.next = a.next), (a.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = Sf(e, t, l, r)),
			n !== null && ((l = Me()), mt(n, e, r, l), $f(n, t, r));
	}
}
function Af(e) {
	var t = e.alternate;
	return e === ae || (t !== null && t === ae);
}
function Bf(e, t) {
	jr = io = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function $f(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ku(e, n);
	}
}
var uo = {
		readContext: ot,
		useCallback: Re,
		useContext: Re,
		useEffect: Re,
		useImperativeHandle: Re,
		useInsertionEffect: Re,
		useLayoutEffect: Re,
		useMemo: Re,
		useReducer: Re,
		useRef: Re,
		useState: Re,
		useDebugValue: Re,
		useDeferredValue: Re,
		useTransition: Re,
		useMutableSource: Re,
		useSyncExternalStore: Re,
		useId: Re,
		unstable_isNewReconciler: !1,
	},
	Qh = {
		readContext: ot,
		useCallback: function (e, t) {
			return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: ot,
		useEffect: fs,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Ul(4194308, 4, jf.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Ul(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Ul(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = wt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = wt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = Hh.bind(null, ae, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = wt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: cs,
		useDebugValue: Ku,
		useDeferredValue: function (e) {
			return (wt().memoizedState = e);
		},
		useTransition: function () {
			var e = cs(!1),
				t = e[0];
			return (e = Vh.bind(null, e[1])), (wt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ae,
				l = wt();
			if (le) {
				if (n === void 0) throw Error(C(407));
				n = n();
			} else {
				if (((n = t()), we === null)) throw Error(C(349));
				xn & 30 || _f(r, t, n);
			}
			l.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(l.queue = o),
				fs(Rf.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				br(9, Pf.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = wt(),
				t = we.identifierPrefix;
			if (le) {
				var n = Pt,
					r = _t;
				(n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Jr++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = $h++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Kh = {
		readContext: ot,
		useCallback: Of,
		useContext: ot,
		useEffect: Qu,
		useImperativeHandle: Mf,
		useInsertionEffect: Df,
		useLayoutEffect: zf,
		useMemo: Ff,
		useReducer: ri,
		useRef: Tf,
		useState: function () {
			return ri(qr);
		},
		useDebugValue: Ku,
		useDeferredValue: function (e) {
			var t = it();
			return If(t, me.memoizedState, e);
		},
		useTransition: function () {
			var e = ri(qr)[0],
				t = it().memoizedState;
			return [e, t];
		},
		useMutableSource: kf,
		useSyncExternalStore: Cf,
		useId: Uf,
		unstable_isNewReconciler: !1,
	},
	Yh = {
		readContext: ot,
		useCallback: Of,
		useContext: ot,
		useEffect: Qu,
		useImperativeHandle: Mf,
		useInsertionEffect: Df,
		useLayoutEffect: zf,
		useMemo: Ff,
		useReducer: li,
		useRef: Tf,
		useState: function () {
			return li(qr);
		},
		useDebugValue: Ku,
		useDeferredValue: function (e) {
			var t = it();
			return me === null ? (t.memoizedState = e) : If(t, me.memoizedState, e);
		},
		useTransition: function () {
			var e = li(qr)[0],
				t = it().memoizedState;
			return [e, t];
		},
		useMutableSource: kf,
		useSyncExternalStore: Cf,
		useId: Uf,
		unstable_isNewReconciler: !1,
	};
function ct(e, t) {
	if (e && e.defaultProps) {
		(t = se({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function Hi(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : se({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? _n(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Me(),
			l = bt(e),
			o = Rt(r, l);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = Jt(e, o, l)),
			t !== null && (mt(t, e, l, r), Fl(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Me(),
			l = bt(e),
			o = Rt(r, l);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = Jt(e, o, l)),
			t !== null && (mt(t, e, l, r), Fl(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Me(),
			r = bt(e),
			l = Rt(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = Jt(e, l, r)),
			t !== null && (mt(t, e, r, n), Fl(t, e, r));
	},
};
function ds(e, t, n, r, l, o, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, i)
			: t.prototype && t.prototype.isPureReactComponent
				? !Qr(n, r) || !Qr(l, o)
				: !0
	);
}
function Vf(e, t, n) {
	var r = !1,
		l = nn,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = ot(o))
			: ((l = Be(t) ? wn : Te.current),
				(r = t.contextTypes),
				(o = (r = r != null) ? Jn(e, l) : nn)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = _o),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function ps(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = {}), Uu(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (l.context = ot(o))
		: ((o = Be(t) ? wn : Te.current), (l.context = Jn(e, o))),
		(l.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (Hi(e, t, o, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof l.getSnapshotBeforeUpdate == "function" ||
			(typeof l.UNSAFE_componentWillMount != "function" &&
				typeof l.componentWillMount != "function") ||
			((t = l.state),
			typeof l.componentWillMount == "function" && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == "function" &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && _o.enqueueReplaceState(l, l.state, null),
			lo(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t) {
	try {
		var n = "",
			r = t;
		do (n += xp(r)), (r = r.return);
		while (r);
		var l = n;
	} catch (o) {
		l =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: l, digest: null };
}
function oi(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qi(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Xh = typeof WeakMap == "function" ? WeakMap : Map;
function Hf(e, t, n) {
	(n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			so || ((so = !0), (tu = r)), Qi(e, t);
		}),
		n
	);
}
function Wf(e, t, n) {
	(n = Rt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				Qi(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				Qi(e, t),
					typeof r != "function" &&
						(qt === null ? (qt = new Set([this])) : qt.add(this));
				var i = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: i !== null ? i : "",
				});
			}),
		n
	);
}
function hs(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Xh();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = am.bind(null, e, t, n)), t.then(e, e));
}
function ms(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function vs(e, t, n, r, l) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = l), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
					(n.flags |= 131072),
					(n.flags &= -52805),
					n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Rt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
					(n.lanes |= 1)),
			e);
}
var Gh = zt.ReactCurrentOwner,
	Ue = !1;
function je(e, t, n, r) {
	t.child = e === null ? wf(t, null, n, r) : bn(t, e.child, n, r);
}
function ys(e, t, n, r, l) {
	n = n.render;
	var o = t.ref;
	return (
		Xn(t, l),
		(r = Hu(e, t, n, r, o, l)),
		(n = Wu()),
		e !== null && !Ue
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~l),
				Dt(e, t, l))
			: (le && n && Du(t), (t.flags |= 1), je(e, t, r, l), t.child)
	);
}
function gs(e, t, n, r, l) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!ea(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), Qf(e, t, o, r, l))
			: ((e = Vl(n.type, null, r, t, t.mode, l)),
				(e.ref = t.ref),
				(e.return = t),
				(t.child = e));
	}
	if (((o = e.child), !(e.lanes & l))) {
		var i = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Qr), n(i, r) && e.ref === t.ref)
		)
			return Dt(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = en(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Qf(e, t, n, r, l) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Qr(o, r) && e.ref === t.ref)
			if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
				e.flags & 131072 && (Ue = !0);
			else return (t.lanes = e.lanes), Dt(e, t, l);
	}
	return Ki(e, t, n, r, l);
}
function Kf(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				b(Vn, Qe),
				(Qe |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					b(Vn, Qe),
					(Qe |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				b(Vn, Qe),
				(Qe |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			b(Vn, Qe),
			(Qe |= r);
	return je(e, t, l, n), t.child;
}
function Yf(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Ki(e, t, n, r, l) {
	var o = Be(n) ? wn : Te.current;
	return (
		(o = Jn(t, o)),
		Xn(t, l),
		(n = Hu(e, t, n, r, o, l)),
		(r = Wu()),
		e !== null && !Ue
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~l),
				Dt(e, t, l))
			: (le && r && Du(t), (t.flags |= 1), je(e, t, n, l), t.child)
	);
}
function ws(e, t, n, r, l) {
	if (Be(n)) {
		var o = !0;
		bl(t);
	} else o = !1;
	if ((Xn(t, l), t.stateNode === null))
		Al(e, t), Vf(t, n, r), Wi(t, n, r, l), (r = !0);
	else if (e === null) {
		var i = t.stateNode,
			u = t.memoizedProps;
		i.props = u;
		var a = i.context,
			s = n.contextType;
		typeof s == "object" && s !== null
			? (s = ot(s))
			: ((s = Be(n) ? wn : Te.current), (s = Jn(t, s)));
		var f = n.getDerivedStateFromProps,
			d =
				typeof f == "function" ||
				typeof i.getSnapshotBeforeUpdate == "function";
		d ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((u !== r || a !== s) && ps(t, i, r, s)),
			($t = !1);
		var p = t.memoizedState;
		(i.state = p),
			lo(t, r, i, l),
			(a = t.memoizedState),
			u !== r || p !== a || Ae.current || $t
				? (typeof f == "function" && (Hi(t, n, f, r), (a = t.memoizedState)),
					(u = $t || ds(t, n, u, r, p, a, s))
						? (d ||
								(typeof i.UNSAFE_componentWillMount != "function" &&
									typeof i.componentWillMount != "function") ||
								(typeof i.componentWillMount == "function" &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == "function" &&
									i.UNSAFE_componentWillMount()),
							typeof i.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
							(t.memoizedProps = r),
							(t.memoizedState = a)),
					(i.props = r),
					(i.state = a),
					(i.context = s),
					(r = u))
				: (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
					(r = !1));
	} else {
		(i = t.stateNode),
			xf(e, t),
			(u = t.memoizedProps),
			(s = t.type === t.elementType ? u : ct(t.type, u)),
			(i.props = s),
			(d = t.pendingProps),
			(p = i.context),
			(a = n.contextType),
			typeof a == "object" && a !== null
				? (a = ot(a))
				: ((a = Be(n) ? wn : Te.current), (a = Jn(t, a)));
		var x = n.getDerivedStateFromProps;
		(f =
			typeof x == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function") ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((u !== d || p !== a) && ps(t, i, r, a)),
			($t = !1),
			(p = t.memoizedState),
			(i.state = p),
			lo(t, r, i, l);
		var S = t.memoizedState;
		u !== d || p !== S || Ae.current || $t
			? (typeof x == "function" && (Hi(t, n, x, r), (S = t.memoizedState)),
				(s = $t || ds(t, n, s, r, p, S, a) || !1)
					? (f ||
							(typeof i.UNSAFE_componentWillUpdate != "function" &&
								typeof i.componentWillUpdate != "function") ||
							(typeof i.componentWillUpdate == "function" &&
								i.componentWillUpdate(r, S, a),
							typeof i.UNSAFE_componentWillUpdate == "function" &&
								i.UNSAFE_componentWillUpdate(r, S, a)),
						typeof i.componentDidUpdate == "function" && (t.flags |= 4),
						typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != "function" ||
							(u === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 4),
						typeof i.getSnapshotBeforeUpdate != "function" ||
							(u === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 1024),
						(t.memoizedProps = r),
						(t.memoizedState = S)),
				(i.props = r),
				(i.state = S),
				(i.context = a),
				(r = s))
			: (typeof i.componentDidUpdate != "function" ||
					(u === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 4),
				typeof i.getSnapshotBeforeUpdate != "function" ||
					(u === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 1024),
				(r = !1));
	}
	return Yi(e, t, n, r, o, l);
}
function Yi(e, t, n, r, l, o) {
	Yf(e, t);
	var i = (t.flags & 128) !== 0;
	if (!r && !i) return l && ls(t, n, !1), Dt(e, t, o);
	(r = t.stateNode), (Gh.current = t);
	var u =
		i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = bn(t, e.child, null, o)), (t.child = bn(t, null, u, o)))
			: je(e, t, u, o),
		(t.memoizedState = r.state),
		l && ls(t, n, !0),
		t.child
	);
}
function Xf(e) {
	var t = e.stateNode;
	t.pendingContext
		? rs(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && rs(e, t.context, !1),
		Au(e, t.containerInfo);
}
function Ss(e, t, n, r, l) {
	return qn(), ju(l), (t.flags |= 256), je(e, t, n, r), t.child;
}
var Xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Gf(e, t, n) {
	var r = t.pendingProps,
		l = ue.current,
		o = !1,
		i = (t.flags & 128) !== 0,
		u;
	if (
		((u = i) ||
			(u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		u
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (l |= 1),
		b(ue, l & 1),
		e === null)
	)
		return (
			$i(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
					null)
				: ((i = r.children),
					(e = r.fallback),
					o
						? ((r = t.mode),
							(o = t.child),
							(i = { mode: "hidden", children: i }),
							!(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = i))
								: (o = Lo(i, r, 0, null)),
							(e = yn(e, r, n, null)),
							(o.return = t),
							(e.return = t),
							(o.sibling = e),
							(t.child = o),
							(t.child.memoizedState = Gi(n)),
							(t.memoizedState = Xi),
							e)
						: Yu(t, i))
		);
	if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
		return Zh(e, t, i, r, u, l, n);
	if (o) {
		(o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
		var a = { mode: "hidden", children: r.children };
		return (
			!(i & 1) && t.child !== l
				? ((r = t.child),
					(r.childLanes = 0),
					(r.pendingProps = a),
					(t.deletions = null))
				: ((r = en(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			u !== null ? (o = en(u, o)) : ((o = yn(o, i, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? Gi(n)
					: {
							baseLanes: i.baseLanes | n,
							cachePool: null,
							transitions: i.transitions,
						}),
			(o.memoizedState = i),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Xi),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = en(o, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Yu(e, t) {
	return (
		(t = Lo({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Rl(e, t, n, r) {
	return (
		r !== null && ju(r),
		bn(t, e.child, null, n),
		(e = Yu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Zh(e, t, n, r, l, o, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = oi(Error(C(422)))), Rl(e, t, i, r))
			: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((o = r.fallback),
					(l = t.mode),
					(r = Lo({ mode: "visible", children: r.children }, l, 0, null)),
					(o = yn(o, l, i, null)),
					(o.flags |= 2),
					(r.return = t),
					(o.return = t),
					(r.sibling = o),
					(t.child = r),
					t.mode & 1 && bn(t, e.child, null, i),
					(t.child.memoizedState = Gi(i)),
					(t.memoizedState = Xi),
					o);
	if (!(t.mode & 1)) return Rl(e, t, i, null);
	if (l.data === "$!") {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
		return (r = u), (o = Error(C(419))), (r = oi(o, r, void 0)), Rl(e, t, i, r);
	}
	if (((u = (i & e.childLanes) !== 0), Ue || u)) {
		if (((r = we), r !== null)) {
			switch (i & -i) {
				case 4:
					l = 2;
					break;
				case 16:
					l = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					l = 32;
					break;
				case 536870912:
					l = 268435456;
					break;
				default:
					l = 0;
			}
			(l = l & (r.suspendedLanes | i) ? 0 : l),
				l !== 0 &&
					l !== o.retryLane &&
					((o.retryLane = l), Tt(e, l), mt(r, e, l, -1));
		}
		return bu(), (r = oi(Error(C(421)))), Rl(e, t, i, r);
	}
	return l.data === "$?"
		? ((t.flags |= 128),
			(t.child = e.child),
			(t = sm.bind(null, e)),
			(l._reactRetry = t),
			null)
		: ((e = o.treeContext),
			(Ke = Zt(l.nextSibling)),
			(Ye = t),
			(le = !0),
			(pt = null),
			e !== null &&
				((et[tt++] = _t),
				(et[tt++] = Pt),
				(et[tt++] = Sn),
				(_t = e.id),
				(Pt = e.overflow),
				(Sn = t)),
			(t = Yu(t, r.children)),
			(t.flags |= 4096),
			t);
}
function xs(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Vi(e.return, t, n);
}
function ii(e, t, n, r, l) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: l,
			})
		: ((o.isBackwards = t),
			(o.rendering = null),
			(o.renderingStartTime = 0),
			(o.last = r),
			(o.tail = n),
			(o.tailMode = l));
}
function Zf(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		o = r.tail;
	if ((je(e, t, r.children, n), (r = ue.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && xs(e, n, t);
				else if (e.tag === 19) xs(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((b(ue, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (l) {
			case "forwards":
				for (n = t.child, l = null; n !== null; )
					(e = n.alternate),
						e !== null && oo(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					ii(t, !1, l, n, o);
				break;
			case "backwards":
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && oo(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				ii(t, !0, n, null, o);
				break;
			case "together":
				ii(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Al(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(En |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(C(153));
	if (t.child !== null) {
		for (
			e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;
		)
			(e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Jh(e, t, n) {
	switch (t.tag) {
		case 3:
			Xf(t), qn();
			break;
		case 5:
			Ef(t);
			break;
		case 1:
			Be(t.type) && bl(t);
			break;
		case 4:
			Au(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			b(no, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (b(ue, ue.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
						? Gf(e, t, n)
						: (b(ue, ue.current & 1),
							(e = Dt(e, t, n)),
							e !== null ? e.sibling : null);
			b(ue, ue.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Zf(e, t, n);
				t.flags |= 128;
			}
			if (
				((l = t.memoizedState),
				l !== null &&
					((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
				b(ue, ue.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Kf(e, t, n);
	}
	return Dt(e, t, n);
}
var Jf, Zi, qf, bf;
Jf = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Zi = function () {};
qf = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), pn(Et.current);
		var o = null;
		switch (n) {
			case "input":
				(l = gi(e, l)), (r = gi(e, r)), (o = []);
				break;
			case "select":
				(l = se({}, l, { value: void 0 })),
					(r = se({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(l = xi(e, l)), (r = xi(e, r)), (o = []);
				break;
			default:
				typeof l.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = Jl);
		}
		ki(n, r);
		var i;
		n = null;
		for (s in l)
			if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
				if (s === "style") {
					var u = l[s];
					for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
				} else
					s !== "dangerouslySetInnerHTML" &&
						s !== "children" &&
						s !== "suppressContentEditableWarning" &&
						s !== "suppressHydrationWarning" &&
						s !== "autoFocus" &&
						(Ur.hasOwnProperty(s)
							? o || (o = [])
							: (o = o || []).push(s, null));
		for (s in r) {
			var a = r[s];
			if (
				((u = l != null ? l[s] : void 0),
				r.hasOwnProperty(s) && a !== u && (a != null || u != null))
			)
				if (s === "style")
					if (u) {
						for (i in u)
							!u.hasOwnProperty(i) ||
								(a && a.hasOwnProperty(i)) ||
								(n || (n = {}), (n[i] = ""));
						for (i in a)
							a.hasOwnProperty(i) &&
								u[i] !== a[i] &&
								(n || (n = {}), (n[i] = a[i]));
					} else n || (o || (o = []), o.push(s, n)), (n = a);
				else
					s === "dangerouslySetInnerHTML"
						? ((a = a ? a.__html : void 0),
							(u = u ? u.__html : void 0),
							a != null && u !== a && (o = o || []).push(s, a))
						: s === "children"
							? (typeof a != "string" && typeof a != "number") ||
								(o = o || []).push(s, "" + a)
							: s !== "suppressContentEditableWarning" &&
								s !== "suppressHydrationWarning" &&
								(Ur.hasOwnProperty(s)
									? (a != null && s === "onScroll" && ee("scroll", e),
										o || u === a || (o = []))
									: (o = o || []).push(s, a));
		}
		n && (o = o || []).push("style", n);
		var s = o;
		(t.updateQueue = s) && (t.flags |= 4);
	}
};
bf = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function wr(e, t) {
	if (!le)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Le(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags & 14680064),
				(r |= l.flags & 14680064),
				(l.return = e),
				(l = l.sibling);
	else
		for (l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags),
				(r |= l.flags),
				(l.return = e),
				(l = l.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qh(e, t, n) {
	var r = t.pendingProps;
	switch ((zu(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Le(t), null;
		case 1:
			return Be(t.type) && ql(), Le(t), null;
		case 3:
			return (
				(r = t.stateNode),
				er(),
				te(Ae),
				te(Te),
				$u(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(_l(t)
						? (t.flags |= 4)
						: e === null ||
							(e.memoizedState.isDehydrated && !(t.flags & 256)) ||
							((t.flags |= 1024), pt !== null && (lu(pt), (pt = null)))),
				Zi(e, t),
				Le(t),
				null
			);
		case 5:
			Bu(t);
			var l = pn(Zr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				qf(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(C(166));
					return Le(t), null;
				}
				if (((e = pn(Et.current)), _l(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[St] = t), (r[Xr] = o), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							ee("cancel", r), ee("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							ee("load", r);
							break;
						case "video":
						case "audio":
							for (l = 0; l < Rr.length; l++) ee(Rr[l], r);
							break;
						case "source":
							ee("error", r);
							break;
						case "img":
						case "image":
						case "link":
							ee("error", r), ee("load", r);
							break;
						case "details":
							ee("toggle", r);
							break;
						case "input":
							Ta(r, o), ee("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								ee("invalid", r);
							break;
						case "textarea":
							za(r, o), ee("invalid", r);
					}
					ki(n, o), (l = null);
					for (var i in o)
						if (o.hasOwnProperty(i)) {
							var u = o[i];
							i === "children"
								? typeof u == "string"
									? r.textContent !== u &&
										(o.suppressHydrationWarning !== !0 &&
											Cl(r.textContent, u, e),
										(l = ["children", u]))
									: typeof u == "number" &&
										r.textContent !== "" + u &&
										(o.suppressHydrationWarning !== !0 &&
											Cl(r.textContent, u, e),
										(l = ["children", "" + u]))
								: Ur.hasOwnProperty(i) &&
									u != null &&
									i === "onScroll" &&
									ee("scroll", r);
						}
					switch (n) {
						case "input":
							vl(r), Da(r, o, !0);
							break;
						case "textarea":
							vl(r), ja(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = Jl);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(i = l.nodeType === 9 ? l : l.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Pc(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = i.createElement("div")),
									(e.innerHTML = "<script></script>"),
									(e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
									? (e = i.createElement(n, { is: r.is }))
									: ((e = i.createElement(n)),
										n === "select" &&
											((i = e),
											r.multiple
												? (i.multiple = !0)
												: r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, n)),
						(e[St] = t),
						(e[Xr] = r),
						Jf(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((i = Ci(n, r)), n)) {
							case "dialog":
								ee("cancel", e), ee("close", e), (l = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								ee("load", e), (l = r);
								break;
							case "video":
							case "audio":
								for (l = 0; l < Rr.length; l++) ee(Rr[l], e);
								l = r;
								break;
							case "source":
								ee("error", e), (l = r);
								break;
							case "img":
							case "image":
							case "link":
								ee("error", e), ee("load", e), (l = r);
								break;
							case "details":
								ee("toggle", e), (l = r);
								break;
							case "input":
								Ta(e, r), (l = gi(e, r)), ee("invalid", e);
								break;
							case "option":
								l = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(l = se({}, r, { value: void 0 })),
									ee("invalid", e);
								break;
							case "textarea":
								za(e, r), (l = xi(e, r)), ee("invalid", e);
								break;
							default:
								l = r;
						}
						ki(n, l), (u = l);
						for (o in u)
							if (u.hasOwnProperty(o)) {
								var a = u[o];
								o === "style"
									? Nc(e, a)
									: o === "dangerouslySetInnerHTML"
										? ((a = a ? a.__html : void 0), a != null && Rc(e, a))
										: o === "children"
											? typeof a == "string"
												? (n !== "textarea" || a !== "") && Ar(e, a)
												: typeof a == "number" && Ar(e, "" + a)
											: o !== "suppressContentEditableWarning" &&
												o !== "suppressHydrationWarning" &&
												o !== "autoFocus" &&
												(Ur.hasOwnProperty(o)
													? a != null && o === "onScroll" && ee("scroll", e)
													: a != null && yu(e, o, a, i));
							}
						switch (n) {
							case "input":
								vl(e), Da(e, r, !1);
								break;
							case "textarea":
								vl(e), ja(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + tn(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Wn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
											Wn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == "function" && (e.onclick = Jl);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return Le(t), null;
		case 6:
			if (e && t.stateNode != null) bf(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
				if (((n = pn(Zr.current)), pn(Et.current), _l(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[St] = t),
						(o = r.nodeValue !== n) && ((e = Ye), e !== null))
					)
						switch (e.tag) {
							case 3:
								Cl(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Cl(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[St] = t),
						(t.stateNode = r);
			}
			return Le(t), null;
		case 13:
			if (
				(te(ue),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
					yf(), qn(), (t.flags |= 98560), (o = !1);
				else if (((o = _l(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(C(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(C(317));
						o[St] = t;
					} else
						qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Le(t), (o = !1);
				} else pt !== null && (lu(pt), (pt = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
					r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ue.current & 1 ? ve === 0 && (ve = 3) : bu())),
					t.updateQueue !== null && (t.flags |= 4),
					Le(t),
					null);
		case 4:
			return (
				er(), Zi(e, t), e === null && Kr(t.stateNode.containerInfo), Le(t), null
			);
		case 10:
			return Fu(t.type._context), Le(t), null;
		case 17:
			return Be(t.type) && ql(), Le(t), null;
		case 19:
			if ((te(ue), (o = t.memoizedState), o === null)) return Le(t), null;
			if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
				if (r) wr(o, !1);
				else {
					if (ve !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = oo(e)), i !== null)) {
								for (
									t.flags |= 128,
										wr(o, !1),
										r = i.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;
								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(i = o.alternate),
										i === null
											? ((o.childLanes = 0),
												(o.lanes = e),
												(o.child = null),
												(o.subtreeFlags = 0),
												(o.memoizedProps = null),
												(o.memoizedState = null),
												(o.updateQueue = null),
												(o.dependencies = null),
												(o.stateNode = null))
											: ((o.childLanes = i.childLanes),
												(o.lanes = i.lanes),
												(o.child = i.child),
												(o.subtreeFlags = 0),
												(o.deletions = null),
												(o.memoizedProps = i.memoizedProps),
												(o.memoizedState = i.memoizedState),
												(o.updateQueue = i.updateQueue),
												(o.type = i.type),
												(e = i.dependencies),
												(o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
															})),
										(n = n.sibling);
								return b(ue, (ue.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						de() > nr &&
						((t.flags |= 128), (r = !0), wr(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = oo(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							wr(o, !0),
							o.tail === null && o.tailMode === "hidden" && !i.alternate && !le)
						)
							return Le(t), null;
					} else
						2 * de() - o.renderingStartTime > nr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), wr(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = o.last),
						n !== null ? (n.sibling = i) : (t.child = i),
						(o.last = i));
			}
			return o.tail !== null
				? ((t = o.tail),
					(o.rendering = t),
					(o.tail = t.sibling),
					(o.renderingStartTime = de()),
					(t.sibling = null),
					(n = ue.current),
					b(ue, r ? (n & 1) | 2 : n & 1),
					t)
				: (Le(t), null);
		case 22:
		case 23:
			return (
				qu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Qe & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Le(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(C(156, t.tag));
}
function bh(e, t) {
	switch ((zu(t), t.tag)) {
		case 1:
			return (
				Be(t.type) && ql(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				er(),
				te(Ae),
				te(Te),
				$u(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Bu(t), null;
		case 13:
			if (
				(te(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(C(340));
				qn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return te(ue), null;
		case 4:
			return er(), null;
		case 10:
			return Fu(t.type._context), null;
		case 22:
		case 23:
			return qu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Ll = !1,
	Ne = !1,
	em = typeof WeakSet == "function" ? WeakSet : Set,
	z = null;
function $n(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				ce(e, t, r);
			}
		else n.current = null;
}
function Ji(e, t, n) {
	try {
		n();
	} catch (r) {
		ce(e, t, r);
	}
}
var Es = !1;
function tm(e, t) {
	if (((Mi = Xl), (e = rf()), Tu(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var l = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var i = 0,
						u = -1,
						a = -1,
						s = 0,
						f = 0,
						d = e,
						p = null;
					t: for (;;) {
						for (
							var x;
							d !== n || (l !== 0 && d.nodeType !== 3) || (u = i + l),
								d !== o || (r !== 0 && d.nodeType !== 3) || (a = i + r),
								d.nodeType === 3 && (i += d.nodeValue.length),
								(x = d.firstChild) !== null;
						)
							(p = d), (d = x);
						for (;;) {
							if (d === e) break t;
							if (
								(p === n && ++s === l && (u = i),
								p === o && ++f === r && (a = i),
								(x = d.nextSibling) !== null)
							)
								break;
							(d = p), (p = d.parentNode);
						}
						d = x;
					}
					n = u === -1 || a === -1 ? null : { start: u, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Oi = { focusedElem: e, selectionRange: n }, Xl = !1, z = t; z !== null; )
		if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (z = e);
		else
			for (; z !== null; ) {
				t = z;
				try {
					var S = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (S !== null) {
									var w = S.memoizedProps,
										N = S.memoizedState,
										h = t.stateNode,
										c = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : ct(t.type, w),
											N,
										);
									h.__reactInternalSnapshotBeforeUpdate = c;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = "")
									: v.nodeType === 9 &&
										v.documentElement &&
										v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(C(163));
						}
				} catch (k) {
					ce(t, t.return, k);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (z = e);
					break;
				}
				z = t.return;
			}
	return (S = Es), (Es = !1), S;
}
function Mr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var o = l.destroy;
				(l.destroy = void 0), o !== void 0 && Ji(t, n, o);
			}
			l = l.next;
		} while (l !== r);
	}
}
function Po(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function qi(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function ed(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), ed(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[St], delete t[Xr], delete t[Ui], delete t[Ih], delete t[Uh])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function td(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ks(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || td(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function bi(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
					(n = n._reactRootContainer),
					n != null || t.onclick !== null || (t.onclick = Jl));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (bi(e, t, n), e = e.sibling; e !== null; ) bi(e, t, n), (e = e.sibling);
}
function eu(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), (e = e.sibling);
}
var Ce = null,
	ft = !1;
function Ut(e, t, n) {
	for (n = n.child; n !== null; ) nd(e, t, n), (n = n.sibling);
}
function nd(e, t, n) {
	if (xt && typeof xt.onCommitFiberUnmount == "function")
		try {
			xt.onCommitFiberUnmount(go, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Ne || $n(n, t);
		case 6:
			var r = Ce,
				l = ft;
			(Ce = null),
				Ut(e, t, n),
				(Ce = r),
				(ft = l),
				Ce !== null &&
					(ft
						? ((e = Ce),
							(n = n.stateNode),
							e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Ce.removeChild(n.stateNode));
			break;
		case 18:
			Ce !== null &&
				(ft
					? ((e = Ce),
						(n = n.stateNode),
						e.nodeType === 8
							? bo(e.parentNode, n)
							: e.nodeType === 1 && bo(e, n),
						Hr(e))
					: bo(Ce, n.stateNode));
			break;
		case 4:
			(r = Ce),
				(l = ft),
				(Ce = n.stateNode.containerInfo),
				(ft = !0),
				Ut(e, t, n),
				(Ce = r),
				(ft = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Ne &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var o = l,
						i = o.destroy;
					(o = o.tag),
						i !== void 0 && (o & 2 || o & 4) && Ji(n, t, i),
						(l = l.next);
				} while (l !== r);
			}
			Ut(e, t, n);
			break;
		case 1:
			if (
				!Ne &&
				($n(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (u) {
					ce(n, t, u);
				}
			Ut(e, t, n);
			break;
		case 21:
			Ut(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((Ne = (r = Ne) || n.memoizedState !== null), Ut(e, t, n), (Ne = r))
				: Ut(e, t, n);
			break;
		default:
			Ut(e, t, n);
	}
}
function Cs(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new em()),
			t.forEach(function (r) {
				var l = cm.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function st(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var o = e,
					i = t,
					u = i;
				e: for (; u !== null; ) {
					switch (u.tag) {
						case 5:
							(Ce = u.stateNode), (ft = !1);
							break e;
						case 3:
							(Ce = u.stateNode.containerInfo), (ft = !0);
							break e;
						case 4:
							(Ce = u.stateNode.containerInfo), (ft = !0);
							break e;
					}
					u = u.return;
				}
				if (Ce === null) throw Error(C(160));
				nd(o, i, l), (Ce = null), (ft = !1);
				var a = l.alternate;
				a !== null && (a.return = null), (l.return = null);
			} catch (s) {
				ce(l, t, s);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) rd(t, e), (t = t.sibling);
}
function rd(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((st(t, e), gt(e), r & 4)) {
				try {
					Mr(3, e, e.return), Po(3, e);
				} catch (w) {
					ce(e, e.return, w);
				}
				try {
					Mr(5, e, e.return);
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			break;
		case 1:
			st(t, e), gt(e), r & 512 && n !== null && $n(n, n.return);
			break;
		case 5:
			if (
				(st(t, e),
				gt(e),
				r & 512 && n !== null && $n(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					Ar(l, "");
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var o = e.memoizedProps,
					i = n !== null ? n.memoizedProps : o,
					u = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						u === "input" && o.type === "radio" && o.name != null && Cc(l, o),
							Ci(u, i);
						var s = Ci(u, o);
						for (i = 0; i < a.length; i += 2) {
							var f = a[i],
								d = a[i + 1];
							f === "style"
								? Nc(l, d)
								: f === "dangerouslySetInnerHTML"
									? Rc(l, d)
									: f === "children"
										? Ar(l, d)
										: yu(l, f, d, s);
						}
						switch (u) {
							case "input":
								wi(l, o);
								break;
							case "textarea":
								_c(l, o);
								break;
							case "select":
								var p = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!o.multiple;
								var x = o.value;
								x != null
									? Wn(l, !!o.multiple, x, !1)
									: p !== !!o.multiple &&
										(o.defaultValue != null
											? Wn(l, !!o.multiple, o.defaultValue, !0)
											: Wn(l, !!o.multiple, o.multiple ? [] : "", !1));
						}
						l[Xr] = o;
					} catch (w) {
						ce(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((st(t, e), gt(e), r & 4)) {
				if (e.stateNode === null) throw Error(C(162));
				(l = e.stateNode), (o = e.memoizedProps);
				try {
					l.nodeValue = o;
				} catch (w) {
					ce(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(st(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Hr(t.containerInfo);
				} catch (w) {
					ce(e, e.return, w);
				}
			break;
		case 4:
			st(t, e), gt(e);
			break;
		case 13:
			st(t, e),
				gt(e),
				(l = e.child),
				l.flags & 8192 &&
					((o = l.memoizedState !== null),
					(l.stateNode.isHidden = o),
					!o ||
						(l.alternate !== null && l.alternate.memoizedState !== null) ||
						(Zu = de())),
				r & 4 && Cs(e);
			break;
		case 22:
			if (
				((f = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((Ne = (s = Ne) || f), st(t, e), (Ne = s)) : st(t, e),
				gt(e),
				r & 8192)
			) {
				if (
					((s = e.memoizedState !== null),
					(e.stateNode.isHidden = s) && !f && e.mode & 1)
				)
					for (z = e, f = e.child; f !== null; ) {
						for (d = z = f; z !== null; ) {
							switch (((p = z), (x = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Mr(4, p, p.return);
									break;
								case 1:
									$n(p, p.return);
									var S = p.stateNode;
									if (typeof S.componentWillUnmount == "function") {
										(r = p), (n = p.return);
										try {
											(t = r),
												(S.props = t.memoizedProps),
												(S.state = t.memoizedState),
												S.componentWillUnmount();
										} catch (w) {
											ce(r, n, w);
										}
									}
									break;
								case 5:
									$n(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Ps(d);
										continue;
									}
							}
							x !== null ? ((x.return = p), (z = x)) : Ps(d);
						}
						f = f.sibling;
					}
				e: for (f = null, d = e; ; ) {
					if (d.tag === 5) {
						if (f === null) {
							f = d;
							try {
								(l = d.stateNode),
									s
										? ((o = l.style),
											typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((u = d.stateNode),
											(a = d.memoizedProps.style),
											(i =
												a != null && a.hasOwnProperty("display")
													? a.display
													: null),
											(u.style.display = Lc("display", i)));
							} catch (w) {
								ce(e, e.return, w);
							}
						}
					} else if (d.tag === 6) {
						if (f === null)
							try {
								d.stateNode.nodeValue = s ? "" : d.memoizedProps;
							} catch (w) {
								ce(e, e.return, w);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === e) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e;
						f === d && (f = null), (d = d.return);
					}
					f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			st(t, e), gt(e), r & 4 && Cs(e);
			break;
		case 21:
			break;
		default:
			st(t, e), gt(e);
	}
}
function gt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (td(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(C(160));
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (Ar(l, ""), (r.flags &= -33));
					var o = ks(e);
					eu(e, o, l);
					break;
				case 3:
				case 4:
					var i = r.stateNode.containerInfo,
						u = ks(e);
					bi(e, u, i);
					break;
				default:
					throw Error(C(161));
			}
		} catch (a) {
			ce(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function nm(e, t, n) {
	(z = e), ld(e);
}
function ld(e, t, n) {
	for (var r = (e.mode & 1) !== 0; z !== null; ) {
		var l = z,
			o = l.child;
		if (l.tag === 22 && r) {
			var i = l.memoizedState !== null || Ll;
			if (!i) {
				var u = l.alternate,
					a = (u !== null && u.memoizedState !== null) || Ne;
				u = Ll;
				var s = Ne;
				if (((Ll = i), (Ne = a) && !s))
					for (z = l; z !== null; )
						(i = z),
							(a = i.child),
							i.tag === 22 && i.memoizedState !== null
								? Rs(l)
								: a !== null
									? ((a.return = i), (z = a))
									: Rs(l);
				for (; o !== null; ) (z = o), ld(o), (o = o.sibling);
				(z = l), (Ll = u), (Ne = s);
			}
			_s(e);
		} else
			l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : _s(e);
	}
}
function _s(e) {
	for (; z !== null; ) {
		var t = z;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Ne || Po(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !Ne)
								if (n === null) r.componentDidMount();
								else {
									var l =
										t.elementType === t.type
											? n.memoizedProps
											: ct(t.type, n.memoizedProps);
									r.componentDidUpdate(
										l,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var o = t.updateQueue;
							o !== null && ss(t, o, r);
							break;
						case 3:
							var i = t.updateQueue;
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								ss(t, i, n);
							}
							break;
						case 5:
							var u = t.stateNode;
							if (n === null && t.flags & 4) {
								n = u;
								var a = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										a.autoFocus && n.focus();
										break;
									case "img":
										a.src && (n.src = a.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var s = t.alternate;
								if (s !== null) {
									var f = s.memoizedState;
									if (f !== null) {
										var d = f.dehydrated;
										d !== null && Hr(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(C(163));
					}
				Ne || (t.flags & 512 && qi(t));
			} catch (p) {
				ce(t, t.return, p);
			}
		}
		if (t === e) {
			z = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (z = n);
			break;
		}
		z = t.return;
	}
}
function Ps(e) {
	for (; z !== null; ) {
		var t = z;
		if (t === e) {
			z = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (z = n);
			break;
		}
		z = t.return;
	}
}
function Rs(e) {
	for (; z !== null; ) {
		var t = z;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Po(4, t);
					} catch (a) {
						ce(t, n, a);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (a) {
							ce(t, l, a);
						}
					}
					var o = t.return;
					try {
						qi(t);
					} catch (a) {
						ce(t, o, a);
					}
					break;
				case 5:
					var i = t.return;
					try {
						qi(t);
					} catch (a) {
						ce(t, i, a);
					}
			}
		} catch (a) {
			ce(t, t.return, a);
		}
		if (t === e) {
			z = null;
			break;
		}
		var u = t.sibling;
		if (u !== null) {
			(u.return = t.return), (z = u);
			break;
		}
		z = t.return;
	}
}
var rm = Math.ceil,
	ao = zt.ReactCurrentDispatcher,
	Xu = zt.ReactCurrentOwner,
	lt = zt.ReactCurrentBatchConfig,
	G = 0,
	we = null,
	he = null,
	_e = 0,
	Qe = 0,
	Vn = ln(0),
	ve = 0,
	el = null,
	En = 0,
	Ro = 0,
	Gu = 0,
	Or = null,
	Ie = null,
	Zu = 0,
	nr = 1 / 0,
	kt = null,
	so = !1,
	tu = null,
	qt = null,
	Nl = !1,
	Qt = null,
	co = 0,
	Fr = 0,
	nu = null,
	Bl = -1,
	$l = 0;
function Me() {
	return G & 6 ? de() : Bl !== -1 ? Bl : (Bl = de());
}
function bt(e) {
	return e.mode & 1
		? G & 2 && _e !== 0
			? _e & -_e
			: Bh.transition !== null
				? ($l === 0 && ($l = $c()), $l)
				: ((e = Z),
					e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xc(e.type))),
					e)
		: 1;
}
function mt(e, t, n, r) {
	if (50 < Fr) throw ((Fr = 0), (nu = null), Error(C(185)));
	rl(e, n, r),
		(!(G & 2) || e !== we) &&
			(e === we && (!(G & 2) && (Ro |= n), ve === 4 && Ht(e, _e)),
			$e(e, r),
			n === 1 && G === 0 && !(t.mode & 1) && ((nr = de() + 500), ko && on()));
}
function $e(e, t) {
	var n = e.callbackNode;
	Bp(e, t);
	var r = Yl(e, e === we ? _e : 0);
	if (r === 0)
		n !== null && Fa(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Fa(n), t === 1))
			e.tag === 0 ? Ah(Ls.bind(null, e)) : hf(Ls.bind(null, e)),
				Oh(function () {
					!(G & 6) && on();
				}),
				(n = null);
		else {
			switch (Vc(r)) {
				case 1:
					n = Eu;
					break;
				case 4:
					n = Ac;
					break;
				case 16:
					n = Kl;
					break;
				case 536870912:
					n = Bc;
					break;
				default:
					n = Kl;
			}
			n = dd(n, od.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function od(e, t) {
	if (((Bl = -1), ($l = 0), G & 6)) throw Error(C(327));
	var n = e.callbackNode;
	if (Gn() && e.callbackNode !== n) return null;
	var r = Yl(e, e === we ? _e : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = fo(e, r);
	else {
		t = r;
		var l = G;
		G |= 2;
		var o = ud();
		(we !== e || _e !== t) && ((kt = null), (nr = de() + 500), vn(e, t));
		do
			try {
				im();
				break;
			} catch (u) {
				id(e, u);
			}
		while (!0);
		Ou(),
			(ao.current = o),
			(G = l),
			he !== null ? (t = 0) : ((we = null), (_e = 0), (t = ve));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = Ni(e)), l !== 0 && ((r = l), (t = ru(e, l)))), t === 1)
		)
			throw ((n = el), vn(e, 0), Ht(e, r), $e(e, de()), n);
		if (t === 6) Ht(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!lm(l) &&
					((t = fo(e, r)),
					t === 2 && ((o = Ni(e)), o !== 0 && ((r = o), (t = ru(e, o)))),
					t === 1))
			)
				throw ((n = el), vn(e, 0), Ht(e, r), $e(e, de()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(C(345));
				case 2:
					cn(e, Ie, kt);
					break;
				case 3:
					if (
						(Ht(e, r), (r & 130023424) === r && ((t = Zu + 500 - de()), 10 < t))
					) {
						if (Yl(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							Me(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = Ii(cn.bind(null, e, Ie, kt), t);
						break;
					}
					cn(e, Ie, kt);
					break;
				case 4:
					if ((Ht(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var i = 31 - ht(r);
						(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
					}
					if (
						((r = l),
						(r = de() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
									? 480
									: 1080 > r
										? 1080
										: 1920 > r
											? 1920
											: 3e3 > r
												? 3e3
												: 4320 > r
													? 4320
													: 1960 * rm(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Ii(cn.bind(null, e, Ie, kt), r);
						break;
					}
					cn(e, Ie, kt);
					break;
				case 5:
					cn(e, Ie, kt);
					break;
				default:
					throw Error(C(329));
			}
		}
	}
	return $e(e, de()), e.callbackNode === n ? od.bind(null, e) : null;
}
function ru(e, t) {
	var n = Or;
	return (
		e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
		(e = fo(e, t)),
		e !== 2 && ((t = Ie), (Ie = n), t !== null && lu(t)),
		e
	);
}
function lu(e) {
	Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function lm(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						o = l.getSnapshot;
					l = l.value;
					try {
						if (!vt(o(), l)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Ht(e, t) {
	for (
		t &= ~Gu,
			t &= ~Ro,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;
	) {
		var n = 31 - ht(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Ls(e) {
	if (G & 6) throw Error(C(327));
	Gn();
	var t = Yl(e, 0);
	if (!(t & 1)) return $e(e, de()), null;
	var n = fo(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Ni(e);
		r !== 0 && ((t = r), (n = ru(e, r)));
	}
	if (n === 1) throw ((n = el), vn(e, 0), Ht(e, t), $e(e, de()), n);
	if (n === 6) throw Error(C(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		cn(e, Ie, kt),
		$e(e, de()),
		null
	);
}
function Ju(e, t) {
	var n = G;
	G |= 1;
	try {
		return e(t);
	} finally {
		(G = n), G === 0 && ((nr = de() + 500), ko && on());
	}
}
function kn(e) {
	Qt !== null && Qt.tag === 0 && !(G & 6) && Gn();
	var t = G;
	G |= 1;
	var n = lt.transition,
		r = Z;
	try {
		if (((lt.transition = null), (Z = 1), e)) return e();
	} finally {
		(Z = r), (lt.transition = n), (G = t), !(G & 6) && on();
	}
}
function qu() {
	(Qe = Vn.current), te(Vn);
}
function vn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Mh(n)), he !== null))
		for (n = he.return; n !== null; ) {
			var r = n;
			switch ((zu(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && ql();
					break;
				case 3:
					er(), te(Ae), te(Te), $u();
					break;
				case 5:
					Bu(r);
					break;
				case 4:
					er();
					break;
				case 13:
					te(ue);
					break;
				case 19:
					te(ue);
					break;
				case 10:
					Fu(r.type._context);
					break;
				case 22:
				case 23:
					qu();
			}
			n = n.return;
		}
	if (
		((we = e),
		(he = e = en(e.current, null)),
		(_e = Qe = t),
		(ve = 0),
		(el = null),
		(Gu = Ro = En = 0),
		(Ie = Or = null),
		dn !== null)
	) {
		for (t = 0; t < dn.length; t++)
			if (((n = dn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					o = n.pending;
				if (o !== null) {
					var i = o.next;
					(o.next = l), (r.next = i);
				}
				n.pending = r;
			}
		dn = null;
	}
	return e;
}
function id(e, t) {
	do {
		var n = he;
		try {
			if ((Ou(), (Il.current = uo), io)) {
				for (var r = ae.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				io = !1;
			}
			if (
				((xn = 0),
				(ge = me = ae = null),
				(jr = !1),
				(Jr = 0),
				(Xu.current = null),
				n === null || n.return === null)
			) {
				(ve = 1), (el = t), (he = null);
				break;
			}
			e: {
				var o = e,
					i = n.return,
					u = n,
					a = t;
				if (
					((t = _e),
					(u.flags |= 32768),
					a !== null && typeof a == "object" && typeof a.then == "function")
				) {
					var s = a,
						f = u,
						d = f.tag;
					if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var p = f.alternate;
						p
							? ((f.updateQueue = p.updateQueue),
								(f.memoizedState = p.memoizedState),
								(f.lanes = p.lanes))
							: ((f.updateQueue = null), (f.memoizedState = null));
					}
					var x = ms(i);
					if (x !== null) {
						(x.flags &= -257),
							vs(x, i, u, o, t),
							x.mode & 1 && hs(o, s, t),
							(t = x),
							(a = s);
						var S = t.updateQueue;
						if (S === null) {
							var w = new Set();
							w.add(a), (t.updateQueue = w);
						} else S.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							hs(o, s, t), bu();
							break e;
						}
						a = Error(C(426));
					}
				} else if (le && u.mode & 1) {
					var N = ms(i);
					if (N !== null) {
						!(N.flags & 65536) && (N.flags |= 256),
							vs(N, i, u, o, t),
							ju(tr(a, u));
						break e;
					}
				}
				(o = a = tr(a, u)),
					ve !== 4 && (ve = 2),
					Or === null ? (Or = [o]) : Or.push(o),
					(o = i);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var h = Hf(o, a, t);
							as(o, h);
							break e;
						case 1:
							u = a;
							var c = o.type,
								v = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof c.getDerivedStateFromError == "function" ||
									(v !== null &&
										typeof v.componentDidCatch == "function" &&
										(qt === null || !qt.has(v))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var k = Wf(o, u, t);
								as(o, k);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			sd(n);
		} catch (R) {
			(t = R), he === n && n !== null && (he = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function ud() {
	var e = ao.current;
	return (ao.current = uo), e === null ? uo : e;
}
function bu() {
	(ve === 0 || ve === 3 || ve === 2) && (ve = 4),
		we === null || (!(En & 268435455) && !(Ro & 268435455)) || Ht(we, _e);
}
function fo(e, t) {
	var n = G;
	G |= 2;
	var r = ud();
	(we !== e || _e !== t) && ((kt = null), vn(e, t));
	do
		try {
			om();
			break;
		} catch (l) {
			id(e, l);
		}
	while (!0);
	if ((Ou(), (G = n), (ao.current = r), he !== null)) throw Error(C(261));
	return (we = null), (_e = 0), ve;
}
function om() {
	for (; he !== null; ) ad(he);
}
function im() {
	for (; he !== null && !Dp(); ) ad(he);
}
function ad(e) {
	var t = fd(e.alternate, e, Qe);
	(e.memoizedProps = e.pendingProps),
		t === null ? sd(e) : (he = t),
		(Xu.current = null);
}
function sd(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = bh(n, t)), n !== null)) {
				(n.flags &= 32767), (he = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ve = 6), (he = null);
				return;
			}
		} else if (((n = qh(n, t, Qe)), n !== null)) {
			he = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			he = t;
			return;
		}
		he = t = e;
	} while (t !== null);
	ve === 0 && (ve = 5);
}
function cn(e, t, n) {
	var r = Z,
		l = lt.transition;
	try {
		(lt.transition = null), (Z = 1), um(e, t, n, r);
	} finally {
		(lt.transition = l), (Z = r);
	}
	return null;
}
function um(e, t, n, r) {
	do Gn();
	while (Qt !== null);
	if (G & 6) throw Error(C(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(C(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		($p(e, o),
		e === we && ((he = we = null), (_e = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Nl ||
			((Nl = !0),
			dd(Kl, function () {
				return Gn(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = lt.transition), (lt.transition = null);
		var i = Z;
		Z = 1;
		var u = G;
		(G |= 4),
			(Xu.current = null),
			tm(e, n),
			rd(n, e),
			Rh(Oi),
			(Xl = !!Mi),
			(Oi = Mi = null),
			(e.current = n),
			nm(n),
			zp(),
			(G = u),
			(Z = i),
			(lt.transition = o);
	} else e.current = n;
	if (
		(Nl && ((Nl = !1), (Qt = e), (co = l)),
		(o = e.pendingLanes),
		o === 0 && (qt = null),
		Op(n.stateNode),
		$e(e, de()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (so) throw ((so = !1), (e = tu), (tu = null), e);
	return (
		co & 1 && e.tag !== 0 && Gn(),
		(o = e.pendingLanes),
		o & 1 ? (e === nu ? Fr++ : ((Fr = 0), (nu = e))) : (Fr = 0),
		on(),
		null
	);
}
function Gn() {
	if (Qt !== null) {
		var e = Vc(co),
			t = lt.transition,
			n = Z;
		try {
			if (((lt.transition = null), (Z = 16 > e ? 16 : e), Qt === null))
				var r = !1;
			else {
				if (((e = Qt), (Qt = null), (co = 0), G & 6)) throw Error(C(331));
				var l = G;
				for (G |= 4, z = e.current; z !== null; ) {
					var o = z,
						i = o.child;
					if (z.flags & 16) {
						var u = o.deletions;
						if (u !== null) {
							for (var a = 0; a < u.length; a++) {
								var s = u[a];
								for (z = s; z !== null; ) {
									var f = z;
									switch (f.tag) {
										case 0:
										case 11:
										case 15:
											Mr(8, f, o);
									}
									var d = f.child;
									if (d !== null) (d.return = f), (z = d);
									else
										for (; z !== null; ) {
											f = z;
											var p = f.sibling,
												x = f.return;
											if ((ed(f), f === s)) {
												z = null;
												break;
											}
											if (p !== null) {
												(p.return = x), (z = p);
												break;
											}
											z = x;
										}
								}
							}
							var S = o.alternate;
							if (S !== null) {
								var w = S.child;
								if (w !== null) {
									S.child = null;
									do {
										var N = w.sibling;
										(w.sibling = null), (w = N);
									} while (w !== null);
								}
							}
							z = o;
						}
					}
					if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
					else
						e: for (; z !== null; ) {
							if (((o = z), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Mr(9, o, o.return);
								}
							var h = o.sibling;
							if (h !== null) {
								(h.return = o.return), (z = h);
								break e;
							}
							z = o.return;
						}
				}
				var c = e.current;
				for (z = c; z !== null; ) {
					i = z;
					var v = i.child;
					if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (z = v);
					else
						e: for (i = c; z !== null; ) {
							if (((u = z), u.flags & 2048))
								try {
									switch (u.tag) {
										case 0:
										case 11:
										case 15:
											Po(9, u);
									}
								} catch (R) {
									ce(u, u.return, R);
								}
							if (u === i) {
								z = null;
								break e;
							}
							var k = u.sibling;
							if (k !== null) {
								(k.return = u.return), (z = k);
								break e;
							}
							z = u.return;
						}
				}
				if (
					((G = l), on(), xt && typeof xt.onPostCommitFiberRoot == "function")
				)
					try {
						xt.onPostCommitFiberRoot(go, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(Z = n), (lt.transition = t);
		}
	}
	return !1;
}
function Ns(e, t, n) {
	(t = tr(n, t)),
		(t = Hf(e, t, 1)),
		(e = Jt(e, t, 1)),
		(t = Me()),
		e !== null && (rl(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
	if (e.tag === 3) Ns(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Ns(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(qt === null || !qt.has(r)))
				) {
					(e = tr(n, e)),
						(e = Wf(t, e, 1)),
						(t = Jt(t, e, 1)),
						(e = Me()),
						t !== null && (rl(t, 1, e), $e(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function am(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Me()),
		(e.pingedLanes |= e.suspendedLanes & n),
		we === e &&
			(_e & n) === n &&
			(ve === 4 || (ve === 3 && (_e & 130023424) === _e && 500 > de() - Zu)
				? vn(e, 0)
				: (Gu |= n)),
		$e(e, t);
}
function cd(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = wl), (wl <<= 1), !(wl & 130023424) && (wl = 4194304))
			: (t = 1));
	var n = Me();
	(e = Tt(e, t)), e !== null && (rl(e, t, n), $e(e, n));
}
function sm(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), cd(e, n);
}
function cm(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				l = e.memoizedState;
			l !== null && (n = l.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(C(314));
	}
	r !== null && r.delete(t), cd(e, n);
}
var fd;
fd = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ae.current) Ue = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), Jh(e, t, n);
			Ue = !!(e.flags & 131072);
		}
	else (Ue = !1), le && t.flags & 1048576 && mf(t, to, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Al(e, t), (e = t.pendingProps);
			var l = Jn(t, Te.current);
			Xn(t, n), (l = Hu(null, t, r, e, l, n));
			var o = Wu();
			return (
				(t.flags |= 1),
				typeof l == "object" &&
				l !== null &&
				typeof l.render == "function" &&
				l.$$typeof === void 0
					? ((t.tag = 1),
						(t.memoizedState = null),
						(t.updateQueue = null),
						Be(r) ? ((o = !0), bl(t)) : (o = !1),
						(t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
						Uu(t),
						(l.updater = _o),
						(t.stateNode = l),
						(l._reactInternals = t),
						Wi(t, r, e, n),
						(t = Yi(null, t, r, !0, o, n)))
					: ((t.tag = 0), le && o && Du(t), je(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Al(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = dm(r)),
					(e = ct(r, e)),
					l)
				) {
					case 0:
						t = Ki(null, t, r, e, n);
						break e;
					case 1:
						t = ws(null, t, r, e, n);
						break e;
					case 11:
						t = ys(null, t, r, e, n);
						break e;
					case 14:
						t = gs(null, t, r, ct(r.type, e), n);
						break e;
				}
				throw Error(C(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ct(r, l)),
				Ki(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ct(r, l)),
				ws(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((Xf(t), e === null)) throw Error(C(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(l = o.element),
					xf(e, t),
					lo(t, r, null, n);
				var i = t.memoizedState;
				if (((r = i.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(l = tr(Error(C(423)), t)), (t = Ss(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = tr(Error(C(424)), t)), (t = Ss(e, t, r, n, l));
						break e;
					} else
						for (
							Ke = Zt(t.stateNode.containerInfo.firstChild),
								Ye = t,
								le = !0,
								pt = null,
								n = wf(t, null, r, n),
								t.child = n;
							n;
						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((qn(), r === l)) {
						t = Dt(e, t, n);
						break e;
					}
					je(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Ef(t),
				e === null && $i(t),
				(r = t.type),
				(l = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(i = l.children),
				Fi(r, l) ? (i = null) : o !== null && Fi(r, o) && (t.flags |= 32),
				Yf(e, t),
				je(e, t, i, n),
				t.child
			);
		case 6:
			return e === null && $i(t), null;
		case 13:
			return Gf(e, t, n);
		case 4:
			return (
				Au(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = bn(t, null, r, n)) : je(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ct(r, l)),
				ys(e, t, r, l, n)
			);
		case 7:
			return je(e, t, t.pendingProps, n), t.child;
		case 8:
			return je(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return je(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(o = t.memoizedProps),
					(i = l.value),
					b(no, r._currentValue),
					(r._currentValue = i),
					o !== null)
				)
					if (vt(o.value, i)) {
						if (o.children === l.children && !Ae.current) {
							t = Dt(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var u = o.dependencies;
							if (u !== null) {
								i = o.child;
								for (var a = u.firstContext; a !== null; ) {
									if (a.context === r) {
										if (o.tag === 1) {
											(a = Rt(-1, n & -n)), (a.tag = 2);
											var s = o.updateQueue;
											if (s !== null) {
												s = s.shared;
												var f = s.pending;
												f === null
													? (a.next = a)
													: ((a.next = f.next), (f.next = a)),
													(s.pending = a);
											}
										}
										(o.lanes |= n),
											(a = o.alternate),
											a !== null && (a.lanes |= n),
											Vi(o.return, n, t),
											(u.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (o.tag === 10) i = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((i = o.return), i === null)) throw Error(C(341));
								(i.lanes |= n),
									(u = i.alternate),
									u !== null && (u.lanes |= n),
									Vi(i, n, t),
									(i = o.sibling);
							} else i = o.child;
							if (i !== null) i.return = o;
							else
								for (i = o; i !== null; ) {
									if (i === t) {
										i = null;
										break;
									}
									if (((o = i.sibling), o !== null)) {
										(o.return = i.return), (i = o);
										break;
									}
									i = i.return;
								}
							o = i;
						}
				je(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				Xn(t, n),
				(l = ot(l)),
				(r = r(l)),
				(t.flags |= 1),
				je(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = ct(r, t.pendingProps)),
				(l = ct(r.type, l)),
				gs(e, t, r, l, n)
			);
		case 15:
			return Qf(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : ct(r, l)),
				Al(e, t),
				(t.tag = 1),
				Be(r) ? ((e = !0), bl(t)) : (e = !1),
				Xn(t, n),
				Vf(t, r, l),
				Wi(t, r, l, n),
				Yi(null, t, r, !0, e, n)
			);
		case 19:
			return Zf(e, t, n);
		case 22:
			return Kf(e, t, n);
	}
	throw Error(C(156, t.tag));
};
function dd(e, t) {
	return Uc(e, t);
}
function fm(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function rt(e, t, n, r) {
	return new fm(e, t, n, r);
}
function ea(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dm(e) {
	if (typeof e == "function") return ea(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === wu)) return 11;
		if (e === Su) return 14;
	}
	return 2;
}
function en(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = rt(e.tag, t, e.key, e.mode)),
				(n.elementType = e.elementType),
				(n.type = e.type),
				(n.stateNode = e.stateNode),
				(n.alternate = e),
				(e.alternate = n))
			: ((n.pendingProps = t),
				(n.type = e.type),
				(n.flags = 0),
				(n.subtreeFlags = 0),
				(n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Vl(e, t, n, r, l, o) {
	var i = 2;
	if (((r = e), typeof e == "function")) ea(e) && (i = 1);
	else if (typeof e == "string") i = 5;
	else
		e: switch (e) {
			case zn:
				return yn(n.children, l, o, t);
			case gu:
				(i = 8), (l |= 8);
				break;
			case hi:
				return (
					(e = rt(12, n, t, l | 2)), (e.elementType = hi), (e.lanes = o), e
				);
			case mi:
				return (e = rt(13, n, t, l)), (e.elementType = mi), (e.lanes = o), e;
			case vi:
				return (e = rt(19, n, t, l)), (e.elementType = vi), (e.lanes = o), e;
			case xc:
				return Lo(n, l, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case wc:
							i = 10;
							break e;
						case Sc:
							i = 9;
							break e;
						case wu:
							i = 11;
							break e;
						case Su:
							i = 14;
							break e;
						case Bt:
							(i = 16), (r = null);
							break e;
					}
				throw Error(C(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = rt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function yn(e, t, n, r) {
	return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function Lo(e, t, n, r) {
	return (
		(e = rt(22, e, r, t)),
		(e.elementType = xc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function ui(e, t, n) {
	return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function ai(e, t, n) {
	return (
		(t = rt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function pm(e, t, n, r, l) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Vo(0)),
		(this.expirationTimes = Vo(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Vo(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function ta(e, t, n, r, l, o, i, u, a) {
	return (
		(e = new pm(e, t, n, u, a)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = rt(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Uu(o),
		e
	);
}
function hm(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Dn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function pd(e) {
	if (!e) return nn;
	e = e._reactInternals;
	e: {
		if (_n(e) !== e || e.tag !== 1) throw Error(C(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Be(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(C(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Be(n)) return pf(e, n, t);
	}
	return t;
}
function hd(e, t, n, r, l, o, i, u, a) {
	return (
		(e = ta(n, r, !0, e, l, o, i, u, a)),
		(e.context = pd(null)),
		(n = e.current),
		(r = Me()),
		(l = bt(n)),
		(o = Rt(r, l)),
		(o.callback = t ?? null),
		Jt(n, o, l),
		(e.current.lanes = l),
		rl(e, l, r),
		$e(e, r),
		e
	);
}
function No(e, t, n, r) {
	var l = t.current,
		o = Me(),
		i = bt(l);
	return (
		(n = pd(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Rt(o, i)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Jt(l, t, i)),
		e !== null && (mt(e, l, i, o), Fl(e, l, i)),
		i
	);
}
function po(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Ts(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function na(e, t) {
	Ts(e, t), (e = e.alternate) && Ts(e, t);
}
function mm() {
	return null;
}
var md =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
			};
function ra(e) {
	this._internalRoot = e;
}
To.prototype.render = ra.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(C(409));
	No(e, t, null, null);
};
To.prototype.unmount = ra.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		kn(function () {
			No(null, e, null, null);
		}),
			(t[Nt] = null);
	}
};
function To(e) {
	this._internalRoot = e;
}
To.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Qc();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
		Vt.splice(n, 0, e), n === 0 && Yc(e);
	}
};
function la(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Do(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Ds() {}
function vm(e, t, n, r, l) {
	if (l) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var s = po(i);
				o.call(s);
			};
		}
		var i = hd(t, r, e, 0, null, !1, !1, "", Ds);
		return (
			(e._reactRootContainer = i),
			(e[Nt] = i.current),
			Kr(e.nodeType === 8 ? e.parentNode : e),
			kn(),
			i
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == "function") {
		var u = r;
		r = function () {
			var s = po(a);
			u.call(s);
		};
	}
	var a = ta(e, 0, !1, null, null, !1, !1, "", Ds);
	return (
		(e._reactRootContainer = a),
		(e[Nt] = a.current),
		Kr(e.nodeType === 8 ? e.parentNode : e),
		kn(function () {
			No(t, a, n, r);
		}),
		a
	);
}
function zo(e, t, n, r, l) {
	var o = n._reactRootContainer;
	if (o) {
		var i = o;
		if (typeof l == "function") {
			var u = l;
			l = function () {
				var a = po(i);
				u.call(a);
			};
		}
		No(t, i, e, l);
	} else i = vm(n, t, e, l, r);
	return po(i);
}
Hc = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Pr(t.pendingLanes);
				n !== 0 &&
					(ku(t, n | 1), $e(t, de()), !(G & 6) && ((nr = de() + 500), on()));
			}
			break;
		case 13:
			kn(function () {
				var r = Tt(e, 1);
				if (r !== null) {
					var l = Me();
					mt(r, e, 1, l);
				}
			}),
				na(e, 1);
	}
};
Cu = function (e) {
	if (e.tag === 13) {
		var t = Tt(e, 134217728);
		if (t !== null) {
			var n = Me();
			mt(t, e, 134217728, n);
		}
		na(e, 134217728);
	}
};
Wc = function (e) {
	if (e.tag === 13) {
		var t = bt(e),
			n = Tt(e, t);
		if (n !== null) {
			var r = Me();
			mt(n, e, t, r);
		}
		na(e, t);
	}
};
Qc = function () {
	return Z;
};
Kc = function (e, t) {
	var n = Z;
	try {
		return (Z = e), t();
	} finally {
		Z = n;
	}
};
Pi = function (e, t, n) {
	switch (t) {
		case "input":
			if ((wi(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]',
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var l = Eo(r);
						if (!l) throw Error(C(90));
						kc(r), wi(r, l);
					}
				}
			}
			break;
		case "textarea":
			_c(e, n);
			break;
		case "select":
			(t = n.value), t != null && Wn(e, !!n.multiple, t, !1);
	}
};
zc = Ju;
jc = kn;
var ym = { usingClientEntryPoint: !1, Events: [ol, Fn, Eo, Tc, Dc, Ju] },
	Sr = {
		findFiberByHostInstance: fn,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom",
	},
	gm = {
		bundleType: Sr.bundleType,
		version: Sr.version,
		rendererPackageName: Sr.rendererPackageName,
		rendererConfig: Sr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: zt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Fc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Sr.findFiberByHostInstance || mm,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Tl.isDisabled && Tl.supportsFiber)
		try {
			(go = Tl.inject(gm)), (xt = Tl);
		} catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ym;
Ge.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!la(t)) throw Error(C(200));
	return hm(e, t, null, n);
};
Ge.createRoot = function (e, t) {
	if (!la(e)) throw Error(C(299));
	var n = !1,
		r = "",
		l = md;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = ta(e, 1, !1, null, null, n, !1, r, l)),
		(e[Nt] = t.current),
		Kr(e.nodeType === 8 ? e.parentNode : e),
		new ra(t)
	);
};
Ge.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(C(188))
			: ((e = Object.keys(e).join(",")), Error(C(268, e)));
	return (e = Fc(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
	return kn(e);
};
Ge.hydrate = function (e, t, n) {
	if (!Do(t)) throw Error(C(200));
	return zo(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
	if (!la(e)) throw Error(C(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		o = "",
		i = md;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = hd(t, null, e, 1, n ?? null, l, !1, o, i)),
		(e[Nt] = t.current),
		Kr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new To(t);
};
Ge.render = function (e, t, n) {
	if (!Do(t)) throw Error(C(200));
	return zo(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
	if (!Do(e)) throw Error(C(40));
	return e._reactRootContainer
		? (kn(function () {
				zo(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Nt] = null);
				});
			}),
			!0)
		: !1;
};
Ge.unstable_batchedUpdates = Ju;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Do(n)) throw Error(C(200));
	if (e == null || e._reactInternals === void 0) throw Error(C(38));
	return zo(e, t, n, !1, r);
};
Ge.version = "18.3.1-next-f1338f8080-20240426";
function vd() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd);
		} catch (e) {
			console.error(e);
		}
}
vd(), (mc.exports = Ge);
var oa = mc.exports;
const wm = rc(oa),
	Sm = nc({ __proto__: null, default: wm }, [oa]);
var zs = oa;
(di.createRoot = zs.createRoot), (di.hydrateRoot = zs.hydrateRoot); /**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ie() {
	return (
		(ie = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		ie.apply(this, arguments)
	);
}
var pe;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pe || (pe = {}));
const js = "popstate";
function xm(e) {
	e === void 0 && (e = {});
	function t(r, l) {
		let { pathname: o, search: i, hash: u } = r.location;
		return tl(
			"",
			{ pathname: o, search: i, hash: u },
			(l.state && l.state.usr) || null,
			(l.state && l.state.key) || "default",
		);
	}
	function n(r, l) {
		return typeof l == "string" ? l : ul(l);
	}
	return km(t, n, null, e);
}
function X(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function rr(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Em() {
	return Math.random().toString(36).substr(2, 8);
}
function Ms(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function tl(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		ie(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? un(t) : t,
			{ state: n, key: (t && t.key) || r || Em() },
		)
	);
}
function ul(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function un(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function km(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: l = document.defaultView, v5Compat: o = !1 } = r,
		i = l.history,
		u = pe.Pop,
		a = null,
		s = f();
	s == null && ((s = 0), i.replaceState(ie({}, i.state, { idx: s }), ""));
	function f() {
		return (i.state || { idx: null }).idx;
	}
	function d() {
		u = pe.Pop;
		let N = f(),
			h = N == null ? null : N - s;
		(s = N), a && a({ action: u, location: w.location, delta: h });
	}
	function p(N, h) {
		u = pe.Push;
		let c = tl(w.location, N, h);
		s = f() + 1;
		let v = Ms(c, s),
			k = w.createHref(c);
		try {
			i.pushState(v, "", k);
		} catch (R) {
			if (R instanceof DOMException && R.name === "DataCloneError") throw R;
			l.location.assign(k);
		}
		o && a && a({ action: u, location: w.location, delta: 1 });
	}
	function x(N, h) {
		u = pe.Replace;
		let c = tl(w.location, N, h);
		s = f();
		let v = Ms(c, s),
			k = w.createHref(c);
		i.replaceState(v, "", k),
			o && a && a({ action: u, location: w.location, delta: 0 });
	}
	function S(N) {
		let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
			c = typeof N == "string" ? N : ul(N);
		return (
			(c = c.replace(/ $/, "%20")),
			X(
				h,
				"No window.location.(origin|href) available to create URL for href: " +
					c,
			),
			new URL(c, h)
		);
	}
	let w = {
		get action() {
			return u;
		},
		get location() {
			return e(l, i);
		},
		listen(N) {
			if (a) throw new Error("A history only accepts one active listener");
			return (
				l.addEventListener(js, d),
				(a = N),
				() => {
					l.removeEventListener(js, d), (a = null);
				}
			);
		},
		createHref(N) {
			return t(l, N);
		},
		createURL: S,
		encodeLocation(N) {
			let h = S(N);
			return { pathname: h.pathname, search: h.search, hash: h.hash };
		},
		push: p,
		replace: x,
		go(N) {
			return i.go(N);
		},
	};
	return w;
}
var re;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(re || (re = {}));
const Cm = new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children",
]);
function _m(e) {
	return e.index === !0;
}
function ou(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((l, o) => {
			let i = [...n, o],
				u = typeof l.id == "string" ? l.id : i.join("-");
			if (
				(X(
					l.index !== !0 || !l.children,
					"Cannot specify children on an index route",
				),
				X(
					!r[u],
					'Found a route id collision on id "' +
						u +
						`".  Route id's must be globally unique within Data Router usages`,
				),
				_m(l))
			) {
				let a = ie({}, l, t(l), { id: u });
				return (r[u] = a), a;
			} else {
				let a = ie({}, l, t(l), { id: u, children: void 0 });
				return (
					(r[u] = a), l.children && (a.children = ou(l.children, t, i, r)), a
				);
			}
		})
	);
}
function Hn(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? un(t) : t,
		l = al(r.pathname || "/", n);
	if (l == null) return null;
	let o = yd(e);
	Rm(o);
	let i = null;
	for (let u = 0; i == null && u < o.length; ++u) {
		let a = Am(l);
		i = Fm(o[u], a);
	}
	return i;
}
function Pm(e, t) {
	let { route: n, pathname: r, params: l } = e;
	return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function yd(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let l = (o, i, u) => {
		let a = {
			relativePath: u === void 0 ? o.path || "" : u,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: i,
			route: o,
		};
		a.relativePath.startsWith("/") &&
			(X(
				a.relativePath.startsWith(r),
				'Absolute route path "' +
					a.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes.",
			),
			(a.relativePath = a.relativePath.slice(r.length)));
		let s = gn([r, a.relativePath]),
			f = n.concat(a);
		o.children &&
			o.children.length > 0 &&
			(X(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + s + '".'),
			),
			yd(o.children, t, f, s)),
			!(o.path == null && !o.index) &&
				t.push({ path: s, score: Mm(s, o.index), routesMeta: f });
	};
	return (
		e.forEach((o, i) => {
			var u;
			if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
			else for (let a of gd(o.path)) l(o, i, a);
		}),
		t
	);
}
function gd(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		l = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return l ? [o, ""] : [o];
	let i = gd(r.join("/")),
		u = [];
	return (
		u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
		l && u.push(...i),
		u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
	);
}
function Rm(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Om(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex),
				),
	);
}
const Lm = /^:[\w-]+$/,
	Nm = 3,
	Tm = 2,
	Dm = 1,
	zm = 10,
	jm = -2,
	Os = (e) => e === "*";
function Mm(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Os) && (r += jm),
		t && (r += Tm),
		n
			.filter((l) => !Os(l))
			.reduce((l, o) => l + (Lm.test(o) ? Nm : o === "" ? Dm : zm), r)
	);
}
function Om(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function Fm(e, t) {
	let { routesMeta: n } = e,
		r = {},
		l = "/",
		o = [];
	for (let i = 0; i < n.length; ++i) {
		let u = n[i],
			a = i === n.length - 1,
			s = l === "/" ? t : t.slice(l.length) || "/",
			f = Im(
				{ path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
				s,
			);
		if (!f) return null;
		Object.assign(r, f.params);
		let d = u.route;
		o.push({
			params: r,
			pathname: gn([l, f.pathname]),
			pathnameBase: Wm(gn([l, f.pathnameBase])),
			route: d,
		}),
			f.pathnameBase !== "/" && (l = gn([l, f.pathnameBase]));
	}
	return o;
}
function Im(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Um(e.path, e.caseSensitive, e.end),
		l = t.match(n);
	if (!l) return null;
	let o = l[0],
		i = o.replace(/(.)\/+$/, "$1"),
		u = l.slice(1);
	return {
		params: r.reduce((s, f, d) => {
			let { paramName: p, isOptional: x } = f;
			if (p === "*") {
				let w = u[d] || "";
				i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
			}
			const S = u[d];
			return (
				x && !S ? (s[p] = void 0) : (s[p] = (S || "").replace(/%2F/g, "/")), s
			);
		}, {}),
		pathname: o,
		pathnameBase: i,
		pattern: e,
	};
}
function Um(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		rr(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
		);
	let r = [],
		l =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(i, u, a) => (
						r.push({ paramName: u, isOptional: a != null }),
						a ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
				(l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
				? (l += "\\/*$")
				: e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
		[new RegExp(l, t ? void 0 : "i"), r]
	);
}
function Am(e) {
	try {
		return e
			.split("/")
			.map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
			.join("/");
	} catch (t) {
		return (
			rr(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ")."),
			),
			e
		);
	}
}
function al(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function Bm(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: l = "",
	} = typeof e == "string" ? un(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : $m(n, t)) : t,
		search: Qm(r),
		hash: Km(l),
	};
}
function $m(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((l) => {
			l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function si(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." +
			t +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." + n + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function wd(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
	);
}
function Vm(e, t) {
	let n = wd(e);
	return t
		? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function Hm(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == "string"
		? (l = un(e))
		: ((l = ie({}, e)),
			X(
				!l.pathname || !l.pathname.includes("?"),
				si("?", "pathname", "search", l),
			),
			X(
				!l.pathname || !l.pathname.includes("#"),
				si("#", "pathname", "hash", l),
			),
			X(!l.search || !l.search.includes("#"), si("#", "search", "hash", l)));
	let o = e === "" || l.pathname === "",
		i = o ? "/" : l.pathname,
		u;
	if (i == null) u = n;
	else {
		let d = t.length - 1;
		if (!r && i.startsWith("..")) {
			let p = i.split("/");
			for (; p[0] === ".."; ) p.shift(), (d -= 1);
			l.pathname = p.join("/");
		}
		u = d >= 0 ? t[d] : "/";
	}
	let a = Bm(l, u),
		s = i && i !== "/" && i.endsWith("/"),
		f = (o || i === ".") && n.endsWith("/");
	return !a.pathname.endsWith("/") && (s || f) && (a.pathname += "/"), a;
}
const gn = (e) => e.join("/").replace(/\/\/+/g, "/"),
	Wm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Qm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	Km = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ia {
	constructor(t, n, r, l) {
		l === void 0 && (l = !1),
			(this.status = t),
			(this.statusText = n || ""),
			(this.internal = l),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r);
	}
}
function ua(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const Sd = ["post", "put", "patch", "delete"],
	Ym = new Set(Sd),
	Xm = ["get", ...Sd],
	Gm = new Set(Xm),
	Zm = new Set([301, 302, 303, 307, 308]),
	Jm = new Set([307, 308]),
	ci = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	qm = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	xr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
	aa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	bm = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	xd = "remix-router-transitions";
function ev(e) {
	const t = e.window ? e.window : typeof window < "u" ? window : void 0,
		n =
			typeof t < "u" &&
			typeof t.document < "u" &&
			typeof t.document.createElement < "u",
		r = !n;
	X(
		e.routes.length > 0,
		"You must provide a non-empty routes array to createRouter",
	);
	let l;
	if (e.mapRouteProperties) l = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let y = e.detectErrorBoundary;
		l = (g) => ({ hasErrorBoundary: y(g) });
	} else l = bm;
	let o = {},
		i = ou(e.routes, l, void 0, o),
		u,
		a = e.basename || "/",
		s = e.unstable_dataStrategy || lv,
		f = ie(
			{
				v7_fetcherPersist: !1,
				v7_normalizeFormMethod: !1,
				v7_partialHydration: !1,
				v7_prependBasename: !1,
				v7_relativeSplatPath: !1,
				unstable_skipActionErrorRevalidation: !1,
			},
			e.future,
		),
		d = null,
		p = new Set(),
		x = null,
		S = null,
		w = null,
		N = e.hydrationData != null,
		h = Hn(i, e.history.location, a),
		c = null;
	if (h == null) {
		let y = be(404, { pathname: e.history.location.pathname }),
			{ matches: g, route: E } = Qs(i);
		(h = g), (c = { [E.id]: y });
	}
	let v,
		k = h.some((y) => y.route.lazy),
		R = h.some((y) => y.route.loader);
	if (k) v = !1;
	else if (!R) v = !0;
	else if (f.v7_partialHydration) {
		let y = e.hydrationData ? e.hydrationData.loaderData : null,
			g = e.hydrationData ? e.hydrationData.errors : null,
			E = (_) =>
				_.route.loader
					? typeof _.route.loader == "function" && _.route.loader.hydrate === !0
						? !1
						: (y && y[_.route.id] !== void 0) || (g && g[_.route.id] !== void 0)
					: !0;
		if (g) {
			let _ = h.findIndex((j) => g[j.route.id] !== void 0);
			v = h.slice(0, _ + 1).every(E);
		} else v = h.every(E);
	} else v = e.hydrationData != null;
	let D,
		m = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: h,
			initialized: v,
			navigation: ci,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || c,
			fetchers: new Map(),
			blockers: new Map(),
		},
		L = pe.Pop,
		F = !1,
		M,
		K = !1,
		fe = new Map(),
		oe = null,
		Se = !1,
		ut = !1,
		jt = [],
		Mt = [],
		P = new Map(),
		A = 0,
		$ = -1,
		J = new Map(),
		q = new Set(),
		at = new Map(),
		Ve = new Map(),
		He = new Set(),
		De = new Map(),
		Je = new Map(),
		Mo = !1;
	function zd() {
		if (
			((d = e.history.listen((y) => {
				let { action: g, location: E, delta: _ } = y;
				if (Mo) {
					Mo = !1;
					return;
				}
				rr(
					Je.size === 0 || _ != null,
					"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
				);
				let j = Sa({
					currentLocation: m.location,
					nextLocation: E,
					historyAction: g,
				});
				if (j && _ != null) {
					(Mo = !0),
						e.history.go(_ * -1),
						cl(j, {
							state: "blocked",
							location: E,
							proceed() {
								cl(j, {
									state: "proceeding",
									proceed: void 0,
									reset: void 0,
									location: E,
								}),
									e.history.go(_);
							},
							reset() {
								let H = new Map(m.blockers);
								H.set(j, xr), We({ blockers: H });
							},
						});
					return;
				}
				return an(g, E);
			})),
			n)
		) {
			vv(t, fe);
			let y = () => yv(t, fe);
			t.addEventListener("pagehide", y),
				(oe = () => t.removeEventListener("pagehide", y));
		}
		return m.initialized || an(pe.Pop, m.location, { initialHydration: !0 }), D;
	}
	function jd() {
		d && d(),
			oe && oe(),
			p.clear(),
			M && M.abort(),
			m.fetchers.forEach((y, g) => sl(g)),
			m.blockers.forEach((y, g) => wa(g));
	}
	function Md(y) {
		return p.add(y), () => p.delete(y);
	}
	function We(y, g) {
		g === void 0 && (g = {}), (m = ie({}, m, y));
		let E = [],
			_ = [];
		f.v7_fetcherPersist &&
			m.fetchers.forEach((j, H) => {
				j.state === "idle" && (He.has(H) ? _.push(H) : E.push(H));
			}),
			[...p].forEach((j) =>
				j(m, {
					deletedFetchers: _,
					unstable_viewTransitionOpts: g.viewTransitionOpts,
					unstable_flushSync: g.flushSync === !0,
				}),
			),
			f.v7_fetcherPersist &&
				(E.forEach((j) => m.fetchers.delete(j)), _.forEach((j) => sl(j)));
	}
	function ur(y, g, E) {
		var _, j;
		let { flushSync: H } = E === void 0 ? {} : E,
			I =
				m.actionData != null &&
				m.navigation.formMethod != null &&
				dt(m.navigation.formMethod) &&
				m.navigation.state === "loading" &&
				((_ = y.state) == null ? void 0 : _._isRedirect) !== !0,
			O;
		g.actionData
			? Object.keys(g.actionData).length > 0
				? (O = g.actionData)
				: (O = null)
			: I
				? (O = m.actionData)
				: (O = null);
		let W = g.loaderData
				? Hs(m.loaderData, g.loaderData, g.matches || [], g.errors)
				: m.loaderData,
			V = m.blockers;
		V.size > 0 && ((V = new Map(V)), V.forEach((B, ne) => V.set(ne, xr)));
		let xe =
			F === !0 ||
			(m.navigation.formMethod != null &&
				dt(m.navigation.formMethod) &&
				((j = y.state) == null ? void 0 : j._isRedirect) !== !0);
		u && ((i = u), (u = void 0)),
			Se ||
				L === pe.Pop ||
				(L === pe.Push
					? e.history.push(y, y.state)
					: L === pe.Replace && e.history.replace(y, y.state));
		let Ee;
		if (L === pe.Pop) {
			let B = fe.get(m.location.pathname);
			B && B.has(y.pathname)
				? (Ee = { currentLocation: m.location, nextLocation: y })
				: fe.has(y.pathname) &&
					(Ee = { currentLocation: y, nextLocation: m.location });
		} else if (K) {
			let B = fe.get(m.location.pathname);
			B
				? B.add(y.pathname)
				: ((B = new Set([y.pathname])), fe.set(m.location.pathname, B)),
				(Ee = { currentLocation: m.location, nextLocation: y });
		}
		We(
			ie({}, g, {
				actionData: O,
				loaderData: W,
				historyAction: L,
				location: y,
				initialized: !0,
				navigation: ci,
				revalidation: "idle",
				restoreScrollPosition: Ea(y, g.matches || m.matches),
				preventScrollReset: xe,
				blockers: V,
			}),
			{ viewTransitionOpts: Ee, flushSync: H === !0 },
		),
			(L = pe.Pop),
			(F = !1),
			(K = !1),
			(Se = !1),
			(ut = !1),
			(jt = []),
			(Mt = []);
	}
	async function pa(y, g) {
		if (typeof y == "number") {
			e.history.go(y);
			return;
		}
		let E = iu(
				m.location,
				m.matches,
				a,
				f.v7_prependBasename,
				y,
				f.v7_relativeSplatPath,
				g == null ? void 0 : g.fromRouteId,
				g == null ? void 0 : g.relative,
			),
			{
				path: _,
				submission: j,
				error: H,
			} = Fs(f.v7_normalizeFormMethod, !1, E, g),
			I = m.location,
			O = tl(m.location, _, g && g.state);
		O = ie({}, O, e.history.encodeLocation(O));
		let W = g && g.replace != null ? g.replace : void 0,
			V = pe.Push;
		W === !0
			? (V = pe.Replace)
			: W === !1 ||
				(j != null &&
					dt(j.formMethod) &&
					j.formAction === m.location.pathname + m.location.search &&
					(V = pe.Replace));
		let xe =
				g && "preventScrollReset" in g ? g.preventScrollReset === !0 : void 0,
			Ee = (g && g.unstable_flushSync) === !0,
			B = Sa({ currentLocation: I, nextLocation: O, historyAction: V });
		if (B) {
			cl(B, {
				state: "blocked",
				location: O,
				proceed() {
					cl(B, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: O,
					}),
						pa(y, g);
				},
				reset() {
					let ne = new Map(m.blockers);
					ne.set(B, xr), We({ blockers: ne });
				},
			});
			return;
		}
		return await an(V, O, {
			submission: j,
			pendingError: H,
			preventScrollReset: xe,
			replace: g && g.replace,
			enableViewTransition: g && g.unstable_viewTransition,
			flushSync: Ee,
		});
	}
	function Od() {
		if (
			(Oo(),
			We({ revalidation: "loading" }),
			m.navigation.state !== "submitting")
		) {
			if (m.navigation.state === "idle") {
				an(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			an(L || m.historyAction, m.navigation.location, {
				overrideNavigation: m.navigation,
			});
		}
	}
	async function an(y, g, E) {
		M && M.abort(),
			(M = null),
			(L = y),
			(Se = (E && E.startUninterruptedRevalidation) === !0),
			Wd(m.location, m.matches),
			(F = (E && E.preventScrollReset) === !0),
			(K = (E && E.enableViewTransition) === !0);
		let _ = u || i,
			j = E && E.overrideNavigation,
			H = Hn(_, g, a),
			I = (E && E.flushSync) === !0;
		if (!H) {
			let B = be(404, { pathname: g.pathname }),
				{ matches: ne, route: ye } = Qs(_);
			Fo(),
				ur(
					g,
					{ matches: ne, loaderData: {}, errors: { [ye.id]: B } },
					{ flushSync: I },
				);
			return;
		}
		if (
			m.initialized &&
			!ut &&
			cv(m.location, g) &&
			!(E && E.submission && dt(E.submission.formMethod))
		) {
			ur(g, { matches: H }, { flushSync: I });
			return;
		}
		M = new AbortController();
		let O = Tn(e.history, g, M.signal, E && E.submission),
			W;
		if (E && E.pendingError)
			W = [Ir(H).route.id, { type: re.error, error: E.pendingError }];
		else if (E && E.submission && dt(E.submission.formMethod)) {
			let B = await Fd(O, g, E.submission, H, {
				replace: E.replace,
				flushSync: I,
			});
			if (B.shortCircuited) return;
			(W = B.pendingActionResult),
				(j = fi(g, E.submission)),
				(I = !1),
				(O = Tn(e.history, O.url, O.signal));
		}
		let {
			shortCircuited: V,
			loaderData: xe,
			errors: Ee,
		} = await Id(
			O,
			g,
			H,
			j,
			E && E.submission,
			E && E.fetcherSubmission,
			E && E.replace,
			E && E.initialHydration === !0,
			I,
			W,
		);
		V ||
			((M = null),
			ur(g, ie({ matches: H }, Ws(W), { loaderData: xe, errors: Ee })));
	}
	async function Fd(y, g, E, _, j) {
		j === void 0 && (j = {}), Oo();
		let H = hv(g, E);
		We({ navigation: H }, { flushSync: j.flushSync === !0 });
		let I,
			O = au(_, g);
		if (!O.route.action && !O.route.lazy)
			I = {
				type: re.error,
				error: be(405, {
					method: y.method,
					pathname: g.pathname,
					routeId: O.route.id,
				}),
			};
		else if (((I = (await sr("action", y, [O], _))[0]), y.signal.aborted))
			return { shortCircuited: !0 };
		if (mn(I)) {
			let W;
			return (
				j && j.replace != null
					? (W = j.replace)
					: (W =
							Bs(I.response.headers.get("Location"), new URL(y.url), a) ===
							m.location.pathname + m.location.search),
				await ar(y, I, { submission: E, replace: W }),
				{ shortCircuited: !0 }
			);
		}
		if (hn(I)) throw be(400, { type: "defer-action" });
		if (nt(I)) {
			let W = Ir(_, O.route.id);
			return (
				(j && j.replace) !== !0 && (L = pe.Push),
				{ pendingActionResult: [W.route.id, I] }
			);
		}
		return { pendingActionResult: [O.route.id, I] };
	}
	async function Id(y, g, E, _, j, H, I, O, W, V) {
		let xe = _ || fi(g, j),
			Ee = j || H || Xs(xe),
			B = u || i,
			[ne, ye] = Is(
				e.history,
				m,
				E,
				Ee,
				g,
				f.v7_partialHydration && O === !0,
				f.unstable_skipActionErrorRevalidation,
				ut,
				jt,
				Mt,
				He,
				at,
				q,
				B,
				a,
				V,
			);
		if (
			(Fo(
				(Y) =>
					!(E && E.some((ze) => ze.route.id === Y)) ||
					(ne && ne.some((ze) => ze.route.id === Y)),
			),
			($ = ++A),
			ne.length === 0 && ye.length === 0)
		) {
			let Y = ya();
			return (
				ur(
					g,
					ie(
						{
							matches: E,
							loaderData: {},
							errors: V && nt(V[1]) ? { [V[0]]: V[1].error } : null,
						},
						Ws(V),
						Y ? { fetchers: new Map(m.fetchers) } : {},
					),
					{ flushSync: W },
				),
				{ shortCircuited: !0 }
			);
		}
		if (!Se && (!f.v7_partialHydration || !O)) {
			ye.forEach((ze) => {
				let qe = m.fetchers.get(ze.key),
					ke = Er(void 0, qe ? qe.data : void 0);
				m.fetchers.set(ze.key, ke);
			});
			let Y;
			V && !nt(V[1])
				? (Y = { [V[0]]: V[1].data })
				: m.actionData &&
					(Object.keys(m.actionData).length === 0
						? (Y = null)
						: (Y = m.actionData)),
				We(
					ie(
						{ navigation: xe },
						Y !== void 0 ? { actionData: Y } : {},
						ye.length > 0 ? { fetchers: new Map(m.fetchers) } : {},
					),
					{ flushSync: W },
				);
		}
		ye.forEach((Y) => {
			P.has(Y.key) && Ft(Y.key), Y.controller && P.set(Y.key, Y.controller);
		});
		let fr = () => ye.forEach((Y) => Ft(Y.key));
		M && M.signal.addEventListener("abort", fr);
		let { loaderResults: It, fetcherResults: Pn } = await ha(
			m.matches,
			E,
			ne,
			ye,
			y,
		);
		if (y.signal.aborted) return { shortCircuited: !0 };
		M && M.signal.removeEventListener("abort", fr),
			ye.forEach((Y) => P.delete(Y.key));
		let Rn = Ks([...It, ...Pn]);
		if (Rn) {
			if (Rn.idx >= ne.length) {
				let Y = ye[Rn.idx - ne.length].key;
				q.add(Y);
			}
			return await ar(y, Rn.result, { replace: I }), { shortCircuited: !0 };
		}
		let { loaderData: Ln, errors: yt } = Vs(m, E, ne, It, V, ye, Pn, De);
		De.forEach((Y, ze) => {
			Y.subscribe((qe) => {
				(qe || Y.done) && De.delete(ze);
			});
		}),
			f.v7_partialHydration &&
				O &&
				m.errors &&
				Object.entries(m.errors)
					.filter((Y) => {
						let [ze] = Y;
						return !ne.some((qe) => qe.route.id === ze);
					})
					.forEach((Y) => {
						let [ze, qe] = Y;
						yt = Object.assign(yt || {}, { [ze]: qe });
					});
		let fl = ya(),
			dl = ga($),
			pl = fl || dl || ye.length > 0;
		return ie(
			{ loaderData: Ln, errors: yt },
			pl ? { fetchers: new Map(m.fetchers) } : {},
		);
	}
	function Ud(y, g, E, _) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
			);
		P.has(y) && Ft(y);
		let j = (_ && _.unstable_flushSync) === !0,
			H = u || i,
			I = iu(
				m.location,
				m.matches,
				a,
				f.v7_prependBasename,
				E,
				f.v7_relativeSplatPath,
				g,
				_ == null ? void 0 : _.relative,
			),
			O = Hn(H, I, a);
		if (!O) {
			cr(y, g, be(404, { pathname: I }), { flushSync: j });
			return;
		}
		let {
			path: W,
			submission: V,
			error: xe,
		} = Fs(f.v7_normalizeFormMethod, !0, I, _);
		if (xe) {
			cr(y, g, xe, { flushSync: j });
			return;
		}
		let Ee = au(O, W);
		if (((F = (_ && _.preventScrollReset) === !0), V && dt(V.formMethod))) {
			Ad(y, g, W, Ee, O, j, V);
			return;
		}
		at.set(y, { routeId: g, path: W }), Bd(y, g, W, Ee, O, j, V);
	}
	async function Ad(y, g, E, _, j, H, I) {
		if ((Oo(), at.delete(y), !_.route.action && !_.route.lazy)) {
			let ke = be(405, { method: I.formMethod, pathname: E, routeId: g });
			cr(y, g, ke, { flushSync: H });
			return;
		}
		let O = m.fetchers.get(y);
		Ot(y, mv(I, O), { flushSync: H });
		let W = new AbortController(),
			V = Tn(e.history, E, W.signal, I);
		P.set(y, W);
		let xe = A,
			B = (await sr("action", V, [_], j))[0];
		if (V.signal.aborted) {
			P.get(y) === W && P.delete(y);
			return;
		}
		if (f.v7_fetcherPersist && He.has(y)) {
			if (mn(B) || nt(B)) {
				Ot(y, At(void 0));
				return;
			}
		} else {
			if (mn(B))
				if ((P.delete(y), $ > xe)) {
					Ot(y, At(void 0));
					return;
				} else
					return q.add(y), Ot(y, Er(I)), ar(V, B, { fetcherSubmission: I });
			if (nt(B)) {
				cr(y, g, B.error);
				return;
			}
		}
		if (hn(B)) throw be(400, { type: "defer-action" });
		let ne = m.navigation.location || m.location,
			ye = Tn(e.history, ne, W.signal),
			fr = u || i,
			It =
				m.navigation.state !== "idle"
					? Hn(fr, m.navigation.location, a)
					: m.matches;
		X(It, "Didn't find any matches after fetcher action");
		let Pn = ++A;
		J.set(y, Pn);
		let Rn = Er(I, B.data);
		m.fetchers.set(y, Rn);
		let [Ln, yt] = Is(
			e.history,
			m,
			It,
			I,
			ne,
			!1,
			f.unstable_skipActionErrorRevalidation,
			ut,
			jt,
			Mt,
			He,
			at,
			q,
			fr,
			a,
			[_.route.id, B],
		);
		yt
			.filter((ke) => ke.key !== y)
			.forEach((ke) => {
				let dr = ke.key,
					ka = m.fetchers.get(dr),
					Kd = Er(void 0, ka ? ka.data : void 0);
				m.fetchers.set(dr, Kd),
					P.has(dr) && Ft(dr),
					ke.controller && P.set(dr, ke.controller);
			}),
			We({ fetchers: new Map(m.fetchers) });
		let fl = () => yt.forEach((ke) => Ft(ke.key));
		W.signal.addEventListener("abort", fl);
		let { loaderResults: dl, fetcherResults: pl } = await ha(
			m.matches,
			It,
			Ln,
			yt,
			ye,
		);
		if (W.signal.aborted) return;
		W.signal.removeEventListener("abort", fl),
			J.delete(y),
			P.delete(y),
			yt.forEach((ke) => P.delete(ke.key));
		let Y = Ks([...dl, ...pl]);
		if (Y) {
			if (Y.idx >= Ln.length) {
				let ke = yt[Y.idx - Ln.length].key;
				q.add(ke);
			}
			return ar(ye, Y.result);
		}
		let { loaderData: ze, errors: qe } = Vs(
			m,
			m.matches,
			Ln,
			dl,
			void 0,
			yt,
			pl,
			De,
		);
		if (m.fetchers.has(y)) {
			let ke = At(B.data);
			m.fetchers.set(y, ke);
		}
		ga(Pn),
			m.navigation.state === "loading" && Pn > $
				? (X(L, "Expected pending action"),
					M && M.abort(),
					ur(m.navigation.location, {
						matches: It,
						loaderData: ze,
						errors: qe,
						fetchers: new Map(m.fetchers),
					}))
				: (We({
						errors: qe,
						loaderData: Hs(m.loaderData, ze, It, qe),
						fetchers: new Map(m.fetchers),
					}),
					(ut = !1));
	}
	async function Bd(y, g, E, _, j, H, I) {
		let O = m.fetchers.get(y);
		Ot(y, Er(I, O ? O.data : void 0), { flushSync: H });
		let W = new AbortController(),
			V = Tn(e.history, E, W.signal);
		P.set(y, W);
		let xe = A,
			B = (await sr("loader", V, [_], j))[0];
		if (
			(hn(B) && (B = (await _d(B, V.signal, !0)) || B),
			P.get(y) === W && P.delete(y),
			!V.signal.aborted)
		) {
			if (He.has(y)) {
				Ot(y, At(void 0));
				return;
			}
			if (mn(B))
				if ($ > xe) {
					Ot(y, At(void 0));
					return;
				} else {
					q.add(y), await ar(V, B);
					return;
				}
			if (nt(B)) {
				cr(y, g, B.error);
				return;
			}
			X(!hn(B), "Unhandled fetcher deferred data"), Ot(y, At(B.data));
		}
	}
	async function ar(y, g, E) {
		let {
			submission: _,
			fetcherSubmission: j,
			replace: H,
		} = E === void 0 ? {} : E;
		g.response.headers.has("X-Remix-Revalidate") && (ut = !0);
		let I = g.response.headers.get("Location");
		X(I, "Expected a Location header on the redirect Response"),
			(I = Bs(I, new URL(y.url), a));
		let O = tl(m.location, I, { _isRedirect: !0 });
		if (n) {
			let ne = !1;
			if (g.response.headers.has("X-Remix-Reload-Document")) ne = !0;
			else if (aa.test(I)) {
				const ye = e.history.createURL(I);
				ne = ye.origin !== t.location.origin || al(ye.pathname, a) == null;
			}
			if (ne) {
				H ? t.location.replace(I) : t.location.assign(I);
				return;
			}
		}
		M = null;
		let W = H === !0 ? pe.Replace : pe.Push,
			{ formMethod: V, formAction: xe, formEncType: Ee } = m.navigation;
		!_ && !j && V && xe && Ee && (_ = Xs(m.navigation));
		let B = _ || j;
		if (Jm.has(g.response.status) && B && dt(B.formMethod))
			await an(W, O, {
				submission: ie({}, B, { formAction: I }),
				preventScrollReset: F,
			});
		else {
			let ne = fi(O, _);
			await an(W, O, {
				overrideNavigation: ne,
				fetcherSubmission: j,
				preventScrollReset: F,
			});
		}
	}
	async function sr(y, g, E, _) {
		try {
			let j = await ov(s, y, g, E, _, o, l);
			return await Promise.all(
				j.map((H, I) => {
					if (fv(H)) {
						let O = H.result;
						return {
							type: re.redirect,
							response: av(O, g, E[I].route.id, _, a, f.v7_relativeSplatPath),
						};
					}
					return uv(H);
				}),
			);
		} catch (j) {
			return E.map(() => ({ type: re.error, error: j }));
		}
	}
	async function ha(y, g, E, _, j) {
		let [H, ...I] = await Promise.all([
			E.length ? sr("loader", j, E, g) : [],
			..._.map((O) => {
				if (O.matches && O.match && O.controller) {
					let W = Tn(e.history, O.path, O.controller.signal);
					return sr("loader", W, [O.match], O.matches).then((V) => V[0]);
				} else
					return Promise.resolve({
						type: re.error,
						error: be(404, { pathname: O.path }),
					});
			}),
		]);
		return (
			await Promise.all([
				Ys(
					y,
					E,
					H,
					H.map(() => j.signal),
					!1,
					m.loaderData,
				),
				Ys(
					y,
					_.map((O) => O.match),
					I,
					_.map((O) => (O.controller ? O.controller.signal : null)),
					!0,
				),
			]),
			{ loaderResults: H, fetcherResults: I }
		);
	}
	function Oo() {
		(ut = !0),
			jt.push(...Fo()),
			at.forEach((y, g) => {
				P.has(g) && (Mt.push(g), Ft(g));
			});
	}
	function Ot(y, g, E) {
		E === void 0 && (E = {}),
			m.fetchers.set(y, g),
			We(
				{ fetchers: new Map(m.fetchers) },
				{ flushSync: (E && E.flushSync) === !0 },
			);
	}
	function cr(y, g, E, _) {
		_ === void 0 && (_ = {});
		let j = Ir(m.matches, g);
		sl(y),
			We(
				{ errors: { [j.route.id]: E }, fetchers: new Map(m.fetchers) },
				{ flushSync: (_ && _.flushSync) === !0 },
			);
	}
	function ma(y) {
		return (
			f.v7_fetcherPersist &&
				(Ve.set(y, (Ve.get(y) || 0) + 1), He.has(y) && He.delete(y)),
			m.fetchers.get(y) || qm
		);
	}
	function sl(y) {
		let g = m.fetchers.get(y);
		P.has(y) && !(g && g.state === "loading" && J.has(y)) && Ft(y),
			at.delete(y),
			J.delete(y),
			q.delete(y),
			He.delete(y),
			m.fetchers.delete(y);
	}
	function $d(y) {
		if (f.v7_fetcherPersist) {
			let g = (Ve.get(y) || 0) - 1;
			g <= 0 ? (Ve.delete(y), He.add(y)) : Ve.set(y, g);
		} else sl(y);
		We({ fetchers: new Map(m.fetchers) });
	}
	function Ft(y) {
		let g = P.get(y);
		X(g, "Expected fetch controller: " + y), g.abort(), P.delete(y);
	}
	function va(y) {
		for (let g of y) {
			let E = ma(g),
				_ = At(E.data);
			m.fetchers.set(g, _);
		}
	}
	function ya() {
		let y = [],
			g = !1;
		for (let E of q) {
			let _ = m.fetchers.get(E);
			X(_, "Expected fetcher: " + E),
				_.state === "loading" && (q.delete(E), y.push(E), (g = !0));
		}
		return va(y), g;
	}
	function ga(y) {
		let g = [];
		for (let [E, _] of J)
			if (_ < y) {
				let j = m.fetchers.get(E);
				X(j, "Expected fetcher: " + E),
					j.state === "loading" && (Ft(E), J.delete(E), g.push(E));
			}
		return va(g), g.length > 0;
	}
	function Vd(y, g) {
		let E = m.blockers.get(y) || xr;
		return Je.get(y) !== g && Je.set(y, g), E;
	}
	function wa(y) {
		m.blockers.delete(y), Je.delete(y);
	}
	function cl(y, g) {
		let E = m.blockers.get(y) || xr;
		X(
			(E.state === "unblocked" && g.state === "blocked") ||
				(E.state === "blocked" && g.state === "blocked") ||
				(E.state === "blocked" && g.state === "proceeding") ||
				(E.state === "blocked" && g.state === "unblocked") ||
				(E.state === "proceeding" && g.state === "unblocked"),
			"Invalid blocker state transition: " + E.state + " -> " + g.state,
		);
		let _ = new Map(m.blockers);
		_.set(y, g), We({ blockers: _ });
	}
	function Sa(y) {
		let { currentLocation: g, nextLocation: E, historyAction: _ } = y;
		if (Je.size === 0) return;
		Je.size > 1 && rr(!1, "A router only supports one blocker at a time");
		let j = Array.from(Je.entries()),
			[H, I] = j[j.length - 1],
			O = m.blockers.get(H);
		if (
			!(O && O.state === "proceeding") &&
			I({ currentLocation: g, nextLocation: E, historyAction: _ })
		)
			return H;
	}
	function Fo(y) {
		let g = [];
		return (
			De.forEach((E, _) => {
				(!y || y(_)) && (E.cancel(), g.push(_), De.delete(_));
			}),
			g
		);
	}
	function Hd(y, g, E) {
		if (((x = y), (w = g), (S = E || null), !N && m.navigation === ci)) {
			N = !0;
			let _ = Ea(m.location, m.matches);
			_ != null && We({ restoreScrollPosition: _ });
		}
		return () => {
			(x = null), (w = null), (S = null);
		};
	}
	function xa(y, g) {
		return (
			(S &&
				S(
					y,
					g.map((_) => Pm(_, m.loaderData)),
				)) ||
			y.key
		);
	}
	function Wd(y, g) {
		if (x && w) {
			let E = xa(y, g);
			x[E] = w();
		}
	}
	function Ea(y, g) {
		if (x) {
			let E = xa(y, g),
				_ = x[E];
			if (typeof _ == "number") return _;
		}
		return null;
	}
	function Qd(y) {
		(o = {}), (u = ou(y, l, void 0, o));
	}
	return (
		(D = {
			get basename() {
				return a;
			},
			get future() {
				return f;
			},
			get state() {
				return m;
			},
			get routes() {
				return i;
			},
			get window() {
				return t;
			},
			initialize: zd,
			subscribe: Md,
			enableScrollRestoration: Hd,
			navigate: pa,
			fetch: Ud,
			revalidate: Od,
			createHref: (y) => e.history.createHref(y),
			encodeLocation: (y) => e.history.encodeLocation(y),
			getFetcher: ma,
			deleteFetcher: $d,
			dispose: jd,
			getBlocker: Vd,
			deleteBlocker: wa,
			_internalFetchControllers: P,
			_internalActiveDeferreds: De,
			_internalSetRoutes: Qd,
		}),
		D
	);
}
function tv(e) {
	return (
		e != null &&
		(("formData" in e && e.formData != null) ||
			("body" in e && e.body !== void 0))
	);
}
function iu(e, t, n, r, l, o, i, u) {
	let a, s;
	if (i) {
		a = [];
		for (let d of t)
			if ((a.push(d), d.route.id === i)) {
				s = d;
				break;
			}
	} else (a = t), (s = t[t.length - 1]);
	let f = Hm(l || ".", Vm(a, o), al(e.pathname, n) || e.pathname, u === "path");
	return (
		l == null && ((f.search = e.search), (f.hash = e.hash)),
		(l == null || l === "" || l === ".") &&
			s &&
			s.route.index &&
			!sa(f.search) &&
			(f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
		r &&
			n !== "/" &&
			(f.pathname = f.pathname === "/" ? n : gn([n, f.pathname])),
		ul(f)
	);
}
function Fs(e, t, n, r) {
	if (!r || !tv(r)) return { path: n };
	if (r.formMethod && !pv(r.formMethod))
		return { path: n, error: be(405, { method: r.formMethod }) };
	let l = () => ({ path: n, error: be(400, { type: "invalid-body" }) }),
		o = r.formMethod || "get",
		i = e ? o.toUpperCase() : o.toLowerCase(),
		u = kd(n);
	if (r.body !== void 0) {
		if (r.formEncType === "text/plain") {
			if (!dt(i)) return l();
			let p =
				typeof r.body == "string"
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
						? Array.from(r.body.entries()).reduce((x, S) => {
								let [w, N] = S;
								return (
									"" +
									x +
									w +
									"=" +
									N +
									`
`
								);
							}, "")
						: String(r.body);
			return {
				path: n,
				submission: {
					formMethod: i,
					formAction: u,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: p,
				},
			};
		} else if (r.formEncType === "application/json") {
			if (!dt(i)) return l();
			try {
				let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: i,
						formAction: u,
						formEncType: r.formEncType,
						formData: void 0,
						json: p,
						text: void 0,
					},
				};
			} catch {
				return l();
			}
		}
	}
	X(
		typeof FormData == "function",
		"FormData is not available in this environment",
	);
	let a, s;
	if (r.formData) (a = uu(r.formData)), (s = r.formData);
	else if (r.body instanceof FormData) (a = uu(r.body)), (s = r.body);
	else if (r.body instanceof URLSearchParams) (a = r.body), (s = $s(a));
	else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
	else
		try {
			(a = new URLSearchParams(r.body)), (s = $s(a));
		} catch {
			return l();
		}
	let f = {
		formMethod: i,
		formAction: u,
		formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
		formData: s,
		json: void 0,
		text: void 0,
	};
	if (dt(f.formMethod)) return { path: n, submission: f };
	let d = un(n);
	return (
		t && d.search && sa(d.search) && a.append("index", ""),
		(d.search = "?" + a),
		{ path: ul(d), submission: f }
	);
}
function nv(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((l) => l.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function Is(e, t, n, r, l, o, i, u, a, s, f, d, p, x, S, w) {
	let N = w ? (nt(w[1]) ? w[1].error : w[1].data) : void 0,
		h = e.createURL(t.location),
		c = e.createURL(l),
		v = w && nt(w[1]) ? w[0] : void 0,
		k = v ? nv(n, v) : n,
		R = w ? w[1].statusCode : void 0,
		D = i && R && R >= 400,
		m = k.filter((F, M) => {
			let { route: K } = F;
			if (K.lazy) return !0;
			if (K.loader == null) return !1;
			if (o)
				return typeof K.loader != "function" || K.loader.hydrate
					? !0
					: t.loaderData[K.id] === void 0 &&
							(!t.errors || t.errors[K.id] === void 0);
			if (
				rv(t.loaderData, t.matches[M], F) ||
				a.some((Se) => Se === F.route.id)
			)
				return !0;
			let fe = t.matches[M],
				oe = F;
			return Us(
				F,
				ie(
					{
						currentUrl: h,
						currentParams: fe.params,
						nextUrl: c,
						nextParams: oe.params,
					},
					r,
					{
						actionResult: N,
						unstable_actionStatus: R,
						defaultShouldRevalidate: D
							? !1
							: u ||
								h.pathname + h.search === c.pathname + c.search ||
								h.search !== c.search ||
								Ed(fe, oe),
					},
				),
			);
		}),
		L = [];
	return (
		d.forEach((F, M) => {
			if (o || !n.some((ut) => ut.route.id === F.routeId) || f.has(M)) return;
			let K = Hn(x, F.path, S);
			if (!K) {
				L.push({
					key: M,
					routeId: F.routeId,
					path: F.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let fe = t.fetchers.get(M),
				oe = au(K, F.path),
				Se = !1;
			p.has(M)
				? (Se = !1)
				: s.includes(M)
					? (Se = !0)
					: fe && fe.state !== "idle" && fe.data === void 0
						? (Se = u)
						: (Se = Us(
								oe,
								ie(
									{
										currentUrl: h,
										currentParams: t.matches[t.matches.length - 1].params,
										nextUrl: c,
										nextParams: n[n.length - 1].params,
									},
									r,
									{
										actionResult: N,
										unstable_actionStatus: R,
										defaultShouldRevalidate: D ? !1 : u,
									},
								),
							)),
				Se &&
					L.push({
						key: M,
						routeId: F.routeId,
						path: F.path,
						matches: K,
						match: oe,
						controller: new AbortController(),
					});
		}),
		[m, L]
	);
}
function rv(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		l = e[n.route.id] === void 0;
	return r || l;
}
function Ed(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
	);
}
function Us(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
async function As(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let l = n[e.id];
	X(l, "No route found in manifest");
	let o = {};
	for (let i in r) {
		let a = l[i] !== void 0 && i !== "hasErrorBoundary";
		rr(
			!a,
			'Route "' +
				l.id +
				'" has a static property "' +
				i +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + i + '" will be ignored.'),
		),
			!a && !Cm.has(i) && (o[i] = r[i]);
	}
	Object.assign(l, o), Object.assign(l, ie({}, t(l), { lazy: void 0 }));
}
function lv(e) {
	return Promise.all(e.matches.map((t) => t.resolve()));
}
async function ov(e, t, n, r, l, o, i, u) {
	let a = r.reduce((d, p) => d.add(p.route.id), new Set()),
		s = new Set(),
		f = await e({
			matches: l.map((d) => {
				let p = a.has(d.route.id);
				return ie({}, d, {
					shouldLoad: p,
					resolve: (S) => (
						s.add(d.route.id),
						p
							? iv(t, n, d, o, i, S, u)
							: Promise.resolve({ type: re.data, result: void 0 })
					),
				});
			}),
			request: n,
			params: l[0].params,
			context: u,
		});
	return (
		l.forEach((d) =>
			X(
				s.has(d.route.id),
				'`match.resolve()` was not called for route id "' +
					d.route.id +
					'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
			),
		),
		f.filter((d, p) => a.has(l[p].route.id))
	);
}
async function iv(e, t, n, r, l, o, i) {
	let u,
		a,
		s = (f) => {
			let d,
				p = new Promise((w, N) => (d = N));
			(a = () => d()), t.signal.addEventListener("abort", a);
			let x = (w) =>
					typeof f != "function"
						? Promise.reject(
								new Error(
									"You cannot call the handler for a route which defines a boolean " +
										('"' + e + '" [routeId: ' + n.route.id + "]"),
								),
							)
						: f(
								{ request: t, params: n.params, context: i },
								...(w !== void 0 ? [w] : []),
							),
				S;
			return (
				o
					? (S = o((w) => x(w)))
					: (S = (async () => {
							try {
								return { type: "data", result: await x() };
							} catch (w) {
								return { type: "error", result: w };
							}
						})()),
				Promise.race([S, p])
			);
		};
	try {
		let f = n.route[e];
		if (n.route.lazy)
			if (f) {
				let d,
					[p] = await Promise.all([
						s(f).catch((x) => {
							d = x;
						}),
						As(n.route, l, r),
					]);
				if (d !== void 0) throw d;
				u = p;
			} else if ((await As(n.route, l, r), (f = n.route[e]), f)) u = await s(f);
			else if (e === "action") {
				let d = new URL(t.url),
					p = d.pathname + d.search;
				throw be(405, { method: t.method, pathname: p, routeId: n.route.id });
			} else return { type: re.data, result: void 0 };
		else if (f) u = await s(f);
		else {
			let d = new URL(t.url),
				p = d.pathname + d.search;
			throw be(404, { pathname: p });
		}
		X(
			u.result !== void 0,
			"You defined " +
				(e === "action" ? "an action" : "a loader") +
				" for route " +
				('"' +
					n.route.id +
					"\" but didn't return anything from your `" +
					e +
					"` ") +
				"function. Please return a value or `null`.",
		);
	} catch (f) {
		return { type: re.error, result: f };
	} finally {
		a && t.signal.removeEventListener("abort", a);
	}
	return u;
}
async function uv(e) {
	let { result: t, type: n, status: r } = e;
	if (Cd(t)) {
		let i;
		try {
			let u = t.headers.get("Content-Type");
			u && /\bapplication\/json\b/.test(u)
				? t.body == null
					? (i = null)
					: (i = await t.json())
				: (i = await t.text());
		} catch (u) {
			return { type: re.error, error: u };
		}
		return n === re.error
			? {
					type: re.error,
					error: new ia(t.status, t.statusText, i),
					statusCode: t.status,
					headers: t.headers,
				}
			: { type: re.data, data: i, statusCode: t.status, headers: t.headers };
	}
	if (n === re.error)
		return { type: re.error, error: t, statusCode: ua(t) ? t.status : r };
	if (dv(t)) {
		var l, o;
		return {
			type: re.deferred,
			deferredData: t,
			statusCode: (l = t.init) == null ? void 0 : l.status,
			headers:
				((o = t.init) == null ? void 0 : o.headers) &&
				new Headers(t.init.headers),
		};
	}
	return { type: re.data, data: t, statusCode: r };
}
function av(e, t, n, r, l, o) {
	let i = e.headers.get("Location");
	if (
		(X(
			i,
			"Redirects returned/thrown from loaders/actions must have a Location header",
		),
		!aa.test(i))
	) {
		let u = r.slice(0, r.findIndex((a) => a.route.id === n) + 1);
		(i = iu(new URL(t.url), u, l, !0, i, o)), e.headers.set("Location", i);
	}
	return e;
}
function Bs(e, t, n) {
	if (aa.test(e)) {
		let r = e,
			l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
			o = al(l.pathname, n) != null;
		if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
	}
	return e;
}
function Tn(e, t, n, r) {
	let l = e.createURL(kd(t)).toString(),
		o = { signal: n };
	if (r && dt(r.formMethod)) {
		let { formMethod: i, formEncType: u } = r;
		(o.method = i.toUpperCase()),
			u === "application/json"
				? ((o.headers = new Headers({ "Content-Type": u })),
					(o.body = JSON.stringify(r.json)))
				: u === "text/plain"
					? (o.body = r.text)
					: u === "application/x-www-form-urlencoded" && r.formData
						? (o.body = uu(r.formData))
						: (o.body = r.formData);
	}
	return new Request(l, o);
}
function uu(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function $s(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function sv(e, t, n, r, l, o) {
	let i = {},
		u = null,
		a,
		s = !1,
		f = {},
		d = r && nt(r[1]) ? r[1].error : void 0;
	return (
		n.forEach((p, x) => {
			let S = t[x].route.id;
			if (
				(X(!mn(p), "Cannot handle redirect results in processLoaderData"),
				nt(p))
			) {
				let w = p.error;
				d !== void 0 && ((w = d), (d = void 0)), (u = u || {});
				{
					let N = Ir(e, S);
					u[N.route.id] == null && (u[N.route.id] = w);
				}
				(i[S] = void 0),
					s || ((s = !0), (a = ua(p.error) ? p.error.status : 500)),
					p.headers && (f[S] = p.headers);
			} else
				hn(p)
					? (l.set(S, p.deferredData),
						(i[S] = p.deferredData.data),
						p.statusCode != null &&
							p.statusCode !== 200 &&
							!s &&
							(a = p.statusCode),
						p.headers && (f[S] = p.headers))
					: ((i[S] = p.data),
						p.statusCode && p.statusCode !== 200 && !s && (a = p.statusCode),
						p.headers && (f[S] = p.headers));
		}),
		d !== void 0 && r && ((u = { [r[0]]: d }), (i[r[0]] = void 0)),
		{ loaderData: i, errors: u, statusCode: a || 200, loaderHeaders: f }
	);
}
function Vs(e, t, n, r, l, o, i, u) {
	let { loaderData: a, errors: s } = sv(t, n, r, l, u);
	for (let f = 0; f < o.length; f++) {
		let { key: d, match: p, controller: x } = o[f];
		X(
			i !== void 0 && i[f] !== void 0,
			"Did not find corresponding fetcher result",
		);
		let S = i[f];
		if (!(x && x.signal.aborted))
			if (nt(S)) {
				let w = Ir(e.matches, p == null ? void 0 : p.route.id);
				(s && s[w.route.id]) || (s = ie({}, s, { [w.route.id]: S.error })),
					e.fetchers.delete(d);
			} else if (mn(S)) X(!1, "Unhandled fetcher revalidation redirect");
			else if (hn(S)) X(!1, "Unhandled fetcher deferred data");
			else {
				let w = At(S.data);
				e.fetchers.set(d, w);
			}
	}
	return { loaderData: a, errors: s };
}
function Hs(e, t, n, r) {
	let l = ie({}, t);
	for (let o of n) {
		let i = o.route.id;
		if (
			(t.hasOwnProperty(i)
				? t[i] !== void 0 && (l[i] = t[i])
				: e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
			r && r.hasOwnProperty(i))
		)
			break;
	}
	return l;
}
function Ws(e) {
	return e
		? nt(e[1])
			? { actionData: {} }
			: { actionData: { [e[0]]: e[1].data } }
		: {};
}
function Ir(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function Qs(e) {
	let t =
		e.length === 1
			? e[0]
			: e.find((n) => n.index || !n.path || n.path === "/") || {
					id: "__shim-error-route__",
				};
	return {
		matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
		route: t,
	};
}
function be(e, t) {
	let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
		i = "Unknown Server Error",
		u = "Unknown @remix-run/router error";
	return (
		e === 400
			? ((i = "Bad Request"),
				l && n && r
					? (u =
							"You made a " +
							l +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							"so there is no way to handle the request.")
					: o === "defer-action"
						? (u = "defer() is not supported in actions")
						: o === "invalid-body" && (u = "Unable to encode submission body"))
			: e === 403
				? ((i = "Forbidden"),
					(u = 'Route "' + r + '" does not match URL "' + n + '"'))
				: e === 404
					? ((i = "Not Found"), (u = 'No route matches URL "' + n + '"'))
					: e === 405 &&
						((i = "Method Not Allowed"),
						l && n && r
							? (u =
									"You made a " +
									l.toUpperCase() +
									' request to "' +
									n +
									'" but ' +
									('did not provide an `action` for route "' + r + '", ') +
									"so there is no way to handle the request.")
							: l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
		new ia(e || 500, i, new Error(u), !0)
	);
}
function Ks(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (mn(n)) return { result: n, idx: t };
	}
}
function kd(e) {
	let t = typeof e == "string" ? un(e) : e;
	return ul(ie({}, t, { hash: "" }));
}
function cv(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ""
			? t.hash !== ""
			: e.hash === t.hash
				? !0
				: t.hash !== "";
}
function fv(e) {
	return Cd(e.result) && Zm.has(e.result.status);
}
function hn(e) {
	return e.type === re.deferred;
}
function nt(e) {
	return e.type === re.error;
}
function mn(e) {
	return (e && e.type) === re.redirect;
}
function dv(e) {
	let t = e;
	return (
		t &&
		typeof t == "object" &&
		typeof t.data == "object" &&
		typeof t.subscribe == "function" &&
		typeof t.cancel == "function" &&
		typeof t.resolveData == "function"
	);
}
function Cd(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.headers == "object" &&
		typeof e.body < "u"
	);
}
function pv(e) {
	return Gm.has(e.toLowerCase());
}
function dt(e) {
	return Ym.has(e.toLowerCase());
}
async function Ys(e, t, n, r, l, o) {
	for (let i = 0; i < n.length; i++) {
		let u = n[i],
			a = t[i];
		if (!a) continue;
		let s = e.find((d) => d.route.id === a.route.id),
			f = s != null && !Ed(s, a) && (o && o[a.route.id]) !== void 0;
		if (hn(u) && (l || f)) {
			let d = r[i];
			X(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
				await _d(u, d, l).then((p) => {
					p && (n[i] = p || n[i]);
				});
		}
	}
}
async function _d(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: re.data, data: e.deferredData.unwrappedData };
			} catch (l) {
				return { type: re.error, error: l };
			}
		return { type: re.data, data: e.deferredData.data };
	}
}
function sa(e) {
	return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function au(e, t) {
	let n = typeof t == "string" ? un(t).search : t.search;
	if (e[e.length - 1].route.index && sa(n || "")) return e[e.length - 1];
	let r = wd(e);
	return r[r.length - 1];
}
function Xs(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: l,
		formData: o,
		json: i,
	} = e;
	if (!(!t || !n || !r)) {
		if (l != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: l,
			};
		if (o != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: o,
				json: void 0,
				text: void 0,
			};
		if (i !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: i,
				text: void 0,
			};
	}
}
function fi(e, t) {
	return t
		? {
				state: "loading",
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
			}
		: {
				state: "loading",
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
			};
}
function hv(e, t) {
	return {
		state: "submitting",
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	};
}
function Er(e, t) {
	return e
		? {
				state: "loading",
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
			}
		: {
				state: "loading",
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
			};
}
function mv(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
	};
}
function At(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
	};
}
function vv(e, t) {
	try {
		let n = e.sessionStorage.getItem(xd);
		if (n) {
			let r = JSON.parse(n);
			for (let [l, o] of Object.entries(r || {}))
				o && Array.isArray(o) && t.set(l, new Set(o || []));
		}
	} catch {}
}
function yv(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, l] of t) n[r] = [...l];
		try {
			e.sessionStorage.setItem(xd, JSON.stringify(n));
		} catch (r) {
			rr(
				!1,
				"Failed to save applied view transitions in sessionStorage (" +
					r +
					").",
			);
		}
	}
} /**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function su() {
	return (
		(su = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		su.apply(this, arguments)
	);
}
const Pd = T.createContext(null),
	Rd = T.createContext(null),
	Ld = T.createContext(null),
	ca = T.createContext(null),
	jo = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Nd = T.createContext(null);
function fa() {
	return T.useContext(ca) != null;
}
function gv() {
	return fa() || X(!1), T.useContext(ca).location;
}
function wv(e, t, n, r) {
	fa() || X(!1);
	let { navigator: l } = T.useContext(Ld),
		{ matches: o } = T.useContext(jo),
		i = o[o.length - 1],
		u = i ? i.params : {};
	i && i.pathname;
	let a = i ? i.pathnameBase : "/";
	i && i.route;
	let s = gv(),
		f;
	f = s;
	let d = f.pathname || "/",
		p = d;
	if (a !== "/") {
		let w = a.replace(/^\//, "").split("/");
		p = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
	}
	let x = Hn(e, { pathname: p });
	return Cv(
		x &&
			x.map((w) =>
				Object.assign({}, w, {
					params: Object.assign({}, u, w.params),
					pathname: gn([
						a,
						l.encodeLocation
							? l.encodeLocation(w.pathname).pathname
							: w.pathname,
					]),
					pathnameBase:
						w.pathnameBase === "/"
							? a
							: gn([
									a,
									l.encodeLocation
										? l.encodeLocation(w.pathnameBase).pathname
										: w.pathnameBase,
								]),
				}),
			),
		o,
		n,
		r,
	);
}
function Sv() {
	let e = Lv(),
		t = ua(e)
			? e.status + " " + e.statusText
			: e instanceof Error
				? e.message
				: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return T.createElement(
		T.Fragment,
		null,
		T.createElement("h2", null, "Unexpected Application Error!"),
		T.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? T.createElement("pre", { style: l }, n) : null,
		null,
	);
}
const xv = T.createElement(Sv, null);
class Ev extends T.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" && t.revalidation === "idle")
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
				};
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n,
		);
	}
	render() {
		return this.state.error !== void 0
			? T.createElement(
					jo.Provider,
					{ value: this.props.routeContext },
					T.createElement(Nd.Provider, {
						value: this.state.error,
						children: this.props.component,
					}),
				)
			: this.props.children;
	}
}
function kv(e) {
	let { routeContext: t, match: n, children: r } = e,
		l = T.useContext(Pd);
	return (
		l &&
			l.static &&
			l.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(l.staticContext._deepestRenderedBoundaryId = n.route.id),
		T.createElement(jo.Provider, { value: t }, r)
	);
}
function Cv(e, t, n, r) {
	var l;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var o;
		if ((o = n) != null && o.errors) e = n.matches;
		else return null;
	}
	let i = e,
		u = (l = n) == null ? void 0 : l.errors;
	if (u != null) {
		let f = i.findIndex(
			(d) => d.route.id && (u == null ? void 0 : u[d.route.id]) !== void 0,
		);
		f >= 0 || X(!1), (i = i.slice(0, Math.min(i.length, f + 1)));
	}
	let a = !1,
		s = -1;
	if (n && r && r.v7_partialHydration)
		for (let f = 0; f < i.length; f++) {
			let d = i[f];
			if (
				((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = f),
				d.route.id)
			) {
				let { loaderData: p, errors: x } = n,
					S =
						d.route.loader &&
						p[d.route.id] === void 0 &&
						(!x || x[d.route.id] === void 0);
				if (d.route.lazy || S) {
					(a = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
					break;
				}
			}
		}
	return i.reduceRight((f, d, p) => {
		let x,
			S = !1,
			w = null,
			N = null;
		n &&
			((x = u && d.route.id ? u[d.route.id] : void 0),
			(w = d.route.errorElement || xv),
			a &&
				(s < 0 && p === 0
					? (Nv("route-fallback"), (S = !0), (N = null))
					: s === p &&
						((S = !0), (N = d.route.hydrateFallbackElement || null))));
		let h = t.concat(i.slice(0, p + 1)),
			c = () => {
				let v;
				return (
					x
						? (v = w)
						: S
							? (v = N)
							: d.route.Component
								? (v = T.createElement(d.route.Component, null))
								: d.route.element
									? (v = d.route.element)
									: (v = f),
					T.createElement(kv, {
						match: d,
						routeContext: { outlet: f, matches: h, isDataRoute: n != null },
						children: v,
					})
				);
			};
		return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
			? T.createElement(Ev, {
					location: n.location,
					revalidation: n.revalidation,
					component: w,
					error: x,
					children: c(),
					routeContext: { outlet: null, matches: h, isDataRoute: !0 },
				})
			: c();
	}, null);
}
var cu = (function (e) {
	return (
		(e.UseBlocker = "useBlocker"),
		(e.UseLoaderData = "useLoaderData"),
		(e.UseActionData = "useActionData"),
		(e.UseRouteError = "useRouteError"),
		(e.UseNavigation = "useNavigation"),
		(e.UseRouteLoaderData = "useRouteLoaderData"),
		(e.UseMatches = "useMatches"),
		(e.UseRevalidator = "useRevalidator"),
		(e.UseNavigateStable = "useNavigate"),
		(e.UseRouteId = "useRouteId"),
		e
	);
})(cu || {});
function _v(e) {
	let t = T.useContext(Rd);
	return t || X(!1), t;
}
function Pv(e) {
	let t = T.useContext(jo);
	return t || X(!1), t;
}
function Rv(e) {
	let t = Pv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || X(!1), n.route.id;
}
function Lv() {
	var e;
	let t = T.useContext(Nd),
		n = _v(cu.UseRouteError),
		r = Rv(cu.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const Gs = {};
function Nv(e, t, n) {
	Gs[e] || (Gs[e] = !0);
}
function Tv(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: l = pe.Pop,
		navigator: o,
		static: i = !1,
		future: u,
	} = e;
	fa() && X(!1);
	let a = t.replace(/^\/*/, "/"),
		s = T.useMemo(
			() => ({
				basename: a,
				navigator: o,
				static: i,
				future: su({ v7_relativeSplatPath: !1 }, u),
			}),
			[a, u, o, i],
		);
	typeof r == "string" && (r = un(r));
	let {
			pathname: f = "/",
			search: d = "",
			hash: p = "",
			state: x = null,
			key: S = "default",
		} = r,
		w = T.useMemo(() => {
			let N = al(f, a);
			return N == null
				? null
				: {
						location: { pathname: N, search: d, hash: p, state: x, key: S },
						navigationType: l,
					};
		}, [a, f, d, p, x, S, l]);
	return w == null
		? null
		: T.createElement(
				Ld.Provider,
				{ value: s },
				T.createElement(ca.Provider, { children: n, value: w }),
			);
}
new Promise(() => {});
function Dv(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: T.createElement(e.Component),
				Component: void 0,
			}),
		e.HydrateFallback &&
			Object.assign(t, {
				hydrateFallbackElement: T.createElement(e.HydrateFallback),
				HydrateFallback: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: T.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		t
	);
} /**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ho() {
	return (
		(ho = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		ho.apply(this, arguments)
	);
}
const zv = "6";
try {
	window.__reactRouterVersion = zv;
} catch {}
function jv(e, t) {
	return ev({
		basename: void 0,
		future: ho({}, void 0, { v7_prependBasename: !0 }),
		history: xm({ window: void 0 }),
		hydrationData: Mv(),
		routes: e,
		mapRouteProperties: Dv,
		unstable_dataStrategy: void 0,
		window: void 0,
	}).initialize();
}
function Mv() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = ho({}, t, { errors: Ov(t.errors) })), t;
}
function Ov(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, l] of t)
		if (l && l.__type === "RouteErrorResponse")
			n[r] = new ia(l.status, l.statusText, l.data, l.internal === !0);
		else if (l && l.__type === "Error") {
			if (l.__subType) {
				let o = window[l.__subType];
				if (typeof o == "function")
					try {
						let i = new o(l.message);
						(i.stack = ""), (n[r] = i);
					} catch {}
			}
			if (n[r] == null) {
				let o = new Error(l.message);
				(o.stack = ""), (n[r] = o);
			}
		} else n[r] = l;
	return n;
}
const Fv = T.createContext({ isTransitioning: !1 }),
	Iv = T.createContext(new Map()),
	Uv = "startTransition",
	Zs = ap[Uv],
	Av = "flushSync",
	Js = Sm[Av];
function Bv(e) {
	Zs ? Zs(e) : e();
}
function kr(e) {
	Js ? Js(e) : e();
}
class $v {
	constructor() {
		(this.status = "pending"),
			(this.promise = new Promise((t, n) => {
				(this.resolve = (r) => {
					this.status === "pending" && ((this.status = "resolved"), t(r));
				}),
					(this.reject = (r) => {
						this.status === "pending" && ((this.status = "rejected"), n(r));
					});
			}));
	}
}
function Vv(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[l, o] = T.useState(n.state),
		[i, u] = T.useState(),
		[a, s] = T.useState({ isTransitioning: !1 }),
		[f, d] = T.useState(),
		[p, x] = T.useState(),
		[S, w] = T.useState(),
		N = T.useRef(new Map()),
		{ v7_startTransition: h } = r || {},
		c = T.useCallback(
			(m) => {
				h ? Bv(m) : m();
			},
			[h],
		),
		v = T.useCallback(
			(m, L) => {
				let {
					deletedFetchers: F,
					unstable_flushSync: M,
					unstable_viewTransitionOpts: K,
				} = L;
				F.forEach((oe) => N.current.delete(oe)),
					m.fetchers.forEach((oe, Se) => {
						oe.data !== void 0 && N.current.set(Se, oe.data);
					});
				let fe =
					n.window == null ||
					n.window.document == null ||
					typeof n.window.document.startViewTransition != "function";
				if (!K || fe) {
					M ? kr(() => o(m)) : c(() => o(m));
					return;
				}
				if (M) {
					kr(() => {
						p && (f && f.resolve(), p.skipTransition()),
							s({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: K.currentLocation,
								nextLocation: K.nextLocation,
							});
					});
					let oe = n.window.document.startViewTransition(() => {
						kr(() => o(m));
					});
					oe.finished.finally(() => {
						kr(() => {
							d(void 0), x(void 0), u(void 0), s({ isTransitioning: !1 });
						});
					}),
						kr(() => x(oe));
					return;
				}
				p
					? (f && f.resolve(),
						p.skipTransition(),
						w({
							state: m,
							currentLocation: K.currentLocation,
							nextLocation: K.nextLocation,
						}))
					: (u(m),
						s({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: K.currentLocation,
							nextLocation: K.nextLocation,
						}));
			},
			[n.window, p, f, N, c],
		);
	T.useLayoutEffect(() => n.subscribe(v), [n, v]),
		T.useEffect(() => {
			a.isTransitioning && !a.flushSync && d(new $v());
		}, [a]),
		T.useEffect(() => {
			if (f && i && n.window) {
				let m = i,
					L = f.promise,
					F = n.window.document.startViewTransition(async () => {
						c(() => o(m)), await L;
					});
				F.finished.finally(() => {
					d(void 0), x(void 0), u(void 0), s({ isTransitioning: !1 });
				}),
					x(F);
			}
		}, [c, i, f, n.window]),
		T.useEffect(() => {
			f && i && l.location.key === i.location.key && f.resolve();
		}, [f, p, l.location, i]),
		T.useEffect(() => {
			!a.isTransitioning &&
				S &&
				(u(S.state),
				s({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: S.currentLocation,
					nextLocation: S.nextLocation,
				}),
				w(void 0));
		}, [a.isTransitioning, S]),
		T.useEffect(() => {}, []);
	let k = T.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (m) => n.navigate(m),
				push: (m, L, F) =>
					n.navigate(m, {
						state: L,
						preventScrollReset: F == null ? void 0 : F.preventScrollReset,
					}),
				replace: (m, L, F) =>
					n.navigate(m, {
						replace: !0,
						state: L,
						preventScrollReset: F == null ? void 0 : F.preventScrollReset,
					}),
			}),
			[n],
		),
		R = n.basename || "/",
		D = T.useMemo(
			() => ({ router: n, navigator: k, static: !1, basename: R }),
			[n, k, R],
		);
	return T.createElement(
		T.Fragment,
		null,
		T.createElement(
			Pd.Provider,
			{ value: D },
			T.createElement(
				Rd.Provider,
				{ value: l },
				T.createElement(
					Iv.Provider,
					{ value: N.current },
					T.createElement(
						Fv.Provider,
						{ value: a },
						T.createElement(
							Tv,
							{
								basename: R,
								location: l.location,
								navigationType: l.historyAction,
								navigator: k,
								future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
							},
							l.initialized || n.future.v7_partialHydration
								? T.createElement(Hv, {
										routes: n.routes,
										future: n.future,
										state: l,
									})
								: t,
						),
					),
				),
			),
		),
		null,
	);
}
function Hv(e) {
	let { routes: t, future: n, state: r } = e;
	return wv(t, void 0, r, n);
}
var qs;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(qs || (qs = {}));
var bs;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(bs || (bs = {}));
const Wv = ({ setShow: e, setType: t }) =>
		U.jsx("div", {
			className: "bg-[#212223] shadow-md",
			children: U.jsx("div", {
				className: "w-[93%] m-auto py-3",
				children: U.jsxs("div", {
					className: "flex justify-between items-center",
					children: [
						U.jsx("div", {
							className: "w-[80px] h-[48px]",
							children: U.jsx("img", {
								className: "w-full h-full",
								src: "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg",
								alt: "logo",
							}),
						}),
						U.jsxs("div", {
							className: "flex gap-4",
							children: [
								U.jsx("button", {
									onClick: () => {
										e(!0), t("signin");
									},
									className:
										"py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium",
									children: "SingIn",
								}),
								U.jsx("button", {
									onClick: () => {
										e(!0), t("signup");
									},
									className:
										"py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium",
									children: "SingUp",
								}),
							],
						}),
					],
				}),
			}),
		}),
	Qv = ({ setType: e, setShow: t }) =>
		U.jsx("div", {
			className: "w-full h-full justify-center items-center p-4",
			children: U.jsxs("div", {
				className: "py-[170px] flex justify-center items-center flex-col gap-6",
				children: [
					U.jsx("h2", {
						className: "text-5xl text-[#c7c5c5] font-bold",
						children: "What you will design today?",
					}),
					U.jsx("span", {
						className: "text-[#aca9a9] text-2xl font-medium",
						children:
							"Canva makes it easy to create and share professional designs.",
					}),
					U.jsx("button", {
						onClick: () => {
							e("signup"), t(!0);
						},
						className:
							"py-2 w-[200px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium",
						children: "SingUp for Free",
					}),
				],
			}),
		});
var Td = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	ec = Kt.createContext && Kt.createContext(Td),
	Kv = ["attr", "size", "title"];
function Yv(e, t) {
	if (e == null) return {};
	var n = Xv(e, t),
		r,
		l;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (l = 0; l < o.length; l++)
			(r = o[l]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function Xv(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e)
		if (Object.prototype.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) >= 0) continue;
			n[r] = e[r];
		}
	return n;
}
function mo() {
	return (
		(mo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		mo.apply(this, arguments)
	);
}
function tc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (l) {
				return Object.getOwnPropertyDescriptor(e, l).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function vo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? tc(Object(n), !0).forEach(function (r) {
					Gv(e, r, n[r]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: tc(Object(n)).forEach(function (r) {
						Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
					});
	}
	return e;
}
function Gv(e, t, n) {
	return (
		(t = Zv(t)),
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0,
				})
			: (e[t] = n),
		e
	);
}
function Zv(e) {
	var t = Jv(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Jv(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Dd(e) {
	return (
		e &&
		e.map((t, n) =>
			Kt.createElement(t.tag, vo({ key: n }, t.attr), Dd(t.child)),
		)
	);
}
function da(e) {
	return (t) =>
		Kt.createElement(qv, mo({ attr: vo({}, e.attr) }, t), Dd(e.child));
}
function qv(e) {
	var t = (n) => {
		var { attr: r, size: l, title: o } = e,
			i = Yv(e, Kv),
			u = l || n.size || "1em",
			a;
		return (
			n.className && (a = n.className),
			e.className && (a = (a ? a + " " : "") + e.className),
			Kt.createElement(
				"svg",
				mo(
					{ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
					n.attr,
					r,
					i,
					{
						className: a,
						style: vo(vo({ color: e.color || n.color }, n.style), e.style),
						height: u,
						width: u,
						xmlns: "http://www.w3.org/2000/svg",
					},
				),
				o && Kt.createElement("title", null, o),
				e.children,
			)
		);
	};
	return ec !== void 0
		? Kt.createElement(ec.Consumer, null, (n) => t(n))
		: t(Td);
}
function bv(e) {
	return da({
		tag: "svg",
		attr: { viewBox: "0 0 15 15", fill: "none" },
		child: [
			{
				tag: "path",
				attr: {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
					fill: "currentColor",
				},
				child: [],
			},
		],
	})(e);
}
function e0(e) {
	return da({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [
			{
				tag: "path",
				attr: {
					d: "m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z",
				},
				child: [],
			},
		],
	})(e);
}
function t0(e) {
	return da({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [
			{
				tag: "path",
				attr: {
					d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
				},
				child: [],
			},
		],
	})(e);
}
const n0 = ({ show: e, setShow: t, inputHandle: n, state: r, type: l }) => {
		const o = l === "signin" ? "Login" : "Sign up";
		return U.jsx("div", {
			className: `w-screen ${
				e ? "visible opacity-100" : "invisible opacity-30"
			} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center `,
			children: U.jsxs("div", {
				className:
					"w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative",
				children: [
					U.jsx("div", {
						onClick: () => t(!1),
						className:
							"absolute right-4 top-4 text-xl cursor-pointer text-white",
						children: U.jsx(bv, {}),
					}),
					U.jsxs("h2", {
						className: "text-white pb-4 text-center text-xl",
						children: [o, " in seconds"],
					}),
					U.jsxs("form", {
						children: [
							l === "signup" &&
								U.jsxs("div", {
									className: "flex flex-col gap-3 mb-3 text-white",
									children: [
										U.jsx("label", { htmlFor: "name", children: "Name" }),
										U.jsx("input", {
											onChange: n,
											type: "name",
											name: "name",
											id: "name",
											placeholder: "name",
											value: r.name,
											className:
												"px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent",
										}),
									],
								}),
							U.jsxs("div", {
								className: "flex flex-col gap-3 mb-3 text-white",
								children: [
									U.jsx("label", { htmlFor: "email", children: "Email" }),
									U.jsx("input", {
										onChange: n,
										type: "email",
										name: "email",
										id: "email",
										placeholder: "email",
										value: r.email,
										className:
											"px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent",
									}),
								],
							}),
							U.jsxs("div", {
								className: "flex flex-col gap-3 mb-3 text-white",
								children: [
									U.jsx("label", { htmlFor: "password", children: "Password" }),
									U.jsx("input", {
										onChange: n,
										type: "password",
										name: "password",
										id: "password",
										placeholder: "password",
										value: r.password,
										className:
											"px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent",
									}),
								],
							}),
							U.jsx("div", {
								children: U.jsx("button", {
									className:
										"px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white",
									children: o,
								}),
							}),
							U.jsxs("div", {
								className: "flex py-4 justify-between items-center px-3",
								children: [
									U.jsx("div", { className: "w-[45%] h-[1px] bg-slate-500 " }),
									U.jsx("div", {
										className: "w-[6%] text-center flex pb-1 px-1 text-white",
										children: "or",
									}),
									U.jsx("div", { className: "w-[45%] h-[1px] bg-slate-500 " }),
								],
							}),
							U.jsx("div", {
								className: "pb-4",
								children: U.jsxs("button", {
									className:
										"px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-red-500 w-full outline-none hover:bg-red-600 text-white",
									children: [
										U.jsx("span", { children: U.jsx(e0, {}) }),
										U.jsxs("span", { children: [o, " with Gmail "] }),
									],
								}),
							}),
							U.jsx("div", {
								className: "pb-4",
								children: U.jsxs("button", {
									className:
										"px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-500 w-full outline-none hover:bg-blue-600 text-white",
									children: [
										U.jsx("span", { children: U.jsx(t0, {}) }),
										U.jsxs("span", { children: [o, " with Facebook "] }),
									],
								}),
							}),
						],
					}),
				],
			}),
		});
	},
	r0 = () => {
		const [e, t] = T.useState(""),
			[n, r] = T.useState(!1),
			[l, o] = T.useState({ name: "", email: "", password: "" });
		console.log(l);
		const i = (u) => {
			o({ ...l, [u.target.name]: u.target.value });
		};
		return U.jsxs("div", {
			className: "bg-[#18191b] min-h-screen w-full",
			children: [
				U.jsx(n0, { type: e, show: n, setShow: r, inputHandle: i, state: l }),
				U.jsx(Wv, { setShow: r, setType: t }),
				U.jsx(Qv, { setType: t, setShow: r }),
			],
		});
	};
function l0() {
	const e = jv([{ path: "/", element: U.jsx(r0, {}) }]);
	return U.jsx(Vv, { router: e });
}
di.createRoot(document.getElementById("root")).render(U.jsx(l0, {}));
