#### Use proto file to generate Python code

`cd proto`
`python3 -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. ice_cream.proto`

#### Use proto file to generate JavaScript code

`protoc-gen-grpc --js_out=import_style=commonjs,binary:./client/ --grpc_out=./client --proto_path=./proto/ ./proto/ice_cream.proto`