import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $('.fa.fa-bars');
    this.menuIconClose = $('.primary-nav__burger .fa.fa-times').hide();
    this.menuContent = $('.primary-nav__row');
    this.aboutLink = $('#about-link');
    this.contactLink = $('#contact-link');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    this.aboutLink.click(this.smoothScroll.bind(this, $('#about'), 2.5));
    this.contactLink.click(this.smoothScroll.bind(this, $('#contact'), 1100));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('primary-nav__row--open');
    this.menuIcon.toggleClass('fa fa-times');
    this.menuIcon.toggleClass('fa fa-bars');
  }
}

export default MobileMenu;
