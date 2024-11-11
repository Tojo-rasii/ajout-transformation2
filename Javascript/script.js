const toggle = document.getElementById('toggle');
const pop = document.getElementById('pop-show');
const inptDuree = document.getElementById('duree');
const label1 = document.getElementsByClassName('.label-span');

// Gestion de l'affichage du popup
toggle.addEventListener('input', (e) => {
    pop.style.display = e.target.checked ? 'block' : 'none';
});

// NAVIGATION TABS
const tabs = document.querySelectorAll("#nav-tabs-dashboard .tab");
const contentSections = document.querySelectorAll("#tab-content .content-section");

// Fonction pour activer l'onglet et mettre à jour l'indicateur
function activateTab(tab) {
    // Retirer 'active' des autres onglets et ajouter à l'onglet cliqué
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Affiche la section de contenu correspondante
    const target = tab.getAttribute("data-target");
    contentSections.forEach(section => {
        section.classList.remove("active");
        if (section.id === `content-${target}`) {
            section.classList.add("active");
        }
    });
}

// Gestion du clic sur les onglets
tabs.forEach(tab => {
    tab.addEventListener("click", () => activateTab(tab));
});


