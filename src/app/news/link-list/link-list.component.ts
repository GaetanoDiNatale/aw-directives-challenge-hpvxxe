import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap, switchMap } from 'rxjs/operators';

import { LinkRepoService } from '../../link-repo.service';
import { Link } from '../../types';

@Component({
  selector: 'hn-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[];
  page: number;

  constructor(
    private linkRepo: LinkRepoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        map(p => p.has('p') ? parseInt(p.get('p')) : 1),
        tap(p => this.page = p),
        switchMap(p => this.linkRepo.getLinks(p))
      )
      .subscribe(l => this.links = l)
  }
}