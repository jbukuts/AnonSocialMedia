import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReplyModalPage } from './reply-modal.page';

describe('ReplyModalPage', () => {
  let component: ReplyModalPage;
  let fixture: ComponentFixture<ReplyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReplyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
