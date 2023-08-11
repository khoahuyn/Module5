import { Injectable } from '@angular/core';
import {IWord} from "./iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words:IWord[]=[
    {word:'hello',mean:'xin chào'},
    {word:'cat',mean:'mèo'},
    {word:'dog',mean:'chó'},
    {word:'yellow',mean:'màu vàng'},
  ]
  constructor() { }

  getWords(): IWord[] {
    return this.words;
  }

  findByIWord(word: string): IWord {
    return this.words.find(obj => obj.word === word);
  }
}
