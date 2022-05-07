import { Box, Heading, Text, Link } from "@chakra-ui/react";
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
				text: "Any student currently enrolled in high school or middle school can participate! Sign up on the Google Form and join our Discord Server!",
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
				text: "No! Participating in SimpliHacks is 100% free for everyone!",
				link: "",
			},
		],
	},
	{
		question: "When does SimpliHacks 2.0 take place?",
		answer: [
			{
<<<<<<< Updated upstream
				text: "SimpliHacks2.0 will take place from June 24-26 2022, and will last 48 hours!",
=======
<<<<<<< HEAD
				text: "SimpliHacks 2.0 will take place from June 24-26th 2022, and will last 48 hours!",
=======
				text: "SimpliHacks2.0 will take place from June 24-26 2022, and will last 48 hours!",
>>>>>>> 3789726289f2c5aeb0591a22b6659a97fc23eb81
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
				text: "Yes, there is! We will be following the MLH Code of Conduct” Link the text to that page, please",
				link: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
=======
<<<<<<< HEAD
				text: (
					<Text>
						Yes, there is! We will be following the{" "}
						<Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
							MLH Code of Conduct
						</Link>
					</Text>
				),
				link: "",
=======
				text: "Yes, there is! We will be following the MLH Code of Conduct” Link the text to that page, please",
				link: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
>>>>>>> 3789726289f2c5aeb0591a22b6659a97fc23eb81
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
				text: "Feel free to ask questions at any time! Send us an email at aviel.hernandez@schoolsimplified.org",
				link: "mailto:aviel.hernandez@schoolsimplified.org",
=======
<<<<<<< HEAD
				text: (
					<Text>
						Feel free to ask questions at any time! Send us an email
						at{" "}
						<Link href="mailto:aviel.hernandez@schoolsimplified.org">
							aviel.hernandez@schoolsimplified.org
						</Link>
					</Text>
				),
				link: "",
=======
				text: "Feel free to ask questions at any time! Send us an email at aviel.hernandez@schoolsimplified.org",
				link: "mailto:aviel.hernandez@schoolsimplified.org",
>>>>>>> 3789726289f2c5aeb0591a22b6659a97fc23eb81
>>>>>>> Stashed changes
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
