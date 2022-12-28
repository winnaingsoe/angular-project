import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private list:any[] = []

  save(data:any){
    this.list.push(data)
    localStorage.setItem('data', this.list.toString())
  }
  search(){
    console.log(localStorage.getItem)
    return this.list;
  }
}
