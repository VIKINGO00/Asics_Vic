import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule], //Sirve para recargar los archivos estaticos 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
