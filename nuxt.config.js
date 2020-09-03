const mode = "universal"; // universal/spa
const serveFromSubFolder = false;
const webpack = require('webpack')

/* options end */

const pkg = require("./package");
const path = require("path");

let dist = "";
if (mode === "universal") {
	dist = "dist-universal";
} else {
	dist = "dist-spa";
}

module.exports = {
	mode: mode,
	/*
	 ** Headers of the page
	 */
	head: {
		htmlAttrs: {
			lang: "en"
		},
		title: "wox smart",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: pkg.description
			}
		],
		script: [
			{
				src:
					(process.env.NODE_ENV !== "production" ||
					!serveFromSubFolder
						? ""
						: "/" + dist) + "/myAssets/bower_components/jquery/js/jquery.min.js"
			},
			{
				src:
					(process.env.NODE_ENV !== "production" ||
					!serveFromSubFolder
						? ""
						: "/" + dist) + "/myAssets/bower_components/popper.js/js/popper.min.js"
			},
			{
				src:
					(process.env.NODE_ENV !== "production" ||
					!serveFromSubFolder
						? ""
						: "/" + dist) + "/myAssets/bower_components/bootstrap/js/bootstrap.min.js"
			},
			{
				src:
					(process.env.NODE_ENV !== "production" ||
					!serveFromSubFolder
						? ""
						: "/" + dist) + "/myAssets/bower_components/bootstrap/js/bootstrap.min.js"
			},
			{
				src:
					(process.env.NODE_ENV !== "production" ||
					!serveFromSubFolder
						? ""
						: "/" + dist) + "/myAssets/bower_components/jquery-slimscroll/js/jquery.slimscroll.js"
			},
			{
				src:
					(process.env.NODE_ENV !== "production" ||
					!serveFromSubFolder
						? ""
						: "/" + dist) + "/myAssets/bower_components/modernizr/js/modernizr.js"
			},
			{
				src:
					(process.env.NODE_ENV !== "production" ||
					!serveFromSubFolder
						? ""
						: "/" + dist) + "/myAssets/bower_components/modernizr/js/css-scrollbars.js"
			},
			{
				src:
					(process.env.NODE_ENV !== "production" ||
					!serveFromSubFolder
						? ""
						: "/" + dist) + "/myAssets/assets/pages/dashboard/custom-dashboard.min.js"
			},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/jquery.counterup.min.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/wow.min.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/apexcharts.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/slick.min.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/select2.min.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/owl.carousel.min.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/jquery.magnific-popup.min.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/smooth-scrollbar.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/lottie.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/core.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/charts.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/animated.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/kelly.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/maps.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/worldLow.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/chart-custom.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/js/custom.js"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/vendor/uikit.min.js"
		// 	}
		// ],
		// link: [
		// 	{
		// 		rel: "icon",
		// 		type: "image/x-icon",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/favicon.ico"
		// 	},
		// 	{
		// 		rel: "preload",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/vendor/uikit.min.js",
		// 		as: "script"
		// 	},
		// 	{
		// 		rel: "preload",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/fonts/roboto_base64.css",
		// 		as: "style"
		// 	},
		// 	{
		// 		rel: "preload",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/fonts/sourceCodePro_base64.css",
		// 		as: "style"
		// 	},
		// 	{
		// 		rel: "preload",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) +
		// 			"/fonts/mdi/css/materialdesignicons.css",
		// 		as: "style"
		// 	},
		// 	{
		// 		rel: "stylesheet",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/fonts/roboto_base64.css"
		// 	},
		// 	{
		// 		rel: "stylesheet",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/fonts/sourceCodePro_base64.css"
		// 	},
		// 	{
		// 		rel: "stylesheet",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/fonts/mdi/css/materialdesignicons.css"
		// 	},
		// 	{
		// 		rel: "stylesheet",
		// 		href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css"
		// 	},
		// 	{
		// 		src:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/vendor/uikit.min.js"
		// 	}
		// ],
		// link: [
		// 	{
		// 		rel: "icon",
		// 		type: "image/x-icon",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/favicon.ico"
		// 	},
		// 	{
		// 		rel: "preload",
		// 		href:
		// 			(process.env.NODE_ENV !== "production" ||
		// 			!serveFromSubFolder
		// 				? ""
		// 				: "/" + dist) + "/vendor/uikit.min.js",
		// 		as: "script"
		// 	},
			// {
			// 	rel: "preload",
			// 	href:
			// 		(process.env.NODE_ENV !== "production" ||
			// 		!serveFromSubFolder
			// 			? ""
			// 			: "/" + dist) + "/fonts/roboto_base64.css",
			// 	as: "style"
			// },
			// {
			// 	rel: "preload",
			// 	href:
			// 		(process.env.NODE_ENV !== "production" ||
			// 		!serveFromSubFolder
			// 			? ""
			// 			: "/" + dist) + "/fonts/sourceCodePro_base64.css",
			// 	as: "style"
			// },
			// {
			// 	rel: "preload",
			// 	href:
			// 		(process.env.NODE_ENV !== "production" ||
			// 		!serveFromSubFolder
			// 			? ""
			// 			: "/" + dist) +
			// 		"/fonts/mdi/css/materialdesignicons.css",
			// 	as: "style"
			// },
			// {
			// 	rel: "stylesheet",
			// 	href:
			// 		(process.env.NODE_ENV !== "production" ||
			// 		!serveFromSubFolder
			// 			? ""
			// 			: "/" + dist) + "/fonts/roboto_base64.css"
			// },
			// {
			// 	rel: "stylesheet",
			// 	href:
			// 		(process.env.NODE_ENV !== "production" ||
			// 		!serveFromSubFolder
			// 			? ""
			// 			: "/" + dist) + "/fonts/sourceCodePro_base64.css"
			// },
			// {
			// 	rel: "stylesheet",
			// 	href:
			// 		(process.env.NODE_ENV !== "production" ||
			// 		!serveFromSubFolder
			// 			? ""
			// 			: "/" + dist) + "/fonts/mdi/css/materialdesignicons.css"
			// },
			// {
			// 	rel: "stylesheet",
			// 	href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css"
			// }
		]
	},




// const webpack = require('webpack');
// export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  // target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  // head: {
  //   title: process.env.npm_package_name || '',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'script', href: '/myAssets/bower_components/jquery/js/jquery.min.js'},
      // { rel: 'script', href: '/myAssets/bower_components/jquery/js/jquery.min.js' },
      // { rel: 'script', href: '/myAssets/bower_components/popper.js/js/popper.min.js'},
      // { rel: 'script', href: '/myAssets/bower_components/bootstrap/js/bootstrap.min.js'},
      // { rel: 'script', href: '/myAssets/bower_components/jquery-slimscroll/js/jquery.slimscroll.js'},
      // { rel: 'script', href: '/myAssets/bower_components/modernizr/js/modernizr.js'},
      // { rel: 'script', href: '/myAssets/bower_components/modernizr/js/css-scrollbars.js'},
      // { rel: 'script', href: '/myAssets/assets/pages/todo/todo.js'},
      

    // ],
    // script: [
    //   {src: '/myAssets/bower_components/jquery/js/jquery.min.js', body: true },
    //   {src: '/myAssets/bower_components/jquery-ui/js/jquery-ui.min.js', body: true},
    //   {src: '/myAssets/bower_components/popper.js/js/popper.min.js', body: true},
    //   {src: '/myAssets/bower_components/bootstrap/js/bootstrap.min.js', body: true},
    //   {src: '/myAssets/bower_components/jquery-slimscroll/js/jquery.slimscroll.js', body: true},
    //   {src: '/myAssets/bower_components/modernizr/js/modernizr.js', body: true},
    //   {src: '/myAssets/bower_components/modernizr/js/css-scrollbars.js', body: true},
    //   {src: '/myAssets/assets/pages/todo/todo.js', body: true},
    // ]
  // },
  /*
  ** Global CSS
  */

 
  css: [
    '@/assets/myAssets/assets/scss/style.scss',
    '@/assets/myAssets/bower_components/bootstrap/css/bootstrap.min.css',
    '@/assets/myAssets/assets/icon/themify-icons/themify-icons.css',
    '@/assets/myAssets/assets/icon/icofont/css/icofont.css',
    '@/assets/myAssets/assets/pages/flag-icon/flag-icon.min.css',
    '@/assets/myAssets/assets/pages/menu-search/css/component.css',
    '@/assets/myAssets/assets/css/style.css',
    '@/assets/myAssets/assets/css/jquery.mCustomScrollbar.css',
    '@/assets/myAssets/assets/pages/dashboard/horizontal-timeline/css/style.css',
    '@/assets/myAssets/bower_components/chartist/css/chartist.css',
    '@/assets/myAssets/bower_components/c3/css/c3.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    // cssSourceMap: true,
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        $: 'jquery',
        // _: 'lodash'
      })
    ]
  }
}
