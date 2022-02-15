const listElm = document.querySelector("#list");
const apiUrl = "https://randomuser.me/api/?";

const fetchUsers = (params= "results=20") => {
    fetch(apiUrl+params)
    .then((response) => response.json())
    .then((data) => {
        const user = data.results;
        let str ="";

        user.map((usr) => {
            str += `
            <div class="col-md-6 col-lg-3 py-3">
            <div class="card">
                <img src="${usr.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">
                  ${usr.name.title}
                  ${usr.name.first}
                  ${usr.name.last}
                  </h5>
                  <p class="card-text">
                  <ul class="list-unstyled">
                  <li>
                  
                  <i class="fa-solid fa-mobile-button text-center pt-2"></i> ${usr.phone}</li>
                  <li><i class="fa-solid fa-envelope text-center pt-2"></i> ${usr.email}></li>
                  <li><i class="fa-solid fa-calendar-days text-center pt-2"></i> ${usr.dob.date}</li>
                  <li><i class="fa-solid fa-location-dot text-center pt-2"></i> ${usr.location.city}, ${usr.location.country}</li>
                  </p>
                  
                </div>
              </div>
        </div>
        `;

        });
        listElm.innerHTML = str;

    });

    // .catch(
    //     err =>
    //     (listElm.innerHTML = `<div class = "alert  alert-danger" role="alert">
    //     Oops! Something went wrong.
    //     </div>
        
    //     `
    //     );
    // );
};

fetchUsers();

const handleOnChange = e => {
    const params = "results=20&gender=" + e.value;
    // const value = e.target.value;
    // console.log(e.value);

    fetchUsers(params);
};

