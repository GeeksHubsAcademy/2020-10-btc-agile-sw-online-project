/*
    PRINCIPIO OPEN CLOSE
    La clase Page representa una pantalla de la aplicación, está abierta a extensión ya que hay pantallas con
    distintas funcionalidades y elementos, y a su vez cerrada a modificación porque afectaría a las clases que
    extienden de ella.
 */

export class Page {
    constructor(private route: string) {}

    public visit() {
        cy.visit(this.route);
    }

    public checkURL() {
        cy.url().should('eq', this.route);
    }
}
