import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private usersservice:UsersService) { }
  
    ngOnInit(): void {}
  
      confirmDelete(_roleId:number): void {
        console.log("confirm delte")
        this.usersservice.delete(this.data._roleId);
    }
  
  }
  