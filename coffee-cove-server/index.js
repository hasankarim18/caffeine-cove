


const express = require('express')
const cors = require('cors')
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000
const app = express()

// middlewares 

app.use(cors());
app.use(express.json());

// credentials
const userName = process.env.DB_USER_NAME;
const db_password = process.env.DD_PASSWORD;

const uri =
  `mongodb+srv://${userName}:${db_password}@cluster0.nzfxe6e.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    // const database = client.db("coffeeDb");
     const coffeeCollections = client.db("coffeeDb").collection("coffees");

     app.get("/coffees", async (req, res)=> {
        const cursor =  coffeeCollections.find();
        const result = await cursor.toArray()
        res.send(result)
     } );

     app.get("/coffees/:id", async (req, res) => {
       const id = req.params.id;
      
       const query = { _id: new ObjectId(id) };
       const result = await coffeeCollections.findOne(query);
      
       res.send(result);
     });

    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body;
     
       const result = await coffeeCollections.insertOne(newCoffee);
       res.send(result)     
    });

     app.delete("/coffees/:id", async (req, res) => {
       const deletedId = req.params.id;
    
       const query = { _id: new ObjectId(deletedId) };
       const result = await coffeeCollections.deleteOne(query);
       res.send(result)
     
     });

     app.put("/coffees/:id", async (req, res) => {
     const data = req.body;   
     const {
           name,
           quantity,
           suplier,
           details,
           taste,
           category,
           photo,
         } = data;
     const id = req.params.id 
       // create a filter for a movie to update
       const filter = { _id: new ObjectId(id) }; 
       // this option instructs the method to create a document if no documents match the filter
       const options = { upsert: true };
        
      const updateDoc = {
        $set: {
          name,
          quantity,
          suplier,
          details,
          taste,
          category,
          photo
        },
      };
        const result = await coffeeCollections.updateOne(
          filter,
          updateDoc,
          options
        );
        res.send(result)
     });

   


    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
 //   await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res)=> {
    res.send('Coffee cove server running')
} )


app.listen(port, ()=> {
    console.log('Coffee cove server is running'+ port)
})

