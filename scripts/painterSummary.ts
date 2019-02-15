class PainterSummary implements IPainterSummary {
    text: string;
    title: string;

    constructor(summary: IPainterSummary) {
        this.text = summary.text;
        this.title = summary.title;
    }
}