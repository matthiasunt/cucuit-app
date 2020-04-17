import { Injectable } from '@angular/core';
import {NbComponentShape, NbComponentSize} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  componentSize: NbComponentSize = 'medium';
  componentShape: NbComponentShape = 'rectangle';
  constructor() { }
}
