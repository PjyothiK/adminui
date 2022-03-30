import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  dialogData: any;
  dataChange: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);
 
  //private  url='http://localhost:8081';
  private serviceUrl = '/assets/users.json';
  Users:any;
  
    constructor( private http:HttpClient) { }
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  
    get data(): Users[] {
      return this.dataChange.value;
    }
  
    getDialogData() {
      return this.dialogData;
    }

    //GET METHOD
    getAllUsers():Observable<Users[]>{
      return this.http.get<Users[]>(this.serviceUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)

      )};
      //CREATE METHOD 
      create(users: Users):void{
        this.http.post(this.serviceUrl,users).subscribe(data => {
          this.dialogData =users;
          this.getAllUsers;
        }
        ); 
      }
      //UPDATE METHOD
      update(users: Users): void {
        this.dialogData =users;
        this.http.put(this.serviceUrl + '/' + users.roleId,users).subscribe(data => {
          this.dialogData =users;
          this.getAllUsers;
        }
        );
      }
  // DELETE METHOD
   delete(roleId: number): void {
    this.http.delete(this.serviceUrl + '/' + roleId).subscribe(data => {
      console.log(roleId);
     },
     );
    }
    /* delete(trId:number): void {
      this.http.delete(this.serviceUrl + '/' + trId)
      }*/
     
    handleError(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
    
    }
    