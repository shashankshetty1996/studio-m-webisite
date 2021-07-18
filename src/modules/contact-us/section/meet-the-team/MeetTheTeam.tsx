import { FC } from "react";

import { Card } from "../../../../components";

import MonishPic from "../../../../assets/team/monish.jpeg";
import SanjanPic from "../../../../assets/team/sanjan.jpeg";
import AmulyaPic from "../../../../assets/team/amulya.jpeg";
import DeviPriyaPic from "../../../../assets/team/devi_priya.jpeg";

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
    education: ["Bachelors in Architecture, India"],
  },
  {
    image: SanjanPic,
    name: "Sanjana Bysani",
    designation: "Partner",
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

const MeetTheTeam: FC<{}> = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-center text-3xl md:text-4xl py-4">Meet Our Team</h1>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-around">
        {members.map((member, index) => (
          <Card
            key={index}
            image={member.image}
            alt={member.name}
            containerClassName="relative w-60 h-80 mx-2 px-2"
            className="w-40 h-40 mx-auto my-2"
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
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
