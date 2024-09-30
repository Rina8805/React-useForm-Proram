//import { createContext } from "react";


//export const context = createContext();

    const SignupValidations={
        validateFullName:{
            required:{value:true, message:'full name is must.'},
            minLength:{value:10, message:'full name is short.'},
            maxLength:{value:30, message:'full name is to large.'},
            pattern:{value: /^[A-Z]{1}[a-z]/, message:'Invalid fullname, try with uppercase letter'}
        },
        validateAge:{
            required:{value:true, message:'Age is required.'},
            min:{value:18, message:'Age must be 18 or greater.'},
            max:{value:60, message:'Age must be 60 or less.'},
            pattern:{value: /[0-9]/, message:'Enter digits only'} 
        }
    }

 
 export default SignupValidations;