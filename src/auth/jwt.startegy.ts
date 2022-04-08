import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpriation: false,
            secretOrKey: 'SECRET',   // protect this, move to env var
        })
    }

    async validate(payload: any) {
        // const user = await this.usersService.getById(payload.sub)
        return {
            id: payload.sub,
            name: payload.name,
        }
    }
}
