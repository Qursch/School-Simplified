import {
	Box,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import NextChakraLink from "@components/nextChakra";

export default function Four(): JSX.Element {
	return (
		<>
			<Container py="50px">
				<ContainerInside>
					<HStack>
						<Image
							display={{ base: "none", md: "block" }}
							src="timmy/timmy_flying.png"
							w="230px"
							alt="Timmy with beanie"
						/>
						<VStack
							textAlign="left"
							align="start"
							mb="10px"
							justify="space-between"
						>
							<Heading fontSize="35px">
								Start Your Project Today
							</Heading>
							<Text textAlign="left" fontSize="22px">
								Take the chance to showcase your capability,
								creativity, and ideas while receiving community
								service hours and possibly becoming a project
								manager!
							</Text>

							<NextLink
								isExternal
								href="https://docs.google.com/forms/d/e/1FAIpQLSfq0RJcSs6WYufT-YcKo4J1V5GvCTidmoYZ-GUv9G2oaN1Oag/viewform"
								_hover={{ textDecoration: "none" }}
							>
								<Box pt="15px">
									<Button timmysrc="timmy/timmy_paper_icon.svg">
										Propose Project
									</Button>
								</Box>
							</NextLink>
						</VStack>
					</HStack>
				</ContainerInside>
			</Container>
			<Container
				py="50px"
				bg="linear-gradient(180deg, rgba(140, 147, 228, 0.4615) 0%, rgba(167, 178, 255, 0.71) 100%);"
			>
				<ContainerInside>
					<HStack>
						<VStack spacing={8}>
							<Questions
								title="What is a project?"
								text="A project is a temporary endeavor that creates a unique product or service consistent with our mission of inspiring learning while fostering an environment attuned to adapting and improving through customer input."
								image="timmy/timmy_ruler.png"
								w={{ base: "100%", md: "75%" }}
								rounded={30}
							/>
							<Stack
								spacing={8}
								direction={{ base: "column", md: "row" }}
							>
								<Questions
									title="What can my project be?"
									text="Projects can be almost anything, from hackathons to advocacy campaigns to competitive startups, or more!"
									image={null}
									width="100%"
								/>
								<Questions
									title="Do I lead my own project?"
									text="That is up to you! Once your proposal is approved, you can choose to be the project manager or recommend a friend to take over while you are part of the team helping with the project."
									image={null}
									width="100%"
								/>
							</Stack>
						</VStack>
					</HStack>
				</ContainerInside>
			</Container>
			<Container py="50px">
				<ContainerInside>
					<Heading fontSize="35px" textAlign="left">
						SimpliHacks
					</Heading>
					<Heading fontSize="22px" textAlign="left">
						Previous Projects
					</Heading>
					<Text py="15px" fontSize="22px" textAlign="left">
						An example would be Simplihacks, one of the largest
						hackathons in the U.S., which has earned over $100k in
						prizes! It is a 2-day virtual event, brought to you by
						School Simplified. We’re bringing it back in February of
						2022, so stay tuned!
					</Text>
					<Stack
						direction={{ base: "column-reverse", lg: "row" }}
						align="start"
						spacing={50}
					>
						<Winner
							image="simplihacks/winners/signslate.png"
							title="Signslate"
							award="1st Place Winner from June 2021"
							winners="Ayush Agarwal, Krushay Bhavsar"
							link="https://devpost.com/software/signslate"
						/>
						<VStack align="start" spacing={5}>
							<Text fontSize="22px" textAlign="left">
								If this is your first hackathon or you have no
								experience with coding, do not worry!
								Participants from any competition level are
								welcomed to join our great workshops to get
								started on your computer science journey.
								{<br />}
								{<br />}
								Want to learn how to make cool websites and
								apps? Or maybe you just want to learn how to
								code for fun. We will help you do just that.
							</Text>
							<NextLink
								isExternal
								href="/simplihacks"
								_hover={{ textDecoration: "none" }}
							>
								<Button timmysrc="timmy/timmy_scroll_icon.png">
									More Information
								</Button>
							</NextLink>
						</VStack>
					</Stack>
				</ContainerInside>
			</Container>
		</>
	);
}

function Questions({ title, text, image = null, ...props }) {
	return (
		<Box
			overflow="hidden"
			rounded={20}
			bg="rgba(90, 96, 173, .8)"
			boxShadow="0px 5px 5px rgba(0, 0, 0, 0.2)"
			{...props}
		>
			<HStack align="end">
				<VStack m="20px" align="start">
					<Heading textAlign="left" fontSize="22px">
						{title}
					</Heading>
					<Text textAlign="left" fontSize="18px">
						{text}
					</Text>
				</VStack>
				<Image
					height="150px"
					display={{ base: "none", md: "block" }}
					src={image}
				/>
			</HStack>
		</Box>
	);
}

function Winner({
	image,
	title,
	link,
	award,
	winners,
}: {
	image: string;
	title: string;
	link: string;
	award: string;
	winners: string;
}) {
	return (
		<Box w="100%" minW="350px" rounded={5} bg="rgba(90, 96, 173, .8)">
			<Image w="100%" src={image} />
			<VStack align="start" p="15px">
				<NextChakraLink target="_blank" href={link}>
					<Heading fontSize="22px">{title}</Heading>
				</NextChakraLink>
				<Text textAlign="left" fontSize="18px">
					{award}
				</Text>
				<Heading textAlign="left" fontSize="18px">
					{winners}
				</Heading>
			</VStack>
		</Box>
	);
}
