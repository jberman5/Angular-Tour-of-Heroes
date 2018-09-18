import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) { }


  ngOnInit() {
    this.getHeroes();
  }





  getHeroes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
