const message = require("../Util/SuccessMessage");
const {v4} = require("uuid");


let notes = []

//--------
//add Data
//--------
function addNotes(request, h) {
    const {title, tags, body} = request.payload;
    const id = v4();
    const createAt = new Date().toISOString();
    const updateAt = createAt;

    const fieldFill = Boolean(title) && Boolean(tags) && Boolean(body);

    const newNote = {id, title, createAt, updateAt, tags, body}
    notes.push(newNote);

    const isSucces = notes.filter((note) => note.id == id).length > 0;

    //success response
    if (isSucces && fieldFill) {
        const response = h.response({
            status: "success",
            message: "Catatan berhasil di simpan",
            data: {
                noteId: id
            }
        });
        response.code(201);
        return response;
    }
    //fail response
    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan'
    });
    response.code(500);
    return response;
}

//------------
//get all data
//------------
function getAllNotes(request, h) {
    console.log(notes);
    const response = h.response({
        status: "success",
        data: {
            notes: notes
        }
    });
    return response;
}

//------------
//get spesify
//------------
function getNotesBydId(request, h) {
    const id = request.params.id;
    const note = notes.find((searchnote) => searchnote.id === id);
    console.log(`note.id ${note.id}, ${note.title} ## ${id}`);
    if (note) {
        const response = h.response({
            status: "success",
            data: note
        });
        return response;
    }
    const response = h.response({
        status: "fail",
        message: "Catatan tidak ditemukan"
    });
    return response;
}

//------------
//update data
//------------
function updateNoteByid(request, h) {
    console.log("sampe sini");
    const id = request.params.id;
    const updateAt =new Date().toISOString();
    const {title, tags, body} = request.payload;
    if (notes.find((note) => note.id === id)) {
        const updateNote = notes.find((note) => {
            if (note.id === id) {
                note.title = title;
                note.tags = tags;
                note.body = body;
                note.updateAt = updateAt;
            }
        });
        const response = h.response({
            status: "success",
            message: "catatan berhasil diperbaharui"
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: "fail",
        message: "Gagal memperbaharui catatan. Id catatan tidak ditemukan"
    });
    response.code(400);
    return response;
}

//------------
//destroy
//------------
function destroyById(request,h) {
    const id = request.params.id;
    const indexTodelete = notes.findIndex((note)=>note.id===id);
    if(indexTodelete !==-1){
        notes.splice(indexTodelete,1);
        const response = h.response({
            status:'success',
            message:'Catatan berhasil dihapus'
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status :'fail',
        message:'Catatan gagal dihapus. id catatan tidak ditemukan'
    });
    response.code(400);
    return response;
}


module.exports = {addNotes, getAllNotes, getNotesBydId,updateNoteByid,destroyById}