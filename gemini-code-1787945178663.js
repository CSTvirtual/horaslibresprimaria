document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('subjectSelect');
    const statsContainer = document.getElementById('statsContainer');
    const scheduleContainer = document.getElementById('scheduleContainer');

    const subjects = getUniqueSubjects();
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        selector.appendChild(option);
    });

    selector.addEventListener('change', (e) => {
        const selected = e.target.value;
        if (!selected) {
            scheduleContainer.innerHTML = '<p class="placeholder">Selecciona una asignatura arriba para consultar sus horas libres y ocupadas.</p>';
            statsContainer.innerHTML = '';
            return;
        }
        renderSchedule(selected);
    });
});

function getUniqueSubjects() {
    const subjects = new Set();
    Object.values(scheduleData).forEach(daySlots => {
        daySlots.forEach(slot => {
            ['1', '2', '3', '4', '5'].forEach(grade => {
                if (slot[grade] && slot[grade] !== 'Libre') {
                    subjects.add(slot[grade]);
                }
            });
        });
    });
    return Array.from(subjects).sort();
}

function renderSchedule(subject) {
    const scheduleContainer = document.getElementById('scheduleContainer');
    const statsContainer = document.getElementById('statsContainer');

    let totalFree = 0;
    let totalBusy = 0;
    let html = '';

    Object.entries(scheduleData).forEach(([day, slots]) => {
        html += `<div class="day-block"><h2 class="day-title">${day}</h2>`;
        html += `<table class="schedule-table"><thead><tr><th>Hora</th><th>Estado / Cursos a cargo</th></tr></thead><tbody>`;

        slots.forEach(slot => {
            const teachingGrades = ['1', '2', '3', '4', '5'].filter(g => slot[g] === subject);

            if (teachingGrades.length > 0) {
                totalBusy++;
                const courses = teachingGrades.map(g => `${g}° Primaria`).join(', ');
                html += `<tr><td>${slot.hora}</td><td><span class="badge busy">Ocupado (${courses})</span></td></tr>`;
            } else {
                totalFree++;
                html += `<tr><td>${slot.hora}</td><td><span class="badge free">HORA LIBRE</span></td></tr>`;
            }
        });

        html += `</tbody></table></div>`;
    });

    statsContainer.innerHTML = `
        <div class="stat-card free">
            <h3>Horas Libres Semanales</h3>
            <p>${totalFree}</p>
        </div>
        <div class="stat-card busy">
            <h3>Clases Asignadas</h3>
            <p>${totalBusy}</p>
        </div>
    `;

    scheduleContainer.innerHTML = html;
}