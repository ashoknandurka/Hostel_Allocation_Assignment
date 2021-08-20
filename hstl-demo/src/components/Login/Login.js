import React, {useState} from 'react'

const Login =() => {
    const [email, SetEmail] = useState("");
    const [password,setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

   const submitForm = (e) => {
       e.preventDefault();

       const newEntry = {email:email, password:password};

       setAllEntry([...allEntry,newEntry]);
       console.log(allEntry);
   }
    return (
       <>
       <form className="login-form" onSubmit = {submitForm}>
           <div>
               <label htmlFor="email">Email</label>
               <input type="text" name="email" id="email" autoComplete="off" 
               value={email} 
               onChange={(e) => SetEmail(e.target.value)} />
           </div>

           <div>
               <label htmlFor="password">password</label>
               <input type="password" name="password" id="password" autoComplete="off" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
           </div>

           <button type="submit">Login</button>
       </form>
       
       </>
    )
}

export default Login