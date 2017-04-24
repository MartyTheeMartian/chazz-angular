import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import arrayShuffler from '../../helpers/array-shuffler';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})

export class DropdownsComponent implements OnInit {

  http: Http;
  animal: string;
  firmness: string;
  animalReset: boolean;
  firmnessReset: boolean;
  animalCheeses: Object[];
  firmnessCheeses: Object[];

  constructor(http: Http) {
    this.http = http;
    // this.animalCheeses = animalCheeses;
    // this.firmnessCheeses = firmnessCheeses;
  }

  getAnimal(animal) {
    const animalURL = 'http://cheeswhiz.herokuapp.com/api/cheese/animal/';
    this.http.get(animalURL + animal)
      .subscribe((res: Response) => {
        let animalCheeses = res.json();
        console.log(animalCheeses);

      });
  }

  getFirmness(firmness) {
    const firmnessURL = 'http://cheeswhiz.herokuapp.com/api/cheese/firmness/';
    this.http.get(firmnessURL + firmness)
      .subscribe((res: Response) => {
        let firmnessCheeses = res.json();
        console.log(firmnessCheeses);

      });
  }

  smooshArrays (array1, array2) {
  let combinedCheeses = [];
  let array1Names = array1.map((element) => element.name);
  let array2Names = array2.map((element) => element.name);

  for (let i = 0; i < array1Names.length; i++) {
    if (array2Names.indexOf(array1Names[i]) > -1) {
      combinedCheeses.push(array1[i]);
    }
  }
  return(arrayShuffler(combinedCheeses));
}

  onAnimalSelection(event) {
    event.preventDefault();
    if(event.target.text !== 'Reset') {
      this.getAnimal(event.target.text.toLowerCase());
      this.animal = event.target.text;
      this.animalReset = false;
    }
    else {
      this.animal = 'Animal';
      this.animalReset = true;
    }
  }

  onFirmnessSelection(event) {
    event.preventDefault();
    if(event.target.text !== 'Reset') {
      this.getFirmness(event.target.text.toLowerCase());
      this.firmness = event.target.text;
      this.firmnessReset = false;
    }
    else {
      this.firmness = 'Firmness';
      this.firmnessReset = true;
    }
  }

  ngOnInit() {
    this.animal = "Animal";
    this.firmness = "Firmness";
    this.animalReset = true;
    this.firmnessReset = true;
  }

}
