export default class GalleryImage {
  /**
   * Create a new gallery image instance.
   *
   * @return {void}
   */
  constructor (source) {
    this.element = document.createElement('img');

    this.element.src = source;
  }
}
