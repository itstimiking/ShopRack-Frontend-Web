import React,{useState, useEffect, useRef} from 'react';
import Button from '../../components/button-component/Button';
import { useTheme } from '../../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthUserContext';

const Signin = () => {
  const signin = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const {login} = useAuth();

  const signinHandler = (e)=>{
    e.preventDefault();
    setLoading(true);
    login(email.current.value,password.current.value);
    navigate("/dashboard")
  }

  useEffect(()=>{
    const ev = signin.current
    ev.addEventListener("click",signinHandler)

    return ()=>{
      if(ev !== null){
        ev.removeEventListener("click",signinHandler);
      }  
      setLoading(false)
    }
  },[])

  return (
    <div className='h-screen flex justify-between items-center'>
      <div
        style={{
          background: theme.secondary.light,
          color: theme.textcolor.light,
        }}
        className='hidden md:flex w-2/4 h-screen  flex-col justify-center items-center'>
        {/* <div className=' pl-0'>
          <img src='/img/shoprack-inventory.svg' alt='' />
        </div> */}
        <div className='  px-10 pt-32 '>
          <div className='pl-64'>
            <img src='/img/white-quotes.svg' alt='' />
          </div>
          <div className='px-20'>
            <p className='pt-14 pb-5'>
              ShopRacks, as a business solution leverages on
              technology to facilitate the core aspect of
              your online store. We provides a platform for
              you to easily document, send and track
              invoices. You can also manage and track
              inventories, orders and deliveries seemlessly
            </p>
            <p className='pb-5 pl-36'>Shopracks, Nigeria</p>
            <p className='pt-48 pl-28'>
              OTHER FINANCE PRODUCTS
            </p>
            <div className='flex justify-around pt-8'>
              <p>Shopracks Subscriptions</p>
              <p>Shopracks Expenses</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full md:w-2/4 px-8 '>
        <div className=''>
          <img src='/img/shoprack-logo.svg' alt='' />
        </div>
        <form action='' className='flex flex-col'>
          <div>
            <input
              type='email'
              ref={email}
              placeholder='Email Address'
              className='p-4 mt-5 focus:border-2 rounded-full outline-none w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>
          <div>
            <input 
              type='password'
              ref={password} 
              placeholder='Password' 
              className='p-4 my-5 focus:border-2 rounded-full outline-none w-full'
              style={{
                border: `1px solid ${theme.primary.dark}`,
              }}
            />
          </div>

          <Button 
            text={loading ? 'Loading...' : 'SIGN IN'} 
            background
            disable={loading}
            refs={signin}
          />

          <p className='px-7 py-3'>
            Don't have a Shopracks account? 
            <Link
              to='/signup'
              style={{
                color: theme.primary.dark,
              }}>
               &nbsp; Sign Up
            </Link>
          </p>
          <p className='text-center py-7'>
            Forgot Password??
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
