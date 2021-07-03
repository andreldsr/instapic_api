import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { hash } from 'bcryptjs'

interface CreateUserDTO {
    userName: string;
    email: string;
    fullName: string;
    password: string;
}

class CreateUserService {
    userRespository: UserRepository;

    constructor() {
    }

    async execute({ userName, email, fullName, password }: CreateUserDTO) {
        this.userRespository = getCustomRepository(UserRepository);
        const userAlreadyExists = await this.userRespository.findOne({
            userName
        })

        if (!email) {
            throw new Error("Email incorrect!")
        }

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const passwordHash: string = await hash(password, 8)

        const user = this.userRespository.create({
            userName,
            email,
            fullName,
            password: passwordHash
        })

        await this.userRespository.save(user);

        return user;

    }
}

export { CreateUserService };