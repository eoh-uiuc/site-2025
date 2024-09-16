import { Fragment } from "react";
import Content from "@/content";
import Head from "next/head";
import Bubble from "@/bubble";
import Button from "@/button";
import SponsorCard from "@/sponsor-card";
import Info from "../../components/content/info.js";

export default function HSDC() {
  return (
    <Content title="High School Design Competition">
      <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5 mb-2">
          We are delighted to invite high school students to participate in the High School Design Competition scheduled for <b>Friday, April 5th, at noon</b>.
          <br />
          Teams of 3-5 students are encouraged to participate.
          <br />
          To register your school for this exciting event, please sign up using the link below by 16th March, 2024.
          <br />
          <br />
          <Info>The theme for this year's competition will be revealed at the event.</Info>
          <br />
          Please check back on this page for more event details!
        </div>
        <div className="font-montserrat">Please reach out to Yoon Lee at <a href='mailto:eoh-hsdc@ec.illinois.edu' className="font-bold underline">eoh-hsdc@ec.illinois.edu</a> if you have any questions or concerns.</div>
        <br />
        <br />
        <a className="bg-yellow-200 hover:bg-yellow-300 px-6 pt-3 pb-4 rounded-full font-montserrat text-2xl mt-3 md:mt-8 text-center" href="https://forms.gle/6uCqDSXSkY6CBrkbA" target="_blank">
          Registration Form
        </a>
        <div className="h-7"></div>
      </div>
    </Content>
  );
}
