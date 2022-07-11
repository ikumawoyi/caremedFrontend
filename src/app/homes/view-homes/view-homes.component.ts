import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-view-homes',
  templateUrl: './view-homes.component.html',
  styleUrls: ['./view-homes.component.scss']
})
export class ViewHomesComponent implements OnInit {

  homeId: string = '';
  homeDetails: any;
  constructor(private homeService: HomeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
this.homeId = data['id']; 
    })
    this.homeService.viewHome(this.homeId).subscribe(data => {
      this.homeDetails = data;
    })
  }

}
