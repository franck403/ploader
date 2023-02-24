function load(url,id_to_place_content){
  const id = id_to_place_content
  fetch(url, {
    mode:'no-cors'
  })
    .then((response) => response.text())
    .then((data) => document.getElementById(id).innerHTML = data);
  console.log("[info] ploader finished the load")
}
console.log("[info] ploader is started. command are load(url,id where content is place) ")
