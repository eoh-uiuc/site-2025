import Profile from '@/profile';
import Content from '@/content';

// const csv = require('csvtojson');
// const csvFilePath = "./pages/about-us/meet-the-committee/people.csv"

// csv()
//     .fromFile(csvFilePath)
//     .then((jsonArray) => {
//         const objectsList = jsonArray.map((row) => {
//             const object = {};
//             for (const key in row) {
//                 object[key] = row[key];
//             }
//             return object;
//         });
//         console.log(objectsList);
//     });

const COMMITTEE_HEADSHOTS = [
  {
    img: "Paymon.jpg",
    Name: "Paymon Sadat",
    Position: "Co-Director",
    Class: "Senior",
    Major: "Bioengineering",
  },
  {
    img: "Rohini.jpg",
    Name: "Rohini Ramesh",
    Position: "Co-Director",
    Class: "Senior",
    Major: "Aerospace",
  },
  {
    img: "Rachel.jpg",
    Name: "Rachel Huang",
    Position: "Secretary/Treasurer",
    Class: "Junior",
    Major: "Computer Science",
  },
  {
    img: "Nakul.jpg",
    Name: "Nakul lyer",
    Position: "Director of Facilities & Equipment",
    Class: "Senior",
    Major: "Computer Science",
  },
  {
    img: "Alyssa.jpg",
    Name: "Alyssa Huang",
    Position: "Director of Exhibits",
    Class: "Junior",
    Major: "Electrical Engineering",
  },
  {
    img: "Sagaar.jpg",
    Name: "Saagar Kolachina",
    Position: "Director of Traffic & Safety",
    Class: "Senior",
    Major: "Material Science and Engineering",
  },
  {
    img: "Nikita.jpg",
    Name: "Nikita Pawar",
    Position: "Senior Corporate Director",
    Class: "Senior",
    Major: "Mechanical Engineering",
  },
  {
    img: "Oviyan.jpg",
    Name: "Oviyan Rathi",
    Position: "Junior Corporate Director",
    Class: "Junior",
    Major: "Industrial Engineering",
  },
  {
    img: "Alicia.jpg",
    Name: "Alicia Kim",
    Position: "Junior Corporate Director",
    Class: "Junior",
    Major: "Bioengineering",
  },
  {
    img: "Jesse.jpg",
    Name: "Jesse Ekanya",
    Position: "Junior Corporate Director",
    Class: "Senior",
    Major: "Civil and Environmental Engineering",
  },
  {
    img: "Yoon.jpg",
    Name: "Yoon Lee",
    Position: "High School Design Competition Director",
    Class: "Junior",
    Major: "Chemical Engineering",
  },
  {
    img: "Arpit.jpg",
    Name: "Arpit Bansal",
    Position: "Middle School Design Competition Director",
    Class: "Sophomore",
    Major: "Computer Science",
  },
  {
    img: "Keya.jpg",
    Name: "Keya Patel",
    Position: "Judging and Awards",
    Class: "Sophomore",
    Major: "Bioengineering",
  },
  {
    img: "Maddie.jpg",
    Name: "Maddie Conrad",
    Position: "Visitor's Information Director",
    Class: "Sophomore",
    Major: "Chemical Engineering",
  },
  {
    img: "Samantha.jpg",
    Name: "Samantha Shell",
    Position: "Visitor's Information Director",
    Class: "Sophomore",
    Major: "Chemical Engineering",
  },
  {
    img: "Rayna.jpg",
    Name: "Rayna Patel",
    Position: "Director of Marketing",
    Class: "Senior",
    Major: "Bioengineering",
  },
  {
    img: "Vidya.jpg",
    Name: "Vidya Bharadwaj",
    Position: "Director of Marketing",
    Class: "Sophomore",
    Major: "Computer Science",
  },
  {
    img: "Huamin.jpg",
    Name: "Huamin Gao",
    Position: "Junior Director of Marketing",
    Class: "Junior",
    Major: "Chemical Engineering",
  },
  {
    img: "Aparna.jpg",
    Name: "Aparna Kamath",
    Position: "Director of Special Events",
    Class: "Sophomore",
    Major: "Bioengineering",
  },
  {
    img: "Fatimah.jpg",
    Name: "Fatimah Alhawaj",
    Position: "Director of Special Events",
    Class: "Junior",
    Major: "Material Science and Engineering",
  },
  {
    img: "Shivaditya.jpg",
    Name: "Shivaditya Gohil",
    Position: "Senior Outreach Director",
    Class: "Junior",
    Major: "Computer Engineering",
  },
  {
    img: "Arryan.jpg",
    Name: "Arryan Kanodia",
    Position: "Junior Outreach Director",
    Class: "Junior",
    Major: "Industrial Engineering",
  },
  {
    img: "Ella.jpg",
    Name: "Ella Greer",
    Position: "Junior Outreach Director",
    Class: "Sophomore",
    Major: "Aerospace Engineering",
  },
  {
    img: "Soham.jpg",
    Name: "Soham Kulkarni",
    Position: "Senior Director of Technology",
    Class: "Senior",
    Major: "Computer Science",
  },
  {
    img: "Ramsey.jpg",
    Name: "Ramsey Van Der Meer",
    Position: "Junior Director of Technology",
    Class: "Junior",
    Major: "Electrical Engineering",
  },
  {
    img: "Sneha.jpg",
    Name: "Sneha Chaliki",
    Position: "Junior Director of Technology",
    Class: "Sophomore",
    Major: "Computer Science",
  },
  {
    img: "Vishnuh.jpg",
    Name: "Vishnuh Bala",
    Position: "Senior Director of Hospitality",
    Class: "Sophomore",
    Major: "Aerospace Engineering",
  },
  {
    img: "BlankProfile.png",
    Name: "Abbie Kim",
    Position: "Junior Director of Hospitality",
    Class: "Senior",
    Major: "Chemical Engineering",
  },
  {
    img: "Roshni.jpg",
    Name: "Roshni Mathew",
    Position: "Director of Advancements",
    Class: "Sophomore",
    Major: "Computer Engineering",
  },
  {
    img: "Priya.jpg",
    Name: "Priya Kumar",
    Position: "Startup Showcase Director",
    Class: "Senior",
    Major: "Bioengineering",
  },
]

export default function MeetTheCommittee() {
  return (
    <div className="flex flex-row flex-wrap justify-center w-10/12 mx-auto">
      {COMMITTEE_HEADSHOTS.map((c) => (
        <Profile {...c} key={c.Name} />
      ))}
    </div>
  )
}