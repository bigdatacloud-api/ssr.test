// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	nitro: {
		compressPublicAssets: true,		
		prerender: {
			crawlLinks: false,
		},
	},
  devtools: { enabled: true },
  routeRules: {
		'/':{prerender:true},
	},
})
