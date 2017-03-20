/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("David")
 //var awesomeThoughts = "I am David and I am AWESOME!"
 //console.log(awesomeThoughts)
 //var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
 //$("#main").append(funThoughts)
// var name = "David VAUQUELIN"
// var formattedName = HTMLheaderName.replace("%data%", name)
// var role = "Java Developper"
// var formattedRole = HTMLheaderRole.replace("%data%", role)
// var skills = ["Java", "JavaEE", "Swing", "Prototype", "JavaFX", "JavaScript", "Python"]
// $("#header").prepend(formattedRole)
// $("#header").prepend(formattedName)
// var slicedString = "U".concat("audacity".slice(2));
// console.log("sliced string ", slicedString);
 var bio = {
	"name": "DaVauk",
	"role": "Sofware Developer",
	"experience": "9 years experience",
	"contacts": {
		"mobile": "06.99.08.46.00",
		"email": "davauk@protonmail.com",
		"github": "davauk",
		"twitter": "da.vauk06@gmail.com",
		"blog": "da.vauk06@gmail.com",
		"location": "France"
	},
	"welcomeMessage": "The network is the computer",
	"skills": {
		"systems": [{"name": "systems1", "level": 50}, {"name": "systems2", "level": 50}],
		"frameworks": [{"name": "frameworks1", "level": 50}, {"name": "frameworks2", "level": 50}],
		"languages": [{"name": "languages1", "level": 50}, {"name": "languages2", "level": 50}],
		"tools": [{"name": "tools1", "level": 50}, {"name": "tools2", "level": 50}],
		"spokenLanguages": [{"name": "French", "level": 50}, {"name": "English", "level": 50}]
		//"Java", "Java/Swing", "JavaFX", "JavaScript", "Python", "Parallel/Distributed Algorithm", "Machine Learning Algorithm"
	},
	"bioPic": "images/197x148.gif"
 }
 
 var work = {
	"jobs": [
		{
			"employer": "Orange",
			"title": "Scala/Python Developer",
			"location": "Mougins, France",
			"dates": "Jul. 2015 - Nov. 2016",
			"description": "Work with ETL Python Frameword to inject data into Cassandra. Develop a admin console for the ETL.  Dockerize the ETL to allow on demand job slaves creation."
		},
		{
			"employer": "EDF Lab",
			"title": "JavaEE/Python Developer",
			"location": "Clamart, France",
			"dates": "Feb. 2014 - June 2015",
			"description": "Evolution on Java EE application to visualize and analyse multidimensional data sets of electrical power production/consumption.<br/>Development of robot to download electrical power consumption/production from diverse providers."
		},
		{
			"employer": "Thales Alénia Space",
			"title": "Java/Python Developer",
			"location": "Cannes, France",
			"dates": "Oct. 2013 - Jan. 2014",
			"description": "Report generation and graph visualization using JFreeChart and MatPlotLib."
		},
		{
			"employer": "Thales Safare",
			"title": "Java Developer",
			"location": "Sophia Antipolis, France",
			"dates": "Mar. 2011 - Sept. 2013",
			"description": "Java GUI and TCP/IP messaging system for submarin's sonars and sensors."
		},
		{
			"employer": "Thales Underwater System",
			"title": "Java Developer",
			"location": "Sophia Antipolis, France",
			"dates": "Feb. 2009 - Dec. 2010",
			"description": "Java GUI and TCP/IP messaging system for submarin's sonars and sensors."
		},
		{
			"employer": "Air France",
			"title": "JavaEE Developer",
			"location": "Sophia Antipolis, France",
			"dates": "Oct. 2007 - Nov. 2008",
			"description": "Tracking systems for luggages."
		},
		{
			"employer": "IS2-ISSOS",
			"title": "JavaEE Developer",
			"location": "Vallauris, France",
			"dates": "Feb. 2007 - Sept. 2007",
			"description": "Application for assisting bank and insurance to sell their products."
		},
		{
			"employer": "ProBTP",
			"title": "JavaEE Developer",
			"location": "Cagnes sur mer, France",
			"dates": "Aug. 2006 - Dec. 2007",
			"description": "Application to manage and monitor batches running on big systems."
		},
		{
			"employer": "Movie Soft",
			"title": "JavaEE Developer",
			"location": "Paris, France",
			"dates": "Feb. 2006 - July. 2007",
			"description": "Desktop application to manage files on folders."
		},
		{
			"employer": "OpenMedia",
			"title": "Developer",
			"location": "Biot, France",
			"dates": "Feb. 2004 - Dec. 2005",
			"description": "Application and web sites for real estate agencies."
		}
	]
 };
 
 var projects = {
	"projects": [
		{
			"title": "Cassandra Manager",
			"dates": "2015",
			"description": "Blablabla Cassandra Manager",
			"images": []
		},
		{
			"title": "Market Lab",
			"dates": "2014",
			"description": "Blablabla Market Lab",
			"images": []
		}
	]
 }
 
 var education = {
	"schools": [
		{
			"name": "Central College",
			"location": "Sydney, Australia",
			"degree": "BA",
			"graduation": 2000,
			"major": ["Information Technology"],
			"url": ""
		},
		{
			"name": "Lycée Blaise Pascal",
			"location": "Nouméa, Nouvelle-Calédonie",
			"degree": "Baccalauréat",
			"graduation": 1997,
			"major": ["Information Technology"],
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": ""
		},
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": ""
		}
	]
 }

 function displayBio() {
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#topContacts").before(HTMLheaderRole.replace("%data%", bio.role));
	$("#topContacts").before(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#topContacts").before(HTMLheaderExperience.replace("%data%", bio.experience));

	/*$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#header").append(HTMLheaderExperience.replace("%data%", bio.experience));*/
	//$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#topContacts").before(HTMLskillsWrap);
	$("#skills-wrap").append(HTMLskillsStart);
	$("#skills").append(HTMLskillsLanguagesStart);
	bio.skills.languages.forEach(function(skill) {
		$("#skills-languages").append(HTMLskills.replace("%data%", skill.name).replace("%level%", skill.level));
	});
	$("#skills").append(HTMLskillsSystemsStart);
	bio.skills.systems.forEach(function(skill) {
		$("#skills-systems").append(HTMLskills.replace("%data%", skill.name).replace("%level%", skill.level));
	});
	$("#skills").append(HTMLskillsFrameworksStart);
	bio.skills.frameworks.forEach(function(skill) {
		$("#skills-frameworks").append(HTMLskills.replace("%data%", skill.name).replace("%level%", skill.level));
	});
	$("#skills").append(HTMLskillsToolsStart);
	bio.skills.tools.forEach(function(skill) {
		$("#skills-tools").append(HTMLskills.replace("%data%", skill.name).replace("%level%", skill.level));
	});

	$("#skills-wrap").append(HTMLspokenLanguagesStart);
	$("#spoken-languages").append(HTMLskillsSpokenLanguagesStart);
	bio.skills.spokenLanguages.forEach(function(language) {
		$("#skills-spoken-languages").append(HTMLskills.replace("%data%", language.name).replace("%level%", language.level));
	});
	/*$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		$("#skills").append(HTMLskills.replace("%data%", skill));
	});*/
 }
 
 function displayWork() {
	 work.jobs.forEach(function(job) {
		 $("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", job.dates)
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description)
		$(".work-entry:last").append(formattedDescription);

	 });
 }

 function displayEducation() {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
		var formattedEducation = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(formattedEducation);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.graduation));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.major));
	});
 }

 displayBio();
 
 displayWork();

 displayEducation();
 
 /*projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
 }*/
 
 $(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
 });
 
 function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
 }
 
 //$("#main").append(internationalizeButton);
 
 
