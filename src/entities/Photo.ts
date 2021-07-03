
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { User } from "./User";

@Entity("photos")
class Photo {
    @PrimaryColumn()
    readonly id: string

    @CreateDateColumn({ name: "post_date" })
    postDate: Date

    @Column()
    url: string

    @Column()
    description: string

    @Column({ name: "allow_comments" })
    allowComments: boolean

    @Column()
    likes: number

    @Column()
    comments: number

    @Column({ name: "user_id" })
    userId: string

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Photo }