import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
    selector: 'app-tab-page-previous',
    templateUrl: 'tabs-page-previous.component.html'
})
export class TabsPagePreviousComponent implements OnInit{
    
    public lives: Live[];

    constructor(private liveService: LiveService){
        
    }
    ngOnInit(): void {
        this.liveService.getLivesWithFlag('previous')
        .subscribe(data => {
            this.lives = data.content;
        })
    }
}