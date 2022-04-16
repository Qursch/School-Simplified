import { getResearchOpportunities } from "@api/notion";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	HStack,
	Icon,
	Image,
	SimpleGrid,
	Spacer,
	Text,
	VStack,
} from "@chakra-ui/react";
import TimmyButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { useMemo, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Opportunity } from "types";

type ResearchProps = {
	opportunities: Opportunity[];
};

export default function Research({
	opportunities,
}: ResearchProps): JSX.Element {
	// console.log("opportunities:", JSON.stringify(opportunities, null, 2));
	// return <UnderConstruction />;
	return (
		<>
			<Container bgColor="brand.darkerBlue">
				<ContainerInside py={10} px={32}>
					<HStack spacing={15}>
						<VStack textAlign="left" align="stretch" spacing={5}>
							<Heading>Research Simplified</Heading>
							<Text>
								A universal, intelligent search algorithm
								dedicated to helping people find educational
								opportunities on the middle school, high school,
								and undergraduate level.
							</Text>
							<Text as="i">All in one place, free forever.</Text>
						</VStack>
						<Image
							src="/timmy/timmy_football.png"
							alt="Timmy holding an American football"
						/>
					</HStack>
				</ContainerInside>
			</Container>
			<ResearchViewPane opportunities={opportunities} />
		</>
	);
}

function ResearchViewPane({ opportunities }: ResearchProps): JSX.Element {
	const matchedOpportunities = useMemo(() => {
		return opportunities;
	}, [opportunities]);
	const [page, setPage] = useState(0);

	return (
		<Container>
			<ContainerInside>
				<HStack spacing={5} align="stretch" py={7}>
					<VStack flex="0 0" spacing={0} align="stretch">
						<HStack spacing={5} p={5}>
							<TimmyButton minW={100}>Filter</TimmyButton>
							<TimmyButton minW={100}>Clear All</TimmyButton>
						</HStack>
						<Accordion
							bgColor="brand.darkerBlue"
							allowMultiple
							allowToggle
						>
							<AccordionItem>
								<AccordionButton>
									Textfield
									<AccordionItem />
								</AccordionButton>
								<AccordionPanel>
									<CheckboxGroup>
										<VStack>
											<Checkbox value="a">A</Checkbox>
											<Checkbox value="b">B</Checkbox>
										</VStack>
									</CheckboxGroup>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</VStack>
					<VStack flex="1 1" spacing={15} align="stretch">
						<HStack>
							<Box>Type to Search</Box>
							<Spacer />
							<Heading size="xs">Sort By</Heading>
							<Box>Dropdown</Box>
						</HStack>
						<SimpleGrid columns={3} spacing={5}>
							{matchedOpportunities
								.slice(page * 12, (page + 1) * 12)
								.map((opportunity) => (
									<OpportunityCard
										opportunity={opportunity}
									/>
								))}
						</SimpleGrid>
						<Spacer />
						<HStack alignSelf="flex-end">
							<Text>
								Page {page + 1} of{" "}
								{Math.ceil(matchedOpportunities.length / 12)}
							</Text>
							<Button
								onClick={() => setPage(page - 1)}
								disabled={page === 0}
								background="transparent!important"
							>
								<Icon as={FaLongArrowAltLeft} />
							</Button>
							<Button
								onClick={() => setPage(page + 1)}
								disabled={
									page ===
									Math.ceil(
										matchedOpportunities.length / 12
									) -
										1
								}
								background="transparent!important"
							>
								<Icon as={FaLongArrowAltRight} />
							</Button>
						</HStack>
					</VStack>
				</HStack>
			</ContainerInside>
		</Container>
	);
}

type CardProps = { opportunity: Opportunity };

function OpportunityCard({ opportunity }: CardProps): JSX.Element {
	const { title, deadline, link } = opportunity;
	return (
		<NextChakraLink href={link}>
			<VStack
				align="stretch"
				spacing={0}
				bg="brand.darkerBlue"
				h="100%"
				overflow="hidden"
				rounded={5}
			>
				<Image
					src="/timmy/1.png"
					h="50%"
					objectFit="cover"
					objectPosition="center"
					bg="white"
					rounded={5}
					style={{ aspectRatio: "3" }}
				/>
				{/* <Box
					bgImg="/timmy/1.png"
					bgSize="cover"
					bgPos="center"
					h="100%"
					rounded={5}
				/> */}
				<VStack
					align="stretch"
					px={3.5}
					py={5}
					justify="center"
					h="100%"
				>
					<Heading size="sm">{title}</Heading>
					<Text>
						<Text as="b">Deadline:</Text> {deadline.join(", ")}
					</Text>
				</VStack>
			</VStack>
		</NextChakraLink>
	);
}

export async function getStaticProps() {
	const props: ResearchProps = {
		opportunities: await getResearchOpportunities(),
	};
	return { props, revalidate: 360 };
}
