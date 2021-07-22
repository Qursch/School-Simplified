import { Box, Heading, HStack, Link, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Image from "next/image";
import { ReactElement } from "react";

export default function partners(): ReactElement {
	return (
		<Container>
			<ContainerInside p={10}>
				<Box>
					<Heading>Our Partners</Heading>
					<Text>
						School Simplified is proudly partnered by the companies
						below. Each logo is clickable and links through to the
						sponsor's own website - please support these companies
						in any way you can, as a thank you for their incredible
						support of School Simplified.
					</Text>
				</Box>
				<HStack
					justify="center"
					flexDir={{ base: "column", md: "row" }}
					mt={5}
				>
					<Link href="https://slingshotahead.com/" isExternal>
						<Image
							width="300px"
							height="125px"
							src="/partners/slingshot.png"
						/>
					</Link>
					<Link href="https://versatilenode.com/" isExternal>
						<Image
							width="400px"
							height="100px"
							src="/partners/versatile.png"
						/>
					</Link>
				</HStack>
			</ContainerInside>
		</Container>
	);
}