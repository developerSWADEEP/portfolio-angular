import { Component, signal } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';
import {
  moreWork,
  profile,
  Project,
  projects,
  skillGroups,
  tenureLabel,
} from './data/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly profile = profile;
  readonly projects = projects;
  readonly moreWork = moreWork;
  readonly skillGroups = skillGroups;
  readonly tenure = tenureLabel(profile.startedDate);
  readonly year = new Date().getFullYear();

  readonly open = signal<Project | null>(null);

  show(project: Project): void {
    this.open.set(project);
    document.body.style.overflow = 'hidden';
  }

  hide(): void {
    this.open.set(null);
    document.body.style.overflow = '';
  }
}
