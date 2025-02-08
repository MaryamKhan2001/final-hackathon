"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const Account = () => {
  const [loginData, setLoginData] = useState({
    usernameOrEmail: '',
    password: '',
    rememberMe: false,
  });

  const [registerData, setRegisterData] = useState({
    email: '',
  });

  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const handleLogin = () => {
    if (!loginData.usernameOrEmail || !loginData.password) {
      setLoginError('Please fill out all fields.');
      return;
    }
    setLoginError('');
    alert('Login successful!');
    // Add login logic here
  };

  const handleRegister = () => {
    if (!registerData.email) {
      setRegisterError('Please enter your email.');
      return;
    }
    setRegisterError('');
    alert('Registration successful!');
    // Add registration logic here
  };

  return (
    <><Header /><div className='w-full h-[760px] flex justify-center px-4'>
          <div className='flex flex-col sm:flex-row sm:gap-16 gap-8 pt-16'>
              {/* Login Section */}
              <div className='w-full sm:w-[400px]'>
                  <h1 className='text-4xl font-[Poppins]'>Login</h1>

                  <div className='mt-8 mb-6'>
                      <h2 className='text-xl font-semibold mb-2'>Username or Email</h2>
                      <input
                          type='text'
                          placeholder='Enter your username or email'
                          className='w-full sm:w-[400px] h-[40px] border border-gray-300 rounded-lg px-4'
                          value={loginData.usernameOrEmail}
                          onChange={(e) => setLoginData({ ...loginData, usernameOrEmail: e.target.value })} />
                  </div>

                  <div className='mb-6'>
                      <h2 className='text-xl font-semibold mb-2'>Password</h2>
                      <input
                          type='password'
                          placeholder='Enter your password'
                          className='w-full sm:w-[400px] h-[40px] border border-gray-300 rounded-lg px-4'
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                  </div>

                  <div className='flex items-center mb-6'>
                      <input
                          type='checkbox'
                          id='rememberMe'
                          className='w-4 pt-8 h-4 mr-2'
                          checked={loginData.rememberMe}
                          onChange={(e) => setLoginData({ ...loginData, rememberMe: e.target.checked })} />
                      <label htmlFor='rememberMe' className='text-base'>
                          Remember Me
                      </label>
                  </div>

                  {loginError && (
                      <p className='text-red-500 text-sm mb-4'>{loginError}</p>
                  )}

                  <div className='mb-6 pt-5'>
                      <button
                          onClick={handleLogin}
                          className='w-full sm:w-[400px] h-[40px] border-black shadow-lg bg-white text-black hover:bg-black hover:text-white rounded-lg'
                      >
                          Login
                      </button>
                  </div>

                  <div>
                      <Link href='/reset-password' className='text-blue-500 text-base hover:underline'>
                          Forget your password?
                      </Link>
                  </div>
              </div>

              {/* Register Section */}
              <div className='w-full sm:w-[400px]'>
                  <h1 className='text-4xl font-[Poppins]'>Register</h1>

                  <div className='mt-8 mb-6'>
                      <h2 className='text-xl font-semibold mb-2'>Email address</h2>
                      <input
                          type='text'
                          placeholder='Enter your email'
                          className='w-full sm:w-[400px] h-[40px] border border-gray-300 rounded-lg px-4'
                          value={registerData.email}
                          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
                  </div>

                  <p className='text-sm'>
                      A link to set a new password will be sent to your email address.
                  </p>
                  <p className='text-sm mt-2'>
                      Your personal data will be used to support your experience throughout this website, to
                      manage access to your account, and for other purposes described in our privacy policy.
                  </p>

                  {registerError && (
                      <p className='text-red-500 text-sm mb-4'>{registerError}</p>
                  )}

                  <div className='mb-6 pt-5'>
                      <button
                          onClick={handleRegister}
                          className='w-full sm:w-[400px] h-[40px] bg-white text-black hover:bg-black hover:text-white shadow-lg rounded-lg'
                      >
                          Register
                      </button>
                  </div>
              </div>
          </div>
      </div></>
  );
};

export default Account;
