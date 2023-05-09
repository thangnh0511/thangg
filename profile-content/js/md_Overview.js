const DATA_SUMMARY = [
    {
     "personal_ID": 1,
     "category": "summary",
     "description": "As an experienced IT Business Analyst, I have spent the last 4 years working with both product companies and outsourcing firms, honing my skills in project management, requirements gathering, and stakeholder communication. However, what truly sets me apart is my passion for UX\/UI design and my strong background in software and data. I am constantly seeking new ways to enhance user experiences and streamline processes through innovative design and data-driven insights. With my diverse skill set and passion for technology, I am confident in my ability to make a significant contribution to any organization."
    },
    {
     "personal_ID": 1,
     "category": "certification",
     "description": ["PSPO I - 2023",
                    "FPT Academy - BA Foundation - 2023",
                    "TOEIC - 2022",
                    "Google UX Design Professional - 2022",
                    "Codegym - JavaScript - 2022",
                    "Codegym - HTML\/CSS - 2022",
                    "MOS Excel 2023 Specialist - 2017"] 
    },
    {
     "personal_ID": 1,
     "category": "technical",
     "sub_category": "Management & Design Tool",
     "description": ["Jira & Confluence",
                    "Balsamiq, Figma, Adobe XD",
                    "Draw.io, MS Visio, Miro",
                    "Adobe Creative Suite",
                    "Business Process Model & Notation (BPMN)",
                    ]
    },
    {
     "personal_ID": 1,
     "category": "technical",
     "sub_category": "Database",
     "description": ["MS SQL Server, Oracle"]
    },
    {
     "personal_ID": 1,
     "category": "technical",
     "sub_category": "Programing",
     "description": ["HTML\/CSS, JavaScript, ReactJS",
                    "Python"]
    },
    {
     "personal_ID": 1,
     "category": "hobbies",
     "description": ["Running",
                    "Playing guitar",
                    "Reading books",
                    "Traveling",
                    "Coding",
                    "Garden"]
    },
    {
     "personal_ID": 1,
     "category": "languages",
     "sub_category": "English",
     "description": "TOEIC - 765 Score"
    }
   ]

let dataSummary = []
let dataCertification = []
let dataTechnical = []
let dataHobbies = []
let dataLanguage = []

DATA_SUMMARY.forEach(element => {
    if(element.category == 'summary') {
        dataSummary.push(element)
    } if (element.category == 'certification') {
        dataCertification.push(element)
    } if (element.category == 'technical') {
        dataTechnical.push(element)
    } if (element.category == 'hobbies') {
        dataHobbies.push(element)
    } if (element.category == 'languages') {
        dataLanguage.push(element)
    }
});


// ----- RENDERING -------
renderSummary()
renderLanguage(dataLanguage)
renderCommon(dataTechnical, 'technical skills', '_technical')
renderCommon(dataCertification,'certificates', '_certificate')
renderCommon(dataHobbies,'hobbies', '_hobbies')
// ----- END RENDERING -----
// console.log(dataTechnical)

function renderSummary() {
    document.getElementById('_summary').innerHTML = ` <div class="rsm2_title" style="letter-spacing: 4px;">
    Summary
    </div>
    <p>${dataSummary[0].description}</p>`
}

function renderLanguage(data) {
    let i = 0
    let dom=''
    data.forEach(element => {
        dom +=`
        <div class="rsm2_title">
        languages SKILLS
            </div>
            <div class="rsm2_font__subTitle">
                ${data[i].sub_category} - Professional working proficiency
            </div>
        <div class="rsm2_font__boxTitle">${data[i].description}</div>
        `
        i++
    });
    document.getElementById('_languages').innerHTML = dom;
}

function renderCommon(data, name ,id) {
    let i = 0
    let dom =`<div class="rsm2_title">${name}</div>`
    if(data.length > 1){
        data.forEach(subCate => { 
            let tempArray = subCate.description
            dom +=`<div class="rsm2_font__subTitle2">${subCate.sub_category}</div><ul>`
                for(let index = 0; index < tempArray.length; index++) {
                    dom += `<li class="fs-16">${tempArray[index]}</li>`
                }
                dom += `</ul>`
            // console.log(subCate.description)
            i++
        });
    } else {
        data.forEach(subCate => { 
            let tempArray = subCate.description
            dom +=`<ul>`
                for(let index = 0; index < tempArray.length; index++) {
                    dom += `<li class="fs-16">${tempArray[index]}</li>`
                }
                dom += `</ul>`
            // console.log(subCate.description)
            i++
        });
    }
    // console.log(dom)
    document.getElementById(id).innerHTML = dom;
}






