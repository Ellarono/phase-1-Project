const from = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiurl ="https://api.lyrics.ovh";
async function searchsong (term){
    const res = await fetch(`${apiurl}/suggest/${term}`);
    const data = await res.json();
    showdata(data);

}

