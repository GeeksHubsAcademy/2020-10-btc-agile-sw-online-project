/// <reference types="cypress" />

import {Page} from "../Page";
import {ROUTE_COMMENTS} from "../../routes/Routes";
import {ADD_COMMENT} from "../../routes/Endpoints";
import {RouteGenerator} from "../../../src/routing/generator/RouteGenerator";
import {TextInputComponent} from "../../components/TextInput";

export class CommentListPage extends Page {
    private readonly addCommentEndpoint: string;

    constructor() {
        super(new RouteGenerator().generate(ROUTE_COMMENTS, {id: "1"}));
        this.addCommentEndpoint = ADD_COMMENT;
    }

    public addComment(): void {
        cy.dataCy('add-comment-button').click();
        cy.contains('Nuevo comentario');

        const textInput: TextInputComponent = new TextInputComponent("add-comment-input-text");
        const authorInput: TextInputComponent = new TextInputComponent("add-comment-input-author");

        textInput.write("Nuevo comentario");
        authorInput.write("Cypress");

        cy.dataCy("add-comment-form-button").click();
        cy.contains("Comentario añadido correctamente");
    }

    public deleteComment(): void {
        cy.server();
        cy.route('POST', this.addCommentEndpoint).as('add-comment-request');

        this.addComment();
        cy.wait('@add-comment-request').should('have.property', 'status', 200);
        cy.get('@add-comment-request')
            .its('response.body.id')
            .then(id => {
                cy.reload();
                cy.dataCy(`delete-comment-button-${id}`).click();
                cy.dataCy('confirm-modal-accept-button').click();
                cy.contains('Comentario eliminado correctamente');
            });
    }
}
