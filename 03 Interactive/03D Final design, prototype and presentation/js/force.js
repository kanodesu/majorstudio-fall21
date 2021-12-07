import Chart from './Chart.js'


export default class Force_Chart {
    constructor(data, bar, category) {
        this.data = data
        this.innerH = bar.innerH
        this.innerW = bar.innerW
        this.rects = bar.all_rects
        this.x_field = category
        this.color_field = "Period"
        this.ChartArea = bar.ChartArea
        this.update_data()
        this.add_scale()

        this.legend = this.ChartArea.append('g').attr('class', 'legend')
    }

    add_scale() {
        // color scale
        let colors = d3.groups(this.data, d => d[this.color_field]).map(d => d[0])

        this.color = d3.scaleOrdinal().domain(colors).range(d3.schemeTableau10)

        // x position
        let domains = d3.groups(this.data, d => d[this.x_field]).map(d => d[0])

        const x = d3.scaleBand().domain(domains).range([this.innerW * 0.1, this.innerW])

        // simulation
        this.simulation = d3.forceSimulation(this.nodes)
            .force("Collision", d3.forceCollide(15).strength(2))
            .force('x', d3.forceX().x(d => d.depth === 1 ? x(d.data[0]) : x(d.data[this.x_field])).strength(0.5))
            .force('y', d3.forceY().y(this.innerH / 2))
        this.x_position = x

    }
    update_data() {
        const _data = d3.group(this.data, d => d.Place)
        let root = d3.hierarchy(
            _data
        )
        this.nodes = root.descendants()
        this.links = root.links()
    }

    draw_chart() {

        this.add_rects()

    }

    add_rects() {


        let rects = this.rects.data(this.nodes.filter(d => d.depth > 1)).join('rect')
        rects.transition()
            .duration(1200)
            .ease(d3.easeCircleIn)
            .attr("width", 20)
            .attr("height", 20)
            .attr("stroke", "black")
            .attr("stroke-width", "0.25")
            .attr("fill", d => this.color(d.data[this.color_field]))
            .attr("x", d => d.x)
            .attr("y", d => d.y);

        this.add_legend()

        this.add_events(rects)
        let text = this.ChartArea.selectAll('.area_text').data(this.x_position.domain()).join('text').attr('class', 'area_text')
        text.attr('x', d => this.x_position(d))
            .attr('y', this.innerH * 0.08)
            .style('font-size', '0.9rem')
            .style('font', 'bold')
            .attr("fill", "#f0e2af")
            .text(d => d)
            .attr('transform', 'rotate(-45)')
            .attr('transform-origin', d => `${this.x_position(d)} ${this.innerH * 0.1} `)

    }



    add_events(rects) {
        rects.on('mouseover', (e, d) => {
            let html = `<p>Name: ${d.data.Name}</p>
                             <p>Period: ${d.data.Period}</p>
                             <p>Type: ${d.data.Type}</p>
                             <p>Date: ${d.data.Date}</p>
                             <p>Place: ${d.data.Place}</p>
                             `
            this.tips_show(e, d, html)
        }).on('mouseout', this.tips_hide)
            .on('click', (e, d) => {
                window.open(d.data.Link)
            })
    }
    tips_show(e, v, html) {
        d3.select(".d3-tip")
            .style("display", "block")
            .style("position", "absolute")
            .style("top", e.pageY + "px")
            .style("left", e.pageX + "px")
            .style("background-color", "white")
            .style("padding", "5px")
            .html(html);

    }
    tips_hide() {
        d3.select(".d3-tip").style("display", "none");


    }

    add_legend() {

        // title
        let title = this.legend.selectAll('.title').data([1]).join('text').attr('class', 'title')
        title.attr('x', d => this.innerW)
            .attr('y', -10)
            .style('font-size', '1rem')
            .attr("fill", "#f0e2af")
            .text(this.color_field)

        // texts
        let text = this.legend.selectAll('.title_text').data(this.color.domain()).join('text').attr('class', 'title_text')
        text.attr('x', d => this.innerW + 30)
            .attr('y', (d, i) => i * 30 + 15)
            .style('font-size', '1rem')
            .attr("fill", d => this.color(d))
            .text(d => d)

        // rects
        let rects = this.legend.selectAll('.titlerect').data(this.color.domain()).join('rect').attr('class', 'titlerect')
        rects.attr('x', d => this.innerW)
            .attr('y', (d, i) => i * 30)
            .attr('width', 20)
            .attr('height', 20)
            .style('font-size', '1rem')
            .attr("fill", d => this.color(d))
            .attr('text-anchor', 'middle')
            .text(d => d)
    }
}