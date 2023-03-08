
import "../css/register.css"
import {useState} from 'react'



function Register() {



    const [isSubmit,setSubmit] = useState(false)
    const [isDisplay,setSuccessDisplay] = useState(false)
    const [error, populateError] = useState({
    first_name : true,
    last_name : true,
    email : true,
    phone_number : true
    });


    const handleChange = (e)=>{
        const key = e.target.getAttribute('data_key');
        console.log(key)
        setSuccessDisplay(false)
        if(e.target.value!=='')
        {
            populateError( oldState => ({
                ...oldState, [key]: false
            }));          
               
        }
        else{
            populateError( oldState => ({
                ...oldState, [key]: true
            }));
        }
         console.log(error)

    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        setSubmit(true)
        setSuccessDisplay(true)
        console.log(isSuccessDisplay());
    }

    const isSuccessDisplay = () =>{
        return Object.values(error).every((value) => value !== true);
    }

  return (
    <div className='form'>
         <form onSubmit={handleSubmit}>
        {isSuccessDisplay() && isDisplay && <p className="success"> Registration Successfull </p>  }
<input type="text" data_key='first_name' placeholder='First Name' onChange={handleChange} />
{isSubmit && error.first_name && <p className="error"> Please enter First Name </p> }
<input type="text" data_key='last_name'  placeholder='Last Name' onChange={handleChange} />
{isSubmit && error.last_name && <p className="error"> Please enter Last Name</p> }
<input type="text" data_key='email'  placeholder='Email' onChange={handleChange}/>
{isSubmit && error.email && <p className="error"> Please enter Email </p> }
<input type="text" data_key='phone_number' placeholder='Phone Number'onChange={handleChange}/>
{isSubmit && error.phone_number && <p className="error"> Please enter Phone Number </p> }
<button type='Submit'> Register </button>
</form>
    </div>
   
  )
}

export default Register