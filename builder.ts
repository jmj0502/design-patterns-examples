class Employee {
  private name: string;
  private address: string;
  private job: string;
  private age: number;
  private ssn: string;

  public constructor() {}

  public setName(name: string): Employee {
    this.name = name;
    return this;
  }

  public setAddress(address: string): Employee {
    this.address = address;
    return this;
  }

  public setJob(job: string): Employee {
    this.job = job;
    return this;
  }

  public setAge(age: number): Employee {
    this.age = age;
    return this;
  }

  public setSSN(ssn: string): Employee {
    this.ssn = ssn;
    return this;
  }

  public build(): void {
    console.log(this);
  }
}

const employee = new Employee().setAge(30).setAddress("Los Angeles").setJob(
  "Actor",
).setName("Tom Cruise").setSSN("1122345");
employee.build();
