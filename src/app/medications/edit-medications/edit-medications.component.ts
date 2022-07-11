import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { ClientsService } from 'src/app/services/clients.service';
import { MedicationsService } from 'src/app/services/medications.service';

@Component({
  selector: 'app-edit-medications',
  templateUrl: './edit-medications.component.html',
  styleUrls: ['./edit-medications.component.scss']
})
export class EditMedicationsComponent implements OnInit {


  medicationId: any;
  a: any;
  dataLoaded: boolean = false
  isTime: boolean = false
  medicationDetails: any;
  editMedicationForm: FormGroup = new FormGroup({});
  constructor(private activatedRoute: ActivatedRoute,
    private clientService: ClientsService,
    private medicationService: MedicationsService,
    private _snackBar: MatSnackBar,
    private dialogRef : MatDialog,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.medicationId = data['id'];
    });

    if(this.medicationId !== ''){
      this.medicationService.viewMedication(this.medicationId)
      .toPromise()
      .then(data => {
        this.medicationDetails = data;

        this.editMedicationForm = this.formBuilder.group({
          'id': this.medicationDetails.id,
          'name': this.medicationDetails.name,
          'dose': this.medicationDetails.dose,
          'isGiven': true
        })
        this.dataLoaded = true;
        if((this.medicationDetails.timeGiven - Date.now()) == this.medicationDetails.duration){
          this.isTime = true;
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  
  updateMedication(){
    
    this.a = this.medicationDetails.countOfRemainder - this.medicationDetails.dose;
    this.medicationService.updateMedication(this.medicationId, this.editMedicationForm.value).subscribe(data => {
      this._snackBar.open("Drug administered and " + " " + this.a + " " + this.medicationDetails.name + " " + "left");
      console.log(this.editMedicationForm.value);
    }, err => {
      this._snackBar.open("Failed to administer");
    });
  }

}