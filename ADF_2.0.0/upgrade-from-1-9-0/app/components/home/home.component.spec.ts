

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CoreModule } from '@alfresco/adf-core';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [CoreModule],
        declarations: [HomeComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
  });
});
