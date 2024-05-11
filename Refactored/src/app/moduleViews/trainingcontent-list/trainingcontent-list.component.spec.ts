import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingcontentListComponent } from './trainingcontent-list.component';

describe('TrainingcontentListComponent', () => {
  let component: TrainingcontentListComponent;
  let fixture: ComponentFixture<TrainingcontentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingcontentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingcontentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
