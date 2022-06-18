import { Heading, SimpleGrid } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { Person } from "types";
import SimplihacksCard from "./simplihackscard";

const staff: Person[] = [
	{
		name: "Aviel Hernandez",
		title: "EPD/Lead Organizer",
		img: "/simplihacks/staff/Aviel-Hernandez_EPDLead-Organizer.jpg",
	},
	// {
	// 	name: "Harsh Singh",
	// 	title: "Lead Organizer",
	// 	img: "/simplihacks/staff/Harsh-Singh_Lead-Organizer.jpg",
	// },
	{
		name: "Roland Yang",
		title: "Organizer",
		img: "/simplihacks/staff/default.png",
	},
	{
		name: "Inga Lisovin",
		title: "Brand Design Manager",
		img: "/simplihacks/staff/Inga-Lisovin_Brand-Design-Manager.jpg",
	},
	{
		name: "Irenka Ni",
		title: "Logistics Team",
		img: "/simplihacks/staff/Irenka-Ni_Logistics-Team.jpg",
	},
	{
		name: "Riddhi Shedge",
		title: "Outreach Head",
		img: "/simplihacks/staff/Riddhi-Shedge_Outreach-Head.jpeg",
	},
	{
		name: "Kaiyi Wang",
		title: "Marketing Director",
		img: "/simplihacks/staff/Kaiyi-Wang_Marketing-Director.jpg",
	},
	{
		name: "Liana Zhu",
		title: "Logistics Team",
		img: "/simplihacks/staff/liana.png",
	},
	// {
	// 	name: "Ahaan Limaye",
	// 	title: "Lead Organizer",
	// 	img: "/simplihacks/staff/ahaan.png",
	// },
	// {
	// 	name: "Aryan Pal",
	// 	title: "Lead Organizer",
	// 	img: "/simplihacks/staff/aryan.png",
	// },
	// {
	// 	name: "Eric Lin",
	// 	title: "Organizer",
	// 	img: "/simplihacks/staff/eric.jpg",
	// },
	// {
	// 	name: "Makayla Ma",
	// 	title: "Design",
	// 	img: "/simplihacks/staff/kayla.jpg",
	// },
	// {
	// 	name: "Amanda Zhong",
	// 	title: "Design",
	// 	img: "/simplihacks/staff/amanda.jpg",
	// },
	// {
	// 	name: "Giselle Galvan",
	// 	title: "Design",
	// 	img: "/simplihacks/staff/giselle.jpg",
	// },
	// {
	// 	name: "Riddhi Shedge",
	// 	title: "Outreach",
	// 	img: "/simplihacks/staff/riddhi.jpg",
	// },
	// {
	// 	name: "Ryan Badal",
	// 	title: "Outreach",
	// 	img: "/simplihacks/staff/ryan.png",
	// },
	// {
	// 	name: "Sanjit Ravichandran",
	// 	title: "Outreach",
	// 	img: "/simplihacks/staff/default.png",
	// },
	// {
	// 	name: "Trey Brower",
	// 	title: "Events Coordinator",
	// 	img: "/simplihacks/staff/trey.jpg",
	// },
	// {
	// 	name: "Nicole Li",
	// 	title: "Events Coordinator",
	// 	img: "/simplihacks/staff/nicole.png",
	// },
	// {
	// 	name: "Shivam Bhatia",
	// 	title: "Judge",
	// 	img: "/simplihacks/staff/shivam.jpg",
	// },
	// {
	// 	name: "David Medvedik",
	// 	title: "Judge",
	// 	img: "/simplihacks/staff/david.jpg",
	// },
	// {
	// 	name: "Anshuman Girdhar",
	// 	title: "Judge",
	// 	img: "/simplihacks/staff/ansh.jpg",
	// },
	// {
	// 	name: "Nathanael Ma",
	// 	title: "Judge",
	// 	img: "/simplihacks/staff/default.png",
	// },
];

export default function Staff(): JSX.Element {
	return (
		<>
			<Container my="50px">
				<ContainerInside>
					<Heading m={5}>Staff</Heading>
					{/* <Text textAlign="center" fontSize="22px">
						To be Determined
					</Text> */}
					<SimpleGrid
						w={{ base: "auto", md: "850px" }}
						columns={{ base: 2, md: 4 }}
						spacingY="15px"
					>
						{staff.map((member, i: number) => {
							return (
								<SimplihacksCard
									title={member.title}
									name={member.name}
									img={member.img}
									key={i}
								/>
							);
						})}
					</SimpleGrid>
				</ContainerInside>
			</Container>
		</>
	);
}
