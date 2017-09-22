import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UserService, User } from './../user.service';
import { CategoryService, Category, Speciality } from './../category.service';

@Component({
  selector: 'profiza-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public users: User[] = [];
  public query: string;
  public category: Category;
  public speciality: Speciality;

  constructor(
    private _route: ActivatedRoute,
    private _categoryService: CategoryService,
    private _userService: UserService) {
  }

  ngOnInit() {
    this._route.queryParams.subscribe(({ specialityId, categoryId, query = '' }) => {
      this.query = query;

      this._categoryService.getOne(1).subscribe((category) => {
        this.category = category;
      });

      this._userService.getByFilter({ specialityId, categoryId, query }).subscribe(users => this.users = users);

    });
  }

  public updateSearch({ specialityId, categoryId, query = '' }) {
    this.query = query;
    this._userService.getByFilter({ specialityId, categoryId, query }).subscribe(users => this.users = users);
  }

}
