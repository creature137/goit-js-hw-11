import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { displayImages } from './js/render-functions/';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightboxGallery = new SimpleLightbox('.gallery a', {});

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = event.currentTarget[0].value.trim();

  if (!query) {
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  fetchImages(query)
    .then(data => displayImages(data, gallery, lightboxGallery))
    .catch(error => {
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}
