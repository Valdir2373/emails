import { Column, Entity, PrimaryColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/browser/decorator/columns/PrimaryGeneratedColumn.js";

@Entity()
export class User {
   @PrimaryGeneratedColumn("uuid") // Mude de @PrimaryColumn para @PrimaryGeneratedColumn
    id!: string;

    @Column("text", { unique: true })
    email!: string;

    @Column("text")
    password!: string;

    @Column("int")
    age!: number;
}


