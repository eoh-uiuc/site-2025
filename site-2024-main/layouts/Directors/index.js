import React from 'react';

export default function Directors() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mx-14 md:mx-auto md:w-3/4 text-sm text-justify">
            <div className=''>
                <p className="mt-4">
                    Welcome to the 102nd Engineering Open House (EOH) at the University of Illinois at Urbana, Champaign.
                    We are very excited to welcome our field trips, community members, students, and faculty coming from various places.
                    EOH is the world’s largest student-run STEM fair, where students and faculty members from UIUC present the amazing work they have been doing.
                    This year we will be expanding our projects by having even more special events, and events that have never been seen at EOH or even UIUC before.
                </p>
                <p className="mt-2">
                    We hope our visitors are able to explore the STEM (Science, Technology, Engineering, and Math) fields, and
                    learn more about the amazing work being done at the Grainger College of Engineering. This year we welcome 200+ exhibits
                    and 10+ special events, ranging from rocket launches to car races to environmental awareness.
                    Every exhibit at EOH showcases the immense effort and impact that is happening in all the different STEM fields.
                    Our exhibits highlight the prestige of the Grainger College of Engineering and our students.
                    We hope while you are exploring EOH you <i>Aspire to Inspire</i>.
                </p>
                <p className="mt-5">
                    We would like to thank all of our student and faculty-led exhibits, volunteers, corporate sponsors, judges, alumni,
                    faculty, and Grainger administration. EOH wouldn’t be what it is without your help, imagination and resilience and
                    dedication. Furthermore, our 30 Directors on our Central Committee are instrumental to EOH. With EOH being a fully
                    student-run event, we depend heavily on our Directors to execute and plan each event while being full time students.
                    We are forever grateful for the time and effort they have put into the event. We thank you all for attending EOH and
                    hope you will be able to gain insight into what engineering is, and <i>Aspire to Inspire</i> you to pursue it in the future.
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