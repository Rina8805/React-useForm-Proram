import { useForm } from 'react-hook-form';
import SignupValidations from '../validations/AppValidations';
import '../styles/Common.css';
//import { context} from '../validations/AppValidations';
//import { useContext } from 'react';

function Signup() 
{
  const {register,handleSubmit,reset,setValue, formState:{errors}} = useForm();

  // const data = useContext(context)

//   const SignupValidations={
//     validateFullName:{
//         required:{value:true, message:'full name is must.'},
//         minLength:{value:10, message:'full name is short.'},
//         maxLength:{value:30, message:'full name is to large.'},
//         pattern:{value: /^[A-Z]{1}[a-z]/, message:'Invalid fullname, try with uppercase letter'}
//     },
//     validateAge:{
//         required:{value:true, message:'Age is required.'},
//         min:{value:18, message:'Age must be 18 or greater.'},
//         max:{value:60, message:'Age must be 60 or less.'},
//         pattern:{value: /[0-9]/, message:'Enter digits only'} 
//     }
//  }

  function onHandleSubmit(data)
  {
    alert('Form is Submitted...!')
    console.log(data)
    console.log(SignupValidations)
  }
  const clearForm = ()=>reset();

  const dummyUser={
      fullName:'ABC',
      age:25,
      contact:7869528734,
      emailId:'abc@gmail.com',
      address:'Washim',

      bankInfo:{
        bankName:'SBI',
        accountNumber:9008877622,
        branchName:'Manora',
        ifsc_Code:'SBIN7770009'
      }
  }

  function onUpdate()
  {
     for(let prop in dummyUser)
     {
        setValue(prop, dummyUser[prop])
     }
  }

  return (
    <div className='container' style={{margin:'100px'}}>
      <form  onSubmit={handleSubmit(onHandleSubmit)}>
      <p className='error'>{errors.fullName && errors.fullName.message}</p>
        <div>
            <label>Enter Fullname : </label>
            <input type='text' {...register('fullName', SignupValidations.validateFullName)}/>
        </div> &nbsp;
        <p className='error'>{errors.age && errors.age.message}</p>
        <div>
            <label>Enter Age : </label>
            <input type='text' {...register('age', SignupValidations.validateAge)}/>
        </div>  &nbsp;
        <div>
            <label>Enter Contact : </label>
            <input type='text' {...register('contact')}/>
        </div>  &nbsp;
        <div>
            <label>Enter Email-Id : </label>
            <input type='text' {...register('emailId')}/>
        </div>  &nbsp;
        <div>
            <label>Enter Address :  a </label>
            <input type='text' {...register('address')}/>
        </div>  &nbsp;
        <div>
            <label>Enter Bank Name : </label>
            <input type='text'{...register('bankInfo.bankName')}/>
        </div>  &nbsp;
        <div>
            <label>Enter Account Number : </label>
            <input type='text'{...register('bankInfo.accountNumber')}/>
        </div>  &nbsp;
        <div>
            <label>Enter Branch Name : </label>
            <input type='text' {...register('bankInfo.branchName')}/>
        </div>  &nbsp;
        <div>
            <label>Enter IFSC_Code : </label>
            <input type='text' {...register('bankInfo.ifsc_Code')}/>
        </div>  <br/>
        <button>Submit</button>  &nbsp;

        <button onClick={clearForm}>Clear</button> &nbsp;

        <button onClick={onUpdate}>Update Data</button>
      </form>

    </div>
  )
}

export default Signup;
