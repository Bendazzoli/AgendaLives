import { NgModule } from '@angular/core';
import { TabsPageNextComponent } from './next/tabs-page-next.component';
import { TabsPagePreviousComponent } from './previous/tabs-page-previous.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../shared/pipe/local-datetime.module';
import { TabsPageHomeComponent } from './home/tabs-page-home.component';

@NgModule({
    declarations:[
        TabsPageNextComponent,
        TabsPagePreviousComponent,
        TabsPageHomeComponent
    ],
    exports: [
        TabsPageNextComponent,
        TabsPagePreviousComponent,
        TabsPageHomeComponent
    ],
    imports: [
        CommonModule,
        PipesModule
    ]
})
export class TabsPageModule{

}