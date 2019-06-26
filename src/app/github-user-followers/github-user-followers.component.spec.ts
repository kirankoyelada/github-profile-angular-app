import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserFollowersComponent } from './github-user-followers.component';

describe('GithubUserFollowersComponent', () => {
  let component: GithubUserFollowersComponent;
  let fixture: ComponentFixture<GithubUserFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
