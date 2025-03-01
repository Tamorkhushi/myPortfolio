import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import useScrollToTop from '../../hooks/useScrollToTop';

const EducationSection = ({ mainHead, title, subtitle, duration, achievements, description, images, isImageLeft }) => {
    React.useEffect(() => {
        AOS.init();
    }, []);
    useScrollToTop()
    return (
        <div
            className={`w-[90%] h-auto mx-auto mt-12 flex flex-wrap md:flex-nowrap ${isImageLeft ? 'flex-row' : 'flex-row-reverse'
                } justify-center md:justify-between lg:justify-normal items-center gap-2 md:gap-8 my-4`}
        >
            {/* Image Section */}
            <div className="w-full text-sm sm:text-base md:w-[55%] lg:w-[60%]" >
                <div className="w-full flex justify-between" data-aos="flip-up">
                    {images.slice(0, 3).map((img, index) => (
                        <img key={index} src={img} alt="" className="w-[32%]" />
                    ))}
                </div>
                <div className="w-full flex justify-between mt-4" data-aos="flip-up">
                    {images.slice(3).map((img, index) => (
                        <img key={index} src={img} alt="" className="w-[49%]" />
                    ))}
                </div>
            </div>
            {/* Content Section */}
            <div className="w-full mx-auto md:w-[55%] lg:w-[45%] h-auto font-DM text-slate-700  text-center">
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-[#ff0000]'>{mainHead}</h1>
                <div className='my-2'>
                    <h2 className="text-xl lg:text-2xl italic font-semibold ">{title}</h2>
                    <h4 className="text-lg text-[#ff0000] font-semibold">Duration : {duration}</h4>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

function EducationPage() {
    const educationData = [
        {
            mainHead: "Matriculation (10th)",
            title: 'Goverment Girls Senior Secondary School Ballabgarh',
            subtitle: ' Ballabgarh',
            duration: '2018',
            achievements: 'Secured 75% in board exams.',
            description: "My 10th-grade education laid a strong foundation for my academic journey, nurturing my passion for mathematics and science. I achieved a commendable 75% in the board examinations ",
            images: ['/ugClg/front.jpg', '/ugClg/gate.jpg', '/ugClg/lab.jpg', '/ugClg/img2.jpg', '/ugClg/img1.jpg'],
        },
        {
            mainHead: "Intermediate (12th)",
            title: 'Goverment Girls Senior Secondary School Ballabgarh',
            subtitle: 'Ballabgarh',
            duration: '2018-2020',
            achievements: 'Achieved 80% in board exams with a Commerce background.',
            description: 'In 12th grade, I pursued Non Medical Science, which enhanced my analytical and problem-solving skills while providing me with a solid foundation in logical reasoning and quantitative aptitude.',
            images: ['/pgClg/front.avif', '/pgClg/gate.jpg', '/pgClg/computerLab.jpg', '/pgClg/Library2.avif', '/pgClg/main.jpg'],
        },
        {
            mainHead: "Computer Science",
            title: 'Government Polytechnic College for Women Faridabad',
            subtitle: 'Sector-8 Faridabad',
            duration: '2020-2023',
            achievements: 'Diploma with a 70% aggregate in BCA.',
            description: 'My Diploma studies provided me with a strong foundation in computer science and programming.',
            images: ['/clg1.jpg', '/clg2.webp', '/clg3.jpg', '/clg6.jpg', '/clg5.jpg'],
        },
        {
            mainHead: " Bachelor of Computer Applications",
            title: ' Indira Gandhi National Open University ',
            subtitle: 'Delhi',
            duration: '2023-2026',
            achievements: 'Target Specialized in Advanced Computing with an 8.7 CGPA.',
            description: 'My Undergraduate studies deepened my understanding of software development and research methodologies.',
            images: ['/bg1.jpg', '/bg2.jpg', '/bg3.jpg', '/bg4.png', '/bg5.jpe'],
        },
    ];

    return (
        <>
            {/* Header Section */}
            <div className="bg-[url('/educationpage.png')] bg-center bg-cover h-[60%] w-screen flex justify-center sm:justify-start items-center">
                <div className="absolute sm:left-[10%] lg:left-[15%] text-center sm:text-start tracking-wider">
                    <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-7xl text-[#ffffff] uppercase font-bold mb-2 md:mb-4">
                        My Education
                    </h1>
                    <h4 className="text-[#ff0000] text-xl md:text-2xl font-semibold">A Journey of Knowledge and Growth</h4>
                </div>
            </div>

            {/* Education Sections */}
            {educationData.map((edu, index) => (
                <EducationSection key={index} isImageLeft={index % 2 === 0} {...edu} />
            ))}
        </>
    );
}

export default EducationPage;
