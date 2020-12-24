import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = {
    1: {
      article: {
        nom: 'Mon super livre',
        description: 'Un super bouquin à lire absolument',
        prix: 8.99,
      },
      quantite: 9,
    },
    2: {
      article : {
        nom: 'Couteau suisse',
        description: 'Tous les outils nécessaires dans votre poche',
        prix: 12.50,
      },
      quantite: 21,
    },
    5: {
      article: {
        nom: 'Playstation 5',
        prix: 499,
      },
      quantite: 0,
    },
    7: {
      article: {
        nom: 'iPhone 12',
        prix: 899,
      },
      quantite: 6,
    },
  };

  panier = {};

  getArticlesAsArray(): Array<object> {
    const articles = [];

    for (const id in this.articles) {
      const article = this.articles[id];
      article.id = id;

      articles.push(article);
    }

    return articles;
  }

  ajouterAuPanier(idArticle): boolean {
    if (this.panier.hasOwnProperty(idArticle)) {
      const quantitePanier = this.panier[idArticle].quantite;
      if (quantitePanier >= this.articles[idArticle].quantite) {
        return false;
      }
      this.panier[idArticle].quantite++;
    } else {
      this.panier[idArticle] = {
        article: this.articles[idArticle].article,
        quantite: 1
      };
    }

    return true;
  }

  retirerDuPanier(idArticle): boolean {
    if (!this.panier.hasOwnProperty(idArticle)) {
      return false;
    } else {
      this.panier[idArticle].quantite--;
      if (this.panier[idArticle].quantite <= 0) {
        delete this.panier[idArticle];
      }
    }

    return true;
  }
}
