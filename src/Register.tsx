import { AiOutlineLock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";



  
const Register = () => {

    return (
        <div>
            <div className = "bg-zinc-950 border border-zinc-100 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
                <form action="">
                <div className= "relative my-4">
                    <input type="email" className ="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-zinc-600 focus:outline-none focus:ring-0 focus:text-white focus:border-zinc-600 peer" placeholder = ""/>
                    <label htmlFor="email" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 " >Your Email</label>
                    <BiUser className= "absolute top-1 right-4"/>
                   
                    {/*(<input type="password"/>*/}
                    {/*<label htmlFor="password">Password</label>*/}
                </div>
            
                <div className= "relative my-4">
                    <input type="password" className ="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-zinc-600 focus:outline-none focus:ring-0 focus:text-white focus:border-zinc-600 peer" placeholder = "" />
                    <label htmlFor="password" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 " >Your Password</label>
                    <AiOutlineLock className= "absolute top-1 right-4"/>
                </div>

                <div className= "relative my-4">
                    <input type="confirmPassword" className ="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-zinc-600 focus:outline-none focus:ring-0 focus:text-white focus:border-zinc-600 peer" placeholder = "" />
                    <label htmlFor="confirmPassword" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 " >Confirm Your Password</label>
                    <AiOutlineLock className= "absolute top-1 right-4"/>
                </div>

                    
                <button className = "w-full mb-4 text-[18px] mt-6 rounded-full bg-zinc-900 text-zinc-300 hover:bg-zinc-950 hover:text-white py-2 transition-colors duration-300" type ="submit">Login</button>
                <div>
                    <span className= "mt-4">Already have an account? <Link className='text-blue-500' to={"/login"}>Login</Link></span>
                </div>
                </form>
            </div>
        </div>
    )
}   

export default Register