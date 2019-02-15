var famousPainters: Painters<IPainter>;
var renderer = null;

window.onload = () => { 
    var paintersSelect = (<HTMLSelectElement> document.getElementById('painter'));
    paintersSelect.onchange = () => loadPainters();
    var loader = new PainterLoader('/JSON/famousPainters.json');
    loader.load();
    renderer = new Renderer();
};

function loadPainters() {
    var el = (<HTMLSelectElement> document.getElementById('painter'));
    try {
        var painter = famousPainters.items
            //Find selected item by name
            .filter(item => item.name === el.value)
            //return the item
            .reduce(item => new Painter({
                name: el.value,
                style: item.style,
                examples: item.examples
            }));
        renderer.renderPainter(painter);
    }
    catch (ex) { alert(ex.message) }
}