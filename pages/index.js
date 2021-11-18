import { Text } from "@chakra-ui/react";
import ContainerPage from "../components/ContainerPage";
import ProfileDescription from "../components/home/ProfileDescription";
import PositionDetails from "../components/home/PositionDetails";
import Experience from "../components/home/Experience";
import ExperienceLayout from "../components/home/ExperienceLayout";

const education = {
  heading: "Education",
  experience: [
    {
      title: "Universitas Indonesia",
      description: "Barchelor of Computer Science",
      period: "2019 - 2023 (expected)",
      details: [
        {
          positionTitle: "Teaching Assistant for Data Structures and Algorithm",
          period: "August 2021 - January 2022",
          positionDetails: [
            "Assist students’ understanding in data structures (ADT, Tree, Hashmap, etc.) \
           and algorithm (sorting problems, dynamic programming, greedy, etc.)",
            "Grade students’ assignment",
            "Make Lab assignments",
          ],
        },
        {
          positionTitle: "Teaching Assistant for Programming Foundations 1 ",
          period: "August 2020 - July 2021",
          positionDetails: [
            "Assist students’ understanding in basic programming logic using python",
            "Grade students’ assignment",
            "Make Lab assignments",
          ],
        },
        {
          positionTitle: "Vounteer as Tutor for Dasar-Dasar Pemrograman 0",
          period: "August 2020 - September 2020",
          description:
            "Dasar-Dasar Pemrograman 0 is a yearly event held before \
        the beginning of odd semester to introduce the fundamentals \
        of programming for first-year students using the Python \
        programming language.",
          positionDetails: [
            "Assist mentees’ understanding in basic python",
            "Make small assignments to make sure mentees understand the course",
          ],
        },
      ],
    },
  ],
};

const organizational = {
  heading: "Organizational Experience",
  experience: [
    {
      title: "BEM Fasilkom UI",
      details: [
        {
          positionTitle: "Staff of Bussiness and Partnership Division",
          period: "February 2021 - Desember 2021",
          positionDetails: [
            "Design web application based on client requests using figma as a source of BEM funding",
            "Help other staff (developer team) to develop projects based on my (and two other designers) design",
            "Projects: sabilamall.co.id, pemiraffui.com, etc.",
          ],
        },
      ],
    },
    {
      title: "Forum Ukhuwah dan Kajian Islam (FUKI) Fasilkom UI",
      details: [
        {
          positionTitle: "Vice Head of Media Division",
          period: "January 2021 - Desember 2021",
          positionDetails: [
            "Manage the team (staffing, coordinating)",
            "Make designs for social media based on request from other Division in FUKI",
            "Responsible for FUKI’s branding in social media",
          ],
        },
        {
          positionTitle: "Staff of Media Division",
          period: "January 2020 - Desember 2020",
          positionDetails: [
            "Make designs for social media based on request from other Division in FUKI",
          ],
        },
      ],
    },
    {
      title: "Compfest",
      details: [
        {
          positionTitle: "Human Resource Development of Data Science Academy",
          period: "January 2020 - October 2020",
          description:
            "Data Science Academy COMPFEST is a bootcamp with the aim to empower \
          students in utilizing Data Science better.",
          positionDetails: [
            "Responsible for skill development and team building in the staff team",
            "Recruit talented students for the staff team",
            "Monitor the members in carrying out tasks",
          ],
        },
      ],
    },
  ],
};
export default function Index() {
  return (
    <>
      <head>
        <title>Home - Farah Nazihah</title>
        <meta
          property="og:description"
          content="Farah Nazihah's personal website."
        />
      </head>
      <ContainerPage>
        <ProfileDescription />
        <ExperienceLayout
          heading={education.heading}
          experience={education.experience}
        />
        <ExperienceLayout
          heading={organizational.heading}
          experience={organizational.experience}
        />
      </ContainerPage>
    </>
  );
}
