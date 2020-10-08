import knex from "knex";
import BaseDatabase from "./BaseDb";
import { NewOfficeDTO } from "../Models/Office";

export default class OfficeDb extends BaseDatabase {
  private static TABLE_OFFICE: string = "office";

  async getOfficeById(id: string): Promise<any> {
    try {
      const result = await this.getconnection().raw(
        `
        SELECT * FROM ${OfficeDb.TABLE_OFFICE}
          WHERE ${OfficeDb.TABLE_OFFICE}.id = "${id}"
        `
      );
      return result[0][0];

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async listOffices(): Promise<any> {
    try {
      const result = await this.getconnection().raw(
        `
          SELECT * FROM ${OfficeDb.TABLE_OFFICE}
        `
      );
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async newOffice(office: NewOfficeDTO): Promise<void> {
    try {
      await this.getconnection()
        .insert({
          type: office.type,
          description: office.description,
        })
        .into(OfficeDb.TABLE_OFFICE);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}




