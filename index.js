const liveUri = `https://squadspeaks-github-io.onrender.com`;


let peopleParent = document.getElementById("peoplePar");

const loadpage = async() => {
    const userUri = `${liveUri}/getallusers`;
    let data = await fetch(userUri);
    const response = await data.json();
    response.forEach((each)=> {
        let createdElement = document.createElement("div");
        createdElement.classList.add("peopleItem");
        createdElement.innerHTML = `
            <img src="uploads/${each.filename}" alt="">
            <div class="flex-n-p">
                <span class="peopleName">${each.name}</span>
                <span class="peoplePosition">${each.position}</span>
            </div>
        `;
        peopleParent.appendChild(createdElement);
    });
}
loadpage();