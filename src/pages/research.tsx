import { getResearchOpportunities } from "@api/notion";
import UnderConstruction from "@components/underConstruction";

export default function Research(): JSX.Element {
	return <UnderConstruction />;
}

export async function getStaticProps() {
	const props = { opportunities: await getResearchOpportunities() };
	console.log("props: ", props);
	return { props, revalidate: 360 };
}
