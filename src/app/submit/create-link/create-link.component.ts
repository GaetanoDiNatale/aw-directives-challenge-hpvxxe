import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { Link } from '../../types';
import { LinkRepoService } from '../../link-repo.service';

@Component({
  selector: 'hn-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.css']
})
export class CreateLinkComponent { 
  linkForm = this.fb.group({
    description: ['', [Validators.required, Validators.minLength(4), this.notDescrizione()]],
    url: ['', [Validators.required, Validators.pattern('https?://[\\w\.\/]+')]]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private linkRepo: LinkRepoService
  ) { }

  createLink() {
    this.linkRepo.addLink(this.linkForm.value)
      .subscribe(() => this.router.navigate(['/']));
  }

  notDescrizione(): ValidatorFn {
    return (control: AbstractControl) => {
      const invalid = control.value.toLowerCase().indexOf('descrizione') > -1;
      return invalid ? {'notDescrizione': {value: control.value}} : null;
    };
  }
}