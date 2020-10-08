import moment from "moment";

import OfficeDb from '../Data/OfficeDb';
import { NewOfficeDTO, Office } from "../Models/Office";

export default class OfficeBusiness {
  private officeDb = new OfficeDb();

  public async showOffice(id: string): Promise<any> {
    try {
      const office: Office = await this.officeDb.getOfficeById(id);

      return office;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async listOffices(): Promise<[]> {
    try {
      const offices = await this.officeDb.listOffices();

      return offices;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async newOffice(office: NewOfficeDTO) {
    if (!office.type || !office.description) {
      throw new Error("Input Inválido");
    }

    const newOffice: NewOfficeDTO = {
      type: office.type,
      description: office.description,
    };

    await this.officeDb.newOffice(newOffice);
  }
}
