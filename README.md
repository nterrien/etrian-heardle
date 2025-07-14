# etrian-heardle

A clone of [Heardle](https://www.heardle.app/), and [K-Pop Heardle](https://heardle-kpop.glitch.me/) but for Etrian Odyssey's musics. Based on [Joywave Heardle](https://joywave-heardle.glitch.me/).

Each music is randomly chosen from Etrian Odyssey's soundtrack to appear only once. If every music is used once, the game automatically resets and every music appears once again in a different order. The code for daily seeded RNG come from [Pokémon Mystery Dungeon Heardle](https://pkmn-md-heardle.glitch.me/).

code edited from: [WJSN Heardle](https://github.com/jeroldcamacho/wjsn-heardle)
<br />
<br />
HOW TO RUN HEARDLE LOCALLY:
Open **index.html** with your browser (Firefox, Chromium)
<br />
<br />
HOW TO MAKE YOUR OWN HEARDLE (UDPATED on **25/07/12**)
(If you want an Heardle that includes translations you can check the readme of [Pokémon Heardle](https://github.com/nterrien/pkmn-heardle))

1. **Fork this project** to create your own copy of the code
2. **Rename the project** with the URL that you'd like to Heardle to live at, by going to **Settings >  Repository name**
3. Use Github as host by going to **Settings > Pages**. In Source, choose "Deploy from a branch" and in branch choose "master".
4. Open the **index.html** file & replace **"Etrian Odyssey"** with the artist/genre of your heardle. Make sure to **do this first**, if you update the main.js first, sometimes your link will still show Etrian Odyssey even after you update everything.
5. In the **index.html** file, you can update the image that gets shared with your link by updating lines **17-19**. 
6. You can update the icon in your browser's tab by updating the favicon.png image.

(Items 7-13 are all edits to the **main.js file**)

7. On line **2** of **main.js** file and update **artist** with the **artist/genre** of your heardle - This will update all the text boxes & titles where "Etrian Odyssey" shows up up.
8. On line **3** of **main.js**, update the **startDate** to the current date in the format **YEAR-MONTH-DAY (YYYY-MM-DD)** - This will start the counter for your Heardle.
9. On line **6** of **main.js**, "var **musicNameList**" is initialized. Replace the text with a list of {id: number, name: "music title"}, name being the music titles that you want to show up as options in your Heardle and id an unique number for the music. Music titles should follow the format **"music - Artist/Game".** Make sure each music is in quotes and has a comma after it.
10. On line **1157** of **main.js**, "var **musicListWithLinks**" is initialized. Here you'll have to replace the links with links to your musics. Only Soundcloud links at the moment. Each link will have to follow the following format: **`{ url: "<link>", answer: id of the music },`** Make sure to have **at least 10 musics** in your lists otherwise you'll run into issues with the search bar!
11. If you don't want your heardle link to show up whenever someone shares their results, around **line 7104** add a "**//**" before "+ "\n\n". If you want your heardle link to show up, update the link with your own heardle link. If you're having trouble finding the line since the line numbers probably changed after you edit the code, you can search for **"https://nterrien.github.io/etrian-heardle/"** !
12. If you want to edit the text in the **info button (About)** on the top left, around **line 6192** you can update the text that shows up there. Search for **"A clone of..."** to find the line easier.
13. If you want to edit the text in the **heart button (Support)** next to the info button, around **line 6463** you can update the text that shows up there. Search for **"Have questions..."** to find the line easier.

**KNOWN ISSUES**

- If someone has stats in their local storage about music played before the music list loops, the "Current Streak" and "Max Streak" stats will be broken. To be more precise, the current streak and max streak will count every music with the same id as the same music. For example if I find the music with id 0 before a loop, and didn't found this music again in the next loop, it will probably be counted as found in current streak and max streak. In line 6187 (dateBeforeBugStreak), I added some additional code to explain when was the last music list reset, and that this bug exists. If you start a new Heardle, you can replace the date "2026-03-26" with startDate, or remove the information by remove the condition that start with "diff > 0".

- Sometimes when you share your link to twitter, the image you added doesnt show up, even if you've updated the image link. The original creator thinks its a twitter issue and not a code issue.

- This code is specific to Soundcloud links.

  - There is a [youtube](https://glitch.com/~youtube-heardle-template) \[NOTE: this link doesn't work anymore\] version, but its very basic and may have bugs; youtube links can be weird depending on your location, so it messes things up.

  - If you want to use a Spotify playlist, visit [https://audial.mogdan.xyz/custom](https://audial.mogdan.xyz/custom). You'll be able to add a link to your playlist and it seems to work similarly to Heardle.
