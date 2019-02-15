/// <reference path="typings/jquery.d.ts" />

class PainterLoader {
    constructor(public url: string) {}

    load() {
        $.getJSON(this.url,(data) => {
            this.mapData(data);        
        });
    }

    mapData(data) {
        if (data) {
            var painters: any[] = data.famousPainters;
            famousPainters = new Painters<IPainter>();
            var paintersSummary = new Painters<IPainterSummary>();

            painters.forEach((painter) => {
                var famousPainter = new Painter({
                    name: painter.name,
                    style: painter.style,
                    examples: this.getExamples(painter)
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
    }

    getExamples(painter): IExample[]{
        return painter.examples.map((example) => {
            return new Example({
                name: example
            });
        });
    }
} 