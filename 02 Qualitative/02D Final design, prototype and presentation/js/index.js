import Chart from './Chart.js'




class Reacts extends Chart {
    constructor(id, data, year) {
        super(id, data)
        this.x_field = "date"
        this.y_field = "place"
        super.add_svg();
        super.update_chart()
    }


    add_scale() {
        this.y = d3
            .scaleBand()
            .range([0, this.innerH])
            .domain(
                [...  new Set(this.vis_data.map(d => d[this.y_field]))]
            ).padding(0.3)
        this.x = d3
            .scaleBand()
            .range([0, this.innerW])
            .domain(
                [...  new Set(this.vis_data.map(d => d[this.x_field]))].sort((a, b) => +a > +b ? 1 : - 1)
            )
        this.add_axis()
        this.add_label();
    }
    update_data() {

        this.vis_data = [... this.data]
    }
    draw_chart() {


        let rects = this.draw_area.selectAll("image")
            .data(this.vis_data)
            .join("image")
        rects.attr("class", (d) => d[this.x_field]) //设置一个类名,方便后续调用
            .attr("x", (d) => this.x(d[this.x_field]))
            .attr("y", (d) => this.y(d[this.y_field]))
            .attr("height", this.y.bandwidth())
            .attr("width", this.x.bandwidth())
            .attr('href', d => d.image)
            .attr("stroke", "white")
            .attr("stroke-width", "0.25")

        rects.on('mouseover', (e, d) => {
            let html = () => `
        
            <p>Title: ${d.title}</p>
            <p>Donated: Anonymous</p>
                <p>Place: ${d[this.y_field]}</p>
                <p>Date: ${d[this.x_field]}</p>
                `
            this.tips_show(e, d, html)
            d3.select(e.target).attr('height', 250).attr('width', 250)


        })
            .on('mouseout', (e) => {

                d3.select(e.target)
                    .attr("height", this.y.bandwidth())
                    .attr("width", this.x.bandwidth())
                this.tips_hide
            })
            .on('click', (e, d) => {

                window.open(d.link, "_blank");
            })



    }


}



async function get_data() {
    let data = await d3.json('./data/data.json')
    console.log(data);
    d3.select('body').append('div').style('display', 'none').attr('position', 'absolute').attr('class', 'd3-tip')
        .style('font-family', "Righteous").style('background-color', "#EC622B").style('color', '#F5EEEB')
    new Reacts('chart', data)
}


get_data()