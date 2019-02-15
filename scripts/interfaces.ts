interface IPainter {
    name: string;
    style: string;
    examples: IExample[];
}

interface IPainterSummary {
    text: string;
    title: string;
}

interface IExample {
    name: string;
}