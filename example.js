require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ExpansionPanel = require('material-expansion-panel');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		var aIcons = [{
			icon: "delete",
			callback: null,
			additionalParams: null
		}];
		var aButtons = [{
			buttonText: "Save",
			callback: null,
			additionalParams: null
		}, {
			buttonText: "Cancel",
			callback: null,
			additionalParams: null,
			toggleExpand: true
		}];
		return React.createElement(
			'div',
			null,
			React.createElement(ExpansionPanel, { titleIcon: 'done_all', title: 'Panel Title', expandedTitle: 'Expanded Panel Title' }),
			React.createElement(
				ExpansionPanel,
				{ titleIcon: 'done_all', title: 'Panel Title', expandedTitle: 'Expanded Panel Title', actionButtons: aButtons, actionIcons: aIcons },
				'Content'
			),
			React.createElement(ExpansionPanel, { titleIcon: 'done_all', title: 'Panel Title', expandedTitle: 'Expanded Panel Title' })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"material-expansion-panel":undefined,"react":undefined,"react-dom":undefined}]},{},[1]);
