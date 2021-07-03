import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column({ name: "user_name" })
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ name: "full_name" })
    fullName: string;

    @CreateDateColumn({ name: "join_date" })
    joinDate: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
