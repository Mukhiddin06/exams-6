import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import bellIcon from "../../assets/Images/bell.svg";

function AddTeachers() {
  const navigate = useNavigate();
  const [imgURl, setImgURl] = useState(null);

  const chooseImgChange = (e) => {
    setImgURl(URL.createObjectURL(e.target.files[0]));
  };
  const setSave = () => {
    navigate("/teachers");
  };
  return (
    <div className="px-[38px] pt-[21px]">
      <div className="flex items-center  justify-end space-x-[14px] mb-4">
        <div className="flex items-center">
          <img src={bellIcon} alt="bel Icon" width={28} height={28} />
          <button className="text-[#424242] text-[16px] font-semibold w-[90px] rounded-  [8px] text-center hover:opacity-50 transition-[0.3s]">
            Log out
          </button>
        </div>
      </div>
      <form >
        <div className="flex items-end justify-between mb-[21px]">
          <h3 className="text-[#4F4F4F] text-[20px] font-medium">
            Add teacher
          </h3>
          <div className="flex flex-col space-y-[14px]">
            <button
              type="submit"
              onClick={setSave}
              className="text-[14]   inline-block text-center font-semibold text-white bg-[#509CDB] py-[12px] w-[100px] rounded-[8px] hover:opacity-60 transition-[0.3s]"
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex space-x-[60px] mt-[50px]">
          <div className="flex flex-col space-y-[25px]">
            <label className="flex flex-col space-y-1">
              <span className="text-[16px] text-[#8A8A8A] font-medium">
                Full Name
              </span>
              <input
                className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md"
                name="name"
                type="text"
                placeholder="Full name"
              />
            </label>
            <label className="flex flex-col space-y-1">
              <span className="text-[16px] text-[#8A8A8A] font-medium">
                Email address
              </span>
              <input
                className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md"
                name="email"
                type="email"
                placeholder="Email address"
              />
            </label>
            <label className="flex flex-col space-y-1">
              <span className="text-[16px] text-[#8A8A8A] font-medium">
                Subject
              </span>
              <input
                className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md"
                name="subject"
                type="text"
                placeholder="Subject"
              />
            </label>
            <label className="flex flex-col space-y-1">
              <span className="text-[16px] text-[#8A8A8A] font-medium">
                About
              </span>
              <input
                className=" pl-[48px] py-[14px] pr-10 bg-[#FCFAFA] border-transparent 
                border-[1px]  rounded-md outline-none  border-slate-400 w-[407px]"
                name="about"
                placeholder="about"
              ></input>
            </label>
          </div>
          <div className="flex flex-col space-y-[25px]">
            <label className="flex flex-col space-y-1">
              <span className="text-[16px] text-[#8A8A8A] font-medium">
                Class
              </span>
              <select
                className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md"
                name="class"
              >
                <option value="JSS1">JSS1</option>
                <option value="JSS2">JSS2</option>
                <option value="JSS3">JSS3</option>
                <option value="JSS4">JSS4</option>
              </select>
            </label>
            <label className="flex flex-col space-y-1">
              <span className="text-[16px] text-[#8A8A8A] font-medium">
                Gender
              </span>
              <select
                className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md"
                name="gender"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </label>
            <label className="flex flex-col space-y-1">
              <span className="text-[16px] text-[#8A8A8A] font-medium">
                Age
              </span>
              <input
                className="text-[16px] text-black font-medium placeholder-[#8A8A8A] py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md"
                name="age"
                type="number"
                placeholder="Age"
              />
            </label>
            <label className="flex items-center justify-around space-y-1">
              <span className="text-[16px] text-[#8A8A8A] font-medium hover:text-black cursor-pointer">
                Import Img
              </span>
              <input
                onChange={chooseImgChange}
                name="img"
                className="scale-0 opacity-50"
                type="file"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTeachers;
