const filmek = [
  {
    "title": "Ratatouille",
    "year": 2007,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Kung Fu Panda",
    "year": 2008,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Up",
    "year": 2009,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "genre": "Animation",
    "rating": 1
  },
  {
    "title": "Frozen",
    "year": 2013,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Inside Out",
    "year": 2015,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Coco",
    "year": 2017,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genre": "Animation",
    "rating": 3
  },
  {
    "title": "Joker",
    "year": 2019,
    "genre": "Drama",
    "rating": 4
  },
  {
    "title": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "rating": 4
  },
  {
    "title": "Encanto",
    "year": 2021,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "genre": "Action",
    "rating": 3
  },
  {
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Inside Out 2",
    "year": 2024,
    "genre": "Animation",
    "rating": 5
  }
];

const tbody = document.getElementById('tbody')
for (const film of filmek){
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdYear = document.createElement('td');
    const tdGenre = document.createElement('td');
    const tdRating = document.createElement('td');
    tdTitle.innerText = film.title
    tdYear.innerText = film.year
    tdGenre.innerText = film.genre
    tdRating.innerText =   "⭐".repeat(film.rating)

    
    tr.appendChild(tdTitle);
    tr.appendChild(tdYear);
    tr.appendChild(tdGenre);
    tr.appendChild(tdRating);
    tbody.appendChild(tr);
    
    if (film.rating <= 2) {
        tr.classList.add('low-rating');
    }
}

const form = document.getElementById("myForm")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const title = data.get('Title').toString()
        const year = data.get('Year').toString()
        const genre = data.get('Genre').toString()
        const raiting = "⭐".repeat(parseInt(data.get('Rating').toString()))

        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdYear = document.createElement('td');
        const tdGenre = document.createElement('td');
        const tdRating = document.createElement('td');
        tdTitle.innerText = title
        tdYear.innerText = year
        tdGenre.innerText = genre
        tdRating.innerText = raiting

        tr.appendChild(tdTitle)
        tr.appendChild(tdYear)
        tr.appendChild(tdGenre)
        tr.appendChild(tdRating)
        tbody.appendChild(tr)

        if (film.rating <= 2) {
        tr.classList.add('low-rating');
        }

})





