import faker from "faker";
import { Mappable } from "./Mappable";

export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent = function():string{
    return (
      `<div>Name: ${this.name} </div>`
    )
  }
}
