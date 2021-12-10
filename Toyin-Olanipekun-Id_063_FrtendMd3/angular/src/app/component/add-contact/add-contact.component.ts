import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter

  name!: string;
  phone!: string;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const newContact = {
      name: this.name,
      phone: this.phone
    };

    this.onAddContact.emit(newContact)

    this.name = '';
    this.phone = '';
  }
}
