console.log('Running app.ts')
abstract class Automobile {
  constructor(
    protected model: string,
    protected year: number,
    protected producer: string,
  ) { }

  abstract drive(vehicle: string): void;
}

class Car extends Automobile {
  drive() {
    console.log(`Driving car ${this.producer} ${this.model} ......`);
  }
}

class Truck extends Automobile {
  drive() {
    console.log(`Driving truck ${this.producer} ${this.model} ......`);
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ' + amount + '...');
    console.log('Cargo loaded!')
  }
}

type Vehicle = Car | Truck;

const v1 = new Car('Ethios', 2012, 'Toyota')
const v2 = new Truck('L200', 2018, 'Nissan')

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive()

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(25000)
  }
}

useVehicle(v1)
useVehicle(v2)