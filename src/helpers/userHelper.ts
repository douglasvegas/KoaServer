const User = require('../models/User');
/**
 * 查找所有用户
 */
export const  findAllUsers = async () => {
  let res: any[] = [];
  const query = User.find({name: 'test'});
  await query.exec((err: Error, users: any[]) => {
  if (users.length > 0) {
    res = users;
  } 
});
  return res;
};
