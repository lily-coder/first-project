const projects = [
  {
    name: 'Multi-post Stories',
    shortDescription: 'A daily section of privately personalized reads; no accounts or sign-ups required, has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: {
      imageUrl: './assets/snapshot.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'Ruby On Rails', 'css', 'Github'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },

  {
    name: 'Multi-post Stories',
    shortDescription: 'A daily section of privately personalized reads; no accounts or sign-ups required, has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: {
      imageUrl: './assets/snapshot.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'Ruby On Rails', 'css', 'Github'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },

  {
    name: 'Multi-post Stories',
    shortDescription: 'A daily section of privately personalized reads; no accounts or sign-ups required, has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: {
      imageUrl: './assets/snapshot.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'Ruby On Rails', 'css', 'Github'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },

  {
    name: 'Multi-post Stories',
    shortDescription: 'A daily section of privately personalized reads; no accounts or sign-ups required, has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: {
      imageUrl: './assets/snapshot.png',
      imageAlt: 'project preview image',
    },
    technologies: ['html', 'Ruby On Rails', 'css', 'Github'],
    liveUrl: 'index.html',
    sourceUrl: 'index.html',
  },
];

function createCards(works) {
  let cardMenu = `<div class="third-section cardn">
        <div class="work1"></div>
        <div class="edits">
          <div class="multi-stories1">
            <div>${works.name}</div>
          </div>
          <div class="story-p1">
            <div>
              ${works.shortDescription}
            </div>
          </div>
          <div class="story-lang1">
      `;
  for (let i = 0; i < works.technologies.length; i += 1) {
    cardMenu += `<p class="btn tag_btn white">${works.technologies[i]}</p>`;
  }
  cardMenu += `     
      </div>
          <button class="popup-button" type="button">See Project</button>
        </div>
        <div class="ellipse-4"></div>
      </div>`;

  return cardMenu;
}

function popupModal(works) {
  let popupMenu = `<div class="popup-menu">
                  <i class="fa fa-close fa-2x" id="popup-close"></i>
                  <h4>${works.name}</h4>
                  <div class="popup-img">
                  <img src=${works.image.imageUrl} alt=${works.image.imageAlt} />
                  </div>
                  <div class="popup-body white">${works.description}</div>
                  <div class="story-lang1">
                    `;
  for (let i = 0; i < works.technologies.length; i += 1) {
    popupMenu += `<p class="btn tag_btn">${works.technologies[i]}</p>`;
  }
  popupMenu += `     
                    </div>
                  <div class="popup-btn">
                  <button type="button"><a href="${works.liveUrl}" class="white"> See Live</a>
                  <img src="./assets/new.png" alt="See Live Icon" />
                  </button>
                  <button type="button" class="sourceBtn"><a href="${works.sourceUrl}"class="white" > See Source</a>
                  <img src="./assets/new-2.png" alt="See Source Icon" />
                  </button>
                  </div>
                  </div>`;

  return popupMenu;
}

const projectCard = document.querySelector('#portfolio .cards');
const modalCard = document.querySelector('#my-popup');
function insertHtml() {
  const myWorks = Object.keys(projects);
  const myWorksLength = Object.keys(projects).length;

  for (let i = 0; i < myWorksLength; i += 1) {
    projectCard.innerHTML += createCards(projects[myWorks[i]], i);
  }

  for (let j = 0; j < myWorksLength; j += 1) {
    modalCard.innerHTML += popupModal(projects[myWorks[j]], j);
  }
}

projectCard.onload = insertHtml();

const main = document.querySelector('#main');
const header = document.querySelector('.topnav');
const footer = document.querySelector('.footer');

document.querySelectorAll('.popup-button').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.popup-menu').style.display = 'flex';
    main.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';
  });
});

document.querySelectorAll('#popup-close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelector('.popup-menu').style.display = 'none';
    main.style.display = 'block';
    header.style.display = 'block';
    footer.style.display = 'block';
  });
});