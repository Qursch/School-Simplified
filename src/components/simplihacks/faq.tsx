import { Box, Heading } from "@chakra-ui/react";
import FaqList from "@components/contact/faq-list";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const qaPairs = [
	{
		question: "What is a Hackathon?",
		answer: [
			{
				text: "A hackathon is an event where creators from all different backgrounds come together for a short period of time to collaborate on a tech related project. Throughout the duration of the event, there's a bunch of fun mini-events you may participate in, and workshops where you can learn new tools and technologies. In the end, you can submit your project your team against others to potentially win an award!",
				link: "",
			},
		],
	},
	{
		question: "Who can participate?",
		answer: [
			{
				text: "How do I join? Any high school or middle school students can participate! Sign up on the TypeForm and join our Discord Server! (Note: Sign Ups are currently not open)",
				link: "",
			},
		],
	},
	{
		question: "What if I don't have a team?",
		answer: [
			{
				text: "No worries! You can participate alone, and there will be a session at the beginning of the hackathon for team formation. A team can have a maximum of 4 people.",
				link: "",
			},
		],
	},
	{
		question: "Does this cost money?",
		answer: [
			{
				text: "No! Participating in Simplihacks is 100% free for everyone!",
				link: "",
			},
		],
	},
	{
		question: "When does Simplihacks take place?",
		answer: [
			{
				text: "SimpliHacks2.0 will take place from June 24-26 2022, and will last 48 hours!",
				link: "",
			},
		],
	},
	{
		question: "What if I can't code?",
		answer: [
			{
				text: "No problem! All experience levels are welcome. In addition, we will be holding workshops where you can learn!",
				link: "",
			},
		],
	},
	{
		question: "What are the judging criteria?",
		answer: [
			{
				text: "TBA",
				link: "",
			},
		],
	},
	{
		question: "Is there a Code of Conduct?",
		answer: [
			{
				text: "Yes, there is! We will be following the MLH Code of Conduct” Link the text to that page, please",
				link: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
			},
		],
	},
	{
		question: "Are there prizes?",
		answer: [
			{
				text: "Yes there will be. We will anounce them soon.",
				link: "",
			},
		],
	},
	{
		question: "What if I have another question?",
		answer: [
			{
				text: "Feel free to ask questions at any time! Send us an email at aviel.hernandez@schoolsimplified.org",
				link: "mailto:aviel.hernandez@schoolsimplified.org",
			},
		],
	},
];

export default function FAQ(): JSX.Element {
	return (
		<Box py={3}>
			<Container py={19}>
				<ContainerInside>
					<Heading as="h1" m={5}>
						Frequently Asked Questions
					</Heading>
					<FaqList list={qaPairs} />
				</ContainerInside>
			</Container>
		</Box>
	);
}
