import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Roles } from 'src/app/models/roles';
import { RolesService } from 'src/app/services/roles.service';
import { CreateroleComponent } from './createrole/createrole.component';
import { DeleteroleComponent } from './deleterole/deleterole.component';
import { UpdateroleComponent } from './updaterole/updaterole.component';

@Component({
  selector: 'app-rolestable',
  templateUrl: './rolestable.component.html',
  styleUrls: ['./rolestable.component.css']
})
export class RolestableComponent implements OnInit {

  dataSource = new MatTableDataSource<Roles>();
  public displayedColumns:  string[] = ['roleId','role','description']; 
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  result:any;
  roles: any;
  

  
constructor(private rolesservice:RolesService,  public dialog: MatDialog){
  this.dataSource = new MatTableDataSource<Roles>();
} 

//Create Method for model window
create() {
  const dialogRef = this.dialog.open(CreateroleComponent, {
    width: '400px',
    data: {users: {} }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log(result);
      this.result.dataChange.value.push(this.rolesservice.getDialogData());
      this.refresh();
    }
  });
}
//Update Method for model window
update(data:Roles) {
  const dialogRef = this.dialog.open(UpdateroleComponent, {
    width: '400px',
    data: data
  });
  dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(this.result);
      this.rolesservice.update(result);
      this.refresh();
     });  
       
}

//Delete method for model window
delete(roleId:number) {
  console.log(roleId); 
  const dialogRef = this.dialog.open(DeleteroleComponent);
   dialogRef.afterClosed().subscribe(result => {
     console.log(result);
    this.rolesservice.delete(roleId);
    this.refresh(); 
 });
}

//Refresh the Table

refresh() {
  this.rolesservice.getAllRoles().subscribe((data:Roles[]) => {
    this.dataSource.data = data;
  });
}

ngOnInit() {

 this.rolesservice.getAllRoles().subscribe(
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
