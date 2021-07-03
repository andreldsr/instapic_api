import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../repositories/UserRepository';
import { sign } from 'jsonwebtoken';
import 'dotenv'

interface AuthenticationDTO {
    userName: string;
    password: string;
}

class AuthenticationService {
    async execute({ userName, password }: AuthenticationDTO) {
        const userRepository = getCustomRepository(UserRepository);

        const userExists = await userRepository.findOne({
            userName
        })

        if (!userExists) {
            throw new Error("Username or password incorrect!")
        }

        const passwordMatch = await compare(password, userExists.password)
        if (!passwordMatch) {
            throw new Error("Username of password incorrect!")
        }

        const token = sign(
            {
                id: userExists.id,
                name: userExists.userName,
                email: userExists.email
            }, process.env.JWT_KEY,
            {
                subject: userExists.id,
                expiresIn: "1d"
            }
        );
        return token;
    }
}

export { AuthenticationService }