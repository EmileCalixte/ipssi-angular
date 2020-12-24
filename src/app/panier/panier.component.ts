import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  @Input() panier: object;

  constructor() { }

  ngOnInit(): void {
  }

  isPanierEmpty(): boolean {
    return Object.keys(this.panier).length === 0;
  }

  getPanierAsArray(): Array<object> {
    const panier = [];

    for (const articleId in this.panier) {
      const article = this.panier[articleId];
      article.id = articleId;

      panier.push(article);
    }

    console.log(panier);

    return panier;
  }

  getTotalPrice(): number {
    let total = 0;
    for (const idArticle in this.panier) {
      total += this.panier[idArticle].quantite * this.panier[idArticle].article.prix;
    }

    return total;
  }

}
