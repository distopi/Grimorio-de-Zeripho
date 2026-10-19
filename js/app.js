// ==========================================
// DICIONÁRIO DE LIVROS (Adicione novas siglas aqui)
// ==========================================
const bookMapping = {
    "PHB'24": "Player’s Handbook (2024)",
    "XPHB": "Player’s Handbook (2024)",
    "PHB": "Player’s Handbook",
    "XGE": "Xanathar’s Guide to Everything",
    "TCE": "Tasha’s Cauldron of Everything",
    "EGW": "Explorer’s Guide to Wildemount",
    "MM": "Monster Manual",
    "DMG": "Dungeon Master's Guide",
    "FTD": "Fizban’s Treasury of Dragons",
    "MPMM": "Mordenkainen Presents: Monsters of the Multiverse",
    "CBT": "Cthulhu by Torchlight",
    "AU": "Arcane Unleashed",
    "VRGR": "Van Richten's Guide to Ravenloft",
    "ERLW": "Eberron: Rising from the Last War",
    "EFA": "Eberron: Forge of the Artificer",
    "RHW": "Ravenloft: Horrors Within",
    "illr": "The Illrigger Revised",
    "GH:PG'24": "Grim Hollow: Player's Guide (2024)",
    "TLOTRR": "The Lord of the Rings Roleplaying",
    "GH:MG'24": "Grim Hollow: Monster Guide (2024)",
    "GC:VSS'24": "Valda's Spire of Secrets (2024)",
    "HGTMH": "Heliana's Guide to Monster Hunting",
    "TMC'24": "The Magus Class (2024)",
    "TPC'24": "The Pugilist Class (2024)",
    "VtM:BB": "Vampire: The Masquerade - Blood & Betrayal"
};

// Renderizador da Tag de Livro com Tooltip
function renderSourceTag(sourceCode) {
    if (!sourceCode) return '';
    let fullName = bookMapping[sourceCode] || sourceCode;
    return `<span class="has-tooltip relative inline-block text-xs px-2 py-0.5 rounded font-mono cursor-pointer border shadow-sm" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--accent);">
        ${sourceCode}
        <span class="dnd-tooltip bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-center p-2 rounded-lg shadow-xl text-xs z-50 pointer-events-none" style="background-color: var(--bg-card); border: 1px solid var(--accent); color: var(--text-main);">
            ${fullName}
        </span>
    </span>`;
}

const db = window.dndData || {};

function aggregateSubclasses() {
    if (db.classes && db.subclasses) {
        db.classes.forEach(cls => {
            if (db.subclasses[cls.id]) {
                cls.subclasses = db.subclasses[cls.id];
            }
        });
    }
}

const glossary = {};
function buildGlossary() {
    Object.keys(db).forEach(category => {
        if (Array.isArray(db[category])) {
            db[category].forEach(item => {
                glossary[item.id] = {
                    title: item.name || item.title,
                    type: item.source || item.type || item.category || 'Compêndio',
                    desc: item.description || ''
                };
            });
        }
    });
}

function parseTooltips(text) {
    if (!text) return '';
    return text.replace(/\[\[(.*?)\]\]/g, (match, p1) => {
        let key = p1.toLowerCase().replace(/[^a-z0-9]/g, '');
        let foundKey = Object.keys(glossary).find(k => k.toLowerCase() === key || glossary[k].title.toLowerCase() === p1.toLowerCase());
        
        if (foundKey) {
            let item = glossary[foundKey];
            return `<span class="has-tooltip relative inline-block font-semibold cursor-pointer underline decoration-dotted" style="color: var(--accent);">${item.title}
                <span class="dnd-tooltip bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 border p-3 rounded-lg shadow-xl" style="background-color: var(--bg-card); border-color: var(--accent); color: var(--text-main);">
                    <span class="block font-bold font-rpg mb-1" style="color: var(--accent);">${item.title}</span>
                    <span class="block text-[10px] opacity-75 mb-1 uppercase">${item.type}</span>
                    <span>${item.desc.substring(0, 120)}...</span>
                </span>
            </span>`;
        }
        return `<span class="font-semibold" style="color: var(--accent);">${p1}</span>`;
    });
}

let currentTab = 'classes';
let favorites = JSON.parse(localStorage.getItem('dnd_favorites') || '[]');
let activeModalItem = null;

// Botão de Menu Mobile para as Abas
function toggleMobileNav() {
    const nav = document.getElementById('navContainer');
    nav.classList.toggle('hidden');
}

// Gestão de Tema Escuro/Claro Funcionando
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('dnd_theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
});

function updateThemeIcon(isDark) {
    themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun text-amber-500"></i>';
}

// Gestão de Cores Dinâmicas
const paletteToggle = document.getElementById('paletteToggle');
const colorDropdown = document.getElementById('colorDropdown');

paletteToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    colorDropdown.classList.toggle('hidden');
});
window.addEventListener('click', () => {
    colorDropdown.classList.add('hidden');
});
colorDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

function setAccentColor(colorHex) {
    document.documentElement.style.setProperty('--accent', colorHex);
    document.documentElement.style.setProperty('--accent-alpha', colorHex + '25');
    localStorage.setItem('dnd_accent', colorHex);
    colorDropdown.classList.add('hidden');
    renderCurrentTab(document.getElementById('globalSearch').value);
}

function setCustomAccent(colorHex) {
    setAccentColor(colorHex);
}

// Alternar Abas
function switchTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn px-3 py-1.5 rounded-lg font-rpg text-xs md:text-sm font-semibold opacity-75 hover:opacity-100 transition";
        btn.style.backgroundColor = "transparent";
        btn.style.color = "inherit";
    });
    event.currentTarget.className = "tab-btn px-3 py-1.5 rounded-lg font-rpg text-xs md:text-sm font-semibold text-white transition shadow";
    event.currentTarget.style.backgroundColor = "var(--accent)";
    renderCurrentTab();
}

// Renderizador Principal
function renderCurrentTab(searchTerm = '') {
    const container = document.getElementById('tabContent');
    container.innerHTML = '';

    if (currentTab === 'magias') {
        renderSpellsTab(container, searchTerm);
        return;
    }

    if (currentTab === 'favoritos') {
        renderFavorites(container);
        return;
    }

    if (currentTab === 'subclasses') {
        renderSubclassesTab(container, searchTerm);
        return;
    }

    if (currentTab === 'equipamentos') {
        renderEquipment(container, searchTerm);
        return;
    }

    let items = db[currentTab] || [];
    if (searchTerm) {
        items = items.filter(i => (i.name || i.title).toLowerCase().includes(searchTerm.toLowerCase()) || i.description.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (items.length === 0) {
        container.innerHTML = `<div class="text-center py-16 opacity-50 font-rpg">Nenhum registro encontrado nesta categoria.</div>`;
        return;
    }

    const grid = document.createElement('div');
    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

    items.forEach(item => {
        const isFav = favorites.includes(item.id);
        const card = document.createElement('div');
        card.className = "border rounded-xl p-5 transition flex flex-col justify-between shadow-lg relative group";
        card.style.backgroundColor = "var(--bg-card)";
        card.style.borderColor = "var(--border-color)";
        
        let typeBadge = item.type || item.category || 'Geral';
        let sourceTag = renderSourceTag(item.source);

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-3 gap-2 flex-wrap">
                    <span class="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold" style="background-color: var(--accent-alpha); color: var(--accent);">${typeBadge}</span>
                    <div class="flex items-center gap-2 ml-auto">
                        ${sourceTag}
                        <button onclick="toggleFavorite('${item.id}', event)" class="text-lg transition" style="color: var(--accent);">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                        </button>
                    </div>
                </div>
                <h3 class="text-xl font-bold font-rpg mb-2">${item.name || item.title}</h3>
                <p class="text-sm opacity-80 line-clamp-3 mb-4">${parseTooltips(item.description)}</p>
            </div>
            <button onclick="openDetail('${currentTab}', '${item.id}')" class="mt-2 w-full py-2 rounded-lg text-sm font-semibold transition font-rpg border" style="border-color: var(--border-color);">
                Ver Detalhes <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
        `;
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

// Aba de Subclasses
function renderSubclassesTab(container, searchTerm) {
    let allSubs = [];
    if (db.subclasses) {
        Object.keys(db.subclasses).forEach(clsId => {
            db.subclasses[clsId].forEach(sub => {
                allSubs.push({ ...sub, classId: clsId, className: clsId.charAt(0).toUpperCase() + clsId.slice(1) });
            });
        });
    }

    if (searchTerm) {
        allSubs = allSubs.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || (s.shortDesc && s.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    if (allSubs.length === 0) {
        container.innerHTML = `<div class="text-center py-16 opacity-50 font-rpg">Nenhuma subclasse cadastrada ainda.</div>`;
        return;
    }

    const grid = document.createElement('div');
    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

    allSubs.forEach(sub => {
        const isFav = favorites.includes(sub.id);
        const card = document.createElement('div');
        card.className = "border rounded-xl p-5 transition flex flex-col justify-between shadow-lg relative group cursor-pointer";
        card.style.backgroundColor = "var(--bg-card)";
        card.style.borderColor = "var(--border-color)";
        card.onclick = () => openSubclassModal(sub.classId, sub.id);

        let sourceTag = renderSourceTag(sub.source);

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-3 gap-2 flex-wrap">
                    <span class="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold" style="background-color: var(--accent-alpha); color: var(--accent);">Classe: ${sub.className}</span>
                    <div class="flex items-center gap-2 ml-auto">
                        ${sourceTag}
                        <button onclick="toggleFavorite('${sub.id}', event)" class="text-lg transition" style="color: var(--accent);">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                        </button>
                    </div>
                </div>
                <h3 class="text-xl font-bold font-rpg mb-2">${sub.name}</h3>
                <p class="text-sm opacity-80 line-clamp-3 mb-4">${parseTooltips(sub.shortDesc || sub.description)}</p>
            </div>
            <div class="w-full py-2 rounded-lg text-sm font-semibold transition font-rpg text-center border" style="border-color: var(--border-color);">
                Ver Recursos <i class="fa-solid fa-arrow-right ml-2"></i>
            </div>
        `;
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

// Favoritos
function renderFavorites(container) {
    let allFavItems = [];
    Object.keys(db).forEach(category => {
        if (Array.isArray(db[category])) {
            db[category].forEach(item => {
                if (favorites.includes(item.id)) {
                    allFavItems.push({ ...item, cat: category });
                }
            });
        }
    });

    if (allFavItems.length === 0) {
        container.innerHTML = `<div class="text-center py-16 opacity-50 font-rpg">Nenhum favorito salvo ainda.</div>`;
        return;
    }

    const grid = document.createElement('div');
    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

    allFavItems.forEach(item => {
        const card = document.createElement('div');
        card.className = "border rounded-xl p-5 transition flex flex-col justify-between shadow-lg";
        card.style.backgroundColor = "var(--bg-card)";
        card.style.borderColor = "var(--border-color)";

        let typeBadge = item.type || item.category || item.cat || 'Geral';
        let sourceTag = renderSourceTag(item.source);

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-3 gap-2 flex-wrap">
                    <span class="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold" style="background-color: var(--accent-alpha); color: var(--accent);">${typeBadge}</span>
                    <div class="flex items-center gap-2 ml-auto">
                        ${sourceTag}
                        <button onclick="toggleFavorite('${item.id}', event); renderCurrentTab();" class="text-lg transition" style="color: var(--accent);">
                            <i class="fa-solid fa-star"></i>
                        </button>
                    </div>
                </div>
                <h3 class="text-xl font-bold font-rpg mb-2">${item.name || item.title}</h3>
                <p class="text-sm opacity-80 line-clamp-3 mb-4">${parseTooltips(item.description)}</p>
            </div>
            <button onclick="openDetail('${item.cat}', '${item.id}')" class="w-full py-2 rounded-lg text-sm font-semibold transition font-rpg border" style="border-color: var(--border-color);">
                Ver Detalhes <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
        `;
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

// Equipamentos
function renderEquipment(container, searchTerm = '') {
    let items = db.equipamentos || [];
    
    if (searchTerm) {
        items = items.filter(i => 
            i.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            i.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const armors = items.filter(i => i.type === 'armor');
    const weapons = items.filter(i => i.type === 'weapon');

    container.innerHTML = `
        <div class="space-y-10">
            <!-- TABELA DE ARMADURAS -->
            <div>
                <h2 class="text-2xl font-bold font-rpg mb-4 flex items-center gap-2" style="color: var(--accent);">
                    <i class="fa-solid fa-shield-halved"></i> Armaduras
                </h2>
                <div class="overflow-x-auto border rounded-xl shadow-lg" style="background-color: var(--bg-card); border-color: var(--border-color);">
                    <table class="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                            <tr class="font-rpg border-b text-center md:text-left" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--accent);">
                                <th class="p-3.5">Armadura</th>
                                <th class="p-3.5">Classe de Armadura (CA)</th>
                                <th class="p-3.5 text-center">Força</th>
                                <th class="p-3.5 text-center">Furtividade</th>
                                <th class="p-3.5 text-center">Peso</th>
                                <th class="p-3.5 text-right">Custo</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y" style="border-color: var(--border-color);">
                            ${armors.length > 0 ? armors.map(eq => `
                                <tr class="hover:opacity-80 transition">
                                    <td class="p-3.5 font-semibold">${eq.name} <span class="block text-[10px] font-normal opacity-75">${eq.category}</span></td>
                                    <td class="p-3.5 font-medium" style="color: var(--accent);">${eq.ac}</td>
                                    <td class="p-3.5 text-center opacity-80">${eq.strength || '—'}</td>
                                    <td class="p-3.5 text-center opacity-80">${eq.stealth || '—'}</td>
                                    <td class="p-3.5 text-center opacity-80">${eq.weight}</td>
                                    <td class="p-3.5 text-right font-bold" style="color: var(--accent);">${eq.cost}</td>
                                </tr>
                            `).join('') : `<tr><td colspan="6" class="p-4 text-center opacity-50">Nenhuma armadura encontrada.</td></tr>`}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- TABELA DE ARMAS -->
            <div>
                <h2 class="text-2xl font-bold font-rpg mb-4 flex items-center gap-2" style="color: var(--accent);">
                    <i class="fa-solid fa-hand-fist"></i> Armas
                </h2>
                <div class="overflow-x-auto border rounded-xl shadow-lg" style="background-color: var(--bg-card); border-color: var(--border-color);">
                    <table class="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                            <tr class="font-rpg border-b" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--accent);">
                                <th class="p-3.5">Nome</th>
                                <th class="p-3.5">Dano</th>
                                <th class="p-3.5">Propriedades</th>
                                <th class="p-3.5 text-center">Maestria</th>
                                <th class="p-3.5 text-center">Peso</th>
                                <th class="p-3.5 text-right">Custo</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y" style="border-color: var(--border-color);">
                            ${weapons.length > 0 ? weapons.map(eq => `
                                <tr class="hover:opacity-80 transition">
                                    <td class="p-3.5 font-semibold">${eq.name} <span class="block text-[10px] font-normal opacity-75">${eq.category}</span></td>
                                    <td class="p-3.5 font-medium" style="color: var(--accent);">${eq.damage}</td>
                                    <td class="p-3.5 text-xs opacity-90">${eq.properties || '—'}</td>
                                    <td class="p-3.5 text-center font-semibold opacity-90">${eq.mastery || '—'}</td>
                                    <td class="p-3.5 text-center opacity-80">${eq.weight}</td>
                                    <td class="p-3.5 text-right font-bold" style="color: var(--accent);">${eq.cost}</td>
                                </tr>
                            `).join('') : `<tr><td colspan="6" class="p-4 text-center opacity-50">Nenhuma arma encontrada.</td></tr>`}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// Estado global para guardar os filtros ativos de magia
let spellFilters = {
    level: '',
    school: '',
    castingTime: '',
    concentration: '',
    class: ''
};

function renderSpellsTab(container, searchTerm = '') {
    let spells = db.magias || [];

    if (searchTerm) {
        spells = spells.filter(s => 
            s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            s.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (spellFilters.level !== '') {
        spells = spells.filter(s => s.level === parseInt(spellFilters.level));
    }
    if (spellFilters.school !== '') {
        spells = spells.filter(s => s.school && s.school.toLowerCase() === spellFilters.school.toLowerCase());
    }
    if (spellFilters.castingTime !== '') {
        spells = spells.filter(s => s.castingTime && s.castingTime.toLowerCase().includes(spellFilters.castingTime.toLowerCase()));
    }
    if (spellFilters.concentration !== '') {
        const isConc = spellFilters.concentration === 'true';
        spells = spells.filter(s => Boolean(s.concentration) === isConc);
    }
    if (spellFilters.class !== '') {
        spells = spells.filter(s => s.classes && s.classes.includes(spellFilters.class));
    }

    container.innerHTML = `
        <div class="space-y-6">
            <div class="p-4 rounded-xl border shadow-md space-y-3" style="background-color: var(--bg-card); border-color: var(--border-color);">
                <div class="flex items-center justify-between border-b pb-2" style="border-color: var(--border-color);">
                    <h3 class="font-rpg font-bold text-sm flex items-center gap-2" style="color: var(--accent);">
                        <i class="fa-solid fa-filter"></i> Filtros de Magias
                    </h3>
                    <button onclick="resetSpellFilters()" class="text-xs opacity-75 hover:opacity-100 transition underline">
                        Limpar Filtros
                    </button>
                </div>
                
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs">
                    <div>
                        <label class="block font-semibold mb-1 opacity-80">Nível</label>
                        <select onchange="updateSpellFilter('level', this.value)" class="w-full p-2 rounded border focus:outline-none" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--text-main);">
                            <option value="" ${spellFilters.level === '' ? 'selected' : ''}>Todos os Níveis</option>
                            <option value="0" ${spellFilters.level === '0' ? 'selected' : ''}>Truque (Level 0)</option>
                            <option value="1" ${spellFilters.level === '1' ? 'selected' : ''}>1º Nível</option>
                            <option value="2" ${spellFilters.level === '2' ? 'selected' : ''}>2º Nível</option>
                            <option value="3" ${spellFilters.level === '3' ? 'selected' : ''}>3º Nível</option>
                            <option value="4" ${spellFilters.level === '4' ? 'selected' : ''}>4º Nível</option>
                            <option value="5" ${spellFilters.level === '5' ? 'selected' : ''}>5º Nível</option>
                            <option value="6" ${spellFilters.level === '6' ? 'selected' : ''}>6º Nível</option>
                            <option value="7" ${spellFilters.level === '7' ? 'selected' : ''}>7º Nível</option>
                            <option value="8" ${spellFilters.level === '8' ? 'selected' : ''}>8º Nível</option>
                            <option value="9" ${spellFilters.level === '9' ? 'selected' : ''}>9º Nível</option>
                        </select>
                    </div>

                    <div>
                        <label class="block font-semibold mb-1 opacity-80">Escola</label>
                        <select onchange="updateSpellFilter('school', this.value)" class="w-full p-2 rounded border focus:outline-none" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--text-main);">
                            <option value="" ${spellFilters.school === '' ? 'selected' : ''}>Todas as Escolas</option>
                            <option value="Abjuration" ${spellFilters.school === 'Abjuration' ? 'selected' : ''}>Abjuration</option>
                            <option value="Conjuration" ${spellFilters.school === 'Conjuration' ? 'selected' : ''}>Conjuration</option>
                            <option value="Divination" ${spellFilters.school === 'Divination' ? 'selected' : ''}>Divination</option>
                            <option value="Enchantment" ${spellFilters.school === 'Enchantment' ? 'selected' : ''}>Enchantment</option>
                            <option value="Evocation" ${spellFilters.school === 'Evocation' ? 'selected' : ''}>Evocation</option>
                            <option value="Illusion" ${spellFilters.school === 'Illusion' ? 'selected' : ''}>Illusion</option>
                            <option value="Necromancy" ${spellFilters.school === 'Necromancy' ? 'selected' : ''}>Necromancy</option>
                            <option value="Transmutation" ${spellFilters.school === 'Transmutation' ? 'selected' : ''}>Transmutation</option>
                        </select>
                    </div>

                    <div>
                        <label class="block font-semibold mb-1 opacity-80">Tempo de Conjuração</label>
                        <select onchange="updateSpellFilter('castingTime', this.value)" class="w-full p-2 rounded border focus:outline-none" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--text-main);">
                            <option value="" ${spellFilters.castingTime === '' ? 'selected' : ''}>Qualquer Tempo</option>
                            <option value="Action" ${spellFilters.castingTime === 'Action' ? 'selected' : ''}>1 Ação</option>
                            <option value="Bonus Action" ${spellFilters.castingTime === 'Bonus Action' ? 'selected' : ''}>1 Ação Bônus</option>
                            <option value="Reaction" ${spellFilters.castingTime === 'Reaction' ? 'selected' : ''}>Reação</option>
                            <option value="Minute" ${spellFilters.castingTime === 'Minute' ? 'selected' : ''}>Minutos / Rituais</option>
                        </select>
                    </div>

                    <div>
                        <label class="block font-semibold mb-1 opacity-80">Concentração</label>
                        <select onchange="updateSpellFilter('concentration', this.value)" class="w-full p-2 rounded border focus:outline-none" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--text-main);">
                            <option value="" ${spellFilters.concentration === '' ? 'selected' : ''}>Ambos</option>
                            <option value="true" ${spellFilters.concentration === 'true' ? 'selected' : ''}>Requer Concentração</option>
                            <option value="false" ${spellFilters.concentration === 'false' ? 'selected' : ''}>Não Requer</option>
                        </select>
                    </div>

                    <div>
                        <label class="block font-semibold mb-1 opacity-80">Classe</label>
                        <select onchange="updateSpellFilter('class', this.value)" class="w-full p-2 rounded border focus:outline-none" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--text-main);">
                            <option value="" ${spellFilters.class === '' ? 'selected' : ''}>Todas as Classes</option>
                            <option value="Artificer" ${spellFilters.class === 'Artificer' ? 'selected' : ''}>Artificer</option>
                            <option value="Bard" ${spellFilters.class === 'Bard' ? 'selected' : ''}>Bard</option>
                            <option value="Cleric" ${spellFilters.class === 'Cleric' ? 'selected' : ''}>Cleric</option>
                            <option value="Druid" ${spellFilters.class === 'Druid' ? 'selected' : ''}>Druid</option>
                            <option value="Paladin" ${spellFilters.class === 'Paladin' ? 'selected' : ''}>Paladin</option>
                            <option value="Ranger" ${spellFilters.class === 'Ranger' ? 'selected' : ''}>Ranger</option>
                            <option value="Sorcerer" ${spellFilters.class === 'Sorcerer' ? 'selected' : ''}>Sorcerer</option>
                            <option value="Warlock" ${spellFilters.class === 'Warlock' ? 'selected' : ''}>Warlock</option>
                            <option value="Wizard" ${spellFilters.class === 'Wizard' ? 'selected' : ''}>Wizard</option>
                        </select>
                    </div>
                </div>
            </div>

            <div id="spellsGrid"></div>
        </div>
    `;

    const gridContainer = container.querySelector('#spellsGrid');

    if (spells.length === 0) {
        gridContainer.innerHTML = `<div class="text-center py-16 opacity-50 font-rpg">Nenhuma magia encontrada com os filtros selecionados.</div>`;
        return;
    }

    const grid = document.createElement('div');
    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

    spells.forEach(spell => {
        const isFav = favorites.includes(spell.id);
        const card = document.createElement('div');
        card.className = "border rounded-xl p-5 transition flex flex-col justify-between shadow-lg relative group";
        card.style.backgroundColor = "var(--bg-card)";
        card.style.borderColor = "var(--border-color)";

        let sourceTag = renderSourceTag(spell.source);
        let classesBadges = (spell.classes || []).map(c => `<span class="text-[10px] px-1.5 py-0.5 rounded border opacity-75" style="border-color: var(--border-color);">${c}</span>`).join(' ');

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-2 gap-2 flex-wrap">
                    <span class="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold" style="background-color: var(--accent-alpha); color: var(--accent);">${spell.type || 'Magia'}</span>
                    <div class="flex items-center gap-2 ml-auto">
                        ${sourceTag}
                        <button onclick="toggleFavorite('${spell.id}', event)" class="text-lg transition" style="color: var(--accent);">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                        </button>
                    </div>
                </div>

                <h3 class="text-xl font-bold font-rpg mb-1">${spell.name}</h3>

                <div class="flex flex-wrap gap-2 text-xs opacity-80 mb-3 border-b pb-2" style="border-color: var(--border-color);">
                    <span><i class="fa-regular fa-clock mr-1"></i>${spell.castingTime || '—'}</span>
                    <span><i class="fa-solid fa-ruler mr-1"></i>${spell.range || '—'}</span>
                    ${spell.concentration ? `<span class="font-bold" style="color: var(--accent);"><i class="fa-solid fa-brain mr-1"></i>Concentração</span>` : ''}
                </div>

                <p class="text-sm opacity-80 line-clamp-3 mb-3">${parseTooltips(spell.description)}</p>

                ${classesBadges ? `<div class="flex flex-wrap gap-1 mb-3">${classesBadges}</div>` : ''}
            </div>
            <button onclick="openDetail('magias', '${spell.id}')" class="mt-2 w-full py-2 rounded-lg text-sm font-semibold transition font-rpg border" style="border-color: var(--border-color);">
                Ver Detalhes <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
        `;
        grid.appendChild(card);
    });

    gridContainer.appendChild(grid);
}

function updateSpellFilter(key, value) {
    spellFilters[key] = value;
    renderSpellsTab(document.getElementById('tabContent'), document.getElementById('globalSearch').value);
}

function resetSpellFilters() {
    spellFilters = { level: '', school: '', castingTime: '', concentration: '', class: '' };
    renderSpellsTab(document.getElementById('tabContent'), document.getElementById('globalSearch').value);
}

function toggleFavorite(id, event) {
    event.stopPropagation();
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('dnd_favorites', JSON.stringify(favorites));
    renderCurrentTab(document.getElementById('globalSearch').value);
}

function toggleModalFavorite() {
    if (!activeModalItem) return;
    toggleFavorite(activeModalItem.id, { stopPropagation: () => {} });
    updateModalFavIcon();
}

function updateModalFavIcon() {
    const btn = document.getElementById('modalFavBtn');
    const isFav = favorites.includes(activeModalItem.id);
    btn.innerHTML = `<i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-star" style="${isFav ? 'color: var(--accent);' : ''}"></i>`;
}

// Subclass Modal
function openSubclassModal(classId, subclassId) {
    const clsSubclasses = db.subclasses ? db.subclasses[classId] : null;
    if (!clsSubclasses) return;

    const sub = clsSubclasses.find(s => s.id === subclassId);
    if (!sub) return;

    document.getElementById('subModalTitle').innerText = sub.name;
    
    let bodyHtml = `<p class="leading-relaxed mb-6 p-4 rounded-xl border" style="background-color: var(--bg-main); border-color: var(--border-color);">${parseTooltips(sub.shortDesc || sub.description)}</p>`;

    if (sub.features && sub.features.length > 0) {
        bodyHtml += `<h4 class="font-rpg text-lg font-bold mb-4 border-b pb-2" style="color: var(--accent); border-color: var(--border-color);">Subclass Features</h4>`;
        sub.features.forEach(feat => {
            bodyHtml += `
                <div class="p-4 rounded-r-xl border-y border-r mb-4 shadow-md" style="background-color: var(--bg-main); border-color: var(--border-color); border-left: 4px solid var(--accent);">
                    <div class="flex items-center justify-between mb-2">
                        <h5 class="font-rpg font-bold text-base" style="color: var(--accent);">${feat.title}</h5>
                        <span class="text-xs font-semibold px-2 py-0.5 rounded" style="background-color: var(--accent-alpha); color: var(--accent);">Level ${feat.level}</span>
                    </div>
                    <div class="text-xs leading-relaxed opacity-90">${parseTooltips(feat.desc)}</div>
                </div>
            `;
        });
    }

    document.getElementById('subModalBody').innerHTML = bodyHtml;
    document.getElementById('subModal').classList.remove('hidden');
}

function closeSubModal() {
    document.getElementById('subModal').classList.add('hidden');
}

// Modal Principal
function openDetail(category, id) {
    const item = db[category].find(i => i.id === id);
    if (!item) return;
    activeModalItem = item;

    document.getElementById('modalTitle').innerText = item.name || item.title;
    updateModalFavIcon();

    let bodyHtml = '';

    if (category === 'classes') {
        bodyHtml += `
            <div class="border rounded-xl p-5 mb-6 text-sm shadow-inner" style="background-color: var(--bg-main); border-color: var(--border-color);">
                <h4 class="font-rpg text-xl font-bold mb-3 border-b pb-2" style="border-color: var(--border-color);">Core Traits</h4>
                <div class="space-y-3">
                    <div><strong class="opacity-90">Primary Ability:</strong> <span class="font-medium" style="color: var(--accent);">${item.primaryAttr}</span></div>
                    <div>
                        <strong class="opacity-90">Hit Point Die:</strong> <span class="font-medium" style="color: var(--accent);">${item.hitDice}</span><br>
                        <strong class="opacity-90">Hit Points at Level 1:</strong> ${item.hitPointsLevel1}<br>
                        <strong class="opacity-90">Hit Points per additional Level:</strong> ${item.hitPointsAdditional}
                    </div>
                    <div><strong class="opacity-90">Saving Throw Proficiencies:</strong> <span class="font-medium" style="color: var(--accent);">${item.savingThrows}</span></div>
                    <div><strong class="opacity-90">Skill Proficiencies:</strong> <span class="italic opacity-80">${parseTooltips(item.skillProficiencies)}</span></div>
                    <div><strong class="opacity-90">Weapon Proficiencies:</strong> <span class="font-medium" style="color: var(--accent);">${item.weaponProficiencies}</span></div>
                    <div><strong class="opacity-90">Starting Equipment:</strong> <span class="italic opacity-80">${parseTooltips(item.startingEquipment)}</span></div>
                </div>
                <h4 class="font-rpg text-lg font-bold mt-6 mb-2 border-b pb-1" style="border-color: var(--border-color);">Multiclassing</h4>
                <p class="text-xs opacity-75 leading-relaxed">${item.multiclassing}</p>
            </div>
        `;

        if (item.levels && item.levels.length > 0) {
            const isSpellcaster = item.levels.some(l => l.slots);
            const extraClassCols = item.customColumns || [];
            
            let maxSpellLevel = 0;
            if (isSpellcaster) {
                item.levels.forEach(lvl => {
                    if (lvl.slots) {
                        Object.keys(lvl.slots).forEach(lvlNum => {
                            const n = parseInt(lvlNum);
                            if (n > maxSpellLevel) maxSpellLevel = n;
                        });
                    }
                });
            }
            if (maxSpellLevel < 5 && isSpellcaster) maxSpellLevel = 5;

            bodyHtml += `
                <div class="mb-8">
                    <h4 class="font-rpg text-xl font-bold mb-3 flex items-center gap-2" style="color: var(--accent);">
                        <i class="fa-solid fa-table-list"></i> ${item.name} Class Table
                    </h4>
                    <div class="overflow-x-auto border rounded-xl shadow-lg" style="background-color: var(--bg-main); border-color: var(--border-color);">
                        <table class="w-full text-center text-xs border-collapse">
                            <thead>
                                <tr class="font-rpg border-b" style="background-color: var(--bg-card); border-color: var(--border-color); color: var(--accent);">
                                    <th class="p-2.5 text-left">Level</th>
                                    <th class="p-2.5">Prof. Bonus</th>
                                    <th class="p-2.5 text-left">Class Features</th>
                                    ${extraClassCols.map(col => `<th class="p-2.5">${col}</th>`).join('')}
                                    ${isSpellcaster ? `
                                        <th class="p-2.5">Cantrips</th>
                                        <th class="p-2.5">Prepared Spells</th>
                                        <th class="p-2.5 border-l" style="border-color: var(--border-color);" colspan="${maxSpellLevel}">— Spell Slots per Spell Level —</th>
                                    ` : ''}
                                </tr>
                                ${isSpellcaster ? `
                                    <tr class="text-[11px] border-b" style="background-color: var(--bg-card); border-color: var(--border-color); opacity: 0.8;">
                                        <th colspan="${3 + extraClassCols.length + 2}"></th>
                                        ${Array.from({length: maxSpellLevel}, (_, i) => `<th class="p-1.5 ${i === 0 ? 'border-l' : ''}" style="border-color: var(--border-color); color: var(--accent);">${i+1}º</th>`).join('')}
                                    </tr>
                                ` : ''}
                            </thead>
                            <tbody class="divide-y" style="border-color: var(--border-color);">
                                ${item.levels.map((lvl) => {
                                    const slots = lvl.slots || {};
                                    return `
                                        <tr class="hover:opacity-75 transition">
                                            <td class="p-2 font-bold text-left" style="color: var(--accent);">${lvl.level}</td>
                                            <td class="p-2">${lvl.pb}</td>
                                            <td class="p-2 text-left font-medium">${parseTooltips(lvl.features)}</td>${extraClassCols.map(colKey => {
                                                const keyMap = { 
                                            "Plans Known": lvl.plansKnown, 
        "Magic Items": lvl.magicItems,
        "Risk Dice": lvl.riskDice,
        "Weapon Mastery": lvl.weaponMastery,
        "Seals": lvl.seals,
        "Seal Damage": lvl.sealDamage,
        "Interdict Boons": lvl.interdictBoons,
        "Infernal Conduit Dice": lvl.infernalConduitDice,
        "Rages": lvl.rages,
        "Rage Damage": lvl.rageDamage,
        "Bardic Die": lvl.bardicDie,
        "Channel Divinity": lvl.channelDivinity,
        "Wild Shape": lvl.wildShape,
        "Martial Arts": lvl.martialArts,
        "Focus Points": lvl.focusPoints,
        "Unarmored Movement": lvl.unarmoredMovement,
        "Favored Enemy": lvl.favoredEnemy,
        "Sneak Attack": lvl.sneakAttack,
        "Sorcery Points": lvl.sorceryPoints,
        "Invocations": lvl.invocations,
        "Slot Level": lvl.slotLevel,
        "Cantrips Known": lvl.cantrips,
        "Theories Known": lvl.theoriesKnown,
        "Craft Slots": lvl.craftSlots,
        "Fisticuffs": lvl.fisticuffs,
        "Moxie Points": lvl.moxiePoints,
        "Blood Points": lvl.bloodPoints,
        "Feed Dice": lvl.feedDice
                                                };
                                                return `<td class="p-2">${keyMap[colKey] || '—'}</td>`;
                                            }).join('')}
                                            ${isSpellcaster ? `
                                                <td class="p-2">${lvl.cantrips || '—'}</td>
                                                <td class="p-2">${lvl.prepared || '—'}</td>
                                                ${Array.from({length: maxSpellLevel}, (_, i) => `<td class="p-2 ${i === 0 ? 'border-l' : ''}" style="border-color: var(--border-color);">${slots[i+1] || '—'}</td>`).join('')}
                                            ` : ''}
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }
    }

    if (category === 'magias') {
        let classesBadges = (item.classes || []).map(c => `<span class="text-xs px-2 py-0.5 rounded border font-semibold" style="border-color: var(--border-color); color: var(--accent); background-color: var(--accent-alpha);">${c}</span>`).join(' ');
        
        bodyHtml += `
            <div class="border rounded-xl p-5 mb-6 text-sm shadow-inner space-y-3" style="background-color: var(--bg-main); border-color: var(--border-color);">
                <h4 class="font-rpg text-xl font-bold mb-3 border-b pb-2" style="border-color: var(--border-color);">Propriedades da Magia</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b" style="border-color: var(--border-color);">
                    <div><strong class="opacity-90">Tipo / Nível:</strong> <span class="font-medium" style="color: var(--accent);">${item.type || '—'}</span></div>
                    <div><strong class="opacity-90">Tempo de Conjuração:</strong> <span class="font-medium">${item.castingTime || '—'}</span></div>
                    <div><strong class="opacity-90">Alcance:</strong> <span class="font-medium">${item.range || '—'}</span></div>
                    <div><strong class="opacity-90">Componentes:</strong> <span class="font-medium">${item.components || '—'}</span></div>
                    <div><strong class="opacity-90">Duração:</strong> <span class="font-medium">${item.duration || '—'}</span></div>
                    <div><strong class="opacity-90">Concentração:</strong> <span class="font-medium" style="color: ${item.concentration ? 'var(--accent)' : 'inherit'};">${item.concentration ? 'Sim' : 'Não'}</span></div>
                </div>
                ${classesBadges ? `
                    <div>
                        <strong class="opacity-90 block mb-2">Classes Aptas:</strong>
                        <div class="flex flex-wrap gap-1.5">${classesBadges}</div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    if (item.description) {
        bodyHtml += `<div class="leading-relaxed mb-6 p-4 rounded-xl border" style="background-color: var(--bg-main); border-color: var(--border-color);">${parseTooltips(item.description)}</div>`;
    }

    if (category === 'classes' && item.featuresList) {
        bodyHtml += `<h4 class="font-rpg text-xl font-bold mb-4 border-b pb-2" style="color: var(--accent); border-color: var(--border-color);"><i class="fa-solid fa-scroll"></i> Class Features</h4>`;
        item.featuresList.forEach(feat => {
            bodyHtml += `
                <div class="p-4 rounded-r-xl border-y border-r mb-4 shadow-md" style="background-color: var(--bg-main); border-color: var(--border-color); border-left: 4px solid var(--accent);">
                    <div class="flex items-center justify-between mb-2">
                        <h5 class="font-rpg font-bold text-lg" style="color: var(--accent);">${feat.title}</h5>
                        <span class="text-xs font-semibold px-2.5 py-0.5 rounded" style="background-color: var(--accent-alpha); color: var(--accent);">Level ${feat.level}</span>
                    </div>
                    <div class="text-sm leading-relaxed opacity-90">${parseTooltips(feat.desc)}</div>
                </div>
            `;
        });
    }

    if (item.traits && item.traits.length > 0) {
        let sectionTitle = 'Traits';
        let sectionIcon = 'fa-list';
        
        if (category === 'racas') {
            sectionTitle = 'Racial Traits';
            sectionIcon = 'fa-dna';
        } else if (category === 'talentos') {
            sectionTitle = 'Feat Features';
            sectionIcon = 'fa-medal';
        }

        bodyHtml += `<h4 class="font-rpg text-xl font-bold mb-4 border-b pb-2" style="color: var(--accent); border-color: var(--border-color);"><i class="fa-solid ${sectionIcon}"></i> ${sectionTitle}</h4>`;
        item.traits.forEach(trait => {
            bodyHtml += `
                <div class="p-4 rounded-r-xl border-y border-r mb-4 shadow-md" style="background-color: var(--bg-main); border-color: var(--border-color); border-left: 4px solid var(--accent);">
                    <div class="flex items-center justify-between mb-2">
                        <h5 class="font-rpg font-bold text-lg" style="color: var(--accent);">${trait.title}</h5>
                    </div>
                    <div class="text-sm leading-relaxed opacity-90">${parseTooltips(trait.desc)}</div>
                </div>
            `;
        });
    }

    if (category === 'classes' && item.subclasses && item.subclasses.length > 0) {
        bodyHtml += `<h4 class="font-rpg text-xl font-bold mt-8 mb-4 border-b pb-2" style="color: var(--accent); border-color: var(--border-color);"><i class="fa-solid fa-hat-wizard"></i> Subclasses</h4>`;
        item.subclasses.forEach(sub => {
            bodyHtml += `
                <div onclick="openSubclassModal('${item.id}', '${sub.id}')" class="border p-5 rounded-xl mb-4 cursor-pointer transition shadow-md group" style="background-color: var(--bg-main); border-color: var(--border-color);">
                    <div class="flex justify-between items-center mb-2">
                        <h5 class="font-rpg font-bold text-lg transition" style="color: var(--accent);">${sub.name}</h5>
                        <span class="text-xs transition font-semibold" style="color: var(--accent);">Ver Recursos completos <i class="fa-solid fa-arrow-right ml-1"></i></span>
                    </div>
                    <p class="text-sm opacity-75 leading-relaxed">${parseTooltips(sub.shortDesc || sub.description)}</p>
                </div>
            `;
        });
    }
    
    document.getElementById('modalBody').innerHTML = bodyHtml;
    document.getElementById('detailModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
    activeModalItem = null;
}

document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

document.getElementById('subModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeSubModal();
});

document.getElementById('globalSearch').addEventListener('input', (e) => {
    const query = e.target.value;
    if (currentTab !== 'favoritos' && currentTab !== 'equipamentos') {
        renderCurrentTab(query);
    } else if (currentTab === 'equipamentos') {
        renderEquipment(document.getElementById('tabContent'), query);
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('dnd_theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
    } else {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    }

    const savedAccent = localStorage.getItem('dnd_accent');
    if (savedAccent) {
        setAccentColor(savedAccent);
    }
    aggregateSubclasses();
    buildGlossary();
    renderCurrentTab();
});