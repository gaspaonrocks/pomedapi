import { Component, OnInit } from '@angular/core';
import { ContactForm } from './contactForm';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit () { }

  rowsNumber = 5;

  model = new ContactForm();

  sent = false;

  onSubmit () {
    console.log('test', this.model);
    this.sent = true;
  };

  doItAgain () {
    this.sent = false;
    this.model = new ContactForm();
  }
}
