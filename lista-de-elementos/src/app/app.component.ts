import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-de-elementos';
    // Arreglo para almacenar los elementos
    elementos: string[] = [];

    // Variable para el nuevo elemento
    nuevoElemento: string = '';
  
    // Función para añadir un nuevo elemento al arreglo
    agregarElemento() {
      if (this.nuevoElemento.trim()) {
        this.elementos.push(this.nuevoElemento.trim());
        this.nuevoElemento = ''; // Limpiar el campo después de agregar
      } else {
        alert('Por favor, ingresa un elemento válido.');
      }
    }
  
}
