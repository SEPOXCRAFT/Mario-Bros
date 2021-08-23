module.exports = {
  name: "setconfessions",
  description: "Establece el canal de confesiones",
  use: "(#channel)",
  category: 'moderacion',
  alias: [],
  async run(client, message, args) {
    if(args.length < 1) return message.reply("Este comando necesita 1 argumento")
    const Discord = require("discord.js")
  const db = require("megadb")
  const confessiondb = new db.crearDB("confessiondb")
  if(message.guild.channels.resolve(args[0]).type !== "text" || message.mentions.channels.first().type !== "text") return message.reply("Debes establecer un canal de texto")
  confessiondb.set(message.guild.id, message.mentions.channels.first().id || message.guild.channels.resolve(args[0]).id)
  message.channel.send("El canal de confesiones ha sido establecido correctamente")
}
}