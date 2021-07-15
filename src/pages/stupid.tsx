import { Center, Heading, Box } from "@chakra-ui/react";

export default function Four(): JSX.Element {
	return (
		<Center h="90vh">
			<Box >
				<video width="1000" height="1000" autoPlay loop>
					<source src="/rick.mp4" type="video/mp4" />
				</video>
				<Heading>
					There are no controls on this video only rick. Sorry
				</Heading>
			</Box>
		</Center>
	);
}