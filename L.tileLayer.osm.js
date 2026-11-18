/**
 * L.tileLayer.osm
 */
L.tileLayer.osm = function(opts) {
    let default = {
        maxZoom: 19, 
        attribution: "&copy; OpenStreetMap contributors",
        referrerPolicy: 'no-referrer-when-downgrade'
    };
    opts = opts || {};
    opts = { ...default, ...opts };
    return L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", opts);
}
