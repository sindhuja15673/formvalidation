import React,{useState} from "react";
import './App.css';

const App=()=>{
    const [email, setEmail] = useState('');
    const[isValidEmail, setIsValidEmail]=useState(true);

    const [name,setName]=useState('');
    const[isValidName, setIsValidName]=useState(true);

    const handleNameChange=(e)=>{
        setName(e.target.value);
        setIsValidName(e.target.value?.length>0)
    }
    const handleEmailChange=(e)=>{
        const inputEmail=e.target.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailPattern.test(inputEmail));
        setEmail(inputEmail);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailPattern.test(email))

        setIsValidName(name.length>0)
        isValidEmail && isValidName? alert('Form Submitted'):
        alert('Form Validation Failed');
    }

    return(
        <div className="background-image">
        <div className="App">
            
            <h1>React Form Validation</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} id="email" onChange={handleEmailChange} className={isValidEmail? 'valid': 'invalid'}/>
                </div>
                
                <div className="form-feedback">
                    {
                        !isValidEmail && (<span className="invalid-email">Enter valid email</span>)
                    }

                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} id="name" onChange={handleNameChange} className={isValidName? 'valid':'invalid'}/>

                </div>

                <div className="form-feedback">
                    {
                        !isValidName && (<span className="invalid-name">Enter valid name</span>)
                    }

                </div>
                <br /><br /><br />

                <button type="submit" >Submit</button>
                </form>

        </div>
        </div>
    );

}

export default App;