// =============================
// GET SCREENS
// =============================

const welcomeScreen =
    document.getElementById("welcomeScreen");

const personalScreen =
    document.getElementById("personalScreen");

const summaryScreen =
    document.getElementById("summaryScreen");

const educationScreen =
    document.getElementById("educationScreen");

const skillsScreen =
    document.getElementById("skillsScreen");

const experienceScreen =
    document.getElementById("experienceScreen");
const certificationScreen =
    document.getElementById("certificationScreen");


// =============================
// GET BUTTONS
// =============================

const createResumeButton =
    document.getElementById("createResume");

const backToWelcomeButton =
    document.getElementById("backToWelcome");

const nextToSummaryButton =
    document.getElementById("nextToSummary");

const backToPersonalButton =
    document.getElementById("backToPersonal");

const nextToEducationButton =
    document.getElementById("nextToEducation");

const backToSummaryButton =
    document.getElementById("backToSummary");

const nextToSkillsButton =
    document.getElementById("nextToSkills");

const backToEducationButton =
    document.getElementById("backToEducation");

const nextToProjectsButton =
    document.getElementById("nextToProjects");

const addSkillButton =
    document.getElementById("addSkill");

const backToSkillsButton =
    document.getElementById("backToSkills");

const nextToCertificationsButton =
    document.getElementById("nextToCertifications");
 const backToExperienceButton =
    document.getElementById("backToExperience");

const certificationYesButton =
    document.getElementById("certificationYes");

const certificationNoButton =
    document.getElementById("certificationNo");

const certificationFields =
    document.getElementById("certificationFields");

const noCertificationMessage =
    document.getElementById("noCertificationMessage");
const generateResumeButton =
    document.getElementById("generateResume");
const addCertificationButton =
    document.getElementById("addCertification");
const addQualificationButton =
    document.getElementById("addQualification");

// =============================
// EXPERIENCE ELEMENTS
// =============================

const noExperienceCheckbox =
    document.getElementById("noExperience");

const experienceFields =
    document.getElementById("experienceFields");


// =============================
// RESUME DATA
// =============================

const resumeData = {

    fullName: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",

    summary: "",
    profilePicture: "",

    education: [],

    skills: [],

    experience: {
        hasExperience: true,
        role: "",
        organization: "",
        description: "",
        startYear: "",
        endYear: ""
    },
    certifications: []

};
// =============================
// PROFILE PICTURE
// =============================

const profilePictureInput =
    document.getElementById("profilePicture");


profilePictureInput.onchange = function () {

    const file = profilePictureInput.files[0];

    if (!file) {
        resumeData.profilePicture = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {

        resumeData.profilePicture =
            reader.result;

    };

    reader.readAsDataURL(file);

};


// =============================
// CREATE RESUME
// =============================

createResumeButton.onclick = function () {

    welcomeScreen.style.display = "none";

    personalScreen.style.display = "block";

};


// =============================
// BACK TO WELCOME
// =============================

backToWelcomeButton.onclick = function () {

    personalScreen.style.display = "none";

    welcomeScreen.style.display = "flex";

};


// =============================
// PERSONAL → SUMMARY
// =============================

nextToSummaryButton.onclick = function () {

    resumeData.fullName =
        document.getElementById("fullName").value;

    resumeData.role =
        document.getElementById("role").value;

    resumeData.email =
        document.getElementById("email").value;

    resumeData.phone =
        document.getElementById("phone").value;

    resumeData.location =
        document.getElementById("location").value;

    resumeData.linkedin =
        document.getElementById("linkedin").value;


    personalScreen.style.display = "none";

    summaryScreen.style.display = "block";

};


// =============================
// SUMMARY → BACK
// =============================

backToPersonalButton.onclick = function () {

    summaryScreen.style.display = "none";

    personalScreen.style.display = "block";

};


// =============================
// SUMMARY CHARACTER COUNT
// =============================

const summaryInput =
    document.getElementById("summary");

const summaryCount =
    document.getElementById("summaryCount");


summaryInput.addEventListener("input", function () {

    summaryCount.textContent =
        summaryInput.value.length;

});


// =============================
// SUMMARY → EDUCATION
// =============================

nextToEducationButton.onclick = function () {

    resumeData.summary =
        summaryInput.value;


    summaryScreen.style.display = "none";

    educationScreen.style.display = "block";

};


// =============================
// EDUCATION → BACK
// =============================

backToSummaryButton.onclick = function () {

    educationScreen.style.display = "none";

    summaryScreen.style.display = "block";

};


// =============================
// EDUCATION → SKILLS
// =============================

nextToSkillsButton.onclick = function () {

    const educationEntries =
        document.querySelectorAll(".education-entry");

    resumeData.education = [];

    educationEntries.forEach(function (entry) {

        const educationType =
            entry.querySelector(".education-type").value;

        const otherEducation =
            entry.querySelector(".other-education").value.trim();

        const schoolUniversity =
            entry.querySelector(".school-university").value.trim();

        const percentageGpa =
            entry.querySelector(".percentage-gpa").value.trim();

        const stillStudying =
            entry.querySelector(".still-studying").checked;

        const completionYear =
            entry.querySelector(".completion-year").value.trim();


        if (
            educationType !== "" ||
            otherEducation !== "" ||
            schoolUniversity !== "" ||
            percentageGpa !== "" ||
            completionYear !== ""
        ) {

            resumeData.education.push({

                educationType:
                    educationType,

                otherEducation:
                    otherEducation,

                schoolUniversity:
                    schoolUniversity,

                percentageGpa:
                    percentageGpa,

                stillStudying:
                    stillStudying,

                completionYear:
                    completionYear

            });

        }

    });


    educationScreen.style.display = "none";

    skillsScreen.style.display = "block";

};
// =============================
// ADD ANOTHER EDUCATION
// =============================

addQualificationButton.onclick = function () {

    const educationList =
        document.getElementById("educationList");


    const educationEntry =
        document.createElement("div");


    educationEntry.className =
        "education-entry";


    educationEntry.innerHTML = `

        <div class="form-group">

            <label>
                Education / Qualification
            </label>

            <select class="education-type">

                <option value="">
                    Select qualification
                </option>

                <option value="UG / Bachelor's Degree">
                    UG / Bachelor's Degree
                </option>

                <option value="PG / Master's Degree">
                    PG / Master's Degree
                </option>

                <option value="10th">
                    10th
                </option>

                <option value="12th">
                    12th
                </option>

                <option value="Diploma">
                    Diploma
                </option>

                <option value="Polytechnic">
                    Polytechnic
                </option>

                <option value="Other">
                    Other
                </option>

            </select>

        </div>


        <!-- DEGREE / PROGRAM -->

        <div
            class="form-group degree-group"
            style="display: none;"
        >

            <label>
                Degree / Program
            </label>

            <select class="degree-program">

                <option value="">
                    Select degree / program
                </option>

            </select>

        </div>
        <!-- BRANCH / SPECIALIZATION -->

<div
    class="form-group specialization-group"
    style="display: none;"
>

    <label>
        Branch / Specialization
    </label>

    <input
        type="text"
        class="specialization"
        placeholder="Example: Computer Science & Engineering"
    >

</div>


        <!-- OTHER EDUCATION -->

        <div
            class="form-group other-education-group"
            style="display: none;"
        >

            <label>
                Enter your education
            </label>

            <input
                type="text"
                class="other-education"
                placeholder="Example: BCA / Advanced Diploma"
            >

        </div>


        <div class="form-group education-details">

            <label>
                School / University
            </label>

            <input
                type="text"
                class="school-university"
                placeholder="Enter school or university"
            >

        </div>


        <div class="form-group education-details">

            <label>
                Percentage / GPA
            </label>

            <input
                type="text"
                class="percentage-gpa"
                placeholder="Example: 85% / 8.5 GPA"
            >

        </div>


        <div class="education-option education-details">

            <input
                type="checkbox"
                class="still-studying"
            >

            <label>
                I am still studying
            </label>

        </div>


        <div class="form-group education-details completion-group">

            <label class="completion-label">
                Year of Completion
            </label>

            <input
                type="text"
                class="completion-year"
                placeholder="Example: 2027"
            >

        </div>

    `;


    educationList.appendChild(
        educationEntry
    );

    setupEducationEntry(
        educationEntry
    );

};
// =============================
// EDUCATION FIELD BEHAVIOR
// =============================

function setupEducationEntry(entry) {
    const firstEducationEntry =
    document.querySelector(".education-entry");

setupEducationEntry(
    firstEducationEntry
);

    const educationType =
        entry.querySelector(".education-type");

    const degreeGroup =
        entry.querySelector(".degree-group");

    const degreeProgram =
        entry.querySelector(".degree-program");

    const otherEducationGroup =
        entry.querySelector(".other-education-group");

    const stillStudying =
        entry.querySelector(".still-studying");

    const completionGroup =
        entry.querySelector(".completion-group");

    function updateEducationFields() {

        // =============================
        // DEGREE OPTIONS
        // =============================

        degreeProgram.innerHTML = `
            <option value="">
                Select degree / program
            </option>
        `;


        if (
            educationType.value ===
            "UG / Bachelor's Degree"
        ) {

            degreeGroup.style.display = "block";

            degreeProgram.innerHTML += `

                <option value="B.Tech">
                    B.Tech
                </option>

                <option value="B.E.">
                    B.E.
                </option>

                <option value="BCA">
                    BCA
                </option>

                <option value="B.Sc.">
                    B.Sc.
                </option>

                <option value="BBA">
                    BBA
                </option>

                <option value="BA">
                    BA
                </option>

                <option value="B.Com">
                    B.Com
                </option>

                <option value="Other Bachelor's Degree">
                    Other Bachelor's Degree
                </option>

            `;

        }

        else if (
            educationType.value ===
            "PG / Master's Degree"
        ) {

            degreeGroup.style.display = "block";

            degreeProgram.innerHTML += `

                <option value="M.Tech">
                    M.Tech
                </option>

                <option value="M.E.">
                    M.E.
                </option>

                <option value="MCA">
                    MCA
                </option>

                <option value="M.Sc.">
                    M.Sc.
                </option>

                <option value="MBA">
                    MBA
                </option>

                <option value="MA">
                    MA
                </option>

                <option value="M.Com">
                    M.Com
                </option>

                <option value="Other Master's Degree">
                    Other Master's Degree
                </option>

            `;

        }

        else {

            degreeGroup.style.display = "none";

            degreeProgram.value = "";

        }


        // =============================
        // STILL STUDYING
        // =============================

        if (stillStudying.checked) {

            completionGroup.style.display = "none";

        } else {

            completionGroup.style.display = "block";

        }

    }


    educationType.addEventListener(
        "change",
        updateEducationFields
    );


    stillStudying.addEventListener(
        "change",
        updateEducationFields
    );


    updateEducationFields();

}
// =============================
// SKILLS → EDUCATION
// =============================

backToEducationButton.onclick = function () {

    skillsScreen.style.display = "none";

    educationScreen.style.display = "block";

};


// =============================
// ADD ANOTHER SKILL
// =============================

addSkillButton.onclick = function () {

    const skillsList =
        document.getElementById("skillsList");


    const skillGroup =
        document.createElement("div");


    skillGroup.className =
        "form-group skill-group";


    skillGroup.innerHTML = `

        <label>
            Skill
        </label>

        <input
            type="text"
            class="skill-input"
            placeholder="Example: CSS"
        >

    `;


    skillsList.appendChild(
        skillGroup
    );

};

// =============================
// SKILLS → EXPERIENCE
// =============================

nextToProjectsButton.onclick = function () {

    const skillInputs =
        document.querySelectorAll(".skill-input");


    resumeData.skills = [];


    skillInputs.forEach(function (input) {

        const skill =
            input.value.trim();


        if (skill !== "") {

            resumeData.skills.push(skill);

        }

    });


    skillsScreen.style.display = "none";

    experienceScreen.style.display = "block";

};


// =============================
// EDUCATION → SKILLS
// =============================

nextToSkillsButton.onclick = function () {

    const educationEntries =
        document.querySelectorAll(".education-entry");

    resumeData.education = [];

    educationEntries.forEach(function (entry) {

        const educationType =
            entry.querySelector(".education-type").value;

        const otherEducation =
            entry.querySelector(".other-education").value.trim();

        const degreeProgram =
            entry.querySelector(".degree-program").value.trim();

        const schoolUniversity =
            entry.querySelector(".school-university").value.trim();

        const percentageGpa =
            entry.querySelector(".percentage-gpa").value.trim();

        const stillStudying =
            entry.querySelector(".still-studying").checked;

        const completionYear =
            entry.querySelector(".completion-year").value.trim();


        if (
            educationType !== "" ||
            otherEducation !== "" ||
            degreeProgram !== "" ||
            schoolUniversity !== "" ||
            percentageGpa !== "" ||
            completionYear !== ""
        ) {

            resumeData.education.push({

                educationType:
                    educationType,

                otherEducation:
                    otherEducation,

                degreeProgram:
                    degreeProgram,

                schoolUniversity:
                    schoolUniversity,

                percentageGpa:
                    percentageGpa,

                stillStudying:
                    stillStudying,

                completionYear:
                    completionYear

            });

        }

    });


    educationScreen.style.display = "none";

    skillsScreen.style.display = "block";

};


// =============================
// EDUCATION FIELD BEHAVIOR
// =============================

function setupEducationEntry(entry) {

    const educationType =
        entry.querySelector(".education-type");

    const degreeGroup =
        entry.querySelector(".degree-group");

    const degreeProgram =
        entry.querySelector(".degree-program");

    const stillStudying =
        entry.querySelector(".still-studying");

    const completionGroup =
        entry.querySelector(".completion-group");


    function updateEducationFields() {

        // =============================
        // DEGREE / PROGRAM
        // =============================

        degreeProgram.innerHTML = `
            <option value="">
                Select degree / program
            </option>
        `;


        if (
            educationType.value ===
            "UG / Bachelor's Degree"
        ) {

            degreeGroup.style.display = "block";

            degreeProgram.innerHTML += `

                <option value="B.Tech">
                    B.Tech
                </option>

                <option value="B.E.">
                    B.E.
                </option>

                <option value="BCA">
                    BCA
                </option>

                <option value="B.Sc.">
                    B.Sc.
                </option>

                <option value="BBA">
                    BBA
                </option>

                <option value="BA">
                    BA
                </option>

                <option value="B.Com">
                    B.Com
                </option>

                <option value="Other Bachelor's Degree">
                    Other Bachelor's Degree
                </option>

            `;

        }

        else if (
            educationType.value ===
            "PG / Master's Degree"
        ) {

            degreeGroup.style.display = "block";

            degreeProgram.innerHTML += `

                <option value="M.Tech">
                    M.Tech
                </option>

                <option value="M.E.">
                    M.E.
                </option>

                <option value="MCA">
                    MCA
                </option>

                <option value="M.Sc.">
                    M.Sc.
                </option>

                <option value="MBA">
                    MBA
                </option>

                <option value="MA">
                    MA
                </option>

                <option value="M.Com">
                    M.Com
                </option>

                <option value="Other Master's Degree">
                    Other Master's Degree
                </option>

            `;

        }

        else {

            degreeGroup.style.display = "none";

            degreeProgram.value = "";

        }


        // =============================
        // STILL STUDYING
        // =============================

        if (stillStudying.checked) {

            completionGroup.style.display = "none";

        }

        else {

            completionGroup.style.display = "block";

        }

    }


    educationType.addEventListener(
        "change",
        updateEducationFields
    );


    stillStudying.addEventListener(
        "change",
        updateEducationFields
    );


    updateEducationFields();

}


// =============================
// FIRST EDUCATION ENTRY
// =============================

const firstEducationEntry =
    document.querySelector(".education-entry");

setupEducationEntry(
    firstEducationEntry
);


// =============================
// ADD ANOTHER EDUCATION
// =============================

addQualificationButton.onclick = function () {

    const educationList =
        document.getElementById("educationList");


    const educationEntry =
        document.createElement("div");


    educationEntry.className =
        "education-entry";


    educationEntry.innerHTML = `

        <div class="form-group">

            <label>
                Education / Qualification
            </label>

            <select class="education-type">

                <option value="">
                    Select qualification
                </option>

                <option value="UG / Bachelor's Degree">
                    UG / Bachelor's Degree
                </option>

                <option value="PG / Master's Degree">
                    PG / Master's Degree
                </option>

                <option value="10th">
                    10th
                </option>

                <option value="12th">
                    12th
                </option>

                <option value="Diploma">
                    Diploma
                </option>

                <option value="Polytechnic">
                    Polytechnic
                </option>

                <option value="Other">
                    Other
                </option>

            </select>

        </div>


        <!-- DEGREE / PROGRAM -->

        <div
            class="form-group degree-group"
            style="display: none;"
        >

            <label>
                Degree / Program
            </label>

            <select class="degree-program">

                <option value="">
                    Select degree / program
                </option>

            </select>

        </div>


        <!-- OTHER EDUCATION -->

        <div
            class="form-group other-education-group"
            style="display: none;"
        >

            <label>
                Enter your education
            </label>

            <input
                type="text"
                class="other-education"
                placeholder="Example: BCA / Advanced Diploma"
            >

        </div>


        <div class="form-group education-details">

            <label>
                School / University
            </label>

            <input
                type="text"
                class="school-university"
                placeholder="Enter school or university"
            >

        </div>


        <div class="form-group education-details">

            <label>
                Percentage / GPA
            </label>

            <input
                type="text"
                class="percentage-gpa"
                placeholder="Example: 85% / 8.5 GPA"
            >

        </div>


        <div class="education-option education-details">

            <input
                type="checkbox"
                class="still-studying"
            >

            <label>
                I am still studying
            </label>

        </div>


        <div class="form-group education-details completion-group">

            <label class="completion-label">
                Year of Completion
            </label>

            <input
                type="text"
                class="completion-year"
                placeholder="Example: 2027"
            >

        </div>

    `;


    educationList.appendChild(
        educationEntry
    );


    setupEducationEntry(
        educationEntry
    );

};


// =============================
// NO EXPERIENCE CHECKBOX
// =============================

noExperienceCheckbox.onchange = function () {

    if (noExperienceCheckbox.checked) {

        experienceFields.classList.add("disabled");

    } else {

        experienceFields.classList.remove("disabled");

    }

};


// =============================
// EXPERIENCE → CERTIFICATIONS
// =============================

nextToCertificationsButton.onclick = function () {

    resumeData.experience.hasExperience =
        !noExperienceCheckbox.checked;


    resumeData.experience.role =
        document.getElementById("experienceRole").value;

    resumeData.experience.organization =
        document.getElementById("organization").value;

    resumeData.experience.description =
        document.getElementById("experienceDescription").value;

    resumeData.experience.startYear =
        document.getElementById("startYear").value;

    resumeData.experience.endYear =
        document.getElementById("endYear").value;


    // =============================
    // RESET CERTIFICATION SCREEN
    // =============================

    document.querySelector(".certification-question").style.display = "block";

    certificationFields.style.display = "none";

    noCertificationMessage.style.display = "none";

    generateResumeButton.style.display = "none";


    certificationYesButton.classList.remove("selected");

    certificationNoButton.classList.remove("selected");


    // =============================
    // SHOW CERTIFICATION SCREEN
    // =============================

    experienceScreen.style.display = "none";

    certificationScreen.style.display = "block";

};
// =============================
// CERTIFICATION → YES
// =============================

certificationYesButton.onclick = function () {

    document.querySelector(".certification-question").style.display = "none";

    certificationFields.style.display = "block";

    noCertificationMessage.style.display = "none";


    certificationYesButton.classList.add("selected");

    certificationNoButton.classList.remove("selected");


    // SHOW GENERATE BUTTON

    generateResumeButton.style.display = "block";

};


// =============================
// CERTIFICATION → NO
// =============================

certificationNoButton.onclick = function () {

    certificationFields.style.display = "none";

    noCertificationMessage.style.display = "none";


    certificationYesButton.classList.remove("selected");

    certificationNoButton.classList.add("selected");


    document.querySelector(".certification-question").style.display = "none";


    // CLEAR FIRST CERTIFICATION

    document.getElementById("certificateName").value = "";

    document.getElementById("issuingOrganization").value = "";

    document.getElementById("certificateYear").value = "";


    // CLEAR ADDITIONAL CERTIFICATIONS

    document
        .querySelectorAll(".certification-entry")
        .forEach(function (entry) {

            entry.remove();

        });


    // SHOW GENERATE BUTTON

    generateResumeButton.style.display = "block";

};
// =============================
// ADD ANOTHER CERTIFICATION
// =============================

// =============================
// ADD ANOTHER CERTIFICATION
// =============================

addCertificationButton.onclick = function () {

    const certification = document.createElement("div");

    certification.className = "certification-entry";


    certification.innerHTML = `

        <div class="certification-entry-header">

            <span>Certification</span>

            <button
                type="button"
                class="remove-certification">

                ×

            </button>

        </div>


        <div class="form-group">

            <label>
                Certificate Name
            </label>

            <input
                type="text"
                class="certificate-name"
                placeholder="Example: Responsive Web Design"
            >

        </div>


        <div class="form-group">

            <label>
                Issuing Organization
            </label>

            <input
                type="text"
                class="issuing-organization"
                placeholder="Example: freeCodeCamp"
            >

        </div>


        <div class="form-group">

            <label>
                Year
            </label>

            <input
                type="text"
                class="certificate-year"
                placeholder="2026"
            >

        </div>

    `;


    certificationFields.insertBefore(
        certification,
        addCertificationButton
    );


    // Remove this certification
    const removeButton =
        certification.querySelector(".remove-certification");


    removeButton.onclick = function () {

        certification.remove();

    };

};

// =============================
// CERTIFICATIONS → EXPERIENCE
// =============================

backToExperienceButton.onclick = function () {

    certificationScreen.style.display = "none";

    experienceScreen.style.display = "block";

};
generateResumeButton.onclick = function () {

    certificationScreen.style.display = "none";
    // =============================
// SAVE CERTIFICATIONS
// =============================

resumeData.certifications = [];


// FIRST CERTIFICATION

const firstCertificateName =
    document.getElementById("certificateName").value.trim();

const firstIssuingOrganization =
    document.getElementById("issuingOrganization").value.trim();

const firstCertificateYear =
    document.getElementById("certificateYear").value.trim();


if (
    firstCertificateName !== "" ||
    firstIssuingOrganization !== "" ||
    firstCertificateYear !== ""
) {

    resumeData.certifications.push({

        name: firstCertificateName,

        organization: firstIssuingOrganization,

        year: firstCertificateYear

    });

}


// ADDITIONAL CERTIFICATIONS

document
    .querySelectorAll(".certification-entry")
    .forEach(function (entry) {

        const name =
            entry
                .querySelector(".certificate-name")
                .value
                .trim();

        const organization =
            entry
                .querySelector(".issuing-organization")
                .value
                .trim();

        const year =
            entry
                .querySelector(".certificate-year")
                .value
                .trim();


        if (
            name !== "" ||
            organization !== "" ||
            year !== ""
        ) {

            resumeData.certifications.push({

                name: name,

                organization: organization,

                year: year

            });

        }

    });

    document.getElementById("resumeReadyScreen").style.display = "block";

};
document.getElementById("backToCertification").onclick = function () {

    document.getElementById("resumeReadyScreen").style.display = "none";

    certificationScreen.style.display = "block";

};
document.getElementById("openResume").onclick = function () {

    // =============================
    // PROFILE
    // =============================

    document.getElementById("previewName").textContent =
        resumeData.fullName || "YOUR NAME";

    document.getElementById("previewRole").textContent =
        resumeData.role || "Your Role";

        // =============================
// PROFILE PICTURE PREVIEW
// =============================

const previewPictureBox =
    document.getElementById("previewPictureBox");

const previewPicture =
    document.getElementById("previewPicture");


if (resumeData.profilePicture !== "") {

    previewPicture.src =
        resumeData.profilePicture;

    previewPictureBox.style.display =
        "block";

} else {

    previewPicture.src = "";

    previewPictureBox.style.display =
        "none";

}


    // =============================
    // CONTACT INFORMATION
    // =============================

    const contactInformation = [];

    if (resumeData.email.trim() !== "") {
        contactInformation.push(
            "Email: " + resumeData.email
        );
    }

    if (resumeData.phone.trim() !== "") {
        contactInformation.push(
            "Phone: " + resumeData.phone
        );
    }

    if (resumeData.location.trim() !== "") {
        contactInformation.push(
            "Location: " + resumeData.location
        );
    }

    if (resumeData.linkedin.trim() !== "") {
        contactInformation.push(
            "LinkedIn: " + resumeData.linkedin
        );
    }

    document.getElementById("previewContact").innerHTML =
        contactInformation.join("<br>");


    // =============================
    // SUMMARY
    // =============================

    if (resumeData.summary.trim() !== "") {

        document.getElementById("previewSummary").textContent =
            resumeData.summary;

    } else {

        document.getElementById("previewSummary").textContent =
            "No summary added.";

    }


    // =============================
    // EDUCATION
    // =============================

    if (resumeData.education.length > 0) {

        document.getElementById("previewEducation").innerHTML =

            resumeData.education
                .map(function (education) {

                    let educationText = "";

                    if (education.educationType !== "") {

    educationText +=
        "<strong>" +
        education.educationType +
        "</strong>";

}

if (education.degreeProgram !== "") {

    educationText +=
        "<br>" +
        education.degreeProgram;

}

if (education.otherEducation !== "") {

    educationText +=
        "<br>" +
        education.otherEducation;

}

if (education.otherEducation !== "") {

    educationText +=
        "<br>" +
        education.otherEducation;

}

                    return educationText;

                })
                .join("<br><br>");

    } else {

        document.getElementById("previewEducation").textContent =
            "No education added.";

    }


    // =============================
    // SKILLS
    // =============================

    if (resumeData.skills.length > 0) {

        document.getElementById("previewSkills").innerHTML =

            resumeData.skills
                .map(function (skill) {

                    return "• " + skill;

                })
                .join("<br>");

    } else {

        document.getElementById("previewSkills").textContent =
            "No skills added.";

    }
    // =============================
// EXPERIENCE
// =============================

if (resumeData.experience.hasExperience) {

    let experienceText = "";

    if (resumeData.experience.role !== "") {

        experienceText +=
            "<strong>" +
            resumeData.experience.role +
            "</strong>";

    }

    if (resumeData.experience.organization !== "") {

        experienceText +=
            "<br>" +
            resumeData.experience.organization;

    }

    if (
        resumeData.experience.startYear !== "" ||
        resumeData.experience.endYear !== ""
    ) {

        experienceText +=
            "<br>" +
            resumeData.experience.startYear +
            " – " +
            resumeData.experience.endYear;

    }

    if (resumeData.experience.description !== "") {

        experienceText +=
            "<br><br>" +
            resumeData.experience.description;

    }

    if (experienceText !== "") {

        document.getElementById("previewExperience").innerHTML =
            experienceText;

    } else {

        document.getElementById("previewExperience").textContent =
            "No experience details added.";

    }

} else {

    document.getElementById("previewExperience").textContent =
        "No professional experience yet.";

}

// =============================
// CERTIFICATIONS
// =============================

if (resumeData.certifications.length > 0) {

    document.getElementById("previewCertifications").innerHTML =

        resumeData.certifications
            .map(function (certification) {

                let certificationText = "";


                if (certification.name !== "") {

                    certificationText +=
                        "<strong>" +
                        certification.name +
                        "</strong>";

                }


                if (certification.organization !== "") {

                    certificationText +=
                        "<br>" +
                        certification.organization;

                }


                if (certification.year !== "") {

                    certificationText +=
                        "<br>" +
                        certification.year;

                }


                return certificationText;

            })
            .join("<br><br>");

} else {

    document.getElementById("previewCertifications").textContent =
        "No certifications added.";

}

    // =============================
    // OPEN RESUME PREVIEW
    // =============================

    document.getElementById("resumeReadyScreen").style.display =
        "none";

    document.getElementById("resumePreviewScreen").style.display =
        "block";

};
document.getElementById("backToGenerated").onclick = function () {

    document.getElementById("resumePreviewScreen").style.display = "none";

    document.getElementById("resumeReadyScreen").style.display = "block";

};
// =============================
// DOWNLOAD RESUME AS PNG
// =============================

document.getElementById("downloadResumePNG").onclick = function () {

    const resume = document.querySelector(
        "#resumePreviewScreen .resume-preview"
    );

    html2canvas(resume, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false
    }).then(function (canvas) {

        const link = document.createElement("a");

        link.download =
            (resumeData.fullName || "Resume") + ".png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

};