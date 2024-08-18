import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/sign-in', { state: {  login, password } });
  }

    return (
      <>
      <div className="w-full h-screen flex items-center justify-center bg-[#FCFAFA]">
        <div>
          <h2 className="text-center font-kumbhSans font-semibold text-[rgb(79,79,79)] leading-[45px] text-[36px] mb-[54px]">Welcome, Sign up</h2>
          <div className="bg-[rgb(255,255,255)] w-[512px] flex flex-col gap-[34px]">
            <p className="text-[rgb(102,112,133)] font-inter font-medium text-[16px] text-center leading-[25px] mt-[72px] ml-[132px] mr-[142px]">It is our great pleasure to have you on board!</p>
            <form className="flex flex-col gap-[14px] items-center justify-center" onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" className="w-[248px] font-kumbhSans font-medium text-[14px] leading-[17px] px-[16px] h-[42px] border-[1px] border-solid border-[rgb(138,138,138)] rounded-[4px] focus:outline-[rgb(167,167,167)]"/>
              <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Create your Login" className="w-[248px] font-kumbhSans font-medium text-[14px] leading-[17px] px-[16px] h-[42px] border-[1px] border-solid border-[rgb(138,138,138)] rounded-[4px] focus:outline-[rgb(167,167,167)]"/>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create your Password" className="w-[248px] font-kumbhSans font-medium text-[14px] leading-[17px] h-[42px] px-[16px] border-[1px] border-solid border-[rgb(138,138,138)] rounded-[4px] focus:outline-[rgb(167,167,167)]"/>

              <button type="submit" className="w-[256px] h-[48px] mt-[20px] mb-[100px] bg-[rgb(45,136,212)] text-[white] font-kumbhSans font-bold text-[14px] leading-[17px] border-[1px solid transparent] rounded-[4px] transition duration-400 hover:bg-[rgb(80,156,219)]">Sign Up</button>
            </form>
          </div>
        </div>     
      </div>
      </>
    )
  }
  
  export default Index
  