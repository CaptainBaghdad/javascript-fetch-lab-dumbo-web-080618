const token = '042b85ea60406baf15fe36697190d004acf5f15e';
 const repo = 'learn-co-curriculum';
 const title = 'javascript-fetch-lab';
 const baseUrl = '/api.gtihub.com';
 const gitName = 'CaptainBaghdad';
 const forkUrl = `${gitName}/javascript-fetch-lab`;
const repoTitle = 'javascript-fetch-lab';


function getIssues() {
 
}

function showIssues(json) {
  
}


}

function showResults(json) {
}

function forkRepo() {
 
  //use fetch to fork it!
  fetch(`/api.github.com/repos/${repo}/${title}/forks`,{ 
    method: 'post',
    headers: {
      Authorization : `token ${token}`
    }
    
  })
  .then(res => res.json())
  .then(json => console.log(json));
  
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
