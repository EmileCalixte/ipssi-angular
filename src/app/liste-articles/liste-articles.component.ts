import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {

  @Input() articles: Array<object>;

  @Output() ajouterAuPanier: EventEmitter<any> = new EventEmitter();
  @Output() retirerDuPanier: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  clickAjouterAuPanier(idArticle): void {
    this.ajouterAuPanier.emit(idArticle);
  }

  clickRetirerDuPanier(idArticle): void {
    this.retirerDuPanier.emit(idArticle);
  }

}
