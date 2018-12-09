import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string;
  email:string;
  message:string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    
  }
}
