var famousPainters;
var renderer = null;
window.onload = function () {
    var paintersSelect = document.getElementById('painter');
    paintersSelect.onchange = function () { return loadPainters(); };
    var loader = new PainterLoader('JSON/famousPainters.json');
    loader.load();
    renderer = new Renderer();
};
function loadPainters() {
    var el = document.getElementById('painter');
    try {
        var painter = famousPainters.items.filter(function (item) { return item.name === el.value; }).reduce(function (item) { return new Painter({
            name: el.value,
            style: item.style,
            examples: item.examples
        }); });
        renderer.renderPainter(painter);
    }
    catch (ex) {
        alert(ex.message);
    }
}
//# sourceMappingURL=initializer.js.map