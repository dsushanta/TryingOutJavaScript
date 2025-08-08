class Department {
  constructor(private departmentName: string, private employees: string[]) {
    this.departmentName = departmentName;
    this.employees = employees;
  }
    
  addEmployee(eName: string){
    this.employees.push(eName);
  }
}

class IT extends Department {
  constructor(private id: string, employees: string[]) {
    super('IT', employees);
    this.id = id;
  }
  display(){
    console.log(this);
  }
}

const dep = new IT('id-01', []);
dep.addEmployee('Joey');
dep.addEmployee('Chandler');
dep.display();