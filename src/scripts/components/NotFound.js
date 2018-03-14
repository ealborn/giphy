export default class NotFound {
  /**
   * Create a new not found instance.
   *
   * @return {void}
   */
  constructor (element) {
    this.element = element;
  }

  /**
   * Hide the not-found element.
   *
   * @return {void}
   */
  hide () {
    this.element.classList.add('not-found--active');
  }

  /**
   * Hide the not-found element.
   *
   * @param query {string}
   *
   * @return {void}
   */
  show (query) {
    this.element.textContent = `We couldn't find any GIFs with the search query "${query}".`;
    this.element.classList.add('not-found--active');
  }
}
