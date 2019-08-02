// export function getTest() {

export default function getTest() {
  console.log('made it to get file');
  try {
    this.props.toggleLoading();
    //
    // fetch('https://localhost:8443/api/v0/register/',  {method: 'POST'}, {
    fetch(
      'https://test4domain.ml:8443/webdataservice/',
      { method: 'GET' }
      //   {
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json'
      // },
      //   }
    ).then(response => {
      console.log('response object: ' + response);
      if (response.status === 200) {
        console.log('(login.js) registered');
        this.setState({ redirect: true });
        this.props.toggleLoading();
        alert('registered: ');
      } else {
        console.log('(login.js) error');
        this.props.toggleLoading();
        alert('error: ' + response.status);
      }
    });
  } catch (e) {
    alert(e.message);
  }
}
