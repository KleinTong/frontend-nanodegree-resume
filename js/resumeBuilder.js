/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append("kleintong");

var work = {
	'jobs':[
	{
		'employer':'Doodle',
		'title':'funny maker',
		'location':'beijing',
		'dates':'2020',
		'description':'just imagination'
	},
	{
		'employer':'Hertube',
		'title':'film director',
		'location':'new york',
		'dates':'2021',
		'description':'only illegal copy'	
	}
	]
	};

work.display = function(){
	var chi;
	$('#workExperience').append("<div id=\"work-foldable-content\">");
	for(var i = 0; i < work.jobs.length; i++){
		$('#work-foldable-content').append(HTMLworkStart);
		chi = HTMLworkEmployer.replace('%data%',work.jobs[i].employer);
		$('.work-entry:last').append(chi);
		chi = HTMLworkTitle.replace('%data%',work.jobs[i].title);
		$('.work-entry:last').append(chi);
		chi = HTMLworkLocation.replace('%data%',work.jobs[i].location);
		$('.work-entry:last').append(chi);
		chi = HTMLworkDates.replace('%data%',work.jobs[i].dates);
		$('.work-entry:last').append(chi);
		chi = HTMLworkDescription.replace('%data%',work.jobs[i].description);
		$('.work-entry:last').append(chi);
	}
}

var projects = {
	'projects':[
		{
			'title':'NoFight Club',
			'dates':'1999',
			'description':"two men don't believe capitalism",
			'images':['images/nofight-club.png']	
		}
	]
};

projects.display = function(){
	if(projects.projects.length > 0){
		var proj;
		$("#projects").append("<div id = \"projects-folable-content\"></div>");
		for(var i = 0; i < projects.projects.length; i++){
			$('#projects-folable-content').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace('%data%',projects.projects[i].title));
			$('.project-entry:last').append(HTMLprojectDates.replace('%data%',projects.projects[i].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace('%data%',projects.projects[i].description));
			$('.project-entry:last').append(HTMLprojectImage.replace('%data%',projects.projects[i].images[0]));
		}
	}
}

var bio = {
	'name':'kleintong',
	'role':'student',
	'welcomeMessage':'coding is so funny',
	'biopic':'images/personpic.gif',
	'contacts':{
		'mobile':'',
		'email':'kleintong1992@gmail.com',
		'github':'https://github.com/KleinTong',
		'twitter':'@kleintong',
		'location':'Taiwan'
	},
	'skills':['math','computer science','basketball']
};

bio.display = function(){
	HTMLheaderName = HTMLheaderName.replace("%data%",bio.name);
	HTMLheaderRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").append(HTMLheaderName);
	$("#header").append(HTMLheaderRole);
	var f_photo = HTMLbioPic.replace('%data%', bio.biopic);
	$("#header").append(f_photo);
	HTMLContacts = '<dl id="topContacts"></dl>';
    $("#header").append(HTMLContacts);
	var github = HTMLgithub.replace('%data%',bio.contacts.github);
	$("dl#topContacts").append(github);
	var f_email = HTMLemail.replace('%data%',bio.contacts.email);
	$("dl#topContacts").append(f_email);
	var f_location = HTMLlocation.replace('%data%',bio.contacts.location);
	$("dl#topContacts").append(f_location);
	var f_twitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
	$("dl#topContacts").append(f_twitter);

	if(bio.skills.length > 0){
	$("dl#topContacts").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++){
		formattedSkill = HTMLskills.replace("%data%",bio.skills[i]+'/');
		$("#skills").append(formattedSkill);
	}
}
}

var education = {
	'schools':[
	{
		'name':'XiaMen University',
		'location':'XiaMen',
		'dates':'2014',
		'url':'',
		'degree':'undergraduate',
		'majors':['electricity engeering']
	},
	{
		'name':'National Yunlin University of Science and Technology',
		'location':'Yunlin',
		'dates':'2017',
		'url':'',
		'degree':'graduate',
		'majors':['master of design']
	}],
	'onlineCourses':[
	{
		'title':'Front-End Web Developer Nanodegree',
		'school':'Udacity',
		'dates':'2016',
		'url':''
	}]
}

education.display = function(){
	if(education.schools.length > 0 || education.onlineCourses.length > 0){
		$("#education").append("<div id=\"education-foldable-content\"></div>");
		$("#education-foldable-content").append(HTMLschoolStart);
		for(var i = 0; i < education.schools.length; i++){
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]));
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for(i = 0; i < education.onlineCourses.length; i++){
			$(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[i].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school));
			$(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[i].dates));
		}
	}
}

// menu.display();
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);







