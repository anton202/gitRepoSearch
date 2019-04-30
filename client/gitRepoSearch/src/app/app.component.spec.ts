import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookMarksComponent } from './book-marks/book-marks.component';
import { GitRepoComponent } from './git-repo/git-repo.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent,
        BookMarksComponent, GitRepoComponent,
        SearchResultsComponent, SearchComponent
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('toggle bookMarks', () => {
    it('should return true if displayBookMarks set to false', () => {
      component.displayBookMarks = false;
      component.openBookMarks();
      expect(component.displayBookMarks).toBeTruthy();
    })

    it('should return false id disaplyBookMarks set to true', () => {
      component.displayBookMarks = true;
      component.openBookMarks();
      expect(component.displayBookMarks).toBeFalsy()
    })

  })
});
