import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import useScrollToTop from '../../hooks/useScrollToTop';
// Reusable ProjectCard Component
const ProjectCard = ({ title, description, techStack, images }) => {
  useScrollToTop()
   React.useEffect(() => {
          AOS.init();
      }, []);
  return (
    <div className="bg-slate-800 my-4 w-full md:w-[49%] p-2 sm:p-4 rounded-lg shadow-lg" data-aos="fade-up">
      <div className="bg-gray-200 p-4 rounded-lg">
        <h2 className= "text-lg sm:text-2xl text-[#ff0000] font-bold mb-2">{title}</h2>
        <p className="text-[12px] sm:text-base mb-2">{description}</p>
        <p className="text-[12px] sm:text-base">
          <span className="text-[#ff0000] font-bold">Technology used: </span>
          {techStack}
        </p>
      </div>
      <div className="h-auto mt-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="rounded-lg overflow-hidden"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="">
              <img src={src} alt={`${title} Screenshot ${index + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

function Projectspage() {
  const projects = [
    {
      title: "ShopEase (E-Commerce Website)",
      description: "Developed ShopEase, an e-commerce platform offering a seamless shopping experience with a user-friendly interface, secure checkout, and extensive clothing selection for men, women, and kids.",
      techStack: "React.js, Zustand,Formik, Tailwind CSS, Node.js, Express, MongoDB",
      images: ["/projectsImg/shopeaseP/shopease.png", "/projectsImg/shopeaseP/arrival.png", "/projectsImg/shopeaseP/cart.png", "/projectsImg/shopeaseP/categories.png", "/projectsImg/shopeaseP/details.png", "/projectsImg/shopeaseP/whishlist.png"],
    },
    {
      title: "FoodZilla Web App",
      description: (
        <ul className="list-disc pl-4">
          <li>Show a list of restaurants based on the user's location.</li>
          <li>Display the menu of a selected restaurant.</li>
          <li>Fetch detailed menu items from the Swiggy API.</li>
        </ul>
      ),
      techStack: "React.js, Tailwind CSS, Redux Toolkit",
      images: ["/projectsImg/foodZilla/foodZilla.png", "/projectsImg/foodZilla/cart.png", "/projectsImg/foodZilla/contact.png", "/projectsImg/foodZilla/items.png", "/projectsImg/foodZilla/user.png"],
    },
    {
      title: "WIZTIE Web App",
      description: (
        <ul className="list-disc pl-4">
          <li>Create a platform for students to showcase their completed projects.</li>
          <li>Allow students to create and manage their projects.</li>
        </ul>
      ),
      techStack: "React.js, Tailwind CSS, Redux Toolkit, Node.js, Express, MongoDB",
      images: ["/projectsImg/wiztiep/wiztie.png", "/projectsImg/wiztiep/user2.png", "/projectsImg/wiztiep/editP.png", "/projectsImg/wiztiep/contact.png", "/projectsImg/wiztiep/projects.png", "/projectsImg/wiztiep/signup.png", "/projectsImg/wiztiep/user.png"],
    },
    {
      title: "Acting school Web App",
      description: (
        <ul className="list-disc pl-4">
          <li>Create a platform for students to showcase their completed projects.</li>
          <li>Allow students to create and manage their projects.</li>
          <li className="flex gap-2"><span className="text-[#ff0000]">Link: 👉🏻</span><a  href="https://glittery-capybara-2d6567.netlify.app/"  className="text-blue-500 underline flex items-center gap-1 animate-bounce hover:animate-none transition-all duration-300"><span>Click</span></a></li>
        </ul>
      ),
      techStack: "React.js, Tailwind CSS, Redux Toolkit, Node.js, Express, MongoDB",
      images: ["/projectsImg/actingScl/actingScl.png", "/projectsImg/actingScl/client.png", "/projectsImg/actingScl/contact.png", "/projectsImg/actingScl/course.png","/projectsImg/actingScl/footer.png", "/projectsImg/actingScl/homedark.png"],
    },
    {
      title: "Shri Ram college eng. & managament",
      description: (
        <ul className="list-disc pl-4">
          <li>Header: Include the name of the college, tagline, and navigation menu.</li>
          <li>Campus Overview: Mention facilities, such as labs, libraries, and hostels.</li>
          <li>Integration with Google Maps for location.</li>
          <li>Include quick links (Admissions, Courses, etc.).</li>
        </ul>
      ),
      techStack: "React.js, Tailwind CSS,Formik, Redux Toolkit, Node.js, Express, MongoDB",
      images: ["/projectsImg/srcemP/srcem.png", "/projectsImg/srcemP/corporate.png", "/projectsImg/srcemP/contact.png", "/projectsImg/srcemP/courses.png", "/projectsImg/srcemP/hostel.png"],
    },
    {
      title: "Attifram",
      description: (
        <ul className="list-disc pl-4">
          <li>Share insights about the company, its vision, and industry experience.</li>
          <li>Highlight values like innovation, integrity, and customer focus.</li>
          <li> Brief descriptions of key IT services offered (e.g., Web Development)</li>
          <li className="flex gap-2"><span className="text-[#ff0000]">Link: 👉🏻</span><a  href="https://rohitthecoderr.github.io/Atiframe/"  className="text-blue-500 underline flex items-center gap-1 animate-bounce hover:animate-none transition-all duration-300"><span>Click</span></a>
</li>
 </ul>
      ),
      techStack: "Html,CSS, javaScript, Third-party library.",
      images: ["/projectsImg/atifram/home.png", "/projectsImg/atifram/projects.png", "/projectsImg/atifram/services.png", "/projectsImg/atifram/team.png",  "/projectsImg/atifram/digital.png"],
    },
  ];

  return (
    <>
     <h2 className='text-4xl text-center uppercase italic font-DM font-Five text-[#ff0000] mt-5' data-aos="fade-down"> My Projects </h2>
    <div className="w-[100%] sm:w-[90%] md:w-[95%] lg:w-[90%] flex flex-wrap justify-center gap-4 m-auto">
      {projects.map((project, index) => (
        <ProjectCard
        key={index}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          images={project.images}
          />
        ))}
    </div>
        </>
  );
}

export default Projectspage;
