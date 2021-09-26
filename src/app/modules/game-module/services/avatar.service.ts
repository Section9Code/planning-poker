import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { createAvatar } from '@dicebear/avatars';
import * as bottts_style from '@dicebear/avatars-bottts-sprites';
import * as identicon_style from '@dicebear/avatars-identicon-sprites';
import * as initials_style from '@dicebear/avatars-initials-sprites';
import * as jdenticon_style from '@dicebear/avatars-jdenticon-sprites';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  constructor(private sanitizer: DomSanitizer) { }


  public getAvatars(id: string): SafeHtml[] {
    let images = [];

    images.push(this.createBotAvatar(id));
    images.push(this.createIdenticonAvatar(id));
    images.push(this.createInitialsAvatar(id));
    images.push(this.createJdenticonAvatar(id));

    return images;
  }

  private createBotAvatar(id: string): SafeHtml {
    let svg = createAvatar(bottts_style, { seed: id });
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private createIdenticonAvatar(id: string): SafeHtml {
    let svg = createAvatar(identicon_style, { seed: id });
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private createInitialsAvatar(id: string): SafeHtml {
    let svg = createAvatar(initials_style, { seed: id });
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private createJdenticonAvatar(id: string): SafeHtml {
    let svg = createAvatar(jdenticon_style, { seed: id });
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }



}
