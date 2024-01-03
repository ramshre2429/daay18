let api = 'https://restcountries.com/v3.1/all';

async function weather() {

    try {

        let fetchApi = await fetch(api)

        let res = await fetchApi.json();

        for (let i of res) {
            // console.log(i.name.common,i.capital[0],i.region,i.latlng[0],i.latlng[1],i.flags.png,i.cca2)
            var res2 = document.createElement('div')

            res2.setAttribute('class', 'container')

            res2.innerHTML = `

            <div  id="main"  class="card row col-lg4 col-sm-12" >

                <div class="card-header"><h1 id="title" class="text-center">${i.name.common}</h1></div>
                
                <div class="card-body text-primary">

                    <img src="${i.flags.png}" class="card-img-top" alt="${i.flags.png}"><br><br>

                    <div class="card-text">Capital:${i.capital[0]}</div>

                    <div class="card-text">Population:${i.population}</div> 

                    <div class="card-text">Country Code:${i.cca2}</div>
                    
                    <div class="card-text">Region:${i.region}</div>

                    <button>Click for Weather</button>

                </div>
       
            </div>
            
            `

            document.querySelector('body').append(res2)

        }

    }

    catch {

        console.log('error');

    }

}

weather()