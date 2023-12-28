var map = L.map('map').setView([52.53028, 13.79417], 13);

var sidebar = L.control.sidebar({
		autopan: false,       // whether to maintain the centered map point when opening the sidebar
		closeButton: true,    // whether t add a close button to the panes
		container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
		position: 'left',     // left or right
}).addTo(map);

var panelContent = {
		id: 'userinfo',                     // UID, used to access the panel
		//tab: '<i class="fa fa-gear"></i>',  // content can be passed as HTML string,
		tab: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		//pane: someDomNode.innerHTML,        // DOM elements can be passed, too
		title: 'ContentPanel',              // an optional pane header
		position: 'bottom'                  // optional vertical alignment, defaults to 'top'
};
sidebar.addPanel(panelContent)

sidebar.open(panelContent);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
