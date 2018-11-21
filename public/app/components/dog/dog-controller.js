import DogService from './dog-service.js'

let _dService = new DogService()

let dogs = []

function draw() {
    let template = ''
    _dService.dogs.forEach(dog => {
        template += `
        <div class="col-sm-4 my-1 card">
        <div class="">
          <img class="card-img-top" src="${dog.img}" height = 100px>
          <div class="card-body">
            <h5 class="card-title">${dog.name} - ${dog.gender}</h5>
            <div class="card-text">
              <p> ${dog.name} is ready for adoption! </p>
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

  export default class DogController {
      constructor() {
          _dService.getDogs(draw)
      }
      delete(id) {
          _dService.delete(id, draw)
      }
  }