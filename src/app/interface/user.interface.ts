export interface User{
    _id? : string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    photo?: string;  
    phone: number;
    dob: string;
    password: string;
    confirmPassword: string;
      
      
}
export interface AllUsers{
 staus:string;
 results: number;
 data : Array<User>;
      
      
}

export interface SignUpUser{
    data: {
        _id : string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    
    phone: number;
    dob: string; 
    }
    status: String;
   
}
export interface AuthResponse{
    
    stataus : String,
    token: String,
    expiresIn : Number
   
}