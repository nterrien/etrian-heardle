// Copy from etrian-infinite-heardle. To remove tags from etrian-INFINITE-heardle list : 
// musicNameList.map(m => { return { id: m.id, name: m.name, help: m.help, game: m.game, unofficial: m.unofficial } })
var musicNameList = [
    //// Etrian Odyssey 1
    // https://vgmdb.net/album/4418
    // Source to unofficial names: 
    // - https://www.squareenixmusic.com/albums/s/sekaiju.shtml
    // - https://www.youtube.com/playlist?list=PLFABB402B4A9DA2B9
    {
        id: 0,
        name: "The Tale Unfolds",
        help: "Opening",
        game: "Etrian Odyssey 1",
        unofficial: "Spinning the Tale"
    },
    {
        id: 1,
        name: "Cityscape: Thy Name Has Been Etched in the Hundredth Volume!",
        help: "Explorers Guild",
        game: "Etrian Odyssey 1",
        unofficial: "Town: That Name Was Engraved Into the 100th Volume!"
    },
    {
        id: 2,
        name: "Labyrinth I: Emerald Grove",
        help: "1st Stratum Dungeon 1F~5F",
        game: "Etrian Odyssey 1",
        unofficial: "Labyrinth I: The Green Green Woodlands"
    },
    {
        id: 3,
        name: "Strife: First Strike",
        help: "Normal Battle: 1st Part",
        game: "Etrian Odyssey 1",
        unofficial: "Battle: Initial Strike"
    },
    {
        id: 4,
        name: "Labyrinth II: Primitive Jungle",
        help: "2nd Stratum Dungeon 6F~10F",
        game: "Etrian Odyssey 1",
        unofficial: "Labyrinth II: The Vast Primeval Hidden Grove"
    },
    {
        id: 5,
        name: "Cityscape: Roadside Trees Outside the Window",
        help: "Etrian Square: Day 1",
        game: "Etrian Odyssey 1",
        unofficial: "Town: The Roadside Trees Outside The Window"
    },
    {
        id: 6,
        name: "Battlefield: A Storm Ahead",
        help: "FOE Battle",
        game: "Etrian Odyssey 1",
        unofficial: "Battlefield: A Sudden Gust of Wind Before Your Eyes"
    },
    {
        id: 7,
        name: "Cityscape: Lounge with Talks of Tomorrow",
        help: "Etrian Square: Night",
        game: "Etrian Odyssey 1",
        unofficial: "Town: The Lounge Where We Speak of Tomorrow"
    },
    {
        id: 8,
        name: "Labyrinth III: Azure Rainforest",
        help: "3rd Stratum Dungeon 11F~15F",
        game: "Etrian Odyssey 1",
        unofficial: "Labyrinth III: The Thousand Year Old Blue Woodlands"
    },
    {
        id: 9,
        name: "Scene: Red and Black",
        help: "Event: Fear",
        game: "Etrian Odyssey 1",
        unofficial: "Scene: Red and Black"
    },
    {
        id: 10,
        name: "Battlefield: Drenched in Red",
        help: "Boss Battle",
        game: "Etrian Odyssey 1",
        unofficial: "Battlefield: Dyed in Blood"
    },
    {
        id: 11,
        name: "Cityscape: Feast with Reverence",
        help: "Radha Hall",
        game: "Etrian Odyssey 1",
        unofficial: "Town: Festival of Worship"
    },
    {
        id: 12,
        name: "Labyrinth IV: Sandy Barrens",
        help: "4th Stratum Dungeon 16F~20F",
        game: "Etrian Odyssey 1",
        unofficial: "Labyrinth IV: The Withered Forest"
    },
    {
        id: 13,
        name: "Strife: Kill or be Killed",
        help: "Normal Battle: 2nd Part",
        game: "Etrian Odyssey 1",
        unofficial: "Battle: Destruction Begets Decay"
    },
    {
        id: 14,
        name: "Labyrinth V: Lost Shinjuku",
        help: "5th Stratum Dungeon 21F~25F",
        game: "Etrian Odyssey 1",
        unofficial: "Labyrinth V: The Capital of Shinjuku"
    },
    {
        id: 15,
        name: "Battlefield: The Two Towers",
        help: "Ren & Tlachtga Battle",
        game: "Etrian Odyssey 1",
        unofficial: "Battlefield: Rising Again"
    },
    {
        id: 16,
        name: "Scene: Blue and White",
        help: "Event: Truth",
        game: "Etrian Odyssey 1",
        unofficial: "Scene: Blue and White"
    },
    {
        id: 17,
        name: "Battlefield: The Throne of Heaven and Earth",
        help: "Last Boss Battle",
        game: "Etrian Odyssey 1",
        unofficial: "Battlefield: Throne of Creation"
    },
    {
        id: 18,
        name: "Heroes are Born, And the Story Continues",
        help: "Ending 1",
        game: "Etrian Odyssey 1",
        unofficial: "The Story of the Hero's Birth Continues"
    },
    {
        id: 19,
        name: "Cityscape: The Bird Atop the Gable",
        help: "Etrian Square: Day 2",
        game: "Etrian Odyssey 1",
        unofficial: "Town: Bird-Shaped Vane on the Roof"
    },
    {
        id: 20,
        name: "Labyrinth VI: Claret Hollows",
        help: "6th Stratum Dungeon 26F~30F",
        game: "Etrian Odyssey 1",
        unofficial: "Labyrinth VI: The Cavern of True Red"
    },
    {
        id: 21,
        name: "Strife: Rapture",
        help: "Normal Battle: Last Stratum",
        game: "Etrian Odyssey 1",
        unofficial: "Battle: Ecstasy"
    },
    {
        id: 22,
        name: "Battlefield: To Fall Is Fair",
        help: "Secret Boss Battle",
        game: "Etrian Odyssey 1",
        unofficial: "Battlefield: Scatter About"
    },
    {
        id: 23,
        name: "400: Your Adventures End",
        help: "Ending 2",
        game: "Etrian Odyssey 1",
        unofficial: "400: Your Adventure Has Ended"
    },
    {
        id: 24,
        name: "Until a New Dawn",
        help: "Game Over",
        game: "Etrian Odyssey 1",
        unofficial: "Until the Dawn of Another New Morning"
    },

    //// Etrian Odyssey 2: Heroes of Lagaard
    // https://vgmdb.net/album/6949
    // Source to unofficial names: 
    // - https://www.squareenixmusic.com/albums/s/sekaiju2.shtml
    // - https://www.youtube.com/playlist?list=PL805D68694D0996A8
    {
        id: 25,
        name: "Now Begin Your Adventure!",
        help: "Opening",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Come On, Start the Adventure!"
    },
    {
        id: 26,
        name: "Cityscape: The Ones Engraved in Legends",
        help: "Explorers Guild",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Town: Those Who Will Carve Their Name in Legends"
    },
    {
        id: 27,
        name: "Labyrinth I: Ancient Forest",
        help: "1st Stratum Dungeon 1F~5F",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Labyrinth I: Woodland Ruins"
    },
    {
        id: 28,
        name: "Battlefield: First Battle",
        help: "Normal Battle: 1st Part",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Battlefield: The First Campaign"
    },
    {
        id: 29,
        name: "Cityscape: Land Spread Up North",
        help: "Central City: Day",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Town: Vast Lands Spreading in the North"
    },
    {
        id: 30,
        name: "Labyrinth II: Auburn Thicket",
        help: "2nd Stratum Dungeon 6F~10F",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Labyrinth II: Ever-Scarlet Forest"
    },
    {
        id: 31,
        name: "Scene: Blood and Darkness",
        help: "Event: Fear",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Scene: Fresh Blood and Darkness"
    },
    {
        id: 32,
        name: "Battlefield: Gust of Death",
        help: "FOE Battle",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Battlefield: A Sudden Gust of Wind that Calls for Death"
    },
    {
        id: 33,
        name: "Cityscape: The Wind Shall Summon Heroes",
        help: "Central City: Night",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Town: The Wind Doesn't Draw Heroes"
    },
    {
        id: 34,
        name: "Labyrinth III: Frozen Grounds",
        help: "3rd Stratum Dungeon 11F~15F",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Labyrinth III: Woodland of Frozen Flowers"
    },
    {
        id: 35,
        name: "Battlefield: Guardian of the Doleful Glacier",
        help: "Artelinde & Wilhelm Battle",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Battlefield: Guardians of the Sorrowful Ice"
    },
    {
        id: 36,
        name: "Battlefield: Scarlet Rain",
        help: "Boss Battle",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Battlefield: Scarlet Rain"
    },
    {
        id: 37,
        name: "Cityscape: The Beautifully Noble Land",
        help: "Duke's Palace",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Town: Beautiful and Sublime Lands"
    },
    {
        id: 38,
        name: "Labyrinth IV: Petal Bridge",
        help: "4th Stratum Dungeon 16F~20F",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Labyrinth IV: Cherry Tree Bridge"
    },
    {
        id: 39,
        name: "Scene: Wings and Cherry Blossoms",
        help: "Event: Winged Man",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Scene: Cherry Trees and Wings"
    },
    {
        id: 40,
        name: "Battlefield: Resonating Sounds of Battle",
        help: "Normal Battle: 2nd Part",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Battlefield: Inspecting the Resounding Weapons"
    },
    {
        id: 41,
        name: "Labyrinth V: Heavenly Keep",
        help: "5th Stratum Dungeon 21F~25F",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Labyrinth V: Heaven's Rock Seat"
    },
    {
        id: 42,
        name: "Scene: Viridian and Silver",
        help: "Event: Truth",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Event: Azure and Silver"
    },
    {
        id: 43,
        name: "Battlefield: Final Battle",
        help: "Last Boss Battle: Part 1",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Battlefield: Last Battle"
    },
    {
        id: 44,
        name: "Battlefield: Overlord of Heavens",
        help: "Last Boss Battle: Part 2",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Battlefield: Heaven's Governor"
    },
    {
        id: 45,
        name: "Return of the Heroes",
        help: "Ending 1",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "The Heroes Return"
    },
    {
        id: 46,
        name: "Labyrinth VI: Forbidden Wood",
        help: "6th Stratum Dungeon 26F~30F",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Labyrinth VI: Forbidden Forest"
    },
    {
        id: 47,
        name: "Battlefield: Shudder",
        help: "Normal Battle: Last Stratum",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "Battlefield: Shiver"
    },
    {
        id: 48,
        name: "14: Until the Day You Rise Again",
        help: "Game Over",
        game: "Etrian Odyssey 2: Heroes of Lagaard",
        unofficial: "14: Once Again Until the Day of the Challenge"
    },

    //// Etrian Odyssey 3: The Drowned City
    // https://vgmdb.net/album/17639
    // Source to unofficial names: 
    // - https://www.youtube.com/playlist?list=PL52C40159A7DDB8FA
    {
        id: 49,
        name: "The Curtain Rises on an Adventure",
        help: "Opening",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "That's the Beginning of the Adventure"
    },
    {
        id: 50,
        name: "Cityscape: Engrave Thy Name and Go Forth",
        help: "Sea City Facility: Explorers Guild",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Town: Engrave Thy Name"
    },
    {
        id: 51,
        name: "Labyrinth I: Waterfall Wood",
        help: "1st Stratum Dungeon 1F~4F",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Labyrinth I: Waterfall Woodlands"
    },
    {
        id: 52,
        name: "Battlefield: The First Battle",
        help: "Normal Battle: 1st Part 1F~8F",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Battlefield: The First Campaign"
    },
    {
        id: 53,
        name: "Cityscape: Between the Azure Sky and Sea",
        help: "Sea City Facility: Armoroad Plaza (Day)",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Town: Between the Azure Skies and Seas"
    },
    {
        id: 54,
        name: "Labyrinth II: Undersea Grotto",
        help: "2nd Stratum Dungeon 5F~8F",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Labyrinth II: Water Woods of the Submarine Ridge"
    },
    {
        id: 55,
        name: "Scene: Unknown Threat",
        help: "Event: Tension",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Scene: Unknown Menace"
    },
    {
        id: 56,
        name: "Battlefield: Is this Blood Thine or the Enemy's?",
        help: "FOE Battle",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Battlefield: Is That Blood Thine or the Enemy's?"
    },
    {
        id: 57,
        name: "Cityscape: Sunlight on the Water",
        help: "Sea City Facility: Inver Port",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Town: Sunlight on the Water"
    },
    {
        id: 58,
        name: "Seascape: The Great Voyage",
        help: "Sailing",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Seascape: Great Voyage"
    },
    {
        id: 59,
        name: "Tumult: Crest of a Violent Wave",
        help: "Great Voyage Quest Boss Battle",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Disturbances: The End of the Raging Waves"
    },
    {
        id: 60,
        name: "Cityscape: The Dusk Clad Ocean City",
        help: "Sea City Facility: Armoroad Plaza (Night)",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Town: The Port City Bathed in Twilight"
    },
    {
        id: 61,
        name: "Labyrinth III: Molten Caves",
        help: "3rd Stratum Dungeon 9F~12F",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Labyrinth III: Cavern of Splendor"
    },
    {
        id: 62,
        name: "Tumult: Raise Thy Sword in Pride",
        help: "Boss Battle",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Disturbances: Hoist the Sword with Pride in the Heart"
    },
    {
        id: 63,
        name: "Cityscape: The Deep Blue Ocean City",
        help: "Deep City Facility: Deep City Plaza (Day)",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Town: The City on the Deep Blue Sea"
    },
    {
        id: 64,
        name: "Labyrinth IV: Abyssal Shrine",
        help: "4th Stratum Dungeon 16F~20F",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Labyrinth IV: The Blue Sea Temple of Ritual"
    },
    {
        id: 65,
        name: "Cityscape: The Overwatching Tree",
        help: "Deep City Facility: Deep City Plaza (Night)",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Town: The Ancient Capital Enveloped by the Great Tree"
    },
    {
        id: 66,
        name: "Battlefield: Those Who Fall",
        help: "Normal Battle: 2nd Part 9F~25F",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Battlefield: Those That Slay and Fall"
    },
    {
        id: 67,
        name: "Cityscape: One Hundred Years",
        help: "Sea City Establishment: Senatus",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Town: The Centennial"
    },
    {
        id: 68,
        name: "Labyrinth V: Porcelain Forest",
        help: "5th Stratum Dungeon 17F~20F",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Labyrinth V: Chalky Woods"
    },
    {
        id: 69,
        name: "Tumult: To Fall Is Fair",
        help: "Secret Boss Battle",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Disturbances: Scatter About"
    },
    {
        id: 70,
        name: "Scene: Cold Justice",
        help: "Event: Truth",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Scene: Cold Justice"
    },
    {
        id: 71,
        name: "Tumult: Each Their Own Justice",
        help: "Last Boss Battle",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Disturbances: Their Own Brand of Justice"
    },
    {
        id: 72,
        name: "Cityscape: The King Lost in Time",
        help: "Deep City Facility: Celestial Palace",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Town: The King Forgotten by Time"
    },
    {
        id: 73,
        name: "Labyrinth VI: Cyclopean Haunt",
        help: "6th Stratum Dungeon 21F~25F",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Labyrinth VI: The Vengeful God in the Dark Ocean Abyss"
    },
    {
        id: 74,
        name: "Tumult: Call That Dreadful Name",
        help: "Lowest Last Boss Battle",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Disturbances: Calling That Detestable Name"
    },
    {
        id: 75,
        name: "The End of Your Adventure",
        help: "Ending",
        game: "Etrian Odyssey 3: The Drowned City",
        unofficial: "Your Adventure Has Ended"
    },
    // "Until the Next Adventure [Game Over] - Etrian Odyssey 3: The Drowned City", // Same music as 14: Until the Day You Rise Again [Game Over] - Etrian Odyssey 2: Heroes of Lagaard

    //// Etrian Odyssey 4: Legends of the Titan
    // https://vgmdb.net/album/33201
    // Source to unofficial names: 
    // - https://www.youtube.com/playlist?list=PL40BC111AA2B81B61
    {
        id: 76,
        name: "Adventures Across the Sky",
        help: "Title Screen",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "On an Adventure Gliding Through the Skies"
    },
    {
        id: 77,
        name: "Cityscape: Engraved Are Names That Echo to the Morrow",
        help: "Explorers Guild",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Town: Engraved Are the Names That Will Resound Tomorrow"
    },
    {
        id: 78,
        name: "Landscape I: Windy Plains",
        help: "1st Stratum Skies",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Area I: Windy Plains"
    },
    {
        id: 79,
        name: "Labyrinth I: Lush Woodlands",
        help: "1st Stratum Dungeon",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Labyrinth I: Cerulean Woodlands"
    },
    {
        id: 80,
        name: "Battlefield: Gale Force",
        help: "Normal Battle: 1st Part",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Battlefield: Storm"
    },
    {
        id: 81,
        name: "Tumult: Crimson Blaze, Dancing Blades",
        help: "Boss Battle",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "War: The Burning Crimson Sword Dances"
    },
    {
        id: 82,
        name: "Cityscape: The City Embraced by a Teal Sky",
        help: "Town Plaza (Day)/Inn/Trading Post",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Town: A Town Embraced by the Azure Sky"
    },
    {
        id: 275,
        name: "Cityscape: Margherita's Afternoon",
        help: "Mark Grand Court",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Town: Margarita's Afternoon"
    },
    {
        id: 83,
        name: "Landscape II: Scarlet Pillars",
        help: "2nd Stratum Skies",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Area II: The Red Stone Forest"
    },
    {
        id: 84,
        name: "Labyrinth II: Misty Ravine",
        help: "2nd Stratum Dungeon",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Labyrinth II: Misty Ravine"
    },
    {
        id: 85,
        name: "Scene: Unexpected Meeting",
        help: "Foreigner Theme",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Scene: A Chance Meeting"
    },
    {
        id: 86,
        name: "Landscape III: Sacred Mountains",
        help: "3rd Stratum Skies",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Area III: Sacred Mountain of Silver Wind"
    },
    {
        id: 87,
        name: "Labyrinth III: Golden Lair",
        help: "3rd Stratum Dungeon",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Labyrinth III: Grotto of the Adamantine Beast"
    },
    {
        id: 276,
        name: "Scene: Approaching Disaster",
        help: "Event: Tension/Fear",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Scene: Imminent Calamity"
    },
    {
        id: 88,
        name: "Battlefield: Brush with Death",
        help: "Labyrinth FOE Battle",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Battlefield: The Fall of the Final Enemy"
    },
    {
        id: 89,
        name: "Cityscape: Lukewarm Peace in the Shade",
        help: "Town Plaza (Night)/Bar",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Town: The Bliss of the Twilight"
    },
    {
        id: 90,
        name: "Landscape IV: Cloudy Stronghold",
        help: "4th Stratum Skies",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Area IV: The Land Beyond the Clouds"
    },
    {
        id: 91,
        name: "Labyrinth IV: Echoing Library",
        help: "4th Stratum Dungeon",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Labyrinth IV: Library of Puppets"
    },
    {
        id: 92,
        name: "Battlefield: One's Faith in the Staff",
        help: "Normal Battle: 2nd Part",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Battlefield: Faith Is My Pillar"
    },
    {
        id: 93,
        name: "Maze IV: Ruins Littered with Memories",
        help: "4th Stratum Sub Dungeons",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Minor Labyrinth IV: Ruins Touched by the Memories of the Ancient"
    },
    {
        id: 94,
        name: "Maze III: Cave Excited by a New Encounter",
        help: "3rd Stratum Sub Dungeons",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Minor Labyrinth III: A Cave of Exciting New Encounters"
    },
    {
        id: 95,
        name: "Maze II: Forest Confounded by an Unknown Encounter",
        help: "2nd Stratum Sub Dungeons",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Minor Labyrinth II: Lead Astray in the Lost Woods"
    },
    {
        id: 96,
        name: "Maze I: Path Worn by Explorers",
        help: "1st Stratum Sub Dungeons",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Minor Labyrinth I: The Undiscovered Realm"
    },
    {
        id: 97,
        name: "Scene: Wind in the Silence",
        help: "Event: Truth",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Scene: The Silent Wind Blows"
    },
    {
        id: 98,
        name: "Labyrinth V: Forgotten Capital",
        help: "5th Stratum Dungeon",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Labyrinth V: City of Radiant Ruin"
    },
    {
        id: 99,
        name: "Tumult: Inheritor of the Legend",
        help: "Last Boss Battle",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "War: The Legend's Successor"
    },
    {
        id: 100,
        name: "The Ceaseless Melody",
        help: "Ending (Staff Roll)",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "The Relentless Melody"
    },
    {
        id: 101,
        name: "Scene: The Ancient Pact",
        help: "Foreigner Theme B",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Scene: The Ancient Oath"
    },
    {
        id: 102,
        name: "Labyrinth VI: Hall of Darkness",
        help: "6th Stratum Dungeon",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Labyrinth VI: Den of the Dark Realm"
    },
    {
        id: 103,
        name: "Battlefield: Eyes Wide Open",
        help: "Normal Battle: Last Stratum",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Battlefield: With Eyes Blazing"
    },
    {
        id: 104,
        name: "Tumult: Beyond the Scorching Heat",
        help: "Skies FOE/Hunting Quest/Event Boss",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "War: The End of Raging Winds"
    },
    {
        id: 105,
        name: "Tumult: To Fall Is Fair",
        help: "Dragons Boss Battle",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "War: Scatter About"
    },
    {
        id: 106,
        name: "The End of Your Adventure",
        help: "Ending 2",
        game: "Etrian Odyssey 4: Legends of the Titan",
        unofficial: "Your Adventure Has Ended"
    },

    //// Etrian Odyssey Untold: The Millennium Girl
    // https://vgmdb.net/album/39537
    {
        id: 107,
        name: "The Tale Unfolds",
        help: "Opening",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Spinning the Tale"
    },
    {
        id: 108,
        name: "Cityscape: Thy Name Has Been Etched in the Hundredth Volume!",
        help: "Explorers Guild",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Town: That Name Was Engraved Into the 100th Volume!"
    },
    {
        id: 109,
        name: "Labyrinth I: Emerald Grove",
        help: "1st Stratum Dungeon 1F~5F",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Labyrinth I: The Green Green Woodlands"
    },
    {
        id: 110,
        name: "Strife: First Strike",
        help: "Normal Battle: 1st Part",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battle: Initial Strike"
    },
    {
        id: 111,
        name: "Labyrinth II: Primitive Jungle",
        help: "2nd Stratum Dungeon 6F~10F",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Labyrinth II: The Vast Primeval Hidden Grove"
    },
    {
        id: 112,
        name: "Cityscape: Roadside Trees Outside the Window",
        help: "Etria Plaza (Day 1)",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Town: The Roadside Trees Outside the Window"
    },
    {
        id: 113,
        name: "Battlefield: A Storm Ahead",
        help: "FOE Battle",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battlefield: A Sudden Gust of Wind Before Your Eyes"
    },
    {
        id: 114,
        name: "Cityscape: Lounge with Talks of Tomorrow",
        help: "Etria Plaza (Night)",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Town: The Lounge Where We Speak of Tomorrow"
    },
    {
        id: 115,
        name: "Labyrinth III: Azure Rainforest",
        help: "3rd Stratum Dungeon 11F~15F",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Labyrinth III: The Thousand Year Old Blue Woodlands"
    },
    {
        id: 116,
        name: "Scene: Red and Black",
        help: "Event: Fear",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Scene: Red and Black"
    },
    {
        id: 117,
        name: "Battlefield: Drenched in Red",
        help: "Boss Battle",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battlefield: Dyed in Blood"
    },
    {
        id: 118,
        name: "Cityscape: Feast with Reverence",
        help: "Radha Hall",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Town: Festival of Worship"
    },
    {
        id: 119,
        name: "Labyrinth IV: Sandy Barrens",
        help: "4th Stratum Dungeon 16F~20F",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Labyrinth IV: The Withered Forest"
    },
    {
        id: 120,
        name: "Strife: Kill or be Killed",
        help: "Normal Battle: 2nd Part",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battle: Destruction Begets Decay"
    },
    {
        id: 121,
        name: "Labyrinth V: Lost Shinjuku",
        help: "5th Stratum Dungeon 21F~25F",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Labyrinth V: The Capital of Shinjuku"
    },
    {
        id: 122,
        name: "Battlefield: The Two Towers",
        help: "Ren & Tlachtga Battle",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battlefield: Rising Again"
    },
    {
        id: 123,
        name: "Scene: Blue and White",
        help: "Event: Truth",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Scene: Blue and White"
    },
    {
        id: 124,
        name: "Battlefield: The Throne of Heaven and Earth",
        help: "Last Boss Battle",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battlefield: Throne of Creation"
    },
    {
        id: 125,
        name: "Heroes are Born, And the Story Continues",
        help: "Ending 1",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "The Story of the Hero's Birth Continues"
    },
    {
        id: 126,
        name: "Cityscape: The Bird Atop the Gable",
        help: "Etria Plaza (Day 2)",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Town: Bird-Shaped Vane on the Roof"
    },
    {
        id: 127,
        name: "Labyrinth VI: Claret Hollows",
        help: "6th Stratum Dungeon 26F~30F",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Labyrinth VI: The Cavern of True Red"
    },
    {
        id: 128,
        name: "Strife: Rapture",
        help: "Normal Battle: Last Stratum",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battle: Ecstasy"
    },
    {
        id: 129,
        name: "Battlefield: To Fall Is Fair",
        help: "Secret Boss Battle",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battlefield: Scatter About"
    },
    {
        id: 130,
        name: "400: Your Adventures End",
        help: "Ending 2",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "400: Your Adventure Has Ended"
    },
    {
        id: 131,
        name: "the beginning of the end",
        help: "Town Opening Animation",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "the beginning of the end"
    },
    {
        id: 132,
        name: "Cityscape: Prep for Tomorrow",
        help: "Guild House",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Town: Preparing For Tomorrow"
    },
    {
        id: 133,
        name: "Labyrinth: Gladsheim",
        help: "New Dungeon: Gladsheim 1F~4F",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Labyrinth: Gladsheim"
    },
    {
        id: 134,
        name: "Battlefield: Trigger of Conflict",
        help: "Normal Battle: Gladsheim",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battlefield: Furnace of War"
    },
    {
        id: 135,
        name: "Reminiscence: A Millennium of Solitude",
        help: "Event: Thoughts",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Recollection: A Thousand Years of Solitude"
    },
    {
        id: 136,
        name: "Tumult: A Clash of Crimson",
        help: "Boss Battle: Gladsheim",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "War: Crimson Weapons"
    },
    {
        id: 137,
        name: "Melancholy: Each Their Own Memories",
        help: "Event: Sadness",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Sorrow: Thinking of Each Other"
    },
    {
        id: 138,
        name: "Labyrinth: Gladsheim: The Pulse of Time",
        help: "New Dungeon: Gladsheim 5F",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Labyrinth: Gladsheim: Pulse of Time"
    },
    {
        id: 139,
        name: "Final Battle: The Future of the World",
        help: "Last Boss Battle: Gladsheim",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Decisive Battle: The End of the World"
    },
    {
        id: 140,
        name: "The Battlefield That Never Sleeps",
        help: "Lowest Last Boss Battle",
        game: "Etrian Odyssey Untold: The Millennium Girl",
        unofficial: "Battlefield's Awakening"
    },

    //// Etrian Odyssey 2 Untold: The Fafnir Knight
    // https://vgmdb.net/album/49255
    {
        id: 141,
        name: "Now Begin Your Adventure!",
        help: "Opening",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Come On, Start the Adventure!"
    },
    {
        id: 142,
        name: "Cityscape: The Ones Engraved in Legends",
        help: "Explorers Guild",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Town: Those Who Will Carve Their Name in Legends"
    },
    {
        id: 143,
        name: "Labyrinth I: Ancient Forest",
        help: "1st Stratum Dungeon 1F~5F",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Labyrinth I: Woodland Ruins"
    },
    {
        id: 144,
        name: "Battlefield: The First Battle",
        help: "Normal Battle: 1st Part",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: The First Campaign"
    },
    {
        id: 145,
        name: "Cityscape: Land Spread Up North",
        help: "Hi-Lagaard Plaza (Day)",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Town: Vast Lands Spreading in the North"
    },
    {
        id: 146,
        name: "Labyrinth II: Auburn Thicket",
        help: "2nd Stratum Dungeon 6F~10F",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Labyrinth II: Ever-Scarlet Forest"
    },
    {
        id: 147,
        name: "Scene: Blood and Darkness",
        help: "Event: Fear",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Scene: Fresh Blood and Darkness"
    },
    {
        id: 148,
        name: "Battlefield: Gust of Death",
        help: "FOE Battle",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: A Sudden Gust of Wind that Calls for Death"
    },
    {
        id: 149,
        name: "Cityscape: The Wind Shall Summon Heroes",
        help: "Hi-Lagaard Plaza (Night)",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Town: The Wind Doesn't Draw Heroes"
    },
    {
        id: 150,
        name: "Labyrinth III: Frozen Grounds",
        help: "3rd Stratum Dungeon 11F~15F",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Labyrinth III: Woodland of Frozen Flowers"
    },
    {
        id: 151,
        name: "Battlefield: Guardian of the Doleful Glacier",
        help: "Artelinde & Wilhelm Battle",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: Guardians of the Sorrowful Ice"
    },
    {
        id: 152,
        name: "Battlefield: Scarlet Rain",
        help: "Boss Battle",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: Scarlet Rain"
    },
    {
        id: 153,
        name: "Cityscape: The Beautifully Noble Land",
        help: "Lagaard Archduke Palace",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Town: Beautiful and Sublime Lands"
    },
    {
        id: 154,
        name: "Labyrinth IV: Petal Bridge",
        help: "4th Stratum Dungeon 16F~20F",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Labyrinth IV: Cherry Tree Bridge"
    },
    {
        id: 155,
        name: "Scene: Wings and Cherry Blossoms",
        help: "Event: Winged Man",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Scene: Cherry Trees and Wings"
    },
    {
        id: 156,
        name: "Battlefield: Resonating Sounds of Battle",
        help: "Normal Battle: 2nd Part",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: Inspecting the Resounding Weapons"
    },
    {
        id: 157,
        name: "Labyrinth V: Heavenly Keep",
        help: "5th Stratum Dungeon 21F~25F",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Labyrinth V: Heaven's Rock Seat"
    },
    {
        id: 158,
        name: "Scene: Viridian and Silver",
        help: "Event: Truth",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Event: Azure and Silver"
    },
    {
        id: 159,
        name: "Battlefield: The Final Battle",
        help: "Last Boss Battle: Part 1",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: Last Battle"
    },
    {
        id: 160,
        name: "Battlefield: Overlord of Heavens",
        help: "Last Boss Battle: Part 2",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: Heaven's Governor"
    },
    {
        id: 161,
        name: "Return of the Heroes",
        help: "Ending 1",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "The Heroes Return"
    },
    {
        id: 162,
        name: "Labyrinth VI: Forbidden Wood",
        help: "6th Stratum Dungeon 26F~30F",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Labyrinth VI: Forbidden Forest"
    },
    {
        id: 163,
        name: "Battlefield: Shudder",
        help: "Normal Battle: Last Stratum",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: Shiver"
    },
    {
        id: 164,
        name: "Battlefield: To Fall Is Fair",
        help: "Secret Boss Battle",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: Scatter About"
    },
    {
        id: 165,
        name: "Reaching out for our future",
        help: "Opening Theme Song",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Reaching out for our future"
    },
    {
        id: 166,
        name: "Cityscape: Peaceful Dining",
        help: "Guild House",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Town: Peaceful Dining Table"
    },
    {
        id: 167,
        name: "Labyrinth: Ginnungagap",
        help: "New Dungeon: Ginnungagap 1F~4F",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Labyrinth: Ginnunga"
    },
    {
        id: 168,
        name: "Battlefield: Raise Thy Swords",
        help: "Normal Battle: Ginnungagap",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Battlefield: Swords Swung"
    },
    {
        id: 169,
        name: "Grief: The Ends of Emotion",
        help: "Event: Protector",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Sorrow: End of Thinking"
    },
    {
        id: 170,
        name: "Tumult: Shadow of Death",
        help: "Boss Battle: Ginnungagap",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "War: Shadows of Death over there"
    },
    {
        id: 171,
        name: "Melancholy: Along with the Wind",
        help: "Event: Sadness",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Sorrow: With the Wind"
    },
    {
        id: 172,
        name: "Labyrinth: The Deep Ends of Ginnungagap",
        help: "New Dungeon: Ginnungagap 5F",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Labyrinth: Deep Ginnunga"
    },
    {
        id: 173,
        name: "Seize the Future",
        help: "Event: Theme",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "The future to that hand"
    },
    {
        id: 174,
        name: "Tumult: Sounds of War Deep Below",
        help: "Final Boss Battle: Ginnungagap",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "War: At the End of Labyrinth, Resound of Swords"
    },
    {
        id: 175,
        name: "Desperate Battle: Risking Our Lives",
        help: "Transformation BGM",
        game: "Etrian Odyssey 2 Untold: The Fafnir Knight",
        unofficial: "Bloody Fight: Betting It All"
    },

    //// Etrian Mystery Dungeon
    // https://vgmdb.net/album/51160
    {
        id: 176,
        name: "Beginning of a New Adventure",
        help: "Title Screen",
        game: "Etrian Mystery Dungeon",
        unofficial: "Beginning of a New Adventure"
    },
    {
        id: 177,
        name: "Engrave Thy Name",
        help: "Explorers Guild",
        game: "Etrian Mystery Dungeon",
        unofficial: "Engrave Your Name"
    },
    {
        id: 178,
        name: "Thy Name Has Been Etched in the Hundredth Volume!",
        help: "1st Labyrinth: Mysterious Labyrinth",
        game: "Etrian Mystery Dungeon",
        unofficial: "Town: That Name Was Engraved Into the 100th Volume!"
    },
    {
        id: 179,
        name: "Town of Aslarga",
        help: "Town",
        game: "Etrian Mystery Dungeon",
        unofficial: "Town of Aslarga"
    },
    {
        id: 180,
        name: "Auburn Thicket",
        help: "2nd Labyrinth: Emerald Copse",
        game: "Etrian Mystery Dungeon",
        unofficial: "Ever-Scarlet Forest"
    },
    {
        id: 181,
        name: "Waterfall Wood",
        help: "3rd Labyrinth: Pristine Stream",
        game: "Etrian Mystery Dungeon",
        unofficial: "Waterfall Woodlands"
    },
    {
        id: 182,
        name: "Memories of Days Foregone",
        help: "Event: Painful Memories",
        game: "Etrian Mystery Dungeon",
        unofficial: "Memories of Days Past"
    },
    {
        id: 183,
        name: "Song of Nomads",
        help: "Event: Mystery Solving",
        game: "Etrian Mystery Dungeon",
        unofficial: "Song of the Wandering"
    },
    {
        id: 184,
        name: "A Storm Ahead",
        help: "4th Labyrinth: Haunted Woods",
        game: "Etrian Mystery Dungeon",
        unofficial: "A Sudden Gust of Wind Before Your Eyes"
    },
    {
        id: 185,
        name: "Raise Thy Sword in Pride",
        help: "Boss Battle: 1st Part",
        game: "Etrian Mystery Dungeon",
        unofficial: "Hoist the Sword and Pride in the Heart"
    },
    {
        id: 186,
        name: "Waltz of the Red Lion",
        help: "Labyrinth Shop",
        game: "Etrian Mystery Dungeon",
        unofficial: "Waltz of the Red Lion"
    },
    {
        id: 187,
        name: "Regain Thy Treasure, Fight for Thy Soul",
        help: "Labyrinth Shop (Robbery)",
        game: "Etrian Mystery Dungeon",
        unofficial: "Recapture the Treasure, Contest the Soul"
    },
    {
        id: 188,
        name: "Is This Blood Thine or the Enemy's?",
        help: "DOE Battle",
        game: "Etrian Mystery Dungeon",
        unofficial: "Is That Blood Thine or the Enemy's?"
    },
    {
        id: 189,
        name: "Drifting Suspicions",
        help: "Event: Arising Anxiety",
        game: "Etrian Mystery Dungeon",
        unofficial: "Drifting Doubts"
    },
    {
        id: 190,
        name: "Sacred Mountains",
        help: "5th Labyrinth: Crystalline Peak",
        game: "Etrian Mystery Dungeon",
        unofficial: "Sacred Mountain of Silver Wind"
    },
    {
        id: 191,
        name: "Darkness and Crimson",
        help: "Event: Fear Leading to Despair",
        game: "Etrian Mystery Dungeon",
        unofficial: "The Dark and the Crimson"
    },
    {
        id: 192,
        name: "Brush with Death",
        help: "Monster House",
        game: "Etrian Mystery Dungeon",
        unofficial: "The Fall of the Final Enemy"
    },
    {
        id: 193,
        name: "Gust of Death",
        help: "6th Labyrinth: Torrential Ravine",
        game: "Etrian Mystery Dungeon",
        unofficial: "A Sudden Gust of Wind that Calls for Death"
    },
    {
        id: 194,
        name: "Amber and Yggdrasil",
        help: "Event: Amber",
        game: "Etrian Mystery Dungeon",
        unofficial: "Amber and Yggdrasil"
    },
    {
        id: 195,
        name: "Beyond the Scorching Heat",
        help: "7th Labyrinth: Muspelheim",
        game: "Etrian Mystery Dungeon",
        unofficial: "The End of Raging Winds"
    },
    {
        id: 196,
        name: "Each Their Own Justice",
        help: "Last Boss Battle",
        game: "Etrian Mystery Dungeon",
        unofficial: "Their Own Brand of Justice"
    },
    {
        id: 197,
        name: "Your Adventures End",
        help: "Ending 1",
        game: "Etrian Mystery Dungeon",
        unofficial: "Your Adventure Has Ended"
    },
    {
        id: 198,
        name: "Porcelain Forest",
        help: "8th Labyrinth: Forest of Gates",
        game: "Etrian Mystery Dungeon",
        unofficial: "Chalky Woods (8th Labyrinth: Forest of Gates) - Etrian Mystery Dungeon"
    },
    {
        id: 199,
        name: "Forbidden Wood",
        help: "9th Labyrinth: Equinox Garden",
        game: "Etrian Mystery Dungeon",
        unofficial: "Forbidden Forest"
    },
    {
        id: 200,
        name: "Petal Bridge",
        help: "10th Labyrinth: Utopia",
        game: "Etrian Mystery Dungeon",
        unofficial: "Cherry Tree Bridge"
    },
    {
        id: 201,
        name: "One's Faith in the Staff",
        help: "11th Labyrinth: Phantom Depths",
        game: "Etrian Mystery Dungeon",
        unofficial: "Faith Is My Pillar"
    },
    {
        id: 202,
        name: "Crimson Blaze, Dancing Blades",
        help: "Dragon's Cave: Thunderous Cave/Glacial Cave/Burning Cave",
        game: "Etrian Mystery Dungeon",
        unofficial: "The Burning Crimson Sword Dances"
    },
    {
        id: 203,
        name: "To Fall Is Fair",
        help: "Boss Battle: 2nd Part",
        game: "Etrian Mystery Dungeon",
        unofficial: "Scatter About"
    },
    {
        id: 204,
        name: "Shudder",
        help: "12th Labyrinth: Champion's Hall",
        game: "Etrian Mystery Dungeon",
        unofficial: "Shiver"
    },
    {
        id: 205,
        name: "City Remains",
        help: "Mysterious Forest",
        game: "Etrian Mystery Dungeon",
        unofficial: "The Forgotten Capital"
    },
    {
        id: 206,
        name: "Call That Dreadful Name",
        help: "Lowest Last Boss Battle",
        game: "Etrian Mystery Dungeon",
        unofficial: "Calling That Detestable Name"
    },
    {
        id: 207,
        name: "The End of Your Adventure",
        help: "Ending 2",
        game: "Etrian Mystery Dungeon",
        unofficial: "Your Adventure Has Ended"
    },

    //// Etrian Odyssey 5: Beyond the Myth
    // https://vgmdb.net/album/60288
    {
        id: 208,
        name: "The Voice That Invites You to Adventure",
        help: "Opening",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "The Voice That Calls To Adventure"
    },
    {
        id: 209,
        name: "Ones Who Carry on the Legend",
        help: "Title Screen",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "The Hand that Spins the Legend"
    },
    {
        id: 210,
        name: "Cityscape: Names That will be Spoken of for Generations",
        help: "Explorers Guild",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Town: Remembering the Names Passed Down"
    },
    {
        id: 211,
        name: "Labyrinth I: Tutelary Forest",
        help: "1st Stratum Dungeon 1F~5F",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Labyrinth I: Guardian Spirit's Woodland"
    },
    {
        id: 212,
        name: "Battlefield: First Move",
        help: "Normal Battle: 1st Part",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Battlefield: Activation"
    },
    {
        id: 213,
        name: "Labyrinth II: Jagged Reach",
        help: "2nd Stratum Dungeon 6F~10F",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Labyrinth II: Shrine Road of Monoliths"
    },
    {
        id: 214,
        name: "Cityscape: The Sun Rises for Ones Who Smile",
        help: "Town Plaza (Day)/Inn",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Town: Source of the Morning Glow's Smiling Face"
    },
    {
        id: 215,
        name: "Battlefield: A Crucial Moment",
        help: "FOE Battle",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Battlefield: Critical Situation"
    },
    {
        id: 216,
        name: "Cityscape: End of the Twin's Banquet",
        help: "Town Plaza (Night)/Shop/Bar",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Town: Waning Twins' Party"
    },
    {
        id: 217,
        name: "Labyrinth III: Fetid Necropolis",
        help: "3rd Stratum Dungeon 11F~15F",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Labyrinth III: Graveyard of Darkness"
    },
    {
        id: 218,
        name: "Scene: Cold Justice",
        help: "Event: Truth",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Scene: Cold Justice"
    },
    {
        id: 219,
        name: "Battlefield: Roaring Sky, Shattering Land",
        help: "Boss Battle",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Unrest: Empty Ringing, The Earth Splits"
    },
    {
        id: 220,
        name: "Cityscape: Where the Light Shines",
        help: "Council Hall",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Town: The Light That Once Shone"
    },
    {
        id: 221,
        name: "Labyrinth IV: Lucent Hollows",
        help: "4th Stratum Dungeon 16F~20F",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Labyrinth IV: Rainbow Druse"
    },
    {
        id: 222,
        name: "Battlefield: Grasp the Future Beyond a Deadly Battle",
        help: "Normal Battle: 2nd Part",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Battlefield: Life or Death Struggle to Seize the Future"
    },
    {
        id: 223,
        name: "Scene: Unknown Threat",
        help: "Event: Tension",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Scene: Unknown Menace"
    },
    {
        id: 224,
        name: "Labyrinth V: Untamed Garden",
        help: "5th Stratum Dungeon 21F~25F",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Labyrinth V: Primeval Forest Ring"
    },
    {
        id: 225,
        name: "Battlefield: Challenge of the Stars",
        help: "Last Boss Battle",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Unrest: Ordeal of Stars"
    },
    {
        id: 226,
        name: "Alongside Proof of Attainment",
        help: "Ending 1",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Triumph Together Under Our Banner"
    },
    {
        id: 227,
        name: "Labyrinth VI: Empyreal Bridge",
        help: "6th Stratum Dungeon 26F~30F",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Labyrinth VI: Redshift Corridor"
    },
    {
        id: 228,
        name: "Battlefield: Flashing Blades",
        help: "Normal Battle: Last Stratum",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Battlefield: Shining Dagger, Shadow Blade"
    },
    {
        id: 229,
        name: "Battlefield: Roaming Ruler",
        help: "Lowest Last Boss Battle",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Unrest: Lord of the Beyond"
    },
    {
        id: 230,
        name: "Tumult: Crest of a Violent Wave (Arranged Ver.)",
        help: "Secret Boss Battle",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "Unrest: End of the Raging Waves (Arranged Ver.)"
    },
    {
        id: 231,
        name: "Beyond the Myth",
        help: "Ending 2",
        game: "Etrian Odyssey 5: Beyond the Myth",
        unofficial: "End of the Long Myth"
    },

    //// Etrian Mystery Dungeon 2
    // https://vgmdb.net/album/69916
    {
        id: 232,
        name: "Those Who Heed the Call",
        help: "Opening",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Those Who Heed the Call"
    },
    {
        id: 233,
        name: "The Curtain Rises on a Legend",
        help: "Title Screen",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "The Curtain Rises on a Legend"
    },
    {
        id: 234,
        name: "Lakeside Town Oberfay",
        help: "Town",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Lakeside Town Oberfay"
    },
    {
        id: 235,
        name: "Halcyon Days",
        help: "Boss Defeated",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Halcyon Days"
    },
    {
        id: 236,
        name: "Hot Spring Inn, Sunlit Forest",
        help: "Inn",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Hot Spring Inn, Sunlit Forest"
    },
    {
        id: 237,
        name: "Jungle Ruins",
        help: "1st Labyrinth",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Jungle Ruins"
    },
    {
        id: 238,
        name: "Emerald Grove",
        help: "2nd Labyrinth",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "The Green Green Woodlands"
    },
    {
        id: 239,
        name: "Molten Caves",
        help: "3rd Labyrinth",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Cavern of Splendor"
    },
    {
        id: 240,
        name: "Azure Rainforest",
        help: "4th Labyrinth",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "The Thousand Year Old Blue Woodlands"
    },
    {
        id: 241,
        name: "Abyssal Shrine",
        help: "5th Labyrinth",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "The Blue Sea Temple of Ritual"
    },
    {
        id: 242,
        name: "Frozen Grounds",
        help: "6th Labyrinth",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Woodland of Frozen Flowers"
    },
    {
        id: 243,
        name: "Claret Hollows",
        help: "7th Labyrinth",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "The Cavern of True Red"
    },
    {
        id: 244,
        name: "Misty Ravine",
        help: "8th Labyrinth",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Misty Ravine"
    },
    {
        id: 245,
        name: "Ancient Circuitry",
        help: "9th Labyrinth: 1st Part",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Ancient Circuitry"
    },
    {
        id: 246,
        name: "Creeping Decay",
        help: "9th Labyrinth: 2nd Part",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Creeping Decay"
    },
    {
        id: 247,
        name: "Infinite Foes",
        help: "Boss Battle",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Infinite Foes"
    },
    {
        id: 248,
        name: "Illusory Showdown",
        help: "Nadhica Boss Battle",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Illusory Showdown"
    },
    {
        id: 249,
        name: "The Gods Afflicted",
        help: "Last Boss Battle",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "The Gods Afflicted"
    },
    {
        id: 250,
        name: "Bloodstained Sword",
        help: "Lowest Last Boss Battle",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "Bloodstained Sword"
    },
    {
        id: 251,
        name: "The Curtain Falls on the Adventure",
        help: "Ending",
        game: "Etrian Mystery Dungeon 2",
        unofficial: "The Curtain Falls on the Adventure"
    },

    //// Etrian Odyssey Nexus
    // https://vgmdb.net/album/85264
    {
        id: 252,
        name: "To the Stage of a New Adventure",
        help: "Opening",
        game: "Etrian Odyssey Nexus",
        unofficial: "To the Stage of a New Adventure"
    },
    {
        id: 253,
        name: "Intersecting Journeys",
        help: "Title Screen",
        game: "Etrian Odyssey Nexus",
        unofficial: "Intersecting Journeys"
    },
    {
        id: 254,
        name: "Cityscape: Etch Thy Name among the Stars",
        help: "Explorers Guild",
        game: "Etrian Odyssey Nexus",
        unofficial: "Town: Etch Thy Name among the Stars"
    },
    {
        id: 255,
        name: "Cityscape: Cradle of the Lone Isle",
        help: "Town Plaza (Day)/Inn",
        game: "Etrian Odyssey Nexus",
        unofficial: "Town: Cradle of the Lone Isle"
    },
    {
        id: 256,
        name: "Islescape: Undiscovered Continent",
        help: "World Map",
        game: "Etrian Odyssey Nexus",
        unofficial: "Islescape: Undiscovered Continent"
    },
    {
        id: 257,
        name: "Cityscape: Seek the Hidden Treasure",
        help: "Exploration HQ",
        game: "Etrian Odyssey Nexus",
        unofficial: "Town: Seek the Hidden Treasure"
    },
    {
        id: 258,
        name: "Labyrinth: World Shrine",
        help: "Dungeon: World Shrine",
        game: "Etrian Odyssey Nexus",
        unofficial: "Labyrinth: World Shrine"
    },
    {
        id: 259,
        name: "Battlefield: Elation",
        help: "Normal Battle (1st Part)",
        game: "Etrian Odyssey Nexus",
        unofficial: "Battlefield: Elation"
    },
    {
        id: 260,
        name: "Battlefield: The Foolhardy are Bathed in Blood",
        help: "FOE Battle (1st Part)",
        game: "Etrian Odyssey Nexus",
        unofficial: "Battlefield: The Foolhardy are Bathed in Blood"
    },
    {
        id: 261,
        name: "Tumult: The Slaughtered",
        help: "Boss Battle (1st Part)",
        game: "Etrian Odyssey Nexus",
        unofficial: "Tumult: The Slaughtered"
    },
    {
        id: 262,
        name: "Labyrinth: Yggdrasil Labyrinth",
        help: "Dungeon: Yggdrasil Labyrinth",
        game: "Etrian Odyssey Nexus",
        unofficial: "Labyrinth: Yggdrasil Labyrinth"
    },
    {
        id: 263,
        name: "Battlefield: Death's Crossroad",
        help: "Normal Battle (9th Part)",
        game: "Etrian Odyssey Nexus",
        unofficial: "Battlefield: Death's Crossroad"
    },
    {
        id: 264,
        name: "Battlefield: Dye the Mad with Blood",
        help: "FOE Battle (6th Part)",
        game: "Etrian Odyssey Nexus",
        unofficial: "Battlefield: Dye the Mad with Blood"
    },
    {
        id: 265,
        name: "Tumult: Twilight of All Life",
        help: "Last Boss Battle",
        game: "Etrian Odyssey Nexus",
        unofficial: "Tumult: Twilight of All Life"
    },
    {
        id: 266,
        name: "Labyrinth: Abyssal Shrine",
        help: "Dungeon: Abyssal Shrine",
        game: "Etrian Odyssey Nexus",
        unofficial: "Labyrinth: The Blue Sea Temple of Ritual"
    },
    {
        id: 267,
        name: "Cityscape: The Dusk-clad Ocean City (Etrian Odyssey Nexus Ver.)",
        help: "Town Plaza (Night)/Shop/Bar",
        game: "Etrian Odyssey Nexus",
        unofficial: "Town: The Dusk-clad Ocean City (Etrian Odyssey Nexus Ver.)"
    },
    {
        id: 268,
        name: "Labyrinth I: Waterfall Wood (Etrian Odyssey Nexus Ver.)",
        help: "Dungeon: Waterfall Wood",
        game: "Etrian Odyssey Nexus",
        unofficial: "Labyrinth I: Waterfall Woodlands (Etrian Odyssey Nexus Ver.)"
    },
    {
        id: 269,
        name: "Battlefield: The First Battle (Etrian Odyssey Nexus Ver.)",
        help: "Normal Battle (4th Part)",
        game: "Etrian Odyssey Nexus",
        unofficial: "Battlefield: The First Campaign (Etrian Odyssey Nexus Ver.)"
    },
    {
        id: 270,
        name: "Battlefield: Is this Blood Thine or the Enemy's? (Etrian Odyssey Nexus Ver.)",
        help: "FOE Battle (4th Part)",
        game: "Etrian Odyssey Nexus",
        unofficial: "Battlefield: Is That Blood Thine or the Enemy's? (Etrian Odyssey Nexus Ver.)"
    },
    {
        id: 271,
        name: "Tumult: Raise Thy Sword in Pride (Etrian Odyssey Nexus Ver.)",
        help: "Boss Battle (4st Part)",
        game: "Etrian Odyssey Nexus",
        unofficial: "Disturbances: Hoist the Sword with Pride in the Heart (Etrian Odyssey Nexus Ver.)"
    },
    {
        id: 272,
        name: "Labyrinth II: Undersea Grotto (Etrian Odyssey Nexus Ver.)",
        help: "Dungeon: Undersea Grotto",
        game: "Etrian Odyssey Nexus",
        unofficial: "Labyrinth II: Water Woods of the Submarine Ridge (Etrian Odyssey Nexus Ver.)"
    },
    {
        id: 273,
        name: "Tumult: Call that Dreadful Name (Etrian Odyssey Nexus Ver.)",
        help: "Lowest Last Boss Battle",
        game: "Etrian Odyssey Nexus",
        unofficial: "Disturbances: Calling That Detestable Name (Etrian Odyssey Nexus Ver.)"
    },

    //// Etrian Odyssey Origins Collection
    // https://vgmdb.net/album/130629
    {
        id: 274,
        name: "Battlefield: Perish Like the Dew",
        help: "Normal Battle: Last Stratum",
        game: "Etrian Odyssey Origins Collection : Etrian Odyssey 3",
        unofficial: "Battlefield: Perish Like the Dew"
    }
]