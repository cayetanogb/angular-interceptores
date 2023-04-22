import { UsuariosService } from './services/usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.obtenerUsuarios()
      .subscribe(
        {
          next: resp => console.log(resp),
          error: err => console.log('Error en el appComponent')
        }
      )
  }

}
