function checkUserVaild(goodUsers) {
  return function allUsersVaild(submittedUsers){
      return submittedUsers.every(function(user) {
        return goodUsers.some(function(goodUser){
          return user.id === goodUser.id
        })
      });
    
  }
}

module.exports = checkUserVaild;