import './index.css'


function Classes(){
    return(
        <>
<section id="classes" class="padding classes">
        <div class="container">
          <header class="sec-header">
            <h2 class="heading">
              Our <strong class="text-primary">classes</strong>
            </h2>
            <img src="assets/media/line-dec.png" alt="Line Decoration" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore rem nostrum, deserunt eum dolor delectus.
            </p>
          </header>
          <div class="flex justify-between">
            <div class="flex-30">
              <ul>
                <li class="classes-item">
                  <a class="flex item-center justify-center active" href="#">
                    <img
                      src="assets/media/tabs-first-icon.png"
                      alt="tabs-first-icon"
                    />
                    <h4>First Traning Class</h4>
                  </a>
                </li>
                <li class="classes-item">
                  <a class="flex item-center justify-center" href="#">
                    <img
                      src="assets/media/tabs-first-icon.png"
                      alt="tabs-first-icon"
                    />
                    <h4>Second Traning Class</h4>
                  </a>
                </li>
                <li class="classes-item">
                  <a class="flex item-center justify-center" href="#">
                    <img
                      src="assets/media/tabs-first-icon.png"
                      alt="tabs-first-icon"
                    />
                    <h4>Third Traning Class</h4>
                  </a>
                </li>
                <li class="classes-item">
                  <a class="flex item-center justify-center" href="#">
                    <img
                      src="assets/media/tabs-first-icon.png"
                      alt="tabs-first-icon"
                    />
                    <h4>Fourth Traning Class</h4>
                  </a>
                </li>
              </ul>
              <a class="btn btn-secondary" href="#">View All Schedules</a>
            </div>
            <article class="flex-65 classes-article">
              <img
                class="width-full"
                src="assets/media/training-image-01.jpg"
                alt="training-image-01"
              />
              <h3>First Traing Class</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                delectus unde at accusantium optio perspiciatis deserunt.
                Ratione, iure praesentium tempora similique ut voluptatum
                doloremque nisi est aperiam quas architecto repellat!
              </p>
              <a class="btn" href="#">View Schedule</a>
            </article>
          </div>
        </div>
      </section>

      </>
    )
}
export default Classes