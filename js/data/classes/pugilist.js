window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "pugilist",
    name: "Pugilist",
    source: "TPC'24",
    role: "Strength-based Brawler / Frontline Tank / Unarmed Striker",
    hitDice: "D10 per Pugilist level",
    primaryAttr: "Strength",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Strength, Constitution",
    skillProficiencies: "Choose 2: Acrobatics, Athletics, Deception, Intimidation, Perception, Sleight of Hand, or Stealth",
    weaponProficiencies: "Simple weapons and improvised weapons",
    toolProficiencies: "Choose one type of Gaming Set",
    armorTraining: "Light armor",
    startingEquipment: "Choose A or B: (A) Club, Handaxe, Gaming Set (chosen for tool proficiency), Dungeoneer's Pack, and 31 GP; or (B) 50 GP",
    multiclassing: "Ability Score Minimum: Strength 13.<br><strong>Weapon Proficiencies:</strong> Improvised weapons<br><strong>Armor Training:</strong> Light armor",
    description: "Rugged tavern and back-alley brawlers who rely on brute strength, grit, improvised weapons, and Moxie points to overpower foes and take hits that would drop lesser warriors.",
    customColumns: ["Fisticuffs", "Moxie Points"],
    levels: [
        { level: 1, pb: "+2", features: "Fisticuffs, Iron Chin", fisticuffs: "1d8", moxiePoints: "—" },
        { level: 2, pb: "+2", features: "Moxie, Bloodied But Unbowed, Swagger Streak", fisticuffs: "1d8", moxiePoints: "2" },
        { level: 3, pb: "+2", features: "Heavy Hitter, Pugilist Subclass", fisticuffs: "1d8", moxiePoints: "2" },
        { level: 4, pb: "+2", features: "Ability Score Improvement, Dig Deep", fisticuffs: "1d8", moxiePoints: "3" },
        { level: 5, pb: "+3", features: "Extra Attack, Haymaker", fisticuffs: "1d10", moxiePoints: "3" },
        { level: 6, pb: "+3", features: "Moxie-Fueled Fists, Subclass Feature", fisticuffs: "1d10", moxiePoints: "4" },
        { level: 7, pb: "+3", features: "Down But Not Out", fisticuffs: "1d10", moxiePoints: "4" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", fisticuffs: "1d10", moxiePoints: "5" },
        { level: 9, pb: "+4", features: "School of Hard Knocks", fisticuffs: "1d10", moxiePoints: "5" },
        { level: 10, pb: "+4", features: "Herculean, Shake It Off", fisticuffs: "1d10", moxiePoints: "6" },
        { level: 11, pb: "+4", features: "Subclass Feature", fisticuffs: "1d12", moxiePoints: "6" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", fisticuffs: "1d12", moxiePoints: "7" },
        { level: 13, pb: "+5", features: "Dig Deeper", fisticuffs: "1d12", moxiePoints: "7" },
        { level: 14, pb: "+5", features: "Unbreakable", fisticuffs: "1d12", moxiePoints: "8" },
        { level: 15, pb: "+5", features: "Pugnacious", fisticuffs: "1d12", moxiePoints: "8" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", fisticuffs: "1d12", moxiePoints: "9" },
        { level: 17, pb: "+6", features: "Subclass Feature", fisticuffs: "2d6", moxiePoints: "9" },
        { level: 18, pb: "+6", features: "Fighting Spirit", fisticuffs: "2d6", moxiePoints: "10" },
        { level: 19, pb: "+6", features: "Epic Boon", fisticuffs: "2d6", moxiePoints: "11" },
        { level: 20, pb: "+6", features: "Peak Physical Condition", fisticuffs: "2d6", moxiePoints: "12" }
    ],
    featuresList: [
        {
            title: "Fisticuffs",
            level: 1,
            source: "TPC'24",
            desc: "Make an Unarmed Strike as a Bonus Action when unarmored or in light armor without a shield[cite: 51]. Fisticuffs damage die starts at 1d8 and scales up to 2d6. You gain mastery properties on Improvised Weapons, which all count as having the Sap property[cite: 51]."
        },
        {
            title: "Iron Chin",
            level: 1,
            source: "TPC'24",
            desc: "While wearing Light or no armor and not wielding a Shield, base AC equals 12 + Constitution modifier[cite: 51]."
        },
        {
            title: "Moxie",
            level: 2,
            source: "TPC'24",
            desc: "Expend Moxie Points (recharges on Short/Long Rest) for features[cite: 49, 51]:<br>• <strong>Brace Up:</strong> Spend 1 Moxie Point as a Bonus Action to gain Temp HP = 1 Fisticuffs die + Pugilist level + Con mod[cite: 51].<br>• <strong>One-Two Punch:</strong> Spend 1 Moxie Point to make two Unarmed Strikes as a Bonus Action[cite: 51].<br>• <strong>Stick and Move:</strong> Spend 1 Moxie Point as a Bonus Action to make an Unarmed Strike and Dash or Disengage[cite: 51]."
        },
        {
            title: "Bloodied But Unbowed",
            level: 2,
            source: "TPC'24",
            desc: "Reaction when taking damage to regain all expended Moxie Points[cite: 51]. If Bloodied, also gain Temp HP equal to 4 × Pugilist level (1/Short or Long Rest)[cite: 51]."
        },
        {
            title: "Swagger Streak",
            level: 2,
            source: "TPC'24",
            desc: "Spend 1 Moxie Point when failing a Str, Dex, Con, or Cha check to add 1 Fisticuffs die to the roll[cite: 51]. Regain the point if the check still fails (1/Short or Long Rest on failure)[cite: 51]."
        },
        {
            title: "Heavy Hitter",
            level: 3,
            source: "TPC'24",
            desc: "When hitting with an Unarmed Strike, apply both Damage and your choice of Grapple or Shove[cite: 51]."
        },
        {
            title: "Pugilist Subclass",
            level: 3,
            source: "TPC'24",
            desc: "Choose a Pugilist subclass which grants features at levels 3, 6, 11, and 17[cite: 49, 51]."
        },
        {
            title: "Dig Deep",
            level: 4,
            source: "TPC'24",
            desc: "Bonus Action to gain Resistance to Bludgeoning, Piercing, and Slashing damage and ignore Exhaustion below level 6 for 10 minutes (1/Long Rest, or suffer 1 Exhaustion level to reuse)[cite: 51]."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "TPC'24",
            desc: "Attack twice instead of once whenever you take the Attack action[cite: 51]."
        },
        {
            title: "Haymaker",
            level: 5,
            source: "TPC'24",
            desc: "Spend 1 Moxie Point on an Unarmed Strike or Pugilist weapon attack: on hit, regain the Moxie Point and deal maximum damage[cite: 51]."
        },
        {
            title: "Moxie-Fueled Fists",
            level: 6,
            source: "TPC'24",
            desc: "Unarmed Strikes and improvised weapon attacks can deal Force damage instead of their normal damage type[cite: 51]."
        },
        {
            title: "Down But Not Out",
            level: 7,
            source: "TPC'24",
            desc: "When using Bloodied But Unbowed while Bloodied, add a bonus equal to Con modifier + Exhaustion levels to Unarmed/Pugilist weapon damage for 1 minute (1/Long Rest)[cite: 51]."
        },
        {
            title: "School of Hard Knocks",
            level: 9,
            source: "TPC'24",
            desc: "Once per turn, deal +1d12 extra damage on hit, or forgo it to apply <strong>Endanger</strong> (next hit against target deals max damage) or <strong>Provoke</strong> (target has Disadvantage on attacks against others)[cite: 51]."
        },
        {
            title: "Herculean",
            level: 10,
            source: "TPC'24",
            desc: "Double carrying capacity, deal automatically critical hits to objects with Unarmed Strikes, and double jump distance[cite: 51]."
        },
        {
            title: "Shake It Off",
            level: 10,
            source: "TPC'24",
            desc: "Remove one condition (Blinded, Charmed, Deafened, 1 Exhaustion level, Frightened, Paralyzed, Poisoned, Restrained, or Stunned) at start of turn (1/Long Rest, or suffer 1 Exhaustion level to reuse)[cite: 51]."
        },
        {
            title: "Dig Deeper",
            level: 13,
            source: "TPC'24",
            desc: "Bonus Action for 1 minute: gain all Dig Deep benefits and use School of Hard Knocks twice per turn (1/Long Rest; 2/Long Rest at level 20)[cite: 49, 51]."
        },
        {
            title: "Unbreakable",
            level: 14,
            source: "TPC'24",
            desc: "Gain Advantage on Strength, Dexterity, and Constitution saving throws[cite: 51]. Spend 1 Moxie Point to reroll a failed save[cite: 51]."
        },
        {
            title: "Pugnacious",
            level: 15,
            source: "TPC'24",
            desc: "When rolling Initiative, remove 1 level of Exhaustion and regain uses of Down But Not Out, Dig Deep, and Shake It Off (1/Long Rest)[cite: 51]."
        },
        {
            title: "Fighting Spirit",
            level: 18,
            source: "TPC'24",
            desc: "When reduced to 0 HP, drop to 1 HP, gain Temp HP equal to half max HP, regain all Moxie Points, and gain Resistance to all damage except Force for 1 minute (1/Long Rest)[cite: 51]."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "TPC'24",
            desc: "Gain an Epic Boon feat or another feat of your choice[cite: 51]."
        },
        {
            title: "Peak Physical Condition",
            level: 20,
            source: "TPC'24",
            desc: "Strength and Constitution scores increase by 2 (max 23)[cite: 51]. Lose all levels of Exhaustion on a Long Rest, and regain HP equal to 2 × Pugilist level on a Short Rest[cite: 51]."
        }
    ]
});