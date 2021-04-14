a = {
  host: 'test22',
  id: '8ffcc6d8-4922-4665-b4de-595c78d8af7b',
  protocol: 'http',
  read_timeout: 60000,
  tls_verify_depth: null,
  port: 80,
  updated_at: 1618310877,
  ca_certificates: null,
  created_at: 1618310877,
  connect_timeout: 60000,
  write_timeout: 60000,
  name: 'live2',
  retries: 5,
  path: null,
  tls_verify: null,
  tags: null,
  client_certificate: null,
};

const object = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
  }

let {name, host, ...b} = a

c = {troll:"afsd", ...object}
console.log(c);



// let resp: any;
// createServiceDto.name.forEach(
//   (newServiceName) =>
//     (resp = this.httpService
//       .post('http://localhost:8001/services', {
//         name: newServiceName,
//         ...KongServiceDto,
//       })
//       .toPromise()
//       .then((response) => {
//         console.log(response.data);

//         return response.data;
//       })
//       .catch((error) => {
//         if (error.response) {
//           // Request made and server responded
//           console.log(error.response.data);

//           return error.response.data;
//         }
//       })),
// );