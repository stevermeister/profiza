import { CategoryService } from './../../../category.service';
import { Input, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'profiza-category-box-short',
  templateUrl: './box-short.component.html',
  styleUrls: ['./box-short.component.scss']
})
export class CategoryBoxShortComponent implements OnInit {

  @Input() categoryId: number;
  public category;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
     this._categoryService.getOne(this.categoryId)
       .subscribe(category => {
         this.category = category;
         this._categoryService.getSpecialities(this.categoryId)
           .subscribe(specialities => {
             this.category.specialities = specialities;
             this.category.specialitiesToShow = specialities.slice(0,5);
            });
        });
  }

}
