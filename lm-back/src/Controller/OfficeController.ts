import { Request, Response } from "express";
import OfficeBusiness from "../Business/OfficeBusiness";
import BaseDataBase from "../Data/BaseDb";
import { NewOfficeDTO } from "../Models/Office";

export class OfficeController {
  async listOffices(req: Request, res: Response): Promise<void> {
    try {
      const officeBusiness = new OfficeBusiness();
      const offices = await officeBusiness.listOffices(
        req.headers.token as string
      );

      res.status(200).send(offices);
    } catch (error) {
      res.status(400).send({ error: error.message });
    } finally {
      BaseDataBase.destroyConnection();
    }
  }

  async newOffice(req: Request, res: Response): Promise<void> {
    try {
      const officeBusiness = new OfficeBusiness();
      
      const office: NewOfficeDTO = {
        type: req.body.type,
        description: req.body.description,
      };

      const newOffice = await officeBusiness.newOffice(office);
      res.status(200).send('Cargo criado com sucesso');

    } catch (err) {
      res.status(400).send({ error: err.message });
    } finally {
      BaseDataBase.destroyConnection();
    }
  }
}