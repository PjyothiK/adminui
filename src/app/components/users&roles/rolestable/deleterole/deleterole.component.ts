import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-deleterole',
  templateUrl: './deleterole.component.html',
  styleUrls: ['./deleterole.component.css']
})
export class DeleteroleComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DeleteroleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private rolesservice:RolesService) { }
  
    ngOnInit(): void {}
  
      confirmDelete(_roleId:number): void {
        console.log("confirm delte")
        this.rolesservice.delete(this.data._roleId);
    }
  
  }
  