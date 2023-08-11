import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-angular';
  loading = false;

  listNoticias: any[] = [];

  constructor(private noticiasService: NoticiaService) {}

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this.noticiasService.getNoticias(parametros).subscribe(
        (data) => {
          this.loading = false;
          this.listNoticias = data.articles;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }, 1000);
  }
}
