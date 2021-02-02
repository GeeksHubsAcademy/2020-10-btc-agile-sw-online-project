export class Page {
    constructor(private route: string) {}

    public visit() {
        cy.visit(this.route);
    }

    public checkURL() {
        cy.url().should('eq', this.route);
    }
}
