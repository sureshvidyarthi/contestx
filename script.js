let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contest) => {
  console.log(contest)
  ihtml = ""
  for (item in contest) {
    console.log(contest[item])
    ihtml +=
      `
            <li>
              <div class="course-card">

                <figure class="card-banner">
                  <img src="https://images.techopedia.com/images/uploads/istock-1173805290.jpeg?w=800&h=0&mode=max&quality=70&scale=both" width="370" height="270" loading="lazy"
                    alt="Competitive Strategy law for all students" class="img-cover">
                </figure>

                <div class="card-actions">

                  <span class="badge">${contest[item].site}</span>

                  <button class="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                    <ion-icon name="heart"></ion-icon>
                  </button>

                </div>

                <div class="card-content">
                  <h3 class="h3">
                    <a href="#" class="card-title">${contest[item].name}</a>
                  </h3>
                  <div class="card-footer">
                    <div class="card-meta-item">
                      <a href="${contest[item].url}" class="card-meta-text">View Details</a>
                    </div>

                  </div>

                </div>

              </div>
            </li>
        `
  }
  cardContainer.innerHTML = ihtml
})