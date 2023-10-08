const pageTitle = "Get Your Tools";
// create an object that maps the url to the template, title, and description
const routes = {
	404: {
		template: "/404.html",
		title: "404 | " + pageTitle,
		description: "Page not found",
	}, 
	"/": {
		template: "/home.html",
		title: "Home | " + pageTitle,
		description: "This is the home page",
	},
	weather: {
		template: "/weather/index.html",
		title: "Weather App | " + pageTitle,
		description: "This is the weather app",
	},
	drumkit: {
		template: "/drum-kit/index.html",
		title: "Drum Kit | " + pageTitle,
		description: "This is the Drum Kit page",
	},
    githubprofile: {
		template: "/git-profile/index.html",
		title: "Github Profile Viewer | " + pageTitle,
		description: "This is the Github Profile Viewer page",
	},
    clock: {
		template: "/analog-clock/index.html",
		title: "Clock | " + pageTitle,
		description: "This is the clock page",
	},
};

// create a function that watches the url and calls the urlLocationHandler
const locationHandler = async () => {
	// get the url path, replace hash with empty string
	var location = window.location.hash.replace("#", "");
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = "/";
	}
	// get the route object from the routes object
	const route = routes[location] || routes["404"];
	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());
	// set the content of the content div to the html
	document.getElementById("content").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};
// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();