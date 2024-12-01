const express = require('express');
const multer = require('multer');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, "uploads/");
  },
  filename: function(req, file, cb){
    cb(null, Date.now()+'-'+file.originalname);
  }
});

const db = new sqlite3.Database("uploads.db", (err)=>{
    if(err){
      console.error('Error opening database:', err);
    }else{
      console.log('Connected to Sqlite database');

      db.run(`CREATE TABLE IF NOT EXISTS uploads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        originalname TEXT NOT NULL,
        filepath TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`);
    }
});
const upload = multer({storage})


app.post('/api/upload', upload.array('files', 10), async (req, res)=>{
  const files = req.files;
  const uploadPromises = files.map((file)=>{
    return new Promise((resolve, reject)=>{
      const fileUrl = `http://localhost:${port}/uploads/${file.filename}`;

      db.run( "INSERT INTO uploads (filename, originalname, filepath) VALUES (?, ?, ?)",
        [file.filename, file.originalname, fileUrl],
        function (err){
          if(err) reject(err);
          else resolve({id: this.lastID, fileUrl})
        }
      );
    });
  });

  const results = await Promise.all(uploadPromises);

  res.json({
    message: 'Files uploaded succesfully.',
    files: results
  });

});

app.get('/api/uploads', (req, res)=>{
  db.all("SELECT * FROM uploads ORDER BY created_at DESC", [], (err, rows) => {
    if(err){
      console.log('Error fetching uploads', err);
      res.status(500).json({
        error: "Error fetching uploads"
      })
    } else{
      res.json(rows)
    }
  })

})

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})
