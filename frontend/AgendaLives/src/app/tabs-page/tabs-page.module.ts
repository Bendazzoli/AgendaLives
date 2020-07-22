import { NgModule } from '@angular/core';
import { TabsPageNextComponent } from './next/tabs-page-next.component';
import { TabsPagePreviousComponent } from './previous/tabs-page-previous.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../shared/pipe/local-datetime.module';

@NgModule({
    declarations:[
        TabsPageNextComponent,
        TabsPagePreviousComponent
    ],
    exports: [
        TabsPageNextComponent,
        TabsPagePreviousComponent
    ],
    imports: [
        CommonModule,
        PipesModule
    ]
})
export class TabsPageModule{

}