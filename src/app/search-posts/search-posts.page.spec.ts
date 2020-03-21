import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPostsPage } from './search-posts.page';

describe('SearchPostsPage', () => {
  let component: SearchPostsPage;
  let fixture: ComponentFixture<SearchPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
