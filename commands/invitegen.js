module.exports = {
    name: 'invitegen',
    description: "generates a new invite to the server",
    async execute(message, args) {
        let invite = await message.channel.createInvite({
            maxAge: 86400,
            maxUses: 10
        }).then(invite => {
            console.log(`Created an invite with a code of ${invite.code}`);
            message.channel.send(`An invite has been generated by ${message.author.tag} using the command !invitegen`);
            message.channel.send(`The Invite code is https://discord.gg/${invite.code}. The invite has 10 uses and expires in 1(one) day`);    
        }).catch(console.log);

        
    }
}