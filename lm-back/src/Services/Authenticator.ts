import * as jwt from "jsonwebtoken";
import { ScriptElementKindModifier } from "typescript";

interface AuthenticationData {
  id: string;
}


export default class Authenticator {
  private static EXPIRES_IN = "30min";

  public generateToken = (input: AuthenticationData, expiresIn: string = Authenticator.EXPIRES_IN): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      }
    );
    return token;

    ScriptElementKindModifier
  };

  public getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id, 
      };
    return result;
  }
}