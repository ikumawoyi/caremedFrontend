import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-create-medications',
  templateUrl: './create-medications.component.html',
  styleUrls: ['./create-medications.component.scss']
})
export class CreateMedicationsComponent implements OnInit {

  clientId: number =0;
  clientMedication: any;
  addMedicationForm: FormGroup = new FormGroup({});

  constructor(private clientService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.clientId = data['id'];
      console.log(this.clientId);
    })
    this.addMedicationForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'clientId': this.clientId,
      'duration': new FormControl(),
      'dose': new FormControl(),
      'medicationId': new FormControl(''),
      'form': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'manufacturer': new FormControl('', [Validators.required, Validators.maxLength(15)]),
      'countOfRemainder': new FormControl(),
      'countOfSupply': new FormControl(),
      'email': new FormControl('', [Validators.required, Validators.email]),
     'strength': new FormControl('', [Validators.required, Validators.maxLength(13)])
    });
  }
  createMedication(){
    
    this.clientService.createmedication(this.addMedicationForm.value).subscribe(data => {
      this._snackBar.open("Medication successfully created");
    }, err => {
      this._snackBar.open("Medication creation failed");
    });
    console.log(this.addMedicationForm.value);
  }

}
