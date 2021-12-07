import Rect from './rect.js'
import Force from './force.js'
async function init() {
    const data = await d3.json('./js/interactive.json')

    // add tip div
    d3.select('body').append('div').style('display', 'none').attr('position', 'absolute').attr('class', 'd3-tip')

    //add bar 
    let bar = new Rect('viz', data)
    bar.draw_chart()
    // add three forces chart
    let place = new Force(data, bar, "Place")
    let type = new Force(data, bar, "Type")
    let period = new Force(data, bar, "Period")

    d3.select('#rect').on('click', (e) => {
        bar.update_rect()
        bar.show_axis()
        classed_ele(e)

    })

    d3.select('#Place').on('click', (e) => {
        place.draw_chart()
        bar.hide_axis()
        classed_ele(e)

    })
    d3.select('#Period').on('click', (e) => {
        period.draw_chart()
        bar.hide_axis()
        classed_ele(e)

    })
    d3.select('#Type').on('click', (e) => {
        type.draw_chart()
        bar.hide_axis()
        classed_ele(e)

    })

}


function classed_ele(e) {

    d3.selectAll('.uk-button').classed('hover', false)
    d3.select(e.target).classed('hover', true)
}

init()