import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {

  constructor(private http: HttpClient) { }


  getCharacters(params: any) {
    return this.http.get(environment.baseUrl + environment.character, {params})
  }
}
