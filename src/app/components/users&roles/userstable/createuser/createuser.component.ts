import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  formInstance: FormGroup;
  constructor(private usersservice:UsersService ,public dialogRef: MatDialogRef<CreateuserComponent>,
 @Inject(MAT_DIALOG_DATA) public data:any) {
      this.formInstance = new FormGroup({
        "roleId": new FormControl('', Validators.required),
        "name": new FormControl('', Validators.required),
        "email": new FormControl('', Validators.required),
        "role": new FormControl('', Validators.required),
        "status": new FormControl('', Validators.required)
        
  });
   this.formInstance.patchValue(data);
}
   ngOnInit(): void {}  
    public create():void{
    console.log(this.data); 
    this.dialogRef.close( this.usersservice.create(this.formInstance.value));
  }
  submit() {
    this.usersservice.data;
    }
}