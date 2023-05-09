

const AddCoffee = () => {


  const handleAddCoffee = (event)=> {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const quantity = form.quantity.value;
    const suplier = form.suplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, suplier,details, taste, category, photo}
    console.log(newCoffee);

  }

    return (
      <div className="container mx-auto py-12 my-12">
        <h2 className="text-3xl font-semibold">Add a Coffee </h2>
        <form onSubmit={handleAddCoffee}>
          <div className="form-container grid gap-8 grid-cols-1 md:grid-cols-2">
            {/* left form */}
            <div className="left-form">
              <div className="form-control">
                {/* name */}
                <label className="input-group mb-4">
                  <span className="w-1/5">Coffee Name</span>
                  <input
                    name="name"
                    type="text"
                    className="input input-bordered w-4/5"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input-group mb-4">
                  {/* quantity */}
                  <span className="w-1/5">Available Quantity</span>
                  <input
                    name="quantity"
                    type="text"
                    className="input input-bordered w-4/5"
                  />
                </label>
              </div>
              <div className="form-control">
                {/* suplier */}
                <label className="input-group mb-4">
                  <span className="w-1/5">Suplier Name</span>
                  <input
                    name="suplier"
                    type="text"
                    className="input input-bordered w-4/5"
                  />
                </label>
              </div>
              <div className="form-control">
                {/* taste */}
                <label className="input-group mb-4">
                  <span className="w-1/5">Taste</span>
                  <input
                    name="taste"
                    type="text"
                    className="input input-bordered w-4/5"
                  />
                </label>
              </div>
              {/*  */}
            </div>
            {/* right from */}
            <div className="right-form">
              <div className="form-control">
                {/* category */}
                <label className="input-group mb-4">
                  <span className="w-1/5">Category</span>
                  <input
                    name="category"
                    type="text"
                    className="input input-bordered w-4/5"
                  />
                </label>
              </div>
              {/* details */}
              <div className="form-control">
                <label className="input-group mb-4">
                  <span className="w-1/5">Details</span>
                  <input
                    name="details"
                    type="text-area"
                    className="input input-bordered w-4/5"
                  />
                </label>
              </div>
              {/* photo url */}
              <div className="form-control">
                <label className="input-group mb-4">
                  <span className="w-1/5">Photo Url</span>
                  <input
                    name="photo"
                    type="text-area"
                    className="input input-bordered w-4/5"
                  />
                </label>
              </div>
              {/* submit button */}
              <div>
                <input
                  type="submit"
                  className="btn w-full"
                  value="Add a Coffee"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
};

export default AddCoffee;