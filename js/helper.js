/*
These are HTML strings. Use JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1><hr>';/* Done */
var HTMLheaderRole = '<span class="role">%data%</span>';/* Done */
var HTMLheaderExperience = '<span class="experience">%data%</span><br/>';/* Done */

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';/* Done */
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';/* Done */
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';/* Done */

var HTMLbioPic = '<img src="%data%" class="biopic">';/* Done */
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span><br/>';/* Done */

/*var HTMLskillsStart = '<h3 class="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';/* Done */
var HTMLskillsWrap = '<div id="skills-wrap"></div>'
var HTMLskillsStart = '<div id="skills"></div><!--<ul id="skills" class="flex-column"></ul>;-->'/* Done */
var HTMLskillsSystemsStart = '<div class="skills-box"><div class="skills-h3">DEVOPS</div><ul id="skills-systems" class="flex-column"></ul></div>'
var HTMLskillsFrameworksStart = '<div class="skills-box"><div class="skills-h3">FRAMEWORKS</div><ul id="skills-frameworks" class="flex-column"></ul></div>'
var HTMLskillsLanguagesStart = '<div class="skills-box"><div class="skills-h3">LANGUAGES</div><ul id="skills-languages" class="flex-column"></ul></div>'
var HTMLskillsToolsStart = '<div class="skills-box"><div class="skills-h3">TOOLS</div><ul id="skills-tools" class="flex-column"></ul></div>'


var HTMLspokenLanguagesStart = '<div id="spoken-languages"></div>'
var HTMLskillsSpokenLanguagesStart = '<div class="skills-h3">SPOKEN LANGUAGES</div><ul id="skills-spoken-languages" class="flex-column"></ul>'

/*var HTMLskillsSystemsStart = '<div class="skills-box"><ul class="skills-h3" id="skills-systems" class="flex-column">DEVOPS////////////////</ul></div>'
var HTMLskillsFrameworksStart = '<div class="skills-box"><ul class="skills-h3" id="skills-frameworks" class="flex-column">FRAMEWORKS////////////////</ul></div>'
var HTMLskillsLanguagesStart = '<div class="skills-box"><ul class="skills-h3" id="skills-languages" class="flex-column">LANGUAGES////////////////</ul></div>'
var HTMLskillsToolsStart = '<div class="skills-box"><ul class="skills-h3" id="skills-tools" class="flex-column">TOOLS////////////////</ul></div>'*/
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span><span class="chart">%level%</span></li>';/* Done */

var HTMLworkStart = '<div class="work-entry"></div>';/* Done */
var HTMLworkEmployer = '<a href="#">%data%';/* Done */
var HTMLworkTitle = ' - %data%</a>';/* Done */
var HTMLworkDates = '<div class="date-text">%data%</div>';/* Done */
var HTMLworkLocation = '<div class="location-text">%data%</div>';/* Done */
var HTMLworkDescription = '<p><br>%data%</p>';/* Done */

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';