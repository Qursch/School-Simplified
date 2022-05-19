// import { getBlogListing } from "@api/notion";
import {
	AcademicServices,
	Chapters,
	GettingStarted,
	Intro,
	ProgrammingSimplified,
	Projects,
	Testimonial,
} from "@components/home";
import { fadeIn } from "@styles/animations";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>School Simplified | Home Page</title>
			</Head>
			{/* <PopUp /> */}
			<motion.div
				initial="initial"
				whileInView="onView"
				variants={fadeIn()}
			>
				<Intro />
			</motion.div>
			<GettingStarted />
			<AcademicServices />
			<Projects />
			<Chapters />
			<ProgrammingSimplified />
			<Testimonial />
		</>
	);
}

// export async function getStaticProps() {
// 	const listing: BlogListing[] = (await getBlogListing())
// 		.sort(
// 			(a, b) =>
// 				new Date(b.created_time).getTime() -
// 				new Date(a.created_time).getTime()
// 		)
// 		.slice(0, 3);
// 	return { props: { listing }, revalidate: 60 };
// }
