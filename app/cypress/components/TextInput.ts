export class TextInputComponent {

    constructor(private dataCy: string) {}

    public write(value: string) {
        this.read().clear().type(value);
    }

    private read() {
        return cy.dataCy(this.dataCy);
    }
}
