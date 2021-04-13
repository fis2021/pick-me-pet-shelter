import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pet} from '../../shared/pet.model';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  @Input()
  pet!: Pet;
  @Input()
  age!: number;

  birthDate = '';

  @Output() closeDetails = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
    this.birthDate =
      '' +
      this.pet.birthDate.toDate().getDate() + '/' +
      (this.pet.birthDate.toDate().getMonth() + 1) + '/' +
      this.pet.birthDate.toDate().getFullYear();
  }

  onClose(): void {
    this.closeDetails.emit();
  }

  onAdoptMe(): void{
  }

}