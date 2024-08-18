import React from 'react'
import bellIcon from "../../assets/Images/bell.svg"
import TeacherTable from '../teacherTable/TeacherTable'


function Teachers(){
  const handleLogout = () =>{
    setTimeout(() => {
      window.localStorage.href = "/dashboard";
    },1000)
  }
  return (
    <div className='px-[38px] pt-[21px]'>
      <div className='flex items-center  justify-end space-x-[14px] mb-4'>
          <img src={bellIcon} alt="bel Icon" width={28} height={28}/>
          <button className="text-[#424242] text-[16px] font-semibold w-[90px] rounded-[8px] text-center " onClick={handleLogout}>Log out</button>
      </div>
          <TeacherTable/>
    </div>
  )
}

export default Teachers