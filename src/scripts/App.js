import Gallery from './components/Gallery.js';
import NotFound from './components/NotFound.js';
import Giphy from './utils/Giphy.js';

export default class App {

    constructor() {
      this.giphy = new Giphy();

      this.gallery = new Gallery(document.querySelector('.gallery'));
      this.notFound = new NotFound(document.querySelector('.not-found'));

      this.form = document.forms.search;
      //document.forms ger tillbaka en array med alla objekt på sidan.
      this.form.addEventListener('submit', this.onSubmit.bind(this));
      // this.search = document.querySelector('#search');
      // this.search.addEventListener('submit', this.onSubmit);
      //console.log('testar');
    }

    onSubmit (event) {
      event.preventDefault();

      //remove the old gifs
      this.gallery.removeItems();

      //hide not found element
      this.notFound.hide();

      //get query from input field
      const query = this.form.querySelector('input').value;
      //Log the value of the input field in the new method and try it in the browser.
      //console.log(event.target.querySelector('input').value);

      //search for gifs
      this.giphy.search(query)
      .then(response => {
        //if no items are found, tell the user
        if (response.data.length === 0) {
          this.notFound.show(query);
        }

        //create new gallery removeItems
        response.data.forEach(item => this.gallery.addItem(item));
      });
    }
}
