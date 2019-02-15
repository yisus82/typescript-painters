var Renderer = (function () {
    function Renderer() {
    }
    Renderer.prototype.renderPainters = function (painterSummary) {
        var painterSelect = document.getElementById('painter');
        painterSummary.items.forEach(function (painter) {
            var opt = document.createElement('option');
            opt.setAttribute('title', painter.title);
            opt.innerHTML = painter.title;
            painterSelect.appendChild(opt);
        });
    };
    Renderer.prototype.renderPainter = function (painter) {
        //Update name
        var el1 = document.getElementById('painterName');
        el1.innerHTML = painter.name;
        //Update style
        var el2 = document.getElementById('painterStyle');
        el2.innerHTML = painter.style;
        this.renderExamples(painter);
    };
    Renderer.prototype.renderExamples = function (painter) {
        //Update examples
        var examples = document.getElementById('examples');
        examples.value = '';
        var html = '<ol>';
        for (var i = 0, len = painter.examples.length; i < len; i++) {
            var example = painter.examples[i];
            html += '<li>' + '<h4>' + example.name + '</h4>';
        }
        examples.innerHTML = html + '</ol>';
    };
    Renderer.prototype.renderError = function () {
        var examples = document.getElementById('examples');
        examples.value = 'Unable to load data!';
    };
    return Renderer;
})();
//# sourceMappingURL=renderer.js.map