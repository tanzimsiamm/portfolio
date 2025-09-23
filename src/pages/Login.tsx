
import Container from '../components/Container';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLoginMutation } from '../redux/features/authentication/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/features/authentication/authSlice'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [ loading , setLoading] = useState(false)
  const [ errors, setErrors] = useState({emailError: '', passwordError: ''})
  const [ login ] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)

    const form  = new FormData(e.target);
    const email = form.get('email')
    const password = form.get('password')


    const res = await login({ email, password})

    if(res?.error?.data?.message === 'user not exist'){
      setErrors({...errors, emailError: 'Incorrect Email'})
      setLoading(false);
    }
    else if(res?.error?.data?.message === 'Password incorrect'){
      setErrors({...errors, passwordError: 'Incorrect Password'})
      setLoading(false);
    }
   else if(res?.data?.success){
    const user = res?.data?.data?.user;

    dispatch(setUser({
      user : user ,
      token : res.data?.data?.token
    }))

    toast.success('Logged In Successfully')
    setLoading(false);
    navigate('/dashboard/skills')
   }
}


  return (
  <Container>
      <div className=" bg-[#0F1724] text-white flex flex-col justify-center items-center px-10 md:px-16 mt-1 lg:mt-6">
      <h1 className=" text-2xl md:text-3xl lg:text-4xl rowdies-regular gradient-text mb-2 text-right md:text-left mt-3 md:mt-0">Admin Login</h1>
     

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row md:space-x-8 w-full bg-[#0F1724] rounded-lg shadow-lg">
        {/* Form */}
        <div className="w-full">
          <form onSubmit={handleLogin}  className="space-y-5">
          
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Your Email</label>
              <input
              name='email'
                type="email"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Enter your email"
               
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Your Password</label>
              <input
              name='password'
                type="password"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Your Password"
                defaultValue={'password7'}
              />
            </div>
    
            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-[#9071E9] to-[#2DAEDD] rounded-lg font-semibold hover:from-[#2DAEDD] hover:to-[#9071E9]  ">
             {loading?'Logging...': 'Login'}
            </button>
          </form>
        </div>

      </div>
    </div>
  </Container>
  );
};

export default Login;
