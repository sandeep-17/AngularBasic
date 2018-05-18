import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';
import { TestComponent } from './test/test.component';
import { ServerDashboardComponent } from './server-dashboard/server-dashboard.component';

@NgModule({
  declarations:[AppComponent, ServerComponent, TestComponent, ServerDashboardComponent],
  imports:[BrowserModule, FormsModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{

}

