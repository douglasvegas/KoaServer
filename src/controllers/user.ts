import UserHelper = require('../helpers/userHelper');

export const users = async (ctx: any, next: any) => {
  const data = await UserHelper.findAllUsers();
  ctx.body = {
    success: true,
    data
  };
};
