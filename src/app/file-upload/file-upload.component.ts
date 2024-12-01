import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface UploadedFile{
  id: number;
  filename: string;
  originalname: string;
  filepath: string;
  created_at: string;
}
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent implements OnInit {
  selectedFiles:File[]= [];
  uploadedFiles: UploadedFile[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.loadUploadedFiles();
  }

  loadUploadedFiles(){
    this.http.get<UploadedFile[]>('http://localhost:3000/api/uploads')
    .subscribe({
      next: (files)=>{
        this.uploadedFiles = files;
      },
      error: (error)=>{
        console.error('Error loading files', error);
      }
    });
  }

  onFileSelected(event: any){
    this.selectedFiles = Array.from(event.target.files);
  }

  uploadFiles(){
    if (this.selectedFiles.length === 0) return;

    const formData = new FormData();

    this.selectedFiles.forEach(file => {
      formData.append('files', file);
    });

    this.http.post<any>('http://localhost:3000/api/upload', formData)
    .subscribe({
      next:(response)=>{
        console.log('Upload successful', response);
        this.loadUploadedFiles();
        this.selectedFiles = []

      }, error:(error)=>{
        console.error('Upload failed', error);
      }
    });


  }
}
