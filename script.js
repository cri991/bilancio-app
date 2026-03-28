// Funzione per mostrare le sezioni (adattala se la tua ha un nome diverso)
function showSection(sectionId) {
    // Nascondi tutte le sezioni
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    // Mostra quella selezionata
    document.getElementById(sectionId).style.display = 'block';
    
    if(sectionId === 'analisi-strategica') {
        renderAnalisiStrategica();
    }
}

// Logica di calcolo specifica
function renderAnalisiStrategica() {
    const pendenti = movimenti.filter(m => m.stato === 'pendente');
    const container = document.getElementById('lista-pendenti');
    container.innerHTML = '';

    let ePrev = 0, uPend = 0;

    pendenti.forEach(m => {
        const val = Number(m.valore);
        if (m.tipo === 'entrata') ePrev += val; else uPend += val;

        container.innerHTML += `
            <div class="flex justify-between p-3 border-b items-center">
                <span>${m.desc}</span>
                <span class="font-bold ${m.tipo === 'entrata' ? 'text-green-600' : 'text-red-600'}">
                    € ${val.toFixed(2)}
                </span>
            </div>
        `;
    });

    document.getElementById('strat-entrate').innerText = `€ ${ePrev.toFixed(2)}`;
    document.getElementById('strat-uscite').innerText = `€ ${uPend.toFixed(2)}`;
    const netto = ePrev - uPend;
    document.getElementById('strat-netto').innerText = `€ ${Math.abs(netto).toFixed(2)}`;
}
