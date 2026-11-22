
L.LayerGroup.include({
    getBounds: function () {
        const bounds = L.latLngBounds();
        this.eachLayer(function (layer) {
            if (typeof layer.getBounds === 'function') {
                bounds.extend(layer.getBounds());
            } else if (typeof layer.getLatLng === 'function') {
                bounds.extend(layer.getLatLng());
            }
        });
        return bounds;
    }
});

