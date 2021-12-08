# The Width and Length Comparison in National Portrait Gallery


## Project Introduction:

The visualization project explores 150 portraits which are on the  physical exhibit from the National Portrait Gallery. It compares the length, width and the area size of each painting separately as well as a whole.

When we visit the painting exhibition online instead of in the museum, although we will see pictures and some descriptions about its size, such as "Frame: 57.2 x 46.7 x 5.4cm (22 1/2 x 18 3/8 x 2 1/8\")", it is still difficult for the audience to imagine how big a painting is.

The dataset includes 150 portrait paintings which are on the physical exhibit with CC0 media access. By comparing the length, width and the area size of each painting, we can know the size relationship between each painting, and I also have some questions, such as which is the largest painting? The smallest one? What is the ratio between them? What is the most common portrait painting size? ...


![1](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01D%20Final%20design%2C%20prototype%20and%20presentation/screenshots/screenshot1.png "1")



## Dataset:
The dataset that's been used in this project is provided by Smithsonian, and I requested data through API Key.
```javascript
// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// constructing the initial search query
const search =  `Paintings AND unit_code:"NPG" AND object_type:"Paintings" AND set_name:"National+Portrait+Gallery+Collection" AND onphysicalexhibit:"Yes"`;

// array that we will write into
let myArray = [];

function addObject(objectData) {  
  
let currentPlace = "";
  if(objectData.content.indexedStructured.place) {
    currentPlace = objectData.content.indexedStructured.place[0];
  }

 myArray.push({
    id: objectData.id,
    title: objectData.title,
    link: objectData.content.descriptiveNonRepeating.record_link,
    place: currentPlace,
    physicalDescription: objectData.content.freetext.physicalDescription,
    date: objectData.content.freetext.date,
    name: objectData.content.freetext.name,
        
  })
```

I also have the `json` file with all the data I needed. [data.json](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01C%20Design%20mockup%20and%20first%20prototype/data.json)
```javascript
[{
	"id": "edanmdm-npg_NPG.71.34",
	"title": "Cecilia Beaux Self-Portrait",
	"link": "https://npg.si.edu/object/npg_NPG.71.34",
	"place": "",
	"physicalDescription": [{
		"label": "Medium",
		"content": "Oil on canvas"
	}, {
		"label": "Dimensions",
		"content": "Stretcher: 45.4 x 35.2 x 2.5cm (17 7/8 x 13 7/8 x 1\")"
	}, {
		"label": "Dimensions",
		"content": "Frame: 57.2 x 46.7 x 5.4cm (22 1/2 x 18 3/8 x 2 1/8\")"
	}],
	"date": [{
		"label": "Date",
		"content": "c. 1889-1894"
	}],
	"name": [{
		"label": "Artist",
		"content": "Cecilia Beaux, 1 May 1855 - 17 Sep 1942"
	}, {
		"label": "Sitter",
		"content": "Cecilia Beaux, 1 May 1855 - 17 Sep 1942"
	}]
}
```

## Rough sketch:
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01C%20Design%20mockup%20and%20first%20prototype/sketch1.png "sketch1")

## Detailed sketch:
![sketch2](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01C%20Design%20mockup%20and%20first%20prototype/Artboard%201.png "sketch2")

![sketch3](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01C%20Design%20mockup%20and%20first%20prototype/Artboard%202.png "sketch3")

![sketch4](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01D%20Final%20design%2C%20prototype%20and%20presentation/sketch4.png "sketch4")


## Design elements:
I used the same typeface that I found at the official NPG website for the visualization project.`Proxima Nova`

I also used the same blue I found at the official NPG website as the primary color.
I picked a yellow as the frame color and a light yellow as the background color that works well with both the primary color and frame color.

`Primary color: #586F7F`
`Frame color: #DDBF8A`
`Background color: #F9F2EA`

## Final Design
![1](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01D%20Final%20design%2C%20prototype%20and%20presentation/screenshots/screenshot1.png "1")
![2](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01D%20Final%20design%2C%20prototype%20and%20presentation/screenshots/screenshot2.png "2")
![3](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01D%20Final%20design%2C%20prototype%20and%20presentation/screenshots/screenshot3.png "3")
![4](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01D%20Final%20design%2C%20prototype%20and%20presentation/screenshots/screenshot4.png "4")

Live Website: [The Width and Length Comparison in National Portrait Gallery](https://kanodesu.github.io/majorstudio-fall21/01%20Quantitative/01D%20Final%20design,%20prototype%20and%20presentation/codes/)


Full Documentation: [Documentation.pdf](https://github.com/kanodesu/majorstudio-fall21/blob/main/01%20Quantitative/01D%20Final%20design%2C%20prototype%20and%20presentation/documentation.pdf)
