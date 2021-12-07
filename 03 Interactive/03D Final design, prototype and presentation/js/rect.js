import Chart from './Chart.js'


export default class Rect_Chart extends Chart {
    constructor(id, data) {
        super(id, data)
        this.x_field = "Date"
        this.y_field = "To"
        super.add_svg();
        super.update_chart()
    }

    add_scale() {
        this.rect_data = d3.groups(this.data, d => d.Date)
        let dates = this.rect_data.map(d => d[0])

        this.x = d3.scaleBand().domain(dates).range([0, this.innerW]).padding(0.3)
    }
    update_data() {
        this.band_width = this.x.bandwidth() * (this.innerH / this.innerW)
        // 计算rect的高度

        this.rect_height = this.innerH / d3.max(this.rect_data, d => d[1].length)

        // 计算每个Rect的位置
        this.rect_data.forEach(d => {
            d[1].forEach((v, i) => {
                v.x = this.x(v.Date)
                v.y = this.innerH - (i + 1) * this.rect_height
            })
        })

        // 组合数据
        this.rect_data = this.rect_data.map(d => {
            return d[1]
        }).flat(3)

    }

    draw_chart() {


        this.rects = this.ChartArea
            .selectAll('rect')
            .data(this.rect_data)
            .join('rect')
            .attr("x", d => d.x)
            .attr("y", d => d.y)
            .attr("width", this.band_width)
            .attr("height", this.rect_height)
            .attr("stroke", "black")
            .attr("stroke-width", "0.25")
            .attr("fill", "#f0e2af")

        this.add_events(this.rects)

        this.all_rects = this.rects



    }

    update_rect() {
        this.rects
            .data(this.rect_data)
            .join('rect')
            .transition()
            .duration(1200)
            .ease(d3.easeCircleIn)
            .attr("x", d => d.x)
            .attr("y", d => d.y)
            .attr("width", this.band_width)
            .attr("height", this.rect_height)
            .attr("stroke", "black")
            .attr("stroke-width", "0.25")
            .attr("fill", "#f0e2af")

    }

    add_events(rects) {
        rects.on('mouseover', (e, d) => {
            let html = `<p>Name: ${d.Name}</p>
                             <p>Period: ${d.Period}</p>
                             <p>Type: ${d.Type}</p>
                             <p>Date: ${d.Date}</p>
                             <p>Place: ${d.Place}</p>
                             `
            this.tips_show(e, d, html)
        }).on('mouseout', this.tips_hide)
            .on('click', (e, d) => {
                window.open(d.Link)
            })
    }

    hide_axis() {
        this.AxisX.selectAll('*').remove()
    }
    show_axis() {
        this.AxisX.transition().delay(1200).call(d3.axisBottom(this.x));
        this.ChartArea.selectAll('.legend').selectAll('*').remove()
        this.ChartArea.selectAll('.area_text').remove()
    }
}