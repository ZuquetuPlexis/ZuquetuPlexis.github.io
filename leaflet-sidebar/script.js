var map = L.map('map').setView([52.53028, 13.79417], 13);

var sidebar = L.control.sidebar({
		autopan: false,       // whether to maintain the centered map point when opening the sidebar
		closeButton: true,    // whether t add a close button to the panes
		container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
		position: 'left',     // left or right
}).addTo(map);

var panelContent = {
		id: 'bus_stop_quality',                     // UID, used to access the panel
		tab: 'LF-SB',  // content can be passed as HTML string,
		//pane: someDomNode.innerHTML,        // DOM elements can be passed, too
		pane: document.getElementsByClassName('leaflet-sidebar-content')[0].innerHTML = '<p>test</p>',        // DOM elements can be passed, too
		title: 'Übersicht Qualität',              // an optional pane header
		position: 'top'                  // optional vertical alignment, defaults to 'top'
};

sidebar.addPanel(panelContent);

//sidebar.enablePanel('bus_stop_quality');

sidebar.open('bus_stop_quality');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
