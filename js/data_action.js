data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Attack with weapon or unarmed",
        description: "Make one attack roll with a weapon or Unarmed Strike",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#AttackAction'>Attack [Action], PHB 361</a>",
        bullets: [
            "<b>Equipping and Unequipping Weapons.</b> You can equip/unequip one weapon when you make an attack as part of this action. "
            + "You don't need to use it as part of the attack.",
            "<b>Moving between Attacks.</b> If you have a feature that gives you more than one attack as part of the Attack action, you can use some or all of your movement to move between attacks."
        ]
    },
    {
        title: "Attack (Grapple)",
        icon: "grab",
        subtitle: "An Unarmed Strike attack",
        description: "Use a free hand to grab and hold on to a target as part of an Attack action",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#UnarmedStrike'>Unarmed Strike, PHB 377</a>; "
                   + "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Grappling'>Grappling, PHB 367</a>", 
        bullets: [
            "The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the Grappled condition.",
            "<b>Escape DC</b> = (8 plus your Strength modifier and Proficiency Bonus)",
            "This grapple is possible only if the target is no more than one size larger than you and if you have a hand free to grab it."
        ]
    },
    {
        title: "Attack (Shove)",
        icon: "hand",
        subtitle: "An Unarmed Strike attack",
        description: "Use your body to force a target away from you as part of an Attack action",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#UnarmedStrike'>Unarmed Strike, PHB 377</a>",
        bullets: [
            "The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you either push it 5 feet away or cause it to have the Prone condition.",
            "<b>Shove DC</b> = (8 plus your Strength modifier and Proficiency Bonus)",
            "This shove is possible only if the target is no more than one size larger than you."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "For the rest of the turn, give yourself extra movement equal to your Speed",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#DashAction'>Dash [Action], PHB 365</a>",
        bullets: [
            "The increase equals your speed, after applying any modifiers.",
            "If you have a special speed, such as a Fly Speed or Swim Speed, you can use that speed instead of your Speed when you take this action."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke Opportunity Attack for the rest of the turn",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DisengageAction'>Disengage [Action], PHB 366</a>",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "dodging",
        subtitle: "Increase defenses",
        description: "Attack roll made against you have Disadvantage and you make Dexterity saving throws with Advantage",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DodgeAction'>Dodge [Action], PHB 366</a>",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },/*
    {
        title: "Escape",
        icon: "breaking-chain",
        subtitle: "Ending a Grapple",
        description: "Ending a Grapple",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Grappling'>Grappling, PHB #</a>",
        bullets: [
            "Use your action to make a Strength (Athletics) or Dexterity (Acrobatics) check, ending the condition on a success.",
            "<b>Escape DC</b> = (8 plus the grappler's Strength modifier and Proficiency Bonus)",
            "The grappler can release the target at any time (no action required)."
        ]
    },*/
    {
        title: "Help",
        icon: "shaking-hands",
        subtitle: "Aid an ally",
        description: "Help another creature's ability check or attack roll, or administer first aid",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#HelpAction'>Help [Action], PHB 368</a>",
        bullets: [
            "Choose one of the following.",
            "<b>Assist an Ability Check.</b> Grant an ally advantage on a skill or tool ability check with which you are proficient. "
            + "This benefit expires before the start of your next turn if unused.",
            "<b>Assist on Attack Roll.</b> Distract an enemy within 5 feet of you. The next attack roll by one of your allies against that enemy gains Advantage. "
            + "This benefit expires at the start of your next turn"
        ]
    },
    {
        title: "Help (Stablize)",
        icon: "first-aid",
        subtitle: "Aid an unconscious creature",
        description: "Use the Help Action to administer first aid",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#HelpAction'>Help [Action], PHB 368</a>; "
                   + "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#StabilizingaCharacter'>Playing the Game: Stabilizing a Character, PHB 29</a>",
        bullets: [
            "<b>Stablize a Character.</b> Stablize a creature with 0 Hit Points with a successful DC 10 Wisdom (Medicine) check."
        ]
    },
    {
        title: "Hide",
        icon: "hidden",
        subtitle: "Conceal yourself",
        description: "Make a Dexterity (Stealth) check",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#HideAction'>Hide [Action], PHB 368</a>",
        bullets: [
            "You must be Heavily Obscured or behind Three-Quarters Cover or Total Cover, and you must be out of any enemy's line of sight.",
            "You must succeed on a DC 15 Dexterity (Stealth) check. The result becomes the DC for others to find you with a Wisdom (Perception) check.",
            "You have the Invisible condition while hidden.",
            "You stop being hidden immediately if you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component."
        ]
    },
    {
        title: "Influence",
        icon: "talk",
        subtitle: "Alter a creature's attitude",
        description: "Make a Charisma (Deception, Intimidation, Performance, or Persuasion) or Wisdom (Animal Handling) check to alter a creature’s attitude",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#InfluenceAction'>Influence [Action], PHB 369</a>",
        bullets: [
            "Urge a creature to do something. Describe or roleplay the interaction. The DM determines if the target is willing, unwilling, or hesitant to cooperate.",
            "<b>Willing.</b> The target will cooperate - no ability check necessary.",
            "<b>Unwilling.</b> The target will <i>not</i> cooperate - no ability check necessary.",
            "<b>Hesitant.</b> On a successful ability check against DC 15 or the creature's Intelligence score, whichever is higher, the creature cooperates."
            + " The DM determines which skill is most applicable.",
            "The ability check is made with Advantage if the target is Friendly, or with Disadvantage if Hostile. "
            + "On a failed check, you must wait 24 hours before urging the creature in the same way again."
        ]
    },
    {
        title: "Magic",
        icon: "magic-swirl",
        subtitle: "Use a magic spell, item, or feature",
        description: "Cast a spell, use a magic item, or use a magical feature",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#MagicAction'>Magic [Action], PHB 371</a>",
        bullets: [
            "You cast a spell that has a casting time of an action or longer, or use a feature or magic item that requires a Magic action to be activated.",
            "If you cast a spell that has a casting time of 1 minute or longer, you must take the Magic action on each turn of that casting, "
            + "and you must maintain Concentration while you do so.",
            "If your Concentration is broken, the spell fails, but you don't expend a spell slot.",
            "On a turn, you can expend only one spell slot to cast a spell."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Prepare action for trigger",
        description: "Prepare to take an action in response to a trigger you define",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ReadyAction'>Ready [Action], PHB 372</a>",
        bullets: [
            "Decide what will trigger your Reaction, and choose what action you will take in response to it. "
            + "You may decide to move in response to the trigger rather than taking an action.",
            "When the trigger occurs, you can take your Reaction immediately following it or ignore the trigger.",
            "You can ready a spell with a casting time of an action. You cast it as normal (expending any resources needed) "
            + "but hold its energy until your Reaction when the trigger occurs. This requires Concentration, which you can maintain until the start of your next turn. "
            + "If your Concentration is broken, the spell dissipates with no effect."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "Discern what isn't obvious",
        description: "Make a Wisdom (Insight, Medicine, Perception, or Survival) check",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#SearchAction'>Search [Action], PHB 373</a>",
        bullets: [
            "Make a Wisdom check to discern something that isn't obvious. The DM determines which skill is most applicable."
        ]
    },
    {
        title: "Study",
        icon: "bookmarklet",
        subtitle: "Recall important information",
        description: "Make an Intelligence (Arcana, History, Investigation, Nature, or Religion) check",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#StudyAction'>Study [Action], PHB 375</a>",
        bullets: [
            "Make an Intelligence check to study your memory, a book, a clue, or another source of knowledge and call to mind an important piece of information about it. "
            + " The DM determines which skill is most applicable."
        ]
    },
    {
        title: "Utilize",
        icon: "lever",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#UtilizeAction'>Utilize [Action], PHB 377</a>",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Utilize (Shield)",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Utilize Action to Don or Doff",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#UtilizeAction'>Utilize [Action], PHB 377</a>; "
                   + "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/equipment#ArmorTable'>Equipment: Armor, PHB 219</a>",
        bullets: [
            "A shield takes a Utilize Action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Use Character Feature",
        icon: "embraced-energy",
        subtitle: "Some features use actions",
        description: "Use a class feature, species trait, or feat that uses an action",
        reference: "See Class, Species, or Feat description for more information",
        bullets: [

        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#Actions'>Playing the Game: Actions, PHB 15</a>",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
