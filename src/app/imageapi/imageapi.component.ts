import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imageapi',
  templateUrl: './imageapi.component.html',
  styleUrls: ['./imageapi.component.css']
})
export class ImageapiComponent implements OnInit {

  title = 'ecom-project';
  images: string[] = [];
  currentPage = 1;
  pageSize = 6;
  url = `https://db.ezobooks.in/kappa/image/task`
  newImageData: any;
  imageData: any;
  data: any;
  alldatas: any = []




  modalScrollDistance = 2;
  modalScrollThrottle = 50;
  isPage: number = 1;/*--default--*/
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  iscount: number = 1;
  increment: any=10;

  constructor(private http: HttpClient, private datePipe: DatePipe, private router: Router) { }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      console.log("my responses", res);
      this.data = res
      this.alldatas = this.data.items
      this.imageData = this.alldatas.slice(0, 6)
      console.log("alldatas", this.alldatas);
    })
  }



    onCatScrollDown() {
    console.log("onScrollDown------------");
    this.increment=this.increment+6
    let newincerment=this.increment+6
    this.newImageData = this.alldatas.slice(this.increment, newincerment)
    console.log("neImageData", this.newImageData)
    // this.imageData.concat(this.newImageData)
    this.imageData = [...this.imageData, ...this.newImageData]
    console.log("array3", this.imageData)
    // console.log("slice image data", this.alldatas.slice(20, 35))
    console.log("imageData", this.imageData)
  }

}
