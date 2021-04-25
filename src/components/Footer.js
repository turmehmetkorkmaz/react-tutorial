const Footer = () => {
    return(
        <footer id="contact" class="bg-dark-blue">
      <div class="contact-form">
        <form>
          <h4 class="text-center heading-medium">Bana Ulaşın</h4>

          <div class="form-group">
            <label for="name">İsim</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="İsim"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              name="email"
              id="email"
              placeholder="E-Mail"
            />
          </div>
          <div class="form-group">
            <label for="message">Mesaj</label>
            <textarea
              name="message"
              id="message"
              class="form-control"
              rows="5"
              placeholder="Mesajınız..."
            ></textarea>
          </div>

          <button type="submit" class="btn btn-block">Gönder</button>
        </form>

        <ul>
          <li>
            <a href="#"><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </footer>
    )
}

export default Footer