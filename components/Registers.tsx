import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router'
type RegisterProps = {
    
};

const Registers:React.FC<RegisterProps> = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [name, setName] = useState("")
const router = useRouter()
    const Registers = () => {

        fetch("https://assign-api.piton.com.tr/api/rest/register" , {
           headers: {
               "Content-type": "application/json"
           },
           method:"POST",
           body: JSON.stringify({  email,  password , name })
       }).then(response => response.json()).then((data) => {
       if(data) {
           console.log(data.action_register)
       }
       })
    }
    return <div  className='flex flex-row  overflow-y-hidden '>
    <div className='w-3/5 h-screen'>
    <img src='main.svg'/>
    </div>
    <div  className='flex flex-col items-center justify-center mt-10'>
        <img src='Logo.svg'/>
  
        <text className=' flex  self-start font-normal  text-2xl mt-20'>
        Welcome back!
        </text>
        <text className='text-3xl self-start fıbt-bold leading-10'>
        Login to your account
        </text>
        <div className='flex flex-col w-96 h-16 mt-20'>
            <text className='text-xl self-start font-semibold leading-7 '>Name</text>
        <input value={name} onChange={(e) => setName(e.target.value)} required className='border-0  gap-4 p-4 bg-zinc-100' placeholder='John Doe'/>
        </div>
        <div className='flex flex-col w-96 h-16 mt-10'>
            <text className='text-xl self-start font-semibold leading-7 '>E-mail</text>
        <input value={email} onChange={(e) => setEmail(e.target.value)}  type={"email"} required className='border-0  gap-4 p-4 bg-zinc-100' placeholder='john@mail.com'/>
        </div>
        <div className='flex flex-col w-96 h-16 mt-10'>
            <text className='text-xl self-start font-semibold leading-7 '>Password</text>
        <input value={password} onChange={(e) => setPassword(e.target.value)} required type={"password"} className='border-0  gap-4 p-4 bg-zinc-100'/>
        </div>
        <div className='flex flex-col gap-2.5 mt-20'>
<button onClick={Registers}  className='flex items-center justify-center bg-orange-500 px-40 py-3.5'>
<text className='text-white font-semibold text-xl leading-8'>
Register
</text>
</button>
<button onClick={() => router.push('/')}  className='flex items-center border justify-center border-indigo-500 px-40 py-3.5'>
<text className='text-indigo-500 font-semibold text-xl leading-8'>
Login
</text>
</button>
        </div>
    </div>

</div>
}



export default Registers;