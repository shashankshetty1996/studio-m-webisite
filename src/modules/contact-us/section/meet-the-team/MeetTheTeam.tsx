import { FC } from "react";

import { Card } from "../../../../components";

import MonishPic from "../../../../assets/team/monish.jpeg";
import SanjanPic from "../../../../assets/team/sanjan.jpeg";
import AmulyaPic from "../../../../assets/team/amulya.jpeg";
import DeviPriyaPic from "../../../../assets/team/devi_priya.jpeg";

import { ReactComponent as SendMail } from "../../../../assets/icons/send_mail.svg";

interface Member {
  image: string;
  name: string;
  designation: string;
  email?: string;
  education?: string[];
}

const members: Member[] = [
  {
    image: MonishPic,
    name: "Monish BT",
    designation: "Partner & Founder",
    email: "studiomonish@gmail.com",
    education: ["Bachelors in Architecture, India"],
  },
  {
    image: SanjanPic,
    name: "Sanjana Bysani",
    designation: "Partner",
    email: "sanjanabysani@gmail.com",
    education: [
      "Bachelors in Architecture, India",
      "MS in Land & Property Development | TX,USA",
    ],
  },
  {
    image: AmulyaPic,
    name: "Amulya N",
    designation: "Architect",
    education: [
      "Bachelors in Architecture, India",
      "MSc in Construction Management | TX,USA",
    ],
  },
  {
    image: DeviPriyaPic,
    name: "Devi Priya",
    designation: "intern",
    education: ["Pursuing, Bachelors in Architecture, India"],
  },
];

// TODO: large screen size fix
const MeetTheTeam: FC<{}> = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-center text-5xl md:text-6xl py-8">Meet Our Team</h1>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-around">
        {members.map((member, index) => (
          <Card
            key={index}
            image={member.image}
            alt={member.name}
            containerClassName="relative w-60 h-96 mx-2 px-2 my-4"
            className="w-52 h-52 mx-auto my-2"
          >
            <div className="text-center px-3">
              <h1 className="text-3xl text-gray-900">{member.name}</h1>
              <h6 className="text-xs text-gray-400">{member.designation}</h6>
              {member.education && (
                <div className="my-2">
                  {member.education.map((item, eduIdx) => {
                    return (
                      <h2 key={eduIdx} className="text-xs text-gray-700">
                        {item}
                      </h2>
                    );
                  })}
                </div>
              )}
            </div>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="absolute bottom-0 left-0 w-full py-2 px-4 bg-red-500 text-white text-center font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none flex justify-center"
              >
                <SendMail className="mx-1" /> Email us
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
