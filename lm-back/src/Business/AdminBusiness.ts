import { AdminSignupDTO, AdminReqDTO } from "../Models/Admin";
import AdminDb from "../Data/AdminDb";
import IdGenerator from "../Services/IdGenerator";
import HashManager from "../Services/HashManager";
import Authenticator from "../Services/Authenticator";

export default class AdminBusiness {
  private adminDb = new AdminDb();

  public async signupAdmin(admin: AdminReqDTO) {
    if (!admin.email || !admin.password) {
      throw new Error("Input Inválido");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(admin.password);

    const adminSignup: AdminSignupDTO = {
      id: id,
      email: admin.email,
      password: hashPassword,
    };

    await this.adminDb.signup(adminSignup);

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({ id });

    return accessToken;
  }

  public async login(email: string, password: string): Promise<any> {
    try {
      if (!email || !password) {
        throw new Error("Input Inválido");
      }

      const admin = await this.adminDb.getByEmail(email);

      const hashManager = new HashManager();
      const correctPassword = await hashManager.compare(
        password,
        admin.getPassword()
      );

      if (!correctPassword) {
        throw new Error("senha inválida");
      }

      const authenticator = new Authenticator();
      const accessToken = await authenticator.generateToken({
        id: admin.getId(),
      });

      return accessToken;
    } catch (error) {
      throw new Error(
        error.message || "Erro ao fazer login, reveja os dados inseridos"
      );
    }
  }
}
