import { Component } from '@angular/core';

@Component({
    selector: 'app-tab-page-previous',
    templateUrl: 'tabs-page-previous.component.html'
})
export class TabsPagePreviousComponent {
    public lives;

    constructor(){
        this.lives = [
            {
                artista: "Teodoro & Sampaio",
                hora: "20:00"
            },
            {
                artista: "Milionário & Zé Rico",
                hora: "20:30"
            },
            {
                artista: "Crhystian & Ralf",
                hora: "20:35"
            },
            {
                artista: "Amado Batista",
                hora: "21:00"
            }
        ]
    }
}