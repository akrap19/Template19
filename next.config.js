const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
  });
  
  const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
  const withVanillaExtract = createVanillaExtractPlugin();
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
	reactStrictMode: false,
	images: {
	  domains: ['via.placeholder.com', 'storage.googleapis.com'],
	},
	webpack(config) {
	  config.module.rules.push({
		test: /\.svg$/,
		use: [
		  {
			loader: '@svgr/webpack',
			options: {
			  svgoConfig: {
				plugins: [
				  {
					name: 'preset-default',
					params: {
					  overrides: {
						removeViewBox: false,
					  },
					},
				  },
				],
			  },
			},
		  },
		],
	  });
  
	  return config;
	},
	// 🔥 Ensure Webpack is used instead of Turbopack
	experimental: {
	  forceWebpack: true,
	},
	output: 'standalone',
  };
  
  module.exports = withVanillaExtract(withBundleAnalyzer(nextConfig));
  