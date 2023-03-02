import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:


const galleryContainer = document.querySelector('.gallery');
const galleryMarup = createImgCardMarcup(galleryItems);

galleryContainer.innerHTML = galleryMarup;

function createImgCardMarcup(array) {
    return array.map((item) => {
        return`
        <div class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
        </div>`;
    })
        .join("")
};

galleryContainer.addEventListener('click', hendleGalleryCardClick);

function hendleGalleryCardClick(event) {
    event.preventDefault();
    
    document.addEventListener('keydown', off);
    const isTargetPictureEl = event.target.classList.contains('gallery__image');

    if (!isTargetPictureEl) {
    return;
    };

    const instance = basicLightbox.create(`
	 <img src="${event.target.dataset.source}">`);

    instance.show();

    if (!instance.visible()) {
        document.removeEventListener('keydown', off);
    }
    
    function off() {

        console.log(event);
        if (event.coud === "Escape") {
            instance.close()
        }
    
        
    }
    
}




// console.log(instance.visible())




// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.


// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.