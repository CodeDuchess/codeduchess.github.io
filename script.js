const app = document.getElementById('root');
/*
const logo = document.createElement('img');
logo.src = 'logo.png';*/

const container = document.createElement('div');
container.setAttribute('class', 'container');

/*app.appendChild(logo);*/
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://www.themuse.com/api/public/jobs?page=1', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(job => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = job.title;

      const p = document.createElement('p');
      job.description = JSON.stringify(job.description).substring(0, 300);
      p.textContent = `${job.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
