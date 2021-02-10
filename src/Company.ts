import faker from "faker";
import { Mappable } from "./Mappable";


export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent = function():string{
    return (
      `<div>Company: ${this.companyName} </div>`
    )
  }
}


// AIzaSyCzcm0nK8o-iZim1jHsUe-UHFuDIRt0E_8