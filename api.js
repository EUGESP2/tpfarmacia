async function getIDdata() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=farmacia&limit=5#json')
    const IDdata = await response.json()
    return IDdata
}

async function displayIDtable(){
    const IDNumber = await getIDdata()
    console.log(IDNumber)

    const IDtablebody = document.getElementById('id-table-body')

    for (let ID_ of IDNumber){
        const row = document.createElement('tr')
        const nameCell = document.createElement('td')
        nameCell.textContent = ID_.name
        row.appendChild(nameCell)

        const thumbnail_id = document.createElement('td')
        const thumbnail = document.createElement('img')
        thumbnail.src = ID_.thumbnail
        thumbnail_id.appendChild(thumbnail)
        row.appendChild(thumbnail_id)

        IDtablebody.appendChild(row)

    }
}

displayIDtable()