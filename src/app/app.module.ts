import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TablesComponent } from './components/tables/tables.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ToggleSideBarComponent } from './components/toggle-side-bar/toggle-side-bar.component';

import { AngularDraggableModule } from 'angular2-draggable';

const appRoutes: Routes = [
  { path: '', component: CarComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'tables', component: TablesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,
    TablesComponent,
    SideBarComponent,
    ToggleSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxDatatableModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
