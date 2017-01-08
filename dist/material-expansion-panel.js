(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ExpansionPanel = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var ExpansionPanel = (function (_React$Component) {
	_inherits(ExpansionPanel, _React$Component);

	function ExpansionPanel(props) {
		_classCallCheck(this, ExpansionPanel);

		_get(Object.getPrototypeOf(ExpansionPanel.prototype), 'constructor', this).call(this, props);
		this.state = {
			title: this.props.title,
			expandedTitle: this.props.expandedTitle,
			panelState: 'collapsed'
		};
	}

	_createClass(ExpansionPanel, [{
		key: 'render',
		value: function render() {
			var _this = this;

			var aIcons;
			if (this.props.actionIcons) {
				aIcons = this.props.actionIcons.map(function (aIcon, index) {
					return _react2['default'].createElement(
						'button',
						{ key: 'icon-' + index, className: 'mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect', onClick: function (event) {
								_this.actionIconsClick(event, aIcon.callback, aIcon.additionalParams);
							} },
						_react2['default'].createElement(
							'i',
							{ className: 'material-icons' },
							aIcon.icon
						)
					);
				});
			}
			var aButtons;
			var aButtonBar;
			if (this.props.actionButtons) {
				aButtons = this.props.actionButtons.map(function (button, index) {
					return _react2['default'].createElement(
						'button',
						{ key: 'button-' + index,
							className: 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect',
							onClick: function (e) {
								if (button.toggleExpand) _this.toggleExpand(e);
								button.callback ? button.callback(button.additionalParams) : null;
							} },
						button.buttonText
					);
				});
				aButtonBar = _react2['default'].createElement(
					'div',
					{ className: 'actionButtonBar' },
					aButtons,
					_react2['default'].createElement('div', { className: 'clear' })
				);
			}
			return _react2['default'].createElement(
				'div',
				{ className: 'expPanel', ref: function (panel) {
						_this.panel = panel;
					} },
				_react2['default'].createElement(
					'div',
					{ className: 'panelTitle', onClick: function (event) {
							_this.toggleExpand(event);
						} },
					_react2['default'].createElement(
						'div',
						{ className: 'title' },
						_react2['default'].createElement(
							'i',
							{ className: 'material-icons' },
							this.props.titleIcon
						),
						_react2['default'].createElement(
							'span',
							{ className: 'text' },
							this.state.panelState == 'collapsed' ? this.state.title : this.state.expandedTitle
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'actions' },
						aIcons,
						_react2['default'].createElement(
							'button',
							{ className: 'mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect expIcon', onClick: function (event) {
									_this.actionIconsClick(event);
								}, ref: function (expand) {
									_this.expandButton = expand;
								} },
							_react2['default'].createElement(
								'i',
								{ className: 'material-icons' },
								'expand_more'
							)
						)
					),
					_react2['default'].createElement('div', { className: 'clear' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'panelExpanded' },
					_react2['default'].createElement(
						'div',
						{ className: 'panelContent' },
						this.props.children
					),
					aButtonBar
				)
			);
		}
	}, {
		key: 'actionIconsClick',
		value: function actionIconsClick(event, callback, additionalParams) {
			event.stopPropagation();
			if (!callback) {
				this.toggleExpand(event);
			} else {
				callback(additionalParams);
			}
		}
	}, {
		key: 'toggleExpand',
		value: function toggleExpand(event) {
			if (this.state.panelState == "collapsed") {
				this.setState({
					panelState: 'expanded'
				});
			} else {
				this.setState({
					panelState: 'collapsed'
				});
			}
			this.panel.classList.toggle('active');
			this.expandButton.classList.toggle('active');
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}]);

	return ExpansionPanel;
})(_react2['default'].Component);

exports['default'] = ExpansionPanel;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});