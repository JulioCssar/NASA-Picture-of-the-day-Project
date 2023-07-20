document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);

  const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector(".NASA-img").src = data.hdurl;
        document.querySelector(".NASA-img").style.display = "block";
        document.querySelector(".NASA-video").style.display = "none";

        document.querySelector(".NASA-title").innerText = data.title;
      } else if (data.media_type === "video") {
        document.querySelector(".NASA-video").src = data.url;
        document.querySelector(".NASA-img").style.display = "none";
        document.querySelector(".NASA-video").style.display = "block";
      }
      document.querySelector(".NASA-description").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
