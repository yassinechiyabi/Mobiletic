import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Site } from './site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http:HttpClient) { }

  
  insertWebsite(website:Site){
    console.log(website);
    const formData = new FormData();
    formData.append('name', website.name as string);
    formData.append('ipaddress', website.ipAddress as string);
    formData.append('domaine', website.domainName as string);
    formData.append('etat', website.active as string);
    formData.append('id_serveur', website.serveur as string);
    return this.http.post<any>("http://localhost:8000/api/storeWebsite",formData);

  }
  deleteWebsite(id:any){
    return this.http.get("http://localhost:8000/api/deleteWebsite/"+id);
  }
  activateWebsite(id:any,activation:any){
    return this.http.get("http://localhost:8000/api/activateWebsite/"+id+"/"+activation);
  }
}


