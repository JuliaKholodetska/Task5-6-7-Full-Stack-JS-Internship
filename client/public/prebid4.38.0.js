/* prebid.js v4.38.0
Updated : 2021-05-05*/
!(function (u) {
	var s = window.pbjsChunk;
	window.pbjsChunk = function (e, t, n) {
		for (var r, i, o, a = 0, c = []; a < e.length; a++)
			(i = e[a]), d[i] && c.push(d[i][0]), (d[i] = 0);
		for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
		for (s && s(e, t, n); c.length; ) c.shift()();
		if (n) for (a = 0; a < n.length; a++) o = f((f.s = n[a]));
		return o;
	};
	var n = {},
		d = { 411: 0 };
	function f(e) {
		if (n[e]) return n[e].exports;
		var t = (n[e] = { i: e, l: !1, exports: {} });
		return u[e].call(t.exports, t, t.exports, f), (t.l = !0), t.exports;
	}
	// eslint-disable-next-line no-unused-expressions
	(f.m = u),
		(f.c = n),
		(f.d = function (e, t, n) {
			f.o(e, t) ||
				Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: n,
				});
		}),
		(f.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return f.d(t, "a", t), t;
		}),
		(f.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(f.p = ""),
		(f.oe = function (e) {
			throw (console.error(e), e);
		}),
		f((f.s = 1006));
})({
	0: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }),
			n.d(t, "internal", function () {
				return R;
			}),
			(t.getPrebidInternal = function () {
				return k;
			}),
			n.d(t, "bind", function () {
				return P;
			}),
			(t.getUniqueIdentifierStr = q),
			(t.generateUUID = function e(t) {
				return t
					? (t ^ (G() >> (t / 4))).toString(16)
					: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
			}),
			(t.getBidIdParameter = function (e, t) {
				if (t && t[e]) return t[e];
				return "";
			}),
			(t.tryAppendQueryString = function (e, t, n) {
				if (n) return e + t + "=" + encodeURIComponent(n) + "&";
				return e;
			}),
			(t.parseQueryStringParameters = function (e) {
				var t = "";
				for (var n in e)
					e.hasOwnProperty(n) &&
						(t += n + "=" + encodeURIComponent(e[n]) + "&");
				return (t = t.replace(/&$/, ""));
			}),
			(t.transformAdServerTargetingObj = function (t) {
				return t && 0 < Object.getOwnPropertyNames(t).length
					? ge(t)
							.map(function (e) {
								return "".concat(e, "=").concat(encodeURIComponent(t[e]));
							})
							.join("&")
					: "";
			}),
			(t.getAdUnitSizes = function (e) {
				if (!e) return;
				var t = [];
				{
					var n;
					e.mediaTypes &&
					e.mediaTypes.banner &&
					Array.isArray(e.mediaTypes.banner.sizes)
						? ((n = e.mediaTypes.banner.sizes),
						  Array.isArray(n[0]) ? (t = n) : t.push(n))
						: Array.isArray(e.sizes) &&
						  (Array.isArray(e.sizes[0]) ? (t = e.sizes) : t.push(e.sizes));
				}
				return t;
			}),
			(t.parseSizesInput = function (e) {
				var t = [];
				if ("string" == typeof e) {
					var n = e.split(","),
						r = /^(\d)+x(\d)+$/i;
					if (n) for (var i in n) ae(n, i) && n[i].match(r) && t.push(n[i]);
				} else if ("object" === h(e)) {
					var o = e.length;
					if (0 < o)
						if (2 === o && "number" == typeof e[0] && "number" == typeof e[1])
							t.push(W(e));
						else for (var a = 0; a < o; a++) t.push(W(e[a]));
				}
				return t;
			}),
			(t.parseGPTSingleSizeArray = W),
			(t.parseGPTSingleSizeArrayToRtbSize = function (e) {
				if (L(e)) return { w: e[0], h: e[1] };
			}),
			(t.getWindowTop = F),
			(t.getWindowSelf = z),
			(t.getWindowLocation = V),
			(t.logMessage = H),
			(t.logInfo = K),
			(t.logWarn = J),
			(t.logError = Y),
			(t.hasConsoleLogger = function () {
				return w;
			}),
			(t.debugTurnedOn = $),
			(t.createInvisibleIframe = function () {
				var e = document.createElement("iframe");
				return (
					(e.id = q()),
					(e.height = 0),
					(e.width = 0),
					(e.border = "0px"),
					(e.hspace = "0"),
					(e.vspace = "0"),
					(e.marginWidth = "0"),
					(e.marginHeight = "0"),
					(e.style.border = "0"),
					(e.scrolling = "no"),
					(e.frameBorder = "0"),
					(e.src = "about:blank"),
					(e.style.display = "none"),
					e
				);
			}),
			(t.getParameterByName = function (e) {
				return je(V().search)[e] || "";
			}),
			(t.isA = X),
			(t.isFn = Z),
			(t.isStr = ee),
			(t.isArray = te),
			(t.isNumber = ne),
			(t.isPlainObject = re),
			(t.isBoolean = function (e) {
				return X(e, I);
			}),
			(t.isEmpty = ie),
			(t.isEmptyStr = function (e) {
				return ee(e) && (!e || 0 === e.length);
			}),
			(t._each = oe),
			(t.contains = function (e, t) {
				if (ie(e)) return !1;
				if (Z(e.indexOf)) return -1 !== e.indexOf(t);
				var n = e.length;
				for (; n--; ) if (e[n] === t) return !0;
				return !1;
			}),
			(t._map = function (n, r) {
				if (ie(n)) return [];
				if (Z(n.map)) return n.map(r);
				var i = [];
				return (
					oe(n, function (e, t) {
						i.push(r(e, t, n));
					}),
					i
				);
			}),
			(t.hasOwn = ae),
			(t.insertElement = ce),
			(t.triggerPixel = ue),
			(t.callBurl = function (e) {
				var t = e.source,
					n = e.burl;
				t === m.S2S.SRC && n && R.triggerPixel(n);
			}),
			(t.insertHtmlIntoIframe = function (e) {
				if (!e) return;
				var t = document.createElement("iframe");
				(t.id = q()),
					(t.width = 0),
					(t.height = 0),
					(t.hspace = "0"),
					(t.vspace = "0"),
					(t.marginWidth = "0"),
					(t.marginHeight = "0"),
					(t.style.display = "none"),
					(t.style.height = "0px"),
					(t.style.width = "0px"),
					(t.scrolling = "no"),
					(t.frameBorder = "0"),
					(t.allowtransparency = "true"),
					R.insertElement(t, document, "body"),
					t.contentWindow.document.open(),
					t.contentWindow.document.write(e),
					t.contentWindow.document.close();
			}),
			(t.insertUserSyncIframe = se),
			(t.createTrackPixelHtml = function (e) {
				if (!e) return "";
				var t = encodeURI(e),
					n =
						'<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
				return (n += '<img src="' + t + '"></div>');
			}),
			(t.createTrackPixelIframeHtml = de),
			(t.getValueString = fe),
			(t.uniques = le),
			(t.flatten = pe),
			(t.getBidRequest = function (n, e) {
				return n
					? (e.some(function (e) {
							var t = c()(e.bids, function (t) {
								return ["bidId", "adId", "bid_id"].some(function (e) {
									return t[e] === n;
								});
							});
							return t && (r = t), t;
					  }),
					  r)
					: void 0;
				var r;
			}),
			(t.getKeys = ge),
			(t.getValue = be),
			(t.getKeyByValue = function (e, t) {
				for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
			}),
			(t.getBidderCodes = function () {
				return (
					0 < arguments.length && void 0 !== arguments[0]
						? arguments[0]
						: pbjs.adUnits
				)
					.map(function (e) {
						return e.bids
							.map(function (e) {
								return e.bidder;
							})
							.reduce(pe, []);
					})
					.reduce(pe)
					.filter(le);
			}),
			(t.isGptPubadsDefined = ve),
			n.d(t, "getHighestCpm", function () {
				return ye;
			}),
			n.d(t, "getOldestHighestCpmBid", function () {
				return he;
			}),
			n.d(t, "getLatestHighestCpmBid", function () {
				return me;
			}),
			(t.shuffle = function (e) {
				var t = e.length;
				for (; 0 < t; ) {
					var n = Math.floor(Math.random() * t),
						r = e[--t];
					(e[t] = e[n]), (e[n] = r);
				}
				return e;
			}),
			(t.adUnitsFilter = function (e, t) {
				return s()(e, t && t.adUnitCode);
			}),
			(t.deepClone = Ae),
			(t.inIframe = function () {
				try {
					return R.getWindowSelf() !== R.getWindowTop();
				} catch (e) {
					return !0;
				}
			}),
			(t.isSafariBrowser = function () {
				return /^((?!chrome|android|crios|fxios).)*safari/i.test(
					navigator.userAgent
				);
			}),
			(t.replaceAuctionPrice = function (e, t) {
				if (!e) return;
				return e.replace(/\$\{AUCTION_PRICE\}/g, t);
			}),
			(t.replaceClickThrough = function (e, t) {
				if (!e || !t || "string" != typeof t) return;
				return e.replace(/\${CLICKTHROUGH}/g, t);
			}),
			(t.timestamp = function () {
				return new Date().getTime();
			}),
			(t.getPerformanceNow = function () {
				return (
					(window.performance &&
						window.performance.now &&
						window.performance.now()) ||
					0
				);
			}),
			(t.hasDeviceAccess = function () {
				return !1 !== i.b.getConfig("deviceAccess");
			}),
			(t.checkCookieSupport = Ee),
			(t.delayExecution = function (e, t) {
				if (t < 1)
					throw new Error(
						"numRequiredCalls must be a positive number. Got ".concat(t)
					);
				var n = 0;
				return function () {
					++n === t && e.apply(this, arguments);
				};
			}),
			(t.groupBy = function (e, n) {
				return e.reduce(function (e, t) {
					return (e[t[n]] = e[t[n]] || []).push(t), e;
				}, {});
			}),
			(t.getDefinedParams = function (n, e) {
				return e
					.filter(function (e) {
						return n[e];
					})
					.reduce(function (e, t) {
						return y(e, v({}, t, n[t]));
					}, {});
			}),
			(t.isValidMediaTypes = function (e) {
				var t = ["banner", "native", "video"];
				if (
					!Object.keys(e).every(function (e) {
						return s()(t, e);
					})
				)
					return !1;
				if (e.video && e.video.context)
					return s()(["instream", "outstream", "adpod"], e.video.context);
				return !0;
			}),
			(t.getBidderRequest = function (e, t, n) {
				return (
					c()(e, function (e) {
						return (
							0 <
							e.bids.filter(function (e) {
								return e.bidder === t && e.adUnitCode === n;
							}).length
						);
					}) || { start: null, auctionId: null }
				);
			}),
			(t.getUserConfiguredParams = function (e, t, n) {
				return e
					.filter(function (e) {
						return e.code === t;
					})
					.map(function (e) {
						return e.bids;
					})
					.reduce(pe, [])
					.filter(function (e) {
						return e.bidder === n;
					})
					.map(function (e) {
						return e.params || {};
					});
			}),
			(t.getOrigin = function () {
				return window.location.origin
					? window.location.origin
					: window.location.protocol +
							"//" +
							window.location.hostname +
							(window.location.port ? ":" + window.location.port : "");
			}),
			(t.getDNT = function () {
				return (
					"1" === navigator.doNotTrack ||
					"1" === window.doNotTrack ||
					"1" === navigator.msDoNotTrack ||
					"yes" === navigator.doNotTrack
				);
			}),
			(t.isAdUnitCodeMatchingSlot = function (t) {
				return function (e) {
					return Oe(t, e);
				};
			}),
			(t.isSlotMatchingAdUnitCode = Te),
			(t.getGptSlotInfoForAdUnitCode = function (e) {
				var t;
				ve() && (t = c()(window.googletag.pubads().getSlots(), Te(e)));
				if (t)
					return { gptSlot: t.getAdUnitPath(), divId: t.getSlotElementId() };
				return {};
			}),
			(t.unsupportedBidderMessage = function (e, t) {
				var n = Object.keys(e.mediaTypes || { banner: "banner" }).join(", ");
				return "\n    "
					.concat(e.code, " is a ")
					.concat(n, " ad unit\n    containing bidders that don't support ")
					.concat(n, ": ")
					.concat(t, ".\n    This bidder won't fetch demand.\n  ");
			}),
			(t.isInteger = Ie),
			(t.convertCamelToUnderscore = function (e) {
				return e
					.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
						return "_" + t.toLowerCase();
					})
					.replace(/^_/, "");
			}),
			(t.cleanObj = function (n) {
				return Object.keys(n).reduce(function (e, t) {
					return void 0 !== n[t] && (e[t] = n[t]), e;
				}, {});
			}),
			(t.pick = function (a, c) {
				return "object" === h(a)
					? c.reduce(function (e, t, n) {
							if ("function" == typeof t) return e;
							var r = t,
								i = t.match(/^(.+?)\sas\s(.+?)$/i);
							i && ((t = i[1]), (r = i[2]));
							var o = a[t];
							return (
								"function" == typeof c[n + 1] && (o = c[n + 1](o, e)),
								void 0 !== o && (e[r] = o),
								e
							);
					  }, {})
					: {};
			}),
			(t.transformBidderParamKeywords = function (e) {
				var r =
						1 < arguments.length && void 0 !== arguments[1]
							? arguments[1]
							: "keywords",
					i = [];
				return (
					oe(e, function (e, t) {
						if (te(e)) {
							var n = [];
							oe(e, function (e) {
								(!(e = fe(r + "." + t, e)) && "" !== e) || n.push(e);
							}),
								(e = n);
						} else {
							if (!ee((e = fe(r + "." + t, e)))) return;
							e = [e];
						}
						i.push({ key: t, value: e });
					}),
					i
				);
			}),
			(t.convertTypes = function (r, i) {
				return (
					Object.keys(r).forEach(function (e) {
						var t, n;
						i[e] &&
							(Z(r[e])
								? (i[e] = r[e](i[e]))
								: (i[e] =
										((t = r[e]),
										(n = i[e]),
										"string" === t
											? n && n.toString()
											: "number" === t
											? Number(n)
											: n)),
							isNaN(i[e]) && delete i.key);
					}),
					i
				);
			}),
			(t.isArrayOfNums = function (e, t) {
				return te(e) && (!t || e.length === t) && e.every(Ie);
			}),
			(t.fill = function (e, t) {
				for (var n = [], r = 0; r < t; r++) {
					var i = re(e) ? Ae(e) : e;
					n.push(i);
				}
				return n;
			}),
			(t.chunk = function (e, t) {
				for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
					var i = r * t,
						o = i + t;
					n.push(e.slice(i, o));
				}
				return n;
			}),
			(t.getMinValueFromArray = function (e) {
				return Math.min.apply(Math, p(e));
			}),
			(t.getMaxValueFromArray = function (e) {
				return Math.max.apply(Math, p(e));
			}),
			(t.compareOn = function (n) {
				return function (e, t) {
					return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
				};
			}),
			(t.parseQS = je),
			(t.formatQS = Ce),
			(t.parseUrl = function (e, t) {
				var n = document.createElement("a");
				t && "noDecodeWholeURL" in t && t.noDecodeWholeURL
					? (n.href = e)
					: (n.href = decodeURIComponent(e));
				var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
				return {
					href: n.href,
					protocol: (n.protocol || "").replace(/:$/, ""),
					hostname: n.hostname,
					port: +n.port,
					pathname: n.pathname.replace(/^(?!\/)/, "/"),
					search: r ? n.search : R.parseQS(n.search || ""),
					hash: (n.hash || "").replace(/^#/, ""),
					host: n.host || window.location.host,
				};
			}),
			(t.buildUrl = function (e) {
				return (
					(e.protocol || "http") +
					"://" +
					(e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) +
					(e.pathname || "") +
					(e.search ? "?".concat(R.formatQS(e.search || "")) : "") +
					(e.hash ? "#".concat(e.hash) : "")
				);
			}),
			(t.deepEqual = we),
			(t.mergeDeep = _e),
			(t.cyrb53Hash = function (e) {
				for (
					var t,
						n =
							1 < arguments.length && void 0 !== arguments[1]
								? arguments[1]
								: 0,
						r = function (e, t) {
							if (Z(Math.imul)) return Math.imul(e, t);
							var n = (4194303 & e) * (t |= 0);
							return 4290772992 & e && (n += ((4290772992 & e) * t) | 0), 0 | n;
						},
						i = 3735928559 ^ n,
						o = 1103547991 ^ n,
						a = 0;
					a < e.length;
					a++
				)
					(t = e.charCodeAt(a)),
						(i = r(i ^ t, 2654435761)),
						(o = r(o ^ t, 1597334677));
				return (
					(i = r(i ^ (i >>> 16), 2246822507) ^ r(o ^ (o >>> 13), 3266489909)),
					(
						4294967296 *
							(2097151 &
								(o =
									r(o ^ (o >>> 16), 2246822507) ^
									r(i ^ (i >>> 13), 3266489909))) +
						(i >>> 0)
					).toString()
				);
			});
		var i = n(3),
			r = n(160),
			o = n.n(r),
			a = n(10),
			c = n.n(a),
			u = n(13),
			s = n.n(u),
			d = n(161);
		n.d(t, "deepAccess", function () {
			return d.a;
		});
		var f = n(162);
		function l(e, t) {
			return (
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
				(function (e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
						return;
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (
							var a, c = e[Symbol.iterator]();
							!(r = (a = c.next()).done) &&
							(n.push(a.value), !t || n.length !== t);
							r = !0
						);
					} catch (e) {
						(i = !0), (o = e);
					} finally {
						try {
							r || null == c.return || c.return();
						} finally {
							if (i) throw o;
						}
					}
					return n;
				})(e, t) ||
				g(e, t) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				})()
			);
		}
		function p(e) {
			return (
				(function (e) {
					if (Array.isArray(e)) return b(e);
				})(e) ||
				(function (e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
						return Array.from(e);
				})(e) ||
				g(e) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				})()
			);
		}
		function g(e, t) {
			if (e) {
				if ("string" == typeof e) return b(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return (
					"Object" === n && e.constructor && (n = e.constructor.name),
					"Map" === n || "Set" === n
						? Array.from(e)
						: "Arguments" === n ||
						  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						? b(e, t)
						: void 0
				);
			}
		}
		function b(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		function v(e, t, n) {
			return (
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
		function y() {
			return (y =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function h(e) {
			return (h =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  })(e);
		}
		n.d(t, "deepSetValue", function () {
			return f.a;
		});
		var m = n(5),
			S = "Array",
			A = "String",
			E = "Function",
			O = "Number",
			T = "Object",
			I = "Boolean",
			j = Object.prototype.toString,
			C = Boolean(window.console),
			w = Boolean(C && window.console.log),
			_ = Boolean(C && window.console.info),
			B = Boolean(C && window.console.warn),
			x = Boolean(C && window.console.error),
			U = n(9),
			R = {
				checkCookieSupport: Ee,
				createTrackPixelIframeHtml: de,
				getWindowSelf: z,
				getWindowTop: F,
				getWindowLocation: V,
				insertUserSyncIframe: se,
				insertElement: ce,
				isFn: Z,
				triggerPixel: ue,
				logError: Y,
				logWarn: J,
				logMessage: H,
				logInfo: K,
				parseQS: je,
				formatQS: Ce,
				deepEqual: we,
			},
			k = {};
		var D,
			N = {},
			P =
				function (e, t) {
					return t;
				}.bind(null, 1, N)() === N
					? Function.prototype.bind
					: function (e) {
							var t = this,
								n = Array.prototype.slice.call(arguments, 1);
							return function () {
								return t.apply(
									e,
									n.concat(Array.prototype.slice.call(arguments))
								);
							};
					  },
			M =
				((D = 0),
				function () {
					return ++D;
				});
		function q() {
			return M() + Math.random().toString(16).substr(2);
		}
		function G() {
			return window && window.crypto && window.crypto.getRandomValues
				? crypto.getRandomValues(new Uint8Array(1))[0] % 16
				: 16 * Math.random();
		}
		function W(e) {
			if (L(e)) return e[0] + "x" + e[1];
		}
		function L(e) {
			return te(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
		}
		function F() {
			return window.top;
		}
		function z() {
			return window.self;
		}
		function V() {
			return window.location;
		}
		function H() {
			$() && w && console.log.apply(console, Q(arguments, "MESSAGE:"));
		}
		function K() {
			$() && _ && console.info.apply(console, Q(arguments, "INFO:"));
		}
		function J() {
			$() && B && console.warn.apply(console, Q(arguments, "WARNING:")),
				U.emit(m.EVENTS.AUCTION_DEBUG, {
					type: "WARNING",
					arguments: arguments,
				});
		}
		function Y() {
			$() && x && console.error.apply(console, Q(arguments, "ERROR:")),
				U.emit(m.EVENTS.AUCTION_DEBUG, { type: "ERROR", arguments: arguments });
		}
		function Q(e, t) {
			e = [].slice.call(e);
			var n = i.b.getCurrentBidder();
			return (
				t && e.unshift(t),
				n && e.unshift(r("#aaa")),
				e.unshift(r("#3b88c3")),
				e.unshift("%cPrebid" + (n ? "%c".concat(n) : "")),
				e
			);
			function r(e) {
				return "display: inline-block; color: #fff; background: ".concat(
					e,
					"; padding: 1px 4px; border-radius: 3px;"
				);
			}
		}
		function $() {
			return !!i.b.getConfig("debug");
		}
		function X(e, t) {
			return j.call(e) === "[object " + t + "]";
		}
		function Z(e) {
			return X(e, E);
		}
		function ee(e) {
			return X(e, A);
		}
		function te(e) {
			return X(e, S);
		}
		function ne(e) {
			return X(e, O);
		}
		function re(e) {
			return X(e, T);
		}
		function ie(e) {
			if (!e) return !0;
			if (te(e) || ee(e)) return !(0 < e.length);
			for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
			return !0;
		}
		function oe(e, t) {
			if (!ie(e)) {
				if (Z(e.forEach)) return e.forEach(t, this);
				var n = 0,
					r = e.length;
				if (0 < r) for (; n < r; n++) t(e[n], n, e);
				else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
			}
		}
		function ae(e, t) {
			return e.hasOwnProperty
				? e.hasOwnProperty(t)
				: void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
		}
		function ce(e, t, n, r) {
			var i;
			(t = t || document),
				(i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head"));
			try {
				if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
					i = i[0];
					var o = r ? null : i.firstChild;
					return i.insertBefore(e, o);
				}
			} catch (e) {}
		}
		function ue(e, t) {
			var n = new Image();
			t &&
				R.isFn(t) &&
				(n.addEventListener("load", t), n.addEventListener("error", t)),
				(n.src = e);
		}
		function se(e, t) {
			var n = R.createTrackPixelIframeHtml(
					e,
					!1,
					"allow-scripts allow-same-origin"
				),
				r = document.createElement("div");
			r.innerHTML = n;
			var i = r.firstChild;
			t &&
				R.isFn(t) &&
				(i.addEventListener("load", t), i.addEventListener("error", t)),
				R.insertElement(i, document, "html", !0);
		}
		function de(e) {
			var t =
				2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
			return e
				? ((!(1 < arguments.length && void 0 !== arguments[1]) ||
						arguments[1]) &&
						(e = encodeURI(e)),
				  (t = t && 'sandbox="'.concat(t, '"')),
				  "<iframe "
						.concat(t, ' id="')
						.concat(
							q(),
							'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
						)
						.concat(e, '">\n    </iframe>'))
				: "";
		}
		function fe(e, t, n) {
			return null == t
				? n
				: ee(t)
				? t
				: ne(t)
				? t.toString()
				: void R.logWarn(
						"Unsuported type for param: " + e + " required type: String"
				  );
		}
		function le(e, t, n) {
			return n.indexOf(e) === t;
		}
		function pe(e, t) {
			return e.concat(t);
		}
		function ge(e) {
			return Object.keys(e);
		}
		function be(e, t) {
			return e[t];
		}
		function ve() {
			if (
				window.googletag &&
				Z(window.googletag.pubads) &&
				Z(window.googletag.pubads().getSlots)
			)
				return !0;
		}
		var ye = Se("timeToRespond", function (e, t) {
				return t < e;
			}),
			he = Se("responseTimestamp", function (e, t) {
				return t < e;
			}),
			me = Se("responseTimestamp", function (e, t) {
				return e < t;
			});
		function Se(n, r) {
			return function (e, t) {
				return e.cpm === t.cpm
					? r(e[n], t[n])
						? t
						: e
					: e.cpm < t.cpm
					? t
					: e;
			};
		}
		function Ae(e) {
			return o()(e);
		}
		function Ee() {
			if (window.navigator.cookieEnabled || document.cookie.length) return !0;
		}
		var Oe = function (e, t) {
			return e.getAdUnitPath() === t || e.getSlotElementId() === t;
		};
		function Te(t) {
			return function (e) {
				return Oe(e, t);
			};
		}
		function Ie(e) {
			return Number.isInteger
				? Number.isInteger(e)
				: "number" == typeof e && isFinite(e) && Math.floor(e) === e;
		}
		function je(e) {
			return e
				? e
						.replace(/^\?/, "")
						.split("&")
						.reduce(function (e, t) {
							var n = l(t.split("="), 2),
								r = n[0],
								i = n[1];
							return (
								/\[\]$/.test(r)
									? ((e[(r = r.replace("[]", ""))] = e[r] || []), e[r].push(i))
									: (e[r] = i || ""),
								e
							);
						}, {})
				: {};
		}
		function Ce(e) {
			return Object.keys(e)
				.map(function (t) {
					return Array.isArray(e[t])
						? e[t]
								.map(function (e) {
									return "".concat(t, "[]=").concat(e);
								})
								.join("&")
						: "".concat(t, "=").concat(e[t]);
				})
				.join("&");
		}
		function we(e, t) {
			if (e === t) return !0;
			if ("object" !== h(e) || null === e || "object" !== h(t) || null === t)
				return !1;
			if (Object.keys(e).length !== Object.keys(t).length) return !1;
			for (var n in e) {
				if (!t.hasOwnProperty(n)) return !1;
				if (!we(e[n], t[n])) return !1;
			}
			return !0;
		}
		function _e(e) {
			for (
				var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1;
				r < t;
				r++
			)
				n[r - 1] = arguments[r];
			if (!n.length) return e;
			var i = n.shift();
			if (re(e) && re(i))
				for (var o in i)
					re(i[o])
						? (e[o] || y(e, v({}, o, {})), _e(e[o], i[o]))
						: te(i[o]) && e[o]
						? te(e[o]) && (e[o] = e[o].concat(i[o]))
						: y(e, v({}, o, i[o]));
			return _e.apply(void 0, [e].concat(n));
		}
	},
	1: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }),
			n.d(t, "storage", function () {
				return I;
			}),
			(t.registerBidder = function (i) {
				var n = Array.isArray(i.supportedMediaTypes)
					? { supportedMediaTypes: i.supportedMediaTypes }
					: void 0;
				function o(e) {
					var t = w(e);
					c.default.registerBidAdapter(t, e.code, n);
				}
				o(i),
					Array.isArray(i.aliases) &&
						i.aliases.forEach(function (e) {
							var t,
								n,
								r = e;
							Object(S.isPlainObject)(e) &&
								((r = e.code), (t = e.gvlid), (n = e.skipPbsAliasing)),
								(c.default.aliasRegistry[r] = i.code),
								o(T({}, i, { code: r, gvlid: t, skipPbsAliasing: n }));
						});
			}),
			(t.newBidder = w),
			n.d(t, "registerSyncInner", function () {
				return _;
			}),
			(t.preloadBidderMappingFile = B),
			(t.getIabSubCategory = function (t, e) {
				var n = c.default.getBidAdapter(t);
				if (n.getSpec().getMappingFileInfo) {
					var r = n.getSpec().getMappingFileInfo(),
						i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
						o = I.getDataFromLocalStorage(i);
					if (o) {
						try {
							o = JSON.parse(o);
						} catch (e) {
							Object(S.logError)(
								"Failed to parse ".concat(
									t,
									" mapping data stored in local storage"
								)
							);
						}
						return o.mapping[e] ? o.mapping[e] : null;
					}
				}
			}),
			(t.isValid = x);
		var r = n(93),
			c = n(8),
			v = n(3),
			y = n(34),
			u = n(44),
			o = n(38),
			a = n(25),
			i = n(5),
			h = n.n(i),
			s = n(9),
			m = n.n(s),
			d = n(13),
			f = n.n(d),
			l = n(4),
			S = n(0),
			p = n(2),
			g = n(11),
			b = n(7);
		function A(e, t) {
			return (
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
				(function (e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
						return;
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (
							var a, c = e[Symbol.iterator]();
							!(r = (a = c.next()).done) &&
							(n.push(a.value), !t || n.length !== t);
							r = !0
						);
					} catch (e) {
						(i = !0), (o = e);
					} finally {
						try {
							r || null == c.return || c.return();
						} finally {
							if (i) throw o;
						}
					}
					return n;
				})(e, t) ||
				(function (e, t) {
					if (!e) return;
					if ("string" == typeof e) return E(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if (
						"Arguments" === n ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					)
						return E(e, t);
				})(e, t) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				})()
			);
		}
		function E(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		function O(e) {
			return (O =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  })(e);
		}
		function T() {
			return (T =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		var I = Object(b.a)("bidderFactory"),
			j = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
			C = 1;
		function w(p) {
			return T(new r.a(p.code), {
				getSpec: function () {
					return Object.freeze(p);
				},
				registerSyncs: g,
				callBids: function (o, a, e, n, c, r) {
					var u, s, t, d, i, f;
					function l() {
						e(),
							v.b.runWithBidder(p.code, function () {
								m.a.emit(h.a.EVENTS.BIDDER_DONE, o),
									g(s, o.gdprConsent, o.uspConsent);
							});
					}
					Array.isArray(o.bids) &&
						((u = {}),
						(s = []),
						0 !== (t = o.bids.filter(b)).length
							? ((d = {}),
							  t.forEach(function (e) {
									(d[e.bidId] = e).adUnitCode ||
										(e.adUnitCode = e.placementCode);
							  }),
							  (i = p.buildRequests(t, o)) && 0 !== i.length
									? (Array.isArray(i) || (i = [i]),
									  (f = Object(S.delayExecution)(r(l), i.length)),
									  i.forEach(function (i) {
											switch (i.method) {
												case "GET":
													n(
														"".concat(i.url).concat(
															(function (e) {
																if (e)
																	return "?".concat(
																		"object" === O(e)
																			? Object(S.parseQueryStringParameters)(e)
																			: e
																	);
																return "";
															})(i.data)
														),
														{ success: r(e), error: t },
														void 0,
														T({ method: "GET", withCredentials: !0 }, i.options)
													);
													break;
												case "POST":
													n(
														i.url,
														{ success: r(e), error: t },
														"string" == typeof i.data
															? i.data
															: JSON.stringify(i.data),
														T(
															{
																method: "POST",
																contentType: "text/plain",
																withCredentials: !0,
															},
															i.options
														)
													);
													break;
												default:
													Object(S.logWarn)(
														"Skipping invalid request from "
															.concat(p.code, ". Request type ")
															.concat(i.type, " must be GET or POST")
													),
														f();
											}
											function e(e, t) {
												c(p.code);
												try {
													e = JSON.parse(e);
												} catch (e) {}
												var n;
												(e = {
													body: e,
													headers: { get: t.getResponseHeader.bind(t) },
												}),
													s.push(e);
												try {
													n = p.interpretResponse(e, i);
												} catch (e) {
													return (
														Object(S.logError)(
															"Bidder ".concat(
																p.code,
																" failed to interpret the server's response. Continuing without bids"
															),
															null,
															e
														),
														void f()
													);
												}
												function r(e) {
													var t,
														n,
														r,
														i = d[e.requestId];
													i
														? ((e.originalCpm = e.cpm),
														  (e.originalCurrency = e.currency),
														  (e.meta = e.meta || T({}, e[i.bidder])),
														  (t = T(Object(y.a)(h.a.STATUS.GOOD, i), e)),
														  (n = i.adUnitCode),
														  (r = t),
														  (u[n] = !0),
														  x(n, r, [o]) && a(n, r))
														: Object(S.logWarn)(
																"Bidder "
																	.concat(
																		p.code,
																		" made bid for unknown request ID: "
																	)
																	.concat(e.requestId, ". Ignoring.")
														  );
												}
												n && (Object(S.isArray)(n) ? n.forEach(r) : r(n)), f(n);
											}
											function t(e) {
												c(p.code),
													Object(S.logError)(
														"Server call for "
															.concat(p.code, " failed: ")
															.concat(e, ". Continuing without bids.")
													),
													f();
											}
									  }))
									: l())
							: l());
				},
			});
			function g(e, t, n) {
				_(p, e, t, n);
			}
			function b(e) {
				return (
					!!p.isBidRequestValid(e) ||
					(Object(S.logWarn)(
						"Invalid bid sent to bidder "
							.concat(p.code, ": ")
							.concat(JSON.stringify(e))
					),
					!1)
				);
			}
		}
		var _ = Object(g.b)(
			"async",
			function (t, e, n, r) {
				var i,
					o,
					a = v.b.getConfig("userSync.aliasSyncEnabled");
				!t.getUserSyncs ||
					(!a && c.default.aliasRegistry[t.code]) ||
					((i = v.b.getConfig("userSync.filterSettings")),
					(o = t.getUserSyncs(
						{
							iframeEnabled: !(!i || (!i.iframe && !i.all)),
							pixelEnabled: !(!i || (!i.image && !i.all)),
						},
						e,
						n,
						r
					)) &&
						(Array.isArray(o) || (o = [o]),
						o.forEach(function (e) {
							u.a.registerSync(e.type, t.code, e.url);
						})));
			},
			"registerSyncs"
		);
		function B(e, t) {
			if (!v.b.getConfig("adpod.brandCategoryExclusion"))
				return e.call(this, t);
			t
				.filter(function (e) {
					return Object(S.deepAccess)(e, "mediaTypes.video.context") === p.a;
				})
				.map(function (e) {
					return e.bids.map(function (e) {
						return e.bidder;
					});
				})
				.reduce(S.flatten, [])
				.filter(S.uniques)
				.forEach(function (n) {
					var e = c.default.getBidAdapter(n);
					if (e.getSpec().getMappingFileInfo) {
						var t = e.getSpec().getMappingFileInfo(),
							r = t.refreshInDays ? t.refreshInDays : C,
							i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
							o = I.getDataFromLocalStorage(i);
						try {
							(!(o = o ? JSON.parse(o) : void 0) ||
								Object(S.timestamp)() >
									o.lastUpdated + 24 * r * 60 * 60 * 1e3) &&
								Object(l.a)(t.url, {
									success: function (e) {
										try {
											e = JSON.parse(e);
											var t = {
												lastUpdated: Object(S.timestamp)(),
												mapping: e.mapping,
											};
											I.setDataInLocalStorage(i, JSON.stringify(t));
										} catch (e) {
											Object(S.logError)(
												"Failed to parse ".concat(
													n,
													" bidder translation mapping file"
												)
											);
										}
									},
									error: function () {
										Object(S.logError)(
											"Failed to load ".concat(n, " bidder translation file")
										);
									},
								});
						} catch (e) {
							Object(S.logError)(
								"Failed to parse ".concat(n, " bidder translation mapping file")
							);
						}
					}
				}),
				e.call(this, t);
		}
		function x(e, t, n) {
			function r(e) {
				return "Invalid bid from "
					.concat(t.bidderCode, ". Ignoring bid: ")
					.concat(e);
			}
			return e
				? t
					? ((i = Object.keys(t)),
					  j.every(function (e) {
							return f()(i, e) && !f()([void 0, null], t[e]);
					  })
							? "native" !== t.mediaType || Object(o.g)(t, n)
								? "video" !== t.mediaType || Object(a.d)(t, n)
									? !(
											"banner" === t.mediaType &&
											!(function (e, t, n) {
												if (
													(t.width || 0 === parseInt(t.width, 10)) &&
													(t.height || 0 === parseInt(t.height, 10))
												)
													return (
														(t.width = parseInt(t.width, 10)),
														(t.height = parseInt(t.height, 10)),
														1
													);
												var r = Object(S.getBidderRequest)(n, t.bidderCode, e),
													i = r && r.bids && r.bids[0] && r.bids[0].sizes,
													o = Object(S.parseSizesInput)(i);
												if (1 === o.length) {
													var a = A(o[0].split("x"), 2),
														c = a[0],
														u = a[1];
													return (
														(t.width = parseInt(c, 10)),
														(t.height = parseInt(u, 10)),
														1
													);
												}
											})(e, t, n)
									  ) ||
									  (Object(S.logError)(
											r("Banner bids require a width and height")
									  ),
									  !1)
									: (Object(S.logError)(
											r(
												"Video bid does not have required vastUrl or renderer property"
											)
									  ),
									  !1)
								: (Object(S.logError)(
										r("Native bid missing some required properties.")
								  ),
								  !1)
							: (Object(S.logError)(
									r(
										"Bidder ".concat(
											t.bidderCode,
											" is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."
										)
									)
							  ),
							  !1))
					: (Object(S.logWarn)(
							"Some adapter tried to add an undefined bid for ".concat(e, ".")
					  ),
					  !1)
				: (Object(S.logWarn)("No adUnitCode was supplied to addBidResponse."),
				  !1);
			var i;
		}
		Object(g.a)("checkAdUnitSetup").before(B);
	},
	10: function (e, t, n) {
		var r = n(98);
		e.exports = r;
	},
	100: function (e, t, n) {
		var r = n(30),
			i = n(101),
			o = n(46),
			a = n(47),
			c = n(55),
			u = n(28),
			s = n(74),
			d = Object.getOwnPropertyDescriptor;
		t.f = r
			? d
			: function (e, t) {
					if (((e = a(e)), (t = c(t, !0)), s))
						try {
							return d(e, t);
						} catch (e) {}
					if (u(e, t)) return o(!i.f.call(e, t), e[t]);
			  };
	},
	1006: function (e, t, n) {
		e.exports = n(70);
	},
	101: function (e, t, n) {
		"use strict";
		var r = {}.propertyIsEnumerable,
			i = Object.getOwnPropertyDescriptor,
			o = i && !r.call({ 1: 2 }, 1);
		t.f = o
			? function (e) {
					var t = i(this, e);
					return !!t && t.enumerable;
			  }
			: r;
	},
	102: function (e, t, n) {
		function r(e, t) {
			var n = c[a(e)];
			return n == s || (n != u && ("function" == typeof t ? i(t) : !!t));
		}
		var i = n(31),
			o = /#|\.prototype\./,
			a = (r.normalize = function (e) {
				return String(e).replace(o, ".").toLowerCase();
			}),
			c = (r.data = {}),
			u = (r.NATIVE = "N"),
			s = (r.POLYFILL = "P");
		e.exports = r;
	},
	103: function (e, t, n) {
		var r = n(27),
			i = n(104),
			o = n(22)("species");
		e.exports = function (e, t) {
			var n;
			return (
				i(e) &&
					(("function" == typeof (n = e.constructor) &&
						(n === Array || i(n.prototype))) ||
						(r(n) && null === (n = n[o]))) &&
					(n = void 0),
				new (void 0 === n ? Array : n)(0 === t ? 0 : t)
			);
		};
	},
	104: function (e, t, n) {
		var r = n(48);
		e.exports =
			Array.isArray ||
			function (e) {
				return "Array" == r(e);
			};
	},
	105: function (e, t, n) {
		var r = n(26),
			i = n(32);
		e.exports = function (t, n) {
			try {
				i(r, t, n);
			} catch (e) {
				r[t] = n;
			}
			return n;
		};
	},
	106: function (e, t, n) {
		var r = n(78);
		e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
	},
	107: function (e, t, n) {
		n(108);
		var r = n(52);
		e.exports = r("Array", "includes");
	},
	108: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(79).includes,
			o = n(51);
		r(
			{
				target: "Array",
				proto: !0,
				forced: !n(60)("indexOf", { ACCESSORS: !0, 1: 0 }),
			},
			{
				includes: function (e, t) {
					return i(this, e, 1 < arguments.length ? t : void 0);
				},
			}
		),
			o("includes");
	},
	109: function (e, t, n) {
		var r = n(58),
			i = Math.max,
			o = Math.min;
		e.exports = function (e, t) {
			var n = r(e);
			return n < 0 ? i(n + t, 0) : o(n, t);
		};
	},
	11: function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return a;
		}),
			n.d(t, "a", function () {
				return c;
			}),
			(t.d = function (e, t) {
				var n =
					2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
				0 === e.getHooks({ hook: t }).length && e.before(t, n);
			}),
			(t.c = function (e, n) {
				a(
					"async",
					function (e) {
						e.forEach(function (e) {
							return n.apply(
								void 0,
								(function (e) {
									if (Array.isArray(e)) return o(e);
								})((t = e)) ||
									(function (e) {
										if (
											"undefined" != typeof Symbol &&
											Symbol.iterator in Object(e)
										)
											return Array.from(e);
									})(t) ||
									(function (e, t) {
										if (e) {
											if ("string" == typeof e) return o(e, t);
											var n = Object.prototype.toString.call(e).slice(8, -1);
											return (
												"Object" === n &&
													e.constructor &&
													(n = e.constructor.name),
												"Map" === n || "Set" === n
													? Array.from(e)
													: "Arguments" === n ||
													  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
													? o(e, t)
													: void 0
											);
										}
									})(t) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										);
									})()
							);
							var t;
						});
					},
					e
				)([]);
			}),
			(t.e = function (e) {
				for (
					var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1;
					r < t;
					r++
				)
					n[r - 1] = arguments[r];
				c(e).before(function (e, t) {
					t.push(n), e(t);
				});
			});
		var r = n(163),
			i = n.n(r);
		function o(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		var a = i()({ ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE }),
			c = a.get;
	},
	110: function (e, t, n) {
		n(111), n(128), n(90), n(130);
		var r = n(43);
		e.exports = r.Set;
	},
	111: function (e, t, n) {
		"use strict";
		var r = n(112),
			i = n(117);
		e.exports = r(
			"Set",
			function (t) {
				return function (e) {
					return t(this, arguments.length ? e : void 0);
				};
			},
			i
		);
	},
	112: function (e, t, n) {
		"use strict";
		var f = n(14),
			l = n(26),
			p = n(81),
			g = n(31),
			b = n(32),
			v = n(18),
			y = n(84),
			h = n(27),
			m = n(64),
			S = n(33).f,
			A = n(56).forEach,
			E = n(30),
			r = n(54),
			O = r.set,
			T = r.getterFor;
		e.exports = function (n, e, t) {
			var r,
				a,
				i = -1 !== n.indexOf("Map"),
				c = -1 !== n.indexOf("Weak"),
				o = i ? "set" : "add",
				u = l[n],
				s = u && u.prototype,
				d = {};
			return (
				E &&
				"function" == typeof u &&
				(c ||
					(s.forEach &&
						!g(function () {
							new u().entries().next();
						})))
					? ((r = e(function (e, t) {
							O(y(e, r, n), { type: n, collection: new u() }),
								null != t && v(t, e[o], e, i);
					  })),
					  (a = T(n)),
					  A(
							[
								"add",
								"clear",
								"delete",
								"forEach",
								"get",
								"has",
								"set",
								"keys",
								"values",
								"entries",
							],
							function (i) {
								var o = "add" == i || "set" == i;
								i in s &&
									(!c || "clear" != i) &&
									b(r.prototype, i, function (e, t) {
										var n = a(this).collection;
										if (!o && c && !h(e)) return "get" == i && void 0;
										var r = n[i](0 === e ? 0 : e, t);
										return o ? this : r;
									});
							}
					  ),
					  c ||
							S(r.prototype, "size", {
								configurable: !0,
								get: function () {
									return a(this).collection.size;
								},
							}))
					: ((r = t.getConstructor(e, n, i, o)), (p.REQUIRED = !0)),
				m(r, n, !1, !0),
				(d[n] = r),
				f({ global: !0, forced: !0 }, d),
				c || t.setStrong(r, n, i),
				r
			);
		};
	},
	113: function (e, t, n) {
		var r = n(31);
		e.exports = !r(function () {
			return Object.isExtensible(Object.preventExtensions({}));
		});
	},
	114: function (e, t, n) {
		"use strict";
		var r = n(63),
			i = n(62);
		e.exports = r
			? {}.toString
			: function () {
					return "[object " + i(this) + "]";
			  };
	},
	115: function (e, t, n) {
		var r = n(26),
			i = n(116),
			o = r.WeakMap;
		e.exports = "function" == typeof o && /native code/.test(i(o));
	},
	116: function (e, t, n) {
		var r = n(77),
			i = Function.toString;
		"function" != typeof r.inspectSource &&
			(r.inspectSource = function (e) {
				return i.call(e);
			}),
			(e.exports = r.inspectSource);
	},
	117: function (e, t, n) {
		"use strict";
		var s = n(33).f,
			d = n(85),
			f = n(122),
			l = n(24),
			p = n(84),
			g = n(18),
			a = n(66),
			c = n(127),
			b = n(30),
			v = n(81).fastKey,
			r = n(54),
			y = r.set,
			h = r.getterFor;
		e.exports = {
			getConstructor: function (e, n, r, i) {
				function o(e, t, n) {
					var r,
						i,
						o = c(e),
						a = u(e, t);
					return (
						a
							? (a.value = n)
							: ((o.last = a =
									{
										index: (i = v(t, !0)),
										key: t,
										value: n,
										previous: (r = o.last),
										next: void 0,
										removed: !1,
									}),
							  o.first || (o.first = a),
							  r && (r.next = a),
							  b ? o.size++ : e.size++,
							  "F" !== i && (o.index[i] = a)),
						e
					);
				}
				var a = e(function (e, t) {
						p(e, a, n),
							y(e, {
								type: n,
								index: d(null),
								first: void 0,
								last: void 0,
								size: 0,
							}),
							b || (e.size = 0),
							null != t && g(t, e[i], e, r);
					}),
					c = h(n),
					u = function (e, t) {
						var n,
							r = c(e),
							i = v(t);
						if ("F" !== i) return r.index[i];
						for (n = r.first; n; n = n.next) if (n.key == t) return n;
					};
				return (
					f(a.prototype, {
						clear: function () {
							for (var e = c(this), t = e.index, n = e.first; n; )
								(n.removed = !0),
									n.previous && (n.previous = n.previous.next = void 0),
									delete t[n.index],
									(n = n.next);
							(e.first = e.last = void 0), b ? (e.size = 0) : (this.size = 0);
						},
						delete: function (e) {
							var t,
								n,
								r = c(this),
								i = u(this, e);
							return (
								i &&
									((t = i.next),
									(n = i.previous),
									delete r.index[i.index],
									(i.removed = !0),
									n && (n.next = t),
									t && (t.previous = n),
									r.first == i && (r.first = t),
									r.last == i && (r.last = n),
									b ? r.size-- : this.size--),
								!!i
							);
						},
						forEach: function (e, t) {
							for (
								var n,
									r = c(this),
									i = l(e, 1 < arguments.length ? t : void 0, 3);
								(n = n ? n.next : r.first);

							)
								for (i(n.value, n.key, this); n && n.removed; ) n = n.previous;
						},
						has: function (e) {
							return !!u(this, e);
						},
					}),
					f(
						a.prototype,
						r
							? {
									get: function (e) {
										var t = u(this, e);
										return t && t.value;
									},
									set: function (e, t) {
										return o(this, 0 === e ? 0 : e, t);
									},
							  }
							: {
									add: function (e) {
										return o(this, (e = 0 === e ? 0 : e), e);
									},
							  }
					),
					b &&
						s(a.prototype, "size", {
							get: function () {
								return c(this).size;
							},
						}),
					a
				);
			},
			setStrong: function (e, t, n) {
				var r = t + " Iterator",
					i = h(t),
					o = h(r);
				a(
					e,
					t,
					function (e, t) {
						y(this, { type: r, target: e, state: i(e), kind: t, last: void 0 });
					},
					function () {
						for (var e = o(this), t = e.kind, n = e.last; n && n.removed; )
							n = n.previous;
						return e.target && (e.last = n = n ? n.next : e.state.first)
							? "keys" == t
								? { value: n.key, done: !1 }
								: "values" == t
								? { value: n.value, done: !1 }
								: { value: [n.key, n.value], done: !1 }
							: { value: (e.target = void 0), done: !0 };
					},
					n ? "entries" : "values",
					!n,
					!0
				),
					c(t);
			},
		};
	},
	118: function (e, t, n) {
		var r = n(30),
			a = n(33),
			c = n(15),
			u = n(119);
		e.exports = r
			? Object.defineProperties
			: function (e, t) {
					c(e);
					for (var n, r = u(t), i = r.length, o = 0; o < i; )
						a.f(e, (n = r[o++]), t[n]);
					return e;
			  };
	},
	119: function (e, t, n) {
		var r = n(120),
			i = n(86);
		e.exports =
			Object.keys ||
			function (e) {
				return r(e, i);
			};
	},
	12: function (e, t, n) {
		"use strict";
		(t.a = i),
			(t.c = function (e) {
				return !(!e || !e.url);
			}),
			(t.b = function (e, t) {
				e.render(t);
			});
		var u = n(39),
			s = n(0),
			r = n(10),
			d = n.n(r),
			f = "outstream";
		function i(e) {
			var t = this,
				r = e.url,
				n = e.config,
				i = e.id,
				o = e.callback,
				a = e.loaded,
				c = e.adUnitCode;
			(this.url = r),
				(this.config = n),
				(this.handlers = {}),
				(this.id = i),
				(this.loaded = a),
				(this.cmd = []),
				(this.push = function (e) {
					"function" == typeof e
						? t.loaded
							? e.call()
							: t.cmd.push(e)
						: s.logError(
								"Commands given to Renderer.push must be wrapped in a function"
						  );
				}),
				(this.callback =
					o ||
					function () {
						(t.loaded = !0), t.process();
					}),
				(this.render = function () {
					function e() {
						t._render
							? t._render.apply(t, n)
							: s.logWarn(
									"No render function was provided, please use .setRender on the renderer"
							  );
					}
					var t = this,
						n = arguments;
					!(function (t) {
						var e = pbjs.adUnits,
							n = d()(e, function (e) {
								return e.code === t;
							});
						if (!n) return !1;
						var r = s.deepAccess(n, "renderer"),
							i = !!(r && r.url && r.render),
							o = s.deepAccess(n, "mediaTypes.video.renderer"),
							a = !!(o && o.url && o.render);
						return !!((i && !0 !== r.backupOnly) || (a && !0 !== o.backupOnly));
					})(c)
						? (this.cmd.unshift(e), Object(u.a)(r, f, this.callback))
						: (s.logWarn(
								"External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(
									c
								)
						  ),
						  e());
				}.bind(this));
		}
		(i.install = function (e) {
			return new i({
				url: e.url,
				config: e.config,
				id: e.id,
				callback: e.callback,
				loaded: e.loaded,
				adUnitCode: e.adUnitCode,
			});
		}),
			(i.prototype.getConfig = function () {
				return this.config;
			}),
			(i.prototype.setRender = function (e) {
				this._render = e;
			}),
			(i.prototype.setEventHandlers = function (e) {
				this.handlers = e;
			}),
			(i.prototype.handleVideoEvent = function (e) {
				var t = e.id,
					n = e.eventName;
				"function" == typeof this.handlers[n] && this.handlers[n](),
					s.logMessage(
						"Prebid Renderer event for id ".concat(t, " type ").concat(n)
					);
			}),
			(i.prototype.process = function () {
				for (; 0 < this.cmd.length; )
					try {
						this.cmd.shift().call();
					} catch (e) {
						s.logError("Error processing Renderer command: ", e);
					}
			});
	},
	120: function (e, t, n) {
		var a = n(28),
			c = n(47),
			u = n(79).indexOf,
			s = n(53);
		e.exports = function (e, t) {
			var n,
				r = c(e),
				i = 0,
				o = [];
			for (n in r) !a(s, n) && a(r, n) && o.push(n);
			for (; t.length > i; ) a(r, (n = t[i++])) && (~u(o, n) || o.push(n));
			return o;
		};
	},
	121: function (e, t, n) {
		var r = n(29);
		e.exports = r("document", "documentElement");
	},
	122: function (e, t, n) {
		var i = n(87);
		e.exports = function (e, t, n) {
			for (var r in t) n && n.unsafe && e[r] ? (e[r] = t[r]) : i(e, r, t[r], n);
			return e;
		};
	},
	123: function (e, t, n) {
		"use strict";
		function i() {
			return this;
		}
		var o = n(88).IteratorPrototype,
			a = n(85),
			c = n(46),
			u = n(64),
			s = n(40);
		e.exports = function (e, t, n) {
			var r = t + " Iterator";
			return (
				(e.prototype = a(o, { next: c(1, n) })), u(e, r, !1, !0), (s[r] = i), e
			);
		};
	},
	124: function (e, t, n) {
		var r = n(31);
		e.exports = !r(function () {
			function e() {}
			return (
				(e.prototype.constructor = null),
				Object.getPrototypeOf(new e()) !== e.prototype
			);
		});
	},
	125: function (e, t, n) {
		var i = n(15),
			o = n(126);
		e.exports =
			Object.setPrototypeOf ||
			("__proto__" in {}
				? (function () {
						var n,
							r = !1,
							e = {};
						try {
							(n = Object.getOwnPropertyDescriptor(
								Object.prototype,
								"__proto__"
							).set).call(e, []),
								(r = e instanceof Array);
						} catch (e) {}
						return function (e, t) {
							return i(e), o(t), r ? n.call(e, t) : (e.__proto__ = t), e;
						};
				  })()
				: void 0);
	},
	126: function (e, t, n) {
		var r = n(27);
		e.exports = function (e) {
			if (!r(e) && null !== e)
				throw TypeError("Can't set " + String(e) + " as a prototype");
			return e;
		};
	},
	127: function (e, t, n) {
		"use strict";
		var r = n(29),
			i = n(33),
			o = n(22),
			a = n(30),
			c = o("species");
		e.exports = function (e) {
			var t = r(e),
				n = i.f;
			a &&
				t &&
				!t[c] &&
				n(t, c, {
					configurable: !0,
					get: function () {
						return this;
					},
				});
		};
	},
	128: function (e, t) {},
	129: function (e, t, n) {
		function r(c) {
			return function (e, t) {
				var n,
					r,
					i = String(s(e)),
					o = u(t),
					a = i.length;
				return o < 0 || a <= o
					? c
						? ""
						: void 0
					: (n = i.charCodeAt(o)) < 55296 ||
					  56319 < n ||
					  o + 1 === a ||
					  (r = i.charCodeAt(o + 1)) < 56320 ||
					  57343 < r
					? c
						? i.charAt(o)
						: n
					: c
					? i.slice(o, o + 2)
					: r - 56320 + ((n - 55296) << 10) + 65536;
			};
		}
		var u = n(58),
			s = n(49);
		e.exports = { codeAt: r(!1), charAt: r(!0) };
	},
	13: function (e, t, n) {
		var r = n(107);
		e.exports = r;
	},
	130: function (e, t, n) {
		n(131);
		var r = n(132),
			i = n(26),
			o = n(62),
			a = n(32),
			c = n(40),
			u = n(22)("toStringTag");
		for (var s in r) {
			var d = i[s],
				f = d && d.prototype;
			f && o(f) !== u && a(f, u, s), (c[s] = c.Array);
		}
	},
	131: function (e, t, n) {
		"use strict";
		var r = n(47),
			i = n(51),
			o = n(40),
			a = n(54),
			c = n(66),
			u = "Array Iterator",
			s = a.set,
			d = a.getterFor(u);
		(e.exports = c(
			Array,
			"Array",
			function (e, t) {
				s(this, { type: u, target: r(e), index: 0, kind: t });
			},
			function () {
				var e = d(this),
					t = e.target,
					n = e.kind,
					r = e.index++;
				return !t || r >= t.length
					? { value: (e.target = void 0), done: !0 }
					: "keys" == n
					? { value: r, done: !1 }
					: "values" == n
					? { value: t[r], done: !1 }
					: { value: [r, t[r]], done: !1 };
			},
			"values"
		)),
			(o.Arguments = o.Array),
			i("keys"),
			i("values"),
			i("entries");
	},
	132: function (e, t) {
		e.exports = {
			CSSRuleList: 0,
			CSSStyleDeclaration: 0,
			CSSValueList: 0,
			ClientRectList: 0,
			DOMRectList: 0,
			DOMStringList: 0,
			DOMTokenList: 1,
			DataTransferItemList: 0,
			FileList: 0,
			HTMLAllCollection: 0,
			HTMLCollection: 0,
			HTMLFormElement: 0,
			HTMLSelectElement: 0,
			MediaList: 0,
			MimeTypeArray: 0,
			NamedNodeMap: 0,
			NodeList: 1,
			PaintRequestList: 0,
			Plugin: 0,
			PluginArray: 0,
			SVGLengthList: 0,
			SVGNumberList: 0,
			SVGPathSegList: 0,
			SVGPointList: 0,
			SVGStringList: 0,
			SVGTransformList: 0,
			SourceBufferList: 0,
			StyleSheetList: 0,
			TextTrackCueList: 0,
			TextTrackList: 0,
			TouchList: 0,
		};
	},
	133: function (e, t, n) {
		n(14)({ target: "Set", stat: !0 }, { from: n(134) });
	},
	134: function (e, t, n) {
		"use strict";
		var s = n(21),
			d = n(24),
			f = n(18);
		e.exports = function (e, t, n) {
			var r,
				i,
				o,
				a,
				c = arguments.length,
				u = 1 < c ? t : void 0;
			return (
				s(this),
				(r = void 0 !== u) && s(u),
				null == e
					? new this()
					: ((i = []),
					  r
							? ((o = 0),
							  (a = d(u, 2 < c ? n : void 0, 2)),
							  f(e, function (e) {
									i.push(a(e, o++));
							  }))
							: f(e, i.push, i),
					  new this(i))
			);
		};
	},
	135: function (e, t, n) {
		n(14)({ target: "Set", stat: !0 }, { of: n(136) });
	},
	136: function (e, t, n) {
		"use strict";
		e.exports = function () {
			for (var e = arguments.length, t = new Array(e); e--; )
				t[e] = arguments[e];
			return new this(t);
		};
	},
	137: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(138);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				addAll: function () {
					return o.apply(this, arguments);
				},
			}
		);
	},
	138: function (e, t, n) {
		"use strict";
		var i = n(15),
			o = n(21);
		e.exports = function () {
			for (
				var e = i(this), t = o(e.add), n = 0, r = arguments.length;
				n < r;
				n++
			)
				t.call(e, arguments[n]);
			return e;
		};
	},
	139: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(140);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				deleteAll: function () {
					return o.apply(this, arguments);
				},
			}
		);
	},
	14: function (e, t, n) {
		"use strict";
		function y(r) {
			function e(e, t, n) {
				if (this instanceof r) {
					switch (arguments.length) {
						case 0:
							return new r();
						case 1:
							return new r(e);
						case 2:
							return new r(e, t);
					}
					return new r(e, t, n);
				}
				return r.apply(this, arguments);
			}
			return (e.prototype = r.prototype), e;
		}
		var h = n(26),
			m = n(100).f,
			S = n(102),
			A = n(43),
			E = n(24),
			O = n(32),
			T = n(28);
		e.exports = function (e, t) {
			var n,
				r,
				i,
				o,
				a,
				c,
				u,
				s,
				d = e.target,
				f = e.global,
				l = e.stat,
				p = e.proto,
				g = f ? h : l ? h[d] : (h[d] || {}).prototype,
				b = f ? A : A[d] || (A[d] = {}),
				v = b.prototype;
			for (i in t)
				(n = !S(f ? i : d + (l ? "." : "#") + i, e.forced) && g && T(g, i)),
					(a = b[i]),
					n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]),
					(o = n && c ? c : t[i]),
					(n && typeof a == typeof o) ||
						((u =
							e.bind && n
								? E(o, h)
								: e.wrap && n
								? y(o)
								: p && "function" == typeof o
								? E(Function.call, o)
								: o),
						(e.sham || (o && o.sham) || (a && a.sham)) && O(u, "sham", !0),
						(b[i] = u),
						p &&
							(T(A, (r = d + "Prototype")) || O(A, r, {}),
							(A[r][i] = o),
							e.real && v && !v[i] && O(v, i, o)));
		};
	},
	140: function (e, t, n) {
		"use strict";
		var a = n(15),
			c = n(21);
		e.exports = function () {
			for (
				var e,
					t = a(this),
					n = c(t.delete),
					r = !0,
					i = 0,
					o = arguments.length;
				i < o;
				i++
			)
				(e = n.call(t, arguments[i])), (r = r && e);
			return !!r;
		};
	},
	141: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(15),
			a = n(24),
			c = n(37),
			u = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				every: function (e, t) {
					var n = o(this),
						r = c(n),
						i = a(e, 1 < arguments.length ? t : void 0, 3);
					return !u(
						r,
						function (e) {
							if (!i(e, e, n)) return u.stop();
						},
						void 0,
						!1,
						!0
					).stopped;
				},
			}
		);
	},
	142: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(29),
			a = n(15),
			c = n(21),
			u = n(41),
			s = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				difference: function (e) {
					var t = a(this),
						n = new (u(t, o("Set")))(t),
						r = c(n.delete);
					return (
						s(e, function (e) {
							r.call(n, e);
						}),
						n
					);
				},
			}
		);
	},
	143: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			c = n(29),
			u = n(15),
			s = n(21),
			d = n(24),
			f = n(41),
			l = n(37),
			p = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				filter: function (e, t) {
					var n = u(this),
						r = l(n),
						i = d(e, 1 < arguments.length ? t : void 0, 3),
						o = new (f(n, c("Set")))(),
						a = s(o.add);
					return (
						p(
							r,
							function (e) {
								i(e, e, n) && a.call(o, e);
							},
							void 0,
							!1,
							!0
						),
						o
					);
				},
			}
		);
	},
	144: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(15),
			a = n(24),
			c = n(37),
			u = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				find: function (e, t) {
					var n = o(this),
						r = c(n),
						i = a(e, 1 < arguments.length ? t : void 0, 3);
					return u(
						r,
						function (e) {
							if (i(e, e, n)) return u.stop(e);
						},
						void 0,
						!1,
						!0
					).result;
				},
			}
		);
	},
	145: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(29),
			a = n(15),
			c = n(21),
			u = n(41),
			s = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				intersection: function (e) {
					var t = a(this),
						n = new (u(t, o("Set")))(),
						r = c(t.has),
						i = c(n.add);
					return (
						s(e, function (e) {
							r.call(t, e) && i.call(n, e);
						}),
						n
					);
				},
			}
		);
	},
	146: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(15),
			a = n(21),
			c = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				isDisjointFrom: function (e) {
					var t = o(this),
						n = a(t.has);
					return !c(e, function (e) {
						if (!0 === n.call(t, e)) return c.stop();
					}).stopped;
				},
			}
		);
	},
	147: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(29),
			a = n(15),
			c = n(21),
			u = n(91),
			s = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				isSubsetOf: function (e) {
					var t = u(this),
						n = a(e),
						r = n.has;
					return (
						"function" != typeof r && ((n = new (o("Set"))(e)), (r = c(n.has))),
						!s(
							t,
							function (e) {
								if (!1 === r.call(n, e)) return s.stop();
							},
							void 0,
							!1,
							!0
						).stopped
					);
				},
			}
		);
	},
	148: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(15),
			a = n(21),
			c = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				isSupersetOf: function (e) {
					var t = o(this),
						n = a(t.has);
					return !c(e, function (e) {
						if (!1 === n.call(t, e)) return c.stop();
					}).stopped;
				},
			}
		);
	},
	149: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(15),
			a = n(37),
			c = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				join: function (e) {
					var t = o(this),
						n = a(t),
						r = void 0 === e ? "," : String(e),
						i = [];
					return c(n, i.push, i, !1, !0), i.join(r);
				},
			}
		);
	},
	15: function (e, t, n) {
		var r = n(27);
		e.exports = function (e) {
			if (!r(e)) throw TypeError(String(e) + " is not an object");
			return e;
		};
	},
	150: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			c = n(29),
			u = n(15),
			s = n(21),
			d = n(24),
			f = n(41),
			l = n(37),
			p = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				map: function (e, t) {
					var n = u(this),
						r = l(n),
						i = d(e, 1 < arguments.length ? t : void 0, 3),
						o = new (f(n, c("Set")))(),
						a = s(o.add);
					return (
						p(
							r,
							function (e) {
								a.call(o, i(e, e, n));
							},
							void 0,
							!1,
							!0
						),
						o
					);
				},
			}
		);
	},
	151: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			a = n(15),
			c = n(21),
			u = n(37),
			s = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				reduce: function (t, e) {
					var n = a(this),
						r = u(n),
						i = arguments.length < 2,
						o = i ? void 0 : e;
					if (
						(c(t),
						s(
							r,
							function (e) {
								o = i ? ((i = !1), e) : t(o, e, e, n);
							},
							void 0,
							!1,
							!0
						),
						i)
					)
						throw TypeError("Reduce of empty set with no initial value");
					return o;
				},
			}
		);
	},
	152: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(15),
			a = n(24),
			c = n(37),
			u = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				some: function (e, t) {
					var n = o(this),
						r = c(n),
						i = a(e, 1 < arguments.length ? t : void 0, 3);
					return u(
						r,
						function (e) {
							if (i(e, e, n)) return u.stop();
						},
						void 0,
						!1,
						!0
					).stopped;
				},
			}
		);
	},
	153: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(29),
			a = n(15),
			c = n(21),
			u = n(41),
			s = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				symmetricDifference: function (e) {
					var t = a(this),
						n = new (u(t, o("Set")))(t),
						r = c(n.delete),
						i = c(n.add);
					return (
						s(e, function (e) {
							r.call(n, e) || i.call(n, e);
						}),
						n
					);
				},
			}
		);
	},
	154: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(16),
			o = n(29),
			a = n(15),
			c = n(21),
			u = n(41),
			s = n(18);
		r(
			{ target: "Set", proto: !0, real: !0, forced: i },
			{
				union: function (e) {
					var t = a(this),
						n = new (u(t, o("Set")))(t);
					return s(e, c(n.add), n), n;
				},
			}
		);
	},
	155: function (e, t, n) {
		n(90), n(156);
		var r = n(43);
		e.exports = r.Array.from;
	},
	156: function (e, t, n) {
		var r = n(14),
			i = n(157);
		r(
			{
				target: "Array",
				stat: !0,
				forced: !n(159)(function (e) {
					Array.from(e);
				}),
			},
			{ from: i }
		);
	},
	157: function (e, t, n) {
		"use strict";
		var v = n(24),
			y = n(57),
			h = n(83),
			m = n(82),
			S = n(50),
			A = n(158),
			E = n(61);
		e.exports = function (e, t, n) {
			var r,
				i,
				o,
				a,
				c,
				u,
				s = y(e),
				d = "function" == typeof this ? this : Array,
				f = arguments.length,
				l = 1 < f ? t : void 0,
				p = void 0 !== l,
				g = E(s),
				b = 0;
			if (
				(p && (l = v(l, 2 < f ? n : void 0, 2)),
				null == g || (d == Array && m(g)))
			)
				for (i = new d((r = S(s.length))); b < r; b++)
					(u = p ? l(s[b], b) : s[b]), A(i, b, u);
			else
				for (c = (a = g.call(s)).next, i = new d(); !(o = c.call(a)).done; b++)
					(u = p ? h(a, l, [o.value, b], !0) : o.value), A(i, b, u);
			return (i.length = b), i;
		};
	},
	158: function (e, t, n) {
		"use strict";
		var i = n(55),
			o = n(33),
			a = n(46);
		e.exports = function (e, t, n) {
			var r = i(t);
			r in e ? o.f(e, r, a(0, n)) : (e[r] = n);
		};
	},
	159: function (e, t, n) {
		var i = n(22)("iterator"),
			o = !1;
		try {
			var r = 0,
				a = {
					next: function () {
						return { done: !!r++ };
					},
					return: function () {
						o = !0;
					},
				};
			(a[i] = function () {
				return this;
			}),
				Array.from(a, function () {
					throw 2;
				});
		} catch (e) {}
		e.exports = function (e, t) {
			if (!t && !o) return !1;
			var n = !1;
			try {
				var r = {};
				(r[i] = function () {
					return {
						next: function () {
							return { done: (n = !0) };
						},
					};
				}),
					e(r);
			} catch (e) {}
			return n;
		};
	},
	16: function (e, t) {
		e.exports = !0;
	},
	160: function (e, t) {
		e.exports = function e(t) {
			var n = Array.isArray(t) ? [] : {};
			for (var r in t) {
				var i = t[r];
				n[r] = i && "object" == typeof i ? e(i) : i;
			}
			return n;
		};
	},
	161: function (e, t, n) {
		"use strict";
		t.a = function (e, t, n, r, i) {
			for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
				e = e ? e[t[r]] : i;
			return e === i ? n : e;
		};
	},
	162: function (e, t, n) {
		"use strict";
		t.a = function (e, t, n) {
			t.split && (t = t.split("."));
			for (var r, i = 0, o = t.length, a = e; i < o; ++i)
				(r = a[t[i]]),
					(a = a[t[i]] =
						i === o - 1
							? n
							: null != r
							? r
							: !~t[i + 1].indexOf(".") && -1 < +t[i + 1]
							? []
							: {});
		};
	},
	163: function (e, t) {
		(h.SYNC = 1), (h.ASYNC = 2), (h.QUEUE = 4);
		var g = "fun-hooks";
		var n = Object.freeze({ useProxy: !0, ready: 0 }),
			b = new WeakMap(),
			r =
				"2,1,0" ===
				[1]
					.reduce(function (e, t, n) {
						return [e, t, n];
					}, 2)
					.toString()
					? Array.prototype.reduce
					: function (e, t) {
							var n,
								r = Object(this),
								i = r.length >>> 0,
								o = 0;
							if (t) n = t;
							else {
								for (; o < i && !(o in r); ) o++;
								n = r[o++];
							}
							for (; o < i; ) o in r && (n = e(n, r[o], o, r)), o++;
							return n;
					  };
		function v(e, t) {
			return Array.prototype.slice.call(e, t);
		}
		var y =
			Object.assign ||
			function (e) {
				return r.call(
					v(arguments, 1),
					function (t, n) {
						return (
							n &&
								Object.keys(n).forEach(function (e) {
									t[e] = n[e];
								}),
							t
						);
					},
					e
				);
			};
		function h(u) {
			var s,
				e = {},
				d = [];
			function t(e, t) {
				return "function" == typeof e
					? f.call(null, "sync", e, t)
					: "string" == typeof e && "function" == typeof t
					? f.apply(null, arguments)
					: "object" == typeof e
					? function (o, e, a) {
							var t = !0;
							void 0 === e && ((e = Object.getOwnPropertyNames(o)), (t = !1));
							var c = {},
								n = ["constructor"];
							for (
								;
								(e = e.filter(function (e) {
									return !(
										"function" != typeof o[e] ||
										-1 !== n.indexOf(e) ||
										e.match(/^_/)
									);
								})).forEach(function (e) {
									var t,
										n = e.split(":"),
										r = n[0],
										i = n[1] || "sync";
									c[r] ||
										((t = o[r]), (c[r] = o[r] = f(i, t, a ? [a, r] : void 0)));
								}),
									(o = Object.getPrototypeOf(o)),
									t && o;

							);
							return c;
					  }.apply(null, arguments)
					: void 0;
			}
			function l(o) {
				var a = Array.isArray(o) ? o : o.split(".");
				return r.call(
					a,
					function (t, n, e) {
						var r = t[n],
							i = !1;
						return (
							r ||
							(e === a.length - 1
								? (s ||
										d.push(function () {
											i ||
												console.warn(
													g +
														": referenced '" +
														o +
														"' but it was never created"
												);
										}),
								  (t[n] = p(function (e) {
										(t[n] = e), (i = !0);
								  })))
								: (t[n] = {}))
						);
					},
					e
				);
			}
			function p(r) {
				var o = [],
					a = [],
					c = function () {},
					e = {
						before: function (e, t) {
							return n.call(this, o, "before", e, t);
						},
						after: function (e, t) {
							return n.call(this, a, "after", e, t);
						},
						getHooks: function (n) {
							var e = o.concat(a);
							"object" == typeof n &&
								(e = e.filter(function (t) {
									return Object.keys(n).every(function (e) {
										return t[e] === n[e];
									});
								}));
							try {
								y(e, {
									remove: function () {
										return (
											e.forEach(function (e) {
												e.remove();
											}),
											this
										);
									},
								});
							} catch (e) {
								console.error(
									"error adding `remove` to array, did you modify Array.prototype?"
								);
							}
							return e;
						},
						removeAll: function () {
							return this.getHooks().remove();
						},
					},
					t = {
						install: function (e, t, n) {
							(this.type = e), (c = n)(o, a), r && r(t);
						},
					};
				return b.set(e.after, t), e;
				function n(t, e, n, r) {
					var i = {
						hook: n,
						type: e,
						priority: r || 10,
						remove: function () {
							var e = t.indexOf(i);
							-1 !== e && (t.splice(e, 1), c(o, a));
						},
					};
					return (
						t.push(i),
						t.sort(function (e, t) {
							return t.priority - e.priority;
						}),
						c(o, a),
						this
					);
				}
			}
			function f(f, e, t) {
				var n = e.after && b.get(e.after);
				if (n) {
					if (n.type !== f)
						throw g + ": recreated hookable with different type";
					return e;
				}
				var r,
					i,
					o = t ? l(t) : p(),
					a = {
						get: function (e, t) {
							return o[t] || Reflect.get.apply(Reflect, arguments);
						},
					};
				return (
					s || d.push(c),
					u.useProxy && "function" == typeof Proxy && Proxy.revocable
						? (i = new Proxy(e, a))
						: y(
								(i = function () {
									return a.apply
										? a.apply(e, this, v(arguments))
										: e.apply(this, arguments);
								}),
								o
						  ),
					b.get(i.after).install(f, i, function (e, t) {
						var s,
							d = [];
						r =
							e.length || t.length
								? (e.forEach(n),
								  (s = d.push(void 0) - 1),
								  t.forEach(n),
								  function (n, r, e) {
										var i,
											o = 0,
											a =
												"async" === f &&
												"function" == typeof e[e.length - 1] &&
												e.pop();
										function c(e) {
											"sync" === f ? (i = e) : a && a.apply(null, arguments);
										}
										function u(e) {
											if (d[o]) {
												var t = v(arguments);
												return (u.bail = c), t.unshift(u), d[o++].apply(r, t);
											}
											"sync" === f ? (i = e) : a && a.apply(null, arguments);
										}
										return (
											(d[s] = function () {
												var e = v(arguments, 1);
												"async" === f && a && (delete u.bail, e.push(u));
												var t = n.apply(r, e);
												"sync" === f && u(t);
											}),
											u.apply(null, e),
											i
										);
								  })
								: void 0;
						function n(e) {
							d.push(e.hook);
						}
						c();
					}),
					i
				);
				function c() {
					!s &&
					("sync" !== f || u.ready & h.SYNC) &&
					("async" !== f || u.ready & h.ASYNC)
						? "sync" !== f && u.ready & h.QUEUE
							? (a.apply = function () {
									var e = arguments;
									d.push(function () {
										i.apply(e[1], e[2]);
									});
							  })
							: (a.apply = function () {
									throw g + ": hooked function not ready";
							  })
						: (a.apply = r);
				}
			}
			return (
				(u = y({}, n, u)).ready
					? (t.ready = function () {
							(s = !0),
								(function (e) {
									for (var t; (t = e.shift()); ) t();
								})(d);
					  })
					: (s = !0),
				(t.get = l),
				t
			);
		}
		e.exports = h;
	},
	17: function (e, t, n) {
		"use strict";
		(t.a = function () {
			return window.pbjs;
		}),
			(window.pbjs = window.pbjs || {}),
			(window.pbjs.cmd = window.pbjs.cmd || []),
			(window.pbjs.que = window.pbjs.que || []),
			(window._pbjsGlobals = window._pbjsGlobals || []),
			window._pbjsGlobals.push("pbjs");
	},
	18: function (e, t, n) {
		function p(e, t) {
			(this.stopped = e), (this.result = t);
		}
		var g = n(15),
			b = n(82),
			v = n(50),
			y = n(24),
			h = n(61),
			m = n(83);
		(e.exports = function (e, t, n, r, i) {
			var o,
				a,
				c,
				u,
				s,
				d,
				f,
				l = y(t, n, r ? 2 : 1);
			if (i) o = e;
			else {
				if ("function" != typeof (a = h(e)))
					throw TypeError("Target is not iterable");
				if (b(a)) {
					for (c = 0, u = v(e.length); c < u; c++)
						if ((s = r ? l(g((f = e[c]))[0], f[1]) : l(e[c])) && s instanceof p)
							return s;
					return new p(!1);
				}
				o = a.call(e);
			}
			for (d = o.next; !(f = d.call(o)).done; )
				if ("object" == typeof (s = m(o, l, f.value, r)) && s && s instanceof p)
					return s;
			return new p(!1);
		}).stop = function (e) {
			return new p(!0, e);
		};
	},
	2: function (e, t, n) {
		"use strict";
		n.d(t, "c", function () {
			return r;
		}),
			n.d(t, "d", function () {
				return i;
			}),
			n.d(t, "b", function () {
				return o;
			}),
			n.d(t, "a", function () {
				return a;
			});
		var r = "native",
			i = "video",
			o = "banner",
			a = "adpod";
	},
	20: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return r;
		});
		var h = n(3),
			m = n(0);
		var S,
			r =
				((S = window),
				function () {
					var e,
						t = [],
						n = (function (e) {
							try {
								if (!e.location.ancestorOrigins) return;
								return e.location.ancestorOrigins;
							} catch (e) {}
						})(S),
						r = h.b.getConfig("maxNestedIframes"),
						i = !1,
						o = 0,
						a = !1,
						c = !1;
					do {
						var u,
							s,
							d = b,
							f = c,
							l = void 0,
							p = !1,
							g = null,
							c = !1,
							b = b ? b.parent : S;
						try {
							l = b.location.href || null;
						} catch (e) {
							p = !0;
						}
						if (p)
							if (f) {
								var v = d.context;
								try {
									(s = g = v.sourceUrl),
										(a = !0),
										b === S.top && (i = !0),
										v.canonicalUrl && (e = v.canonicalUrl);
								} catch (e) {}
							} else {
								Object(m.logWarn)(
									"Trying to access cross domain iframe. Continuing without referrer and location"
								);
								try {
									var y = d.document.referrer;
									y && ((g = y), b === S.top && (i = !0));
								} catch (e) {}
								!g && n && n[o - 1] && (g = n[o - 1]), g && !a && (s = g);
							}
						else
							l &&
								((s = g = l),
								(a = !1),
								b === S.top &&
									((i = !0),
									(u = (function (e) {
										try {
											var t = e.querySelector("link[rel='canonical']");
											if (null !== t) return t.href;
										} catch (e) {}
										return null;
									})(b.document)) && (e = u))),
								b.context && b.context.sourceUrl && (c = !0);
						t.push(g), o++;
					} while (b !== S.top && o < r);
					return (
						t.reverse(),
						{
							referer: s || null,
							reachedTop: i,
							isAmp: a,
							numIframes: o - 1,
							stack: t,
							canonicalUrl: e || null,
						}
					);
				});
	},
	21: function (e, t) {
		e.exports = function (e) {
			if ("function" != typeof e)
				throw TypeError(String(e) + " is not a function");
			return e;
		};
	},
	22: function (e, t, n) {
		var r = n(26),
			i = n(76),
			o = n(28),
			a = n(59),
			c = n(78),
			u = n(106),
			s = i("wks"),
			d = r.Symbol,
			f = u ? d : (d && d.withoutSetter) || a;
		e.exports = function (e) {
			return (
				o(s, e) || (c && o(d, e) ? (s[e] = d[e]) : (s[e] = f("Symbol." + e))),
				s[e]
			);
		};
	},
	23: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return u;
		});
		var r = n(0),
			s = n(35),
			i = n(10),
			o = n.n(i),
			a = n(5);
		var d,
			c,
			u =
				((d = []),
				((c = {}).addWinningBid = function (t) {
					var e = o()(d, function (e) {
						return e.getAuctionId() === t.auctionId;
					});
					e
						? ((t.status = a.BID_STATUS.RENDERED), e.addWinningBid(t))
						: Object(r.logWarn)("Auction not found when adding winning bid");
				}),
				(c.getAllWinningBids = function () {
					return d
						.map(function (e) {
							return e.getWinningBids();
						})
						.reduce(r.flatten, []);
				}),
				(c.getBidsRequested = function () {
					return d
						.map(function (e) {
							return e.getBidRequests();
						})
						.reduce(r.flatten, []);
				}),
				(c.getNoBids = function () {
					return d
						.map(function (e) {
							return e.getNoBids();
						})
						.reduce(r.flatten, []);
				}),
				(c.getBidsReceived = function () {
					return d
						.map(function (e) {
							if (e.getAuctionStatus() === s.a) return e.getBidsReceived();
						})
						.reduce(r.flatten, [])
						.filter(function (e) {
							return e;
						});
				}),
				(c.getAllBidsForAdUnitCode = function (t) {
					return d
						.map(function (e) {
							return e.getBidsReceived();
						})
						.reduce(r.flatten, [])
						.filter(function (e) {
							return e && e.adUnitCode === t;
						});
				}),
				(c.getAdUnits = function () {
					return d
						.map(function (e) {
							return e.getAdUnits();
						})
						.reduce(r.flatten, []);
				}),
				(c.getAdUnitCodes = function () {
					return d
						.map(function (e) {
							return e.getAdUnitCodes();
						})
						.reduce(r.flatten, [])
						.filter(r.uniques);
				}),
				(c.createAuction = function (e) {
					var t,
						n = e.adUnits,
						r = e.adUnitCodes,
						i = e.callback,
						o = e.cbTimeout,
						a = e.labels,
						c = e.auctionId,
						u = Object(s.k)({
							adUnits: n,
							adUnitCodes: r,
							callback: i,
							cbTimeout: o,
							labels: a,
							auctionId: c,
						});
					return (t = u), d.push(t), u;
				}),
				(c.findBidByAdId = function (t) {
					return o()(
						d
							.map(function (e) {
								return e.getBidsReceived();
							})
							.reduce(r.flatten, []),
						function (e) {
							return e.adId === t;
						}
					);
				}),
				(c.getStandardBidderAdServerTargeting = function () {
					return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING];
				}),
				(c.setStatusForBids = function (e, t) {
					var n,
						r = c.findBidByAdId(e);
					r && (r.status = t),
						!r ||
							t !== a.BID_STATUS.BID_TARGETING_SET ||
							((n = o()(d, function (e) {
								return e.getAuctionId() === r.auctionId;
							})) &&
								n.setBidTargeting(r));
				}),
				(c.getLastAuctionId = function () {
					return d.length && d[d.length - 1].getAuctionId();
				}),
				c);
	},
	230: function (e, t, n) {
		n(231);
		var r = n(52);
		e.exports = r("Array", "findIndex");
	},
	231: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(56).findIndex,
			o = n(51),
			a = n(60),
			c = "findIndex",
			u = !0,
			s = a(c);
		c in [] &&
			Array(1)[c](function () {
				u = !1;
			}),
			r(
				{ target: "Array", proto: !0, forced: u || !s },
				{
					findIndex: function (e, t) {
						return i(this, e, 1 < arguments.length ? t : void 0);
					},
				}
			),
			o(c);
	},
	238: function (e, t, n) {
		"use strict";
		t.a = function () {
			window.addEventListener("message", u, !1);
		};
		var r = n(9),
			b = n.n(r),
			v = n(38),
			i = n(5),
			o = n.n(i),
			y = n(0),
			h = n(23),
			a = n(10),
			m = n.n(a),
			S = n(12),
			c = n(13),
			d = n.n(c),
			A = o.a.EVENTS.BID_WON;
		function u(e) {
			var t,
				n,
				r,
				i,
				o,
				a,
				c,
				u,
				s,
				d = e.message ? "message" : "data",
				f = {};
			try {
				f = JSON.parse(e[d]);
			} catch (e) {
				return;
			}
			if (f && f.adId) {
				var l,
					p = m()(h.a.getBidsReceived(), function (e) {
						return e.adId === f.adId;
					});
				if (
					(p &&
						"Prebid Request" === f.message &&
						((n = e),
						(r = (t = p).adId),
						(i = t.ad),
						(o = t.adUrl),
						(a = t.width),
						(c = t.height),
						(u = t.renderer),
						(s = t.cpm),
						Object(S.c)(u)
							? Object(S.b)(u, t)
							: r &&
							  (E(t),
							  n.source.postMessage(
									JSON.stringify({
										message: "Prebid Response",
										ad: Object(y.replaceAuctionPrice)(i, s),
										adUrl: Object(y.replaceAuctionPrice)(o, s),
										adId: r,
										width: a,
										height: c,
									}),
									n.origin
							  )),
						h.a.addWinningBid(p),
						b.a.emit(A, p)),
					p && "Prebid Native" === f.message)
				) {
					if ("assetRequest" === f.action) {
						var g = Object(v.d)(f, p);
						return void e.source.postMessage(JSON.stringify(g), e.origin);
					}
					if (
						("allAssetRequest" === f.action
							? ((l = Object(v.c)(f, p)),
							  e.source.postMessage(JSON.stringify(l), e.origin))
							: "resizeNativeHeight" === f.action &&
							  ((p.height = f.height), (p.width = f.width), E(p)),
						"click" === Object(v.b)(f, p))
					)
						return;
					h.a.addWinningBid(p), b.a.emit(A, p);
				}
			}
		}
		function E(e) {
			var a = e.adId,
				c = e.adUnitCode,
				u = e.width,
				s = e.height;
			["div", "iframe"].forEach(function (e) {
				var t,
					n,
					r,
					i,
					o =
						((t = e + ':not([style*="display: none"])'),
						(n = (function (e, t) {
							return window.googletag
								? (function (n) {
										return m()(
											window.googletag.pubads().getSlots(),
											function (t) {
												return m()(t.getTargetingKeys(), function (e) {
													return d()(t.getTargeting(e), n);
												});
											}
										).getSlotElementId();
								  })(e)
								: window.apntag
								? (function (e) {
										var t = window.apntag.getTag(e);
										return t && t.targetId;
								  })(t)
								: t;
						})(a, c)),
						(r = document.getElementById(n)) && r.querySelector(t));
				o
					? (((i = o.style).width = u + "px"), (i.height = s + "px"))
					: Object(y.logWarn)(
							"Unable to locate matching page element for adUnitCode ".concat(
								c,
								".  Can't resize it to ad's dimensions.  Please review setup."
							)
					  );
			});
		}
	},
	239: function (e, t, n) {
		"use strict";
		t.a = function (e) {
			var t;
			try {
				(e = e || window.sessionStorage), (t = JSON.parse(e.getItem(u)));
			} catch (e) {}
			t && p(t, !0);
		};
		var r,
			i,
			o = n(3),
			a = n(0),
			c = n(35),
			u = "pbjs:debugging";
		function s(e) {
			Object(a.logMessage)("DEBUG: " + e);
		}
		function d(e) {
			Object(a.logWarn)("DEBUG: " + e);
		}
		function f(e) {
			(r = function (e, t, n) {
				if (b(this.bidders, n.bidderCode))
					return void d(
						"bidder '".concat(
							n.bidderCode,
							"' excluded from auction by bidder overrides"
						)
					);
				Array.isArray(this.bids) &&
					this.bids.forEach(function (e) {
						g(e, n.bidderCode, t) || v(e, n, "bidder");
					});
				e(t, n);
			}.bind(e)),
				c.c.before(r, 5),
				(i = function (e, t) {
					var r = this,
						n = t.filter(function (e) {
							return (
								!b(r.bidders, e.bidderCode) ||
								(d(
									"bidRequest '".concat(
										e.bidderCode,
										"' excluded from auction by bidder overrides"
									)
								),
								!1)
							);
						});
					Array.isArray(r.bidRequests) &&
						n.forEach(function (n) {
							r.bidRequests.forEach(function (t) {
								n.bids.forEach(function (e) {
									g(t, n.bidderCode, e.adUnitCode) || v(t, e, "bidRequest");
								});
							});
						});
					e(n);
				}.bind(e)),
				c.e.before(i, 5);
		}
		function l() {
			c.c.getHooks({ hook: r }).remove(), c.e.getHooks({ hook: i }).remove();
		}
		function p(e, t) {
			var n = 1 < arguments.length && void 0 !== t && t;
			o.b.setConfig({ debug: !0 }),
				l(),
				f(e),
				s("bidder overrides enabled".concat(n ? " from session" : ""));
		}
		function g(e, t, n) {
			return (
				(e.bidder && e.bidder !== t) || !(!e.adUnitCode || e.adUnitCode === n)
			);
		}
		function b(e, t) {
			return Array.isArray(e) && -1 === e.indexOf(t);
		}
		function v(n, e, r) {
			return Object.keys(n)
				.filter(function (e) {
					return -1 === ["adUnitCode", "bidder"].indexOf(e);
				})
				.reduce(function (e, t) {
					return (
						s(
							"bidder overrides changed '"
								.concat(e.adUnitCode, "/")
								.concat(e.bidderCode, "' ")
								.concat(r, ".")
								.concat(t, " from '")
								.concat(e[t], ".js' to '")
								.concat(n[t], "'")
						),
						(e[t] = n[t]),
						e
					);
				}, e);
		}
		function y(e) {
			if (e.enabled) {
				try {
					window.sessionStorage.setItem(u, JSON.stringify(e));
				} catch (e) {}
				p(e);
			} else {
				l(), s("bidder overrides disabled");
				try {
					window.sessionStorage.removeItem(u);
				} catch (e) {}
			}
		}
		o.b.getConfig("debugging", function (e) {
			return y(e.debugging);
		});
	},
	24: function (e, t, n) {
		var o = n(21);
		e.exports = function (r, i, e) {
			if ((o(r), void 0 === i)) return r;
			switch (e) {
				case 0:
					return function () {
						return r.call(i);
					};
				case 1:
					return function (e) {
						return r.call(i, e);
					};
				case 2:
					return function (e, t) {
						return r.call(i, e, t);
					};
				case 3:
					return function (e, t, n) {
						return r.call(i, e, t, n);
					};
			}
			return function () {
				return r.apply(i, arguments);
			};
		};
	},
	25: function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return c;
		}),
			n.d(t, "a", function () {
				return u;
			}),
			(t.d = function (e, t) {
				var n = Object(o.getBidRequest)(e.requestId, t),
					r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
					i = r && Object(o.deepAccess)(r, "context");
				return s(e, n, r, i);
			}),
			n.d(t, "c", function () {
				return s;
			});
		n(8);
		var o = n(0),
			i = n(3),
			r = n(13),
			a = (n.n(r), n(11)),
			c = "outstream",
			u = "instream";
		var s = Object(a.b)(
			"sync",
			function (e, t, n, r) {
				return !t || (n && r !== c)
					? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl
						? !(!e.vastUrl && !e.vastXml)
						: (Object(o.logError)(
								'\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
						  ),
						  !1)
					: r !== c || !!(e.renderer || t.renderer || n.renderer);
			},
			"checkVideoBidSetup"
		);
	},
	26: function (n, e, t) {
		(function (e) {
			function t(e) {
				return e && e.Math == Math && e;
			}
			n.exports =
				t("object" == typeof globalThis && globalThis) ||
				t("object" == typeof window && window) ||
				t("object" == typeof self && self) ||
				t("object" == typeof e && e) ||
				Function("return this")();
		}.call(e, t(36)));
	},
	27: function (e, t) {
		e.exports = function (e) {
			return "object" == typeof e ? null !== e : "function" == typeof e;
		};
	},
	28: function (e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function (e, t) {
			return n.call(e, t);
		};
	},
	29: function (e, t, n) {
		function r(e) {
			return "function" == typeof e ? e : void 0;
		}
		var i = n(43),
			o = n(26);
		e.exports = function (e, t) {
			return arguments.length < 2
				? r(i[e]) || r(o[e])
				: (i[e] && i[e][t]) || (o[e] && o[e][t]);
		};
	},
	3: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return S;
		}),
			n.d(t, "b", function () {
				return _;
			});
		var r = n(45),
			i = n(10),
			a = n.n(i),
			o = n(13),
			c = n.n(o),
			u = n(80),
			s = n.n(u),
			d = n(0);
		function f(e, t) {
			if (null == e) return {};
			var n,
				r = (function (e, t) {
					if (null == e) return {};
					var n,
						r,
						i = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]), 0 <= t.indexOf(n) || (i[n] = e[n]);
					return i;
				})(e, t);
			if (Object.getOwnPropertySymbols)
				for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++)
					(n = i[o]),
						0 <= t.indexOf(n) ||
							(Object.prototype.propertyIsEnumerable.call(e, n) &&
								(r[n] = e[n]));
			return r;
		}
		function l(e, t, n) {
			return (
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
		function p(e) {
			return (p =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  })(e);
		}
		function g() {
			return (g =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		var b = n(92),
			v = n(0),
			y = n(5),
			h = "TRUE" === v.getParameterByName(y.DEBUG_MODE).toUpperCase(),
			m = window.location.origin,
			S = "random",
			A = {};
		(A[S] = !0), (A.fixed = !0);
		var E = S,
			O = {
				LOW: "low",
				MEDIUM: "medium",
				HIGH: "high",
				AUTO: "auto",
				DENSE: "dense",
				CUSTOM: "custom",
			};
		var T,
			I,
			j,
			C,
			w,
			_ =
				((C = []),
				(w = null),
				B(),
				{
					getCurrentBidder: function () {
						return w;
					},
					resetBidder: N,
					getConfig: function () {
						if (
							arguments.length <= 1 &&
							"function" !=
								typeof (arguments.length <= 0 ? void 0 : arguments[0])
						) {
							var e = arguments.length <= 0 ? void 0 : arguments[0];
							return e ? v.deepAccess(x(), e) : x();
						}
						return function (e, t) {
							var n = t;
							if (
								("string" != typeof e && ((n = e), (e = "*")),
								"function" == typeof n)
							) {
								var r = { topic: e, callback: n };
								return (
									C.push(r),
									function () {
										C.splice(C.indexOf(r), 1);
									}
								);
							}
							v.logError("listener must be a function");
						}.apply(void 0, arguments);
					},
					setConfig: function (r) {
						var e, i;
						v.isPlainObject(r)
							? ((e = Object.keys(r)),
							  (i = {}),
							  e.forEach(function (e) {
									var t = "fpd" === e ? "ortb2" : e,
										n = "fpd" === e ? U(r[e]) : r[e];
									v.isPlainObject(T[t]) &&
										v.isPlainObject(n) &&
										(n = g({}, T[t], n)),
										(i[t] = I[t] = n);
							  }),
							  k(i))
							: v.logError("setConfig options must be an object");
					},
					setDefaults: function (e) {
						v.isPlainObject(T)
							? (g(T, e), g(I, e))
							: v.logError("defaults must be an object");
					},
					resetConfig: B,
					runWithBidder: D,
					callbackWithBidder: function (o) {
						return function (i) {
							return function () {
								if ("function" == typeof i) {
									for (
										var e, t = arguments.length, n = new Array(t), r = 0;
										r < t;
										r++
									)
										n[r] = arguments[r];
									return D(o, (e = v.bind).call.apply(e, [i, this].concat(n)));
								}
								v.logWarn(
									"config.callbackWithBidder callback is not a function"
								);
							};
						};
					},
					setBidderConfig: function (i) {
						try {
							!(function (e) {
								if (!v.isPlainObject(e))
									throw "setBidderConfig bidder options must be an object";
								if (!Array.isArray(e.bidders) || !e.bidders.length)
									throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
								if (!v.isPlainObject(e.config))
									throw "setBidderConfig bidder options must contain a config object";
							})(i),
								i.bidders.forEach(function (r) {
									j[r] || (j[r] = {}),
										Object.keys(i.config).forEach(function (e) {
											var t = "fpd" === e ? "ortb2" : e,
												n = "fpd" === e ? U(i.config[e]) : i.config[e];
											v.isPlainObject(n)
												? (j[r][t] = g({}, j[r][t] || {}, n))
												: (j[r][t] = n);
										});
								});
						} catch (e) {
							v.logError(e);
						}
					},
					getBidderConfig: function () {
						return j;
					},
					convertAdUnitFpd: function (e) {
						var t = [];
						return (
							e.forEach(function (e) {
								e.fpd
									? (e.ortb2Imp
											? v.mergeDeep(e.ortb2Imp, R(e.fpd))
											: (e.ortb2Imp = R(e.fpd)),
									  t.push((e.fpd, f(e, ["fpd"]))))
									: t.push(e);
							}),
							t
						);
					},
					getLegacyFpd: function (r) {
						if ("object" === p(r)) {
							var t = {};
							return (
								Object.keys(r).forEach(function (n) {
									var e = "site" === n ? "context" : n;
									t[e] =
										"context" === e || "user" === e
											? Object.keys(r[n])
													.filter(function (e) {
														return "data" !== e;
													})
													.reduce(function (e, t) {
														return (
															"ext" === t
																? v.mergeDeep(e, r[n][t])
																: v.mergeDeep(e, l({}, t, r[n][t])),
															e
														);
													}, {})
											: r[n];
								}),
								t
							);
						}
					},
					getLegacyImpFpd: function (t) {
						if ("object" === p(t)) {
							var n = {};
							return (
								v.deepAccess(t, "ext.data") &&
									Object.keys(t.ext.data).forEach(function (e) {
										"pbadslot" === e
											? v.mergeDeep(n, { context: { pbAdSlot: t.ext.data[e] } })
											: "adserver" === e
											? v.mergeDeep(n, { context: { adServer: t.ext.data[e] } })
											: v.mergeDeep(n, {
													context: { data: l({}, e, t.ext.data[e]) },
											  });
									}),
								n
							);
						}
					},
				});
		function B() {
			T = {};
			var n = {
				_debug: h,
				get debug() {
					return this._debug;
				},
				set debug(e) {
					this._debug = e;
				},
				_bidderTimeout: 3e3,
				get bidderTimeout() {
					return this._bidderTimeout;
				},
				set bidderTimeout(e) {
					this._bidderTimeout = e;
				},
				_publisherDomain: m,
				get publisherDomain() {
					return this._publisherDomain;
				},
				set publisherDomain(e) {
					this._publisherDomain = e;
				},
				_priceGranularity: O.MEDIUM,
				set priceGranularity(e) {
					o(e) &&
						("string" == typeof e
							? (this._priceGranularity = i(e) ? e : O.MEDIUM)
							: v.isPlainObject(e) &&
							  ((this._customPriceBucket = e),
							  (this._priceGranularity = O.CUSTOM),
							  v.logMessage("Using custom price granularity")));
				},
				get priceGranularity() {
					return this._priceGranularity;
				},
				_customPriceBucket: {},
				get customPriceBucket() {
					return this._customPriceBucket;
				},
				_mediaTypePriceGranularity: {},
				get mediaTypePriceGranularity() {
					return this._mediaTypePriceGranularity;
				},
				set mediaTypePriceGranularity(n) {
					var r = this;
					this._mediaTypePriceGranularity = Object.keys(n).reduce(function (
						e,
						t
					) {
						return (
							o(n[t])
								? "string" == typeof n
									? (e[t] = i(n[t]) ? n[t] : r._priceGranularity)
									: v.isPlainObject(n) &&
									  ((e[t] = n[t]),
									  v.logMessage(
											"Using custom price granularity for ".concat(t)
									  ))
								: v.logWarn(
										"Invalid price granularity for media type: ".concat(t)
								  ),
							e
						);
					},
					{});
				},
				_sendAllBids: !0,
				get enableSendAllBids() {
					return this._sendAllBids;
				},
				set enableSendAllBids(e) {
					this._sendAllBids = e;
				},
				_useBidCache: !1,
				get useBidCache() {
					return this._useBidCache;
				},
				set useBidCache(e) {
					this._useBidCache = e;
				},
				_deviceAccess: !0,
				get deviceAccess() {
					return this._deviceAccess;
				},
				set deviceAccess(e) {
					this._deviceAccess = e;
				},
				_bidderSequence: E,
				get bidderSequence() {
					return this._bidderSequence;
				},
				set bidderSequence(e) {
					A[e]
						? (this._bidderSequence = e)
						: v.logWarn(
								"Invalid order: ".concat(e, ". Bidder Sequence was not set.")
						  );
				},
				_timeoutBuffer: 400,
				get timeoutBuffer() {
					return this._timeoutBuffer;
				},
				set timeoutBuffer(e) {
					this._timeoutBuffer = e;
				},
				_disableAjaxTimeout: !1,
				get disableAjaxTimeout() {
					return this._disableAjaxTimeout;
				},
				set disableAjaxTimeout(e) {
					this._disableAjaxTimeout = e;
				},
				_maxNestedIframes: 10,
				get maxNestedIframes() {
					return this._maxNestedIframes;
				},
				set maxNestedIframes(e) {
					this._maxNestedIframes = e;
				},
				_auctionOptions: {},
				get auctionOptions() {
					return this._auctionOptions;
				},
				set auctionOptions(e) {
					!(function (e) {
						if (!v.isPlainObject(e))
							return v.logWarn("Auction Options must be an object"), !1;
						for (var t = 0, n = Object.keys(e); t < n.length; t++) {
							var r = n[t];
							if ("secondaryBidders" !== r)
								return (
									v.logWarn(
										"Auction Options given an incorrect param: ".concat(r)
									),
									!1
								);
							if ("secondaryBidders" === r) {
								if (!v.isArray(e[r]))
									return (
										v.logWarn(
											"Auction Options ".concat(r, " must be of type Array")
										),
										!1
									);
								if (!e[r].every(v.isStr))
									return (
										v.logWarn(
											"Auction Options ".concat(r, " must be only string")
										),
										!1
									);
							}
						}
						return !0;
					})(e) || (this._auctionOptions = e);
				},
			};
			function i(t) {
				return a()(Object.keys(O), function (e) {
					return t === O[e];
				});
			}
			function o(e) {
				if (e) {
					if ("string" == typeof e)
						i(e) ||
							v.logWarn(
								"Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."
							);
					else if (v.isPlainObject(e) && !Object(r.b)(e))
						return void v.logError(
							"Invalid custom price value passed to `setPriceGranularity()`"
						);
					return 1;
				}
				v.logError("Prebid Error: no value passed to `setPriceGranularity()`");
			}
			I &&
				k(
					Object.keys(I).reduce(function (e, t) {
						return I[t] !== n[t] && (e[t] = n[t] || {}), e;
					}, {})
				),
				(I = n),
				(j = {});
		}
		function x() {
			if (w && j && v.isPlainObject(j[w])) {
				var n = j[w],
					e = new s.a(Object.keys(I).concat(Object.keys(n)));
				return b(e).reduce(function (e, t) {
					return (
						void 0 === n[t]
							? (e[t] = I[t])
							: void 0 !== I[t] && v.isPlainObject(n[t])
							? (e[t] = Object(d.mergeDeep)({}, I[t], n[t]))
							: (e[t] = n[t]),
						e
					);
				}, {});
			}
			return g({}, I);
		}
		function U(r) {
			var t = {};
			return (
				Object.keys(r).forEach(function (n) {
					var e = "context" === n ? "site" : n;
					t[e] =
						"site" === e || "user" === e
							? Object.keys(r[n]).reduce(function (e, t) {
									return (
										"data" === t
											? v.mergeDeep(e, { ext: { data: r[n][t] } })
											: v.mergeDeep(e, l({}, t, r[n][t])),
										e
									);
							  }, {})
							: r[n];
				}),
				t
			);
		}
		function R(r) {
			var i = {};
			return (
				Object.keys(r)
					.filter(function (e) {
						return "context" === e;
					})
					.forEach(function (n) {
						Object.keys(r[n]).forEach(function (t) {
							"data" === t
								? v.mergeDeep(i, { ext: { data: r[n][t] } })
								: "object" !== p(r[n][t]) || Array.isArray(r[n][t])
								? v.mergeDeep(i, {
										ext: { data: l({}, t.toLowerCase(), r[n][t]) },
								  })
								: Object.keys(r[n][t]).forEach(function (e) {
										v.mergeDeep(i, {
											ext: {
												data: l(
													{},
													t.toLowerCase(),
													l({}, e.toLowerCase(), r[n][t][e])
												),
											},
										});
								  });
						});
					}),
				i
			);
		}
		function k(t) {
			var n = Object.keys(t);
			C.filter(function (e) {
				return c()(n, e.topic);
			}).forEach(function (e) {
				e.callback(l({}, e.topic, t[e.topic]));
			}),
				C.filter(function (e) {
					return "*" === e.topic;
				}).forEach(function (e) {
					return e.callback(t);
				});
		}
		function D(e, t) {
			w = e;
			try {
				return t();
			} finally {
				N();
			}
		}
		function N() {
			w = null;
		}
	},
	30: function (e, t, n) {
		var r = n(31);
		e.exports = !r(function () {
			return (
				7 !=
				Object.defineProperty({}, 1, {
					get: function () {
						return 7;
					},
				})[1]
			);
		});
	},
	31: function (e, t) {
		e.exports = function (e) {
			try {
				return !!e();
			} catch (e) {
				return !0;
			}
		};
	},
	32: function (e, t, n) {
		var r = n(30),
			i = n(33),
			o = n(46);
		e.exports = r
			? function (e, t, n) {
					return i.f(e, t, o(1, n));
			  }
			: function (e, t, n) {
					return (e[t] = n), e;
			  };
	},
	33: function (e, t, n) {
		var r = n(30),
			i = n(74),
			o = n(15),
			a = n(55),
			c = Object.defineProperty;
		t.f = r
			? c
			: function (e, t, n) {
					if ((o(e), (t = a(t, !0)), o(n), i))
						try {
							return c(e, t, n);
						} catch (e) {}
					if ("get" in n || "set" in n)
						throw TypeError("Accessors not supported");
					return "value" in n && (e[t] = n.value), e;
			  };
	},
	34: function (e, t, n) {
		"use strict";
		t.a = function (e, t) {
			return new r(e, t);
		};
		var i = n(0);
		function r(e, t) {
			var n = (t && t.src) || "client",
				r = e || 0;
			(this.bidderCode = (t && t.bidder) || ""),
				(this.width = 0),
				(this.height = 0),
				(this.statusMessage = (function () {
					switch (r) {
						case 0:
							return "Pending";
						case 1:
							return "Bid available";
						case 2:
							return "Bid returned empty or error response";
						case 3:
							return "Bid timed out";
					}
				})()),
				(this.adId = i.getUniqueIdentifierStr()),
				(this.requestId = t && t.bidId),
				(this.mediaType = "banner"),
				(this.source = n),
				(this.getStatusCode = function () {
					return r;
				}),
				(this.getSize = function () {
					return this.width + "x" + this.height;
				});
		}
	},
	35: function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return L;
		}),
			n.d(t, "a", function () {
				return F;
			}),
			(t.k = function (e) {
				var t,
					i,
					b,
					v,
					o = e.adUnits,
					n = e.adUnitCodes,
					r = e.callback,
					a = e.cbTimeout,
					c = e.labels,
					u = e.auctionId,
					y = o,
					s = c,
					d = n,
					h = [],
					f = [],
					l = [],
					p = u || P.generateUUID(),
					g = r,
					m = a,
					S = [],
					A = new Set();
				function E() {
					return {
						auctionId: p,
						timestamp: t,
						auctionEnd: i,
						auctionStatus: b,
						adUnits: y,
						adUnitCodes: d,
						labels: s,
						bidderRequests: h,
						noBids: l,
						bidsReceived: f,
						winningBids: S,
						timeout: m,
					};
				}
				function O(n, e) {
					var r, t;
					e && clearTimeout(v),
						void 0 === i &&
							((r = []),
							n &&
								(P.logMessage("Auction ".concat(p, " timedOut")),
								(t = A),
								(r = h
									.map(function (e) {
										return (e.bids || []).filter(function (e) {
											return !t.has(e.bidder);
										});
									})
									.reduce(C.flatten, [])
									.map(function (e) {
										return {
											bidId: e.bidId,
											bidder: e.bidder,
											adUnitCode: e.adUnitCode,
											auctionId: e.auctionId,
										};
									})).length && q.emit(G.EVENTS.BID_TIMEOUT, r)),
							(b = F),
							(i = Date.now()),
							q.emit(G.EVENTS.AUCTION_END, E()),
							Q(y, function () {
								try {
									var e;
									null != g &&
										((e = f
											.filter(P.bind.call(C.adUnitsFilter, this, d))
											.reduce(ee, {})),
										g.apply(pbjs, [e, n, p]),
										(g = null));
								} catch (e) {
									P.logError("Error executing bidsBackHandler", null, e);
								} finally {
									r.length && M.callTimedOutBidders(o, r, m);
									var t = B.b.getConfig("userSync") || {};
									t.enableOverride || N(t.syncDelay);
								}
							}));
				}
				function T() {
					B.b.resetBidder(),
						P.logInfo("Bids Received for Auction with id: ".concat(p), f),
						(b = F),
						O(!1, !0);
				}
				function I(e) {
					A.add(e);
				}
				function j(n) {
					var f = this;
					n.forEach(function (e) {
						var t;
						(t = e), (h = h.concat(t));
					});
					var l = {},
						e = {
							bidRequests: n,
							run: function () {
								var e, t;
								(e = O.bind(null, !0)),
									(t = setTimeout(e, m)),
									(v = t),
									(b = L),
									q.emit(G.EVENTS.AUCTION_INIT, E());
								var r,
									i,
									o,
									a,
									c,
									u,
									s =
										((r = T),
										(i = f),
										(o = 0),
										(a = !1),
										(c = new Set()),
										(u = {}),
										{
											addBidResponse: function (e, t) {
												(u[t.requestId] = !0), o++;
												var n = (function (e) {
													var t = e.adUnitCode,
														n = e.bid,
														r = e.bidderRequest,
														i = e.auctionId,
														o = r.start,
														a = D({}, n, {
															auctionId: i,
															responseTimestamp: Object(C.timestamp)(),
															requestTimestamp: o,
															cpm: parseFloat(n.cpm) || 0,
															bidder: n.bidderCode,
															adUnitCode: t,
														});
													(a.timeToRespond =
														a.responseTimestamp - a.requestTimestamp),
														q.emit(G.EVENTS.BID_ADJUSTMENT, a);
													var c =
															r.bids &&
															x()(r.bids, function (e) {
																return (
																	e.adUnitCode == t && e.bidId == a.requestId
																);
															}),
														u = c && c.renderer,
														s = a.mediaType,
														d = c && c.mediaTypes && c.mediaTypes[s],
														f = d && d.renderer,
														l = null;
													f &&
													f.url &&
													f.render &&
													(!0 !== f.backupOnly || !n.renderer)
														? (l = f)
														: u &&
														  u.url &&
														  u.render &&
														  (!0 !== u.backupOnly || !n.renderer) &&
														  (l = u),
														l &&
															((a.renderer = _.a.install({ url: l.url })),
															a.renderer.setRender(l.render));
													var p = Z(
															n.mediaType,
															c,
															B.b.getConfig("mediaTypePriceGranularity")
														),
														g = Object(w.a)(
															a.cpm,
															"object" === k(p)
																? p
																: B.b.getConfig("customPriceBucket"),
															B.b.getConfig("currency.granularityMultiplier")
														);
													return (
														(a.pbLg = g.low),
														(a.pbMg = g.med),
														(a.pbHg = g.high),
														(a.pbAg = g.auto),
														(a.pbDg = g.dense),
														(a.pbCg = g.custom),
														a
													);
												})({
													adUnitCode: e,
													bid: t,
													bidderRequest: this,
													auctionId: i.getAuctionId(),
												});
												"video" === n.mediaType
													? (function (e, t, n, r) {
															var i = !0,
																o = Object(C.getBidRequest)(
																	t.originalRequestId || t.requestId,
																	[n]
																),
																a =
																	o &&
																	Object(C.deepAccess)(o, "mediaTypes.video"),
																c = a && Object(C.deepAccess)(a, "context");
															B.b.getConfig("cache.url") &&
																c !== R.b &&
																(!t.videoCacheKey ||
																B.b.getConfig("cache.ignoreBidderCacheKey")
																	? ((i = !1), X(e, t, r, o))
																	: t.vastUrl ||
																	  (P.logError(
																			"videoCacheKey specified but not required vastUrl for video bid"
																	  ),
																	  (i = !1))),
																i && ($(e, t), r());
													  })(i, n, this, d)
													: ($(i, n), d());
											},
											adapterDone: function () {
												var t,
													e = i.getBidRequests(),
													n = B.b.getConfig("auctionOptions");
												c.add(this),
													!n ||
														P.isEmpty(n) ||
														((t = n.secondaryBidders) &&
															!e.every(function (e) {
																return U()(t, e.bidderCode);
															}) &&
															(e = e.filter(function (e) {
																return !U()(t, e.bidderCode);
															}))),
													(a = e.every(function (e) {
														return c.has(e);
													})),
													this.bids.forEach(function (e) {
														u[e.bidId] ||
															(i.addNoBid(e), q.emit(G.EVENTS.NO_BID, e));
													}),
													a && 0 === o && r();
											},
										});
								function d() {
									o--, a && 0 === o && r();
								}
								M.callBids(
									y,
									n,
									function () {
										for (
											var e = arguments.length, t = new Array(e), n = 0;
											n < e;
											n++
										)
											t[n] = arguments[n];
										J.apply(
											{ dispatch: s.addBidResponse, bidderRequest: this },
											t
										);
									},
									s.adapterDone,
									{
										request: function (e, t) {
											g(V, t),
												g(l, e),
												H[e] || (H[e] = { SRA: !0, origin: t }),
												1 < l[e] && (H[e].SRA = !1);
										},
										done: function (e) {
											V[e]--, K[0] && p(K[0]) && K.shift();
										},
									},
									m,
									I
								);
							},
						};
					function p(e) {
						var r = !0,
							i = B.b.getConfig("maxRequestsPerOrigin") || z;
						return (
							e.bidRequests.some(function (e) {
								var t = 1,
									n =
										void 0 !== e.src && e.src === G.S2S.SRC
											? "s2s"
											: e.bidderCode;
								return (
									H[n] &&
										(!1 === H[n].SRA && (t = Math.min(e.bids.length, i)),
										V[H[n].origin] + t > i && (r = !1)),
									!r
								);
							}),
							r && e.run(),
							r
						);
					}
					function g(e, t) {
						void 0 === e[t] ? (e[t] = 1) : e[t]++;
					}
					p(e) ||
						(P.logWarn("queueing auction due to limited endpoint capacity"),
						K.push(e));
				}
				return {
					addBidReceived: function (e) {
						f = f.concat(e);
					},
					addNoBid: function (e) {
						l = l.concat(e);
					},
					executeCallback: O,
					callBids: function () {
						(b = W), (t = Date.now());
						var e = M.makeBidRequests(y, t, p, m, s);
						P.logInfo("Bids Requested for Auction with id: ".concat(p), e),
							e.length < 1
								? (P.logWarn("No valid bid requests returned for auction"), T())
								: Y.call({ dispatch: j, context: this }, e);
					},
					addWinningBid: function (e) {
						(S = S.concat(e)), M.callBidWonBidder(e.bidder, e, o);
					},
					setBidTargeting: function (e) {
						M.callSetTargetingBidder(e.bidder, e);
					},
					getWinningBids: function () {
						return S;
					},
					getTimeout: function () {
						return m;
					},
					getAuctionId: function () {
						return p;
					},
					getAuctionStatus: function () {
						return b;
					},
					getAdUnits: function () {
						return y;
					},
					getAdUnitCodes: function () {
						return d;
					},
					getBidRequests: function () {
						return h;
					},
					getBidsReceived: function () {
						return f;
					},
					getNoBids: function () {
						return l;
					},
				};
			}),
			n.d(t, "c", function () {
				return J;
			}),
			n.d(t, "e", function () {
				return Y;
			}),
			(t.g = d),
			(t.d = $),
			n.d(t, "f", function () {
				return X;
			}),
			n.d(t, "i", function () {
				return f;
			}),
			n.d(t, "h", function () {
				return l;
			}),
			(t.j = g);
		var C = n(0),
			w = n(45),
			a = n(38),
			o = n(95),
			_ = n(12),
			B = n(3),
			r = n(44),
			i = n(11),
			c = n(10),
			x = n.n(c),
			u = n(13),
			U = n.n(u),
			R = n(25),
			s = n(2);
		function k(e) {
			return (k =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  })(e);
		}
		function D() {
			return (D =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		var N = r.a.syncUsers,
			P = n(0),
			M = n(8).default,
			q = n(9),
			G = n(5),
			W = "started",
			L = "inProgress",
			F = "completed";
		q.on(G.EVENTS.BID_ADJUSTMENT, function (e) {
			!(function (e) {
				var t,
					n = e.bidderCode,
					r = e.cpm;
				if (
					pbjs.bidderSettings &&
					(n &&
					pbjs.bidderSettings[n] &&
					"function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment
						? (t = pbjs.bidderSettings[n].bidCpmAdjustment)
						: pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] &&
						  "function" ==
								typeof pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD]
									.bidCpmAdjustment &&
						  (t =
								pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD]
									.bidCpmAdjustment),
					t)
				)
					try {
						r = t(e.cpm, D({}, e));
					} catch (e) {
						P.logError("Error during bid adjustment", "bidmanager.js", e);
					}
				0 <= r && (e.cpm = r);
			})(e);
		});
		var z = 4,
			V = {},
			H = {},
			K = [];
		var J = Object(i.b)(
				"async",
				function (e, t) {
					this.dispatch.call(this.bidderRequest, e, t);
				},
				"addBidResponse"
			),
			Y = Object(i.b)(
				"sync",
				function (e) {
					this.dispatch.call(this.context, e);
				},
				"addBidderRequests"
			),
			Q = Object(i.b)(
				"async",
				function (e, t) {
					t && t();
				},
				"bidsBackCallback"
			);
		function d(e, t) {
			t.timeToRespond > e.getTimeout() + B.b.getConfig("timeoutBuffer") &&
				e.executeCallback(!0);
		}
		function $(e, t) {
			var n = e.getBidRequests(),
				r = x()(n, function (e) {
					return e.bidderCode === t.bidderCode;
				});
			!(function (t, e) {
				var n;
				{
					var r;
					t.bidderCode &&
						(0 < t.cpm || t.dealId) &&
						((r = x()(e.bids, function (e) {
							return e.adUnitCode === t.adUnitCode;
						})),
						(n = (function (e, t, n) {
							if (!t) return {};
							var r = {},
								i = pbjs.bidderSettings;
							{
								var o;
								i &&
									((o = g(t.mediaType, e, n)),
									b(r, o, t),
									e &&
										i[e] &&
										i[e][G.JSON_MAPPING.ADSERVER_TARGETING] &&
										(b(r, i[e], t),
										(t.sendStandardTargeting = i[e].sendStandardTargeting)));
							}
							t.native && (r = D({}, r, Object(a.e)(t, n)));
							return r;
						})(t.bidderCode, t, r)));
				}
				t.adserverTargeting = D(t.adserverTargeting || {}, n);
			})(t, r),
				q.emit(G.EVENTS.BID_RESPONSE, t),
				e.addBidReceived(t),
				d(e, t);
		}
		var X = Object(i.b)(
			"async",
			function (n, r, i, e) {
				Object(o.b)(
					[r],
					function (e, t) {
						e
							? (P.logWarn(
									"Failed to save to the video cache: ".concat(
										e,
										". Video bid must be discarded."
									)
							  ),
							  d(n, r))
							: "" === t[0].uuid
							? (P.logWarn(
									"Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."
							  ),
							  d(n, r))
							: ((r.videoCacheKey = t[0].uuid),
							  r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)),
							  $(n, r),
							  i());
					},
					e
				);
			},
			"callPrebidCache"
		);
		function Z(e, t, n) {
			if (e && n) {
				if (e === s.d) {
					var r = Object(C.deepAccess)(
						t,
						"mediaTypes.".concat(s.d, ".context"),
						"instream"
					);
					if (n["".concat(s.d, "-").concat(r)])
						return n["".concat(s.d, "-").concat(r)];
				}
				return n[e];
			}
		}
		var f = function (e, t) {
				var n = Z(e, t, B.b.getConfig("mediaTypePriceGranularity"));
				return "string" == typeof e && n
					? "string" == typeof n
						? n
						: "custom"
					: B.b.getConfig("priceGranularity");
			},
			l = function (t) {
				return function (e) {
					return t === G.GRANULARITY_OPTIONS.AUTO
						? e.pbAg
						: t === G.GRANULARITY_OPTIONS.DENSE
						? e.pbDg
						: t === G.GRANULARITY_OPTIONS.LOW
						? e.pbLg
						: t === G.GRANULARITY_OPTIONS.MEDIUM
						? e.pbMg
						: t === G.GRANULARITY_OPTIONS.HIGH
						? e.pbHg
						: t === G.GRANULARITY_OPTIONS.CUSTOM
						? e.pbCg
						: void 0;
				};
			},
			p = function () {
				return function (e) {
					return e.meta &&
						e.meta.advertiserDomains &&
						0 < e.meta.advertiserDomains.length
						? e.meta.advertiserDomains[0]
						: "";
				};
			};
		function g(e, t, n) {
			function r(e, t) {
				return {
					key: e,
					val:
						"function" == typeof t
							? function (e) {
									return t(e);
							  }
							: function (e) {
									return Object(C.getValue)(e, t);
							  },
				};
			}
			var i,
				o,
				a = G.TARGETING_KEYS,
				c = f(e, n),
				u = pbjs.bidderSettings;
			return (
				u[G.JSON_MAPPING.BD_SETTING_STANDARD] ||
					(u[G.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
				u[G.JSON_MAPPING.BD_SETTING_STANDARD][
					G.JSON_MAPPING.ADSERVER_TARGETING
				] ||
					(u[G.JSON_MAPPING.BD_SETTING_STANDARD][
						G.JSON_MAPPING.ADSERVER_TARGETING
					] = [
						r(a.BIDDER, "bidderCode"),
						r(a.AD_ID, "adId"),
						r(a.PRICE_BUCKET, l(c)),
						r(a.SIZE, "size"),
						r(a.DEAL, "dealId"),
						r(a.SOURCE, "source"),
						r(a.FORMAT, "mediaType"),
						r(a.ADOMAIN, p()),
					]),
				"video" === e &&
					((i =
						u[G.JSON_MAPPING.BD_SETTING_STANDARD][
							G.JSON_MAPPING.ADSERVER_TARGETING
						]),
					[a.UUID, a.CACHE_ID].forEach(function (t) {
						void 0 ===
							x()(i, function (e) {
								return e.key === t;
							}) && i.push(r(t, "videoCacheKey"));
					}),
					!B.b.getConfig("cache.url") ||
						(t &&
							!1 === P.deepAccess(u, "".concat(t, ".sendStandardTargeting"))) ||
						((o = Object(C.parseUrl)(B.b.getConfig("cache.url"))),
						void 0 ===
							x()(i, function (e) {
								return e.key === a.CACHE_HOST;
							}) &&
							i.push(
								r(a.CACHE_HOST, function (e) {
									return P.deepAccess(
										e,
										"adserverTargeting.".concat(a.CACHE_HOST)
									)
										? e.adserverTargeting[a.CACHE_HOST]
										: o.hostname;
								})
							))),
				u[G.JSON_MAPPING.BD_SETTING_STANDARD]
			);
		}
		function b(r, i, o) {
			var e = i[G.JSON_MAPPING.ADSERVER_TARGETING];
			return (
				(o.size = o.getSize()),
				P._each(e, function (e) {
					var t = e.key,
						n = e.val;
					if (
						(r[t] && P.logWarn("The key: " + t + " is getting ovewritten"),
						P.isFn(n))
					)
						try {
							n = n(o);
						} catch (e) {
							P.logError("bidmanager", "ERROR", e);
						}
					((void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) &&
						t !== G.TARGETING_KEYS.DEAL) ||
					(!P.isEmptyStr(n) && null != n)
						? (r[t] = n)
						: P.logInfo(
								"suppressing empty key '" + t + "' from adserver targeting"
						  );
				}),
				r
			);
		}
		function ee(e, t) {
			return (
				e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }),
				e[t.adUnitCode].bids.push(t),
				e
			);
		}
	},
	36: function (e, t) {
		var n = (function () {
			return this;
		})();
		try {
			n = n || Function("return this")() || (0, eval)("this");
		} catch (e) {
			"object" == typeof window && (n = window);
		}
		e.exports = n;
	},
	37: function (e, t, n) {
		var r = n(16),
			i = n(91);
		e.exports = r
			? i
			: function (e) {
					return Set.prototype.values.call(e);
			  };
	},
	374: function (e, t, n) {
		n(375);
		var r = n(52);
		e.exports = r("String", "includes");
	},
	375: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(376),
			o = n(49);
		r(
			{ target: "String", proto: !0, forced: !n(378)("includes") },
			{
				includes: function (e, t) {
					return !!~String(o(this)).indexOf(
						i(e),
						1 < arguments.length ? t : void 0
					);
				},
			}
		);
	},
	376: function (e, t, n) {
		var r = n(377);
		e.exports = function (e) {
			if (r(e))
				throw TypeError("The method doesn't accept regular expressions");
			return e;
		};
	},
	377: function (e, t, n) {
		var r = n(27),
			i = n(48),
			o = n(22)("match");
		e.exports = function (e) {
			var t;
			return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
		};
	},
	378: function (e, t, n) {
		var r = n(22)("match");
		e.exports = function (t) {
			var n = /./;
			try {
				"/./"[t](n);
			} catch (e) {
				try {
					return (n[r] = !1), "/./"[t](n);
				} catch (e) {}
			}
			return !1;
		};
	},
	38: function (e, t, n) {
		"use strict";
		n.d(t, "f", function () {
			return o;
		}),
			n.d(t, "a", function () {
				return u;
			}),
			(t.h = function (e) {
				if (
					e &&
					e.type &&
					(function (e) {
						return (
							!(!e || !a()(Object.keys(s), e)) ||
							(Object(d.logError)(
								"".concat(e, " nativeParam is not supported")
							),
							!1)
						);
					})(e.type)
				)
					return s[e.type];
				return e;
			}),
			(t.g = function (t, e) {
				var n = Object(d.getBidRequest)(t.requestId, e);
				if (!n) return !1;
				if (!Object(d.deepAccess)(t, "native.clickUrl")) return !1;
				if (
					Object(d.deepAccess)(t, "native.image") &&
					(!Object(d.deepAccess)(t, "native.image.height") ||
						!Object(d.deepAccess)(t, "native.image.width"))
				)
					return !1;
				if (
					Object(d.deepAccess)(t, "native.icon") &&
					(!Object(d.deepAccess)(t, "native.icon.height") ||
						!Object(d.deepAccess)(t, "native.icon.width"))
				)
					return !1;
				var r = n.nativeParams;
				if (!r) return !0;
				var i = Object.keys(r).filter(function (e) {
						return r[e].required;
					}),
					o = Object.keys(t.native).filter(function (e) {
						return t.native[e];
					});
				return i.every(function (e) {
					return a()(o, e);
				});
			}),
			(t.b = function (e, t) {
				var n;
				"click" === e.action
					? (n = t.native && t.native.clickTrackers)
					: ((n = t.native && t.native.impressionTrackers),
					  t.native &&
							t.native.javascriptTrackers &&
							Object(d.insertHtmlIntoIframe)(t.native.javascriptTrackers));
				return (n || []).forEach(d.triggerPixel), e.action;
			}),
			(t.e = function (o, a) {
				var c = {};
				Object(d.deepAccess)(a, "nativeParams.rendererUrl")
					? (o.native.rendererUrl = p(a.nativeParams.rendererUrl))
					: Object(d.deepAccess)(a, "nativeParams.adTemplate") &&
					  (o.native.adTemplate = p(a.nativeParams.adTemplate));
				var u =
						!1 !== Object(d.deepAccess)(a, "nativeParams.sendTargetingKeys"),
					s = (function (e) {
						var t = {};
						Object(d.deepAccess)(e, "nativeParams.ext") &&
							Object.keys(e.nativeParams.ext).forEach(function (e) {
								t[e] = "hb_native_".concat(e);
							});
						return f(f({}, l.NATIVE_KEYS), t);
					})(a),
					e = f(f({}, o.native), o.native.ext);
				return (
					delete e.ext,
					Object.keys(e).forEach(function (e) {
						var t,
							n,
							r = s[e],
							i =
								p(o.native[e]) ||
								p(Object(d.deepAccess)(o, "native.ext.".concat(e)));
						"adTemplate" !== e &&
							r &&
							i &&
							("boolean" !=
								typeof (t = Object(d.deepAccess)(
									a,
									"nativeParams.".concat(e, ".sendId")
								)) &&
								(t = Object(d.deepAccess)(
									a,
									"nativeParams.ext.".concat(e, ".sendId")
								)),
							t && (i = "".concat(r, ":").concat(o.adId)),
							"boolean" !=
								typeof (n = Object(d.deepAccess)(
									a,
									"nativeParams.".concat(e, ".sendTargetingKeys")
								)) &&
								(n = Object(d.deepAccess)(
									a,
									"nativeParams.ext.".concat(e, ".sendTargetingKeys")
								)),
							("boolean" == typeof n ? n : u) && (c[r] = i));
					}),
					c
				);
			}),
			(t.d = function (e, r) {
				var i = { message: "assetResponse", adId: e.adId, assets: [] };
				r.native.hasOwnProperty("adTemplate") &&
					(i.adTemplate = p(r.native.adTemplate));
				r.native.hasOwnProperty("rendererUrl") &&
					(i.rendererUrl = p(r.native.rendererUrl));
				return (
					e.assets.forEach(function (e) {
						var t = Object(d.getKeyByValue)(l.NATIVE_KEYS, e),
							n = p(r.native[t]);
						i.assets.push({ key: t, value: n });
					}),
					i
				);
			}),
			(t.c = function (e, r) {
				var i = { message: "assetResponse", adId: e.adId, assets: [] };
				return (
					Object.keys(r.native).forEach(function (n, e) {
						var t;
						"adTemplate" === n && r.native[n]
							? (i.adTemplate = p(r.native[n]))
							: "rendererUrl" === n && r.native[n]
							? (i.rendererUrl = p(r.native[n]))
							: "ext" === n
							? Object.keys(r.native[n]).forEach(function (e) {
									var t;
									r.native[n][e] &&
										((t = p(r.native[n][e])),
										i.assets.push({ key: e, value: t }));
							  })
							: r.native[n] &&
							  l.NATIVE_KEYS.hasOwnProperty(n) &&
							  ((t = p(r.native[n])), i.assets.push({ key: n, value: t }));
					}),
					i
				);
			});
		var d = n(0),
			r = n(13),
			a = n.n(r);
		function i(e) {
			return (i =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  })(e);
		}
		function c(t, e) {
			var n,
				r = Object.keys(t);
			return (
				Object.getOwnPropertySymbols &&
					((n = Object.getOwnPropertySymbols(t)),
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
					r.push.apply(r, n)),
				r
			);
		}
		function f(i) {
			for (var e = 1; e < arguments.length; e++) {
				var o = null != arguments[e] ? arguments[e] : {};
				e % 2
					? c(Object(o), !0).forEach(function (e) {
							var t, n, r;
							(t = i),
								(r = o[(n = e)]),
								n in t
									? Object.defineProperty(t, n, {
											value: r,
											enumerable: !0,
											configurable: !0,
											writable: !0,
									  })
									: (t[n] = r);
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
					: c(Object(o)).forEach(function (e) {
							Object.defineProperty(
								i,
								e,
								Object.getOwnPropertyDescriptor(o, e)
							);
					  });
			}
			return i;
		}
		var l = n(5),
			o = [],
			u = Object.keys(l.NATIVE_KEYS).map(function (e) {
				return l.NATIVE_KEYS[e];
			}),
			s = {
				image: {
					image: { required: !0 },
					title: { required: !0 },
					sponsoredBy: { required: !0 },
					clickUrl: { required: !0 },
					body: { required: !1 },
					icon: { required: !1 },
				},
			};
		function p(e) {
			return "object" === i(e) && e.url ? e.url : e;
		}
	},
	39: function (e, t, n) {
		"use strict";
		t.a = function (r, e, t) {
			if (!e || !r)
				return void o.logError(
					"cannot load external script without url and moduleCode"
				);
			if (!i()(c, e))
				return void o.logError(
					"".concat(e, " not whitelisted for loading external JavaScript")
				);
			if (a[r])
				return (
					t &&
						"function" == typeof t &&
						(a[r].loaded ? t() : a[r].callbacks.push(t)),
					a[r].tag
				);
			(a[r] = { loaded: !1, tag: null, callbacks: [] }),
				t && "function" == typeof t && a[r].callbacks.push(t);
			return (
				o.logWarn("module ".concat(e, " is loading external JavaScript")),
				(function (e, t) {
					var n = document.createElement("script");
					(n.type = "text/javascript"),
						(n.async = !0),
						(a[r].tag = n).readyState
							? (n.onreadystatechange = function () {
									("loaded" !== n.readyState && "complete" !== n.readyState) ||
										((n.onreadystatechange = null), t());
							  })
							: (n.onload = function () {
									t();
							  });
					return (n.src = e), o.insertElement(n), n;
				})(r, function () {
					a[r].loaded = !0;
					try {
						for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]();
					} catch (e) {
						o.logError(
							"Error executing callback",
							"adloader.js:loadExternalScript",
							e
						);
					}
				})
			);
		};
		var r = n(13),
			i = n.n(r),
			o = n(0),
			a = {},
			c = ["adloox", "criteo", "outstream", "adagio", "browsi"];
	},
	4: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return r;
		}),
			(t.b = i);
		var l = n(3);
		function p() {
			return (p =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function g(e) {
			return (g =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  })(e);
		}
		var b = n(0),
			v = 4,
			r = i();
		function i() {
			var s =
					0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
				e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
				d = e.request,
				f = e.done;
			return function (e, t, n) {
				var r =
					3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
				try {
					var i,
						o = r.method || (n ? "POST" : "GET"),
						a = document.createElement("a");
					a.href = e;
					var c,
						u =
							"object" === g(t) && null !== t
								? t
								: {
										success: function () {
											b.logMessage("xhr success");
										},
										error: function (e) {
											b.logError("xhr error", null, e);
										},
								  };
					"function" == typeof t && (u.success = t),
						((i = new window.XMLHttpRequest()).onreadystatechange =
							function () {
								var e;
								i.readyState === v &&
									("function" == typeof f && f(a.origin),
									(200 <= (e = i.status) && e < 300) || 304 === e
										? u.success(i.responseText, i)
										: u.error(i.statusText, i));
							}),
						l.b.getConfig("disableAjaxTimeout") ||
							(i.ontimeout = function () {
								b.logError("  xhr timeout after ", i.timeout, "ms");
							}),
						"GET" === o &&
							n &&
							(p((c = b.parseUrl(e, r)).search, n), (e = b.buildUrl(c))),
						i.open(o, e, !0),
						l.b.getConfig("disableAjaxTimeout") || (i.timeout = s),
						r.withCredentials && (i.withCredentials = !0),
						b._each(r.customHeaders, function (e, t) {
							i.setRequestHeader(t, e);
						}),
						r.preflight &&
							i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
						i.setRequestHeader("Content-Type", r.contentType || "text/plain"),
						"function" == typeof d && d(a.origin),
						"POST" === o && n ? i.send(n) : i.send();
				} catch (e) {
					b.logError("xhr construction", e);
				}
			};
		}
	},
	40: function (e, t) {
		e.exports = {};
	},
	41: function (e, t, n) {
		var i = n(15),
			o = n(21),
			a = n(22)("species");
		e.exports = function (e, t) {
			var n,
				r = i(e).constructor;
			return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
		};
	},
	42: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return d;
		}),
			n.d(t, "b", function () {
				return R;
			}),
			(t.c = k),
			n.d(t, "d", function () {
				return l;
			});
		var A = n(0),
			E = n(3),
			O = n(38),
			r = n(23),
			i = n(94),
			o = n(2),
			a = n(11),
			c = n(13),
			T = n.n(c),
			u = n(10),
			I = n.n(u);
		function j() {
			return (j =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function C(e, t, n) {
			return (
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
		function w(e) {
			return (
				(function (e) {
					if (Array.isArray(e)) return s(e);
				})(e) ||
				(function (e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
						return Array.from(e);
				})(e) ||
				(function (e, t) {
					if (!e) return;
					if ("string" == typeof e) return s(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if (
						"Arguments" === n ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					)
						return s(e, t);
				})(e) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				})()
			);
		}
		function s(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		var _ = n(0),
			B = n(5),
			x = [],
			U = Object.keys(B.TARGETING_KEYS).map(function (e) {
				return B.TARGETING_KEYS[e];
			}),
			d = {
				isBidNotExpired: function (e) {
					return (
						e.responseTimestamp + 1e3 * e.ttl - 1e3 > Object(A.timestamp)()
					);
				},
				isUnusedBid: function (e) {
					return (
						e &&
						((e.status && !T()([B.BID_STATUS.RENDERED], e.status)) || !e.status)
					);
				},
			},
			R = Object(a.b)("sync", function (e, r) {
				var i =
					2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
				if (3 < arguments.length && void 0 !== arguments[3] && arguments[3])
					return e;
				var o = [],
					a = E.b.getConfig("sendBidsControl.dealPrioritization"),
					c = Object(A.groupBy)(e, "adUnitCode");
				return (
					Object.keys(c).forEach(function (e) {
						var t = [],
							n = Object(A.groupBy)(c[e], "bidderCode");
						Object.keys(n).forEach(function (e) {
							return t.push(n[e].reduce(r));
						}),
							0 < i
								? ((t = a
										? t.sort(k(!0))
										: t.sort(function (e, t) {
												return t.cpm - e.cpm;
										  })),
								  o.push.apply(o, w(t.slice(0, i))))
								: o.push.apply(o, w(t));
					}),
					o
				);
			});
		function k() {
			var n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
			return function (e, t) {
				return void 0 !== e.adserverTargeting.hb_deal &&
					void 0 === t.adserverTargeting.hb_deal
					? -1
					: void 0 === e.adserverTargeting.hb_deal &&
					  void 0 !== t.adserverTargeting.hb_deal
					? 1
					: n
					? t.cpm - e.cpm
					: t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb;
			};
		}
		var D,
			N,
			f,
			l =
				((D = r.a),
				(f = {}),
				((N = {}).setLatestAuctionForAdUnit = function (e, t) {
					f[e] = t;
				}),
				(N.resetPresetTargeting = function (e, t) {
					var n, i;
					Object(A.isGptPubadsDefined)() &&
						((n = M(e)),
						(i = D.getAdUnits().filter(function (e) {
							return T()(n, e.code);
						})),
						window.googletag
							.pubads()
							.getSlots()
							.forEach(function (n) {
								var r = _.isFn(t) && t(n);
								x.forEach(function (t) {
									i.forEach(function (e) {
										(e.code === n.getAdUnitPath() ||
											e.code === n.getSlotElementId() ||
											(_.isFn(r) && r(e.code))) &&
											n.setTargeting(t, null);
									});
								});
							}));
				}),
				(N.resetPresetTargetingAST = function (e) {
					M(e).forEach(function (e) {
						var t,
							n,
							r = window.apntag.getTag(e);
						r &&
							r.keywords &&
							((t = Object.keys(r.keywords)),
							(n = {}),
							t.forEach(function (e) {
								T()(x, e.toLowerCase()) || (n[e] = r.keywords[e]);
							}),
							window.apntag.modifyTag(e, { keywords: n }));
					});
				}),
				(N.getAllTargeting = function (e) {
					var t,
						n,
						r,
						i,
						o,
						a,
						c,
						u,
						s,
						d,
						f =
							1 < arguments.length && void 0 !== arguments[1]
								? arguments[1]
								: q(),
						l = M(e),
						p =
							((c = l),
							(u = f),
							(s = N.getWinningBids(c, u)),
							(d = G()),
							(s = s.map(function (o) {
								return C(
									{},
									o.adUnitCode,
									Object.keys(o.adserverTargeting)
										.filter(function (e) {
											return (
												void 0 === o.sendStandardTargeting ||
												o.sendStandardTargeting ||
												-1 === d.indexOf(e)
											);
										})
										.reduce(function (e, t) {
											var n = [o.adserverTargeting[t]],
												r = C({}, t.substring(0, 20), n);
											if (t !== B.TARGETING_KEYS.DEAL)
												return [].concat(w(e), [r]);
											var i = C(
												{},
												"".concat(t, "_").concat(o.bidderCode).substring(0, 20),
												n
											);
											return [].concat(w(e), [r, i]);
										}, [])
								);
							}))
								.concat(
									((a = l),
									f
										.filter(function (e) {
											return T()(a, e.adUnitCode);
										})
										.map(function (e) {
											return j({}, e);
										})
										.reduce(W, [])
										.map(L)
										.filter(function (e) {
											return e;
										}))
								)
								.concat(
									E.b.getConfig("enableSendAllBids")
										? ((n = l),
										  (r = f),
										  (i = U.concat(O.a)),
										  (o = E.b.getConfig("sendBidsControl.bidLimit")),
										  R(r, A.getHighestCpm, o)
												.map(function (t) {
													if (P(t, n))
														return C(
															{},
															t.adUnitCode,
															F(
																t,
																i.filter(function (e) {
																	return void 0 !== t.adserverTargeting[e];
																})
															)
														);
												})
												.filter(function (e) {
													return e;
												}))
										: (function (e, t) {
												if (
													!0 !==
													E.b.getConfig("targetingControls.alwaysIncludeDeals")
												)
													return [];
												var n = U.concat(O.a);
												return R(t, A.getHighestCpm)
													.map(function (t) {
														if (t.dealId && P(t, e))
															return C(
																{},
																t.adUnitCode,
																F(
																	t,
																	n.filter(function (e) {
																		return void 0 !== t.adserverTargeting[e];
																	})
																)
															);
													})
													.filter(function (e) {
														return e;
													});
										  })(l, f)
								)
								.concat(
									((t = l),
									D.getAdUnits()
										.filter(function (e) {
											return T()(t, e.code) && g(e);
										})
										.map(function (e) {
											return C(
												{},
												e.code,
												((t = g(e)),
												Object.keys(t).map(function (e) {
													return C(
														{},
														e,
														_.isArray(t[e]) ? t[e] : t[e].split(",")
													);
												}))
											);
											var t;
										}))
								));
					function g(e) {
						return Object(A.deepAccess)(e, B.JSON_MAPPING.ADSERVER_TARGETING);
					}
					p.map(function (t) {
						Object.keys(t).map(function (e) {
							t[e].map(function (e) {
								-1 === x.indexOf(Object.keys(e)[0]) &&
									(x = Object.keys(e).concat(x));
							});
						});
					});
					var b = Object.keys(j({}, B.DEFAULT_TARGETING_KEYS, B.NATIVE_KEYS)),
						v = E.b.getConfig("targetingControls.allowTargetingKeys") || b;
					Array.isArray(v) &&
						0 < v.length &&
						(p = (function (e, r) {
							var i = j({}, B.TARGETING_KEYS, B.NATIVE_KEYS),
								o = Object.keys(i),
								a = {};
							Object(A.logInfo)(
								"allowTargetingKeys - allowed keys [ ".concat(
									r
										.map(function (e) {
											return i[e];
										})
										.join(", "),
									" ]"
								)
							),
								e.map(function (e) {
									var t = Object.keys(e)[0],
										n = e[t].filter(function (e) {
											var n = Object.keys(e)[0],
												t =
													0 ===
														o.filter(function (e) {
															return 0 === n.indexOf(i[e]);
														}).length ||
													I()(r, function (e) {
														var t = i[e];
														return 0 === n.indexOf(t);
													});
											return (a[n] = !t), t;
										});
									e[t] = n;
								});
							var t = Object.keys(a).filter(function (e) {
								return a[e];
							});
							return (
								Object(A.logInfo)(
									"allowTargetingKeys - removed keys [ ".concat(
										t.join(", "),
										" ]"
									)
								),
								e.filter(function (e) {
									return 0 < e[Object.keys(e)[0]].length;
								})
							);
						})(p, v)),
						(p = p
							.map(function (e) {
								return C(
									{},
									Object.keys(e)[0],
									e[Object.keys(e)[0]]
										.map(function (e) {
											return C(
												{},
												Object.keys(e)[0],
												e[Object.keys(e)[0]].join(", ")
											);
										})
										.reduce(function (e, t) {
											return j(t, e);
										}, {})
								);
							})
							.reduce(function (e, t) {
								var n = Object.keys(t)[0];
								return (e[n] = j({}, e[n], t[n])), e;
							}, {}));
					var y,
						h,
						m,
						S = E.b.getConfig("targetingControls.auctionKeyMaxChars");
					return (
						S &&
							(Object(A.logInfo)(
								"Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(
									S,
									" characters.  Running checks on auction keys..."
								)
							),
							(y = p),
							(h = S),
							(m = Object(A.deepClone)(y)),
							(p = Object.keys(m)
								.map(function (e) {
									return { adUnitCode: e, adserverTargeting: m[e] };
								})
								.sort(k())
								.reduce(function (e, t, n, r) {
									var i,
										o =
											((i = t.adserverTargeting),
											Object.keys(i).reduce(function (e, t) {
												return (
													e +
													""
														.concat(t, "%3d")
														.concat(encodeURIComponent(i[t]), "%26")
												);
											}, ""));
									n + 1 === r.length && (o = o.slice(0, -3));
									var a = t.adUnitCode,
										c = o.length;
									return (
										c <= h
											? ((h -= c),
											  Object(A.logInfo)(
													"AdUnit '"
														.concat(a, "' auction keys comprised of ")
														.concat(
															c,
															" characters.  Deducted from running threshold; new limit is "
														)
														.concat(h),
													m[a]
											  ),
											  (e[a] = m[a]))
											: Object(A.logWarn)(
													"The following keys for adUnitCode '"
														.concat(
															a,
															"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was "
														)
														.concat(c, ", the current allotted amount was ")
														.concat(h, ".\n"),
													m[a]
											  ),
										n + 1 === r.length &&
											0 === Object.keys(e).length &&
											Object(A.logError)(
												"No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."
											),
										e
									);
								}, {}))),
						l.forEach(function (e) {
							p[e] || (p[e] = {});
						}),
						p
					);
				}),
				(N.setTargetingForGPT = function (i, e) {
					window.googletag
						.pubads()
						.getSlots()
						.forEach(function (r) {
							Object.keys(i)
								.filter((e || Object(A.isAdUnitCodeMatchingSlot))(r))
								.forEach(function (n) {
									return Object.keys(i[n]).forEach(function (t) {
										var e = i[n][t];
										"string" == typeof e && (e = e.split(",")),
											(e = 1 < e.length ? [e] : e)
												.map(function (e) {
													return (
														_.logMessage(
															"Attempting to set key value for slot: "
																.concat(r.getSlotElementId(), " key: ")
																.concat(t, " value: ")
																.concat(e)
														),
														e
													);
												})
												.forEach(function (e) {
													r.setTargeting(t, e);
												});
									});
								});
						});
				}),
				(N.getWinningBids = function (e) {
					var n =
							1 < arguments.length && void 0 !== arguments[1]
								? arguments[1]
								: q(),
						t = M(e);
					return n
						.filter(function (e) {
							return T()(t, e.adUnitCode);
						})
						.filter(function (e) {
							return 0 < e.cpm;
						})
						.map(function (e) {
							return e.adUnitCode;
						})
						.filter(A.uniques)
						.map(function (t) {
							return n
								.filter(function (e) {
									return e.adUnitCode === t ? e : null;
								})
								.reduce(A.getHighestCpm);
						});
				}),
				(N.setTargetingForAst = function (e) {
					var r = N.getAllTargeting(e);
					try {
						N.resetPresetTargetingAST(e);
					} catch (e) {
						_.logError("unable to reset targeting for AST" + e);
					}
					Object.keys(r).forEach(function (n) {
						return Object.keys(r[n]).forEach(function (e) {
							var t;
							_.logMessage(
								"Attempting to set targeting for targetId: "
									.concat(n, " key: ")
									.concat(e, " value: ")
									.concat(r[n][e])
							),
								(_.isStr(r[n][e]) || _.isArray(r[n][e])) &&
									((t = {}),
									e.search(/pt[0-9]/) < 0
										? (t[e.toUpperCase()] = r[n][e])
										: (t[e] = r[n][e]),
									window.apntag.setKeywords(n, t, { overrideKeyValue: !0 }));
						});
					});
				}),
				(N.isApntagDefined = function () {
					if (window.apntag && _.isFn(window.apntag.setKeywords)) return !0;
				}),
				N);
		function P(e, t) {
			return (
				e.adserverTargeting &&
				t &&
				((_.isArray(t) && T()(t, e.adUnitCode)) ||
					("string" == typeof t && e.adUnitCode === t))
			);
		}
		function M(e) {
			return "string" == typeof e
				? [e]
				: _.isArray(e)
				? e
				: D.getAdUnitCodes() || [];
		}
		function q() {
			var e = D.getBidsReceived();
			return (
				E.b.getConfig("useBidCache") ||
					(e = e.filter(function (e) {
						return f[e.adUnitCode] === e.auctionId;
					})),
				(e = e
					.filter(function (e) {
						return Object(A.deepAccess)(e, "video.context") !== o.a;
					})
					.filter(function (e) {
						return "banner" !== e.mediaType || Object(i.c)([e.width, e.height]);
					})
					.filter(d.isUnusedBid)
					.filter(d.isBidNotExpired)),
				R(e, A.getOldestHighestCpmBid)
			);
		}
		function G() {
			return D.getStandardBidderAdServerTargeting()
				.map(function (e) {
					return e.key;
				})
				.concat(U)
				.filter(A.uniques);
		}
		function W(r, i, e, t) {
			return (
				Object.keys(i.adserverTargeting)
					.filter(p())
					.forEach(function (e) {
						var t, n;
						r.length &&
							r
								.filter(
									((n = e),
									function (e) {
										return (
											e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
										);
									})
								)
								.forEach(
									((t = e),
									function (e) {
										_.isArray(e.adserverTargeting[t]) ||
											(e.adserverTargeting[t] = [e.adserverTargeting[t]]),
											(e.adserverTargeting[t] = e.adserverTargeting[t]
												.concat(i.adserverTargeting[t])
												.filter(A.uniques)),
											delete i.adserverTargeting[t];
									})
								);
					}),
				r.push(i),
				r
			);
		}
		function p() {
			var t = G().concat(O.a);
			return function (e) {
				return -1 === t.indexOf(e);
			};
		}
		function L(t) {
			return C(
				{},
				t.adUnitCode,
				Object.keys(t.adserverTargeting)
					.filter(p())
					.map(function (e) {
						return C({}, e.substring(0, 20), [t.adserverTargeting[e]]);
					})
			);
		}
		function F(t, e) {
			return e.map(function (e) {
				return C({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [
					t.adserverTargeting[e],
				]);
			});
		}
	},
	43: function (e, t) {
		e.exports = {};
	},
	44: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return S;
		});
		var a = n(0),
			r = n(3),
			i = n(13),
			o = n.n(i),
			c = n(7);
		function u(e, t) {
			return (
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
				(function (e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
						return;
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (
							var a, c = e[Symbol.iterator]();
							!(r = (a = c.next()).done) &&
							(n.push(a.value), !t || n.length !== t);
							r = !0
						);
					} catch (e) {
						(i = !0), (o = e);
					} finally {
						try {
							r || null == c.return || c.return();
						} finally {
							if (i) throw o;
						}
					}
					return n;
				})(e, t) ||
				(function (e, t) {
					if (!e) return;
					if ("string" == typeof e) return s(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if (
						"Arguments" === n ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					)
						return s(e, t);
				})(e, t) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				})()
			);
		}
		function s(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		function d() {
			return (d =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		r.b.setDefaults({
			userSync: a.deepClone({
				syncEnabled: !0,
				filterSettings: { image: { bidders: "*", filter: "include" } },
				syncsPerBidder: 5,
				syncDelay: 3e3,
				auctionDelay: 0,
			}),
		});
		var f = Object(c.a)("usersync");
		var l,
			p,
			g,
			b,
			v,
			y,
			h,
			m = !a.isSafariBrowser() && f.cookiesAreEnabled(),
			S =
				((l = { config: r.b.getConfig("userSync"), browserSupportsCookies: m }),
				(p = {}),
				(g = A()),
				(b = new Set()),
				(y = { image: !0, iframe: !(v = {}) }),
				(h = l.config),
				r.b.getConfig("userSync", function (e) {
					var t;
					e.userSync &&
						((t = e.userSync.filterSettings),
						a.isPlainObject(t) &&
							(t.image ||
								t.all ||
								(e.userSync.filterSettings.image = {
									bidders: "*",
									filter: "include",
								}))),
						(h = d(h, e.userSync));
				}),
				(p.registerSync = function (e, t, n) {
					return b.has(t)
						? a.logMessage(
								'already fired syncs for "'.concat(
									t,
									'", ignoring registerSync call'
								)
						  )
						: h.syncEnabled && a.isArray(g[e])
						? t
							? 0 !== h.syncsPerBidder && Number(v[t]) >= h.syncsPerBidder
								? a.logWarn(
										'Number of user syncs exceeded for "'.concat(t, '"')
								  )
								: p.canBidderRegisterSync(e, t)
								? (g[e].push([t, n]),
								  (r = v)[(i = t)] ? (r[i] += 1) : (r[i] = 1),
								  void (v = r))
								: a.logWarn(
										'Bidder "'
											.concat(t, '" not permitted to register their "')
											.concat(e, '" userSync pixels.')
								  )
							: a.logWarn("Bidder is required for registering sync")
						: a.logWarn('User sync type "'.concat(e, '" not supported'));
					var r, i;
				}),
				(p.syncUsers = function () {
					var e =
						0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
					if (e) return setTimeout(E, Number(e));
					E();
				}),
				(p.triggerUserSyncs = function () {
					h.enableOverride && p.syncUsers();
				}),
				(p.canBidderRegisterSync = function (e, t) {
					return !h.filterSettings || !T(e, t);
				}),
				p);
		function A() {
			return { image: [], iframe: [] };
		}
		function E() {
			if (h.syncEnabled && l.browserSupportsCookies) {
				try {
					!(function () {
						if (!y.image) return;
						O(g.image, function (e) {
							var t = u(e, 2),
								n = t[0],
								r = t[1];
							a.logMessage(
								"Invoking image pixel user sync for bidder: ".concat(n)
							),
								a.triggerPixel(r);
						});
					})(),
						(function () {
							if (!y.iframe) return;
							O(g.iframe, function (e) {
								var t = u(e, 2),
									n = t[0],
									r = t[1];
								a.logMessage(
									"Invoking iframe user sync for bidder: ".concat(n)
								),
									a.insertUserSyncIframe(r);
							});
						})();
				} catch (e) {
					return a.logError("Error firing user syncs", e);
				}
				g = A();
			}
		}
		function O(e, t) {
			a.shuffle(e).forEach(function (e) {
				t(e), b.add(e[0]);
			});
		}
		function T(e, t) {
			var n = h.filterSettings;
			if (
				(function (e, t) {
					if (e.all && e[t])
						return (
							a.logWarn(
								'Detected presence of the "filterSettings.all" and "filterSettings.'.concat(
									t,
									'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
								)
							),
							!1
						);
					var n = e.all ? e.all : e[t],
						r = e.all ? "all" : t;
					if (!n) return !1;
					var i = n.filter,
						o = n.bidders;
					if (i && "include" !== i && "exclude" !== i)
						return (
							a.logWarn(
								'UserSync "filterSettings.'
									.concat(r, ".filter\" setting '")
									.concat(
										i,
										"' is not a valid option; use either 'include' or 'exclude'."
									)
							),
							!1
						);
					return (
						!!(
							"*" === o ||
							(Array.isArray(o) &&
								0 < o.length &&
								o.every(function (e) {
									return a.isStr(e) && "*" !== e;
								}))
						) ||
						(a.logWarn(
							'Detected an invalid setup in userSync "filterSettings.'.concat(
								r,
								".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
							)
						),
						!1)
					);
				})(n, e)
			) {
				y[e] = !0;
				var r = n.all ? n.all : n[e],
					i = "*" === r.bidders ? [t] : r.bidders;
				return {
					include: function (e, t) {
						return !o()(e, t);
					},
					exclude: function (e, t) {
						return o()(e, t);
					},
				}[r.filter || "include"](i, t);
			}
			return !y[e];
		}
	},
	45: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return d;
		}),
			n.d(t, "b", function () {
				return h;
			});
		var r = n(10),
			v = n.n(r),
			i = n(0),
			y = 2,
			o = { buckets: [{ max: 5, increment: 0.5 }] },
			a = { buckets: [{ max: 20, increment: 0.1 }] },
			c = { buckets: [{ max: 20, increment: 0.01 }] },
			u = {
				buckets: [
					{ max: 3, increment: 0.01 },
					{ max: 8, increment: 0.05 },
					{ max: 20, increment: 0.5 },
				],
			},
			s = {
				buckets: [
					{ max: 5, increment: 0.05 },
					{ max: 10, increment: 0.1 },
					{ max: 20, increment: 0.5 },
				],
			};
		function d(e, t) {
			var n =
					2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
				r = parseFloat(e);
			return (
				isNaN(r) && (r = ""),
				{
					low: "" === r ? "" : f(e, o, n),
					med: "" === r ? "" : f(e, a, n),
					high: "" === r ? "" : f(e, c, n),
					auto: "" === r ? "" : f(e, s, n),
					dense: "" === r ? "" : f(e, u, n),
					custom: "" === r ? "" : f(e, t, n),
				}
			);
		}
		function f(n, e, r) {
			var i = "";
			if (!h(e)) return i;
			var t,
				o,
				a,
				c,
				u,
				s,
				d,
				f,
				l,
				p = e.buckets.reduce(
					function (e, t) {
						return e.max > t.max ? e : t;
					},
					{ max: 0 }
				),
				g = 0,
				b = v()(e.buckets, function (e) {
					if (n > p.max * r) {
						var t = e.precision;
						void 0 === t && (t = y), (i = (e.max * r).toFixed(t));
					} else {
						if (n <= e.max * r && g * r <= n) return (e.min = g), e;
						g = e.max;
					}
				});
			return (
				b &&
					((t = n),
					(a = r),
					(c = void 0 !== (o = b).precision ? o.precision : y),
					(u = o.increment * a),
					(s = o.min * a),
					(d = Math.pow(10, c + 2)),
					(f = (t * d - s * d) / (u * d)),
					(l = Math.floor(f) * u + s),
					(i = (l = Number(l.toFixed(10))).toFixed(c))),
				i
			);
		}
		function h(e) {
			if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
			var t = !0;
			return (
				e.buckets.forEach(function (e) {
					(e.max && e.increment) || (t = !1);
				}),
				t
			);
		}
	},
	46: function (e, t) {
		e.exports = function (e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t,
			};
		};
	},
	47: function (e, t, n) {
		var r = n(73),
			i = n(49);
		e.exports = function (e) {
			return r(i(e));
		};
	},
	48: function (e, t) {
		var n = {}.toString;
		e.exports = function (e) {
			return n.call(e).slice(8, -1);
		};
	},
	49: function (e, t) {
		e.exports = function (e) {
			if (null == e) throw TypeError("Can't call method on " + e);
			return e;
		};
	},
	5: function (e, t) {
		e.exports = {
			JSON_MAPPING: {
				PL_CODE: "code",
				PL_SIZE: "sizes",
				PL_BIDS: "bids",
				BD_BIDDER: "bidder",
				BD_ID: "paramsd",
				BD_PL_ID: "placementId",
				ADSERVER_TARGETING: "adserverTargeting",
				BD_SETTING_STANDARD: "standard",
			},
			DEBUG_MODE: "pbjs_debug",
			STATUS: { GOOD: 1, NO_BID: 2 },
			CB: {
				TYPE: {
					ALL_BIDS_BACK: "allRequestedBidsBack",
					AD_UNIT_BIDS_BACK: "adUnitBidsBack",
					BID_WON: "bidWon",
					REQUEST_BIDS: "requestBids",
				},
			},
			EVENTS: {
				AUCTION_INIT: "auctionInit",
				AUCTION_END: "auctionEnd",
				BID_ADJUSTMENT: "bidAdjustment",
				BID_TIMEOUT: "bidTimeout",
				BID_REQUESTED: "bidRequested",
				BID_RESPONSE: "bidResponse",
				NO_BID: "noBid",
				BID_WON: "bidWon",
				BIDDER_DONE: "bidderDone",
				SET_TARGETING: "setTargeting",
				BEFORE_REQUEST_BIDS: "beforeRequestBids",
				REQUEST_BIDS: "requestBids",
				ADD_AD_UNITS: "addAdUnits",
				AD_RENDER_FAILED: "adRenderFailed",
				TCF2_ENFORCEMENT: "tcf2Enforcement",
				AUCTION_DEBUG: "auctionDebug",
				BID_VIEWABLE: "bidViewable",
			},
			AD_RENDER_FAILED_REASON: {
				PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
				NO_AD: "noAd",
				EXCEPTION: "exception",
				CANNOT_FIND_AD: "cannotFindAd",
				MISSING_DOC_OR_ADID: "missingDocOrAdid",
			},
			EVENT_ID_PATHS: { bidWon: "adUnitCode" },
			GRANULARITY_OPTIONS: {
				LOW: "low",
				MEDIUM: "medium",
				HIGH: "high",
				AUTO: "auto",
				DENSE: "dense",
				CUSTOM: "custom",
			},
			TARGETING_KEYS: {
				BIDDER: "hb_bidder",
				AD_ID: "hb_adid",
				PRICE_BUCKET: "hb_pb",
				SIZE: "hb_size",
				DEAL: "hb_deal",
				SOURCE: "hb_source",
				FORMAT: "hb_format",
				UUID: "hb_uuid",
				CACHE_ID: "hb_cache_id",
				CACHE_HOST: "hb_cache_host",
				ADOMAIN: "hb_adomain",
			},
			DEFAULT_TARGETING_KEYS: {
				BIDDER: "hb_bidder",
				AD_ID: "hb_adid",
				PRICE_BUCKET: "hb_pb",
				SIZE: "hb_size",
				DEAL: "hb_deal",
				SOURCE: "hb_source",
				FORMAT: "hb_format",
				UUID: "hb_uuid",
				CACHE_ID: "hb_cache_id",
				CACHE_HOST: "hb_cache_host",
			},
			NATIVE_KEYS: {
				title: "hb_native_title",
				body: "hb_native_body",
				body2: "hb_native_body2",
				privacyLink: "hb_native_privacy",
				privacyIcon: "hb_native_privicon",
				sponsoredBy: "hb_native_brand",
				image: "hb_native_image",
				icon: "hb_native_icon",
				clickUrl: "hb_native_linkurl",
				displayUrl: "hb_native_displayurl",
				cta: "hb_native_cta",
				rating: "hb_native_rating",
				address: "hb_native_address",
				downloads: "hb_native_downloads",
				likes: "hb_native_likes",
				phone: "hb_native_phone",
				price: "hb_native_price",
				salePrice: "hb_native_saleprice",
				rendererUrl: "hb_renderer_url",
				adTemplate: "hb_adTemplate",
			},
			S2S: {
				SRC: "s2s",
				DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
				SYNCED_BIDDERS_KEY: "pbjsSyncs",
			},
			BID_STATUS: {
				BID_TARGETING_SET: "targetingSet",
				RENDERED: "rendered",
				BID_REJECTED: "bidRejected",
			},
		};
	},
	50: function (e, t, n) {
		var r = n(58),
			i = Math.min;
		e.exports = function (e) {
			return 0 < e ? i(r(e), 9007199254740991) : 0;
		};
	},
	51: function (e, t) {
		e.exports = function () {};
	},
	52: function (e, t, n) {
		var r = n(29);
		e.exports = r;
	},
	53: function (e, t) {
		e.exports = {};
	},
	54: function (e, t, n) {
		var r,
			i,
			o,
			a,
			c,
			u,
			s,
			d,
			f = n(115),
			l = n(26),
			p = n(27),
			g = n(32),
			b = n(28),
			v = n(65),
			y = n(53),
			h = l.WeakMap;
		(s = f
			? ((r = new h()),
			  (i = r.get),
			  (o = r.has),
			  (a = r.set),
			  (c = function (e, t) {
					return a.call(r, e, t), t;
			  }),
			  (u = function (e) {
					return i.call(r, e) || {};
			  }),
			  function (e) {
					return o.call(r, e);
			  })
			: ((y[(d = v("state"))] = !0),
			  (c = function (e, t) {
					return g(e, d, t), t;
			  }),
			  (u = function (e) {
					return b(e, d) ? e[d] : {};
			  }),
			  function (e) {
					return b(e, d);
			  })),
			(e.exports = {
				set: c,
				get: u,
				has: s,
				enforce: function (e) {
					return s(e) ? u(e) : c(e, {});
				},
				getterFor: function (n) {
					return function (e) {
						var t;
						if (!p(e) || (t = u(e)).type !== n)
							throw TypeError("Incompatible receiver, " + n + " required");
						return t;
					};
				},
			});
	},
	547: function (e, t, n) {
		var r = n(548);
		e.exports = r;
	},
	548: function (e, t, n) {
		n(549);
		var r = n(43);
		e.exports = r.Number.isInteger;
	},
	549: function (e, t, n) {
		n(14)({ target: "Number", stat: !0 }, { isInteger: n(550) });
	},
	55: function (e, t, n) {
		var i = n(27);
		e.exports = function (e, t) {
			if (!i(e)) return e;
			var n, r;
			if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e))))
				return r;
			if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e)))) return r;
			if (!t && "function" == typeof (n = e.toString) && !i((r = n.call(e))))
				return r;
			throw TypeError("Can't convert object to primitive value");
		};
	},
	550: function (e, t, n) {
		var r = n(27),
			i = Math.floor;
		e.exports = function (e) {
			return !r(e) && isFinite(e) && i(e) === e;
		};
	},
	56: function (e, t, n) {
		function r(p) {
			var g = 1 == p,
				b = 2 == p,
				v = 3 == p,
				y = 4 == p,
				h = 6 == p,
				m = 5 == p || h;
			return function (e, t, n, r) {
				for (
					var i,
						o,
						a = E(e),
						c = A(a),
						u = S(t, n, 3),
						s = O(c.length),
						d = 0,
						f = r || T,
						l = g ? f(e, s) : b ? f(e, 0) : void 0;
					d < s;
					d++
				)
					if ((m || d in c) && ((o = u((i = c[d]), d, a)), p))
						if (g) l[d] = o;
						else if (o)
							switch (p) {
								case 3:
									return !0;
								case 5:
									return i;
								case 6:
									return d;
								case 2:
									I.call(l, i);
							}
						else if (y) return !1;
				return h ? -1 : v || y ? y : l;
			};
		}
		var S = n(24),
			A = n(73),
			E = n(57),
			O = n(50),
			T = n(103),
			I = [].push;
		e.exports = {
			forEach: r(0),
			map: r(1),
			filter: r(2),
			some: r(3),
			every: r(4),
			find: r(5),
			findIndex: r(6),
		};
	},
	57: function (e, t, n) {
		var r = n(49);
		e.exports = function (e) {
			return Object(r(e));
		};
	},
	58: function (e, t) {
		var n = Math.ceil,
			r = Math.floor;
		e.exports = function (e) {
			return isNaN((e = +e)) ? 0 : (0 < e ? r : n)(e);
		};
	},
	59: function (e, t) {
		var n = 0,
			r = Math.random();
		e.exports = function (e) {
			return (
				"Symbol(" +
				String(void 0 === e ? "" : e) +
				")_" +
				(++n + r).toString(36)
			);
		};
	},
	60: function (e, t, n) {
		function a(e) {
			throw e;
		}
		var c = n(30),
			u = n(31),
			s = n(28),
			d = Object.defineProperty,
			f = {};
		e.exports = function (e, t) {
			if (s(f, e)) return f[e];
			var n = [][e],
				r = !!s((t = t || {}), "ACCESSORS") && t.ACCESSORS,
				i = s(t, 0) ? t[0] : a,
				o = s(t, 1) ? t[1] : void 0;
			return (f[e] =
				!!n &&
				!u(function () {
					if (r && !c) return !0;
					var e = { length: -1 };
					r ? d(e, 1, { enumerable: !0, get: a }) : (e[1] = 1), n.call(e, i, o);
				}));
		};
	},
	61: function (e, t, n) {
		var r = n(62),
			i = n(40),
			o = n(22)("iterator");
		e.exports = function (e) {
			if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
		};
	},
	62: function (e, t, n) {
		var r = n(63),
			i = n(48),
			o = n(22)("toStringTag"),
			a =
				"Arguments" ==
				i(
					(function () {
						return arguments;
					})()
				);
		e.exports = r
			? i
			: function (e) {
					var t, n, r;
					return void 0 === e
						? "Undefined"
						: null === e
						? "Null"
						: "string" ==
						  typeof (n = (function (e, t) {
								try {
									return e[t];
								} catch (e) {}
						  })((t = Object(e)), o))
						? n
						: a
						? i(t)
						: "Object" == (r = i(t)) && "function" == typeof t.callee
						? "Arguments"
						: r;
			  };
	},
	63: function (e, t, n) {
		var r = {};
		(r[n(22)("toStringTag")] = "z"), (e.exports = "[object z]" === String(r));
	},
	64: function (e, t, n) {
		var o = n(63),
			a = n(33).f,
			c = n(32),
			u = n(28),
			s = n(114),
			d = n(22)("toStringTag");
		e.exports = function (e, t, n, r) {
			var i;
			e &&
				((i = n ? e : e.prototype),
				u(i, d) || a(i, d, { configurable: !0, value: t }),
				r && !o && c(i, "toString", s));
		};
	},
	65: function (e, t, n) {
		var r = n(76),
			i = n(59),
			o = r("keys");
		e.exports = function (e) {
			return o[e] || (o[e] = i(e));
		};
	},
	66: function (e, t, n) {
		"use strict";
		function y() {
			return this;
		}
		var h = n(14),
			m = n(123),
			S = n(89),
			A = n(125),
			E = n(64),
			O = n(32),
			T = n(87),
			r = n(22),
			I = n(16),
			j = n(40),
			i = n(88),
			C = i.IteratorPrototype,
			w = i.BUGGY_SAFARI_ITERATORS,
			_ = r("iterator"),
			B = "values",
			x = "entries";
		e.exports = function (e, t, n, r, i, o, a) {
			m(n, t, r);
			function c(e) {
				if (e === i && b) return b;
				if (!w && e in p) return p[e];
				switch (e) {
					case "keys":
					case B:
					case x:
						return function () {
							return new n(this, e);
						};
				}
				return function () {
					return new n(this);
				};
			}
			var u,
				s,
				d,
				f = t + " Iterator",
				l = !1,
				p = e.prototype,
				g = p[_] || p["@@iterator"] || (i && p[i]),
				b = (!w && g) || c(i),
				v = ("Array" == t && p.entries) || g;
			if (
				(v &&
					((u = S(v.call(new e()))),
					C !== Object.prototype &&
						u.next &&
						(I ||
							S(u) === C ||
							(A ? A(u, C) : "function" != typeof u[_] && O(u, _, y)),
						E(u, f, !0, !0),
						I && (j[f] = y))),
				i == B &&
					g &&
					g.name !== B &&
					((l = !0),
					(b = function () {
						return g.call(this);
					})),
				(I && !a) || p[_] === b || O(p, _, b),
				(j[t] = b),
				i)
			)
				if (((s = { values: c(B), keys: o ? b : c("keys"), entries: c(x) }), a))
					for (d in s) (!w && !l && d in p) || T(p, d, s[d]);
				else h({ target: t, proto: !0, forced: w || l }, s);
			return s;
		};
	},
	67: function (e, t, n) {
		"use strict";
		n.d(t, "a", function () {
			return o;
		});
		var r = n(0),
			c = {};
		function i(e, t, n) {
			var r,
				i,
				o,
				a =
					((i = n),
					(o = c[(r = e)] = c[r] || { bidders: {} }),
					i ? (o.bidders[i] = o.bidders[i] || {}) : o);
			return (a[t] = (a[t] || 0) + 1), a[t];
		}
		var o = {
			incrementRequestsCounter: function (e) {
				return i(e, "requestsCounter");
			},
			incrementBidderRequestsCounter: function (e, t) {
				return i(e, "requestsCounter", t);
			},
			incrementBidderWinsCounter: function (e, t) {
				return i(e, "winsCounter", t);
			},
			getRequestsCounter: function (e) {
				return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0;
			},
			getBidderRequestsCounter: function (e, t) {
				return (
					Object(r.deepAccess)(
						c,
						"".concat(e, ".bidders.").concat(t, ".requestsCounter")
					) || 0
				);
			},
			getBidderWinsCounter: function (e, t) {
				return (
					Object(r.deepAccess)(
						c,
						"".concat(e, ".bidders.").concat(t, ".winsCounter")
					) || 0
				);
			},
		};
	},
	69: function (e, t, n) {
		var r = n(230);
		e.exports = r;
	},
	7: function (e, t, n) {
		"use strict";
		n.d(t, "c", function () {
			return l;
		}),
			n.d(t, "d", function () {
				return p;
			}),
			(t.a = function (e) {
				return o({ moduleName: e, moduleType: "core" });
			}),
			(t.b = function (e, t) {
				return o({ gvlid: e, moduleName: t });
			});
		var r = n(11),
			u = n(0),
			i = n(13),
			d = n.n(i),
			f = ["core", "prebid-module"],
			l = [];
		function o(e) {
			var t = 0 < arguments.length && void 0 !== e ? e : {},
				i = t.gvlid,
				o = t.moduleName,
				a = t.moduleType;
			function s(n) {
				if (d()(f, a)) {
					return n({ valid: !0 });
				}
				var r;
				return (
					p(i, o, { hasEnforcementHook: !1 }, function (e) {
						var t;
						r =
							e && e.hasEnforcementHook
								? n(e)
								: ((t = { hasEnforcementHook: !1, valid: u.hasDeviceAccess() }),
								  n(t));
					}),
					r
				);
			}
			var c = function (t) {
				function n(e) {
					if (e && e.valid)
						try {
							return !!window.localStorage;
						} catch (e) {
							u.logError("Local storage api disabled");
						}
					return !1;
				}
				if (!t || "function" != typeof t) return s(n);
				l.push(function () {
					var e = s(n);
					t(e);
				});
			};
			return {
				setCookie: function (i, o, a, c, u, t) {
					function n(e) {
						var t, n, r;
						e &&
							e.valid &&
							((t =
								u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : ""),
							(n = a && "" !== a ? " ;expires=".concat(a) : ""),
							(r = null != c && "none" == c.toLowerCase() ? "; Secure" : ""),
							(document.cookie = ""
								.concat(i, "=")
								.concat(encodeURIComponent(o))
								.concat(n, "; path=/")
								.concat(t)
								.concat(c ? "; SameSite=".concat(c) : "")
								.concat(r)));
					}
					if (!t || "function" != typeof t) return s(n);
					l.push(function () {
						var e = s(n);
						t(e);
					});
				},
				getCookie: function (n, t) {
					function r(e) {
						if (e && e.valid) {
							var t = window.document.cookie.match(
								"(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)"
							);
							return t ? decodeURIComponent(t[2]) : null;
						}
						return null;
					}
					if (!t || "function" != typeof t) return s(r);
					l.push(function () {
						var e = s(r);
						t(e);
					});
				},
				localStorageIsEnabled: function (t) {
					function n(e) {
						if (e && e.valid)
							try {
								return (
									localStorage.setItem("prebid.cookieTest", "1"),
									"1" === localStorage.getItem("prebid.cookieTest")
								);
							} catch (e) {
							} finally {
								try {
									localStorage.removeItem("prebid.cookieTest");
								} catch (e) {}
							}
						return !1;
					}
					if (!t || "function" != typeof t) return s(n);
					l.push(function () {
						var e = s(n);
						t(e);
					});
				},
				cookiesAreEnabled: function (t) {
					function n(e) {
						return (
							!(!e || !e.valid) &&
							(!!u.checkCookieSupport() ||
								((window.document.cookie = "prebid.cookieTest"),
								-1 !== window.document.cookie.indexOf("prebid.cookieTest")))
						);
					}
					if (!t || "function" != typeof t) return s(n);
					l.push(function () {
						var e = s(n);
						t(e);
					});
				},
				setDataInLocalStorage: function (t, n, r) {
					function i(e) {
						e && e.valid && c() && window.localStorage.setItem(t, n);
					}
					if (!r || "function" != typeof r) return s(i);
					l.push(function () {
						var e = s(i);
						r(e);
					});
				},
				getDataFromLocalStorage: function (t, n) {
					function r(e) {
						return e && e.valid && c() ? window.localStorage.getItem(t) : null;
					}
					if (!n || "function" != typeof n) return s(r);
					l.push(function () {
						var e = s(r);
						n(e);
					});
				},
				removeDataFromLocalStorage: function (t, n) {
					function r(e) {
						e && e.valid && c() && window.localStorage.removeItem(t);
					}
					if (!n || "function" != typeof n) return s(r);
					l.push(function () {
						var e = s(r);
						n(e);
					});
				},
				hasLocalStorage: c,
				findSimilarCookies: function (o, t) {
					function n(e) {
						if (e && e.valid) {
							var t = [];
							if (u.hasDeviceAccess())
								for (var n = document.cookie.split(";"); n.length; ) {
									var r = n.pop(),
										i = (i = r.indexOf("=")) < 0 ? r.length : i;
									0 <=
										decodeURIComponent(
											r.slice(0, i).replace(/^\s+/, "")
										).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)));
								}
							return t;
						}
					}
					if (!t || "function" != typeof t) return s(n);
					l.push(function () {
						var e = s(n);
						t(e);
					});
				},
			};
		}
		var p = Object(r.b)(
			"async",
			function (e, t, n, r) {
				r(n);
			},
			"validateStorageEnforcement"
		);
	},
	70: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }),
			n.d(t, "adUnitSetupChecks", function () {
				return V;
			}),
			n.d(t, "checkAdUnitSetup", function () {
				return H;
			}),
			(t.executeCallbacks = Y);
		var r = n(17),
			i = n(0),
			o = n(238),
			a = n(44),
			l = n(3),
			m = n(23),
			p = n(42),
			c = n(11),
			u = n(239),
			s = n(13),
			g = n.n(s),
			b = n(67),
			S = n(12),
			d = n(34),
			f = n(7);
		function v(e) {
			return (
				(function (e) {
					if (Array.isArray(e)) return y(e);
				})(e) ||
				(function (e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
						return Array.from(e);
				})(e) ||
				(function (e, t) {
					if (!e) return;
					if ("string" == typeof e) return y(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if (
						"Arguments" === n ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					)
						return y(e, t);
				})(e) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				})()
			);
		}
		function y(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		function h() {
			return (h =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		var A = Object(r.a)(),
			E = n(5),
			O = n(0),
			T = n(8).default,
			I = n(9),
			j = a.a.triggerUserSyncs,
			C = E.EVENTS,
			w = C.ADD_AD_UNITS,
			_ = C.BID_WON,
			B = C.REQUEST_BIDS,
			x = C.SET_TARGETING,
			U = C.AD_RENDER_FAILED,
			R = E.AD_RENDER_FAILED_REASON,
			k = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
			D = R.NO_AD,
			N = R.EXCEPTION,
			P = R.CANNOT_FIND_AD,
			M = R.MISSING_DOC_OR_ADID,
			q = {
				bidWon: function (e) {
					var t = m.a
						.getBidsRequested()
						.map(function (e) {
							return e.bids.map(function (e) {
								return e.adUnitCode;
							});
						})
						.reduce(i.flatten)
						.filter(i.uniques);
					return (
						!!O.contains(t, e) ||
						void O.logError('The "' + e + '" placement is not defined.')
					);
				},
			};
		function G(e, t, n) {
			e.defaultView &&
				e.defaultView.frameElement &&
				((e.defaultView.frameElement.width = t),
				(e.defaultView.frameElement.height = n));
		}
		function W(e, t) {
			var n = [];
			return (
				O.isArray(e) &&
					(t ? e.length === t : 0 < e.length) &&
					(e.every(function (e) {
						return Object(i.isArrayOfNums)(e, 2);
					})
						? (n = e)
						: Object(i.isArrayOfNums)(e, 2) && n.push(e)),
				n
			);
		}
		function L(e) {
			var t = O.deepClone(e),
				n = t.mediaTypes.banner,
				r = W(n.sizes);
			return (
				0 < r.length
					? ((n.sizes = r), (t.sizes = r))
					: (O.logError(
							"Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."
					  ),
					  delete t.mediaTypes.banner),
				t
			);
		}
		function F(e) {
			var t,
				n,
				r = O.deepClone(e),
				i = r.mediaTypes.video;
			return (
				i.playerSize &&
					((t = "number" == typeof i.playerSize[0] ? 2 : 1),
					0 < (n = W(i.playerSize, t)).length
						? (2 == t &&
								O.logInfo(
									"Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."
								),
						  (i.playerSize = n),
						  (r.sizes = n))
						: (O.logError(
								"Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
						  ),
						  delete r.mediaTypes.video.playerSize)),
				r
			);
		}
		function z(e) {
			var t = O.deepClone(e),
				n = t.mediaTypes.native;
			return (
				n.image &&
					n.image.sizes &&
					!Array.isArray(n.image.sizes) &&
					(O.logError(
						"Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."
					),
					delete t.mediaTypes.native.image.sizes),
				n.image &&
					n.image.aspect_ratios &&
					!Array.isArray(n.image.aspect_ratios) &&
					(O.logError(
						"Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."
					),
					delete t.mediaTypes.native.image.aspect_ratios),
				n.icon &&
					n.icon.sizes &&
					!Array.isArray(n.icon.sizes) &&
					(O.logError(
						"Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."
					),
					delete t.mediaTypes.native.icon.sizes),
				t
			);
		}
		Object(u.a)(),
			(A.bidderSettings = A.bidderSettings || {}),
			(A.libLoaded = !0),
			(A.version = "v4.38.0"),
			O.logInfo("Prebid.js v4.38.0 loaded"),
			(A.installedModules = []),
			(A.adUnits = A.adUnits || []),
			(A.triggerUserSyncs = j);
		var V = {
				validateBannerMediaType: L,
				validateVideoMediaType: F,
				validateNativeMediaType: z,
				validateSizes: W,
			},
			H = Object(c.b)(
				"sync",
				function (e) {
					var c = [];
					return (
						e.forEach(function (e) {
							var t,
								n,
								r,
								i,
								o = e.mediaTypes,
								a = e.bids;
							a && O.isArray(a)
								? o && 0 !== Object.keys(o).length
									? (o.banner && (t = L(e)),
									  o.video && (n = F(t || e)),
									  o.native && (r = z(n || t || e)),
									  (i = h({}, t, n, r)),
									  c.push(i))
									: O.logError(
											"Detected adUnit.code '".concat(
												e.code,
												"' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."
											)
									  )
								: O.logError(
										"Detected adUnit.code '".concat(
											e.code,
											"' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."
										)
								  );
						}),
						c
					);
				},
				"checkAdUnitSetup"
			);
		function K(e) {
			var n = m.a[e]().filter(
					O.bind.call(i.adUnitsFilter, this, m.a.getAdUnitCodes())
				),
				r = m.a.getLastAuctionId();
			return n
				.map(function (e) {
					return e.adUnitCode;
				})
				.filter(i.uniques)
				.map(function (t) {
					return n.filter(function (e) {
						return e.auctionId === r && e.adUnitCode === t;
					});
				})
				.filter(function (e) {
					return e && e[0] && e[0].adUnitCode;
				})
				.map(function (e) {
					return (
						(t = {}),
						(n = e[0].adUnitCode),
						(r = { bids: e }),
						n in t
							? Object.defineProperty(t, n, {
									value: r,
									enumerable: !0,
									configurable: !0,
									writable: !0,
							  })
							: (t[n] = r),
						t
					);
					var t, n, r;
				})
				.reduce(function (e, t) {
					return h(e, t);
				}, {});
		}
		function J(e) {
			var t = e.reason,
				n = e.message,
				r = e.bid,
				i = e.id,
				o = { reason: t, message: n };
			r && (o.bid = r), i && (o.adId = i), O.logError(n), I.emit(U, o);
		}
		function Y(e, t) {
			function n(e) {
				for (var t; (t = e.shift()); ) t();
			}
			n(f.c), n(Q), e.call(this, t);
		}
		(A.getAdserverTargetingForAdUnitCodeStr = function (e) {
			if (
				(O.logInfo(
					"Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",
					arguments
				),
				e)
			) {
				var t = A.getAdserverTargetingForAdUnitCode(e);
				return O.transformAdServerTargetingObj(t);
			}
			O.logMessage(
				"Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode"
			);
		}),
			(A.getHighestUnusedBidResponseForAdUnitCode = function (e) {
				if (e) {
					var t = m.a
						.getAllBidsForAdUnitCode(e)
						.filter(p.a.isUnusedBid)
						.filter(p.a.isBidNotExpired);
					return t.length ? t.reduce(i.getHighestCpm) : {};
				}
				O.logMessage(
					"Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode"
				);
			}),
			(A.getAdserverTargetingForAdUnitCode = function (e) {
				return A.getAdserverTargeting(e)[e];
			}),
			(A.getAdserverTargeting = function (e) {
				return (
					O.logInfo("Invoking pbjs.getAdserverTargeting", arguments),
					p.d.getAllTargeting(e)
				);
			}),
			(A.getNoBids = function () {
				return O.logInfo("Invoking pbjs.getNoBids", arguments), K("getNoBids");
			}),
			(A.getNoBidsForAdUnitCode = function (t) {
				return {
					bids: m.a.getNoBids().filter(function (e) {
						return e.adUnitCode === t;
					}),
				};
			}),
			(A.getBidResponses = function () {
				return (
					O.logInfo("Invoking pbjs.getBidResponses", arguments),
					K("getBidsReceived")
				);
			}),
			(A.getBidResponsesForAdUnitCode = function (t) {
				return {
					bids: m.a.getBidsReceived().filter(function (e) {
						return e.adUnitCode === t;
					}),
				};
			}),
			(A.setTargetingForGPTAsync = function (e, t) {
				var n;
				O.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments),
					Object(i.isGptPubadsDefined)()
						? ((n = p.d.getAllTargeting(e)),
						  p.d.resetPresetTargeting(e, t),
						  p.d.setTargetingForGPT(n, t),
						  Object.keys(n).forEach(function (t) {
								Object.keys(n[t]).forEach(function (e) {
									"hb_adid" === e &&
										m.a.setStatusForBids(
											n[t][e],
											E.BID_STATUS.BID_TARGETING_SET
										);
								});
						  }),
						  I.emit(x, n))
						: O.logError("window.googletag is not defined on the page");
			}),
			(A.setTargetingForAst = function (e) {
				O.logInfo("Invoking pbjs.setTargetingForAn", arguments),
					p.d.isApntagDefined()
						? (p.d.setTargetingForAst(e), I.emit(x, p.d.getAllTargeting()))
						: O.logError("window.apntag is not defined on the page");
			}),
			(A.renderAd = function (e, t, n) {
				if (
					(O.logInfo("Invoking pbjs.renderAd", arguments),
					O.logMessage("Calling renderAd with adId :" + t),
					e && t)
				)
					try {
						var r,
							i,
							o,
							a,
							c,
							u,
							s,
							d,
							f,
							l,
							p,
							g,
							b,
							v = m.a.findBidByAdId(t);
						v
							? ((v.ad = O.replaceAuctionPrice(v.ad, v.cpm)),
							  (v.adUrl = O.replaceAuctionPrice(v.adUrl, v.cpm)),
							  n &&
									n.clickThrough &&
									((r = n.clickThrough),
									(v.ad = O.replaceClickThrough(v.ad, r)),
									(v.adUrl = O.replaceClickThrough(v.adUrl, r))),
							  m.a.addWinningBid(v),
							  I.emit(_, v),
							  (i = v.height),
							  (o = v.width),
							  (a = v.ad),
							  (c = v.mediaType),
							  (u = v.adUrl),
							  (s = v.renderer),
							  (d = document.createComment(
									"Creative "
										.concat(v.creativeId, " served by ")
										.concat(v.bidder, " Prebid.js Header Bidding")
							  )),
							  O.insertElement(d, e, "body"),
							  Object(S.c)(s)
									? Object(S.b)(s, v)
									: (e === document && !O.inIframe()) || "video" === c
									? ((f =
											"Error trying to write ad. Ad render call ad id ".concat(
												t,
												" was prevented from writing to the main document."
											)),
									  J({ reason: k, message: f, bid: v, id: t }))
									: a
									? (navigator.userAgent &&
											-1 <
												navigator.userAgent.toLowerCase().indexOf("firefox/") &&
											(l = navigator.userAgent
												.toLowerCase()
												.match(/firefox\/([\d\.]+)/)[1]) &&
											parseInt(l, 10) < 67 &&
											e.open("text/html", "replace"),
									  e.write(a),
									  e.close(),
									  G(e, o, i),
									  O.callBurl(v))
									: u
									? (((p = O.createInvisibleIframe()).height = i),
									  (p.width = o),
									  (p.style.display = "inline"),
									  (p.style.overflow = "hidden"),
									  (p.src = u),
									  O.insertElement(p, e, "body"),
									  G(e, o, i),
									  O.callBurl(v))
									: ((g =
											"Error trying to write ad. No ad for bid response id: ".concat(
												t
											)),
									  J({ reason: D, message: g, bid: v, id: t })))
							: ((b =
									"Error trying to write ad. Cannot find ad by given id : ".concat(
										t
									)),
							  J({ reason: P, message: b, id: t }));
					} catch (e) {
						var y = "Error trying to write ad Id :"
							.concat(t, " to the page:")
							.concat(e.message);
						J({ reason: N, message: y, id: t });
					}
				else {
					var h = "Error trying to write ad Id :".concat(
						t,
						" to the page. Missing document or adId"
					);
					J({ reason: M, message: h, id: t });
				}
			}),
			(A.removeAdUnit = function (e) {
				O.logInfo("Invoking pbjs.removeAdUnit", arguments),
					e
						? (O.isArray(e) ? e : [e]).forEach(function (e) {
								for (var t = A.adUnits.length - 1; 0 <= t; t--)
									A.adUnits[t].code === e && A.adUnits.splice(t, 1);
						  })
						: (A.adUnits = []);
			}),
			(A.requestBids = Object(c.b)("async", function () {
				var e =
						0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.bidsBackHandler,
					n = e.timeout,
					r = e.adUnits,
					i = e.adUnitCodes,
					o = e.labels,
					a = e.auctionId;
				I.emit(B);
				var c = n || l.b.getConfig("bidderTimeout"),
					r = (r && l.b.convertAdUnitFpd(O.isArray(r) ? r : [r])) || A.adUnits;
				O.logInfo("Invoking pbjs.requestBids", arguments);
				var u = [],
					s = [];
				if (
					(l.b.getConfig("s2sConfig", function (e) {
						e &&
							e.s2sConfig &&
							(u = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
					}),
					u.forEach(function (e) {
						s.push.apply(s, v(e.bidders));
					}),
					(r = H(r)),
					i && i.length
						? (r = r.filter(function (e) {
								return g()(i, e.code);
						  }))
						: (i =
								r &&
								r.map(function (e) {
									return e.code;
								})),
					r.forEach(function (i) {
						var o = Object.keys(i.mediaTypes || { banner: "banner" }),
							e = i.bids.map(function (e) {
								return e.bidder;
							}),
							a = T.bidderRegistry,
							t = s
								? e.filter(function (e) {
										return !g()(s, e);
								  })
								: e;
						(i.transactionId = O.generateUUID()),
							t.forEach(function (t) {
								var e = a[t],
									n = e && e.getSpec && e.getSpec(),
									r = (n && n.supportedMediaTypes) || ["banner"];
								o.some(function (e) {
									return g()(r, e);
								})
									? b.a.incrementBidderRequestsCounter(i.code, t)
									: (O.logWarn(O.unsupportedBidderMessage(i, t)),
									  (i.bids = i.bids.filter(function (e) {
											return e.bidder !== t;
									  })));
							}),
							b.a.incrementRequestsCounter(i.code);
					}),
					r && 0 !== r.length)
				) {
					var d = m.a.createAuction({
							adUnits: r,
							adUnitCodes: i,
							callback: t,
							cbTimeout: c,
							labels: o,
							auctionId: a,
						}),
						f = r.length;
					15 < f &&
						O.logInfo(
							"Current auction "
								.concat(d.getAuctionId(), " contains ")
								.concat(f, " adUnits."),
							r
						),
						i.forEach(function (e) {
							return p.d.setLatestAuctionForAdUnit(e, d.getAuctionId());
						}),
						d.callBids();
				} else if (
					(O.logMessage("No adUnits configured. No bids requested."),
					"function" == typeof t)
				)
					try {
						t();
					} catch (e) {
						O.logError("Error executing bidsBackHandler", null, e);
					}
			})),
			A.requestBids.before(Y, 49),
			(A.addAdUnits = function (e) {
				O.logInfo("Invoking pbjs.addAdUnits", arguments),
					A.adUnits.push.apply(
						A.adUnits,
						l.b.convertAdUnitFpd(O.isArray(e) ? e : [e])
					),
					I.emit(w);
			}),
			(A.onEvent = function (e, t, n) {
				O.logInfo("Invoking pbjs.onEvent", arguments),
					O.isFn(t)
						? !n || q[e].call(null, n)
							? I.on(e, t, n)
							: O.logError(
									'The id provided is not valid for event "' +
										e +
										'" and no handler was set.'
							  )
						: O.logError(
								'The event handler provided is not a function and was not set on event "' +
									e +
									'".'
						  );
			}),
			(A.offEvent = function (e, t, n) {
				O.logInfo("Invoking pbjs.offEvent", arguments),
					(n && !q[e].call(null, n)) || I.off(e, t, n);
			}),
			(A.getEvents = function () {
				return O.logInfo("Invoking pbjs.getEvents"), I.getEvents();
			}),
			(A.registerBidAdapter = function (e, t) {
				O.logInfo("Invoking pbjs.registerBidAdapter", arguments);
				try {
					T.registerBidAdapter(e(), t);
				} catch (e) {
					O.logError("Error registering bidder adapter : " + e.message);
				}
			}),
			(A.registerAnalyticsAdapter = function (e) {
				O.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
				try {
					T.registerAnalyticsAdapter(e);
				} catch (e) {
					O.logError("Error registering analytics adapter : " + e.message);
				}
			}),
			(A.createBid = function (e) {
				return O.logInfo("Invoking pbjs.createBid", arguments), Object(d.a)(e);
			});
		var Q = [],
			$ = Object(c.b)(
				"async",
				function (e) {
					e && !O.isEmpty(e)
						? (O.logInfo("Invoking pbjs.enableAnalytics for: ", e),
						  T.enableAnalytics(e))
						: O.logError(
								"pbjs.enableAnalytics should be called with option {}"
						  );
				},
				"enableAnalyticsCb"
			);
		function X(e) {
			e.forEach(function (e) {
				if (void 0 === e.called)
					try {
						e.call(), (e.called = !0);
					} catch (e) {
						O.logError("Error processing command :", "prebid.js", e);
					}
			});
		}
		(A.enableAnalytics = function (e) {
			Q.push($.bind(this, e));
		}),
			(A.aliasBidder = function (e, t, n) {
				O.logInfo("Invoking pbjs.aliasBidder", arguments),
					e && t
						? T.aliasBidAdapter(e, t, n)
						: O.logError(
								"bidderCode and alias must be passed as arguments",
								"pbjs.aliasBidder"
						  );
			}),
			(A.getAllWinningBids = function () {
				return m.a.getAllWinningBids();
			}),
			(A.getAllPrebidWinningBids = function () {
				return m.a.getBidsReceived().filter(function (e) {
					return e.status === E.BID_STATUS.BID_TARGETING_SET;
				});
			}),
			(A.getHighestCpmBids = function (e) {
				return p.d.getWinningBids(e);
			}),
			(A.markWinningBidAsUsed = function (t) {
				var e = [];
				t.adUnitCode && t.adId
					? (e = m.a.getBidsReceived().filter(function (e) {
							return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
					  }))
					: t.adUnitCode
					? (e = p.d.getWinningBids(t.adUnitCode))
					: t.adId
					? (e = m.a.getBidsReceived().filter(function (e) {
							return e.adId === t.adId;
					  }))
					: O.logWarn(
							"Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."
					  ),
					0 < e.length && (e[0].status = E.BID_STATUS.RENDERED);
			}),
			(A.getConfig = l.b.getConfig),
			(A.setConfig = l.b.setConfig),
			(A.setBidderConfig = l.b.setBidderConfig),
			A.que.push(function () {
				return Object(o.a)();
			}),
			(A.cmd.push = function (e) {
				if ("function" == typeof e)
					try {
						e.call();
					} catch (e) {
						O.logError("Error processing command :", e.message, e.stack);
					}
				else
					O.logError(
						"Commands written into pbjs.cmd.push must be wrapped in a function"
					);
			}),
			(A.que.push = A.cmd.push),
			(A.processQueue = function () {
				c.b.ready(), X(A.que), X(A.cmd);
			}),
			(t.default = A);
	},
	71: function (e, t, n) {
		var r = n(374);
		e.exports = r;
	},
	72: function (e, t, n) {
		"use strict";
		t.a = function (t, n) {
			(o.adServers = o.adServers || {}),
				(o.adServers[t] = o.adServers[t] || {}),
				Object.keys(n).forEach(function (e) {
					o.adServers[t][e]
						? Object(i.logWarn)(
								"Attempting to add an already registered function property "
									.concat(e, " for AdServer ")
									.concat(t, ".")
						  )
						: (o.adServers[t][e] = n[e]);
				});
		};
		var r = n(17),
			i = n(0),
			o = Object(r.a)();
	},
	73: function (e, t, n) {
		var r = n(31),
			i = n(48),
			o = "".split;
		e.exports = r(function () {
			return !Object("z").propertyIsEnumerable(0);
		})
			? function (e) {
					return "String" == i(e) ? o.call(e, "") : Object(e);
			  }
			: Object;
	},
	74: function (e, t, n) {
		var r = n(30),
			i = n(31),
			o = n(75);
		e.exports =
			!r &&
			!i(function () {
				return (
					7 !=
					Object.defineProperty(o("div"), "a", {
						get: function () {
							return 7;
						},
					}).a
				);
			});
	},
	75: function (e, t, n) {
		var r = n(26),
			i = n(27),
			o = r.document,
			a = i(o) && i(o.createElement);
		e.exports = function (e) {
			return a ? o.createElement(e) : {};
		};
	},
	76: function (e, t, n) {
		var r = n(16),
			i = n(77);
		(e.exports = function (e, t) {
			return i[e] || (i[e] = void 0 !== t ? t : {});
		})("versions", []).push({
			version: "3.6.4",
			mode: r ? "pure" : "global",
			copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
		});
	},
	77: function (e, t, n) {
		var r = n(26),
			i = n(105),
			o = "__core-js_shared__",
			a = r[o] || i(o, {});
		e.exports = a;
	},
	78: function (e, t, n) {
		var r = n(31);
		e.exports =
			!!Object.getOwnPropertySymbols &&
			!r(function () {
				return !String(Symbol());
			});
	},
	79: function (e, t, n) {
		function r(c) {
			return function (e, t, n) {
				var r,
					i = u(e),
					o = s(i.length),
					a = d(n, o);
				if (c && t != t) {
					for (; a < o; ) if ((r = i[a++]) != r) return !0;
				} else
					for (; a < o; a++)
						if ((c || a in i) && i[a] === t) return c || a || 0;
				return !c && -1;
			};
		}
		var u = n(47),
			s = n(50),
			d = n(109);
		e.exports = { includes: r(!0), indexOf: r(!1) };
	},
	8: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }),
			n.d(t, "gdprDataHandler", function () {
				return x;
			}),
			n.d(t, "uspDataHandler", function () {
				return U;
			}),
			n.d(t, "coppaDataHandler", function () {
				return R;
			}),
			n.d(t, "clientTestAdapters", function () {
				return k;
			}),
			n.d(t, "allS2SBidders", function () {
				return D;
			}),
			(t.getAllS2SBidders = N),
			(t.setS2STestingModule = function (e) {
				A = e;
			});
		var h = n(0),
			p = n(94),
			g = n(38),
			l = n(1),
			y = n(4),
			a = n(3),
			r = n(11),
			i = n(13),
			m = n.n(i),
			o = n(10),
			S = n.n(o),
			b = n(67),
			c = n(20);
		function u(e, t) {
			return (
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
				(function (e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
						return;
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (
							var a, c = e[Symbol.iterator]();
							!(r = (a = c.next()).done) &&
							(n.push(a.value), !t || n.length !== t);
							r = !0
						);
					} catch (e) {
						(i = !0), (o = e);
					} finally {
						try {
							r || null == c.return || c.return();
						} finally {
							if (i) throw o;
						}
					}
					return n;
				})(e, t) ||
				d(e, t) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				})()
			);
		}
		function s(e) {
			return (
				(function (e) {
					if (Array.isArray(e)) return f(e);
				})(e) ||
				(function (e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
						return Array.from(e);
				})(e) ||
				d(e) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				})()
			);
		}
		function d(e, t) {
			if (e) {
				if ("string" == typeof e) return f(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return (
					"Object" === n && e.constructor && (n = e.constructor.name),
					"Map" === n || "Set" === n
						? Array.from(e)
						: "Arguments" === n ||
						  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						? f(e, t)
						: void 0
				);
			}
		}
		function f(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		function v() {
			return (v =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		var A,
			E = n(0),
			O = n(5),
			T = n(9),
			I = {},
			j = (I.bidderRegistry = {}),
			C = (I.aliasRegistry = {}),
			w = [];
		a.b.getConfig("s2sConfig", function (e) {
			e &&
				e.s2sConfig &&
				(w = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
		});
		var _ = {};
		var B = Object(r.b)(
			"sync",
			function (e) {
				var i = e.bidderCode,
					s = e.auctionId,
					d = e.bidderRequestId,
					t = e.adUnits,
					f = e.labels,
					l = e.src;
				return t
					.reduce(function (e, c) {
						var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
							n = t.active,
							u = t.mediaTypes,
							r = t.filterResults;
						return (
							n
								? r &&
								  E.logInfo(
										'Size mapping filtered adUnit "'.concat(
											c.code,
											'" banner sizes from '
										),
										r.before,
										"to ",
										r.after
								  )
								: E.logInfo(
										'Size mapping disabled adUnit "'.concat(c.code, '"')
								  ),
							n &&
								e.push(
									c.bids
										.filter(function (e) {
											return e.bidder === i;
										})
										.reduce(function (e, t) {
											var n =
												c.nativeParams || E.deepAccess(c, "mediaTypes.native");
											n && (t = v({}, t, { nativeParams: Object(g.h)(n) })),
												(t = v(
													{},
													t,
													Object(h.getDefinedParams)(c, [
														"ortb2Imp",
														"mediaType",
														"renderer",
														"storedAuctionResponse",
													])
												));
											var r = Object(p.b)(Object(p.a)(t, f), u),
												i = r.active,
												o = r.mediaTypes,
												a = r.filterResults;
											return (
												i
													? a &&
													  E.logInfo(
															'Size mapping filtered adUnit "'
																.concat(c.code, '" bidder "')
																.concat(t.bidder, '" banner sizes from '),
															a.before,
															"to ",
															a.after
													  )
													: E.logInfo(
															'Size mapping deactivated adUnit "'
																.concat(c.code, '" bidder "')
																.concat(t.bidder, '"')
													  ),
												E.isValidMediaTypes(o)
													? (t = v({}, t, { mediaTypes: o }))
													: E.logError(
															"mediaTypes is not correctly configured for adunit ".concat(
																c.code
															)
													  ),
												i &&
													e.push(
														v({}, t, {
															adUnitCode: c.code,
															transactionId: c.transactionId,
															sizes:
																E.deepAccess(o, "banner.sizes") ||
																E.deepAccess(o, "video.playerSize") ||
																[],
															bidId: t.bid_id || E.getUniqueIdentifierStr(),
															bidderRequestId: d,
															auctionId: s,
															src: l,
															bidRequestsCount: b.a.getRequestsCounter(c.code),
															bidderRequestsCount: b.a.getBidderRequestsCounter(
																c.code,
																t.bidder
															),
															bidderWinsCount: b.a.getBidderWinsCounter(
																c.code,
																t.bidder
															),
														})
													),
												e
											);
										}, [])
								),
							e
						);
					}, [])
					.reduce(h.flatten, [])
					.filter(function (e) {
						return "" !== e;
					});
			},
			"getBids"
		);
		var x = {
				consentData: null,
				setConsentData: function (e) {
					x.consentData = e;
				},
				getConsentData: function () {
					return x.consentData;
				},
			},
			U = {
				consentData: null,
				setConsentData: function (e) {
					U.consentData = e;
				},
				getConsentData: function () {
					return U.consentData;
				},
			},
			R = {
				getCoppa: function () {
					return !!a.b.getConfig("coppa");
				},
			},
			k = [],
			D = [];
		function N() {
			(I.s2STestingEnabled = !1),
				w.forEach(function (e) {
					e &&
						e.enabled &&
						e.bidders &&
						e.bidders.length &&
						D.push.apply(D, s(e.bidders));
				});
		}
		function P(e) {
			return e && e.enabled && e.testing && A;
		}
		function M(t, n, e) {
			try {
				var r = j[t].getSpec();
				r &&
					r[n] &&
					"function" == typeof r[n] &&
					(E.logInfo("Invoking ".concat(t, ".").concat(n)),
					a.b.runWithBidder(t, h.bind.call(r[n], r, e)));
			} catch (e) {
				E.logWarn("Error calling ".concat(n, " of ").concat(t));
			}
		}
		(I.makeBidRequests = Object(r.b)(
			"sync",
			function (d, f, l, i, p) {
				T.emit(O.EVENTS.BEFORE_REQUEST_BIDS, d);
				var e = Object(h.getBidderCodes)(d);
				a.b.getConfig("bidderSequence") === a.a && (e = Object(h.shuffle)(e));
				var g = Object(c.a)(),
					b = e,
					v = [];
				0 === D.length && N(),
					w.forEach(function (e) {
						e &&
							e.enabled &&
							P(e) &&
							(A.calculateBidSources(e),
							A.getSourceBidderMap(d, D)[A.CLIENT].forEach(function (e) {
								m()(k, e) || k.push(e);
							}));
					}),
					(b = e.filter(function (e) {
						return !m()(D, e) || m()(k, e);
					}));
				var y = D;
				w.forEach(function (r) {
					var i, o, e, t, n, a, c, u, s;
					r &&
						r.enabled &&
						((s = r),
						Boolean(P(s) && s.testServerOnly) &&
							((c = d),
							(u = r),
							Boolean(
								S()(c, function (e) {
									return S()(e.bids, function (e) {
										return (
											(e.bidSource ||
												(u.bidderControl && u.bidderControl[e.bidder])) &&
											e.finalSource === A.SERVER
										);
									});
								})
							)) &&
							(E.logWarn(
								"testServerOnly: True.  All client requests will be suppressed."
							),
							(b.length = 0)),
						(e = d),
						(n = (t = r).bidders),
						(a = E.deepClone(e)).forEach(function (e) {
							e.bids = e.bids
								.filter(function (e) {
									return (
										m()(n, e.bidder) && (!P(t) || e.finalSource !== A.CLIENT)
									);
								})
								.map(function (e) {
									return (e.bid_id = E.getUniqueIdentifierStr()), e;
								});
						}),
						(i = a =
							a.filter(function (e) {
								return 0 !== e.bids.length;
							})),
						(o = E.generateUUID()),
						y.forEach(function (e) {
							var t = E.getUniqueIdentifierStr(),
								n = {
									bidderCode: e,
									auctionId: l,
									bidderRequestId: t,
									tid: o,
									bids: B({
										bidderCode: e,
										auctionId: l,
										bidderRequestId: t,
										adUnits: E.deepClone(i),
										labels: p,
										src: O.S2S.SRC,
									}),
									auctionStart: f,
									timeout: r.timeout,
									src: O.S2S.SRC,
									refererInfo: g,
								};
							0 !== n.bids.length && v.push(n);
						}),
						i.forEach(function (e) {
							var t = e.bids.filter(function (t) {
								return S()(v, function (e) {
									return S()(e.bids, function (e) {
										return e.bidId === t.bid_id;
									});
								});
							});
							e.bids = t;
						}),
						v.forEach(function (e) {
							void 0 === e.adUnitsS2SCopy &&
								(e.adUnitsS2SCopy = i.filter(function (e) {
									return 0 < e.bids.length;
								}));
						}));
				});
				var t,
					n,
					o =
						((t = d),
						(n = E.deepClone(t)).forEach(function (e) {
							e.bids = e.bids.filter(function (e) {
								return !k.length || e.finalSource !== A.SERVER;
							});
						}),
						(n = n.filter(function (e) {
							return 0 !== e.bids.length;
						})));
				return (
					b.forEach(function (e) {
						var t = E.getUniqueIdentifierStr(),
							n = {
								bidderCode: e,
								auctionId: l,
								bidderRequestId: t,
								bids: B({
									bidderCode: e,
									auctionId: l,
									bidderRequestId: t,
									adUnits: E.deepClone(o),
									labels: p,
									src: "client",
								}),
								auctionStart: f,
								timeout: i,
								refererInfo: g,
							},
							r = j[e];
						r ||
							E.logError(
								"Trying to make a request for bidder that does not exist: ".concat(
									e
								)
							),
							r && n.bids && 0 !== n.bids.length && v.push(n);
					}),
					x.getConsentData() &&
						v.forEach(function (e) {
							e.gdprConsent = x.getConsentData();
						}),
					U.getConsentData() &&
						v.forEach(function (e) {
							e.uspConsent = U.getConsentData();
						}),
					v
				);
			},
			"makeBidRequests"
		)),
			(I.callBids = function (e, t, d, f, l, p, i) {
				var n, r, g, b, v;
				t.length
					? ((r = (n = u(
							t.reduce(
								function (e, t) {
									return (
										e[Number(void 0 !== t.src && t.src === O.S2S.SRC)].push(t),
										e
									);
								},
								[[], []]
							),
							2
					  ))[0]),
					  (g = n[1]),
					  (b = []),
					  g.forEach(function (e) {
							for (var t = -1, n = 0; n < b.length; ++n)
								if (e.tid === b[n].tid) {
									t = n;
									break;
								}
							t <= -1 && b.push(e);
					  }),
					  (v = 0),
					  w.forEach(function (e) {
							var t, n, r, i, o, a, c, u, s;
							e &&
								b[v] &&
								m()(e.bidders, b[v].bidderCode) &&
								((t = Object(y.b)(
									p,
									l
										? { request: l.request.bind(null, "s2s"), done: l.done }
										: void 0
								)),
								(n = e.bidders),
								(r = j[e.adapter]),
								(i = b[v].tid),
								(o = b[v].adUnitsS2SCopy),
								(a = g.filter(function (e) {
									return e.tid === i;
								})),
								r
									? (c = { tid: i, ad_units: o, s2sConfig: e }).ad_units
											.length &&
									  ((u = a.map(function (e) {
											return (e.start = Object(h.timestamp)()), f.bind(e);
									  })),
									  (s = c.ad_units.reduce(function (e, t) {
											return e.concat(
												(t.bids || []).reduce(function (e, t) {
													return e.concat(t.bidder);
												}, [])
											);
									  }, [])),
									  E.logMessage(
											"CALLING S2S HEADER BIDDERS ==== ".concat(
												n
													.filter(function (e) {
														return m()(s, e);
													})
													.join(",")
											)
									  ),
									  a.forEach(function (e) {
											T.emit(O.EVENTS.BID_REQUESTED, e);
									  }),
									  r.callBids(
											c,
											g,
											function (e, t) {
												var n = Object(h.getBidderRequest)(g, t.bidderCode, e);
												n && d.call(n, e, t);
											},
											function () {
												return u.forEach(function (e) {
													return e();
												});
											},
											t
									  ))
									: E.logError("missing " + e.adapter),
								v++);
					  }),
					  r.forEach(function (t) {
							t.start = Object(h.timestamp)();
							var e = j[t.bidderCode];
							a.b.runWithBidder(t.bidderCode, function () {
								E.logMessage("CALLING BIDDER"),
									T.emit(O.EVENTS.BID_REQUESTED, t);
							});
							var n = Object(y.b)(
									p,
									l
										? {
												request: l.request.bind(null, t.bidderCode),
												done: l.done,
										  }
										: void 0
								),
								r = f.bind(t);
							try {
								a.b.runWithBidder(
									t.bidderCode,
									h.bind.call(
										e.callBids,
										e,
										t,
										d.bind(t),
										r,
										n,
										i,
										a.b.callbackWithBidder(t.bidderCode)
									)
								);
							} catch (e) {
								E.logError(
									"".concat(
										t.bidderCode,
										" Bid Adapter emitted an uncaught error when parsing their bidRequest"
									),
									{ e: e, bidRequest: t }
								),
									r();
							}
					  }))
					: E.logWarn(
							"callBids executed with no bidRequests.  Were they filtered by labels or sizing?"
					  );
			}),
			(I.videoAdapters = []),
			(I.registerBidAdapter = function (e, t) {
				var n = (
						2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
					).supportedMediaTypes,
					r = void 0 === n ? [] : n;
				e && t
					? "function" == typeof e.callBids
						? ((j[t] = e),
						  m()(r, "video") && I.videoAdapters.push(t),
						  m()(r, "native") && g.f.push(t))
						: E.logError(
								"Bidder adaptor error for bidder code: " +
									t +
									"bidder must implement a callBids() function"
						  )
					: E.logError("bidAdapter or bidderCode not specified");
			}),
			(I.aliasBidAdapter = function (n, r, e) {
				var t, i;
				if (void 0 === j[r]) {
					var o = j[n];
					if (void 0 === o) {
						var a = [];
						w.forEach(function (e) {
							var t;
							e.bidders &&
								e.bidders.length &&
								((t = e && e.bidders), e && m()(t, r) ? (C[r] = n) : a.push(n));
						}),
							a.forEach(function (e) {
								E.logError(
									'bidderCode "' + e + '" is not an existing bidder.',
									"adapterManager.aliasBidAdapter"
								);
							});
					} else
						try {
							var c,
								u,
								s,
								d,
								f =
									((t = n),
									(i = []),
									m()(I.videoAdapters, t) && i.push("video"),
									m()(g.f, t) && i.push("native"),
									i);
							o.constructor.prototype != Object.prototype
								? (d = new o.constructor()).setBidderCode(r)
								: ((c = o.getSpec()),
								  (u = e && e.gvlid),
								  (s = e && e.skipPbsAliasing),
								  (d = Object(l.newBidder)(
										v({}, c, { code: r, gvlid: u, skipPbsAliasing: s })
								  )),
								  (C[r] = n)),
								I.registerBidAdapter(d, r, { supportedMediaTypes: f });
						} catch (e) {
							E.logError(
								n + " bidder does not currently support aliasing.",
								"adapterManager.aliasBidAdapter"
							);
						}
				} else
					E.logMessage('alias name "' + r + '" has been already specified.');
			}),
			(I.registerAnalyticsAdapter = function (e) {
				var t = e.adapter,
					n = e.code,
					r = e.gvlid;
				t && n
					? "function" == typeof t.enableAnalytics
						? ((t.code = n), (_[n] = { adapter: t, gvlid: r }))
						: E.logError(
								'Prebid Error: Analytics adaptor error for analytics "'.concat(
									n,
									'"\n        analytics adapter must implement an enableAnalytics() function'
								)
						  )
					: E.logError(
							"Prebid Error: analyticsAdapter or analyticsCode not specified"
					  );
			}),
			(I.enableAnalytics = function (e) {
				E.isArray(e) || (e = [e]),
					E._each(e, function (e) {
						var t = _[e.provider].adapter;
						t
							? t.enableAnalytics(e)
							: E.logError(
									"Prebid Error: no analytics adapter found in registry for\n        ".concat(
										e.provider,
										"."
									)
							  );
					});
			}),
			(I.getBidAdapter = function (e) {
				return j[e];
			}),
			(I.getAnalyticsAdapter = function (e) {
				return _[e];
			}),
			(I.callTimedOutBidders = function (t, n, r) {
				(n = n.map(function (e) {
					return (
						(e.params = E.getUserConfiguredParams(t, e.adUnitCode, e.bidder)),
						(e.timeout = r),
						e
					);
				})),
					(n = E.groupBy(n, "bidder")),
					Object.keys(n).forEach(function (e) {
						M(e, "onTimeout", n[e]);
					});
			}),
			(I.callBidWonBidder = function (e, t, n) {
				(t.params = E.getUserConfiguredParams(n, t.adUnitCode, t.bidder)),
					b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder),
					M(e, "onBidWon", t);
			}),
			(I.callSetTargetingBidder = function (e, t) {
				M(e, "onSetTargeting", t);
			}),
			(I.callBidViewableBidder = function (e, t) {
				M(e, "onBidViewable", t);
			}),
			(t.default = I);
	},
	80: function (e, t, n) {
		var r = n(110);
		n(133),
			n(135),
			n(137),
			n(139),
			n(141),
			n(142),
			n(143),
			n(144),
			n(145),
			n(146),
			n(147),
			n(148),
			n(149),
			n(150),
			n(151),
			n(152),
			n(153),
			n(154),
			(e.exports = r);
	},
	81: function (e, t, n) {
		function r(e) {
			c(e, d, { value: { objectID: "O" + ++f, weakData: {} } });
		}
		var i = n(53),
			o = n(27),
			a = n(28),
			c = n(33).f,
			u = n(59),
			s = n(113),
			d = u("meta"),
			f = 0,
			l =
				Object.isExtensible ||
				function () {
					return !0;
				},
			p = (e.exports = {
				REQUIRED: !1,
				fastKey: function (e, t) {
					if (!o(e))
						return "symbol" == typeof e
							? e
							: ("string" == typeof e ? "S" : "P") + e;
					if (!a(e, d)) {
						if (!l(e)) return "F";
						if (!t) return "E";
						r(e);
					}
					return e[d].objectID;
				},
				getWeakData: function (e, t) {
					if (!a(e, d)) {
						if (!l(e)) return !0;
						if (!t) return !1;
						r(e);
					}
					return e[d].weakData;
				},
				onFreeze: function (e) {
					return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e;
				},
			});
		i[d] = !0;
	},
	82: function (e, t, n) {
		var r = n(22),
			i = n(40),
			o = r("iterator"),
			a = Array.prototype;
		e.exports = function (e) {
			return void 0 !== e && (i.Array === e || a[o] === e);
		};
	},
	83: function (e, t, n) {
		var o = n(15);
		e.exports = function (t, e, n, r) {
			try {
				return r ? e(o(n)[0], n[1]) : e(n);
			} catch (e) {
				var i = t.return;
				throw (void 0 !== i && o(i.call(t)), e);
			}
		};
	},
	84: function (e, t) {
		e.exports = function (e, t, n) {
			if (!(e instanceof t))
				throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
			return e;
		};
	},
	85: function (e, t, n) {
		function r() {}
		function i(e) {
			return "<script>" + e + "</" + g + ">";
		}
		var o,
			a = n(15),
			c = n(118),
			u = n(86),
			s = n(53),
			d = n(121),
			f = n(75),
			l = n(65),
			p = "prototype",
			g = "script",
			b = l("IE_PROTO"),
			v = function () {
				try {
					o = document.domain && new ActiveXObject("htmlfile");
				} catch (e) {}
				var e, t;
				v = o
					? (function (e) {
							e.write(i("")), e.close();
							var t = e.parentWindow.Object;
							return (e = null), t;
					  })(o)
					: (((t = f("iframe")).style.display = "none"),
					  d.appendChild(t),
					  (t.src = String("javascript:")),
					  (e = t.contentWindow.document).open(),
					  e.write(i("document.F=Object")),
					  e.close(),
					  e.F);
				for (var n = u.length; n--; ) delete v[p][u[n]];
				return v();
			};
		(s[b] = !0),
			(e.exports =
				Object.create ||
				function (e, t) {
					var n;
					return (
						null !== e
							? ((r[p] = a(e)), (n = new r()), (r[p] = null), (n[b] = e))
							: (n = v()),
						void 0 === t ? n : c(n, t)
					);
				});
	},
	86: function (e, t) {
		e.exports = [
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString",
			"toString",
			"valueOf",
		];
	},
	87: function (e, t, n) {
		var i = n(32);
		e.exports = function (e, t, n, r) {
			r && r.enumerable ? (e[t] = n) : i(e, t, n);
		};
	},
	88: function (e, t, n) {
		"use strict";
		var r,
			i,
			o,
			a = n(89),
			c = n(32),
			u = n(28),
			s = n(22),
			d = n(16),
			f = s("iterator"),
			l = !1;
		[].keys &&
			("next" in (o = [].keys())
				? (i = a(a(o))) !== Object.prototype && (r = i)
				: (l = !0)),
			null == r && (r = {}),
			d ||
				u(r, f) ||
				c(r, f, function () {
					return this;
				}),
			(e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: l });
	},
	89: function (e, t, n) {
		var r = n(28),
			i = n(57),
			o = n(65),
			a = n(124),
			c = o("IE_PROTO"),
			u = Object.prototype;
		e.exports = a
			? Object.getPrototypeOf
			: function (e) {
					return (
						(e = i(e)),
						r(e, c)
							? e[c]
							: "function" == typeof e.constructor && e instanceof e.constructor
							? e.constructor.prototype
							: e instanceof Object
							? u
							: null
					);
			  };
	},
	9: function (e, t, n) {
		function r() {
			return (r =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		var c,
			i,
			u = n(0),
			o = n(5),
			a = Array.prototype.slice,
			s = Array.prototype.push,
			d = u._map(o.EVENTS, function (e) {
				return e;
			}),
			f = o.EVENT_ID_PATHS,
			l = [];
		e.exports =
			((c = {}),
			((i = {}).on = function (e, t, n) {
				var r, i;
				(i = e),
					u.contains(d, i)
						? ((r = c[e] || { que: [] }),
						  n
								? ((r[n] = r[n] || { que: [] }), r[n].que.push(t))
								: r.que.push(t),
						  (c[e] = r))
						: u.logError(
								"Wrong event name : " + e + " Valid event names :" + d
						  );
			}),
			(i.emit = function (e) {
				!(function (e, t) {
					u.logMessage("Emitting event for: " + e);
					var n = t[0] || {},
						r = n[f[e]],
						i = c[e] || { que: [] },
						o = u._map(i, function (e, t) {
							return t;
						}),
						a = [];
					l.push({
						eventType: e,
						args: n,
						id: r,
						elapsedTime: u.getPerformanceNow(),
					}),
						r && u.contains(o, r) && s.apply(a, i[r].que),
						s.apply(a, i.que),
						u._each(a, function (e) {
							if (e)
								try {
									e.apply(null, t);
								} catch (e) {
									u.logError("Error executing handler:", "events.js", e);
								}
						});
				})(e, a.call(arguments, 1));
			}),
			(i.off = function (e, n, r) {
				var i = c[e];
				u.isEmpty(i) ||
					(u.isEmpty(i.que) && u.isEmpty(i[r])) ||
					(r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que))) ||
					(r
						? u._each(i[r].que, function (e) {
								var t = i[r].que;
								e === n && t.splice(t.indexOf(e), 1);
						  })
						: u._each(i.que, function (e) {
								var t = i.que;
								e === n && t.splice(t.indexOf(e), 1);
						  }),
					(c[e] = i));
			}),
			(i.get = function () {
				return c;
			}),
			(i.getEvents = function () {
				var n = [];
				return (
					u._each(l, function (e) {
						var t = r({}, e);
						n.push(t);
					}),
					n
				);
			}),
			i);
	},
	90: function (e, t, n) {
		"use strict";
		var i = n(129).charAt,
			r = n(54),
			o = n(66),
			a = "String Iterator",
			c = r.set,
			u = r.getterFor(a);
		o(
			String,
			"String",
			function (e) {
				c(this, { type: a, string: String(e), index: 0 });
			},
			function () {
				var e,
					t = u(this),
					n = t.string,
					r = t.index;
				return r >= n.length
					? { value: void 0, done: !0 }
					: ((e = i(n, r)), (t.index += e.length), { value: e, done: !1 });
			}
		);
	},
	91: function (e, t, n) {
		var r = n(15),
			i = n(61);
		e.exports = function (e) {
			var t = i(e);
			if ("function" != typeof t)
				throw TypeError(String(e) + " is not iterable");
			return r(t.call(e));
		};
	},
	92: function (e, t, n) {
		var r = n(155);
		e.exports = r;
	},
	93: function (e, t, n) {
		"use strict";
		t.a = function (e) {
			var t = e;
			return {
				callBids: function () {},
				setBidderCode: function (e) {
					t = e;
				},
				getBidderCode: function () {
					return t;
				},
			};
		};
	},
	94: function (e, t, n) {
		"use strict";
		(t.a = function (e, t) {
			if (e.labelAll)
				return { labelAll: !0, labels: e.labelAll, activeLabels: t };
			return { labelAll: !1, labels: e.labelAny, activeLabels: t };
		}),
			(t.c = function (e) {
				var t = v(
					1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b
				);
				return !t.shouldFilter || !!t.sizesSupported[e];
			}),
			(t.b = function () {
				var e =
						0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.labels,
					n = void 0 === t ? [] : t,
					r = e.labelAll,
					i = void 0 !== r && r,
					o = e.activeLabels,
					a = void 0 === o ? [] : o,
					c = 1 < arguments.length ? arguments[1] : void 0,
					u = 2 < arguments.length ? arguments[2] : void 0,
					s = v(
						3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b
					);
				c = Object(p.isPlainObject)(c)
					? Object(p.deepClone)(c)
					: u
					? { banner: { sizes: u } }
					: {};
				var d = Object(p.deepAccess)(c, "banner.sizes");
				s.shouldFilter &&
					d &&
					(c.banner.sizes = d.filter(function (e) {
						return s.sizesSupported[e];
					}));
				var f = Object.keys(c),
					l = {
						active:
							f.every(function (e) {
								return "banner" !== e;
							}) ||
							(f.some(function (e) {
								return "banner" === e;
							}) &&
								0 < Object(p.deepAccess)(c, "banner.sizes.length") &&
								(0 === n.length ||
									(!i &&
										(n.some(function (e) {
											return s.labels[e];
										}) ||
											n.some(function (e) {
												return g()(a, e);
											}))) ||
									(i &&
										n.reduce(function (e, t) {
											return e ? s.labels[t] || g()(a, t) : e;
										}, !0)))),
						mediaTypes: c,
					};
				d &&
					d.length !== c.banner.sizes.length &&
					(l.filterResults = { before: d, after: c.banner.sizes });
				return l;
			});
		var r = n(3),
			p = n(0),
			i = n(13),
			g = n.n(i);
		function o(e) {
			return (o =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  })(e);
		}
		var b = [];
		function v(e) {
			return e.reduce(
				function (n, r) {
					if ("object" === o(r) && "string" == typeof r.mediaQuery) {
						var t = !1;
						if ("" === r.mediaQuery) t = !0;
						else
							try {
								t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches;
							} catch (e) {
								Object(p.logWarn)(
									"Unfriendly iFrame blocks sizeConfig from being correctly evaluated"
								),
									(t = matchMedia(r.mediaQuery).matches);
							}
						t &&
							(Array.isArray(r.sizesSupported) && (n.shouldFilter = !0),
							["labels", "sizesSupported"].forEach(function (t) {
								return (r[t] || []).forEach(function (e) {
									return (n[t][e] = !0);
								});
							}));
					} else
						Object(p.logWarn)(
							'sizeConfig rule missing required property "mediaQuery"'
						);
					return n;
				},
				{ labels: {}, sizesSupported: {}, shouldFilter: !1 }
			);
		}
		r.b.getConfig("sizeConfig", function (e) {
			return (t = e.sizeConfig), void (b = t);
			var t;
		});
	},
	95: function (e, t, n) {
		"use strict";
		(t.b = function (e, t, n) {
			var r = { puts: e.map(c, n) };
			Object(i.a)(
				o.b.getConfig("cache.url"),
				(function (n) {
					return {
						success: function (e) {
							var t;
							try {
								t = JSON.parse(e).responses;
							} catch (e) {
								return void n(e, []);
							}
							t
								? n(null, t)
								: n(
										new Error(
											"The cache server didn't respond with a responses property."
										),
										[]
								  );
						},
						error: function (e, t) {
							n(
								new Error(
									"Error storing video ad in the cache: "
										.concat(e, ": ")
										.concat(JSON.stringify(t))
								),
								[]
							);
						},
					};
				})(t),
				JSON.stringify(r),
				{ contentType: "text/plain", withCredentials: !0 }
			);
		}),
			(t.a = function (e) {
				return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e);
			});
		var i = n(4),
			o = n(3),
			a = n(0);
		function c(e) {
			var t,
				n,
				r,
				i = {
					type: "xml",
					value: e.vastXml
						? e.vastXml
						: ((t = e.vastUrl),
						  (n = e.vastImpUrl),
						  (r = n ? "<![CDATA[".concat(n, "]]>") : ""),
						  '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
								.concat(t, "]]></VASTAdTagURI>\n        <Impression>")
								.concat(
									r,
									"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
								)),
					ttlseconds: Number(e.ttl),
				};
			return (
				o.b.getConfig("cache.vasttrack") &&
					((i.bidder = e.bidder),
					(i.bidid = e.requestId),
					a.isPlainObject(this) &&
						this.hasOwnProperty("auctionStart") &&
						(i.timestamp = this.auctionStart)),
				"string" == typeof e.customCacheKey &&
					"" !== e.customCacheKey &&
					(i.key = e.customCacheKey),
				i
			);
		}
	},
	98: function (e, t, n) {
		n(99);
		var r = n(52);
		e.exports = r("Array", "find");
	},
	99: function (e, t, n) {
		"use strict";
		var r = n(14),
			i = n(56).find,
			o = n(51),
			a = n(60),
			c = "find",
			u = !0,
			s = a(c);
		c in [] &&
			Array(1).find(function () {
				u = !1;
			}),
			r(
				{ target: "Array", proto: !0, forced: u || !s },
				{
					find: function (e, t) {
						return i(this, e, 1 < arguments.length ? t : void 0);
					},
				}
			),
			o(c);
	},
});
pbjsChunk(
	[189],
	{
		687: function (e, t, n) {
			e.exports = n(688);
		},
		688: function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				n.d(t, "USER_ID_CODE_TO_QUERY_ARG", function () {
					return l;
				}),
				n.d(t, "spec", function () {
					return h;
				});
			var o = n(3),
				r = n(1),
				c = n(0),
				u = n(2);
			function d(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
							return;
						var n = [],
							r = !0,
							a = !1,
							i = void 0;
						try {
							for (
								var d, s = e[Symbol.iterator]();
								!(r = (d = s.next()).done) &&
								(n.push(d.value), !t || n.length !== t);
								r = !0
							);
						} catch (e) {
							(a = !0), (i = e);
						} finally {
							try {
								r || null == s.return || s.return();
							} finally {
								if (a) throw i;
							}
						}
						return n;
					})(e, t) ||
					(function (e, t) {
						if (!e) return;
						if ("string" == typeof e) return a(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if (
							"Arguments" === n ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						)
							return a(e, t);
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function a(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			var i = [u.b, u.d],
				p = "hb_pb",
				m = "3.0.3",
				s = "USD",
				l = {
					britepoolid: "britepoolid",
					criteoId: "criteoid",
					fabrickId: "nuestarid",
					haloId: "audigentid",
					id5id: "id5id",
					idl_env: "lre",
					IDP: "zeotapid",
					idxId: "idxid",
					intentIqId: "intentiqid",
					lipb: "lipbid",
					lotamePanoramaId: "lotameid",
					merkleId: "merkleid",
					netId: "netid",
					parrableId: "parrableid",
					pubcid: "pubcid",
					quantcastId: "quantcastid",
					sharedId: "sharedid",
					tapadId: "tapadid",
					tdid: "ttduuid",
					verizonMediaId: "verizonmediaid",
				},
				h = {
					code: "openx",
					gvlid: 69,
					supportedMediaTypes: i,
					isBidRequestValid: function (e) {
						var t = e.params.delDomain || e.params.platform;
						return c.deepAccess(e, "mediaTypes.banner") && t
							? !!e.params.unit ||
									0 < c.deepAccess(e, "mediaTypes.banner.sizes.length")
							: !(!e.params.unit || !t);
					},
					buildRequests: function (e, r) {
						if (0 === e.length) return [];
						var a = [],
							t = d(
								e.reduce(
									function (e, t) {
										var n;
										return (
											(n = t),
											(c.deepAccess(n, "mediaTypes.video") &&
												!c.deepAccess(n, "mediaTypes.banner")) ||
											n.mediaType === u.d
												? e[0].push(t)
												: e[1].push(t),
											e
										);
									},
									[[], []]
								),
								2
							),
							n = t[0],
							i = t[1];
						return (
							0 < i.length &&
								a.push(
									(function (e, t) {
										var r = [],
											a = !1,
											n = f(e, t),
											i = c._map(e, function (e) {
												return e.params.unit;
											});
										(n.aus = c
											._map(e, function (e) {
												return c
													.parseSizesInput(e.mediaTypes.banner.sizes)
													.join(",");
											})
											.join("|")),
											(n.divIds = c
												._map(e, function (e) {
													return encodeURIComponent(e.adUnitCode);
												})
												.join(",")),
											i.some(function (e) {
												return e;
											}) && (n.auid = i.join(","));
										e.some(function (e) {
											return e.params.doNotTrack;
										}) && (n.ns = 1);
										(!0 !== o.b.getConfig("coppa") &&
											!e.some(function (e) {
												return e.params.coppa;
											})) ||
											(n.tfcd = 1);
										e.forEach(function (t) {
											var e, n;
											t.params.customParams
												? ((e = c._map(
														Object.keys(t.params.customParams),
														function (e) {
															return (function (e, t) {
																var n = t[e];
																c.isArray(n) && (n = n.join(","));
																return (e.toLowerCase() + "=" + n.toLowerCase())
																	.replace("+", ".")
																	.replace("/", "_");
															})(e, t.params.customParams);
														}
												  )),
												  (n = window.btoa(e.join("&"))),
												  (a = !0),
												  r.push(n))
												: r.push("");
										}),
											a && (n.tps = r.join(","));
										return (
											b(n, u.b, e),
											{
												method: "GET",
												url: n.ph
													? "https://u.openx.net/w/1.0/arj"
													: "https://".concat(
															e[0].params.delDomain,
															"/w/1.0/arj"
													  ),
												data: n,
												payload: { bids: e, startTime: new Date() },
											}
										);
									})(i, r)
								),
							0 < n.length &&
								n.forEach(function (e) {
									var t, n;
									a.push({
										method: "GET",
										url: (n = (function (e, t) {
											var n,
												r,
												a = f([e], t),
												i = c.deepAccess(e, "params.video") || {},
												d = c.deepAccess(e, "mediaTypes.video.context"),
												s = c.deepAccess(e, "mediaTypes.video.playerSize");
											c.isArray(e.sizes) &&
											2 === e.sizes.length &&
											!c.isArray(e.sizes[0])
												? ((n = parseInt(e.sizes[0], 10)),
												  (r = parseInt(e.sizes[1], 10)))
												: c.isArray(e.sizes) &&
												  c.isArray(e.sizes[0]) &&
												  2 === e.sizes[0].length
												? ((n = parseInt(e.sizes[0][0], 10)),
												  (r = parseInt(e.sizes[0][1], 10)))
												: c.isArray(s) &&
												  2 === s.length &&
												  ((n = parseInt(s[0], 10)), (r = parseInt(s[1], 10)));
											Object.keys(i).forEach(function (e) {
												"openrtb" === e
													? ((i[e].w = n || i[e].w),
													  (i[e].v = r || i[e].v),
													  (a[e] = JSON.stringify(i[e])))
													: e in a || "url" === e || (a[e] = i[e]);
											}),
												(a.auid = e.params.unit),
												(a.vwd = n || i.vwd),
												(a.vht = r || i.vht),
												"outstream" === d && (a.vos = "101");
											i.mimes && (a.vmimes = i.mimes);
											e.params.test && (a.vtest = 1);
											return b(a, u.d, [e]), a;
										})((t = e), r)).ph
											? "https://u.openx.net/v/1.0/avjp"
											: "https://".concat(t.params.delDomain, "/v/1.0/avjp"),
										data: n,
										payload: { bid: t, startTime: new Date() },
									});
								}),
							a
						);
					},
					interpretResponse: function (e, t) {
						var n = e.body;
						return (
							(/avjp$/.test(t.url) ? u.d : u.b) === u.d
								? function (e, t) {
										var n = t.bid,
											r = (t.startTime, []);
										{
											var a, i;
											void 0 !== e &&
												"" !== e.vastUrl &&
												0 < e.pub_rev &&
												((a = c.parseUrl(e.vastUrl).search || {}),
												((i = {}).requestId = n.bidId),
												e.deal_id && (i.dealId = e.deal_id),
												(i.ttl = 300),
												(i.netRevenue = !0),
												(i.currency = e.currency),
												(i.cpm = parseInt(e.pub_rev, 10) / 1e3),
												(i.width = parseInt(e.width, 10)),
												(i.height = parseInt(e.height, 10)),
												(i.creativeId = e.adid),
												(i.vastUrl = e.vastUrl),
												(i.mediaType = u.d),
												(e.ph = a.ph),
												(e.colo = a.colo),
												(e.ts = a.ts),
												r.push(i));
										}
										return r;
								  }
								: function (e, t) {
										for (
											var n = t.bids,
												r = (t.startTime, e.ads.ad),
												a = [],
												i = 0;
											i < r.length;
											i++
										) {
											var d,
												s = r[i],
												o = parseInt(s.idx, 10),
												c = {};
											(c.requestId = n[o].bidId),
												s.pub_rev &&
													((c.cpm = Number(s.pub_rev) / 1e3),
													(d = s.creative[0]) &&
														((c.width = d.width), (c.height = d.height)),
													(c.creativeId = d.id),
													(c.ad = s.html),
													s.deal_id && (c.dealId = s.deal_id),
													(c.ttl = 300),
													(c.netRevenue = !0),
													(c.currency = s.currency),
													s.tbd && (c.tbd = s.tbd),
													(c.ts = s.ts),
													(c.meta = {}),
													s.brand_id && (c.meta.brandId = s.brand_id),
													s.adomain && 0 < length(s.adomain)
														? (c.meta.advertiserDomains = s.adomain)
														: (c.meta.advertiserDomains = []),
													s.adv_id && (c.meta.dspid = s.adv_id),
													a.push(c));
										}
										return a;
								  }
						)(n, t.payload);
					},
					getUserSyncs: function (e, t, n, r) {
						if (e.iframeEnabled || e.pixelEnabled)
							return [
								{
									type: e.iframeEnabled ? "iframe" : "image",
									url:
										c.deepAccess(t, "0.body.ads.pixels") ||
										c.deepAccess(t, "0.body.pixels") ||
										(function (e, t) {
											var n = [];
											e &&
												(n.push("gdpr=" + (e.gdprApplies ? 1 : 0)),
												n.push(
													"gdpr_consent=" +
														encodeURIComponent(e.consentString || "")
												));
											t && n.push("us_privacy=" + encodeURIComponent(t));
											return ""
												.concat("https://u.openx.net/w/1.0/pd")
												.concat(0 < n.length ? "?" + n.join("&") : "");
										})(n, r),
								},
							];
					},
					transformBidParams: function (e) {
						return c.convertTypes({ unit: "string", customFloor: "number" }, e);
					},
				};
			function f(e, t) {
				var n,
					r,
					a,
					i,
					d = c.inIframe(),
					s = {
						ju: o.b.getConfig("pageUrl") || t.refererInfo.referer,
						ch: document.charSet || document.characterSet,
						res: ""
							.concat(screen.width, "x")
							.concat(screen.height, "x")
							.concat(screen.colorDepth),
						ifr: d,
						tz: new Date().getTimezoneOffset(),
						tws: (function (e) {
							var t,
								n,
								r,
								a = window,
								i = document,
								d = i.documentElement;
							if (e) {
								try {
									(a = window.top), (i = window.top.document);
								} catch (e) {
									return;
								}
								(d = i.documentElement),
									(r = i.body),
									(t = a.innerWidth || d.clientWidth || r.clientWidth),
									(n = a.innerHeight || d.clientHeight || r.clientHeight);
							} else
								(d = i.documentElement),
									(t = a.innerWidth || d.clientWidth),
									(n = a.innerHeight || d.clientHeight);
							return "".concat(t, "x").concat(n);
						})(d),
						be: 1,
						bc: e[0].params.bc || "".concat(p, "_").concat(m),
						dddid: c
							._map(e, function (e) {
								return e.transactionId;
							})
							.join(","),
						nocache: new Date().getTime(),
					};
				return (
					e[0].params.platform && (s.ph = e[0].params.platform),
					t.gdprConsent &&
						(void 0 !== (n = t.gdprConsent).consentString &&
							(s.gdpr_consent = n.consentString),
						void 0 !== n.gdprApplies && (s.gdpr = n.gdprApplies ? 1 : 0),
						"iab" === o.b.getConfig("consentManagement.cmpApi") &&
							(s.x_gdpr_f = 1)),
					t && t.uspConsent && (s.us_privacy = t.uspConsent),
					c.deepAccess(e[0], "crumbs.pubcid") &&
						c.deepSetValue(
							e[0],
							"userId.pubcid",
							c.deepAccess(e[0], "crumbs.pubcid")
						),
					(r = s),
					(a = e[0].userId),
					c._each(a, function (e, t) {
						var n = l[t];
						if (l.hasOwnProperty(t))
							switch (t) {
								case "lipb":
									r[n] = e.lipbid;
									break;
								case "parrableId":
									r[n] = e.eid;
									break;
								case "id5id":
									r[n] = e.uid;
									break;
								default:
									r[n] = e;
							}
					}),
					(s = r),
					e[0].schain &&
						(s.schain =
							((i = e[0].schain),
							""
								.concat(i.ver, ",")
								.concat(i.complete, "!")
								.concat(
									(function (e) {
										var n = ["asi", "sid", "hp", "rid", "name", "domain"];
										return e
											.map(function (t) {
												return n
													.map(function (e) {
														return t[e] || "";
													})
													.join(",");
											})
											.join("!");
									})(i.nodes)
								))),
					s
				);
			}
			function b(e, n, t) {
				var r = [],
					a = !1;
				t.forEach(function (e) {
					var t = (function (e, t) {
						var n = {},
							r = o.b.getConfig("currency.adServerCurrency") || s;
						"function" == typeof e.getFloor &&
							(n = e.getFloor({ currency: r, mediaType: t, size: "*" }));
						var a = n.floor || e.params.customFloor || 0;
						return Math.round(1e3 * a);
					})(e, n);
					t ? (r.push(t), (a = !0)) : r.push(0);
				}),
					a && (e.aumfs = r.join(","));
			}
			Object(r.registerBidder)(h);
		},
	},
	[687]
);
pbjsChunk(
	[143],
	{
		808: function (e, r, t) {
			e.exports = t(809);
		},
		809: function (e, r, t) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }),
				t.d(r, "spec", function () {
					return _;
				}),
				(r.hasVideoMediaType = I),
				t.d(r, "resetRubiConf", function () {
					return w;
				}),
				(r.masSizeOrdering = k),
				(r.determineRubiconVideoSizeId = R),
				(r.getPriceGranularity = z),
				(r.hasValidVideoParams = E),
				(r.hasValidSupplyChainParams = T),
				(r.encodeParam = U),
				(r.resetUserSync = function () {
					P = !1;
				});
			var l = t(0),
				n = t(1),
				u = t(3),
				m = t(2),
				i = t(10),
				p = t.n(i),
				a = t(12),
				f = t(17);
			function o(r, e) {
				var t,
					n = Object.keys(r);
				return (
					Object.getOwnPropertySymbols &&
						((t = Object.getOwnPropertySymbols(r)),
						e &&
							(t = t.filter(function (e) {
								return Object.getOwnPropertyDescriptor(r, e).enumerable;
							})),
						n.push.apply(n, t)),
					n
				);
			}
			function d(r) {
				for (var e = 1; e < arguments.length; e++) {
					var t = null != arguments[e] ? arguments[e] : {};
					e % 2
						? o(Object(t), !0).forEach(function (e) {
								v(r, e, t[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
						: o(Object(t)).forEach(function (e) {
								Object.defineProperty(
									r,
									e,
									Object.getOwnPropertyDescriptor(t, e)
								);
						  });
				}
				return r;
			}
			function g() {
				return (g =
					Object.assign ||
					function (e) {
						for (var r = 1; r < arguments.length; r++) {
							var t = arguments[r];
							for (var n in t)
								Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
						}
						return e;
					}).apply(this, arguments);
			}
			function b(e, r) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, r) {
						if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
							return;
						var t = [],
							n = !0,
							i = !1,
							o = void 0;
						try {
							for (
								var a, s = e[Symbol.iterator]();
								!(n = (a = s.next()).done) &&
								(t.push(a.value), !r || t.length !== r);
								n = !0
							);
						} catch (e) {
							(i = !0), (o = e);
						} finally {
							try {
								n || null == s.return || s.return();
							} finally {
								if (i) throw o;
							}
						}
						return t;
					})(e, r) ||
					(function (e, r) {
						if (!e) return;
						if ("string" == typeof e) return s(e, r);
						var t = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === t && e.constructor && (t = e.constructor.name);
						if ("Map" === t || "Set" === t) return Array.from(e);
						if (
							"Arguments" === t ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
						)
							return s(e, r);
					})(e, r) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function s(e, r) {
				(null == r || r > e.length) && (r = e.length);
				for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
				return n;
			}
			function v(e, r, t) {
				return (
					r in e
						? Object.defineProperty(e, r, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[r] = t),
					e
				);
			}
			function y(e) {
				return (y =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var x = {};
			u.b.getConfig("rubicon", function (e) {
				l.mergeDeep(x, e.rubicon);
			});
			var h = {
				1: "468x60",
				2: "728x90",
				5: "120x90",
				7: "125x125",
				8: "120x600",
				9: "160x600",
				10: "300x600",
				13: "200x200",
				14: "250x250",
				15: "300x250",
				16: "336x280",
				17: "240x400",
				19: "300x100",
				31: "980x120",
				32: "250x360",
				33: "180x500",
				35: "980x150",
				37: "468x400",
				38: "930x180",
				39: "750x100",
				40: "750x200",
				41: "750x300",
				42: "2x4",
				43: "320x50",
				44: "300x50",
				48: "300x300",
				53: "1024x768",
				54: "300x1050",
				55: "970x90",
				57: "970x250",
				58: "1000x90",
				59: "320x80",
				60: "320x150",
				61: "1000x1000",
				64: "580x500",
				65: "640x480",
				66: "930x600",
				67: "320x480",
				68: "1800x1000",
				72: "320x320",
				73: "320x160",
				78: "980x240",
				79: "980x300",
				80: "980x400",
				83: "480x300",
				85: "300x120",
				90: "548x150",
				94: "970x310",
				95: "970x100",
				96: "970x210",
				101: "480x320",
				102: "768x1024",
				103: "480x280",
				105: "250x800",
				108: "320x240",
				113: "1000x300",
				117: "320x100",
				125: "800x250",
				126: "200x600",
				144: "980x600",
				145: "980x150",
				152: "1000x250",
				156: "640x320",
				159: "320x250",
				179: "250x600",
				195: "600x300",
				198: "640x360",
				199: "640x200",
				213: "1030x590",
				214: "980x360",
				221: "1x1",
				229: "320x180",
				230: "2000x1400",
				232: "580x400",
				234: "6x6",
				251: "2x2",
				256: "480x820",
				257: "400x600",
				258: "500x200",
				259: "998x200",
				264: "970x1000",
				265: "1920x1080",
				274: "1800x200",
				278: "320x500",
				282: "320x400",
				288: "640x380",
				548: "500x1000",
				550: "980x480",
				552: "300x200",
				558: "640x640",
			};
			l._each(h, function (e, r) {
				return (h[e] = r);
			});
			var _ = {
				code: "rubicon",
				gvlid: 52,
				supportedMediaTypes: [m.b, m.d],
				isBidRequestValid: function (e) {
					if ("object" !== y(e.params)) return !1;
					for (
						var r = 0, t = ["accountId", "siteId", "zoneId"];
						r < t.length;
						r++
					)
						if (
							((e.params[t[r]] = parseInt(e.params[t[r]])),
							isNaN(e.params[t[r]]))
						)
							return (
								l.logError(
									"Rubicon: wrong format of accountId or siteId or zoneId."
								),
								!1
							);
					var n = O(e, !0);
					return !!n && ("video" !== n || E(e));
				},
				buildRequests: function (e, d) {
					var i,
						r = e
							.filter(function (e) {
								return "video" === O(e);
							})
							.map(function (e) {
								e.startTime = new Date().getTime();
								var r = {
									id: e.transactionId,
									test: u.b.getConfig("debug") ? 1 : 0,
									cur: ["USD"],
									source: { tid: e.transactionId },
									tmax: d.timeout,
									imp: [
										{
											exp: u.b.getConfig("s2sConfig.defaultTtl"),
											id: e.adUnitCode,
											secure: 1,
											ext: v({}, e.bidder, e.params),
											video: l.deepAccess(e, "mediaTypes.video") || {},
										},
									],
									ext: {
										prebid: {
											cache: {
												vastxml: { returnCreative: !0 === x.returnVast },
											},
											targeting: {
												includewinners: !0,
												includebidderkeys: !1,
												pricegranularity: z(u.b),
											},
											bidders: {
												rubicon: { integration: x.int_type || "pbjs" },
											},
										},
									},
								};
								"rubicon" !== e.bidder &&
									(r.ext.prebid.aliases = v({}, e.bidder, "rubicon"));
								var t,
									n,
									i,
									o = Object(f.a)().installedModules;
								if (
									(!o ||
										(o.length && -1 === o.indexOf("rubiconAnalyticsAdapter")) ||
										l.deepSetValue(r, "ext.prebid.analytics", {
											rubicon: { "client-analytics": !0 },
										}),
									"function" != typeof e.getFloor || x.disableFloors)
								)
									t = parseFloat(l.deepAccess(e, "params.floor"));
								else {
									try {
										n = e.getFloor({
											currency: "USD",
											mediaType: "video",
											size: S(e, "video"),
										});
									} catch (e) {
										l.logError("Rubicon: getFloor threw an error: ", e);
									}
									t =
										"object" !== y(n) ||
										"USD" !== n.currency ||
										isNaN(parseInt(n.floor))
											? void 0
											: parseFloat(n.floor);
								}
								isNaN(t) || (r.imp[0].bidfloor = t),
									(r.imp[0].ext[e.bidder].video.size_id = R(e)),
									(function (r, t, e) {
										if (!r) return;
										"object" === y(u.b.getConfig("app"))
											? (r.app = u.b.getConfig("app"))
											: (r.site = { page: A(t, e) });
										"object" === y(u.b.getConfig("device")) &&
											(r.device = u.b.getConfig("device"));
										t.params.video.language &&
											["site", "device"].forEach(function (e) {
												r[e] &&
													(r[e].content = g(
														{ language: t.params.video.language },
														r[e].content
													));
											});
									})(r, e, d),
									(function (e, r) {
										"object" === y(e.imp[0].video) &&
											void 0 === e.imp[0].video.skip &&
											(e.imp[0].video.skip = r.params.video.skip);
										"object" === y(e.imp[0].video) &&
											void 0 === e.imp[0].video.skipafter &&
											(e.imp[0].video.skipafter = r.params.video.skipdelay);
										"object" === y(e.imp[0].video) &&
											void 0 === e.imp[0].video.pos &&
											("atf" === r.params.position
												? (e.imp[0].video.pos = 1)
												: "btf" === r.params.position &&
												  (e.imp[0].video.pos = 3));
										var t = S(r, "video");
										(e.imp[0].video.w = t[0]), (e.imp[0].video.h = t[1]);
									})(r, e),
									d.gdprConsent &&
										("boolean" == typeof d.gdprConsent.gdprApplies &&
											(i = d.gdprConsent.gdprApplies ? 1 : 0),
										l.deepSetValue(r, "regs.ext.gdpr", i),
										l.deepSetValue(
											r,
											"user.ext.consent",
											d.gdprConsent.consentString
										)),
									d.uspConsent &&
										l.deepSetValue(r, "regs.ext.us_privacy", d.uspConsent);
								var a = l.deepAccess(d, "bids.0.userIdAsEids");
								a && a.length && l.deepSetValue(r, "user.ext.eids", a);
								var s = u.b.getConfig("user.id");
								s && l.deepSetValue(r, "user.id", s),
									!0 === u.b.getConfig("coppa") &&
										l.deepSetValue(r, "regs.coppa", 1),
									e.schain &&
										T(e.schain) &&
										l.deepSetValue(r, "source.ext.schain", e.schain);
								var c = u.b.getConfig("multibid");
								return (
									c &&
										l.deepSetValue(
											r,
											"ext.prebid.multibid",
											c.reduce(function (e, r) {
												var t = {};
												return (
													Object.keys(r).forEach(function (e) {
														t[e.toLowerCase()] = r[e];
													}),
													e.push(t),
													e
												);
											}, [])
										),
									C(e, m.d, r),
									e.storedAuctionResponse &&
										l.deepSetValue(
											r.imp[0],
											"ext.prebid.storedauctionresponse.id",
											e.storedAuctionResponse.toString()
										),
									l.deepSetValue(
										r.imp[0],
										"ext.prebid.auctiontimestamp",
										d.auctionStart
									),
									{
										method: "POST",
										url: "https://".concat(
											x.videoHost || "prebid-server",
											".rubiconproject.com/openrtb2/auction"
										),
										data: r,
										bidRequest: e,
									}
								);
							});
					return !0 !== x.singleRequest
						? r.concat(
								e
									.filter(function (e) {
										return "banner" === O(e);
									})
									.map(function (e) {
										var n = _.createSlotParams(e, d);
										return {
											method: "GET",
											url: "https://".concat(
												x.bannerHost || "fastlane",
												".rubiconproject.com/a/api/fastlane.json"
											),
											data:
												_.getOrderedParams(n).reduce(function (e, r) {
													var t = n[r];
													return (l.isStr(t) && "" !== t) || l.isNumber(t)
														? "".concat(e).concat(U(r, t), "&")
														: e;
												}, "") + "slots=1&rand=".concat(Math.random()),
											bidRequest: e,
										};
									})
						  )
						: ((i = e
								.filter(function (e) {
									return "banner" === O(e);
								})
								.reduce(function (e, r) {
									return (
										(e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
									);
								}, {})),
						  r.concat(
								Object.keys(i).reduce(function (r, e) {
									var t, n;
									return (
										(t = i[e]),
										(n = 10),
										t
											.map(function (e, r) {
												return r % n == 0 ? t.slice(r, r + n) : null;
											})
											.filter(function (e) {
												return e;
											})
											.forEach(function (e) {
												var n = _.combineSlotUrlParams(
													e.map(function (e) {
														return _.createSlotParams(e, d);
													})
												);
												r.push({
													method: "GET",
													url: "https://".concat(
														x.bannerHost || "fastlane",
														".rubiconproject.com/a/api/fastlane.json"
													),
													data:
														_.getOrderedParams(n).reduce(function (e, r) {
															var t = n[r];
															return (l.isStr(t) && "" !== t) || l.isNumber(t)
																? "".concat(e).concat(U(r, t), "&")
																: e;
														}, "") +
														"slots="
															.concat(e.length, "&rand=")
															.concat(Math.random()),
													bidRequest: e,
												});
											}),
										r
									);
								}, [])
						  ));
				},
				getOrderedParams: function (e) {
					var r = /^tg_v/,
						t = /^tg_i/,
						n = /^eid_|^tpid_/,
						i = [
							"account_id",
							"site_id",
							"zone_id",
							"size_id",
							"alt_size_ids",
							"p_pos",
							"gdpr",
							"gdpr_consent",
							"us_privacy",
							"rp_schain",
						]
							.concat(
								Object.keys(e).filter(function (e) {
									return n.test(e);
								})
							)
							.concat([
								"x_liverampidl",
								"ppuid",
								"rf",
								"p_geo.latitude",
								"p_geo.longitude",
								"kw",
							])
							.concat(
								Object.keys(e).filter(function (e) {
									return r.test(e);
								})
							)
							.concat(
								Object.keys(e).filter(function (e) {
									return t.test(e);
								})
							)
							.concat([
								"tk_flint",
								"x_source.tid",
								"x_source.pchain",
								"p_screen_res",
								"rp_floor",
								"rp_secure",
								"tk_user_key",
							]);
					return i.concat(
						Object.keys(e).filter(function (e) {
							return -1 === i.indexOf(e);
						})
					);
				},
				combineSlotUrlParams: function (i) {
					if (1 === i.length) return i[0];
					var n = i.reduce(function (r, t, n) {
							return (
								Object.keys(t).forEach(function (e) {
									r.hasOwnProperty(e) || (r[e] = new Array(i.length)),
										r[e].splice(n, 1, t[e]);
								}),
								r
							);
						}, {}),
						o = new RegExp("^([^;]*)(;\\1)+$");
					return (
						Object.keys(n).forEach(function (e) {
							var r = n[e].join(";"),
								t = r.match(o);
							n[e] = t ? t[1] : r;
						}),
						n
					);
				},
				createSlotParams: function (e, r) {
					e.startTime = new Date().getTime();
					var t,
						n = e.params,
						i = S(e, "banner"),
						o = b(n.latLong || [], 2),
						a = o[0],
						s = o[1],
						c = {
							account_id: n.accountId,
							site_id: n.siteId,
							zone_id: n.zoneId,
							size_id: i[0],
							alt_size_ids: i.slice(1).join(",") || void 0,
							rp_floor:
								0.01 <= (n.floor = parseFloat(n.floor)) ? n.floor : void 0,
							rp_secure: "1",
							tk_flint: "".concat(x.int_type || "pbjs_lite", "_v4.38.0"),
							"x_source.tid": e.transactionId,
							"x_source.pchain": n.pchain,
							p_screen_res: [window.screen.width, window.screen.height].join(
								"x"
							),
							tk_user_key: n.userId,
							"p_geo.latitude": isNaN(parseFloat(a))
								? void 0
								: parseFloat(a).toFixed(4),
							"p_geo.longitude": isNaN(parseFloat(s))
								? void 0
								: parseFloat(s).toFixed(4),
							"tg_fl.eid": e.code,
							rf: A(e, r),
						};
					if ("function" == typeof e.getFloor && !x.disableFloors) {
						try {
							t = e.getFloor({
								currency: "USD",
								mediaType: "banner",
								size: "*",
							});
						} catch (e) {
							l.logError("Rubicon: getFloor threw an error: ", e);
						}
						c.rp_hard_floor =
							"object" !== y(t) ||
							"USD" !== t.currency ||
							isNaN(parseInt(t.floor))
								? void 0
								: t.floor;
					}
					c.p_pos =
						"atf" === n.position || "btf" === n.position ? n.position : "";
					var d = u.b.getConfig("user.id");
					return (
						d && (c.ppuid = d),
						e.userIdAsEids &&
							e.userIdAsEids.forEach(function (r) {
								try {
									var e;
									"adserver.org" === r.source
										? ((c.tpid_tdid = r.uids[0].id),
										  (c["eid_adserver.org"] = r.uids[0].id))
										: "liveintent.com" === r.source
										? ((c["tpid_liveintent.com"] = r.uids[0].id),
										  (c["eid_liveintent.com"] = r.uids[0].id),
										  r.ext &&
												Array.isArray(r.ext.segments) &&
												r.ext.segments.length &&
												(c["tg_v.LIseg"] = r.ext.segments.join(",")))
										: "liveramp.com" === r.source
										? (c.x_liverampidl = r.uids[0].id)
										: "sharedid.org" === r.source
										? (c["eid_sharedid.org"] = ""
												.concat(r.uids[0].id, "^")
												.concat(r.uids[0].atype, "^")
												.concat((r.uids[0].ext && r.uids[0].ext.third) || ""))
										: "id5-sync.com" === r.source
										? (c["eid_id5-sync.com"] = ""
												.concat(r.uids[0].id, "^")
												.concat(r.uids[0].atype, "^")
												.concat(
													(r.uids[0].ext && r.uids[0].ext.linkType) || ""
												))
										: (c["eid_".concat(r.source)] = ""
												.concat(r.uids[0].id, "^")
												.concat(r.uids[0].atype || "")),
										c.ppuid ||
											((e = p()(r.uids, function (e) {
												return e.ext && "ppuid" === e.ext.stype;
											})) &&
												e.id &&
												(c.ppuid = e.id));
								} catch (e) {
									l.logWarn("Rubicon: error reading eid:", r, e);
								}
							}),
						r.gdprConsent &&
							("boolean" == typeof r.gdprConsent.gdprApplies &&
								(c.gdpr = Number(r.gdprConsent.gdprApplies)),
							(c.gdpr_consent = r.gdprConsent.consentString)),
						r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent)),
						(c.rp_maxbids = r.bidLimit || 1),
						C(e, m.b, c),
						!0 === u.b.getConfig("coppa") && (c.coppa = 1),
						e.schain &&
							T(e.schain) &&
							(c.rp_schain = _.serializeSupplyChain(e.schain)),
						c
					);
				},
				serializeSupplyChain: function (e) {
					if (!T(e)) return "";
					var r = e.ver,
						t = e.complete,
						n = e.nodes;
					return ""
						.concat(r, ",")
						.concat(t, "!")
						.concat(_.serializeSupplyChainNodes(n));
				},
				serializeSupplyChainNodes: function (e) {
					var t = ["asi", "sid", "hp", "rid", "name", "domain"];
					return e
						.map(function (r) {
							return t
								.map(function (e) {
									return encodeURIComponent(r[e] || "");
								})
								.join(",");
						})
						.join("!");
				},
				interpretResponse: function (c, e) {
					var d = e.bidRequest;
					if (!(c = c.body) || "object" !== y(c)) return [];
					if (c.seatbid) {
						var r = l.deepAccess(c, "ext.errors.rubicon");
						Array.isArray(r) &&
							0 < r.length &&
							l.logWarn("Rubicon: Error in video response");
						var o = [];
						return (
							c.seatbid.forEach(function (i) {
								(i.bid || []).forEach(function (e) {
									var r = {
										requestId: d.bidId,
										currency: c.cur || "USD",
										creativeId: e.crid,
										cpm: e.price || 0,
										bidderCode: i.seat,
										ttl: 300,
										netRevenue: !1 !== x.netRevenue,
										width:
											e.w ||
											l.deepAccess(d, "mediaTypes.video.w") ||
											l.deepAccess(d, "params.video.playerWidth"),
										height:
											e.h ||
											l.deepAccess(d, "mediaTypes.video.h") ||
											l.deepAccess(d, "params.video.playerHeight"),
									};
									e.id && (r.seatBidId = e.id),
										e.dealid && (r.dealId = e.dealid),
										e.adomain &&
											l.deepSetValue(
												r,
												"meta.advertiserDomains",
												Array.isArray(e.adomain) ? e.adomain : [e.adomain]
											),
										l.deepAccess(e, "ext.bidder.rp.advid") &&
											l.deepSetValue(
												r,
												"meta.advertiserId",
												e.ext.bidder.rp.advid
											);
									var t,
										n = l.deepAccess(c, "ext.responsetimemillis.rubicon");
									d && n && (d.serverResponseTimeMs = n),
										l.deepAccess(e, "ext.prebid.type") === m.d
											? ((r.mediaType = m.d),
											  l.deepSetValue(r, "meta.mediaType", m.d),
											  (t = l.deepAccess(e, "ext.prebid.targeting")) &&
													"object" === y(t) &&
													(r.adserverTargeting = t),
											  e.ext.prebid.cache &&
											  "object" === y(e.ext.prebid.cache.vastXml) &&
											  e.ext.prebid.cache.vastXml.cacheId &&
											  e.ext.prebid.cache.vastXml.url
													? ((r.videoCacheKey =
															e.ext.prebid.cache.vastXml.cacheId),
													  (r.vastUrl = e.ext.prebid.cache.vastXml.url))
													: t &&
													  t.hb_uuid &&
													  t.hb_cache_host &&
													  t.hb_cache_path &&
													  ((r.videoCacheKey = t.hb_uuid),
													  (r.vastUrl = "https://"
															.concat(t.hb_cache_host)
															.concat(t.hb_cache_path, "?uuid=")
															.concat(t.hb_uuid))),
											  e.adm && (r.vastXml = e.adm),
											  e.nurl && (r.vastUrl = e.nurl),
											  !r.vastUrl && e.nurl && (r.vastUrl = e.nurl),
											  "outstream" ===
													l
														.deepAccess(d, "mediaTypes.video.context")
														.toLowerCase() &&
													(r.renderer = (function (e) {
														var r = a.a.install({
															id: e.adId,
															url:
																x.rendererUrl ||
																"https://video-outstream.rubiconproject.com/apex-2.0.0.js",
															config: x.rendererConfig || {},
															loaded: !1,
															adUnitCode: e.adUnitCode,
														});
														try {
															r.setRender(j);
														} catch (e) {
															l.logWarn(
																"Prebid Error calling setRender on renderer",
																e
															);
														}
														return r;
													})(r)))
											: l.logWarn(
													"Rubicon: video response received non-video media type"
											  ),
										o.push(r);
								});
							}),
							o
						);
					}
					var u,
						t = c.ads,
						p = 0;
					return (
						"object" !== y(d) ||
							Array.isArray(d) ||
							"video" !== O(d) ||
							"object" !== y(t) ||
							(t = t[d.adUnitCode]),
						!Array.isArray(t) || t.length < 1
							? []
							: t
									.reduce(function (e, r, t) {
										if (
											(r.impression_id && u === r.impression_id
												? p++
												: (u = r.impression_id),
											"ok" !== r.status)
										)
											return e;
										var n,
											i,
											o,
											a,
											s = Array.isArray(d) ? d[t - p] : d;
										return (
											s && "object" === y(s)
												? ((n = {
														requestId: s.bidId,
														currency: "USD",
														creativeId:
															r.creative_id ||
															""
																.concat(r.network || "", "-")
																.concat(r.advertiser || ""),
														cpm: r.cpm || 0,
														dealId: r.deal,
														ttl: 300,
														netRevenue: !1 !== x.netRevenue,
														rubicon: {
															advertiserId: r.advertiser,
															networkId: r.network,
														},
														meta: {
															advertiserId: r.advertiser,
															networkId: r.network,
															mediaType: m.b,
														},
												  }),
												  r.creative_type && (n.mediaType = r.creative_type),
												  r.adomain &&
														(n.meta.advertiserDomains = Array.isArray(r.adomain)
															? r.adomain
															: [r.adomain]),
												  r.creative_type === m.d
														? ((n.width = s.params.video.playerWidth),
														  (n.height = s.params.video.playerHeight),
														  (n.vastUrl = r.creative_depot_url),
														  (n.impression_id = r.impression_id),
														  (n.videoCacheKey = r.impression_id))
														: ((n.ad =
																((o = r.script),
																(a = r.impression_id),
																"<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"
																	.concat(
																		a,
																		"'>\n<script type='text/javascript'>"
																	)
																	.concat(
																		o,
																		"</script>\n</div>\n</body>\n</html>"
																	))),
														  (i = b(
																h[r.size_id].split("x").map(function (e) {
																	return Number(e);
																}),
																2
														  )),
														  (n.width = i[0]),
														  (n.height = i[1])),
												  (n.rubiconTargeting = (
														Array.isArray(r.targeting) ? r.targeting : []
												  ).reduce(
														function (e, r) {
															return (e[r.key] = r.values[0]), e;
														},
														{ rpfl_elemid: s.adUnitCode }
												  )),
												  e.push(n))
												: l.logError(
														"Rubicon: bidRequest undefined at index position:".concat(
															t
														),
														d,
														c
												  ),
											e
										);
									}, [])
									.sort(function (e, r) {
										return (r.cpm || 0) - (e.cpm || 0);
									})
					);
				},
				getUserSyncs: function (e, r, t, n) {
					if (!P && e.iframeEnabled) {
						var i = "";
						return (
							t &&
								"string" == typeof t.consentString &&
								("boolean" == typeof t.gdprApplies
									? (i += "?gdpr="
											.concat(Number(t.gdprApplies), "&gdpr_consent=")
											.concat(t.consentString))
									: (i += "?gdpr_consent=".concat(t.consentString))),
							n &&
								(i += ""
									.concat(i ? "&" : "?", "us_privacy=")
									.concat(encodeURIComponent(n))),
							(P = !0),
							{
								type: "iframe",
								url:
									"https://".concat(
										x.syncHost || "eus",
										".rubiconproject.com/usync.html"
									) + i,
							}
						);
					}
				},
				transformBidParams: function (e) {
					return l.convertTypes(
						{ accountId: "number", siteId: "number", zoneId: "number" },
						e
					);
				},
			};
			function A(e, r) {
				var t = u.b.getConfig("pageUrl"),
					t = e.params.referrer
						? e.params.referrer
						: t || r.refererInfo.referer;
				return e.params.secure ? t.replace(/^http:/i, "https:") : t;
			}
			function j(e) {
				var r,
					t,
					n,
					i = document.getElementById(e.adUnitCode);
				(r = i.querySelector("div[id^='google_ads']")) &&
					r.style.setProperty("display", "none"),
					(t = i.querySelector("script[id^='sas_script']")),
					(n = t && t.nextSibling) &&
						"iframe" === n.localName &&
						n.style.setProperty("display", "none");
				var o = e.renderer.getConfig();
				e.renderer.push(function () {
					window.MagniteApex.renderAd({
						width: e.width,
						height: e.height,
						vastUrl: e.vastUrl,
						placement: {
							attachTo: "#".concat(e.adUnitCode),
							align: o.align || "center",
							position: o.position || "append",
						},
						closeButton: o.closeButton || !1,
						label: o.label || void 0,
						collapse: o.collapse || !0,
					});
				});
			}
			function S(e, r) {
				var t = e.params;
				if ("video" === r) {
					var n = [];
					return (
						t.video && t.video.playerWidth && t.video.playerHeight
							? (n = [t.video.playerWidth, t.video.playerHeight])
							: Array.isArray(l.deepAccess(e, "mediaTypes.video.playerSize")) &&
							  1 === e.mediaTypes.video.playerSize.length
							? (n = e.mediaTypes.video.playerSize[0])
							: Array.isArray(e.sizes) &&
							  0 < e.sizes.length &&
							  Array.isArray(e.sizes[0]) &&
							  1 < e.sizes[0].length &&
							  (n = e.sizes[0]),
						n
					);
				}
				var i = [];
				return (
					Array.isArray(t.sizes)
						? (i = t.sizes)
						: void 0 !== l.deepAccess(e, "mediaTypes.banner.sizes")
						? (i = c(e.mediaTypes.banner.sizes))
						: Array.isArray(e.sizes) && 0 < e.sizes.length
						? (i = c(e.sizes))
						: l.logWarn("Rubicon: no sizes are setup or found"),
					k(i)
				);
			}
			function C(e, r, s) {
				var t = {
					user: { ext: { data: d({}, e.params.visitor) } },
					site: { ext: { data: d({}, e.params.inventory) } },
				};
				e.params.keywords &&
					(t.site.keywords = l.isArray(e.params.keywords)
						? e.params.keywords.join(",")
						: e.params.keywords);
				function n(e, r, t, n) {
					var i = !(3 < arguments.length && void 0 !== n) || n,
						o = (function (e, r) {
							if ("data" === r && Array.isArray(e))
								return e
									.filter(function (e) {
										return (
											e.segment &&
											l.deepAccess(e, "ext.taxonomyname") &&
											l.deepAccess(e, "ext.taxonomyname").match(/iab/i)
										);
									})
									.map(function (e) {
										var r = e.segment
											.filter(function (e) {
												return e.id;
											})
											.reduce(function (e, r) {
												return e.push(r.id), e;
											}, []);
										if (0 < r.length) return r.toString();
									})
									.toString();
							if ("object" !== y(e) || Array.isArray(e)) {
								if (void 0 !== e)
									return Array.isArray(e)
										? e
												.filter(function (e) {
													return "object" !== y(e) && void 0 !== e
														? e.toString()
														: void l.logWarn(
																"Rubicon: Filtered value: ",
																e,
																"for key",
																r,
																": Expected value to be string, integer, or an array of strings/ints"
														  );
												})
												.toString()
										: e.toString();
							} else
								l.logWarn(
									"Rubicon: Filtered FPD key: ",
									r,
									": Expected value to be string, integer, or an array of strings/ints"
								);
						})(e, t),
						a =
							c[t] && i
								? "".concat(c[t])
								: "data" === t
								? "".concat(c[r], "iab")
								: "".concat(c[r]).concat(t);
					s[a] = s[a] ? s[a].concat(",", o) : o;
				}
				var i = l.mergeDeep({}, u.b.getConfig("ortb2") || {}, t),
					o = l.deepAccess(e.ortb2Imp, "ext.data") || {},
					c = {
						user: "tg_v.",
						site: "tg_i.",
						adserver: "tg_i.dfp_ad_unit_code",
						pbadslot: "tg_i.pbadslot",
						keywords: "kw",
					};
				Object.keys(o).forEach(function (r) {
					"adserver" === r
						? ["name", "adslot"].forEach(function (e) {
								o[r][e] && (o[r][e] = o[r][e].toString().replace(/^\/+/, ""));
						  })
						: "pbadslot" === r && (o[r] = o[r].toString().replace(/^\/+/, ""));
				}),
					r === m.b
						? (["site", "user"].forEach(function (r) {
								Object.keys(i[r]).forEach(function (e) {
									"ext" !== e
										? n(i[r][e], r, e)
										: i[r][e].data &&
										  Object.keys(i[r].ext.data).forEach(function (e) {
												n(i[r].ext.data[e], r, e, !1);
										  });
								});
						  }),
						  Object.keys(o).forEach(function (e) {
								"adserver" === e ? n(o[e].adslot, name, e) : n(o[e], "site", e);
						  }))
						: (Object.keys(o).length && l.mergeDeep(s.imp[0].ext, { data: o }),
						  l.mergeDeep(s, i));
			}
			function c(e) {
				return l.parseSizesInput(e).reduce(function (e, r) {
					var t = parseInt(h[r], 10);
					return t && e.push(t), e;
				}, []);
			}
			function I(e) {
				return (
					"object" === y(l.deepAccess(e, "params.video")) &&
					void 0 !== l.deepAccess(e, "mediaTypes.".concat(m.d))
				);
			}
			function O(e, r) {
				var t = 1 < arguments.length && void 0 !== r && r;
				return I(e)
					? -1 ===
					  ["outstream", "instream"].indexOf(
							l.deepAccess(e, "mediaTypes.".concat(m.d, ".context"))
					  )
						? void (
								t &&
								l.logError(
									"Rubicon: mediaTypes.video.context must be outstream or instream"
								)
						  )
						: S(e, "video").length < 2
						? void (
								t &&
								l.logError(
									"Rubicon: could not determine the playerSize of the video"
								)
						  )
						: (t &&
								l.logMessage(
									"Rubicon: making video request for adUnit",
									e.adUnitCode
								),
						  "video")
					: 0 === S(e, "banner").length
					? void (
							t &&
							l.logError(
								"Rubicon: could not determine the sizes for banner request"
							)
					  )
					: (t &&
							l.logMessage(
								"Rubicon: making banner request for adUnit",
								e.adUnitCode
							),
					  "banner");
			}
			var w = function () {
				return (x = {});
			};
			function k(e) {
				var i = [15, 2, 9];
				return e.sort(function (e, r) {
					var t = i.indexOf(e),
						n = i.indexOf(r);
					return -1 < t || -1 < n
						? -1 === t
							? 1
							: -1 === n
							? -1
							: t - n
						: e - r;
				});
			}
			function R(e) {
				var r = parseInt(l.deepAccess(e, "params.video.size_id"));
				return isNaN(r)
					? "outstream" ===
					  l.deepAccess(e, "mediaTypes.".concat(m.d, ".context"))
						? 203
						: 201
					: r;
			}
			function z(e) {
				return {
					ranges: {
						low: [{ max: 5, increment: 0.5 }],
						medium: [{ max: 20, increment: 0.1 }],
						high: [{ max: 20, increment: 0.01 }],
						auto: [
							{ max: 5, increment: 0.05 },
							{ min: 5, max: 10, increment: 0.1 },
							{ min: 10, max: 20, increment: 0.5 },
						],
						dense: [
							{ max: 3, increment: 0.01 },
							{ min: 3, max: 8, increment: 0.05 },
							{ min: 8, max: 20, increment: 0.5 },
						],
						custom:
							e.getConfig("customPriceBucket") &&
							e.getConfig("customPriceBucket").buckets,
					}[e.getConfig("priceGranularity")],
				};
			}
			function E(r) {
				var t = !0,
					e = Object.prototype.toString.call([]),
					n = {
						mimes: e,
						protocols: e,
						linearity: Object.prototype.toString.call(0),
						api: e,
					};
				return (
					Object.keys(n).forEach(function (e) {
						Object.prototype.toString.call(
							l.deepAccess(r, "mediaTypes.video." + e)
						) !== n[e] &&
							((t = !1),
							l.logError(
								"Rubicon: mediaTypes.video." +
									e +
									" is required and must be of type: " +
									n[e]
							));
					}),
					t
				);
			}
			function T(e) {
				var r = !1,
					t = ["asi", "sid", "hp"];
				return (
					e.nodes &&
						((r = e.nodes.reduce(function (e, r) {
							return e
								? t.every(function (e) {
										return r.hasOwnProperty(e);
								  })
								: e;
						}, !0)) ||
							l.logError("Rubicon: required schain params missing")),
					r
				);
			}
			function U(e, r) {
				return "rp_schain" === e
					? "rp_schain=".concat(r)
					: "".concat(e, "=").concat(encodeURIComponent(r));
			}
			var P = !1;
			Object(n.registerBidder)(_);
		},
	},
	[808]
);
pbjsChunk(
	[10],
	{
		19: function (e, t, r) {
			"use strict";
			(t.b = function (e) {
				var t = [];
				for (var r in e) {
					var i;
					e.hasOwnProperty(r) &&
						("pubProvidedId" === r
							? (t = t.concat(e.pubProvidedId))
							: (i = (function (e, t) {
									var r = s[t];
									if (r && e) {
										var i = {};
										i.source = r.source;
										var n = u.isFn(r.getValue) ? r.getValue(e) : e;
										if (u.isStr(n)) {
											var a,
												o,
												d = { id: n, atype: r.atype };
											return (
												!u.isFn(r.getUidExt) ||
													((a = r.getUidExt(e)) && (d.ext = a)),
												(i.uids = [d]),
												!u.isFn(r.getEidExt) ||
													((o = r.getEidExt(e)) && (i.ext = o)),
												i
											);
										}
									}
									return null;
							  })(e[r], r)) && t.push(i));
				}
				return t;
			}),
				(t.a = function (e) {
					var r = [];
					return (
						e
							.filter(function (e) {
								return u.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
							})
							.forEach(function (t) {
								Object.keys(t.idObj).forEach(function (e) {
									u.deepAccess(t, "config.bidders") &&
										Array.isArray(t.config.bidders) &&
										u.deepAccess(s, e + ".source") &&
										r.push({ source: s[e].source, bidders: t.config.bidders });
								});
							}),
						r
					);
				});
			var u = r(0),
				s = {
					intentIqId: { source: "intentiq.com", atype: 1 },
					pubcid: { source: "pubcid.org", atype: 1 },
					tdid: {
						source: "adserver.org",
						atype: 1,
						getUidExt: function () {
							return { rtiPartner: "TDID" };
						},
					},
					id5id: {
						getValue: function (e) {
							return e.uid;
						},
						source: "id5-sync.com",
						atype: 1,
						getUidExt: function (e) {
							if (e.ext) return e.ext;
						},
					},
					parrableId: {
						source: "parrable.com",
						atype: 1,
						getValue: function (e) {
							return e.eid ? e.eid : e.ccpaOptout ? "" : null;
						},
						getUidExt: function (e) {
							var t = u.pick(e, ["ibaOptout", "ccpaOptout"]);
							if (Object.keys(t).length) return t;
						},
					},
					idl_env: { source: "liveramp.com", atype: 3 },
					lipb: {
						getValue: function (e) {
							return e.lipbid;
						},
						source: "liveintent.com",
						atype: 3,
						getEidExt: function (e) {
							if (Array.isArray(e.segments) && e.segments.length)
								return { segments: e.segments };
						},
					},
					britepoolid: { source: "britepool.com", atype: 3 },
					dmdId: { source: "hcn.health", atype: 3 },
					lotamePanoramaId: { source: "crwdcntrl.net", atype: 1 },
					criteoId: { source: "criteo.com", atype: 1 },
					merkleId: {
						source: "merkleinc.com",
						atype: 3,
						getValue: function (e) {
							return e.id;
						},
						getUidExt: function (e) {
							return e && e.keyID ? { keyID: e.keyID } : void 0;
						},
					},
					netId: { source: "netid.de", atype: 1 },
					sharedid: {
						source: "sharedid.org",
						atype: 1,
						getValue: function (e) {
							return e.id;
						},
						getUidExt: function (e) {
							return e && e.third ? { third: e.third } : void 0;
						},
					},
					IDP: { source: "zeotap.com", atype: 1 },
					haloId: { source: "audigent.com", atype: 1 },
					quantcastId: { source: "quantcast.com", atype: 1 },
					nextrollId: { source: "nextroll.com", atype: 1 },
					idx: { source: "idx.lat", atype: 1 },
					connectid: { source: "verizonmedia.com", atype: 3 },
					fabrickId: { source: "neustar.biz", atype: 1 },
					mwOpenLinkId: { source: "mediawallahscript.com", atype: 1 },
					tapadId: { source: "tapad.com", atype: 1 },
					novatiq: {
						getValue: function (e) {
							return e.snowflake;
						},
						source: "novatiq.com",
						atype: 1,
					},
					uid2: {
						source: "uidapi.com",
						atype: 3,
						getValue: function (e) {
							return e.id;
						},
					},
					deepintentId: { source: "deepintent.com", atype: 3 },
					admixerId: { source: "admixer.net", atype: 3 },
				};
		},
		872: function (e, t, r) {
			e.exports = r(873);
		},
		873: function (e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				r.d(t, "spec", function () {
					return n;
				});
			var l = r(0),
				i = r(1),
				a = r(2),
				f = r(19),
				g = r(3),
				n = {
					code: "sovrn",
					supportedMediaTypes: [a.b],
					gvlid: 13,
					isBidRequestValid: function (e) {
						return !(
							!e.params.tagid ||
							isNaN(parseFloat(e.params.tagid)) ||
							!isFinite(e.params.tagid)
						);
					},
					buildRequests: function (e, t) {
						try {
							var o,
								d,
								u,
								s,
								c = [],
								p = [];
							l._each(e, function (e) {
								!u &&
									e.userId &&
									(u = Object(f.b)(e.userId)).forEach(function (e) {
										e.uids &&
											e.uids[0] &&
											("criteo.com" === e.source && (s = e.uids[0].id),
											p.push({ source: e.source, uid: e.uids[0].id }));
									}),
									e.schain && (d = d || e.schain),
									(o = o || l.getBidIdParameter("iv", e.params));
								var t =
										(e.mediaTypes &&
											e.mediaTypes.banner &&
											e.mediaTypes.banner.sizes) ||
										e.sizes,
									r = (t = (t =
										l.isArray(t) && l.isArray(t[0]) ? t : [t]).filter(function (
										e
									) {
										return l.isArray(e);
									})).map(function (e) {
										return { w: parseInt(e[0], 10), h: parseInt(e[1], 10) };
									}),
									i =
										e.getFloor && "function" == typeof e.getFloor
											? e.getFloor({
													currency: "USD",
													mediaType: "banner",
													size: "*",
											  })
											: {};
								i.floor = i.floor || l.getBidIdParameter("bidfloor", e.params);
								var n = {
									adunitcode: e.adUnitCode,
									id: e.bidId,
									banner: { format: r, w: 1, h: 1 },
									tagid: String(l.getBidIdParameter("tagid", e.params)),
									bidfloor: i.floor,
								};
								n.ext = l.getBidIdParameter("ext", e.ortb2Imp) || void 0;
								var a = l.getBidIdParameter("segments", e.params);
								a &&
									((n.ext = n.ext || {}),
									(n.ext.deals = a.split(",").map(function (e) {
										return e.trim();
									}))),
									c.push(n);
							});
							var r = g.b.getConfig("ortb2") || {},
								i = r.site || {};
							(i.page = t.refererInfo.referer),
								(i.domain = l.parseUrl(i.page).hostname);
							var n = {
								id: l.getUniqueIdentifierStr(),
								imp: c,
								site: i,
								user: r.user || {},
							};
							d && (n.source = { ext: { schain: d } }),
								t.gdprConsent &&
									(l.deepSetValue(
										n,
										"regs.ext.gdpr",
										+t.gdprConsent.gdprApplies
									),
									l.deepSetValue(
										n,
										"user.ext.consent",
										t.gdprConsent.consentString
									)),
								t.uspConsent &&
									l.deepSetValue(n, "regs.ext.us_privacy", t.uspConsent),
								u &&
									(l.deepSetValue(n, "user.ext.eids", u),
									l.deepSetValue(n, "user.ext.tpid", p),
									s && l.deepSetValue(n, "user.ext.prebid_criteoid", s));
							var a = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_4.38.0";
							return (
								o && (a += "&iv=".concat(o)),
								{
									method: "POST",
									url: a,
									data: JSON.stringify(n),
									options: { contentType: "text/plain" },
								}
							);
						} catch (e) {
							l.logError("Could not build bidrequest, error deatils:", e);
						}
					},
					interpretResponse: function (e) {
						var t = e.body,
							r = t.id,
							i = t.seatbid;
						try {
							var n = [];
							return (
								r &&
									i &&
									0 < i.length &&
									i[0].bid &&
									0 < i[0].bid.length &&
									i[0].bid.map(function (e) {
										n.push({
											requestId: e.impid,
											cpm: parseFloat(e.price),
											width: parseInt(e.w),
											height: parseInt(e.h),
											creativeId: e.crid || e.id,
											dealId: e.dealid || null,
											currency: "USD",
											netRevenue: !0,
											mediaType: a.b,
											ad: decodeURIComponent(
												"".concat(e.adm, '<img src="').concat(e.nurl, '">')
											),
											ttl: (e.ext && e.ext.ttl) || 90,
										});
									}),
								n
							);
						} catch (e) {
							l.logError("Could not intrepret bidresponse, error deatils:", e);
						}
					},
					getUserSyncs: function (e, t, r, i) {
						try {
							var n,
								a,
								o = [];
							return (
								t &&
									0 !== t.length &&
									(e.iframeEnabled &&
										((n = t
											.filter(function (e) {
												return l.deepAccess(e, "body.ext.iid");
											})
											.map(function (e) {
												return e.body.ext.iid;
											})),
										(a = []),
										r &&
											r.gdprApplies &&
											"string" == typeof r.consentString &&
											a.push(["gdpr_consent", r.consentString]),
										i && a.push(["us_privacy", i]),
										n[0] &&
											(a.push(["informer", n[0]]),
											o.push({
												type: "iframe",
												url:
													"https://ap.lijit.com/beacon?" +
													a
														.map(function (e) {
															return e.join("=");
														})
														.join("&"),
											}))),
									e.pixelEnabled &&
										t
											.filter(function (e) {
												return l.deepAccess(e, "body.ext.sync.pixels");
											})
											.reduce(function (e, t) {
												return e.concat(t.body.ext.sync.pixels);
											}, [])
											.map(function (e) {
												return e.url;
											})
											.forEach(function (e) {
												return o.push({ type: "image", url: e });
											})),
								o
							);
						} catch (e) {
							return [];
						}
					},
				};
			Object(i.registerBidder)(n);
		},
	},
	[872]
);
pbjs.processQueue();
