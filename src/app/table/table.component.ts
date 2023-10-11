import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public studentList = [] as any;
  public editIndex: number = -1;
  public saveIndex: number = -1;
  public editedFirstName: string = "";
public editedLastName: string = "";
public editedSubject: string = "";

  public editActionButtons: string = `
  <a class='btn btn-success save-button' (click)="saveEdit()">
  Save
</a>&nbsp;
&nbsp;
    <a class='btn btn-warning cancel-button'>
      Cancel
    </a>
  `;
  
  // public delName: string = "";
  constructor(private Student : StudentserviceService) {}

  ngOnInit(){
    this.studentList = this.Student.getStudents().subscribe(data => this.studentList = data);
  }

  deleteRow(index: number){
    if(confirm("Are you sure want to delete")){
    if (index >= 0 && index < this.studentList.length) {
      this.studentList.splice(index, 1); 
    }
  } 
}
editRow(index: number) {
  this.editIndex = index;
}
saveRow(index: number) {
  this.studentList[index].firstname = this.editedFirstName;
  this.studentList[index].lastname = this.editedLastName;
  this.studentList[index].subject = this.editedSubject;
  this.editIndex = -1;
  
}

cancelEdit() {
  this.editIndex = -1; 
}



}