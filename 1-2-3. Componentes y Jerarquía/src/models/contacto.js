export class Contacto {
    name = '';
    surname = '';
    email = '';
    online = true 

    constructor(name, surname, email, online){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.online = online;
    }
}