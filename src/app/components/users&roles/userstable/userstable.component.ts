import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { CreateuserComponent } from './createuser/createuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {
  dataSource = new MatTableDataSource<Users>();
  public displayedColumns:  string[] = ['roleId','name','email','role','status']; 
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  result:any;
  users: any;
  

  
constructor(private usersservice: UsersService,  public dialog: MatDialog){
  this.dataSource = new MatTableDataSource<Users>();
} 

//Create Method for model window
create() {
  const dialogRef = this.dialog.open(CreateuserComponent, {
    width: '400px',
    data: {users: {} }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log(result);
      this.result.dataChange.value.push(this.usersservice.getDialogData());
      this.refresh();
    }
  });
}
//Update Method for model window
update(data:Users) {
  const dialogRef = this.dialog.open(UpdateuserComponent, {
    width: '400px',
    data: data
  });
  dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(this.result);
      this.usersservice.update(result);
      this.refresh();
     });  
       
}

//Delete method for model window
delete(roleId:number) {
  console.log(roleId); 
  const dialogRef = this.dialog.open(DeleteuserComponent);
   dialogRef.afterClosed().subscribe(result => {
     console.log(result);
    this.usersservice.delete(roleId);
    this.refresh(); 
 });
}

//Refresh the Table

refresh() {
  this.usersservice.getAllUsers().subscribe((data:Users[]) => {
    this.dataSource.data = data;
  });
}

ngOnInit() {

 this.usersservice.getAllUsers().subscribe(
  data => {
    this.dataSource.data = data;
    console.log(data);
  }); 
  
}


//Filter the table with fields
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}


