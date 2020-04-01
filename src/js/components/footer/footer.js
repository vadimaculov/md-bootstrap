import footerTemplate from '../../templates/footer.hbs';

const footerContainer = document.getElementById('footer-hbs');
/* logic with nav links */

var navigationLinks = [];
if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({ navigationLinks });
}
