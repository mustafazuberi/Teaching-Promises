// const fetchApi = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch((err) => {
//             console.log('Iqra KO PYAR HUA H ',err)
//         })

//         // console.log('re')
// }
// fetchApi()

const fetchApi = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await res.json();
  console.log(json);
  displayArrayOfObjects(json);
};
fetchApi();

const displayArrayOfObjects = (json) => {
  const objs = json.map((obj) => {
    return `<div class='post'>
    <span>id ---------- ${obj.id}</span>
    <span>user id ------- ${obj.userId}</span>
    <div >${obj.title}</div>
    <div/>`;
  });
  
  document.getElementById("objs").innerHTML = objs;
};
