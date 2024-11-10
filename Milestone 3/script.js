var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById("name");
    var phoneNumberElement = document.getElementById("phoneNumber");
    var emailElement = document.getElementById("email");
    var educationElement = document.getElementById("education");
    var skillElement = document.getElementById("skill");
    var experienceElement = document.getElementById("experience");
    if (nameElement && phoneNumberElement && emailElement && educationElement && skillElement && experienceElement) {
        var name_1 = nameElement.value;
        var phoneNumber = phoneNumberElement.value;
        var email = emailElement.value;
        var education = educationElement.value;
        var skill = skillElement.value;
        var experience = experienceElement.value;
        // Creating the resume output
        var resumeOutput = "\n          <h2>Resume</h2>\n          <h3>Personal Information</h3>\n          <p><strong>Name:</strong> ".concat(name_1, "</p>\n          <p><strong>Phone Number:</strong> ").concat(phoneNumber, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <h3>Education</h3>\n          <p>").concat(education, "</p>\n          <h4>Skill</h4>\n          <p>").concat(skill, "</p>\n          <h3>Experience</h3>\n          <p>").concat(experience, "</p>");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The Resume Output element is missing");
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
/*document.getElementById("resumeForm")?.addEventListener("submit",function(event){
    event.preventDefault();
//type assertion
    const nameElement=document.getElementById("name") as HTMLInputElement;
    const phoneNumberElement=document.getElementById("phoneNumber") as HTMLInputElement;
    const emailElement=document.getElementById("email") as HTMLInputElement;
    const educationElement=document.getElementById("education") as HTMLInputElement;
    const skillElement=document.getElementById("skill") as HTMLInputElement;
    const experienceElement=document.getElementById("experience") as HTMLInputElement;

    if(nameElement && phoneNumberElement && emailElement && educationElement && skillElement && experienceElement){
        const name=nameElement.value;
        const phoneNumber=phoneNumberElement.value;
        const email=emailElement.value;
        const education=educationElement.value;
        const skill=skillElement.value;
        const experience=experienceElement.value;


        const resumeOutput=`
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Phone Number:</strong>${phoneNumber}</p>
        <p><strong>Email:</strong>${email}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h4>Skill</h4>
        <p>${skill}</p>
        <h3>Experience</h3>
        <p>${experience}</p>`;
        const resumeOutputElement = document.getElementById("resumeOutput")
        if (resumeOutputElement){
             resumeOutputElement.innerHTML = resumeOutput
        }else{
            console.error("The Resume Output Elements are missing")
        }
}else{
    console.error("one or more Output are missing.")
}
})
*/
