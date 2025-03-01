import React from 'react';

export default function Directors() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mx-14 md:mx-auto md:w-3/4 text-sm text-justify">
            <div className=''>
                <p className="mt-4">
                Welcome to the 103rd Engineering Open House (EOH) at the University of Illinois Urbana-Champaign! We are so excited to welcome university students, faculty, community members, and field trips to campus. EOH is the nation’s largest student-run STEM (Science, Technology, Engineering, and Math) fair, where participants have the opportunity to showcase independent engineering projects and innovations unseen by the scientific community. 
                </p>
                <p className="mt-2">
                The theme of this year’s event is The Age of Innovation. It is our hope that EOH visitors will foster new curiosity in STEM and learn more about how students at the Grainger College of Engineering are at the forefront of innovation and scientific excellence.
                </p>
                <p className="mt-5">
                EOH 2025 features over 200 exhibits, including 10 student startups, and 14 special events such as rocket launches, student-engineered cars, and escape rooms. Each exhibit at EOH has been many months in the making, and the majority of projects are entirely student-led. EOH features work from every engineering discipline, celebrating not only current technologies but ushering in a new Age of Innovation.

                </p>
                <p className="mt-2">
                    Rohini Ramesh & Paymon Sadat <br />
                    Co-Directors, Engineering Open House 2024
                </p>
            </div>
            <img src="assets/images/committee-shot.jpg" alt="Group picture of the EOH 2024 committee" className='object-cover w-96 h-96 rounded-3xl float-right top-0' />
        </div>
    );
}