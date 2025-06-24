import { Component } from '@angular/core';
import { RickAndMortyService } from '../../api/rick-and-morty.service';

@Component({
  selector: 'app-character-list',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters: any[] = [];
  errorMessage: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    })
  }
  showCharacterDetails(character: any) {
    console.log('Mostrando detalles del personaje:', character.name);
  }

}
