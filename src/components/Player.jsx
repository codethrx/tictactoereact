export default function Player({ winner, icon }) {
  return !winner ? <h1>Player:{icon}</h1> : <h1>Winner:{winner}</h1>;
}
