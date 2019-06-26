import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap,shareReplay} from 'rxjs/operators';

const apiURL="https://api.github.com/users";

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private httpClient: HttpClient) { }
    getUsers():Observable<any>{
        return this.httpClient.get(apiURL)
                    .pipe(
                    tap(x=>console.log('http service call')),
                    shareReplay()
                    );
    }
    getUser(userName:string):Observable<any>{
        return this.httpClient.get(apiURL+"/"+userName)
                              .pipe(
                                  tap(x=>console.log('get user information')),
                                  shareReplay()
                                  );
    }
    getFollowers(userName:string):Observable<any>{
        return this.httpClient.get(apiURL+"/"+userName+"/followers")
                              .pipe(
                                  tap(x=>console.log('followers log call'+JSON.stringify(x))),
                                  shareReplay()
                              );
    }   
}