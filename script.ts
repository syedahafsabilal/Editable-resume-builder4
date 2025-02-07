
export const resumeform = document.getElementById("resume-form") as HTMLFormElement  | null ;
const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;

if (resumeform) {
resumeform.addEventListener('submit',(event:Event)=>{
    event.preventDefault();});} else{ console.error('Form element not found');}

const Name = (document.getElementById("Name") as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById("phone") as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
const experience = (document.getElementById("experience") as HTMLInputElement).value
const skills = (document.getElementById("skills") as HTMLInputElement).value

const resumeHTML =`
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${Name}</span></p>
<p><b>email:</b><span contenteditable="true">${email}</span></p>
<p><b>phone:</b><span contenteditable="true">${phone}</span></p>

<h3>Education</h3>
<p></b><span contenteditable="true">${education}</p>

<h3>Experience</h3>
<p></b><span contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p></b><span contenteditable="true">${skills}</p>`;


  
if (resumeDisplayElement){
resumeDisplayElement.innerHTML = resumeHTML;
}else{console.error('The resume display element is missing.');}

; 