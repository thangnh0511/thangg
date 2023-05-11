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
    }, 
    {
        "personal_ID": 1,
        "Project_ID": 9,
        "company_ID": 2,
        "project_name": "E-Commerce",
        "company": "FPT Software ",
        "project_description": "Developing new modules and enhancing the e-commerce website.",
        "role": "IT Business Analyst ",
        "team_size": 14,
        "technologies": "Magento Platform"
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
    },
    {
        "project_ID": 9,
        "responsibility": "Gathering and Planning requirements"
       },
       {
        "project_ID": 9,
        "responsibility": "Writing document (SRS, Wireframe)"
       },
       {
        "project_ID": 9,
        "responsibility": "Support UAT previous phase"
       }

]


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
    let dom = document.getElementById('projectList')
    let content =''
    let verifyCode = document.getElementById('verifyCode').value
    if(md5(verifyCode) == '1134f6800908febcf78cba9e036acd20') {
        displayPro()
    } else {
        // alert('Wrong Code, Please try again !')
        content=`<div class="formCode box-shadow">
        <p>Contact me to get the code if you want to read this content, Thank you!
        </p>
        <input type="number" class="form-control invalid-input-box" id="verifyCode" aria-describedby="passCode" placeholder="Enter Verify Code">
        <p class="invalid-input-text">Wrong Code, Please try again !!!</p>
        <button type="button" class="btn btn-dark" id="verifyButton" onclick="verifyCode()">Show Content</button>
        </div>`
    }
    dom.innerHTML = content
}

function verifyCodeResume() {
    let verifyCode = document.getElementById('verifyCodeResume').value
    console.log(verifyCode)
    let dom = document.getElementById('resume-view')
    let content =''
    if(md5(verifyCode) == '1134f6800908febcf78cba9e036acd20') {
        content += `
        <div class="modal-header">
              <h2 class="modal-title" id="exampleModalToggleLabel">Download Resume</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div class="modal-body" id="resume-file">
            <embed src="https://firebasestorage.googleapis.com/v0/b/porfolio-c82b8.appspot.com/o/file%2FCV-NguyenHuuThang-2023.pdf?alt=media&token=422d962b-0c80-4665-9b40-f4665b944a10#toolbar=0" width="100%" height="500px" type="application/pdf">
        </div>
        <div class="modal-footer" id="resume-download">
            <button type="button" class="btn btn-outline-dark btn-lg" data-bs-dismiss="modal">Close</button>
            <a role='button' class="btn btn-dark btn-lg" href='https://firebasestorage.googleapis.com/v0/b/porfolio-c82b8.appspot.com/o/file%2FCV-NguyenHuuThang-2023.pdf?alt=media&token=422d962b-0c80-4665-9b40-f4665b944a10'>Download</a>
              </div>
            
        `
    } else {
        content = `
        <div class="modal-header">
              <h2 class="modal-title" id="exampleModalToggleLabel">Download Resume</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="resume-file">
                <div class="formCode" id="form-code">
                    <input type="number" class="form-control invalid-input-box" id="verifyCodeResume" aria-describedby="number" placeholder="Enter Verify Code" >
                    <p class='invalid-input-text'>Wrong Code, Please try again !!!</p>
                    <button type="button" class="btn btn-dark" id="verifyButton" onclick="verifyCodeResume()">Show Content</button>
                </div>
            </div>
        `
    }
    console.log(content)
    dom.innerHTML = content
}



// MD5 Encrypt
var md5 = function (string) {
 
    function RotateLeft(lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }

    function AddUnsigned(lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x,y,z) {
        return (x & y) | ((~x) & z);
    }
    function G(x,y,z) {
        return (x & z) | (y & (~z));
    }
    function H(x,y,z) {
        return (x ^ y ^ z);
    }
    function I(x,y,z) {
        return (y ^ (x | (~z)));
    }

    function FF(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k=0;k<x.length;k+=16) {
        AA=a;
        BB=b;
        CC=c;
        DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
    }

    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

    return temp.toLowerCase();
}


// console.log(DATA_PROJECTS)
// console.log(DATA_PROJECTS_RES)