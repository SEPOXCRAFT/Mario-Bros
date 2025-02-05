module.exports = {
  name: "discrim", 
  description: "Mira cuantos users hay con tu mismo tag!", 
  use: "[0001]", 
  category: "util", 
  alias: ["discriminator"], 
  async run(client, message, args){
    const Discord = require("discord.js")
    if(args[0]){
      if(args[0].length !== 4 || isNaN(args[0])) return message.reply("Ese tag no es válido")
      try{
      const embed = new Discord.MessageEmbed()
      .setTitle("Usuarios con el tag "+args[0])
      let e = []
      client.users.cache.forEach(user => {
        if(embed.fields.length < 24 && user.discriminator === args[0]) embed.addField(user.tag, user.id+"\n", true).setColor("RANDOM")
        if(embed.fields.length >= 24) e.push(user.id)
      })
      if(e.length > 0) embed.addField("Hay más usuarios!", `${e.length} usuarios más`)
      message.reply({embeds: [embed]})
      }catch(error) {
        return message.reply("Hay demasiados usuarios con ese tag o no hay ninguno")
      }
    }else if(!args[0]){
      try{
      const embed = new Discord.MessageEmbed()
      .setTitle("Usuarios con el tag "+message.user.discriminator)
      let e = []
      client.users.cache.forEach(user => {
        if(embed.fields.length < 24 && user.discriminator === message.user.discriminator) embed.addField(user.tag, user.id+"\n", true).setColor("RANDOM")
        if(embed.fields.length >= 24) e.push(user.id)
      })
      if(e.length > 0) embed.addField("Hay más usuarios!", `${e.length} usuarios más`)
      message.reply({embeds: [embed]})
      }catch(error) {
        return message.reply("Hay demasiados usuarios con ese tag o no hay ninguno")
      }
    }
  },
  SlashCommand: {
    options: [
      {
        name: "tag",
        description: "Tag de alguien",
        required: false,
        type: "STRING"
      }
    ],
    async run(client, message, args){
      const Discord = require("discord.js")
    if(args.getString("tag")){
      if(args.getString("tag").length !== 4 || isNaN(args.getString("tag"))) return message.reply("Ese tag no es válido")
      try{
      const embed = new Discord.MessageEmbed()
      .setTitle("Usuarios con el tag "+args.getString("tag").toString())
      let e = []
      client.users.cache.forEach(user => {
        if(embed.fields.length < 24 && user.discriminator === args.getString("tag")) embed.addField(user.tag, user.id+"\n", true).setColor("RANDOM")
        if(embed.fields.length >= 24) e.push(user.id)
      })
      if(e.length > 0) embed.addField("Hay más usuarios!", `${e.length} usuarios más`)
      message.reply({embeds: [embed]})
      }catch(error) {
        return message.reply("Hay demasiados usuarios con ese tag o no hay ninguno")
      }
    }else if(!args.getString("tag")){
      try{
      const embed = new Discord.MessageEmbed()
      .setTitle("Usuarios con el tag "+message.user.discriminator)
      let e = []
      client.users.cache.forEach(user => {
        if(embed.fields.length < 24 && user.discriminator === message.user.discriminator) embed.addField(user.tag, user.id+"\n", true).setColor("RANDOM")
        if(embed.fields.length >= 24) e.push(user.id)
      })
      if(e.length > 0) embed.addField("Hay más usuarios!", `${e.length} usuarios más`)
      message.reply({embeds: [embed]})
      }catch(error) {
        return message.reply("Hay demasiados usuarios con ese tag o no hay ninguno")
      }
    }
    }
  }
}