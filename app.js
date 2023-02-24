const mineflayer = require('mineflayer')
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear, GoalPlaceBlock } = require('mineflayer-pathfinder').goals
var Vec3 = require('vec3');

spawnBot();
function spawnBot()
{
  const bot = mineflayer.createBot({
    host: "play.melonsmp.fun",   // optional
    port: 25565,         // optional
    username: "justintentije@caiway.net",
    password: "LegendaryGriever91",
    auth: 'microsoft' // optional; by default uses offline mode, if using a microsoft account, set to 'microsoft'
  });

  bot.loadPlugin(pathfinder)

  bot.once('spawn', () => {
    // const defaultMove = new Movements(bot)
    // bot.pathfinder.setMovements(defaultMove)
    // bot.pathfinder.setGoal(new GoalNear(6.458, 98, -31, 1))
    //
    // bot.pathfinder.setGoal(new GoalPlaceBlock(new Vec3(6.458, 98, -31), bot.world, {
    //   range : 1
    // }))


    bot.setQuickBarSlot(0);
    bot.activateItem(false);

    bot.on('windowOpen', function (window) {
      bot.clickWindow(14, 0, 0).then(r => console.log('works!'));
    });
  })

  bot._client.on('resource_pack_send', (data) => { bot._client.write('resource_pack_receive', { hash: "Resourcepack",  result: 3 });
  bot._client.write('resource_pack_receive', { hash: "Resourcepack", result: 0 }) })

  // Log errors and kick reasons:
  bot.on('kicked', spawnBot);
  bot.on('error', console.log);
}



//6.458, 98, -30.700