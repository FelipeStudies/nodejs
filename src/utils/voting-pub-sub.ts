type Message = { pollOptionId: string; votes: number };

type Subscriber = (message: Message) => void;

class VotingPubSub {
  private channels = new Map<string, Subscriber[]>();

  subscribe(pollId: string, subscriber: Subscriber) {
    const subscribers = this.channels.get(pollId) || [];

    subscribers.push(subscriber);

    this.channels.set(pollId, subscribers);
  }

  publish(pollId: string, message: Message) {
    const subscribers = this.channels.get(pollId);

    if (!subscribers) {
      return;
    }

    subscribers.forEach((subscriber) => subscriber(message));
  }
}

const voting = new VotingPubSub();

export { voting };
