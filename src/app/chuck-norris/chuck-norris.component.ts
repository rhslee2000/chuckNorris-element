import { Component, OnInit, Input } from '@angular/core';
import { ChuckNorrisService } from './chuck-norris.service';
import { Joke } from './joke';

@Component({
  selector: 'chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

	@Input()
	private category: string;

    joke: Joke;

  	constructor(private service: ChuckNorrisService) { }

  	ngOnInit() {
			this.getJoke();
  	}

	private getJoke() {
		this.service.getJoke().subscribe(result => {
			console.log(result);
			this.joke = result;
		});
	}
}
