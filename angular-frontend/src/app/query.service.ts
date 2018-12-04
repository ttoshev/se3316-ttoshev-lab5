import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



/**
 * TUTORIAL USED FOR USER AUTHENTICATION WITH FIREBASE
 * https://www.simplifiedcoding.net/firebase-user-authentication-tutorial/
 * https://www.dunebook.com/how-to-set-up-authentication-in-angular-5-with-firebase-firestore/
 **/
 
@Injectable({
  providedIn: 'root'
})
export class QueryService {
  // url
  myURL = 'http://se3316-ttoshev-lab5-ttoshev.c9users.io:8081/api/';
   //http header options
  _options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  };

  constructor(private http : HttpClient) {
    
  }
  
  getItems(){
    return this.http.get(this.myURL+'getItems');
  }
  
  getRatings(){
    return this.http.get(this.myURL+'Ratings');
  }
  
  getManagers(){
    return this.http.get(this.myURL+'Managers')
  }
  
  getUsers(){
    return this.http.get(this.myURL+'Users')
  }
  
  // from firebase
  getSingleUser(email){
    return this.http.get(this.myURL+'User/'+email);
  }
  
  //post request
  postComment(formData,uEmail,itemId){
    let thePost = {
      'userEmail': uEmail,
      'itemID': itemId,
      'rate': formData.value.rate,
      'comment': formData.value.comment
    }
    console.log(thePost);
    return this.http.post(this.myURL+'Ratings',thePost, this._options)
    .subscribe((data)=>{
      console.log(data);
    })
  }
  
  postUser(email){
    let theUser={
      'userEmail': email
    }
    
    return this.http.post(this.myURL+'Users',theUser, this._options)
    .subscribe((data)=>{
      console.log(data);
    })
    
  }
  
  postManager(email){
    let theUser={
      'userEmail': email
    }
    
    return this.http.post(this.myURL+'Managers',theUser, this._options);
    
  }
  
  postStatus(email, status){
    let theUser={
      'userEmail': email,
      'disabledStatus': status
    }
    
    console.log(theUser);
    return this.http.post(this.myURL+'changeDisabled',theUser, this._options);
  }
}
