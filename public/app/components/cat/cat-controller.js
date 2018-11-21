import CatService from './cat-service.js'

let _cService = new CatService()

let cats = []


function draw() {
    let template = ''
    _cService.cats.forEach(cat => {
        template += `
        <div class="col-sm-4 my-1 card">
        <div class="">
          <img class="card-img-top" src="${cat.img}" height = 100px>
          <div class="card-body">
            <h5 class="card-title">${cat.name} - ${cat.gender}</h5>
            <div class="card-text">
              <p> ${cat.name} is ready for adoption! </p>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    })
    document.getElementById('app').innerHTML = template
  }
  
  export default class CatController {
    constructor() {
      _cService.getCats(draw)
    }
  
    delete(id) {
      _cService.delete(id, draw)
    }
  
  }
