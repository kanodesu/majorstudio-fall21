/*global d3*/
//console.log('hello')

// Force-Directed Graph
class ForceRects {
    constructor(id, data) {
        this.id = id;
        this._data = data;
        this.init();
    }
    
    
    handleData() {
        this.data = this._data
        // calculate area size
        this.data.forEach(d => {
            let area = d.physicalDescription[1].content
            const regex = /\d.*cm/g;
            let width_height = area.match(regex)?.[0]?.replace('cm', '').split('x')

            d.width = +width_height[0]
            d.height = +width_height[1]
            d.area = +width_height[0] * +width_height[1]
        })

    }
    
    
    
    init() {
        this.handleData();
        this.initSvg();
        this.init_tip()
        this.initScale();
        this.initSimulation();
        this.draw_rects();
    }
    
    
    initSvg() {
        const div = d3.select(`#${this.id}`);
        div.selectAll("*").remove();
        let node = div.node().getBoundingClientRect();
        this.w = node.width;
        this.h = node.height;

        this.svg = div.append("svg");
        this.svg.attr("width", this.w).attr("height", this.h);

    }
    
    
    initScale() {
        // calculate ratio of width&length
        let max_width = d3.max(this.data, (d) => d.width);
        let max_height = d3.max(this.data, (d) => d.height);

        let min_width = d3.min(this.data, (d) => d.width);
        let min_height = d3.min(this.data, (d) => d.height);

        let domain = [Math.min(min_width, min_height), Math.max(max_width, max_height)]

        this.size = d3.scaleLinear().domain(domain).range([12, 120]);

        this.radius = 0
        
       // calculate color
        this.color = d3
            .scaleLinear()
            .domain(d3.extent(this.data, d => d.area))
            .range(['#C1DCE5', '#586F7F'])



    }
    
    
    initSimulation() {
        let simulation = d3.forceSimulation(this.data);
        this.simulation = simulation
            .force(
                "collide",
                d3.forceCollide((d) => this.size(Math.max(d.width, d.height)) / 1.3).strength(2)
            )
            .force("center", d3.forceCenter(this.w / 2, this.h / 2))
            .on("tick", () => this.ticked());
    }
    
    
    ticked() {
        this.svg
            .selectAll("rect")
            .attr("x", (d) => d.x)
            .attr("y", (d) => d.y);
    }
    
    
    init_tip() {
        d3.select('body').append('div').attr('class', 'd3-tip').attr('display', 'none')
    }
    
    
    draw_rects() {
        this.svg
            .selectAll("rect")
            .data(this.simulation.nodes())
            .join("rect")
            .attr("fill", (d) => this.color(d.area))
            .attr('width', d => this.size(d.width))
            .attr("stroke", "#DDBF8A")
            .attr("stroke-width", "3px")
            .attr('height', d => this.size(d.height))
            .on("mouseover", (e, d) => {
                this.tips_show(e, d);
            })
            .on("mouseout", this.tips_hide);
    }


    //tips
    tips_show(e, d) {
        d3.select(".d3-tip")
            .style("display", "block")
            .style("position", "absolute")
            .style("top", `${e.pageY}px`)
            .style("left", `${e.pageX}px`)
            .attr("stroke", "#DDBF8A")
            .attr("stroke-width", "1px")
            .html(
                () => ` <section>
                                <h3><strong>${d.title}</strong></h3>
                                <br>
                                <p>${d.physicalDescription[0]?.label}:</p>
                                <p><strong>${d.physicalDescription[0]?.content}</strong></p>
                                <br>
                                <p>${d.physicalDescription?.[2]?.label}:</p>
                                <p><strong>${d.physicalDescription?.[2]?.content}</strong></p>
                                <br>
                          
                                <p>${d.date[0].label}:</p>
                                <p><strong>${d.date[0].content}</strong></p>
                                <br>
                          
                                <p>${d.name[0].label}:</p>
                                <p><strong>${d.name[0].content}</strong></p>
                          
          </ section> `
            );




        // d3.select(e.target).attr('opacity', 1)


    }
    tips_hide() {
        d3.select(".d3-tip").style("display", "none");

    }


}


//import data
async function get_data() {
    const data = await d3.json('./data.json')
    console.log(data);
    return data
}


async function charts() {
    const data = await get_data()
    new ForceRects('rects', data)

}

charts()

