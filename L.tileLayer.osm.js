(function(L) {
    'use strict';
    
    /**
     * L.tileLayer.osm
     */
    L.tileLayer.osm = function(opts) {
        let _opts = {
            maxZoom: 19, 
            attribution: "&copy; OpenStreetMap contributors",
            referrerPolicy: 'no-referrer-when-downgrade'
        };
        opts = opts || {};
        opts = { ..._opts, ...opts };
        return L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", opts);
    }
})(window.L);