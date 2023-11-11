import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/model/model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {
  @Input()
characterLists: Character;

@Input() 
index:number;

@Output()
deleteCharacterEvent:EventEmitter<number>;
i: any;
selectedcharacter: any;
character: any;

  constructor() { 
    this.characterLists = new Character('','',false,'',0);
    this.index =0;
    this.deleteCharacterEvent = new EventEmitter<number>();
  }
  ngOnInit(): void {
    if (!this.characterLists) {
        this.characterLists = new Character('','',false,'',0);
    }
}



  deleteCharacter():void{
    this.deleteCharacterEvent.emit(this.index);
  }

}