(function(L) {
    'use strict';

    /**
     * Expands a Leaflet LatLngBounds by a given distance in meters.
     * @param {number} meters - The buffer distance in meters
     * @returns {L.LatLngBounds} A new, expanded LatLngBounds object
     */
    L.Bounds.buffer = function(bounds, meters) {
        const sw = bounds.getSouthWest();
        const ne = bounds.getNorthEast();

        // toBounds takes the full width/height of the box, so multiply by 2
        const swBuffer = sw.toBounds(meters * 2);
        const neBuffer = ne.toBounds(meters * 2);

        return L.latLngBounds(
            swBuffer.getSouthWest(),
            neBuffer.getNorthEast()
        );
    }

})(window.L);
