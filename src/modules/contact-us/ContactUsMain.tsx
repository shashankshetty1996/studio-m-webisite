import { FC } from "react";

import { MeetTheTeam } from "./section";

const EmailLink: FC<{ link: string }> = (props) => (
  <a
    className="text-purple-700 underline not-italic"
    href={`mailto:${props.link}`}
  >
    {props.link}
  </a>
);

const ContactUsMain: FC<{}> = () => {
  return (
    <section className="bg-gray-50">
      {/* banner image */}
      {/* about team */}
      <MeetTheTeam />
      {/* Contact info */}
      <div className="container mx-auto my-4">
        <h1 className="text-center text-5xl md:text-6xl py-4">
          Contact Details
        </h1>
        <p className="text-sm md:text-md text-gray-600 text-center italic">
          Connect with us for work @ <EmailLink link="studiom.work@gmail.com" />{" "}
          and any other enquiry @ <EmailLink link="studiomonish@gmail.com" />
        </p>
      </div>
    </section>
  );
};

export default ContactUsMain;