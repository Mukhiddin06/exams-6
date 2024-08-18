import { NavLink } from "react-router-dom"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { login, password } = location.state || {};

  const handleSignIn = (e) => {
    e.preventDefault();
    if (loginInput === login && passwordInput === password) {
      navigate("/sidebar");
    } else {
      alert("Login yoki parol noto'g'ri. Iltimos qayta kiriting.");
    }
  };
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center bg-[#FCFAFA]">
        <div>
          <h2 className="text-center font-kumbhSans font-semibold text-[rgb(79,79,79)] leading-[45px] text-[36px] mb-[54px]">Welcome, Log into you account</h2>
          <div className="bg-[rgb(255,255,255)] w-[512px] flex flex-col gap-[34px]">
            <p className="text-[rgb(102,112,133)] font-inter font-medium text-[16px] text-center leading-[25px] mt-[72px] ml-[132px] mr-[142px]">It is our great pleasure to have you on board!</p>
            <form className="flex flex-col gap-[14px] items-center justify-center" onSubmit={handleSignIn}>
              <input type="text" value={loginInput} onChange={(e) => setLoginInput(e.target.value)} placeholder="Enter your Login" className="w-[248px] font-kumbhSans font-medium text-[14px] leading-[17px] px-[16px] h-[42px] border-[1px] border-solid border-[rgb(138,138,138)] rounded-[4px] focus:outline-[rgb(167,167,167)]"/>
              <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder="Enter your Password" className="w-[248px] font-kumbhSans font-medium text-[14px] leading-[17px] h-[42px] px-[16px] border-[1px] border-solid border-[rgb(138,138,138)] rounded-[4px] focus:outline-[rgb(167,167,167)]"/>

              <button type="submit" className="w-[256px] h-[48px] mt-[20px] mb-[14px] bg-[rgb(45,136,212)] text-[white] font-kumbhSans font-bold text-[14px] leading-[17px] border-[1px solid transparent] rounded-[4px] transition duration-400 hover:bg-[rgb(80,156,219)]">Login</button>
            <NavLink to="/" className="text-center font-kumbhSans font-bold text-[rgb(45,136,212)] text-[12px] leading-[24px] mb-[39px]">Sign Up</NavLink>
            </form>
          </div>
        </div>     
      </div>
    </>
  )
}

export default Index
