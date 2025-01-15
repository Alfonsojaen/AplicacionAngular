import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiListMoviesComponent } from './api-list-movies.component';

describe('ApiListMoviesComponent', () => {
  let component: ApiListMoviesComponent;
  let fixture: ComponentFixture<ApiListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiListMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
