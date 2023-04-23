export const DATA_PERSONAL = {
    "id": 1,
      "name": "Nguyen Huu Thang",
      "position": "IT Business Analyst ",
      "status": "close",
      "address": "Da Nang city",
      "phoneNumber": "0906401845",
      "email": "thangnh0511@gmail.com",
      "linkedin": "www.linkedin.com\/in\/thang-nh",
      "lastUpdate": "22\/04\/2023",
      "imageUrl": "",
      "version": "220402.0.09"
}

// ------------------------------

function loadingHeader() {
    let data = DATA_PERSONAL
    let status = {}
    let disStatus = ''
    let color = {
        available: '#60D394',
        working: '#EE6055'
    }

    const statusConfig = {
        available: {
            content: "OPEN TO WORK",
            disStatus: 'available',
            color: '#60D394'
        },
        working: {
            content: "WORKING",
            disStatus: 'working',
            color: '#EE6055'
        }
    }

    if(data.status == 'open') {
        status = statusConfig.available
    } else {
        status = statusConfig.working
    }


    document.getElementById("_footer").style.backgroundColor = status.color;

    document.getElementById('_002-h').innerHTML = `
    <a href="../profile.html" class="fas fa-arrow-left back-btn"></a>
    <div id="title-header">
        <div id="h-status" class="st-${status.disStatus}"></div>
        <div>
            <p class="title-name">${data.name}</p>
            <!-- <p class="update-date">Last Update - ${data.lastUpdate}</p> -->
            <p class="update-date">Version - ${data.version}</p>
        </div>
    </div>
    <a href="https://firebasestorage.googleapis.com/v0/b/personal-profile-32045.appspot.com/o/pdf%2FNGUYEN%20HUU%20THANG.pdf?alt=media&token=dc9017cb-e87d-4aaf-a08c-7358df287b6a" class="download-btn black-color"> 
        <!-- <i class="fas fa-file-download"></i> -->
        <i class="fa-solid fas fa-download"></i>
        <p>Download</p>
    </a>
    `

    document.getElementById("_001-h").innerHTML = `
    <div class="profile-avata">
    <img class="status-border border-${status.disStatus}" src="../asset/img/profile-img/profile.jpg" alt="">
    <!--<p class="status st-${status.disStatus} ">${status.content}</p>-->
        </div>
        <div class="resume__info col-md-8 col-lg-8">
            <div class="resume__JobS">
                <div class="resume__jobTitle">${data.position}</div>
                <div class="resume__status st-${status.disStatus} "><p>${status.content}</p></div>
            </div>
            <div class="resume__name">
                ${data.name}
            </div>
            <div class="resume__contact">
                <div class="resume__contact-listcontact">
                    <a  href="https://goo.gl/maps/T3G24fo7jW84fuLd7" target="__blank" class="rsm-contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>${data.address}</p>  
                    </a>
                    <a href="tel:+${data.phoneNumber}"  target="__blank" class="rsm-contact-item">
                        <i class="fas fa-mobile"></i>
                        <p >${data.phoneNumber}</p> 
                    </a>
                    <a  href="mailto:${data.email}" target="__blank" class="rsm-contact-item">
                        <i class="fas fa-envelope"></i>
                        <p>${data.email}</p> 
                    </a>
                    <a href="${data.linkedin}" target="__blank" class="rsm-contact-item">
                        <i class="fab fa-linkedin-in"></i>
                        <p>${data.linkedin}</p> 
                    </a>
                    <a href="https://thangnh0511.github.io/thangg/" target="__blank" class="rsm-contact-item">
                        <i class="fas fa-globe"></i>
                        <p>nguyenhuuthang.profile</p> 
                    </a>
                </div>                       
            </div>
        </div>
    `
}
loadingHeader()

