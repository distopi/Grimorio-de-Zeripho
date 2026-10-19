window.dndData = window.dndData || {};
window.dndData.equipamentos = [
    // ==================== ARMADURAS ====================
    // Armadura Leve
    { id: "acolchoada", type: "armor", name: "Acolchoada", category: "Armadura Leve", ac: "11 + modificador de Des", strength: "—", stealth: "Desvantagem", weight: "4 kg", cost: "5 PO" },
    { id: "couro", type: "armor", name: "Couro", category: "Armadura Leve", ac: "11 + modificador de Des", strength: "—", stealth: "—", weight: "5 kg", cost: "10 PO" },
    { id: "couroBatido", type: "armor", name: "Couro Batido", category: "Armadura Leve", ac: "12 + modificador de Des", strength: "—", stealth: "—", weight: "6,5 kg", cost: "45 PO" },

    // Armadura Média
    { id: "gibaoDePeles", type: "armor", name: "Gibão de Peles", category: "Armadura Média", ac: "12 + modificador de Des (máx. 2)", strength: "—", stealth: "—", weight: "6 kg", cost: "10 PO" },
    { id: "cotaDeMalhaParcial", type: "armor", name: "Cota de Malha Parcial", category: "Armadura Média", ac: "13 + modificador de Des (máx. 2)", strength: "—", stealth: "—", weight: "10 kg", cost: "50 PO" },
    { id: "lorigaDeEscamas", type: "armor", name: "Loriga de Escamas", category: "Armadura Média", ac: "14 + Modificador de Des (máx. 2)", strength: "—", stealth: "Desvantagem", weight: "22 kg", cost: "50 PO" },
    { id: "couracaPeitoral", type: "armor", name: "Couraça Peitoral", category: "Armadura Média", ac: "14 + Modificador de Des (máx. 2)", strength: "—", stealth: "—", weight: "10 kg", cost: "400 PO" },
    { id: "placasParcial", type: "armor", name: "Placas Parcial", category: "Armadura Média", ac: "15 + Modificador de Des (máx. 2)", strength: "—", stealth: "Desvantagem", weight: "20 kg", cost: "750 PO" },

    // Armadura Pesada
    { id: "cotaDeAneis", type: "armor", name: "Cota de Anéis", category: "Armadura Pesada", ac: "14", strength: "—", stealth: "Desvantagem", weight: "20 kg", cost: "30 PO" },
    { id: "cotaDeMalha", type: "armor", name: "Cota de Malha", category: "Armadura Pesada", ac: "16", strength: "For 13", stealth: "Desvantagem", weight: "27 kg", cost: "75 PO" },
    { id: "armaduraDeTalas", type: "armor", name: "Armadura de Talas", category: "Armadura Pesada", ac: "17", strength: "For 15", stealth: "Desvantagem", weight: "30 kg", cost: "200 PO" },
    { id: "placas", type: "armor", name: "Placas", category: "Armadura Pesada", ac: "18", strength: "For 15", stealth: "Desvantagem", weight: "32 kg", cost: "1.500 PO" },

    // Escudo
    { id: "escudo", type: "armor", name: "Escudo", category: "Escudo", ac: "+2", strength: "—", stealth: "—", weight: "3 kg", cost: "10 PO" },

    // ==================== ARMAS ====================
    // Armas Simples Corpo a Corpo
    { id: "adaga", type: "weapon", name: "Adaga", category: "Armas Simples Corpo a Corpo", damage: "1d4 Perfurante", properties: "Acuidade, Arremesso (Alcance 6/18), Leve", mastery: "Ágil", weight: "0,5 kg", cost: "2 PO" },
    { id: "azagaia", type: "weapon", name: "Azagaia", category: "Armas Simples Corpo a Corpo", damage: "1d6 Perfurante", properties: "Arremesso (Alcance 9/36)", mastery: "Lentidão", weight: "1 kg", cost: "5 PP" },
    { id: "cajado", type: "weapon", name: "Cajado", category: "Armas Simples Corpo a Corpo", damage: "1d6 Contundente", properties: "Versátil (1d8)", mastery: "Derrubar", weight: "2 kg", cost: "2 PP" },
    { id: "clava", type: "weapon", name: "Clava", category: "Armas Simples Corpo a Corpo", damage: "1d4 Contundente", properties: "Leve", mastery: "Lentidão", weight: "1 kg", cost: "1 PP" },
    { id: "clavaGrande", type: "weapon", name: "Clava Grande", category: "Armas Simples Corpo a Corpo", damage: "1d8 Contundente", properties: "Duas Mãos", mastery: "Empurrar", weight: "5 kg", cost: "2 PP" },
    { id: "foice", type: "weapon", name: "Foice", category: "Armas Simples Corpo a Corpo", damage: "1d4 Cortante", properties: "Leve", mastery: "Ágil", weight: "1 kg", cost: "1 PO" },
    { id: "lanca", type: "weapon", name: "Lança", category: "Armas Simples Corpo a Corpo", damage: "1d6 Perfurante", properties: "Arremesso (Alcance 6/18), Versátil (1d8)", mastery: "Drenar", weight: "1,5 kg", cost: "1 PO" },
    { id: "maca", type: "weapon", name: "Maça", category: "Armas Simples Corpo a Corpo", damage: "1d6 Contundente", properties: "—", mastery: "Drenar", weight: "2 kg", cost: "5 PO" },
    { id: "machadinha", type: "weapon", name: "Machadinha", category: "Armas Simples Corpo a Corpo", damage: "1d6 Cortante", properties: "Arremesso (Alcance 6/18), Leve", mastery: "Afligir", weight: "1 kg", cost: "5 PO" },
    { id: "marteloLeve", type: "weapon", name: "Martelo Leve", category: "Armas Simples Corpo a Corpo", damage: "1d4 Contundente", properties: "Arremesso (Alcance 6/18), Leve", mastery: "Ágil", weight: "1 kg", cost: "2 PO" },

    // Armas Simples à Distância
    { id: "arcoCurto", type: "weapon", name: "Arco Curto", category: "Armas Simples à Distância", damage: "1d6 Perfurante", properties: "Duas Mãos, Munição (Alcance 24/96; Flecha)", mastery: "Afligir", weight: "1 kg", cost: "25 PO" },
    { id: "bestaLeve", type: "weapon", name: "Besta Leve", category: "Armas Simples à Distância", damage: "1d8 Perfurante", properties: "Duas Mãos, Munição (Alcance 24/96; Virote), Recarga", mastery: "Lentidão", weight: "2,5 kg", cost: "25 PO" },
    { id: "dardo", type: "weapon", name: "Dardo", category: "Armas Simples à Distância", damage: "1d4 Perfurante", properties: "Acuidade, Arremesso (Alcance 6/18)", mastery: "Afligir", weight: "150 g", cost: "5 PC" },
    { id: "funda", type: "weapon", name: "Funda", category: "Armas Simples à Distância", damage: "1d4 Contundente", properties: "Munição (Alcance 9/36; Bala)", mastery: "Lentidão", weight: "—", cost: "1 PP" },

    // Armas Marciais Corpo a Corpo
    { id: "alabarda", type: "weapon", name: "Alabarda", category: "Armas Marciais Corpo a Corpo", damage: "1d10 Cortante", properties: "Duas Mãos, Extensão, Pesada", mastery: "Trespassar", weight: "3 kg", cost: "20 PO" },
    { id: "chicote", type: "weapon", name: "Chicote", category: "Armas Marciais Corpo a Corpo", damage: "1d4 Cortante", properties: "Acuidade, Extensão", mastery: "Lentidão", weight: "1,5 kg", cost: "2 PO" },
    { id: "cimitarra", type: "weapon", name: "Cimitarra", category: "Armas Marciais Corpo a Corpo", damage: "1d6 Cortante", properties: "Acuidade, Leve", mastery: "Ágil", weight: "1,5 kg", cost: "25 PO" },
    { id: "espadaCurta", type: "weapon", name: "Espada Curta", category: "Armas Marciais Corpo a Corpo", damage: "1d6 Perfurante", properties: "Acuidade, Leve", mastery: "Afligir", weight: "1 kg", cost: "10 PO" },
    { id: "espadaGrande", type: "weapon", name: "Espada Grande", category: "Armas Marciais Corpo a Corpo", damage: "2d6 Cortante", properties: "Duas Mãos, Pesada", mastery: "Garantido", weight: "3 kg", cost: "50 PO" },
    { id: "espadaLonga", type: "weapon", name: "Espada Longa", category: "Armas Marciais Corpo a Corpo", damage: "1d8 Cortante", properties: "Versátil (1d10)", mastery: "Drenar", weight: "1,5 kg", cost: "15 PO" },
    { id: "glaive", type: "weapon", name: "Glaive", category: "Armas Marciais Corpo a Corpo", damage: "1d10 Cortante", properties: "Duas Mãos, Extensão, Pesada", mastery: "Garantido", weight: "3 kg", cost: "20 PO" },
    { id: "lancaDeMontaria", type: "weapon", name: "Lança de Montaria", category: "Armas Marciais Corpo a Corpo", damage: "1d10 Perfurante", properties: "Duas Mãos (a menos que montado), Extensão, Pesada", mastery: "Derrubar", weight: "3 kg", cost: "10 PO" },
    { id: "lancaLonga", type: "weapon", name: "Lança Longa", category: "Armas Marciais Corpo a Corpo", damage: "1d10 Perfurante", properties: "Duas Mãos, Extensão, Pesada", mastery: "Empurrar", weight: "9 kg", cost: "5 PO" },
    { id: "macaEstrela", type: "weapon", name: "Maça Estrela", category: "Armas Marciais Corpo a Corpo", damage: "1d8 Perfurante", properties: "—", mastery: "Drenar", weight: "2 kg", cost: "15 PO" },
    { id: "machadoDeBatalha", type: "weapon", name: "Machado de Batalha", category: "Armas Marciais Corpo a Corpo", damage: "1d8 Cortante", properties: "Versátil (1d10)", mastery: "Derrubar", weight: "2,5 kg", cost: "10 PO" },
    { id: "machadoGrande", type: "weapon", name: "Machado Grande", category: "Armas Marciais Corpo a Corpo", damage: "1d12 Cortante", properties: "Duas Mãos, Pesada", mastery: "Trespassar", weight: "3,5 kg", cost: "30 PO" },
    { id: "malho", type: "weapon", name: "Malho", category: "Armas Marciais Corpo a Corpo", damage: "2d6 Contundente", properties: "Duas Mãos, Pesada", mastery: "Derrubar", weight: "5 kg", cost: "10 PO" },
    { id: "mangual", type: "weapon", name: "Mangual", category: "Armas Marciais Corpo a Corpo", damage: "1d8 Contundente", properties: "—", mastery: "Drenar", weight: "1 kg", cost: "10 PO" },
    { id: "marteloDeGuerra", type: "weapon", name: "Martelo de Guerra", category: "Armas Marciais Corpo a Corpo", damage: "1d8 Contundente", properties: "Versátil (1d10)", mastery: "Empurrar", weight: "1 kg", cost: "15 PO" },
    { id: "picaretaDeGuerra", type: "weapon", name: "Picareta de Guerra", category: "Armas Marciais Corpo a Corpo", damage: "1d8 Perfurante", properties: "Versátil (1d10)", mastery: "Drenar", weight: "1 kg", cost: "5 PO" },
    { id: "rapiera", type: "weapon", name: "Rapiera", category: "Armas Marciais Corpo a Corpo", damage: "1d8 Perfurante", properties: "Acuidade", mastery: "Afligir", weight: "1 kg", cost: "25 PO" },
    { id: "tridente", type: "weapon", name: "Tridente", category: "Armas Marciais Corpo a Corpo", damage: "1d8 Perfurante", properties: "Arremesso (Alcance 6/18), Versátil (1d10)", mastery: "Derrubar", weight: "2 kg", cost: "5 PO" },

    // Armas Marciais à Distância
    { id: "arcoLongo", type: "weapon", name: "Arco Longo", category: "Armas Marciais à Distância", damage: "1d8 Perfurante", properties: "Duas Mãos, Munição (Alcance 45/180; Flecha), Pesada", mastery: "Lentidão", weight: "1 kg", cost: "50 PO" },
    { id: "bestaDeMao", type: "weapon", name: "Besta de Mão", category: "Armas Marciais à Distância", damage: "1d6 Perfurante", properties: "Leve, Munição (Alcance 9/36; Virote), Recarga", mastery: "Afligir", weight: "1,5 kg", cost: "75 PO" },
    { id: "bestaPesada", type: "weapon", name: "Besta Pesada", category: "Armas Marciais à Distância", damage: "1d10 Perfurante", properties: "Duas Mãos, Munição (Alcance 30/120; Virote), Pesada, Recarga", mastery: "Empurrar", weight: "9 kg", cost: "50 PO" },
    { id: "mosquete", type: "weapon", name: "Mosquete", category: "Armas Marciais à Distância", damage: "1d12 Perfurante", properties: "Duas Mãos, Munição (Alcance 12/36; Bala), Recarga", mastery: "Lentidão", weight: "5 kg", cost: "500 PO" },
    { id: "pistola", type: "weapon", name: "Pistola", category: "Armas Marciais à Distância", damage: "1d10 Perfurante", properties: "Munição (Alcance 9/27; Bala), Recarga", mastery: "Afligir", weight: "1,5 kg", cost: "250 PO" },
    { id: "zarabatana", type: "weapon", name: "Zarabatana", category: "Armas Marciais à Distância", damage: "1 Perfurante", properties: "Munição (Alcance 7,5/30; Agulha), Recarga", mastery: "Afligir", weight: "0,5 kg", cost: "10 PO" }
];