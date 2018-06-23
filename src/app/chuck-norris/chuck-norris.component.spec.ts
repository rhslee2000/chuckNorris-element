import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ChuckNorrisComponent } from './chuck-norris.component';
import { ChuckNorrisService } from './chuck-norris.service';
import { Joke } from './joke';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

describe('ChuckNorrisComponent', () => {
  let component: ChuckNorrisComponent;
  let fixture: ComponentFixture<ChuckNorrisComponent>;

  const jokeValue = 'test joke';
  // mock service
  const joke: Joke = {
    icon_url: '',
    value: jokeValue,
    id: '',
    url: ''
  };
  const mockChuckNorrisService: ChuckNorrisService = jasmine.createSpyObj('ChuckNorrisService', ['getJoke']);
  (<jasmine.Spy>mockChuckNorrisService.getJoke).and.returnValue(Observable.of(joke));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChuckNorrisComponent],
      providers: [
      { provide: ChuckNorrisService, useValue: mockChuckNorrisService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should load joke', () => {
    fixture.detectChanges();
    const mockService = TestBed.get(ChuckNorrisService);
    expect(mockService.getJoke).toHaveBeenCalled();
    // test render template
    const de: DebugElement = fixture.debugElement;
    expect(de.query(By.css('p')).nativeElement.textContent).toBe(jokeValue);

  });
});
