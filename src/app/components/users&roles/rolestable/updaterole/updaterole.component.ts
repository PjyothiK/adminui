import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.css']
})
export class UpdateroleComponent implements OnInit {

  formInstance: FormGroup;
  constructor(private rolesservice:RolesService ,public dialogRef: MatDialogRef<UpdateroleComponent>,
 @Inject(MAT_DIALOG_DATA) public data:any) {
  this.formInstance = new FormGroup({
    "roleId": new FormControl('', Validators.required),
    "role": new FormControl('', Validators.required), 
    "description": new FormControl('', Validators.required)
    
});
  this.formInstance.setValue(data);
}
 ngOnInit(): void {}  
 update():void{
 console.log(this.data); 
 this.dialogRef.close(this.rolesservice.update(this.formInstance.value));
}
}
