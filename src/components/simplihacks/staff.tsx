import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

import SimplihacksCard from "@components/simplihacks/simplihackscard";
import { Person } from "types";

const staff: Person[] = [
	{
		name: "Roland Yang",
		title: "Lead Organizer",
		img: "/simplihacks/staff/roland.png",
	},
	{
		name: "Ahaan Limaye",
		title: "Lead Organizer",
		img: "/simplihacks/staff/ahaan.png",
	},
	{
		name: "Aryan Pal",
		title: "Lead Organizer",
		img: "/simplihacks/staff/aryan.png",
	},
	{
		name: "Eric Lin",
		title: "Organizer",
		img: "/simplihacks/staff/eric.jpg",
	},
	{
		name: "Makayla Ma",
		title: "Design",
		img: "/simplihacks/staff/kayla.jpg",
	},
	{
		name: "Amanda Zhong",
		title: "Design",
		img: "/simplihacks/staff/amanda.jpg",
	},
	{
		name: "Giselle Galvan",
		title: "Design",
		img: "/simplihacks/staff/giselle.jpg",
	},
	{
		name: "Riddhi Shedge",
		title: "Outreach",
		img: "/simplihacks/staff/riddhi.jpg",
	},
	{
		name: "Ryan Badal",
		title: "Outreach",
		img: "/simplihacks/staff/ryan.png",
	},
	{
		name: "Sanjit Ravichandran",
		title: "Outreach",
		img: "/simplihacks/staff/default.png",
	},
	{
		name: "Trey Brower",
		title: "Events Coordinator",
		img: "/simplihacks/staff/trey.jpg",
	},
	{
		name: "Nicole Li",
		title: "Events Coordinator",
		img: "/simplihacks/staff/nicole.png",
	},
	{
		name: "Shivam Bhatia",
		title: "Judge",
		img: "/simplihacks/staff/shivam.jpg",
	},
	{
		name: "David Medvedik",
		title: "Judge",
		img: "/simplihacks/staff/david.jpg",
	},
	{
		name: "Anshuman Girdhar",
		title: "Judge",
		img: "/simplihacks/staff/ansh.jpg",
	},
	{
		name: "Nathanael Ma",
		title: "Judge",
		img: "/simplihacks/staff/default.png",
	},
];

export default function Staff(): JSX.Element {
	return (
		<>
			<Container my="50px">
				<ContainerInside>
					<Box align="center">
						<Heading m={5}>Staff</Heading>
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
					</Box>
				</ContainerInside>
			</Container>
		</>
	);
}
