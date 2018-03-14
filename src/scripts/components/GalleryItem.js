export default class GalleryItem {
  /**
   * Create a new gallery item instance.
   *
   * @return {void}
   */
  constructor (href) {
    this.element = document.createElement('a');

    this.element.href = href;
    this.element.title = 'View on Giphy';

    this.element.classList.add('gallery__item');
  }
}
