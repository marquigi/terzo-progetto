import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPreferiti } from "./components/lista-preferiti/lista-preferiti";
import { ListaDati } from "./components/lista-dati/lista-dati";
import { ListaViaggi } from "./components/lista-viaggi/lista-viaggi";
import { ListaCucina } from "./components/lista-cucina/lista-cucina";
import { ListaModa } from "./components/lista-moda/lista-moda";
import { CommonModule } from '@angular/common';

type Section = "tutti" | "viaggi" | "cucina" | "moda" | null

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaPreferiti, ListaDati, ListaViaggi, ListaCucina, ListaModa, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('terzo-progetto');

  selectedSection: Section = "tutti";

  select(section: Section) {
    this.selectedSection = section;
  }
}
