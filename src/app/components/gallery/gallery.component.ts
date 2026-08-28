import { Component, HostListener, computed, input, output, signal } from '@angular/core';
import { Project } from '../../data/content';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  readonly project = input.required<Project>();
  readonly closed = output<void>();

  readonly index = signal(0);
  private touchX = 0;

  readonly current = computed(() => this.project().images[this.index()]);
  readonly prevSrc = computed(() => this.at(-1));
  readonly nextSrc = computed(() => this.at(1));
  readonly counter = computed(
    () => `${this.index() + 1} / ${this.project().images.length}`,
  );

  private at(offset: number): string {
    const images = this.project().images;
    const i = (this.index() + offset + images.length) % images.length;
    return images[i];
  }

  prev(): void {
    const n = this.project().images.length;
    this.index.update((i) => (i - 1 + n) % n);
  }

  next(): void {
    const n = this.project().images.length;
    this.index.update((i) => (i + 1) % n);
  }

  close(): void {
    this.closed.emit();
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchX = event.changedTouches[0]?.clientX ?? 0;
  }

  onTouchEnd(event: TouchEvent): void {
    const x = event.changedTouches[0]?.clientX ?? this.touchX;
    const dx = x - this.touchX;
    if (Math.abs(dx) < 48) return;
    dx > 0 ? this.prev() : this.next();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }
}
