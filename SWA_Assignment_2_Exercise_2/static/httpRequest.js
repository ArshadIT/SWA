    window.init = function() {
        const request = new XMLHttpRequest()
        request.open('GET', 'http://localhost:8080/data')
        request.send()
        request.onload = () => {
                    const document = window.document
                    const table_body = document.getElementById('weather_data')
                    const weatherData = JSON.parse(request.responseText)

                    const latestDate1 = new Date(Math.max.apply(null, weatherData.map(e => { return new Date(e.time) })));
                    const latestData1 = weatherData.filter(e => { const d = new Date(e.time); return d.getTime() == latestDate1.getTime() })
                    
                    latestData1.map(d => {
                      const tr = table_body.appendChild(document.createElement('tr'))
                      tr.insertCell().appendChild(document.createTextNode(d.place))
                      tr.insertCell().appendChild(document.createTextNode(d.value))
                      tr.insertCell().appendChild(document.createTextNode(d.type))
                      tr.insertCell().appendChild(document.createTextNode(d.unit))
                      tr.insertCell().appendChild(document.createTextNode(d.time)) 
                    })


                    
                    
        }
   }