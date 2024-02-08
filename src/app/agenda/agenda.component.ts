import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  contactos: { id: number; nombre: string ; telefono: string; }[] = [];

  agregarContacto() {
    const nuevoContacto = { id: this.contactos.length + 1, nombre: '', telefono: '' };
    this.contactos.push(nuevoContacto);
  }

  editarContacto(contacto: { nombre: string | undefined; telefono: string | undefined; }) {
    const nuevoNombre = prompt('Nuevo nombre:', contacto.nombre);
    const nuevoTelefono = prompt('Nuevo teléfono:', contacto.telefono);

    if (nuevoNombre !== null && nuevoTelefono !== null) {
      contacto.nombre = nuevoNombre;
      contacto.telefono = nuevoTelefono;
    }
  }

  eliminarContactos() {
    this.contactos = [];
  }
}