# Expansion Panel

This is a standalone React component implementing the [Expansion Panels](https://material.io/guidelines/components/expansion-panels.html), following Google Material Design guidelines. This component is highly customizable and uses material icons and buttons provided by [MDL](https://getmdl.io/).


## Demo & Examples

Live demo: [rijulaggarwal16.github.io/material-expansion-panel](http://rijulaggarwal16.github.io/material-expansion-panel/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use material-expansion-panel is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/material-expansion-panel.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install material-expansion-panel --save
```
You will also need the css included in the package.
```
<link rel="stylesheet" type="text/css" href="node_modules/material-expansion-panel/dist/material-expansion-panel.min.css">
```
Apart from these standard functional files, you will also need MDL library in your project. This library is very light weight and has some amazing material design components pre-built (about 27kb gzipped). All you need is a JS file, a stylesheet and its icons. You can choose any color palett you want. https://getmdl.io/started/index.html
```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
```


## Usage

```
var ExpansionPanel = require('material-expansion-panel');

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

<ExpansionPanel title="Title" expandedTitle="Expanded Title" titleIcon="done_all" actionButtons={aButtons} actionIcons={aIcons} ><div>Example Content</div></ExpansionPanel>
```

### Properties

|Property Name|Required?|Use|
|---|:---:|---|
|`title`|Optional|The title shown when the panel is collapsed |
|`expandedTitle`|Optional|The title shown when the panel is expanded|
|`titleIcon`|Optional|The material icon shown next to the title/expanded title|
|`actionIcons`|Optional|Array of objects defining the use of action icons|
|`actionButtons`|Optional|Array of objects defining the use of action buttons at the bottom of the expanded panel|

`actionIcons` object definition:

|Property Name|Required?|Use|
|---|:---:|---|
|`icon`|Required|Material icon for the action button|
|`callback`|Optional|The callback when the action icon is clicked|
|`additionalParams`|Optional|Anything (object,array etc.) passed back into the callback|

`actionButtons` object definition:

|Property Name|Required?|Use|
|---|:---:|---|
|`buttonText`|Required|Text inside the action button|
|`callback`|Optional|The callback when the action icon is clicked|
|`additionalParams`|Optional|Anything (object,array etc.) passed back into the callback|
|`toggleExpand`|Optional|true/false defining whether panel should collapse onClick (**default false**)|

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

[MIT License](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2017 Rijul Aggarwal.

