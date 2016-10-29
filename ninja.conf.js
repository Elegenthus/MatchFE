module.exports = {
	template: "swig", // whatever template engine you like
	mock: "/mock/mock.json", // dir for mock data
	webpack: true, // flag for using webpack or not
	proxy: {
		route: "/getScore",
		origin: "http://120.77.57.126:5000"
	},
	staticDir: "/static",
	templateDir: "/template",
}
