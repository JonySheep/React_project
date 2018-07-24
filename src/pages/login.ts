export interface LoginEntity{
    login:string;
    password:string;
}

export const createEmptyLogin=()=>(
    {
        login:'',
        password:'',
    }
)