import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
const apiURL="https://api.github.com/emojis";
@Injectable({providedIn: 'root'})
export class EmojisService {
    constructor(private httpClient: HttpClient) { }

    getEmojis():Observable<any>{
        return this.httpClient.get(apiURL)
                    .pipe(
                        tap(x=>console.log(JSON.stringify(x)))
                    );
    }
    
}