window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "artificer",
    name: "Artificer",
    source: "EFA",
    role: "Utility / Support / Crafter",
    hitDice: "D8 per Artificer level",
    primaryAttr: "Intelligence",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Constitution, Intelligence",
    skillProficiencies: "Choose 2: Arcana, History, Investigation, Medicine, Nature, Perception, or Sleight of Hand",
    weaponProficiencies: "Simple weapons",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "Choose A or B: (A) Studded Leather Armor, Dagger, Thieves' Tools, Tinker's Tools, Dungeoneer's Pack, and 16 GP; or (B) 150 GP",
    multiclassing: "To qualify for a new class, you must have a score of at least 13 in the primary ability of the new class and your current classes.<br><strong>Skill Proficiencies:</strong> Choose 1: Arcana, History, Investigation, Medicine, Nature, Perception, or Sleight of Hand<br><strong>Tool Proficiencies:</strong> Tinker's Tools<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Masters of invention, Artificers use ingenuity and magic to unlock extraordinary capabilities in objects, crafting magical items and channeling magic through mundane tools.",
    customColumns: ["Plans Known", "Magic Items"],
    levels: [
        { level: 1, pb: "+2", features: "Spellcasting, Tinker's Magic", plansKnown: "—", magicItems: "—", cantrips: "2", prepared: "2", slots: { 1: 2 } },
        { level: 2, pb: "+2", features: "Replicate Magic Item", plansKnown: "4", magicItems: "2", cantrips: "2", prepared: "3", slots: { 1: 2 } },
        { level: 3, pb: "+2", features: "Artificer Subclass", plansKnown: "4", magicItems: "2", cantrips: "2", prepared: "4", slots: { 1: 3 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", plansKnown: "4", magicItems: "2", cantrips: "2", prepared: "5", slots: { 1: 3 } },
        { level: 5, pb: "+3", features: "Subclass feature", plansKnown: "4", magicItems: "2", cantrips: "2", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 6, pb: "+3", features: "Magic Item Tinker", plansKnown: "5", magicItems: "3", cantrips: "2", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 7, pb: "+3", features: "Flash of Genius", plansKnown: "5", magicItems: "3", cantrips: "2", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", plansKnown: "5", magicItems: "3", cantrips: "2", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 9, pb: "+4", features: "Subclass feature", plansKnown: "5", magicItems: "3", cantrips: "2", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 10, pb: "+4", features: "Magic Item Adept", plansKnown: "6", magicItems: "4", cantrips: "3", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 11, pb: "+4", features: "Spell-Storing Item", plansKnown: "6", magicItems: "4", cantrips: "3", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", plansKnown: "6", magicItems: "4", cantrips: "3", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 13, pb: "+5", features: "—", plansKnown: "6", magicItems: "4", cantrips: "3", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 14, pb: "+5", features: "Advanced Artifice", plansKnown: "7", magicItems: "5", cantrips: "4", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 15, pb: "+5", features: "Subclass feature", plansKnown: "7", magicItems: "5", cantrips: "4", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", plansKnown: "7", magicItems: "5", cantrips: "4", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 17, pb: "+6", features: "—", plansKnown: "7", magicItems: "5", cantrips: "4", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 18, pb: "+6", features: "Magic Item Master", plansKnown: "8", magicItems: "6", cantrips: "4", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 19, pb: "+6", features: "Epic Boon", plansKnown: "8", magicItems: "6", cantrips: "4", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 20, pb: "+6", features: "Soul of Artifice", plansKnown: "8", magicItems: "6", cantrips: "4", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } }
    ],
    featuresList: [
        {
            title: "Spellcasting",
            level: 1,
            source: "EFA",
            desc: "You have learned how to channel magical energy through objects. You produce your spells through tools (Thieves' Tools, Tinker's Tools, or Artisan's Tools) as a Spellcasting Focus.<br><br>Intelligence is your spellcasting ability."
        },
        {
            title: "Tinker's Magic",
            level: 1,
            source: "EFA",
            desc: "You know the [[Mending]] cantrip. As a Magic action while holding Tinker's Tools, you can create one mundane item (such as Ball Bearings, Crowbar, Manacles, Rope, Torch, etc.) in an unoccupied space within 5 feet. It vanishes upon finishing a Long Rest."
        },
        {
            title: "Replicate Magic Item",
            level: 2,
            source: "EFA",
            desc: "You learn arcane plans to create temporary magic items. At the end of a Long Rest, using Tinker's Tools, you can create a number of magic items based on your known plans as shown in the Artificer table."
        },
        {
            title: "Artificer Subclass",
            level: 3,
            source: "EFA",
            desc: "You choose an Artificer subclass (such as Alchemist, Armorer, Artillerist, Battle Smith, or Cartographer)."
        },
        {
            title: "Magic Item Tinker",
            level: 6,
            source: "EFA",
            desc: "Gains options to manipulate your replicated magic items: <strong>Charge Magic Item</strong> (expend a spell slot to recharge an item), <strong>Drain Magic Item</strong> (destroy an item to gain a spell slot), and <strong>Transmute Magic Item</strong> (transform an item into a different known plan)."
        },
        {
            title: "Flash of Genius",
            level: 7,
            source: "EFA",
            desc: "When you or a creature within 30 feet fails an ability check or saving throw, you can take a Reaction to add your Intelligence modifier to the roll."
        },
        {
            title: "Magic Item Adept",
            level: 10,
            source: "EFA",
            desc: "You can now attune to up to four magic items at once."
        },
        {
            title: "Spell-Storing Item",
            level: 11,
            source: "EFA",
            desc: "You can store a 1st-, 2nd-, or 3rd-level Artificer spell in a weapon or focus. A creature holding the item can produce the spell using your Intelligence modifier."
        },
        {
            title: "Advanced Artifice",
            level: 14,
            source: "EFA",
            desc: "<strong>Magic Item Savant:</strong> Attune to up to five magic items.<br><strong>Refreshed Genius:</strong> Regain one use of Flash of Genius on a Short Rest."
        },
        {
            title: "Magic Item Master",
            level: 18,
            source: "EFA",
            desc: "You can now attune to up to six magic items at once."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "EFA",
            desc: "You gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Soul of Artifice",
            level: 20,
            source: "EFA",
            desc: "<strong>Cheat Death:</strong> If reduced to 0 HP, disintegrate replicated items to gain 20 HP per item.<br><strong>Magical Guidance:</strong> Regain all uses of Flash of Genius on a Short Rest if attuned to a magic item."
        }
    ]
});