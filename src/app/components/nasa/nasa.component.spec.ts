import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaComponent } from './nasa.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { InjectionToken } from "@angular/core";

describe('NasaComponent', () => {
  let component: NasaComponent;
  let fixture: ComponentFixture<NasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
