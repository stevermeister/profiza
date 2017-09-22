import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';

import { UserModel } from './user.service';
import { Speciality, Category, CategoryService } from './category.service';

import { users } from '../data-mocks/users';

export interface Work {
  price: string;
  summary: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  experience: string;
  avatar: string;
  score: number;
  categoryId: number;
  speciality: number;
  reviewsCount: number;
  photoCount: number;
  location: string;
  description: string;
  works: Work[];
}

export interface UserModel extends User {
  category?: Category;
}

export interface UserFilter {
  specialityId?: number;
  categoryId?: number;
  query?: string;
}

@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient,
    private _categoryService: CategoryService
  ) { }

  public tempUser: User;

  getOne(id: number) {
    return this._http.get<UserModel>(`https://profiza-api.herokuapp.com/users/${id}`);
  }

  getAll(): Observable<UserModel[]> {
    return this._http.get<UserModel[]>('https://profiza-api.herokuapp.com/users');
  }

  getAllNew(): Observable<UserModel[]> {
    return this._http.get<UserModel[]>('https://profiza-api.herokuapp.com/newusers');
  }

  addNew(newUserData: User) {
    return this._http.post<User>('https://profiza-api.herokuapp.com/newusers', newUserData);
  }

  update(userData: User) {
    return this._http.put<User>(`https://profiza-api.herokuapp.com/newusers/${userData.id}`, userData);
  }

  getByFilter(filter: UserFilter) {
    return this.getAll().switchMap((_users: UserModel[]) => {
      const users = _users.filter((user: UserModel) => {
        const areUsersFound = !(filter.query
          && !user.name.includes(filter.query)
          && !user.description.includes(filter.query)
        )
        return areUsersFound;
      })
      return Observable.of(users)
    })
  }
}
