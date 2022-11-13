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
                  <img src="./assets/images/course-1.jpg" width="370" height="270" loading="lazy"
                    alt="Competitive Strategy law for all students" class="img-cover">
                </figure>

                <div class="card-actions">

                  <span class="badge">Intermediate</span>

                  <button class="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                    <ion-icon name="heart"></ion-icon>
                  </button>

                </div>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                      <span class="card-meta-text">35 Lessons</span>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                      <time datetime="PT18H15M44S" class="card-meta-text">18h 15m 44s</time>
                    </li>

                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">Competitive Strategy law for all students</a>
                  </h3>

                  <div class="rating-wrapper">

                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <span class="rating-text">(18 Review)</span>

                  </div>

                  <div class="card-footer">

                    <div class="card-price">
                      <span class="span">$29.00</span>

                      <del class="del">$39.00</del>
                    </div>

                    <div class="card-meta-item">
                      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

                      <span class="card-meta-text">47 Students</span>
                    </div>

                  </div>

                </div>

              </div>
            </li>
        `
    }
    cardContainer.innerHTML = ihtml
})