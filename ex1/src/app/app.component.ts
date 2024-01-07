import { Component , OnInit } from '@angular/core';
import { employee } from './employee';
import { GestionEmpService } from './gestion-emp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ex1';
  emp : employee [] = []  ;

  employeeObject : employee = {
  id : 0 ,
  name : "" ,
  salaire : 0 , 
  poste : ""
  }


  updatedEmployee : employee ={
    id : 0 ,
    name : "" ,
    salaire : 0 , 
    poste : ""
  }


    constructor (private GempService : GestionEmpService ) {}

ngOnInit(): void {
  this.GempService.getMethodEmployee().subscribe(data => {
    this.emp = data ; 
  })
}


postMethod () {
  this.GempService.postMethodEmployee(this.employeeObject).subscribe ({
    next : (value) => {
      console.log (` added with success !!`) ; 
      window.location.reload();
    } , error(err) {
      alert ("erreur ajout")
      console.log (err)
    },
  })
}



getEmployeeInfo (empId : number) {
  this.GempService.getEmployeeById (empId).subscribe ((res) => {
    this.updatedEmployee = res ; 

  })
}

updateEmployeeById (employeeId : number) {
  this.GempService.updateEmployee(this.updatedEmployee , employeeId )
  .subscribe(
    ()=>{
      window.location.reload(); 
    }
  )
}



DeleteEmployeeById (employeeId : number) {
  this.GempService.deleteEmployee(employeeId).subscribe ( () => {
    window.location.reload()
    console.log ("employee deleted")
  })
}

}