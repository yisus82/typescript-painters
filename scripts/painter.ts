class Painter implements IPainter {
    name: string;
    style: string;
    examples: IExample[];

    constructor(painter: IPainter) {
        this.name = painter.name;
        this.style = painter.style;
        this.examples = painter.examples;
    }
} 