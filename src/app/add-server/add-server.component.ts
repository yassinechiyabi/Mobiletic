import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Serveur } from '../serveur';
import { Site } from '../site';
import { ServeurService } from '../serveur.service';
import { SiteService } from '../site.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {
  nameServer = new FormControl('');
  ipAddressServer = new FormControl('');
  ipAddressSite = new FormControl('');
  NomSite = new FormControl('');
  DomainSite = new FormControl('');
  EtatSite = new FormControl(true);
  ServeurSite = new FormControl('');
  server:Serveur|null=null;
  website:Site|null=null;
  Resp:Serveur[]|null=null;


  constructor(private serverServ:ServeurService,private SerWebsite:SiteService){
    this.serverServ.getAllServeur().subscribe(resp=>{
      console.log(resp)
      this.Resp=resp})
  }
  insertServer(){
      this.server={
      name:this.nameServer.value,
      ipaddress:this.ipAddressServer.value,
      sites:[]
    }
    this.serverServ.insertServer(this.server).subscribe(resp=>console.log(resp));
  }

  insertWebsite(){
    this.website={
      name:this.NomSite.value,
      domainName:this.DomainSite.value,
      ipAddress:this.ipAddressSite.value,
      active:this.EtatSite.value,
      serveur:this.ServeurSite.value
    }
    this.SerWebsite.insertWebsite(this.website).subscribe(resp=>console.log(resp));
  }
}
