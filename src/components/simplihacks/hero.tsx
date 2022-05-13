import { Heading, HStack, Image, Stack, Text, VStack, Box } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

type ButtonType = {
	link: string;
	text: string;
	icon: string;
};

const buttons: ButtonType[] = [
	{
		link: "https://forms.gle/vW83UXrRH5QPb24XA",
		text: "Sign Up",
		icon: "timmy/timmy_book_icon.png",
	},
	{
		link: "https://discord.gg/school",
		text: "Discord",
		icon: "timmy/timmy_happy_icon.png",
	},
	{
		link: "https://simplihacks-2.devpost.com/",
		text: "DevPost",
		icon: "timmy/timmy_shocked_icon.png",
	},
];

export default function Hero(): JSX.Element {
	return (
		<>
			<Container p="50px">
				<ContainerInside>
					<HStack>
						<Box position="absolute" top="10" left="10" boxSize={150}>
						<Image src="/logos/mlh-trust-badge-2022-white.png"
						/>
						</Box>
						<VStack align="start">
							<Heading fontSize={40}>SimpliHacks 2.0</Heading>
							<Text textAlign="left" fontSize="22px">
								Want to take your coding skills to the next
								level? Want to compete to win awesome prizes and
								internship opportunities? Want to learn to build
								amazing websites and apps?
								{<br />}
								{<br />}
								We can help you do just that with SimpliHacks
								2.0!
								{<br />}
								{<br />}
								SimpliHacks 2.0 is School Simplified’s second
								annual 48-hour virtual hackathon. Programmers of
								all levels are welcome to attend! Whether you’ve
								never written a ‘Hello World’ script or if
								you’re building the next Google! As a developer
								in SimpliHacks, you can create projects to enter
								a wide variety of judging categories to possibly
								win some awesome prizes! The Hackathon is also a
								great place to pick up new skills, as we plan to
								run two days packed with interesting workshops
								and events with the help of our sponsors!{" "}
							</Text>
							<Stack direction={{ base: "column", md: "row" }}>
								{buttons.map((button, i: number) => {
									return (
										<NextLink
											href={button.link}
											target="_blank"
											key={i}
										>
											<Button
												m={3}
												timmysrc={button.icon}
											>
												{button.text}
											</Button>
										</NextLink>
									);
								})}
							</Stack>
						</VStack>
						<Image
							maxW="350px"
							src="/timmy/timmy_shocked.png"
							display={{ base: "none", md: "block" }}
							alt="Timmy shocked"
						/>
					</HStack>
				</ContainerInside>
			</Container>
		</>
	);
}
