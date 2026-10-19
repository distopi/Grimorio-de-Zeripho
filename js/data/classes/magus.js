window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "magus",
    name: "Magus",
    source: "TMC'24",
    role: "Half-Caster / Gish Striker / Arcane Warrior",
    hitDice: "D8 per Magus level",
    primaryAttr: "Intelligence",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Constitution, Intelligence",
    skillProficiencies: "Choose 2: Acrobatics, Arcana, Athletics, History, Insight, Investigation, Nature, Perception, or Religion",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "Choose A, B, or C: (A) Studded Leather Armor, Longbow, 20 Arrows, Quiver, Rapier, Component Pouch, Diamond worth 50 GP, and 4 GP; or (B) 200 GP",
    multiclassing: "Ability Score Minimum: Intelligence 13.<br><strong>Weapon Proficiencies:</strong> Martial weapons<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Disciplined spell-swords who weave martial prowess with arcane incantations, channeling elemental energy into weapon attacks and deflecting hostile magic.",
    levels: [
        { level: 1, pb: "+2", features: "Esoteric Eye, Spellcasting, Weapon Mastery", cantrips: "2", prepared: "2", slots: { 1: 2 } },
        { level: 2, pb: "+2", features: "Fighting Style, Mystic Mark", cantrips: "2", prepared: "3", slots: { 1: 2 } },
        { level: 3, pb: "+2", features: "Magus Subclass", cantrips: "2", prepared: "4", slots: { 1: 3 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", cantrips: "2", prepared: "5", slots: { 1: 3 } },
        { level: 5, pb: "+3", features: "Arcane Ability, Sword and Sorcery", cantrips: "2", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 6, pb: "+3", features: "Magical Recovery", cantrips: "2", prepared: "7", slots: { 1: 4, 2: 2 } },
        { level: 7, pb: "+3", features: "Subclass Feature", cantrips: "2", prepared: "8", slots: { 1: 4, 2: 3 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", cantrips: "2", prepared: "9", slots: { 1: 4, 2: 3 } },
        { level: 9, pb: "+4", features: "Rite of Return", cantrips: "2", prepared: "10", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 10, pb: "+4", features: "All-Seeing Eye", cantrips: "2", prepared: "11", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 11, pb: "+4", features: "Sigil Surge", cantrips: "3", prepared: "12", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", cantrips: "3", prepared: "13", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 13, pb: "+5", features: "—", cantrips: "3", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 14, pb: "+5", features: "Subclass Feature", cantrips: "3", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 15, pb: "+5", features: "Sorcerous Shielding", cantrips: "3", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", cantrips: "3", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 17, pb: "+6", features: "—", cantrips: "4", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 18, pb: "+6", features: "Spell Surge", cantrips: "4", prepared: "19", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 19, pb: "+6", features: "Epic Boon", cantrips: "4", prepared: "20", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 20, pb: "+6", features: "Archmagus, Subclass Feature", cantrips: "4", prepared: "20", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } }
    ],
    featuresList: [
        {
            title: "Esoteric Eye",
            level: 1,
            source: "TMC'24",
            desc: "Bonus Action to observe a target: gain Advantage on Magus spell attacks and force Disadvantage on saves against your Magus spells until end of next turn (Intelligence modifier uses/Long Rest, regain 1 on Short Rest)."
        },
        {
            title: "Spellcasting",
            level: 1,
            source: "TMC'24",
            desc: "Cast Magus spells using Intelligence as your spellcasting ability[cite: 48]. Prepare list of spells that updates on gaining levels[cite: 48]."
        },
        {
            title: "Weapon Mastery",
            level: 1,
            source: "TMC'24",
            desc: "Use weapon mastery properties of two chosen weapons with proficiency[cite: 48]. Can change choices after a Long Rest[cite: 48]."
        },
        {
            title: "Fighting Style",
            level: 2,
            source: "TMC'24",
            desc: "Gain a Fighting Style feat or choose <strong>Mystic Warrior</strong> (add Intelligence modifier to Concentration saves; gain temp HP = 2× spell level + Int mod when Concentration fails)[cite: 48]."
        },
        {
            title: "Mystic Mark",
            level: 2,
            source: "TMC'24",
            desc: "Bonus Action to spend a spell slot and store a prepared spell[cite: 48]. Choose Force damage or damage type dealt by the spell to gain <strong>Aegis</strong> (Resistance to that type) or <strong>Enspell</strong> (attacks deal that damage type)[cite: 48]. Lasts 1 hour or until released as a Bonus Action to cast the stored spell[cite: 48]."
        },
        {
            title: "Magus Subclass",
            level: 3,
            source: "TMC'24",
            desc: "Choose a Magus subclass which grants features at levels 3, 7, 14, and 20[cite: 48]."
        },
        {
            title: "Arcane Ability",
            level: 5,
            source: "TMC'24",
            desc: "When failing an ability check, add a bonus equal to Intelligence modifier + highest level unexpended spell slot to potentially succeed (1/Short or Long Rest, or spend spell slot to restore)[cite: 48]."
        },
        {
            title: "Sword and Sorcery",
            level: 5,
            source: "TMC'24",
            desc: "When taking the Attack action (without Extra Attack), cast a Magus cantrip as part of that same action[cite: 48]. When taking the Magic action, use a Bonus Action to make one weapon attack[cite: 48]."
        },
        {
            title: "Magical Recovery",
            level: 6,
            source: "TMC'24",
            desc: "Regain expended spell slots equal to half your Magus level on a Short Rest (1/Long Rest)[cite: 48]."
        },
        {
            title: "Rite of Return",
            level: 9,
            source: "TMC'24",
            desc: "Regain the expended spell slot when Mystic Mark ends without being released, or end it intentionally as a Bonus Action to regain the slot[cite: 48]."
        },
        {
            title: "All-Seeing Eye",
            level: 10,
            source: "TMC'24",
            desc: "Spend an Esoteric Eye use to gain Truesight 60 ft for 10 minutes[cite: 48]. During this time, Esoteric Eye Bonus Actions require no additional uses (1/Long Rest)[cite: 48]."
        },
        {
            title: "Sigil Surge",
            level: 11,
            source: "TMC'24",
            desc: "Upgrades Mystic Mark[cite: 48]:<br>• <strong>Aegis:</strong> Gain temp HP equal to slot level + Int modifier at start of turn[cite: 48].<br>• <strong>Enspell:</strong> Weapon/unarmed attacks deal an extra 1d6 damage of chosen type[cite: 48]."
        },
        {
            title: "Sorcerous Shielding",
            level: 15,
            source: "TMC'24",
            desc: "Gain Resistance to Force, Necrotic, Psychic, or Radiant damage (can change at start of turn)[cite: 48]. Gain Advantage on saves against spells, and spell attacks against you have Disadvantage[cite: 48]."
        },
        {
            title: "Spell Surge",
            level: 18,
            source: "TMC'24",
            desc: "Cast a chosen level 6 Magus spell once per Long Rest without expending a slot, and regain a slot of 5th level or lower[cite: 48]."
        },
        {
            title: "Archmagus",
            level: 20,
            source: "TMC'24",
            desc: "Intelligence score and Strength or Dexterity score increase by 2 (max 23)[cite: 48]. Gain 2 uses of Magical Recovery per Long Rest[cite: 48]."
        }
    ]
});