// To inialize the sidebar when the menu option is clicked
function toggleSidebar(closeOnly = false) {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;
    const content = document.querySelector('.content');
    const tab = document.querySelector('.tabs');

    sidebar.style.left = "-250px";
    sidebar.classList.remove('open');
    body.classList.remove("sidebar-open");
    content.classList.remove('shifted');
    tab.classList.remove('shifted');

    if (!closeOnly) {
        sidebar.style.left = "0px";
        sidebar.classList.add('open');
        body.classList.add("sidebar-open");
        content.classList.add('shifted');
        tab.classList.add('shifted');
    }
}

// Smooth transition for menu when switching pages
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            toggleSidebar(true);

            setTimeout(() => {
                window.location.href = href;
            }, 300); 
        });
    });
});

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

function showPlatformInfo(platform, event) {
    event.preventDefault(); // To help with page reload

    const infoContainer = document.getElementById("platform-info");
    let info = "";

    switch (platform) {
        case 'dropbox':
            info = `
                <h3>Dropbox</h3>
                <p>Dropbox is a secure cloud storage platform ideal for file sharing. You can set up a TTP system by:
                <ol>
                    <li>Sign up for a Dropbox Business account</li>
                    <li>Create shared folders for different teams or projects</li>
                    <li>Set permissions to control who can view, edit, or comment on files</li>
                    <li>Enabling two-factor authentication (2FA) to add security</li>
                    <li>Use Dropbox&#39s “File Request” feature to securely gather files from external collaborators</li>
                </ol>
                <a href="https://help.dropbox.com/account-access/create-account" target="_blank">Dropbox Business Create an Account Page</a></p>
            `;
            break;
        case 'google_drive':
            info = `
                <h3>Google Drive</h3>
                <p>Google Drive offers real-time collaboration with built-in security. Steps to set up TTP:
                <ol>
                    <li>Create a Google Workspace account</li>
                    <li>Use “Shared Drives” for departmental collaboration</li>
                    <li>Assign specific roles such as Viewer, Commenter, or Editor for each team member</li>
                    <li>Enable “Link Sharing” with restricaitons to ensure only authorized users access files</li>
                </ol>
                <a href="https://support.google.com/drive/answer/2424384?hl=en&co=GENIE.Platform%3DDesktop" target="_blank">Google Drive Help</a></p>
            `;
            break;
        case 'onedrive':
            info = `
                <h3>OneDrive</h3>
                <p>OneDrive integrates with Microsoft 365 to allow secure storage and file sharing. Set up steps include:
                <ol>
                    <li>Register for a OneDrive for Business account through Microsoft 365</li>
                    <li>Set up shared folders for secure collaboration within departments</li>
                    <li>Configure “File Expiry” to limit how long links remain active</li>
                    <li>Enable “Advanced Threat Protection” to detect malicious links</li>
                    <li>Use OneDrive Admin Center for access controls</li>
                    <li>Share links with password protection</li>
                </ol>
                <a href="https://support.microsoft.com/en-us/office/setup-onedrive-for-microsoft-365-for-business-937e3ac8-b396-4a70-a561-6eaa479a4720" target="_blank">OneDrive Microsoft 365 Setup & Support</a></p>
            `;
            break;
        case 'sharepoint':
            info = `
                <h3>SharePoint</h3>
                <p>SharePoint is great for organizational collaboration and secure document management:
                <ol>
                    <li>Sign into your Microsoft 365 account</li>
                    <li>Create a SharePoint for your organization or department</li>
                    <li>Customize permissions for individual folders or document libraries</li>
                    <li>Enable “Versioning” to track changes and ensure document integrity</li>
                </ol>
                <a href="https://support.microsoft.com/en-us/office/get-started-with-sharepoint-909ec2f0-05c8-4e92-8ad3-3f8b0b6cf261" target="_blank">Getting Started With SharePoint Page</a></p>
            `;
            break;
        case'privatebin':
            info = `
                <h3>PrivateBin</h3>
                <p>PrivateBin is a free, easy-to-use website that allows for secure file transfer. PrivateBin uses the AES encryption algorithm, which is renowned for its complexity. They have many different options, such as a 
                “Burn after reading feature” that allows the file to be instantly destroyed upon opening, which is as easy as clicking a check box. A drop-down menu for file expiry times is offered, as well, from five minutes to
                 a maximum of a month. The files can be password protected and can have files attached as well.  
                <a href="https://privatebin.net/" target="_blank">PrivateBin Link</a></p>
            `;
            break;
        default:
            info = "<p>No information available.</p>";
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
