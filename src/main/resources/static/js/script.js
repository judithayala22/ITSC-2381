
function toggleSidebar(){ 

    const sidebar = document.getElementById("sidebar"); 

    const body = document.body; 

 

    const content = document.querySelector('.content'); 

    const tab = document.querySelector('tab'); // establishing what is shifting when SB is open 

 

    if (sidebar.style.left === "0px") { 

        sidebar.style.left = "-250px"; 

        body.classList.remove("sidebar-open"); // Show menu button 

    } else { 

        sidebar.style.left = "0px"; 

        body.classList.add("sidebar-open"); // Hide menu button 

    } 

 

    sidebar.classList.toggle('open'); // variable for when menu is clicked opening the SB 

    content.classList.toggle('shifted'); // variable so content knows to shift 

    tab.classList.toggle('shifted'); 

}  

function showTab(tabName) { 

    const tabs = document.querySelectorAll('.tab'); 

    const contents = document.querySelectorAll('.tab-content'); 

 

    tabs.forEach(tab => { 

        tab.classList.remove('active'); 

    }); 

 

    contents.forEach(content => { 

        content.classList.remove('active'); 

    }); 

 

    const activeTab = document.querySelector(`.tab[onclick="showTab('${tabName}')"]`); 

    const activeContent = document.getElementById(tabName); 

 

    activeTab.classList.add('active'); 

    activeContent.classList.add('active'); 

} 

function showPlatformInfo(platform) {
    const infoContainer = document.getElementById("platform-info");
    let info = "";
    switch (platform) {
        case 'dropbox':
            info = "<h3>Dropbox</h3><p>Secure cloud storage with strong encryption and access control.</p>";
            break;
        case 'google_drive':
            info = "<h3>Google Drive</h3><p>End-to-end encryption and easy collaboration features.</p>";
            break;
        case 'onedrive':
            info = "<h3>OneDrive</h3><p>Integration with Microsoft 365 and advanced security protocols.</p>";
            break;
        case 'sharepoint':
            info = "<h3>SharePoint</h3><p>Enterprise-grade security and document management features.</p>";
            break;
        default:
            info = "";
    }
    infoContainer.innerHTML = info;
}

function sendFeedback() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("feedback-message").value;
    var email = "judithayala2022@gmail.com";
    
    if (name.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }
    
    var subject = "Feedback from " + name;
    var body = encodeURIComponent("Name: " + name + "\n\nFeedback:\n" + message);
    
    window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
}