import { Course } from "./course";
import { User } from "./user";

export class Teacher extends User {
    firstName!: string;
    lastName!: string;
    email!: String;
    contact!: String;
    userName!: String;
    password!: String;
    
    constructor()
    {
        super();
    }

}
