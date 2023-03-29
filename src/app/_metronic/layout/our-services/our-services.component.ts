import { Component,OnInit,Input  } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UtilityService } from '../services/utilityService/utilitiesService'; 

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit{

  formGroup!: FormGroup;
  loading:boolean=false;
  timeout:boolean= false;

  constructor(
   private alertService: UtilityService,
   private fb:FormBuilder,
  ){}
  ngOnInit(): void {
    this.initForm()
  }
  get f(){
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.fb.group({
      Name: [
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      Email: [
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      message:[
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
    })
  }


  onSubmit(){
    this.alertService.ShowSpinner()  
    this.alertService.alertSuccess("successful");
    this.alertService.HideSpinner()
  }
}

