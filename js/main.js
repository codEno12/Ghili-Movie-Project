


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //complete API like by 


  const url = `https://ghibliapi.herokuapp.com/films`
  let randomNumber = Math.ceil(Math.random()* 22)
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        const randomID = data[randomNumber].id
        console.log(randomID)
        const randomFilmURL = `https://ghibliapi.herokuapp.com/films/${randomID}`

        const randomThing = data[randomNumber].people[0]

      
       
        //Generate Random Film
        fetch(randomFilmURL) //randomFilmURL
          .then(res => res.json()) 
          .then(data => {
            console.log(data)

            document.getElementById("film-title").innerText = data.title
            document.getElementById("jp-title").innerText = data.original_title
            document.getElementById("film-img").src = data.image
            document.getElementById("description").innerText = data.description
        
          const charURL = data.people[0]

          const aRealPerson = `${data.people}${randomID}`
          
          console.log(aRealPerson)
          
          if (aRealPerson) {
            fetch(charURL)
            .then(res => res.json()) 
            .then(data => {
              console.log(data)

              console.log(data.films)

            //document.getElementById('character-section').display = 'block'

            document.getElementById('description-1').innerText = data.name === undefined ? "" : `Progtagonist: ${data.name}`
          })
          }


    
            
          })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



      // INSTINCT AND SHIRUS GENIUS IDEA OMG 

          // const peopleURL = 'https://ghibliapi.herokuapp.com/people/'
          
          // fetch(peopleURL)
          //   .then(res => res.json()) 
          //   .then(data => {
          //     console.log(data)

          //     let filmsURL = data.reduce((acc,cur) => {
          //       acc[cur.films] = cur;
          //       return acc;
          //     },[])

          //     filmsURL = Object.entries(filmsURL)

          //     console.log(filmsURL)
              

            //   const films = data.filter( (ele, i) => { 
            //   // ele[i].films[0] == `https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c`

            //   console.log(ele[i])
            //   console.log(ele[i].films)
            // })
            // console.log(films)


          // })

            // I need to access people 
            // the people in the data gives me an arrray BUT only with the url no id
            // I need to combine the url to the random id - how: `${data.people[0]}/${randomID}`



      //TEmplate 
        // document.getElementById("film-title").innerText = data[0].title
        // document.getElementById("jp-title").innerText = data[0].original_title
        // document.getElementById("film-img").src = data[0].image
        // document.getElementById("description").innerText = data[0].description

        // if( data.media_type === 'image' ){
        //   document.querySelector('img').src = data.hdurl
        // }else if(data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }
       
        // document.querySelector('h3').innerText = data.explanation