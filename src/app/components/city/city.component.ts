import { Component, OnInit } from '@angular/core';

import { Contact, Contacts } from 'src/app/models/contacts';
import { ContactService } from 'src/app/services/contacts.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  contacts:any;
  
  constructor(private contactService:ContactService
  ) { }

  ngOnInit() {
    console.log(this.contactService.getContacts().subscribe(data=>{
      this.contacts=data?data.contactsList:[];
    }))
    
  }

}
