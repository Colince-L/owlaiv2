const Ping = async(client, m, dreadedspeed, sendReact) => {

await sendReact("✈️");

const Dreaded = await client.sendMessage(m.chat, { text: 'Checking my speed. . .' }, {quoted: m});

await client.relayMessage(m.chat, {
      protocolMessage: {
        key: Dreaded.key,
        type: 14,
        editedMessage: {
          conversation: `𓅓⋙${dreadedspeed.toFixed(4)}𝐌𝐒`
        }
      }
    }, {});
     await sendReact("🤖");

}

export default Ping;