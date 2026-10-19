// ==========================================
// CENTRALIZADOR DE CONTEÚDO (D&D 5e)
// Adicione novos arquivos de classes ou itens aqui!
// ==========================================
const contentFiles = [
    // Classes
    "js/data/classes/wizard.js",
    "js/data/classes/fighter.js",
    "js/data/classes/artificer.js",
    "js/data/classes/gunslinger.js",
    "js/data/classes/monster-hunter.js",
    "js/data/classes/tamer.js",
    "js/data/classes/illrigger.js",
    "js/data/classes/barbarian.js",
    "js/data/classes/bard.js",
    "js/data/classes/cleric.js",
    "js/data/classes/druid.js",
    "js/data/classes/monk.js",
    "js/data/classes/paladin.js",
    "js/data/classes/ranger.js",
    "js/data/classes/rogue.js",
    "js/data/classes/sorcerer.js",
    "js/data/classes/warlock.js",
    "js/data/classes/apothecary.js",
    "js/data/classes/captain.js",
    "js/data/classes/champion.js",
    "js/data/classes/messenger.js",
    "js/data/classes/scholar.js",
    "js/data/classes/treasure_hunter.js",
    "js/data/classes/warden.js",
    "js/data/classes/magus.js",
    "js/data/classes/pugilist.js",
    "js/data/classes/kindred.js",

    // Subclasses de Mago
    "js/data/subclasses/wizard/school-of-abjuration.js",
    "js/data/subclasses/wizard/bibliomancy.js",

    // Subclasses de Guerreiro
    "js/data/subclasses/fighter/arcane-archer.js", // <--- Adicionado aqui!

    // Outros Compêndios
    "js/data/racas.js",
    "js/data/talentos.js",
    "js/data/opcoes.js",
    "js/data/antecedentes.js",
    "js/data/magias.js",
    "js/data/itensMagicos.js",
    "js/data/equipamentos.js"
];

// Carrega todos os arquivos dinamicamente em ordem
contentFiles.forEach(file => {
    document.write(`<script src="${file}"></script>`);
});