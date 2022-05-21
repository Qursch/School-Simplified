//@ts-ignore
const config = {
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.gg/gen7eZVzND",
				permanent: true,
			},
		];
	},
	// rust compiler (5x faster build times)
	swcMinify: false,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(config);
