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
        let flLogin: boolean = false
        const message: string = 'Wrong login or password, try again'
        const logCur = this.users.find (el => 
          /*
            { if( loginData.username === el.username )
                  loginData.password === el.password;
        }
            */
        loginData.username === el.username
        )
        if (logCur) {
            flLogin = logCur.password === loginData.password ?
            true : false;
        }

        if (!flLogin) {
            throw message;
        }

    }

}

