import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CareHome } from 'src/app/models';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-list-homes',
  templateUrl: './list-homes.component.html',
  styleUrls: ['./list-homes.component.scss']
})
export class ListHomesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  listHomes: CareHome[] = [];

  constructor(private homeService: HomeService) { }
  displayedColumns : any[] = ['name','email'];
  // ngOnInit(): void {
  //   this.homeService.listHomes().subscribe(data => {
  //     console.log(data);
  //     this.listHomes = data;
  //   });
  // }

  ngOnInit() {
    this.homeService.listHomes().subscribe(data => {
      console.log(data);
      this.listHomes = data;
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      data : this.listHomes,
      
      // Set column title and data field
      columns: [
        {
          title: 'Name',
          data: 'HomeName',
        },
        {
          title: 'Email',
          data: 'HomeEmail',
        },
      ],
    };
  }

}
