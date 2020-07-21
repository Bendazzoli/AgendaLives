import { NgModule } from '@angular/core';
import { TabsPageDoneComponent } from './done/tabs-page-done.component';
import { TabsPagePreviousComponent } from './previous/tabs-page-previous.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        TabsPageDoneComponent,
        TabsPagePreviousComponent
    ],
    exports: [
        TabsPageDoneComponent,
        TabsPagePreviousComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TabsPageModule{

}