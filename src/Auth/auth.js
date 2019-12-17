export default function isAuthenticated() {
  if (sessionStorage.getItem(['token'])) {
    // Logged in
    console.log('true');

    return true;
  }
  // Not loggedin
  console.log('false');
  return false;
}
