import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any){
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }
  
  getItem(key: string, needParse: boolean = false){
    const storageValue = localStorage.getItem(key);
    if(needParse && storageValue){
      const parseStorageValue = JSON.parse(storageValue);
      return parseStorageValue
    }
    return storageValue;
  }

  removeItem(key: string){
    localStorage.removeItem(key);
  }

  removeAllItems(){
    localStorage.clear();
  }
  
}
