const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://pc-builder:wxoDcaS54cM32wbn@cluster0.trx5yvh.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const productsCollection = client.db("pc-builder").collection("products");

    const { productId, category } = req.query;

    if (req.method === "GET" && productId) {
      const product = await productsCollection.findOne({
        _id: new ObjectId(productId),
      });

      if (product) {
        res.send({ message: "success", status: 200, data: product });
      } else {
        res.status(404).send({ message: "Product not found", status: 404 });
      }
    } else if (req.method === "GET" && category) {
      const product = await productsCollection
        .find({
          Category: category,
        })
        .toArray();

      if (product) {
        res.send({ message: "success", status: 200, data: product });
      } else {
        res.status(404).send({ message: "Product not found", status: 404 });
      }
    } else if (req.method === "GET") {
      const products = await productsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }
    return productsCollection;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
