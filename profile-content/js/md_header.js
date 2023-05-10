export const DATA_PERSONAL = {
    "id": 1,
    "name": "Nguyen Huu Thang",
    "position": "IT Business Analyst ",
    "status": "open",
    "address": "Da Nang, Viet Nam",
    "phoneNumber": "0906401845",
    "email": "thangnh0511@gmail.com",
    "linkedin": "https://www.linkedin.com/in/thang-nh/",
    "lastUpdate": "09\/05\/2023",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/porfolio-c82b8.appspot.com/o/image%2F1632814895611.jpg?alt=media&token=878cf14e-3ddd-4e4e-8e91-eb7fd8da30b9",
    "resumeUrl": "https://firebasestorage.googleapis.com/v0/b/porfolio-c82b8.appspot.com/o/file%2FCV-NguyenHuuThang-2023.pdf?alt=media&token=422d962b-0c80-4665-9b40-f4665b944a10",
    "version": "220402.0.10"
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
    <a 
        class="fas fa-arrow-left back-btn"
        onclick="alert('Sorry, My primary website is being updating !')"
        ></a>
    <div id="title-header">
        <div id="h-status" class="st-${status.disStatus}"></div>
        <div>
            <p class="title-name">${data.name}</p>
            <p class="update-date">Last Update - ${data.lastUpdate}</p>
            <!-- <p class="update-date">Version - ${data.version}</p> -->
        </div>
    </div>
    <a href="${data.resumeUrl}" class="download-btn black-color"> 
        <!-- <i class="fas fa-file-download"></i> -->
        <i class="fa-solid fas fa-download"></i>
        <p>Download</p>
    </a>
    `

    document.getElementById("_001-h").innerHTML = `
    <div class="profile-avata">
    <img class="status-border border-${status.disStatus}" src="${data.imageUrl}" alt="">
    <!--<p class="status st-${status.disStatus} ">${status.content}</p>-->
        </div>
        <div class="resume__info col-md-8 col-lg-8">
            <div class="resume__JobS">
                <div class="resume__jobTitle st-${status.disStatus}-text">${data.position}</div>
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
                   <!-- <a href="https://thangnh0511.github.io/thangg/" target="__blank" class="rsm-contact-item">
                        <i class="fas fa-globe"></i>
                        <p>nguyenhuuthang.profile</p> 
                    </a> -->
                </div>                       
            </div>
        </div>
    `
}
loadingHeader()

