import { Injectable } from '@angular/core';
import {NbComponentShape, NbComponentSize} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  componentSize: NbComponentSize = 'small';
  componentShape: NbComponentShape = 'rectangle';
  constructor() { }
}
