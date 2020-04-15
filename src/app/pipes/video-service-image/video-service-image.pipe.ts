import {Pipe, PipeTransform} from '@angular/core';
import {getVideoServices} from '../../util/video-services';
import {TranslateService} from '@ngx-translate/core';
import {VideoService} from '../../models/video-service';

@Pipe({
  name: 'videoService'
})
export class VideoServiceImagePipe implements PipeTransform {

  private videoServices: VideoService[] = [];

  constructor(private translate: TranslateService) {
    this.initVideoServices();
  }

  async initVideoServices() {
    this.translate.get('postCucu.inviteUrl.PARTICIPANTS').subscribe(p => {
      this.videoServices = getVideoServices(p);
    });

  }

  transform(callLink: string): VideoService {
    if (callLink.includes('hangouts')) {
      return this.videoServices.find(s => s.url.includes('hangouts'));
    } else if (callLink.includes('skype')) {
      return this.videoServices.find(s => s.url.includes('skype'));
    } else if (callLink.includes('zoom')) {
      return this.videoServices.find(s => s.url.includes('zoom'));
    } else if (callLink.includes('jitsi')) {
      return this.videoServices.find(s => s.url.includes('jitsi'));
    }
  }

}
