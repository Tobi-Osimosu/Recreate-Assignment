import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggleSidebar = new Subject();
  opened = new Subject();
  closed = new Subject();

  // Editor sidebar toggler
  editorSidebar = new BehaviorSubject<Boolean>(false); // The boolean value does not have any effect just to check if it value cahnges

  constructor() {}
}
