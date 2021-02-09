/// <reference types="cypress" />

import {ROUTE_THREAD_DETAIL, ROUTE_THREADS} from "../../routes/Routes";
import {Page} from "../Page";
import {TextInputComponent} from "../../components/TextInput";
import {ADD_THREAD} from "../../routes/Endpoints";
import {RouteGenerator} from "../../../src/routing/generator/RouteGenerator";

export class ThreadListPage extends Page{

    private readonly addThreadEndpoint: string;

    constructor() {
        super(ROUTE_THREADS);
        this.addThreadEndpoint = ADD_THREAD;
    }

    public deleteThread(): void {
        cy.server();
        cy.route('POST', this.addThreadEndpoint).as('add-thread-request');

        this.addThread();
        cy.wait('@add-thread-request').should('have.property', 'status', 200);
        cy.get('@add-thread-request')
            .its('response.body.id')
            .then(id => {
                cy.reload();
                cy.dataCy(`delete-thread-button-${id}`).click();
                cy.dataCy('confirm-modal-accept-button').click();
                cy.contains('Hilo eliminado correctamente');
            });
    }

    public addThread(): void {
        cy.dataCy('add-thread-button').click();
        cy.contains('Nuevo hilo');

        const titleInput: TextInputComponent = new TextInputComponent("add-thread-input-title");
        const authorInput: TextInputComponent = new TextInputComponent("add-thread-input-author");
        const descriptionInput: TextInputComponent = new TextInputComponent("add-thread-input-description");

        titleInput.write("Nuevo hilo");
        authorInput.write("Cypress");
        descriptionInput.write("Esta es una descripción para un test de integración");
        cy.dataCy("add-thread-form-button").click();

        cy.contains("Hilo creado correctamente");
    }

    public goToThreadDetail(): void {
        const routeGenerator: RouteGenerator = new RouteGenerator();
        cy.dataCy('details-thread-button-1').click();
        cy.url().should('eq', routeGenerator.generate(Cypress.config().baseUrl + ROUTE_THREAD_DETAIL, {id: '1'}));
    }
}
