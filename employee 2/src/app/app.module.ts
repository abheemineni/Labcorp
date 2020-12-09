import { BrowserModule } from '@angular/platform-browser';
/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { ɵMatchMedia, BreakPointRegistry, PrintHook } from '@angular/flex-layout/core';                
import { FlexLayoutModule, StyleUtils, StylesheetMap, LayoutStyleBuilder, MediaMarshaller, LayoutAlignStyleBuilder, FlexStyleBuilder } from '@angular/flex-layout';

/* Components */
import { AngularMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { VacationComponent } from './vacation/vacation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    VacationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [ PrintHook,
    StyleUtils, 
    StyleSheet,
    StylesheetMap, 
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { 

}