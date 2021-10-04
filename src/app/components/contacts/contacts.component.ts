import { Component, OnInit } from '@angular/core';

import { Contact, Contacts } from 'src/app/models/contacts';
import { ContactService } from 'src/app/services/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
  
})
export class ContactsComponent implements OnInit {

  contacts:any;
   
  constructor(private contactService:ContactService
  ) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data=>{
      this.contacts=data?data.contactsList:[];
    })
    
  }

}
