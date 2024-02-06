import fastifyCookie from '@fastify/cookie';
import fastify from 'fastify';

import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';

const app = fastify();

app.register(fastifyCookie, {
  secret: 'abc',
  hook: 'onRequest',
});

app.register(getPoll);
app.register(createPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.info('HTTP server running!');
});