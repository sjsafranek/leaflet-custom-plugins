
/**
 * Expands a Leaflet LatLngBounds by a given distance in meters.
 * @param {L.LatLngBounds} bounds - The original Leaflet bounds
 * @param {number} meters - The buffer distance in meters
 * @returns {L.LatLngBounds} A new, expanded LatLngBounds object
 */
L.Bounds.prototype.buffer = function(meters) {
    const sw = this.getSouthWest();
    const ne = this.getNorthEast();

    // toBounds takes the full width/height of the box, so multiply by 2
    const swBuffer = sw.toBounds(meters * 2);
    const neBuffer = ne.toBounds(meters * 2);

    return L.latLngBounds(
        swBuffer.getSouthWest(),
        neBuffer.getNorthEast()
    );
}
