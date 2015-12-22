if (function(a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	function c(a) {
		var b = "length" in a && a.length,
			c = ea.type(a);
		return "function" === c || ea.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	function d(a, b, c) {
		if (ea.isFunction(b)) return ea.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return ea.grep(a, function(a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (ma.test(b)) return ea.filter(b, a, c);
			b = ea.filter(b, a)
		}
		return ea.grep(a, function(a) {
			return ea.inArray(a, b) >= 0 !== c
		})
	}
	function e(a, b) {
		do a = a[b];
		while (a && 1 !== a.nodeType);
		return a
	}
	function f(a) {
		var b = ua[a] = {};
		return ea.each(a.match(ta) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	function g() {
		oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
	}
	function h() {
		(oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
	}
	function i(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(za, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c
				} catch (e) {}
				ea.data(a, b, c)
			} else c = void 0
		}
		return c
	}
	function j(a) {
		var b;
		for (b in a) if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}
	function k(a, b, c, d) {
		if (ea.acceptData(a)) {
			var e, f, g = ea.expando,
				h = a.nodeType,
				i = h ? ea.cache : a,
				j = h ? a[g] : a[g] && g;
			if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : {
				toJSON: ea.noop
			}), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
		}
	}
	function l(a, b, c) {
		if (ea.acceptData(a)) {
			var d, e, f = a.nodeType,
				g = f ? ea.cache : a,
				h = f ? a[ea.expando] : ea.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					for (; e--;) delete d[b[e]];
					if (c ? !j(d) : !ea.isEmptyObject(d)) return
				}(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
			}
		}
	}
	function m() {
		return !0
	}
	function n() {
		return !1
	}
	function o() {
		try {
			return oa.activeElement
		} catch (a) {}
	}
	function p(a) {
		var b = Ka.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement) for (; b.length;) c.createElement(b.pop());
		return c
	}
	function q(a, b) {
		var c, d, e = 0,
			f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
		if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
		return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
	}
	function r(a) {
		Ea.test(a.type) && (a.defaultChecked = a.checked)
	}
	function s(a, b) {
		return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function t(a) {
		return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
	}
	function u(a) {
		var b = Va.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}
	function v(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
	}
	function w(a, b) {
		if (1 === b.nodeType && ea.hasData(a)) {
			var c, d, e, f = ea._data(a),
				g = ea._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h) for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
			}
			g.data && (g.data = ea.extend({}, g.data))
		}
	}
	function x(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
				e = ea._data(b);
				for (d in e.events) ea.removeEvent(b, d, e.handle);
				b.removeAttribute(ea.expando)
			}
			"script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}
	function y(b, c) {
		var d, e = ea(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
		return e.detach(), f
	}
	function z(a) {
		var b = oa,
			c = _a[a];
		return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
	}
	function A(a, b) {
		return {
			get: function() {
				var c = a();
				if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	function B(a, b) {
		if (b in a) return b;
		for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;) if (b = mb[e] + c, b in a) return b;
		return d
	}
	function C(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}
	function D(a, b, c) {
		var d = ib.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}
	function E(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
		return g
	}
	function F(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = ab(a),
			g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
			d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	function G(a, b, c, d, e) {
		return new G.prototype.init(a, b, c, d, e)
	}
	function H() {
		return setTimeout(function() {
			nb = void 0
		}), nb = ea.now()
	}
	function I(a, b) {
		var c, d = {
			height: a
		}, e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}
	function J(a, b, c) {
		for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
	}
	function K(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this,
			m = {}, n = a.style,
			o = a.nodeType && Ca(a),
			p = ea._data(a, "fxshow");
		c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
			h.unqueued || i()
		}), h.unqueued++, l.always(function() {
			l.always(function() {
				h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function() {
			n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
		}));
		for (d in b) if (e = b[d], pb.exec(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
				if ("show" !== e || !p || void 0 === p[d]) continue;
				o = !0
			}
			m[d] = p && p[d] || ea.style(a, d)
		} else j = void 0;
		if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
		else {
			p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function() {
				ea(a).hide()
			}), l.done(function() {
				var b;
				ea._removeData(a, "fxshow");
				for (b in m) ea.style(a, b, m[b])
			});
			for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}
	function L(a, b) {
		var c, d, e, f, g;
		for (c in a) if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
			f = g.expand(f), delete a[d];
			for (c in f) c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}
	function M(a, b, c) {
		var d, e, f = 0,
			g = sb.length,
			h = ea.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			}, j = h.promise({
				elem: a,
				props: ea.extend({}, b),
				opts: ea.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: nb || H(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (L(k, j.opts.specialEasing); g > f; f++) if (d = sb[f].call(j, a, k, j.opts)) return d;
		return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	function N(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(ta) || [];
			if (ea.isFunction(c)) for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}
	function O(a, b, c, d) {
		function e(h) {
			var i;
			return f[h] = !0, ea.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}), i
		}
		var f = {}, g = a === Rb;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}
	function P(a, b) {
		var c, d, e = ea.ajaxSettings.flatOptions || {};
		for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && ea.extend(!0, a, c), a
	}
	function Q(a, b, c) {
		for (var d, e, f, g, h = a.contents, i = a.dataTypes;
		"*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e) for (g in h) if (h[g] && h[g].test(e)) {
			i.unshift(g);
			break
		}
		if (i[0] in c) f = i[0];
		else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}
	function R(a, b, c, d) {
		var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
		if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
		else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
				break
			}
			if (g !== !0) if (g && a["throws"]) b = g(b);
			else try {
				b = g(b)
			} catch (l) {
				return {
					state: "parsererror",
					error: g ? l : "No conversion from " + i + " to " + f
				}
			}
		}
		return {
			state: "success",
			data: b
		}
	}
	function S(a, b, c, d) {
		var e;
		if (ea.isArray(b)) ea.each(b, function(b, e) {
			c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== ea.type(b)) d(a, b);
		else for (e in b) S(a + "[" + e + "]", b[e], c, d)
	}
	function T() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}
	function U() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	function V(a) {
		return ea.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	var W = [],
		X = W.slice,
		Y = W.concat,
		Z = W.push,
		$ = W.indexOf,
		_ = {}, aa = _.toString,
		ba = _.hasOwnProperty,
		ca = {}, da = "1.11.3",
		ea = function(a, b) {
			return new ea.fn.init(a, b)
		}, fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ga = /^-ms-/,
		ha = /-([\da-z])/gi,
		ia = function(a, b) {
			return b.toUpperCase()
		};
	ea.fn = ea.prototype = {
		jquery: da,
		constructor: ea,
		selector: "",
		length: 0,
		toArray: function() {
			return X.call(this)
		},
		get: function(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
		},
		pushStack: function(a) {
			var b = ea.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function(a, b) {
			return ea.each(this, a, b)
		},
		map: function(a) {
			return this.pushStack(ea.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(X.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: Z,
		sort: W.sort,
		splice: W.splice
	}, ea.extend = ea.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {}, h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, ea.extend({
		expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		noop: function() {},
		isFunction: function(a) {
			return "function" === ea.type(a)
		},
		isArray: Array.isArray || function(a) {
			return "array" === ea.type(a)
		},
		isWindow: function(a) {
			return null != a && a == a.window
		},
		isNumeric: function(a) {
			return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		isPlainObject: function(a) {
			var b;
			if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
			try {
				if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			if (ca.ownLast) for (b in a) return ba.call(a, b);
			for (b in a);
			return void 0 === b || ba.call(a, b)
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
		},
		globalEval: function(b) {
			b && ea.trim(b) && (a.execScript || function(b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function(a) {
			return a.replace(ga, "ms-").replace(ha, ia)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b, d) {
			var e, f = 0,
				g = a.length,
				h = c(a);
			if (d) {
				if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
				else for (f in a) if (e = b.apply(a[f], d), e === !1) break
			} else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
			else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
			return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(fa, "")
		},
		makeArray: function(a, b) {
			var d = b || [];
			return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
		},
		inArray: function(a, b, c) {
			var d;
			if (b) {
				if ($) return $.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function(a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
			if (c !== c) for (; void 0 !== b[d];) a[e++] = b[d++];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function(a, b, d) {
			var e, f = 0,
				g = a.length,
				h = c(a),
				i = [];
			if (h) for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
			else for (f in a) e = b(a[f], f, d), null != e && i.push(e);
			return Y.apply([], i)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, d, e;
			return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
				return a.apply(b || this, c.concat(X.call(arguments)))
			}, d.guid = a.guid = a.guid || ea.guid++, d) : void 0
		},
		now: function() {
			return +new Date
		},
		support: ca
	}), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
		_["[object " + b + "]"] = b.toLowerCase()
	});
	var ja = function(a) {
		function b(a, b, c, d) {
			var e, f, g, h, i, j, l, n, o, p;
			if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
			if (!d && I) {
				if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
					if (9 === h) {
						if (f = b.getElementById(g), !f || !f.parentNode) return c;
						if (f.id === g) return c.push(f), c
					} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
				} else {
					if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
					if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
				}
				if (v.qsa && (!J || !J.test(a))) {
					if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
						for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
						o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
					}
					if (p) try {
						return $.apply(c, o.querySelectorAll(p)), c
					} catch (q) {} finally {
						l || b.removeAttribute("id")
					}
				}
			}
			return B(a.replace(ia, "$1"), b, c, d)
		}
		function c() {
			function a(c, d) {
				return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
			}
			var b = [];
			return a
		}
		function d(a) {
			return a[N] = !0, a
		}
		function e(a) {
			var b = G.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}
		function f(a, b) {
			for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
		}
		function g(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
			if (d) return d;
			if (c) for (; c = c.nextSibling;) if (c === b) return -1;
			return a ? 1 : -1
		}
		function h(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}
		function i(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}
		function j(a) {
			return d(function(b) {
				return b = +b, d(function(c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}
		function k(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		function l() {}
		function m(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}
		function n(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = Q++;
			return b.first ? function(b, c, f) {
				for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
			} : function(b, c, g) {
				var h, i, j = [P, f];
				if (g) {
					for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else for (; b = b[d];) if (1 === b.nodeType || e) {
					if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
					if (i[d] = j, j[2] = a(b, c, g)) return !0
				}
			}
		}
		function o(a) {
			return a.length > 1 ? function(b, c, d) {
				for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}
		function p(a, c, d) {
			for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
			return d
		}
		function q(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}
		function r(a, b, c, e, f, g) {
			return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					r = d || p(b || "*", h.nodeType ? [h] : h, []),
					s = !a || !d && b ? r : q(r, m, a, h, i),
					t = c ? f || (d ? a : o || e) ? [] : g : s;
				if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
				if (d) {
					if (f || a) {
						if (f) {
							for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
							f(null, t = [], j, i)
						}
						for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
					}
				} else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
			})
		}
		function s(a) {
			for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
				return a === b
			}, g, !0), j = n(function(a) {
				return aa(b, a) > -1
			}, g, !0), k = [function(a, c, d) {
				var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
				return b = null, e
			}]; e > h; h++) if (c = w.relative[a[h].type]) k = [n(o(k), c)];
			else {
				if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
					for (d = ++h; e > d && !w.relative[a[d].type]; d++);
					return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
						value: " " === a[h - 2].type ? "*" : ""
					})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
				}
				k.push(c)
			}
			return o(k)
		}
		function t(a, c) {
			var e = c.length > 0,
				f = a.length > 0,
				g = function(d, g, h, i, j) {
					var k, l, m, n = 0,
						o = "0",
						p = d && [],
						r = [],
						s = C,
						t = d || f && w.find.TAG("*", j),
						u = P += null == s ? 1 : Math.random() || .1,
						v = t.length;
					for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
						if (f && k) {
							for (l = 0; m = a[l++];) if (m(k, g, h)) {
								i.push(k);
								break
							}
							j && (P = u)
						}
						e && ((k = !m && k) && n--, d && p.push(k))
					}
					if (n += o, e && o !== n) {
						for (l = 0; m = c[l++];) m(p, r, g, h);
						if (d) {
							if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
							r = q(r)
						}
						$.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
					}
					return j && (P = u, C = s), p
				};
			return e ? d(g) : g
		}
		var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
			O = a.document,
			P = 0,
			Q = 0,
			R = c(),
			S = c(),
			T = c(),
			U = function(a, b) {
				return a === b && (E = !0), 0
			}, V = 1 << 31,
			W = {}.hasOwnProperty,
			X = [],
			Y = X.pop,
			Z = X.push,
			$ = X.push,
			_ = X.slice,
			aa = function(a, b) {
				for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
				return -1
			}, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ca = "[\\x20\\t\\r\\n\\f]",
			da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ea = da.replace("w", "w#"),
			fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
			ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
			ha = new RegExp(ca + "+", "g"),
			ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
			ja = new RegExp("^" + ca + "*," + ca + "*"),
			ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
			la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
			ma = new RegExp(ga),
			na = new RegExp("^" + ea + "$"),
			oa = {
				ID: new RegExp("^#(" + da + ")"),
				CLASS: new RegExp("^\\.(" + da + ")"),
				TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + fa),
				PSEUDO: new RegExp("^" + ga),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ba + ")$", "i"),
				needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
			}, pa = /^(?:input|select|textarea|button)$/i,
			qa = /^h\d$/i,
			ra = /^[^{]+\{\s*\[native \w/,
			sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ta = /[+~]/,
			ua = /'|\\/g,
			va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
			wa = function(a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			}, xa = function() {
				F()
			};
		try {
			$.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
		} catch (ya) {
			$ = {
				apply: X.length ? function(a, b) {
					Z.apply(a, _.call(b))
				} : function(a, b) {
					for (var c = a.length, d = 0; a[c++] = b[d++];);
					a.length = c - 1
				}
			}
		}
		v = b.support = {}, y = b.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, F = b.setDocument = function(a) {
			var b, c, d = a ? a.ownerDocument || a : O;
			return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
				return a.className = "i", !a.getAttribute("className")
			}), v.getElementsByTagName = e(function(a) {
				return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
			}), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
				return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
			}), v.getById ? (w.find.ID = function(a, b) {
				if ("undefined" != typeof b.getElementById && I) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, w.filter.ID = function(a) {
				var b = a.replace(va, wa);
				return function(a) {
					return a.getAttribute("id") === b
				}
			}) : (delete w.find.ID, w.filter.ID = function(a) {
				var b = a.replace(va, wa);
				return function(a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), w.find.TAG = v.getElementsByTagName ? function(a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
			} : function(a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					for (; c = f[e++];) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, w.find.CLASS = v.getElementsByClassName && function(a, b) {
				return I ? b.getElementsByClassName(a) : void 0
			}, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
				H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
			}), e(function(a) {
				var b = d.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
			})), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
				v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
			}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function(a, b) {
				if (b) for (; b = b.parentNode;) if (b === a) return !0;
				return !1
			}, U = b ? function(a, b) {
				if (a === b) return E = !0, 0;
				var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
			} : function(a, b) {
				if (a === b) return E = !0, 0;
				var c, e = 0,
					f = a.parentNode,
					h = b.parentNode,
					i = [a],
					j = [b];
				if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
				if (f === h) return g(a, b);
				for (c = a; c = c.parentNode;) i.unshift(c);
				for (c = b; c = c.parentNode;) j.unshift(c);
				for (; i[e] === j[e];) e++;
				return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
			}, d) : G
		}, b.matches = function(a, c) {
			return b(a, null, null, c)
		}, b.matchesSelector = function(a, c) {
			if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
				var d = L.call(a, c);
				if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return b(c, G, null, [a]).length > 0
		}, b.contains = function(a, b) {
			return (a.ownerDocument || a) !== G && F(a), M(a, b)
		}, b.attr = function(a, b) {
			(a.ownerDocument || a) !== G && F(a);
			var c = w.attrHandle[b.toLowerCase()],
				d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
			return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}, b.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, b.uniqueSort = function(a) {
			var b, c = [],
				d = 0,
				e = 0;
			if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
				for (; b = a[e++];) b === a[e] && (d = c.push(e));
				for (; d--;) a.splice(c[d], 1)
			}
			return D = null, a
		}, x = b.getText = function(a) {
			var b, c = "",
				d = 0,
				e = a.nodeType;
			if (e) {
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
				} else if (3 === e || 4 === e) return a.nodeValue
			} else for (; b = a[d++];) c += x(b);
			return c
		}, w = b.selectors = {
			cacheLength: 50,
			createPseudo: d,
			match: oa,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(a) {
					return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
				},
				PSEUDO: function(a) {
					var b, c = !a[6] && a[2];
					return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function(a) {
					var b = a.replace(va, wa).toLowerCase();
					return "*" === a ? function() {
						return !0
					} : function(a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function(a) {
					var b = R[a + " "];
					return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function(a, c, d) {
					return function(e) {
						var f = b.attr(e, a);
						return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
					}
				},
				CHILD: function(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function(a) {
						return !!a.parentNode
					} : function(b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if (q) {
							if (f) {
								for (; p;) {
									for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
									k[a] = [P, n, m];
									break
								}
							} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
							else for (;
							(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function(a, c) {
					var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
					return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
						for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
					}) : function(a) {
						return f(a, 0, e)
					}) : f
				}
			},
			pseudos: {
				not: d(function(a) {
					var b = [],
						c = [],
						e = A(a.replace(ia, "$1"));
					return e[N] ? d(function(a, b, c, d) {
						for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function(a, d, f) {
						return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: d(function(a) {
					return function(c) {
						return b(a, c).length > 0
					}
				}),
				contains: d(function(a) {
					return a = a.replace(va, wa),
					function(b) {
						return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
					}
				}),
				lang: d(function(a) {
					return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
					function(b) {
						var c;
						do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
						while ((b = b.parentNode) && 1 === b.nodeType);
						return !1
					}
				}),
				target: function(b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function(a) {
					return a === H
				},
				focus: function(a) {
					return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
				},
				enabled: function(a) {
					return a.disabled === !1
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !! a.checked || "option" === b && !! a.selected
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function(a) {
					for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function(a) {
					return !w.pseudos.empty(a)
				},
				header: function(a) {
					return qa.test(a.nodeName)
				},
				input: function(a) {
					return pa.test(a.nodeName)
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function(a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: j(function() {
					return [0]
				}),
				last: j(function(a, b) {
					return [b - 1]
				}),
				eq: j(function(a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: j(function(a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: j(function(a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: j(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: j(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for (u in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) w.pseudos[u] = h(u);
		for (u in {
			submit: !0,
			reset: !0
		}) w.pseudos[u] = i(u);
		return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
			var d, e, f, g, h, i, j, k = S[a + " "];
			if (k) return c ? 0 : k.slice(0);
			for (h = a, i = [], j = w.preFilter; h;) {
				(!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
					value: d,
					type: e[0].replace(ia, " ")
				}), h = h.slice(d.length));
				for (g in w.filter)!(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
				f.push({
					value: d,
					type: g,
					matches: e
				}), h = h.slice(d.length));
				if (!d) break
			}
			return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
		}, A = b.compile = function(a, b) {
			var c, d = [],
				e = [],
				f = T[a + " "];
			if (!f) {
				for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
				f = T(a, t(e, d)), f.selector = a
			}
			return f
		}, B = b.select = function(a, b, c, d) {
			var e, f, g, h, i, j = "function" == typeof a && a,
				l = !d && z(a = j.selector || a);
			if (c = c || [], 1 === l.length) {
				if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
					if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
					j && (b = b.parentNode), a = a.slice(f.shift().value.length)
				}
				for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
					if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
					break
				}
			}
			return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
		}, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !! E, F(), v.sortDetached = e(function(a) {
			return 1 & a.compareDocumentPosition(G.createElement("div"))
		}), e(function(a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || f("type|href|height|width", function(a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), v.attributes && e(function(a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || f("value", function(a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), e(function(a) {
			return null == a.getAttribute("disabled")
		}) || f(ba, function(a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), b
	}(a);
	ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
	var ka = ea.expr.match.needsContext,
		la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ma = /^.[^:#\[\.,]*$/;
	ea.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) {
			return 1 === a.nodeType
		}))
	}, ea.fn.extend({
		find: function(a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) return this.pushStack(ea(a).filter(function() {
				for (b = 0; e > b; b++) if (ea.contains(d[b], this)) return !0
			}));
			for (b = 0; e > b; b++) ea.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		},
		filter: function(a) {
			return this.pushStack(d(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(d(this, a || [], !0))
		},
		is: function(a) {
			return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
		}
	});
	var na, oa = a.document,
		pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		qa = ea.fn.init = function(a, b) {
			var c, d;
			if (!a) return this;
			if ("string" == typeof a) {
				if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
				if (c[1]) {
					if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b)) for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				if (d = oa.getElementById(c[2]), d && d.parentNode) {
					if (d.id !== c[2]) return na.find(a);
					this.length = 1, this[0] = d
				}
				return this.context = oa, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
		};
	qa.prototype = ea.fn, na = ea(oa);
	var ra = /^(?:parents|prev(?:Until|All))/,
		sa = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ea.extend({
		dir: function(a, b, c) {
			for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
			return d
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), ea.fn.extend({
		has: function(a) {
			var b, c = ea(a, this),
				d = c.length;
			return this.filter(function() {
				for (b = 0; d > b; b++) if (ea.contains(this, c[b])) return !0
			})
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
				f.push(c);
				break
			}
			return this.pushStack(f.length > 1 ? ea.unique(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), ea.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return ea.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return ea.dir(a, "parentNode", c)
		},
		next: function(a) {
			return e(a, "nextSibling")
		},
		prev: function(a) {
			return e(a, "previousSibling")
		},
		nextAll: function(a) {
			return ea.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return ea.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return ea.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return ea.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return ea.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return ea.sibling(a.firstChild)
		},
		contents: function(a) {
			return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
		}
	}, function(a, b) {
		ea.fn[a] = function(c, d) {
			var e = ea.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var ta = /\S+/g,
		ua = {};
	ea.Callbacks = function(a) {
		a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
		var b, c, d, e, g, h, i = [],
			j = !a.once && [],
			k = function(f) {
				for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++) if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
					c = !1;
					break
				}
				b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
			}, l = {
				add: function() {
					if (i) {
						var d = i.length;
						! function f(b) {
							ea.each(b, function(b, c) {
								var d = ea.type(c);
								"function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
							})
						}(arguments), b ? e = i.length : c && (h = d, k(c))
					}
					return this
				},
				remove: function() {
					return i && ea.each(arguments, function(a, c) {
						for (var d;
						(d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
					}), this
				},
				has: function(a) {
					return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
				},
				empty: function() {
					return i = [], e = 0, this
				},
				disable: function() {
					return i = j = c = void 0, this
				},
				disabled: function() {
					return !i
				},
				lock: function() {
					return j = void 0, c || l.disable(), this
				},
				locked: function() {
					return !j
				},
				fireWith: function(a, c) {
					return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
				},
				fire: function() {
					return l.fireWith(this, arguments), this
				},
				fired: function() {
					return !!d
				}
			};
		return l
	}, ea.extend({
		Deferred: function(a) {
			var b = [
				["resolve", "done", ea.Callbacks("once memory"), "resolved"],
				["reject", "fail", ea.Callbacks("once memory"), "rejected"],
				["notify", "progress", ea.Callbacks("memory")]
			],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return ea.Deferred(function(c) {
							ea.each(b, function(b, f) {
								var g = ea.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = g && g.apply(this, arguments);
									a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? ea.extend(a, d) : d
					}
				}, e = {};
			return d.pipe = d.then, ea.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b, c, d, e = 0,
				f = X.call(arguments),
				g = f.length,
				h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
				i = 1 === h ? a : ea.Deferred(),
				j = function(a, c, d) {
					return function(e) {
						c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
					}
				};
			if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f), i.promise()
		}
	});
	var va;
	ea.fn.ready = function(a) {
		return ea.ready.promise().done(a), this
	}, ea.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? ea.readyWait++ : ea.ready(!0)
		},
		ready: function(a) {
			if (a === !0 ? !--ea.readyWait : !ea.isReady) {
				if (!oa.body) return setTimeout(ea.ready);
				ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
			}
		}
	}), ea.ready.promise = function(b) {
		if (!va) if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
		else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
		else {
			oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
			var c = !1;
			try {
				c = null == a.frameElement && oa.documentElement
			} catch (d) {}
			c && c.doScroll && ! function e() {
				if (!ea.isReady) {
					try {
						c.doScroll("left")
					} catch (a) {
						return setTimeout(e, 50)
					}
					g(), ea.ready()
				}
			}()
		}
		return va.promise(b)
	};
	var wa, xa = "undefined";
	for (wa in ea(ca)) break;
	ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function() {
		var a, b, c, d;
		c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
	}),
	function() {
		var a = oa.createElement("div");
		if (null == ca.deleteExpando) {
			ca.deleteExpando = !0;
			try {
				delete a.test
			} catch (b) {
				ca.deleteExpando = !1
			}
		}
		a = null
	}(), ea.acceptData = function(a) {
		var b = ea.noData[(a.nodeName + " ").toLowerCase()],
			c = +a.nodeType || 1;
		return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
	};
	var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		za = /([A-Z])/g;
	ea.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(a) {
			return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !! a && !j(a)
		},
		data: function(a, b, c) {
			return k(a, b, c)
		},
		removeData: function(a, b) {
			return l(a, b)
		},
		_data: function(a, b, c) {
			return k(a, b, c, !0)
		},
		_removeData: function(a, b) {
			return l(a, b, !0)
		}
	}), ea.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
					for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
					ea._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				ea.data(this, a)
			}) : arguments.length > 1 ? this.each(function() {
				ea.data(this, a, b)
			}) : f ? i(f, a, ea.data(f, a)) : void 0
		},
		removeData: function(a) {
			return this.each(function() {
				ea.removeData(this, a)
			})
		}
	}), ea.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = ea.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = ea._queueHooks(a, b),
				g = function() {
					ea.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return ea._data(a, c) || ea._data(a, c, {
				empty: ea.Callbacks("once memory").add(function() {
					ea._removeData(a, b + "queue"), ea._removeData(a, c)
				})
			})
		}
	}), ea.fn.extend({
		queue: function(a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
				var c = ea.queue(this, a, b);
				ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				ea.dequeue(this, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			var c, d = 1,
				e = ea.Deferred(),
				f = this,
				g = this.length,
				h = function() {
					--d || e.resolveWith(f, [f])
				};
			for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ba = ["Top", "Right", "Bottom", "Left"],
		Ca = function(a, b) {
			return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
		}, Da = ea.access = function(a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === ea.type(c)) {
				e = !0;
				for (h in c) ea.access(a, b, h, c[h], !0, f, g)
			} else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
				return j.call(ea(a), c)
			})), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		}, Ea = /^(?:checkbox|radio)$/i;
	! function() {
		var a = oa.createElement("input"),
			b = oa.createElement("div"),
			c = oa.createDocumentFragment();
		if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !! b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
			ca.noCloneEvent = !1
		}), b.cloneNode(!0).click()), null == ca.deleteExpando) {
			ca.deleteExpando = !0;
			try {
				delete b.test
			} catch (d) {
				ca.deleteExpando = !1
			}
		}
	}(),
	function() {
		var b, c, d = oa.createElement("div");
		for (b in {
			submit: !0,
			change: !0,
			focusin: !0
		}) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
		d = null
	}();
	var Fa = /^(?:input|select|textarea)$/i,
		Ga = /^key/,
		Ha = /^(?:mouse|pointer|contextmenu)|click/,
		Ia = /^(?:focusinfocus|focusoutblur)$/,
		Ja = /^([^.]*)(?:\.(.+)|)$/;
	ea.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
			if (q) {
				for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
					return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
					type: n,
					origType: p,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && ea.expr.match.needsContext.test(e),
					namespace: o.join(".")
				}, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
				a = null
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
			if (q && (k = q.events)) {
				for (b = (b || "").match(ta) || [""], j = b.length; j--;) if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
					for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
					i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
				} else for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
				ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
			}
		},
		trigger: function(b, c, d, e) {
			var f, g, h, i, j, k, l, m = [d || oa],
				n = ba.call(b, "type") ? b.type : b,
				o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
			if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
				if (!e && !j.noBubble && !ea.isWindow(d)) {
					for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
					k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
				}
				for (l = 0;
				(h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
				if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
					k = d[g], k && (d[g] = null), ea.event.triggered = n;
					try {
						d[n]()
					} catch (p) {}
					ea.event.triggered = void 0, k && (d[g] = k)
				}
				return b.result
			}
		},
		dispatch: function(a) {
			a = ea.event.fix(a);
			var b, c, d, e, f, g = [],
				h = X.call(arguments),
				i = (ea._data(this, "events") || {})[a.type] || [],
				j = ea.event.special[a.type] || {};
			if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
				for (g = ea.event.handlers.call(this, a, i), b = 0;
				(e = g[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, f = 0;
				(d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
				return j.postDispatch && j.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
				for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
				e.length && g.push({
					elem: i,
					handlers: e
				})
			}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		fix: function(a) {
			if (a[ea.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
			return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, g.filter ? g.filter(a, f) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var c, d, e, f = b.button,
					g = b.fromElement;
				return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== o() && this.focus) try {
						return this.focus(), !1
					} catch (a) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === o() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(a) {
					return ea.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = ea.extend(new ea.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		var d = "on" + b;
		a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
	}, ea.Event = function(a, b) {
		return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
	}, ea.Event.prototype = {
		isDefaultPrevented: n,
		isPropagationStopped: n,
		isImmediatePropagationStopped: n,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ea.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		ea.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), ca.submitBubbles || (ea.event.special.submit = {
		setup: function() {
			return ea.nodeName(this, "form") ? !1 : void ea.event.add(this, "click._submit keypress._submit", function(a) {
				var b = a.target,
					c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
				c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
					a._submit_bubble = !0
				}), ea._data(c, "submitBubbles", !0))
			})
		},
		postDispatch: function(a) {
			a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
		},
		teardown: function() {
			return ea.nodeName(this, "form") ? !1 : void ea.event.remove(this, "._submit")
		}
	}), ca.changeBubbles || (ea.event.special.change = {
		setup: function() {
			return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) {
				"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
			}), ea.event.add(this, "click._change", function(a) {
				this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
			})), !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
				var b = a.target;
				Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
					!this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
				}), ea._data(b, "changeBubbles", !0))
			})
		},
		handle: function(a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
		}
	}), ca.focusinBubbles || ea.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
			ea.event.simulate(b, a.target, ea.event.fix(a), !0)
		};
		ea.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = ea._data(d, b);
				e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = ea._data(d, b) - 1;
				e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
			}
		}
	}), ea.fn.extend({
		on: function(a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (f in a) this.on(f, b, c, a[f], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
			else if (!d) return this;
			return 1 === e && (g = d, d = function(a) {
				return ea().off(a), g.apply(this, arguments)
			}, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function() {
				ea.event.add(this, a, d, c, b)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() {
				ea.event.remove(this, a, c, b)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				ea.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? ea.event.trigger(a, b, c, !0) : void 0
		}
	});
	var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		La = / jQuery\d+="(?:null|\d+)"/g,
		Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
		Na = /^\s+/,
		Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Pa = /<([\w:]+)/,
		Qa = /<tbody/i,
		Ra = /<|&#?\w+;/,
		Sa = /<(?:script|style|link)/i,
		Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ua = /^$|\/(?:java|ecma)script/i,
		Va = /^true\/(.*)/,
		Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Xa = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		}, Ya = p(oa),
		Za = Ya.appendChild(oa.createElement("div"));
	Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
		clone: function(a, b, c) {
			var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
			if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a))) for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
			if (b) if (c) for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
			else w(a, f);
			return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
		},
		buildFragment: function(a, b, c, d) {
			for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++) if (f = a[o], f || 0 === f) if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
			else if (Ra.test(f)) {
				for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
				if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody) for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
				for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
				h = m.lastChild
			} else n.push(b.createTextNode(f));
			for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];) if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c)) for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
			return h = null, m
		},
		cleanData: function(a, b) {
			for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++) if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
				if (f.events) for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
				i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
			}
		}
	}), ea.fn.extend({
		text: function(a) {
			return Da(this, function(a) {
				return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = s(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = s(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function(a, b) {
			for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
				a.options && ea.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return ea.clone(this, a, b)
			})
		},
		html: function(a) {
			return Da(this, function(a) {
				var b = this[0] || {}, c = 0,
					d = this.length;
				if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
				if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
					a = a.replace(Oa, "<$1></$2>");
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = arguments[0];
			return this.domManip(arguments, function(b) {
				a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b) {
			a = Y.apply([], a);
			var c, d, e, f, g, h, i = 0,
				j = this.length,
				k = this,
				l = j - 1,
				m = a[0],
				n = ea.isFunction(m);
			if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function(c) {
				var d = k.eq(c);
				n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
			});
			if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
				for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
				if (e) for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
				h = c = null
			}
			return this
		}
	}), ea.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		ea.fn[a] = function(a) {
			for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var $a, _a = {};
	! function() {
		var a;
		ca.shrinkWrapBlocks = function() {
			if (null != a) return a;
			a = !1;
			var b, c, d;
			return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
		}
	}();
	var ab, bb, cb = /^margin/,
		db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
		eb = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (ab = function(b) {
		return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
	}, bb = function(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth,
		f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
	}) : oa.documentElement.currentStyle && (ab = function(a) {
		return a.currentStyle
	}, bb = function(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	}),
	function() {
		function b() {
			var b, c, d, e;
			c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
				width: "4px"
			}).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
		}
		var c, d, e, f, g, h, i;
		c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], d = e && e.style, d && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !! d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
			reliableHiddenOffsets: function() {
				return null == h && b(), h
			},
			boxSizingReliable: function() {
				return null == g && b(), g
			},
			pixelPosition: function() {
				return null == f && b(), f
			},
			reliableMarginRight: function() {
				return null == i && b(), i
			}
		}))
	}(), ea.swap = function(a, b, c, d) {
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var fb = /alpha\([^)]*\)/i,
		gb = /opacity\s*=\s*([^)]*)/,
		hb = /^(none|table(?!-c[ea]).+)/,
		ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
		jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
		kb = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, lb = {
			letterSpacing: "0",
			fontWeight: "400"
		}, mb = ["Webkit", "O", "Moz", "ms"];
	ea.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = bb(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ca.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = ea.camelCase(b),
					i = a.style;
				if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
					i[b] = c
				} catch (j) {}
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = ea.camelCase(b);
			return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
		}
	}), ea.each(["height", "width"], function(a, b) {
		ea.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() {
					return F(a, b, d)
				}) : F(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && ab(a);
				return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), ca.opacity || (ea.cssHooks.opacity = {
		get: function(a, b) {
			return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
		}
	}), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
		return b ? ea.swap(a, {
			display: "inline-block"
		}, bb, [a, "marginRight"]) : void 0
	}), ea.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		ea.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, cb.test(a) || (ea.cssHooks[a + b].set = D)
	}), ea.fn.extend({
		css: function(a, b) {
			return Da(this, function(a, b, c) {
				var d, e, f = {}, g = 0;
				if (ea.isArray(b)) {
					for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function() {
			return C(this, !0)
		},
		hide: function() {
			return C(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				Ca(this) ? ea(this).show() : ea(this).hide()
			})
		}
	}), ea.Tween = G, G.prototype = {
		constructor: G,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = G.propHooks[this.prop];
			return a && a.get ? a.get(this) : G.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = G.propHooks[this.prop];
			return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
		}
	}, G.prototype.init.prototype = G.prototype, G.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function(a) {
				ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, ea.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, ea.fx = G.prototype.init, ea.fx.step = {};
	var nb, ob, pb = /^(?:toggle|show|hide)$/,
		qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
		rb = /queueHooks$/,
		sb = [K],
		tb = {
			"*": [function(a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = qb.exec(b),
					f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
					g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, ea.style(c.elem, a, g + f);
					while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};
	ea.Animation = ea.extend(M, {
		tweener: function(a, b) {
			ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
		},
		prefilter: function(a, b) {
			b ? sb.unshift(a) : sb.push(a)
		}
	}), ea.speed = function(a, b, c) {
		var d = a && "object" == typeof a ? ea.extend({}, a) : {
			complete: c || !c && b || ea.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !ea.isFunction(b) && b
		};
		return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
			ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
		}, d
	}, ea.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(Ca).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = ea.isEmptyObject(a),
				f = ea.speed(b, c, d),
				g = function() {
					var b = M(this, ea.extend({}, a), f);
					(e || ea._data(this, "finish")) && b.stop(!0)
				};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, b, c) {
			var d = function(a) {
				var b = a.stop;
				delete a.stop, b(c)
			};
			return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					e = null != a && a + "queueHooks",
					f = ea.timers,
					g = ea._data(this);
				if (e) g[e] && g[e].stop && d(g[e]);
				else for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
				for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				(b || !c) && ea.dequeue(this, a)
			})
		},
		finish: function(a) {
			return a !== !1 && (a = a || "fx"), this.each(function() {
				var b, c = ea._data(this),
					d = c[a + "queue"],
					e = c[a + "queueHooks"],
					f = ea.timers,
					g = d ? d.length : 0;
				for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), ea.each(["toggle", "show", "hide"], function(a, b) {
		var c = ea.fn[b];
		ea.fn[b] = function(a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
		}
	}), ea.each({
		slideDown: I("show"),
		slideUp: I("hide"),
		slideToggle: I("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		ea.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), ea.timers = [], ea.fx.tick = function() {
		var a, b = ea.timers,
			c = 0;
		for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
		b.length || ea.fx.stop(), nb = void 0
	}, ea.fx.timer = function(a) {
		ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
	}, ea.fx.interval = 13, ea.fx.start = function() {
		ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
	}, ea.fx.stop = function() {
		clearInterval(ob), ob = null
	}, ea.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ea.fn.delay = function(a, b) {
		return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
			var d = setTimeout(b, a);
			c.stop = function() {
				clearTimeout(d)
			}
		})
	},
	function() {
		var a, b, c, d, e;
		b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !! a.value, ca.optSelected = e.selected, ca.enctype = !! oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
	}();
	var ub = /\r/g;
	ea.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = ea.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
						return null == a ? "" : a + ""
					})), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)
			}
		}
	}), ea.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = ea.find.attr(a, "value");
					return null != b ? b : ea.trim(ea.text(a))
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
						if (b = ea(c).val(), f) return b;
						g.push(b)
					}
					return g
				},
				set: function(a, b) {
					for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;) if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
						d.selected = c = !0
					} catch (h) {
						d.scrollHeight
					} else d.selected = !1;
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), ea.each(["radio", "checkbox"], function() {
		ea.valHooks[this] = {
			set: function(a, b) {
				return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
			}
		}, ca.checkOn || (ea.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var vb, wb, xb = ea.expr.attrHandle,
		yb = /^(?:checked|selected)$/i,
		zb = ca.getSetAttribute,
		Ab = ca.input;
	ea.fn.extend({
		attr: function(a, b) {
			return Da(this, ea.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				ea.removeAttr(this, a)
			})
		}
	}), ea.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b))
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(ta);
			if (f && 1 === a.nodeType) for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), wb = {
		set: function(a, b, c) {
			return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = xb[b] || ea.find.attr;
		xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) {
			var e, f;
			return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
		} : function(a, b, c) {
			return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), Ab && zb || (ea.attrHooks.value = {
		set: function(a, b, c) {
			return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
		}
	}), zb || (vb = {
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, xb.id = xb.name = xb.coords = function(a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, ea.valHooks.button = {
		get: function(a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		},
		set: vb.set
	}, ea.attrHooks.contenteditable = {
		set: function(a, b, c) {
			vb.set(a, "" === b ? !1 : b, c)
		}
	}, ea.each(["width", "height"], function(a, b) {
		ea.attrHooks[b] = {
			set: function(a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), ca.style || (ea.attrHooks.style = {
		get: function(a) {
			return a.style.cssText || void 0
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	});
	var Bb = /^(?:input|select|textarea|button|object)$/i,
		Cb = /^(?:a|area)$/i;
	ea.fn.extend({
		prop: function(a, b) {
			return Da(this, ea.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = ea.propFix[a] || a, this.each(function() {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {}
			})
		}
	}), ea.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = ea.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		}
	}), ca.hrefNormalized || ea.each(["href", "src"], function(a, b) {
		ea.propHooks[b] = {
			get: function(a) {
				return a.getAttribute(b, 4)
			}
		}
	}), ca.optSelected || (ea.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ea.propFix[this.toLowerCase()] = this
	}), ca.enctype || (ea.propFix.enctype = "encoding");
	var Db = /[\t\r\n\f]/g;
	ea.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h = 0,
				i = this.length,
				j = "string" == typeof a && a;
			if (ea.isFunction(a)) return this.each(function(b) {
				ea(this).addClass(a.call(this, b, this.className))
			});
			if (j) for (b = (a || "").match(ta) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
				for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
				g = ea.trim(d), c.className !== g && (c.className = g)
			}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h = 0,
				i = this.length,
				j = 0 === arguments.length || "string" == typeof a && a;
			if (ea.isFunction(a)) return this.each(function(b) {
				ea(this).removeClass(a.call(this, b, this.className))
			});
			if (j) for (b = (a || "").match(ta) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
				for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
				g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ea.isFunction(a) ? this.each(function(c) {
				ea(this).toggleClass(a.call(this, c, this.className, b), b)
			}) : this.each(function() {
				if ("string" === c) for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	}), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		ea.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), ea.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var Eb = ea.now(),
		Fb = /\?/,
		Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	ea.parseJSON = function(b) {
		if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
		var c, d = null,
			e = ea.trim(b + "");
		return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
	}, ea.parseXML = function(b) {
		var c, d;
		if (!b || "string" != typeof b) return null;
		try {
			a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
	};
	var Hb, Ib, Jb = /#.*$/,
		Kb = /([?&])_=[^&]*/,
		Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Nb = /^(?:GET|HEAD)$/,
		Ob = /^\/\//,
		Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Qb = {}, Rb = {}, Sb = "*/".concat("*");
	try {
		Ib = location.href
	} catch (Tb) {
		Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
	}
	Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ib,
			type: "GET",
			isLocal: Mb.test(Hb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Sb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ea.parseJSON,
				"text xml": ea.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
		},
		ajaxPrefilter: N(Qb),
		ajaxTransport: N(Rb),
		ajax: function(a, b) {
			function c(a, b, c, d) {
				var e, k, r, s, u, w = b;
				2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
				m = l.context || l,
				n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
				o = ea.Deferred(),
				p = ea.Callbacks("once memory"),
				q = l.statusCode || {}, r = {}, s = {}, t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === t) {
							if (!k) for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
							b = k[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === t ? g : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function(a) {
						return t || (l.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];
						else v.always(a[v.status]);
						return this
					},
					abort: function(a) {
						var b = a || u;
						return j && j.abort(b), c(0, b), this
					}
				};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
			i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
			for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
			if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for (e in {
				success: 1,
				error: 1,
				complete: 1
			}) v[e](l[e]);
			if (j = O(Rb, l, b, v)) {
				v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
					v.abort("timeout")
				}, l.timeout));
				try {
					t = 1, j.send(r, c)
				} catch (w) {
					if (!(2 > t)) throw w;
					c(-1, w)
				}
			} else c(-1, "No Transport");
			return v
		},
		getJSON: function(a, b, c) {
			return ea.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return ea.get(a, void 0, b, "script")
		}
	}), ea.each(["get", "post"], function(a, b) {
		ea[b] = function(a, c, d, e) {
			return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), ea._evalUrl = function(a) {
		return ea.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, ea.fn.extend({
		wrapAll: function(a) {
			if (ea.isFunction(a)) return this.each(function(b) {
				ea(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return ea.isFunction(a) ? this.each(function(b) {
				ea(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = ea(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = ea.isFunction(a);
			return this.each(function(c) {
				ea(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
			}).end()
		}
	}), ea.expr.filters.hidden = function(a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
	}, ea.expr.filters.visible = function(a) {
		return !ea.expr.filters.hidden(a)
	};
	var Ub = /%20/g,
		Vb = /\[\]$/,
		Wb = /\r?\n/g,
		Xb = /^(?:submit|button|image|reset|file)$/i,
		Yb = /^(?:input|select|textarea|keygen)/i;
	ea.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() {
			e(this.name, this.value)
		});
		else for (c in a) S(c, a[c], b, e);
		return d.join("&").replace(Ub, "+")
	}, ea.fn.extend({
		serialize: function() {
			return ea.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = ea.prop(this, "elements");
				return a ? ea.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
			}).map(function(a, b) {
				var c = ea(this).val();
				return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(Wb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(Wb, "\r\n")
				}
			}).get()
		}
	}), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
	} : T;
	var Zb = 0,
		$b = {}, _b = ea.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function() {
		for (var a in $b) $b[a](void 0, !0)
	}), ca.cors = !! _b && "withCredentials" in _b, _b = ca.ajax = !! _b, _b && ea.ajaxTransport(function(a) {
		if (!a.crossDomain || ca.cors) {
			var b;
			return {
				send: function(c, d) {
					var e, f = a.xhr(),
						g = ++Zb;
					if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
					a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
					for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
					f.send(a.hasContent && a.data || null), b = function(c, e) {
						var h, i, j;
						if (b && (e || 4 === f.readyState)) if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
						else {
							j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
							try {
								i = f.statusText
							} catch (k) {
								i = ""
							}
							h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
						}
						j && d(h, i, j, f.getAllResponseHeaders())
					}, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
				},
				abort: function() {
					b && b(void 0, !0)
				}
			}
		}
	}), ea.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(a) {
				return ea.globalEval(a), a
			}
		}
	}), ea.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), ea.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c = oa.head || ea("head")[0] || oa.documentElement;
			return {
				send: function(d, e) {
					b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				},
				abort: function() {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var ac = [],
		bc = /(=)\?(?=&|$)|\?\?/;
	ea.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = ac.pop() || ea.expando + "_" + Eb++;
			return this[a] = !0, a
		}
	}), ea.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || ea.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), ea.parseHTML = function(a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || oa;
		var d = la.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
	};
	var cc = ea.fn.load;
	ea.fn.load = function(a, b, c) {
		if ("string" != typeof a && cc) return cc.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: b
		}).done(function(a) {
			e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
		}).complete(c && function(a, b) {
			g.each(c, e || [a.responseText, b, a])
		}), this
	}, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		ea.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), ea.expr.filters.animated = function(a) {
		return ea.grep(ea.timers, function(b) {
			return a === b.elem
		}).length
	};
	var dc = a.document.documentElement;
	ea.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = ea.css(a, "position"),
				l = ea(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, ea.fn.extend({
		offset: function(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function(b) {
				ea.offset.setOffset(this, a, b)
			});
			var b, c, d = {
				top: 0,
				left: 0
			}, e = this[0],
				f = e && e.ownerDocument;
			if (f) return b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
				top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
				left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
			}) : d
		},
		position: function() {
			if (this[0]) {
				var a, b, c = {
					top: 0,
					left: 0
				}, d = this[0];
				return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - c.top - ea.css(d, "marginTop", !0),
					left: b.left - c.left - ea.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
				return a || dc
			})
		}
	}), ea.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, b) {
		var c = /Y/.test(b);
		ea.fn[a] = function(d) {
			return Da(this, function(a, d, e) {
				var f = V(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), ea.each(["top", "left"], function(a, b) {
		ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
			return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
		})
	}), ea.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		ea.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			ea.fn[d] = function(d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return Da(this, function(b, c, d) {
					var e;
					return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), ea.fn.size = function() {
		return this.length
	}, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ea
	});
	var ec = a.jQuery,
		fc = a.$;
	return ea.noConflict = function(b) {
		return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea
	}, typeof b === xa && (a.jQuery = a.$ = ea), ea
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b) if (void 0 !== a.style[c]) return {
			end: b[c]
		};
		return !1
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function() {
			c = !0
		});
		var e = function() {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function(b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function(b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.2.0", d.prototype.close = function(b) {
		function c() {
			f.detach().trigger("closed.bs.alert").remove()
		}
		var d = a(this),
			e = d.attr("data-target");
		e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
		var f = a(e);
		b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.2.0", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function(b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function() {
			"loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	}, c.prototype.toggle = function() {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
		}
		a && this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
		var d = a(c.target);
		d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function(b, c) {
		this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.2.0", c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0
	}, c.prototype.keydown = function(a) {
		switch (a.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
		}
		a.preventDefault()
	}, c.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function(a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.to = function(b) {
		var c = this,
			d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			c.to(b)
		}) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
	}, c.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, c.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, c.prototype.slide = function(b, c) {
		var d = this.$element.find(".item.active"),
			e = c || d[b](),
			f = this.interval,
			g = "next" == b ? "left" : "right",
			h = "next" == b ? "first" : "last",
			i = this;
		if (!e.length) {
			if (!this.options.wrap) return;
			e = this.$element.find(".item")[h]()
		}
		if (e.hasClass("active")) return this.sliding = !1;
		var j = e[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: g
			});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(e)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: g
			});
			return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function() {
				e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = d, this
	}, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(c) {
		var d, e = a(this),
			f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
				h = e.attr("data-slide-to");
			h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
		}
	}), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.collapse"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
			!e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
	};
	c.VERSION = "3.2.0", c.DEFAULTS = {
		toggle: !0
	}, c.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, c.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var c = a.Event("show.bs.collapse");
			if (this.$element.trigger(c), !c.isDefaultPrevented()) {
				var d = this.$parent && this.$parent.find("> .panel > .in");
				if (d && d.length) {
					var e = d.data("bs.collapse");
					if (e && e.transitioning) return;
					b.call(d, "hide"), e || d.data("bs.collapse", null)
				}
				var f = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
				var g = function() {
					this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
				};
				if (!a.support.transition) return g.call(this);
				var h = a.camelCase(["scroll", f].join("-"));
				this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
			}
		}
	}, c.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var d = function() {
					this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
				};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
			}
		}
	}, c.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var d = a.fn.collapse;
	a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = d, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
		var d, e = a(this),
			f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
			g = a(f),
			h = g.data("bs.collapse"),
			i = h ? "toggle" : e.data(),
			j = e.attr("data-parent"),
			k = j && a(j);
		h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i)
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		b && 3 === b.which || (a(e).remove(), a(f).each(function() {
			var d = c(a(this)),
				e = {
					relatedTarget: this
				};
			d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
		}))
	}
	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}
	function d(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.2.0", g.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if (b(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
			}
			return !1
		}
	}, g.prototype.keydown = function(b) {
		if (/(38|40|27)/.test(b.keyCode)) {
			var d = a(this);
			if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = c(d),
					g = e.hasClass("open");
				if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.divider):visible a",
					i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
				if (i.length) {
					var j = i.index(i.filter(":focus"));
					38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
	"use strict";

	function b(b, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function(b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.2.0", c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function(a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function(b) {
		var c = this,
			d = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
			var d = a.support.transition && c.$element.hasClass("fade");
			c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
			var e = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
				c.$element.trigger("focus").trigger(e)
			}).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
		}))
	}, c.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, c.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, c.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function(b) {
		var c = this,
			d = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var e = a.support.transition && d;
			if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
				a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
			}, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var f = function() {
				c.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
		} else b && b()
	}, c.prototype.checkScrollbar = function() {
		document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
	}, c.prototype.setScrollbar = function() {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", "")
	}, c.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			(e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
	};
	c.VERSION = "3.2.0", c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function(b, c, d) {
		this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function() {
		var b = {}, c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show()
	}, c.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide()
	}, c.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var c = a.contains(document.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !c) return;
			var d = this,
				e = this.tip(),
				f = this.getUID(this.type);
			this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
			var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
				h = /\s?auto?\s?/i,
				i = h.test(g);
			i && (g = g.replace(h, "") || "top"), e.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
			var j = this.getPosition(),
				k = e[0].offsetWidth,
				l = e[0].offsetHeight;
			if (i) {
				var m = g,
					n = this.$element.parent(),
					o = this.getPosition(n);
				g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g)
			}
			var p = this.getCalculatedOffset(g, j, k, l);
			this.applyPlacement(p, g);
			var q = function() {
				d.$element.trigger("shown.bs." + d.type), d.hoverState = null
			};
			a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
		}
	}, c.prototype.applyPlacement = function(b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
			using: function(a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
			m = k.left ? "left" : "top",
			n = k.left ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(l, d[0][n], m)
	}, c.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function() {
		function b() {
			"in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
		}
		var c = this,
			d = this.tip(),
			e = a.Event("hide.bs." + this.type);
		return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
	}, c.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function() {
		return this.getTitle()
	}, c.prototype.getPosition = function(b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName;
		return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
			scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
			width: d ? a(window).width() : b.outerWidth(),
			height: d ? a(window).height() : b.outerHeight()
		}, d ? {
			top: 0,
			left: 0
		} : b.offset())
	}, c.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function() {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function(a) {
		do a += ~~ (1e6 * Math.random());
		while (document.getElementById(a));
		return a
	}, c.prototype.tip = function() {
		return this.$tip = this.$tip || a(this.options.template)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, c.prototype.enable = function() {
		this.enabled = !0
	}, c.prototype.disable = function() {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function(b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function() {
		clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = d, this
	}
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			(e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, c.prototype.tip = function() {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
		return a.fn.popover = d, this
	}
}(jQuery), + function(a) {
	"use strict";

	function b(c, d) {
		var e = a.proxy(this.process, this);
		this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
	}
	function c(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.2.0", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function() {
		var b = "offset",
			c = 0;
		a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
		var d = this;
		this.$body.find(this.selector).map(function() {
			var d = a(this),
				e = d.data("target") || d.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[b]().top + c, e]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			d.offsets.push(this[0]), d.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b) {
		this.element = a(b)
	};
	c.VERSION = "3.2.0", c.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a")[0],
				f = a.Event("show.bs.tab", {
					relatedTarget: e
				});
			if (b.trigger(f), !f.isDefaultPrevented()) {
				var g = a(d);
				this.activate(b.closest("li"), c), this.activate(g, g.parent(), function() {
					b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e
					})
				})
			}
		}
	}, c.prototype.activate = function(b, c, d) {
		function e() {
			f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
		}
		var f = c.find("> .active"),
			g = d && a.support.transition && f.hasClass("fade");
		g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
		return a.fn.tab = d, this
	}, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(c) {
		c.preventDefault(), b.call(a(this), "show")
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var b = a(document).height(),
				d = this.$target.scrollTop(),
				e = this.$element.offset(),
				f = this.options.offset,
				g = f.top,
				h = f.bottom;
			"object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
			var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
			if (this.affixed !== i) {
				null != this.unpin && this.$element.css("top", "");
				var j = "affix" + (i ? "-" + i : ""),
					k = a.Event(j + ".bs.affix");
				this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
					top: b - this.$element.height() - h
				}))
			}
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
		return a.fn.affix = d,
		this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery),
function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
	a.extend(a.fn, {
		validate: function(b) {
			if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
				c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.submit(function(b) {
				function d() {
					var d, e;
					return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
				}
				return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
			})), c)
		},
		valid: function() {
			var b, c;
			return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function() {
				b = c.element(this) && b
			})), b
		},
		removeAttrs: function(b) {
			var c = {}, d = this;
			return a.each(b.split(/\s/), function(a, b) {
				c[b] = d.attr(b), d.removeAttr(b)
			}), c
		},
		rules: function(b, c) {
			var d, e, f, g, h, i, j = this[0];
			if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
				case "add":
					a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
					break;
				case "remove":
					return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
						i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
					}), i) : (delete e[j.name], f)
			}
			return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
				required: h
			}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
				remote: h
			})), g
		}
	}), a.extend(a.expr[":"], {
		blank: function(b) {
			return !a.trim("" + a(b).val())
		},
		filled: function(b) {
			return !!a.trim("" + a(b).val())
		},
		unchecked: function(b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function(b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function(b, c) {
		return 1 === arguments.length ? function() {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function(a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function(a, b) {
				(9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
			},
			onclick: function(a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function(b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function(b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function(b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date ( ISO ).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function b(b) {
					var c = a.data(this[0].form, "validator"),
						d = "on" + b.type.replace(/^validate/, ""),
						e = c.settings;
					e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, d = this.groups = {};
				a.each(this.settings.groups, function(b, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
						d[c] = b
					})
				}), c = this.settings.rules, a.each(c, function(b, d) {
					c[b] = a.validator.normalizeRule(d)
				}), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			},
			form: function() {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function(b) {
				var c = this.clean(b),
					d = this.validationTargetFor(c),
					e = !0;
				return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
			},
			showErrors: function(b) {
				if (b) {
					a.extend(this.errorMap, b), this.errorList = [];
					for (var c in b) this.errorList.push({
						message: b[c],
						element: this.findByName(c)[0]
					});
					this.successList = a.grep(this.successList, function(a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(a) {
				var b, c = 0;
				for (b in a) c++;
				return c
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (b) {}
			},
			findLastActive: function() {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function(a) {
					return a.element.name === b.name
				}).length && b
			},
			elements: function() {
				var b = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
					return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
				})
			},
			clean: function(b) {
				return a(b)[0]
			},
			errors: function() {
				var b = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			},
			reset: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function(b) {
				var c, d = a(b),
					e = b.type;
				return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function(b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d, e, f = a(b).rules(),
					g = a.map(f, function(a, b) {
						return b
					}).length,
					h = !1,
					i = this.elementValue(b);
				for (d in f) {
					e = {
						method: d,
						parameters: f[d]
					};
					try {
						if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
							h = !0;
							continue
						}
						if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c) return this.formatAndAdd(b, e), !1
					} catch (j) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
					}
				}
				if (!h) return this.objectLength(f) && this.successList.push(b), !0
			},
			customDataMessage: function(b, c) {
				return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
			},
			customMessage: function(a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function() {
				for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
				return void 0
			},
			defaultMessage: function(b, c) {
				return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
			},
			formatAndAdd: function(b, c) {
				var d = this.defaultMessage(b, c.method),
					e = /\$?\{(\d+)\}/g;
				"function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
					message: d,
					element: b,
					method: c.method
				}), this.errorMap[b.name] = d, this.submitted[b.name] = d
			},
			addWrapper: function(a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function() {
				var a, b, c;
				for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return a(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(b, c) {
				var d, e, f, g = this.errorsFor(b),
					h = this.idOrName(b),
					i = a(b).attr("aria-describedby");
				g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function(b, c) {
					c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
				}))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
			},
			errorsFor: function(b) {
				var c = this.idOrName(b),
					d = a(b).attr("aria-describedby"),
					e = "label[for='" + c + "'], label[for='" + c + "'] *";
				return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			idOrName: function(a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function(b) {
				return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
			},
			checkable: function(a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function(b) {
				return a(this.currentForm).find("[name='" + b + "']")
			},
			getLength: function(b, c) {
				switch (c.nodeName.toLowerCase()) {
					case "select":
						return a("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			},
			depend: function(a, b) {
				return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
			},
			dependTypes: {
				"boolean": function(a) {
					return a
				},
				string: function(b, c) {
					return !!a(b, c.form).length
				},
				"function": function(a, b) {
					return a(b)
				}
			},
			optional: function(b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			},
			startRequest: function(a) {
				this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
			},
			stopRequest: function(b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(b) {
				return a.data(b, "previousValue") || a.data(b, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(b, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function(b) {
			var c = {}, d = a(b).attr("class");
			return d && a.each(d.split(" "), function() {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		attributeRules: function(b) {
			var c, d, e = {}, f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !! d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function(b) {
			var c, d, e = {}, f = a(b);
			for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
			return e
		},
		staticRules: function(b) {
			var c = {}, d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function(b, c) {
			return a.each(b, function(d, e) {
				if (e === !1) return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
						case "string":
							f = !! a(e.depends, c.form).length;
							break;
						case "function":
							f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
				}
			}), a.each(b, function(d, e) {
				b[d] = a.isFunction(e) ? e(c) : e
			}), a.each(["minlength", "maxlength"], function() {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function() {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function(b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function() {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function(b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function(b, c, d) {
				if (!this.depend(d, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
			},
			email: function(a, b) {
				return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function(a, b) {
				return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
			},
			date: function(a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function(a, b) {
				return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function(a, b) {
				return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function(a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			creditcard: function(a, b) {
				if (this.optional(b)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(a)) return !1;
				var c, d, e = 0,
					f = 0,
					g = !1;
				if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
				for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
				return e % 10 === 0
			},
			minlength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d
			},
			maxlength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || d >= e
			},
			rangelength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			},
			min: function(a, b, c) {
				return this.optional(b) || a >= c
			},
			max: function(a, b, c) {
				return this.optional(b) || c >= a
			},
			range: function(a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			},
			equalTo: function(b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					a(c).valid()
				}), b === e.val()
			},
			remote: function(b, c, d) {
				if (this.optional(c)) return "dependency-mismatch";
				var e, f, g = this.previousValue(c);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
					url: d
				} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
					url: d,
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: f,
					context: e.currentForm,
					success: function(d) {
						var f, h, i, j = d === !0 || "true" === d;
						e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
					}
				}, d)), "pending")
			}
		}
	}), a.format = function() {
		throw "$.format has been deprecated. Please use $.validator.format instead."
	};
	var b, c = {};
	a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
		var e = a.port;
		"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
	}) : (b = a.ajax, a.ajax = function(d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
	}), a.extend(a.fn, {
		validateDelegate: function(b, c, d) {
			return this.bind(c, function(c) {
				var e = a(c.target);
				return e.is(b) ? d.apply(e, arguments) : void 0
			})
		}
	})
}),
function(a) {
	"undefined" == typeof a.fn.each2 && a.extend(a.fn, {
		each2: function(b) {
			for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;);
			return this
		}
	})
}(jQuery),
function(a, b) {
	"use strict";

	function c(b) {
		var c = a(document.createTextNode(""));
		b.before(c), c.before(b), c.remove()
	}
	function d(a) {
		function b(a) {
			return O[a] || a
		}
		return a.replace(/[^\u0000-\u007E]/g, b)
	}
	function e(a, b) {
		for (var c = 0, d = b.length; d > c; c += 1) if (g(a, b[c])) return c;
		return -1
	}
	function f() {
		var b = a(N);
		b.appendTo(document.body);
		var c = {
			width: b.width() - b[0].clientWidth,
			height: b.height() - b[0].clientHeight
		};
		return b.remove(), c
	}
	function g(a, c) {
		return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1
	}
	function h(a, b, c) {
		var d, e, f;
		if (null === a || a.length < 1) return [];
		for (d = a.split(b), e = 0, f = d.length; f > e; e += 1) d[e] = c(d[e]);
		return d
	}
	function i(a) {
		return a.outerWidth(!1) - a.width()
	}
	function j(c) {
		var d = "keyup-change-value";
		c.on("keydown", function() {
			a.data(c, d) === b && a.data(c, d, c.val())
		}), c.on("keyup", function() {
			var e = a.data(c, d);
			e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"))
		})
	}
	function k(c) {
		c.on("mousemove", function(c) {
			var d = L;
			(d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
		})
	}
	function l(a, c, d) {
		d = d || b;
		var e;
		return function() {
			var b = arguments;
			window.clearTimeout(e), e = window.setTimeout(function() {
				c.apply(d, b)
			}, a)
		}
	}
	function m(a, b) {
		var c = l(a, function(a) {
			b.trigger("scroll-debounced", a)
		});
		b.on("scroll", function(a) {
			e(a.target, b.get()) >= 0 && c(a)
		})
	}
	function n(a) {
		a[0] !== document.activeElement && window.setTimeout(function() {
			var b, c = a[0],
				d = a.val().length;
			a.focus();
			var e = c.offsetWidth > 0 || c.offsetHeight > 0;
			e && c === document.activeElement && (c.setSelectionRange ? c.setSelectionRange(d, d) : c.createTextRange && (b = c.createTextRange(), b.collapse(!1), b.select()))
		}, 0)
	}
	function o(b) {
		b = a(b)[0];
		var c = 0,
			d = 0;
		if ("selectionStart" in b) c = b.selectionStart, d = b.selectionEnd - c;
		else if ("selection" in document) {
			b.focus();
			var e = document.selection.createRange();
			d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d
		}
		return {
			offset: c,
			length: d
		}
	}
	function p(a) {
		a.preventDefault(), a.stopPropagation()
	}
	function q(a) {
		a.preventDefault(), a.stopImmediatePropagation()
	}
	function r(b) {
		if (!I) {
			var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
			I = a(document.createElement("div")).css({
				position: "absolute",
				left: "-10000px",
				top: "-10000px",
				display: "none",
				fontSize: c.fontSize,
				fontFamily: c.fontFamily,
				fontStyle: c.fontStyle,
				fontWeight: c.fontWeight,
				letterSpacing: c.letterSpacing,
				textTransform: c.textTransform,
				whiteSpace: "nowrap"
			}), I.attr("class", "select2-sizer"), a(document.body).append(I)
		}
		return I.text(b.val()), I.width()
	}
	function s(b, c, d) {
		var e, f, g = [];
		e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function() {
			0 === this.indexOf("select2-") && g.push(this)
		})), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function() {
			0 !== this.indexOf("select2-") && (f = d(this), f && g.push(f))
		})), b.attr("class", g.join(" "))
	}
	function t(a, b, c, e) {
		var f = d(a.toUpperCase()).indexOf(d(b.toUpperCase())),
			g = b.length;
		return 0 > f ? void c.push(e(a)) : (c.push(e(a.substring(0, f))), c.push("<span class='select2-match'>"), c.push(e(a.substring(f, f + g))), c.push("</span>"), void c.push(e(a.substring(f + g, a.length))))
	}
	function u(a) {
		var b = {
			"\\": "&#92;",
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"/": "&#47;"
		};
		return String(a).replace(/[&<>"'\/\\]/g, function(a) {
			return b[a]
		})
	}
	function v(c) {
		var d, e = null,
			f = c.quietMillis || 100,
			g = c.url,
			h = this;
		return function(i) {
			window.clearTimeout(d), d = window.setTimeout(function() {
				var d = c.data,
					f = g,
					j = c.transport || a.fn.select2.ajaxDefaults.transport,
					k = {
						type: c.type || "GET",
						cache: c.cache || !1,
						jsonpCallback: c.jsonpCallback || b,
						dataType: c.dataType || "json"
					}, l = a.extend({}, a.fn.select2.ajaxDefaults.params, k);
				d = d ? d.call(h, i.term, i.page, i.context) : null, f = "function" == typeof f ? f.call(h, i.term, i.page, i.context) : f, e && "function" == typeof e.abort && e.abort(), c.params && (a.isFunction(c.params) ? a.extend(l, c.params.call(h)) : a.extend(l, c.params)), a.extend(l, {
					url: f,
					dataType: c.dataType,
					data: d,
					success: function(a) {
						var b = c.results(a, i.page, i);
						i.callback(b)
					},
					error: function(a, b, c) {
						var d = {
							hasError: !0,
							jqXHR: a,
							textStatus: b,
							errorThrown: c
						};
						i.callback(d)
					}
				}), e = j.call(h, l)
			}, f)
		}
	}
	function w(b) {
		var c, d, e = b,
			f = function(a) {
				return "" + a.text
			};
		a.isArray(e) && (d = e, e = {
			results: d
		}), a.isFunction(e) === !1 && (d = e, e = function() {
			return d
		});
		var g = e();
		return g.text && (f = g.text, a.isFunction(f) || (c = g.text, f = function(a) {
			return a[c]
		})),
		function(b) {
			var c, d = b.term,
				g = {
					results: []
				};
			return "" === d ? void b.callback(e()) : (c = function(e, g) {
				var h, i;
				if (e = e[0], e.children) {
					h = {};
					for (i in e) e.hasOwnProperty(i) && (h[i] = e[i]);
					h.children = [], a(e.children).each2(function(a, b) {
						c(b, h.children)
					}), (h.children.length || b.matcher(d, f(h), e)) && g.push(h)
				} else b.matcher(d, f(e), e) && g.push(e)
			}, a(e().results).each2(function(a, b) {
				c(b, g.results)
			}), void b.callback(g))
		}
	}
	function x(c) {
		var d = a.isFunction(c);
		return function(e) {
			var f = e.term,
				g = {
					results: []
				}, h = d ? c(e) : c;
			a.isArray(h) && (a(h).each(function() {
				var a = this.text !== b,
					c = a ? this.text : this;
				("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
					id: this,
					text: this
				})
			}), e.callback(g))
		}
	}
	function y(b, c) {
		if (a.isFunction(b)) return !0;
		if (!b) return !1;
		if ("string" == typeof b) return !0;
		throw new Error(c + " must be a string, function, or falsy value")
	}
	function z(b, c) {
		if (a.isFunction(b)) {
			var d = Array.prototype.slice.call(arguments, 2);
			return b.apply(c, d)
		}
		return b
	}
	function A(b) {
		var c = 0;
		return a.each(b, function(a, b) {
			b.children ? c += A(b.children) : c++
		}), c
	}
	function B(a, c, d, e) {
		var f, h, i, j, k, l = a,
			m = !1;
		if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1) return b;
		for (;;) {
			for (h = -1, i = 0, j = e.tokenSeparators.length; j > i && (k = e.tokenSeparators[i], h = a.indexOf(k), !(h >= 0)); i++);
			if (0 > h) break;
			if (f = a.substring(0, h), a = a.substring(h + k.length), f.length > 0 && (f = e.createSearchChoice.call(this, f, c), f !== b && null !== f && e.id(f) !== b && null !== e.id(f))) {
				for (m = !1, i = 0, j = c.length; j > i; i++) if (g(e.id(f), e.id(c[i]))) {
					m = !0;
					break
				}
				m || d(f)
			}
		}
		return l !== a ? a : void 0
	}
	function C() {
		var b = this;
		a.each(arguments, function(a, c) {
			b[c].remove(), b[c] = null
		})
	}
	function D(b, c) {
		var d = function() {};
		return d.prototype = new b, d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d
	}
	if (window.Select2 === b) {
		var E, F, G, H, I, J, K, L = {
			x: 0,
			y: 0
		}, M = {
			TAB: 9,
			ENTER: 13,
			ESC: 27,
			SPACE: 32,
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40,
			SHIFT: 16,
			CTRL: 17,
			ALT: 18,
			PAGE_UP: 33,
			PAGE_DOWN: 34,
			HOME: 36,
			END: 35,
			BACKSPACE: 8,
			DELETE: 46,
			isArrow: function(a) {
				switch (a = a.which ? a.which : a) {
					case M.LEFT:
					case M.RIGHT:
					case M.UP:
					case M.DOWN:
						return !0
				}
				return !1
			},
			isControl: function(a) {
				var b = a.which;
				switch (b) {
					case M.SHIFT:
					case M.CTRL:
					case M.ALT:
						return !0
				}
				return a.metaKey ? !0 : !1
			},
			isFunctionKey: function(a) {
				return a = a.which ? a.which : a, a >= 112 && 123 >= a
			}
		}, N = "<div class='select2-measure-scrollbar'></div>",
			O = {
				"Ⓐ": "A",
				"Ａ": "A",
				"À": "A",
				"Á": "A",
				"Â": "A",
				"Ầ": "A",
				"Ấ": "A",
				"Ẫ": "A",
				"Ẩ": "A",
				"Ã": "A",
				"Ā": "A",
				"Ă": "A",
				"Ằ": "A",
				"Ắ": "A",
				"Ẵ": "A",
				"Ẳ": "A",
				"Ȧ": "A",
				"Ǡ": "A",
				"Ä": "A",
				"Ǟ": "A",
				"Ả": "A",
				"Å": "A",
				"Ǻ": "A",
				"Ǎ": "A",
				"Ȁ": "A",
				"Ȃ": "A",
				"Ạ": "A",
				"Ậ": "A",
				"Ặ": "A",
				"Ḁ": "A",
				"Ą": "A",
				"Ⱥ": "A",
				"Ɐ": "A",
				"Ꜳ": "AA",
				"Æ": "AE",
				"Ǽ": "AE",
				"Ǣ": "AE",
				"Ꜵ": "AO",
				"Ꜷ": "AU",
				"Ꜹ": "AV",
				"Ꜻ": "AV",
				"Ꜽ": "AY",
				"Ⓑ": "B",
				"Ｂ": "B",
				"Ḃ": "B",
				"Ḅ": "B",
				"Ḇ": "B",
				"Ƀ": "B",
				"Ƃ": "B",
				"Ɓ": "B",
				"Ⓒ": "C",
				"Ｃ": "C",
				"Ć": "C",
				"Ĉ": "C",
				"Ċ": "C",
				"Č": "C",
				"Ç": "C",
				"Ḉ": "C",
				"Ƈ": "C",
				"Ȼ": "C",
				"Ꜿ": "C",
				"Ⓓ": "D",
				"Ｄ": "D",
				"Ḋ": "D",
				"Ď": "D",
				"Ḍ": "D",
				"Ḑ": "D",
				"Ḓ": "D",
				"Ḏ": "D",
				"Đ": "D",
				"Ƌ": "D",
				"Ɗ": "D",
				"Ɖ": "D",
				"Ꝺ": "D",
				"Ǳ": "DZ",
				"Ǆ": "DZ",
				"ǲ": "Dz",
				"ǅ": "Dz",
				"Ⓔ": "E",
				"Ｅ": "E",
				"È": "E",
				"É": "E",
				"Ê": "E",
				"Ề": "E",
				"Ế": "E",
				"Ễ": "E",
				"Ể": "E",
				"Ẽ": "E",
				"Ē": "E",
				"Ḕ": "E",
				"Ḗ": "E",
				"Ĕ": "E",
				"Ė": "E",
				"Ë": "E",
				"Ẻ": "E",
				"Ě": "E",
				"Ȅ": "E",
				"Ȇ": "E",
				"Ẹ": "E",
				"Ệ": "E",
				"Ȩ": "E",
				"Ḝ": "E",
				"Ę": "E",
				"Ḙ": "E",
				"Ḛ": "E",
				"Ɛ": "E",
				"Ǝ": "E",
				"Ⓕ": "F",
				"Ｆ": "F",
				"Ḟ": "F",
				"Ƒ": "F",
				"Ꝼ": "F",
				"Ⓖ": "G",
				"Ｇ": "G",
				"Ǵ": "G",
				"Ĝ": "G",
				"Ḡ": "G",
				"Ğ": "G",
				"Ġ": "G",
				"Ǧ": "G",
				"Ģ": "G",
				"Ǥ": "G",
				"Ɠ": "G",
				"Ꞡ": "G",
				"Ᵹ": "G",
				"Ꝿ": "G",
				"Ⓗ": "H",
				"Ｈ": "H",
				"Ĥ": "H",
				"Ḣ": "H",
				"Ḧ": "H",
				"Ȟ": "H",
				"Ḥ": "H",
				"Ḩ": "H",
				"Ḫ": "H",
				"Ħ": "H",
				"Ⱨ": "H",
				"Ⱶ": "H",
				"Ɥ": "H",
				"Ⓘ": "I",
				"Ｉ": "I",
				"Ì": "I",
				"Í": "I",
				"Î": "I",
				"Ĩ": "I",
				"Ī": "I",
				"Ĭ": "I",
				"İ": "I",
				"Ï": "I",
				"Ḯ": "I",
				"Ỉ": "I",
				"Ǐ": "I",
				"Ȉ": "I",
				"Ȋ": "I",
				"Ị": "I",
				"Į": "I",
				"Ḭ": "I",
				"Ɨ": "I",
				"Ⓙ": "J",
				"Ｊ": "J",
				"Ĵ": "J",
				"Ɉ": "J",
				"Ⓚ": "K",
				"Ｋ": "K",
				"Ḱ": "K",
				"Ǩ": "K",
				"Ḳ": "K",
				"Ķ": "K",
				"Ḵ": "K",
				"Ƙ": "K",
				"Ⱪ": "K",
				"Ꝁ": "K",
				"Ꝃ": "K",
				"Ꝅ": "K",
				"Ꞣ": "K",
				"Ⓛ": "L",
				"Ｌ": "L",
				"Ŀ": "L",
				"Ĺ": "L",
				"Ľ": "L",
				"Ḷ": "L",
				"Ḹ": "L",
				"Ļ": "L",
				"Ḽ": "L",
				"Ḻ": "L",
				"Ł": "L",
				"Ƚ": "L",
				"Ɫ": "L",
				"Ⱡ": "L",
				"Ꝉ": "L",
				"Ꝇ": "L",
				"Ꞁ": "L",
				"Ǉ": "LJ",
				"ǈ": "Lj",
				"Ⓜ": "M",
				"Ｍ": "M",
				"Ḿ": "M",
				"Ṁ": "M",
				"Ṃ": "M",
				"Ɱ": "M",
				"Ɯ": "M",
				"Ⓝ": "N",
				"Ｎ": "N",
				"Ǹ": "N",
				"Ń": "N",
				"Ñ": "N",
				"Ṅ": "N",
				"Ň": "N",
				"Ṇ": "N",
				"Ņ": "N",
				"Ṋ": "N",
				"Ṉ": "N",
				"Ƞ": "N",
				"Ɲ": "N",
				"Ꞑ": "N",
				"Ꞥ": "N",
				"Ǌ": "NJ",
				"ǋ": "Nj",
				"Ⓞ": "O",
				"Ｏ": "O",
				"Ò": "O",
				"Ó": "O",
				"Ô": "O",
				"Ồ": "O",
				"Ố": "O",
				"Ỗ": "O",
				"Ổ": "O",
				"Õ": "O",
				"Ṍ": "O",
				"Ȭ": "O",
				"Ṏ": "O",
				"Ō": "O",
				"Ṑ": "O",
				"Ṓ": "O",
				"Ŏ": "O",
				"Ȯ": "O",
				"Ȱ": "O",
				"Ö": "O",
				"Ȫ": "O",
				"Ỏ": "O",
				"Ő": "O",
				"Ǒ": "O",
				"Ȍ": "O",
				"Ȏ": "O",
				"Ơ": "O",
				"Ờ": "O",
				"Ớ": "O",
				"Ỡ": "O",
				"Ở": "O",
				"Ợ": "O",
				"Ọ": "O",
				"Ộ": "O",
				"Ǫ": "O",
				"Ǭ": "O",
				"Ø": "O",
				"Ǿ": "O",
				"Ɔ": "O",
				"Ɵ": "O",
				"Ꝋ": "O",
				"Ꝍ": "O",
				"Ƣ": "OI",
				"Ꝏ": "OO",
				"Ȣ": "OU",
				"Ⓟ": "P",
				"Ｐ": "P",
				"Ṕ": "P",
				"Ṗ": "P",
				"Ƥ": "P",
				"Ᵽ": "P",
				"Ꝑ": "P",
				"Ꝓ": "P",
				"Ꝕ": "P",
				"Ⓠ": "Q",
				"Ｑ": "Q",
				"Ꝗ": "Q",
				"Ꝙ": "Q",
				"Ɋ": "Q",
				"Ⓡ": "R",
				"Ｒ": "R",
				"Ŕ": "R",
				"Ṙ": "R",
				"Ř": "R",
				"Ȑ": "R",
				"Ȓ": "R",
				"Ṛ": "R",
				"Ṝ": "R",
				"Ŗ": "R",
				"Ṟ": "R",
				"Ɍ": "R",
				"Ɽ": "R",
				"Ꝛ": "R",
				"Ꞧ": "R",
				"Ꞃ": "R",
				"Ⓢ": "S",
				"Ｓ": "S",
				"ẞ": "S",
				"Ś": "S",
				"Ṥ": "S",
				"Ŝ": "S",
				"Ṡ": "S",
				"Š": "S",
				"Ṧ": "S",
				"Ṣ": "S",
				"Ṩ": "S",
				"Ș": "S",
				"Ş": "S",
				"Ȿ": "S",
				"Ꞩ": "S",
				"Ꞅ": "S",
				"Ⓣ": "T",
				"Ｔ": "T",
				"Ṫ": "T",
				"Ť": "T",
				"Ṭ": "T",
				"Ț": "T",
				"Ţ": "T",
				"Ṱ": "T",
				"Ṯ": "T",
				"Ŧ": "T",
				"Ƭ": "T",
				"Ʈ": "T",
				"Ⱦ": "T",
				"Ꞇ": "T",
				"Ꜩ": "TZ",
				"Ⓤ": "U",
				"Ｕ": "U",
				"Ù": "U",
				"Ú": "U",
				"Û": "U",
				"Ũ": "U",
				"Ṹ": "U",
				"Ū": "U",
				"Ṻ": "U",
				"Ŭ": "U",
				"Ü": "U",
				"Ǜ": "U",
				"Ǘ": "U",
				"Ǖ": "U",
				"Ǚ": "U",
				"Ủ": "U",
				"Ů": "U",
				"Ű": "U",
				"Ǔ": "U",
				"Ȕ": "U",
				"Ȗ": "U",
				"Ư": "U",
				"Ừ": "U",
				"Ứ": "U",
				"Ữ": "U",
				"Ử": "U",
				"Ự": "U",
				"Ụ": "U",
				"Ṳ": "U",
				"Ų": "U",
				"Ṷ": "U",
				"Ṵ": "U",
				"Ʉ": "U",
				"Ⓥ": "V",
				"Ｖ": "V",
				"Ṽ": "V",
				"Ṿ": "V",
				"Ʋ": "V",
				"Ꝟ": "V",
				"Ʌ": "V",
				"Ꝡ": "VY",
				"Ⓦ": "W",
				"Ｗ": "W",
				"Ẁ": "W",
				"Ẃ": "W",
				"Ŵ": "W",
				"Ẇ": "W",
				"Ẅ": "W",
				"Ẉ": "W",
				"Ⱳ": "W",
				"Ⓧ": "X",
				"Ｘ": "X",
				"Ẋ": "X",
				"Ẍ": "X",
				"Ⓨ": "Y",
				"Ｙ": "Y",
				"Ỳ": "Y",
				"Ý": "Y",
				"Ŷ": "Y",
				"Ỹ": "Y",
				"Ȳ": "Y",
				"Ẏ": "Y",
				"Ÿ": "Y",
				"Ỷ": "Y",
				"Ỵ": "Y",
				"Ƴ": "Y",
				"Ɏ": "Y",
				"Ỿ": "Y",
				"Ⓩ": "Z",
				"Ｚ": "Z",
				"Ź": "Z",
				"Ẑ": "Z",
				"Ż": "Z",
				"Ž": "Z",
				"Ẓ": "Z",
				"Ẕ": "Z",
				"Ƶ": "Z",
				"Ȥ": "Z",
				"Ɀ": "Z",
				"Ⱬ": "Z",
				"Ꝣ": "Z",
				"ⓐ": "a",
				"ａ": "a",
				"ẚ": "a",
				"à": "a",
				"á": "a",
				"â": "a",
				"ầ": "a",
				"ấ": "a",
				"ẫ": "a",
				"ẩ": "a",
				"ã": "a",
				"ā": "a",
				"ă": "a",
				"ằ": "a",
				"ắ": "a",
				"ẵ": "a",
				"ẳ": "a",
				"ȧ": "a",
				"ǡ": "a",
				"ä": "a",
				"ǟ": "a",
				"ả": "a",
				"å": "a",
				"ǻ": "a",
				"ǎ": "a",
				"ȁ": "a",
				"ȃ": "a",
				"ạ": "a",
				"ậ": "a",
				"ặ": "a",
				"ḁ": "a",
				"ą": "a",
				"ⱥ": "a",
				"ɐ": "a",
				"ꜳ": "aa",
				"æ": "ae",
				"ǽ": "ae",
				"ǣ": "ae",
				"ꜵ": "ao",
				"ꜷ": "au",
				"ꜹ": "av",
				"ꜻ": "av",
				"ꜽ": "ay",
				"ⓑ": "b",
				"ｂ": "b",
				"ḃ": "b",
				"ḅ": "b",
				"ḇ": "b",
				"ƀ": "b",
				"ƃ": "b",
				"ɓ": "b",
				"ⓒ": "c",
				"ｃ": "c",
				"ć": "c",
				"ĉ": "c",
				"ċ": "c",
				"č": "c",
				"ç": "c",
				"ḉ": "c",
				"ƈ": "c",
				"ȼ": "c",
				"ꜿ": "c",
				"ↄ": "c",
				"ⓓ": "d",
				"ｄ": "d",
				"ḋ": "d",
				"ď": "d",
				"ḍ": "d",
				"ḑ": "d",
				"ḓ": "d",
				"ḏ": "d",
				"đ": "d",
				"ƌ": "d",
				"ɖ": "d",
				"ɗ": "d",
				"ꝺ": "d",
				"ǳ": "dz",
				"ǆ": "dz",
				"ⓔ": "e",
				"ｅ": "e",
				"è": "e",
				"é": "e",
				"ê": "e",
				"ề": "e",
				"ế": "e",
				"ễ": "e",
				"ể": "e",
				"ẽ": "e",
				"ē": "e",
				"ḕ": "e",
				"ḗ": "e",
				"ĕ": "e",
				"ė": "e",
				"ë": "e",
				"ẻ": "e",
				"ě": "e",
				"ȅ": "e",
				"ȇ": "e",
				"ẹ": "e",
				"ệ": "e",
				"ȩ": "e",
				"ḝ": "e",
				"ę": "e",
				"ḙ": "e",
				"ḛ": "e",
				"ɇ": "e",
				"ɛ": "e",
				"ǝ": "e",
				"ⓕ": "f",
				"ｆ": "f",
				"ḟ": "f",
				"ƒ": "f",
				"ꝼ": "f",
				"ⓖ": "g",
				"ｇ": "g",
				"ǵ": "g",
				"ĝ": "g",
				"ḡ": "g",
				"ğ": "g",
				"ġ": "g",
				"ǧ": "g",
				"ģ": "g",
				"ǥ": "g",
				"ɠ": "g",
				"ꞡ": "g",
				"ᵹ": "g",
				"ꝿ": "g",
				"ⓗ": "h",
				"ｈ": "h",
				"ĥ": "h",
				"ḣ": "h",
				"ḧ": "h",
				"ȟ": "h",
				"ḥ": "h",
				"ḩ": "h",
				"ḫ": "h",
				"ẖ": "h",
				"ħ": "h",
				"ⱨ": "h",
				"ⱶ": "h",
				"ɥ": "h",
				"ƕ": "hv",
				"ⓘ": "i",
				"ｉ": "i",
				"ì": "i",
				"í": "i",
				"î": "i",
				"ĩ": "i",
				"ī": "i",
				"ĭ": "i",
				"ï": "i",
				"ḯ": "i",
				"ỉ": "i",
				"ǐ": "i",
				"ȉ": "i",
				"ȋ": "i",
				"ị": "i",
				"į": "i",
				"ḭ": "i",
				"ɨ": "i",
				"ı": "i",
				"ⓙ": "j",
				"ｊ": "j",
				"ĵ": "j",
				"ǰ": "j",
				"ɉ": "j",
				"ⓚ": "k",
				"ｋ": "k",
				"ḱ": "k",
				"ǩ": "k",
				"ḳ": "k",
				"ķ": "k",
				"ḵ": "k",
				"ƙ": "k",
				"ⱪ": "k",
				"ꝁ": "k",
				"ꝃ": "k",
				"ꝅ": "k",
				"ꞣ": "k",
				"ⓛ": "l",
				"ｌ": "l",
				"ŀ": "l",
				"ĺ": "l",
				"ľ": "l",
				"ḷ": "l",
				"ḹ": "l",
				"ļ": "l",
				"ḽ": "l",
				"ḻ": "l",
				"ſ": "l",
				"ł": "l",
				"ƚ": "l",
				"ɫ": "l",
				"ⱡ": "l",
				"ꝉ": "l",
				"ꞁ": "l",
				"ꝇ": "l",
				"ǉ": "lj",
				"ⓜ": "m",
				"ｍ": "m",
				"ḿ": "m",
				"ṁ": "m",
				"ṃ": "m",
				"ɱ": "m",
				"ɯ": "m",
				"ⓝ": "n",
				"ｎ": "n",
				"ǹ": "n",
				"ń": "n",
				"ñ": "n",
				"ṅ": "n",
				"ň": "n",
				"ṇ": "n",
				"ņ": "n",
				"ṋ": "n",
				"ṉ": "n",
				"ƞ": "n",
				"ɲ": "n",
				"ŉ": "n",
				"ꞑ": "n",
				"ꞥ": "n",
				"ǌ": "nj",
				"ⓞ": "o",
				"ｏ": "o",
				"ò": "o",
				"ó": "o",
				"ô": "o",
				"ồ": "o",
				"ố": "o",
				"ỗ": "o",
				"ổ": "o",
				"õ": "o",
				"ṍ": "o",
				"ȭ": "o",
				"ṏ": "o",
				"ō": "o",
				"ṑ": "o",
				"ṓ": "o",
				"ŏ": "o",
				"ȯ": "o",
				"ȱ": "o",
				"ö": "o",
				"ȫ": "o",
				"ỏ": "o",
				"ő": "o",
				"ǒ": "o",
				"ȍ": "o",
				"ȏ": "o",
				"ơ": "o",
				"ờ": "o",
				"ớ": "o",
				"ỡ": "o",
				"ở": "o",
				"ợ": "o",
				"ọ": "o",
				"ộ": "o",
				"ǫ": "o",
				"ǭ": "o",
				"ø": "o",
				"ǿ": "o",
				"ɔ": "o",
				"ꝋ": "o",
				"ꝍ": "o",
				"ɵ": "o",
				"ƣ": "oi",
				"ȣ": "ou",
				"ꝏ": "oo",
				"ⓟ": "p",
				"ｐ": "p",
				"ṕ": "p",
				"ṗ": "p",
				"ƥ": "p",
				"ᵽ": "p",
				"ꝑ": "p",
				"ꝓ": "p",
				"ꝕ": "p",
				"ⓠ": "q",
				"ｑ": "q",
				"ɋ": "q",
				"ꝗ": "q",
				"ꝙ": "q",
				"ⓡ": "r",
				"ｒ": "r",
				"ŕ": "r",
				"ṙ": "r",
				"ř": "r",
				"ȑ": "r",
				"ȓ": "r",
				"ṛ": "r",
				"ṝ": "r",
				"ŗ": "r",
				"ṟ": "r",
				"ɍ": "r",
				"ɽ": "r",
				"ꝛ": "r",
				"ꞧ": "r",
				"ꞃ": "r",
				"ⓢ": "s",
				"ｓ": "s",
				"ß": "s",
				"ś": "s",
				"ṥ": "s",
				"ŝ": "s",
				"ṡ": "s",
				"š": "s",
				"ṧ": "s",
				"ṣ": "s",
				"ṩ": "s",
				"ș": "s",
				"ş": "s",
				"ȿ": "s",
				"ꞩ": "s",
				"ꞅ": "s",
				"ẛ": "s",
				"ⓣ": "t",
				"ｔ": "t",
				"ṫ": "t",
				"ẗ": "t",
				"ť": "t",
				"ṭ": "t",
				"ț": "t",
				"ţ": "t",
				"ṱ": "t",
				"ṯ": "t",
				"ŧ": "t",
				"ƭ": "t",
				"ʈ": "t",
				"ⱦ": "t",
				"ꞇ": "t",
				"ꜩ": "tz",
				"ⓤ": "u",
				"ｕ": "u",
				"ù": "u",
				"ú": "u",
				"û": "u",
				"ũ": "u",
				"ṹ": "u",
				"ū": "u",
				"ṻ": "u",
				"ŭ": "u",
				"ü": "u",
				"ǜ": "u",
				"ǘ": "u",
				"ǖ": "u",
				"ǚ": "u",
				"ủ": "u",
				"ů": "u",
				"ű": "u",
				"ǔ": "u",
				"ȕ": "u",
				"ȗ": "u",
				"ư": "u",
				"ừ": "u",
				"ứ": "u",
				"ữ": "u",
				"ử": "u",
				"ự": "u",
				"ụ": "u",
				"ṳ": "u",
				"ų": "u",
				"ṷ": "u",
				"ṵ": "u",
				"ʉ": "u",
				"ⓥ": "v",
				"ｖ": "v",
				"ṽ": "v",
				"ṿ": "v",
				"ʋ": "v",
				"ꝟ": "v",
				"ʌ": "v",
				"ꝡ": "vy",
				"ⓦ": "w",
				"ｗ": "w",
				"ẁ": "w",
				"ẃ": "w",
				"ŵ": "w",
				"ẇ": "w",
				"ẅ": "w",
				"ẘ": "w",
				"ẉ": "w",
				"ⱳ": "w",
				"ⓧ": "x",
				"ｘ": "x",
				"ẋ": "x",
				"ẍ": "x",
				"ⓨ": "y",
				"ｙ": "y",
				"ỳ": "y",
				"ý": "y",
				"ŷ": "y",
				"ỹ": "y",
				"ȳ": "y",
				"ẏ": "y",
				"ÿ": "y",
				"ỷ": "y",
				"ẙ": "y",
				"ỵ": "y",
				"ƴ": "y",
				"ɏ": "y",
				"ỿ": "y",
				"ⓩ": "z",
				"ｚ": "z",
				"ź": "z",
				"ẑ": "z",
				"ż": "z",
				"ž": "z",
				"ẓ": "z",
				"ẕ": "z",
				"ƶ": "z",
				"ȥ": "z",
				"ɀ": "z",
				"ⱬ": "z",
				"ꝣ": "z",
				"Ά": "Α",
				"Έ": "Ε",
				"Ή": "Η",
				"Ί": "Ι",
				"Ϊ": "Ι",
				"Ό": "Ο",
				"Ύ": "Υ",
				"Ϋ": "Υ",
				"Ώ": "Ω",
				"ά": "α",
				"έ": "ε",
				"ή": "η",
				"ί": "ι",
				"ϊ": "ι",
				"ΐ": "ι",
				"ό": "ο",
				"ύ": "υ",
				"ϋ": "υ",
				"ΰ": "υ",
				"ω": "ω",
				"ς": "σ"
			};
		J = a(document), H = function() {
			var a = 1;
			return function() {
				return a++
			}
		}(), E = D(Object, {
			bind: function(a) {
				var b = this;
				return function() {
					a.apply(b, arguments)
				}
			},
			init: function(c) {
				var d, e, g = ".select2-results";
				this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = a(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = a("<span>", {
					role: "status",
					"aria-live": "polite"
				}).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + H()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", c.element.attr("title")), this.body = a(document.body), s(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", c.element.attr("style")), this.container.css(z(c.containerCss, this.opts.element)), this.container.addClass(z(c.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", p), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), s(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(z(c.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", p), this.results = d = this.container.find(g), this.search = e = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", p), k(this.results), this.dropdown.on("mousemove-filtered", g, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", g, this.bind(function(a) {
					this._touchEvent = !0, this.highlightUnderEvent(a)
				})), this.dropdown.on("touchmove", g, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", g, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function(a) {
					this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
				})), m(80, this.results), this.dropdown.on("scroll-debounced", g, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function(a) {
					a.stopPropagation()
				}), a(this.dropdown).on("change", ".select2-input", function(a) {
					a.stopPropagation()
				}), a.fn.mousewheel && d.mousewheel(function(a, b, c, e) {
					var f = d.scrollTop();
					e > 0 && 0 >= f - e ? (d.scrollTop(0), p(a)) : 0 > e && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()), p(a))
				}), j(e), e.on("keyup-change input paste", this.bind(this.updateResults)), e.on("focus", function() {
					e.addClass("select2-focused")
				}), e.on("blur", function() {
					e.removeClass("select2-focused")
				}), this.dropdown.on("mouseup", g, this.bind(function(b) {
					a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b))
				})), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(a) {
					a.stopPropagation()
				}), this.nextSearchTerm = b, a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
				var h = c.element.prop("disabled");
				h === b && (h = !1), this.enable(!h);
				var i = c.element.prop("readonly");
				i === b && (i = !1), this.readonly(i), K = K || f(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", c.searchInputPlaceholder)
			},
			destroy: function() {
				var a = this.opts.element,
					c = a.data("select2"),
					d = this;
				this.close(), a.length && a[0].detachEvent && d._sync && a.each(function() {
					d._sync && this.detachEvent("onpropertychange", d._sync)
				}), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, c !== b && (c.container.remove(), c.liveRegion.remove(), c.dropdown.remove(), a.show().removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({
					tabindex: this.elementTabIndex
				}) : a.removeAttr("tabindex"), a.show()), C.call(this, "container", "liveRegion", "dropdown", "results", "search")
			},
			optionToData: function(a) {
				return a.is("option") ? {
					id: a.prop("value"),
					text: a.text(),
					element: a.get(),
					css: a.attr("class"),
					disabled: a.prop("disabled"),
					locked: g(a.attr("locked"), "locked") || g(a.data("locked"), !0)
				} : a.is("optgroup") ? {
					text: a.attr("label"),
					children: [],
					element: a.get(),
					css: a.attr("class")
				} : void 0
			},
			prepareOpts: function(c) {
				var d, e, f, i, j = this;
				if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element), e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
					if (this in c) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
				}), c = a.extend({}, {
					populateResults: function(d, e, f) {
						var g, h = this.opts.id,
							i = this.liveRegion;
						(g = function(d, e, k) {
							var l, m, n, o, p, q, r, s, t, u;
							d = c.sortResults(d, e, f);
							var v = [];
							for (l = 0, m = d.length; m > l; l += 1) n = d[l], p = n.disabled === !0, o = !p && h(n) !== b, q = n.children && n.children.length > 0, r = a("<li></li>"), r.addClass("select2-results-dept-" + k), r.addClass("select2-result"), r.addClass(o ? "select2-result-selectable" : "select2-result-unselectable"), p && r.addClass("select2-disabled"), q && r.addClass("select2-result-with-children"), r.addClass(j.opts.formatResultCssClass(n)), r.attr("role", "presentation"), s = a(document.createElement("div")), s.addClass("select2-result-label"), s.attr("id", "select2-result-label-" + H()), s.attr("role", "option"), u = c.formatResult(n, s, f, j.opts.escapeMarkup), u !== b && (s.html(u), r.append(s)), q && (t = a("<ul></ul>"), t.addClass("select2-result-sub"), g(n.children, t, k + 1), r.append(t)), r.data("select2-data", n), v.push(r[0]);
							e.append(v), i.text(c.formatMatches(d.length))
						})(e, d, 0)
					}
				}, a.fn.select2.defaults, c), "function" != typeof c.id && (f = c.id, c.id = function(a) {
					return a[f]
				}), a.isArray(c.element.data("select2Tags"))) {
					if ("tags" in c) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
					c.tags = c.element.data("select2Tags")
				}
				if (e ? (c.query = this.bind(function(a) {
					var c, e, f, g = {
						results: [],
						more: !1
					}, h = a.term;
					f = function(b, c) {
						var d;
						b.is("option") ? a.matcher(h, b.text(), b) && c.push(j.optionToData(b)) : b.is("optgroup") && (d = j.optionToData(b), b.children().each2(function(a, b) {
							f(b, d.children)
						}), d.children.length > 0 && c.push(d))
					}, c = d.children(), this.getPlaceholder() !== b && c.length > 0 && (e = this.getPlaceholderOption(), e && (c = c.not(e))), c.each2(function(a, b) {
						f(b, g.results)
					}), a.callback(g)
				}), c.id = function(a) {
					return a.id
				}) : "query" in c || ("ajax" in c ? (i = c.element.data("ajax-url"), i && i.length > 0 && (c.ajax.url = i), c.query = v.call(c.element, c.ajax)) : "data" in c ? c.query = w(c.data) : "tags" in c && (c.query = x(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function(b) {
					return {
						id: a.trim(b),
						text: a.trim(b)
					}
				}), c.initSelection === b && (c.initSelection = function(b, d) {
					var e = [];
					a(h(b.val(), c.separator, c.transformVal)).each(function() {
						var b = {
							id: this,
							text: this
						}, d = c.tags;
						a.isFunction(d) && (d = d()), a(d).each(function() {
							return g(this.id, b.id) ? (b = this, !1) : void 0
						}), e.push(b)
					}), d(e)
				}))), "function" != typeof c.query) throw "query function not defined for Select2 " + c.element.attr("id");
				if ("top" === c.createSearchChoicePosition) c.createSearchChoicePosition = function(a, b) {
					a.unshift(b)
				};
				else if ("bottom" === c.createSearchChoicePosition) c.createSearchChoicePosition = function(a, b) {
					a.push(b)
				};
				else if ("function" != typeof c.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
				return c
			},
			monitorSource: function() {
				var c, d = this.opts.element,
					e = this;
				d.on("change.select2", this.bind(function(a) {
					this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
				})), this._sync = this.bind(function() {
					var a = d.prop("disabled");
					a === b && (a = !1), this.enable(!a);
					var c = d.prop("readonly");
					c === b && (c = !1), this.readonly(c), this.container && (s(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(z(this.opts.containerCssClass, this.opts.element))), this.dropdown && (s(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(z(this.opts.dropdownCssClass, this.opts.element)))
				}), d.length && d[0].attachEvent && d.each(function() {
					this.attachEvent("onpropertychange", e._sync)
				}), c = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, c !== b && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new c(function(b) {
					a.each(b, e._sync)
				}), this.propertyObserver.observe(d.get(0), {
					attributes: !0,
					subtree: !1
				}))
			},
			triggerSelect: function(b) {
				var c = a.Event("select2-selecting", {
					val: this.id(b),
					object: b,
					choice: b
				});
				return this.opts.element.trigger(c), !c.isDefaultPrevented()
			},
			triggerChange: function(b) {
				b = b || {}, b = a.extend({}, b, {
					type: "change",
					val: this.val()
				}), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
			},
			isInterfaceEnabled: function() {
				return this.enabledInterface === !0
			},
			enableInterface: function() {
				var a = this._enabled && !this._readonly,
					b = !a;
				return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0)
			},
			enable: function(a) {
				a === b && (a = !0), this._enabled !== a && (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface())
			},
			disable: function() {
				this.enable(!1)
			},
			readonly: function(a) {
				a === b && (a = !1), this._readonly !== a && (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface())
			},
			opened: function() {
				return this.container ? this.container.hasClass("select2-dropdown-open") : !1
			},
			positionDropdown: function() {
				var b, c, d, e, f, g = this.dropdown,
					h = this.container,
					i = h.offset(),
					j = h.outerHeight(!1),
					k = h.outerWidth(!1),
					l = g.outerHeight(!1),
					m = a(window),
					n = m.width(),
					o = m.height(),
					p = m.scrollLeft() + n,
					q = m.scrollTop() + o,
					r = i.top + j,
					s = i.left,
					t = q >= r + l,
					u = i.top - l >= m.scrollTop(),
					v = g.outerWidth(!1),
					w = function() {
						return p >= s + v
					}, x = function() {
						return i.left + p + h.outerWidth(!1) > v
					}, y = g.hasClass("select2-drop-above");
				y ? (c = !0, !u && t && (d = !0, c = !1)) : (c = !1, !t && u && (d = !0, c = !0)), d && (g.hide(), i = this.container.offset(), j = this.container.outerHeight(!1), k = this.container.outerWidth(!1), l = g.outerHeight(!1), p = m.scrollLeft() + n, q = m.scrollTop() + o, r = i.top + j, s = i.left, v = g.outerWidth(!1), g.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (f = a(".select2-results", g)[0], g.addClass("select2-drop-auto-width"), g.css("width", ""), v = g.outerWidth(!1) + (f.scrollHeight === f.clientHeight ? 0 : K.width), v > k ? k = v : v = k, l = g.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (b = this.body.offset(), r -= b.top, s -= b.left), !w() && x() && (s = i.left + this.container.outerWidth(!1) - v), e = {
					left: s,
					width: k
				}, c ? (e.top = i.top - l, e.bottom = "auto", this.container.addClass("select2-drop-above"), g.addClass("select2-drop-above")) : (e.top = r, e.bottom = "auto", this.container.removeClass("select2-drop-above"), g.removeClass("select2-drop-above")), e = a.extend(e, z(this.opts.dropdownCss, this.opts.element)), g.css(e)
			},
			shouldOpen: function() {
				var b;
				return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented())
			},
			clearDropdownAlignmentPreference: function() {
				this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
			},
			open: function() {
				return this.shouldOpen() ? (this.opening(), J.on("mousemove.select2Event", function(a) {
					L.x = a.pageX, L.y = a.pageY
				}), !0) : !1
			},
			opening: function() {
				var b, d = this.containerEventName,
					e = "scroll." + d,
					f = "resize." + d,
					g = "orientationchange." + d;
				this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), b = a("#select2-drop-mask"), 0 === b.length && (b = a(document.createElement("div")), b.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), b.hide(), b.appendTo(this.body), b.on("mousedown touchstart click", function(d) {
					c(b);
					var e, f = a("#select2-drop");
					f.length > 0 && (e = f.data("select2"), e.opts.selectOnBlur && e.selectHighlighted({
						noFocus: !0
					}), e.close(), d.preventDefault(), d.stopPropagation())
				})), this.dropdown.prev()[0] !== b[0] && this.dropdown.before(b), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), b.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
				var h = this;
				this.container.parents().add(window).each(function() {
					a(this).on(f + " " + e + " " + g, function(a) {
						h.opened() && h.positionDropdown()
					})
				})
			},
			close: function() {
				if (this.opened()) {
					var b = this.containerEventName,
						c = "scroll." + b,
						d = "resize." + b,
						e = "orientationchange." + b;
					this.container.parents().add(window).each(function() {
						a(this).off(c).off(d).off(e)
					}), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), J.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(a.Event("select2-close"))
				}
			},
			externalSearch: function(a) {
				this.open(), this.search.val(a), this.updateResults(!1)
			},
			clearSearch: function() {},
			getMaximumSelectionSize: function() {
				return z(this.opts.maximumSelectionSize, this.opts.element)
			},
			ensureHighlightVisible: function() {
				var b, c, d, e, f, g, h, i, j = this.results;
				if (c = this.highlight(), !(0 > c)) {
					if (0 == c) return void j.scrollTop(0);
					b = this.findHighlightableChoices().find(".select2-result-label"), d = a(b[c]), i = (d.offset() || {}).top || 0, e = i + d.outerHeight(!0), c === b.length - 1 && (h = j.find("li.select2-more-results"), h.length > 0 && (e = h.offset().top + h.outerHeight(!0))), f = j.offset().top + j.outerHeight(!1), e > f && j.scrollTop(j.scrollTop() + (e - f)), g = i - j.offset().top, 0 > g && "none" != d.css("display") && j.scrollTop(j.scrollTop() + g)
				}
			},
			findHighlightableChoices: function() {
				return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
			},
			moveHighlight: function(b) {
				for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) {
					d += b;
					var e = a(c[d]);
					if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
						this.highlight(d);
						break
					}
				}
			},
			highlight: function(b) {
				var c, d, f = this.findHighlightableChoices();
				return 0 === arguments.length ? e(f.filter(".select2-highlighted")[0], f.get()) : (b >= f.length && (b = f.length - 1), 0 > b && (b = 0), this.removeHighlight(), c = a(f[b]), c.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", c.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(c.text()), d = c.data("select2-data"), void(d && this.opts.element.trigger({
					type: "select2-highlight",
					val: this.id(d),
					choice: d
				})))
			},
			removeHighlight: function() {
				this.results.find(".select2-highlighted").removeClass("select2-highlighted")
			},
			touchMoved: function() {
				this._touchMoved = !0
			},
			clearTouchMoved: function() {
				this._touchMoved = !1
			},
			countSelectableResults: function() {
				return this.findHighlightableChoices().length
			},
			highlightUnderEvent: function(b) {
				var c = a(b.target).closest(".select2-result-selectable");
				if (c.length > 0 && !c.is(".select2-highlighted")) {
					var d = this.findHighlightableChoices();
					this.highlight(d.index(c))
				} else 0 == c.length && this.removeHighlight()
			},
			loadMoreIfNeeded: function() {
				var a, b = this.results,
					c = b.find("li.select2-more-results"),
					d = this.resultsPage + 1,
					e = this,
					f = this.search.val(),
					g = this.context;
				0 !== c.length && (a = c.offset().top - b.offset().top - b.height(), a <= this.opts.loadMorePadding && (c.addClass("select2-active"), this.opts.query({
					element: this.opts.element,
					term: f,
					page: d,
					context: g,
					matcher: this.opts.matcher,
					callback: this.bind(function(a) {
						e.opened() && (e.opts.populateResults.call(this, b, a.results, {
							term: f,
							page: d,
							context: g
						}), e.postprocessResults(a, !1, !1), a.more === !0 ? (c.detach().appendTo(b).html(e.opts.escapeMarkup(z(e.opts.formatLoadMore, e.opts.element, d + 1))), window.setTimeout(function() {
							e.loadMoreIfNeeded()
						}, 10)) : c.remove(), e.positionDropdown(), e.resultsPage = d, e.context = a.context, this.opts.element.trigger({
							type: "select2-loaded",
							items: a
						}))
					})
				})))
			},
			tokenize: function() {},
			updateResults: function(c) {
				function d() {
					j.removeClass("select2-active"), m.positionDropdown(), k.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? m.liveRegion.text(k.text()) : m.liveRegion.text(m.opts.formatMatches(k.find('.select2-result-selectable:not(".select2-selected")').length))
				}
				function e(a) {
					k.html(a), d()
				}
				var f, h, i, j = this.search,
					k = this.results,
					l = this.opts,
					m = this,
					n = j.val(),
					o = a.data(this.container, "select2-last-term");
				if ((c === !0 || !o || !g(n, o)) && (a.data(this.container, "select2-last-term", n), c === !0 || this.showSearchInput !== !1 && this.opened())) {
					i = ++this.queryCount;
					var p = this.getMaximumSelectionSize();
					if (p >= 1 && (f = this.data(), a.isArray(f) && f.length >= p && y(l.formatSelectionTooBig, "formatSelectionTooBig"))) return void e("<li class='select2-selection-limit'>" + z(l.formatSelectionTooBig, l.element, p) + "</li>");
					if (j.val().length < l.minimumInputLength) return e(y(l.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + z(l.formatInputTooShort, l.element, j.val(), l.minimumInputLength) + "</li>" : ""), void(c && this.showSearch && this.showSearch(!0));
					if (l.maximumInputLength && j.val().length > l.maximumInputLength) return void e(y(l.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + z(l.formatInputTooLong, l.element, j.val(), l.maximumInputLength) + "</li>" : "");
					l.formatSearching && 0 === this.findHighlightableChoices().length && e("<li class='select2-searching'>" + z(l.formatSearching, l.element) + "</li>"), j.addClass("select2-active"), this.removeHighlight(), h = this.tokenize(), h != b && null != h && j.val(h), this.resultsPage = 1, l.query({
						element: l.element,
						term: j.val(),
						page: this.resultsPage,
						context: null,
						matcher: l.matcher,
						callback: this.bind(function(f) {
							var h;
							if (i == this.queryCount) {
								if (!this.opened()) return void this.search.removeClass("select2-active");
								if (f.hasError !== b && y(l.formatAjaxError, "formatAjaxError")) return void e("<li class='select2-ajax-error'>" + z(l.formatAjaxError, l.element, f.jqXHR, f.textStatus, f.errorThrown) + "</li>");
								if (this.context = f.context === b ? null : f.context, this.opts.createSearchChoice && "" !== j.val() && (h = this.opts.createSearchChoice.call(m, j.val(), f.results), h !== b && null !== h && m.id(h) !== b && null !== m.id(h) && 0 === a(f.results).filter(function() {
									return g(m.id(this), m.id(h))
								}).length && this.opts.createSearchChoicePosition(f.results, h)), 0 === f.results.length && y(l.formatNoMatches, "formatNoMatches")) return void e("<li class='select2-no-results'>" + z(l.formatNoMatches, l.element, j.val()) + "</li>");
								k.empty(), m.opts.populateResults.call(this, k, f.results, {
									term: j.val(),
									page: this.resultsPage,
									context: null
								}), f.more === !0 && y(l.formatLoadMore, "formatLoadMore") && (k.append("<li class='select2-more-results'>" + l.escapeMarkup(z(l.formatLoadMore, l.element, this.resultsPage)) + "</li>"), window.setTimeout(function() {
									m.loadMoreIfNeeded()
								}, 10)), this.postprocessResults(f, c), d(), this.opts.element.trigger({
									type: "select2-loaded",
									items: f
								})
							}
						})
					})
				}
			},
			cancel: function() {
				this.close()
			},
			blur: function() {
				this.opts.selectOnBlur && this.selectHighlighted({
					noFocus: !0
				}), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
			},
			focusSearch: function() {
				n(this.search)
			},
			selectHighlighted: function(a) {
				if (this._touchMoved) return void this.clearTouchMoved();
				var b = this.highlight(),
					c = this.results.find(".select2-highlighted"),
					d = c.closest(".select2-result").data("select2-data");
				d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close()
			},
			getPlaceholder: function() {
				var a;
				return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b)
			},
			getPlaceholderOption: function() {
				if (this.select) {
					var c = this.select.children("option").first();
					if (this.opts.placeholderOption !== b) return "first" === this.opts.placeholderOption && c || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
					if ("" === a.trim(c.text()) && "" === c.val()) return c
				}
			},
			initContainerWidth: function() {
				function c() {
					var c, d, e, f, g, h;
					if ("off" === this.opts.width) return null;
					if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
					if ("copy" === this.opts.width || "resolve" === this.opts.width) {
						if (c = this.opts.element.attr("style"), c !== b) for (d = c.split(";"), f = 0, g = d.length; g > f; f += 1) if (h = d[f].replace(/\s/g, ""), e = h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== e && e.length >= 1) return e[1];
						return "resolve" === this.opts.width ? (c = this.opts.element.css("width"), c.indexOf("%") > 0 ? c : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
					}
					return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
				}
				var d = c.call(this);
				null !== d && this.container.css("width", d)
			}
		}), F = D(E, {
			createContainer: function() {
				var b = a(document.createElement("div")).attr({
					"class": "select2-container"
				}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
				return b
			},
			enableInterface: function() {
				this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
			},
			opening: function() {
				var c, d, e;
				this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), c = this.search.get(0), c.createTextRange ? (d = c.createTextRange(), d.collapse(!1), d.select()) : c.setSelectionRange && (e = this.search.val().length, c.setSelectionRange(e, e))), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"))
			},
			close: function() {
				this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
			},
			focus: function() {
				this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
			},
			isFocused: function() {
				return this.container.hasClass("select2-container-active")
			},
			cancel: function() {
				this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
			},
			destroy: function() {
				a("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), C.call(this, "selection", "focusser")
			},
			initContainer: function() {
				var b, d, e = this.container,
					f = this.dropdown,
					g = H();
				this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = b = e.find(".select2-choice"), this.focusser = e.find(".select2-focusser"), b.find(".select2-chosen").attr("id", "select2-chosen-" + g), this.focusser.attr("aria-labelledby", "select2-chosen-" + g), this.results.attr("id", "select2-results-" + g), this.search.attr("aria-owns", "select2-results-" + g), this.focusser.attr("id", "s2id_autogen" + g), d = a("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.focus(this.bind(function() {
					this.focus()
				})), this.focusser.prev().text(d.text()).attr("for", this.focusser.attr("id"));
				var h = this.opts.element.attr("title");
				this.opts.element.attr("title", h || d.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(a("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(a) {
					if (this.isInterfaceEnabled() && 229 != a.keyCode) {
						if (a.which === M.PAGE_UP || a.which === M.PAGE_DOWN) return void p(a);
						switch (a.which) {
							case M.UP:
							case M.DOWN:
								return this.moveHighlight(a.which === M.UP ? -1 : 1), void p(a);
							case M.ENTER:
								return this.selectHighlighted(), void p(a);
							case M.TAB:
								return void this.selectHighlighted({
									noFocus: !0
								});
							case M.ESC:
								return this.cancel(a), void p(a)
						}
					}
				})), this.search.on("blur", this.bind(function(a) {
					document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
						this.opened() && this.search.focus()
					}), 0)
				})), this.focusser.on("keydown", this.bind(function(a) {
					if (this.isInterfaceEnabled() && a.which !== M.TAB && !M.isControl(a) && !M.isFunctionKey(a) && a.which !== M.ESC) {
						if (this.opts.openOnEnter === !1 && a.which === M.ENTER) return void p(a);
						if (a.which == M.DOWN || a.which == M.UP || a.which == M.ENTER && this.opts.openOnEnter) {
							if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return;
							return this.open(), void p(a)
						}
						return a.which == M.DELETE || a.which == M.BACKSPACE ? (this.opts.allowClear && this.clear(), void p(a)) : void 0
					}
				})), j(this.focusser), this.focusser.on("keyup-change input", this.bind(function(a) {
					if (this.opts.minimumResultsForSearch >= 0) {
						if (a.stopPropagation(), this.opened()) return;
						this.open()
					}
				})), b.on("mousedown touchstart", "abbr", this.bind(function(a) {
					this.isInterfaceEnabled() && (this.clear(), q(a), this.close(), this.selection && this.selection.focus())
				})), b.on("mousedown touchstart", this.bind(function(d) {
					c(b), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), p(d)
				})), f.on("mousedown touchstart", this.bind(function() {
					this.opts.shouldFocusInput(this) && this.search.focus()
				})), b.on("focus", this.bind(function(a) {
					p(a)
				})), this.focusser.on("focus", this.bind(function() {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
				})).on("blur", this.bind(function() {
					this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur")))
				})), this.search.on("focus", this.bind(function() {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
				})), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
			},
			clear: function(b) {
				var c = this.selection.data("select2-data");
				if (c) {
					var d = a.Event("select2-clearing");
					if (this.opts.element.trigger(d), d.isDefaultPrevented()) return;
					var e = this.getPlaceholderOption();
					this.opts.element.val(e ? e.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), b !== !1 && (this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(c),
						choice: c
					}), this.triggerChange({
						removed: c
					}))
				}
			},
			initSelection: function() {
				if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
				else {
					var a = this;
					this.opts.initSelection.call(null, this.opts.element, function(c) {
						c !== b && null !== c && (a.updateSelection(c), a.close(), a.setPlaceholder(), a.nextSearchTerm = a.opts.nextSearchTerm(c, a.search.val()))
					})
				}
			},
			isPlaceholderOptionSelected: function() {
				var a;
				return this.getPlaceholder() === b ? !1 : (a = this.getPlaceholderOption()) !== b && a.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val()
			},
			prepareOpts: function() {
				var b = this.parent.prepareOpts.apply(this, arguments),
					c = this;
				return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
					var d = a.find("option").filter(function() {
						return this.selected && !this.disabled
					});
					b(c.optionToData(d))
				} : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
					var e = c.val(),
						f = null;
					b.query({
						matcher: function(a, c, d) {
							var h = g(e, b.id(d));
							return h && (f = d), h
						},
						callback: a.isFunction(d) ? function() {
							d(f)
						} : a.noop
					})
				}), b
			},
			getPlaceholder: function() {
				return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
			},
			setPlaceholder: function() {
				var a = this.getPlaceholder();
				if (this.isPlaceholderOptionSelected() && a !== b) {
					if (this.select && this.getPlaceholderOption() === b) return;
					this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
				}
			},
			postprocessResults: function(a, b, c) {
				var d = 0,
					e = this;
				if (this.findHighlightableChoices().each2(function(a, b) {
					return g(e.id(b.data("select2-data")), e.opts.element.val()) ? (d = a, !1) : void 0
				}), c !== !1 && (b === !0 && d >= 0 ? this.highlight(d) : this.highlight(0)), b === !0) {
					var f = this.opts.minimumResultsForSearch;
					f >= 0 && this.showSearch(A(a.results) >= f)
				}
			},
			showSearch: function(b) {
				this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
			},
			onSelect: function(a, b) {
				if (this.triggerSelect(a)) {
					var c = this.opts.element.val(),
						d = this.data();
					this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({
						type: "select2-selected",
						val: this.id(a),
						choice: a
					}), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.close(), b && b.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), g(c, this.id(a)) || this.triggerChange({
						added: a,
						removed: d
					})
				}
			},
			updateSelection: function(a) {
				var c, d, e = this.selection.find(".select2-chosen");
				this.selection.data("select2-data", a), e.empty(), null !== a && (c = this.opts.formatSelection(a, e, this.opts.escapeMarkup)), c !== b && e.append(c), d = this.opts.formatSelectionCssClass(a, e), d !== b && e.addClass(d), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
			},
			val: function() {
				var a, c = !1,
					d = null,
					e = this,
					f = this.data();
				if (0 === arguments.length) return this.opts.element.val();
				if (a = arguments[0], arguments.length > 1 && (c = arguments[1]), this.select) this.select.val(a).find("option").filter(function() {
					return this.selected
				}).each2(function(a, b) {
					return d = e.optionToData(b), !1
				}), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({
					added: d,
					removed: f
				});
				else {
					if (!a && 0 !== a) return void this.clear(c);
					if (this.opts.initSelection === b) throw new Error("cannot call val() if initSelection() is not defined");
					this.opts.element.val(a), this.opts.initSelection(this.opts.element, function(a) {
						e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({
							added: a,
							removed: f
						})
					})
				}
			},
			clearSearch: function() {
				this.search.val(""), this.focusser.val("")
			},
			data: function(a) {
				var c, d = !1;
				return 0 === arguments.length ? (c = this.selection.data("select2-data"), c == b && (c = null), c) : (arguments.length > 1 && (d = arguments[1]), void(a ? (c = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), d && this.triggerChange({
					added: a,
					removed: c
				})) : this.clear(d)))
			}
		}), G = D(E, {
			createContainer: function() {
				var b = a(document.createElement("div")).attr({
					"class": "select2-container select2-container-multi"
				}).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
				return b
			},
			prepareOpts: function() {
				var b = this.parent.prepareOpts.apply(this, arguments),
					c = this;
				return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
					var d = [];
					a.find("option").filter(function() {
						return this.selected && !this.disabled
					}).each2(function(a, b) {
						d.push(c.optionToData(b))
					}), b(d)
				} : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
					var e = h(c.val(), b.separator, b.transformVal),
						f = [];
					b.query({
						matcher: function(c, d, h) {
							var i = a.grep(e, function(a) {
								return g(a, b.id(h))
							}).length;
							return i && f.push(h), i
						},
						callback: a.isFunction(d) ? function() {
							for (var a = [], c = 0; c < e.length; c++) for (var h = e[c], i = 0; i < f.length; i++) {
								var j = f[i];
								if (g(h, b.id(j))) {
									a.push(j), f.splice(i, 1);
									break
								}
							}
							d(a)
						} : a.noop
					})
				}), b
			},
			selectChoice: function(a) {
				var b = this.container.find(".select2-search-choice-focus");
				b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)))
			},
			destroy: function() {
				a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), C.call(this, "searchContainer", "selection")
			},
			initContainer: function() {
				var b, c = ".select2-choices";
				this.searchContainer = this.container.find(".select2-search-field"), this.selection = b = this.container.find(c);
				var d = this;
				this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function(b) {
					d.search[0].focus(), d.selectChoice(a(this))
				}), this.search.attr("id", "s2id_autogen" + H()), this.search.prev().text(a("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.focus(this.bind(function() {
					this.focus()
				})), this.search.on("input paste", this.bind(function() {
					this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
				})), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(a) {
					if (this.isInterfaceEnabled()) {
						++this.keydowns;
						var c = b.find(".select2-search-choice-focus"),
							d = c.prev(".select2-search-choice:not(.select2-locked)"),
							e = c.next(".select2-search-choice:not(.select2-locked)"),
							f = o(this.search);
						if (c.length && (a.which == M.LEFT || a.which == M.RIGHT || a.which == M.BACKSPACE || a.which == M.DELETE || a.which == M.ENTER)) {
							var g = c;
							return a.which == M.LEFT && d.length ? g = d : a.which == M.RIGHT ? g = e.length ? e : null : a.which === M.BACKSPACE ? this.unselect(c.first()) && (this.search.width(10), g = d.length ? d : e) : a.which == M.DELETE ? this.unselect(c.first()) && (this.search.width(10), g = e.length ? e : null) : a.which == M.ENTER && (g = null), this.selectChoice(g), p(a), void(g && g.length || this.open())
						}
						if ((a.which === M.BACKSPACE && 1 == this.keydowns || a.which == M.LEFT) && 0 == f.offset && !f.length) return this.selectChoice(b.find(".select2-search-choice:not(.select2-locked)").last()), void p(a);
						if (this.selectChoice(null), this.opened()) switch (a.which) {
							case M.UP:
							case M.DOWN:
								return this.moveHighlight(a.which === M.UP ? -1 : 1), void p(a);
							case M.ENTER:
								return this.selectHighlighted(), void p(a);
							case M.TAB:
								return this.selectHighlighted({
									noFocus: !0
								}), void this.close();
							case M.ESC:
								return this.cancel(a), void p(a)
						}
						if (a.which !== M.TAB && !M.isControl(a) && !M.isFunctionKey(a) && a.which !== M.BACKSPACE && a.which !== M.ESC) {
							if (a.which === M.ENTER) {
								if (this.opts.openOnEnter === !1) return;
								if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return
							}
							this.open(), (a.which === M.PAGE_UP || a.which === M.PAGE_DOWN) && p(a), a.which === M.ENTER && p(a)
						}
					}
				})), this.search.on("keyup", this.bind(function(a) {
					this.keydowns = 0, this.resizeSearch()
				})), this.search.on("blur", this.bind(function(b) {
					this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur"))
				})), this.container.on("click", c, this.bind(function(b) {
					this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault()))
				})), this.container.on("focus", c, this.bind(function() {
					this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
				})), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
			},
			enableInterface: function() {
				this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
			},
			initSelection: function() {
				if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
					var a = this;
					this.opts.initSelection.call(null, this.opts.element, function(c) {
						c !== b && null !== c && (a.updateSelection(c), a.close(), a.clearSearch())
					})
				}
			},
			clearSearch: function() {
				var a = this.getPlaceholder(),
					c = this.getMaxSearchWidth();
				a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
			},
			clearPlaceholder: function() {
				this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
			},
			opening: function() {
				this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(a.Event("select2-open"))
			},
			close: function() {
				this.opened() && this.parent.close.apply(this, arguments)
			},
			focus: function() {
				this.close(), this.search.focus()
			},
			isFocused: function() {
				return this.search.hasClass("select2-focused")
			},
			updateSelection: function(b) {
				var c = [],
					d = [],
					f = this;
				a(b).each(function() {
					e(f.id(this), c) < 0 && (c.push(f.id(this)), d.push(this))
				}), b = d, this.selection.find(".select2-search-choice").remove(), a(b).each(function() {
					f.addSelectedChoice(this)
				}), f.postprocessResults()
			},
			tokenize: function() {
				var a = this.search.val();
				a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open())
			},
			onSelect: function(a, c) {
				this.triggerSelect(a) && "" !== a.text && (this.addSelectedChoice(a), this.opts.element.trigger({
					type: "selected",
					val: this.id(a),
					choice: a
				}), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(a, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
					added: a
				}), c && c.noFocus || this.focusSearch())
			},
			cancel: function() {
				this.close(), this.focusSearch()
			},
			addSelectedChoice: function(c) {
				var d, e, f = !c.locked,
					g = a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
					h = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
					i = f ? g : h,
					j = this.id(c),
					k = this.getVal();
				d = this.opts.formatSelection(c, i.find("div"), this.opts.escapeMarkup), d != b && i.find("div").replaceWith(a("<div></div>").html(d)), e = this.opts.formatSelectionCssClass(c, i.find("div")), e != b && i.addClass(e), f && i.find(".select2-search-choice-close").on("mousedown", p).on("click dblclick", this.bind(function(b) {
					this.isInterfaceEnabled() && (this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), p(b), this.close(), this.focusSearch())
				})).on("focus", this.bind(function() {
					this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
				})), i.data("select2-data", c), i.insertBefore(this.searchContainer), k.push(j), this.setVal(k)
			},
			unselect: function(b) {
				var c, d, f = this.getVal();
				if (b = b.closest(".select2-search-choice"), 0 === b.length) throw "Invalid argument: " + b + ". Must be .select2-search-choice";
				if (c = b.data("select2-data")) {
					var g = a.Event("select2-removing");
					if (g.val = this.id(c), g.choice = c, this.opts.element.trigger(g), g.isDefaultPrevented()) return !1;
					for (;
					(d = e(this.id(c), f)) >= 0;) f.splice(d, 1), this.setVal(f), this.select && this.postprocessResults();
					return b.remove(), this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(c),
						choice: c
					}), this.triggerChange({
						removed: c
					}), !0
				}
			},
			postprocessResults: function(a, b, c) {
				var d = this.getVal(),
					f = this.results.find(".select2-result"),
					g = this.results.find(".select2-result-with-children"),
					h = this;
				f.each2(function(a, b) {
					var c = h.id(b.data("select2-data"));
					e(c, d) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"))
				}), g.each2(function(a, b) {
					b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
				}), -1 == this.highlight() && c !== !1 && this.opts.closeOnSelect === !0 && h.highlight(0), !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && y(h.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + z(h.opts.formatNoMatches, h.opts.element, h.search.val()) + "</li>")
			},
			getMaxSearchWidth: function() {
				return this.selection.width() - i(this.search)
			},
			resizeSearch: function() {
				var a, b, c, d, e, f = i(this.search);
				a = r(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, a > e && (e = c - f), 40 > e && (e = c - f), 0 >= e && (e = a), this.search.width(Math.floor(e))
			},
			getVal: function() {
				var a;
				return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), h(a, this.opts.separator, this.opts.transformVal))
			},
			setVal: function(b) {
				var c;
				this.select ? this.select.val(b) : (c = [], a(b).each(function() {
					e(this, c) < 0 && c.push(this)
				}), this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator)))
			},
			buildChangeDetails: function(a, b) {
				for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++) for (var d = 0; d < a.length; d++) g(this.opts.id(b[c]), this.opts.id(a[d])) && (b.splice(c, 1), c > 0 && c--, a.splice(d, 1), d--);
				return {
					added: b,
					removed: a
				}
			},
			val: function(c, d) {
				var e, f = this;
				if (0 === arguments.length) return this.getVal();
				if (e = this.data(), e.length || (e = []), !c && 0 !== c) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(d && this.triggerChange({
					added: this.data(),
					removed: e
				}));
				if (this.setVal(c), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));
				else {
					if (this.opts.initSelection === b) throw new Error("val() cannot be called if initSelection() is not defined");
					this.opts.initSelection(this.opts.element, function(b) {
						var c = a.map(b, f.id);
						f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(f.buildChangeDetails(e, f.data()))
					})
				}
				this.clearSearch()
			},
			onSortStart: function() {
				if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
				this.search.width(0), this.searchContainer.hide()
			},
			onSortEnd: function() {
				var b = [],
					c = this;
				this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
					b.push(c.opts.id(a(this).data("select2-data")))
				}), this.setVal(b), this.triggerChange()
			},
			data: function(b, c) {
				var d, e, f = this;
				return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
					return a(this).data("select2-data")
				}).get() : (e = this.data(), b || (b = []), d = a.map(b, function(a) {
					return f.opts.id(a)
				}), this.setVal(d), this.updateSelection(b), this.clearSearch(), c && this.triggerChange(this.buildChangeDetails(e, this.data())), void 0)
			}
		}), a.fn.select2 = function() {
			var c, d, f, g, h, i = Array.prototype.slice.call(arguments, 0),
				j = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
				k = ["opened", "isFocused", "container", "dropdown"],
				l = ["val", "data"],
				m = {
					search: "externalSearch"
				};
			return this.each(function() {
				if (0 === i.length || "object" == typeof i[0]) c = 0 === i.length ? {} : a.extend({}, i[0]), c.element = a(this), "select" === c.element.get(0).tagName.toLowerCase() ? h = c.element.prop("multiple") : (h = c.multiple || !1, "tags" in c && (c.multiple = h = !0)), d = h ? new window.Select2["class"].multi : new window.Select2["class"].single, d.init(c);
				else {
					if ("string" != typeof i[0]) throw "Invalid arguments to select2 plugin: " + i;
					if (e(i[0], j) < 0) throw "Unknown method: " + i[0];
					if (g = b, d = a(this).data("select2"), d === b) return;
					if (f = i[0], "container" === f ? g = d.container : "dropdown" === f ? g = d.dropdown : (m[f] && (f = m[f]), g = d[f].apply(d, i.slice(1))), e(i[0], k) >= 0 || e(i[0], l) >= 0 && 1 == i.length) return !1
				}
			}), g === b ? this : g
		}, a.fn.select2.defaults = {
			width: "copy",
			loadMorePadding: 0,
			closeOnSelect: !0,
			openOnEnter: !0,
			containerCss: {},
			dropdownCss: {},
			containerCssClass: "",
			dropdownCssClass: "",
			formatResult: function(a, b, c, d) {
				var e = [];
				return t(this.text(a), c.term, e, d), e.join("")
			},
			transformVal: function(b) {
				return a.trim(b)
			},
			formatSelection: function(a, c, d) {
				return a ? d(this.text(a)) : b
			},
			sortResults: function(a, b, c) {
				return a
			},
			formatResultCssClass: function(a) {
				return a.css
			},
			formatSelectionCssClass: function(a, c) {
				return b
			},
			minimumResultsForSearch: 0,
			minimumInputLength: 0,
			maximumInputLength: null,
			maximumSelectionSize: 0,
			id: function(a) {
				return a == b ? null : a.id
			},
			text: function(b) {
				return b && this.data && this.data.text ? a.isFunction(this.data.text) ? this.data.text(b) : b[this.data.text] : b.text
			},
			matcher: function(a, b) {
				return d("" + b).toUpperCase().indexOf(d("" + a).toUpperCase()) >= 0
			},
			separator: ",",
			tokenSeparators: [],
			tokenizer: B,
			escapeMarkup: u,
			blurOnChange: !1,
			selectOnBlur: !1,
			adaptContainerCssClass: function(a) {
				return a
			},
			adaptDropdownCssClass: function(a) {
				return null
			},
			nextSearchTerm: function(a, c) {
				return b
			},
			searchInputPlaceholder: "",
			createSearchChoicePosition: "top",
			shouldFocusInput: function(a) {
				var b = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
				return b && a.opts.minimumResultsForSearch < 0 ? !1 : !0
			}
		}, a.fn.select2.locales = [], a.fn.select2.locales.en = {
			formatMatches: function(a) {
				return 1 === a ? "One result is available, press enter to select it." : a + " results are available, use up and down arrow keys to navigate."
			},
			formatNoMatches: function() {
				return "No matches found"
			},
			formatAjaxError: function(a, b, c) {
				return "Loading failed"
			},
			formatInputTooShort: function(a, b) {
				var c = b - a.length;
				return "Please enter " + c + " or more character" + (1 == c ? "" : "s")
			},
			formatInputTooLong: function(a, b) {
				var c = a.length - b;
				return "Please delete " + c + " character" + (1 == c ? "" : "s")
			},
			formatSelectionTooBig: function(a) {
				return "You can only select " + a + " item" + (1 == a ? "" : "s")
			},
			formatLoadMore: function(a) {
				return "Loading more results…"
			},
			formatSearching: function() {
				return "Searching…"
			}
		}, a.extend(a.fn.select2.defaults, a.fn.select2.locales.en), a.fn.select2.ajaxDefaults = {
			transport: a.ajax,
			params: {
				type: "GET",
				cache: !1,
				dataType: "json"
			}
		}, window.Select2 = {
			query: {
				ajax: v,
				local: w,
				tags: x
			},
			util: {
				debounce: l,
				markMatch: t,
				escapeMarkup: u,
				stripDiacritics: d
			},
			"class": {
				"abstract": E,
				single: F,
				multi: G
			}
		}
	}
}(jQuery),
function(a) {
	a.fn.extend({
		complexify: function(b, c) {
			function d(a, b) {
				for (var c = a.length - 1; c >= 0; c--) if (b[0] <= a.charCodeAt(c) && a.charCodeAt(c) <= b[1]) return b[1] - b[0] + 1;
				return 0
			}
			function e(c) {
				if ("strict" === b.banMode) {
					for (var d = 0; d < b.bannedPasswords.length; d++) if (-1 !== c.toLowerCase().indexOf(b.bannedPasswords[d].toLowerCase())) return !0;
					return !1
				}
				return a.inArray(c, b.bannedPasswords) > -1 ? !0 : !1
			}
			function f() {
				var f = a(this).val(),
					j = 0,
					k = !1;
				if (e(f)) j = 1;
				else for (var l = i.length - 1; l >= 0; l--) j += d(f, i[l]);
				j = Math.log(Math.pow(j, f.length)) * (1 / b.strengthScaleFactor), k = j > g && f.length >= b.minimumChars, j = j / h * 100, j = j > 100 ? 100 : j, c.call(this, k, j)
			}
			var g = 49,
				h = 120,
				i = [
					[32, 32],
					[48, 57],
					[65, 90],
					[97, 122],
					[33, 47],
					[58, 64],
					[91, 96],
					[123, 126],
					[128, 255],
					[256, 383],
					[384, 591],
					[592, 687],
					[688, 767],
					[768, 879],
					[880, 1023],
					[1024, 1279],
					[1328, 1423],
					[1424, 1535],
					[1536, 1791],
					[1792, 1871],
					[1920, 1983],
					[2304, 2431],
					[2432, 2559],
					[2560, 2687],
					[2688, 2815],
					[2816, 2943],
					[2944, 3071],
					[3072, 3199],
					[3200, 3327],
					[3328, 3455],
					[3456, 3583],
					[3584, 3711],
					[3712, 3839],
					[3840, 4095],
					[4096, 4255],
					[4256, 4351],
					[4352, 4607],
					[4608, 4991],
					[5024, 5119],
					[5120, 5759],
					[5760, 5791],
					[5792, 5887],
					[6016, 6143],
					[6144, 6319],
					[7680, 7935],
					[7936, 8191],
					[8192, 8303],
					[8304, 8351],
					[8352, 8399],
					[8400, 8447],
					[8448, 8527],
					[8528, 8591],
					[8592, 8703],
					[8704, 8959],
					[8960, 9215],
					[9216, 9279],
					[9280, 9311],
					[9312, 9471],
					[9472, 9599],
					[9600, 9631],
					[9632, 9727],
					[9728, 9983],
					[9984, 10175],
					[10240, 10495],
					[11904, 12031],
					[12032, 12255],
					[12272, 12287],
					[12288, 12351],
					[12352, 12447],
					[12448, 12543],
					[12544, 12591],
					[12592, 12687],
					[12688, 12703],
					[12704, 12735],
					[12800, 13055],
					[13056, 13311],
					[13312, 19893],
					[19968, 40959],
					[40960, 42127],
					[42128, 42191],
					[44032, 55203],
					[55296, 56191],
					[56192, 56319],
					[56320, 57343],
					[57344, 63743],
					[63744, 64255],
					[64256, 64335],
					[64336, 65023],
					[65056, 65071],
					[65072, 65103],
					[65104, 65135],
					[65136, 65278],
					[65279, 65279],
					[65280, 65519],
					[65520, 65533]
				],
				j = {
					minimumChars: 8,
					strengthScaleFactor: 1,
					bannedPasswords: window.COMPLEXIFY_BANLIST || [],
					banMode: "strict"
				};
			return a.isFunction(b) && !c && (c = b, b = {}), b = a.extend(j, b), this.each(function() {
				a(this).val() && f.apply(this)
			}), this.each(function() {
				a(this).bind("keyup focus input propertychange mouseup", f)
			})
		}
	})
}(jQuery);