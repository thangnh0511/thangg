const DATA_COMPANY = [
    {
        "Company_ID": 1,
        "Company_name": "Fast Software"
    }, 
    {
        "Company_ID": 2,
        "Company_name": "FPT Software"
    }
]
const DATA_PROJECTS = [
    {
     "personal_ID": 1,
     "Project_ID": 1,
     "company_ID": 1,
     "project_name": "Vehicle Weighing Station",
     "company": "Fast Software",
     "project_description": "Connecting data from manufactory system to vehicle weighing software ",
     "role": "IT Business Analyst ",
     "team_size": 3,
     "technologies": "MSSQL, .NET"
    },
    {
     "personal_ID": 1,
     "Project_ID": 2,
     "company_ID": 1,
     "project_name": "Accounting Software",
     "company": "Fast Software",
     "project_description": "Connecting data from other system to accounting system that support to manage accounting, \nwarehouse, and human resource for Da Nang port",
     "role": "IT Business Analyst ",
     "team_size": 6,
     "technologies": "MSSQL, .NET"
    },
    {
     "personal_ID": 1,
     "Project_ID": 3,
     "company_ID": 1,
     "project_name": "Purchasing Management System",
     "company": "Fast Software",
     "project_description": "ERP system designed for help ware house and purchasing management",
     "role": "IT Business Analyst ",
     "team_size": 6,
     "technologies": "MSSQL, .NET"
    },
    {
     "personal_ID": 1,
     "Project_ID": 4,
     "company_ID": 1,
     "project_name": "Accounting Software",
     "company": "Fast Software",
     "project_description": "Digital transformation for business",
     "role": "IT Business Analyst ",
     "team_size": 4,
     "technologies": "MSSQL, .NET"
    },
    {
     "personal_ID": 1,
     "Project_ID": 5,
     "company_ID": 2,
     "project_name": "Customer Relationship Management System",
     "company": "FPT Software ",
     "project_description": "Maintain and enhancement Customer Relationship Management System.",
     "role": "IT Business Analyst ",
     "team_size": 10,
     "technologies": "Azure, MS D365, .NET, JavaScript"
    },
    {
     "personal_ID": 1,
     "Project_ID": 6,
     "company_ID": 2,
     "project_name": "Customer Service Portal",
     "company": "FPT Software ",
     "project_description": "Developing Customer Service Portal for insurance term designed for helps internal staff and third party \nstaff promptly support customer.",
     "role": "IT Business Analyst ",
     "team_size": 8,
     "technologies": "Azure, Power Platform, .NET, JavaScript"
    },
    {
     "personal_ID": 1,
     "Project_ID": 7,
     "company_ID": 2,
     "project_name": "Data Migration",
     "company": "FPT Software ",
     "project_description": "Data migration by using SQL query statements to mapping data from old system to new system based on requirements.",
     "role": "IT Business Analyst ",
     "team_size": 18,
     "technologies": "MSSQL, React, .NET"
    },
    {
     "personal_ID": 1,
     "Project_ID": 8,
     "company_ID": 2,
     "project_name": "Marketing Automation",
     "company": "FPT Software ",
     "project_description": "Maintain and enhance the internal system of a bank designed for helping the marketing department rapidly run a new marketing campaign by refund for customers who use bank’s service.",
     "role": "IT Business Analyst ",
     "team_size": 20,
     "technologies": "Oracle"
    }
   ]

const DATA_PROJECTS_RES = [
    {
     "project_ID": 1,
     "responsibility": "Observe and study operation to make business process mode"
    },
    {
     "project_ID": 1,
     "responsibility": "Discuss and Provide solution"
    },
    {
     "project_ID": 1,
     "responsibility": "Support and fixing problems on database and business process"
    },
    {
     "project_ID": 1,
     "responsibility": "Prepare user guide and make training session to user"
    },
    {
     "project_ID": 2,
     "responsibility": "Working onsite to research the operation of logistic process in por"
    },
    {
     "project_ID": 2,
     "responsibility": "Writing current state analysis document and transfer to team"
    },
    {
     "project_ID": 2,
     "responsibility": "Following and support client using system"
    },
    {
     "project_ID": 2,
     "responsibility": "Working with developer to hotfix bugs"
    },
    {
     "project_ID": 3,
     "responsibility": "Onsite and communicate with stakeholders to gather requirements and clarify business issues"
    },
    {
     "project_ID": 3,
     "responsibility": "Plan and organize roadmap of project"
    },
    {
     "project_ID": 3,
     "responsibility": "Write business requirement document include current state analysis, business requirement solution"
    },
    {
     "project_ID": 3,
     "responsibility": "Work closely with Dev and tester to keep tracking project ensure launch on time"
    },
    {
     "project_ID": 3,
     "responsibility": "Scenrios test and write user guide"
    },
    {
     "project_ID": 4,
     "responsibility": "Implementing the accounting and ERP system standard version and support client for using in person, also gather change request"
    },
    {
     "project_ID": 4,
     "responsibility": "Communicate with stakeholders to clarify requirements and solution"
    },
    {
     "project_ID": 4,
     "responsibility": "Write Business requirement documents"
    },
    {
     "project_ID": 5,
     "responsibility": "Communicate with PO and client to clearly understand business process and provide solution to enhancement"
    },
    {
     "project_ID": 5,
     "responsibility": "Writing User Story, FSD"
    },
    {
     "project_ID": 5,
     "responsibility": "Design Wireframe, prototype for new screens"
    },
    {
     "project_ID": 5,
     "responsibility": "Support scenerios testing, and clarify issues and bugs on launch phrase"
    },
    {
     "project_ID": 6,
     "responsibility": "Gather requirements from client and PO"
    },
    {
     "project_ID": 6,
     "responsibility": "Writing User Story, FSD, SRS"
    },
    {
     "project_ID": 6,
     "responsibility": "Design Wireframe, Prototype"
    },
    {
     "project_ID": 6,
     "responsibility": "Scenerios testing, support clarify issues and bugs with clients "
    },
    {
     "project_ID": 7,
     "responsibility": "Create the mapping document base on using table definition, old system and SRS of new system "
    },
    {
     "project_ID": 7,
     "responsibility": "Communicate with BA and Dev to clarify information about SRS"
    },
    {
     "project_ID": 8,
     "responsibility": "Receive requirements and closely working with project team of client side to clarify and write terms and conditions document"
    },
    {
     "project_ID": 8,
     "responsibility": "Writing SQL queries statement based on terms and conditions document of the marketing campaign"
    },
    {
     "project_ID": 8,
     "responsibility": "Scenarios testing for queried lists"
    } ]


function displayPro() {
    let com_data = DATA_COMPANY
    let data = DATA_PROJECTS
    let res_data = DATA_PROJECTS_RES
    let dom = document.getElementById('projectList')
    let content = ''

    for(let com = (com_data.length - 1); com >= 0 ; com--) 
    {
        console.log(com_data[com].Company_name)
        content += `<div class="company">
        <i class="fa-regular fa-star"></i>
            <p>${com_data[com].Company_name}</p>
            </div>`

        for(let i = (data.length - 1); i >= 0 ; i--) {
            if(data[i].company_ID == com + 1) {
                content += `
                <div class="accordion-item">
                <h2 class="accordion-header" id="00${data[i].Project_ID}">
                  <button class="accordion-button projectTitle collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Collapse${data[i].Project_ID}" aria-expanded="false" aria-controls="" >
                  ${data[i].project_name}
                  </button>
                </h2>
                <div id="Collapse${data[i].Project_ID}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#projectList" >
                  <div class="accordion-body">
                    <div class="project-card">
                      <div class="project-card_body">
                          <div class="row">
                              <div class="col-12 col-md-4 project-detail">
                                  <div class="pc_company">
                                      <h3>Company</h3>
                                      <p>${data[i].company}</p>
                                  </div>
                                  <div class="pc_role">
                                      <h3>Role</h3>
                                      <p>${data[i].role}</p>
                                  </div>
                                  <div class="pc_teamsz">
                                      <h3>Team size</h3>
                                      <p>${data[i].team_size}</p>
                                  </div>
                                  <div class="pc_tech">
                                      <h3>Technologies</h3>
                                      <p>${data[i].technologies}</p>
                                  </div>
                              </div>
                              <div class="col-12 col-md-8 project-info">
                                  <div class="pc_projectDes">
                                      <h3>Description</h3>
                                      <p>${data[i].project_description}</p> 
                                  </div>
                                  <div class="pc_projectRes">
                                      <h3>Responsibilities</h3>
                                      <ul>`
                                      for(let mi = 1; mi < res_data.length; mi++) {
                                        if (res_data[mi].project_ID == i + 1) {
                                            // console.log(res_data[mi].project_ID + '------' + res_data[mi].responsibility)
                                            content += ` 
                                                 <li>${res_data[mi].responsibility}</li>
                                        `
                                        }

            }
            // if (res_data[e].project_ID == data[i].Project_ID) {
            //     content += ` 
            //         <li>${res_data[e].responsibility}</li>
            //     `
            // } else {
            //     break;
            // }
          }
          content += `
          </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `
        }
    }
    // console.log(content)
    dom.innerHTML = content
}

function verifyCode() {
    // let code = prompt('Please Enter Code:')
    let verifyCode = document.getElementById('verifyCode').value
    console.log(verifyCode)
    if(verifyCode == 30041975) {
        displayPro()
    } else {
        alert('Wrong Code, Please try again !')
    }
}




// console.log(DATA_PROJECTS)
// console.log(DATA_PROJECTS_RES)