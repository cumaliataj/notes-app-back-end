# 1.insert data
   * route /NOTES
   * menggunakan method POST
   * pertukaran data menggunakan JSON
   * body yang akan dikirim title,tags,body
   <pre> 
   {
     	 "title": "Judul Catatan",
 	 "tags": ["Tag 1", "Tag 2"],
	 "body": "Konten catatan"
   }
   </pre>
   * Untuk properti id, createdAt, dan updatedAt harus diolah di sisi server, jadi client tidak akan mengirimkan itu. Server harus memastikan properti id selalu unik.
   * jika sukses maka akan mengembalikan response code 201 (ceated)
   <pre>
   {
      "status": "success",
      "message": "Catatan berhasil ditambahkan",
      "data": {
    		"noteId": "V09YExygSUYogwWJ"
     }
   }
   </pre>
   * jika gagal maka akan mengembalikan response code 500
   <pre>
   {
     "status": "error",
     "message": "Catatan gagal untuk ditambahkan"
   }
   </pre>

# 2.menampilkan data
   * route /NOTES
   * menggunakan method GET
   * resposnya formatnya dibawah ini
   <pre>
   {
      "status": "success",
      "data": {
        "notes": [
          {
            "id":"notes-V1StGXR8_Z5jdHi6B-myT",
            "title":"Catatan 1",
            "createdAt":"2020-12-23T23:00:09.686Z",
            "updatedAt":"2020-12-23T23:00:09.686Z",
            "tags":[
              "Tag 1",
              "Tag 2"
            ],
            "body":"Isi dari catatan 1"
          },
          {
            "id":"notes-V1StGXR8_98apmLk3mm1",
            "title":"Catatan 2",
            "createdAt":"2020-12-23T23:00:09.686Z",
            "updatedAt":"2020-12-23T23:00:09.686Z",
            "tags":[
              "Tag 1",
              "Tag 2"
            ],
            "body":"Isi dari catatan 2"
          }
        ]
      }
    }
   </pre>
   * Jika belum ada catatan satu pun pada array, server bisa mengembalikan data notes dengan nilai array kosong seperti ini:
   <pre>
    {
      "status": "success",
      "data": {
        "notes": []
      }
    }</pre>

  
# 3.Menampilkan data spesifik
   * route /NOTES/{id}
   * metode GET
   * format balikannya
   <pre>
  {
  	"status": "success",
  	"data": {
    	"note": {
      	"id":"notes-V1StGXR8_Z5jdHi6B-myT",
      	"title":"Catatan 1",
      	"createdAt":"2020-12-23T23:00:09.686Z",
      	"updatedAt":"2020-12-23T23:00:09.686Z",
      	"tags":[
       		"Tag 1",
        	"Tag 2"
      ],
      "body":"Isi dari catatan 1"
    }
   }
   </pre> 
   * jika id tidak ditemukan maka format balikan JSON
   <pre>
    {
      "status": "fail",
      "message": "Catatan tidak ditemukan"
    }
   </pre>

# 4.mengubah catatan
  * route /NOTES/{id}
  * method PUT
  <pre>
      {
      "title":"Judul Catatan Revisi",
      "tags":[
        "Tag 1",
        "Tag 2"
      ],
      "body":"Konten catatan"
    }
  </pre>
  * response balikan 200 jika berhasil
  <pre>
    {
      "status": "success",
      "message": "Catatan berhasil diperbaharui"
    }	
  </pre> 
  * response balikan 400 jika gagal
  <pre>
    {
      "status": "fail",
      "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
    }
  </pre>
  
# 5.menghapus catatan
  * route /NOTES/{id}
  * method DELETE
  * response 200 jika berhasil
  <pre>
    {
      "status": "success",
      "message": "Catatan berhasil dihapus"
    }
  </pre>
  * response 400 jika gagal
  <pre>
    {
      "status": "fail",
      "message": "Catatan gagal dihapus. Id catatan tidak ditemukan"
    }
  </pre>
   
