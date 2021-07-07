import { Box, Image, Heading, Text, Flex, Button } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React, { ReactNode, MouseEvent } from "react";

const teams: PanelProps[] = [
	{
		src: "https://picsum.photos/200/200",
		teamname: "Example Team 1",
		teamdesc: "alskjdfalkdsfj",
	},
	{
		src: "https://picsum.photos/200/200",
		teamname: "Example Team 2",
		teamdesc: "grhdtxjcfkvyuhijko",
	},
	{
		src: "https://picsum.photos/200/200",
		teamname: "Example Team 3",
		teamdesc: "fewgdtxhcgvnjm",
	},
	{
		src: "https://picsum.photos/200/200",
		teamname: "Example Team 4",
		teamdesc: "dfsdgtxcfhujk",
	},
];

interface State {
	innerPanels: JSX.Element[];
	index: number;
}

export default class RotatingPanel extends React.Component<any, State> {
	constructor(props: any) {
		super(props);

		const innerPanels = teams.map((v, idx: number) => {
			return (
				<Panel
					src={v.src}
					teamname={v.teamname}
					teamdesc={v.teamdesc}
					key={"item_" + idx}
				/>
			);
		});
		this.state = { innerPanels: innerPanels, index: 0 };
		this.handleClickUp = this.handleClickUp.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
	}

	handleClickUp(_event: MouseEvent<HTMLButtonElement>) {
		const newIdx = (this.state.index + 1) % this.state.innerPanels.length;
		this.setState({ index: newIdx });
	}

	handleClickDown(_event: MouseEvent<HTMLButtonElement>) {
		let newIdx = this.state.index - 1;
		if (newIdx < 0) newIdx += this.state.innerPanels.length;
		this.setState({ index: newIdx });
	}

	render(): ReactNode {
		return (
			<Container bg="brand.transparent2" {...this.props}>
				<ContainerInside py={8}>
					<Flex
						alignItems="center"
						justifyContent="space-between"
						mb={3}
					>
						<Button onClick={this.handleClickDown} height="100%">
							&lt;
						</Button>
						{this.state.innerPanels[this.state.index]}
						<Button onClick={this.handleClickUp}>&gt;</Button>
					</Flex>
					{teams.map((_v, index: number) => {
						return (
							<Text
								fontSize={15}
								mx={2}
								color={
									index == this.state.index
										? "white"
										: "brand.purple.dark"
								}
								display="inline"
								key={"text_" + index}
							>
								•
							</Text>
						);
					})}
				</ContainerInside>
			</Container>
		);
	}
}

interface PanelProps {
	children?: any;
	src: string;
	teamname: string;
	teamdesc: string;
}

class Panel extends React.Component<PanelProps, any> {
	// constructor(props: PanelProps) {
	// 	super(props);
	// }

	render(): ReactNode {
		return (
			<Flex
				{...this.props}
				justifyContent="space-between"
				flexDir={["column", "column", "row"]}
				alignItems="center"
				overflow="auto"
				flexGrow={1}
				mx={3}
			>
				<Image
					src={this.props.src}
					h={[125, 175, 250]}
					mr={[0, 0, 3]}
					mb={[3, 3, 0]}
				/>
				<Box>
					<Heading
						size="lg"
						textAlign={["center", "center", "right"]}
					>
						{this.props.teamname}
					</Heading>
					<Text textAlign={["center", "center", "right"]}>
						{this.props.teamdesc}
					</Text>
				</Box>
			</Flex>
		);
	}
}