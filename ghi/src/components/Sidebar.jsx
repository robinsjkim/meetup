import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  return (
    <div>
      <div
        className={`fixed left-0 top-0 w-[70px] h-full bg-[#4f5038] shadow-xl transition duration-1000 ${
          show
            ? "translate-x-0 ease-in-out opacity-100"
            : "-translate-x-full ease-out opacity-40"
        }`}
      >
        <div className="grid grid-cols-1 gap-y-[700px]">
          <div className="drop-shadow-2xl">
            <div className="cursor-pointer">
              <img
                src={logo}
                alt="logo"
                className="w-[40px] h-[40px] mx-auto my-3"
              />
            </div>
            <ul>
              <li
                className="text-black border-b-2 border-t-2 border-[#646445] py-4 hover:bg-[#42422e] transition duration-300"
                onClick={handleSidebar}
              >
                <CgProfile size={26} color="#c8c888" className="mx-auto" />
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <button>
              <BsFillQuestionCircleFill
                className="shadow-xl"
                size={27}
                color="#c8c888"
                onMouseOver={({ target }) => (target.style.color = "#919162")}
                onMouseOut={({ target }) => (target.style.color = "#c8c888")}
              />
            </button>
          </div>
        </div>
        <div>
          <div
            className={`fixed left-0 top-0 w-[220px] h-full bg-[#4f5038] shadow-2xl transition duration-500 ${
              showSidebar
                ? "translate-x-0 ease-in-out"
                : "translate-x-[-220px] ease-out"
            }`}
          >
            <div className="flex justify-between border-b-2 border-[#646445]">
              <h2 className="m-3 text-4xl">
                Meet<span className="text-white">Up</span>
              </h2>
              <IoMdClose
                size={23}
                className="m-2 cursor-pointer"
                color="#c8c888"
                onClick={handleSidebar}
              />
            </div>
            <div>
              <ul>
                <li className="px-3 py-2 border-b-2 border-[#646445] text-lg font-semibold text-[#c8c888] hover:text-[#7b7b53]">
                  Login
                </li>
                <li className="px-3 py-2 border-b-2 border-[#646445] text-lg font-semibold text-[#c8c888] hover:text-[#7b7b53]">
                  Register
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;