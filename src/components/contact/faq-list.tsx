/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-default-export */
import { Accordion } from "@chakra-ui/react";
import FaqItem from "@components/contact/faq-item";
import { QAPair } from "types";

export default function FaqList({ list }: { list: QAPair[] }): JSX.Element {
	return (
		<Accordion allowMultiple zIndex={0}>
			{list.map(({ question, answer }): JSX.Element => {
				return (
					<FaqItem
						key={question}
						question={question}
						answers={answer}
					/>
				);
			})}
		</Accordion>
	);
}
