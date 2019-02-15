class Renderer {

    renderPainters(painterSummary: Painters<IPainterSummary>) {
        var painterSelect = document.getElementById('painter');
        painterSummary.items.forEach((painter) => {
            var opt = document.createElement('option');
            opt.setAttribute('title', painter.title);
            opt.innerHTML = painter.title;
            painterSelect.appendChild(opt);
        });
    }

    renderPainter(painter: IPainter) {
        //Update name
        var el1 = (<HTMLSelectElement> document.getElementById('painterName'));
        el1.innerHTML = painter.name;

        //Update style
        var el2 = (<HTMLSelectElement> document.getElementById('painterStyle'));
        el2.innerHTML = painter.style;

        this.renderExamples(painter);
    }

    renderExamples(painter: IPainter) {
        //Update examples
        var examples = (<HTMLSelectElement> document.getElementById('examples'));
        examples.value = '';

        var html = '<ol>';
        for (var i = 0, len = painter.examples.length; i < len; i++) { 
            var example = painter.examples[i];
            
            html += '<li>' + '<h4>' + example.name + '</h4>';
        }

        examples.innerHTML = html + '</ol>';
    }

    renderError() {
        var examples = (<HTMLSelectElement> document.getElementById('examples'));
        examples.value = 'Unable to load data!';
    }
} 