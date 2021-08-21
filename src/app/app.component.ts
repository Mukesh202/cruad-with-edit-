import { Component } from '@angular/core';
import { CommanService } from './comman.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoproject';
 isEdit=false;

  allUser: any 
  userObj={ Date:'',Open:'',High:'',Low:'',Close:''}
constructor(private commanservice:CommanService){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getLatestUser();
 

}
  adduser(formObj:any){
    console.log(formObj);
    this.commanservice.creatUser(formObj).subscribe((response:any)=>{
      this.getLatestUser();
    })
  }
getLatestUser(){
  this.commanservice.getAllUser().subscribe((response)=>{
    this.allUser = response
  })
}
deleteUser(user:any){
    this.commanservice.deleteUser(user).subscribe(()=>{
    this.getLatestUser();
    alert ('Are you sure to delete this data')
  })
}
editUser(user:any){
  this.isEdit=true
  this.userObj=user;
}
updateUser(){
  this.isEdit=!this.isEdit;
  this.commanservice.updateUser(this.userObj).subscribe(()=>{
    this.getLatestUser();
  })
}
}
