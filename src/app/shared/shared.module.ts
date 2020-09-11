import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialsModule} from './materials-module/materials.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BoxShadowColorDirective} from './directives/box-shadow-color.directive';
import {BorderBottomColorDirective} from './directives/border-bottom-color.directive';
import {RoundCountPipe} from './pipes/round-count.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {SortingPipe} from './pipes/sorting.pipe';

@NgModule({
            declarations: [
              BoxShadowColorDirective,
              BorderBottomColorDirective,
              RoundCountPipe,
              FilterPipe,
              SortingPipe
            ],
            imports: [
              CommonModule,
              MaterialsModule,
              ReactiveFormsModule,
            ],
            exports: [
              MaterialsModule,
              ReactiveFormsModule,
              BoxShadowColorDirective,
              BorderBottomColorDirective,
              RoundCountPipe,
              FilterPipe,
              SortingPipe
            ]

          })
export class SharedModule {
}
