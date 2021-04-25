const Course = () => {
    return(
        <section id="courses">
      <h3 class="text-center heading-medium">Kurslar</h3>

      <div class="container">
        <div class="courses">
          
          <div class="course">
            <div class="course-image">
              <img src="images/python.jpg" alt="Python" />
              <span>%90 İndirim</span>
            </div>

            <div class="course-info">
              <div class="title">
                (40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)
              </div>
              <div class="description">
                (40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)
              </div>
              <div class="instructor">Mustafa Murat Coşkun,Yazılım Bilimi</div>
              <div class="rating">4.6 | (19990 Oylama)</div>
            </div>
          </div>
          
          <div class="course">
            <div class="course-image">
              <img src="images/java.jpg" alt="Java" />
              <span>%90 İndirim</span>
            </div>

            <div class="course-info">
              <div class="title">
                Komple Java Geliştirici Kursu
              </div>
              <div class="description">
                Komple Java Geliştirici Kursu | Sıfırdan Java Öğrenin
              </div>
              <div class="instructor">Mustafa Murat Coşkun,Yazılım Bilimi</div>
              <div class="rating">4.6 | (7000 Oylama)</div>
            </div>
          </div>

         
          <div class="course">
            <div class="course-image">
              <img src="images/javascript.jpg" alt="JavaScript" />
              <span>%90 İndirim</span>
            </div>

            <div class="course-info">
              <div class="title">
                Komple Modern JavaScript Kursu
              </div>
              <div class="description">
                Komple Modern JavaScript Kursu - ES6+
              </div>
              <div class="instructor">Mustafa Murat Coşkun,Yazılım Bilimi</div>
              <div class="rating">4.7 | (2000 Oylama)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Course