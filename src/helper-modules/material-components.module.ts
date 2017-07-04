import { NgModule } from '@angular/core';
import { 
    MdGridListModule,
    MdCardModule,
    MdInputModule,
    MdSliderModule
 } from '@angular/material';


@NgModule({
    imports: [
        MdGridListModule,
        MdCardModule,
        MdInputModule,
        MdSliderModule],
    exports: [
        MdGridListModule,
        MdCardModule,
        MdInputModule,
        MdSliderModule]
})
export class MaterialComponentsModule {

}