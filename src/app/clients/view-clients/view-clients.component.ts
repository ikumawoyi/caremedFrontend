import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss']
})
export class ViewClientsComponent implements OnInit {

  clientId: any;
  clientDetails: any;

  constructor(private clientService: ClientsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.clientId = data['id'];
    })
    this.clientService.viewClient(this.clientId).subscribe(data => {
      this.clientDetails = data;
    })
  }

}
