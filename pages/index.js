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
  Heading: "",
};

export default function Index() {
  return (
    <>
      <ContainerPage>
        <ProfileDescription />
        <ExperienceLayout
          heading={education.heading}
          experience={education.experience}
        />
      </ContainerPage>
    </>
  );
}
