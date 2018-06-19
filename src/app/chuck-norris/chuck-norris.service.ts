import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { Joke } from './joke';

@Injectable()
export class ChuckNorrisService {

	private jokeUrl: string;

	constructor(private http: HttpClient) {
		this.jokeUrl = environment.jokeUrl;
	}

	/**
	* Get a random joke
	*/
	getJoke() : Observable<Joke> {
		const url = this.jokeUrl; 
		return this.http.get<Joke>(url);
	}
}
