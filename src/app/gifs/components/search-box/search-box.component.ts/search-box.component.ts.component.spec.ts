import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponentTsComponent } from './search-box.component.ts.component';

describe('SearchBoxComponentTsComponent', () => {
  let component: SearchBoxComponentTsComponent;
  let fixture: ComponentFixture<SearchBoxComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBoxComponentTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
