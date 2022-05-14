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
import { useEffect, useMemo, useReducer, useState } from "react";
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

type AllSelection = Record<string, StringOrNumber[]>;

function selectedReducer(
	oldSelectedItems: AllSelection,
	{ key, values }: { key: string; values: StringOrNumber[] }
) {
	// special case: key is reset (reset the storage)
	if (key === "reset") return {};

	// standard operation: setting a certain key to a value
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

	// useEffect(() => console.log("new selected:", selected), [selected]);

	const matchedOpportunities = useMemo(() => {
		// console.log("ayo");

		// filter by search term
		const preFilter = searchTerm.length
			? filter(opportunities, searchTerm, { key: "title" })
			: opportunities;

		// filter by sidebar
		return preFilter.filter((opportunity) => {
			for (const category in selected) {
				if (
					selected[category].length &&
					!opportunity[category].some((item: StringOrNumber) =>
						selected[category].includes(item)
					)
				) {
					return false;
				}

				// console.log("pass");
			}
			return true;
		});
	}, [opportunities, selected, searchTerm, dictionary]);
	const [page, setPage] = useState(0);

	const numPages = Math.ceil(matchedOpportunities.length / 12);
	return (
		<Container>
			<ContainerInside>
				<HStack spacing={5} align="stretch" py={7}>
					<VStack flex="0 0" spacing={0} align="stretch">
						<HStack spacing={5} p={5}>
							{/* <TimmyButton minW={100}>Filter</TimmyButton> */}
							<TimmyButton
								onClick={() =>
									setSelected({ key: "reset", values: null })
								}
								minW={200}
							>
								Clear All
							</TimmyButton>
						</HStack>
						<Accordion bgColor="brand.darkerBlue" allowToggle>
							{Object.entries(dictionary).map(([key, value]) => {
								// console.log(
								// 	"is",
								// 	value.humanName,
								// 	"(",
								// 	selected[key],
								// 	") empty?\n",
								// 	!selected[key]?.length
								// );

								return value.isMulti ? (
									<CheckboxFilterGroup
										entry={value}
										onSelected={(values) =>
											setSelected({ key, values })
										}
										isEmpty={!selected[key]?.length}
										key={value.humanName}
									/>
								) : (
									<RadioFilterGroup
										entry={value}
										onSelected={(values) =>
											setSelected({ key, values })
										}
										isEmpty={!selected[key]?.length}
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
						{matchedOpportunities?.length ? (
							<>
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
							</>
						) : (
							<Text as="i" py={20}>
								No results found!
							</Text>
						)}
					</VStack>
				</HStack>
			</ContainerInside>
		</Container>
	);
}

// the props to pass the filter group
type FilterGroupProps = {
	entry: ResearchCategory;
	onSelected: (selected: StringOrNumber[]) => void;
	isEmpty: boolean;
};
/**
 * Creates a JSX element that represents a sidebar filter section/group in the research page with radio buttons
 * @param {RadioFilterGroupProps} props the props to pass this filter group
 * @param {ResearchCategory} props.entry a category that contains its name and possible values to filter by
 * @param {(selected: StringOrNumber[]) => void} props.onSelected a callback for when a new value is selected
 * @param {boolean} props.isEmpty whether this filter group should be cleared
 * @returns the JSX element that represents the filter group
 */
function RadioFilterGroup({
	entry,
	onSelected,
	isEmpty,
}: FilterGroupProps): JSX.Element {
	// an intermediate state to store the value to filter for this particular category
	const [selectedItem, setSelectedItem] = useState<string>(null);
	// an effect hook to clear the state if isEmpty is pulled to true
	useEffect(() => {
		// console.log(
		// 	"!is",
		// 	entry.humanName,
		// 	"(",
		// 	selectedItem,
		// 	") empty?\n",
		// 	isEmpty
		// );

		if (isEmpty) setSelectedItem("");
	}, [isEmpty]);

	return (
		<AccordionItem>
			<AccordionButton>
				<HStack>
					<Searchbar placeholder={entry.humanName} size="xs" />
					<AccordionIcon />
				</HStack>
			</AccordionButton>
			<AccordionPanel py={3}>
				<RadioGroup
					onChange={(nextValue: string) => {
						setSelectedItem(nextValue);
						onSelected([nextValue]);
					}}
					value={selectedItem}
					as={VStack}
					align="flex-start"
					textAlign="left"
				>
					{entry.values.map((value) => (
						<Radio value={value} key={value}>
							{value}
						</Radio>
					))}
				</RadioGroup>
			</AccordionPanel>
		</AccordionItem>
	);
}

/**
 * Creates a JSX element that represents a sidebar filter section/group in the research page with checkboxes
 * @param {RadioFilterGroupProps} props the props to pass this filter group
 * @param {ResearchCategory} props.entry a category that contains its name and possible values to filter by
 * @param {(selected: StringOrNumber[]) => void} props.onSelected a callback for when new values are selected
 * @param {boolean} props.isEmpty whether this filter group should be cleared
 * @returns the JSX element that represents the filter group
 */
function CheckboxFilterGroup({
	entry,
	onSelected,
	isEmpty,
}: FilterGroupProps): JSX.Element {
	// an intermediate state to store the value to filter for this particular category
	const [selectedItems, setSelectedItems] = useState<StringOrNumber[]>([]);
	// an effect hook to clear the state if isEmpty is pulled to true
	useEffect(() => {
		// console.log(
		// 	"!is",
		// 	entry.humanName,
		// 	"(",
		// 	selectedItems,
		// 	") empty?\n",
		// 	isEmpty
		// );

		if (isEmpty) setSelectedItems([]);
	}, [isEmpty]);

	return (
		<AccordionItem>
			<AccordionButton>
				<HStack>
					<Searchbar placeholder={entry.humanName} size="xs" />
					<AccordionIcon />
				</HStack>
			</AccordionButton>
			<AccordionPanel py={3}>
				<CheckboxGroup
					onChange={(selected) => {
						setSelectedItems(selected);
						onSelected(selected);
					}}
					value={selectedItems}
				>
					<VStack align="flex-start" textAlign="left">
						{entry.values.map((value) => (
							<Checkbox value={value} key={value}>
								{value}
							</Checkbox>
						))}
					</VStack>
				</CheckboxGroup>
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
