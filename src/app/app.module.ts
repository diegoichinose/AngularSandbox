import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeAdmissionComponent } from './components/employee-admission/employee-admission.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeeDetailsComponent,
    EmployeeAdmissionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
