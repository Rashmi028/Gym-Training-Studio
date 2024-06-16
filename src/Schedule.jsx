import './index.css'

function Schedule(){

return(
    <>

<section id="schedule" class="padding schedule">
        <div class="container">
          <header class="sec-header">
            <h2 class="heading">
              classes <strong class="text-primary">schedule</strong>
            </h2>
            <img src="assets/media/line-dec.png" alt="Line Decoration" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore rem nostrum, deserunt eum dolor delectus.
            </p>
            <ul class="flex justify-center schedule-days">
              <li>
                <a class="active" href="#">Monday</a>
                <span>/</span>
              </li>
              <li>
                <a href="#">Tuesday</a>
                <span>/</span>
              </li>
              <li>
                <a href="#">Wednesday</a>
                <span>/</span>
              </li>
              <li>
                <a href="#">Thursday</a>
                <span>/</span>
              </li>
              <li>
                <a href="#">Friday</a>
              </li>
            </ul>
          </header>
          <table>
            <tr>
              <td>Fitness class</td>
              <td>10:00AM - 11:30AM</td>
              <td></td>
              <td>William G. Stewart</td>
            </tr>
            <tr>
              <td>Muscle Training</td>
              <td></td>
              <td></td>
              <td>Paul D. Newman</td>
            </tr>
            <tr>
              <td>Body Building</td>
              <td></td>
              <td>2:30PM - 3:30PM</td>
              <td>Boyd C. Harris</td>
            </tr>
            <tr>
              <td>Yoga Traing Class</td>
              <td></td>
              <td></td>
              <td>Hector T. Daigle</td>
            </tr>
            <tr>
              <td>Advance Training</td>
              <td></td>
              <td></td>
              <td>Bret D. Bowers</td>
            </tr>
          </table>
        </div>
      </section>
      <section class="padding trainer">
        <div class="container">
          <header class="sec-header">
            <h2 class="heading">
              Expert <strong class="text-primary">Trainers</strong>
            </h2>
            <img src="assets/media/line-dec.png" alt="Line Decoration" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore rem nostrum, deserunt eum dolor delectus.
            </p>
          </header>
          <div class="flex justify-between">
            <article class="flex-30 trainer-item">
              <img
                class="width-full"
                src="assets/media/first-trainer.jpg"
                alt="First Trainer"
              />
              <h5>Strength Trainer</h5>
              <h3>Bret D. Bowers</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate, dignissimos sunt harum sequi ea nihil unde in sed quo
              </p>
              <nav>
                <ul class="flex">
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </article>
            <article class="flex-30 trainer-item">
              <img
                class="width-full"
                src="assets/media/second-trainer.jpg"
                alt="Second Trainer"
              />
              <h5>Muscle Trainer</h5>
              <h3>Hector T. Daigl</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate, dignissimos sunt harum sequi ea nihil unde in sed quo
              </p>
              <nav>
                <ul class="flex">
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </article>
            <article class="flex-30 trainer-item">
              <img
                class="width-full"
                src="assets/media/third-trainer.jpg"
                alt="Third Trainer"
              />
              <h5>Power Trainer</h5>
              <h3>Paul D. Newman</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate, dignissimos sunt harum sequi ea nihil unde in sed quo
              </p>
              <nav>
                <ul class="flex">
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </div>
      </section>
      </>
)}

export default Schedule