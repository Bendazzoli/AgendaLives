import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDateTimePipe } from './local-date-time.pipe';

@NgModule({
    declarations:[
        LocalDateTimePipe
    ],
    exports: [
        LocalDateTimePipe
    ],
    imports: [
        CommonModule
    ],
    providers: [
        LocalDateTimePipe
    ]
})
export class PipesModule{

}