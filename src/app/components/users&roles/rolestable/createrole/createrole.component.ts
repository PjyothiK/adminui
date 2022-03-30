import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.css']
})
export class CreateroleComponent implements OnInit {

  formInstance: FormGroup;
  constructor(private rolesservice:RolesService ,public dialogRef: MatDialogRef<CreateroleComponent>,
 @Inject(MAT_DIALOG_DATA) public data:any) {
      this.formInstance = new FormGroup({
        "roleId": new FormControl('', Validators.required),
        "role": new FormControl('', Validators.required), 
        "description": new FormControl('', Validators.required)
        
  });
   this.formInstance.patchValue(data);
}
   ngOnInit(): void {}  
    public create():void{
    console.log(this.data); 
    this.dialogRef.close( this.rolesservice.create(this.formInstance.value));
  }
  submit() {
    this.rolesservice.data;
    }
}