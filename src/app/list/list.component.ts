import { Component } from '@angular/core';
import { Serveur } from '../serveur';
import { ServeurService } from '../serveur.service';
import { FormControl } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SiteService } from '../site.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  criterea = new FormControl('');
  valeur = new FormControl('');
  faXmark=faXmark;
   
  
  Resp:Serveur[]|null=null;
  pushable:Serveur[]|null=null;
  constructor(private Servers:ServeurService,private website:SiteService) {
    
  }

  ngOnInit(){
    this.Servers.getAllServeur().subscribe(resp=>{
      console.log(resp)
      this.Resp=resp})
  }

  getServersByCrtiterea(){
    if(this.criterea.value==='name'){
      
      console.log('name')
      this.pushable=[];
    this.pushable?.push(this.Resp?.find(x=>x.name===this.valeur.value) as Serveur)
    console.log(this.Resp?.find(x=>x.name===this.valeur.value))
    this.Resp=[];
    this.Resp=this.pushable;
    }
    
    else if(this.criterea.value==='ip'){
      console.log('ip');
      this.pushable=[];
      this.pushable?.push(this.Resp?.find(x=>x.ipaddress===this.valeur.value) as Serveur)
    this.Resp=[];
    this.Resp=this.pushable;
    }
    else{
      this.ngOnInit();
    }

    
    
    /* this.Servers.getAllServeurByCriterea(this.criterea.value,this.valeur.value).subscribe(resp=>{
      console.log(resp)
      this.Resp=resp}) */
  }

  deleteServer(id:any){
    this.Servers.deleteServer(id).subscribe(resp=>{console.log(resp);this.ngOnInit();});
    
  }

  deleteWebsite(id:any){
    this.website.deleteWebsite(id).subscribe(resp=>{console.log(resp);this.ngOnInit();});
    
  }
 activateWebsite(id:any,activation:any){
  this.website.activateWebsite(id,activation).subscribe(resp=>{console.log(resp);this.ngOnInit();});
 }
  
}
