document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const phoneNumberElement = document.getElementById("phoneNumber") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const skillElement = document.getElementById("skill") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
  
    if (nameElement && phoneNumberElement && emailElement && educationElement && skillElement && experienceElement) {
        const name = nameElement.value;
        const phoneNumber = phoneNumberElement.value;
        const email = emailElement.value;
        const education = educationElement.value;
        const skill = skillElement.value;
        const experience = experienceElement.value;
  
        // Creating the resume output
        const resumeOutput = `
          <h2>Resume</h2>
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Education</h3>
          <p>${education}</p>
          <h4>Skill</h4>
          <p>${skill}</p>
          <h3>Experience</h3>
          <p>${experience}</p>`;
        
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("The Resume Output element is missing");
        }
    } else {
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
 
 