"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeform = void 0;
exports.resumeform = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById('resume-display');
if (exports.resumeform) {
    exports.resumeform.addEventListener('submit', function (event) {
        event.preventDefault();
    });
}
else {
    console.error('Form element not found');
}
var Name = document.getElementById("Name").value;
var email = document.getElementById('email').value;
var phone = document.getElementById("phone").value;
var education = document.getElementById('education').value;
var experience = document.getElementById("experience").value;
var skills = document.getElementById("skills").value;
var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n<p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p></b><span contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p></b><span contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p></b><span contenteditable=\"true\">").concat(skills, "</p>");
if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
}
else {
    console.error('The resume display element is missing.');
}
;
