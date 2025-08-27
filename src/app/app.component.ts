import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true, // Ajoute cette ligne si tu utilises des composants autonomes
  imports: [NavBarComponent, RouterOutlet], // Ajoute RouterOutlet pour le routage
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction ici (pluriel)
})
export class AppComponent {
  title = 'web-cat-app';
}
