import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SidebarService } from 'src/app/@core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;

  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Resize when width is less than or equals 992px
    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 991.98px)').matches) {
        if (this.sidebar.nativeElement.classList.contains('collapsed')) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'collapsed');
        }
      }
    });

    // Close sidebar onclick outside for mobile
    window.addEventListener('mouseup', (event) => {
      if (window.innerWidth <= 992) {
        if (event.target !== this.sidebar.nativeElement) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'collapsed');
        }
      }
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar.next('');
  }

  ngAfterViewInit() {
    this.sidebarService.opened.subscribe(() => {
      this.renderer.addClass(this.sidebar.nativeElement, 'collapsed');
    });
    this.sidebarService.closed.subscribe(() => {
      if (this.sidebar.nativeElement.classList.contains('collapsed')) {
        this.renderer.removeClass(this.sidebar.nativeElement, 'collapsed');
      }
    });
  }

  toggleDropdown(element: any, state: any) {}
}
