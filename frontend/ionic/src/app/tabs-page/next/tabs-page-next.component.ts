import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-tab-page-next',
    templateUrl: 'tabs-page-next.component.html'
})
export class TabsPageNextComponent implements OnInit{
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
        this.liveService.getLivesWithFlag('next')
        .subscribe(data => {
            this.lives = data.content;
            this.lives.forEach(live => {
                live.urlSafe = this.ds.bypassSecurityTrustResourceUrl(live.liveLink);
            });
        });
    }
}