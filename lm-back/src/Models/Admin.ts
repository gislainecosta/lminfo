interface AdminSignupDTO {
  id: string;
  email: string;
  password: string;
};

interface AdminReqDTO {
    email: string;
    password: string;
};

class Admin {
    constructor(
        private id: string,
        private email: string,
        private password: string,
    ) { }

    getId(): string {
        return this.id;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    setId(id: string) {
        this.id = id;
    }

    setEmail(email: string) {
        this.email = email;
    }
    
    setPassword(password: string) {
        this.password = password;
    }


    static toAdminModel(admin: any): Admin {
        return new Admin(admin.id, admin.email, admin.password);
    }
}

export {Admin, AdminReqDTO, AdminSignupDTO }
