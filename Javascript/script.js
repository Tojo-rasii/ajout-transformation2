const toggle = document.getElementById('toggle');
const pop = document.getElementById('pop-show');
const inptDuree = document.getElementById('duree');
const label1 = document.getElementsByClassName('.label-span');

toggle.addEventListener('input', (e) => {
    const value = e.target.checked;
    if (value === true) {
        pop.style.display = 'block';
    } else {
        pop.style.display = 'none';

    }
})