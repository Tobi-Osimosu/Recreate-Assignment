import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { SidebarService } from 'src/app/@core/services/sidebar.service';

@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.scss'],
})
export class WebappComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('main', { static: false }) main!: ElementRef;

  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Resize when width is less than or equals 992px
    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 991.98px)').matches) {
        if (this.main.nativeElement.classList.contains('full-width')) {
          this.renderer.removeClass(this.main.nativeElement, 'full-width');
        }
      }
    });

    this.sidebarService.toggleSidebar.subscribe(() => {
      if (this.main.nativeElement.classList.contains('full-width')) {
        this.sidebarService.closed.next('');
        this.renderer.removeClass(this.main.nativeElement, 'full-width');
      } else {
        this.sidebarService.opened.next('');
        this.renderer.addClass(this.main.nativeElement, 'full-width');
      }
    });
  }

  ngOnDestroy(): void {}
}
