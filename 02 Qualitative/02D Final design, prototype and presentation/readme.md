# Gift of Anonymous Donor


## Project Introduction:

This data visualization project uses dataset credited “Gift of Anonymous Donor.” which is provided by Cooper Hewitt, Smithsonian Design Museum. Using “Anonymous Donor” as a key strategy, it poses different questions: Which country of artwork was donated the most anonymously? Was there a specific time period that Cooper Hewitt received a large amout of donations? Which works of art do we still value today?


![1](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2020.png "1")



## Dataset:
The dataset that's been used in this project is provided by Smithsonian, and I requested data through API Key.
```javascript
// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// constructing the initial search query
// const search =  'Flowers AND unit_code:"CHNDM" AND object_type:"Embroidery (visual works)" AND online_media_type:"Images"';
const search =  `ANONYMOUS AND unit_code:"CHNDM" AND online_media_type:"Images" `;

// create your own array with just the data you need
function addObject(objectData) {  
  
  // we've encountered that some places have data others don't
  let currentPlace = "";
  if(objectData.content.indexedStructured.place) {
    currentPlace = objectData.content.indexedStructured.place[0];
  }


  myArray.push({
    id: objectData.id,
    title: objectData.title,
    access:objectData.content.descriptiveNonRepeating.metadata_usage,
    link: objectData.content.descriptiveNonRepeating.record_link,
    place: currentPlace,
    name: objectData.content.freetext.name,
    credit:objectData.content.freetext.creditLine[0].content,
    medium:objectData.content.freetext.physicalDescription[0].content,
    image: objectData.content.descriptiveNonRepeating.online_media.media[0].content,
    
    
  })
}


fetchSearchData(search);
```

I also have the `json` file with all the data I needed. [data.json](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02C%20Second%20iteration%20of%20design%20and%20prototype/data.json)
```javascript
  {
    "id": "edanmdm-chndm_1952-161-230-a_b",
    "title": "Pleated fan and case",
    "date": 1952,
    "link": "https://collection.cooperhewitt.org/view/objects/asitem/id/105716",
    "place": "France",
    "name__label": "",
    "name__content": "",
    "credit": "Gift of Anonymous Donor",
    "medium": "Silk leaf, pierced, carved and painted ivory sticks with applied gold foil",
    "image": "https://ids.si.edu/ids/deliveryService?id=CHSDM-105716_01-000001"
  },
  {
    "id": "edanmdm-chndm_1952-161-239",
    "title": "Fan leaf",
    "date": 1952,
    "link": "https://collection.cooperhewitt.org/view/objects/asitem/id/105725",
    "place": "England",
    "name__label": "",
    "name__content": "",
    "credit": "Gift of Anonymous Donor",
    "medium": "Gouache-painted parchment",
    "image": "https://ids.si.edu/ids/deliveryService?id=CHSDM-1952-161-239MattFlynn"
  },
```


## Sketches:
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2020.png "sketch1")
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2022.png "sketch1")
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2025.png "sketch1")
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2026.png "sketch1")
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2027.png "sketch1")




## Design elements:

I also used the same blue I found at the official NPG website as the primary color.
I picked a yellow as the frame color and a light yellow as the background color that works well with both the primary color and frame color.

`Primary color: #586F7F`
`Frame color: #DDBF8A`
`Background color: #F9F2EA`

## Final Design
![1](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02D%20Final%20design%2C%20prototype%20and%20presentation/Screen%20Shot%202021-11-30%20at%2013.30.00.png "1")
![2](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02D%20Final%20design%2C%20prototype%20and%20presentation/Screen%20Shot%202021-11-30%20at%2013.31.16.png "2")


<br>


Live Website: [Gift of Anonymous Donor](https://kanodesu.github.io/majorstudio-fall21/02%20Qualitative/02D%20Final%20design,%20prototype%20and%20presentation/)

Screen Recording: [Gift of Anonymous Donor Screen Recording](https://github.com/kanodesu/majorstudio-fall21/blob/main/02%20Qualitative/02D%20Final%20design%2C%20prototype%20and%20presentation/Screen%20Recording%20.mov)



