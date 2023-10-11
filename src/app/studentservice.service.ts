import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModel } from './student-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  public urlofdata = "./assets/data/studentadetails.json";
  constructor(private http : HttpClient) { }

  getStudents(): Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(this.urlofdata);
   }
}
