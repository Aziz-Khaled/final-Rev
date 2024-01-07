import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class GestionEmpService {

      constructor(  private http : HttpClient ) {}

    getMethodEmployee (){
      return this.http.get<employee[]>("http://localhost:3000/employees")
    }

  postMethodEmployee ( empParam : employee ) {
    return this.http.post<employee>("http://localhost:3000/employees" , empParam )
  }
}
