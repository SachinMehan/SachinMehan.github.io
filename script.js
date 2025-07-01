document.addEventListener('DOMContentLoaded', function () {
  // Update the projects array below to add/edit your project blogs.
  const projects = [
    {
      id: 'project-1',
      title: 'Portfolio Website',
      date: '2025-03-15',
      image: 'https://via.placeholder.com/600x400',
      excerpt: 'Creating a modern portfolio website using HTML, CSS, and JavaScript.',
      content: `
        <p>This is a sample project post about a portfolio website. Replace this with your actual content.</p>
        <h2>Project Goals</h2>
        <p>The goal was to showcase my skills in a clean, modern interface.</p>
        <h2>Technologies Used</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (Flexbox & Grid)</li>
          <li>JavaScript</li>
        </ul>
        <h2>Challenges Faced</h2>
        <p>Creating a responsive design that works seamlessly on all devices.</p>
      `,
      tags: ['HTML', 'CSS', 'JavaScript', 'Web Design']
    },
    {
      id: 'project-2',
      title: 'Weather App',
      date: '2025-03-10',
      image: 'https://via.placeholder.com/600x400',
      excerpt: 'Building a weather application using a public API and JavaScript.',
      content: `
        <p>This weather app fetches current weather data from a public API and displays it in a user-friendly interface.</p>
        <h2>Technologies Used</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (Fetch API)</li>
          <li>OpenWeatherMap API</li>
        </ul>
        <h2>Implementation Details</h2>
        <p>The app uses the Fetch API to request weather data based on user input.</p>
      `,
      tags: ['JavaScript', 'API', 'Weather', 'Web App']
    },
    {
      id: 'project-3',
      title: 'To-Do List App',
      date: '2025-03-05',
      image: 'https://via.placeholder.com/600x400',
      excerpt: 'Creating a simple to-do list application with local storage support.',
      content: `
        <p>A simple to-do list app that allows adding, editing, and deleting tasks with local storage persistence.</p>
        <h2>Features</h2>
        <ul>
          <li>Add, edit, and delete tasks</li>
          <li>Mark tasks as complete</li>
          <li>Filter tasks by status</li>
        </ul>
        <h2>Technical Implementation</h2>
        <p>Implemented using vanilla JavaScript for DOM manipulation and localStorage for data persistence.</p>
      `,
      tags: ['JavaScript', 'LocalStorage', 'Web App']
    }
  ];

  const contentArea = document.getElementById('content-area');

  // Render the projects grid (homepage)
  function renderProjectsGrid() {
    contentArea.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'projects-grid';

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';

      // Card Image
      const cardImg = document.createElement('div');
      cardImg.className = 'card-img';
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.title;
      cardImg.appendChild(img);

      // Card Content
      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';

      const title = document.createElement('h2');
      title.className = 'card-title';
      title.textContent = project.title;

      const date = document.createElement('div');
      date.className = 'card-date';
      date.textContent = new Date(project.date).toDateString();

      const excerpt = document.createElement('p');
      excerpt.className = 'card-excerpt';
      excerpt.textContent = project.excerpt;

      const readMore = document.createElement('a');
      readMore.href = "#";
      readMore.className = 'read-more';
      readMore.textContent = "Read More";
      readMore.addEventListener('click', function (e) {
        e.preventDefault();
        renderProjectDetails(project);
      });

      cardContent.appendChild(title);
      cardContent.appendChild(date);
      cardContent.appendChild(excerpt);
      cardContent.appendChild(readMore);

      card.appendChild(cardImg);
      card.appendChild(cardContent);
      grid.appendChild(card);
    });

    contentArea.appendChild(grid);
  }

  // Render individual project details
  function renderProjectDetails(project) {
    contentArea.innerHTML = '';

    const details = document.createElement('div');
    details.className = 'project-details';

    const title = document.createElement('h2');
    title.textContent = project.title;

    const date = document.createElement('div');
    date.className = 'card-date';
    date.textContent = new Date(project.date).toDateString();

    const imgContainer = document.createElement('div');
    imgContainer.className = 'card-img';
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title;
    imgContainer.appendChild(image);

    const content = document.createElement('div');
    content.className = 'project-content';
    content.innerHTML = project.content;

    // Project Tags
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'project-tags';
    project.tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.className = 'project-tag';
      tagEl.textContent = tag;
      tagsContainer.appendChild(tagEl);
    });

    // Back to Projects link
    const backLink = document.createElement('a');
    backLink.href = "#";
    backLink.className = 'back-to-home';
    backLink.textContent = "← Back to Projects";
    backLink.addEventListener('click', function (e) {
      e.preventDefault();
      renderProjectsGrid();
    });

    details.appendChild(title);
    details.appendChild(date);
    details.appendChild(imgContainer);
    details.appendChild(content);
    details.appendChild(tagsContainer);
    details.appendChild(backLink);

    contentArea.appendChild(details);
  }

  // Initial render of the projects grid
  renderProjectsGrid();

  // Hamburger menu toggle for mobile navigation
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});
