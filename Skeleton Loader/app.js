const card = document.querySelector(".card");

function loadData() {
  card.innerHTML = `
  <div class="card-img">
        <img src="https://images.unsplash.com/photo-1584907797015-7554cd315667?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      </div>

      <div class="card-content">
        <div class="card-profile">
          <img
            src="https://images.unsplash.com/photo-1672268930923-07278055b1bb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div class="card-text">
          <h3>
            Create Skeleton Loading using HTML CSS JavaScript.
          </h3>
          <p class="author">Nikhil Jain</p>
          <p>10K views | 08 April, 2024</p>
        </div>
      </div>
  `;
}

setTimeout(loadData, 3500);
