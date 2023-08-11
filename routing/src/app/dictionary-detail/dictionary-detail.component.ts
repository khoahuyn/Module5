import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictionaryService} from "../dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word: { word: string, mean: string } | undefined;

  constructor(
    private route: ActivatedRoute,
    private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.word = this.dictionaryService.findByIWord(this.route.snapshot.params.word);

  }
}
