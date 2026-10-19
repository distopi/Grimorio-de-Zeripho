window.dndData = window.dndData || {};
window.dndData.subclasses = window.dndData.subclasses || {};
window.dndData.subclasses.fighter = window.dndData.subclasses.fighter || [];

window.dndData.subclasses.fighter.push({
    id: "arcaneArcher",
    name: "Arcane Archer",
    source: "AU",
    shortDesc: "An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects.",
    description: `<strong>Deploy Magical Effects Through Enchanted Ammunition</strong><br><br>
    An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Over the centuries, other folk have learned this technique and broadened it so it applies to ranged weapons of many kinds and to aspects of adventuring life outside of combat.`,
    features: [
        {
            title: "Arcane Archer Lore",
            level: 3,
            source: "AU",
            desc: "You learn magical theory and secrets of nature, granting you the following benefits:<br><br>" +
                  "• <strong>Cantrip.</strong> You know either the [[Druidcraft]] or the [[Prestidigitation]] cantrip. Intelligence is your spellcasting ability for it.<br>" +
                  "• <strong>Skills.</strong> You gain proficiency in the Arcana and Nature skills. If you already have one of these proficiencies, you instead gain proficiency in a different skill of your choice from the skills available to Fighters at level 1 (or in two skills available to Fighters at level 1 if you have both)."
        },
        {
            title: "Arcane Shot",
            level: 3,
            source: "AU",
            desc: "You learn to unleash special magical effects with your shots.<br><br>" +
                  "You learn two Arcane Shot options of your choice. You learn an additional Arcane Shot option of your choice when you reach Fighter levels 7, 10, 15, and 18. Each time you learn a new Arcane Shot option, you can also replace one option you know with a different one.<br><br>" +
                  "<strong>Using Arcane Shot.</strong> Once per turn when you make a ranged attack using a weapon with the Ammunition property, you can apply one of your Arcane Shot options to that attack. You decide to use the option when you hit a creature and deal damage to it unless the option doesn't involve an attack roll.<br>" +
                  "You can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a Short or Long Rest.<br><br>" +
                  "<strong>Arcane Shot Die.</strong> Arcane Shot options refer to your Arcane Shot Die. Your Arcane Shot Die is a d6.<br><br>" +
                  "<strong>Saving Throws.</strong> If an Arcane Shot option requires a saving throw, the DC equals 8 plus your Intelligence modifier and Proficiency Bonus.<br><br>" +
                  "<strong>At Higher Levels.</strong> Your Arcane Shot Die changes when you reach certain Fighter levels. The die becomes a d8 at level 10, a d10 at level 15, and a d12 at level 18.<br><br>" +
                  "<em>Options included:</em> Banishing Shot, Beguiling Shot, Bursting Shot, Enfeebling Shot, Grasping Shot, Piercing Shot, Seeking Shot, and Shadow Shot."
        },
        {
            title: "Curving Shot",
            level: 7,
            source: "AU",
            desc: "You learn how to direct an errant shot toward a new target. If you make a ranged attack roll with a weapon with the Ammunition property and miss, you can cause the shot to ricochet toward a new target as a Bonus Action immediately after the attack misses. The new target must be a creature you can see within the weapon's range and within 60 feet of the attack's original target. Make an attack roll against the new target."
        },
        {
            title: "Magical Ammunition",
            level: 7,
            source: "AU",
            desc: "You learn to imbue your ammunition with magical properties. As a Magic action, you can imbue a piece of nonmagical ammunition with one of the following magical properties and fire it at a solid surface you can see within the weapon's range. When the ammunition hits the surface, the ammunition's effect activates, and the ammunition attaches to the surface it hit for the duration of the effect; you can remove an attached piece of ammunition as a Magic action, ending the effect early. When the effect ends, the ammunition is destroyed.<br><br>" +
                  "Once you use this feature, you can't do so again until you finish a Short or Long Rest. You can also restore your use of this feature by expending a use of your Second Wind (no action required).<br><br>" +
                  "• <strong>Darkening Ammunition:</strong> Magical shadows fill a 15-foot Emanation originating from the ammunition for 1 minute. Nonmagical flames are extinguished, and creatures have a -5 penalty to Perception.<br>" +
                  "• <strong>Unlocking Ammunition:</strong> Emits a loud knocking sound (audible up to 300 feet). Any nonmagical lock, stuck or barred object in a 15-foot Emanation becomes unlocked, unstuck, or unbarred.<br>" +
                  "• <strong>Vine Ammunition:</strong> A 120-foot-long vine grows from the ammunition, which creatures can climb. It withers after 10 minutes."
        },
        {
            title: "Ever-Ready Shot",
            level: 10,
            source: "AU",
            desc: "When you roll Initiative, you can regain one expended use of Arcane Shot."
        },
        {
            title: "Indomitable Teleport",
            level: 15,
            source: "AU",
            desc: "Your magical mastery lets you escape dire situations. When you use your Indomitable feature and succeed on the saving throw, you can teleport up to 60 feet to an unoccupied space you can see."
        },
        {
            title: "Masterful Shots",
            level: 18,
            source: "AU",
            desc: "You employ agility in your sharpshooting. When a creature you can see misses you with an attack roll, you can take a Reaction to move up to half your Speed away from the attacker without provoking Opportunity Attacks. You can then make a ranged attack roll against the attacker as part of this Reaction if the attacker is within the weapon's range."
        }
    ]
});