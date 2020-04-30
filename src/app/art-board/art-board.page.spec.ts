import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtBoardPage } from './art-board.page';

describe('ArtBoardPage', () => {
  let component: ArtBoardPage;
  let fixture: ComponentFixture<ArtBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtBoardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
