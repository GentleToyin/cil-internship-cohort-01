import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ContactItemComponent } from './component/contact-item/contact-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddContactComponent } from './component/add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactItemComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
