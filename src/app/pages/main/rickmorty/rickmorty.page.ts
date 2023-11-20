import { Component, OnInit } from '@angular/core';
import { RickmortyService } from 'src/app/services/rickmorty.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-rickmorty',
  templateUrl: './rickmorty.page.html',
  styleUrls: ['./rickmorty.page.scss'],
})
export class RickmortyPage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(
    private rickAndMortySvc: RickmortyService
  ) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters()
  }

  // OBTENER O LLAMAR A LOS PERSONAJES

  getCharacters(event?: any){
    this.params.page += 1;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({
      next: (res:any) => {
        this.characters.push(...res.results)
        console.log(this.characters)

        if(event) event.target.complete();
      },
      error: (error:any) => {
        if(event) event.target.complete();

      }
    })
  }

}
