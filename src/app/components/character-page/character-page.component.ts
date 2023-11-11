import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/model';
import { RandomUserService } from 'src/app/service/random-user.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})

export class CharacterPageComponent implements OnInit {
  characterList: Character[];
  selectedcharacter!:number;
  click : boolean ;

  constructor(private characterService: RandomUserService) { 
    this.characterList= [];
    this.characterService.getAllCharachter().subscribe((character : Character[]) => {this.characterList = character;});
    this.click=false
  }

  ngOnInit(): void {
  }

  deleteCharacter(index: number): void {
    this.characterList.splice(index,1);
  }

  showDetails(index: number): void {
    this.selectedcharacter = index;
    this.click=true;
  }
 
}