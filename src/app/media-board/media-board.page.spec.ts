import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MediaBoardPage } from './media-board.page';

describe('MediaBoardPage', () => {
  let component: MediaBoardPage;
  let fixture: ComponentFixture<MediaBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaBoardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
