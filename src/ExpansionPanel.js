import React from "react";

export default class ExpansionPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			expandedTitle: this.props.expandedTitle,
			panelState: 'collapsed'
		};
	}

	render() {
		var aIcons;
		if(this.props.actionIcons) {
			aIcons = this.props.actionIcons.map((aIcon, index) => {
				return <button key={'icon-'+index} className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" onClick={(event) => {this.actionIconsClick(event, aIcon.callback, aIcon.additionalParams)}}>
					<i className="material-icons">{aIcon.icon}</i>
				</button>
			});
		}
		var aButtons;
		var aButtonBar;
		if(this.props.actionButtons) {
			aButtons = this.props.actionButtons.map((button, index) => {
				return <button key={'button-'+index}
							   className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
							   onClick={(e) => {if(button.toggleExpand)
                                                    this.toggleExpand(e);
                                                button.callback?button.callback(button.additionalParams):null;}}>
					{button.buttonText}
				</button>;
			});
			aButtonBar = <div className="actionButtonBar">
				{aButtons}
				<div className="clear"></div>
			</div>;
		}
		return (
			<div className="expPanel" ref={(panel) => {this.panel = panel}}>
				<div className="panelTitle" onClick={(event) => {this.toggleExpand(event)}}>
					<div className="title">
						<i className="material-icons">{this.props.titleIcon}</i>
						<span className="text">{this.state.panelState == 'collapsed'?this.state.title:this.state.expandedTitle}</span>
					</div>
					<div className="actions">
						{aIcons}
						<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect expIcon" onClick={(event) => {this.actionIconsClick(event)}} ref={(expand) => {this.expandButton = expand}}>
							<i className="material-icons">expand_more</i>
						</button>
					</div>
					<div className="clear"></div>
				</div>
				<div className="panelExpanded">
					<div className="panelContent">
						{this.props.children}
					</div>
					{aButtonBar}
				</div>
			</div>
		);
	}

	actionIconsClick(event, callback, additionalParams){
		event.stopPropagation();
		if(!callback) {
			this.toggleExpand(event);
		} else{
			callback(additionalParams);
		}
	}

	toggleExpand(event){
		if(this.state.panelState == "collapsed"){
			this.setState({
				panelState: 'expanded'
			});
		} else{
			this.setState({
				panelState: 'collapsed'
			});
		}
		this.panel.classList.toggle('active');
		this.expandButton.classList.toggle('active');
	}

	componentDidMount() {

	}
	componentWillUnmount() {

	}
}
