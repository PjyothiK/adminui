import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  formInstance: FormGroup;
  constructor(private usersservice:UsersService ,public dialogRef: MatDialogRef<UpdateuserComponent>,
 @Inject(MAT_DIALOG_DATA) public data:any) {
      this.formInstance = new FormGroup({
        "roleId": new FormControl('', Validators.required),
        "name": new FormControl('', Validators.required),
        "email": new FormControl('', Validators.required),
        "role": new FormControl('', Validators.required),
        "status": new FormControl('', Validators.required)
        
  });
  this.formInstance.setValue(data);
}
 ngOnInit(): void {}  
 update():void{
 console.log(this.data); 
 this.dialogRef.close(this.usersservice.update(this.formInstance.value));
}
}


