import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsComponent {

  modalOpen: string | null = null; // id del modal abierto

  openModal(id: string) {
    this.modalOpen = id;
  }

  closeModal() {
    this.modalOpen = null;
  }
}
