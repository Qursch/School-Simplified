import { getResearchOpportunities } from "@api/notion";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	HStack,
	Icon,
	Image,
	Radio,
	RadioGroup,
	Select,
	SimpleGrid,
	Spacer,
	Text,
	VStack,
} from "@chakra-ui/react";
import { StringOrNumber } from "@chakra-ui/utils";
import TimmyButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import Searchbar from "@components/searchbar";
import { filter } from "fuzzaldrin-plus";
import { useMemo, useReducer, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Opportunity, ResearchCategory } from "types";

type ResearchProps = {
	opportunities: Opportunity[];
	dictionary: Record<string, ResearchCategory>;
};

export default function Research({
	opportunities,
	dictionary,
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
			<ResearchViewPane
				opportunities={opportunities}
				dictionary={dictionary}
			/>
		</>
	);
}

type AllSelection = Record<string, StringOrNumber | StringOrNumber[]>;

function selectedReducer(
	oldSelectedItems: AllSelection,
	{ key, values }: { key: string; values: StringOrNumber | StringOrNumber[] }
) {
	const copy = Object.assign({}, oldSelectedItems);
	copy[key] = values;

	console.log("new selected:", copy);
	return copy;
}

function ResearchViewPane({
	opportunities,
	dictionary,
}: ResearchProps): JSX.Element {
	const [selected, setSelected] = useReducer(selectedReducer, {});
	const [searchTerm, setSearchTerm] = useState("");

	const matchedOpportunities = useMemo(() => {
		// filter by search term
		const preFilter = searchTerm.length
			? filter(opportunities, searchTerm, { key: "title" })
			: opportunities;

		// filter by sidebar
		return preFilter.filter((opportunity) => {
			for (const category in selected) {
				// if(!opportunity[category].includes()) {
				// 	return false;
				// }

				// check if this is a single item
				if (
					typeof opportunity[category] === "string" ||
					typeof opportunity[category] === "number"
				) {
					if (opportunity[category] !== selected[category])
						return false;
				} else {
					// must be a list item
					// @ts-ignore
					const list: StringOrNumber[] = selected[category];
					if (
						list.length &&
						!opportunity[category].some((item: StringOrNumber) =>
							list.includes(item)
						)
					)
						return false;
				}

				// console.log("pass");
			}
			return true;
		});
	}, [opportunities, selected, searchTerm]);
	const [page, setPage] = useState(0);

	const numPages = Math.ceil(matchedOpportunities.length / 12);
	return (
		<Container>
			<ContainerInside>
				<HStack spacing={5} align="stretch" py={7}>
					<VStack flex="0 0" spacing={0} align="stretch">
						<HStack spacing={5} p={5}>
							{/* <TimmyButton minW={100}>Filter</TimmyButton> */}
							<TimmyButton minW={200}>Clear All</TimmyButton>
						</HStack>
						<Accordion
							bgColor="brand.darkerBlue"
							allowMultiple
							allowToggle
							defaultIndex={[]}
						>
							{Object.entries(dictionary).map((entry) => {
								const [key, value] = entry;
								return (
									<FilterGroup
										entry={value}
										onSelected={(values) =>
											setSelected({ key, values })
										}
										key={value.humanName}
									/>
								);
							})}
						</Accordion>
					</VStack>
					<VStack flex="1 1" spacing={15} align="stretch">
						<HStack>
							<Searchbar
								placeholder="Type to Search"
								flex={2}
								callback={setSearchTerm}
								size="sm"
							/>
							<Spacer maxW={50} />
							<Heading size="xs">Sort By</Heading>
							<Select placeholder="None" w="fit-content">
								<option value="deadline_early">
									Earliest Deadline
								</option>
							</Select>
						</HStack>
						<SimpleGrid columns={3} spacing={5}>
							{matchedOpportunities
								.slice(page * 12, (page + 1) * 12)
								.map((opportunity) => (
									<OpportunityCard
										opportunity={opportunity}
										key={opportunity.link}
									/>
								))}
						</SimpleGrid>
						<Spacer />
						{matchedOpportunities?.length ? (
							<HStack alignSelf="flex-end">
								<Text>
									Page {page + 1} of {numPages}
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
									disabled={page === numPages - 1}
									background="transparent!important"
								>
									<Icon as={FaLongArrowAltRight} />
								</Button>
							</HStack>
						) : (
							<Text as="i">No results found!</Text>
						)}
					</VStack>
				</HStack>
			</ContainerInside>
		</Container>
	);
}

type FilterGroupProps = {
	entry: ResearchCategory;
	onSelected: (selected: StringOrNumber | StringOrNumber[]) => void;
};
function FilterGroup({ entry, onSelected }: FilterGroupProps): JSX.Element {
	return (
		<AccordionItem>
			<AccordionButton>
				<HStack>
					<Searchbar placeholder={entry.humanName} size="xs" />
					<AccordionIcon />
				</HStack>
			</AccordionButton>
			<AccordionPanel py={3}>
				{entry.isMulti ? (
					<CheckboxGroup onChange={onSelected}>
						<VStack align="flex-start" textAlign="left">
							{entry.values.map((value) => (
								<Checkbox value={value} key={value}>
									{value}
								</Checkbox>
							))}
						</VStack>
					</CheckboxGroup>
				) : (
					<RadioGroup onChange={onSelected}>
						<VStack align="flex-start" textAlign="left">
							{entry.values.map((value) => (
								<Radio value={value} key={value}>
									{value}
								</Radio>
							))}
						</VStack>
					</RadioGroup>
				)}
			</AccordionPanel>
		</AccordionItem>
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
				{/* <Image
					src="/timmy/1.png"
					h="50%"
					objectFit="cover"
					objectPosition="center"
					bg="white"
					rounded={5}
					style={{ aspectRatio: "3" }}
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
	const props: ResearchProps = await getResearchOpportunities();
	return { props, revalidate: 360 };
}
