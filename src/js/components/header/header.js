import headerTemplate from '../../templates/header.hbs';

const headerContainer = document.getElementById('header-hbs');
/* logic with nav links */

var navigationLinks = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About Us',
  },
  {
    url: '/plp',
    label: 'Products',
  },
  {
    url: '/contact',
    label: 'Contacts',
  },
];

navigationLinks = navigationLinks.map((navigationItem) => {
  const item = navigationItem;
  item.isActive = (window.location.pathname === navigationItem.url);

  return item;
});

if (headerContainer) {
  headerContainer.innerHTML = headerTemplate({ navigationLinks });
}
