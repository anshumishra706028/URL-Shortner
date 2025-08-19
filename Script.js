async function shortURL() {
    const URL = document.getElementById("URL").Value;
    const response = await fetch('https://github.com/anshumishra706028?tab=repositories{encodeURLComponent(URL)}');
    if(response.ok){
        const data= await response.text();
        document.getElementById('results').innerHTML ='
        shortened URL: <a href="${data}" target="_blank">${data}</a>;
    }
    else{
        Document.getElementById('results').innerHTML = "Error shortening"
    }
}
    

