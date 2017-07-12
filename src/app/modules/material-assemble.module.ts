// 把matarial所有用到的的import进来。放在这里
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdSidenavModule,
  MdInputModule,
  MdListModule
} from '@angular/material';

const list = [
    MdButtonModule,
    MdSidenavModule,
    MdInputModule,
    MdListModule
];
@NgModule({
  imports: list,
  exports: list
})
export class MaterialAssembleModule { }
