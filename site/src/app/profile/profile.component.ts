import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';

import { CategoryService, Speciality } from './../category.service';
import { UserService, User } from './../user.service';

@Component({
  selector: 'profiza-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  public user: User;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._route.params.pluck('profileId')
      .switchMap((id: string) => this._userService.getOne(Number(id)))
      .subscribe((user: User) => this.user = user);
  }

}
