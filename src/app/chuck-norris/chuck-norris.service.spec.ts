import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ChuckNorrisService } from './chuck-norris.service';
import { Joke } from './joke';

describe('ChuckNorrisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
		imports: [HttpClientTestingModule],
      	providers: [ChuckNorrisService]
    });
  });

  it('should be created', inject([ChuckNorrisService], (service: ChuckNorrisService) => {
    expect(service).toBeTruthy();
  }));

	describe('getJoke', () => {
		const jokeValue = 'another funny joke';
		const mockJoke : Joke = {
			icon_url: '',
			value: jokeValue,
			id: '',
			url: ''
		}
		it('should get the joke', inject([HttpTestingController, ChuckNorrisService],
			(mockHttp: HttpTestingController, service: ChuckNorrisService) => {
				service.getJoke().subscribe(
					response => {
						expect(response).toBe(mockJoke);
					});
				const req = mockHttp.expectOne('https://api.chucknorris.io/jokes/random');
				expect(req.request.method).toBe('GET');
				req.flush(mockJoke);
				mockHttp.verify();
			}));
	}); // getJoke()
});
