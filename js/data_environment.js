data_environment_obscurance = [
    {
        title: "Lightly Obscured",
        icon: "fog",
        subtitle: "Disadvantage on Perception",
        description: "Dim light, patchy fog, moderate foliage",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#ObscuredAreas'>Playing the Game: Obscured Areas, PHB 19</a>; "
                   + "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#LightlyObscured'>Lightly Obscured, PHB 370</a>",
        bullets: [
            "Creatures have Disadvantage on Wisdom (Perception) checks that rely on sight."
        ]
    },
    {
        title: "Heavily Obscured",
        icon: "hidden",
        subtitle: "Effectively blind",
        description: "Darkness, opaque fog, dense foliage",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#ObscuredAreas'>Playing the Game: Obscured Areas, PHB 19</a>; "
                   + "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#LightlyObscured'>Heavily Obscured, PHB 368</a>",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the Blinded condition when trying to see something there."
        ]
    }
]

data_environment_light = [
    {
        title: "Bright Light",
        icon: "sunbeams",
        subtitle: "Normal vision",
        description: "Bright Light lets most creatures see normally",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#Light'>Playing the Game: Light, PHB 19</a>; "
                   + "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#BrightLight'>Bright Light, PHB 362</a>",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Dim Light",
        icon: "wolf-howl",
        subtitle: "Lightly obscured",
        description: "Dim light, also called shadows",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#Light'>Playing the Game: Light, PHB 19</a>; "
                   + "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#DimLight'>Dim Light, PHB 366</a>",
        bullets: [
            "Creates a Lightly Obscured area.",
            "An area of Dim Light is usually a boundary between Bright Light and surrounding Darkness.",
            "The soft light of twilight and dawn also counts as Dim Light. A full moon might bathe the land in dim light."
        ]
    },
    {
        title: "Darkness",
        icon: "worried-eyes",
        subtitle: "Heavily obscured",
        description: "Darkness creates a Heavily Obscured area",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#Light'>Playing the Game: Light, PHB 19</a>; "
                   + "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Darkness'>Darkness, PHB 365</a>",
        bullets: [
            "Characters face Darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon, or in an area of magical darkness."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsight",
        icon: "blindfold",
        subtitle: "Perceive without sight",
        description: "Perceive your surroundings without relying on physical sight, within a specified range",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Blindsight'>Blindsight, PHB 361</a>",
        bullets: [
            "You can see anything that isn't behind Total Cover even if you have the Blinded condtion or are in Darkness.",
            "You can see something that has the Invisible condition."
        ]
    },
    {
        title: "Darkvision",
        icon: "night-vision",
        subtitle: "Limited vision in Darkness",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a specified range",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Darkness'>Darkvision, PHB 365</a>",
        bullets: [
            "You can see in Dim Light as if it were Bright Light and in Darkness as if it were Dim Light.",
            "You disern colors in Darkness only as shades of gray."
        ]
    },
    {
        title: "Tremorsense",
        icon: "awareness",
        subtitle: "See in Darkness",
        description: "A creature with Tremorsense can locate creatures and moving objects within a specific range",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Tremorsense'>Tremorsense, PHB 377</a>",
        bullets: [
            "You must must be in contact with the same surface, or the same liquid, as anything you are detecting.",
            "You can't detect anything in the air",
            "Tremorsense doesn't count as a form of sight."
        ]
    },
    {
        title: "Truesight",
        icon: "third-eye",
        subtitle: "See in Darkness",
        description: "The vision of a creature with Truesight is enhanced within a specified range",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Truesight'>Truesight, PHB 377</a>",
        bullets: [
            "You can see in normal and magical Darkness.",
            "You see creatures and objects that have the Invisible condition.",
            "Visual illusions appear transparent to you. You automatically succeed on saving throws against them.",
            "You discern the true form of any creature or object you see that has been transformed by magic",
            "You see into the Ethereal Plane."
        ]
    }
]

data_environment_cover = [
    {
        title: "Half cover",
        icon: "brick-pile",
        subtitle: "Low wall, furniture, creatures",
        description: "A target has Half Cover if an obstacle blocks at least half of its body",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Cover'>Cover, PHB 364</a>",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with Half Cover has a +2 bonus to AC and Dexterity saving throws.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Three-quarters cover",
        icon: "broken-wall",
        subtitle: "Portcullis, arrow slit",
        description: "A target has Three-quarters cover if about Three-Quarters of it is covered by an obstacle",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Cover'>Cover, PHB 364</a>",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with Three-Quarters cover has a +5 bonus to AC and Dexterity saving throws.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Full cover",
        icon: "brick-wall",
        subtitle: "Completely concealed",
        description: "A target has total cover if it is completely concealed by an obstacle",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#Cover'>Cover, PHB 364</a>",
        bullets: [
            "A target with total cover can’t be targeted directly by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    }
]
