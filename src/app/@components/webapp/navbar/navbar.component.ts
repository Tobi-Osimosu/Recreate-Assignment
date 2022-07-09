import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/@core/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  sidebarOpenedSub!: Subscription;
  sidebarClosedSub!: Subscription;

  @ViewChild('header', { static: false }) header!: ElementRef;

  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.sidebarOpenedSub = this.sidebarService.opened.subscribe(() => {
      this.renderer.addClass(this.header.nativeElement, 'open');
    });

    this.sidebarClosedSub = this.sidebarService.closed.subscribe(() => {
      if (this.header.nativeElement.classList.contains('open')) {
        this.renderer.removeClass(this.header.nativeElement, 'open');
      }
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar.next('');

    if (this.sidebarOpenedSub) {
      this.sidebarOpenedSub.unsubscribe();
    }

    if (this.sidebarClosedSub) {
      this.sidebarClosedSub.unsubscribe();
    }
  }
}
