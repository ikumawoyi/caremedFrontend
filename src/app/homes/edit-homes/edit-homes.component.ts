import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-edit-homes',
  templateUrl: './edit-homes.component.html',
  styleUrls: ['./edit-homes.component.scss']
})
export class EditHomesComponent implements OnInit {
  homeId: any;
  dataLoaded: boolean = false
  homeDetails: any;
  editHomeForm: FormGroup = new FormGroup({});
  
  
  constructor(private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.homeId = data['id'];
    });

    if(this.homeId !== ''){
      this.homeService.viewHome(this.homeId)
      .toPromise()
      .then(data => {
        this.homeDetails = data;
        //Object.assign(this.homeDetails, data);


        this.editHomeForm = this.formBuilder.group({
          'careHomeId': new FormControl(this.homeDetails.careHomeId),
          'id': new FormControl(this.homeDetails.id),
          'name': new FormControl(this.homeDetails.name),
          'address': new FormControl(this.homeDetails.address),
          'phoneNumber': new FormControl(this.homeDetails.phoneNumber),
          'contactPerson': new FormControl(this.homeDetails.contactPerson),
          'email': new FormControl(this.homeDetails.email)
        })
        this.dataLoaded = true;
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  updateHome(){
    this.homeService.updateHome(this.homeId, this.editHomeForm.value).subscribe(data => {
      this._snackBar.open("Home successfully updated");
    }, err => {
      this._snackBar.open("Home update failed");
    });
  }

}
