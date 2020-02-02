function getShortMessages(messages) {
  let result = [];

  result = messages.filter(function(message) {
    return message.message.length < 50;
  });

  result = result.map(function(item) {
    return item.message;
  })

  return result;
}

module.exports = getShortMessages;