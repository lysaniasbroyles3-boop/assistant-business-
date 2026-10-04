let aiOn = false;


/* -----------------------------
   ASSASSON PRO
----------------------------- */

function openAI() {

  aiOn = true;

  const panel =
    document.getElementById("aiPanel");

  panel.scrollIntoView({
    behavior: "smooth"
  });

  document.getElementById("aiMessage").innerHTML = `
    <div class="message-icon">✦</div>

    <div>
      <strong>Assasson Pro</strong>
      <p>
        I'm online and ready. What would you like to know?
      </p>
    </div>
  `;

  notify("Assasson Pro is online");

  setTimeout(() => {
    document.getElementById("question").focus();
  }, 500);
}


function askAI() {

  if (!aiOn) {
    openAI();
    return;
  }

  const input =
    document.getElementById("question");

  const message =
    input.value.trim();

  if (!message) {
    notify("Type a question first.");
    return;
  }

  document.getElementById("aiMessage").innerHTML = `
    <div class="message-icon">✦</div>

    <div>
      <strong>Assasson Pro</strong>
      <p>
        I received your question: "${escapeHTML(message)}"
      </p>
    </div>
  `;

  input.value = "";

  notify("Question received");
}


function handleEnter(event) {

  if (event.key === "Enter") {
    askAI();
  }

}


/* -----------------------------
   SHOP
----------------------------- */

function openShop() {

  notify("TechPro Shop is coming soon!");

}


/* -----------------------------
   STOCKS
----------------------------- */

function openStocks() {

  notify("Market Center is coming soon!");

}


/* -----------------------------
   UPDATES
----------------------------- */

function openUpdates() {

  notify("Tech Updates are coming soon!");

}


/* -----------------------------
   NAVIGATION
----------------------------- */

function scrollToSection(id) {

  const section =
    document.getElementById(id);

  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* -----------------------------
   NOTIFICATIONS
----------------------------- */

function notify(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2200);

}


/* -----------------------------
   SECURITY
----------------------------- */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}
