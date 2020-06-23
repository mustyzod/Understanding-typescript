interface UserInterface {
    name: string;
    email: string;
    age: number;
    register(): void;
    payInvoice(): void;
}

class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(`${this.name} has been registered successfully!!`);
    }

    payInvoice() {
        console.log(`${this.name} payment successful!!`);
    }

}

let zod = new User('Sodruldeen', 'mustyzod@gmail.com', 27);

class Members extends User {
    id: number;

    constructor(name: string, email: string, age: number, id: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

const member = new Members('Sodruldeen Mustapha', 'zodbis@gmail.com', 27, 1009);
member.payInvoice();
