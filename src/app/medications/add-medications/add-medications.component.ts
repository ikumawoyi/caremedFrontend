import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicationsService } from 'src/app/services/medications.service';

@Component({
  selector: 'app-add-medications',
  templateUrl: './add-medications.component.html',
  styleUrls: ['./add-medications.component.scss']
})
export class AddMedicationsComponent implements OnInit {


  addMedicationForm: FormGroup = new FormGroup({});
  clientId: any;

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private medicationService: MedicationsService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.clientId = data['id'];
      console.log(this.clientId)
    })
    this.addMedicationForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'clientId': new FormControl(this.clientId),
      'duration': new FormControl(''),
      'dose': new FormControl(''),
      'medicationId': new FormControl(''),
      'form': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'manufacturer': new FormControl('', [Validators.required, Validators.maxLength(15)]),
      'countOfRemainder': new FormControl(''),
      'countOfSupply': new FormControl(''),
      'email': new FormControl('', [Validators.required, Validators.email]),
     'strength': new FormControl('', [Validators.required, Validators.maxLength(13)])
    });
  }

  createMedication(){

    this.medicationService.addMedication(this.addMedicationForm.value).subscribe(data => {
      this._snackBar.open("Medication successfully created");
    }, err => {
      this._snackBar.open("Medication creation failed");
    });
    console.log(this.addMedicationForm.value);
  }

}
