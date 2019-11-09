$(document).ready(function(){
  $('#searchUser').on('keyup',function(e){
    let userName = e.target.value;
    getData(userName);
});
});

let getData = async function(userName){
  fetch(`https://api.github.com/users/${userName}`
  // {
  //   // body: JSON.stringify(
  //   //   {
  //   //     client_id:'f2cf83cc94e17ea2526b',
  //   //     client_secret:'6dc70eed18603be7a5a3883aa0da6c12705cfe19'
  //   //   })
  // }
  )
    .then(result=>{
      // console.log(result)
      return result.json();
    })
    .then(result=>{
      console.log(result);
      // console.log(`UserName - ${result.login}`);
      $('#profile').html(
          `<div class="card">
          <div class="card-header">
              <h3>${result.name}</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${result.avatar_url}"/>
                <a target="_blank" class="btn btn-outline-primary btn-block mt-2" href="${result.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <span class="col-sm-3 btn btn-dark">Public Repos : ${result.public_repos}</span>
                  <span class="col-sm-3 btn btn-primary">Public Gists : ${result.public_gists}</span>
                  <span class="col-sm-3 btn btn-success">Followers : ${result.followers}</span>
                  <span class="col-sm-3 btn btn-info">Following : ${result.following}</span>
                </div>
                </br>
                <div>
                  <ul class="list-group">
                    <li class="list-group-item">Company : ${result.company}</li>
                    <li class="list-group-item">Blog : ${result.blog}</li>
                    <li class="list-group-item">Location : ${result.location}</li>
                    <li class="list-group-item">Member Since : ${result.created_at}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>`
      );
    });
};
