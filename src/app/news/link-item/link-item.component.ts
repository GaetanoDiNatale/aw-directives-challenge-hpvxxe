import { Component, Input } from '@angular/core';
import { LinkRepoService } from '../../link-repo.service';
import { Link } from '../../types';

@Component({
  selector: 'hn-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent { 
  @Input() link: Link;

  constructor(
    private linkRepo: LinkRepoService
  ) { }

  upvoteHandler() {
    this.linkRepo.upvote(this.link.id)
      .subscribe(l => this.link = l);
  }
}