import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list : Hero []=
  [
    {
      id: 1,
      name: "Batman",
      superPower: "Blackpower",
      address: "Gothem"
    }, 
    {
      id: 2,
      name: "Superman",
      superPower: "Flying",
      address: "New York"
    },
    {
      id: 3,
      name: "Aquaman",
      superPower: "Marmaid",
      address: "Ocean"
    },
    {
      id: 4,
      name: "Hulk",
      superPower: "Greenpower",
      address: "Philadelphia"
    },
    {
      id: 5,
      name: "Aintman",
      superPower: "Nanosize",
      address: "San Francisco"
    },
    {
      id: 6,
      name: "Sheldon Cooper",
      superPower: "Big Kid",
      address: "Los Angeles"
    },
  ];

  constructor() { }

  getAll(): Hero[] {
    return this.get(Hero)
  }
}
