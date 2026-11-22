
L.LayerGroup.include({
    getBounds: function () {
        // const bounds = L.latLngBounds();
        // this.eachLayer(function (layer) {
        //     if (typeof layer.getBounds === 'function') {
        //         bounds.extend(layer.getBounds());
        //     } else if (typeof layer.getLatLng === 'function') {
        //         bounds.extend(layer.getLatLng());
        //     }
        // });
        // return bounds;
        const bounds = L.latLngBounds([]);
        this.eachLayer((layer) => {
            if (layer.getBounds) {
                // Handles polygons, polylines, rectangles, circles, and nested FeatureGroups
                bounds.extend(layer.getBounds());
            } else if (layer.getLatLng) {
                // Handles markers and circleMarkers
                bounds.extend(layer.getLatLng());
            }
        });
        return bounds;
    }
});

