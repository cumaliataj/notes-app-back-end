const {getAllNotes,addNotes,getNotesBydId,updateNoteByid,destroyById}= require("../Controllers/NotesController");

module.exports = [
    //add note
    {
        method: 'POST',
        path: '/notes',
        handler : addNotes
    },
    // get all notes
    {
        method:'GET',
        path: '/notes',
        handler: getAllNotes
    },
    //get note by id
    {
        method: 'GET',
        path : '/notes/{id}',
        handler : getNotesBydId
    },
    //update by id
    {
        method: 'PUT',
        path : '/notes/{id}',
        handler : updateNoteByid
    },
    //destroy by id
    {
        method: 'DELETE',
        path : '/notes/{id}',
        handler : destroyById
    }
];