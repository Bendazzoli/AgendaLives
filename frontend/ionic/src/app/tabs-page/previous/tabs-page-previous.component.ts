import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-tab-page-previous',
    templateUrl: 'tabs-page-previous.component.html'
})
export class TabsPagePreviousComponent implements OnInit{
    
    public lives: Live[];
    urlSafe: SafeResourceUrl;

    constructor(
        private liveService: LiveService,
        private ds: DomSanitizer){
        
    }

    ngOnInit(): void {
        this.getLives();
    }

    getLives(){
        this.liveService.getLivesWithFlag('previous')
        .subscribe(data => {
            this.lives = data.content;
            this.lives.forEach(live => {
                live.urlSafe = this.ds.bypassSecurityTrustResourceUrl(live.liveLink);
            });
        });
    }
}