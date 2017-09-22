import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { CityService } from './city.service';
import { UserService } from './user.service';
import { CategoryService } from './category.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CityFilterBarComponent } from './home/city-filter-bar/city-filter-bar.component';
import { SocialBoxComponent } from './home/social-box/social-box.component';
import { AboutShortComponent } from './home/about-short/about-short.component';
import { PromoBoxComponent } from './home/promo-box/promo-box.component';
import { SearchSectionComponent } from './home/search-section/search-section.component';
import { CategoryBoxShortComponent } from './home/categories/box-short/box-short.component';
import { NiceNumberPipe } from './nice-number.pipe';
import { PopularCategoryComponent } from './home/promo-box/popular-category/popular-category.component';
import { RequestFormComponent } from './home/search-section/request-form/request-form.component';
import { PopularSpecialitiesComponent } from './home/search-section/popular-specialities/popular-specialities.component';
import { ActiveProfilesComponent } from './home/search-section/active-profiles/active-profiles.component';
import { ReviewBarComponent } from './home/search-section/review-bar/review-bar.component';
import { SelectSpecialityComponent } from './registration/select-speciality/select-speciality.component';
import { PersonalDataComponent } from './registration/personal-data/personal-data.component';
import { ServiceInfoComponent } from './registration/service-info/service-info.component';
import { SuccessComponent } from './registration/success/success.component';
import { PhoneRequestComponent } from './category/phone-request/phone-request.component';
import { FilterComponent } from './search/filter/filter.component';
import { SeeAlsoComponent } from './search/see-also/see-also.component';
import { UserCardComponent } from './search/user-card/user-card.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUserCardComponent } from './profile/profile-user-card/profile-user-card.component';
import { ProfileUserAsideInfoComponent } from './profile/profile-user-aside-info/profile-user-aside-info.component';
import { ProfileAlsoLikeComponent } from './profile/profile-also-like/profile-also-like.component';
import { StepConterComponent } from './registration/step-conter/step-conter.component';
import { AdminComponent } from './admin/admin.component';
import { ToArrayPipe } from './to-array.pipe';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'search', component: SearchComponent},
  {path: 'registration', component: RegistrationComponent, children: [
    { path: '', component: SelectSpecialityComponent },
    { path: 'step-1', component: PersonalDataComponent },
    { path: 'step-2', component: ServiceInfoComponent },
    { path: 'step-3', component: SuccessComponent }
  ]},
  {path: 'profile/:profileId', component: ProfileComponent },
  {path: 'admin', component: AdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    SearchComponent,
    RegistrationComponent,
    SearchBarComponent,
    CategoriesComponent,
    CityFilterBarComponent,
    SocialBoxComponent,
    AboutShortComponent,
    PromoBoxComponent,
    SearchSectionComponent,
    CategoryBoxShortComponent,
    NiceNumberPipe,
    PopularCategoryComponent,
    RequestFormComponent,
    PopularSpecialitiesComponent,
    ActiveProfilesComponent,
    ReviewBarComponent,
    SelectSpecialityComponent,
    PersonalDataComponent,
    ServiceInfoComponent,
    SuccessComponent,
    PhoneRequestComponent,
    FilterComponent,
    SeeAlsoComponent,
    UserCardComponent,
    ProfileUserCardComponent,
    ProfileComponent,
    ProfileUserAsideInfoComponent,
    ProfileAlsoLikeComponent,
    StepConterComponent,
    AdminComponent,
    ToArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [CategoryService, CityService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
