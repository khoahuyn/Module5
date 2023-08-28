import { Component, OnInit } from '@angular/core';
import {New} from "../../model/new";
import {NewService} from "../../service/new.service";

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  news:New[]=[];
  displayStyle = 'none';
  idNew: number;
  p = 1;


  private Swal: any;
  private msg: boolean;


  constructor(private newService:NewService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.newService.getAll().subscribe( news =>{
      this.news=news;
    })
  }

  openPopup(id: number) {
    this.displayStyle = 'block';
    this.idNew = id;
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  delete() {
    this.newService.deleteNew(this.idNew).subscribe(() => {
      this.closePopup();
      this.ngOnInit();
    });
  }

  search(inputSerach: HTMLInputElement) {
    this.newService.search(inputSerach.value).subscribe(next => {
      this.news = next;
      if (this.news.length === 0) {
        this.msg = true;
      } else {
        this.msg = false;
      }
    });
  }

  search1(input: HTMLInputElement) {
    this.newService.search1(Number(input.value)).subscribe(next => {
      this.news = next;
      if (this.news.length === 0) {
        this.msg = true;
      } else {
        this.msg = false;
      }
    });
  }


  search2(input2: HTMLInputElement) {
    this.newService.search2(Number(input2.value)).subscribe(next => {
      this.news = next;
      if (this.news.length === 0) {
        this.msg = true;
      } else {
        this.msg = false;
      }
    });
  }


}
