import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatIDoPage } from './what-i-do.page';

describe('WhatIDoPage', () => {
  let component: WhatIDoPage;
  let fixture: ComponentFixture<WhatIDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIDoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatIDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
