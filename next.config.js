//@ts-ignore
module.exports = {
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.gg/school",
				permanent: true,
			},
		];
	},
	// rust compiler (5x faster build times)
	swcMinify: false,
};
