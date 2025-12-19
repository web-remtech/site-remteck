// Menu burger
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Année automatique dans le footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Gestion simple du formulaire (sans back-end)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Merci de remplir au minimum votre nom, votre e-mail et une description du problème.";
        formMessage.className = "form-message error";
        return;
    }

    // Ici, plus tard, tu pourras envoyer les données vers un serveur ou un mail
    formMessage.textContent = "Merci " + name + " ! Votre demande a bien été enregistrée. Je vous répondrai dès que possible.";
    formMessage.className = "form-message success";

    contactForm.reset();
});