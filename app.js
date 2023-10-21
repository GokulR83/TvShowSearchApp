const form = document.querySelector('.searchForm');
form.addEventListener('submit',async function (e){
    e.preventDefault();
    const searchText = document.querySelector('#searchText').value;
    const config = { params: { q:searchText } }
    const res = await axios.get(` https://api.tvmaze.com/search/shows`,config);
    console.log(res.data);
    makeElements(res.data); 
})

const makeElements = (shows) =>{
    for(let add of shows){
        const div = document.querySelector('.Movie');
        const section = document.createElement("SECTION");
        div.append(section);
        const img = document.createElement('IMG');
        img.src = add.show.image.medium;
        section.append(img);

        const h3 = document.createElement("H3");
        h3.append(add.show.name);
        section.append(h3);

        const lang = document.createElement("P");
        lang.append(add.show.language);
        section.append(lang);

        const runtime = document.createElement("p");
        runtime.append(add.show.runtime);
        section.append(runtime);

        const rating = document.createElement("h4");
        if(add.show.rating.average){
            rating.append(add.show.rating.average);
        }
        else{
            rating.append("Yet To Be Rated");
        }
        section.append(rating);
    }
}