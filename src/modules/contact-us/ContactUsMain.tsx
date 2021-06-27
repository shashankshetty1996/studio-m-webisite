import { FC } from "react";

import { Footer } from "../../layout";
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
    <section className="bg-gray-50 mt-16">
      {/* banner image */}
      {/* about team */}
      <MeetTheTeam />
      {/* Contact info */}
      <div className="container mx-auto pb-2">
        <h1 className="text-center text-3xl md:text-4xl py-2">
          Contact Details
        </h1>
        <p className="text-sm md:text-md text-gray-600 text-center italic">
          Connect with us for work @ <EmailLink link="studiom.work@gmail.com" />{" "}
          and any other enquiry @ <EmailLink link="studiomonish@gmail.com" />
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUsMain;
