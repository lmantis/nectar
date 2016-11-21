import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'test-app',
  templateUrl: './test.html',
  styleUrls: ['./test.css']
})
export class TestComponent implements OnInit {
articles = Articles;
title = Title;
action = Action;
  constructor() { }

  ngOnInit() {
  }

}

const Title : string = 'Editing Queue';
const Action : string = 'VIEW MORE ARTICLES';

const Articles: Article[] = [
    { imagebox: '/assets/police.jpg', heading: 'Two police officers in serious condition after being deliberately', description: 'Brafton Trial Feed Content  |  Last Modified: 2016-10-12 9:45PM' },
    { imagebox: '/assets/aircraft.jpg', heading: 'Cobham shares nose-dive as it issues second profit warning', description: 'Cobham |  Last Modified: 2016-10-24 10:45AM' },
    { imagebox: '/assets/telecoms.jpg', heading: 'Time Warner and AT&T say ‘no grounds’ to block $108bn merger', description: 'Braftn News  |  Last Modified: 2016-10-22 11:42AM' }

];


export class Article {
    imagebox: string;
    heading: string;
    description: string;
}