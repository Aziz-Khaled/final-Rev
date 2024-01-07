import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from './employee';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GestionEmpService {

      constructor(  private http : HttpClient ) {}
//GET EMPLOYEE
    getMethodEmployee (){
      return this.http.get<employee[]>("http://localhost:3000/employees")
    }
//POST EMPLOYEE
  postMethodEmployee ( empParam : employee ) {
    return this.http.post<employee>("http://localhost:3000/employees" , empParam )
  }
//UPDATE EMPLOYEE
getEmployeeById (id : number)  {
  return this.http.get<employee>(`http://localhost:3000/employees/${id}`)
}

updateEmployee (empParam : employee , id : number): Observable<employee> {
  return this.http.put<employee>(`http://localhost:3000/employees/${id}` , empParam)
}


//DELETE EMPLOYEE

deleteEmployee (id : number){
  return this.http.delete<employee>(`http://localhost:3000/employees/${id}`)
}










}


