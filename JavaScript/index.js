async function fetchIpInfo() {
    try {
        var ip = document.getElementById("ip_input").value;
        var token = "ebeca4b5c35f72";

        const url = `https://ipinfo.io/${ip}?token=${token}`;

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        var json = await res.json();

        var mapUrl = `https://www.google.com/maps?q=${json.loc}&ll=${json.loc}&z=18&output=embed`;
        document.getElementById("map-iframe").src = mapUrl;

        for (let [key, value] of Object.entries(json)) {
            document.getElementById(key).innerText = value;
        }
        document.getElementById("Output").style.display = "";
    } catch (error) {
        console.error("Error fetching IP info:", error);
    }
}
