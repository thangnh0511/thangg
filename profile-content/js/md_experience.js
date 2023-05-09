const DATA_EXPERIENCES = [
  {
    "id": 1,
    "company": "Advertising Agency",
    "city": "Da Nang",
    "position": "designer & copy writer",
    "description":
      "The part time job when I was a student at university. I learned a huge knowledge about digital marketing through working with my team leader, my knowledge I was learned mainly focus on SEO. I also learned the organizing and planning skills, team working and creative thinking.",
    "detail": `<ul style="list-style-type: square;">
            <li>Working as Designer&nbsp;</li>
            <li>Edit marketing videos&nbsp;</li>
            <li>Conduct SEO campaign&nbsp;</li>
            <li>Write content for the SEO campaign</li>
            </ul>`,
    "startDate": "2017",
    "endDate": "2019",
  },
  {
    "id": 2,
    "company": "FAST Software",
    "city": "Da Nang",
    "position": "it business analyst",
    "description":
      "The first company I had joined immediately after graduation from university. I really appreciate for experiences given from this first job. I improved a lot of a BA’s main skills through doing projects such as communicate with stakeholders, writing documents, working directedly with the system and so on",
    "detail": `<ul style="list-style-type: square;">
            <li>Gather requirements from stakeholders and write down the feature list&nbsp;</li>
            <li>Communicate and validate requirements with stakeholders&nbsp;</li>
            <li>Write Business Requirement Document, Project Vision Document, and User guide&nbsp;</li>
            <li>Scenarios Testing&nbsp;</li>
            <li>Coordinate with different teams to ensure the quality of outcomes&nbsp;</li>
            <li>Onsite and analyze process issues to make improvements through digital transformation</li>
            <li>Plan and organize</li>
            </ul>`,
    "startDate": "2019",
    "endDate": "2021",
  },
  {
    "id": 3,
    "company": "FPT Software",
    "city": "Da Nang",
    "position": "it business analyst",
    "description":
      "I improved my mindset and technical knowledge a lot when working at my present company. There were various challenges when working on outsourcing projects for client came from abroad. At last, I found myself really like this job and ready for new challenges",
    "detail": `<ul style="list-style-type: square;">
            <li>Gather requirements&nbsp;</li>
            <li>Communicate and validate requirements with stakeholders&nbsp;</li>
            <li>Write User Story, Use Cases, FSD, SRS Design Mock-up, Wireframe, Prototype&nbsp;</li>
            <li>Coordinate with different teams to ensure the quality of outcomes&nbsp;</li>
            <li>Plan and organize schedule to ensure launch on time along the project roadmap&nbsp;</li>
            <li>Support in testing, verifying bugs or issues with client Analyze data and writing query script</li>
            </ul>`,
    "startDate": "2021",
    "endDate": "current",
  },
];

function displayExp() {

  let data = DATA_EXPERIENCES;
  let dom = document.getElementById("_exp");
  let content = `
  <h1 class="rsm2_title">Experiences</h1>
  `;

  for(let i = (data.length - 1); i >= 0 ; i--)
  {
    let tempObj = data[i]
    // console.log(tempObj)

    if(i != 0) {
        content += `<div class="row timeline-block">
        <div class="col-md-2 col-sm-12 timeline__time">
        <p>${tempObj.startDate} - ${tempObj.endDate}</p>
        </div>
        <div class="col-md-8 col-sm-12 timeline__content tl_line">
            <div class="timeline__subtitle">${tempObj.company}, ${tempObj.city}</div>
            <div class="timeline__title">${tempObj.position}</div>
            <div class="timeline__Description">${tempObj.description}</div>
            <div class="timeline__res">${tempObj.detail}</div>
            </div>
        </div>`
    } else {
        content += `<div class="row timeline-block">
            <div class="col-md-2 col-sm-12 timeline__time">
            <p>${tempObj.startDate} - ${tempObj.endDate}</p>
            </div>
            <div class="col-md-8 col-sm-12 timeline__content tl_lastLine">
                <div class="timeline__subtitle">${tempObj.company}, ${tempObj.city}</div>
                <div class="timeline__title">${tempObj.position}</div>
                <div class="timeline__Description">${tempObj.description}</div>
                <div class="timeline__res">${tempObj.detail}</div>
            </div>
        </div>`
    }
  };

    dom.innerHTML = content;
}


displayExp();
