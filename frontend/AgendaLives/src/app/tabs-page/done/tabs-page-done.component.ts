import { Component } from '@angular/core';

@Component({
    selector: 'app-tab-page-done',
    templateUrl: 'tabs-page-done.component.html'
})
export class TabsPageDoneComponent {
    public lives;

    constructor(){
        this.lives = [
            {
                artista: "Bruno & Marrone",
                hora: "20:00",
                link: "www.google.com"
            },
            {
                artista: "Jorge & Matheus",
                hora: "20:35"
            },
            {
                artista: "Zé Neto & Cristiano",
                hora: "21:00"
            },
            {
                artista: "Leonardo",
                hora: "21:30"
            },
        ]
    }

    click(live){
        console.log("clicou na live " + live.link);
    }
}