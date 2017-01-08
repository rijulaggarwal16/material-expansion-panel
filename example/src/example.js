var React = require('react');
var ReactDOM = require('react-dom');
var ExpansionPanel = require('material-expansion-panel');

var App = React.createClass({
	render () {
		var aIcons = [{
			icon: "delete",
			callback: null,
			additionalParams: null
		}];
		var aButtons = [{
			buttonText: "Save",
			callback: null,
			additionalParams: null
		},
		{
			buttonText: "Cancel",
			callback: null,
			additionalParams: null,
			toggleExpand: true
		}];
		return (
			<div>
				<ExpansionPanel titleIcon="done_all" title="Panel Title" expandedTitle="Expanded Panel Title" />
				<ExpansionPanel titleIcon="done_all" title="Panel Title" expandedTitle="Expanded Panel Title" actionButtons={aButtons} actionIcons={aIcons}>Content</ExpansionPanel>
				<ExpansionPanel titleIcon="done_all" title="Panel Title" expandedTitle="Expanded Panel Title" />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
