import knex from "knex";
import BaseDatabase from "./BaseDb";
import { NewEmployeeDTO } from "../Models/Employee";

export default class EmployeeDb extends BaseDatabase {
  private static TABLE_OFFICE: string = "office";
  private static TABLE_EMPLOYEE: string = "employee";

  async getEmployeeById(id: string): Promise<any> {
    try {
      const result = await this.getconnection().raw(
        `
        SELECT ${EmployeeDb.TABLE_EMPLOYEE}.id, ${EmployeeDb.TABLE_EMPLOYEE}.name, ${EmployeeDb.TABLE_EMPLOYEE}.surname, ${EmployeeDb.TABLE_EMPLOYEE}.photo, ${EmployeeDb.TABLE_EMPLOYEE}.birthDate, ${EmployeeDb.TABLE_EMPLOYEE}.salary, ${EmployeeDb.TABLE_OFFICE}.type as office FROM ${EmployeeDb.TABLE_EMPLOYEE}
            JOIN ${EmployeeDb.TABLE_OFFICE}
            ON ${EmployeeDb.TABLE_EMPLOYEE}.${EmployeeDb.TABLE_OFFICE} = ${EmployeeDb.TABLE_OFFICE}.id
            WHERE ${EmployeeDb.TABLE_EMPLOYEE}.id = "${id}"
        `
      );
      return result[0][0];

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async listEmployees(): Promise<any> {
    try {
      const result = await this.getconnection().raw(
        `
          SELECT ${EmployeeDb.TABLE_EMPLOYEE}.id, ${EmployeeDb.TABLE_EMPLOYEE}.name, ${EmployeeDb.TABLE_EMPLOYEE}.surname, ${EmployeeDb.TABLE_EMPLOYEE}.photo, ${EmployeeDb.TABLE_EMPLOYEE}.birthDate, ${EmployeeDb.TABLE_EMPLOYEE}.salary, ${EmployeeDb.TABLE_OFFICE}.type as office FROM ${EmployeeDb.TABLE_EMPLOYEE}
            JOIN ${EmployeeDb.TABLE_OFFICE}
            ON ${EmployeeDb.TABLE_EMPLOYEE}.${EmployeeDb.TABLE_OFFICE} = ${EmployeeDb.TABLE_OFFICE}.id
        `
      );
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async newEmployee(employee: NewEmployeeDTO): Promise<void> {
    try {
      await this.getconnection()
        .insert({
          id: employee.id,
          name: employee.name,
          surname: employee.surname,
          photo: employee.photo,
          office: employee.office,
          birthDate: employee.birthDate,
          salary: employee.salary,
        })
        .into(EmployeeDb.TABLE_EMPLOYEE);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}




