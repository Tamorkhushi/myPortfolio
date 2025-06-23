import React from "react"
import { Link, NavLink, } from "react-router-dom";
import { FaPhone, FaEnvelope, FaGlobe, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaTwitter, FaGooglePlusG, } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLink, FaLocationDot, FaPersonRifle } from "react-icons/fa6";
import { GiThunderBlade } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import NavItem from "../../components/cards/NavItem";

const Footer2 = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const navItems = [
    { href: "https://wa.me/7678295963?text=Hello!%20I'd%20like%20to%20know%20more%20about%20your%20services.", icon: FaWhatsapp, tooltip: 'Whatsapp' },
    { href: 'https://www.linkedin.com/in/khushi-tamor-365728314/', icon: FaLinkedinIn, tooltip: 'Linkedin' },
    { href: 'https://github.com/Tamorkhushi', icon: FaGithub, tooltip: 'Github' },
  ];

  return (
    <section className="bg-[#000000] py-8 scrollbar-hide">
      <div className="w-11/12 mx-auto">
        {/* Contact Items */}
        <div className="flex flex-wrap justify-between border-b-2 border-gray-500 pb-4" >
          <div className="w-64 py-4">
            <h3 className="flex items-center uppercase text-white text-lg" data-aos="fade-down">
              <FaLink className="text-blue-500 mr-3" />profile link
            </h3>
            <div className="w-8 h-1 bg-blue-500 my-4" data-aos="fade-down"></div>
            <div className="w-auto mt-10 h-auto">
              <div className="flex justify-center gap-0 sm:gap-1 md:gap-4">
                {navItems.map((item, index) => (
                  <NavItem key={index} href={item.href} icon={item.icon} tooltip={item.tooltip} iconbg={"bg-white "} liStyle={"w-[3rem]"} />
                ))}
              </div>
            </div>
          </div>
          {/* Call Us */}
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg" data-aos="fade-down">
              <FaPhone className="text-blue-500 mr-3" /> Call Us
            </h3>
            <div className="w-8 h-1 bg-blue-500 my-4" data-aos="fade-down"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Phone:  </span> +91-7678295963
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg" data-aos="fade-down">
              <FaLocationDot className="text-blue-500 mr-3" /> Address
            </h3>
            <div className="w-8 h-1 bg-blue-500 my-4" data-aos="fade-down"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Location: </span>
                Tirkha colony Ballabgarh Faridabad
              </p>
              <p className="text-gray-400 text-sm">(Delhi NCR) Haryana</p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="w-64 py-4">
            <h3 className="flex items-center uppercase text-white text-lg" data-aos="fade-down">
              <FaEnvelope className="text-blue-500 mr-3" /> Mail Us
            </h3>
            <div className="w-8 h-1 bg-blue-500 my-4" data-aos="fade-down"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Gmail 1: </span>tamorkhushi@gmail.com
              </p>
            </div>
          </div>

          {/* Office */}
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg" data-aos="fade-down">
              <FaGlobe className="text-blue-500 mr-3" /> Link
            </h3>
            <div className="w-8 h-1 bg-blue-500 my-4" data-aos="fade-down"></div>
            <div>
              
              <NavLink to={"/"}><p className="text-gray-400 text-sm">
                <span className="text-white">👉🏻 </span> About me
              </p>
              </NavLink>
              <NavLink to={"/skills"}><p className="text-gray-400 text-sm">
                <span className="text-white">👉🏻 </span> Skills
              </p>
              </NavLink>
              <NavLink to={"/projects"}><p className="text-gray-400 text-sm">
                <span className="text-white">👉🏻 </span> Projects
              </p>
              </NavLink>
              <NavLink to={"/education"}><p className="text-gray-400 text-sm">
                <span className="text-white">👉🏻 </span> Education
              </p>
              </NavLink>
              <NavLink to={"/contact"}><p className="text-gray-400 text-sm">
                <span className="text-white">👉🏻 </span> Contact
              </p>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center flex flex-wrap justify-center md:justify-between px-4 rounded-lg text-sm lg:text-[17px] text-[#000000] font-semibold py-1 md:py-4 bg-white mt-4 ">
          <div>© 2024All Rights Reserved Terms of Use and Privacy Policy</div>
          <div>This Portfolio Website Developed By Khushi</div>
        </div>
      </div>
    </section>
  );
};

export default Footer2;