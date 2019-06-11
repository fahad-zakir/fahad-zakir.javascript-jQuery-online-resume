var bio = {
  name: "Fahad Zakir",
  role: "Web Developer",
  contacts: {
    mobile: "407-446-9070",
    email: "fahadzakir11@gmail.com",
    github: "https://github.com/fahad-zakir",
    twitter: "@FahadZakir7",
    location: "Orlando, FL"
  },
  welcomeMessage:
    "A husband, a father of two, and an amatuer NBA statistician. My family migrated to the United States when I was 9 years old. Since then, I have been committed to making the most of what my parents sacrificed so much for.",
  skills: [
    "images/html.png",
    "images/css.png",
    "images/bootstrap.png",
    "images/js.png",
    "images/jquery.png",
    "images/ps.png"
  ],
  biopic: "images/me4.jpg"
};

bio.display = function() {
    var data = '%data%';
    var formattedName =
        HTMLheaderName.replace(data, bio.name);
    var formattedRole =
        HTMLheaderRole.replace(data, bio.role);
    var formattedMobile =
        HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail =
        HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub =
        HTMLgithub.replace(data, bio.contacts.github);
    var formattedTwitter =
        HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedLocation =
        HTMLlocation.replace(data, bio.contacts.location);
    var formattedWelcomeMessage =
        HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedPicture =
        HTMLbioPic.replace(data, bio.biopic);
    var skillsList = '<ul id="skills" class="flex-box list-inline list-unstyled"></ul>';

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").prepend(formattedGithub);
    $("#topContacts, #footerContacts").prepend(formattedTwitter);
    $("#topContacts, #footerContacts").prepend(formattedLocation);
    $("#header").append(formattedPicture);
    $("#header").append(formattedWelcomeMessage);
    $("#header").append(HTMLskillsStart);
    $("#header").append(skillsList);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills =
            HTMLskills.replace(data, bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
};
bio.display();

var work = {
    "jobs": [{
            "employer": "H&H Capital",
            "url": "http://lightspeedtrading.com",
            "title": "Equity Trader",
            "dates": "June 2001 - September 2016",
            "location": "Orlando, FL",
            "description": "I devised trading strategies to monitor, gather, research and anlayze the market information on a day to day basis.  I managed a $125,000 account for equity buying and selling while investing in different stock sectors in NASDAQ & NYSE.  I created and carried-out different trading strategies to create profit and losses.  I used the pioneer trading software in Lightspeed trading along with the TC2000 charting software."
        },
        {
            "employer": "The Athletes Foot",
            "url": "http://www.theathletesfoot.com/en-us",
            "title": "Salesperson",
            "dates": "August 1998 - May 2001",
            "location": "Orlando, FL",
            "description": "To assist customers in selecting shoes that was right for their needs and comfort"
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        console.log(job);

        $("#workExperience").append(HTMLworkStart);

        var data = '%data%';
        var formattedEmployer =
            HTMLworkEmployer.replace(data, job.employer).replace("%url%", job.url);
        var formattedTitle =
            HTMLworkTitle.replace(data, job.title);
        var formattedDates =
            HTMLworkDates.replace(data, job.dates);
        var formattedLocation =
            HTMLworkLocation.replace(data, job.location);
        var formattedDescription =
            HTMLworkDescription.replace(data, job.description);

        console.log(formattedEmployer);

        console.log(formattedTitle);

        var formattedHeadline = formattedEmployer + formattedTitle;
        console.log(formattedHeadline);

        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);

    });
};
work.display();

var projects = {
    "projects": [{
            "title": "Udacity Online Resume",
            "url": "https://fahad-zakir.github.io/fahad-zakir.github.io-frontend-nanodegree-online-resume/",
            "dates": "December 2016",
            "description": "My online-resume which you are currently viewing using JavaScript & JQuery",
            "images": ["images/resume.png"]
        },
        {
            "title": "Udacity Build a Portfolio",
            "url": "https://fahad-zakir.github.io/fahad-zakir-fahad-zakir.github.io-portfolio-site/",
            "dates": "November 2016",
            "description": "This is the first portfolio that I built which is fully responsive using HTML and CSS.",
            "images": ["images/portfolio.png"]
        },
        {
            "title": "Udacity Animal Card",
            "url": "https://fahad-zakir.github.io/fahad-zakir.github.io-tradingcard/",
            "dates": "October 2016",
            "description": "We made an animal trading card in which we learned how to use CSS with properties such as box-shadow.",
            "images": ["images/cat.png"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var data = '%data%';
        var formattedTitle =
            HTMLprojectTitle.replace(data, project.title).replace("%url%", project.url);
        var formattedDates =
            HTMLprojectDates.replace(data, project.dates);
        var formattedDescription =
            HTMLprojectDescription.replace(data, project.description);
          for (var image = 0; image < project.images.length; image++) {
                    var formattedImage = HTMLprojectImage.replace(data, project.images);
                    $(".project-entry:last").append(formattedImage);
        }
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
    });
};
projects.display();

var education = {
    schools: [{
        "name": "Valencia Community College",
        "url": "http://valenciacollege.edu",
        "degree": "No Diploma",
        "dates": "2012",
        "location": "Orlando, FL",
        "major": ["Computer Science"],
        },

    ],
    onlineCourses: [{
        "title": "Udacity",
        "school": "Front End Web Developer",
        "dates": "2016 - currently enrolled",
        "url": "https://www.udacity.com"
    }]
};

education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var data = '%data%';
        var formattedName =
            HTMLschoolName.replace(data, school.name).replace("%url%", school.url);
        var formattedDegree =
            HTMLschoolDegree.replace(data, school.degree);
        var formattedDates =
            HTMLschoolDates.replace(data, school.dates);
        var formattedLocation =
            HTMLschoolLocation.replace(data, school.location);
        var formattedMajor =
            HTMLschoolMajor.replace(data, school.majors);

        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLschoolStart);

        var data = '%data%';
        var formattedTitle =
            HTMLonlineTitle.replace(data, onlineCourse.title);
        var formattedSchool =
            HTMLonlineSchool.replace(data, onlineCourse.school);
        var formattedDates =
            HTMLonlineDates.replace(data, onlineCourse.dates);
        var formattedUrl =
            HTMLonlineURL.replace(/%data%/g, onlineCourse.url);

        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);
    });

};
education.display();

$("#mapDiv").append(googleMap);
