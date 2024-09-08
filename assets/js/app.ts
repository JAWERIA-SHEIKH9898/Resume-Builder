
// const strRegex: RegExp = /^[a-zA-Z\s]*$/; // containing only letters
// const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneRegex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
// /* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
// const digitRegex: RegExp = /^\d+$/;

// const mainForm = document.getElementById('cv-form') as HTMLFormElement;

// // Define the types for user inputs
// interface UserInputs {
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   designation: string;
//   address: string;
//   email: string;
//   phoneno: string;
//   summary: string;
//   achievements: { achieve_title: string; achieve_description: string }[];
//   experiences: {
//     exp_title: string;
//     exp_organization: string;
//     exp_location: string;
//     exp_start_date: string;
//     exp_end_date: string;
//     exp_description: string;
//   }[];
//   educations: {
//     edu_school: string;
//     edu_degree: string;
//     edu_city: string;
//     edu_start_date: string;
//     edu_graduation_date: string;
//     edu_description: string;
//   }[];
//   projects: {
//     proj_title: string;
//     proj_link: string;
//     proj_description: string;
//   }[];
//   skills: { skill: string }[];
// }

// const validType = {
//   TEXT: 'text',
//   TEXT_EMP: 'text_emp',
//   EMAIL: 'email',
//   DIGIT: 'digit',
//   PHONENO: 'phoneno',
//   ANY: 'any',
// } as const;

// type ValidType = typeof validType[keyof typeof validType];

// // User inputs elements
// const firstnameElem = mainForm.elements.namedItem('firstname') as HTMLInputElement;
// const middlenameElem = mainForm.elements.namedItem('middlename') as HTMLInputElement;
// const lastnameElem = mainForm.elements.namedItem('lastname') as HTMLInputElement;
// const imageElem = mainForm.elements.namedItem('image') as HTMLInputElement;
// const designationElem = mainForm.elements.namedItem('designation') as HTMLInputElement;
// const addressElem = mainForm.elements.namedItem('address') as HTMLInputElement;
// const emailElem = mainForm.elements.namedItem('email') as HTMLInputElement;
// const phonenoElem = mainForm.elements.namedItem('phoneno') as HTMLInputElement;
// const summaryElem = mainForm.elements.namedItem('summary') as HTMLTextAreaElement;

// // Display elements
// const nameDsp = document.getElementById('fullname_dsp') as HTMLDivElement;
// const imageDsp = document.getElementById('image_dsp') as HTMLImageElement;
// const phonenoDsp = document.getElementById('phoneno_dsp') as HTMLDivElement;
// const emailDsp = document.getElementById('email_dsp') as HTMLDivElement;
// const addressDsp = document.getElementById('address_dsp') as HTMLDivElement;
// const designationDsp = document.getElementById('designation_dsp') as HTMLDivElement;
// const summaryDsp = document.getElementById('summary_dsp') as HTMLDivElement;
// const projectsDsp = document.getElementById('projects_dsp') as HTMLDivElement;
// const achievementsDsp = document.getElementById('achievements_dsp') as HTMLDivElement;
// const skillsDsp = document.getElementById('skills_dsp') as HTMLDivElement;
// const educationsDsp = document.getElementById('educations_dsp') as HTMLDivElement;
// const experiencesDsp = document.getElementById('experiences_dsp') as HTMLDivElement;

// // Fetch values function
// const fetchValues = (attrs: string[], ...nodeLists: HTMLInputElement[][]): any[] => {
//   const elemsAttrsCount = nodeLists.length;
//   const elemsDataCount = nodeLists[0].length;
//   const tempDataArr: any[] = [];

//   for (let i = 0; i < elemsDataCount; i++) {
//     const dataObj: { [key: string]: string } = {};
//     for (let j = 0; j < elemsAttrsCount; j++) {
//       dataObj[attrs[j]] = nodeLists[j][i].value;
//     }
//     tempDataArr.push(dataObj);
//   }

//   return tempDataArr;
// };

// // Get user inputs function
// const getUserInputs = (): UserInputs => {
//   // Achievements
//   const achievementsTitleElem = document.querySelectorAll('.achieve_title') as NodeListOf<HTMLInputElement>;
//   const achievementsDescriptionElem = document.querySelectorAll('.achieve_description') as NodeListOf<HTMLInputElement>;

//   // Experiences
//   const expTitleElem = document.querySelectorAll('.exp_title') as NodeListOf<HTMLInputElement>;
//   const expOrganizationElem = document.querySelectorAll('.exp_organization') as NodeListOf<HTMLInputElement>;
//   const expLocationElem = document.querySelectorAll('.exp_location') as NodeListOf<HTMLInputElement>;
//   const expStartDateElem = document.querySelectorAll('.exp_start_date') as NodeListOf<HTMLInputElement>;
//   const expEndDateElem = document.querySelectorAll('.exp_end_date') as NodeListOf<HTMLInputElement>;
//   const expDescriptionElem = document.querySelectorAll('.exp_description') as NodeListOf<HTMLInputElement>;

//   // Education
//   const eduSchoolElem = document.querySelectorAll('.edu_school') as NodeListOf<HTMLInputElement>;
//   const eduDegreeElem = document.querySelectorAll('.edu_degree') as NodeListOf<HTMLInputElement>;
//   const eduCityElem = document.querySelectorAll('.edu_city') as NodeListOf<HTMLInputElement>;
//   const eduStartDateElem = document.querySelectorAll('.edu_start_date') as NodeListOf<HTMLInputElement>;
//   const eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date') as NodeListOf<HTMLInputElement>;
//   const eduDescriptionElem = document.querySelectorAll('.edu_description') as NodeListOf<HTMLInputElement>;

//   // Projects
//   const projTitleElem = document.querySelectorAll('.proj_title') as NodeListOf<HTMLInputElement>;
//   const projLinkElem = document.querySelectorAll('.proj_link') as NodeListOf<HTMLInputElement>;
//   const projDescriptionElem = document.querySelectorAll('.proj_description') as NodeListOf<HTMLInputElement>;

//   // Skills
//   const skillElem = document.querySelectorAll('.skill') as NodeListOf<HTMLInputElement>;

//   // Event listeners for form validation
//   firstnameElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.TEXT, 'First Name'));
//   middlenameElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.TEXT_EMP, 'Middle Name'));
//   lastnameElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.TEXT, 'Last Name'));
//   phonenoElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.PHONENO, 'Phone Number'));
//   emailElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.EMAIL, 'Email'));
//   addressElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.ANY, 'Address'));
//   designationElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.TEXT, 'Designation'));

//   achievementsTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.ANY, 'Title')));
//   achievementsDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.ANY, 'Description')));
//   expTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.ANY, 'Title')));
//   expOrganizationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.ANY, 'Organization')));
//   expLocationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.ANY, "Location")));
//   expStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target as HTMLInputElement, validType.ANY, 'End Date')));
//   expEndDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, validType.ANY, 'End Date