import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectExpression } from 'estree';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

    private url: string  = '';
    //Inietto l'HttpClient
    constructor(private http: HttpClient) { }

    getAll(): Observable<Category[]>{
      return this.http.get<Category[]>(this.url);

    }

    get(id: any):Observable<Category> {
      return this.http.get<Category>(this.url+'/'+id)
    }

    create(data:any):Observable<any>{
      return this.http.post(this.url,data);
    }

    update(id: any, data:any):Observable<any>{
      return this.http.delete(this.url+'/'+id);
    }

    deleteAll(): Observable<any> {
      return this.http.delete(this.url);
    }

    delete(id:any):Observable<any> {
      return this.http.delete(this.url+'/'+id)
    }

    findByName(name:any): Observable<Category[]> {
      return this.http.get<Category[]>(`${this.url}?title=${name}`)
    }

  
}
