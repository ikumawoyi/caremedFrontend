import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-delete-homes',
  templateUrl: './delete-homes.component.html',
  styleUrls: ['./delete-homes.component.scss']
})
export class DeleteHomesComponent implements OnInit {

  homeId: number = 0;
  constructor(private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.homeId = data['id'];
    });

    if(this.homeId){
      this.homeService.deleteHome(this.homeId).subscribe(data =>{
        this._snackBar.open("Home successfully deleted");
      }, err =>{
        this._snackBar.open("Home deletion failed");
      })
    }
  }

}
