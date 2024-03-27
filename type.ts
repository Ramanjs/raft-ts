type Term = number;

enum Role {
  FOLLOWER = "follower",
  CANDIDATE = "candidate",
  LEADER = "leader"
}

type NodeId = string;

type Vote = NodeId | null;

type LogEntry = {
  term: Term,
  command: string
}

type NodeState = {
  currentTerm: Term,
  votedFor: Vote,
  log: LogEntry[],
  commitLength: number,
  currentRole: Role,
  currentLeader: NodeId | null,
  votesReceived: Set<Vote>,
  sentLength: number[],
  ackedLength: number[],
  electionTimer: NodeJS.Timeout | undefined
}

export { Term, LogEntry, Role, NodeId, Vote, NodeState }
