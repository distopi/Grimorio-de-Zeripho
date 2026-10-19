window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "druid",
    name: "Druid",
    source: "PHB'24",
    role: "Full-Caster / Shape-shifter / Nature Support",
    hitDice: "D8 per Druid level",
    primaryAttr: "Wisdom",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Intelligence, Wisdom",
    skillProficiencies: "Choose 2: Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, or Survival",
    weaponProficiencies: "Simple weapons",
    toolProficiencies: "Herbalism Kit",
    armorTraining: "Light armor and Shields",
    startingEquipment: "Choose A or B: (A) Leather Armor, Shield, Sickle, Druidic Focus (Quarterstaff), Explorer's Pack, Herbalism kit, 9 GP; or (B) 50 GP",
    multiclassing: "Ability Score Minimum: Wisdom 13.<br><strong>Armor Training:</strong> Light armor and Shields",
    description: "Druids harness primal elements and shape-shift into dangerous beasts, channeling the raw power of nature to protect the wild balance and aid their companions.",
    customColumns: ["Wild Shape"],
    levels: [
        { level: 1, pb: "+2", features: "Druidic, Primal Order, Spellcasting", wildShape: "—", cantrips: "2", prepared: "4", slots: { 1: 2 } },
        { level: 2, pb: "+2", features: "Wild Companion, Wild Shape", wildShape: "2", cantrips: "2", prepared: "5", slots: { 1: 3 } },
        { level: 3, pb: "+2", features: "Druid Subclass", wildShape: "2", cantrips: "2", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", wildShape: "2", cantrips: "3", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 5, pb: "+3", features: "Wild Resurgence", wildShape: "2", cantrips: "3", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 6, pb: "+3", features: "Subclass Feature", wildShape: "3", cantrips: "3", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 7, pb: "+3", features: "Elemental Fury", wildShape: "3", cantrips: "3", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", wildShape: "3", cantrips: "3", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 9, pb: "+4", features: "—", wildShape: "3", cantrips: "3", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 10, pb: "+4", features: "Subclass Feature", wildShape: "3", cantrips: "4", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 11, pb: "+4", features: "—", wildShape: "3", cantrips: "4", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", wildShape: "3", cantrips: "4", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
        { level: 13, pb: "+5", features: "—", wildShape: "3", cantrips: "4", prepared: "17", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
        { level: 14, pb: "+5", features: "Subclass Feature", wildShape: "3", cantrips: "4", prepared: "17", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
        { level: 15, pb: "+5", features: "Improved Elemental Fury", wildShape: "3", cantrips: "4", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", wildShape: "3", cantrips: "4", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
        { level: 17, pb: "+6", features: "—", wildShape: "4", cantrips: "4", prepared: "19", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 } },
        { level: 18, pb: "+6", features: "Beast Spells", wildShape: "4", cantrips: "4", prepared: "20", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 } },
        { level: 19, pb: "+6", features: "Epic Boon", wildShape: "4", cantrips: "4", prepared: "21", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 } },
        { level: 20, pb: "+6", features: "Archdruid", wildShape: "4", cantrips: "4", prepared: "22", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 } }
    ],
    featuresList: [
        {
            title: "Druidic",
            level: 1,
            source: "PHB'24",
            desc: "Learn the secret Druidic language and automatically have [[Speak with Animals]] prepared. Can leave hidden messages that others can spot with a DC 15 Investigation check."
        },
        {
            title: "Primal Order",
            level: 1,
            source: "PHB'24",
            desc: "Choose a sacred role:<br>• <strong>Magician:</strong> Gain 1 extra Druid cantrip and add Wisdom modifier to Arcana/Nature checks.<br>• <strong>Warden:</strong> Gain proficiency with Martial weapons and Medium armor."
        },
        {
            title: "Spellcasting",
            level: 1,
            source: "PHB'24",
            desc: "Cast Druid spells using Wisdom as your spellcasting ability. Prepare list of spells after a Long Rest. Uses a Druidic Focus."
        },
        {
            title: "Wild Companion",
            level: 2,
            source: "PHB'24",
            desc: "Magic action to expend a spell slot or Wild Shape use to cast [[Find Familiar]] without material components (familiar is Fey and lasts until next Long Rest)."
        },
        {
            title: "Wild Shape",
            level: 2,
            source: "PHB'24",
            desc: "Bonus Action to transform into a known Beast form. Gain Temporary HP equal to Druid level, retain mental stats and features, but cannot cast spells. Form limits: Lvl 2 (CR 1/4, no fly), Lvl 4 (CR 1/2, no fly), Lvl 8 (CR 1, fly speed)."
        },
        {
            title: "Druid Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Druid subclass which grants features at levels 3, 6, 10, and 14."
        },
        {
            title: "Wild Resurgence",
            level: 5,
            source: "PHB'24",
            desc: "Once per turn, convert a spell slot into 1 use of Wild Shape (no action). Also expend 1 use of Wild Shape to regain a level 1 spell slot (1/Long Rest)."
        },
        {
            title: "Elemental Fury",
            level: 7,
            source: "PHB'24",
            desc: "Choose one option:<br>• <strong>Potent Spellcasting:</strong> Add Wisdom modifier to Druid cantrip damage.<br>• <strong>Primal Strike:</strong> Deal +1d8 Cold, Fire, Lightning, or Thunder damage once per turn on weapon/beast attacks."
        },
        {
            title: "Improved Elemental Fury",
            level: 15,
            source: "PHB'24",
            desc: "Upgrade your Elemental Fury feature:<br>• <strong>Potent Spellcasting:</strong> Cantrips with range 10+ ft gain +300 ft range.<br>• <strong>Primal Strike:</strong> Extra damage increases to 2d8."
        },
        {
            title: "Beast Spells",
            level: 18,
            source: "PHB'24",
            desc: "Cast spells while in Wild Shape Beast form (unless the spell requires costly or consumed material components)."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Archdruid",
            level: 20,
            source: "PHB'24",
            desc: "Regain 1 Wild Shape use on Initiative if empty. Convert unexpended Wild Shape uses into spell slots (1 use = 2 spell levels, 1/Long Rest). Age 1 year for every 10 years passed."
        }
    ]
});