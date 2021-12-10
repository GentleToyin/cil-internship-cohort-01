import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../Contact';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact!: Contact;
  @Output() onDeleteContact: EventEmitter<Contact> = new EventEmitter()
  @Output() onUpdateContact: EventEmitter<Contact> = new EventEmitter
  faTimes = faTimes;
  faEdit = faEdit;
  name!: string;
  phone!: string;
  id!: number;
  showEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(contact: Contact) {
    this.onDeleteContact.emit(contact)
  }

  onUpdate() {
    const editContact = {
      name: this.contact.name,
      phone: this.contact.phone,
      id: this.contact.id
    };

    this.onUpdateContact.emit(editContact)

    this.name = '';
    this.phone = '';
  }

  toggleEdit() {
    this.showEdit = !this.showEdit
  }

}
