import readline from 'node:readline'
import {RaftClient, ServeClientRequest} from './raft'
import dotenv from 'dotenv'
import {credentials} from '@grpc/grpc-js'

dotenv.config()

const SERVER = String(process.env.NODEID)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

while (true) {
  const client = new RaftClient(
    SERVER,
    credentials.createInsecure()
  )

  rl.question('Choose operation to perform:\n1. SET\n2. GET\n', op => {
    if (op === '1') {
      rl.question('Enter key and value\n', keyvalue => {
        const req: ServeClientRequest = {
          request: 'SET ' + keyvalue
        }
        client.serveClient(req, (err, res) => {
          if (err) {
            console.log(err)
          } else {
            console.log(res.data)
          }
        })
      })
    } else if (op === '2') {

    }
  })
}
