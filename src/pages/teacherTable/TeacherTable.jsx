import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import teachersHeroImg from "../../assets/Images/teachersHeroImg.png";
import bx_support from "../../assets/Images/bx_support.svg";
import chevronDown from "../../assets/Images/chevron-down.svg";
import Search from "../../assets/Images/search.svg";

const initialUsers = [
  {
    id: 1,
    name: "John",
    subject: "Math",
    class: "JSS1",
    email: "johndoe@example.com",
    gender: "Male",
    avatarImg: {chevronDown}, 
  },
];

function TeacherTable() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(initialUsers); 

  const gethandleSearchUser = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    
    const filtered = initialUsers.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <div className="flex items-end justify-between mb-[21px]">
        <h3 className="text-[#4F4F4F] text-[20px] font-medium">Teachers</h3>
        <div className="flex flex-col space-y-[14px]">
          <button
            onClick={() => navigate("/teacher-add")}
            className="text-[14] inline-block text-center font-semibold text-white bg-[#509CDB] rounded-[6px] py-[12px] w-[130px] hover:opacity-60 transition-[0.3s]"
          >
            Add Teachers
          </button>
        </div>
      </div>
      <div className="relative">
        <label>
          <input
            onChange={gethandleSearchUser}
            className="w-full pl-[48px] py-[16px] pr-10 bg-[#FCFAFA] border-transparent border-[1px] rounded-md outline-none "
            type="text"
            placeholder="Search for a teacher by name"
            value={searchTerm}
          />
          <img
            className="absolute left-[16px] top-[20px]"
            src={Search}
            alt="search icon here!"
            width={16}
            height={16}
          />
        </label>
      </div>
      <table className="w-full mt-[27px]">
        <thead>
          {filteredUsers.length ? (
            <tr>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                User Img
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Name
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Subject
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Class
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Email address
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Gender
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Action
              </th>
            </tr>
          ) : (
            ""
          )}
        </thead>
        <tbody>
          {filteredUsers.length ? (
            filteredUsers.map((item) => (
              <tr key={item.id} className="">
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  <img
                    className="mx-auto"
                    src={item.avatarImg}
                    alt="avatar img here!"
                    width={40}
                    height={40}
                  />
                </td>
                <td className=" py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.name}
                </td>
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.subject}
                </td>
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.class}
                </td>
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.email}
                </td>
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.gender}
                </td>
                <td className="text-[#4F4F4F] mt-2 py-3 flex items-center font-medium justify-center space-x-5">
                  <button onClick={()=>navigate("/singleteacher")} className="flex items-center justify-center cursor-pointer text-white bg-[rgb(45,136,212)] p-1 rounded-md outline-none">
                    more
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">
                <div className="w-full relative text-center pt-[14px] bg-[#FCFAFA] shadow-md pb-[50px]">
                  <img
                    className="mx-auto mb-3"
                    src={teachersHeroImg}
                    alt="img"
                    width={340}
                    height={255}
                  />
                  <h4 className="text-[28px] text-[#4F4F4F] font-semibold my-[5px]">
                    No Teachers at this time
                  </h4>
                  <p className="text-[14px] text-[#4F4F4F] font-medium">
                    Teachers will appear here after they enroll in your school.
                  </p>
                  <button className="flex items-center  justify-center space-x-3 w-[171px] bg-[#152259] rounded-[30px] text-center py-[16px] absolute right-[35px] bottom-[40px] hover:opacity-60  shadow-xl">
                    <img src={bx_support} alt="icon" width={16} height={16} />
                    <span className="text-[16px] font-semibold text-[#FCFAFA]">
                      Support
                    </span>
                    <img src={chevronDown} alt="icon" width={16} height={16} />
                  </button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherTable;
