const grpc = require('grpc');
const messages = require('./ice_cream_pb');
const services = require('./ice_cream_grpc_pb');

function main() {
  const client = new services.IceCreamClient(
    'localhost:50051', grpc.credentials.createInsecure()
  );

  const iceCreamRequest = new messages.IceCreamRequest();
  iceCreamRequest.setScoops(2);
  iceCreamRequest.setFlavor('plain');

  client.orderIceCream(iceCreamRequest, function(err, response){
    if (err) {
      console.log("Something broke", err);
    } else {
      console.log("Response from Python: ", response.getMessage());
    }
  })

}

main();