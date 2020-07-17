import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  createDb(){

    let  contacts =  [
      {  id:  1,  name:  'Andri Purnama', email: 'kharisma.andripurnama@gmail.com' },
      {  id:  2,  name:  'Joko Samudro', email: 'joko.samudro@email.com' },
      {  id:  3,  name:  'Bung Tomo', email: 'BungTomo@email.com' },
      {  id:  4,  name:  'Iwan', email: 'Iwan@gmail.com' }
    ];
 
    return {contacts};
 
   }
}
