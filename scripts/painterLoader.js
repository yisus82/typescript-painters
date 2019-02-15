/// <reference path="typings/jquery.d.ts" />
var PainterLoader = (function () {
    function PainterLoader(url) {
        this.url = url;
    }
    PainterLoader.prototype.load = function () {
        var _this = this;
        $.getJSON(this.url, function (data) {
            _this.mapData(data);
        });
    };
    PainterLoader.prototype.mapData = function (data) {
        var _this = this;
        if (data) {
            var painters = data.famousPainters;
            famousPainters = new Painters();
            var paintersSummary = new Painters();
            painters.forEach(function (painter) {
                var famousPainter = new Painter({
                    name: painter.name,
                    style: painter.style,
                    examples: _this.getExamples(painter)
                });
                famousPainters.items.push(famousPainter);
                var painterSummary = new PainterSummary({
                    text: painter.name,
                    title: painter.name
                });
                paintersSummary.items.push(painterSummary);
            });
            renderer.renderPainters(paintersSummary);
        }
        else {
            renderer.renderError();
        }
    };
    PainterLoader.prototype.getExamples = function (painter) {
        return painter.examples.map(function (example) {
            return new Example({
                name: example
            });
        });
    };
    return PainterLoader;
})();
//# sourceMappingURL=painterLoader.js.map