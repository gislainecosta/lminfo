import { Request, Response } from "express";
import { stringify } from "querystring";
import EmployeeBusiness from "../Business/EmployeeBusiness";
import BaseDataBase from "../Data/BaseDb";
import { EmployeeReqDTO } from "../Models/Employee";

export class EmployeeController {
  async showEmployee(req: Request, res: Response): Promise<void> {
    try {
      const employeeBusiness = new EmployeeBusiness();
      const employee = await employeeBusiness.showEmployee(req.body.id);

      res.status(200).send(employee);
    } catch (error) {
      res.status(400).send({ error: error.message });
    } finally {
      BaseDataBase.destroyConnection();
    }
  }

  async listEmployees(req: Request, res: Response): Promise<void> {
    try {
      const employeeBusiness = new EmployeeBusiness();
      const employees = await employeeBusiness.listEmployees();

      res.status(200).send(employees);
    } catch (error) {
      res.status(400).send({ error: error.message });
    } finally {
      BaseDataBase.destroyConnection();
    }
  }

  async newEmployee(req: Request, res: Response): Promise<void> {
    try {
      const employeeBusiness = new EmployeeBusiness();

      const employee: EmployeeReqDTO = {
        name: req.body.name,
        surname: req.body.surname,
        photo: req.body.photo,
        office: req.body.office,
        birthDate: req.body.birthDate,
        salary: req.body.salary,
      };

      const newEmployee = await employeeBusiness.newEmployee(employee);
      res.status(200).send("Funcionário criado com sucesso");
    } catch (err) {
      res.status(400).send({ error: err.message });
    } finally {
      BaseDataBase.destroyConnection();
    }
  }

  async deleteEmployee(req: Request, res: Response): Promise<void> {
    try {
      const employeeBusiness = new EmployeeBusiness();
      const employees = await employeeBusiness.deleteEmployee(req.body.id);

      res.status(200).send('Funcionário deletado com sucesso');
    } catch (error) {
      res.status(400).send({ error: error.message });
    } finally {
      BaseDataBase.destroyConnection();
    }
  }
}