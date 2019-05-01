import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, async } from
    '@angular/core/testing';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { ivyEnabled } from '@angular/core/src/ivy_switch';

describe('searchComponent tests', () => {
    let fixture: ComponentFixture<SearchComponent>;
    let component: SearchComponent;
   
    const searchService = {
        getRepos: async (repoName) => {
            return { items: [{ repoName: 'shotef' }] }
        }
    }
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
    
            providers: [{ provide: SearchService, useValue: searchService }]
        });
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

    it('should assign result from service to results property', fakeAsync(()=>{
        component.search('shotefPlus');
        tick()
        expect(component.results).toBeTruthy()
    }))
    
});



