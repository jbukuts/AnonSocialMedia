import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeThemePage } from './change-theme.page';

describe('ChangeThemePage', () => {
  let component: ChangeThemePage;
  let fixture: ComponentFixture<ChangeThemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeThemePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeThemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
