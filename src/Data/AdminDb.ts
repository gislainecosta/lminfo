import knex from "knex";
import BaseDatabase from "./BaseDb";
import {AdminSignupDTO} from "../Models/Admin"
import { Admin } from "../Models/Admin";

export default class AdminDb extends BaseDatabase {
  private static TABLE_ADMIN: string = "admin";

  async signup(admin: AdminSignupDTO): Promise<void> {
    try {
      await this.getconnection()
        .insert({
          id: admin.id,
          email: admin.email,
          password: admin.password,
        })
        .into(AdminDb.TABLE_ADMIN);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getByEmail(email: string): Promise<Admin> {
    try {
      const result = await this.getconnection().raw(
        `
            SELECT *
            FROM ${AdminDb.TABLE_ADMIN}
            WHERE email = "${email}";
            `
      );

      return Admin.toAdminModel(result[0][0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}