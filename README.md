#  Express Homework: Note Taker
Homework Week 11 - Note Taker<br>
Author: Foti Mougos<br>
[Deployed At Github](https://foteye.github.io/Wk11-Express-NoteTaker-FotiMougos/ "Deployed at Github")

### Brief:

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed. I have created an application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created for me, I have built the backend and connected the two.

* HTML routes created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application has a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

* API routes created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


### Lessons Learned:

  * Handy when someones written the frontend for you :)
