import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import ContactForm from "@components/contact-form";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import FaqList from "@components/faq-list";
import React from "react";

export default function Contact(): JSX.Element {
	const qaPairs = [
		{
			question: "Who are you?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "Who started School Simplified?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "Is School Simplified free to use?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "How can I get community service hours?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "How reliable is School Simplified?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	return (
		<Container>
			<ContainerInside>
				<Flex
					flexDirection={{ sm: "column", lg: "row" }}
					justify="center"
					align="stretch"
					px={{ sm: 10, md: 100, lg: 200 }}
					pb={10}
				>
					<Box flexDirection="column" flex={1} py={10} align="center">
						<Heading as="h1" size="xl" mb={3}>
							Get in Touch
						</Heading>
						<Heading as="h2" size="md" mb={3}>
							Have a Question? Comment? Concern?
						</Heading>
						<Image
							src="/contactPerson.png" 
							alt="Contact Person" 
							w="200px"
						/>
					</Box>
					<Box flex={2} py={10}>
						<ContactForm />
					</Box>
				</Flex>

				<Flex flexDirection="column" align="stretch" pb={10}>
					<Heading as="h1" size="xl" mb={3}>
						FAQ
					</Heading>
					<FaqList list={qaPairs} />
				</Flex>
			</ContainerInside>
		</Container>
	);
}