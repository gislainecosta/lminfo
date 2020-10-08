import { Request, Response } from "express";
import AdminBusiness from "../Business/AdminBusiness";
import { AdminReqDTO } from "../Models/Admin";
import BaseDataBase from "../Data/BaseDb";

export class AdminController {
  async signup(req: Request, res: Response): Promise<void> {
    try {
      const adminBusiness = new AdminBusiness();
      const admin: AdminReqDTO = {
        email: req.body.email,
        password: req.body.password,
      };
      const accessToken = await adminBusiness.signupAdmin(admin);
      res.status(200).send({ token: accessToken });
    } catch (err) {
      res.status(400).send({ error: err.message });
    } finally {
      BaseDataBase.destroyConnection();
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const adminData = {
        email: req.body.email,
        password: req.body.password,
      };

      const adminBusiness = new AdminBusiness();
      const accessToken = await adminBusiness.login(
        adminData.email,
        adminData.password
      );

      res.status(200).send({ token: accessToken });
    } catch (error) {
      res.status(400).send({ error: error.message });
    } finally {
      BaseDataBase.destroyConnection();
    }
  }
}
