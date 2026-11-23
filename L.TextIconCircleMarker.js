(function(L) {
    'use strict';

    /**
     * L.TextIconCircleMarker
     * Extend Leaflet's Canvas renderer
     */
    L.Canvas.include({
        _updateCircleWithIcon: function (layer) {
            // Draw the standard circle first
            this._updateCircle(layer);

            if (!layer.options.iconText && !layer.options.iconImg) return;

            const p = layer._point;
            const ctx = this._ctx;

            ctx.save();
            if (layer.options.iconImg && layer.options.iconImg.complete) {
                const s = layer.options.iconSize || 16;
                ctx.drawImage(layer.options.iconImg, p.x - s / 2, p.y - s / 2, s, s);
            } else if (layer.options.iconText) {
                ctx.fillStyle = layer.options.iconColor || '#ffffff';
                ctx.font = layer.options.iconFont || 'bold 12px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(layer.options.iconText, p.x, p.y);
            }
            ctx.restore();
        }
    });

    // Create a custom CircleMarker class
    L.TextIconCircleMarker = L.CircleMarker.extend({
        _updatePath: function () {
            this._renderer._updateCircleWithIcon(this);
        }
    });

})(window.L);