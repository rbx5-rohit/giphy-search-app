import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  response = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getTrendingGifs(){
    return this.http.get<any>("https://api.giphy.com/v1/gifs/trending?api_key=LEZr6CuTirZcrzW8Vsfk0kazlKWORmoL&limit=20")
    .subscribe((res): any => {
      this.response.next(res.data);
    });
  }

  getGifByName(name: string) {
    return this.http.get<any>("https://api.giphy.com/v1/gifs/search?q="+name+"&api_key=LEZr6CuTirZcrzW8Vsfk0kazlKWORmoL&limit=20")
    .subscribe((res): any => {
      this.response.next(res.data);
    });
  }

  getGifs() {
    return this.response.asObservable();
  }
}
