import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySnippetsComponent } from './my-snippets.component';

describe('MySnippetsComponent', () => {
  let component: MySnippetsComponent;
  let fixture: ComponentFixture<MySnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySnippetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
