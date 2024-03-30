import os
import grpc
import raft_pb2
import raft_pb2_grpc
from dotenv import load_dotenv

load_dotenv()

LEADER = os.getenv('LEADER')

while True:
    print("Welcome to client.")
    print("Choose an operation from the following:\n1. SET\n2. GET")
    op = int(input())
    if (op == 1):
        print("Enter key value pair")
        command = input()
        with grpc.insecure_channel(LEADER) as channel:
            stub = raft_pb2_grpc.RaftStub(channel)
            response = stub.ServeClient(raft_pb2.ServeClientRequest(request=f"SET {command}"))
            print(response)
    elif (op == 2):
        pass
    pass
