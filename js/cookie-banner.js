document.addEventListener("DOMContentLoaded", function () {
  const consent = localStorage.getItem("cookie-consent");

  if (!consent) {
    const banner = document.createElement("div");

    banner.innerHTML = `
      <div id="cookie-banner" style="
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        max-width: 500px;
        background: #111;
        color: white;
        padding: 20px;
        border-radius: 12px;
        z-index: 9999;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 20px rgba(0,0,0,0.25);
      ">
        <p style="margin-bottom: 15px;">
          Wij gebruiken analytische cookies om onze website te verbeteren.
        </p>

        <div style="display:flex; gap:10px;">
          <button id="accept-cookies" style="
            background:#4CAF50;
            color:white;
            border:none;
            padding:10px 16px;
            border-radius:8px;
            cursor:pointer;
          ">
            Accepteren
          </button>

          <button id="decline-cookies" style="
            background:#444;
            color:white;
            border:none;
            padding:10px 16px;
            border-radius:8px;
            cursor:pointer;
          ">
            Weigeren
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    document
      .getElementById("accept-cookies")
      .addEventListener("click", function () {
        localStorage.setItem("cookie-consent", "accepted");
        location.reload();
      });

    document
      .getElementById("decline-cookies")
      .addEventListener("click", function () {
        localStorage.setItem("cookie-consent", "declined");
        document.getElementById("cookie-banner").remove();
      });
  }
});