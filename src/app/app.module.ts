import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the HeatMapModule for the heatmap component
import { HeatMapModule } from '@syncfusion/ej2-angular-heatmap';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HeatMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
