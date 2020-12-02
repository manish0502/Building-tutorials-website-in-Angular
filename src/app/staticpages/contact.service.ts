import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Contact} from './contact'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }
  


  contactUs(productBody): Observable<Contact>{

    const productUrl='http://localhost:3000/contact';
    return this.httpClient.post<Contact>(productUrl, productBody);

  }
}
