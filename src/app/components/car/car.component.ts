import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  color: Colors;
  options: string [];
  isEdit: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 280;
    this.model = 'RS8';
    this.color = {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Parking', 'Cruise'];
  }

  carSelect(carName) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.speed = 270;
      this.model = 'M6';
      this.color = {
        car: 'blue',
        salon: 'red',
        wheels: 'black'
      };
      this.options = ['ABS', 'Parking', 'Cruise'];
    } else if (carName === 'audi') {
      this.name = 'Audi';
      this.speed = 280;
      this.model = 'RS8';
      this.color = {
        car: 'white',
        salon: 'black',
        wheels: 'silver'
      };
      this.options = ['ABS', 'Parking', 'Cruise'];
    } else {
      this.name = 'Mercedes';
      this.speed = 260;
      this.model = 'A180';
      this.color = {
        car: 'green',
        salon: 'brown',
        wheels: 'silver'
      };
      this.options = ['ABS', 'Parking', 'Cruise'];
    }
  }

  addOpt(option) {
    this.options.push(option);
    return false;
  }

  deleteOpt(option) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

}


interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
