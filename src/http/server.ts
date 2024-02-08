import fastifyCookie from '@fastify/cookie';
import fastifyWebsocket from '@fastify/websocket';
import fastify from 'fastify';

import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';
import { pollResults } from './ws/poll-results';

const app = fastify();

app.register(fastifyCookie, {
  secret: 'abc',
  hook: 'onRequest',
});

app.register(fastifyWebsocket);

app.register(getPoll);
app.register(createPoll);
app.register(voteOnPoll);

app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
  console.info('HTTP server running!');
});
