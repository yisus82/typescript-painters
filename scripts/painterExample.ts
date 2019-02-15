class Example implements IExample {
    name: string;

    constructor(example: IExample) {
        this.name = example.name;
    }             
}