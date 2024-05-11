import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingcontentComponent } from './add-trainingcontent.component';

describe('AddTrainingcontentComponent', () => {
  let component: AddTrainingcontentComponent;
  let fixture: ComponentFixture<AddTrainingcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainingcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrainingcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
