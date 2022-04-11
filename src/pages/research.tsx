import { getResearchOpportunities } from "@api/notion";
import UnderConstruction from "@components/underConstruction";
import { Opportunity } from "types";

export default function Research({
	opportunities,
}: {
	opportunities: Opportunity[];
}): JSX.Element {
	console.log("opportunities:", JSON.stringify(opportunities, null, 2));
	return <UnderConstruction />;
}

export async function getStaticProps() {
	const props = { opportunities: await getResearchOpportunities() };
	return { props, revalidate: 360 };
}
