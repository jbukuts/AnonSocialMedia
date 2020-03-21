import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourPostsPage } from './your-posts.page';

describe('YourPostsPage', () => {
  let component: YourPostsPage;
  let fixture: ComponentFixture<YourPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
