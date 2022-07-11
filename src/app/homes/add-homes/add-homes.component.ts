import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-add-homes',
  templateUrl: './add-homes.component.html',
  styleUrls: ['./add-homes.component.scss']
})
export class AddHomesComponent implements OnInit {


  addHomeForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private homeService: HomeService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.addHomeForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'address': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'phoneNumber': new FormControl('', [Validators.required, Validators.maxLength(15)]),
      'contactPerson': new FormControl('', [Validators.required, Validators.maxLength(15)]),
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }

  createHome(){

    this.homeService.addHome(this.addHomeForm.value).subscribe(data => {
      this._snackBar.open("Home successfully created");
    }, err => {
      this._snackBar.open("Home creation failed");
    });
    console.log(this.addHomeForm.value);
  }

}
