import moment from "moment";

import EmployeeDb from "../Data/EmployeeDb";
import IdGenerator from "../Services/IdGenerator";
import { NewEmployeeDTO, EmployeeReqDTO, Employee } from "../Models/Employee";

export default class EmployeeBusiness {
  private employeeDb = new EmployeeDb();

  public async showEmployee(id: string): Promise<any> {
    try {
      const employee: Employee = await this.employeeDb.getEmployeeById(id);

      const employeeBd = employee.birthDate;

      const date: string = moment(employeeBd).format("DD/MM/YYYY");
      console.log(date)

      const employeeObject: Employee = {
        id: employee.id,
        name: employee.name,
        surname: employee.surname,
        photo: employee.photo,
        birthDate: date,
        salary: employee.salary,
        office: employee.office,
      };

      return employeeObject;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async listEmployees(): Promise<any> {
    try {
      const employees = await this.employeeDb.listEmployees();
      
      const employeesList = []

      for (let i = 0; i < employees.length; i++) {
        const employeeBd = employees[i].birthDate;
        const date: string = moment(employeeBd).format("DD/MM/YYYY");

        const employeeObject: Employee = {
          id: employees[i].id,
          name: employees[i].name,
          surname: employees[i].surname,
          photo: employees[i].photo,
          office: employees[i].office,
          birthDate: date,
          salary: employees[i].salary,
        };

        employeesList.push(employeeObject);
      }

      return employeesList;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async newEmployee(employee: EmployeeReqDTO) {
    if (
      !employee.name ||
      !employee.surname ||
      !employee.office ||
      !employee.birthDate ||
      !employee.photo
    ) {
      throw new Error("Input Inválido");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const newEmployee: NewEmployeeDTO = {
      id: id,
      name: employee.name,
      surname: employee.surname,
      photo: employee.photo,
      office: employee.office,
      birthDate: employee.birthDate,
      salary: employee.salary,
    };

    await this.employeeDb.newEmployee(newEmployee);
  }
  public async deleteEmployee(id:string): Promise<void> {
    try {
      const employees = await this.employeeDb.deleteEmployee(id);

    } catch (error) {
      throw new Error(error.message);
    }
  }
}
