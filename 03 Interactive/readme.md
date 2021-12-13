# Stories of Chinese Jade


## Project Introduction:

This data visualization project includes 291 jade objects of Chinese culture in the Free Gallery of Art and Arthur M.Sackler Gallery with CC0 media access. This dataset has a lot of interesting data points, such as type(weapon, vessel, or jewelry?), place(different provinces), and culture(different dynasties).

I was wondering were there any similarities and differences between these categories? Will they be related to each other? For example, a certain dynasty only likes certain jade products?



![1](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03D%20Final%20design%2C%20prototype%20and%20presentation/Screenshot1.png "1")



## Dataset:
The dataset that's been used in this project is provided by Smithsonian, and I requested data through API Key.
```javascript
// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// constructing the initial search query
const search =  `Jade AND online_media_type:"Images" AND data_source:"Freer+Gallery+of+Art+and+Arthur+M.+Sackler+Gallery" AND object_type:"Jades+objects" AND media.CC0=true AND culture:"Chinese"`;

// array that we will write into
let myArray = [];

```

I also have the `json` file with all the data I needed. [data.json](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03B%20Design%20mockup%20and%20prototype/interactive.json)
```javascript
[{
	[
  {
    "Name": "Pendant with dragon heads and raised linked curls",
    "Date": "BCE 400s",
    "Place": "Henan province",
    "Type": "Pendant",
    "Period": "Eastern Zhou dynasty",
    "Image": "https://ids.si.edu/ids/deliveryService?max=800&id=FS-7766_25",
    "Link": "http://n2t.net/ark:/65665/ye3d9c064a4-213b-49f1-b7b8-0b9324c7871e"
  },
  {
    "Name": "Pendant with dragon heads, vase, and raised linked curls",
    "Date": "BCE 400s",
    "Place": "Henan province",
    "Type": "Pendant",
    "Period": "Eastern Zhou dynasty",
    "Image": "https://ids.si.edu/ids/deliveryService?max=800&id=FS-7766_27",
    "Link": "http://n2t.net/ark:/65665/ye357e6ade6-e631-482e-86ec-208b06c332a9"
  },
```

## Sketches:
For the homepage, I plan to add some loading effects to engage the users more, and by clicking the `scroll down` button, the app will jump to the graph part directly.


![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%201.png "sketch1")
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%209.png "sketch1")

If the users hover on the images, it will show the tooltip with more information, and if the users click on the images, it will jump to the original website.
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2010.png "sketch1")

If the users switch between different parameters, ideally there will be smooth transitions between these graphs.
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2011.png "sketch1")
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2012.png "sketch1")
![sketch1](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03C%20Second%20iteration%20of%20design%20and%20prototype/MacBook%20Pro%20-%2013.png "sketch1")

## Design elements:
Since my app is about ancient Chinese jades, I picked a serif font to show the seriousness and historic feeling. `Noto Serif`

I used dark green as the background color because most of the jade is green, and I picked a light yellow which works cohesive with the dark green as the text color.

`Background color: #313D28`
`Text color: #F0E2AF`


## Final Design
![1](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03D%20Final%20design%2C%20prototype%20and%20presentation/Screenshot1.png "1")
![2](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03D%20Final%20design%2C%20prototype%20and%20presentation/Screenshot2.png "2")
![3](https://github.com/kanodesu/majorstudio-fall21/blob/main/03%20Interactive/03D%20Final%20design%2C%20prototype%20and%20presentation/Screenshot3.png "3")

Live Website: [Stories of Chinese Jade](https://kanodesu.github.io/majorstudio-fall21/03%20Interactive/03D%20Final%20design,%20prototype%20and%20presentation/)



