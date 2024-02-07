import { ClassSerializerInterceptor, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async compareHashedPassword(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    try {
      await bcrypt.compare(password, hashPassword);
      return true;
    } catch (error) {
      return false;
    }
  }

  generateToken(payload: any): string {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
