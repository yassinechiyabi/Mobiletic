import { HttpClient } from '@angular/common/http';
import { Serveur } from './serveur';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeurService {

  

  constructor(private http:HttpClient) { }

  getAllServeur():Observable<any>{
    return this.http.get<Serveur[]>("http://localhost:8000/api/getAllServers")
  }


  getAllServeurByCriterea(criterea:any,valeur:any):Observable<any>{
    return this.http.get<Serveur[]>("http://localhost:8000/api/getAllServers/"+criterea+"/"+valeur)
  }
  insertServer(server:Serveur){
    console.log(server);
    const formData = new FormData();
    formData.append('name', server.name as string);
    formData.append('ipaddress', server.ipaddress as string);
    return this.http.post<any>("http://localhost:8000/api/storeServer",formData);

  }
  deleteServer(id:any){
    return this.http.get("http://localhost:8000/api/deleteServer/"+id);
  }
  activateServer(activation:number){
    return this.http.get("http://localhost:8000/api/Activation/"+activation);
  }
}
