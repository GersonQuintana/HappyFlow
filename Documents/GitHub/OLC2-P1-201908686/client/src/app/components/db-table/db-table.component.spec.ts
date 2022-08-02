import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBTableComponent } from './db-table.component';

describe('DBTableComponent', () => {
  let component: DBTableComponent;
  let fixture: ComponentFixture<DBTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
