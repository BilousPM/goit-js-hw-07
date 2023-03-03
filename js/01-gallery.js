import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgCardMarcup(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

function createImgCardMarcup(array) {
    return array.map(({preview, original, description}) => {
        return`
        <div class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
        .join("")
};

galleryContainer.addEventListener('click', hendleGalleryCardClick);

function hendleGalleryCardClick(event) {
    event.preventDefault();
  
    document.addEventListener('keydown', hendleCloseGalleryCardKeydown);
    
    if (!event.target.classList.contains('gallery__image')) {
      return;
  };
  
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`);
    
   instance.show();
    
  function hendleCloseGalleryCardKeydown(event) {
   
    if (event.code === "Escape" && instance.visible() === true) {
      
      instance.close()
      document.removeEventListener('keydown', hendleCloseGalleryCardKeydown);
    };
  };
};
