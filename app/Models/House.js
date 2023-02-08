

export class House{
  constructor(data){
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.img = data.imgUrl
    this.description = data.description
  }

  get houseTemplate(){
    return`
    <div class="col-3 pb-3">
      <div class="card">
        <img class="card-img-top card-img img-fluid" src="${this.img}" alt="img">
        <div class="card-body">
          <p class="fs-4">$1000<br>Year: ${this.year} | Bed: ${this.bedrooms} | Bath: ${this.bathrooms}<br></p>
          <p class="card-text">${this.description ? this.description : "No description about this home"}</p>
          <div class="pt-2">
            <button class="btn btn-md btn-success">Get Details</button>
            <button class="btn btn-md btn-info">Edit Home</button>
            <button class="btn btn-md btn-danger">Buy Home</button>
          </div>
        </div>
      </div>
    </div>
    `
  }
}