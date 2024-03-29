import React from "react";
import Link from "next/link";
import  {useState } from "react";
// layout for page
import axios from 'axios';
import Auth from "layouts/Auth.js";

export default function Login() {
  const [email, setEmail] = useState('')
  const [pwd, setpwd] = useState('')
  const loginuser=async ()=>{
    const d={"email":email,'password':pwd}
    const response = await fetch('http://127.0.0.1:8000/LoginUser', {
      method: 'POST',
      body: JSON.stringify(d),
      
    })
    const data = await response.json()
    console.log(data)
    alert(data['email']+" login successful")
    try{
      console.log()
    $("#errorMSG").html(data);
    $("#errorMSG").attr('hidden', false);
    $("#successMSG").attr('hidden', true);
  
    console.log(data)
    }
    catch(error)
    {
      
      $("#successMSG").html(data['msg']);
      $("#errorMSG").attr('hidden', true);
      $("#successMSG").attr('hidden', false);
      console.log(data)
    }
    
  }
  return (
    <>
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 
    </head>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                  </h6>
                  <div class="alert alert-success" id="successMSG" hidden role="alert">
                 
                </div>
                <div class="alert alert-info" id="errorMSG" hidden role="alert">
                 
                </div>
                </div>

                
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>اكمل المتطلبات للتسجيل</small>
                </div>
               
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      البريد الالكتروني
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      onChange={event => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      الكلمة السرية
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={event => setpwd(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
تذكر الحساب
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={loginuser}
                    >
تسجيل دخول                    </button>
                  </div>
               
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>نسيت كلمة المرور?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>مستخدم جديد؟</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
