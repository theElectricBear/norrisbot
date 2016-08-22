'use strict';

var NorrisBot = require('../lib/norrisbot');

var token = 'xoxb-70849268976-A9uo5Cc9dzAOeF0puqsQjw3N';
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var norrisbot = new NorrisBot({
  token: token,
  dbPath: dbPath,
  name: name
});

norrisbot.run();
