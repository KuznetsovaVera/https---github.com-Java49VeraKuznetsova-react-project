import { LoginData } from "../model/LoginData";

export class AuthService {
    private users: LoginData[] = [
        {username: 'user@gmail.com', password: 'user1234'},
        {username: 'admin@gmail.com', password: 'admin1234'}
    ];
     login (loginData: LoginData): void {
        //TODO
        //throws exception in the case mismatchig a given loginData
        //with array of users (field users)
      
        const message: string = 'error'
        
            if( this.users.findIndex((cur) => {
                return cur.username === loginData.username &&
                       cur.password === loginData.password
            }) < 0) {
                throw message;
            }
         
    }

}

