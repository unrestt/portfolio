const button = document.getElementById('down-project');
const rows = document.querySelectorAll('.row-project');
const container = document.getElementById("projects-section");

button.addEventListener('click', () => {
    let hiddenRows = Array.from(rows).slice(1).filter(row => !row.classList.contains('show'));

    if (hiddenRows.length > 0) {
        const row = hiddenRows[0];
        row.style.maxHeight = row.scrollHeight + "px";
        row.classList.add('show');
    } else {
        rows.forEach((row, index) => {
            if (index !== 0) {
                row.style.maxHeight = null;
                row.classList.remove('show');
            }
        });
        container.scrollIntoView({ behavior: 'smooth' });
    }

    const allShown = Array.from(rows).slice(1).every(row => row.classList.contains('show'));

    if (allShown) {
        button.classList.add('all-shown');
    } else {
        button.classList.remove('all-shown');
    }
});
