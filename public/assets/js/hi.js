// Regex for validation
const strRegex = /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const digitRegex = /^\d+$/;

const mainForm = document.getElementById('cv-form');
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
}

// User inputs elements
let firstnameElem = mainForm.firstname,
    middlenameElem = mainForm.middlename,
    lastnameElem = mainForm.lastname,
    imageElem = mainForm.image,
    designationElem = mainForm.designation,
    addressElem = mainForm.address,
    emailElem = mainForm.email,
    phonenoElem = mainForm.phoneno,
    summaryElem = mainForm.summary;

// Display elements for the first template
let nameDsp1 = document.getElementById('fullname_dsp'),
    imageDsp1 = document.getElementById('image_dsp'),
    phonenoDsp1 = document.getElementById('phoneno_dsp'),
    emailDsp1 = document.getElementById('email_dsp'),
    addressDsp1 = document.getElementById('address_dsp'),
    designationDsp1 = document.getElementById('designation_dsp'),
    summaryDsp1 = document.getElementById('summary_dsp'),
    projectsDsp1 = document.getElementById('projects_dsp'),
    achievementsDsp1 = document.getElementById('achievements_dsp'),
    skillsDsp1 = document.getElementById('skills_dsp'),
    educationsDsp1 = document.getElementById('educations_dsp'),
    experiencesDsp1 = document.getElementById('experiences_dsp');

// Display elements for the second template
let nameDsp2 = document.getElementById('fullname_dsp_2'),
    imageDsp2 = document.getElementById('image_dsp_2'),
    phonenoDsp2 = document.getElementById('phoneno_dsp_2'),
    emailDsp2 = document.getElementById('email_dsp_2'),
    addressDsp2 = document.getElementById('address_dsp_2'),
    designationDsp2 = document.getElementById('designation_dsp_2'),
    summaryDsp2 = document.getElementById('summary_dsp_2'),
    projectsDsp2 = document.getElementById('projects_dsp_2'),
    achievementsDsp2 = document.getElementById('achievements_dsp_2'),
    skillsDsp2 = document.getElementById('skills_dsp_2'),
    educationsDsp2 = document.getElementById('educations_dsp_2'),
    experiencesDsp2 = document.getElementById('experiences_dsp_2');

// Display elements for the third template
let nameDsp3 = document.getElementById('fullname_dsp_3'),
    imageDsp3 = document.getElementById('image_dsp_3'),
    phonenoDsp3 = document.getElementById('phoneno_dsp_3'),
    emailDsp3 = document.getElementById('email_dsp_3'),
    addressDsp3 = document.getElementById('address_dsp_3'),
    designationDsp3 = document.getElementById('designation_dsp_3'),
    summaryDsp3 = document.getElementById('summary_dsp_3'),
    projectsDsp3 = document.getElementById('projects_dsp_3'),
    achievementsDsp3 = document.getElementById('achievements_dsp_3'),
    skillsDsp3 = document.getElementById('skills_dsp_3'),
    educationsDsp3 = document.getElementById('educations_dsp_3'),
    experiencesDsp3 = document.getElementById('experiences_dsp_3');


    let nameDsp4 = document.getElementById('fullname_dsp_4'),
    imageDsp4 = document.getElementById('image_dsp_4'),
    phonenoDsp4 = document.getElementById('phoneno_dsp_4'),
    emailDsp4 = document.getElementById('email_dsp_4'),
    addressDsp4 = document.getElementById('address_dsp_4'),
    designationDsp4 = document.getElementById('designation_dsp_4'),
    summaryDsp4 = document.getElementById('summary_dsp_4'),
    projectsDsp4 = document.getElementById('projects_dsp_4'),
    achievementsDsp4 = document.getElementById('achievements_dsp_4'),
    skillsDsp4 = document.getElementById('skills_dsp_4'),
    educationsDsp4 = document.getElementById('educations_dsp_4'),
    experiencesDsp4 = document.getElementById('experiences_dsp_4');

    let nameDsp5 = document.getElementById('fullname_dsp_5'),
    imageDsp5 = document.getElementById('image_dsp_5'),
    phonenoDsp5 = document.getElementById('phoneno_dsp_5'),
    emailDsp5 = document.getElementById('email_dsp_5'),
    addressDsp5 = document.getElementById('address_dsp_5'),
    designationDsp5 = document.getElementById('designation_dsp_5'),
    summaryDsp5 = document.getElementById('summary_dsp_5'),
    projectsDsp5 = document.getElementById('projects_dsp_5'),
    achievementsDsp5 = document.getElementById('achievements_dsp_5'),
    skillsDsp5 = document.getElementById('skills_dsp_5'),
    educationsDsp5 = document.getElementById('educations_dsp_5'),
    experiencesDsp5 = document.getElementById('experiences_dsp_5');


    

    let nameDsp7 = document.getElementById('fullname_dsp_7'),
    imageDsp7 = document.getElementById('image_dsp_7'),
    phonenoDsp7 = document.getElementById('phoneno_dsp_7'),
    emailDsp7 = document.getElementById('email_dsp_7'),
    addressDsp7 = document.getElementById('address_dsp_7'),
    designationDsp7 = document.getElementById('designation_dsp_7'),
    summaryDsp7 = document.getElementById('summary_dsp_7'),
    projectsDsp7 = document.getElementById('projects_dsp_7'),
    achievementsDsp7 = document.getElementById('achievements_dsp_7'),
    skillsDsp7 = document.getElementById('skills_dsp_7'),
    educationsDsp7 = document.getElementById('educations_dsp_7'),
    experiencesDsp7 = document.getElementById('experiences_dsp_7');



    
    
// Fetch values from node lists
const fetchValues = (attrs, ...nodeLists) => {
    let elemsDataCount = nodeLists[0].length;
    let tempDataArr = [];

    for (let i = 0; i < elemsDataCount; i++) {
        let dataObj = {};
        for (let j = 0; j < attrs.length; j++) {
            dataObj[attrs[j]] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }

    return tempDataArr;
}

const getUserInputs = () => {
    let achievementsTitleElem = document.querySelectorAll('.achieve_title'),
        achievementsDescriptionElem = document.querySelectorAll('.achieve_description');

    let expTitleElem = document.querySelectorAll('.exp_title'),
        expOrganizationElem = document.querySelectorAll('.exp_organization'),
        expLocationElem = document.querySelectorAll('.exp_location'),
        expStartDateElem = document.querySelectorAll('.exp_start_date'),
        expEndDateElem = document.querySelectorAll('.exp_end_date'),
        expDescriptionElem = document.querySelectorAll('.exp_description');

    let eduSchoolElem = document.querySelectorAll('.edu_school'),
        eduDegreeElem = document.querySelectorAll('.edu_degree'),
        eduCityElem = document.querySelectorAll('.edu_city'),
        eduStartDateElem = document.querySelectorAll('.edu_start_date'),
        eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date'),
        eduDescriptionElem = document.querySelectorAll('.edu_description');

    let projTitleElem = document.querySelectorAll('.proj_title'),
        projLinkElem = document.querySelectorAll('.proj_link'),
        projDescriptionElem = document.querySelectorAll('.proj_description');

    let skillElem = document.querySelectorAll('.skill');

    // Event listeners for form validation
    firstnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'First Name'));
    middlenameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT_EMP, 'Middle Name'));
    lastnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Last Name'));
    phonenoElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.PHONENO, 'Phone Number'));
    emailElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.EMAIL, 'Email'));
    addressElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Address'));
    designationElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Designation'));

    achievementsTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    achievementsDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    expTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    expOrganizationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Organization')));
    expLocationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, "Location")));
    expStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
    expEndDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
    expDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    eduSchoolElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'School')));
    eduDegreeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Degree')));
    eduCityElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'City')));
    eduStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
    eduGraduationDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Graduation Date')));
    eduDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    projTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    projLinkElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Link')));
    projDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    skillElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Skill')));

    const achievementsData = fetchValues(['title', 'description'], achievementsTitleElem, achievementsDescriptionElem);
    const experiencesData = fetchValues(['title', 'organization', 'location', 'start_date', 'end_date', 'description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem);
    const educationsData = fetchValues(['school', 'degree', 'city', 'start_date', 'graduation_date', 'description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem);
    const projectsData = fetchValues(['title', 'link', 'description'], projTitleElem, projLinkElem, projDescriptionElem);
    const skillsData = fetchValues(['skill'], skillElem);

    return {
        fullname: `${firstnameElem.value.trim()} ${middlenameElem.value.trim()} ${lastnameElem.value.trim()}`,
        designation: designationElem.value.trim(),
        image: imageElem.files[0] ? URL.createObjectURL(imageElem.files[0]) : "",
        phoneno: phonenoElem.value.trim(),
        email: emailElem.value.trim(),
        address: addressElem.value.trim(),
        summary: summaryElem.value.trim(),
        achievements: achievementsData,
        educations: educationsData,
        experiences: experiencesData,
        projects: projectsData,
        skills: skillsData
    }
}
function validateFormData(elem, elemType, elemName) {
    if (elemType == validType.TEXT) {
        if (!strRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
    if (elemType == validType.TEXT_EMP) {
        if (!strRegex.test(elem.value)) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
    if (elemType == validType.EMAIL) {
        if (!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
    if (elemType == validType.PHONENO) {
        if (!phoneRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
    if (elemType == validType.ANY) {
        if (elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
}

// Add invalid text
function addErrMsg(formElem, formElemName) {
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}

// Remove invalid text
function removeErrMsg(formElem) {
    formElem.nextElementSibling.innerHTML = "";
}

// Show the list data
const showListData = (listData, listContainer) => {
    listContainer.innerHTML = "";
    listData.forEach(listItem => {
        let itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        
        for (const key in listItem) {
            let subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = `${listItem[key]}`;
            itemElem.appendChild(subItemElem);
        }

        listContainer.appendChild(itemElem);
    });
}
// Display CV data in the respective templates
const displayCV = () => {
    let userInputs = getUserInputs();

    const displayData = (templateElements) => {
        const { name, image, phoneno, email, address, designation, summary, projects, achievements, skills, educations, experiences } = templateElements;

        name.innerText = userInputs.fullname;
        phoneno.innerText = userInputs.phoneno;
        email.innerText = userInputs.email;
        address.innerText = userInputs.address;
        designation.innerText = userInputs.designation;
        summary.innerText = userInputs.summary;

        if (userInputs.image) {
            image.src = userInputs.image;
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }

        const populateList = (element, data, formatter) => {
            element.innerHTML = '';
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = formatter(item);
                element.appendChild(listItem);
            });
        }

        populateList(projects, userInputs.projects, (project) => `<div><a href="${project.link}" target="_blank">${project.title}</a>: ${project.description}</div>`);
        populateList(achievements, userInputs.achievements, (achievement) => `<div><strong>${achievement.title}</strong>: ${achievement.description}</div>`);
        populateList(skills, userInputs.skills, (skill) => skill.skill);
        populateList(educations, userInputs.educations, (education) => `<div><strong>${education.school}</strong>, ${education.degree} (${education.start_date} - ${education.graduation_date}): ${education.city}<br>${education.description}</div>`);
        populateList(experiences, userInputs.experiences, (experience) => `<div><strong>${experience.title}</strong> at ${experience.organization} (${experience.start_date} - ${experience.end_date}): ${experience.location}<br>${experience.description}</div>`);
    }

    const templates = [
        {
            name: nameDsp1,
            image: imageDsp1,
            phoneno: phonenoDsp1,
            email: emailDsp1,
            address: addressDsp1,
            designation: designationDsp1,
            summary: summaryDsp1,
            projects: projectsDsp1,
            achievements: achievementsDsp1,
            skills: skillsDsp1,
            educations: educationsDsp1,
            experiences: experiencesDsp1,
        },
        {
            name: nameDsp2,
            image: imageDsp2,
            phoneno: phonenoDsp2,
            email: emailDsp2,
            address: addressDsp2,
            designation: designationDsp2,
            summary: summaryDsp2,
            projects: projectsDsp2,
            achievements: achievementsDsp2,
            skills: skillsDsp2,
            educations: educationsDsp2,
            experiences: experiencesDsp2,
        },
        {
            name: nameDsp3,
            image: imageDsp3,
            phoneno: phonenoDsp3,
            email: emailDsp3,
            address: addressDsp3,
            designation: designationDsp3,
            summary: summaryDsp3,
            projects: projectsDsp3,
            achievements: achievementsDsp3,
            skills: skillsDsp3,
            educations: educationsDsp3,
            experiences: experiencesDsp3,
        },
        {
            name: nameDsp4,
            image: imageDsp4,
            phoneno: phonenoDsp4,
            email: emailDsp4,
            address: addressDsp4,
            designation: designationDsp4,
            summary: summaryDsp4,
            projects: projectsDsp4,
            achievements: achievementsDsp4,
            skills: skillsDsp4,
            educations: educationsDsp4,
            experiences: experiencesDsp4,
        },
        {
            name: nameDsp5,
            image: imageDsp5,
            phoneno: phonenoDsp5,
            email: emailDsp5,
            address: addressDsp5,
            designation: designationDsp5,
            summary: summaryDsp5,
            projects: projectsDsp5,
            achievements: achievementsDsp5,
            skills: skillsDsp5,
            educations: educationsDsp5,
            experiences: experiencesDsp5,
        },

        
    {
        name: nameDsp7,
        image: imageDsp7,
        phoneno: phonenoDsp7,
        email: emailDsp7,
        address: addressDsp7,
        designation: designationDsp7,
        summary: summaryDsp7,
        projects: projectsDsp7,
        achievements: achievementsDsp7,
        skills: skillsDsp7,
        educations: educationsDsp7,
        experiences: experiencesDsp7,
    }
    ];

    templates.forEach(displayData);
}


// Generate CV
const generateCV = () => {
    let userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
}

// Preview image
function previewImage() {
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function(ofEvent) {
        imageDsp.src = ofEvent.target.result;
    }
}

// Print CV
function printCV() {
    window.print();
}
