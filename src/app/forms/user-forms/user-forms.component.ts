import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';

import {User} from '../../shared/user.model';
import {AdoptionForm} from '../../shared/adoption-form.model';
import {FormService} from '../form.service';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})
export class UserFormsComponent implements OnInit, OnDestroy {

  user: User | null = null;
  subscription = new Subscription();
  adoptionSubscription = new Subscription();
  adoptionForms: AdoptionForm[] = [];

  constructor(
    private authService: AuthService,
    private formService: FormService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(resultUser => {
      if ( resultUser !== undefined){
        this.user = resultUser;
        if (this.user !== null){
          this.adoptionSubscription = this.formService.getUserAdoptionForms(this.user.uid).subscribe( resultForms => {
            this.adoptionForms = resultForms;
          });
        }
      } else {
        this.user = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.adoptionSubscription.unsubscribe();
  }

}
