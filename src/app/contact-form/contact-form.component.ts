import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {


  contactMethods = [
    {id: 1, name: "contact1"},
    {id: 2, name: "contact3"},
    {id: 3, name: "contact4"},
    {id: 4, name: "contact5"},
  ]

  log(x) { console.log(x); }

}
