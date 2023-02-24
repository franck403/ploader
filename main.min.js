function url() {
  function load(url,id_to_place_content){
    const id = id_to_place_content
    fetch(url)
      .then((response) => response.test())
      .then((data) => document.getElementById(id).innerHTML = data);
  }
  function get(url){
    fetch(url)
      .then((response) => response.test())
      .then((data) => return data);
  }
}
console.log("[info] ploader is started. command are url.load(url,id where content is place) and url.get(url) do a fetch requets and you get the data")
