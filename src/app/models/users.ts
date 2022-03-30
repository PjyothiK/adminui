export class Users{
    roleId:number;
    name:string;
    email:string;
    role:string;
    status:string
    constructor(roleId:number,name:string,email:string,role:string,status:string) {
        this.roleId=roleId;
        this.name=name;
        this.email=email;  
        this.role=role ;
        this.status=status;
    }
    }