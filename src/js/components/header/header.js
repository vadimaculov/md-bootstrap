import headerTemplate from '../../templates/header.hbs';

const headerContainer = document.getElementById('header-hbs');
/* logic with nav links */

var navigationLinks = [];
if (headerContainer) {
  headerContainer.innerHTML = headerTemplate({ navigationLinks });
}
