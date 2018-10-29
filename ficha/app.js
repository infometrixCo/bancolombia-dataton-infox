var main = function () {

    var chart;

    $.getJSON("./bal.json", function (data) {
        //Variables
        var indice = -1;
        var label1 = "";
        var label2 = "";
        var label3 = "";
        var idR = '';
        var fugaR = '';
        var transR = '';
        var planR = '';
        var pieData = {};

        //Select Options
        var options = data['2'].map(function (item, index) {
            pieData = data.datos_numericos_para_el_pie[0][index]
            var keys = Object.keys(item);
            return $('<option>', {
                text: item.id,
                value: index,
                id: item.id,
                fuga: item.pago_mas_frecuente,
                trans: item.meses_vinculado,
                plan: item.gasto_promedio_mensual,
                label1 : keys[1],
                label2 : keys[2],
                label3 : keys[3]
            });
        });
        $("#selector_user").append(options);

        $(document).on('change', '#selector_user', function () {
            $(".filterUser").removeAttr('disabled');
            label1 = $('option:selected', this).attr('label1');
            label2 = $('option:selected', this).attr('label2');
            label3 = $('option:selected', this).attr('label3');
            idR = $('option:selected', this).attr('id');
            fugaR = $('option:selected', this).attr('fuga');
            transR = $('option:selected', this).attr('trans');
            planR = $('option:selected', this).attr('plan');
            indice = $('option:selected', this).attr('value');
        });

        $(document).on('click', '.filterUser', function () {
            $("#label1").html(label1);
            $("#label2").html(label2);
            $("#label3").html(label3);
            $("#nameR").html(idR);
            $("#fugaR").html(fugaR);
            $("#transR").html(transR);
            $("#planR").html(planR);
            pieData = data.datos_numericos_para_el_pie[0][indice]

            if (chart != null) {
                $('#chart').empty();
                $('.legend').empty();
                chart = donut()
                    .$el(d3.select("#chart"))
                    .data(pieData)
                    .render();
            } else {
                chart = donut()
                    .$el(d3.select("#chart"))
                    .data(pieData)
                    .render();
            }

        });

    });

    function donut() {
        // Default settings
        var $el = d3.select("body")
        var data = {};
        // var showTitle = true;
        var width = 432,
            height = 180,
            radius = Math.min(width, height) / 2;

        var myColors = {
            "recargas_telefonia": "#f9c80e",
            "servicios_varios": "#f86624",
            "financieros_comercial": "#ea3546",
            "impuestos": "#662e9b",
            "compras": "#43bccd"
        }
        var pie = d3.layout.pie()
            .sort(null)
            .value(function (d) { return d.value; });

        var svg, g, arc;

        var object = {};

        // Method for render/refresh graph
        object.render = function () {
            if (!svg) {
                arc = d3.svg.arc()
                    .outerRadius(radius)
                    .innerRadius(radius - (radius / 2.5));

                svg = $el.append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 3 + "," + height / 2 + ")");

                g = svg.selectAll(".arc")
                    .data(pie(d3.entries(data)))
                    .enter().append("g")
                    .attr("class", "arc");

                g.append("path")
                    // Attach current value to g so that we can use it for animation
                    .each(function (d) { this._current = d; })
                    .attr("d", arc)
                    .style("fill", function (d) { return myColors[d.data.key]; });
                g.append("text")
                    .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
                    .attr("dy", ".35em")
                    .style("text-anchor", "middle");
                g.select("text").text(function (d) { return d.data.value + "%"; }).style('fill', 'white');

                svg.append("text")
                    .datum(data)
                    .attr("x", 0)
                    .attr("y", 0 + radius / 10)
                    .attr("class", "text-tooltip")
                    .style("text-anchor", "middle")
                    .attr("font-weight", "bold")
                    .style("font-size", radius / 2.5 + "px");

                g.on("mouseover", function (obj) {
                    svg.select("text.text-tooltip")
                        .attr("fill", function (d) { return myColors[obj.data.key]; })
                        .text(function (d) {
                            return d[obj.data.key] + "%";
                        });
                });
                var legend = d3.select('.legend').selectAll("legend")
                    .data(Object.keys(data))

                legend.enter().append("div")
                    .attr("class", "legends")

                var p = legend.append("p").attr("class", "category-name")
                p.append("span").attr("class", "key-dot").style("background", function (d, i) { 
                    return myColors[d]; 
                });
                p.insert("text").text(function (d, i) { return d })


                g.on("mouseout", function (obj) {
                    svg.select("text.text-tooltip").text("");
                });

            } else {
                //g.data(pie(d3.entries(data))).exit().remove();

                g.data(pie(d3.entries(data))).exit().remove();

                g.select("path")
                    .transition().duration(200)
                    .attrTween("d", function (a) {
                        var i = d3.interpolate(this._current, a);
                        this._current = i(0);
                        return function (t) {
                            return arc(i(t));
                        };
                    })

                g.select("text")
                    .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; });

                svg.select("text.text-tooltip").datum(data);
            }
            return object;
        };

        // Getter and setter methods
        object.data = function (value) {
            if (!arguments.length) return data;
            data = value;
            return object;
        };

        object.$el = function (value) {
            if (!arguments.length) return $el;
            $el = value;
            return object;
        };

        object.width = function (value) {
            if (!arguments.length) return width;
            width = value;
            radius = Math.min(width, height) / 2;
            return object;
        };

        object.height = function (value) {
            if (!arguments.length) return height;
            height = value;
            radius = Math.min(width, height) / 2;
            return object;
        };

        return object;
    };

};

$(document).ready(main);
