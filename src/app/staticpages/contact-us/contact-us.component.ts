import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators ,FormControl , FormBuilder} from '@angular/forms';
import {ContactService} from '../contact.service'


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup ;
  datasaved = false;
  massage: string;

  constructor(private formbuilder: FormBuilder , private contactService: ContactService) {
    
   }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.contactForm = this.formbuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      phone:['', [Validators.required]],
      Message: ['', [Validators.required]],
    });
  }
    
  
  postData(contactForm){

    let newContact={

      id: Math.floor(100000 + Math.random() * 900000),
      Name:contactForm.value.Name,
      Email:contactForm.value.Email,
      phone:contactForm.value.Contact,
      Message:contactForm.value.Message

    }
   this.createContact(newContact);
    console.log('form is submitted successfully')

  }
  createContact(newContact){
    debugger
    this.contactService.contactUs(newContact).subscribe(
      ()=>{
        this.datasaved = true;
        this.massage = "User Created";
       this.contactForm.reset();
      }
    )

  }


}
