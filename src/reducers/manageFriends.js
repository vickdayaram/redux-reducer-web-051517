export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends,
                        {name: action.friend.name,
                        hometown: action.friend.hometown ,
                        id: action.friend.id} ]}
    case 'REMOVE_FRIEND':
      let notFriend = state.friends.filter((friend) => action.id == friend.id)
      let removeFriendIndex = state.friends.indexOf(notFriend)
      return {friends: [...state.friends.slice(0, removeFriendIndex - 1),
                        ...state.friends.slice(removeFriendIndex, state.friends.length)]}
    default:
      return state;
  }
}
