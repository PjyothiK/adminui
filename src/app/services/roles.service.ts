import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  dialogData: any;
  dataChange: BehaviorSubject<Roles[]> = new BehaviorSubject<Roles[]>([]);
 
  //private  url='http://localhost:8081';
  private serviceUrl = '/assets/roles.json';
  Roles:any;
  
    constructor( private http:HttpClient) { }
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  
    get data(): Roles[] {
      return this.dataChange.value;
    }
  
    getDialogData() {
      return this.dialogData;
    }

    //GET METHOD
    getAllRoles():Observable<Roles[]>{
      return this.http.get<Roles[]>(this.serviceUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)

      )};
      //CREATE METHOD 
      create(roles: Roles):void{
        this.http.post(this.serviceUrl,roles).subscribe(data => {
          this.dialogData =roles;
          this.getAllRoles;
        }
        ); 
      }
      //UPDATE METHOD
      update(roles: Roles): void {
        this.dialogData =roles;
        this.http.put(this.serviceUrl + '/' +roles.roleId,roles).subscribe(data => {
          this.dialogData =roles;
          this.getAllRoles;
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
    