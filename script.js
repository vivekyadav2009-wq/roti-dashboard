document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const serverList = document.getElementById("server-list");
    const enableTickets = document.getElementById("enable-tickets");
    const ticketCategory = document.getElementById("ticket-category");
    const saveSettingsBtn = document.getElementById("save-settings");
    const copyTicketBtn = document.getElementById("copy-ticket");

    // Simulated login process
    loginBtn.addEventListener("click", () => {
        alert("Redirecting to Discord login...");
        // Here you will integrate Discord OAuth2 authentication
    });

    // Load servers (Mock Data)
    setTimeout(() => {
        serverList.innerHTML = `
            <option value="123">Server 1</option>
            <option value="456">Server 2</option>
        `;
    }, 1000);

    // Save Ticket Settings
    saveSettingsBtn.addEventListener("click", () => {
        alert(`Tickets Enabled: ${enableTickets.checked}, Category: ${ticketCategory.value}`);
        // Here you will send data to a backend API
    });

    // Copy Ticket Setup
    copyTicketBtn.addEventListener("click", () => {
        alert("Copying ticket settings...");
        // Here you will add a function to copy settings to another server
    });
});
