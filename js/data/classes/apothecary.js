window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "apothecary",
    name: "Apothecary",
    source: "SCGtD",
    role: "Short-Rest Caster / Occult Researcher / Support & Utility",
    hitDice: "D8 per Apothecary level",
    primaryAttr: "Intelligence",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Intelligence, Wisdom",
    skillProficiencies: "Choose 2: Arcana, History, Investigation, Medicine, Nature, or Religion",
    weaponProficiencies: "Simple weapons, shortswords, and hand crossbows",
    toolProficiencies: "Any tool proficiency, plus choose 1: poisoner's kit, herbalism kit, or alchemist's supplies",
    armorTraining: "Light and Medium armor",
    startingEquipment: "Choose options: (a) Light crossbow + 20 bolts, (b) shortsword, or (c) simple weapon; (a) component pouch or (b) arcane focus; (a) scholar's pack or (b) dungeoneer's pack; hide armor, simple weapon, 2 daggers, healer's kit. Alternatively: 4d4 × 10 GP",
    multiclassing: "Ability Score Minimum: Intelligence 13.<br><strong>Skill Proficiencies:</strong> Acrobatics<br><strong>Tool Proficiencies:</strong> Any 1 tool proficiency<br><strong>Armor Training:</strong> Light armor",
    description: "Apothecaries study occult practices and medical science to cast short-rest spell slots, utilize Esoteric Theories, and unleash powerful Greater Formulas.",
    customColumns: ["Cantrips Known", "Slot Level", "Theories Known"],
    levels: [
        { level: 1, pb: "+2", features: "Apothecary Magic, Occult Practice", cantrips: "3", slots: { 1: 1 }, slotLevel: "1st", theoriesKnown: "—" },
        { level: 2, pb: "+2", features: "Esoteric Theories", cantrips: "3", slots: { 1: 2 }, slotLevel: "1st", theoriesKnown: "2" },
        { level: 3, pb: "+2", features: "Occult Practice Feature", cantrips: "3", slots: { 2: 2 }, slotLevel: "2nd", theoriesKnown: "2" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", cantrips: "4", slots: { 2: 2 }, slotLevel: "2nd", theoriesKnown: "3" },
        { level: 5, pb: "+3", features: "—", cantrips: "4", slots: { 3: 3 }, slotLevel: "3rd", theoriesKnown: "3" },
        { level: 6, pb: "+3", features: "Occult Practice Feature", cantrips: "4", slots: { 3: 3 }, slotLevel: "3rd", theoriesKnown: "4" },
        { level: 7, pb: "+3", features: "—", cantrips: "4", slots: { 4: 3 }, slotLevel: "4th", theoriesKnown: "4" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", cantrips: "4", slots: { 4: 3 }, slotLevel: "4th", theoriesKnown: "5" },
        { level: 9, pb: "+4", features: "—", cantrips: "4", slots: { 5: 4 }, slotLevel: "5th", theoriesKnown: "5" },
        { level: 10, pb: "+4", features: "Occult Practice Feature", cantrips: "5", slots: { 5: 4 }, slotLevel: "5th", theoriesKnown: "6" },
        { level: 11, pb: "+4", features: "Greater Formula (6th)", cantrips: "5", slots: { 5: 4 }, slotLevel: "5th", theoriesKnown: "6" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", cantrips: "5", slots: { 5: 4 }, slotLevel: "5th", theoriesKnown: "7" },
        { level: 13, pb: "+5", features: "Greater Formula (7th)", cantrips: "5", slots: { 5: 5 }, slotLevel: "5th", theoriesKnown: "7" },
        { level: 14, pb: "+5", features: "Occult Practice Feature", cantrips: "5", slots: { 5: 5 }, slotLevel: "5th", theoriesKnown: "8" },
        { level: 15, pb: "+5", features: "Greater Formula (8th)", cantrips: "5", slots: { 5: 5 }, slotLevel: "5th", theoriesKnown: "8" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", cantrips: "5", slots: { 5: 5 }, slotLevel: "5th", theoriesKnown: "9" },
        { level: 17, pb: "+6", features: "Greater Formula (9th)", cantrips: "5", slots: { 5: 6 }, slotLevel: "5th", theoriesKnown: "9" },
        { level: 18, pb: "+6", features: "Occult Practice Feature", cantrips: "5", slots: { 5: 6 }, slotLevel: "5th", theoriesKnown: "10" },
        { level: 19, pb: "+6", features: "Additional Greater Formula (6th), Ability Score Improvement", cantrips: "5", slots: { 5: 6 }, slotLevel: "5th", theoriesKnown: "10" },
        { level: 20, pb: "+6", features: "Additional Greater Formula (7th), Miraculous Recovery", cantrips: "5", slots: { 5: 6 }, slotLevel: "5th", theoriesKnown: "11" }
    ],
    featuresList: [
        {
            title: "Apothecary Magic",
            level: 1,
            source: "SCGtD",
            desc: "Cast spells using Intelligence as your spellcasting ability via a Formula Book[cite: 43]. All spell slots are of the same slot level and recharge on a Short or Long Rest[cite: 41, 43]. Prepare a number of spells equal to Intelligence modifier + Apothecary level[cite: 43]. Replace 1 cantrip on completing a Long Rest (Elementary Reformulation)[cite: 43]."
        },
        {
            title: "Occult Practice",
            level: 1,
            source: "SCGtD",
            desc: "Choose an Occult Practice discipline: Alienist, Chemist, Exorcist, Mutagenist, Pathogenist, or Reanimator[cite: 43]. Grants expanded spells and features at levels 1, 3, 6, 10, 14, and 18[cite: 41, 43]."
        },
        {
            title: "Esoteric Theories",
            level: 2,
            source: "SCGtD",
            desc: "Gain Esoteric Theories (scraps of forbidden lore) to modify your magic[cite: 43]. Start with 2 theories and scale up to 11 at level 20[cite: 41, 43]."
        },
        {
            title: "Greater Formula",
            level: 11,
            source: "SCGtD",
            desc: "Gain high-level spells castable once per Long Rest without expending a slot: 6th-level at lvl 11, 7th-level at lvl 13, 8th-level at lvl 15, 9th-level at lvl 17, an additional 6th-level at lvl 19, and an additional 7th-level at lvl 20[cite: 41, 43]. Can swap 1 Greater Formula on a Long Rest[cite: 43]."
        },
        {
            title: "Miraculous Recovery",
            level: 20,
            source: "SCGtD",
            desc: "Spend 5 minutes using a healer's kit to tend to up to Intelligence modifier creatures[cite: 43]. Targets gain benefits as if completing a Long Rest (1/Long Rest, max once per 24h per creature)[cite: 43]."
        }
    ]
});